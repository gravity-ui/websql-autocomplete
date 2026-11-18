import {parseMsSqlQueryWithCursor, parseMsSqlQueryWithoutCursor} from '../../index.js';
import {ColumnSuggestion, KeywordSuggestion} from '../../../../shared/autocomplete-types.js';

test.each(['CREATE VIEW |', 'CREATE OR ALTER VIEW |'])(
    'should not suggest existing views after %s',
    (query) => {
        const autocompleteResult = parseMsSqlQueryWithCursor(query);

        expect(autocompleteResult.suggestViewsOrTables).toBeUndefined();
    },
);

test('should not suggest existing views after previous ALTER statement without semicolon', () => {
    const autocompleteResult = parseMsSqlQueryWithCursor(
        'ALTER TABLE test_table ADD test_column INT\nCREATE VIEW |',
    );

    expect(autocompleteResult.suggestViewsOrTables).toBeUndefined();
});

test('should suggest properly after view name', () => {
    const autocompleteResult = parseMsSqlQueryWithCursor('CREATE VIEW test_view |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'AS'}, {value: 'WITH'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest table name for column in view query', () => {
    const autocompleteResult = parseMsSqlQueryWithCursor(
        'CREATE VIEW test_view AS SELECT | FROM test_table',
    );
    const columnSuggestions: ColumnSuggestion = {tables: [{name: 'test_table'}]};

    expect(autocompleteResult.suggestColumns).toEqual(columnSuggestions);
});

test('should not report errors on full statement', () => {
    const autocompleteResult = parseMsSqlQueryWithoutCursor(
        'CREATE OR ALTER VIEW dbo.test_view (id) WITH SCHEMABINDING AS SELECT id FROM dbo.test_table;',
    );

    expect(autocompleteResult.errors).toHaveLength(0);
});
