import {KeywordSuggestion} from '../../../../shared';
import {parseRedisQueryWithCursor, parseRedisQueryWithoutCursor} from '../../index';

test('should not report errors on LPOS command', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('LPOS test key');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on LPOS command with RANK', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('LPOS test key RANK 1');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on LPOS command with COUNT', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('LPOS test key COUNT 1');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on LPOS command with MAXLEN', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('LPOS test key MAXLEN 1');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on full LPOS command', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor(
        'LPOS test key RANK 1 COUNT 1 MAXLEN 1',
    );

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should report errors on LPOS command without arguments', () => {
    const autocompleteResult = parseRedisQueryWithoutCursor('LPOS');

    expect(autocompleteResult.errors).toHaveLength(1);
});

test('should suggest keys after LPOS', () => {
    const autocompleteResult = parseRedisQueryWithCursor('LPOS |');

    expect(autocompleteResult.suggestLists).toEqual(true);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});

test('should not suggest keys after LPOS test', () => {
    const autocompleteResult = parseRedisQueryWithCursor('LPOS test |');

    expect(autocompleteResult.suggestLists).toEqual(false);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});

test('should suggest keywords after LPOS test key', () => {
    const autocompleteResult = parseRedisQueryWithCursor('LPOS test key |');
    const keywordsSuggestions: KeywordSuggestion[] = [
        {value: 'MAXLEN'},
        {value: 'COUNT'},
        {value: 'RANK'},
    ];

    expect(autocompleteResult.suggestLists).toEqual(false);
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestions);
});

test('should suggest keywords after LPOS test key RANK 1', () => {
    const autocompleteResult = parseRedisQueryWithCursor('LPOS test key RANK 1 |');
    const keywordsSuggestions: KeywordSuggestion[] = [{value: 'MAXLEN'}, {value: 'COUNT'}];

    expect(autocompleteResult.suggestLists).toEqual(false);
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestions);
});

test('should suggest keywords after LPOS test key RANK 1 COUNT 1', () => {
    const autocompleteResult = parseRedisQueryWithCursor('LPOS test key RANK 1 COUNT 1 |');
    const keywordsSuggestions: KeywordSuggestion[] = [{value: 'MAXLEN'}];

    expect(autocompleteResult.suggestLists).toEqual(false);
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestions);
});
