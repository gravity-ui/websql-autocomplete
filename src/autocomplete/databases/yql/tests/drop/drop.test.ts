import {parseYQLQueryWithCursor} from '../../../../shared/parse-query-with-cursor';
import {KeywordSuggestion} from '../../../../autocomplete-types';

test('should suggest keywords after DROP', () => {
    const autocompleteResult = parseYQLQueryWithCursor('DROP |');
    const keywords: KeywordSuggestion[] = [
        {value: 'VIEW'},
        {value: 'TOPIC'},
        {value: 'ASYNC'},
        {value: 'EXTERNAL'},
        {value: 'OBJECT'},
        {value: 'GROUP'},
        {value: 'USER'},
        {value: 'TABLESTORE'},
        {value: 'TABLE'},
    ];

    expect(autocompleteResult.suggestKeywords).toEqual(keywords);
});

test('should suggest after VIEW', () => {
    const autocompleteResult = parseYQLQueryWithCursor('DROP VIEW |');
    const keywords: KeywordSuggestion[] = [];

    expect(autocompleteResult.suggestKeywords).toEqual(keywords);
    expect(autocompleteResult.suggestEntity).toEqual(['view']);
});
test('should suggest after TOPIC', () => {
    const autocompleteResult = parseYQLQueryWithCursor('DROP TOPIC |');
    const keywords: KeywordSuggestion[] = [];

    expect(autocompleteResult.suggestKeywords).toEqual(keywords);
    expect(autocompleteResult.suggestEntity).toEqual(['topic']);
});
test('should suggest after REPLICATION', () => {
    const autocompleteResult = parseYQLQueryWithCursor('DROP ASYNC REPLICATION |');
    const keywords: KeywordSuggestion[] = [];

    expect(autocompleteResult.suggestKeywords).toEqual(keywords);
    expect(autocompleteResult.suggestEntity).toEqual(['replication']);
});
test('should suggest after EXTERNAL DATA SOURCE', () => {
    const autocompleteResult = parseYQLQueryWithCursor('DROP EXTERNAL DATA SOURCE |');
    const keywords: KeywordSuggestion[] = [{value: 'IF'}];

    expect(autocompleteResult.suggestKeywords).toEqual(keywords);
    expect(autocompleteResult.suggestEntity).toEqual(['externalDataSource']);
});
test('should suggest after OBJECT', () => {
    const autocompleteResult = parseYQLQueryWithCursor('DROP OBJECT |');
    const keywords: KeywordSuggestion[] = [{value: 'IF'}];

    expect(autocompleteResult.suggestKeywords).toEqual(keywords);
    expect(autocompleteResult.suggestEntity).toEqual(['object']);
});
test('should suggest after USER', () => {
    const autocompleteResult = parseYQLQueryWithCursor('DROP USER |');
    const keywords: KeywordSuggestion[] = [{value: 'IF'}];

    expect(autocompleteResult.suggestKeywords).toEqual(keywords);
    expect(autocompleteResult.suggestEntity).toEqual(['user']);
});
test('should suggest after TABLE', () => {
    const autocompleteResult = parseYQLQueryWithCursor('DROP TABLE |');
    const keywords: KeywordSuggestion[] = [{value: 'IF'}];

    expect(autocompleteResult.suggestKeywords).toEqual(keywords);
    expect(autocompleteResult.suggestEntity).toEqual(['table']);
});
