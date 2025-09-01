import {extractTrinoTablesFromQuery} from '..';

test('should extract tables from query', () => {
    const result = extractTrinoTablesFromQuery(`
        CREATE TABLE test_table1 (test VARCHAR);
        INSERT INTO test_table2 VALUES (1, 2);
        DROP TABLE test_table3;
        COMMENT ON TABLE test_table4 IS 'test_comment';
        DELETE FROM test_table5 WHERE test_id = 1;
        ALTER TABLE test_table6 ADD COLUMN test_column ARRAY;
        SELECT * FROM test_table7;
        SELECT * FROM (SELECT * FROM test_table8);
        SELECT * FROM test_table9
        UNION ALL
        SELECT * FROM test_table10;
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
    ]);
});

test('should extract tables with schemas from query', () => {
    const result = extractTrinoTablesFromQuery(`
        CREATE TABLE test_catalog.test_schema.test_table1 (test VARCHAR);
        INSERT INTO test_catalog.test_schema.test_table2 VALUES (1, 2);
        DROP TABLE test_catalog.test_schema.test_table3;
        COMMENT ON TABLE test_catalog.test_schema.test_table4 IS 'test_comment';
        DELETE FROM test_catalog.test_schema.test_table5 WHERE test_id = 1;
        ALTER TABLE test_catalog.test_schema.test_table6 ADD COLUMN test_column ARRAY;
        SELECT * FROM test_catalog.test_schema.test_table7;
        SELECT * FROM (SELECT * FROM test_catalog.test_schema.test_table8);
        SELECT * FROM test_catalog.test_schema.test_table9
        UNION ALL
        SELECT * FROM test_catalog.test_schema.test_table10;
    `);

    expect(result).toEqual([
        {catalogName: 'test_catalog', schemaName: 'test_schema', tableName: 'test_table1'},
        {catalogName: 'test_catalog', schemaName: 'test_schema', tableName: 'test_table2'},
        {catalogName: 'test_catalog', schemaName: 'test_schema', tableName: 'test_table3'},
        {catalogName: 'test_catalog', schemaName: 'test_schema', tableName: 'test_table4'},
        {catalogName: 'test_catalog', schemaName: 'test_schema', tableName: 'test_table5'},
        {catalogName: 'test_catalog', schemaName: 'test_schema', tableName: 'test_table6'},
        {catalogName: 'test_catalog', schemaName: 'test_schema', tableName: 'test_table7'},
        {catalogName: 'test_catalog', schemaName: 'test_schema', tableName: 'test_table8'},
        {catalogName: 'test_catalog', schemaName: 'test_schema', tableName: 'test_table9'},
        {catalogName: 'test_catalog', schemaName: 'test_schema', tableName: 'test_table10'},
    ]);
});

test('should extract table with schemas and catalogs from query', () => {
    const result = extractTrinoTablesFromQuery(`
        CREATE TABLE test_catalog.test_schema."test_table1" (test VARCHAR);
        INSERT INTO test_catalog.test_schema."test_table2" VALUES (1, 2);
        DROP TABLE test_catalog.test_schema."test_table3";
        COMMENT ON TABLE test_catalog.test_schema."test_table4" IS 'test_comment';
        DELETE FROM test_catalog.test_schema."test_table5" WHERE test_id = 1;
        ALTER TABLE test_catalog.test_schema."test_table6" ADD COLUMN test_column ARRAY;
        SELECT * FROM test_catalog.test_schema."test_table7";
        SELECT * FROM (SELECT * FROM test_catalog.test_schema."test_table8");
        SELECT * FROM test_catalog.test_schema."test_table9"
        UNION ALL
        SELECT * FROM test_catalog.test_schema."test_table10";
    `);

    expect(result).toEqual([
        {catalogName: 'test_catalog', schemaName: 'test_schema', tableName: 'test_table1'},
        {catalogName: 'test_catalog', schemaName: 'test_schema', tableName: 'test_table2'},
        {catalogName: 'test_catalog', schemaName: 'test_schema', tableName: 'test_table3'},
        {catalogName: 'test_catalog', schemaName: 'test_schema', tableName: 'test_table4'},
        {catalogName: 'test_catalog', schemaName: 'test_schema', tableName: 'test_table5'},
        {catalogName: 'test_catalog', schemaName: 'test_schema', tableName: 'test_table6'},
        {catalogName: 'test_catalog', schemaName: 'test_schema', tableName: 'test_table7'},
        {catalogName: 'test_catalog', schemaName: 'test_schema', tableName: 'test_table8'},
        {catalogName: 'test_catalog', schemaName: 'test_schema', tableName: 'test_table9'},
        {catalogName: 'test_catalog', schemaName: 'test_schema', tableName: 'test_table10'},
    ]);
});

test('should extract normalized tables from query', () => {
    const result = extractTrinoTablesFromQuery(`
        SELECT * FROM test_table1
        UNION ALL
        SELECT * FROM test_catalog.test_schema.test_table1
        UNION ALL
        SELECT * FROM "test_catalog"."test_schema"."test_table1";
    `);

    expect(result).toEqual([
        {tableName: 'test_table1'},
        {catalogName: 'test_catalog', schemaName: 'test_schema', tableName: 'test_table1'},
    ]);
});

test('should extract table without its alias', () => {
    const result = extractTrinoTablesFromQuery(`
        SELECT * FROM test_table as test_table_alias;
    `);

    expect(result).toEqual([{tableName: 'test_table'}]);
});
