import {ConstraintSuggestion, KeywordSuggestion} from '../../../../autocomplete-types';
import {parsePostgreSqlQueryWithCursor} from '../../../../shared/parse-query-with-cursor';
import {parsePostgreSqlQueryWithoutCursor} from '../../../../autocomplete';

test('should suggest view name after RENAME CONSTRAINT', () => {
    const autocompleteResult = parsePostgreSqlQueryWithCursor(
        'ALTER TABLE test_table RENAME CONSTRAINT |',
    );

    const keywordSuggestion: KeywordSuggestion[] = [{value: 'TO'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordSuggestion);

    const constraintSuggestion: ConstraintSuggestion = {
        tables: [{name: 'test_table'}],
    };
    expect(autocompleteResult.suggestConstraints).toEqual(constraintSuggestion);
});

test('should suggest view name after RENAME CONSTRAINT between statements', () => {
    const autocompleteResult = parsePostgreSqlQueryWithCursor(
        'ALTER TABLE before_table DROP COLUMN id; ALTER TABLE test_table RENAME CONSTRAINT | ; ALTER TABLE after_table DROP COLUMN id;',
    );

    const keywordSuggestion: KeywordSuggestion[] = [{value: 'TO'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordSuggestion);

    const constraintSuggestion: ConstraintSuggestion = {
        tables: [{name: 'test_table'}],
    };
    expect(autocompleteResult.suggestConstraints).toEqual(constraintSuggestion);
});

test('should not report errors', () => {
    const autocompleteResult = parsePostgreSqlQueryWithoutCursor(
        'ALTER TABLE test_table RENAME CONSTRAINT test_constraint TO test_constraint_2;',
    );
    expect(autocompleteResult.errors).toHaveLength(0);
});
