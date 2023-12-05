import {expect, test} from '@jest/globals';

import {parsePostgreSql} from '../../../../index';
import {
    GroupBysSuggestion,
    KeywordSuggestion,
    OrderBysSuggestion,
} from '../../../../lib/autocomplete-parse-result';

test('should suggest OFFSET', () => {
    const parseResult = parsePostgreSql('SELECT * FROM test_table LIMIT 100 ', '');

    expect(parseResult.errors).toBeUndefined();

    const suggestion: KeywordSuggestion = {value: 'OFFSET', weight: 2.2};
    expect(parseResult.suggestKeywords).toContainEqual(suggestion);
});

test('should not throw errors with OFFSET statement', () => {
    const parseResult = parsePostgreSql('SELECT * FROM test_table OFFSET 100;', '');

    expect(parseResult.errors).toBeUndefined();
});

test('should not throw errors with LIMIT OFFSET statement', () => {
    const parseResult = parsePostgreSql('SELECT * FROM test_table LIMIT 1 OFFSET 12;', '');

    expect(parseResult.errors).toBeUndefined();
});

test('should not throw errors with OFFSET LIMIT statement', () => {
    const parseResult = parsePostgreSql('SELECT * FROM test_table OFFSET 12 LIMIT 1;', '');

    expect(parseResult.errors).toBeUndefined();
});

test('should not throw errors with LIMIT statement', () => {
    const parseResult = parsePostgreSql('SELECT * FROM test_table LIMIT 1;', '');

    expect(parseResult.errors).toBeUndefined();
});

test('should suggest OFFSET, LIMIT, GROUP BY, ORDER BY', () => {
    const parseResult = parsePostgreSql('SELECT * FROM test_table WHERE test_column = 1 ', '');

    expect(parseResult.errors).toBeUndefined();

    const offsetSuggestion: KeywordSuggestion = {value: 'OFFSET', weight: 2.2};
    expect(parseResult.suggestKeywords).toContainEqual(offsetSuggestion);

    const limitSuggestion: KeywordSuggestion = {value: 'LIMIT', weight: 2.3};
    expect(parseResult.suggestKeywords).toContainEqual(limitSuggestion);

    const groupBysSuggestion: GroupBysSuggestion = {
        prefix: 'GROUP BY',
        tables: [{identifierChain: [{name: 'test_table'}]}],
    };
    expect(parseResult.suggestGroupBys).toEqual(groupBysSuggestion);

    const orderBysSuggestion: OrderBysSuggestion = {
        prefix: 'ORDER BY',
        tables: [{identifierChain: [{name: 'test_table'}]}],
    };
    expect(parseResult.suggestOrderBys).toEqual(orderBysSuggestion);
});
