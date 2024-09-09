import {KeywordSuggestion} from '../../../../shared';
import {parseRedisQueryWithCursor, parseRedisQueryWithoutCursor} from '../../index';

test('should not report errors on ZRANGE command', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('ZRANGE test lex1 lex2');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on ZRANGE command with range type clause', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('ZRANGE test lex1 lex2 BYSCORE');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on ZRANGE command with REV', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('ZRANGE test lex1 lex2 BYLEX REV');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on ZRANGE command with limit offset clause', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor(
        'ZRANGE test lex1 lex2 BYLEX REV LIMIT 1 1',
    );

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on full ZRANGE command', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor(
        'ZRANGE test lex1 lex2 BYSCORE REV LIMIT 1 1 WITHSCORES',
    );

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should report errors on ZRANGE command without arguments', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('ZRANGE');

    expect(autocompleteResult.errors).toHaveLength(1);
});

test('should suggest keys after ZRANGE', () => {
    const autocompleteResult = parseRedisQueryWithCursor('ZRANGE |');

    expect(autocompleteResult.suggestSortedSets).toEqual(true);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});

test('should not suggest keys after ZRANGE test', () => {
    const autocompleteResult = parseRedisQueryWithCursor('ZRANGE test |');

    expect(autocompleteResult.suggestSortedSets).toEqual(false);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});

test('should suggest keywords after ZRANGE test lex1 lex2', () => {
    const autocompleteResult = parseRedisQueryWithCursor('ZRANGE test lex1 lex2 |');
    const keywordSuggestions: KeywordSuggestion[] = [
        {value: 'WITHSCORES'},
        {value: 'LIMIT'},
        {value: 'REV'},
        {value: 'BYSCORE'},
        {value: 'BYLEX'},
    ];

    expect(autocompleteResult.suggestSortedSets).toEqual(false);
    expect(autocompleteResult.suggestKeywords).toEqual(keywordSuggestions);
});

test('should suggest keywords after ZRANGE test lex1 lex2 BYLEX', () => {
    const autocompleteResult = parseRedisQueryWithCursor('ZRANGE test lex1 lex2 BYLEX |');
    const keywordSuggestions: KeywordSuggestion[] = [
        {value: 'WITHSCORES'},
        {value: 'LIMIT'},
        {value: 'REV'},
    ];

    expect(autocompleteResult.suggestSortedSets).toEqual(false);
    expect(autocompleteResult.suggestKeywords).toEqual(keywordSuggestions);
});

test('should suggest keywords after ZRANGE test lex1 lex2 BYLEX REV', () => {
    const autocompleteResult = parseRedisQueryWithCursor('ZRANGE test lex1 lex2 BYLEX REV |');
    const keywordSuggestions: KeywordSuggestion[] = [{value: 'WITHSCORES'}, {value: 'LIMIT'}];

    expect(autocompleteResult.suggestSortedSets).toEqual(false);
    expect(autocompleteResult.suggestKeywords).toEqual(keywordSuggestions);
});

test('should not suggest keywords after ZRANGE test lex1 lex2 BYLEX REV LIMIT', () => {
    const autocompleteResult = parseRedisQueryWithCursor('ZRANGE test lex1 lex2 BYLEX REV LIMIT |');

    expect(autocompleteResult.suggestSortedSets).toEqual(false);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});

test('should suggest keywords after ZRANGE test lex1 lex2 BYLEX REV LIMIT 1 1', () => {
    const autocompleteResult = parseRedisQueryWithCursor(
        'ZRANGE test lex1 lex2 BYLEX REV LIMIT 1 1 |',
    );
    const keywordSuggestions: KeywordSuggestion[] = [{value: 'WITHSCORES'}];

    expect(autocompleteResult.suggestSortedSets).toEqual(false);
    expect(autocompleteResult.suggestKeywords).toEqual(keywordSuggestions);
});
