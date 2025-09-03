import {extractPostgreSqlTablesFromQuery} from '..';

test('should extract tables from query', () => {
    const result = extractPostgreSqlTablesFromQuery(`
        SELECT * FROM test_table1 LEFT JOIN test_table2 ON test_table1.test_id = test_table2.test_id;
        SELECT * FROM test_table3;
        CREATE TABLE test_table4 (test_column TEXT);
        INSERT INTO test_table5 VALUES (1, 2, 3);
        SELECT * FROM (SELECT * FROM test_table6);
        DROP TABLE test_table7;
        ALTER EXTENSION test_extension ADD TABLE test_table8;
        COMMENT ON TABLE test_table9 IS 'test_comment';
        SECURITY LABEL ON TABLE test_table10 IS NULL;
        SELECT * FROM test_table11
        UNION ALL
        SELECT * FROM test_table12;
        DELETE FROM test_table13 WHERE test_id = 1;
        ALTER TABLE test_table14 ADD COLUMN test_column;
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
        {tableName: 'test_table12'},
        {tableName: 'test_table13'},
        {tableName: 'test_table14'},
    ]);
});

test('should extract tables with schemas from query', () => {
    const result = extractPostgreSqlTablesFromQuery(`
        SELECT * FROM test_schema.test_table1 LEFT JOIN test_schema.test_table2 ON test_schema.test_table1.test_id = test_schema.test_table2.test_id;
        SELECT * FROM test_schema.test_table3;
        CREATE TABLE test_schema.test_table4 (test_column TEXT);
        INSERT INTO test_schema.test_table5 VALUES (1, 2, 3);
        SELECT * FROM (SELECT * FROM test_schema.test_table6);
        DROP TABLE test_schema.test_table7;
        ALTER EXTENSION test_extension ADD TABLE test_schema.test_table8;
        COMMENT ON TABLE test_schema.test_table9 IS 'test_comment';
        SECURITY LABEL ON TABLE test_schema.test_table10 IS NULL;
        SELECT * FROM test_schema.test_table11
        UNION ALL
        SELECT * FROM test_schema.test_table12;
        DELETE FROM test_schema.test_table13 WHERE test_id = 1;
        ALTER TABLE test_schema.test_table14 ADD COLUMN test_column;
    `);

    expect(result).toEqual([
        {schemaName: 'test_schema', tableName: 'test_table1'},
        {schemaName: 'test_schema', tableName: 'test_table2'},
        {schemaName: 'test_schema', tableName: 'test_table3'},
        {schemaName: 'test_schema', tableName: 'test_table4'},
        {schemaName: 'test_schema', tableName: 'test_table5'},
        {schemaName: 'test_schema', tableName: 'test_table6'},
        {schemaName: 'test_schema', tableName: 'test_table7'},
        {schemaName: 'test_schema', tableName: 'test_table8'},
        {schemaName: 'test_schema', tableName: 'test_table9'},
        {schemaName: 'test_schema', tableName: 'test_table10'},
        {schemaName: 'test_schema', tableName: 'test_table11'},
        {schemaName: 'test_schema', tableName: 'test_table12'},
        {schemaName: 'test_schema', tableName: 'test_table13'},
        {schemaName: 'test_schema', tableName: 'test_table14'},
    ]);
});

test('should extract tables with databases and schemas from query', () => {
    const result = extractPostgreSqlTablesFromQuery(`
        SELECT * FROM test_db.test_schema.test_table1
            LEFT JOIN test_db.test_schema.test_table2
            ON test_db.test_schema.test_table1.test_id = test_db.test_schema.test_table2.test_id;
        SELECT * FROM test_db.test_schema.test_table3;
        CREATE TABLE test_db.test_schema.test_table4 (test_column TEXT);
        INSERT INTO test_db.test_schema.test_table5 VALUES (1, 2, 3);
        SELECT * FROM (SELECT * FROM test_db.test_schema.test_table6);
        DROP TABLE test_db.test_schema.test_table7;
        ALTER EXTENSION test_extension ADD TABLE test_db.test_schema.test_table8;
        COMMENT ON TABLE test_db.test_schema.test_table9 IS 'test_comment';
        SECURITY LABEL ON TABLE test_db.test_schema.test_table10 IS NULL;
        SELECT * FROM test_db.test_schema.test_table11
        UNION ALL
        SELECT * FROM test_db.test_schema.test_table12;
        DELETE FROM test_db.test_schema.test_table13 WHERE test_id = 1;
        ALTER TABLE test_db.test_schema.test_table14 ADD COLUMN test_column;
    `);

    expect(result).toEqual([
        {databaseName: 'test_db', schemaName: 'test_schema', tableName: 'test_table1'},
        {databaseName: 'test_db', schemaName: 'test_schema', tableName: 'test_table2'},
        {databaseName: 'test_db', schemaName: 'test_schema', tableName: 'test_table3'},
        {databaseName: 'test_db', schemaName: 'test_schema', tableName: 'test_table4'},
        {databaseName: 'test_db', schemaName: 'test_schema', tableName: 'test_table5'},
        {databaseName: 'test_db', schemaName: 'test_schema', tableName: 'test_table6'},
        {databaseName: 'test_db', schemaName: 'test_schema', tableName: 'test_table7'},
        {databaseName: 'test_db', schemaName: 'test_schema', tableName: 'test_table8'},
        {databaseName: 'test_db', schemaName: 'test_schema', tableName: 'test_table9'},
        {databaseName: 'test_db', schemaName: 'test_schema', tableName: 'test_table10'},
        {databaseName: 'test_db', schemaName: 'test_schema', tableName: 'test_table11'},
        {databaseName: 'test_db', schemaName: 'test_schema', tableName: 'test_table12'},
        {databaseName: 'test_db', schemaName: 'test_schema', tableName: 'test_table13'},
        {databaseName: 'test_db', schemaName: 'test_schema', tableName: 'test_table14'},
    ]);
});

test('should extract normalized tables, schemas and databases from query', () => {
    const result = extractPostgreSqlTablesFromQuery(`
        SELECT * FROM test_table1
        UNION ALL
        SELECT * FROM test_schema.test_table1
        UNION ALL
        SELECT * FROM test_db.test_schema.test_table1
        UNION ALL
        SELECT * FROM test_db.test_schema."test_table1"
        UNION ALL
        SELECT * FROM "test_db"."test_schema"."test_table1"
    `);

    expect(result).toEqual([
        {tableName: 'test_table1'},
        {schemaName: 'test_schema', tableName: 'test_table1'},
        {databaseName: 'test_db', schemaName: 'test_schema', tableName: 'test_table1'},
    ]);
});

test('should extract table without its alias', () => {
    const result = extractPostgreSqlTablesFromQuery(`
        SELECT * FROM test_table as test_table_alias;
    `);

    expect(result).toEqual([{tableName: 'test_table'}]);
});
