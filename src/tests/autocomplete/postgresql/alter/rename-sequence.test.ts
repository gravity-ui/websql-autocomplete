import {parsePostgreSqlQueryWithoutCursor} from '../../../../index';

test('should nor report errors on full statement', () => {
    const autocompleteResult = parsePostgreSqlQueryWithoutCursor(
        'ALTER SEQUENCE test_sequence RENAME TO test_sequence_2;',
    );
    expect(autocompleteResult.errors).toHaveLength(0);
});
