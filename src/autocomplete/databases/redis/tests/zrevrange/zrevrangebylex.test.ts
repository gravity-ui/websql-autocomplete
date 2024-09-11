import {KeywordSuggestion} from '../../../../shared';
import {parseRedisQueryWithCursor, parseRedisQueryWithoutCursor} from '../../index';

test('should not report errors on ZREVRANGEBYLEX command', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('ZREVRANGEBYLEX test lex1 lex2');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on full ZREVRANGEBYLEX command', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor(
        'ZREVRANGEBYLEX test lex1 lex2 LIMIT 1 1',
    );

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should report errors on ZREVRANGEBYLEX command without arguments', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('ZREVRANGEBYLEX');

    expect(autocompleteResult.errors).toHaveLength(1);
});

test('should suggest keys after ZREVRANGEBYLEX', () => {
    const autocompleteResult = parseRedisQueryWithCursor('ZREVRANGEBYLEX |');

    expect(autocompleteResult.suggestSortedSets).toEqual(true);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});

test('should not suggest keys after ZREVRANGEBYLEX test', () => {
    const autocompleteResult = parseRedisQueryWithCursor('ZREVRANGEBYLEX test |');

    expect(autocompleteResult.suggestSortedSets).toEqual(false);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});

test('should suggest keywords after ZREVRANGEBYLEX test lex1 lex2', () => {
    const autocompleteResult = parseRedisQueryWithCursor('ZREVRANGEBYLEX test lex1 lex2 |');
    const keywordSuggestions: KeywordSuggestion[] = [{value: 'LIMIT'}];

    expect(autocompleteResult.suggestSortedSets).toEqual(false);
    expect(autocompleteResult.suggestKeywords).toEqual(keywordSuggestions);
});

test('should not suggest keywords after ZREVRANGEBYLEX test lex1 lex2 LIMIT', () => {
    const autocompleteResult = parseRedisQueryWithCursor('ZREVRANGEBYLEX test lex1 lex2 LIMIT |');

    expect(autocompleteResult.suggestSortedSets).toEqual(false);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});
