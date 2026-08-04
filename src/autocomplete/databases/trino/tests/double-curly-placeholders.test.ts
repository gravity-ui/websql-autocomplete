import {
    extractTrinoDoubleCurlyPlaceholdersFromQuery,
    parseTrinoQueryWithoutCursor,
} from '../index.js';

const lexerOptions = {doubleCurlyPlaceholdersEnabled: true};

test('should not report errors on placeholders in value positions', () => {
    const autocompleteResult = parseTrinoQueryWithoutCursor(
        `
        SELECT
            CASE WHEN test_column = {{test_placeholder}} THEN {{test_placeholder2}} ELSE {{test_placeholder3}} END,
            CONCAT({{test_placeholder4}}, {{test_placeholder5}})
        FROM test_table
        WHERE
            test_column2 = {{test_placeholder6}}
            AND test_column3 IN ({{test_placeholder7}}, {{test_placeholder8}})
            AND test_column4 BETWEEN {{test_placeholder9}} AND {{test_placeholder10}}
            AND test_column5 LIKE {{test_placeholder11}}
        GROUP BY test_column
        HAVING COUNT(*) > {{test_placeholder12}}
        OFFSET {{test_placeholder13}}
        LIMIT {{test_placeholder14}}
    `,
        lexerOptions,
    );

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on placeholders in update statement', () => {
    const autocompleteResult = parseTrinoQueryWithoutCursor(
        'UPDATE test_table SET test_column = {{test_placeholder}} WHERE test_column2 = {{test_placeholder2}}',
        lexerOptions,
    );

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on whitespace inside placeholder braces', () => {
    const autocompleteResult = parseTrinoQueryWithoutCursor(
        'SELECT * FROM test_table WHERE test_column = {{ test_placeholder }}',
        lexerOptions,
    );

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not treat placeholders inside string literals and comments as placeholders', () => {
    const autocompleteResult = parseTrinoQueryWithoutCursor(
        `
        SELECT '{{test_placeholder}}' -- {{test_placeholder2}}
        FROM test_table
        WHERE test_column = {{test_placeholder3}}
    `,
        lexerOptions,
    );

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on placeholders in separate statements', () => {
    const autocompleteResult = parseTrinoQueryWithoutCursor(
        'SELECT * FROM test_table WHERE test_column = {{test_placeholder}}; SELECT * FROM test_table2 WHERE test_column = {{test_placeholder2}};',
        lexerOptions,
    );

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not let an unclosed placeholder swallow the next one', () => {
    const autocompleteResult = parseTrinoQueryWithoutCursor(
        'SELECT * FROM test_table WHERE test_column = {{test_placeholder AND test_column2 = {{test_placeholder2}}',
        lexerOptions,
    );

    expect(autocompleteResult.errors.length).toBeGreaterThan(0);
});

test('should report errors on placeholders when the option is disabled', () => {
    const autocompleteResult = parseTrinoQueryWithoutCursor(
        'SELECT * FROM test_table WHERE test_column = {{test_placeholder}}',
    );

    expect(autocompleteResult.errors.length).toBeGreaterThan(0);
});

test('should extract placeholder with its text and position', () => {
    const placeholders = extractTrinoDoubleCurlyPlaceholdersFromQuery(
        'SELECT * FROM test_table WHERE test_column = {{test_placeholder}}',
    );

    expect(placeholders).toEqual([
        {
            text: '{{test_placeholder}}',
            startIndex: 45,
            endIndex: 65,
        },
    ]);
});

test('should extract every placeholder occurrence in order', () => {
    const placeholders = extractTrinoDoubleCurlyPlaceholdersFromQuery(
        'SELECT {{test_placeholder}}, {{test_placeholder2}} FROM test_table WHERE test_column = {{test_placeholder}}',
    );

    expect(placeholders.map(({text}) => text)).toEqual([
        '{{test_placeholder}}',
        '{{test_placeholder2}}',
        '{{test_placeholder}}',
    ]);
});

test('should not extract placeholders from string literals and comments', () => {
    const placeholders = extractTrinoDoubleCurlyPlaceholdersFromQuery(
        `
        SELECT '{{test_placeholder}}' -- {{test_placeholder2}}
        FROM test_table
        WHERE test_column = {{test_placeholder3}}
    `,
    );

    expect(placeholders.map(({text}) => text)).toEqual(['{{test_placeholder3}}']);
});

test('should not extract unclosed placeholder', () => {
    const placeholders = extractTrinoDoubleCurlyPlaceholdersFromQuery(
        'SELECT * FROM test_table WHERE test_column = {{test_placeholder',
    );

    expect(placeholders).toEqual([]);
});

test('should extract placeholders from a query which cannot be parsed', () => {
    const placeholders = extractTrinoDoubleCurlyPlaceholdersFromQuery(
        'SELECT FROM WHERE = {{test_placeholder}}',
    );

    expect(placeholders.map(({text}) => text)).toEqual(['{{test_placeholder}}']);
});

test('should extract placeholders from separate statements', () => {
    const placeholders = extractTrinoDoubleCurlyPlaceholdersFromQuery(
        'SELECT * FROM test_table WHERE test_column = {{test_placeholder}}; SELECT * FROM test_table2 WHERE test_column = {{test_placeholder2}};',
    );

    expect(placeholders.map(({text}) => text)).toEqual([
        '{{test_placeholder}}',
        '{{test_placeholder2}}',
    ]);
});

test('should extract placeholder position which is not shifted by emojis', () => {
    const query = "SELECT '🙂' FROM test_table WHERE test_column = {{test_placeholder}}";
    const placeholders = extractTrinoDoubleCurlyPlaceholdersFromQuery(query);

    expect(placeholders).toHaveLength(1);
    placeholders.forEach(({text, startIndex, endIndex}) => {
        expect(query.slice(startIndex, endIndex)).toBe(text);
    });
});
