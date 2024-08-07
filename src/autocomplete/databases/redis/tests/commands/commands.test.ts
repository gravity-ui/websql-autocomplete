import {KeywordSuggestion} from '../../../../shared';
import {parseRedisQueryWithCursor, parseRedisQueryWithoutCursor} from '../../index';

test('should not report errors on multiple (2) commands', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('GET test\nSET test test');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on multiple (3) commands', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('GET test\nSET test test\nGET test');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should suggest all commands', () => {
    const autocompleteResult = parseRedisQueryWithCursor('|');

    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: 'SET'},
        {value: 'GET'},
        {value: 'INCR'},
        {value: 'DECR'},
    ];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest all commands on second line', () => {
    const autocompleteResult = parseRedisQueryWithCursor('GET test\n|');

    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: 'SET'},
        {value: 'GET'},
        {value: 'INCR'},
        {value: 'DECR'},
    ];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest all commands on third line', () => {
    const autocompleteResult = parseRedisQueryWithCursor('GET test\n\n|');

    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: 'SET'},
        {value: 'GET'},
        {value: 'INCR'},
        {value: 'DECR'},
    ];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});
