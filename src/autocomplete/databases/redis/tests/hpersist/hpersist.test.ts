import {KeywordSuggestion} from '../../../../shared/index.js';
import {parseRedisQueryWithCursor, parseRedisQueryWithoutCursor} from '../../index.js';

test('should not report errors on HPERSIST command', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('HPERSIST test FIELDS 1 key1');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on HPERSIST command with multiple keys', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('HPERSIST test FIELDS 2 key1 key2');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should report errors on HPERSIST command without arguments', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('HPERSIST');

    expect(autocompleteResult.errors).toHaveLength(1);
});

test('should suggest keys after HPERSIST', () => {
    const autocompleteResult = parseRedisQueryWithCursor('HPERSIST |');

    expect(autocompleteResult.suggestHashes).toEqual(true);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});

test('should suggest keywords after HPERSIST test ', () => {
    const autocompleteResult = parseRedisQueryWithCursor('HPERSIST test |');
    const keywordSuggestions: KeywordSuggestion[] = [{value: 'FIELDS'}];

    expect(autocompleteResult.suggestHashes).toEqual(false);
    expect(autocompleteResult.suggestKeywords).toEqual(keywordSuggestions);
});
