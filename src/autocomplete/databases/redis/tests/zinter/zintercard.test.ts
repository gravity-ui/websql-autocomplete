import {KeywordSuggestion} from '../../../../shared';
import {parseRedisQueryWithCursor, parseRedisQueryWithoutCursor} from '../../index';

test('should not report errors on ZINTERCARD command', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('ZINTERCARD 1 test');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on ZINTERCARD command with multiple keys', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('ZINTERCARD 2 test1 test2');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on full ZINTERCARD command', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('ZINTERCARD 2 test1 test2 LIMIT 1');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should report errors on ZINTERCARD command without arguments', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('ZINTERCARD');

    expect(autocompleteResult.errors).toHaveLength(1);
});

test('should not suggest keys after ZINTERCARD', () => {
    const autocompleteResult = parseRedisQueryWithCursor('ZINTERCARD |');

    expect(autocompleteResult.suggestSortedSets).toEqual(false);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});

test('should suggest keys after ZINTERCARD 1', () => {
    const autocompleteResult = parseRedisQueryWithCursor('ZINTERCARD 1 |');

    expect(autocompleteResult.suggestSortedSets).toEqual(true);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});

test('should suggest keywords after ZINTERCARD 1', () => {
    const autocompleteResult = parseRedisQueryWithCursor('ZINTERCARD 1 test |');
    const keywordSuggestions: KeywordSuggestion[] = [{value: 'LIMIT'}];

    expect(autocompleteResult.suggestSortedSets).toEqual(true);
    expect(autocompleteResult.suggestKeywords).toEqual(keywordSuggestions);
});

test('should not suggest keywords after ZINTERCARD 1 test LIMIT', () => {
    const autocompleteResult = parseRedisQueryWithCursor('ZINTERCARD 1 test WEIGHTS |');

    expect(autocompleteResult.suggestSortedSets).toEqual(false);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});
