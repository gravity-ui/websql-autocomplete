import {parseMsSqlQueryWithCursor} from '../../index.js';
import {
    ColumnAliasSuggestion,
    ColumnSuggestion,
    KeywordSuggestion,
} from '../../../../shared/autocomplete-types.js';

test('should suggest properly after ORDER', () => {
    const autocompleteResult = parseMsSqlQueryWithCursor('SELECT * FROM test_table ORDER |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'BY'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after ORDER BY', () => {
    const autocompleteResult = parseMsSqlQueryWithCursor(
        'SELECT test_column AS test_alias FROM test_table ORDER BY |',
    );

    const columnSuggestions: ColumnSuggestion = {tables: [{name: 'test_table'}]};
    const columnAliasSuggestion: ColumnAliasSuggestion[] = [{name: 'test_alias'}];
    expect(autocompleteResult.suggestColumns).toEqual(columnSuggestions);
    expect(autocompleteResult.suggestColumnAliases).toEqual(columnAliasSuggestion);
});

test('should suggest properly after ORDER BY between statements', () => {
    const autocompleteResult = parseMsSqlQueryWithCursor(
        'ALTER TABLE before_table DROP COLUMN id; SELECT * FROM test_table ORDER BY | ; ALTER TABLE after_table DROP COLUMN id;',
    );

    const columnSuggestions: ColumnSuggestion = {tables: [{name: 'test_table'}]};
    expect(autocompleteResult.suggestColumns).toEqual(columnSuggestions);
});

test('should suggest properly after ORDER BY column', () => {
    const autocompleteResult = parseMsSqlQueryWithCursor(
        'SELECT * FROM test_table ORDER BY test_column |',
    );

    expect(autocompleteResult.suggestKeywords).toEqual(
        expect.arrayContaining([{value: 'ASC'}, {value: 'DESC'}, {value: 'OFFSET'}]),
    );
});

test('should suggest properly after FETCH', () => {
    const autocompleteResult = parseMsSqlQueryWithCursor(
        'SELECT * FROM test_table ORDER BY test_column OFFSET 10 ROWS FETCH |',
    );

    expect(autocompleteResult.suggestKeywords).toEqual(
        expect.arrayContaining([{value: 'FIRST'}, {value: 'NEXT'}]),
    );
});
