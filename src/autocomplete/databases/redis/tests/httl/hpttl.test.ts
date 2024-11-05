import {KeywordSuggestion} from '../../../../shared';
import {parseRedisQueryWithCursor, parseRedisQueryWithoutCursor} from '../../index';

test('should not report errors on HPTTL command', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('HPTTL test FIELDS 1 key1');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on HPTTL command with multiple keys', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('HPTTL test FIELDS 2 key1 key2');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should report errors on HPTTL command without arguments', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('HPTTL');

    expect(autocompleteResult.errors).toHaveLength(1);
});

test('should suggest keys after HPTTL', () => {
    const autocompleteResult = parseRedisQueryWithCursor('HPTTL |');

    expect(autocompleteResult.suggestHashes).toEqual(true);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});

test('should suggest keywords after HPTTL test ', () => {
    const autocompleteResult = parseRedisQueryWithCursor('HPTTL test |');
    const keywordSuggestions: KeywordSuggestion[] = [{value: 'FIELDS'}];

    expect(autocompleteResult.suggestHashes).toEqual(false);
    expect(autocompleteResult.suggestKeywords).toEqual(keywordSuggestions);
});
