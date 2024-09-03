import {KeywordSuggestion} from '../../../../shared';
import {parseRedisQueryWithCursor, parseRedisQueryWithoutCursor} from '../../index';

test('should not report errors on COPY command', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('COPY test test');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on full COPY command', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('COPY test test DB 1 REPLACE');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should report errors on COPY command without arguments', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('COPY');

    expect(autocompleteResult.errors).toHaveLength(1);
});

test('should suggest keys after COPY', () => {
    const autocompleteResult = parseRedisQueryWithCursor('COPY |');

    expect(autocompleteResult.suggestKeys).toEqual(true);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});

test('should suggest keywords after identifier', () => {
    const autocompleteResult = parseRedisQueryWithCursor('COPY test test |');
    const keywordSuggestions: KeywordSuggestion[] = [{value: 'REPLACE'}, {value: 'DB'}];

    expect(autocompleteResult.suggestKeywords).toEqual(keywordSuggestions);
});

test('should suggest databases after DB', () => {
    const autocompleteResult = parseRedisQueryWithCursor('COPY test test DB |');

    expect(autocompleteResult.suggestDatabases).toEqual(true);
});

test('should suggest REPLACE after DB', () => {
    const autocompleteResult = parseRedisQueryWithCursor('COPY test test DB 1 |');
    const keywordSuggestions: KeywordSuggestion[] = [{value: 'REPLACE'}];

    expect(autocompleteResult.suggestKeywords).toEqual(keywordSuggestions);
});
