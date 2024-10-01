/* eslint no-useless-escape: "off" */
/* eslint filenames/match-regex: "off" */
/* eslint no-irregular-whitespace: "off" */
import {parseClickHouseQueryWithoutCursor} from '../../index';

test('[SHOW] should pass without errors: 1', () => {
    const query = `SHOW CREATE TABLE uk_price_paid;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 2', () => {
    const query = `SHOW CREATE VIEW prices_by_year_view;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 3', () => {
    const query = `SHOW CREATE uk_prices_aggs_dest;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 4', () => {
    const query = `SHOW CREATE VIEW uk_prices_aggs_view;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 5', () => {
    const query = `SHOW CREATE DICTIONARY uk_mortgage_rates_dict;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 6', () => {
    const query = `SHOW CREATE TABLE uk_price_paid SETTINGS
output_format_always_quote_identifiers=false,
output_format_identifier_quoting_style='None';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 7', () => {
    const query = `SHOW CREATE VIEW prices_by_year_view SETTINGS
output_format_always_quote_identifiers=false,
output_format_identifier_quoting_style='None';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 8', () => {
    const query = `SHOW CREATE uk_prices_aggs_dest SETTINGS
output_format_always_quote_identifiers=false,
output_format_identifier_quoting_style='None';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 9', () => {
    const query = `SHOW CREATE VIEW uk_prices_aggs_view SETTINGS
output_format_always_quote_identifiers=false,
output_format_identifier_quoting_style='None';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 10', () => {
    const query = `SHOW CREATE DICTIONARY uk_mortgage_rates_dict SETTINGS
output_format_always_quote_identifiers=false,
output_format_identifier_quoting_style='None';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 11', () => {
    const query = `SHOW CREATE TABLE uk_price_paid SETTINGS
output_format_always_quote_identifiers=true,
output_format_identifier_quoting_style='Backticks';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 12', () => {
    const query = `SHOW CREATE VIEW prices_by_year_view SETTINGS
output_format_always_quote_identifiers=true,
output_format_identifier_quoting_style='Backticks';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 13', () => {
    const query = `SHOW CREATE uk_prices_aggs_dest SETTINGS
output_format_always_quote_identifiers=true,
output_format_identifier_quoting_style='Backticks';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 14', () => {
    const query = `SHOW CREATE VIEW uk_prices_aggs_view SETTINGS
output_format_always_quote_identifiers=true,
output_format_identifier_quoting_style='Backticks';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 15', () => {
    const query = `SHOW CREATE DICTIONARY uk_mortgage_rates_dict SETTINGS
output_format_always_quote_identifiers=true,
output_format_identifier_quoting_style='Backticks';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 16', () => {
    const query = `SHOW CREATE TABLE uk_price_paid SETTINGS
output_format_always_quote_identifiers=false,
output_format_identifier_quoting_style='Backticks';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 17', () => {
    const query = `SHOW CREATE VIEW prices_by_year_view SETTINGS
output_format_always_quote_identifiers=false,
output_format_identifier_quoting_style='Backticks';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 18', () => {
    const query = `SHOW CREATE uk_prices_aggs_dest SETTINGS
output_format_always_quote_identifiers=false,
output_format_identifier_quoting_style='Backticks';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 19', () => {
    const query = `SHOW CREATE VIEW uk_prices_aggs_view SETTINGS
output_format_always_quote_identifiers=false,
output_format_identifier_quoting_style='Backticks';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 20', () => {
    const query = `SHOW CREATE DICTIONARY uk_mortgage_rates_dict SETTINGS
output_format_always_quote_identifiers=false,
output_format_identifier_quoting_style='Backticks';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 21', () => {
    const query = `SHOW CREATE TABLE uk_price_paid SETTINGS
output_format_always_quote_identifiers=true,
output_format_identifier_quoting_style='DoubleQuotes';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 22', () => {
    const query = `SHOW CREATE VIEW prices_by_year_view SETTINGS
output_format_always_quote_identifiers=true,
output_format_identifier_quoting_style='DoubleQuotes';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 23', () => {
    const query = `SHOW CREATE uk_prices_aggs_dest SETTINGS
output_format_always_quote_identifiers=true,
output_format_identifier_quoting_style='DoubleQuotes';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 24', () => {
    const query = `SHOW CREATE VIEW uk_prices_aggs_view SETTINGS
output_format_always_quote_identifiers=true,
output_format_identifier_quoting_style='DoubleQuotes';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 25', () => {
    const query = `SHOW CREATE DICTIONARY uk_mortgage_rates_dict SETTINGS
output_format_always_quote_identifiers=true,
output_format_identifier_quoting_style='DoubleQuotes';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 26', () => {
    const query = `SHOW CREATE TABLE uk_price_paid SETTINGS
output_format_always_quote_identifiers=false,
output_format_identifier_quoting_style='DoubleQuotes';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 27', () => {
    const query = `SHOW CREATE VIEW prices_by_year_view SETTINGS
output_format_always_quote_identifiers=false,
output_format_identifier_quoting_style='DoubleQuotes';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 28', () => {
    const query = `SHOW CREATE uk_prices_aggs_dest SETTINGS
output_format_always_quote_identifiers=false,
output_format_identifier_quoting_style='DoubleQuotes';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 29', () => {
    const query = `SHOW CREATE VIEW uk_prices_aggs_view SETTINGS
output_format_always_quote_identifiers=false,
output_format_identifier_quoting_style='DoubleQuotes';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 30', () => {
    const query = `SHOW CREATE DICTIONARY uk_mortgage_rates_dict SETTINGS
output_format_always_quote_identifiers=false,
output_format_identifier_quoting_style='DoubleQuotes';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 31', () => {
    const query = `SHOW CREATE TABLE uk_price_paid SETTINGS
output_format_always_quote_identifiers=true,
output_format_identifier_quoting_style='BackticksMySQL';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 32', () => {
    const query = `SHOW CREATE VIEW prices_by_year_view SETTINGS
output_format_always_quote_identifiers=true,
output_format_identifier_quoting_style='BackticksMySQL';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 33', () => {
    const query = `SHOW CREATE uk_prices_aggs_dest SETTINGS
output_format_always_quote_identifiers=true,
output_format_identifier_quoting_style='BackticksMySQL';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 34', () => {
    const query = `SHOW CREATE VIEW uk_prices_aggs_view SETTINGS
output_format_always_quote_identifiers=true,
output_format_identifier_quoting_style='BackticksMySQL';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 35', () => {
    const query = `SHOW CREATE DICTIONARY uk_mortgage_rates_dict SETTINGS
output_format_always_quote_identifiers=true,
output_format_identifier_quoting_style='BackticksMySQL';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 36', () => {
    const query = `SHOW CREATE TABLE uk_price_paid SETTINGS
output_format_always_quote_identifiers=false,
output_format_identifier_quoting_style='BackticksMySQL';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 37', () => {
    const query = `SHOW CREATE VIEW prices_by_year_view SETTINGS
output_format_always_quote_identifiers=false,
output_format_identifier_quoting_style='BackticksMySQL';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 38', () => {
    const query = `SHOW CREATE uk_prices_aggs_dest SETTINGS
output_format_always_quote_identifiers=false,
output_format_identifier_quoting_style='BackticksMySQL';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 39', () => {
    const query = `SHOW CREATE VIEW uk_prices_aggs_view SETTINGS
output_format_always_quote_identifiers=false,
output_format_identifier_quoting_style='BackticksMySQL';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 40', () => {
    const query = `SHOW CREATE DICTIONARY uk_mortgage_rates_dict SETTINGS
output_format_always_quote_identifiers=false,
output_format_identifier_quoting_style='BackticksMySQL';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 41', () => {
    const query = `SHOW CREATE TABLE src_table;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 42', () => {
    const query = `show create data_r2 format LineAsString;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 43', () => {
    const query = `SHOW CREATE TABLE mv_03002;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 44', () => {
    const query = `SHOW CREATE TEMPORARY TABLE t_proj FORMAT TSVRaw;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 45', () => {
    const query = `SHOW CREATE TEMPORARY TABLE t_proj2 FORMAT TSVRaw;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 46', () => {
    const query = `show create a;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 47', () => {
    const query = `show create b;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 48', () => {
    const query = `show create c;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 49', () => {
    const query = `show create d;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 50', () => {
    const query = `show create e;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 51', () => {
    const query = `show create f;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 52', () => {
    const query = `show create g;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 53', () => {
    const query = `show create h;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 54', () => {
    const query = `SHOW TABLES FROM 02961_db1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 55', () => {
    const query = `SHOW TABLES FROM 02961_db2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 56', () => {
    const query = `SHOW TABLES;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 57', () => {
    const query = `SHOW CREATE TABLE pipe;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 58', () => {
    const query = `SHOW CREATE TABLE v1 FORMAT Vertical;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 59', () => {
    const query = `SHOW CREATE nested_table;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 60', () => {
    const query = `SHOW CREATE t;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 61', () => {
    const query = `SHOW SETTING max_threads;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 62', () => {
    const query = `SHOW SETTING \`max_threads' OR name = 'max_memory_usage\`;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 63', () => {
    const query = `SHOW DATABASES LIMIT 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 64', () => {
    const query = `SHOW TABLES FROM {CLICKHOUSE_DATABASE:Identifier};`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 65', () => {
    const query = `SHOW DICTIONARIES FROM {CLICKHOUSE_DATABASE:Identifier};`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 66', () => {
    const query = `SHOW DATABASES LIKE '{CLICKHOUSE_DATABASE:String}';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 67', () => {
    const query = `SHOW CREATE TABLE dist_tbl;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 68', () => {
    const query = `SHOW CREATE tab;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 69', () => {
    const query = `show create table test_view;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 70', () => {
    const query = `SHOW CREATE USER test_user_02867;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 71', () => {
    const query = `SHOW CREATE TABLE tab;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 72', () => {
    const query = `show create table child;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 73', () => {
    const query = `show create table child2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 74', () => {
    const query = `show create table child3;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 75', () => {
    const query = `SHOW TABLES FROM test_truncate_database;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 76', () => {
    const query = `SHOW DICTIONARIES FROM test_truncate_database;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 77', () => {
    const query = `SHOW COLUMNS FROM tab;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 78', () => {
    const query = `SHOW CREATE test_sparse_dictionary_load_factor;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 79', () => {
    const query = `SHOW CREATE test_dictionary_load_factor;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 80', () => {
    const query = `SHOW CREATE test_dictionary_load_factor_nullable;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 81', () => {
    const query = `SHOW CREATE test_complex_dictionary_load_factor;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 82', () => {
    const query = `SHOW INDEX FROM tbl;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 83', () => {
    const query = `SHOW INDEXES FROM tbl;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 84', () => {
    const query = `SHOW INDICES FROM tbl;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 85', () => {
    const query = `SHOW KEYS FROM tbl;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 86', () => {
    const query = `SHOW EXTENDED INDEX FROM tbl;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 87', () => {
    const query = `SHOW INDEX FROM tbl WHERE index_type LIKE '%minmax%';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 88', () => {
    const query = `SHOW INDEX FROM \`\$4@^7\`;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 89', () => {
    const query = `SHOW INDEX FROM NULL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 90', () => {
    const query = `SHOW INDEX FROM \`'\` FROM \`'\`;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 91', () => {
    const query = `SHOW INDEX FROM \`'\`.\`'\`; -- abbreviated form DROP TABLE \`'\`.\`'\`;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 92', () => {
    const query = `SHOW INDEX FROM tbl FROM database_123456789abcde;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 93', () => {
    const query = `SHOW INDEX FROM database_123456789abcde.tbl;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 94', () => {
    const query = `SHOW INDEX FROM \`tab.with.dots\`;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 95', () => {
    const query = `SHOW TABLE t_2710_show_table;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 96', () => {
    const query = `SHOW CREATE TABLE t_2710_show_table;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 97', () => {
    const query = `SHOW CREATE t_2710_show_table;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 98', () => {
    const query = `SHOW DATABASE t_2710_db;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 99', () => {
    const query = `SHOW CREATE DATABASE t_2710_db;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 100', () => {
    const query = `SHOW CREATE DATABASE replicated_database_params;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 101', () => {
    const query = `SHOW FIELDS FROM tab;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 102', () => {
    const query = `SHOW EXTENDED COLUMNS FROM tab;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 103', () => {
    const query = `SHOW FULL COLUMNS FROM tab;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 104', () => {
    const query = `SHOW COLUMNS FROM tab LIKE '%int%';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 105', () => {
    const query = `SHOW COLUMNS FROM tab NOT LIKE '%int%';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 106', () => {
    const query = `SHOW COLUMNS FROM tab ILIKE '%INT%';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 107', () => {
    const query = `SHOW COLUMNS FROM tab NOT ILIKE '%INT%';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 108', () => {
    const query = `SHOW COLUMNS FROM tab WHERE field LIKE '%int%';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 109', () => {
    const query = `SHOW COLUMNS FROM tab LIMIT 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 110', () => {
    const query = `SHOW COLUMNS FROM \`\$4@^7\`;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 111', () => {
    const query = `SHOW COLUMNS FROM NULL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 112', () => {
    const query = `SHOW COLUMNS FROM \`'\` FROM \`'\`;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 113', () => {
    const query = `SHOW COLUMNS FROM \`'\`.\`'\`; -- abbreviated form DROP TABLE \`'\`.\`'\`;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 114', () => {
    const query = `SHOW COLUMNS FROM tab FROM database_123456789abcde;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 115', () => {
    const query = `SHOW COLUMNS FROM database_123456789abcde.tab;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 116', () => {
    const query = `SHOW COLUMNS FROM \`tab.with.dots\`;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 117', () => {
    const query = `SHOW CREATE TABLE users_02534;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 118', () => {
    const query = `SHOW TABLES SETTINGS use_query_cache = true;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 119', () => {
    const query = `SHOW CREATE TABLE 02484_substitute_udf;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 120', () => {
    const query = `SHOW CREATE TABLE test;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 121', () => {
    const query = `SHOW CREATE dict;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 122', () => {
    const query = `SHOW CREATE TABLE table;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 123', () => {
    const query = `SHOW CREATE TABLE dep;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 124', () => {
    const query = `SHOW CREATE TABLE dep2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 125', () => {
    const query = `show create t_l5ydey;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 126', () => {
    const query = `SHOW CREATE test_dictionary_10_shards;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 127', () => {
    const query = `SHOW CREATE test_dictionary_10_shards_nullable;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 128', () => {
    const query = `SHOW CREATE test_complex_dictionary_10_shards;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 129', () => {
    const query = `show create table t;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 130', () => {
    const query = `show create mv;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 131', () => {
    const query = `show create table t_index;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 132', () => {
    const query = `show create table t_index_replica;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 133', () => {
    const query = `SHOW CREATE SETTINGS PROFILE 02294_profile1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 134', () => {
    const query = `SHOW CREATE SETTINGS PROFILE 02294_profile2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 135', () => {
    const query = `SHOW CREATE TABLE t_nested_detach;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 136', () => {
    const query = `SHOW CREATE TABLE t_tuple_numeric;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 137', () => {
    const query = `SHOW CREATE TEMPORARY TABLE t1_02271;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 138', () => {
    const query = `SHOW CREATE TEMPORARY TABLE t2_02271;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 139', () => {
    const query = `SHOW CREATE TEMPORARY TABLE t3_02271;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 140', () => {
    const query = `SHOW CREATE TEMPORARY TABLE t4_02271;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 141', () => {
    const query = `SHOW CREATE TEMPORARY TABLE t5_02271;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 142', () => {
    const query = `SHOW CREATE TEMPORARY TABLE t6_02271;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 143', () => {
    const query = `SHOW CREATE TEMPORARY TABLE t7_02271;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 144', () => {
    const query = `SHOW CREATE TEMPORARY TABLE t8_02271;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 145', () => {
    const query = `SHOW CREATE TEMPORARY TABLE t9_02271;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 146', () => {
    const query = `SHOW CREATE TEMPORARY TABLE t10_02271;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 147', () => {
    const query = `show create data_02230_ttl format TSVRaw;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 148', () => {
    const query = `show create null_02230_ttl format TSVRaw;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 149', () => {
    const query = `show create data_02230_column_ttl format TSVRaw;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 150', () => {
    const query = `show create null_02230_column_ttl format TSVRaw;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 151', () => {
    const query = `SHOW CREATE TABLE t_ttl_move_if_exists;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 152', () => {
    const query = `SHOW CREATE DATABASE INFORMATION_SCHEMA;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 153', () => {
    const query = `SHOW CREATE INFORMATION_SCHEMA.COLUMNS;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 154', () => {
    const query = `SHOW CREATE TABLE table_02184;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 155', () => {
    const query = `SHOW CREATE TABLE test_optimize_exception;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 156', () => {
    const query = `SHOW CREATE TABLE numbers1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 157', () => {
    const query = `SHOW CREATE TABLE numbers2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 158', () => {
    const query = `SHOW CREATE TABLE numbers3;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 159', () => {
    const query = `SHOW CREATE TABLE test_view_filtered;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 160', () => {
    const query = `SHOW CREATE TABLE t1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 161', () => {
    const query = `SHOW CREATE TABLE t2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 162', () => {
    const query = `SHOW CREATE TABLE mt;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 163', () => {
    const query = `SHOW CREATE TABLE mt2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 164', () => {
    const query = `SHOW CREATE TEMPORARY TABLE tmp;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 165', () => {
    const query = `SHOW CREATE log;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 166', () => {
    const query = `SHOW CREATE log1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 167', () => {
    const query = `SHOW CREATE mem;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 168', () => {
    const query = `SHOW CREATE TABLE mem;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 169', () => {
    const query = `SHOW CREATE TABLE val;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 170', () => {
    const query = `SHOW CREATE TABLE val2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 171', () => {
    const query = `SHOW CREATE TABLE log;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 172', () => {
    const query = `SHOW CREATE TABLE kek;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 173', () => {
    const query = `SHOW CREATE TABLE lol;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 174', () => {
    const query = `SHOW CREATE TEMPORARY TABLE tmp_log;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 175', () => {
    const query = `SHOW CREATE TABLE 02127_join_settings_with_persistency_1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 176', () => {
    const query = `SHOW CREATE TABLE 02127_join_settings_with_persistency_0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 177', () => {
    const query = `SHOW CREATE TABLE alter_column_02126;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 178', () => {
    const query = `show create table system.rocksdb;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 179', () => {
    const query = `show create table aggregate_function_combinators format TSVRaw;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 180', () => {
    const query = `show create table asynchronous_inserts format TSVRaw;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 181', () => {
    const query = `show create table asynchronous_metrics format TSVRaw;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 182', () => {
    const query = `show create table build_options format TSVRaw;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 183', () => {
    const query = `show create table clusters format TSVRaw;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 184', () => {
    const query = `show create table collations format TSVRaw;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 185', () => {
    const query = `show create table columns format TSVRaw;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 186', () => {
    const query = `show create table contributors format TSVRaw;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 187', () => {
    const query = `show create table current_roles format TSVRaw;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 188', () => {
    const query = `show create table data_skipping_indices format TSVRaw;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 189', () => {
    const query = `show create table data_type_families format TSVRaw;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 190', () => {
    const query = `show create table databases format TSVRaw;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 191', () => {
    const query = `show create table detached_parts format TSVRaw;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 192', () => {
    const query = `show create table dictionaries format TSVRaw;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 193', () => {
    const query = `show create table disks format TSVRaw;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 194', () => {
    const query = `show create table distributed_ddl_queue format TSVRaw;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 195', () => {
    const query = `show create table distribution_queue format TSVRaw;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 196', () => {
    const query = `show create table enabled_roles format TSVRaw;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 197', () => {
    const query = `show create table errors format TSVRaw;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 198', () => {
    const query = `show create table events format TSVRaw;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 199', () => {
    const query = `show create table formats format TSVRaw;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 200', () => {
    const query = `show create table functions format TSVRaw;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 201', () => {
    const query = `show create table graphite_retentions format TSVRaw;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 202', () => {
    const query = `show create table licenses format TSVRaw;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 203', () => {
    const query = `show create table macros format TSVRaw;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 204', () => {
    const query = `show create table merge_tree_settings format TSVRaw;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 205', () => {
    const query = `show create table merges format TSVRaw;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 206', () => {
    const query = `show create table metrics format TSVRaw;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 207', () => {
    const query = `show create table moves format TSVRaw;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 208', () => {
    const query = `show create table mutations format TSVRaw;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 209', () => {
    const query = `show create table numbers format TSVRaw;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 210', () => {
    const query = `show create table numbers_mt format TSVRaw;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 211', () => {
    const query = `show create table one format TSVRaw;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 212', () => {
    const query = `show create table part_moves_between_shards format TSVRaw;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 213', () => {
    const query = `show create table parts format TSVRaw;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 214', () => {
    const query = `show create table parts_columns format TSVRaw;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 215', () => {
    const query = `show create table processes format TSVRaw;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 216', () => {
    const query = `show create table projection_parts format TSVRaw;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 217', () => {
    const query = `show create table projection_parts_columns format TSVRaw;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 218', () => {
    const query = `show create table quota_limits format TSVRaw;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 219', () => {
    const query = `show create table quota_usage format TSVRaw;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 220', () => {
    const query = `show create table quotas format TSVRaw;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 221', () => {
    const query = `show create table quotas_usage format TSVRaw;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 222', () => {
    const query = `show create table replicas format TSVRaw;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 223', () => {
    const query = `show create table replicated_fetches format TSVRaw;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 224', () => {
    const query = `show create table replicated_merge_tree_settings format TSVRaw;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 225', () => {
    const query = `show create table replication_queue format TSVRaw;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 226', () => {
    const query = `show create table role_grants format TSVRaw;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 227', () => {
    const query = `show create table roles format TSVRaw;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 228', () => {
    const query = `show create table row_policies format TSVRaw;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 229', () => {
    const query = `show create table settings format TSVRaw;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 230', () => {
    const query = `show create table settings_profile_elements format TSVRaw;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 231', () => {
    const query = `show create table settings_profiles format TSVRaw;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 232', () => {
    const query = `show create table stack_trace format TSVRaw;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 233', () => {
    const query = `show create table storage_policies format TSVRaw;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 234', () => {
    const query = `show create table table_engines format TSVRaw;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 235', () => {
    const query = `show create table table_functions format TSVRaw;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 236', () => {
    const query = `show create table tables format TSVRaw;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 237', () => {
    const query = `show create table time_zones format TSVRaw;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 238', () => {
    const query = `show create table user_directories format TSVRaw;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 239', () => {
    const query = `show create table users format TSVRaw;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 240', () => {
    const query = `show create table warnings format TSVRaw;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 241', () => {
    const query = `show create table zeros format TSVRaw;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 242', () => {
    const query = `show create table zeros_mt format TSVRaw;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 243', () => {
    const query = `SHOW CREATE TABLE bool_test;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 244', () => {
    const query = `SHOW CREATE t_merge;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 245', () => {
    const query = `SHOW CREATE TABLE t_remove_sample_by;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 246', () => {
    const query = `SHOW CREATE DICTIONARY 2024_dictionary_with_comment;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 247', () => {
    const query = `SHOW CREATE USER test_user_01999;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 248', () => {
    const query = `SHOW GRANTS FOR test_user_01999;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 249', () => {
    const query = `show create my_view;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 250', () => {
    const query = `SHOW CREATE  TABLE 01902_db.t_merge;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 251', () => {
    const query = `SHOW CREATE TABLE 01902_db.t_merge_1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 252', () => {
    const query = `SHOW CREATE TABLE test_table;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 253', () => {
    const query = `SHOW CREATE TABLE alter_test;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 254', () => {
    const query = `SHOW CREATE TABLE test_alter_decimal;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 255', () => {
    const query = `SHOW CREATE sales;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 256', () => {
    const query = `show create foo;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 257', () => {
    const query = `show create table tp_2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 258', () => {
    const query = `SHOW CREATE test;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 259', () => {
    const query = `show create x;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 260', () => {
    const query = `SHOW CREATE TABLE sqllt.table FORMAT Null;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 261', () => {
    const query = `SHOW CREATE DICTIONARY sqllt.dictionary FORMAT Null;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 262', () => {
    const query = `SHOW DATABASES LIKE 'sqllt' FORMAT Null;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 263', () => {
    const query = `SHOW TABLES FROM sqllt FORMAT Null;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 264', () => {
    const query = `SHOW DICTIONARIES FROM sqllt FORMAT Null;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 265', () => {
    const query = `SHOW GRANTS FORMAT Null;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 266', () => {
    const query = `SHOW GRANTS FOR sqllt_user FORMAT Null;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 267', () => {
    const query = `SHOW CREATE USER sqllt_user FORMAT Null;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 268', () => {
    const query = `SHOW CREATE ROLE sqllt_role FORMAT Null;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 269', () => {
    const query = `SHOW CREATE POLICY sqllt_policy FORMAT Null;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 270', () => {
    const query = `SHOW CREATE ROW POLICY sqllt_row_policy FORMAT Null;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 271', () => {
    const query = `SHOW CREATE QUOTA sqllt_quota FORMAT Null;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 272', () => {
    const query = `SHOW CREATE SETTINGS PROFILE sqllt_settings_profile FORMAT Null;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 273', () => {
    const query = `SHOW CREATE TABLE table_with_lc_key;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 274', () => {
    const query = `SHOW CREATE TABLE table_with_string_key;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 275', () => {
    const query = `SHOW CREATE TABLE table_with_column_ttl;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 276', () => {
    const query = `SHOW CREATE TEMPORARY TABLE test_01602a;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 277', () => {
    const query = `SHOW CREATE TEMPORARY TABLE test_01602b;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 278', () => {
    const query = `SHOW CREATE VIEW test_1602.v;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 279', () => {
    const query = `SHOW CREATE VIEW test_1602.vv;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 280', () => {
    const query = `SHOW CREATE VIEW test_1602.not_exist_view; -- { serverError CANNOT_GET_CREATE_TABLE_QUERY } SHOW CREATE VIEW test_1602.tbl; -- { serverError BAD_ARGUMENTS }
SHOW CREATE TEMPORARY VIEW; -- { serverError UNKNOWN_TABLE }
SHOW CREATE VIEW; -- { clientError SYNTAX_ERROR }
SHOW CREATE DATABASE; -- { clientError SYNTAX_ERROR }
SHOW CREATE DICTIONARY; -- { clientError SYNTAX_ERROR }
SHOW CREATE TABLE; -- { clientError SYNTAX_ERROR }
SHOW CREATE test_1602.VIEW;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 281', () => {
    const query = `SHOW CREATE test_1602.DATABASE;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 282', () => {
    const query = `SHOW CREATE test_1602.DICTIONARY;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 283', () => {
    const query = `SHOW CREATE test_1602.TABLE;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 284', () => {
    const query = `SHOW CREATE TABLE test1601_detach_permanently_atomic.test_name_reuse FORMAT Vertical;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 285', () => {
    const query = `SHOW CREATE TABLE test1601_detach_permanently_ordinary.test_name_reuse FORMAT Vertical;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 286', () => {
    const query = `SHOW CREATE TABLE test1601_detach_permanently_lazy.test_name_reuse FORMAT Vertical;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 287', () => {
    const query = `SHOW CREATE TABLE replicated_mutations_empty_partitions;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 288', () => {
    const query = `SHOW CREATE TABLE merge_tree_pk;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 289', () => {
    const query = `SHOW CREATE TABLE merge_tree_pk_sql;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 290', () => {
    const query = `SHOW CREATE TABLE replicated_merge_tree_pk_sql;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 291', () => {
    const query = `SHOW CREATE TABLE table_for_alter;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 292', () => {
    const query = `show tables from db_01517_atomic;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 293', () => {
    const query = `show tables from db_01517_atomic_sync;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 294', () => {
    const query = `show tables from db_01517_ordinary;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 295', () => {
    const query = `SHOW CREATE TABLE defaults_on_defaults;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 296', () => {
    const query = `SHOW CREATE TABLE table_with_version_replicated_1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 297', () => {
    const query = `SHOW CREATE TABLE table_with_version_replicated_2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 298', () => {
    const query = `SHOW CREATE TABLE table_with_version;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 299', () => {
    const query = `SHOW CREATE TABLE columns_with_multiple_streams;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 300', () => {
    const query = `SHOW CREATE TABLE columns_with_multiple_streams_compact;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 301', () => {
    const query = `SHOW CREATE TABLE r_prop_table1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 302', () => {
    const query = `SHOW CREATE TABLE r_prop_table2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 303', () => {
    const query = `SHOW CREATE TABLE prop_table;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 304', () => {
    const query = `SHOW CREATE TABLE no_prop_table;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 305', () => {
    const query = `SHOW CREATE TABLE r_no_prop_table;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 306', () => {
    const query = `show databases like '%01470';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 307', () => {
    const query = `SHOW CREATE TABLE recompression_table;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 308', () => {
    const query = `SHOW CREATE TABLE table_from_remote;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 309', () => {
    const query = `SHOW CREATE TABLE table_from_numbers;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 310', () => {
    const query = `SHOW CREATE TABLE table_from_select;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 311', () => {
    const query = `SHOW CREATE TABLE tuple FORMAT TSVRaw;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 312', () => {
    const query = `SHOW CREATE TABLE test_01457.tf_remote;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 313', () => {
    const query = `SHOW CREATE TABLE test_01457.tf_remote_explicit_structure;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 314', () => {
    const query = `SHOW CREATE TABLE test_01457.tf_numbers;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 315', () => {
    const query = `SHOW CREATE TABLE test_01457.tf_merge;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 316', () => {
    const query = `SHOW CREATE TABLE compress_table;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 317', () => {
    const query = `SHOW CREATE SETTINGS PROFILE s1_01418;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 318', () => {
    const query = `SHOW CREATE SETTINGS PROFILE s2_01418;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 319', () => {
    const query = `SHOW CREATE TABLE non_metadata_alters;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 320', () => {
    const query = `SHOW TABLES NOT ILIKE '%';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 321', () => {
    const query = `SHOW TABLES ILIKE 'tES%';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 322', () => {
    const query = `SHOW TABLES NOT ILIKE 'TeS%';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 323', () => {
    const query = `SHOW CREATE TABLE add_table;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 324', () => {
    const query = `show create table merge;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 325', () => {
    const query = `SHOW CREATE QUOTA q1_01297;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 326', () => {
    const query = `SHOW CREATE QUOTA q2_01297;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 327', () => {
    const query = `SHOW CREATE QUOTA q3_01297;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 328', () => {
    const query = `SHOW CREATE QUOTA q4_01297;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 329', () => {
    const query = `SHOW CREATE QUOTA q2_01297; -- { serverError UNKNOWN_QUOTA } -- Policy not found SHOW CREATE QUOTA q2_01297_renamed;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 330', () => {
    const query = `SHOW CREATE QUOTA q5_01297;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 331', () => {
    const query = `SHOW CREATE QUOTA q6_01297;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 332', () => {
    const query = `SHOW CREATE QUOTA q7_01297;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 333', () => {
    const query = `SHOW CREATE QUOTA q8_01297;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 334', () => {
    const query = `SHOW CREATE QUOTA q9_01297;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 335', () => {
    const query = `SHOW CREATE QUOTA q10_01297;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 336', () => {
    const query = `SHOW CREATE QUOTA q11_01297;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 337', () => {
    const query = `SHOW CREATE QUOTA q12_01297;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 338', () => {
    const query = `SHOW CREATE QUOTA q1_01297, q2_01297;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 339', () => {
    const query = `SHOW CREATE QUOTA q13_01297;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 340', () => {
    const query = `SHOW CREATE QUOTA q14_01297;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 341', () => {
    const query = `SHOW CREATE QUOTA q15_01297;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 342', () => {
    const query = `SHOW CREATE QUOTA q16_01297;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 343', () => {
    const query = `show create table merge_distributed;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 344', () => {
    const query = `SHOW CREATE POLICY p1_01296 ON db_01296.table;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 345', () => {
    const query = `SHOW CREATE POLICY p1_01296 ON table;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 346', () => {
    const query = `SHOW CREATE POLICY p2_01296 ON table;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 347', () => {
    const query = `SHOW CREATE POLICY p3_01296 ON table;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 348', () => {
    const query = `SHOW CREATE POLICY p3_01296 ON table2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 349', () => {
    const query = `SHOW CREATE POLICY p4_01296 ON table;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 350', () => {
    const query = `SHOW CREATE POLICY p5_01296 ON table2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 351', () => {
    const query = `SHOW CREATE POLICY p2_01296 ON db_01296.table;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 352', () => {
    const query = `SHOW CREATE POLICY p3_01296 ON db_01296.table;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 353', () => {
    const query = `SHOW CREATE POLICY p3_01296 ON db_01296.table2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 354', () => {
    const query = `SHOW CREATE POLICY p4_01296 ON db_01296.table;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 355', () => {
    const query = `SHOW CREATE POLICY p5_01296 ON db_01296.table2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 356', () => {
    const query = `SHOW CREATE ROW POLICY p1_01295 ON db.table;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 357', () => {
    const query = `SHOW CREATE POLICY p2_01295 ON db.table;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 358', () => {
    const query = `SHOW CREATE ROW POLICY p3_01295 ON db.table;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 359', () => {
    const query = `SHOW CREATE ROW POLICY p2_01295 ON db.table; -- { serverError UNKNOWN_ROW_POLICY } -- Policy not found SHOW CREATE ROW POLICY p2_01295_renamed ON db.table;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 360', () => {
    const query = `SHOW CREATE POLICY p1_01295 ON db.table;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 361', () => {
    const query = `SHOW CREATE POLICY p3_01295 ON db.table;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 362', () => {
    const query = `SHOW CREATE POLICY p4_01295 ON db.table;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 363', () => {
    const query = `SHOW CREATE POLICY p5_01295 ON db.table;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 364', () => {
    const query = `SHOW CREATE POLICY p6_01295 ON db.table;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 365', () => {
    const query = `SHOW CREATE POLICY p7_01295 ON db.table;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 366', () => {
    const query = `SHOW CREATE POLICY p1_01295, p2_01295 ON db.table;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 367', () => {
    const query = `SHOW CREATE POLICY p3_01295 ON db.table, db2.table2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 368', () => {
    const query = `SHOW CREATE POLICY p4_01295 ON db.table, p5_01295 ON db2.table2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 369', () => {
    const query = `SHOW CREATE SETTINGS PROFILE s1_01294;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 370', () => {
    const query = `SHOW CREATE PROFILE s2_01294;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 371', () => {
    const query = `SHOW CREATE SETTINGS PROFILE s3_01294;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 372', () => {
    const query = `SHOW CREATE SETTINGS PROFILE s2_01294; -- { serverError THERE_IS_NO_PROFILE } -- Profile not found SHOW CREATE SETTINGS PROFILE s2_01294_renamed;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 373', () => {
    const query = `SHOW CREATE PROFILE s1_01294;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 374', () => {
    const query = `SHOW CREATE PROFILE s3_01294;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 375', () => {
    const query = `SHOW CREATE PROFILE s4_01294;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 376', () => {
    const query = `SHOW CREATE PROFILE s5_01294;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 377', () => {
    const query = `SHOW CREATE PROFILE s6_01294;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 378', () => {
    const query = `SHOW CREATE PROFILE s7_01294;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 379', () => {
    const query = `SHOW CREATE PROFILE s8_01294;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 380', () => {
    const query = `SHOW CREATE PROFILE s9_01294;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 381', () => {
    const query = `SHOW CREATE PROFILE s10_01294;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 382', () => {
    const query = `SHOW CREATE PROFILE s1_01294, s2_01294, s3_01294, s4_01294;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 383', () => {
    const query = `show settings like 'send_timeout';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 384', () => {
    const query = `SHOW SETTINGS ILIKE '%CONNECT_timeout%';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 385', () => {
    const query = `SHOW CHANGED SETTINGS ILIKE '%MEMORY%';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 386', () => {
    const query = `SHOW CREATE ROLE r1_01293;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 387', () => {
    const query = `SHOW CREATE ROLE r2_01293;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 388', () => {
    const query = `SHOW CREATE ROLE r2_01293; -- { serverError UNKNOWN_ROLE } -- Role not found SHOW CREATE ROLE r2_01293_renamed;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 389', () => {
    const query = `SHOW CREATE ROLE r1_01293@'%';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 390', () => {
    const query = `SHOW CREATE ROLE r2_01293@'%.myhost.com';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 391', () => {
    const query = `SHOW CREATE ROLE 'r2_01293@%.myhost.com';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 392', () => {
    const query = `SHOW CREATE ROLE r3_01293;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 393', () => {
    const query = `SHOW CREATE ROLE r4_01293;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 394', () => {
    const query = `SHOW CREATE ROLE r5_01293;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 395', () => {
    const query = `SHOW CREATE ROLE r6_01293;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 396', () => {
    const query = `SHOW CREATE ROLE r7_01293;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 397', () => {
    const query = `SHOW CREATE ROLE r8_01293;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 398', () => {
    const query = `SHOW CREATE ROLE r9_01293;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 399', () => {
    const query = `SHOW CREATE ROLE r1_01293, r2_01293;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 400', () => {
    const query = `SHOW CREATE USER u1_01292;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 401', () => {
    const query = `SHOW CREATE USER u2_01292;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 402', () => {
    const query = `SHOW CREATE USER u3_01292;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 403', () => {
    const query = `SHOW CREATE USER u2_01292; -- { serverError UNKNOWN_USER } -- User not found SHOW CREATE USER u2_01292_renamed;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 404', () => {
    const query = `SHOW CREATE USER u4_01292;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 405', () => {
    const query = `SHOW CREATE USER u5_01292;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 406', () => {
    const query = `SHOW CREATE USER u6_01292;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 407', () => {
    const query = `SHOW CREATE USER u7_01292;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 408', () => {
    const query = `SHOW CREATE USER u8_01292;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 409', () => {
    const query = `SHOW CREATE USER u9_01292;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 410', () => {
    const query = `SHOW CREATE USER u10_01292;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 411', () => {
    const query = `SHOW CREATE USER u11_01292;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 412', () => {
    const query = `SHOW CREATE USER u12_01292;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 413', () => {
    const query = `SHOW CREATE USER u13_01292;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 414', () => {
    const query = `SHOW CREATE USER u14_01292;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 415', () => {
    const query = `SHOW CREATE USER u15_01292;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 416', () => {
    const query = `SHOW CREATE USER u16_01292;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 417', () => {
    const query = `SHOW CREATE USER u1_01292@'%';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 418', () => {
    const query = `SHOW CREATE USER u2_01292@'%.myhost.com';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 419', () => {
    const query = `SHOW CREATE USER 'u2_01292@%.myhost.com';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 420', () => {
    const query = `SHOW CREATE USER u3_01292@'192.168.%.%';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 421', () => {
    const query = `SHOW CREATE USER 'u3_01292@192.168.%.%';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 422', () => {
    const query = `SHOW CREATE USER u4_01292@'::1';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 423', () => {
    const query = `SHOW CREATE USER 'u4_01292@::1';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 424', () => {
    const query = `SHOW CREATE USER u5_01292@'65:ff0c::/96';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 425', () => {
    const query = `SHOW CREATE USER 'u5_01292@65:ff0c::/96';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 426', () => {
    const query = `SHOW GRANTS FOR u1_01292;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 427', () => {
    const query = `SHOW CREATE USER u1_01292, u2_01292, u3_01292, u4_01292, u5_01292@'%.host.com', u6_01292@'%.host.com';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 428', () => {
    const query = `SHOW CREATE USER u7_01292@'%.host.com', u8_01292@'%.otherhost.com';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 429', () => {
    const query = `SHOW CREATE USER u1_01292, u2_01292, u3_01292, u4_01292;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 430', () => {
    const query = `SHOW CREATE TABLE rename_table_multiple;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 431', () => {
    const query = `SHOW CREATE TABLE rename_table_multiple_compact;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 432', () => {
    const query = `SHOW CREATE TABLE rename_table;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 433', () => {
    const query = `SHOW CREATE TABLE rename_table_polymorphic;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 434', () => {
    const query = `SHOW CREATE TABLE table_for_rename1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 435', () => {
    const query = `SHOW CREATE TABLE table_for_rename;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 436', () => {
    const query = `SHOW CREATE TABLE codecs1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 437', () => {
    const query = `SHOW CREATE TABLE codecs2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 438', () => {
    const query = `SHOW CREATE TABLE codecs3;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 439', () => {
    const query = `SHOW CREATE TABLE codecs4;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 440', () => {
    const query = `SHOW CREATE TABLE codecs5;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 441', () => {
    const query = `SHOW CREATE TABLE codecs6;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 442', () => {
    const query = `SHOW CREATE TABLE codecs7;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 443', () => {
    const query = `SHOW CREATE TABLE codecs8;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 444', () => {
    const query = `SHOW CREATE TABLE codecs9;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 445', () => {
    const query = `SHOW CREATE TABLE codecs10;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 446', () => {
    const query = `SHOW CREATE TABLE codecs11;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 447', () => {
    const query = `SHOW PRIVILEGES;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 448', () => {
    const query = `SHOW CREATE TABLE data_null;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 449', () => {
    const query = `SHOW CREATE TABLE set_null;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 450', () => {
    const query = `SHOW CREATE TABLE cannot_be_nullable;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 451', () => {
    const query = `SHOW CREATE TABLE bloom_filter_idx_good;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 452', () => {
    const query = `SHOW CREATE TABLE dict_db_01225_dictionary.\`dict_db_01225.dict\` FORMAT TSVRaw;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 453', () => {
    const query = `SHOW CREATE TABLE dict_db_01225_dictionary.\`dict_db_01225.no_such_dict\`; -- { serverError CANNOT_GET_CREATE_DICTIONARY_QUERY } DROP DATABASE dict_db_01225;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 454', () => {
    const query = `SHOW CREATE TABLE dict_db_01224.dict FORMAT TSVRaw;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 455', () => {
    const query = `SHOW CREATE TABLE dict_db_01224_dictionary.\`dict_db_01224.dict\` FORMAT TSVRaw;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 456', () => {
    const query = `SHOW CREATE TABLE table_for_rename_nested;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 457', () => {
    const query = `SHOW CREATE TABLE table_rename_with_default;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 458', () => {
    const query = `SHOW CREATE TABLE table_rename_with_ttl;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 459', () => {
    const query = `SHOW CREATE table2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 460', () => {
    const query = `SHOW CREATE table3;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 461', () => {
    const query = `show create table test_1164_memory.r1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 462', () => {
    const query = `SHOW TABLES FROM information_schema;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 463', () => {
    const query = `SHOW TABLES FROM INFORMATION_schema; -- { serverError UNKNOWN_DATABASE } DROP VIEW IF EXISTS v;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 464', () => {
    const query = `SHOW TABLES FROM test_01155_ordinary;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 465', () => {
    const query = `SHOW CREATE DATABASE test_01155_atomic;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 466', () => {
    const query = `SHOW TABLES FROM test_01155_atomic;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 467', () => {
    const query = `SHOW CREATE TABLE mv;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 468', () => {
    const query = `SHOW TABLES FROM shard_0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 469', () => {
    const query = `SHOW TABLES FROM shard_1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 470', () => {
    const query = `SHOW CREATE TABLE shard_0.demo_loan_01568;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 471', () => {
    const query = `SHOW CREATE TABLE shard_1.demo_loan_01568;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 472', () => {
    const query = `SHOW CREATE TABLE rmt;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 473', () => {
    const query = `SHOW CREATE TABLE rmt1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 474', () => {
    const query = `SHOW CREATE TABLE test_01148_atomic.rmt2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 475', () => {
    const query = `SHOW CREATE TABLE test_01148_atomic.rmt3;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 476', () => {
    const query = `SHOW CREATE TABLE imdb_01148.anything;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 477', () => {
    const query = `SHOW CREATE TABLE multiword_types;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 478', () => {
    const query = `SHOW CREATE TABLE unsigned_types;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 479', () => {
    const query = `SHOW CREATE TABLE default_table;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 480', () => {
    const query = `SHOW CREATE DICTIONARY db_for_dict.dict_with_hashed_layout;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 481', () => {
    const query = `SHOW CREATE file;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 482', () => {
    const query = `SHOW CREATE buffer;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 483', () => {
    const query = `SHOW CREATE merge;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 484', () => {
    const query = `SHOW CREATE merge_tf;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 485', () => {
    const query = `SHOW CREATE distributed;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 486', () => {
    const query = `SHOW CREATE distributed_tf;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 487', () => {
    const query = `SHOW CREATE url;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 488', () => {
    const query = `SHOW CREATE rich_syntax;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 489', () => {
    const query = `SHOW CREATE VIEW view;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 490', () => {
    const query = `SHOW CREATE TABLE alter_default;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 491', () => {
    const query = `SHOW CREATE USER test_user_01075;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 492', () => {
    const query = `SHOW CREATE USER test_user_01075_x@localhost;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 493', () => {
    const query = `SHOW CREATE USER test_user_01075_x;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 494', () => {
    const query = `SHOW CREATE USER 'test_user_01075_x@192.168.23.15';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 495', () => {
    const query = `SHOW GRANTS FOR test_user_01074;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 496', () => {
    const query = `SHOW TABLES NOT LIKE '%';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 497', () => {
    const query = `SHOW TABLES LIKE 'tes%';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 498', () => {
    const query = `SHOW TABLES NOT LIKE 'tes%';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 499', () => {
    const query = `SHOW TABLES LIKE 'tes%1';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 500', () => {
    const query = `SHOW TABLES NOT LIKE 'tes%2';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 501', () => {
    const query = `SHOW TABLES FROM {CLICKHOUSE_DATABASE:Identifier} LIKE 'tes%';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 502', () => {
    const query = `SHOW TABLES FROM {CLICKHOUSE_DATABASE:Identifier} NOT LIKE 'tes%';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 503', () => {
    const query = `SHOW TABLES FROM {CLICKHOUSE_DATABASE:Identifier} LIKE 'tes%1';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 504', () => {
    const query = `SHOW TABLES FROM {CLICKHOUSE_DATABASE:Identifier} NOT LIKE 'tes%2';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 505', () => {
    const query = `SHOW CREATE USER test_user_01073;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 506', () => {
    const query = `SHOW GRANTS FOR test_user_01073;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 507', () => {
    const query = `SHOW GRANTS FOR test_role_01073;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 508', () => {
    const query = `show create table alter_ttl;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 509', () => {
    const query = `SHOW CREATE DATABASE memory_01069;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 510', () => {
    const query = `SHOW CREATE TABLE memory_01069.mt; -- { serverError UNKNOWN_TABLE } SHOW CREATE TABLE memory_01069.file;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 511', () => {
    const query = `show create table mt_compact;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 512', () => {
    const query = `SHOW CREATE TABLE test_01048.\`.inner.wv\`;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 513', () => {
    const query = `SHOW CREATE TABLE {CLICKHOUSE_DATABASE:Identifier}.\`.inner.wv\`;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 514', () => {
    const query = `SHOW CREATE TABLE BannerDict;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 515', () => {
    const query = `SHOW CREATE QUOTA default;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 516', () => {
    const query = `SHOW CREATE DICTIONARY db_01018.dict1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 517', () => {
    const query = `SHOW DICTIONARIES FROM db_01018 LIKE 'dict1';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 518', () => {
    const query = `SHOW CREATE DICTIONARY memory_db.dict2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 519', () => {
    const query = `SHOW DICTIONARIES FROM memory_db LIKE 'dict2';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 520', () => {
    const query = `SHOW DICTIONARIES FROM db_01018;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 521', () => {
    const query = `SHOW TABLES FROM {CLICKHOUSE_DATABASE:Identifier} LIMIT 2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 522', () => {
    const query = `SHOW TABLES FROM {CLICKHOUSE_DATABASE:Identifier} LIMIT 2 * 2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 523', () => {
    const query = `SHOW CREATE TABLE constrained;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 524', () => {
    const query = `SHOW CREATE TABLE constrained2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 525', () => {
    const query = `SHOW CREATE TABLE replicated_table_for_alter1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 526', () => {
    const query = `SHOW CREATE TABLE replicated_table_for_alter2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 527', () => {
    const query = `SHOW CREATE TABLE replicated_table_for_reset_setting1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 528', () => {
    const query = `SHOW CREATE TABLE replicated_table_for_reset_setting2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 529', () => {
    const query = `SHOW CREATE TABLE table_for_reset_setting;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 530', () => {
    const query = `show create table ttl_00933_1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 531', () => {
    const query = `show create table ttl;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 532', () => {
    const query = `SHOW CREATE TABLE compression_codec_multiple_more_types_replicated;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 533', () => {
    const query = `SHOW CREATE TABLE minmax_idx;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 534', () => {
    const query = `SHOW CREATE TABLE minmax_idx_r;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 535', () => {
    const query = `SHOW CREATE TABLE minmax_idx2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 536', () => {
    const query = `SHOW CREATE TABLE minmax_idx2_r;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 537', () => {
    const query = `SHOW CREATE TABLE compression_codec;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 538', () => {
    const query = `SHOW CREATE TABLE compression_codec_log;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 539', () => {
    const query = `SHOW CREATE TABLE compression_codec_multiple_log;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 540', () => {
    const query = `SHOW CREATE TABLE compression_codec_tiny_log;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 541', () => {
    const query = `SHOW CREATE TABLE compression_codec_multiple_tiny_log;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 542', () => {
    const query = `SHOW CREATE TABLE compression_codec_multiple_more_types;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 543', () => {
    const query = `SHOW CREATE TABLE test_default_delta;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 544', () => {
    const query = `SHOW CREATE TABLE summing_r2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 545', () => {
    const query = `SHOW CREATE TABLE summing;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 546', () => {
    const query = `SHOW CREATE TABLE alter_column;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 547', () => {
    const query = `SHOW CREATE check_comments;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 548', () => {
    const query = `SHOW CREATE TABLE {CLICKHOUSE_DATABASE:Identifier}.t_mv_00751 FORMAT TabSeparatedRaw;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 549', () => {
    const query = `SHOW CREATE TABLE ipv4_test;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 550', () => {
    const query = `SHOW CREATE TABLE ipv6_test;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 551', () => {
    const query = `SHOW CREATE TABLE check_query_comment_column;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 552', () => {
    const query = `SHOW CREATE TABLE cast1 FORMAT TSVRaw;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 553', () => {
    const query = `SHOW CREATE TABLE cast FORMAT TSVRaw;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 554', () => {
    const query = `show create database {CLICKHOUSE_DATABASE:Identifier};`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 555', () => {
    const query = `SHOW CREATE TABLE test_view_00599;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 556', () => {
    const query = `SHOW CREATE TEMPORARY TABLE temp_tab;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 557', () => {
    const query = `SHOW TEMPORARY TABLES LIKE 'temp_tab';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 558', () => {
    const query = `SHOW SETTING output_format_pretty_color;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 559', () => {
    const query = `SHOW TABLES IN system WHERE engine LIKE '%System%' AND name IN ('numbers', 'one') AND database = 'system';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 560', () => {
    const query = `SHOW CREATE TABLE replicated_alter1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 561', () => {
    const query = `SHOW CREATE TABLE replicated_alter2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[SHOW] should pass without errors: 562', () => {
    const query = `SHOW CREATE TABLE alter_00061;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});
