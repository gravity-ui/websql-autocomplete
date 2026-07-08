import {CharStream, Lexer, Token, TokenFactory, TokenSource} from 'antlr4ng';

import {CursorPosition} from './autocomplete-types';

const OPENING_BRACE = 0x7b; // {
const CLOSING_BRACE = 0x7d; // }

// One native token type a placeholder may masquerade as, paired with a literal of
// that type (e.g. `StringConstant`/`"'x'"`, `Integral`/`'1'`). The `filler` has two
// roles:
// - At each `{{` the placeholder collapses into this token type when the grammar
//   expects it at that position.
// - The `filler` stands in for an *already-substituted* placeholder when a later
//   position is re-inspected, so it only has to be a syntactically valid literal of
//   that type. Its width need not match the original `{{ ... }}` — the cursor is
//   recomputed from the masked text, so coordinates cannot drift.
export interface MasqueradeToken {
    tokenType: number;
    filler: string;
}

// The ordered list of token types a placeholder may masquerade as. At each `{{` the
// placeholder collapses into the first entry whose token type the grammar expects at
// that position, so the order is the precedence — list the string type before the
// numeric one to prefer a string wherever both fit. Precedence never affects parse
// validity: any type the grammar expects there is by definition valid there. (Order
// matters because it must not hinge on token-id magnitude, which differs per dialect.)
export type MasqueradeFillers = MasqueradeToken[];

// The 1-based line/column just past the end of `text` — i.e. where the next token
// (the `{{`) begins. Derived from the (masked) prefix itself, so it stays correct
// no matter how wide the substituted fillers are.
function endCursorOf(text: string): CursorPosition {
    const newlineCount = (text.match(/\n/g) ?? []).length;
    // Chars after the last newline, plus one for the 1-based column. `lastIndexOf`
    // returns -1 when there is no newline, which gives `text.length + 1` — correct
    // for a single-line prefix.
    return {line: newlineCount + 1, column: text.length - text.lastIndexOf('\n')};
}

export interface PlaceholderInfo {
    /** The name written between the braces, e.g. `user_id` for `{{ user_id }}`. */
    name: string;
    /** Inclusive char offset of the first `{`. */
    start: number;
    /** Inclusive char offset of the last `}`. */
    stop: number;
    /** The native token type this placeholder was collapsed into. */
    masqueradeTokenType: number;
}

/**
 * Wraps a generated ANTLR lexer and collapses `{{ ... }}` template placeholders
 * into a single synthetic token. The token masquerades as one of several native
 * token types (the entries of `masqueradeTokens`) — at each `{{` it picks the first
 * one the grammar actually expects at that position, so the unchanged grammar
 * accepts the placeholder wherever any of those types is valid.
 *
 * Key properties:
 * - Original character offsets are preserved (the synthetic token spans the whole
 *   `{{ ... }}`), so syntax-error positions and highlighting stay accurate.
 * - Placeholders are only recognized at token boundaries. Because the base lexer
 *   consumes a string literal or a comment as a single token, any `{{ ... }}`
 *   inside a string/comment is never seen here and is left untouched.
 *
 * Produced synthetic tokens are recorded in {@link placeholders} so downstream
 * consumers (tree walkers, extractors) can recover the original placeholder name.
 */
export class PlaceholderTokenSource implements TokenSource {
    readonly placeholders = new Map<Token, PlaceholderInfo>();

    constructor(
        private readonly lexer: Lexer,
        // Ordered token types the placeholder may stand in for, each paired with a
        // literal of that type. At each `{{` the placeholder collapses into the first
        // one the grammar expects at that position; if none is expected it is left alone.
        private readonly masqueradeTokens: MasqueradeFillers,
        // Reports the token types the grammar expects at a given position, used to
        // choose the masquerade type from `masqueradeTokens`.
        private readonly getExpectedTokens: (query: string, cursor: CursorPosition) => number[],
    ) {}

    nextToken(): Token {
        const input = this.lexer.inputStream;

        // Peek at the token boundary. `{{` never legally starts a native SQL token,
        // so intercepting it here cannot shadow real grammar constructs.
        if (input.LA(1) === OPENING_BRACE && input.LA(2) === OPENING_BRACE) {
            const masqueradeTokenType = this.resolveMasqueradeTokenType();

            // Collapse the placeholder only when it has a valid masquerade here;
            // otherwise leave the raw braces for the base lexer to handle.
            if (masqueradeTokenType !== undefined) {
                return this.readPlaceholder(input, masqueradeTokenType);
            }
        }

        return this.lexer.nextToken();
    }

