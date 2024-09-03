import {KeywordSuggestion} from '../../../../shared';
import {parseRedisQueryWithCursor, parseRedisQueryWithoutCursor} from '../../index';

test('should not report errors on OBJECT ENCODING command', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('OBJECT ENCODING test');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should suggest keywords after OBJECT', () => {
    const autocompleteResult = parseRedisQueryWithCursor('OBJECT |');
    const keywordsSuggestions: KeywordSuggestion[] = [
        {value: 'ENCODING'},
        {value: 'FREQ'},
        {value: 'IDLETIME'},
        {value: 'REFCOUNT'},
    ];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestions);
});

test('should not report errors on OBJECT FREQ command', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('OBJECT FREQ test');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on OBJECT IDLETIME command', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('OBJECT IDLETIME test');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on OBJECT REFCOUNT command', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('OBJECT REFCOUNT test');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should suggest keys after OBJECT ENCODING', () => {
    const autocompleteResult = parseRedisQueryWithCursor('OBJECT ENCODING |');

    expect(autocompleteResult.suggestKeys).toEqual(true);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});

test('should suggest keys after OBJECT FREQ', () => {
    const autocompleteResult = parseRedisQueryWithCursor('OBJECT FREQ |');

    expect(autocompleteResult.suggestKeys).toEqual(true);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});

test('should suggest keys after OBJECT IDLETIME', () => {
    const autocompleteResult = parseRedisQueryWithCursor('OBJECT IDLETIME |');

    expect(autocompleteResult.suggestKeys).toEqual(true);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});

test('should suggest keys after OBJECT REFCOUNT', () => {
    const autocompleteResult = parseRedisQueryWithCursor('OBJECT REFCOUNT |');

    expect(autocompleteResult.suggestKeys).toEqual(true);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});
