import {CharStream, CommonTokenStream} from 'antlr4ng';

import {findCursorTokenIndex} from './cursor';
import {mySqlAutocompleteData} from '../databases/mysql/mysql-autocomplete';
import {CursorPosition} from './autocomplete-types';

function getCursorIndex(query: string, cursor: CursorPosition): number | undefined {
    const inputStream = CharStream.fromString(query);
    const lexer = new mySqlAutocompleteData.Lexer(inputStream);
    const tokenStream = new CommonTokenStream(lexer);
    const parser = new mySqlAutocompleteData.Parser(tokenStream);
    parser.removeErrorListeners();
    mySqlAutocompleteData.getParseTree(parser);

    return findCursorTokenIndex(tokenStream, cursor, mySqlAutocompleteData.tokenDictionary.SPACE);
}

test('returns correct cursorTokenIndex on empty query', () => {
    const cursorTokenIndex = getCursorIndex('', {line: 1, column: 1});

    expect(cursorTokenIndex).toEqual(0);
});

test('returns correct cursorTokenIndex on start typing', () => {
    const cursorTokenIndex = getCursorIndex('S', {line: 1, column: 2});

    expect(cursorTokenIndex).toEqual(0);
});

test('returns correct cursorTokenIndex on space', () => {
    const cursorTokenIndex = getCursorIndex('SELECT ', {line: 1, column: 8});

    expect(cursorTokenIndex).toEqual(2);
});

test('returns correct cursorTokenIndex on word end', () => {
    const cursorTokenIndex = getCursorIndex('SELECT', {line: 1, column: 7});

    expect(cursorTokenIndex).toEqual(0);
});

test('returns correct cursorTokenIndex on newline', () => {
    const cursorTokenIndex = getCursorIndex('SELECT\n', {line: 2, column: 1});

    expect(cursorTokenIndex).toEqual(2);
});

test('returns correct cursorTokenIndex on big query', () => {
    const cursorTokenIndex = getCursorIndex('SELECT * FROM test_table WHERE ', {
        line: 1,
        column: 32,
    });

    expect(cursorTokenIndex).toEqual(10);
});
