import {parseMySqlQueryWithCursor, parseMySqlQueryWithoutCursor} from '../../index';
import {ConstraintSuggestion, KeywordSuggestion} from '../../../../shared/autocomplete-types';

test('should suggest table name after ALTER CONSTRAINT', () => {
    const autocompleteResult = parseMySqlQueryWithCursor(
        'ALTER TABLE test_table ALTER CONSTRAINT |',
    );

    const keywordSuggestion: KeywordSuggestion[] = [{value: 'CHECK'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordSuggestion);

    const constraintSuggestion: ConstraintSuggestion = {
        tables: [{name: 'test_table'}],
    };
    expect(autocompleteResult.suggestConstraints).toEqual(constraintSuggestion);
});

test('should suggest table name after ALTER CONSTRAINT between statements', () => {
    const autocompleteResult = parseMySqlQueryWithCursor(
        'ALTER TABLE before_table DROP COLUMN id; ALTER TABLE test_table ALTER CONSTRAINT | ; ALTER TABLE after_table DROP COLUMN id;',
    );

    const keywordSuggestion: KeywordSuggestion[] = [{value: 'CHECK'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordSuggestion);

    const constraintSuggestion: ConstraintSuggestion = {
        tables: [{name: 'test_table'}],
    };
    expect(autocompleteResult.suggestConstraints).toEqual(constraintSuggestion);
});

test('should not report errors on a full statement', () => {
    const autocompleteResult = parseMySqlQueryWithoutCursor(
        'ALTER TABLE test_table ALTER CONSTRAINT test_constraint CHECK (test_column > 1);',
    );
    expect(autocompleteResult.errors).toHaveLength(0);
});
