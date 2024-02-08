import {parseMySqlQueryWithCursor} from '../../shared/lib';
import {KeywordSuggestion} from '../../../types';

test('should suggest properly after FUNCTION', () => {
    const parseResults = parseMySqlQueryWithCursor('CREATE FUNCTION |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'IF'}];
    expect(parseResults.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after function name', () => {
    const parseResults = parseMySqlQueryWithCursor('CREATE FUNCTION test_function |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'RETURNS'}];
    expect(parseResults.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after argument', () => {
    const parseResults = parseMySqlQueryWithCursor(
        'CREATE FUNCTION test_function (test_argument |',
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
    expect(parseResults.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after arguments', () => {
    const parseResults = parseMySqlQueryWithCursor(
        'CREATE FUNCTION test_function (test_argument CHARACTER) |',
    );

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'RETURNS'}];
    expect(parseResults.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after RETURNS', () => {
    const parseResults = parseMySqlQueryWithCursor(
        'CREATE FUNCTION test_function (test_argument CHARACTER) RETURNS |',
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
    expect(parseResults.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after RETURNS and a type', () => {
    const parseResults = parseMySqlQueryWithCursor(
        'CREATE FUNCTION test_function (test_argument CHARACTER) RETURNS TEXT |',
    );

    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: 'BINARY'},
        {value: 'COLLATE'},
        {value: 'CHARACTER'},
        {value: 'CHAR'},
        {value: 'VARYING'},
        {value: 'RETURN'},
        {value: 'BEGIN'},
        {value: 'CREATE'},
        {value: 'ALTER'},
        {value: 'DROP'},
        {value: 'SET'},
        {value: 'RENAME'},
        {value: 'TRUNCATE'},
        {value: 'SELECT'},
        {value: 'INSERT'},
        {value: 'UPDATE'},
        {value: 'DELETE'},
        {value: 'REPLACE'},
        {value: 'CALL'},
        {value: 'LOAD'},
        {value: 'DO'},
        {value: 'HANDLER'},
        {value: 'VALUES'},
        {value: 'WITH'},
        {value: 'TABLE'},
        {value: 'START'},
        {value: 'COMMIT'},
        {value: 'ROLLBACK'},
        {value: 'SAVEPOINT'},
        {value: 'RELEASE'},
        {value: 'LOCK'},
        {value: 'UNLOCK'},
        {value: 'CHANGE'},
        {value: 'PURGE'},
        {value: 'RESET'},
        {value: 'STOP'},
        {value: 'XA'},
        {value: 'PREPARE'},
        {value: 'EXECUTE'},
        {value: 'DEALLOCATE'},
        {value: 'GRANT'},
        {value: 'REVOKE'},
        {value: 'ANALYZE'},
        {value: 'CHECK'},
        {value: 'CHECKSUM'},
        {value: 'OPTIMIZE'},
        {value: 'REPAIR'},
        {value: 'INSTALL'},
        {value: 'UNINSTALL'},
        {value: 'SHOW'},
        {value: 'BINLOG'},
        {value: 'CACHE'},
        {value: 'FLUSH'},
        {value: 'KILL'},
        {value: 'SHUTDOWN'},
        {value: 'DESC'},
        {value: 'DESCRIBE'},
        {value: 'EXPLAIN'},
        {value: 'HELP'},
        {value: 'USE'},
        {value: 'SIGNAL'},
        {value: 'RESIGNAL'},
        {value: 'GET'},
        {value: 'COMMENT'},
        {value: 'LANGUAGE'},
        {value: 'NOT'},
        {value: 'DETERMINISTIC'},
        {value: 'CONTAINS'},
        {value: 'NO'},
        {value: 'READS'},
        {value: 'MODIFIES'},
        {value: 'SQL'},
    ];
    expect(parseResults.suggestKeywords).toEqual(keywordsSuggestion);
});
