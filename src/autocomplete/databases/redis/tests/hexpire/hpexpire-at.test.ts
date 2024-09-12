import {KeywordSuggestion} from '../../../../shared';
import {parseRedisQueryWithCursor, parseRedisQueryWithoutCursor} from '../../index';

test('should not report errors on HPEXPIREAT command', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('HPEXPIREAT test 1 FIELDS 1 key1');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on HPEXPIREAT command with multiple keys', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('HPEXPIREAT test 1 FIELDS 2 key1 key2');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on full HPEXPIREAT command', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor(
        'HPEXPIREAT test 1 NX FIELDS 2 key1 key2',
    );

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should report errors on HPEXPIREAT command without arguments', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('HPEXPIREAT');

    expect(autocompleteResult.errors).toHaveLength(1);
});

test('should suggest keys after HPEXPIREAT', () => {
    const autocompleteResult = parseRedisQueryWithCursor('HPEXPIREAT |');

    expect(autocompleteResult.suggestHashes).toEqual(true);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});

test('should not suggest keys after HPEXPIREAT test', () => {
    const autocompleteResult = parseRedisQueryWithCursor('HPEXPIREAT test |');

    expect(autocompleteResult.suggestHashes).toEqual(false);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});

test('should suggest keywords after HPEXPIREAT test 1', () => {
    const autocompleteResult = parseRedisQueryWithCursor('HPEXPIREAT test 1 |');
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

test('should suggest keywords after HPEXPIREAT test 1 XX', () => {
    const autocompleteResult = parseRedisQueryWithCursor('HPEXPIREAT test 1 XX |');
    const keywordSuggestions: KeywordSuggestion[] = [{value: 'FIELDS'}];

    expect(autocompleteResult.suggestHashes).toEqual(false);
    expect(autocompleteResult.suggestKeywords).toEqual(keywordSuggestions);
});
