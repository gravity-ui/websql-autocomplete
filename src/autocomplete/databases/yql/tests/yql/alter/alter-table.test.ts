import {parseYqlQueryWithoutCursor} from '../../../../../autocomplete';
import {
    ColumnSuggestion,
    KeywordSuggestion,
    TableIndexSuggestion,
} from '../../../../../autocomplete-types';
import {parseYqlQueryWithCursor} from '../../../../../shared/parse-query-with-cursor';

test('should suggest keywords after table name', () => {
    const autocompleteResult = parseYqlQueryWithCursor('ALTER TABLE test_table |');
    const keywords: KeywordSuggestion[] = [
        {value: 'WITH'},
        {value: 'ADD'},
        {value: 'DROP'},
        {value: 'ALTER'},
        {value: 'SET'},
        {value: 'RESET'},
        {value: 'RENAME'},
    ];

    expect(autocompleteResult.suggestKeywords).toEqual(keywords);
});
test('should suggest keywords after ALTER', () => {
    const autocompleteResult = parseYqlQueryWithCursor('ALTER TABLE test_table ALTER |');
    const keywords: KeywordSuggestion[] = [
        {value: 'CHANGEFEED'},
        {value: 'FAMILY'},
        {value: 'COLUMN'},
    ];

    expect(autocompleteResult.suggestKeywords).toEqual(keywords);
});

test('should suggest table name after ALTER COLUMN', () => {
    const autocompleteResult = parseYqlQueryWithCursor('ALTER TABLE test_table ALTER COLUMN |');
    const columnSuggestion: ColumnSuggestion = {tables: [{name: 'test_table'}]};

    expect(autocompleteResult.suggestColumns).toEqual(columnSuggestion);
});

test('should suggest table name after ALTER COLUMN between statements', () => {
    const autocompleteResult = parseYqlQueryWithCursor(
        'ALTER TABLE before_table DROP COLUMN id; ALTER TABLE test_table ALTER COLUMN | ; ALTER TABLE after_table DROP COLUMN id;',
    );
    const columnSuggestion: ColumnSuggestion = {tables: [{name: 'test_table'}]};

    expect(autocompleteResult.suggestColumns).toEqual(columnSuggestion);
});

test('should suggest SET after column name', () => {
    const autocompleteResult = parseYqlQueryWithCursor('ALTER TABLE test_table ALTER COLUMN id |');
    const keywords: KeywordSuggestion[] = [{value: 'SET'}];

    expect(autocompleteResult.suggestKeywords).toEqual(keywords);
});

test('should not suggest after FAMILY', () => {
    const autocompleteResult = parseYqlQueryWithCursor(
        'ALTER TABLE test_table ALTER COLUMN id SET FAMILY |',
    );
    const keywords: KeywordSuggestion[] = [];
    expect(autocompleteResult.suggestKeywords).toEqual(keywords);
    expect(autocompleteResult.suggestColumns).toBeFalsy();
});
test('should not report errors', () => {
    const autocompleteResult = parseYqlQueryWithoutCursor(
        'ALTER TABLE test_table ALTER COLUMN id SET FAMILY test;',
    );

    expect(autocompleteResult.errors).toHaveLength(0);
});
test('should suggest keywords after ADD', () => {
    const autocompleteResult = parseYqlQueryWithCursor('ALTER TABLE test_table ADD |');
    const keywords: KeywordSuggestion[] = [
        {value: 'CHANGEFEED'},
        {value: 'INDEX'},
        {value: 'FAMILY'},
        {value: 'COLUMN'},
    ];

    expect(autocompleteResult.suggestKeywords).toEqual(keywords);
});

test('should suggest keywords after ADD COLUMN', () => {
    const autocompleteResult = parseYqlQueryWithCursor('ALTER TABLE test_table ADD COLUMN |');
    const keywords: KeywordSuggestion[] = [];

    expect(autocompleteResult.suggestKeywords).toEqual(keywords);
    expect(autocompleteResult.suggestColumns).toBeFalsy();
});

test('should suggest types after column name', () => {
    const autocompleteResult = parseYqlQueryWithCursor('ALTER TABLE test_table ADD COLUMN test |');

    const keywords: KeywordSuggestion[] = [
        {value: 'OPTIONAL'},
        {value: 'TUPLE'},
        {value: 'STRUCT'},
        {value: 'VARIANT'},
        {value: 'LIST'},
        {value: 'FLOW'},
        {value: 'DICT'},
        {value: 'SET'},
        {value: 'ENUM'},
        {value: 'RESOURCE'},
        {value: 'TAGGED'},
        {value: 'CALLABLE'},
        {value: 'DECIMAL'},
    ];

    expect(autocompleteResult.suggestKeywords).toEqual(keywords);
    expect(autocompleteResult.suggestSimpleTypes).toBeTruthy();
});
test('should suggest keywords after column type', () => {
    const autocompleteResult = parseYqlQueryWithCursor(
        'ALTER TABLE test_table ADD COLUMN test test_type |',
    );
    const keywords: KeywordSuggestion[] = [
        {value: 'NOT'},
        {value: 'NULL'},
        {value: 'DEFAULT'},
        {value: 'FAMILY'},
    ];

    expect(autocompleteResult.suggestKeywords).toEqual(keywords);
});
test('should suggest keywords after DROP ', () => {
    const autocompleteResult = parseYqlQueryWithCursor('ALTER TABLE test_table DROP |');
    const keywords: KeywordSuggestion[] = [
        {value: 'CHANGEFEED'},
        {value: 'INDEX'},
        {value: 'COLUMN'},
    ];
    const columnSuggestion: ColumnSuggestion = {tables: [{name: 'test_table'}]};

    expect(autocompleteResult.suggestColumns).toEqual(columnSuggestion);
    expect(autocompleteResult.suggestKeywords).toEqual(keywords);
});
test('should suggest keywords after INDEX ', () => {
    const autocompleteResult = parseYqlQueryWithCursor('ALTER TABLE test_table DROP INDEX |');
    const keywords: KeywordSuggestion[] = [];
    const indexesSuggestion: TableIndexSuggestion = {tables: [{name: 'test_table'}]};
    expect(autocompleteResult.suggestColumns).toBeFalsy();
    expect(autocompleteResult.suggestTableIndexes).toEqual(indexesSuggestion);
    expect(autocompleteResult.suggestKeywords).toEqual(keywords);
});
test('should suggest table name after DROP COLUMN', () => {
    const autocompleteResult = parseYqlQueryWithCursor('ALTER TABLE test_table DROP COLUMN |');
    const columnSuggestion: ColumnSuggestion = {tables: [{name: 'test_table'}]};

    expect(autocompleteResult.suggestColumns).toEqual(columnSuggestion);
});

test('should suggest keywords after RENAME', () => {
    const autocompleteResult = parseYqlQueryWithCursor('ALTER TABLE test_table RENAME |');
    const keywords: KeywordSuggestion[] = [{value: 'INDEX'}, {value: 'TO'}];

    expect(autocompleteResult.suggestKeywords).toEqual(keywords);
});

test('should suggest after RENAME TO', () => {
    const autocompleteResult = parseYqlQueryWithCursor('ALTER TABLE test_table RENAME TO |');
    const keywords: KeywordSuggestion[] = [];

    expect(autocompleteResult.suggestKeywords).toEqual(keywords);
    expect(autocompleteResult.suggestColumns).toBeFalsy();
});
