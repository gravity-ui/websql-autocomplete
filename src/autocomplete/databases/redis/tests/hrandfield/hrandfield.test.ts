import {KeywordSuggestion} from '../../../../shared';
import {parseRedisQueryWithCursor, parseRedisQueryWithoutCursor} from '../../index';

test('should not report errors on HRANDFIELD command', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('HRANDFIELD test');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on HRANDFIELD command with number', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('HRANDFIELD test 1');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on full HRANDFIELD command', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('HRANDFIELD test 1 WITHVALUES');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should report errors on HRANDFIELD command without arguments', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('HRANDFIELD');

    expect(autocompleteResult.errors).toHaveLength(1);
});

test('should suggest keys after HRANDFIELD', () => {
    const autocompleteResult = parseRedisQueryWithCursor('HRANDFIELD |');

    expect(autocompleteResult.suggestHashes).toEqual(true);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});

test('should not suggest keys after HRANDFIELD test', () => {
    const autocompleteResult = parseRedisQueryWithCursor('HRANDFIELD test |');

    expect(autocompleteResult.suggestHashes).toEqual(false);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});

test('should suggest keywords after HRANDFIELD test 1', () => {
    const autocompleteResult = parseRedisQueryWithCursor('HRANDFIELD test 1 |');
    const keywordSuggestions: KeywordSuggestion[] = [{value: 'WITHVALUES'}];

    expect(autocompleteResult.suggestHashes).toEqual(false);
    expect(autocompleteResult.suggestKeywords).toEqual(keywordSuggestions);
});
