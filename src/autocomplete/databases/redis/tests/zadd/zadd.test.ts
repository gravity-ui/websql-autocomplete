import {KeywordSuggestion} from '../../../../shared';
import {parseRedisQueryWithCursor, parseRedisQueryWithoutCursor} from '../../index';

test('should not report errors on ZADD command', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('ZADD test 1 key1');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on ZADD command with existence clause', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('ZADD test XX 1 key1');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on ZADD command with update clause', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('ZADD test XX LT 1 key1');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on ZADD command with CH', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('ZADD test XX LT CH 1 key1');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on full ZADD command', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('ZADD test XX GT CH INCR 1 key1');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on full ZADD command with multiple members', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor(
        'ZADD test XX GT CH INCR 1 key1 2 key2',
    );

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should report errors on ZADD command without arguments', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('ZADD');

    expect(autocompleteResult.errors).toHaveLength(1);
});

test('should suggest keys after ZADD', () => {
    const autocompleteResult = parseRedisQueryWithCursor('ZADD |');

    expect(autocompleteResult.suggestSortedSets).toEqual(true);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});

test('should suggest keywords after ZADD test', () => {
    const autocompleteResult = parseRedisQueryWithCursor('ZADD test |');
    const keywordSuggestions: KeywordSuggestion[] = [
        {value: 'INCR'},
        {value: 'CH'},
        {value: 'GT'},
        {value: 'LT'},
        {value: 'NX'},
        {value: 'XX'},
    ];

    expect(autocompleteResult.suggestSortedSets).toEqual(false);
    expect(autocompleteResult.suggestKeywords).toEqual(keywordSuggestions);
});

test('should suggest keywords after ZADD test XX', () => {
    const autocompleteResult = parseRedisQueryWithCursor('ZADD test XX |');
    const keywordSuggestions: KeywordSuggestion[] = [
        {value: 'INCR'},
        {value: 'CH'},
        {value: 'GT'},
        {value: 'LT'},
    ];

    expect(autocompleteResult.suggestSortedSets).toEqual(false);
    expect(autocompleteResult.suggestKeywords).toEqual(keywordSuggestions);
});

test('should suggest keywords after ZADD test XX GT', () => {
    const autocompleteResult = parseRedisQueryWithCursor('ZADD test XX GT |');
    const keywordSuggestions: KeywordSuggestion[] = [{value: 'INCR'}, {value: 'CH'}];

    expect(autocompleteResult.suggestSortedSets).toEqual(false);
    expect(autocompleteResult.suggestKeywords).toEqual(keywordSuggestions);
});

test('should suggest keywords after ZADD test XX GT CH', () => {
    const autocompleteResult = parseRedisQueryWithCursor('ZADD test XX GT CH |');
    const keywordSuggestions: KeywordSuggestion[] = [{value: 'INCR'}];

    expect(autocompleteResult.suggestSortedSets).toEqual(false);
    expect(autocompleteResult.suggestKeywords).toEqual(keywordSuggestions);
});

test('should not suggest keywords after ZADD test XX GT CH INCR', () => {
    const autocompleteResult = parseRedisQueryWithCursor('ZADD test XX GT CH INCR |');

    expect(autocompleteResult.suggestSortedSets).toEqual(false);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});
