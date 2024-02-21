import {parsePostgreSqlQueryWithCursor} from '../../../lib';
import {KeywordSuggestion} from '../../../../types';

test('should suggest properly after TABLE', () => {
    const autocompleteResult = parsePostgreSqlQueryWithCursor('CREATE TABLE |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'IF'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
    expect(autocompleteResult.suggestViewsOrTables).toBeUndefined();
});

test('should suggest properly after table name', () => {
    const autocompleteResult = parsePostgreSqlQueryWithCursor('CREATE TABLE test_table |');

    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: 'USING'},
        {value: 'WITH'},
        {value: 'WITHOUT'},
        {value: 'ON'},
        {value: 'TABLESPACE'},
        {value: 'AS'},
        {value: 'PARTITION'},
        {value: 'OF'},
    ];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after the first column', () => {
    const autocompleteResult = parsePostgreSqlQueryWithCursor(
        'CREATE TABLE test_table (test_column |',
    );

    const keywordsSuggestion: KeywordSuggestion[] = [
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
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after the second column', () => {
    const autocompleteResult = parsePostgreSqlQueryWithCursor(
        'CREATE TABLE test_table (test_column TEXT, test_column_2 |',
    );

    const keywordsSuggestion: KeywordSuggestion[] = [
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
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after the columns', () => {
    const autocompleteResult = parsePostgreSqlQueryWithCursor(
        'CREATE TABLE test_table (test_column TEXT, test_column_2 TEXT) |',
    );

    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: 'INHERITS'},
        {value: 'PARTITION'},
        {value: 'USING'},
        {value: 'WITH'},
        {value: 'WITHOUT'},
        {value: 'ON'},
        {value: 'TABLESPACE'},
    ];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});
