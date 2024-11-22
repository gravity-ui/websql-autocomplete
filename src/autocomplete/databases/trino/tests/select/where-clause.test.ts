import {parseTrinoQueryWithCursor, parseTrinoQueryWithoutCursor} from '../../index';
import {KeywordSuggestion} from '../../../../shared/autocomplete-types';

test('should suggest properly after WHERE', () => {
    const autocompleteResult = parseTrinoQueryWithCursor(
        'SELECT * FROM catalog.schema.test_table WHERE |',
    );

    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: 'NULL'},
        {value: 'INTERVAL'},
        {value: 'DOUBLE'},
        {value: 'FALSE'},
        {value: 'TRUE'},
        {value: 'POSITION'},
        {value: 'ROW'},
        {value: 'LISTAGG'},
        {value: 'FINAL'},
        {value: 'RUNNING'},
        {value: 'EXISTS'},
        {value: 'CASE'},
        {value: 'CAST'},
        {value: 'TRY_CAST'},
        {value: 'ARRAY'},
        {value: 'CURRENT_DATE'},
        {value: 'CURRENT_TIME'},
        {value: 'CURRENT_TIMESTAMP'},
        {value: 'LOCALTIME'},
        {value: 'LOCALTIMESTAMP'},
        {value: 'CURRENT_USER'},
        {value: 'CURRENT_CATALOG'},
        {value: 'CURRENT_SCHEMA'},
        {value: 'CURRENT_PATH'},
        {value: 'TRIM'},
        {value: 'SUBSTRING'},
        {value: 'NORMALIZE'},
        {value: 'EXTRACT'},
        {value: 'GROUPING'},
        {value: 'JSON_EXISTS'},
        {value: 'JSON_VALUE'},
        {value: 'JSON_QUERY'},
        {value: 'JSON_OBJECT'},
        {value: 'JSON_ARRAY'},
        {value: 'NOT'},
    ];

    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);

    // TODO-TRINO: support column suggestions
    // const columnSuggestions: ColumnSuggestion = {
    //     tables: [{name: 'catalog.schema.test_table'}],
    // };
    // expect(autocompleteResult.suggestColumns).toEqual(columnSuggestions);
});

// TODO-TRINO: support column suggestions
// test('should suggest table name for column between statements', () => {
//     const autocompleteResult = parseTrinoQueryWithCursor(
//         'ALTER TABLE before_table DROP COLUMN id; SELECT * FROM catalog.schema.test_table WHERE | ; ALTER TABLE after_table DROP COLUMN id;',
//     );
//     const columnSuggestions: ColumnSuggestion = {
//         tables: [{name: 'catalog.schema.test_table'}],
//     };
//
//     expect(autocompleteResult.suggestColumns).toEqual(columnSuggestions);
// });
//
// test('should suggest table name and alias for column', () => {
//     const autocompleteResult = parseTrinoQueryWithCursor(
//         'SELECT * FROM catalog.schema.test_table t1 WHERE |',
//     );
//     const columnSuggestions: ColumnSuggestion = {
//         tables: [{name: 'catalog.schema.test_table', alias: 't1'}],
//     };
//
//     expect(autocompleteResult.suggestColumns).toEqual(columnSuggestions);
// });
//
// test('should suggest table name and alias (with AS) for column', () => {
//     const autocompleteResult = parseTrinoQueryWithCursor(
//         'SELECT * FROM catalog.schema.test_table AS t1 WHERE |',
//     );
//     const columnSuggestions: ColumnSuggestion = {
//         tables: [{name: 'catalog.schema.test_table', alias: 't1'}],
//     };
//
//     expect(autocompleteResult.suggestColumns).toEqual(columnSuggestions);
// });
//
// test('should suggest table name and alias for second column', () => {
//     const autocompleteResult = parseTrinoQueryWithCursor(
//         'SELECT * FROM catalog.schema.test_table AS t1 WHERE id = 2 AND |',
//     );
//     const columnSuggestions: ColumnSuggestion = {tables: [{name: 'catalog.schema.test_table', alias: 't1'}]};
//
//     expect(autocompleteResult.suggestColumns).toEqual(columnSuggestions);
// });
//
// test('should suggest multiple table names for column', () => {
//     const autocompleteResult = parseTrinoQueryWithCursor(
//         'SELECT * FROM catalog.schema.test_table_1, catalog.schema.test_table_2 WHERE |',
//     );
//     const columnSuggestions: ColumnSuggestion = {
//         tables: [{name: 'catalog.schema.test_table_1'}, {name: 'catalog.schema.test_table_2'}],
//     };
//
//     expect(autocompleteResult.suggestColumns).toEqual(columnSuggestions);
// });
//
// test('should suggest multiple table names and aliases for column', () => {
//     const autocompleteResult = parseTrinoQueryWithCursor(
//         'SELECT * FROM catalog.schema.test_table_1 t1, catalog.schema.test_table_2 t2 WHERE |',
//     );
//     const columnSuggestions: ColumnSuggestion = {
//         tables: [
//             {name: 'catalog.schema.test_table_1', alias: 't1'},
//             {name: 'catalog.schema.test_table_2', alias: 't2'},
//         ],
//     };
//
//     expect(autocompleteResult.suggestColumns).toEqual(columnSuggestions);
// });
//
// test('should suggest multiple table names and aliases (with AS) for column', () => {
//     const autocompleteResult = parseTrinoQueryWithCursor(
//         'SELECT * FROM catalog.schema.test_table_1 AS t1, catalog.schema.test_table_2 AS t2 WHERE |',
//     );
//     const columnSuggestions: ColumnSuggestion = {
//         tables: [
//             {name: 'catalog.schema.test_table_1', alias: 't1'},
//             {name: 'catalog.schema.test_table_2', alias: 't2'},
//         ],
//     };
//
//     expect(autocompleteResult.suggestColumns).toEqual(columnSuggestions);
// });

test('should not report errors', () => {
    const autocompleteResult = parseTrinoQueryWithoutCursor(
        'SELECT * FROM catalog.schema.test_table WHERE id = 1',
    );

    expect(autocompleteResult.errors).toHaveLength(0);
});
