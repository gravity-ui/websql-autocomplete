import {extractClickHouseTableNamesFromQuery} from '..';

test('should extract table names from query', () => {
    const result = extractClickHouseTableNamesFromQuery(`
        SELECT * FROM test_table1 LEFT JOIN test_table2 ON test_table1.test_id = test_table2.test_id;
        SELECT * FROM test_table3;
        CREATE TABLE test_table4 (test_column String);
        INSERT INTO test_table5 VALUES (1, 2, 3);
        SELECT * FROM (SELECT * FROM test_table6);
        DROP TABLE test_table7;
        DELETE FROM test_table8 WHERE test_id = 1;
        SELECT * FROM test_table9
        UNION ALL
        SELECT * FROM test_table10;
        SELECT * FROM \`test_table11\` LIMIT 100;
        CREATE TABLE \`test_table12\` (test_column TEXT);
        SELECT * FROM test_db.test_table13 LIMIT 100;
        SELECT * FROM \`test_prefix.test_table14\` LIMIT 100;
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
        '`test_table11`',
        '`test_table12`',
        'test_db.test_table13',
        '`test_prefix.test_table14`',
    ]);
});
