import {expect, test} from '@jest/globals';

import {DatabasesSuggestion, TablesSuggestion, parseMySqlQuery} from '../../../../index';

test('should suggest databases or tables', () => {
    const parseResult = parseMySqlQuery('SELECT * FROM ', '');

    expect(parseResult.errors).toBeUndefined();

    const tablesSuggestion: TablesSuggestion = {};
    expect(parseResult.suggestTables).toEqual(tablesSuggestion);

    const databasesSuggestion: DatabasesSuggestion = {
        appendDot: true,
    };
    expect(parseResult.suggestDatabases).toEqual(databasesSuggestion);
});

test('should suggest databases or tables', () => {
    const parseResult = parseMySqlQuery('SELECT * FROM test_tab', '');

    expect(parseResult.errors).toBeUndefined();

    const tablesSuggestion: TablesSuggestion = {};
    expect(parseResult.suggestTables).toEqual(tablesSuggestion);

    const databasesSuggestion: DatabasesSuggestion = {
        appendDot: true,
    };
    expect(parseResult.suggestDatabases).toEqual(databasesSuggestion);
});

test('should suggest databases or tables', () => {
    const parseResult = parseMySqlQuery('SELECT * FROM `test_tab', '');

    expect(parseResult.errors).toBeUndefined();

    const tablesSuggestion: TablesSuggestion = {
        appendBacktick: true,
    };
    expect(parseResult.suggestTables).toEqual(tablesSuggestion);

    const databasesSuggestion: DatabasesSuggestion = {
        appendDot: true,
        appendBacktick: true,
    };
    expect(parseResult.suggestDatabases).toEqual(databasesSuggestion);
});

test('should suggest databases or tables', () => {
    const parseResult = parseMySqlQuery('SELECT * FROM `test_tab', '');

    expect(parseResult.errors).toBeUndefined();

    const tablesSuggestion: TablesSuggestion = {
        appendBacktick: true,
    };
    expect(parseResult.suggestTables).toEqual(tablesSuggestion);

    const databasesSuggestion: DatabasesSuggestion = {
        appendDot: true,
        appendBacktick: true,
    };
    expect(parseResult.suggestDatabases).toEqual(databasesSuggestion);
});

test('should suggest tables', () => {
    const parseResult = parseMySqlQuery('SELECT * FROM test_database.', '');

    expect(parseResult.errors).toBeUndefined();

    const tablesSuggestion: TablesSuggestion = {
        identifierChain: [
            {
                name: 'test_database',
            },
        ],
    };
    expect(parseResult.suggestTables).toEqual(tablesSuggestion);

    expect(parseResult.suggestDatabases).toEqual(undefined);
});

test('should suggest tables', () => {
    const parseResult = parseMySqlQuery('SELECT * FROM `test_database`.', '');

    expect(parseResult.errors).toBeUndefined();

    const tablesSuggestion: TablesSuggestion = {
        identifierChain: [
            {
                name: 'test_database',
            },
        ],
    };
    expect(parseResult.suggestTables).toEqual(tablesSuggestion);

    expect(parseResult.suggestDatabases).toEqual(undefined);
});
