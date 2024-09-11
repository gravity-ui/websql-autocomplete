import {KeywordSuggestion} from '../../../../shared';
import {parseRedisQueryWithCursor, parseRedisQueryWithoutCursor} from '../../index';

test('should not report errors on HPEXPIRETIME command', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('HPEXPIRETIME test FIELDS 1 key1');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on HPEXPIRETIME command with multiple keys', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('HPEXPIRETIME test FIELDS 2 key1 key2');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should report errors on HPEXPIRETIME command without arguments', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('HPEXPIRETIME');

    expect(autocompleteResult.errors).toHaveLength(1);
});

test('should suggest keys after HPEXPIRETIME', () => {
    const autocompleteResult = parseRedisQueryWithCursor('HPEXPIRETIME |');

    expect(autocompleteResult.suggestHashes).toEqual(true);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});

test('should suggest keywords after HPEXPIRETIME test ', () => {
    const autocompleteResult = parseRedisQueryWithCursor('HPEXPIRETIME test |');
    const keywordSuggestions: KeywordSuggestion[] = [{value: 'FIELDS'}];

    expect(autocompleteResult.suggestHashes).toEqual(false);
    expect(autocompleteResult.suggestKeywords).toEqual(keywordSuggestions);
});
