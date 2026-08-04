import {
    extractTrinoDoubleCurlyPlaceholdersFromQuery,
    parseTrinoQueryWithCursor,
    parseTrinoQueryWithoutCursor,
} from '../index.js';

const parserOptions = {doubleCurlyPlaceholdersEnabled: true};

test('should not report errors on placeholders in value positions', () => {
    const autocompleteResult = parseTrinoQueryWithoutCursor(
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
        OFFSET {{offset_value}}
        LIMIT {{limit_value}}
    `,
        parserOptions,
    );

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on placeholders in update statement', () => {
    const autocompleteResult = parseTrinoQueryWithoutCursor(
        'UPDATE test_table SET test_column1 = {{new_value}} WHERE test_column2 = {{condition_value}}',
        parserOptions,
    );

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on whitespace inside placeholder braces', () => {
    const autocompleteResult = parseTrinoQueryWithoutCursor(
        'SELECT * FROM test_table WHERE test_column = {{ test placeholder }}',
        parserOptions,
    );

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not treat placeholders inside string literals and comments as placeholders', () => {
    const autocompleteResult = parseTrinoQueryWithoutCursor(
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
    const autocompleteResult = parseTrinoQueryWithoutCursor(
        'SELECT * FROM test_table1 WHERE test_column = {{first}}; SELECT * FROM test_table2 WHERE test_column = {{second}};',
        parserOptions,
    );

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not let an unclosed placeholder swallow the next one', () => {
    const autocompleteResult = parseTrinoQueryWithoutCursor(
        'SELECT * FROM test_table WHERE test_column1 = {{unclosed AND test_column2 = {{test_placeholder}}',
        parserOptions,
    );

    expect(autocompleteResult.errors.length).toBeGreaterThan(0);
});

test('should report errors on placeholders when the option is disabled', () => {
    const autocompleteResult = parseTrinoQueryWithoutCursor(
        'SELECT * FROM test_table WHERE test_column = {{ test placeholder }}',
    );

    expect(autocompleteResult.errors.length).toBeGreaterThan(0);
});

test('should not suggest placeholders as keywords', () => {
    const autocompleteResult = parseTrinoQueryWithCursor(
        'SELECT * FROM test_table WHERE test_column = |',
        parserOptions,
    );

    expect(autocompleteResult.suggestKeywords?.map(({value}) => value)).not.toContain(
        'DOUBLE_CURLY_PLACEHOLDER_',
    );
});

test('should extract placeholder with its name, text and position', () => {
    const placeholders = extractTrinoDoubleCurlyPlaceholdersFromQuery(
        'SELECT * FROM test_table WHERE test_column = {{test_placeholder}}',
    );

    expect(placeholders).toEqual([
        {
            name: 'test_placeholder',
            text: '{{test_placeholder}}',
            startIndex: 45,
            endIndex: 65,
        },
    ]);
});

test('should trim whitespace around extracted placeholder name', () => {
    const placeholders = extractTrinoDoubleCurlyPlaceholdersFromQuery(
        'SELECT * FROM test_table WHERE test_column = {{ test_placeholder }}',
    );

    expect(placeholders).toEqual([
        {
            name: 'test_placeholder',
            text: '{{ test_placeholder }}',
            startIndex: 45,
            endIndex: 67,
        },
    ]);
});

test('should extract every placeholder occurrence in order', () => {
    const placeholders = extractTrinoDoubleCurlyPlaceholdersFromQuery(
        'SELECT {{first}}, {{second}} FROM test_table WHERE test_column = {{first}}',
    );

    expect(placeholders.map(({name}) => name)).toEqual(['first', 'second', 'first']);
});

test('should not extract placeholders from string literals and comments', () => {
    const placeholders = extractTrinoDoubleCurlyPlaceholdersFromQuery(
        `
        SELECT '{{not_a_placeholder}}' -- {{not_a_placeholder_either}}
        FROM test_table
        WHERE test_column = {{test_placeholder}}
    `,
    );

    expect(placeholders.map(({name}) => name)).toEqual(['test_placeholder']);
});

test('should not extract unclosed placeholder', () => {
    const placeholders = extractTrinoDoubleCurlyPlaceholdersFromQuery(
        'SELECT * FROM test_table WHERE test_column = {{unclosed',
    );

    expect(placeholders).toEqual([]);
});

test('should extract placeholders from a query which cannot be parsed', () => {
    const placeholders = extractTrinoDoubleCurlyPlaceholdersFromQuery(
        'SELECT FROM WHERE = {{test_placeholder}}',
    );

    expect(placeholders.map(({name}) => name)).toEqual(['test_placeholder']);
});

test('should extract placeholders from separate statements', () => {
    const placeholders = extractTrinoDoubleCurlyPlaceholdersFromQuery(
        'SELECT * FROM test_table1 WHERE test_column = {{first}}; SELECT * FROM test_table2 WHERE test_column = {{second}};',
    );

    expect(placeholders.map(({name}) => name)).toEqual(['first', 'second']);
});

test('should extract placeholder position which is not shifted by emojis', () => {
    const query = "SELECT '🙂' FROM test_table WHERE test_column = {{test_placeholder}}";
    const placeholders = extractTrinoDoubleCurlyPlaceholdersFromQuery(query);

    expect(placeholders).toHaveLength(1);
    placeholders.forEach(({text, startIndex, endIndex}) => {
        expect(query.slice(startIndex, endIndex)).toBe(text);
    });
});
