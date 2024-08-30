import {KeywordSuggestion} from '../../../../shared';
import {parseRedisQueryWithCursor, parseRedisQueryWithoutCursor} from '../../index';

test('should not report errors on GETEX command', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('GETEX test');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should report errors on GETEX command without arguments', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('GETEX');

    expect(autocompleteResult.errors).toHaveLength(1);
});

test('should not report errors on GETEX command with EX argument', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('GETEX test EX 123');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on GETEX command with PX argument', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('GETEX test PX 123');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on GETEX command with EXAT argument', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('GETEX test EXAT 123');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on GETEX command with PXAT argument', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('GETEX test PXAT 123');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on GETEX command with PERSIST argument', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('GETEX test PERSIST');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should suggest keys after GETEX', () => {
    const autocompleteResult = parseRedisQueryWithCursor('GETEX |');

    expect(autocompleteResult.suggestStrings).toEqual(true);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});

test('should suggest keywords after GETEX key', () => {
    const autocompleteResult = parseRedisQueryWithCursor('GETEX test |');

    const keywordsSuggestion: KeywordSuggestion[] = [
        {
            value: 'PERSIST',
        },
        {
            value: 'EX',
        },
        {
            value: 'PX',
        },
        {
            value: 'EXAT',
        },
        {
            value: 'PXAT',
        },
    ];
    expect(autocompleteResult.suggestStrings).toEqual(false);
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should not suggest keywords after EX', () => {
    const autocompleteResult = parseRedisQueryWithCursor('GETEX test EX |');

    expect(autocompleteResult.suggestStrings).toEqual(false);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});

test('should not suggest keywords after PX', () => {
    const autocompleteResult = parseRedisQueryWithCursor('GETEX test PX |');

    expect(autocompleteResult.suggestStrings).toEqual(false);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});

test('should not suggest keywords after EXAT', () => {
    const autocompleteResult = parseRedisQueryWithCursor('GETEX test EXAT |');

    expect(autocompleteResult.suggestStrings).toEqual(false);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});

test('should not suggest keywords after PXAT', () => {
    const autocompleteResult = parseRedisQueryWithCursor('GETEX test PXAT |');

    expect(autocompleteResult.suggestStrings).toEqual(false);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});

test('should not suggest keywords after PERSIST', () => {
    const autocompleteResult = parseRedisQueryWithCursor('GETEX test PERSIST |');

    expect(autocompleteResult.suggestStrings).toEqual(false);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});
