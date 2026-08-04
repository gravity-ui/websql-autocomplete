import {parseClickHouseQueryWithCursor, parseClickHouseQueryWithoutCursor} from '../index.js';

const parserOptions = {doubleCurlyPlaceholdersEnabled: true};

test('should not report errors on placeholders in value positions', () => {
    const autocompleteResult = parseClickHouseQueryWithoutCursor(
        `
        SELECT
            CASE WHEN test_column1 = {{case_value}} THEN {{then_value}} ELSE {{else_value}} END,
            concat({{first_argument}}, {{second_argument}})
        FROM test_table
        WHERE
            test_column2 = {{equality_value}}
            AND test_column3 IN ({{in_value1}}, {{in_value2}})
            AND test_column4 BETWEEN {{from_value}} AND {{to_value}}
            AND test_column5 LIKE {{pattern}}
        GROUP BY test_column1
        HAVING count(*) > {{count_value}}
        LIMIT {{limit_value}}
        OFFSET {{offset_value}}
    `,
        parserOptions,
    );

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on whitespace inside placeholder braces', () => {
    const autocompleteResult = parseClickHouseQueryWithoutCursor(
        'SELECT * FROM test_table WHERE test_column = {{ test placeholder }}',
        parserOptions,
    );

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not treat placeholders inside string literals and comments as placeholders', () => {
    const autocompleteResult = parseClickHouseQueryWithoutCursor(
        `
        SELECT '{{not_a_placeholder}}' -- {{not_a_placeholder_either}}
        FROM test_table
        WHERE test_column = {{test_placeholder}}
    `,
        parserOptions,
    );

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on placeholders in separate statements', () => {
    const autocompleteResult = parseClickHouseQueryWithoutCursor(
        'SELECT * FROM test_table1 WHERE test_column = {{first}}; SELECT * FROM test_table2 WHERE test_column = {{second}};',
        parserOptions,
    );

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not let an unclosed placeholder swallow the next one', () => {
    const autocompleteResult = parseClickHouseQueryWithoutCursor(
        'SELECT * FROM test_table WHERE test_column1 = {{unclosed AND test_column2 = {{test_placeholder}}',
        parserOptions,
    );

    expect(autocompleteResult.errors.length).toBeGreaterThan(0);
});

test('should report errors on placeholders when the option is disabled', () => {
    const autocompleteResult = parseClickHouseQueryWithoutCursor(
        'SELECT * FROM test_table WHERE test_column = {{ test placeholder }}',
    );

    expect(autocompleteResult.errors.length).toBeGreaterThan(0);
});

test('should not suggest placeholders as keywords', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor(
        'SELECT * FROM test_table WHERE test_column = |',
        parserOptions,
    );

    expect(autocompleteResult.suggestKeywords?.map(({value}) => value)).not.toContain(
        'DOUBLE_CURLY_PLACEHOLDER',
    );
});
