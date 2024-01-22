export function getCurrentStatement(
    query: string,
    cursorIndex: number,
): {statement: string; cursorIndex: number} {
    const textBeforeCursor = query.slice(0, cursorIndex - 1);
    const textAfterCursor = query.slice(cursorIndex - 1);

    const semiColonBeforeIndex = textBeforeCursor.lastIndexOf(';');
    const semiColonAfterIndex = textAfterCursor.indexOf(';');

    const statementStartIndex = semiColonBeforeIndex > -1 ? semiColonBeforeIndex + 1 : 0;
    const statementEndIndex =
        semiColonAfterIndex > -1 ? semiColonAfterIndex + textBeforeCursor.length : query.length;

    const statement = query.slice(statementStartIndex, statementEndIndex);
    const newCursorIndex = cursorIndex - statementStartIndex;

    return {statement, cursorIndex: newCursorIndex};
}
