import {KeywordSuggestion} from '../../../../shared';
import {parseRedisQueryWithCursor, parseRedisQueryWithoutCursor} from '../../index';

test('should not report errors on BLMOVE command', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('BLMOVE test1 test2 LEFT RIGHT 1');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should report errors on BLMOVE command without arguments', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('BLMOVE');

    expect(autocompleteResult.errors).toHaveLength(1);
});

test('should suggest keys after BLMOVE', () => {
    const autocompleteResult = parseRedisQueryWithCursor('BLMOVE |');

    expect(autocompleteResult.suggestLists).toEqual(true);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});

test('should suggest keys after BLMOVE test1', () => {
    const autocompleteResult = parseRedisQueryWithCursor('BLMOVE test1 |');

    expect(autocompleteResult.suggestLists).toEqual(true);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});

test('should suggest keywords after BLMOVE test1 test2', () => {
    const autocompleteResult = parseRedisQueryWithCursor('BLMOVE test1 test2 |');
    const keywordSuggestions: KeywordSuggestion[] = [{value: 'LEFT'}, {value: 'RIGHT'}];

    expect(autocompleteResult.suggestKeywords).toEqual(keywordSuggestions);
});

test('should suggest keywords after BLMOVE test1 test2 RIGHT', () => {
    const autocompleteResult = parseRedisQueryWithCursor('BLMOVE test1 test2 RIGHT |');
    const keywordSuggestions: KeywordSuggestion[] = [{value: 'LEFT'}, {value: 'RIGHT'}];

    expect(autocompleteResult.suggestKeywords).toEqual(keywordSuggestions);
});
