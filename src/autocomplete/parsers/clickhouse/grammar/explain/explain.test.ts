import {expect, test} from '@jest/globals';

import {ErrorLocation, parseClickHouse} from '../../../../index';
import {KeywordSuggestion} from '../../../../lib/autocomplete-parse-result';

test('should not report errors on EXPLAIN SELECT statement', () => {
    const parseResult = parseClickHouse('EXPLAIN SELECT * FROM test_table; ', '');

    expect(parseResult.errors).toBeUndefined();
});

test('should not report errors on EXPLAIN DELETE statement', () => {
    const parseResult = parseClickHouse('EXPLAIN DELETE FROM test_table; ', '');

    expect(parseResult.errors).toBeUndefined();
});

test('should not report errors on EXPLAIN CREATE statement', () => {
    const parseResult = parseClickHouse(
        'EXPLAIN CREATE TABLE test_table (test_column int) ENGINE = Memory; ',
        '',
    );

    expect(parseResult.errors).toBeUndefined();
});

test('should report error on double EXPLAIN statement', () => {
    const parseResult = parseClickHouse('EXPLAIN EXPLAIN SELECT * FROM test_table ', '');

    const error: Partial<ErrorLocation> = {
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
    const parseResult = parseClickHouse('', '');

    expect(parseResult.errors).toBeUndefined();

    const suggestion: KeywordSuggestion = {value: 'EXPLAIN', weight: -1};
    expect(parseResult.suggestKeywords).toContainEqual(suggestion);
});

test('should suggest query', () => {
    const parseResult = parseClickHouse('EXPLAIN ', '');

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
