import {parseTrinoQueryWithoutCursor} from '../../index';

test('should nor report errors on full statement', () => {
    const autocompleteResult = parseTrinoQueryWithoutCursor(
        'ALTER SEQUENCE test_sequence RENAME TO test_sequence_2;',
    );
    expect(autocompleteResult.errors).toHaveLength(0);
});
