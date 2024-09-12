import {KeywordSuggestion} from '../../../../shared';
import {parseRedisQueryWithCursor, parseRedisQueryWithoutCursor} from '../../index';

test('should not report errors on HSCAN command', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('HSCAN test 0');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should report errors on HSCAN command without arguments', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('HSCAN');

    expect(autocompleteResult.errors).toHaveLength(1);
});

test('should suggest keys after HSCAN', () => {
    const autocompleteResult = parseRedisQueryWithCursor('HSCAN |');

    expect(autocompleteResult.suggestHashes).toEqual(true);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});

test('should not suggest keys after HSCAN test', () => {
    const autocompleteResult = parseRedisQueryWithCursor('HSCAN test |');

    expect(autocompleteResult.suggestHashes).toEqual(false);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});

test('should suggest keywords after HSCAN test 0', () => {
    const autocompleteResult = parseRedisQueryWithCursor('HSCAN test 0 |');
    const keywordSuggestions: KeywordSuggestion[] = [
        {value: 'NOVALUES'},
        {value: 'COUNT'},
        {value: 'MATCH'},
    ];

    expect(autocompleteResult.suggestKeywords).toEqual(keywordSuggestions);
});

test('should not report errors on HSCAN command with MATCH', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('HSCAN test 0 MATCH *');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on HSCAN command with COUNT', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('HSCAN test 0 COUNT 1');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on full HSCAN command ', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('HSCAN test 0 MATCH * COUNT 1');

    expect(autocompleteResult.errors).toHaveLength(0);
});
