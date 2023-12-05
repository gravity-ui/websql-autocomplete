import {expect, test} from '@jest/globals';

import {parseGenericSql, parseGenericSqlWithoutCursor} from '../../../../index';
import {IdentifierLocation, KeywordSuggestion} from '../../../../lib/autocomplete-parse-result';

test('should suggest SET', () => {
    const parseResult = parseGenericSql('', '');

    expect(parseResult.errors).toBeUndefined();

    const suggestion: KeywordSuggestion = {value: 'SET', weight: -1};
    expect(parseResult.suggestKeywords).toContainEqual(suggestion);
});

test('should not report errors when setting string with double quotes', () => {
    const parseResult = parseGenericSql('SET test_table.test_column="test";', '');

    expect(parseResult.errors).toBeUndefined();
});

test('should not report errors when setting string with single quotes', () => {
    const parseResult = parseGenericSql("SET test_table.test_column='test';", '');

    expect(parseResult.errors).toBeUndefined();
});

test('should not report errors when setting string without quotes', () => {
    const parseResult = parseGenericSql('SET test_table.test_column=test;', '');

    expect(parseResult.errors).toBeUndefined();
});

test('should not report errors when setting boolean', () => {
    const parseResult = parseGenericSql('SET test_table.test_column=true;', '');

    expect(parseResult.errors).toBeUndefined();
});

test('should not report errors when setting number', () => {
    const parseResult = parseGenericSql('SET test_table.test_column=900000;', '');

    expect(parseResult.errors).toBeUndefined();
});

test('should properly fill locations', () => {
    const parseResult = parseGenericSqlWithoutCursor('SET test_table.test_column="test";');

    expect(parseResult.errors).toBeUndefined();

    const locations: IdentifierLocation[] = [
        {
            location: {
                first_column: 1,
                first_line: 1,
                last_column: 34,
                last_line: 1,
            },
            type: 'statement',
        },
        {
            identifier: 'SET',
            location: {
                first_column: 1,
                first_line: 1,
                last_column: 4,
                last_line: 1,
            },
            type: 'statementType',
        },
    ];
    expect(parseResult.locations).toEqual(locations);
});
