import {parseMsSqlQueryWithCursor, parseMsSqlQueryWithoutCursor} from '../../index.js';
import {KeywordSuggestion, TableOrViewSuggestion} from '../../../../shared/autocomplete-types.js';

test('should suggest properly after DROP', () => {
    const autocompleteResult = parseMsSqlQueryWithCursor('DROP |');

    expect(autocompleteResult.suggestKeywords).toEqual(
        expect.arrayContaining([
            {value: 'TABLE'},
            {value: 'VIEW'},
            {value: 'INDEX'},
            {value: 'TRIGGER'},
            {value: 'PROCEDURE'},
            {value: 'FUNCTION'},
            {value: 'DATABASE'},
            {value: 'SCHEMA'},
        ]),
    );
});

test.each(['DROP TABLE |', 'DROP TABLE IF EXISTS |', 'DROP TABLE test_table, |'])(
    'should suggest tables after %s',
    (query) => {
        const autocompleteResult = parseMsSqlQueryWithCursor(query);

        expect(autocompleteResult.suggestViewsOrTables).toEqual(TableOrViewSuggestion.TABLES);
    },
);

test.each(['DROP VIEW |', 'DROP VIEW IF EXISTS |', 'DROP VIEW test_schema.|'])(
    'should suggest views after %s',
    (query) => {
        const autocompleteResult = parseMsSqlQueryWithCursor(query);

        expect(autocompleteResult.suggestViewsOrTables).toEqual(TableOrViewSuggestion.VIEWS);
    },
);

test('should suggest indexes after DROP INDEX', () => {
    const autocompleteResult = parseMsSqlQueryWithCursor('DROP INDEX |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'IF'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
    expect(autocompleteResult.suggestIndexes).toEqual(true);
});

test('should suggest tables and views after DROP INDEX ON', () => {
    const autocompleteResult = parseMsSqlQueryWithCursor('DROP INDEX test_index ON |');

    expect(autocompleteResult.suggestViewsOrTables).toEqual(TableOrViewSuggestion.ALL);
});

test.each([
    'DROP TRIGGER |',
    'DROP TRIGGER IF EXISTS |',
    'DROP TRIGGER test_schema.|',
    'DROP TRIGGER test_trigger, |',
])('should suggest triggers after %s', (query) => {
    const autocompleteResult = parseMsSqlQueryWithCursor(query);

    expect(autocompleteResult.suggestTriggers).toEqual(true);
});

test.each(['DROP DATABASE |', 'DROP DATABASE IF EXISTS |'])(
    'should suggest databases after %s',
    (query) => {
        const autocompleteResult = parseMsSqlQueryWithCursor(query);

        expect(autocompleteResult.suggestDatabases).toEqual(true);
    },
);

test.each([
    'DROP TABLE IF EXISTS test_schema.test_table, test_table_2;',
    'DROP VIEW IF EXISTS test_view;',
    'DROP INDEX test_index ON test_table;',
    'DROP TRIGGER IF EXISTS test_trigger;',
    'DROP DATABASE IF EXISTS test_database;',
    'DROP SCHEMA IF EXISTS test_schema;',
])('should not report errors on %s', (query) => {
    const autocompleteResult = parseMsSqlQueryWithoutCursor(query);

    expect(autocompleteResult.errors).toHaveLength(0);
});
