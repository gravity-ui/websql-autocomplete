import {extractPostgreSqlTableNamesFromQuery} from '..';

test('should extract table names from query', () => {
    const result = extractPostgreSqlTableNamesFromQuery(`
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
        'test_table11',
        'test_table12',
        'test_table13',
        'test_table14',
    ]);
});
