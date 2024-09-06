import {KeywordSuggestion} from '../../../../shared';
import {parseRedisQueryWithCursor, parseRedisQueryWithoutCursor} from '../../index';

test('should not report errors on SINTERCARD command', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('SINTERCARD 1 test');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on SINTERCARD command with multiple keys', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('SINTERCARD 1 test1 test2 test3');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on full SINTERCARD command', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor(
        'SINTERCARD 1 test1 test2 test3 LIMIT 1',
    );

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should report errors on SINTERCARD command without arguments', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('SINTERCARD');

    expect(autocompleteResult.errors).toHaveLength(1);
});

test('should not suggest keys after SINTERCARD', () => {
    const autocompleteResult = parseRedisQueryWithCursor('SINTERCARD |');

    expect(autocompleteResult.suggestSets).toEqual(false);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});

test('should suggest keys after SINTERCARD 1', () => {
    const autocompleteResult = parseRedisQueryWithCursor('SINTERCARD 1 |');

    expect(autocompleteResult.suggestSets).toEqual(true);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});

test('should suggest keys and keywords after SINTERCARD 1 test1', () => {
    const autocompleteResult = parseRedisQueryWithCursor('SINTERCARD 1 test1 |');
    const keywordSuggestions: KeywordSuggestion[] = [{value: 'LIMIT'}];

    expect(autocompleteResult.suggestSets).toEqual(true);
    expect(autocompleteResult.suggestKeywords).toEqual(keywordSuggestions);
});

test('should suggest keys and keywords after SINTERCARD 1 test1 test2', () => {
    const autocompleteResult = parseRedisQueryWithCursor('SINTERCARD 1 test1 test2 |');
    const keywordSuggestions: KeywordSuggestion[] = [{value: 'LIMIT'}];

    expect(autocompleteResult.suggestSets).toEqual(true);
    expect(autocompleteResult.suggestKeywords).toEqual(keywordSuggestions);
});
