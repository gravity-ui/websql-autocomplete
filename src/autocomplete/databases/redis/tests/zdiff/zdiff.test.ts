import {KeywordSuggestion} from '../../../../shared';
import {parseRedisQueryWithCursor, parseRedisQueryWithoutCursor} from '../../index';

test('should not report errors on ZDIFF command', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('ZDIFF 1 test');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on ZDIFF command with multiple keys', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('ZDIFF 1 test1 test2');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on full ZDIFF command', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('ZDIFF 1 test1 test2 test3 WITHSCORES');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should report errors on ZDIFF command without arguments', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('ZDIFF');

    expect(autocompleteResult.errors).toHaveLength(1);
});

test('should not suggest keys after ZDIFF', () => {
    const autocompleteResult = parseRedisQueryWithCursor('ZDIFF |');

    expect(autocompleteResult.suggestSortedSets).toEqual(false);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});

test('should suggest keys after ZDIFF 1', () => {
    const autocompleteResult = parseRedisQueryWithCursor('ZDIFF 1 |');

    expect(autocompleteResult.suggestSortedSets).toEqual(true);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});

test('should suggest keywords after ZDIFF 1 test', () => {
    const autocompleteResult = parseRedisQueryWithCursor('ZDIFF 1 test |');
    const keywordSuggestions: KeywordSuggestion[] = [{value: 'WITHSCORES'}];

    expect(autocompleteResult.suggestSortedSets).toEqual(true);
    expect(autocompleteResult.suggestKeywords).toEqual(keywordSuggestions);
});
