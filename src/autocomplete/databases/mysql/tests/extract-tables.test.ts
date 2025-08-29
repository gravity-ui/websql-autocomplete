import {extractMySqlTablesFromQuery} from '..';

test('should extract tables from query', () => {
    const result = extractMySqlTablesFromQuery(`
        SELECT * FROM test_table1 LEFT JOIN test_table2 ON test_table1.test_id = test_table2.test_id;
        SELECT * FROM test_table3;
        CREATE TABLE test_table4 (test_column TEXT);
        INSERT INTO test_table5 VALUES (1, 2, 3);
        SELECT test_column1, (SELECT test_column2 FROM test_table6) FROM test_table7;
        DROP TABLE test_table8;
        DELETE FROM test_table9 WHERE test_id = 1;
        SELECT * FROM test_table10
        UNION ALL
        SELECT * FROM test_table11;
    `);

    expect(result).toEqual([
        {tableName: 'test_table1'},
        {tableName: 'test_table2'},
        {tableName: 'test_table3'},
        {tableName: 'test_table4'},
        {tableName: 'test_table5'},
        {tableName: 'test_table6'},
        {tableName: 'test_table7'},
        {tableName: 'test_table8'},
        {tableName: 'test_table9'},
        {tableName: 'test_table10'},
        {tableName: 'test_table11'},
    ]);
});

test('should extract normalized quoted tables from query', () => {
    const result = extractMySqlTablesFromQuery(`
        SELECT * FROM \`test_table1\` LEFT JOIN \`test_table2\` ON \`test_table1\`.test_id = \`test_table2\`.test_id;
        SELECT * FROM \`test_table3\`;
        CREATE TABLE \`test_table4\` (test_column TEXT);
        INSERT INTO \`test_table5\` VALUES (1, 2, 3);
        SELECT test_column1, (SELECT test_column2 FROM \`test_table6\`) FROM \`test_table7\`;
        DROP TABLE \`test_table8\`;
        DELETE FROM \`test_table9\` WHERE test_id = 1;
        SELECT * FROM \`test_table10\`
        UNION ALL
        SELECT * FROM \`test_table11\`;
    `);

    expect(result).toEqual([
        {tableName: 'test_table1'},
        {tableName: 'test_table2'},
        {tableName: 'test_table3'},
        {tableName: 'test_table4'},
        {tableName: 'test_table5'},
        {tableName: 'test_table6'},
        {tableName: 'test_table7'},
        {tableName: 'test_table8'},
        {tableName: 'test_table9'},
        {tableName: 'test_table10'},
        {tableName: 'test_table11'},
    ]);
});

test('should extract tables with databases from query', () => {
    const result = extractMySqlTablesFromQuery(`
        SELECT * FROM test_db.test_table1 LEFT JOIN test_db.test_table2 ON test_db.test_table1.test_id = test_db.test_table2.test_id;
        SELECT * FROM test_db.test_table3;
        CREATE TABLE test_db.test_table4 (test_column TEXT);
        INSERT INTO test_db.test_table5 VALUES (1, 2, 3);
        SELECT test_column1, (SELECT test_column2 FROM test_db.test_table6) FROM test_db.test_table7;
        DROP TABLE test_db.test_table8;
        DELETE FROM test_db.test_table9 WHERE test_id = 1;
        SELECT * FROM test_db.test_table10
        UNION ALL
        SELECT * FROM test_db.test_table11;
    `);

    expect(result).toEqual([
        {databaseName: 'test_db', tableName: 'test_table1'},
        {databaseName: 'test_db', tableName: 'test_table2'},
        {databaseName: 'test_db', tableName: 'test_table3'},
        {databaseName: 'test_db', tableName: 'test_table4'},
        {databaseName: 'test_db', tableName: 'test_table5'},
        {databaseName: 'test_db', tableName: 'test_table6'},
        {databaseName: 'test_db', tableName: 'test_table7'},
        {databaseName: 'test_db', tableName: 'test_table8'},
        {databaseName: 'test_db', tableName: 'test_table9'},
        {databaseName: 'test_db', tableName: 'test_table10'},
        {databaseName: 'test_db', tableName: 'test_table11'},
    ]);
});

test('should extract normalized tables, schemas and databases from query', () => {
    const result = extractMySqlTablesFromQuery(`
        SELECT * FROM test_table1
        UNION ALL
        SELECT * FROM \`test_table1\`
        UNION ALL
        SELECT * FROM 'test_db'.'test_table1'
        UNION ALL
        SELECT * FROM "test_db"."test_table1"
        UNION ALL
        SELECT * FROM \`test_db\`.\`test_table1\`
    `);

    expect(result).toEqual([
        {tableName: 'test_table1'},
        {tableName: 'test_table1'},
        {databaseName: 'test_db', tableName: 'test_table1'},
        {databaseName: 'test_db', tableName: 'test_table1'},
        {databaseName: 'test_db', tableName: 'test_table1'},
    ]);
});

test('should extract table name without its alias', () => {
    const result = extractMySqlTablesFromQuery(`
        SELECT * FROM test_table as test_table_alias;
    `);

    expect(result).toEqual([{tableName: 'test_table'}]);
});
