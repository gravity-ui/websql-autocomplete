import {extractTrinoTableNamesFromQuery} from '..';

test('should extract table names from query', () => {
    const result = extractTrinoTableNamesFromQuery(`
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
        'test_table1',
        'test_table2',
        'test_table3',
        'test_table4',
        'test_table5',
        'test_table6',
        'test_table7',
        'test_table8',
        'test_table9',
        'test_table10',
    ]);
});

test('should extract table names with schemas from query', () => {
    const result = extractTrinoTableNamesFromQuery(`
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
        'test_catalog.test_schema.test_table1',
        'test_catalog.test_schema.test_table2',
        'test_catalog.test_schema.test_table3',
        'test_catalog.test_schema.test_table4',
        'test_catalog.test_schema.test_table5',
        'test_catalog.test_schema.test_table6',
        'test_catalog.test_schema.test_table7',
        'test_catalog.test_schema.test_table8',
        'test_catalog.test_schema.test_table9',
        'test_catalog.test_schema.test_table10',
    ]);
});

test('should extract table names with schemas and quoted table names from query', () => {
    const result = extractTrinoTableNamesFromQuery(`
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
        'test_catalog.test_schema."test_table1"',
        'test_catalog.test_schema."test_table2"',
        'test_catalog.test_schema."test_table3"',
        'test_catalog.test_schema."test_table4"',
        'test_catalog.test_schema."test_table5"',
        'test_catalog.test_schema."test_table6"',
        'test_catalog.test_schema."test_table7"',
        'test_catalog.test_schema."test_table8"',
        'test_catalog.test_schema."test_table9"',
        'test_catalog.test_schema."test_table10"',
    ]);
});

test('should extract table names as is from query', () => {
    const result = extractTrinoTableNamesFromQuery(`
        SELECT * FROM test_table1
        UNION ALL
        SELECT * FROM test_catalog.test_schema.test_table1
        UNION ALL
        SELECT * FROM test_catalog.test_schema."test_table1";
    `);

    expect(result).toEqual([
        'test_table1',
        'test_catalog.test_schema.test_table1',
        'test_catalog.test_schema."test_table1"',
    ]);
});

test('should extract table name without its alias', () => {
    const result = extractTrinoTableNamesFromQuery(`
        SELECT * FROM test_table as test_table_alias;
    `);

    expect(result).toEqual(['test_table']);
});
