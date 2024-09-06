import {KeywordSuggestion} from '../../../../shared';
import {parseRedisQueryWithCursor, parseRedisQueryWithoutCursor} from '../../index';

test('should not report errors on SSCAN command', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('SSCAN test 0');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should report errors on SSCAN command without arguments', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('SSCAN');

    expect(autocompleteResult.errors).toHaveLength(1);
});

test('should suggest keys after SSCAN', () => {
    const autocompleteResult = parseRedisQueryWithCursor('SSCAN |');

    expect(autocompleteResult.suggestSets).toEqual(true);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});

test('should not suggest keys after SSCAN test', () => {
    const autocompleteResult = parseRedisQueryWithCursor('SSCAN test |');

    expect(autocompleteResult.suggestSets).toEqual(false);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});

test('should suggest keywords after SSCAN test 0', () => {
    const autocompleteResult = parseRedisQueryWithCursor('SSCAN test 0 |');
    const keywordSuggestions: KeywordSuggestion[] = [{value: 'COUNT'}, {value: 'MATCH'}];

    expect(autocompleteResult.suggestKeywords).toEqual(keywordSuggestions);
});

test('should not report errors on SSCAN command with MATCH', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('SSCAN test 0 MATCH *');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on SSCAN command with COUNT', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('SSCAN test 0 COUNT 1');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on full SSCAN command ', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('SSCAN test 0 MATCH * COUNT 1');

    expect(autocompleteResult.errors).toHaveLength(0);
});
