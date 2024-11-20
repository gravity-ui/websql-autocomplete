// TODO-TRINO: Add more tests
test('should not fail jest', () => {});

// TODO-TRINO: support column suggestions
// test('should suggest view name after ALTER COLUMN', () => {
//     const autocompleteResult = parseTrinoQueryWithCursor(
//         'ALTER VIEW test_view ALTER COLUMN |',
//     );
//     const columnSuggestion: ColumnSuggestion = {tables: [{name: 'test_view'}]};
//     expect(autocompleteResult.suggestColumns).toEqual(columnSuggestion);
// });

// TODO-TRINO: support column suggestions
// test('should suggest view name after ALTER COLUMN between statements', () => {
//     const autocompleteResult = parseTrinoQueryWithCursor(
//         'ALTER TABLE before_table DROP COLUMN id; ALTER VIEW test_view ALTER COLUMN | ; ALTER TABLE after_table DROP COLUMN id;',
//     );
//     const columnSuggestion: ColumnSuggestion = {tables: [{name: 'test_view'}]};
//
//     expect(autocompleteResult.suggestColumns).toEqual(columnSuggestion);
// });

// TODO-TRINO: support column suggestions
// test('should suggest table name after ALTER COLUMN', () => {
//     const autocompleteResult = parseTrinoQueryWithCursor(
//         'ALTER TABLE test_table ALTER COLUMN |',
//     );
//     const columnSuggestion: ColumnSuggestion = {tables: [{name: 'test_table'}]};
//
//     expect(autocompleteResult.suggestColumns).toEqual(columnSuggestion);
// });

// TODO-TRINO: support column suggestions
// test('should suggest table name after ALTER COLUMN between statements', () => {
//     const autocompleteResult = parseTrinoQueryWithCursor(
//         'ALTER TABLE before_table DROP COLUMN id; ALTER TABLE test_table ALTER COLUMN | ; ALTER TABLE after_table DROP COLUMN id;',
//     );
//     const columnSuggestion: ColumnSuggestion = {tables: [{name: 'test_table'}]};
//
//     expect(autocompleteResult.suggestColumns).toEqual(columnSuggestion);
// });

// TODO-TRINO: add more tests
// test('should not report errors', () => {
//     const autocompleteResult = parseTrinoQueryWithoutCursor(
//         'ALTER TABLE test_table ALTER COLUMN id SET DEFAULT 1;',
//     );
//
//     expect(autocompleteResult.errors).toHaveLength(0);
// });
//
// test('should not report errors', () => {
//     const autocompleteResult = parseTrinoQueryWithoutCursor(
//         'ALTER VIEW test_view ALTER COLUMN id SET DEFAULT;',
//     );
//
//     expect(autocompleteResult.errors).toHaveLength(0);
// });
