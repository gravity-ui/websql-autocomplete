import {KeywordSuggestion} from '../../../../autocomplete-types';
import {parseYQLQueryWithCursor} from '../../../../shared/parse-query-with-cursor';

test('should suggest keywords after ALTER', () => {
    const autocompleteResult = parseYQLQueryWithCursor('ALTER |');

    const keywords: KeywordSuggestion[] = [
        {value: 'TABLESTORE'},
        {value: 'TOPIC'},
        {value: 'OBJECT'},
        {value: 'GROUP'},
        {value: 'USER'},
        {value: 'TABLE'},
    ];

    expect(autocompleteResult.suggestKeywords).toEqual(keywords);
});

test('should suggest keywords after TABLE', () => {
    const autocompleteResult = parseYQLQueryWithCursor('ALTER TABLE |');

    const keywords: KeywordSuggestion[] = [];
    expect(autocompleteResult.suggestKeywords).toEqual(keywords);
    expect(autocompleteResult.suggestEntity).toEqual(['table']);
});

test('should suggest keywords after TABLESTORE', () => {
    const autocompleteResult = parseYQLQueryWithCursor('ALTER TABLESTORE |');

    const keywords: KeywordSuggestion[] = [];
    expect(autocompleteResult.suggestKeywords).toEqual(keywords);
    expect(autocompleteResult.suggestEntity).toEqual(['tableStore']);
});
test('should suggest keywords after TOPIC', () => {
    const autocompleteResult = parseYQLQueryWithCursor('ALTER TOPIC |');
    const keywords: KeywordSuggestion[] = [];
    expect(autocompleteResult.suggestKeywords).toEqual(keywords);
    expect(autocompleteResult.suggestEntity).toEqual(['topic']);
});
test('should suggest keywords after OBJECT', () => {
    const autocompleteResult = parseYQLQueryWithCursor('ALTER OBJECT |');

    const keywords: KeywordSuggestion[] = [];
    expect(autocompleteResult.suggestKeywords).toEqual(keywords);
    expect(autocompleteResult.suggestEntity).toEqual(['object']);
});
test('should suggest keywords after GROUP', () => {
    const autocompleteResult = parseYQLQueryWithCursor('ALTER GROUP |');

    const keywords: KeywordSuggestion[] = [];
    expect(autocompleteResult.suggestKeywords).toEqual(keywords);
    expect(autocompleteResult.suggestEntity).toEqual(['group']);
});
test('should suggest keywords after USER', () => {
    const autocompleteResult = parseYQLQueryWithCursor('ALTER USER |');

    const keywords: KeywordSuggestion[] = [];
    expect(autocompleteResult.suggestKeywords).toEqual(keywords);
    expect(autocompleteResult.suggestEntity).toEqual(['user']);
});

test('should suggest keywords after table name', () => {
    const autocompleteResult = parseYQLQueryWithCursor('ALTER TABLE test_table |');
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
test('should suggest tables after ALTER VIEW between statements', () => {
    const autocompleteResult = parseYQLQueryWithCursor(
        'ALTER TABLE before_table DROP COLUMN id; ALTER OBJECT | ; ALTER TABLE after_table DROP COLUMN id;',
    );

    expect(autocompleteResult.suggestEntity).toEqual(['object']);
});
