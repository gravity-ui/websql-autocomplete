import {ColumnSuggestion, KeywordSuggestion} from '../../../../../autocomplete-types';
import {parseYqlQueryWithCursor} from '../../../../../shared/parse-query-with-cursor';

test('should suggest keywords after TABLESTORE ', () => {
    const autocompleteResult = parseYqlQueryWithCursor('ALTER TABLESTORE |');
    const keywords: KeywordSuggestion[] = [];
    expect(autocompleteResult.suggestKeywords).toEqual(keywords);
    expect(autocompleteResult.suggestEntity).toEqual(['tableStore']);
});

test('should suggest keywords after tablestore name', () => {
    const autocompleteResult = parseYqlQueryWithCursor('ALTER TABLESTORE test |');
    const keywords: KeywordSuggestion[] = [{value: 'ADD'}, {value: 'DROP'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywords);
});

test('should suggest table name after DROP COLUMN', () => {
    const autocompleteResult = parseYqlQueryWithCursor('ALTER TABLESTORE test_table DROP COLUMN |');
    const columnSuggestion: ColumnSuggestion = {tables: [{name: 'test_table'}]};

    expect(autocompleteResult.suggestColumns).toEqual(columnSuggestion);
});
