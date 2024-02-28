import {parsePostgreSqlQueryWithCursor} from '../../../../shared/parse-query-with-cursor';
import {ConstraintSuggestion, KeywordSuggestion} from '../../../../autocomplete-types';
import {parsePostgreSqlQueryWithoutCursor} from '../../../../autocomplete';

test('should suggest view name after ALTER CONSTRAINT', () => {
    const autocompleteResult = parsePostgreSqlQueryWithCursor(
        'ALTER TABLE test_table ALTER CONSTRAINT |',
    );

    const constraintSuggestion: ConstraintSuggestion = {
        tables: [{name: 'test_table'}],
    };
    expect(autocompleteResult.suggestConstraints).toEqual(constraintSuggestion);

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

test('should suggest view name after ALTER CONSTRAINT between statements', () => {
    const autocompleteResult = parsePostgreSqlQueryWithCursor(
        'ALTER TABLE before_table DROP COLUMN id; ALTER TABLE test_table ALTER CONSTRAINT | ; ALTER TABLE after_table DROP COLUMN id;',
    );

    const constraintSuggestion: ConstraintSuggestion = {
        tables: [{name: 'test_table'}],
    };
    expect(autocompleteResult.suggestConstraints).toEqual(constraintSuggestion);

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
