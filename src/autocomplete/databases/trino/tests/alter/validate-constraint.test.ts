import {parseTrinoQueryWithCursor, parseTrinoQueryWithoutCursor} from '../../index';

test('should suggest view name after VALIDATE CONSTRAINT', () => {
    const autocompleteResult = parseTrinoQueryWithCursor(
        'ALTER TABLE test_table VALIDATE CONSTRAINT |',
    );

    // const constraintSuggestion: ConstraintSuggestion = {
    //     tables: [{name: 'test_table'}],
    // };
    // expect(autocompleteResult.suggestConstraints).toEqual(constraintSuggestion);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});

test('should suggest view name after VALIDATE CONSTRAINT between statements', () => {
    const autocompleteResult = parseTrinoQueryWithCursor(
        'ALTER TABLE before_table DROP COLUMN id; ALTER TABLE test_table VALIDATE CONSTRAINT | ; ALTER TABLE after_table DROP COLUMN id;',
    );

    // const constraintSuggestion: ConstraintSuggestion = {
    //     tables: [{name: 'test_table'}],
    // };
    // expect(autocompleteResult.suggestConstraints).toEqual(constraintSuggestion);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});

test('should not report an error of a full statement', () => {
    const autocompleteResult = parseTrinoQueryWithoutCursor(
        'ALTER TABLE test_table VALIDATE CONSTRAINT test_constraint;',
    );
    expect(autocompleteResult.errors).toHaveLength(0);
});
