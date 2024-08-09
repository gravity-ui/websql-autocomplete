import {CursorPosition} from './autocomplete-types';
import {lineSeparatorRegex} from './cursor';

// separateQueryAndCursor helps to calculate cursor position based on the pipe symbol `|`.
//
// It adapts human-readable input to c3 readable input, making tests very readable.
// Otherwise, we'd need to manually count line and column positions ourselves, which is very inconvenient for writing tests.
export function separateQueryAndCursor(query: string): [string, CursorPosition] {
    const lines = query.split(lineSeparatorRegex);
    const cursorSymbol = '|';
    let cursorLineIndex: number | undefined;

    for (let i = 0; i < lines.length; i++) {
        if (lines[i]?.includes(cursorSymbol)) {
            cursorLineIndex = i;
            break;
        }
    }

    if (cursorLineIndex === undefined) {
        throw new Error(`Cursor not provided for query ${query}`);
    }

    const queryAtCursorLine = lines[cursorLineIndex];
    if (!queryAtCursorLine) {
        throw new Error(`Line ${cursorLineIndex} not found`);
    }

    const [queryBeforeCursor, queryAfterCursor, ...excessQueries] = query.split(cursorSymbol);
    const [beforeQueryAtCursorLine, afterQueryAtCursorLine, ...excessQueries2] =
        queryAtCursorLine.split(cursorSymbol);

    if (excessQueries.length > 0 || excessQueries2.length > 0) {
        throw new Error(`Multiple cursors not allowed, but present in query ${query}`);
    }

    if (
        queryBeforeCursor === undefined ||
        queryAfterCursor === undefined ||
        beforeQueryAtCursorLine === undefined ||
        afterQueryAtCursorLine === undefined
    ) {
        throw new Error(`Cursor not provided for query ${query}`);
    }

    return [
        queryBeforeCursor + queryAfterCursor,
        {line: cursorLineIndex + 1, column: beforeQueryAtCursorLine.length + 1},
    ];
}
