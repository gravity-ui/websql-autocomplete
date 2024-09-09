import {KeywordSuggestion} from '../../../../shared';
import {parseRedisQueryWithCursor, parseRedisQueryWithoutCursor} from '../../index';

test('should not report errors on ZRANGESTORE command', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('ZRANGESTORE dest test lex1 lex2');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on ZRANGESTORE command with range type clause', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor(
        'ZRANGESTORE dest test lex1 lex2 BYSCORE',
    );

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on ZRANGESTORE command with REV', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor(
        'ZRANGESTORE dest test lex1 lex2 BYLEX REV',
    );

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on ZRANGESTORE command with limit offset clause', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor(
        'ZRANGESTORE dest test lex1 lex2 BYLEX REV LIMIT 1 1',
    );

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should report errors on ZRANGESTORE command without arguments', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('ZRANGESTORE');

    expect(autocompleteResult.errors).toHaveLength(1);
});

test('should not suggest keys after ZRANGESTORE', () => {
    const autocompleteResult = parseRedisQueryWithCursor('ZRANGESTORE |');

    expect(autocompleteResult.suggestSortedSets).toEqual(false);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});

test('should suggest keys after ZRANGESTORE dest', () => {
    const autocompleteResult = parseRedisQueryWithCursor('ZRANGESTORE dest |');

    expect(autocompleteResult.suggestSortedSets).toEqual(true);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});

test('should not suggest keys after ZRANGESTORE dest test', () => {
    const autocompleteResult = parseRedisQueryWithCursor('ZRANGESTORE dest test |');

    expect(autocompleteResult.suggestSortedSets).toEqual(false);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});

test('should suggest keywords after ZRANGESTORE dest test lex1 lex2', () => {
    const autocompleteResult = parseRedisQueryWithCursor('ZRANGESTORE dest test lex1 lex2 |');
    const keywordSuggestions: KeywordSuggestion[] = [
        {value: 'LIMIT'},
        {value: 'REV'},
        {value: 'BYSCORE'},
        {value: 'BYLEX'},
    ];

    expect(autocompleteResult.suggestSortedSets).toEqual(false);
    expect(autocompleteResult.suggestKeywords).toEqual(keywordSuggestions);
});

test('should suggest keywords after ZRANGESTORE dest test lex1 lex2 BYLEX', () => {
    const autocompleteResult = parseRedisQueryWithCursor('ZRANGESTORE dest test lex1 lex2 BYLEX |');
    const keywordSuggestions: KeywordSuggestion[] = [{value: 'LIMIT'}, {value: 'REV'}];

    expect(autocompleteResult.suggestSortedSets).toEqual(false);
    expect(autocompleteResult.suggestKeywords).toEqual(keywordSuggestions);
});

test('should suggest keywords after ZRANGESTORE dest test lex1 lex2 BYLEX REV', () => {
    const autocompleteResult = parseRedisQueryWithCursor(
        'ZRANGESTORE dest test lex1 lex2 BYLEX REV |',
    );
    const keywordSuggestions: KeywordSuggestion[] = [{value: 'LIMIT'}];

    expect(autocompleteResult.suggestSortedSets).toEqual(false);
    expect(autocompleteResult.suggestKeywords).toEqual(keywordSuggestions);
});

test('should not suggest keywords after ZRANGESTORE dest test lex1 lex2 BYLEX REV LIMIT', () => {
    const autocompleteResult = parseRedisQueryWithCursor(
        'ZRANGESTORE dest test lex1 lex2 BYLEX REV LIMIT |',
    );

    expect(autocompleteResult.suggestSortedSets).toEqual(false);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});
