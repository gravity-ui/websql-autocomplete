import {parseClickHouseQueryWithCursor, parseClickHouseQueryWithoutCursor} from '../..';
import {KeywordSuggestion} from '../../../../shared';

test('should not report errors', () => {
    const autocompleteResult = parseClickHouseQueryWithoutCursor(
        'CREATE POLICY test_policy ON test_table USING 1;',
    );

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on extended statement', () => {
    const autocompleteResult = parseClickHouseQueryWithoutCursor(`
        CREATE ROW POLICY IF NOT EXISTS
            test_policy1 ON CLUSTER test_cluster1 ON test_database1.test_table1,
            test_policy2 ON CLUSTER test_cluster2 ON test_database2.test_table2
        IN test_access_storage
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
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should suggest properly after ROW', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('CREATE ROW |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'POLICY'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after POLICY', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('CREATE ROW POLICY |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'OR'}, {value: 'IF'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after OR', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('CREATE ROW POLICY OR |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'ON'}, {value: 'REPLACE'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after IF', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('CREATE ROW POLICY IF |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'ON'}, {value: 'NOT'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after NOT', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('CREATE ROW POLICY IF NOT |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'EXISTS'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after ON', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('CREATE ROW POLICY test_policy ON |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'CLUSTER'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after table identifier', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor(
        'CREATE ROW POLICY test_policy ON test_table |',
    );

    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: 'USING'},
        {value: 'FOR'},
        {value: 'IN'},
    ];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after FOR', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor(
        'CREATE ROW POLICY test_policy ON test_table FOR |',
    );

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'SELECT'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after AS', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor(
        'CREATE ROW POLICY test_policy ON test_table USING test_column = 1 AS |',
    );

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'PERMISSIVE'}, {value: 'RESTRICTIVE'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after TO', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor(
        'CREATE ROW POLICY test_policy ON test_table USING test_column = 1 TO |',
    );

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'CURRENT_USER'}, {value: 'ALL'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after ALL', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor(
        'CREATE ROW POLICY test_policy ON test_table USING test_column = 1 TO ALL |',
    );

    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: 'EXCEPT'},
        {value: 'FORMAT'},
        {value: 'INTO'},
    ];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});
