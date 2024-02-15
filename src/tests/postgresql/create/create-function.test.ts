import {parsePostgreSqlQueryWithCursor} from '../../lib';
import {KeywordSuggestion} from '../../../types';
import {parsePostgreSqlQueryWithoutCursor} from '../../..';

test('should suggest properly after FUNCTION', () => {
    const parseResult = parsePostgreSqlQueryWithCursor('CREATE FUNCTION |');

    const keywordsSuggestion: KeywordSuggestion[] = [];
    expect(parseResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after function name', () => {
    const parseResult = parsePostgreSqlQueryWithCursor('CREATE FUNCTION test_function |');

    const keywordsSuggestion: KeywordSuggestion[] = [];
    expect(parseResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after argument', () => {
    const parseResult = parsePostgreSqlQueryWithCursor(
        'CREATE FUNCTION test_function (test_argument |',
    );

    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: 'ARRAY'},
        {value: 'SETOF'},
        {value: 'REPLACE'},
        {value: 'XMLCOMMENT'},
        {value: 'XMLAGG'},
        {value: 'XML_IS_WELL_FORMED'},
        {value: 'XML_IS_WELL_FORMED_DOCUMENT'},
        {value: 'XML_IS_WELL_FORMED_CONTENT'},
        {value: 'XPATH'},
        {value: 'XPATH_EXISTS'},
        {value: 'REVERSE'},
        {value: 'LOG'},
        {value: 'LEFT'},
        {value: 'RIGHT'},
        {value: 'INT'},
        {value: 'INTEGER'},
        {value: 'SMALLINT'},
        {value: 'BIGINT'},
        {value: 'REAL'},
        {value: 'FLOAT'},
        {value: 'DOUBLE'},
        {value: 'DECIMAL'},
        {value: 'DEC'},
        {value: 'NUMERIC'},
        {value: 'BOOLEAN'},
        {value: 'BIT'},
        {value: 'CHAR'},
        {value: 'CHARACTER'},
        {value: 'NCHAR'},
        {value: 'VARCHAR'},
        {value: 'NATIONAL'},
        {value: 'TIME'},
        {value: 'TIMESTAMP'},
        {value: 'INTERVAL'},
        {value: 'IN'},
        {value: 'OUT'},
        {value: 'INOUT'},
        {value: 'VARIADIC'},
        {value: 'DEFAULT'},
    ];
    expect(parseResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after arguments', () => {
    const parseResult = parsePostgreSqlQueryWithCursor(
        'CREATE FUNCTION test_function (test_argument CHARACTER) |',
    );

    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: 'AS'},
        {value: 'LANGUAGE'},
        {value: 'TRANSFORM'},
        {value: 'WINDOW'},
        {value: 'CALLED'},
        {value: 'RETURNS'},
        {value: 'STRICT'},
        {value: 'IMMUTABLE'},
        {value: 'STABLE'},
        {value: 'VOLATILE'},
        {value: 'EXTERNAL'},
        {value: 'SECURITY'},
        {value: 'LEAKPROOF'},
        {value: 'NOT'},
        {value: 'COST'},
        {value: 'ROWS'},
        {value: 'SUPPORT'},
        {value: 'SET'},
        {value: 'RESET'},
        {value: 'PARALLEL'},
    ];
    expect(parseResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after RETURNS', () => {
    const parseResult = parsePostgreSqlQueryWithCursor(
        'CREATE FUNCTION test_function (test_argument CHARACTER) RETURNS |',
    );

    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: 'NULL'},
        {value: 'TABLE'},
        {value: 'SETOF'},
        {value: 'REPLACE'},
        {value: 'XMLCOMMENT'},
        {value: 'XMLAGG'},
        {value: 'XML_IS_WELL_FORMED'},
        {value: 'XML_IS_WELL_FORMED_DOCUMENT'},
        {value: 'XML_IS_WELL_FORMED_CONTENT'},
        {value: 'XPATH'},
        {value: 'XPATH_EXISTS'},
        {value: 'REVERSE'},
        {value: 'LOG'},
        {value: 'LEFT'},
        {value: 'RIGHT'},
        {value: 'INT'},
        {value: 'INTEGER'},
        {value: 'SMALLINT'},
        {value: 'BIGINT'},
        {value: 'REAL'},
        {value: 'FLOAT'},
        {value: 'DOUBLE'},
        {value: 'DECIMAL'},
        {value: 'DEC'},
        {value: 'NUMERIC'},
        {value: 'BOOLEAN'},
        {value: 'BIT'},
        {value: 'CHAR'},
        {value: 'CHARACTER'},
        {value: 'NCHAR'},
        {value: 'VARCHAR'},
        {value: 'NATIONAL'},
        {value: 'TIME'},
        {value: 'TIMESTAMP'},
        {value: 'INTERVAL'},
    ];
    expect(parseResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after RETURNS and a type', () => {
    const parseResult = parsePostgreSqlQueryWithCursor(
        'CREATE FUNCTION test_function (test_argument CHARACTER) RETURNS TEXT |',
    );

    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: 'ARRAY'},
        {value: 'AS'},
        {value: 'LANGUAGE'},
        {value: 'TRANSFORM'},
        {value: 'WINDOW'},
        {value: 'CALLED'},
        {value: 'RETURNS'},
        {value: 'STRICT'},
        {value: 'IMMUTABLE'},
        {value: 'STABLE'},
        {value: 'VOLATILE'},
        {value: 'EXTERNAL'},
        {value: 'SECURITY'},
        {value: 'LEAKPROOF'},
        {value: 'NOT'},
        {value: 'COST'},
        {value: 'ROWS'},
        {value: 'SUPPORT'},
        {value: 'SET'},
        {value: 'RESET'},
        {value: 'PARALLEL'},
    ];
    expect(parseResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should not report errors', () => {
    const parseResult = parsePostgreSqlQueryWithoutCursor(
        'CREATE FUNCTION test_function (test_argument CHARACTER) RETURNS TEXT LANGUAGE PLPGSQL AS $$ BEGIN RETURN "test" END; $$;',
    );

    expect(parseResult.errors).toHaveLength(0);
});
