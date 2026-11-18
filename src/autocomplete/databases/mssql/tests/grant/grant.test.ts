import {parseMsSqlQueryWithCursor, parseMsSqlQueryWithoutCursor} from '../../index.js';
import {TableOrViewSuggestion} from '../../../../shared/autocomplete-types.js';

test('should suggest tables after GRANT ON', () => {
    const autocompleteResult = parseMsSqlQueryWithCursor('GRANT SELECT ON |');

    expect(autocompleteResult.suggestViewsOrTables).toEqual(TableOrViewSuggestion.ALL);
    expect(autocompleteResult.suggestRoles).toBeFalsy();
});

test.each([
    'GRANT SELECT ON test_table TO |',
    'GRANT SELECT ON test_table TO test_role, |',
    'GRANT SELECT ON test_table TO test_role WITH GRANT OPTION AS |',
])('should suggest roles after %s', (query) => {
    const autocompleteResult = parseMsSqlQueryWithCursor(query);

    expect(autocompleteResult.suggestRoles).toEqual(true);
    expect(autocompleteResult.suggestKeywords).toEqual([{value: 'PUBLIC'}]);
    expect(autocompleteResult.suggestViewsOrTables).toBeUndefined();
});

test.each([
    'GRANT SELECT (test_column, test_column2) ON dbo.test_table TO test_role, test_role2 WITH GRANT OPTION',
    'GRANT ALL ON test_table TO public',
    'GRANT EXECUTE ON SCHEMA::dbo TO test_role',
])('should not report errors on %s', (query) => {
    const autocompleteResult = parseMsSqlQueryWithoutCursor(query);

    expect(autocompleteResult.errors).toHaveLength(0);
});
