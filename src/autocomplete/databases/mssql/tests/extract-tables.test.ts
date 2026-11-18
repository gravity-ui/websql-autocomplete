import {extractMsSqlTablesFromQuery} from '../index.js';

test('should extract tables from query', () => {
    const result = extractMsSqlTablesFromQuery(`
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
    const result = extractMsSqlTablesFromQuery(`
        SELECT * FROM [test_table1] LEFT JOIN "test_table2" ON [test_table1].test_id = "test_table2".test_id;
        INSERT INTO [test_table3] VALUES (1, 2, 3);
    `);

    expect(result).toEqual([
        {tableName: 'test_table1'},
        {tableName: 'test_table2'},
        {tableName: 'test_table3'},
    ]);
});

test('should extract normalized tables, schemas and databases from query', () => {
    const result = extractMsSqlTablesFromQuery(`
        SELECT * FROM [test_database1].[test_schema1].[test_table1];
        SELECT * FROM test_schema2.test_table2;
        SELECT * FROM test_database3..test_table3;
        UPDATE test_database4.test_schema4.test_table4 SET test_column = 1;
    `);

    expect(result).toEqual([
        {databaseName: 'test_database1', schemaName: 'test_schema1', tableName: 'test_table1'},
        {schemaName: 'test_schema2', tableName: 'test_table2'},
        {databaseName: 'test_database3', tableName: 'test_table3'},
        {databaseName: 'test_database4', schemaName: 'test_schema4', tableName: 'test_table4'},
    ]);
});

test('should extract table name without its alias', () => {
    const result = extractMsSqlTablesFromQuery(
        'SELECT t.test_column FROM test_table AS t JOIN test_table2 t2 ON t.id = t2.id',
    );

    expect(result).toEqual([{tableName: 'test_table'}, {tableName: 'test_table2'}]);
});
