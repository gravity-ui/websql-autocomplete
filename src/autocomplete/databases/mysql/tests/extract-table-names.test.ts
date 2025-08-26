import {extractMySqlTableNamesFromQuery} from '..';

test('should extract table names from query', () => {
    const result = extractMySqlTableNamesFromQuery(`
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
        SELECT * FROM \`test_table12\` LIMIT 100;
        CREATE TABLE \`test_table13\` (test_column TEXT);
        SELECT * FROM test_db.test_table14 LIMIT 100;
        SELECT * FROM \`test_prefix.test_table15\` LIMIT 100;
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
        '`test_table12`',
        '`test_table13`',
        'test_db.test_table14',
        '`test_prefix.test_table15`',
    ]);
});
