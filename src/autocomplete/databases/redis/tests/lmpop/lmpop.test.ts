import {KeywordSuggestion} from '../../../../shared';
import {parseRedisQueryWithCursor, parseRedisQueryWithoutCursor} from '../../index';

test('should not report errors on LMPOP command', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('LMPOP 1 test1 LEFT COUNT 1');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should report errors on LMPOP command without arguments', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('LMPOP');

    expect(autocompleteResult.errors).toHaveLength(1);
});

test('should not suggest keys after LMPOP', () => {
    const autocompleteResult = parseRedisQueryWithCursor('LMPOP |');

    expect(autocompleteResult.suggestLists).toEqual(false);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});

test('should suggest keys after LMPOP 1', () => {
    const autocompleteResult = parseRedisQueryWithCursor('LMPOP 1 |');

    expect(autocompleteResult.suggestLists).toEqual(true);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});

test('should suggest keys after LMPOP 1 test1', () => {
    const autocompleteResult = parseRedisQueryWithCursor('LMPOP 1 test1 |');
    const keywordSuggestions: KeywordSuggestion[] = [{value: 'LEFT'}, {value: 'RIGHT'}];

    expect(autocompleteResult.suggestLists).toEqual(true);
    expect(autocompleteResult.suggestKeywords).toEqual(keywordSuggestions);
});

test('should suggest keywords after LMPOP 1 test1 test2', () => {
    const autocompleteResult = parseRedisQueryWithCursor('LMPOP 1 test1 test2 |');
    const keywordSuggestions: KeywordSuggestion[] = [{value: 'LEFT'}, {value: 'RIGHT'}];

    expect(autocompleteResult.suggestLists).toEqual(true);
    expect(autocompleteResult.suggestKeywords).toEqual(keywordSuggestions);
});

test('should suggest keywords after LMPOP 1 test1 test2 RIGHT', () => {
    const autocompleteResult = parseRedisQueryWithCursor('LMPOP 1 test1 test2 RIGHT |');
    const keywordSuggestions: KeywordSuggestion[] = [{value: 'COUNT'}];

    expect(autocompleteResult.suggestKeywords).toEqual(keywordSuggestions);
});

test('should not suggest keys after LMPOP 1 test1 test2 RIGHT COUNT', () => {
    const autocompleteResult = parseRedisQueryWithCursor('LMPOP 1 test1 test2 RIGHT COUNT |');

    expect(autocompleteResult.suggestLists).toEqual(false);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});
