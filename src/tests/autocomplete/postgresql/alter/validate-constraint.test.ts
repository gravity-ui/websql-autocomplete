import {parsePostgreSqlQueryWithCursor} from '../../../test-lib';
import {parsePostgreSqlQueryWithoutCursor} from '../../../../autocomplete/autocomplete';

test('should suggest view name after VALIDATE CONSTRAINT', () => {
    const autocompleteResult = parsePostgreSqlQueryWithCursor(
        'ALTER TABLE test_table VALIDATE CONSTRAINT |',
    );

    expect(autocompleteResult.suggestConstraints).toEqual(true);
    expect(autocompleteResult.suggestKeywords).toEqual([]);
});

test('should not report an error of a full statement', () => {
    const autocompleteResult = parsePostgreSqlQueryWithoutCursor(
        'ALTER TABLE test_table VALIDATE CONSTRAINT test_constraint;',
    );
    expect(autocompleteResult.errors).toHaveLength(0);
});
