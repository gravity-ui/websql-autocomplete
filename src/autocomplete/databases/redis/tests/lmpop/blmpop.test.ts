import {KeywordSuggestion} from '../../../../shared';
import {parseRedisQueryWithCursor, parseRedisQueryWithoutCursor} from '../../index';

test('should not report errors on BLMPOP command', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('BLMPOP 1 2 test1 LEFT COUNT 1');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should report errors on BLMPOP command without arguments', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('BLMPOP');

    expect(autocompleteResult.errors).toHaveLength(1);
});

test('should not suggest keys after BLMPOP', () => {
    const autocompleteResult = parseRedisQueryWithCursor('BLMPOP |');

    expect(autocompleteResult.suggestLists).toEqual(false);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});

test('should not suggest keys after BLMPOP 1', () => {
    const autocompleteResult = parseRedisQueryWithCursor('BLMPOP 1 |');

    expect(autocompleteResult.suggestLists).toEqual(false);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});

test('should suggest keys after BLMPOP 1 2', () => {
    const autocompleteResult = parseRedisQueryWithCursor('BLMPOP 1 2 |');

    expect(autocompleteResult.suggestLists).toEqual(true);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});

test('should suggest keys after BLMPOP 1 2 test1', () => {
    const autocompleteResult = parseRedisQueryWithCursor('BLMPOP 1 2 test1 |');
    const keywordSuggestions: KeywordSuggestion[] = [{value: 'LEFT'}, {value: 'RIGHT'}];

    expect(autocompleteResult.suggestLists).toEqual(true);
    expect(autocompleteResult.suggestKeywords).toEqual(keywordSuggestions);
});

test('should suggest keywords after BLMPOP 1 2 test1 test2', () => {
    const autocompleteResult = parseRedisQueryWithCursor('BLMPOP 1 2 test1 test2 |');
    const keywordSuggestions: KeywordSuggestion[] = [{value: 'LEFT'}, {value: 'RIGHT'}];

    expect(autocompleteResult.suggestLists).toEqual(true);
    expect(autocompleteResult.suggestKeywords).toEqual(keywordSuggestions);
});

test('should suggest keywords after BLMPOP 1 2 test1 test2 RIGHT', () => {
    const autocompleteResult = parseRedisQueryWithCursor('BLMPOP 1 2 test1 test2 RIGHT |');
    const keywordSuggestions: KeywordSuggestion[] = [{value: 'COUNT'}];

    expect(autocompleteResult.suggestKeywords).toEqual(keywordSuggestions);
});

test('should not suggest keys after BLMPOP 1 2 test1 test2 RIGHT COUNT', () => {
    const autocompleteResult = parseRedisQueryWithCursor('BLMPOP 1 2 test1 test2 RIGHT COUNT |');

    expect(autocompleteResult.suggestLists).toEqual(false);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});
