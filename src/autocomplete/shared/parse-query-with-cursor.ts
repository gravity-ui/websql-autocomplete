import {CursorPosition} from './autocomplete-types';
import {lineSeparatorRegex} from './cursor';

// separateQueryAndCursor helps to calculate cursor position based on the pipe symbol `|`.
//
// It adapts human-readable input to c3 readable input, making tests very readable.
// Otherwise, we'd need to manually count line and column positions ourselves, which is very inconvenient for writing tests.
export function separateQueryAndCursor(query: string): [string, CursorPosition] {
    if (lineSeparatorRegex.test(query)) {
        throw new Error(`Newline characters not allowed, but present in query ${query}`);
    }

    const cursorSymbol = '|';
    const [queryBeforeCursor, queryAfterCursor, ...excessQueries] = query.split(cursorSymbol);

    if (excessQueries.length > 0) {
        throw new Error(`Multiple cursors not allowed, but present in query ${query}`);
    }

    if (queryBeforeCursor === undefined || queryAfterCursor === undefined) {
        throw new Error(`Cursor not provided for query ${query}`);
    }

    return [queryBeforeCursor + queryAfterCursor, {line: 1, column: queryBeforeCursor.length + 1}];
}
