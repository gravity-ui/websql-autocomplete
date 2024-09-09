import {KeywordSuggestion} from '../../../../shared';
import {parseRedisQueryWithCursor, parseRedisQueryWithoutCursor} from '../../index';

test('should not report errors on ZRANDMEMBER command', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('ZRANDMEMBER test');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on ZRANDMEMBER command with limit', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('ZRANDMEMBER test 1');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on full ZRANDMEMBER command', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('ZRANDMEMBER test 1 WITHSCORES');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should report errors on ZRANDMEMBER command without arguments', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('ZRANDMEMBER');

    expect(autocompleteResult.errors).toHaveLength(1);
});

test('should suggest keys after ZRANDMEMBER', () => {
    const autocompleteResult = parseRedisQueryWithCursor('ZRANDMEMBER |');

    expect(autocompleteResult.suggestSortedSets).toEqual(true);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});

test('should not suggest keys after ZRANDMEMBER test', () => {
    const autocompleteResult = parseRedisQueryWithCursor('ZRANDMEMBER test |');

    expect(autocompleteResult.suggestSortedSets).toEqual(false);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});

test('should suggest keywords after ZRANDMEMBER test 1', () => {
    const autocompleteResult = parseRedisQueryWithCursor('ZRANDMEMBER test 1 |');
    const keywordSuggestions: KeywordSuggestion[] = [{value: 'WITHSCORES'}];

    expect(autocompleteResult.suggestSortedSets).toEqual(false);
    expect(autocompleteResult.suggestKeywords).toEqual(keywordSuggestions);
});
