import {parsePostgreSqlQueryWithCursor} from '../../../../shared/parse-query-with-cursor';
import {KeywordSuggestion} from '../../../../autocomplete-types';
import {parsePostgreSqlQueryWithoutCursor} from '../../../../autocomplete';

test('should suggest view name after ALTER CONSTRAINT', () => {
    const autocompleteResult = parsePostgreSqlQueryWithCursor(
        'ALTER TABLE test_table ALTER CONSTRAINT |',
    );

    expect(autocompleteResult.suggestConstraints).toEqual(true);

    const keywordSuggestion: KeywordSuggestion[] = [
        {value: 'OPTIONS'},
        {value: 'SET'},
        {value: 'TYPE'},
        {value: 'DROP'},
        {value: 'RESTART'},
        {value: 'ADD'},
        {value: 'RESET'},
    ];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordSuggestion);
});

test('should not report an error of a full statement', () => {
    const autocompleteResult = parsePostgreSqlQueryWithoutCursor(
        'ALTER TABLE test_table ALTER CONSTRAINT test_constraint NOT VALID;',
    );
    expect(autocompleteResult.errors).toHaveLength(0);
});
