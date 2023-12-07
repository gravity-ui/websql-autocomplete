import {expect, test} from '@jest/globals';

import {
    AutocompleteError,
    EnginesSuggestion,
    KeywordSuggestion,
    parseClickHouseQuery,
} from '../../../../index';

test('should suggest TABLE', () => {
    const parseResult = parseClickHouseQuery('CREATE ', '');

    expect(parseResult.errors).toBeUndefined();

    const suggestion: KeywordSuggestion = {value: 'TABLE', weight: -1};
    expect(parseResult.suggestKeywords).toContainEqual(suggestion);
});

test('should suggest IF NOT EXISTS', () => {
    const parseResult = parseClickHouseQuery('CREATE TABLE ', '');

    expect(parseResult.errors).toBeUndefined();

    const suggestion: KeywordSuggestion = {value: 'IF NOT EXISTS', weight: -1};
    expect(parseResult.suggestKeywords).toContainEqual(suggestion);
});

test('should suggest NOT EXISTS', () => {
    const parseResult = parseClickHouseQuery('CREATE TABLE IF ', '');

    expect(parseResult.errors).toBeUndefined();

    const suggestion: KeywordSuggestion = {value: 'NOT EXISTS', weight: -1};
    expect(parseResult.suggestKeywords).toContainEqual(suggestion);
});

test('should suggest EXISTS', () => {
    const parseResult = parseClickHouseQuery('CREATE TABLE IF NOT ', '');

    expect(parseResult.errors).toBeUndefined();

    const suggestion: KeywordSuggestion = {value: 'EXISTS', weight: -1};
    expect(parseResult.suggestKeywords).toContainEqual(suggestion);
});

test('should suggest DOUBLE', () => {
    const parseResult = parseClickHouseQuery('CREATE TABLE test_table (test_column ', '');

    const suggestion: KeywordSuggestion = {value: 'DOUBLE', weight: -1};
    expect(parseResult.suggestKeywords).toContainEqual(suggestion);
});

test('should suggest DOUBLE for third column', () => {
    const parseResult = parseClickHouseQuery(
        'CREATE TABLE test_table (test_column_1 INT, test_column_2 FLOAT, test_column_3 ',
        '',
    );

    const suggestion: KeywordSuggestion = {value: 'DOUBLE', weight: -1};
    expect(parseResult.suggestKeywords).toContainEqual(suggestion);
});

test('should suggest ENGINE', () => {
    const parseResult = parseClickHouseQuery(
        'CREATE TABLE test_table (test_column_1 INT, test_column_2 FLOAT) ',
        '',
    );

    const suggestion: KeywordSuggestion = {value: 'ENGINE', weight: 13};
    expect(parseResult.suggestKeywords).toContainEqual(suggestion);
});

test('should suggest equal sign', () => {
    const parseResult = parseClickHouseQuery(
        'CREATE TABLE test_table (test_column_1 INT, test_column_2 FLOAT) ENGINE ',
        '',
    );

    const suggestion: KeywordSuggestion = {value: '=', weight: -1};
    expect(parseResult.suggestKeywords).toContainEqual(suggestion);
});

test('should suggest engines', () => {
    const parseResult = parseClickHouseQuery(
        'CREATE TABLE test_table (test_column_1 INT, test_column_2 FLOAT) ENGINE = ',
        '',
    );

    const engineSuggestion: EnginesSuggestion = {
        engines: ['Null', 'Set', 'Log', 'Memory', 'TinyLog', 'StripeLog'],
        functionalEngines: [
            'MergeTree()',
            'Merge()',
            'ReplacingMergeTree()',
            'CollapsingMergeTree()',
            'AggregatingMergeTree()',
            'Buffer()',
            'Dictionary()',
            'Distributed()',
            'File()',
            'GraphiteMergeTree()',
            'Join()',
            'Kafka()',
            'MySQL()',
            'URL()',
            'ReplicatedAggregatingMergeTree()',
            'ReplicatedCollapsingMergeTree()',
            'ReplicatedGraphiteMergeTree()',
            'ReplicatedMergeTree()',
            'ReplicatedReplacingMergeTree()',
            'ReplicatedSummingMergeTree()',
            'ReplicatedVersionedCollapsingMergeTree()',
            'SummingMergeTree()',
            'VersionedCollapsingMergeTree()',
            'PostgreSQL()',
        ],
    };
    expect(parseResult.suggestEngines).toEqual(engineSuggestion);
});

