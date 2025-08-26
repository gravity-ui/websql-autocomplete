import {extractTrinoTableNamesFromQuery} from '..';

test('should extract table names from query', () => {
    const result = extractTrinoTableNamesFromQuery(`
        CREATE TABLE test_schema.test_db.test_table1 (test TEXT);
        INSERT INTO test_schema.test_db.test_table2 VALUES (1, 2);
        DROP TABLE test_schema.test_db.test_table3;
        COMMENT ON TABLE test_schema.test_db.test_table4 IS 'test_comment';
        DELETE FROM test_schema.test_db.test_table5 WHERE test_id = 1;
        ALTER TABLE test_schema.test_db.test_table6 ADD COLUMN test_column ARRAY;
        SELECT * FROM test_schema.test_db.test_table7;
        SELECT * FROM (SELECT * FROM test_schema.test_db.test_table8);
        SELECT * FROM test_schema.test_db.test_table9
        UNION ALL
        SELECT * FROM test_schema.test_db.test_table10;
        SELECT * FROM test_schema.test_db."test_table11";
    `);

    expect(result).toEqual([
        'test_schema.test_db.test_table1',
        'test_schema.test_db.test_table2',
        'test_schema.test_db.test_table3',
        'test_schema.test_db.test_table4',
        'test_schema.test_db.test_table5',
        'test_schema.test_db.test_table6',
        'test_schema.test_db.test_table7',
        'test_schema.test_db.test_table8',
        'test_schema.test_db.test_table9',
        'test_schema.test_db.test_table10',
        'test_schema.test_db."test_table11"',
    ]);
});
