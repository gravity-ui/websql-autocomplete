import {parseClickHouseQueryWithCursor, parseClickHouseQueryWithoutCursor} from '../../index';
import {
    ColumnSuggestion,
    KeywordSuggestion,
    TableOrViewSuggestion,
} from '../../../../shared/autocomplete-types';

test('should suggest properly after INSERT', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('INSERT |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'INTO'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after INTO', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('INSERT INTO |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'FUNCTION'}, {value: 'TABLE'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
    expect(autocompleteResult.suggestViewsOrTables).toEqual(TableOrViewSuggestion.ALL);
});

test('should suggest tables after INSERT INTO between statements', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor(
        'ALTER TABLE before_table DROP COLUMN id; INSERT INTO | ; ALTER TABLE after_table DROP COLUMN id;',
    );

    expect(autocompleteResult.suggestViewsOrTables).toEqual(TableOrViewSuggestion.ALL);
});

test('should suggest properly after table name', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('INSERT INTO test_table |');

    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: 'FORMAT'},
        {value: 'VALUES'},
        {value: 'WITH'},
        {value: 'SELECT'},
        {value: 'SETTINGS'},
    ];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after table name with a bracket', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('INSERT INTO test_table( | ');

    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: 'WITH'},
        {value: 'SELECT'},
        {value: '*'},
    ];
    const columnSuggestion: ColumnSuggestion = {tables: [{name: 'test_table'}]};
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
    expect(autocompleteResult.suggestColumns).toEqual(columnSuggestion);
});

test('should suggest table name for column between statements', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor(
        'ALTER TABLE before_table DROP COLUMN id; INSERT INTO test_table(| ; ALTER TABLE after_table DROP COLUMN id',
    );
    const columnSuggestion: ColumnSuggestion = {tables: [{name: 'test_table'}]};

    expect(autocompleteResult.suggestColumns).toEqual(columnSuggestion);
});

test('should suggest properly after table name', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor(
        'INSERT INTO test_table(test_column_1, test_column_2) |',
    );

    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: 'FORMAT'},
        {value: 'VALUES'},
        {value: 'WITH'},
        {value: 'SELECT'},
        {value: 'SETTINGS'},
    ];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after VALUES', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor(
        'INSERT INTO test_table(test_column_1, test_column_2) VALUES (|',
    );

    const keywordsSuggestion: KeywordSuggestion[] = [];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after values', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor(
        'INSERT INTO test_table(test_column_1, test_column_2) VALUES (123, 321) |',
    );

    const keywordsSuggestion: KeywordSuggestion[] = [];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after SELECT', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor(
        'INSERT INTO test_table(test_column_1, test_column_2) SELECT |',
    );

    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: '*'},
        {value: 'CASE'},
        {value: 'CAST'},
        {value: 'DATE'},
        {value: 'EXTRACT'},
        {value: 'INTERVAL'},
        {value: 'SUBSTRING'},
        {value: 'TIMESTAMP'},
        {value: 'TRIM'},
        {value: 'NOT'},
        {value: 'TOP'},
        {value: 'DISTINCT'},
    ];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should not report errors', () => {
    const autocompleteResult = parseClickHouseQueryWithoutCursor(
        'INSERT INTO test_table(id) VALUES(1);',
    );

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on values list', () => {
    const autocompleteResult = parseClickHouseQueryWithoutCursor(
        'INSERT INTO test_table(id) VALUES (1), (2)',
    );

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on values list with multiple arguments', () => {
    const autocompleteResult = parseClickHouseQueryWithoutCursor(
        'INSERT INTO test_table(id) VALUES (1, [2]), (1, [2])',
    );

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on values list with and without commas', () => {
    const autocompleteResult = parseClickHouseQueryWithoutCursor(
        'INSERT INTO test_table(id) VALUES (1, [2]), (1, [2]) (1, [2]) (1, [2])',
    );

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on called functions in value arguments', () => {
    const autocompleteResult = parseClickHouseQueryWithoutCursor(
        "INSERT INTO test_table VALUES (1, test_function1('2'), test_function2());",
    );

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on setting declaration', () => {
    const autocompleteResult = parseClickHouseQueryWithoutCursor(
        'INSERT INTO test_table SETTINGS test_setting = 1 VALUES (1);',
    );

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on setting declarations', () => {
    const autocompleteResult = parseClickHouseQueryWithoutCursor(
        "INSERT INTO test_table SETTINGS test_setting1 = 1, test_setting2 = '2' VALUES (1);",
    );

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on asterisk as columns identifier', () => {
    const autocompleteResult = parseClickHouseQueryWithoutCursor(
        'INSERT INTO test_table (*) VALUES (1);',
    );

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on except columns', () => {
    const autocompleteResult = parseClickHouseQueryWithoutCursor(
        'INSERT INTO test_table (* EXCEPT(test_column1, test_column2)) VALUES (1);',
    );

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should suggest columns in except context', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor(
        'INSERT INTO test_table (* EXCEPT(|)) VALUES (1);',
    );
    const columnSuggestion: ColumnSuggestion = {tables: [{name: 'test_table'}]};

    expect(autocompleteResult.suggestColumns).toEqual(columnSuggestion);
});

