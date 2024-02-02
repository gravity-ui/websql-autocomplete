import {parseClickHouseQueryWithoutCursor} from '../../..';

test('should not report error on missing alias', () => {
    const parseResults = parseClickHouseQueryWithoutCursor(
        'SELECT * FROM (SELECT * FROM test_table);',
    );

    expect(parseResults.errors).toHaveLength(0);
});
