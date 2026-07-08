import {CharStream, Lexer, Token, TokenFactory, TokenSource} from 'antlr4ng';

import {CursorPosition} from '../../../shared/autocomplete-types';

const OPENING_BRACE = 0x7b; // {
const CLOSING_BRACE = 0x7d; // }

export interface PlaceholderInfo {
    /** The name written between the braces, e.g. `user_id` for `{{ user_id }}`. */
    name: string;
    /** Inclusive char offset of the first `{`. */
    start: number;
    /** Inclusive char offset of the last `}`. */
    stop: number;
}

/**
 * Wraps a generated ANTLR lexer and collapses `{{ ... }}` template placeholders
 * into a single synthetic token. The token masquerades as one of several native
 * token types (`masqueradeTokenTypes`) — at each `{{` it picks whichever of them
 * the grammar actually expects at that position, so the unchanged grammar accepts
 * the placeholder wherever any of those types is valid.
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
        // Native token types the placeholder may stand in for (e.g. string/number
        // literals). At each `{{` the placeholder collapses into whichever of these
        // the grammar expects at that position; if none is expected it is left alone.
        private readonly masqueradeTokenTypes: number[],
        // Reports the token types the grammar expects at a given position, used to
        // choose the masquerade type from `masqueradeTokenTypes`.
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
        const queryBeforePlaceholder = input.index > 0 ? input.getTextFromRange(0, input.index - 1) : '';

        const expectedTokens = this.getExpectedTokens(queryBeforePlaceholder, {
            // The lexer's line is 1-based and its column is 0-based; cursor column is 1-based.
            line: this.lexer.line,
            column: this.lexer.column + 1,
        });

        return this.masqueradeTokenTypes.find((tokenType) => expectedTokens.includes(tokenType));
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

        this.placeholders.set(token, {name, start, stop});

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