test('should not report errors on arrays in values', () => {
    const autocompleteResult = parseClickHouseQueryWithoutCursor(
        "INSERT INTO test_table(id) VALUES (1, [2, [3], [4], [5, 6, 7, '8', [9]]]), (1, [2])",
    );

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on polygon values', () => {
    const autocompleteResult = parseClickHouseQueryWithoutCursor(
        'INSERT INTO test_table(id) VALUES ((1, 2), [(3, 4), [(5, 6)]])',
    );

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on any expected type in array', () => {
    const autocompleteResult = parseClickHouseQueryWithoutCursor(
        "INSERT INTO test_table(id) VALUES ([1, '2', (3, 4), [5, '6', test_function(7, '8')]])",
    );

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should suggest format types', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor(
        'INSERT INTO test_table(id) FORMAT |',
    );

    expect(autocompleteResult.suggestKeywords).toEqual([
        {value: 'VALUES'},
        {value: 'REGEXP'},
        {value: 'TABSEPARATED'},
        {value: 'TABSEPARATEDRAW'},
        {value: 'TABSEPARATEDWITHNAMES'},
        {value: 'TABSEPARATEDWITHNAMESANDTYPES'},
        {value: 'TABSEPARATEDRAWWITHNAMES'},
        {value: 'TABSEPARATEDRAWWITHNAMESANDTYPES'},
        {value: 'TEMPLATE'},
        {value: 'TEMPLATEIGNORESPACES'},
        {value: 'CSV'},
        {value: 'CSVWITHNAMES'},
        {value: 'CSVWITHNAMESANDTYPES'},
        {value: 'CUSTOMSEPARATED'},
        {value: 'CUSTOMSEPARATEDWITHNAMES'},
        {value: 'CUSTOMSEPARATEDWITHNAMESANDTYPES'},
        {value: 'JSON'},
        {value: 'JSONASSTRING'},
        {value: 'JSONASOBJECT'},
        {value: 'JSONSTRINGS'},
        {value: 'JSONCOLUMNS'},
        {value: 'JSONCOLUMNSWITHMETADATA'},
        {value: 'JSONCOMPACT'},
        {value: 'JSONCOMPACTCOLUMNS'},
        {value: 'JSONEACHROW'},
        {value: 'JSONSTRINGSEACHROW'},
        {value: 'JSONCOMPACTEACHROW'},
        {value: 'JSONCOMPACTEACHROWWITHNAMES'},
        {value: 'JSONCOMPACTEACHROWWITHNAMESANDTYPES'},
        {value: 'JSONCOMPACTSTRINGSEACHROW'},
        {value: 'JSONCOMPACTSTRINGSEACHROWWITHNAMES'},
        {value: 'JSONCOMPACTSTRINGSEACHROWWITHNAMESANDTYPES'},
        {value: 'JSONOBJECTEACHROW'},
        {value: 'BSONEACHROW'},
        {value: 'TSKV'},
        {value: 'PROTOBUF'},
        {value: 'PROTOBUFSINGLE'},
        {value: 'PROTOBUFLIST'},
        {value: 'AVRO'},
        {value: 'AVROCONFLUENT'},
        {value: 'PARQUET'},
        {value: 'PARQUETMETADATA'},
        {value: 'ARROW'},
        {value: 'ARROWSTREAM'},
        {value: 'ORC'},
        {value: 'ONE'},
        {value: 'NPY'},
        {value: 'ROWBINARY'},
        {value: 'ROWBINARYWITHNAMES'},
        {value: 'ROWBINARYWITHNAMESANDTYPES'},
        {value: 'ROWBINARYWITHDEFAULTS'},
        {value: 'NATIVE'},
        {value: 'CAPNPROTO'},
        {value: 'LINEASSTRING'},
        {value: 'RAWBLOB'},
        {value: 'MSGPACK'},
        {value: 'MYSQLDUMP'},
        {value: 'DWARF'},
        {value: 'FORM'},
    ]);
});

