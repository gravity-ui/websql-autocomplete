import {expect, test} from '@jest/globals';

import {AutocompleteError, KeywordSuggestion, parseClickHouseQuery} from '../../../../index';

test('should not report errors on EXPLAIN SELECT statement', () => {
    const parseResult = parseClickHouseQuery('EXPLAIN SELECT * FROM test_table; ', '');

    expect(parseResult.errors).toBeUndefined();
});

test('should not report errors on EXPLAIN DELETE statement', () => {
    const parseResult = parseClickHouseQuery('EXPLAIN DELETE FROM test_table; ', '');

    expect(parseResult.errors).toBeUndefined();
});

test('should not report errors on EXPLAIN CREATE statement', () => {
    const parseResult = parseClickHouseQuery(
        'EXPLAIN CREATE TABLE test_table (test_column int) ENGINE = Memory; ',
        '',
    );

    expect(parseResult.errors).toBeUndefined();
});

test('should report error on double EXPLAIN statement', () => {
    const parseResult = parseClickHouseQuery('EXPLAIN EXPLAIN SELECT * FROM test_table ', '');

    const error: Partial<AutocompleteError> = {
        text: 'EXPLAIN',
        token: 'EXPLAIN',
        loc: {
            first_line: 1,
            last_line: 1,
            first_column: 8,
            last_column: 15,
        },
    };
    expect(parseResult.errors).toContainEqual(expect.objectContaining(error));
});

test('should suggest EXPLAIN', () => {
    const parseResult = parseClickHouseQuery('', '');

    expect(parseResult.errors).toBeUndefined();

    const suggestion: KeywordSuggestion = {value: 'EXPLAIN', weight: -1};
    expect(parseResult.suggestKeywords).toContainEqual(suggestion);
});

test('should suggest query', () => {
    const parseResult = parseClickHouseQuery('EXPLAIN ', '');

    expect(parseResult.errors).toBeUndefined();

    const suggestions: KeywordSuggestion[] = [
        {value: 'ALTER', weight: -1},
        {value: 'CREATE', weight: -1},
        {value: 'DELETE', weight: -1},
        {value: 'DESCRIBE', weight: -1},
        {value: 'DROP', weight: -1},
        {value: 'GRANT', weight: -1},
        {value: 'INSERT', weight: -1},
        {value: 'REVOKE', weight: -1},
        {value: 'SELECT', weight: -1},
        {value: 'SET', weight: -1},
        {value: 'SHOW', weight: -1},
        {value: 'TRUNCATE', weight: -1},
        {value: 'UPDATE', weight: -1},
        {value: 'USE', weight: -1},
        {value: 'WITH', weight: -1},
    ];
    expect(parseResult.suggestKeywords).toEqual(suggestions);
});
