import {KeywordSuggestion} from '../../../../shared';
import {parseRedisQueryWithCursor, parseRedisQueryWithoutCursor} from '../../index';

test('should not report errors on HEXPIRE command', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('HEXPIRE test 1 FIELDS 1 key1');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on HEXPIRE command with multiple keys', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('HEXPIRE test 1 FIELDS 2 key1 key2');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on full HEXPIRE command', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('HEXPIRE test 1 NX FIELDS 2 key1 key2');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should report errors on HEXPIRE command without arguments', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('HEXPIRE');

    expect(autocompleteResult.errors).toHaveLength(1);
});

test('should suggest keys after HEXPIRE', () => {
    const autocompleteResult = parseRedisQueryWithCursor('HEXPIRE |');

    expect(autocompleteResult.suggestHashes).toEqual(true);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});

test('should not suggest keys after HEXPIRE test', () => {
    const autocompleteResult = parseRedisQueryWithCursor('HEXPIRE test |');

    expect(autocompleteResult.suggestHashes).toEqual(false);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});

test('should suggest keywords after HEXPIRE test 1', () => {
    const autocompleteResult = parseRedisQueryWithCursor('HEXPIRE test 1 |');
    const keywordSuggestions: KeywordSuggestion[] = [
        {value: 'FIELDS'},
        {value: 'GT'},
        {value: 'LT'},
        {value: 'NX'},
        {value: 'XX'},
    ];

    expect(autocompleteResult.suggestHashes).toEqual(false);
    expect(autocompleteResult.suggestKeywords).toEqual(keywordSuggestions);
});

test('should suggest keywords after HEXPIRE test 1 XX', () => {
    const autocompleteResult = parseRedisQueryWithCursor('HEXPIRE test 1 XX |');
    const keywordSuggestions: KeywordSuggestion[] = [{value: 'FIELDS'}];

    expect(autocompleteResult.suggestHashes).toEqual(false);
    expect(autocompleteResult.suggestKeywords).toEqual(keywordSuggestions);
});
