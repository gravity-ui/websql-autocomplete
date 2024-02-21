import {parseMySqlQueryWithCursor} from '../../../test-lib';
import {parseMySqlQueryWithoutCursor} from '../../../../index';

test('should suggest table name after DROP CONSTRAINT', () => {
    const autocompleteResult = parseMySqlQueryWithCursor(
        'ALTER TABLE test_table DROP CONSTRAINT |',
    );

    expect(autocompleteResult.suggestKeywords).toEqual([]);
    expect(autocompleteResult.suggestConstraints).toEqual(true);
});

test('should not report errors on a full statement', () => {
    const autocompleteResult = parseMySqlQueryWithoutCursor(
        'ALTER TABLE test_table DROP CONSTRAINT test_constraint;',
    );
    expect(autocompleteResult.errors).toHaveLength(0);
});
