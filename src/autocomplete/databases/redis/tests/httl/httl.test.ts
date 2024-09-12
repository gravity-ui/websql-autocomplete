import {KeywordSuggestion} from '../../../../shared';
import {parseRedisQueryWithCursor, parseRedisQueryWithoutCursor} from '../../index';

test('should not report errors on HTTL command', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('HTTL test FIELDS 1 key1');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on HTTL command with multiple keys', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('HTTL test FIELDS 2 key1 key2');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should report errors on HTTL command without arguments', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('HTTL');

    expect(autocompleteResult.errors).toHaveLength(1);
});

test('should suggest keys after HTTL', () => {
    const autocompleteResult = parseRedisQueryWithCursor('HTTL |');

    expect(autocompleteResult.suggestHashes).toEqual(true);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});

test('should suggest keywords after HTTL test ', () => {
    const autocompleteResult = parseRedisQueryWithCursor('HTTL test |');
    const keywordSuggestions: KeywordSuggestion[] = [{value: 'FIELDS'}];

    expect(autocompleteResult.suggestHashes).toEqual(false);
    expect(autocompleteResult.suggestKeywords).toEqual(keywordSuggestions);
});
