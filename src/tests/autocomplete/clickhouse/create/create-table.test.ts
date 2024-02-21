import {parseClickHouseQueryWithCursor} from '../../../lib';
import {KeywordSuggestion} from '../../../../types';

test('should suggest properly after TABLE', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('CREATE TABLE |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'IF'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after table name', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('CREATE TABLE test_table |');

    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: 'AS'},
        {value: 'ENGINE'},
        {value: 'ON'},
        {value: 'UUID'},
        {value: 'FORMAT'},
        {value: 'INTO'},
    ];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

// TODO: support colum definitions in clickhouse
test.skip('should suggest properly after the first column', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor(
        'CREATE TABLE test_table (test_database.test_column |',
    );

    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: 'CHARACTER'},
        {value: 'CHAR'},
        {value: 'VARCHAR'},
        {value: 'NVARCHAR'},
        {value: 'LONG'},
        {value: 'TINYTEXT'},
        {value: 'TEXT'},
        {value: 'MEDIUMTEXT'},
        {value: 'LONGTEXT'},
        {value: 'NCHAR'},
        {value: 'NATIONAL'},
        {value: 'TINYINT'},
        {value: 'SMALLINT'},
        {value: 'MEDIUMINT'},
        {value: 'MIDDLEINT'},
        {value: 'INT'},
        {value: 'INT1'},
        {value: 'INT2'},
        {value: 'INT3'},
        {value: 'INT4'},
        {value: 'INT8'},
        {value: 'INTEGER'},
        {value: 'BIGINT'},
        {value: 'REAL'},
        {value: 'DOUBLE'},
        {value: 'FLOAT'},
        {value: 'FLOAT4'},
        {value: 'FLOAT8'},
        {value: 'DECIMAL'},
        {value: 'DEC'},
        {value: 'NUMERIC'},
        {value: 'FIXED'},
        {value: 'DATE'},
        {value: 'TINYBLOB'},
        {value: 'MEDIUMBLOB'},
        {value: 'LONGBLOB'},
        {value: 'SERIAL'},
        {value: 'BOOL'},
        {value: 'BOOLEAN'},
        {value: 'TIME'},
        {value: 'TIMESTAMP'},
        {value: 'DATETIME'},
        {value: 'YEAR'},
        {value: 'BINARY'},
        {value: 'VARBINARY'},
        {value: 'BLOB'},
        {value: 'BIT'},
        {value: 'SET'},
        {value: 'ENUM'},
        {value: 'JSON'},
        {value: 'GEOMETRYCOLLECTION'},
        {value: 'GEOMCOLLECTION'},
        {value: 'GEOMETRY'},
        {value: 'LINESTRING'},
        {value: 'MULTILINESTRING'},
        {value: 'MULTIPOINT'},
        {value: 'MULTIPOLYGON'},
        {value: 'POINT'},
        {value: 'POLYGON'},
    ];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

// TODO: support clickhouse column type suggestions
test.skip('should suggest properly after the second column', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor(
        'CREATE TABLE test_table (test_column TEXT, test_column_2 |',
    );

    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: 'CHARACTER'},
        {value: 'CHAR'},
        {value: 'VARCHAR'},
        {value: 'NVARCHAR'},
        {value: 'LONG'},
        {value: 'TINYTEXT'},
        {value: 'TEXT'},
        {value: 'MEDIUMTEXT'},
        {value: 'LONGTEXT'},
        {value: 'NCHAR'},
        {value: 'NATIONAL'},
        {value: 'TINYINT'},
        {value: 'SMALLINT'},
        {value: 'MEDIUMINT'},
        {value: 'MIDDLEINT'},
        {value: 'INT'},
        {value: 'INT1'},
        {value: 'INT2'},
        {value: 'INT3'},
        {value: 'INT4'},
        {value: 'INT8'},
        {value: 'INTEGER'},
        {value: 'BIGINT'},
        {value: 'REAL'},
        {value: 'DOUBLE'},
        {value: 'FLOAT'},
        {value: 'FLOAT4'},
        {value: 'FLOAT8'},
        {value: 'DECIMAL'},
        {value: 'DEC'},
        {value: 'NUMERIC'},
        {value: 'FIXED'},
        {value: 'DATE'},
        {value: 'TINYBLOB'},
        {value: 'MEDIUMBLOB'},
        {value: 'LONGBLOB'},
        {value: 'SERIAL'},
        {value: 'BOOL'},
        {value: 'BOOLEAN'},
        {value: 'TIME'},
        {value: 'TIMESTAMP'},
        {value: 'DATETIME'},
        {value: 'YEAR'},
        {value: 'BINARY'},
        {value: 'VARBINARY'},
        {value: 'BLOB'},
        {value: 'BIT'},
        {value: 'SET'},
        {value: 'ENUM'},
        {value: 'JSON'},
        {value: 'GEOMETRYCOLLECTION'},
        {value: 'GEOMCOLLECTION'},
        {value: 'GEOMETRY'},
        {value: 'LINESTRING'},
        {value: 'MULTILINESTRING'},
        {value: 'MULTIPOINT'},
        {value: 'MULTIPOLYGON'},
        {value: 'POINT'},
        {value: 'POLYGON'},
    ];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});