test('should not report error on statement with Memory engine', () => {
    const parseResult = parseClickHouseQuery(
        'CREATE TABLE test_table (test_column_1 INT, test_column_2 FLOAT) ENGINE = Memory; ',
        '',
    );

    expect(parseResult.errors).toBeUndefined();
});

test('should report error because of missing ENGINE', () => {
    const parseResult = parseClickHouseQuery('CREATE TABLE test_table (test_column INT); ', '');

    const error: Partial<AutocompleteError> = {
        expected: ["'CURSOR'", "'PARTITION'", "'ENGINE'"],
        line: 0,
        loc: {first_column: 41, first_line: 1, last_column: 42, last_line: 1},
        text: ';',
        token: ';',
    };

    expect(parseResult.errors).toContainEqual(expect.objectContaining(error));
});

test('should not report error on statement with ReplacingMergeTree engine', () => {
    const parseResult = parseClickHouseQuery(
        'CREATE TABLE test_table (test_column_1 INT, test_column_2 FLOAT) ENGINE = ReplacingMergeTree(update_ts); ',
        '',
    );

    expect(parseResult.errors).toBeUndefined();
});

test('should report error because of incomplete ReplacingMergeTree syntax', () => {
    const parseResult = parseClickHouseQuery(
        'CREATE TABLE test_table (test_column_1 UInt32, `test_column_2` Float64) ENGINE = ReplacingMergeTree(update_ts, ) ',
        '',
    );

    const error: Partial<AutocompleteError> = {
        text: ')',
        token: ')',
        line: 0,
        loc: {first_line: 1, last_line: 1, first_column: 111, last_column: 112},
    };

    expect(parseResult.errors).toContainEqual(expect.objectContaining(error));
});

test('should accept Enum', () => {
    const parseResult = parseClickHouseQuery(
        "CREATE TABLE test_table (test_column Enum8('string' = 1)) ENGINE = Memory; ",
        '',
    );

    expect(parseResult.errors).toBeUndefined();
});

test('should accept complex Enum', () => {
    const parseResult = parseClickHouseQuery(
        "CREATE TABLE test_table (test_column Enum8('string' = 1, 'string', 'string')) ENGINE = Memory; ",
        '',
    );

    expect(parseResult.errors).toBeUndefined();
});

test('should accept SimpleAggregateFunction', () => {
    const parseResult = parseClickHouseQuery(
        'CREATE TABLE test_table (test_column SimpleAggregateFunction(sum, String)) ENGINE = Memory; ',
        '',
    );

    expect(parseResult.errors).toBeUndefined();
});

test('should accept Decimal64', () => {
    const parseResult = parseClickHouseQuery(
        'CREATE TABLE test_table (test_column Decimal64(12)) ENGINE = Memory; ',
        '',
    );

    expect(parseResult.errors).toBeUndefined();
});

test('should accept Decimal', () => {
    const parseResult = parseClickHouseQuery(
        'CREATE TABLE test_table (test_column Decimal(12, 12)) ENGINE = Memory; ',
        '',
    );

    expect(parseResult.errors).toBeUndefined();
});

test('should accept Nullable', () => {
    const parseResult = parseClickHouseQuery(
        'CREATE TABLE test_table (test_column Nullable(Decimal(12, 12))) ENGINE = Memory; ',
        '',
    );

    expect(parseResult.errors).toBeUndefined();
});

test('should accept AggregateFunction', () => {
    const parseResult = parseClickHouseQuery(
        'CREATE TABLE test_table (test_column AggregateFunction(sum, String)) ENGINE = Memory; ',
        '',
    );

    expect(parseResult.errors).toBeUndefined();
});

test('should accept DateTime', () => {
    const parseResult = parseClickHouseQuery(
        "CREATE TABLE test_table (test_column DateTime('Some/Timezone')) ENGINE = Memory; ",
        '',
    );

    expect(parseResult.errors).toBeUndefined();
});

test('should accept Tuple', () => {
    const parseResult = parseClickHouseQuery(
        'CREATE TABLE test_table (test_column Tuple(s String, i Int64)) ENGINE = Memory; ',
        '',
    );

    expect(parseResult.errors).toBeUndefined();
});

