import {KeywordSuggestion} from '../../../../shared';
import {parseRedisQueryWithCursor, parseRedisQueryWithoutCursor} from '../../index';

test('should not report errors on LMOVE command', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('LMOVE test1 test2 LEFT RIGHT');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should report errors on LMOVE command without arguments', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('LMOVE');

    expect(autocompleteResult.errors).toHaveLength(1);
});

test('should suggest keys after LMOVE', () => {
    const autocompleteResult = parseRedisQueryWithCursor('LMOVE |');

    expect(autocompleteResult.suggestLists).toEqual(true);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});

test('should suggest keys after LMOVE test1', () => {
    const autocompleteResult = parseRedisQueryWithCursor('LMOVE test1 |');

    expect(autocompleteResult.suggestLists).toEqual(true);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});

test('should suggest keywords after LMOVE test1 test2', () => {
    const autocompleteResult = parseRedisQueryWithCursor('LMOVE test1 test2 |');
    const keywordSuggestions: KeywordSuggestion[] = [{value: 'LEFT'}, {value: 'RIGHT'}];

    expect(autocompleteResult.suggestKeywords).toEqual(keywordSuggestions);
});

test('should suggest keywords after LMOVE test1 test2 RIGHT', () => {
    const autocompleteResult = parseRedisQueryWithCursor('LMOVE test1 test2 RIGHT |');
    const keywordSuggestions: KeywordSuggestion[] = [{value: 'LEFT'}, {value: 'RIGHT'}];

    expect(autocompleteResult.suggestKeywords).toEqual(keywordSuggestions);
});
