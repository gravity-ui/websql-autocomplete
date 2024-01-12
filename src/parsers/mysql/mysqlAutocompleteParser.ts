import {
    CharStreams,
    CommonTokenStream,
    TokenStream,
    ANTLRErrorListener,
    Token,
    ATNSimulator,
    Recognizer,
} from 'antlr4ng';
import * as c3 from 'antlr4-c3';

import {MySqlLexer} from './generated/MySqlLexer.js';
import {MySqlParser} from './generated/MySqlParser.js';
// import {MySqlParserVisitor} from './generated/MySqlParserVisitor.js';

interface CursorPosition {
    line: number;
    column: number;
}

interface TokenPosition {
    startLine: number;
    startColumn: number;
    endLine: number;
    endColumn: number;
}

interface ParserSyntaxError extends TokenPosition {
    message: string;
}

interface KeywordSuggestion {
    value: string;
}

// class Visitor extends MySqlParserVisitor<{}> {
//     constructor() {
//         super();
//     }

//     visitCreateDatabase = (a) => {
//         return {};
//     };
// }

const possibleIdentifierPrefix = /[\w]$/;
const lineSeparator = /\n|\r|\r\n/g;

function getTokenPosition(token: Token): TokenPosition {
    const startColumn = token.column;
    const endColumn = token.column + (token.text?.length || 0);
    const startLine = token.line;
    const endLine =
        token.type !== MySqlLexer.SPACE || !token.text
            ? startLine
            : startLine + (token.text.match(lineSeparator)?.length || 0);

    return {startColumn, startLine, endColumn, endLine};
}

function findCursorTokenIndex(
    tokenStream: TokenStream,
    cursor: CursorPosition,
): number | undefined {
    // Cursor position is 1-based, while token's charPositionInLine is 0-based
    const cursorCol = cursor.column - 1;

    for (let i = 0; i < tokenStream.size; i++) {
        const token = tokenStream.get(i);
        const {startColumn, startLine, endColumn, endLine} = getTokenPosition(token);

        // endColumn makes sense only if startLine === endLine
        if (endLine > cursor.line || (startLine === cursor.line && endColumn > cursorCol)) {
            if (
                i > 0 &&
                startLine === cursor.line &&
                startColumn === cursorCol &&
                // If previous token is an identifier (i.e. word, not a symbol),
                // then we want to return previous token index
                possibleIdentifierPrefix.test(tokenStream.get(i - 1).text || '')
            ) {
                return i - 1;
            } else if (tokenStream.get(i).type === MySqlLexer.SPACE) {
                return i + 1;
            }
            return i;
        }
    }

    return undefined;
}

class MySqlErrorListener implements ANTLRErrorListener {
    errors: ParserSyntaxError[];

    constructor() {
        this.errors = [];
    }

    syntaxError<S extends Token, T extends ATNSimulator>(
        _recognizer: Recognizer<T>,
        token: S | null,
        startLine: number,
        startColumn: number,
        message: string,
    ) {
        if (token) {
            const tokenPosition = getTokenPosition(token);
            this.errors.push({message, ...tokenPosition});
        } else {
            this.errors.push({
                message,
                startLine,
                startColumn,
                endLine: startLine,
                endColumn: startColumn,
            });
        }
    }

    reportAmbiguity() {}

    reportAttemptingFullContext() {}

    reportContextSensitivity() {}
}

export function parseMySqlQueryWithoutCursor(query: string): {errors: ParserSyntaxError[]} {
    const inputStream = CharStreams.fromString(query);
    const lexer = new MySqlLexer(inputStream);
    const tokenStream = new CommonTokenStream(lexer);
    const parser = new MySqlParser(tokenStream);
    const errorListener = new MySqlErrorListener();

    parser.removeErrorListeners();
    parser.addErrorListener(errorListener);
    parser.root();

    return {errors: errorListener.errors};
}

export function parseMySqlQuery(
    query: string,
    cursor: CursorPosition,
): {errors: ParserSyntaxError[]; suggestKeywords: KeywordSuggestion[]} {
    const inputStream = CharStreams.fromString(query);
    const lexer = new MySqlLexer(inputStream);
    const tokenStream = new CommonTokenStream(lexer);
    const parser = new MySqlParser(tokenStream);
    const errorListener = new MySqlErrorListener();

    parser.removeErrorListeners();
    parser.addErrorListener(errorListener);
    parser.root();

    const core = new c3.CodeCompletionCore(parser);
    core.preferredRules = new Set([MySqlParser.RULE_tableName]);
    const cursorPosition = findCursorTokenIndex(tokenStream, cursor);
    const suggestKeywords: KeywordSuggestion[] = [];

    if (cursorPosition !== undefined) {
        const candidates = core.collectCandidates(cursorPosition);
        candidates.tokens.forEach((_, k) =>
            suggestKeywords.push({value: parser.vocabulary.getSymbolicName(k) || ''}),
        );
    }

    return {errors: errorListener.errors, suggestKeywords};
}
