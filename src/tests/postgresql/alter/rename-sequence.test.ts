import {parsePostgreSqlQueryWithoutCursor} from '../../../index';

test('should nor report errors on full statement', () => {
    const parseResult = parsePostgreSqlQueryWithoutCursor(
        'ALTER SEQUENCE test_sequence RENAME TO test_sequence_2;',
    );
    expect(parseResult.errors).toHaveLength(0);
});
