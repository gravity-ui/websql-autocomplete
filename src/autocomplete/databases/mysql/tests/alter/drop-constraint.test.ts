import {parseMySqlQueryWithCursor} from '../../../../shared/parse-query-with-cursor';
import {parseMySqlQueryWithoutCursor} from '../../../../autocomplete';
import {ConstraintSuggestion} from '../../../../autocomplete-types';

test('should suggest table name after DROP CONSTRAINT', () => {
    const autocompleteResult = parseMySqlQueryWithCursor(
        'ALTER TABLE test_table DROP CONSTRAINT |',
    );
    const constraintSuggestion: ConstraintSuggestion = {
        tables: [{name: 'test_table'}],
    };

    expect(autocompleteResult.suggestKeywords).toEqual([]);
    expect(autocompleteResult.suggestConstraints).toEqual(constraintSuggestion);
});

test('should suggest table name after DROP CONSTRAINT between statements', () => {
    const autocompleteResult = parseMySqlQueryWithCursor(
        'ALTER TABLE before_table DROP COLUMN id; ALTER TABLE test_table DROP CONSTRAINT | ; ALTER TABLE after_table DROP COLUMN id;',
    );
    const constraintSuggestion: ConstraintSuggestion = {
        tables: [{name: 'test_table'}],
    };

    expect(autocompleteResult.suggestKeywords).toEqual([]);
    expect(autocompleteResult.suggestConstraints).toEqual(constraintSuggestion);
});

test('should not report errors on a full statement', () => {
    const autocompleteResult = parseMySqlQueryWithoutCursor(
        'ALTER TABLE test_table DROP CONSTRAINT test_constraint;',
    );
    expect(autocompleteResult.errors).toHaveLength(0);
});
