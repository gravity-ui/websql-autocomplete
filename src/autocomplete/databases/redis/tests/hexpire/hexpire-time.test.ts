import {KeywordSuggestion} from '../../../../shared';
import {parseRedisQueryWithCursor, parseRedisQueryWithoutCursor} from '../../index';

test('should not report errors on HEXPIRETIME command', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('HEXPIRETIME test FIELDS 1 key1');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on HEXPIRETIME command with multiple keys', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('HEXPIRETIME test FIELDS 2 key1 key2');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should report errors on HEXPIRETIME command without arguments', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('HEXPIRETIME');

    expect(autocompleteResult.errors).toHaveLength(1);
});

test('should suggest keys after HEXPIRETIME', () => {
    const autocompleteResult = parseRedisQueryWithCursor('HEXPIRETIME |');

    expect(autocompleteResult.suggestHashes).toEqual(true);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});

test('should suggest keywords after HEXPIRETIME test ', () => {
    const autocompleteResult = parseRedisQueryWithCursor('HEXPIRETIME test |');
    const keywordSuggestions: KeywordSuggestion[] = [{value: 'FIELDS'}];

    expect(autocompleteResult.suggestHashes).toEqual(false);
    expect(autocompleteResult.suggestKeywords).toEqual(keywordSuggestions);
});
