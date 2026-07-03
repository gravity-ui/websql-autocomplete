import {CharStream, Lexer, Token, TokenFactory, TokenSource} from 'antlr4ng';

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
 * into a single synthetic token. The token masquerades as an existing native
 * token type (`masqueradeTokenType`), so the unchanged grammar accepts it
 * wherever that type is valid.
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
        private readonly masqueradeTokenType: number,
    ) {}

    nextToken(): Token {
        const input = this.lexer.inputStream;

        // Peek at the token boundary. `{{` never legally starts a native SQL token,
        // so intercepting it here cannot shadow real grammar constructs.
        if (input.LA(1) === OPENING_BRACE && input.LA(2) === OPENING_BRACE) {
            return this.readPlaceholder(input);
        }

        return this.lexer.nextToken();
    }

    private readPlaceholder(input: CharStream): Token {
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
            this.masqueradeTokenType,
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
