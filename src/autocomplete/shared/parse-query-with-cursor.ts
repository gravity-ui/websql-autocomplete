import {CursorPosition} from './autocomplete-types';
import {lineSeparatorRegex} from './cursor';

// separateQueryAndCursor helps to calculate cursor position based on the pipe symbol `|`.
//
// It adapts human-readable input to c3 readable input, making tests very readable.
// Otherwise, we'd need to manually count line and column positions ourselves, which is very inconvenient for writing tests.
export function separateQueryAndCursor(query: string): [string, CursorPosition] {
    const lines = query.split(lineSeparatorRegex);
    const cursorSymbol = '|';
    let currentLineIndex: number | undefined;

    for (let i = 0; i < lines.length; i++) {
        if (lines[i]?.includes(cursorSymbol)) {
            currentLineIndex = i;
            break;
        }
    }

    if (currentLineIndex === undefined) {
        throw new Error(`Cursor not provided for query ${query}`);
    }

    const subQuery = lines[currentLineIndex];
    if (!subQuery) {
        throw new Error(`Line ${currentLineIndex} not found`);
    }

    const [queryBeforeCursor, queryAfterCursor, ...excessQueries] = query.split(cursorSymbol);
    const [subQueryBeforeCursor, subQueryAfterCursor, ...excessSubQueries] =
        subQuery.split(cursorSymbol);

    if (excessQueries.length > 0 || excessSubQueries.length > 0) {
        throw new Error(`Multiple cursors not allowed, but present in query ${query}`);
    }

    if (
        queryBeforeCursor === undefined ||
        queryAfterCursor === undefined ||
        subQueryBeforeCursor === undefined ||
        subQueryAfterCursor === undefined
    ) {
        throw new Error(`Cursor not provided for query ${query}`);
    }

    return [
        queryBeforeCursor + queryAfterCursor,
        {line: currentLineIndex + 1, column: subQueryBeforeCursor.length + 1},
    ];
}
