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

test('should not throw error on TabSeparated format type values', () => {
    const autocompleteResult = parseClickHouseQueryWithoutCursor(`
      INSERT INTO test_table FORMAT TabSeparated
        test_value1	test_value2	test_value3
        test_value1	test_value2	test_value3
      ;
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not throw error on TabSeparatedRaw format type values', () => {
    const autocompleteResult = parseClickHouseQueryWithoutCursor(`
      INSERT INTO test_table FORMAT TabSeparatedRaw
        test_value1	test_value2	test_value3
        test_value1	test_value2	test_value3
      ;
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not throw error on TabSeparatedWithNames format type values', () => {
    const autocompleteResult = parseClickHouseQueryWithoutCursor(`
      INSERT INTO test_table FORMAT TabSeparatedWithNames
        test_column1 test_column2 test_column3
        test_value1	test_value2	test_value3
        test_value1	test_value2	test_value3
      ;
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not throw error on TabSeparatedWithNamesAndTypes format type values', () => {
    const autocompleteResult = parseClickHouseQueryWithoutCursor(`
      INSERT INTO test_table FORMAT TabSeparatedWithNamesAndTypes
        test_column1 test_column2 test_column3
        test_type1  test_type2 test_type3
        test_value1	test_value2	test_value3
        test_value1	test_value2	test_value3
      ;
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not throw error on TabSeparatedRawWithNames format type values', () => {
    const autocompleteResult = parseClickHouseQueryWithoutCursor(`
      INSERT INTO test_table FORMAT TabSeparatedRawWithNames
        test_column1 test_column2 test_column3
        test_value1	test_value2	test_value3
        test_value1	test_value2	test_value3
      ;
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not throw error on TabSeparatedRawWithNamesAndTypes format type values', () => {
    const autocompleteResult = parseClickHouseQueryWithoutCursor(`
      INSERT INTO test_table FORMAT TabSeparatedRawWithNamesAndTypes
        test_column1 test_column2 test_column3
        test_type1  test_type2 test_type3
        test_value1	test_value2	test_value3
        test_value1	test_value2	test_value3
      ;
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not throw error on Template format type values', () => {
    const autocompleteResult = parseClickHouseQueryWithoutCursor(`
      INSERT INTO test_table FORMAT Template;
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not throw error on TemplateIgnoreSpaces format type values', () => {
    const autocompleteResult = parseClickHouseQueryWithoutCursor(`
      INSERT INTO test_table FORMAT TemplateIgnoreSpaces;
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not throw error on CSV format type values', () => {
    const autocompleteResult = parseClickHouseQueryWithoutCursor(`
      INSERT INTO test_table FORMAT CSV
        test_value1, test_value2, test_value3
        test_value1, test_value2, test_value3
        test_value1, test_value2, test_value3
      ;
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not throw error on CSVWithNames format type values', () => {
    const autocompleteResult = parseClickHouseQueryWithoutCursor(`
      INSERT INTO test_table FORMAT CSVWithNames
        test_column1, test_column2, test_column3,
        test_value1, test_value2, test_value3
        test_value1, test_value2, test_value3
        test_value1, test_value2, test_value3
      ;
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not throw error on CSVWithNamesAndTypes format type values', () => {
    const autocompleteResult = parseClickHouseQueryWithoutCursor(`
      INSERT INTO test_table FORMAT CSVWithNamesAndTypes
        test_column1 test_column2 test_column3
        test_type1  test_type2 test_type3
        test_value1	test_value2	test_value3
        test_value1	test_value2	test_value3
      ;
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not throw error on CustomSeparated format type values', () => {
    const autocompleteResult = parseClickHouseQueryWithoutCursor(`
      INSERT INTO test_table FORMAT CustomSeparated;
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not throw error on CustomSeparatedWithNames format type values', () => {
    const autocompleteResult = parseClickHouseQueryWithoutCursor(`
      INSERT INTO test_table FORMAT CustomSeparatedWithNames;
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not throw error on CustomSeparatedWithNamesAndTypes format type values', () => {
    const autocompleteResult = parseClickHouseQueryWithoutCursor(`
      INSERT INTO test_table FORMAT CustomSeparatedWithNamesAndTypes;
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not throw error on Values format type values', () => {
    const autocompleteResult = parseClickHouseQueryWithoutCursor(`
      INSERT INTO test_table FORMAT Values ('test_value1', 1), ('test_value2', 2);
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not throw error on JSON format type values', () => {
    const autocompleteResult = parseClickHouseQueryWithoutCursor(`
      INSERT INTO test_table FORMAT JSON
        {
          "test_field1": 1,
          "test_field2": "text",
          "test_field3": null,
          "test_field4": [1,2,3]
        }
      ;
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not throw error on JSONAsString format type values', () => {
    const autocompleteResult = parseClickHouseQueryWithoutCursor(`
      INSERT INTO test_table FORMAT JSONAsString
        {
          "test_field1": 1,
          "test_field2": "text",
          "test_field3": null,
          "test_field4": "[1,2,3]"
        }
      ;
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not throw error on JSONAsObject format type values', () => {
    const autocompleteResult = parseClickHouseQueryWithoutCursor(`
      INSERT INTO test_table FORMAT JSONAsObject
        {
          "test_field1": 1,
          "test_field2": "text",
          "test_field3": null,
          "test_field4": "[1,2,3]"
        }
      ;
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not throw error on JSONStrings format type values', () => {
    const autocompleteResult = parseClickHouseQueryWithoutCursor(`
      INSERT INTO test_table FORMAT JSONStrings
        {
          "test_field1": 1,
          "test_field2": "text",
          "test_field3": null,
          "test_field4": "[1,2,3]"
        }
      ;
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not throw error on JSONColumns format type values', () => {
    const autocompleteResult = parseClickHouseQueryWithoutCursor(`
      INSERT INTO test_table FORMAT JSONColumns
        {
          "test_field1": 1,
          "test_field2": "text",
          "test_field3": null,
          "test_field4": "[1,2,3]"
        }
      ;
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not throw error on JSONColumnsWithMetadata format type values', () => {
    const autocompleteResult = parseClickHouseQueryWithoutCursor(`
      INSERT INTO test_table FORMAT JSONColumnsWithMetadata
        {
          "test_field1": 1,
          "test_field2": "text",
          "test_field3": null,
          "test_field4": "[1,2,3]"
        }
      ;
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not throw error on JSONCompact format type values', () => {
    const autocompleteResult = parseClickHouseQueryWithoutCursor(`
      INSERT INTO test_table FORMAT JSONCompact
        {
          "test_field1": 1,
          "test_field2": "text",
          "test_field3": null,
          "test_field4": "[1,2,3]"
        }
      ;
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not throw error on JSONCompactColumns format type values', () => {
    const autocompleteResult = parseClickHouseQueryWithoutCursor(`
      INSERT INTO test_table FORMAT JSONCompactColumns
        {
          "test_field1": 1,
          "test_field2": "text",
          "test_field3": null,
          "test_field4": "[1,2,3]"
        }
      ;
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not throw error on JSONEachRow format type values', () => {
    const autocompleteResult = parseClickHouseQueryWithoutCursor(`
      INSERT INTO test_table FORMAT JSONEachRow
        {
          "test_field1": 1,
          "test_field2": "text",
          "test_field3": null,
          "test_field4": "[1,2,3]"
        }
      ;
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not throw error on JSONStringsEachRow format type values', () => {
    const autocompleteResult = parseClickHouseQueryWithoutCursor(`
      INSERT INTO test_table FORMAT JSONStringsEachRow
        {
          "test_field1": 1,
          "test_field2": "text",
          "test_field3": null,
          "test_field4": "[1,2,3]"
        }
      ;
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not throw error on JSONCompactEachRow format type values', () => {
    const autocompleteResult = parseClickHouseQueryWithoutCursor(`
      INSERT INTO test_table FORMAT JSONCompactEachRow
        {
          "test_field1": 1,
          "test_field2": "text",
          "test_field3": null,
          "test_field4": "[1,2,3]"
        }
      ;
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not throw error on JSONCompactEachRowWithNames format type values', () => {
    const autocompleteResult = parseClickHouseQueryWithoutCursor(`
      INSERT INTO test_table FORMAT JSONCompactEachRowWithNames
        {
          "test_field1": 1,
          "test_field2": "text",
          "test_field3": null,
          "test_field4": "[1,2,3]"
        }
      ;
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not throw error on JSONCompactEachRowWithNamesAndTypes format type values', () => {
    const autocompleteResult = parseClickHouseQueryWithoutCursor(`
      INSERT INTO test_table FORMAT JSONCompactEachRowWithNamesAndTypes
        {
          "test_field1": 1,
          "test_field2": "text",
          "test_field3": null,
          "test_field4": "[1,2,3]"
        }
      ;
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not throw error on JSONCompactStringsEachRow format type values', () => {
    const autocompleteResult = parseClickHouseQueryWithoutCursor(`
      INSERT INTO test_table FORMAT JSONCompactStringsEachRow
        {
          "test_field1": 1,
          "test_field2": "text",
          "test_field3": null,
          "test_field4": "[1,2,3]"
        }
      ;
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not throw error on JSONCompactStringsEachRowWithNames format type values', () => {
    const autocompleteResult = parseClickHouseQueryWithoutCursor(`
      INSERT INTO test_table FORMAT JSONCompactStringsEachRowWithNames
        {
          "test_field1": 1,
          "test_field2": "text",
          "test_field3": null,
          "test_field4": "[1,2,3]"
        }
      ;
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not throw error on JSONCompactStringsEachRowWithNamesAndTypes format type values', () => {
    const autocompleteResult = parseClickHouseQueryWithoutCursor(`
      INSERT INTO test_table FORMAT JSONCompactStringsEachRowWithNamesAndTypes
        {
          "test_field1": 1,
          "test_field2": "text",
          "test_field3": null,
          "test_field4": "[1,2,3]"
        }
      ;
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not throw error on JSONObjectEachRow format type values', () => {
    const autocompleteResult = parseClickHouseQueryWithoutCursor(`
      INSERT INTO test_table FORMAT JSONObjectEachRow
        {
          "test_field1": 1,
          "test_field2": "text",
          "test_field3": null,
          "test_field4": "[1,2,3]"
        }
      ;
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not throw error on BSONEachRow format type', () => {
    const autocompleteResult = parseClickHouseQueryWithoutCursor(`
      INSERT INTO test_table FORMAT BSONEachRow;
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not throw error on TSKV format type', () => {
    const autocompleteResult = parseClickHouseQueryWithoutCursor(`
      INSERT INTO test_table FORMAT TSKV;
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not throw error on Protobuf format type', () => {
    const autocompleteResult = parseClickHouseQueryWithoutCursor(`
      INSERT INTO test_table FORMAT Protobuf;
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not throw error on ProtobufSingle format type', () => {
    const autocompleteResult = parseClickHouseQueryWithoutCursor(`
      INSERT INTO test_table FORMAT ProtobufSingle;
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not throw error on ProtobufList format type', () => {
    const autocompleteResult = parseClickHouseQueryWithoutCursor(`
      INSERT INTO test_table FORMAT ProtobufList;
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not throw error on Avro format type', () => {
    const autocompleteResult = parseClickHouseQueryWithoutCursor(`
      INSERT INTO test_table FORMAT Avro;
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not throw error on AvroConfluent format type', () => {
    const autocompleteResult = parseClickHouseQueryWithoutCursor(`
      INSERT INTO test_table FORMAT AvroConfluent;
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not throw error on Parquet format type', () => {
    const autocompleteResult = parseClickHouseQueryWithoutCursor(`
      INSERT INTO test_table FORMAT Parquet;
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not throw error on ParquetMetadata format type', () => {
    const autocompleteResult = parseClickHouseQueryWithoutCursor(`
      INSERT INTO test_table FORMAT ParquetMetadata;
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not throw error on Arrow format type', () => {
    const autocompleteResult = parseClickHouseQueryWithoutCursor(`
      INSERT INTO test_table FORMAT Arrow;
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not throw error on ArrowStream format type', () => {
    const autocompleteResult = parseClickHouseQueryWithoutCursor(`
      INSERT INTO test_table FORMAT ArrowStream;
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not throw error on ORC format type', () => {
    const autocompleteResult = parseClickHouseQueryWithoutCursor(`
      INSERT INTO test_table FORMAT ORC;
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not throw error on One format type', () => {
    const autocompleteResult = parseClickHouseQueryWithoutCursor(`
      INSERT INTO test_table FORMAT One;
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not throw error on Npy format type', () => {
    const autocompleteResult = parseClickHouseQueryWithoutCursor(`
      INSERT INTO test_table FORMAT Npy;
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not throw error on RowBinary format type values', () => {
    const autocompleteResult = parseClickHouseQueryWithoutCursor(`
      INSERT INTO test_table FORMAT RowBinary;
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not throw error on RowBinaryWithNames format type values', () => {
    const autocompleteResult = parseClickHouseQueryWithoutCursor(`
      INSERT INTO test_table FORMAT RowBinaryWithNames;
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not throw error on RowBinaryWithNamesAndTypes format type values', () => {
    const autocompleteResult = parseClickHouseQueryWithoutCursor(`
      INSERT INTO test_table FORMAT RowBinaryWithNamesAndTypes;
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not throw error on RowBinaryWithDefaults format type values', () => {
    const autocompleteResult = parseClickHouseQueryWithoutCursor(`
      INSERT INTO test_table FORMAT RowBinaryWithDefaults;
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not throw error on Native format type values', () => {
    const autocompleteResult = parseClickHouseQueryWithoutCursor(`
      INSERT INTO test_table FORMAT Native;
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not throw error on CapnProto format type values', () => {
    const autocompleteResult = parseClickHouseQueryWithoutCursor(`
      INSERT INTO test_table FORMAT CapnProto;
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not throw error on LineAsString format type values', () => {
    const autocompleteResult = parseClickHouseQueryWithoutCursor(`
      INSERT INTO test_table FORMAT LineAsString;
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not throw error on Regexp format type values', () => {
    const autocompleteResult = parseClickHouseQueryWithoutCursor(`
      INSERT INTO test_table FORMAT Regexp;
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not throw error on RawBLOB format type values', () => {
    const autocompleteResult = parseClickHouseQueryWithoutCursor(`
      INSERT INTO test_table FORMAT RawBLOB;
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not throw error on MsgPack format type values', () => {
    const autocompleteResult = parseClickHouseQueryWithoutCursor(`
      INSERT INTO test_table FORMAT MsgPack;
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not throw error on MySQLDump format type values', () => {
    const autocompleteResult = parseClickHouseQueryWithoutCursor(`
      INSERT INTO test_table FORMAT MySQLDump;
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not throw error on DWARF format type values', () => {
    const autocompleteResult = parseClickHouseQueryWithoutCursor(`
      INSERT INTO test_table FORMAT DWARF;
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not throw error on Form format type values', () => {
    const autocompleteResult = parseClickHouseQueryWithoutCursor(`
      INSERT INTO test_table FORMAT Form;
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not throw error on any input in format value', () => {
    const autocompleteResult = parseClickHouseQueryWithoutCursor(`
      INSERT INTO test_table FORMAT JSON
        !@#$%^&*()_+±§\`~,./?"|[]{}-+=
        1234567890
        qwertyuiopasdfghjklzxcvbnm<>;:
      ;
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not suggest after format type', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor(
        'INSERT INTO test_table FORMAT JSON |;',
    );

    expect(autocompleteResult.suggestKeywords).toEqual([]);
});

test('should not suggest after any value', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor(
        'INSERT INTO test_table FORMAT JSON test_value|;',
    );

    expect(autocompleteResult.suggestKeywords).toEqual([]);
});
