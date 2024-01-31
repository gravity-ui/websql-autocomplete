import {
    parseClickHouseQueryWithoutCursor,
    parseMySqlQueryWithoutCursor,
    parsePostgreSqlQueryWithoutCursor
} from '.';

test('mysql example', () => {
    expect(parseMySqlQueryWithoutCursor('SELECT').errors).toHaveLength(1);
});

test('postgresql example', () => {
    expect(parsePostgreSqlQueryWithoutCursor('SELECT').errors).toHaveLength(1);
});

test('clickhouse example', () => {
    expect(parseClickHouseQueryWithoutCursor('SELECT').errors).toHaveLength(1);
});
