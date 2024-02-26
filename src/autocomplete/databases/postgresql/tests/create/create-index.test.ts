import {parsePostgreSqlQueryWithCursor} from '../../../../shared/parse-query-with-cursor';
import {KeywordSuggestion} from '../../../../autocomplete-types';

test('should suggest properly after INDEX', () => {
    const autocompleteResult = parsePostgreSqlQueryWithCursor('CREATE INDEX |');

    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: 'IF'},
        {value: 'CONCURRENTLY'},
        {value: 'ON'},
    ];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after index name', () => {
    const autocompleteResult = parsePostgreSqlQueryWithCursor('CREATE INDEX test_index |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'ON'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after ON', () => {
    const autocompleteResult = parsePostgreSqlQueryWithCursor('CREATE INDEX test_index ON |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'ONLY'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after table name', () => {
    const autocompleteResult = parsePostgreSqlQueryWithCursor(
        'CREATE INDEX test_index ON test_table |',
    );

    const keywordsSuggestion: KeywordSuggestion[] = [{value: '*'}, {value: 'USING'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after USING', () => {
    const autocompleteResult = parsePostgreSqlQueryWithCursor(
        'CREATE INDEX test_index ON test_table USING |',
    );

    const keywordsSuggestion: KeywordSuggestion[] = [];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after USING HASH', () => {
    const autocompleteResult = parsePostgreSqlQueryWithCursor(
        'CREATE INDEX test_index ON test_table USING HASH |',
    );

    const keywordsSuggestion: KeywordSuggestion[] = [];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});
