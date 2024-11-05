import {KeywordSuggestion} from '../../../../shared';
import {parseRedisQueryWithCursor, parseRedisQueryWithoutCursor} from '../../index';

test('should not report errors on LINSERT command', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('LINSERT test BEFORE key1 key2');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should report errors on LINSERT command without arguments', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('LINSERT');

    expect(autocompleteResult.errors).toHaveLength(1);
});

test('should suggest keys after LINSERT', () => {
    const autocompleteResult = parseRedisQueryWithCursor('LINSERT |');

    expect(autocompleteResult.suggestLists).toEqual(true);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});

test('should suggest keywords after LINSERT test', () => {
    const autocompleteResult = parseRedisQueryWithCursor('LINSERT test |');
    const keywordsSuggestions: KeywordSuggestion[] = [{value: 'BEFORE'}, {value: 'AFTER'}];

    expect(autocompleteResult.suggestLists).toEqual(false);
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestions);
});

test('should not suggest keywords after LINSERT test BEFORE', () => {
    const autocompleteResult = parseRedisQueryWithCursor('LINSERT test BEFORE |');

    expect(autocompleteResult.suggestLists).toEqual(false);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});
