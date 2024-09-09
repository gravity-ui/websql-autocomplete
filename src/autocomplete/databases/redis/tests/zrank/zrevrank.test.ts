import {KeywordSuggestion} from '../../../../shared';
import {parseRedisQueryWithCursor, parseRedisQueryWithoutCursor} from '../../index';

test('should not report errors on ZREVRANK command', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('ZREVRANK test member');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on full ZREVRANK command', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('ZREVRANK test member WITHSCORE');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should report errors on ZREVRANK command without arguments', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('ZREVRANK');

    expect(autocompleteResult.errors).toHaveLength(1);
});

test('should suggest keys after ZREVRANK', () => {
    const autocompleteResult = parseRedisQueryWithCursor('ZREVRANK |');

    expect(autocompleteResult.suggestSortedSets).toEqual(true);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});

test('should not suggest keys after ZREVRANK test', () => {
    const autocompleteResult = parseRedisQueryWithCursor('ZREVRANK test |');

    expect(autocompleteResult.suggestSortedSets).toEqual(false);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});

test('should suggest keywords after ZREVRANK test member', () => {
    const autocompleteResult = parseRedisQueryWithCursor('ZREVRANK test member |');
    const keywordSuggestions: KeywordSuggestion[] = [{value: 'WITHSCORE'}];

    expect(autocompleteResult.suggestSortedSets).toEqual(false);
    expect(autocompleteResult.suggestKeywords).toEqual(keywordSuggestions);
});
