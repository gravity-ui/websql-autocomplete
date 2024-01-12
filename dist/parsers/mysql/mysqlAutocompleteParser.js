import { CharStreams, CommonTokenStream } from 'antlr4ng';
import * as c3 from 'antlr4-c3';
import { MySqlLexer } from './generated/MySqlLexer.js';
import { MySqlParser } from './generated/MySqlParser.js';
const possibleIdentifierPrefix = /[\w]$/;
const lineSeparator = /\n|\r|\r\n/g;
function findCursorTokenIndex(tokenStream, cursor) {
    var _a, _b;
    const cursorCol = cursor.column - 1;
    for (let i = 0; i < tokenStream.size; i++) {
        const t = tokenStream.get(i);
        const tokenStartCol = t.column;
        const tokenEndCol = t.column + (((_a = t.text) === null || _a === void 0 ? void 0 : _a.length) || 0);
        const tokenStartLine = t.line;
        const tokenEndLine = t.type !== MySqlLexer.SPACE || !t.text
            ? tokenStartLine
            : tokenStartLine + (((_b = t.text.match(lineSeparator)) === null || _b === void 0 ? void 0 : _b.length) || 0);
        if (tokenEndLine > cursor.line ||
            (tokenStartLine === cursor.line && tokenEndCol > cursorCol)) {
            if (i > 0 &&
                tokenStartLine === cursor.line &&
                tokenStartCol === cursorCol &&
                possibleIdentifierPrefix.test(tokenStream.get(i - 1).text || '')) {
                return i - 1;
            }
            else if (tokenStream.get(i).type === MySqlLexer.SPACE) {
                return i + 1;
            }
            return i;
        }
    }
    return undefined;
}
class MySqlErrorListener {
    constructor() {
        this.errors = [];
    }
    syntaxError(_recognizer, _offendingSymbol, startLine, startColumn, message) {
        this.errors.push({ message, startLine, startColumn });
    }
    reportAmbiguity() { }
    reportAttemptingFullContext() { }
    reportContextSensitivity() { }
}
export function parseMySqlQueryWithoutCursor(query) {
    const inputStream = CharStreams.fromString(query);
    const lexer = new MySqlLexer(inputStream);
    const tokenStream = new CommonTokenStream(lexer);
    const parser = new MySqlParser(tokenStream);
    const errorListener = new MySqlErrorListener();
    parser.removeErrorListeners();
    parser.addErrorListener(errorListener);
    parser.root();
    return { errors: errorListener.errors };
}
export function parseMySqlQuery(query, cursor) {
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
    const suggestKeywords = [];
    if (cursorPosition !== undefined) {
        const candidates = core.collectCandidates(cursorPosition);
        candidates.tokens.forEach((_, k) => suggestKeywords.push({ value: parser.vocabulary.getSymbolicName(k) || '' }));
    }
    return { errors: errorListener.errors, suggestKeywords };
}
//# sourceMappingURL=mysqlAutocompleteParser.js.map