test('should accept Nested', () => {
    const parseResult = parseClickHouseQuery(
        'CREATE TABLE test_table (test_column Nested(id String, data Int64)) ENGINE = Memory; ',
        '',
    );

    expect(parseResult.errors).toBeUndefined();
});

test('should accept Point', () => {
    const parseResult = parseClickHouseQuery(
        'CREATE TABLE test_table (test_column Point) ENGINE = Memory; ',
        '',
    );

    expect(parseResult.errors).toBeUndefined();
});

test('should accept Ring', () => {
    const parseResult = parseClickHouseQuery(
        'CREATE TABLE test_table (test_column Ring) ENGINE = Memory; ',
        '',
    );

    expect(parseResult.errors).toBeUndefined();
});

test('should accept Polygon', () => {
    const parseResult = parseClickHouseQuery(
        'CREATE TABLE test_table (test_column Polygon) ENGINE = Memory; ',
        '',
    );

    expect(parseResult.errors).toBeUndefined();
});

test('should accept BINARY', () => {
    const parseResult = parseClickHouseQuery(
        'CREATE TABLE test_table (test_column BINARY(12)) ENGINE = Memory; ',
        '',
    );

    expect(parseResult.errors).toBeUndefined();
});

test('should accept BINARY(NULL)', () => {
    const parseResult = parseClickHouseQuery(
        'CREATE TABLE test_table (test_column BINARY(NULL)) ENGINE = Memory; ',
        '',
    );

    expect(parseResult.errors).toBeUndefined();
});

test('should accept MultiPolygon', () => {
    const parseResult = parseClickHouseQuery(
        'CREATE TABLE test_table (test_column MultiPolygon) ENGINE = Memory; ',
        '',
    );

    expect(parseResult.errors).toBeUndefined();
});

test('should accept LowCardinality', () => {
    const parseResult = parseClickHouseQuery(
        'CREATE TABLE test_table (test_column LowCardinality(String)) ENGINE = Memory; ',
        '',
    );

    expect(parseResult.errors).toBeUndefined();
});

test('should accept Array', () => {
    const parseResult = parseClickHouseQuery(
        'CREATE TABLE test_table (test_column Array(Array(String))) ENGINE = Memory; ',
        '',
    );

    expect(parseResult.errors).toBeUndefined();
});

test('should accept FixedString', () => {
    const parseResult = parseClickHouseQuery(
        'CREATE TABLE test_table (test_column FixedString(12)) ENGINE = Memory; ',
        '',
    );

    expect(parseResult.errors).toBeUndefined();
});

test('should accept FixedString without arguments', () => {
    const parseResult = parseClickHouseQuery(
        'CREATE TABLE test_table (test_column FixedString) ENGINE = Memory; ',
        '',
    );

    expect(parseResult.errors).toBeUndefined();
});

test('should accept TIMESTAMP', () => {
    const parseResult = parseClickHouseQuery(
        "CREATE TABLE test_table (test_column TIMESTAMP('data')) ENGINE = Memory; ",
        '',
    );

    expect(parseResult.errors).toBeUndefined();
});

test('should accept TIMESTAMP(NULL)', () => {
    const parseResult = parseClickHouseQuery(
        'CREATE TABLE test_table (test_column TIMESTAMP(NULL)) ENGINE = Memory; ',
        '',
    );

    expect(parseResult.errors).toBeUndefined();
});

test('should accept all data types', () => {
    const parseResult = parseClickHouseQuery(
        "CREATE TABLE test_table (field IPv6, field IPv4, field LowCardinality(String), field Decimal(1, 2), field String, field Decimal64(1), field Decimal32(1), field Decimal128(1), field Float64, field Float32, field Int64, field SimpleAggregateFunction(sum, String), field AggregateFunction(sum, String), field Array(String), field Array(Array(String)), field Nothing, field UInt16, field Enum16('text', 'text' = 1), field Enum16('text', 'text' = -1), field UInt32, field Date, field Int8, field Int32, field Enum8('text', 'text' = 1), field Enum8('text', 'text' = -1), field UInt64, field IntervalSecond, field Int16, field DateTime('Country/Timezone'), field Enum('text', 'text' = 1), field Enum('text', 'text' = -1), field Tuple(text1 String, text2 String), field IntervalMonth, field Nested(field String), field IntervalMinute, field IntervalHour, field IntervalWeek, field IntervalDay, field UInt8, field IntervalQuarter, field UUID, field IntervalYear, field LONGBLOB, field LONGBLOB(12), field MEDIUMBLOB, field MEDIUMBLOB(12), field TINYBLOB, field TINYBLOB(12), field BIGINT, field SMALLINT, field TIMESTAMP(NULL), field TIMESTAMP('value'), field INTEGER, field INT, field DOUBLE, field MEDIUMTEXT, field MEDIUMTEXT(12), field TINYINT, field DEC(1, 2), field BINARY(NULL), field BINARY(12), field FLOAT, field CHAR, field CHAR(12), field VARCHAR, field VARCHAR(12), field TEXT, field TINYTEXT, field TINYTEXT(12), field LONGTEXT, field LONGTEXT(12), field BLOB, field BLOB(12), field Point, field Ring, field Polygon, field MultiPolygon, field Map(String, String)) ENGINE = Memory; ",
        '',
    );

    expect(parseResult.errors).toBeUndefined();
});

