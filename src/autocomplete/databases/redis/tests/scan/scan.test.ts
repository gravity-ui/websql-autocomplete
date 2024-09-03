import {KeywordSuggestion} from '../../../../shared';
import {parseRedisQueryWithCursor, parseRedisQueryWithoutCursor} from '../../index';

test('should not report errors on SCAN command', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('SCAN 0');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should report errors on SCAN command without arguments', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('SCAN');

    expect(autocompleteResult.errors).toHaveLength(1);
});

test('should suggest keywords after SCAN 0', () => {
    const autocompleteResult = parseRedisQueryWithCursor('SCAN 0 |');
    const keywordSuggestions: KeywordSuggestion[] = [
        {value: 'TYPE'},
        {value: 'COUNT'},
        {value: 'MATCH'},
    ];

    expect(autocompleteResult.suggestKeywords).toEqual(keywordSuggestions);
});

test('should not report errors on SCAN command with MATCH', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('SCAN 0 MATCH *');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on SCAN command with TYPE', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('SCAN 0 TYPE string');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on SCAN command with COUNT', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('SCAN 0 COUNT 1');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on full SCAN command ', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('SCAN 0 MATCH * COUNT 1 TYPE string');

    expect(autocompleteResult.errors).toHaveLength(0);
});
