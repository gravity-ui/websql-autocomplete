import {KeywordSuggestion} from '../../../../../shared/autocomplete-types';
import {parseYqlQueryWithCursor} from '../../../index';

test('should suggest keywords after ALTER', () => {
    const autocompleteResult = parseYqlQueryWithCursor('ALTER |');

    const keywords: KeywordSuggestion[] = [
        {value: 'TRANSFER'},
        {value: 'SEQUENCE'},
        {value: 'RESOURCE'},
        {value: 'BACKUP'},
        {value: 'ASYNC'},
        {value: 'TABLESTORE'},
        {value: 'TOPIC'},
        {value: 'EXTERNAL'},
        {value: 'OBJECT'},
        {value: 'GROUP'},
        {value: 'USER'},
        {value: 'TABLE'},
    ];

    expect(autocompleteResult.suggestKeywords).toEqual(keywords);
});

test('should suggest keywords after TABLE', () => {
    const autocompleteResult = parseYqlQueryWithCursor('ALTER TABLE |');

    const keywords: KeywordSuggestion[] = [];
    expect(autocompleteResult.suggestKeywords).toEqual(keywords);
    expect(autocompleteResult.suggestEntity).toEqual(['table']);
});

test('should suggest keywords after TABLESTORE', () => {
    const autocompleteResult = parseYqlQueryWithCursor('ALTER TABLESTORE |');

    const keywords: KeywordSuggestion[] = [];
    expect(autocompleteResult.suggestKeywords).toEqual(keywords);
    expect(autocompleteResult.suggestEntity).toEqual(['tableStore']);
});
test('should suggest keywords after TOPIC', () => {
    const autocompleteResult = parseYqlQueryWithCursor('ALTER TOPIC |');
    const keywords: KeywordSuggestion[] = [{value: 'IF'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywords);
    expect(autocompleteResult.suggestEntity).toEqual(['topic']);
});
test('should suggest keywords after OBJECT', () => {
    const autocompleteResult = parseYqlQueryWithCursor('ALTER OBJECT |');

    const keywords: KeywordSuggestion[] = [];
    expect(autocompleteResult.suggestKeywords).toEqual(keywords);
    expect(autocompleteResult.suggestEntity).toEqual(['object']);
});
test('should suggest keywords after GROUP', () => {
    const autocompleteResult = parseYqlQueryWithCursor('ALTER GROUP |');

    const keywords: KeywordSuggestion[] = [];
    expect(autocompleteResult.suggestKeywords).toEqual(keywords);
    expect(autocompleteResult.suggestEntity).toEqual(['group']);
});
test('should suggest keywords after USER', () => {
    const autocompleteResult = parseYqlQueryWithCursor('ALTER USER |');

    const keywords: KeywordSuggestion[] = [];
    expect(autocompleteResult.suggestKeywords).toEqual(keywords);
    expect(autocompleteResult.suggestEntity).toEqual(['user']);
});

test('should suggest keywords after table name', () => {
    const autocompleteResult = parseYqlQueryWithCursor('ALTER TABLE test_table |');
    const keywords: KeywordSuggestion[] = [
        {value: 'WITH'},
        {value: 'ADD'},
        {value: 'DROP'},
        {value: 'ALTER'},
        {value: 'SET'},
        {value: 'RESET'},
        {value: 'RENAME'},
    ];
    expect(autocompleteResult.suggestKeywords).toEqual(keywords);
});
test('should suggest object after between statements', () => {
    const autocompleteResult = parseYqlQueryWithCursor(
        'ALTER TABLE before_table DROP COLUMN id; ALTER OBJECT | ; ALTER TABLE after_table DROP COLUMN id;',
    );

    expect(autocompleteResult.suggestEntity).toEqual(['object']);
});
