import {parseClickHouseQueryWithCursor, parseClickHouseQueryWithoutCursor} from '../..';
import {KeywordSuggestion} from '../../../../shared';

test('should not report errors', () => {
    const autocompleteResult = parseClickHouseQueryWithoutCursor(
        'ALTER POLICY test_policy ON test_table;',
    );

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on extended statement', () => {
    const autocompleteResult = parseClickHouseQueryWithoutCursor(`
        ALTER ROW POLICY IF EXISTS
            test_policy1 ON CLUSTER test_cluster1 ON test_database1.test_table1 RENAME TO test_policy2,
            test_policy3 ON CLUSTER test_cluster2 ON test_database2.test_table2  RENAME TO test_policy4
        FOR SELECT USING
            test_column1 = 1 AND
            test_column2 == 1 AND
            test_column3 > 1 AND
            test_column3 >= 1 AND
            test_column3 < 1 AND
            test_column3 <= 1 AND
            test_column3 != 1 AND
            test_function1(1, 2) != test_function2()
        AS PERMISSIVE
        TO test_role, test_user, CURRENT_USER;

        ALTER ROW POLICY IF EXISTS
            test_policy1 ON CLUSTER test_cluster1 ON test_database1.test_table1 RENAME TO test_policy2,
            test_policy3 ON CLUSTER test_cluster2 ON test_database2.test_table2  RENAME TO test_policy4
        FOR SELECT USING
            test_column1 = 1 AND
            test_column2 == 1 AND
            test_column3 > 1 AND
            test_column3 >= 1 AND
            test_column3 < 1 AND
            test_column3 <= 1 AND
            test_column3 != 1 AND
            test_function1(1, 2) != test_function2()
        AS RESTRICTIVE
        TO test_role, test_user, CURRENT_USER;
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should suggest properly after ROW', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('ALTER ROW |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'POLICY'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after POLICY', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('ALTER ROW POLICY |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'IF'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after ON', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('ALTER ROW POLICY test_policy ON |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'CLUSTER'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after table identifier', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor(
        'ALTER ROW POLICY test_policy ON test_table |',
    );

    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: 'RENAME'},
        {value: 'TO'},
        {value: 'AS'},
        {value: 'USING'},
        {value: 'FOR'},
        {value: 'FORMAT'},
        {value: 'INTO'},
    ];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after FOR', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor(
        'ALTER ROW POLICY test_policy ON test_table FOR |',
    );

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'SELECT'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after USING', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor(
        'ALTER ROW POLICY test_policy ON test_table USING |',
    );

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'NONE'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after AS', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor(
        'ALTER ROW POLICY test_policy ON test_table USING test_column = 1 AS |',
    );

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'PERMISSIVE'}, {value: 'RESTRICTIVE'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after TO', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor(
        'ALTER ROW POLICY test_policy ON test_table USING test_column = 1 TO |',
    );

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'CURRENT_USER'}, {value: 'ALL'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after ALL', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor(
        'ALTER ROW POLICY test_policy ON test_table USING test_column = 1 TO ALL |',
    );

    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: 'EXCEPT'},
        {value: 'FORMAT'},
        {value: 'INTO'},
    ];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});
