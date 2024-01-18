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

const spaceSymbols = '(\\s|\r\n|\n|\r)+';
export const spaceSymbolsRegex = new RegExp(`${spaceSymbols}`);
export const explainRegex = new RegExp(`^(${spaceSymbols})?explain${spaceSymbols}$`);

const whereRegex = new RegExp(`${spaceSymbols}where${spaceSymbols}`);
const setRegex = new RegExp(`${spaceSymbols}set${spaceSymbols}`);
const insertRegex = new RegExp(`^(${spaceSymbols})?insert${spaceSymbols}.+\\(`);
const onRegex = new RegExp(`${spaceSymbols}on${spaceSymbols}`);
const fromRegex = new RegExp(
    `${spaceSymbols}from${spaceSymbols}([a-z0-9.]+)(${spaceSymbols}|$|\\))`,
);

export function modifyInvalidQuery(query: string, cursorIndex: number): string {
    const queryBeforeCursor = query.slice(0, cursorIndex).toLowerCase();
    const queryAfterCursor = query.slice(cursorIndex).toLowerCase();

    const whereMatch = queryBeforeCursor.match(whereRegex);
    if (whereMatch && whereMatch.index !== undefined) {
        return query.slice(0, whereMatch.index);
    }

    const setMatch = queryBeforeCursor.match(setRegex);
    if (setMatch && setMatch.index !== undefined) {
        return query.slice(0, setMatch.index) + ' SET a = 2';
    }

    const insertMatch = queryBeforeCursor.match(insertRegex);
    if (insertMatch && insertMatch.index !== undefined) {
        return insertMatch[0] + 'a) VALUES(1)';
    }

    const onMatch = queryBeforeCursor.match(onRegex);
    if (onMatch && onMatch.index !== undefined) {
        return queryBeforeCursor + ' a = b';
    }

    const fromMatch = queryAfterCursor.match(fromRegex);
    if (fromMatch && fromMatch.index !== undefined) {
        const tableName = fromMatch[3];
        return `SELECT * FROM ${tableName}`;
    }

    return query;
}