test('should not throw error on any format type', () => {
    const autocompleteResult = parseClickHouseQueryWithoutCursor(`
        INSERT INTO test_table FORMAT VALUES ('test_value');
        INSERT INTO test_table FORMAT TabSeparated test_value;
        INSERT INTO test_table FORMAT TabSeparatedRaw test_value;
        INSERT INTO test_table FORMAT TabSeparatedWithNames test_value;
        INSERT INTO test_table FORMAT TabSeparatedWithNamesAndTypes test_value;
        INSERT INTO test_table FORMAT TabSeparatedRawWithNames test_value;
        INSERT INTO test_table FORMAT TabSeparatedRawWithNamesAndTypes test_value;
        INSERT INTO test_table FORMAT Template test_value;
        INSERT INTO test_table FORMAT TemplateIgnoreSpaces test_value;
        INSERT INTO test_table FORMAT CSV test_value;
        INSERT INTO test_table FORMAT CSVWithNames test_value;
        INSERT INTO test_table FORMAT CSVWithNamesAndTypes test_value;
        INSERT INTO test_table FORMAT CustomSeparated test_value;
        INSERT INTO test_table FORMAT CustomSeparatedWithNames test_value;
        INSERT INTO test_table FORMAT CustomSeparatedWithNamesAndTypes test_value;
        INSERT INTO test_table FORMAT Values ('test_value');
        INSERT INTO test_table FORMAT JSON test_value;
        INSERT INTO test_table FORMAT JSONAsString test_value;
        INSERT INTO test_table FORMAT JSONAsObject test_value;
        INSERT INTO test_table FORMAT JSONStrings test_value;
        INSERT INTO test_table FORMAT JSONColumns test_value;
        INSERT INTO test_table FORMAT JSONColumnsWithMetadata test_value;
        INSERT INTO test_table FORMAT JSONCompact test_value;
        INSERT INTO test_table FORMAT JSONCompactColumns test_value;
        INSERT INTO test_table FORMAT JSONEachRow test_value;
        INSERT INTO test_table FORMAT JSONStringsEachRow test_value;
        INSERT INTO test_table FORMAT JSONCompactEachRow test_value;
        INSERT INTO test_table FORMAT JSONCompactEachRowWithNames test_value;
        INSERT INTO test_table FORMAT JSONCompactEachRowWithNamesAndTypes test_value;
        INSERT INTO test_table FORMAT JSONCompactStringsEachRow test_value;
        INSERT INTO test_table FORMAT JSONCompactStringsEachRowWithNames test_value;
        INSERT INTO test_table FORMAT JSONCompactStringsEachRowWithNamesAndTypes test_value;
        INSERT INTO test_table FORMAT JSONObjectEachRow test_value;
        INSERT INTO test_table FORMAT BSONEachRow test_value;
        INSERT INTO test_table FORMAT TSKV test_value;
        INSERT INTO test_table FORMAT Protobuf test_value;
        INSERT INTO test_table FORMAT ProtobufSingle test_value;
        INSERT INTO test_table FORMAT ProtobufList test_value;
        INSERT INTO test_table FORMAT Avro test_value;
        INSERT INTO test_table FORMAT AvroConfluent test_value;
        INSERT INTO test_table FORMAT Parquet test_value;
        INSERT INTO test_table FORMAT ParquetMetadata test_value;
        INSERT INTO test_table FORMAT Arrow test_value;
        INSERT INTO test_table FORMAT ArrowStream test_value;
        INSERT INTO test_table FORMAT ORC test_value;
        INSERT INTO test_table FORMAT One test_value;
        INSERT INTO test_table FORMAT Npy test_value;
        INSERT INTO test_table FORMAT RowBinary test_value;
        INSERT INTO test_table FORMAT RowBinaryWithNames test_value;
        INSERT INTO test_table FORMAT RowBinaryWithNamesAndTypes test_value;
        INSERT INTO test_table FORMAT RowBinaryWithDefaults test_value;
        INSERT INTO test_table FORMAT Native test_value;
        INSERT INTO test_table FORMAT CapnProto test_value;
        INSERT INTO test_table FORMAT LineAsString test_value;
        INSERT INTO test_table FORMAT Regexp test_value;
        INSERT INTO test_table FORMAT RawBLOB test_value;
        INSERT INTO test_table FORMAT MsgPack test_value;
        INSERT INTO test_table FORMAT MySQLDump test_value;
        INSERT INTO test_table FORMAT DWARF test_value;
        INSERT INTO test_table FORMAT Form test_value;
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});