    // Picks the token type the placeholder should masquerade as at the current lexer
    // position: the first configured type the grammar expects there, or undefined
    // when none of them is valid.
    private resolveMasqueradeTokenType(): number | undefined {
        const input = this.lexer.inputStream;
        // Ask what the grammar expects at the placeholder position using only the text
        // *before* the `{{`, with the cursor at its end. Feeding the whole query would
        // let the placeholder's own content (an identifier-looking name) steer the
        // parser down a column-reference branch and hide the value tokens we look for.
        const rawPrefix = input.index > 0 ? input.getTextFromRange(0, input.index - 1) : '';
        // Any earlier `{{ ... }}` in that prefix is still raw braces here, because
        // `getExpectedTokens` re-lexes with the plain lexer (it must not recurse into
        // this token source). A permissive grammar shrugs off the stray braces, but a
        // stricter one (PostgreSQL) then loses the value position entirely. Replace
        // each already-substituted placeholder with a literal of the type it actually
        // masqueraded as, so the prefix reads just like the real substituted stream.
        const maskedPrefix = this.maskEarlierPlaceholders(rawPrefix);

        const expectedTokens = this.getExpectedTokens(maskedPrefix, endCursorOf(maskedPrefix));

        for (const {tokenType} of this.masqueradeTokens) {
            if (expectedTokens.includes(tokenType)) {
                return tokenType;
            }
        }

        return undefined;
    }

    // Replaces every already-substituted placeholder span inside `prefix` with a
    // literal of the type it masqueraded as, so earlier placeholders no longer read
    // as stray `{{ ... }}` braces when the prefix is re-lexed to find expected tokens.
    private maskEarlierPlaceholders(prefix: string): string {
        if (this.placeholders.size === 0) {
            return prefix;
        }

        const spans = Array.from(this.placeholders.values()).sort((a, b) => a.start - b.start);

        let result = '';
        let cursor = 0;
        for (const {start, stop, masqueradeTokenType} of spans) {
            // Spans are original-text offsets; the prefix starts at offset 0, so they
            // line up. A span reaching the prefix end is the placeholder we are about
            // to resolve, not an earlier one — stop before it.
            if (start >= prefix.length) {
                break;
            }
            const end = Math.min(stop, prefix.length - 1);
            const filler = this.masqueradeTokens.find(
                (token) => token.tokenType === masqueradeTokenType,
            )?.filler;
            result += prefix.slice(cursor, start) + (filler ?? prefix.slice(start, end + 1));
            cursor = end + 1;
        }
        result += prefix.slice(cursor);

        return result;
    }

    private readPlaceholder(input: CharStream, masqueradeTokenType: number): Token {
        const start = input.index;
        const line = this.lexer.line;
        const column = this.lexer.column;

        input.consume(); // first {
        input.consume(); // second {

        while (
            input.LA(1) !== Token.EOF &&
            !(input.LA(1) === CLOSING_BRACE && input.LA(2) === CLOSING_BRACE)
        ) {
            input.consume();
        }

        // Last char of the name (before the closing braces, or before EOF if unterminated).
        const nameStop = input.index - 1;

        if (input.LA(1) === CLOSING_BRACE && input.LA(2) === CLOSING_BRACE) {
            input.consume(); // first }
            input.consume(); // second }
        }

        const stop = input.index - 1;
        const text = input.getTextFromRange(start, stop);
        const name = input.getTextFromRange(start + 2, nameStop).trim();

        const token = this.lexer.tokenFactory.create(
            [this, input],
            masqueradeTokenType,
            text,
            Token.DEFAULT_CHANNEL,
            start,
            stop,
            line,
            column,
        );

        this.placeholders.set(token, {name, start, stop, masqueradeTokenType});

        // The base lexer tracks line/column internally; since we consumed characters
        // without going through it, keep its position in sync for subsequent tokens.
        this.advanceLexerPosition(text, line, column);

        return token;
    }

    private advanceLexerPosition(text: string, line: number, column: number): void {
        let newLine = line;
        let newColumn = column;

        for (const character of text) {
            if (character === '\n') {
                newLine += 1;
                newColumn = 0;
            } else {
                newColumn += 1;
            }
        }

        this.lexer.line = newLine;
        this.lexer.column = newColumn;
    }

    get line(): number {
        return this.lexer.line;
    }

    get column(): number {
        return this.lexer.column;
    }

    get inputStream(): CharStream {
        return this.lexer.inputStream;
    }

    get sourceName(): string {
        return this.lexer.sourceName;
    }

    get tokenFactory(): TokenFactory<Token> {
        return this.lexer.tokenFactory;
    }

    set tokenFactory(factory: TokenFactory<Token>) {
        this.lexer.tokenFactory = factory;
    }
}
