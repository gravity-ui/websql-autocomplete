import {parseMsSqlQueryWithCursor, parseMsSqlQueryWithoutCursor} from '../../index.js';
import {KeywordSuggestion, TableOrViewSuggestion} from '../../../../shared/autocomplete-types.js';

test.each(['ALTER VIEW |', 'ALTER VIEW test_schema.|'])(
    'should suggest views after %s',
    (query) => {
        const autocompleteResult = parseMsSqlQueryWithCursor(query);

        expect(autocompleteResult.suggestViewsOrTables).toEqual(TableOrViewSuggestion.VIEWS);
    },
);

test('should suggest properly after view name', () => {
    const autocompleteResult = parseMsSqlQueryWithCursor('ALTER VIEW test_view |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'AS'}, {value: 'WITH'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should not report errors on full statement', () => {
    const autocompleteResult = parseMsSqlQueryWithoutCursor(
        'ALTER VIEW test_view AS SELECT * FROM test_table;',
    );

    expect(autocompleteResult.errors).toHaveLength(0);
});