test('should suggest all data types', () => {
    const parseResult = parseClickHouseQuery(
        'CREATE TABLE test_table (test_column ',
        ') ENGINE = Memory; ',
    );

    expect(parseResult.errors).toBeUndefined();

    const suggestions: KeywordSuggestion[] = [
        {value: 'AggregateFunction', weight: -1},
        {value: 'Array', weight: -1},
        {value: 'BIGINT', weight: -1},
        {value: 'BINARY', weight: -1},
        {value: 'BLOB', weight: -1},
        {value: 'CHAR', weight: -1},
        {value: 'Date', weight: -1},
        {value: 'DateTime', weight: -1},
        {value: 'DEC', weight: -1},
        {value: 'Decimal', weight: -1},
        {value: 'Decimal128', weight: -1},
        {value: 'Decimal32', weight: -1},
        {value: 'Decimal64', weight: -1},
        {value: 'DOUBLE', weight: -1},
        {value: 'Enum', weight: -1},
        {value: 'Enum16', weight: -1},
        {value: 'Enum8', weight: -1},
        {value: 'FixedString', weight: -1},
        {value: 'FLOAT', weight: -1},
        {value: 'Float32', weight: -1},
        {value: 'Float64', weight: -1},
        {value: 'INT', weight: -1},
        {value: 'Int16', weight: -1},
        {value: 'Int32', weight: -1},
        {value: 'Int64', weight: -1},
        {value: 'Int8', weight: -1},
        {value: 'INTEGER', weight: -1},
        {value: 'IntervalDay', weight: -1},
        {value: 'IntervalHour', weight: -1},
        {value: 'IntervalMinute', weight: -1},
        {value: 'IntervalMonth', weight: -1},
        {value: 'IntervalQuarter', weight: -1},
        {value: 'IntervalSecond', weight: -1},
        {value: 'IntervalWeek', weight: -1},
        {value: 'IntervalYear', weight: -1},
        {value: 'IPv4', weight: -1},
        {value: 'IPv6', weight: -1},
        {value: 'LONGBLOB', weight: -1},
        {value: 'LONGTEXT', weight: -1},
        {value: 'LowCardinality', weight: -1},
        {value: 'MEDIUMBLOB', weight: -1},
        {value: 'MEDIUMTEXT', weight: -1},
        {value: 'MultiPolygon', weight: -1},
        {value: 'Nested', weight: -1},
        {value: 'Nothing', weight: -1},
        {value: 'Nullable', weight: -1},
        {value: 'Point', weight: -1},
        {value: 'Polygon', weight: -1},
        {value: 'Ring', weight: -1},
        {value: 'SimpleAggregateFunction', weight: -1},
        {value: 'SMALLINT', weight: -1},
        {value: 'String', weight: -1},
        {value: 'TEXT', weight: -1},
        {value: 'TIMESTAMP', weight: -1},
        {value: 'TINYBLOB', weight: -1},
        {value: 'TINYINT', weight: -1},
        {value: 'TINYTEXT', weight: -1},
        {value: 'Tuple', weight: -1},
        {value: 'UInt16', weight: -1},
        {value: 'UInt32', weight: -1},
        {value: 'UInt64', weight: -1},
        {value: 'UInt8', weight: -1},
        {value: 'UUID', weight: -1},
        {value: 'VARCHAR', weight: -1},
    ];

    expect(parseResult.suggestKeywords).toEqual(suggestions);
});
