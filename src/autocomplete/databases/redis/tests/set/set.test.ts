import {KeywordSuggestion} from '../../../../shared';
import {parseRedisQueryWithCursor, parseRedisQueryWithoutCursor} from '../../index';

test('should not report errors on SET command', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('SET test test');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should report errors on SET command without arguments', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('SET');

    expect(autocompleteResult.errors).toHaveLength(1);
});

test('should not report errors on SET command with NX argument', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('SET test test NX');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on SET command with XX argument', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('SET test test XX');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on SET command with GET argument', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('SET test test GET');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on SET command with EX argument', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('SET test test EX 123');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on SET command with PX argument', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('SET test test PX 123');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on SET command with EXAT argument', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('SET test test EXAT 123');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on SET command with PXAT argument', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('SET test test PXAT 123');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on SET command with KEEPTTL argument', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('SET test test KEEPTTL');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on SET command with all argument', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('SET test test XX GET PXAT 123');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should suggest keys after SET', () => {
    const autocompleteResult = parseRedisQueryWithCursor('SET |');

    expect(autocompleteResult.suggestStrings).toEqual(true);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});

test('should not suggest keys after SET key', () => {
    const autocompleteResult = parseRedisQueryWithCursor('SET key |');

    expect(autocompleteResult.suggestStrings).toEqual(false);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});

test('should keywords after SET key value', () => {
    const autocompleteResult = parseRedisQueryWithCursor('SET key value |');

    const keywordsSuggestion: KeywordSuggestion[] = [
        {
            value: 'KEEPTTL',
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
        {
            value: 'GET',
        },
        {
            value: 'NX',
        },
        {
            value: 'XX',
        },
    ];
    expect(autocompleteResult.suggestStrings).toEqual(false);
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should keywords after NX', () => {
    const autocompleteResult = parseRedisQueryWithCursor('SET key value NX |');

    const keywordsSuggestion: KeywordSuggestion[] = [
        {
            value: 'KEEPTTL',
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
        {
            value: 'GET',
        },
    ];
    expect(autocompleteResult.suggestStrings).toEqual(false);
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should keywords after XX', () => {
    const autocompleteResult = parseRedisQueryWithCursor('SET key value XX |');

    const keywordsSuggestion: KeywordSuggestion[] = [
        {
            value: 'KEEPTTL',
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
        {
            value: 'GET',
        },
    ];
    expect(autocompleteResult.suggestStrings).toEqual(false);
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should keywords after GET', () => {
    const autocompleteResult = parseRedisQueryWithCursor('SET key value GET |');

    const keywordsSuggestion: KeywordSuggestion[] = [
        {
            value: 'KEEPTTL',
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

test('should not keywords after EX', () => {
    const autocompleteResult = parseRedisQueryWithCursor('SET key value EX |');

    expect(autocompleteResult.suggestStrings).toEqual(false);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});

test('should not keywords after PX', () => {
    const autocompleteResult = parseRedisQueryWithCursor('SET key value PX |');

    expect(autocompleteResult.suggestStrings).toEqual(false);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});

test('should not keywords after EXAT', () => {
    const autocompleteResult = parseRedisQueryWithCursor('SET key value EXAT |');

    expect(autocompleteResult.suggestStrings).toEqual(false);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});

test('should not keywords after PXAT', () => {
    const autocompleteResult = parseRedisQueryWithCursor('SET key value PXAT |');

    expect(autocompleteResult.suggestStrings).toEqual(false);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});

test('should not keywords after KEEPTTL', () => {
    const autocompleteResult = parseRedisQueryWithCursor('SET key value KEEPTTL |');

    expect(autocompleteResult.suggestStrings).toEqual(false);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});
