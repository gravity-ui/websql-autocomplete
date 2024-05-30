import {parseYqlQueryWithCursor} from '../../../../../shared/parse-query-with-cursor';
import {KeywordSuggestion} from '../../../../../autocomplete-types';

test('should suggest keywords after DROP', () => {
    const autocompleteResult = parseYqlQueryWithCursor('DROP |');
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
    const autocompleteResult = parseYqlQueryWithCursor('DROP VIEW |');
    const keywords: KeywordSuggestion[] = [];

    expect(autocompleteResult.suggestKeywords).toEqual(keywords);
    expect(autocompleteResult.suggestEntity).toEqual(['view']);
});
test('should suggest after TOPIC', () => {
    const autocompleteResult = parseYqlQueryWithCursor('DROP TOPIC |');
    const keywords: KeywordSuggestion[] = [];

    expect(autocompleteResult.suggestKeywords).toEqual(keywords);
    expect(autocompleteResult.suggestEntity).toEqual(['topic']);
});
test('should suggest after REPLICATION', () => {
    const autocompleteResult = parseYqlQueryWithCursor('DROP ASYNC REPLICATION |');
    const keywords: KeywordSuggestion[] = [];

    expect(autocompleteResult.suggestKeywords).toEqual(keywords);
    expect(autocompleteResult.suggestEntity).toEqual(['replication']);
});
test('should suggest after EXTERNAL DATA SOURCE', () => {
    const autocompleteResult = parseYqlQueryWithCursor('DROP EXTERNAL DATA SOURCE |');
    const keywords: KeywordSuggestion[] = [{value: 'IF'}];

    expect(autocompleteResult.suggestKeywords).toEqual(keywords);
    expect(autocompleteResult.suggestEntity).toEqual(['externalDataSource']);
});
test('should suggest after OBJECT', () => {
    const autocompleteResult = parseYqlQueryWithCursor('DROP OBJECT |');
    const keywords: KeywordSuggestion[] = [{value: 'IF'}];

    expect(autocompleteResult.suggestKeywords).toEqual(keywords);
    expect(autocompleteResult.suggestEntity).toEqual(['object']);
});
test('should suggest after USER', () => {
    const autocompleteResult = parseYqlQueryWithCursor('DROP USER |');
    const keywords: KeywordSuggestion[] = [{value: 'IF'}];

    expect(autocompleteResult.suggestKeywords).toEqual(keywords);
    expect(autocompleteResult.suggestEntity).toEqual(['user']);
});
test('should suggest after TABLE', () => {
    const autocompleteResult = parseYqlQueryWithCursor('DROP TABLE |');
    const keywords: KeywordSuggestion[] = [{value: 'IF'}];

    expect(autocompleteResult.suggestKeywords).toEqual(keywords);
    expect(autocompleteResult.suggestEntity).toEqual(['table']);
});

test('should suggest after EXTERNAL TABLE', () => {
    const autocompleteResult = parseYqlQueryWithCursor('DROP EXTERNAL TABLE |');
    const keywords: KeywordSuggestion[] = [{value: 'IF'}];

    expect(autocompleteResult.suggestKeywords).toEqual(keywords);
    expect(autocompleteResult.suggestEntity).toEqual(['externalTable']);
});
