import {KeywordSuggestion} from '../../../../shared';
import {parseRedisQueryWithCursor, parseRedisQueryWithoutCursor} from '../../index';

test('should not report errors on ZRANK command', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('ZRANK test member');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on full ZRANK command', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('ZRANK test member WITHSCORE');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should report errors on ZRANK command without arguments', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('ZRANK');

    expect(autocompleteResult.errors).toHaveLength(1);
});

test('should suggest keys after ZRANK', () => {
    const autocompleteResult = parseRedisQueryWithCursor('ZRANK |');

    expect(autocompleteResult.suggestSortedSets).toEqual(true);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});

test('should not suggest keys after ZRANK test', () => {
    const autocompleteResult = parseRedisQueryWithCursor('ZRANK test |');

    expect(autocompleteResult.suggestSortedSets).toEqual(false);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});

test('should suggest keywords after ZRANK test member', () => {
    const autocompleteResult = parseRedisQueryWithCursor('ZRANK test member |');
    const keywordSuggestions: KeywordSuggestion[] = [{value: 'WITHSCORE'}];

    expect(autocompleteResult.suggestSortedSets).toEqual(false);
    expect(autocompleteResult.suggestKeywords).toEqual(keywordSuggestions);
});
