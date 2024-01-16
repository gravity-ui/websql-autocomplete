const possibleIdentifierPrefixRegex = /[\w]$/;
const lineSeparatorRegex = /\n|\r|\r\n/g;
export function getTokenPosition(token, whitespaceToken) {
    var _a, _b;
    const startColumn = token.column;
    const endColumn = token.column + (((_a = token.text) === null || _a === void 0 ? void 0 : _a.length) || 0);
    const startLine = token.line;
    const endLine = token.type !== whitespaceToken || !token.text
        ? startLine
        : startLine + (((_b = token.text.match(lineSeparatorRegex)) === null || _b === void 0 ? void 0 : _b.length) || 0);
    return { startColumn, startLine, endColumn, endLine };
}
export function findCursorTokenIndex(tokenStream, cursor, whitespaceToken) {
    // Cursor position is 1-based, while token's charPositionInLine is 0-based
    const cursorCol = cursor.column - 1;
    for (let i = 0; i < tokenStream.size; i++) {
        const token = tokenStream.get(i);
        const { startColumn, startLine, endColumn, endLine } = getTokenPosition(token, whitespaceToken);
        // endColumn makes sense only if startLine === endLine
        if (endLine > cursor.line || (startLine === cursor.line && endColumn > cursorCol)) {
            if (i > 0 &&
                startLine === cursor.line &&
                startColumn === cursorCol &&
                // If previous token is an identifier (i.e. word, not a symbol),
                // then we want to return previous token index
                possibleIdentifierPrefixRegex.test(tokenStream.get(i - 1).text || '')) {
                return i - 1;
            }
            else if (tokenStream.get(i).type === whitespaceToken) {
                return i + 1;
            }
            return i;
        }
    }
    return undefined;
}
