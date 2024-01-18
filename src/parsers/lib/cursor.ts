import {TokenStream, Token} from 'antlr4ng';

export interface CursorPosition {
    line: number;
    column: number;
}

export interface TokenPosition {
    startLine: number;
    startColumn: number;
    endLine: number;
    endColumn: number;
}

const possibleIdentifierPrefixRegex = /[\w]$/;
const lineSeparatorRegex = /\r\n|\n|\r/g;

export function getTokenPosition(token: Token, whitespaceToken: number): TokenPosition {
    const startColumn = token.column;
    const endColumn = token.column + (token.text?.length || 0);
    const startLine = token.line;
    const endLine =
        token.type !== whitespaceToken || !token.text
            ? startLine
            : startLine + (token.text.match(lineSeparatorRegex)?.length || 0);

    return {startColumn, startLine, endColumn, endLine};
}

export function findCursorTokenIndex(
    tokenStream: TokenStream,
    cursor: CursorPosition,
    whitespaceToken: number,
): number | undefined {
    // Cursor position is 1-based, while token's charPositionInLine is 0-based
    const cursorCol = cursor.column - 1;

    for (let i = 0; i < tokenStream.size; i++) {
        const token = tokenStream.get(i);
        const {startColumn, startLine, endColumn, endLine} = getTokenPosition(
            token,
            whitespaceToken,
        );

        // endColumn makes sense only if startLine === endLine
        if (endLine > cursor.line || (startLine === cursor.line && endColumn > cursorCol)) {
            if (
                i > 0 &&
                startLine === cursor.line &&
                startColumn === cursorCol &&
                // If previous token is an identifier (i.e. word, not a symbol),
                // then we want to return previous token index
                possibleIdentifierPrefixRegex.test(tokenStream.get(i - 1).text || '')
            ) {
                return i - 1;
            } else if (tokenStream.get(i).type === whitespaceToken) {
                return i + 1;
            }
            return i;
        }
    }

    return undefined;
}

export function getCursorIndex(query: string, cursor: CursorPosition) {
    const lines = query.split(lineSeparatorRegex);
    const separatorMatch = query.match(lineSeparatorRegex);
    let separator = '';

    if (separatorMatch) {
        separator = separatorMatch[0];
    }

    let cursorIndex = 0;

    lines.reduce<string>((text, line, index) => {
        if (cursor.line - 1 === index) {
            if (!text.length) {
                cursorIndex = cursor.column - 1;
            } else {
                cursorIndex = text.length + cursor.column;
            }
        }

        if (index === 0) {
            return line;
        }

        return text + separator + line;
    }, '');

    return cursorIndex;
}

export function getCurrentStatement(query: string, cursorIndex: number): string {
    const textBeforeCursor = query.slice(0, cursorIndex - 1);
    const textAfterCursor = query.slice(cursorIndex - 1);

    const semiColonBeforeIndex = textBeforeCursor.lastIndexOf(';');
    const semiColonAfterIndex = textAfterCursor.indexOf(';');

    const statementStartIndex = semiColonBeforeIndex > -1 ? semiColonBeforeIndex + 1 : 0;
    const statementEndIndex =
        semiColonAfterIndex > -1 ? semiColonAfterIndex + textBeforeCursor.length : query.length;

    return query.slice(statementStartIndex, statementEndIndex);
}

const spaceSymbols = '(\\s|\r\n|\n|\r)+';
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
