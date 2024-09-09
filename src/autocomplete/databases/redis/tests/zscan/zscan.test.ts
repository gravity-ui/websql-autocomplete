import {KeywordSuggestion} from '../../../../shared';
import {parseRedisQueryWithCursor, parseRedisQueryWithoutCursor} from '../../index';

test('should not report errors on ZSCAN command', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('ZSCAN test 0');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should report errors on ZSCAN command without arguments', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('ZSCAN');

    expect(autocompleteResult.errors).toHaveLength(1);
});

test('should suggest keys after ZSCAN', () => {
    const autocompleteResult = parseRedisQueryWithCursor('ZSCAN |');

    expect(autocompleteResult.suggestSortedSets).toEqual(true);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});

test('should not suggest keys after ZSCAN test', () => {
    const autocompleteResult = parseRedisQueryWithCursor('ZSCAN test |');

    expect(autocompleteResult.suggestSortedSets).toEqual(false);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});

test('should suggest keywords after ZSCAN test 0', () => {
    const autocompleteResult = parseRedisQueryWithCursor('ZSCAN test 0 |');
    const keywordSuggestions: KeywordSuggestion[] = [{value: 'COUNT'}, {value: 'MATCH'}];

    expect(autocompleteResult.suggestKeywords).toEqual(keywordSuggestions);
});

test('should not report errors on ZSCAN command with MATCH', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('ZSCAN test 0 MATCH *');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on ZSCAN command with COUNT', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('ZSCAN test 0 COUNT 1');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on full ZSCAN command ', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('ZSCAN test 0 MATCH * COUNT 1');

    expect(autocompleteResult.errors).toHaveLength(0);
});
