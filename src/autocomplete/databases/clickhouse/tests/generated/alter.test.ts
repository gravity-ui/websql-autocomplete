/* eslint no-useless-escape: "off" */
/* eslint filenames/match-regex: "off" */
/* eslint no-irregular-whitespace: "off" */
import {parseClickHouseQueryWithoutCursor} from '../../index';

test('[ALTER] should pass without errors: 1', () => {
    const query = `ALTER TABLE a MODIFY COLUMN y Int64 REMOVE MATERIALIZED; -- { clientError SYNTAX_ERROR } ALTER TABLE a MODIFY COLUMN y DEFAULT 2 REMOVE MATERIALIZED; -- { clientError SYNTAX_ERROR }
ALTER TABLE a MODIFY COLUMN y MATERIALIZED 3 REMOVE MATERIALIZED; -- { clientError SYNTAX_ERROR }
ALTER TABLE a MODIFY COLUMN y EPHEMERAL 4 REMOVE MATERIALIZED; -- { clientError SYNTAX_ERROR }
ALTER TABLE a MODIFY COLUMN y COMMENT '5' REMOVE MATERIALIZED; -- { clientError SYNTAX_ERROR }
ALTER TABLE a MODIFY COLUMN y CODEC(ZSTD) REMOVE MATERIALIZED; -- { clientError SYNTAX_ERROR }
ALTER TABLE a MODIFY COLUMN y STATISTICS(tdigest) REMOVE MATERIALIZED; -- { clientError SYNTAX_ERROR }
ALTER TABLE a MODIFY COLUMN y PRIMARY KEY REMOVE MATERIALIZED; -- { clientError SYNTAX_ERROR }
SELECT 'The same, but with type';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 2', () => {
    const query = `ALTER TABLE a MODIFY COLUMN y Int64 DEFAULT 2 REMOVE MATERIALIZED; -- { clientError SYNTAX_ERROR } ALTER TABLE a MODIFY COLUMN y Int64 MATERIALIZED 3 REMOVE MATERIALIZED; -- { clientError SYNTAX_ERROR }
ALTER TABLE a MODIFY COLUMN y Int64 EPHEMERAL 4 REMOVE MATERIALIZED; -- { clientError SYNTAX_ERROR }
ALTER TABLE a MODIFY COLUMN y Int64 COMMENT '5' REMOVE MATERIALIZED; -- { clientError SYNTAX_ERROR }
ALTER TABLE a MODIFY COLUMN y Int64 CODEC(ZSTD) REMOVE MATERIALIZED; -- { clientError SYNTAX_ERROR }
ALTER TABLE a MODIFY COLUMN y Int64 STATISTICS(tdigest) REMOVE MATERIALIZED; -- { clientError SYNTAX_ERROR }
ALTER TABLE a MODIFY COLUMN y Int64 TTL toDate('2025-01-01') + toIntervalDay(x) REMOVE MATERIALIZED; -- { clientError SYNTAX_ERROR }
ALTER TABLE a MODIFY COLUMN y Int64 COLLATE binary REMOVE MATERIALIZED; -- { clientError SYNTAX_ERROR }
ALTER TABLE a MODIFY COLUMN y Int64 SETTINGS (max_compress_block_size = 20000) REMOVE MATERIALIZED; -- { clientError SYNTAX_ERROR }
ALTER TABLE a MODIFY COLUMN y Int64 PRIMARY KEY REMOVE MATERIALIZED; -- { clientError SYNTAX_ERROR }
SELECT 'MODIFY SETTING';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 3', () => {
    const query = `ALTER TABLE a MODIFY COLUMN y Int64 MODIFY SETTING max_compress_block_size = 20000; -- { clientError SYNTAX_ERROR } ALTER TABLE a MODIFY COLUMN y DEFAULT 2 MODIFY SETTING max_compress_block_size = 20000; -- { clientError SYNTAX_ERROR }
ALTER TABLE a MODIFY COLUMN y MATERIALIZED 3 MODIFY SETTING max_compress_block_size = 20000; -- { clientError SYNTAX_ERROR }
ALTER TABLE a MODIFY COLUMN y EPHEMERAL 4 MODIFY SETTING max_compress_block_size = 20000; -- { clientError SYNTAX_ERROR }
ALTER TABLE a MODIFY COLUMN y COMMENT '5' MODIFY SETTING max_compress_block_size = 20000; -- { clientError SYNTAX_ERROR }
ALTER TABLE a MODIFY COLUMN y CODEC(ZSTD) MODIFY SETTING max_compress_block_size = 20000; -- { clientError SYNTAX_ERROR }
ALTER TABLE a MODIFY COLUMN y STATISTICS(tdigest) MODIFY SETTING max_compress_block_size = 20000; -- { clientError SYNTAX_ERROR }
ALTER TABLE a MODIFY COLUMN y PRIMARY KEY MODIFY SETTING max_compress_block_size = 20000; -- { clientError SYNTAX_ERROR }
SELECT 'The same, but with type';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 4', () => {
    const query = `ALTER TABLE a MODIFY COLUMN y Int64 DEFAULT 2 MODIFY SETTING max_compress_block_size = 20000; -- { clientError SYNTAX_ERROR } ALTER TABLE a MODIFY COLUMN y Int64 MATERIALIZED 3 MODIFY SETTING max_compress_block_size = 20000; -- { clientError SYNTAX_ERROR }
ALTER TABLE a MODIFY COLUMN y Int64 EPHEMERAL 4 MODIFY SETTING max_compress_block_size = 20000; -- { clientError SYNTAX_ERROR }
ALTER TABLE a MODIFY COLUMN y Int64 COMMENT '5' MODIFY SETTING max_compress_block_size = 20000; -- { clientError SYNTAX_ERROR }
ALTER TABLE a MODIFY COLUMN y Int64 CODEC(ZSTD) MODIFY SETTING max_compress_block_size = 20000; -- { clientError SYNTAX_ERROR }
ALTER TABLE a MODIFY COLUMN y Int64 STATISTICS(tdigest) MODIFY SETTING max_compress_block_size = 20000; -- { clientError SYNTAX_ERROR }
ALTER TABLE a MODIFY COLUMN y Int64 TTL toDate('2025-01-01') + toIntervalDay(x) MODIFY SETTING max_compress_block_size = 20000; -- { clientError SYNTAX_ERROR }
ALTER TABLE a MODIFY COLUMN y Int64 COLLATE binary MODIFY SETTING max_compress_block_size = 20000; -- { clientError SYNTAX_ERROR }
ALTER TABLE a MODIFY COLUMN y Int64 SETTINGS (some_setting = 2) MODIFY SETTING max_compress_block_size = 20000; -- { clientError SYNTAX_ERROR }
ALTER TABLE a MODIFY COLUMN y Int64 PRIMARY KEY MODIFY SETTING max_compress_block_size = 20000; -- { clientError SYNTAX_ERROR }
SELECT 'RESET SETTING';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 5', () => {
    const query = `ALTER TABLE a MODIFY COLUMN y Int64 RESET SETTING max_compress_block_size; -- { clientError SYNTAX_ERROR } ALTER TABLE a MODIFY COLUMN y DEFAULT 2 RESET SETTING max_compress_block_size; -- { clientError SYNTAX_ERROR }
ALTER TABLE a MODIFY COLUMN y MATERIALIZED 3 RESET SETTING max_compress_block_size; -- { clientError SYNTAX_ERROR }
ALTER TABLE a MODIFY COLUMN y EPHEMERAL 4 RESET SETTING max_compress_block_size; -- { clientError SYNTAX_ERROR }
ALTER TABLE a MODIFY COLUMN y COMMENT '5' RESET SETTING max_compress_block_size; -- { clientError SYNTAX_ERROR }
ALTER TABLE a MODIFY COLUMN y CODEC(ZSTD) RESET SETTING max_compress_block_size; -- { clientError SYNTAX_ERROR }
ALTER TABLE a MODIFY COLUMN y STATISTICS(tdigest) RESET SETTING max_compress_block_size; -- { clientError SYNTAX_ERROR }
ALTER TABLE a MODIFY COLUMN y PRIMARY KEY RESET SETTING max_compress_block_size; -- { clientError SYNTAX_ERROR }
SELECT 'The same, but with type';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 6', () => {
    const query = `ALTER TABLE a MODIFY COLUMN y Int64 DEFAULT 2 RESET SETTING max_compress_block_size; -- { clientError SYNTAX_ERROR } ALTER TABLE a MODIFY COLUMN y Int64 MATERIALIZED 3 RESET SETTING max_compress_block_size; -- { clientError SYNTAX_ERROR }
ALTER TABLE a MODIFY COLUMN y Int64 EPHEMERAL 4 RESET SETTING max_compress_block_size; -- { clientError SYNTAX_ERROR }
ALTER TABLE a MODIFY COLUMN y Int64 COMMENT '5' RESET SETTING max_compress_block_size; -- { clientError SYNTAX_ERROR }
ALTER TABLE a MODIFY COLUMN y Int64 CODEC(ZSTD) RESET SETTING max_compress_block_size; -- { clientError SYNTAX_ERROR }
ALTER TABLE a MODIFY COLUMN y Int64 STATISTICS(tdigest) RESET SETTING max_compress_block_size; -- { clientError SYNTAX_ERROR }
ALTER TABLE a MODIFY COLUMN y Int64 TTL toDate('2025-01-01') + toIntervalDay(x) RESET SETTING max_compress_block_size; -- { clientError SYNTAX_ERROR }
ALTER TABLE a MODIFY COLUMN y Int64 COLLATE binary RESET SETTING max_compress_block_size; -- { clientError SYNTAX_ERROR }
ALTER TABLE a MODIFY COLUMN y Int64 SETTINGS (some_setting = 2) RESET SETTING max_compress_block_size; -- { clientError SYNTAX_ERROR }
ALTER TABLE a MODIFY COLUMN y Int64 PRIMARY KEY RESET SETTING max_compress_block_size; -- { clientError SYNTAX_ERROR }
SELECT 'All the above, but on server side';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 7', () => {
    const query = `ALTER TABLE a 	DROP INDEX IF EXISTS some_index,
	MODIFY COLUMN y REMOVE MATERIALIZED
SETTINGS alter_sync = 2, mutations_sync = 2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 8', () => {
    const query = `ALTER TABLE t_async_insert_alter ADD COLUMN value2 Int64;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 9', () => {
    const query = `ALTER TABLE t_async_insert_alter MODIFY COLUMN value2 String;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 10', () => {
    const query = `ALTER TABLE t_async_insert_alter DROP COLUMN value2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 11', () => {
    const query = `alter table test update d = 42 where 1; -- {serverError CANNOT_UPDATE_COLUMN} alter table test update json = '{}' where 1; -- {serverError CANNOT_UPDATE_COLUMN}
drop table test;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 12', () => {
    const query = `alter table test modify column s JSON; -- { serverError BAD_ARGUMENTS } drop table test;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 13', () => {
    const query = `alter table test modify column s Array(JSON); -- { serverError BAD_ARGUMENTS } drop table test;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 14', () => {
    const query = `alter table test modify column s Tuple(JSON, String); -- { serverError BAD_ARGUMENTS } drop table test;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 15', () => {
    const query = `alter table mt delete where 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 16', () => {
    const query = `alter table test add column bad Variant(UInt32, String); -- {serverError ILLEGAL_COLUMN} alter table test add column bad Dynamic; -- {serverError ILLEGAL_COLUMN}
alter table test add column bad LowCardinality(UInt8); -- {serverError SUSPICIOUS_TYPE_FOR_LOW_CARDINALITY}
alter table test add column bad FixedString(10000); -- {serverError ILLEGAL_COLUMN}
alter table test modify column id Variant(UInt32, String); -- {serverError ILLEGAL_COLUMN}
alter table test modify column id Dynamic; -- {serverError ILLEGAL_COLUMN}
alter table test modify column id LowCardinality(UInt8); -- {serverError SUSPICIOUS_TYPE_FOR_LOW_CARDINALITY}
alter table test modify column id FixedString(10000); -- {serverError ILLEGAL_COLUMN}
drop table test;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 17', () => {
    const query = `ALTER TABLE tp MODIFY SETTING deduplicate_merge_projection_mode = 'throw';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 18', () => {
    const query = `ALTER TABLE tp ADD PROJECTION p (SELECT sum(eventcnt), type GROUP BY type);  -- { serverError SUPPORT_IS_DISABLED } ALTER TABLE tp MODIFY SETTING deduplicate_merge_projection_mode = 'drop';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 19', () => {
    const query = `ALTER TABLE tp ADD PROJECTION p (SELECT sum(eventcnt), type GROUP BY type);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 20', () => {
    const query = `ALTER TABLE t1 (MODIFY COLUMN \`a\` Float64 TTL toDateTime(b) + toIntervalMonth(viewExplain('EXPLAIN', 'actions = 1', (
SELECT
toIntervalMonth(1),
2
FROM t1__fuzz_26
GROUP BY
toFixedString('%Prewhere%', 10),
toNullable(12)
WITH ROLLUP
)), 1)) settings allow_experimental_parallel_reading_from_replicas = 1; -- { serverError INCORRECT_RESULT_OF_SCALAR_SUBQUERY }
ALTER TABLE t1
(MODIFY COLUMN \`a\` Float64 TTL toDateTime(b) + toIntervalMonth(viewExplain('EXPLAIN', 'actions = 1', (
SELECT
toIntervalMonth(1),
2
FROM t1__fuzz_26
GROUP BY
toFixedString('%Prewhere%', 10),
toNullable(12)
WITH ROLLUP
)), 1)) settings allow_experimental_parallel_reading_from_replicas = 0; -- { serverError INCORRECT_RESULT_OF_SCALAR_SUBQUERY }
DROP TABLE t1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 21', () => {
    const query = `ALTER TABLE t_missed_subcolumns ADD COLUMN \`y\` Nullable(UInt32);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 22', () => {
    const query = `ALTER TABLE t_missed_subcolumns ADD COLUMN \`n.b\` Array(Nullable(String));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 23', () => {
    const query = `ALTER TABLE t_missed_subcolumns ADD COLUMN t Tuple(a String, b String) DEFAULT ('foo', 'bar');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 24', () => {
    const query = `ALTER TABLE t_missed_subcolumns ADD COLUMN arr Array(Nullable(UInt64)) DEFAULT [1, NULL, 3];`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 25', () => {
    const query = `ALTER TABLE t_03203 DETACH PARTITION ALL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 26', () => {
    const query = `ALTER TABLE t_03203 DROP DETACHED PARTITION ALL SETTINGS allow_drop_detached = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 27', () => {
    const query = `alter table test modify column d Dynamic(max_types=0);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 28', () => {
    const query = `ALTER TABLE test_projection_deduplicate DROP PROJECTION test_projection;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 29', () => {
    const query = `ALTER TABLE column_modify_test MODIFY COLUMN val Nullable(String);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 30', () => {
    const query = `alter table column_modify_test update other_col=1 where id = 1 SETTINGS mutations_sync=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 31', () => {
    const query = `ALTER TABLE t_skip_index_insert MATERIALIZE INDEX idx_a;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 32', () => {
    const query = `ALTER TABLE t_skip_index_insert MATERIALIZE INDEX idx_b;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 33', () => {
    const query = `ALTER TABLE copied_table RENAME COLUMN \`sipTimestamp\` TO \`timestamp\`;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 34', () => {
    const query = `ALTER TABLE users_compact MODIFY SETTING lightweight_mutation_projection_mode = 'throw';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 35', () => {
    const query = `ALTER TABLE users_compact MODIFY SETTING lightweight_mutation_projection_mode = 'drop';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 36', () => {
    const query = `ALTER TABLE users_compact MODIFY SETTING lightweight_mutation_projection_mode = 'rebuild';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 37', () => {
    const query = `ALTER TABLE users_wide MODIFY SETTING lightweight_mutation_projection_mode = 'throw';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 38', () => {
    const query = `ALTER TABLE users_wide MODIFY SETTING lightweight_mutation_projection_mode = 'drop';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 39', () => {
    const query = `ALTER TABLE users_wide MODIFY SETTING lightweight_mutation_projection_mode = 'rebuild';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 40', () => {
    const query = `ALTER TABLE to_table MODIFY COLUMN n2 Dynamic(max_types=5);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 41', () => {
    const query = `ALTER TABLE to_table MODIFY COLUMN n2 Dynamic(max_types=0);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 42', () => {
    const query = `ALTER TABLE to_table MODIFY COLUMN n2 Dynamic(max_types=1);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 43', () => {
    const query = `ALTER TABLE to_table MODIFY COLUMN n2 Dynamic(max_types=10);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 44', () => {
    const query = `ALTER TABLE t_mut_virtuals UPDATE s = _part WHERE 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 45', () => {
    const query = `ALTER TABLE t_mut_virtuals DELETE WHERE _part LIKE 'all_1_1_0%';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 46', () => {
    const query = `alter table tab update x = x + sleepEachRow(0.1) where 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 47', () => {
    const query = `alter table tab modify column x String;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 48', () => {
    const query = `alter table tab add column y String default x || '_42';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 49', () => {
    const query = `ALTER TABLE test_table_comment MODIFY COMMENT 'test comment';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 50', () => {
    const query = `ALTER TABLE elements UPDATE
\`nested.key\` = arrayFilter((x, v) -> NOT (match(v, 'chocolatine')), \`nested.key\`, \`nested.value\` ),
\`nested.value\` = arrayFilter((x, v) -> NOT (match(v, 'chocolatine')), \`nested.value\`, \`nested.value\`)
WHERE id = 5555
SETTINGS mutations_sync = 1 ;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 51', () => {
    const query = `ALTER TABLE elements UPDATE
\`nested.value\` = arrayMap(x -> concat(x, ' au chocolat'), \`nested.value\`)
WHERE id = 5555
SETTINGS mutations_sync = 1 ;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 52', () => {
    const query = `alter table test_03096 update b = 100 where b = 0 SETTINGS mutations_sync=2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 53', () => {
    const query = `alter table test_03096 update b = 123 where c = 0 SETTINGS mutations_sync=2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 54', () => {
    const query = `ALTER TABLE replacing MODIFY COLUMN ver String; -- { serverError ALTER_OF_COLUMN_IS_FORBIDDEN } ALTER TABLE replacing MODIFY COLUMN ver Int128;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 55', () => {
    const query = `ALTER TABLE replacing MODIFY COLUMN is_deleted String; -- { serverError ALTER_OF_COLUMN_IS_FORBIDDEN } ALTER TABLE replacing MODIFY COLUMN is_deleted UInt16; -- { serverError ALTER_OF_COLUMN_IS_FORBIDDEN }
ALTER TABLE replacing MODIFY COLUMN is_deleted Int8; -- { serverError ALTER_OF_COLUMN_IS_FORBIDDEN }
ALTER TABLE replacing DROP COLUMN ver; -- { serverError ALTER_OF_COLUMN_IS_FORBIDDEN }
ALTER TABLE replacing DROP COLUMN is_deleted; -- { serverError ALTER_OF_COLUMN_IS_FORBIDDEN }
ALTER TABLE replacing RENAME COLUMN ver TO ver2; -- { serverError ALTER_OF_COLUMN_IS_FORBIDDEN }
ALTER TABLE replacing RENAME COLUMN is_deleted TO is_deleted2; -- { serverError ALTER_OF_COLUMN_IS_FORBIDDEN }
CREATE TABLE collapsing_wrong (key Int64, sign Int16) ENGINE = CollapsingMergeTree(sign) ORDER BY key; -- { serverError BAD_TYPE_OF_FIELD }
CREATE TABLE collapsing_wrong (key Int64, sign UInt8) ENGINE = CollapsingMergeTree(sign) ORDER BY key; -- { serverError BAD_TYPE_OF_FIELD }
CREATE TABLE collapsing_wrong (key Int64, sign UInt8) ENGINE = CollapsingMergeTree(not_existing) ORDER BY key; -- { serverError NO_SUCH_COLUMN_IN_TABLE }
CREATE TABLE collapsing (key Int64, sign Int8) ENGINE = CollapsingMergeTree(sign) ORDER BY key;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 56', () => {
    const query = `ALTER TABLE collapsing MODIFY COLUMN sign String; -- { serverError ALTER_OF_COLUMN_IS_FORBIDDEN } ALTER TABLE collapsing DROP COLUMN sign; -- { serverError ALTER_OF_COLUMN_IS_FORBIDDEN }
ALTER TABLE collapsing RENAME COLUMN sign TO sign2; -- { serverError ALTER_OF_COLUMN_IS_FORBIDDEN }
CREATE TABLE versioned_collapsing_wrong (key Int64, version UInt8, sign Int8) ENGINE = VersionedCollapsingMergeTree(sign, sign) ORDER BY key; -- { serverError BAD_ARGUMENTS }
CREATE TABLE versioned_collapsing (key Int64, version UInt8, sign Int8) ENGINE = VersionedCollapsingMergeTree(sign, version) ORDER BY key;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 57', () => {
    const query = `alter table t2 add column date Date alias toDate(timestamp);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 58', () => {
    const query = `alter table test add column d Dynamic settings mutations_sync=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 59', () => {
    const query = `alter table test rename column d to d1 settings mutations_sync=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 60', () => {
    const query = `alter table test rename column d1 to d2 settings mutations_sync=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 61', () => {
    const query = `alter table test add column d Dynamic(max_types=3) settings mutations_sync=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 62', () => {
    const query = `alter table test modify column d Dynamic(max_types=1) settings mutations_sync=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 63', () => {
    const query = `alter table test modify column d Dynamic(max_types=3) settings mutations_sync=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 64', () => {
    const query = `alter table test modify column y Dynamic settings mutations_sync=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 65', () => {
    const query = `alter table test modify column d Dynamic(max_types=0) settings mutations_sync=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 66', () => {
    const query = `alter table test modify column d Dynamic(max_types=2) settings mutations_sync=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 67', () => {
    const query = `ALTER TABLE move_partition_to_oneself MOVE PARTITION tuple() TO TABLE move_partition_to_oneself;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 68', () => {
    const query = `ALTER TABLE tab UPDATE m1 = map(3.0, 'aaa') WHERE m1 = map(2.0, 'aa');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 69', () => {
    const query = `ALTER TABLE memory MODIFY SETTING min_rows_to_keep = 100, max_rows_to_keep = 1000;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 70', () => {
    const query = `ALTER TABLE memory MODIFY SETTING min_rows_to_keep = 100;  -- { serverError SETTING_CONSTRAINT_VIOLATION } ALTER TABLE memory MODIFY SETTING min_bytes_to_keep = 100; -- { serverError SETTING_CONSTRAINT_VIOLATION }
ALTER TABLE memory MODIFY SETTING max_rows_to_keep = 1000;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 71', () => {
    const query = `ALTER TABLE memory MODIFY SETTING max_bytes_to_keep = 1000;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 72', () => {
    const query = `ALTER TABLE mv MODIFY QUERY SELECT a, b FROM src_table; -- { serverError NO_SUCH_COLUMN_IN_TABLE } DROP TABLE src_table;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 73', () => {
    const query = `alter table data add column value SimpleAggregateFunction(sum, UInt64), modify order by (key, value); -- { serverError DATA_TYPE_CANNOT_BE_USED_IN_KEY } alter table data add column value SimpleAggregateFunction(sum, UInt64), modify order by (key, value) settings allow_suspicious_primary_key=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 74', () => {
    const query = `alter table data_rep add column value SimpleAggregateFunction(sum, UInt64), modify order by (key, value); -- { serverError DATA_TYPE_CANNOT_BE_USED_IN_KEY } alter table data_rep add column value SimpleAggregateFunction(sum, UInt64), modify order by (key, value) settings allow_suspicious_primary_key=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 75', () => {
    const query = `ALTER TABLE test DETACH PART 'all_1_1_1';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 76', () => {
    const query = `ALTER TABLE test ATTACH PART 'all_1_1_1';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 77', () => {
    const query = `ALTER TABLE test ATTACH PARTITION tuple();`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 78', () => {
    const query = `ALTER TABLE src ADD COLUMN y UInt8;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 79', () => {
    const query = `ALTER TABLE src DROP COLUMN x;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 80', () => {
    const query = `ALTER TABLE mv_03002 MODIFY QUERY WITH MY_CTE AS (SELECT ts FROM table_03002)
SELECT * FROM MY_CTE;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 81', () => {
    const query = `ALTER TABLE t_data_version UPDATE b = a * 100 WHERE 1 SETTINGS mutations_sync = 2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 82', () => {
    const query = `ALTER TABLE lwd_merge MODIFY SETTING exclude_deleted_rows_for_part_size_in_merge = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 83', () => {
    const query = `ALTER TABLE t_block_offset MODIFY SETTING enable_block_number_column = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 84', () => {
    const query = `ALTER TABLE t_block_offset MODIFY SETTING enable_block_offset_column = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 85', () => {
    const query = `ALTER TABLE 03000_traverse_shadow_system_data_path_table FREEZE WITH NAME '03000_traverse_shadow_system_data_path_table_backup';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 86', () => {
    const query = `ALTER TABLE visits_order ADD PROJECTION user_name_projection (SELECT * ORDER BY user_name);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 87', () => {
    const query = `ALTER TABLE visits_order_dst ADD PROJECTION user_name_projection (SELECT * ORDER BY user_name);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 88', () => {
    const query = `ALTER TABLE visits_order_dst ATTACH PARTITION ID '2' FROM visits_order;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 89', () => {
    const query = `ALTER TABLE test MODIFY SETTING primary_key_ratio_of_unique_prefix_values_to_skip_suffix_columns = 0.9;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 90', () => {
    const query = `ALTER TABLE attach_partition_t7 ADD COLUMN mat_column
UInt32 MATERIALIZED a+b;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 91', () => {
    const query = `ALTER TABLE attach_partition_t8 ATTACH PARTITION ID '1' FROM attach_partition_t7; -- {serverError INCOMPATIBLE_COLUMNS};`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 92', () => {
    const query = `ALTER TABLE test_table_replicated ADD COLUMN insert_time DateTime;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 93', () => {
    const query = `ALTER TABLE test_table_replicated ADD COLUMN insert_time_updated DateTime;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 94', () => {
    const query = `ALTER TABLE test_table_replicated_second ADD COLUMN insert_time_updated DateTime;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 95', () => {
    const query = `ALTER TABLE t_index_agg_func ADD INDEX idx_v v TYPE minmax GRANULARITY 1; -- { serverError BAD_ARGUMENTS } ALTER TABLE t_index_agg_func ADD INDEX idx_v finalizeAggregation(v) TYPE minmax GRANULARITY 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 96', () => {
    const query = `ALTER TABLE table_with_some_columns DROP COLUMN value0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 97', () => {
    const query = `alter table data detach part {part:String};`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 98', () => {
    const query = `alter table data attach part {part:String};`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 99', () => {
    const query = `alter table data drop detached part {part:String} settings allow_drop_detached=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 100', () => {
    const query = `alter table data drop part {part:String};`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 101', () => {
    const query = `ALTER TABLE part_log_bytes_uncompressed UPDATE value = 3 WHERE 1 = 1 SETTINGS mutations_sync=2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 102', () => {
    const query = `ALTER TABLE part_log_bytes_uncompressed DROP PART 'all_4_4_0' SETTINGS mutations_sync=2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 103', () => {
    const query = `ALTER TABLE t_merge_tree_index ADD COLUMN c UInt64 AFTER b;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 104', () => {
    const query = `ALTER TABLE tab MATERIALIZE COLUMN dflt;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 105', () => {
    const query = `ALTER TABLE tab RENAME COLUMN dflt TO dflt2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 106', () => {
    const query = `ALTER TABLE tab MATERIALIZE COLUMN dflt2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 107', () => {
    const query = `ALTER TABLE tab MODIFY COLUMN mtrl Int64 MATERIALIZED 65432;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 108', () => {
    const query = `ALTER TABLE tab MATERIALIZE COLUMN mtrl;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 109', () => {
    const query = `ALTER TABLE t_proj_external ADD PROJECTION aaaa ( SELECT
k1,
k2,
k3,
sum(value)
GROUP BY k1, k2, k3
);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 110', () => {
    const query = `ALTER TABLE t_proj_external MATERIALIZE PROJECTION aaaa SETTINGS mutations_sync = 2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 111', () => {
    const query = `ALTER TABLE test_max_mt_projections_alter ADD PROJECTION p1 (SELECT c2 ORDER BY c2);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 112', () => {
    const query = `ALTER TABLE test_max_mt_projections_alter ADD PROJECTION p2 (SELECT c3 ORDER BY c3);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 113', () => {
    const query = `ALTER TABLE test_max_mt_projections_alter ADD PROJECTION p3 (SELECT c1, c2 ORDER BY c1, c2);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 114', () => {
    const query = `ALTER TABLE test_max_mt_projections_alter ADD PROJECTION p4 (SELECT c2, c3 ORDER BY c2, c3); -- { serverError LIMIT_EXCEEDED }
ALTER TABLE test_max_mt_projections_alter DROP PROJECTION p3;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 115', () => {
    const query = `ALTER TABLE test_max_mt_projections_alter ADD PROJECTION p4 (SELECT c2, c3 ORDER BY c2, c3);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 116', () => {
    const query = `ALTER TABLE test_max_mt_projections_create ADD PROJECTION p2 (SELECT c2 ORDER BY c2); -- { serverError LIMIT_EXCEEDED }
DROP TABLE IF EXISTS test_max_mt_projections_create;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 117', () => {
    const query = `ALTER TABLE test_max_size_drop DROP PARTITION tuple() SETTINGS max_partition_size_to_drop = 1; -- { serverError TABLE_SIZE_EXCEEDS_MAX_DROP_SIZE_LIMIT } ALTER TABLE test_max_size_drop DROP PARTITION tuple();`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 118', () => {
    const query = `ALTER TABLE test_max_size_drop DROP PART 'all_1_1_0' SETTINGS max_partition_size_to_drop = 1; -- { serverError TABLE_SIZE_EXCEEDS_MAX_DROP_SIZE_LIMIT } ALTER TABLE test_max_size_drop DROP PART 'all_1_1_0';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 119', () => {
    const query = `ALTER TABLE t_lwd_mutations UPDATE v = 1 WHERE id % 4 = 0, DELETE WHERE id % 10 = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 120', () => {
    const query = `ALTER TABLE t_lwd_mutations UPDATE v = 1 WHERE id % 4 = 1, DELETE WHERE id % 10 = 3;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 121', () => {
    const query = `ALTER TABLE t_lwd_mutations UPDATE _row_exists = 0 WHERE id % 10 = 4, DELETE WHERE id % 10 = 5;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 122', () => {
    const query = `ALTER TABLE t_lwd_mutations DELETE WHERE id % 10 = 6, UPDATE _row_exists = 0 WHERE id % 10 = 7;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 123', () => {
    const query = `ALTER TABLE t_lwd_mutations APPLY DELETED MASK;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 124', () => {
    const query = `ALTER TABLE t_materialize_delete APPLY DELETED MASK;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 125', () => {
    const query = `ALTER TABLE t_materialize_delete APPLY DELETED MASK IN PARTITION 5;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 126', () => {
    const query = `ALTER TABLE dest ADD COLUMN v2 UInt64;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 127', () => {
    const query = `ALTER TABLE pipe MODIFY QUERY SELECT v * 2 as v, 1 as v2 FROM src;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 128', () => {
    const query = `ALTER TABLE t RENAME COLUMN value1 TO value11;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 129', () => {
    const query = `ALTER TABLE t RENAME COLUMN value11 TO value12 SETTINGS mutations_sync = 2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 130', () => {
    const query = `ALTER TABLE t MODIFY COLUMN age Nullable(Int32); -- { serverError ALTER_OF_COLUMN_IS_FORBIDDEN } ALTER TABLE t MODIFY COLUMN i Int32; -- { serverError CANNOT_CONVERT_TYPE }
SYSTEM STOP MERGES t;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 131', () => {
    const query = `ALTER TABLE t MODIFY COLUMN j Int32;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 132', () => {
    const query = `ALTER TABLE t MODIFY COLUMN j Int64 SETTINGS mutations_sync = 2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 133', () => {
    const query = `ALTER TABLE crash_02919 UPDATE b = 1 WHERE 1=1 SETTINGS mutations_sync = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 134', () => {
    const query = `ALTER TABLE crash_02919 UPDATE b = 0.1 WHERE 1=1 SETTINGS mutations_sync = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 135', () => {
    const query = `ALTER TEMPORARY TABLE alter_test MODIFY COLUMN b UInt8 FIRST;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 136', () => {
    const query = `ALTER TEMPORARY TABLE alter_test COMMENT COLUMN b 'this is comment for log engine';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 137', () => {
    const query = `ALTER TABLE alter_test ADD COLUMN Added0 UInt32;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 138', () => {
    const query = `ALTER TEMPORARY TABLE alter_test ADD COLUMN Added2 UInt32;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 139', () => {
    const query = `ALTER TABLE alter_test ADD COLUMN Added1 UInt32 AFTER Added0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 140', () => {
    const query = `ALTER TABLE alter_test ADD COLUMN AddedNested1 Nested(A UInt32, B UInt64) AFTER Added2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 141', () => {
    const query = `ALTER TABLE alter_test ADD COLUMN AddedNested1.C Array(String) AFTER AddedNested1.B;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 142', () => {
    const query = `ALTER TABLE alter_test ADD COLUMN AddedNested2 Nested(A UInt32, B UInt64) AFTER AddedNested1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 143', () => {
    const query = `ALTER TABLE alter_test DROP COLUMN ToDrop;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 144', () => {
    const query = `ALTER TABLE alter_test MODIFY COLUMN Added0 String;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 145', () => {
    const query = `ALTER TABLE alter_test DROP COLUMN NestedColumn.A;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 146', () => {
    const query = `ALTER TABLE alter_test DROP COLUMN NestedColumn.S;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 147', () => {
    const query = `ALTER TABLE alter_test DROP COLUMN AddedNested1.B;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 148', () => {
    const query = `ALTER TABLE alter_test ADD COLUMN IF NOT EXISTS Added0 UInt32;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 149', () => {
    const query = `ALTER TABLE alter_test ADD COLUMN IF NOT EXISTS AddedNested1 Nested(A UInt32, B UInt64);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 150', () => {
    const query = `ALTER TABLE alter_test ADD COLUMN IF NOT EXISTS AddedNested1.C Array(String);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 151', () => {
    const query = `ALTER TABLE alter_test MODIFY COLUMN IF EXISTS ToDrop UInt64;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 152', () => {
    const query = `ALTER TABLE alter_test DROP COLUMN IF EXISTS ToDrop;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 153', () => {
    const query = `ALTER TABLE alter_test COMMENT COLUMN IF EXISTS ToDrop 'new comment';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 154', () => {
    const query = `ALTER TABLE alter_test RENAME COLUMN Added0 to RenamedColumn;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 155', () => {
    const query = `alter table shard_0.from_1 on cluster test_cluster_two_shards_different_databases move partition tuple() to table shard_0.to format Null settings distributed_ddl_output_mode='never_throw', distributed_ddl_task_timeout = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 156', () => {
    const query = `ALTER TABLE nested_table ADD COLUMN second Nested(c Int8, d String) AFTER id;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 157', () => {
    const query = `ALTER TABLE nested_table ADD COLUMN third Nested(e Int8, f String) FIRST;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 158', () => {
    const query = `ALTER TABLE nested_table ADD COLUMN fourth Nested(g Int8, h String);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 159', () => {
    const query = `alter table shard_0.from_0 on cluster test_cluster_two_shards_different_databases move partition tuple() to table shard_0.to format Null settings distributed_ddl_output_mode='never_throw', distributed_ddl_task_timeout = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 160', () => {
    const query = `ALTER TABLE index_test ADD INDEX i_x mortonDecode(2, z).1 TYPE minmax GRANULARITY 1,
ADD INDEX i_y mortonDecode(2, z).2 TYPE minmax GRANULARITY 1,
MATERIALIZE INDEX i_x,
MATERIALIZE INDEX i_y;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 161', () => {
    const query = `ALTER TABLE test02910 ADD COLUMN j2 Tuple(Object('json')) DEFAULT jString;  -- { serverError SUPPORT_IS_DISABLED } ALTER TABLE test02910 ADD COLUMN j2 Tuple(Float64, Object('json'));  -- { serverError SUPPORT_IS_DISABLED }
ALTER TABLE test02910 ADD COLUMN j2 Tuple(Array(Tuple(Object('json')))) DEFAULT jString;  -- { serverError SUPPORT_IS_DISABLED }
ALTER TABLE test02910 ADD COLUMN j2 Object('json') default jString;  -- { serverError SUPPORT_IS_DISABLED }
DROP TABLE IF EXISTS test02910_second;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 162', () => {
    const query = `ALTER TABLE test02910_second ADD COLUMN \`tags_json\` Tuple(Object('json')) DEFAULT jString;  -- { serverError SUPPORT_IS_DISABLED } ALTER TABLE test02910_second ADD COLUMN \`tags_json\` Tuple(Float64, Object('json'));  -- { serverError SUPPORT_IS_DISABLED }
ALTER TABLE test02910_second ADD COLUMN \`tags_json\` Tuple(Array(Tuple(Object('json')))) DEFAULT jString;  -- { serverError SUPPORT_IS_DISABLED }
ALTER TABLE test02910_second ADD COLUMN \`tags_json\` Object('json'); -- { serverError SUPPORT_IS_DISABLED }
DROP TABLE IF EXISTS test02910;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 163', () => {
    const query = `ALTER NAMED COLLECTION foobar03 DELETE b; -- { serverError BAD_ARGUMENTS } DROP NAMED COLLECTION foobar03;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 164', () => {
    const query = `ALTER TABLE t MODIFY COLUMN a DateTime ALIAS c1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 165', () => {
    const query = `ALTER TABLE test DROP PARTITION ('2023-10-09');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 166', () => {
    const query = `ALTER TABLE test DROP PARTITION (('2023-10-09'));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 167', () => {
    const query = `ALTER TABLE test DROP PARTITION '2023-10-09';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 168', () => {
    const query = `ALTER TABLE test DROP PARTITION {partition:String};`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 169', () => {
    const query = `ALTER TABLE test DROP PARTITION tuple(toMonday({partition:Date}));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 170', () => {
    const query = `ALTER TABLE test DROP PARTITION toMonday({partition:String}); --{clientError SYNTAX_ERROR} set param_partition_id = '20231009';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 171', () => {
    const query = `ALTER TABLE test DROP PARTITION ID {partition_id:String};`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 172', () => {
    const query = `ALTER TABLE test DROP PARTITION {partition:Date};`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 173', () => {
    const query = `ALTER TABLE test2 DROP PARTITION tuple(2, 4);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 174', () => {
    const query = `ALTER TABLE test2 DROP PARTITION (2, 4);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 175', () => {
    const query = `ALTER TABLE test2 DROP PARTITION tuple({first:UInt32},{second:Int64});`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 176', () => {
    const query = `ALTER TABLE test3 DROP PARTITION {simple:String};`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 177', () => {
    const query = `ALTER TABLE test4 ON CLUSTER 'test_shard_localhost' DROP PARTITION {partition:String} FORMAT Null;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 178', () => {
    const query = `ALTER TABLE test5 DROP PARTITION ({f:UInt32}, 2);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 179', () => {
    const query = `ALTER TABLE test6 DROP PARTITION {tuple:Tuple(UInt32, Int64)};`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 180', () => {
    const query = `ALTER TABLE kv UPDATE s = 'The Containers library is a generic collection of class templates and algorithms that allow programmers to easily implement common data structures like queues, lists and stacks' WHERE 1
SETTINGS mutations_sync = 2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 181', () => {
    const query = `ALTER TABLE attach_partition_t2 ATTACH PARTITION tuple() FROM attach_partition_t1; -- { serverError BAD_ARGUMENTS } CREATE TABLE attach_partition_t3 (
	a UInt32,
	b String,
PROJECTION proj
(
SELECT
b,
sum(a)
GROUP BY b
)
)
ENGINE = MergeTree
ORDER BY a;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 182', () => {
    const query = `ALTER TABLE attach_partition_t4 ATTACH PARTITION tuple() FROM attach_partition_t3; -- { serverError BAD_ARGUMENTS } CREATE TABLE attach_partition_t5 (
	a UInt32,
	b String,
PROJECTION proj
(
SELECT
b,
sum(a)
GROUP BY b
)
)
ENGINE = MergeTree
ORDER BY a;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 183', () => {
    const query = `ALTER TABLE attach_partition_t6 ATTACH PARTITION tuple() FROM attach_partition_t5;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 184', () => {
    const query = `ALTER TABLE t_mutations_subcolumns DELETE WHERE obj.k3 = 5;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 185', () => {
    const query = `ALTER TABLE t_mutations_subcolumns DELETE WHERE obj.k1 = ('foo', 'baz');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 186', () => {
    const query = `ALTER TABLE t_mutations_subcolumns UPDATE n = 'ttt' WHERE obj.k1.k2 = 'foo';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 187', () => {
    const query = `ALTER TABLE t_mutations_subcolumns DELETE WHERE obj.k2 = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 188', () => {
    const query = `ALTER TABLE t_mutations_subcolumns DELETE WHERE isNull(obj.k1);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 189', () => {
    const query = `ALTER TABLE t_missed_subcolumns DELETE WHERE obj.k4 = 5;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 190', () => {
    const query = `ALTER TABLE checksums_r1 MODIFY COLUMN column1 Int32 SETTINGS alter_sync=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 191', () => {
    const query = `ALTER TABLE tab MODIFY COLUMN long_string MODIFY SETTING min_compress_block_size = 8192;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 192', () => {
    const query = `ALTER TABLE tab MODIFY COLUMN long_string RESET SETTING min_compress_block_size;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 193', () => {
    const query = `ALTER TABLE tab MODIFY COLUMN long_string REMOVE SETTINGS;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 194', () => {
    const query = `ALTER TABLE tab MODIFY COLUMN long_string String SETTINGS (min_compress_block_size = 163840, max_compress_block_size = 163840);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 195', () => {
    const query = `ALTER TABLE test_move_partition_throttling MOVE PARTITION tuple() TO VOLUME 'remote' SETTINGS max_remote_write_network_bandwidth=1600000;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 196', () => {
    const query = `ALTER TABLE t_collisions ADD COLUMN very_very_long_column_name_that_will_be_replaced_with_hash Int32;  -- { serverError BAD_ARGUMENTS } ALTER TABLE t_collisions RENAME COLUMN col1 TO very_very_long_column_name_that_will_be_replaced_with_hash;  -- { serverError BAD_ARGUMENTS }
DROP TABLE IF EXISTS t_collisions;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 197', () => {
    const query = `ALTER TABLE t_collisions MODIFY SETTING replace_long_file_name_to_hash = 1, max_file_name_length = 42; -- { serverError BAD_ARGUMENTS } INSERT INTO t_collisions VALUES (2, 2);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 198', () => {
    const query = `ALTER TABLE t_collisions MODIFY COLUMN col Array(String); -- { serverError BAD_ARGUMENTS } DROP TABLE IF EXISTS t_collisions;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 199', () => {
    const query = `ALTER TABLE tab MATERIALIZE STATISTICS a, b;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 200', () => {
    const query = `ALTER TABLE tab ADD STATISTICS f64 TYPE no_statistics_type; -- { serverError INCORRECT_QUERY } ALTER TABLE tab ADD STATISTICS IF NOT EXISTS f64 TYPE no_statistics_type; -- { serverError INCORRECT_QUERY }
ALTER TABLE tab MODIFY STATISTICS f64 TYPE no_statistics_type; -- { serverError INCORRECT_QUERY }
ALTER TABLE tab ADD STATISTICS f64 TYPE tdigest, tdigest; -- { serverError INCORRECT_QUERY }
ALTER TABLE tab ADD STATISTICS IF NOT EXISTS f64 TYPE tdigest, tdigest; -- { serverError INCORRECT_QUERY }
ALTER TABLE tab MODIFY STATISTICS f64 TYPE tdigest, tdigest; -- { serverError INCORRECT_QUERY }
ALTER TABLE tab ADD STATISTICS f64_tdigest TYPE tdigest; -- { serverError ILLEGAL_STATISTICS }
ALTER TABLE tab ADD STATISTICS IF NOT EXISTS f64_tdigest TYPE tdigest; -- no-op
ALTER TABLE tab MODIFY STATISTICS f64_tdigest TYPE tdigest; -- no-op
ALTER TABLE tab ADD STATISTICS no_such_column TYPE tdigest; -- { serverError ILLEGAL_STATISTICS }
ALTER TABLE tab ADD STATISTICS IF NOT EXISTS no_such_column TYPE tdigest; -- { serverError ILLEGAL_STATISTICS }
ALTER TABLE tab MODIFY STATISTICS no_such_column TYPE tdigest; -- { serverError ILLEGAL_STATISTICS }
ALTER TABLE tab DROP STATISTICS no_such_column; -- { serverError ILLEGAL_STATISTICS }
ALTER TABLE tab DROP STATISTICS IF EXISTS no_such_column; -- no-op
ALTER TABLE tab CLEAR STATISTICS no_such_column; -- { serverError ILLEGAL_STATISTICS }
ALTER TABLE tab CLEAR STATISTICS IF EXISTS no_such_column; -- no-op
ALTER TABLE tab MATERIALIZE STATISTICS no_such_column; -- { serverError ILLEGAL_STATISTICS }
ALTER TABLE tab MATERIALIZE STATISTICS IF EXISTS no_such_column; -- { serverError ILLEGAL_STATISTICS }
ALTER TABLE tab MODIFY STATISTICS s TYPE tdigest; -- { serverError ILLEGAL_STATISTICS }
ALTER TABLE tab DROP STATISTICS s; -- { serverError ILLEGAL_STATISTICS }
ALTER TABLE tab DROP STATISTICS IF EXISTS s; -- no-op
ALTER TABLE tab CLEAR STATISTICS s; -- { serverError ILLEGAL_STATISTICS }
ALTER TABLE tab CLEAR STATISTICS IF EXISTS s; -- no-op
ALTER TABLE tab MATERIALIZE STATISTICS s; -- { serverError ILLEGAL_STATISTICS }
ALTER TABLE tab MATERIALIZE STATISTICS IF EXISTS s; -- { serverError ILLEGAL_STATISTICS }
ALTER TABLE tab ADD STATISTICS f64 TYPE tdigest; ALTER TABLE tab DROP STATISTICS f64;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 201', () => {
    const query = `ALTER TABLE tab MODIFY STATISTICS f64 TYPE tdigest; ALTER TABLE tab DROP STATISTICS f64;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 202', () => {
    const query = `ALTER TABLE tab ADD STATISTICS a TYPE tdigest; -- { serverError ILLEGAL_STATISTICS } ALTER TABLE tab MODIFY STATISTICS a TYPE tdigest; -- { serverError ILLEGAL_STATISTICS }
ALTER TABLE tab ADD STATISTICS f64 TYPE uniq; ALTER TABLE tab DROP STATISTICS f64;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 203', () => {
    const query = `ALTER TABLE tab MODIFY STATISTICS f64 TYPE countmin; ALTER TABLE tab DROP STATISTICS f64;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 204', () => {
    const query = `ALTER TABLE tab ADD STATISTICS a TYPE uniq; -- { serverError ILLEGAL_STATISTICS } ALTER TABLE tab MODIFY STATISTICS a TYPE uniq; -- { serverError ILLEGAL_STATISTICS }
ALTER TABLE tab ADD STATISTICS f64 TYPE countmin; ALTER TABLE tab DROP STATISTICS f64;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 205', () => {
    const query = `ALTER TABLE tab ADD STATISTICS a TYPE countmin; -- { serverError ILLEGAL_STATISTICS } ALTER TABLE tab MODIFY STATISTICS a TYPE countmin; -- { serverError ILLEGAL_STATISTICS }
ALTER TABLE tab ADD STATISTICS f64 TYPE minmax; ALTER TABLE tab DROP STATISTICS f64;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 206', () => {
    const query = `ALTER TABLE tab MODIFY STATISTICS f64 TYPE minmax; ALTER TABLE tab DROP STATISTICS f64;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 207', () => {
    const query = `ALTER TABLE tab ADD STATISTICS a TYPE minmax; -- { serverError ILLEGAL_STATISTICS } ALTER TABLE tab MODIFY STATISTICS a TYPE minmax; -- { serverError ILLEGAL_STATISTICS }
ALTER TABLE tab MODIFY COLUMN f64_tdigest UInt64; -- { serverError ALTER_OF_COLUMN_IS_FORBIDDEN }
SHOW CREATE TABLE tab;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 208', () => {
    const query = `ALTER TABLE tab ADD STATISTICS f64, f32 TYPE tdigest, uniq;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 209', () => {
    const query = `ALTER TABLE tab MODIFY STATISTICS f64, f32 TYPE tdigest, uniq;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 210', () => {
    const query = `ALTER TABLE tab CLEAR STATISTICS f64, f32;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 211', () => {
    const query = `ALTER TABLE tab MATERIALIZE STATISTICS f64, f32;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 212', () => {
    const query = `ALTER TABLE tab DROP STATISTICS f64, f32;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 213', () => {
    const query = `ALTER TABLE tab DROP STATISTICS a, b, c, d;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 214', () => {
    const query = `ALTER TABLE tab ADD STATISTICS b TYPE countmin, uniq;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 215', () => {
    const query = `ALTER TABLE tab MATERIALIZE STATISTICS b;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 216', () => {
    const query = `ALTER TABLE tab DROP STATISTICS b;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 217', () => {
    const query = `alter table tab delete where x > 1000 and y in (select sum(number + 1) from numbers_mt(1e7) group by number % 2 with totals);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 218', () => {
    const query = `alter table data add column \`features_legacy_Map.id\` Array(UInt8), add column \`features_legacy_Map.count\` Array(UInt32);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 219', () => {
    const query = `alter table data drop column legacy_features_Map settings mutations_sync=2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 220', () => {
    const query = `ALTER TABLE t_mutations_nondeterministic UPDATE v = (SELECT sum(number) FROM numbers(100)) WHERE 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 221', () => {
    const query = `ALTER TABLE t_mutations_nondeterministic UPDATE v = (SELECT groupArray(number) FROM numbers(10)) WHERE 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 222', () => {
    const query = `ALTER TABLE t_mutations_nondeterministic UPDATE v = (SELECT groupArray(number) FROM numbers(10000)) WHERE 1; -- { serverError BAD_ARGUMENTS } SELECT command FROM system.mutations
WHERE database = currentDatabase() AND table = 't_mutations_nondeterministic' AND is_done
ORDER BY command;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 223', () => {
    const query = `ALTER TABLE t_mutations_nondeterministic UPDATE v = (SELECT uniqExactState(number) FROM numbers(5)) WHERE 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 224', () => {
    const query = `ALTER TABLE t_mutations_nondeterministic UPDATE v = now() WHERE 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 225', () => {
    const query = `ALTER TABLE t_mutations_nondeterministic UPDATE v = filesystemCapacity(materialize('default')) WHERE 1; -- { serverError BAD_ARGUMENTS } DROP TABLE t_mutations_nondeterministic SYNC;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 226', () => {
    const query = `ALTER TABLE t_mutations_nondeterministic UPDATE v =
(
SELECT sum(number) FROM numbers(1000) WHERE number > randConstant()
) WHERE 1
SETTINGS mutations_execute_subqueries_on_initiator = 0, allow_nondeterministic_mutations = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 227', () => {
    const query = `ALTER TABLE t_mutations_nondeterministic DELETE WHERE d < now();`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 228', () => {
    const query = `ALTER TABLE cool_table ADD COLUMN IF NOT EXISTS \`n.lc2\` Array(LowCardinality(String));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 229', () => {
    const query = `ALTER TABLE cool_table ADD COLUMN IF NOT EXISTS \`n.lc2\` Array(Array(LowCardinality(String)));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 230', () => {
    const query = `ALTER TABLE cool_table ADD COLUMN IF NOT EXISTS \`n.lc2\` Array(Map(LowCardinality(String), UInt64));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 231', () => {
    const query = `ALTER TABLE alter_02834 MODIFY QUERY SELECT a FROM alter_02834; -- { serverError NOT_IMPLEMENTED } DROP TABLE alter_02834;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 232', () => {
    const query = `alter table t_delete_skip_index delete where x < 8192;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 233', () => {
    const query = `alter table t_delete_projection delete where x < 8192;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 234', () => {
    const query = `ALTER table test_xy UPDATE
y =  transform(x,
(select groupArray(x) from (select x, y from updates order by x) t1),
(select groupArray(y) from (select x, y from updates order by x) t2),
y)
WHERE 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 235', () => {
    const query = `ALTER TABLE fx_1m ADD PROJECTION fx_5m (
SELECT
symbol,
toStartOfInterval(dt_close, INTERVAL 300 SECOND) AS dt_close,
argMin(open, dt_close),
max(high),
min(low),
argMax(close, dt_close),
sum(volume) volume
GROUP BY symbol, dt_close
);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 236', () => {
    const query = `ALTER TABLE fx_1m MATERIALIZE PROJECTION fx_5m SETTINGS mutations_sync = 2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 237', () => {
    const query = `ALTER TABLE t_projections_lwd DROP projection p;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 238', () => {
    const query = `ALTER TABLE t MODIFY COMMENT 'World';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 239', () => {
    const query = `ALTER TABLE t MODIFY COMMENT 'World', MODIFY COLUMN x UInt16;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 240', () => {
    const query = `ALTER TABLE test ADD COLUMN col2 String;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 241', () => {
    const query = `ALTER TABLE test ADD INDEX i1 (col1, col2) TYPE set(100) GRANULARITY 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 242', () => {
    const query = `ALTER TABLE test MATERIALIZE INDEX i1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 243', () => {
    const query = `ALTER TABLE test ADD COLUMN col3 String;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 244', () => {
    const query = `ALTER TABLE test DROP COLUMN col3;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 245', () => {
    const query = `ALTER TABLE test ADD PROJECTION p1 ( SELECT col2, sum(col1) GROUP BY col2 );`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 246', () => {
    const query = `ALTER TABLE test MATERIALIZE PROJECTION p1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 247', () => {
    const query = `ALTER TABLE t_sparse_mutation UPDATE v = v * 2 WHERE id % 5 = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 248', () => {
    const query = `ALTER TABLE t_sparse_mutation DELETE WHERE id % 3 = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 249', () => {
    const query = `ALTER TABLE t_sparse_reload MODIFY SETTING ratio_of_defaults_for_sparse_serialization = 1.0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 250', () => {
    const query = `ALTER TABLE dst REPLACE PARTITION 1 FROM src;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 251', () => {
    const query = `ALTER TABLE rdst REPLACE PARTITION 3 FROM src;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 252', () => {
    const query = `ALTER TABLE dst DROP PARTITION 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 253', () => {
    const query = `ALTER TABLE dst ATTACH PARTITION 1 FROM src;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 254', () => {
    const query = `ALTER TABLE rdst DROP PARTITION 3;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 255', () => {
    const query = `ALTER TABLE rdst ATTACH PARTITION 1 FROM src;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 256', () => {
    const query = `ALTER TABLE t_to MODIFY COLUMN value Object('json'); -- { serverError BAD_ARGUMENTS } ALTER TABLE t_from MODIFY COLUMN value Nullable(String); -- { serverError BAD_ARGUMENTS }
DROP TABLE t_to;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 257', () => {
    const query = `alter table alias_column_should_not_allow_compression modify column user_id_hashed codec(LZ4HC(1)); -- { serverError BAD_ARGUMENTS } alter table alias_column_should_not_allow_compression add column user_id_hashed_1 UInt64 ALIAS (cityHash64(user_id)) codec(LZ4HC(1)); -- { serverError BAD_ARGUMENTS }
drop table if exists alias_column_should_not_allow_compression;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 258', () => {
    const query = `ALTER TABLE tbl ADD COLUMN \`id2\` UInt32, MODIFY ORDER BY (id1, id2, id2);  -- { serverError BAD_ARGUMENTS } ALTER TABLE tbl ADD COLUMN \`id2\` UInt32, MODIFY ORDER BY (id1, id2, id1);  -- { serverError BAD_ARGUMENTS }
ALTER TABLE tbl ADD COLUMN \`id2\` UInt32, MODIFY ORDER BY (id1, id2, id2) SETTINGS allow_suspicious_indices = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 259', () => {
    const query = `ALTER TABLE tbl ADD INDEX idx (id+1, id, id+1) TYPE minmax;  -- { serverError BAD_ARGUMENTS } ALTER TABLE tbl ADD INDEX idx (id+1, id, id+1) TYPE minmax SETTINGS allow_suspicious_indices = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 260', () => {
    const query = `ALTER TABLE 02707_keepermap_delete_update DELETE WHERE key >= 4;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 261', () => {
    const query = `ALTER TABLE 02707_keepermap_delete_update UPDATE value = 'Another' WHERE key > 2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 262', () => {
    const query = `ALTER TABLE 02707_keepermap_delete_update UPDATE key = key * 10 WHERE 1 = 1; -- { serverError BAD_ARGUMENTS } SELECT *, _version FROM 02707_keepermap_delete_update ORDER BY key;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 263', () => {
    const query = `ALTER TABLE 02707_keepermap_delete_update UPDATE value2 = value2 * 10 + 2 WHERE value2 < 100;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 264', () => {
    const query = `ALTER TABLE mv_source MODIFY TTL insert_time + toIntervalDay(1);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 265', () => {
    const query = `ALTER TABLE 02691_drop_column_replicated DROP COLUMN col2 SETTINGS alter_sync = 2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 266', () => {
    const query = `alter table 02681_undrop_detach update num = 2 where id = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 267', () => {
    const query = `ALTER TABLE t_sparse_columns_clear CLEAR COLUMN v;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 268', () => {
    const query = `ALTER TABLE t_modify_to_nullable MODIFY COLUMN s Nullable(String);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 269', () => {
    const query = `ALTER TABLE test UPDATE a=0 WHERE id<4;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 270', () => {
    const query = `ALTER TABLE t_sparse_mutations_5 MODIFY COLUMN t Tuple(UInt64, String);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 271', () => {
    const query = `ALTER TABLE t_sparse_mutations_4 MODIFY COLUMN v String;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 272', () => {
    const query = `ALTER TABLE t_sparse_mutations_3 MODIFY COLUMN s Tuple(UInt64, UInt64, String, String, String);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 273', () => {
    const query = `ALTER TABLE t_sparse_mutations_3 MODIFY COLUMN s Tuple(UInt64, UInt64, UInt64, UInt64, String);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 274', () => {
    const query = `ALTER TABLE t_sparse_mutations_3 MODIFY COLUMN s Tuple(Nullable(UInt64), Nullable(UInt64), Nullable(UInt64), Nullable(UInt64), Nullable(String));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 275', () => {
    const query = `ALTER TABLE t_sparse_mutations_2 UPDATE s = '' WHERE id % 13 != 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 276', () => {
    const query = `ALTER TABLE t_sparse_mutations_1 MODIFY COLUMN s Nullable(String);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 277', () => {
    const query = `ALTER TABLE t_sparse_mutations_1 MODIFY COLUMN s String;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 278', () => {
    const query = `ALTER TABLE test UPDATE d = d || toString(sleepEachRow(0.3)) where 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 279', () => {
    const query = `ALTER TABLE test ADD PROJECTION d_order ( SELECT min(c_id) GROUP BY \`d\`);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 280', () => {
    const query = `ALTER TABLE test MATERIALIZE PROJECTION d_order;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 281', () => {
    const query = `ALTER TABLE test DROP PROJECTION d_order SETTINGS mutations_sync = 2; --{serverError BAD_ARGUMENTS} ALTER TABLE test DELETE where d = 'Hello' SETTINGS mutations_sync = 2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 282', () => {
    const query = `ALTER TABLE test DROP PROJECTION d_order SETTINGS mutations_sync = 2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 283', () => {
    const query = `ALTER TABLE test ADD COLUMN x UInt32 default 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 284', () => {
    const query = `ALTER TABLE test UPDATE x = x + 1 where 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 285', () => {
    const query = `ALTER TABLE test DROP COLUMN x SETTINGS mutations_sync = 2; --{serverError BAD_ARGUMENTS} ALTER TABLE test UPDATE x = x + 1 where 1 SETTINGS mutations_sync = 2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 286', () => {
    const query = `ALTER TABLE test DROP COLUMN x SETTINGS mutations_sync = 2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 287', () => {
    const query = `ALTER TABLE test UPDATE d = d || '1' where x = 42;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 288', () => {
    const query = `ALTER TABLE 02581_trips UPDATE description='d' WHERE id IN 02581_set SETTINGS mutations_sync=2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 289', () => {
    const query = `ALTER TABLE 02581_trips UPDATE description='a' WHERE id IN (SELECT (number*10)::UInt32 FROM numbers(10000000)) SETTINGS mutations_sync=2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 290', () => {
    const query = `ALTER TABLE 02581_trips UPDATE description='a' WHERE id IN (SELECT (number*10 + 1)::UInt32 FROM numbers(10000000)) SETTINGS mutations_sync=2, max_rows_in_set=1000;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 291', () => {
    const query = `ALTER TABLE 02581_trips UPDATE description='b' WHERE id::UInt64 IN (SELECT (number*10 + 2)::UInt32 FROM numbers(10000000)) SETTINGS mutations_sync=2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 292', () => {
    const query = `ALTER TABLE 02581_trips UPDATE description='c' WHERE id2 IN (SELECT (number*10 + 3)::UInt32 FROM numbers(10000000)) SETTINGS mutations_sync=2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 293', () => {
    const query = `ALTER TABLE 02581_trips UPDATE description='c' WHERE
(id IN (SELECT (number*10 + 4)::UInt32 FROM numbers(10000000))) OR
(id2 IN (SELECT (number*10 + 4)::UInt32 FROM numbers(10000000)))
SETTINGS mutations_sync=2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 294', () => {
    const query = `ALTER TABLE 02581_trips UPDATE description='c' WHERE
(id::UInt64 IN (SELECT (number*10 + 5)::UInt32 FROM numbers(10000000))) OR
(id2::UInt64 IN (SELECT (number*10 + 5)::UInt32 FROM numbers(10000000)))
SETTINGS mutations_sync=2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 295', () => {
    const query = `ALTER TABLE 02581_trips UPDATE description='c' WHERE
(id::UInt32 IN (SELECT (number*10 + 6)::UInt32 FROM numbers(10000000))) OR
((id2+1)::String IN (SELECT (number*10 + 6)::UInt32 FROM numbers(10000000)))
SETTINGS mutations_sync=2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 296', () => {
    const query = `ALTER TABLE 02581_trips UPDATE description='1' WHERE id IN (SELECT (number*10+1)::UInt32 FROM numbers(10000000)) SETTINGS mutations_sync=2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 297', () => {
    const query = `ALTER TABLE 02581_trips UPDATE description='2' WHERE id IN (SELECT (number*10+2)::UInt32 FROM numbers(10000)) SETTINGS mutations_sync=2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 298', () => {
    const query = `ALTER TABLE 02581_trips UPDATE description='5' WHERE id IN (SELECT (number*10 + 5)::UInt32 FROM numbers(10000000)) SETTINGS mutations_sync=0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 299', () => {
    const query = `ALTER TABLE 02581_trips UPDATE description='6' WHERE id IN (SELECT (number*10 + 6)::UInt32 FROM numbers(10000000)) SETTINGS mutations_sync=0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 300', () => {
    const query = `ALTER TABLE 02581_trips DELETE                 WHERE id IN (SELECT (number*10 + 7)::UInt32 FROM numbers(10000000)) SETTINGS mutations_sync=0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 301', () => {
    const query = `ALTER TABLE 02581_trips UPDATE description='8' WHERE id IN (SELECT (number*10 + 8)::UInt32 FROM numbers(10000000)) SETTINGS mutations_sync=0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 302', () => {
    const query = `ALTER TABLE 02577_keepermap_delete_update DELETE WHERE key >= 4;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 303', () => {
    const query = `ALTER TABLE 02577_keepermap_delete_update UPDATE value = 'Another' WHERE key > 2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 304', () => {
    const query = `ALTER TABLE 02577_keepermap_delete_update UPDATE key = key * 10 WHERE 1 = 1; -- { serverError BAD_ARGUMENTS } SELECT *, _version FROM 02577_keepermap_delete_update ORDER BY key;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 305', () => {
    const query = `ALTER TABLE 02577_keepermap_delete_update UPDATE value2 = value2 * 10 + 2 WHERE value2 < 100;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 306', () => {
    const query = `ALTER TABLE 02577_keepermap_delete_update ON CLUSTER test_shard_localhost UPDATE value2 = value2 * 10 + 2 WHERE value2 < 100; -- { serverError BAD_ARGUMENTS } DROP TABLE IF EXISTS 02577_keepermap_delete_update;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 307', () => {
    const query = `ALTER TABLE t_update_empty_nested ADD COLUMN \`nested.arr2\` Array(UInt64);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 308', () => {
    const query = `ALTER TABLE t_update_empty_nested UPDATE \`nested.arr2\` = \`nested.arr1\` WHERE 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 309', () => {
    const query = `ALTER TABLE data_compact ADD COLUMN root.nested_array Array(Array(UInt8));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 310', () => {
    const query = `ALTER TABLE data_wide ADD COLUMN root.nested_array Array(Array(UInt8));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 311', () => {
    const query = `ALTER TABLE test_02559 ADD COLUMN y UInt8 DEFAULT 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 312', () => {
    const query = `ALTER TABLE test_02559 ADD COLUMN z UInt8 DEFAULT 10;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 313', () => {
    const query = `ALTER TABLE check_system_tables DETACH PARTITION 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 314', () => {
    const query = `ALTER TABLE t_json_attach_partition DETACH PARTITION tuple();`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 315', () => {
    const query = `ALTER TABLE t_json_attach_partition ATTACH PARTITION tuple(); -- { serverError TYPE_MISMATCH } SELECT * FROM t_json_attach_partition FORMAT JSONEachRow;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 316', () => {
    const query = `ALTER TABLE t_json_attach_partition ATTACH PARTITION tuple();`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 317', () => {
    const query = `ALTER TABLE wrong_metadata RENAME COLUMN column1 TO column1_renamed SETTINGS replication_alter_partitions_sync = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 318', () => {
    const query = `ALTER TABLE wrong_metadata RENAME COLUMN column2 to column2_renamed SETTINGS replication_alter_partitions_sync = 2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 319', () => {
    const query = `ALTER TABLE wrong_metadata_wide RENAME COLUMN column1 TO column1_renamed SETTINGS replication_alter_partitions_sync = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 320', () => {
    const query = `ALTER TABLE wrong_metadata_wide RENAME COLUMN column2 to column2_renamed SETTINGS replication_alter_partitions_sync = 2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 321', () => {
    const query = `ALTER TABLE users_02534 ADD INDEX bf_idx(name) TYPE minmax;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 322', () => {
    const query = `ALTER TABLE lwd_test_02521 MODIFY TTL event_time + INTERVAL 1 MONTH SETTINGS mutations_sync = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 323', () => {
    const query = `ALTER TABLE lwd_test_02521 DELETE WHERE id >= 40000 SETTINGS mutations_sync = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 324', () => {
    const query = `ALTER TABLE video_log ADD PROJECTION p_norm
(
SELECT
datetime,
device_id,
bytes,
duration
ORDER BY device_id
);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 325', () => {
    const query = `ALTER TABLE video_log MATERIALIZE PROJECTION p_norm
SETTINGS mutations_sync = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 326', () => {
    const query = `ALTER TABLE video_log ADD PROJECTION p_agg
(
SELECT
toStartOfHour(datetime) AS hour,
domain,
sum(bytes),
avg(duration)
GROUP BY
hour,
domain
);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 327', () => {
    const query = `ALTER TABLE video_log MATERIALIZE PROJECTION p_agg
SETTINGS mutations_sync = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 328', () => {
    const query = `ALTER TABLE test_02504 UPDATE b = 33 WHERE arrayJoin([1, 2]) = a; -- { serverError UNEXPECTED_EXPRESSION} DROP TABLE test_02504;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 329', () => {
    const query = `ALTER TABLE 02500_nested ADD COLUMN z Int32;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 330', () => {
    const query = `ALTER TABLE 02500_nested DROP COLUMN nes; -- { serverError BAD_ARGUMENTS } DROP TABLE 02500_nested;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 331', () => {
    const query = `ALTER TABLE 02500_nested DROP COLUMN nes;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 332', () => {
    const query = `ALTER TABLE t_source_part_is_intact update u = 0 where u != 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 333', () => {
    const query = `ALTER TABLE t_source_part_is_intact update u = 1 WHERE 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 334', () => {
    const query = `ALTER TABLE wikistat1 DELETE where time = toDateTime('2022-12-20 00:00:00') SETTINGS mutations_sync = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 335', () => {
    const query = `ALTER TABLE eligible_test ADD COLUMN b String SETTINGS use_query_cache = true;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 336', () => {
    const query = `ALTER TABLE test MODIFY SETTING clean_deleted_rows='Never';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 337', () => {
    const query = `alter table rmt add index idx1 date(ts) TYPE MinMax GRANULARITY 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 338', () => {
    const query = `alter table rmt drop partition id '0';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 339', () => {
    const query = `alter table rmt replace partition id '0' from rmt2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 340', () => {
    const query = `alter table rmt1 move partition id '1' to table rmt2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 341', () => {
    const query = `alter table rmt3 drop part 'all_1_1_0';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 342', () => {
    const query = `alter table rmt1 modify setting fault_probability_before_part_commit=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 343', () => {
    const query = `alter table rmt1 update k = 0 where 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 344', () => {
    const query = `ALTER TABLE 02484_substitute_udf ADD COLUMN id2 UInt64, MODIFY ORDER BY (02484_plusone(id), 02484_plusthree(id2));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 345', () => {
    const query = `ALTER TABLE 02484_substitute_udf MODIFY TTL 02484_plusthreedays(dt);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 346', () => {
    const query = `ALTER TABLE 02483_substitute_udf MODIFY COLUMN number UInt32 DEFAULT 02483_plustwo(id);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 347', () => {
    const query = `ALTER TABLE 02483_substitute_udf DROP COLUMN number;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 348', () => {
    const query = `ALTER TABLE 02483_substitute_udf ADD COLUMN new_number UInt32 DEFAULT 02483_plusthree(id);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 349', () => {
    const query = `ALTER TABLE issue_46128 UPDATE a = b WHERE id= 1 settings mutations_sync=2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 350', () => {
    const query = `ALTER TABLE test_rlp ADD COLUMN c Int32 DEFAULT b+10;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 351', () => {
    const query = `ALTER TABLE testing UPDATE c = c+1, d = d+2 WHERE True SETTINGS mutations_sync=2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 352', () => {
    const query = `ALTER TABLE testing UPDATE d = d-1 WHERE True SETTINGS mutations_sync=2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 353', () => {
    const query = `ALTER TABLE testing UPDATE c = c-1 WHERE True SETTINGS mutations_sync=2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 354', () => {
    const query = `ALTER TABLE testing MODIFY COLUMN c LowCardinality(String) SETTINGS mutations_sync=2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 355', () => {
    const query = `alter table t add projection p_norm (select * order by c1);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 356', () => {
    const query = `alter table t materialize projection p_norm settings mutations_sync = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 357', () => {
    const query = `alter table src detach partition tuple();`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 358', () => {
    const query = `alter table src modify column B Nullable(String);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 359', () => {
    const query = `alter table src attach partition tuple();`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 360', () => {
    const query = `alter table src update C = 'test1' where 1 settings mutations_sync=2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 361', () => {
    const query = `alter table src modify column A LowCardinality(String);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 362', () => {
    const query = `alter table src modify column C LowCardinality(String);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 363', () => {
    const query = `alter table src rename column B to D;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 364', () => {
    const query = `ALTER TABLE mutation_1 UPDATE a = 2 WHERE b = 'xxxxxx' SETTINGS mutations_sync=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 365', () => {
    const query = `ALTER TABLE t1 ADD COLUMN s String;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 366', () => {
    const query = `ALTER TABLE t1 MODIFY COLUMN s Nullable(String);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 367', () => {
    const query = `alter table t1 detach partition 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 368', () => {
    const query = `alter table t1 attach partition 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 369', () => {
    const query = `alter table t_row_exists add column _row_exists int; --{serverError ILLEGAL_COLUMN} alter table t_row_exists rename column b to _row_exists; --{serverError ILLEGAL_COLUMN}
alter table t_row_exists rename column _row_exists to c; --{serverError NOT_FOUND_COLUMN_IN_BLOCK}
alter table t_row_exists drop column _row_exists; --{serverError NOT_FOUND_COLUMN_IN_BLOCK}
alter table t_row_exists drop column unknown_column; --{serverError NOT_FOUND_COLUMN_IN_BLOCK}
drop table t_row_exists;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 370', () => {
    const query = `alter table t_row_exists add column _row_exists int;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 371', () => {
    const query = `alter table t_row_exists drop column _row_exists;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 372', () => {
    const query = `alter table t_row_exists rename column b to _row_exists;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 373', () => {
    const query = `alter table cc detach part 'all_1_1_0';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 374', () => {
    const query = `alter table cc attach part 'all_1_1_0';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 375', () => {
    const query = `alter table rmt1 update n=10 where n=123 settings mutations_sync=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 376', () => {
    const query = `alter table rmt2 drop part 'all_19_19_0';   -- remove 200 insert into rmt2 values (400);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 377', () => {
    const query = `alter table rmt1 update m = 0 where n=0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 378', () => {
    const query = `alter table rmt2 update m = m * 10 where 1 settings mutations_sync=2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 379', () => {
    const query = `alter table mut delete where n = 10;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 380', () => {
    const query = `alter table mut drop column k settings alter_sync=0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 381', () => {
    const query = `alter table mut update n = 2 where n = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 382', () => {
    const query = `alter table tmp update n = sleepEachRow(1) where 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 383', () => {
    const query = `alter table mut modify setting max_number_of_mutations_for_replica=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 384', () => {
    const query = `alter table mut modify setting max_number_of_mutations_for_replica=100;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 385', () => {
    const query = `alter table mt update s = (select toString(groupArray((*,))) from system.zookeeper where path='/') where n=1 settings mutations_sync=2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 386', () => {
    const query = `alter table rmt update n = n * 10 where 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 387', () => {
    const query = `alter table rmt modify column k UInt128;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 388', () => {
    const query = `alter table rmt update n = n + 1 where 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 389', () => {
    const query = `alter table rmt modify column k String;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 390', () => {
    const query = `alter table rmt2 modify column k Nullable(String);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 391', () => {
    const query = `alter table rmt2 update n = n + 1 where 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 392', () => {
    const query = `alter table rmt modify setting old_parts_lifetime=0, max_replicated_mutations_in_queue=100 settings replication_alter_partitions_sync=2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 393', () => {
    const query = `alter table rmt2 update k = 'zero copy' where 1 settings mutations_sync=2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 394', () => {
    const query = `ALTER TABLE mutate_and_zero_copy_replication1 UPDATE a = 2 WHERE 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 395', () => {
    const query = `ALTER TABLE table_two REPLACE PARTITION 0 FROM table_one;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 396', () => {
    const query = `ALTER TABLE 02416_rocksdb DELETE WHERE key >= 4;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 397', () => {
    const query = `ALTER TABLE 02416_rocksdb UPDATE value = 'Another' WHERE key > 2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 398', () => {
    const query = `ALTER TABLE 02416_rocksdb UPDATE key = key * 10 WHERE 1 = 1; -- { serverError BAD_ARGUMENTS } SELECT * FROM 02416_rocksdb ORDER BY key;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 399', () => {
    const query = `ALTER TABLE 02416_rocksdb UPDATE value2 = value2 * 10 + 2 WHERE 1 = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 400', () => {
    const query = `alter table dst1 replace partition id 'all' from src1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 401', () => {
    const query = `alter table dst2 move partition id 'all' to table src2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 402', () => {
    const query = `alter table  mt update n = n + (n not in m) in partition id '1' where 1 settings mutations_sync=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 403', () => {
    const query = `alter table test_02381 modify setting compress_marks=true, compress_primary_key=true;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 404', () => {
    const query = `alter table test_02381_compress modify setting compress_marks=false, compress_primary_key=false;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 405', () => {
    const query = `alter table test_02381_compact modify setting compress_marks = true, compress_primary_key = true;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 406', () => {
    const query = `ALTER TABLE t_nested_modify MODIFY COLUMN \`n.b\` String;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 407', () => {
    const query = `ALTER TABLE t_modify_from_lc_1 MODIFY COLUMN a UInt32;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 408', () => {
    const query = `ALTER TABLE video_log ADD PROJECTION p_norm (
SELECT
datetime,
device_id,
bytes,
duration
ORDER BY device_id
);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 409', () => {
    const query = `ALTER TABLE video_log MATERIALIZE PROJECTION p_norm settings mutations_sync=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 410', () => {
    const query = `ALTER TABLE video_log ADD PROJECTION p_agg (
SELECT
toStartOfHour(datetime) AS hour,
domain,
sum(bytes),
avg(duration)
GROUP BY
hour,
domain
);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 411', () => {
    const query = `ALTER TABLE video_log MATERIALIZE PROJECTION p_agg settings mutations_sync=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 412', () => {
    const query = `ALTER TABLE tab1 ADD INDEX idx1(vec) TYPE vector_similarity('hnsw', 'L2Distance');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 413', () => {
    const query = `ALTER TABLE tab2 ADD INDEX idx2(vec) TYPE vector_similarity(hnsw, L2Distance);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 414', () => {
    const query = `ALTER TABLE tab ADD INDEX idx(vec) TYPE minmax;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 415', () => {
    const query = `ALTER TABLE tab ADD INDEX vec_idx1(vec) TYPE vector_similarity('hnsw', 'cosineDistance');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 416', () => {
    const query = `ALTER TABLE tab ADD INDEX vec_idx2(vec) TYPE vector_similarity('hnsw', 'L2Distance'); -- silly but creating the same index also works for non-vector indexes ... DROP TABLE tab;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 417', () => {
    const query = `ALTER TABLE tab ADD INDEX idx vec TYPE vector_similarity('hnsw', 'L2Distance');  -- { serverError SUPPORT_IS_DISABLED } SET allow_experimental_vector_similarity_index = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 418', () => {
    const query = `ALTER TABLE tab ADD INDEX idx vec TYPE vector_similarity('hnsw', 'L2Distance');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 419', () => {
    const query = `ALTER TABLE tab MATERIALIZE INDEX idx;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 420', () => {
    const query = `ALTER TABLE tab DROP INDEX idx;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 421', () => {
    const query = `ALTER TABLE tab ADD INDEX idx(vec) TYPE vector_similarity('hnsw', 'L2Distance');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 422', () => {
    const query = `ALTER TABLE lwd_test UPDATE value = 'v' WHERE id % 2 == 0 SETTINGS mutations_sync = 2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 423', () => {
    const query = `ALTER TABLE lwd_test DELETE WHERE id % 3 == 0 SETTINGS mutations_sync = 2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 424', () => {
    const query = `ALTER TABLE tab ADD INDEX inv_idx(str) TYPE full_text(0); -- { serverError SUPPORT_IS_DISABLED } DROP TABLE tab;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 425', () => {
    const query = `ALTER TABLE t DETACH PART 'all_1_1_0';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 426', () => {
    const query = `ALTER TABLE t ATTACH PART 'all_1_1_0';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 427', () => {
    const query = `ALTER TABLE tab DROP INDEX text_idx;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 428', () => {
    const query = `ALTER TABLE tab UPDATE str = 'I am not inverted' WHERE 1 SETTINGS mutations_sync=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 429', () => {
    const query = `ALTER TABLE data_02342 ADD COLUMN s String;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 430', () => {
    const query = `ALTER TABLE test MODIFY COLUMN \`abc.1\` String AFTER \`abc\`;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 431', () => {
    const query = `ALTER TABLE test MODIFY COLUMN \`abc.2\` String AFTER \`abc\`;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 432', () => {
    const query = `ALTER TABLE test MODIFY COLUMN \`abc\` String AFTER \`abc.2\`;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 433', () => {
    const query = `ALTER TABLE test MODIFY COLUMN \`abc\` String AFTER \`id\`;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 434', () => {
    const query = `ALTER TABLE test MODIFY COLUMN \`abc\` String AFTER \`abc.1\`;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 435', () => {
    const query = `ALTER TABLE test DROP COLUMN \`abc\`;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 436', () => {
    const query = `alter table t_light MATERIALIZE INDEX i_c SETTINGS mutations_sync=2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 437', () => {
    const query = `alter table t_light update b=-1 where a<3 SETTINGS mutations_sync=2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 438', () => {
    const query = `alter table t_light drop index i_c SETTINGS mutations_sync=2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 439', () => {
    const query = `ALTER TABLE t_large UPDATE b = -2 WHERE a between 1000 and 1005 SETTINGS mutations_sync=2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 440', () => {
    const query = `ALTER TABLE t_large DELETE WHERE a=1 SETTINGS mutations_sync=2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 441', () => {
    const query = `ALTER TABLE t_proj ADD PROJECTION p_1 (SELECT avg(a), avg(b), count()) SETTINGS mutations_sync=2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 442', () => {
    const query = `ALTER TABLE ipv4_test MODIFY COLUMN value IPv4 DEFAULT '';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 443', () => {
    const query = `ALTER TABLE ipv6_test MODIFY COLUMN value IPv6 DEFAULT '';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 444', () => {
    const query = `ALTER TABLE null_before ALTER COLUMN id TYPE INT NULL; -- { clientError SYNTAX_ERROR } select 'modify column, NULL modifier is not allowed';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 445', () => {
    const query = `ALTER TABLE null_before MODIFY COLUMN id NULL DEFAULT 1; -- { clientError SYNTAX_ERROR } DROP TABLE IF EXISTS null_before SYNC;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 446', () => {
    const query = `ALTER TABLE t_ttl_non_deterministic MODIFY TTL now() + toIntervalMonth(1); -- {serverError BAD_ARGUMENTS} DROP TABLE t_ttl_non_deterministic;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 447', () => {
    const query = `ALTER TABLE t_ttl_non_deterministic MODIFY COLUMN B Int64 TTL now() + toIntervalMonth(1); -- {serverError BAD_ARGUMENTS} DROP TABLE t_ttl_non_deterministic;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 448', () => {
    const query = `ALTER TABLE t_vertical_merges ADD COLUMN c String;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 449', () => {
    const query = `ALTER TABLE t_vertical_merges CLEAR COLUMN b;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 450', () => {
    const query = `ALTER TABLE replace_partition_dest1 REPLACE PARTITION 1 FROM replace_partition_source;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 451', () => {
    const query = `ALTER TABLE replace_partition_dest2 REPLACE PARTITION 1 FROM replace_partition_source;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 452', () => {
    const query = `alter table per_table_ttl_02265 modify TTL date + interval 1 month;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 453', () => {
    const query = `alter table per_table_ttl_02265 modify TTL date + interval 2 month;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 454', () => {
    const query = `alter table per_table_ttl_02265 modify TTL date + interval 2 month group by key set value = argMax(value, date);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 455', () => {
    const query = `alter table per_table_ttl_02265 modify TTL date + interval 2 month recompress codec(ZSTD(17));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 456', () => {
    const query = `ALTER TABLE most_ordinary_mt RESET SETTING ttl; --{serverError BAD_ARGUMENTS} ALTER TABLE most_ordinary_mt RESET SETTING allow_remote_fs_zero_copy_replication, xxx;  --{serverError BAD_ARGUMENTS}
DROP TABLE IF EXISTS most_ordinary_mt;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 457', () => {
    const query = `ALTER TABLE alter_enum_array MODIFY COLUMN Value  Array(Enum8('Option1'=1, 'Option2'=2, 'Option3'=3)) SETTINGS mutations_sync=2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 458', () => {
    const query = `ALTER TABLE t_1 ADD COLUMN foo String DEFAULT 'foo';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 459', () => {
    const query = `ALTER TABLE mergeTree_02184 MODIFY COLUMN name String TTL dt + INTERVAL 1 MONTH;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 460', () => {
    const query = `ALTER TABLE distributed_02184 MODIFY COLUMN name String TTL dt + INTERVAL 1 MONTH; -- { serverError BAD_ARGUMENTS } DETACH TABLE distributed_02184;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 461', () => {
    const query = `ALTER TABLE buffer_02184 MODIFY COLUMN name String TTL dt + INTERVAL 1 MONTH; -- { serverError BAD_ARGUMENTS } DETACH TABLE buffer_02184;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 462', () => {
    const query = `ALTER TABLE merge_02184 MODIFY COLUMN name String TTL dt + INTERVAL 1 MONTH; -- { serverError BAD_ARGUMENTS } DETACH TABLE merge_02184;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 463', () => {
    const query = `ALTER TABLE null_02184 MODIFY COLUMN dummy Int TTL now() + INTERVAL 1 MONTH; -- { serverError BAD_ARGUMENTS } DETACH TABLE null_02184;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 464', () => {
    const query = `ALTER TABLE file_02184 MODIFY COLUMN name String TTL dt + INTERVAL 1 MONTH; -- { serverError BAD_ARGUMENTS } DETACH TABLE file_02184;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 465', () => {
    const query = `ALTER TABLE memory_02184 MODIFY COLUMN name String TTL dt + INTERVAL 1 MONTH; -- { serverError BAD_ARGUMENTS } DETACH TABLE memory_02184;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 466', () => {
    const query = `ALTER TABLE log_02184 MODIFY COLUMN name String TTL dt + INTERVAL 1 MONTH; -- { serverError BAD_ARGUMENTS } DETACH TABLE log_02184;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 467', () => {
    const query = `ALTER TABLE ting_log_02184 MODIFY COLUMN name String TTL dt + INTERVAL 1 MONTH; -- { serverError BAD_ARGUMENTS } DETACH TABLE ting_log_02184;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 468', () => {
    const query = `ALTER TABLE stripe_log_02184 MODIFY COLUMN name String TTL dt + INTERVAL 1 MONTH; -- { serverError BAD_ARGUMENTS } DETACH TABLE stripe_log_02184;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 469', () => {
    const query = `ALTER TABLE t_sparse_detach MODIFY SETTING vertical_merge_algorithm_min_rows_to_activate = 1,
vertical_merge_algorithm_min_columns_to_activate = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 470', () => {
    const query = `ALTER TABLE nested_test ADD COLUMN \`nest.col3\` Array(LowCardinality(String));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 471', () => {
    const query = `ALTER TABLE 02155_test_dictionary COMMENT COLUMN value 'value_column'; --{serverError NOT_IMPLEMENTED} ALTER TABLE 02155_test_dictionary MODIFY COMMENT '02155_test_dictionary_comment_0';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 472', () => {
    const query = `ALTER TABLE 02155_test_dictionary MODIFY COMMENT '02155_test_dictionary_comment_1';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 473', () => {
    const query = `ALTER TABLE 02155_test_dictionary_view COMMENT COLUMN value 'value_column'; --{serverError NOT_IMPLEMENTED} ALTER TABLE 02155_test_dictionary_view MODIFY COMMENT '02155_test_dictionary_view_comment_0';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 474', () => {
    const query = `alter table a8x update number=0 WHERE number=-3;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 475', () => {
    const query = `ALTER TABLE t_index_non_materialized ADD INDEX ind_set (a) TYPE set(1) GRANULARITY 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 476', () => {
    const query = `ALTER TABLE t_index_non_materialized ADD INDEX ind_minmax (a) TYPE minmax() GRANULARITY 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 477', () => {
    const query = `ALTER TABLE t_materialize_column ADD COLUMN s LowCardinality(String) DEFAULT toString(i);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 478', () => {
    const query = `ALTER TABLE t_materialize_column MATERIALIZE COLUMN s SETTINGS mutations_sync = 2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 479', () => {
    const query = `ALTER TABLE t_materialize_column ADD INDEX s_bf (s) TYPE bloom_filter(0.01) GRANULARITY 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 480', () => {
    const query = `ALTER TABLE t_materialize_column MATERIALIZE INDEX s_bf SETTINGS mutations_sync = 2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 481', () => {
    const query = `alter table ttl_test_02129 add column c Int64 settings mutations_sync=2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 482', () => {
    const query = `alter table  ttl_test_02129 modify TTL (d + INTERVAL 1 MONTH) DELETE WHERE c=1 settings mutations_sync=2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 483', () => {
    const query = `ALTER TABLE alter_column_02126 ALTER COLUMN x TYPE Float32;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 484', () => {
    const query = `ALTER TABLE alter_column_02126 ALTER COLUMN x TYPE Float64, MODIFY COLUMN y Float32;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 485', () => {
    const query = `ALTER TABLE t MODIFY COMMENT 'MergeTree Table';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 486', () => {
    const query = `ALTER TABLE t_merge MODIFY COMMENT 'Merge Table';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 487', () => {
    const query = `ALTER TABLE foo UPDATE x = 1 WHERE x = (SELECT x from foo WHERE x = 4);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 488', () => {
    const query = `ALTER TABLE foo UPDATE x = 1 WHERE x IN (SELECT x FROM foo WHERE x != 0);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 489', () => {
    const query = `ALTER TABLE bar UPDATE x = 1 WHERE x = (SELECT x from bar WHERE x = 4);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 490', () => {
    const query = `ALTER TABLE bar UPDATE x = 1 WHERE x IN (SELECT x FROM bar WHERE x != 0);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 491', () => {
    const query = `ALTER TABLE t_remove_sample_by REMOVE SAMPLE BY;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 492', () => {
    const query = `ALTER TABLE t_remove_sample_by REMOVE SAMPLE BY; -- { serverError BAD_ARGUMENTS } SELECT * FROM t_remove_sample_by SAMPLE 1 / 10; -- { serverError SAMPLING_NOT_SUPPORTED }
DROP TABLE t_remove_sample_by;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 493', () => {
    const query = `ALTER TABLE t_remove_sample_by REMOVE SAMPLE BY; -- { serverError BAD_ARGUMENTS } DROP TABLE t_remove_sample_by;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 494', () => {
    const query = `ALTER TABLE t_remove_sample_by RESET SETTING check_sample_column_is_correct;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 495', () => {
    const query = `ALTER TABLE partslost_0 ADD INDEX idx x TYPE tokenbf_v1(285000, 3, 12345) GRANULARITY 3;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 496', () => {
    const query = `ALTER TABLE partslost_0 MATERIALIZE INDEX idx;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 497', () => {
    const query = `ALTER TABLE partslost_0 DROP INDEX idx;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 498', () => {
    const query = `ALTER TABLE alter_table MODIFY COLUMN \`b\` DateTime DEFAULT now(([NULL, NULL, NULL, [-2147483648], [NULL, NULL, NULL, NULL, NULL, NULL, NULL]] AND (1048576 AND NULL) AND (NULL AND 1048575 AND NULL AND -2147483649) AND NULL) IN (test_01103.t1_distr.id)); --{serverError UNKNOWN_IDENTIFIER}
SELECT 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 499', () => {
    const query = `ALTER TABLE test_table DROP INDEX value_index;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 500', () => {
    const query = `ALTER TABLE test_table ADD INDEX value_index value TYPE minmax GRANULARITY 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 501', () => {
    const query = `ALTER TABLE test_table MATERIALIZE INDEX value_index SETTINGS mutations_sync=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 502', () => {
    const query = `ALTER TABLE t1_local ON CLUSTER test_shard_localhost REPLACE PARTITION 'partition1' FROM  t2_local;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 503', () => {
    const query = `ALTER TABLE t1_local ON CLUSTER test_shard_localhost MOVE PARTITION 'partition2' TO TABLE t2_local;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 504', () => {
    const query = `ALTER TABLE test_nested ADD COLUMN \`with_dot.bool\` UInt8;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 505', () => {
    const query = `alter table enum_alter_issue detach partition id 'all';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 506', () => {
    const query = `alter table enum_alter_issue modify column a Enum8('one' = 1, 'two' = 2, 'three' = 3);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 507', () => {
    const query = `alter table enum_alter_issue attach partition id 'all';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 508', () => {
    const query = `ALTER TABLE tmp MATERIALIZE COLUMN x; -- { serverError BAD_ARGUMENTS } ALTER TABLE tmp ADD COLUMN s String DEFAULT toString(x);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 509', () => {
    const query = `ALTER TABLE tmp MODIFY COLUMN s String DEFAULT toString(x+1);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 510', () => {
    const query = `ALTER TABLE tmp MATERIALIZE COLUMN s;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 511', () => {
    const query = `ALTER TABLE tmp MODIFY COLUMN s String DEFAULT toString(x+2);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 512', () => {
    const query = `ALTER TABLE tmp CLEAR COLUMN s; -- Need to clear because MATERIALIZE COLUMN won't override past values;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 513', () => {
    const query = `ALTER TABLE tmp MODIFY COLUMN s String DEFAULT toString(x+3);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 514', () => {
    const query = `ALTER TABLE tmp DROP COLUMN s;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 515', () => {
    const query = `ALTER TABLE tmp ADD COLUMN s String MATERIALIZED toString(x);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 516', () => {
    const query = `ALTER TABLE tmp MODIFY COLUMN s String MATERIALIZED toString(x+1);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 517', () => {
    const query = `ALTER TABLE tmp MODIFY COLUMN s String MATERIALIZED toString(x+2);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 518', () => {
    const query = `ALTER TABLE tmp MODIFY COLUMN s String MATERIALIZED toString(x+3);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 519', () => {
    const query = `ALTER TABLE t02006 on cluster test_shard_localhost ADD COLUMN IF NOT EXISTS f UInt64 format Null;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 520', () => {
    const query = `ALTER TABLE rep_data MATERIALIZE INDEX idx IN PARTITION ID 'NO_SUCH_PART'; -- { serverError INVALID_PARTITION_VALUE } ALTER TABLE rep_data MATERIALIZE INDEX idx IN PARTITION ID '1';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 521', () => {
    const query = `ALTER TABLE rep_data MATERIALIZE INDEX idx IN PARTITION ID '2';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 522', () => {
    const query = `ALTER TABLE data MATERIALIZE INDEX idx IN PARTITION ID 'NO_SUCH_PART'; -- { serverError INVALID_PARTITION_VALUE } ALTER TABLE data MATERIALIZE INDEX idx IN PARTITION ID '1';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 523', () => {
    const query = `ALTER TABLE data MATERIALIZE INDEX idx IN PARTITION ID '2';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 524', () => {
    const query = `ALTER TABLE test ADD COLUMN s1 String;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 525', () => {
    const query = `ALTER TABLE test ADD COLUMN s2 String DEFAULT s1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 526', () => {
    const query = `ALTER TABLE alter_index_test ADD INDEX index_b b type minmax granularity 1 FIRST;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 527', () => {
    const query = `ALTER TABLE alter_index_test ADD INDEX index_c c type set(0) granularity 2 AFTER index_b;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 528', () => {
    const query = `ALTER TABLE alter_index_test ADD INDEX index_d d type set(0) granularity 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 529', () => {
    const query = `ALTER TABLE broken_partition DROP PARTITION ID '20210325_0_13241_6_12747'; --{serverError INVALID_PARTITION_VALUE} ALTER TABLE broken_partition DROP PARTITION ID '20210325_0_13241_6_12747'; --{serverError INVALID_PARTITION_VALUE}
DROP TABLE IF EXISTS broken_partition;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 530', () => {
    const query = `ALTER TABLE old_partition_key DROP PARTITION ID '20210325_0_13241_6_12747'; --{serverError INVALID_PARTITION_VALUE} ALTER TABLE old_partition_key DROP PARTITION ID '202103';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 531', () => {
    const query = `ALTER TABLE t_ttl_modify_column modify column TTLDays Int16 DEFAULT CAST(365, 'Int16');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 532', () => {
    const query = `ALTER TABLE t_ttl_modify_column MODIFY COLUMN InsertionDateTime Date;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 533', () => {
    const query = `ALTER TABLE t_ttl_modify_column MODIFY COLUMN InsertionDateTime Float32; -- { serverError ILLEGAL_TYPE_OF_ARGUMENT } DROP TABLE IF EXISTS t_ttl_modify_column;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 534', () => {
    const query = `ALTER TABLE test_alter_attach_01901D ATTACH PARTITION '2020-01-01' FROM test_alter_attach_01901S;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 535', () => {
    const query = `ALTER TABLE test_alter_attach_01901D REPLACE PARTITION '2020-01-01' FROM test_alter_attach_01901S;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 536', () => {
    const query = `ALTER TABLE mem_test UPDATE a = 0 WHERE b = 99;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 537', () => {
    const query = `ALTER TABLE \`01851_merge_tree\` DROP COLUMN n3;  -- { serverError ALTER_OF_COLUMN_IS_FORBIDDEN }
ALTER TABLE \`01851_merge_tree\`
DROP COLUMN n2;  -- { serverError ALTER_OF_COLUMN_IS_FORBIDDEN }
ALTER TABLE \`01851_merge_tree\`
DROP COLUMN n4;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 538', () => {
    const query = `ALTER TABLE \`01851_merge_tree\` CLEAR COLUMN n2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 539', () => {
    const query = `ALTER TABLE alter_test MODIFY COLUMN \`b\` DateTime DEFAULT now();`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 540', () => {
    const query = `ALTER TABLE alter_test MODIFY COLUMN \`b\` DEFAULT now() + 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 541', () => {
    const query = `ALTER TABLE test ADD COLUMN \`xx\` UInt32 MATERIALIZED arr[1];`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 542', () => {
    const query = `ALTER TABLE t_json_mutations DELETE WHERE id = 2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 543', () => {
    const query = `ALTER TABLE t_json_mutations DROP COLUMN s, DROP COLUMN obj, ADD COLUMN t String DEFAULT 'foo';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 544', () => {
    const query = `ALTER TABLE join_table_mutation DELETE WHERE id = 10;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 545', () => {
    const query = `ALTER TABLE join_table_mutation DELETE WHERE id % 2 = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 546', () => {
    const query = `ALTER TABLE join_table_mutation UPDATE name = 'some' WHERE 1; -- {serverError NOT_IMPLEMENTED} SELECT count() FROM join_table_mutation;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 547', () => {
    const query = `ALTER TABLE join_table_mutation DELETE WHERE name IN ('1', '2', '3', '4');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 548', () => {
    const query = `ALTER TABLE join_table_mutation DELETE WHERE 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 549', () => {
    const query = `ALTER TABLE tmp_table_01818 MOVE PARTITION 'ClickHouse' TO TABLE main_table_01818;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 550', () => {
    const query = `alter table test_wide_nested update \`info.id\` = [100,200] where id = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 551', () => {
    const query = `alter table test_wide_nested update \`info.id\` = [100,200,300], \`info.age\` = [10,20,30], \`info.name\` = ['a','b','c'] where id = 2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 552', () => {
    const query = `alter table test_wide_nested update \`info.id\` = [100,200,300], \`info.age\` = \`info.id\`, \`info.name\` = ['a','b','c'] where id = 2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 553', () => {
    const query = `alter table test_wide_nested update \`info.id\` = [100,200], \`info.age\`=[68,72] where id = 3;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 554', () => {
    const query = `alter table test_wide_nested update \`info.id\` = \`info.age\` where id = 3;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 555', () => {
    const query = `alter table test_wide_nested update \`info.id\` = [100,200], \`info.age\` = [10,20,30], \`info.name\` = ['a','b','c']  where id = 0; -- { serverError UNFINISHED } kill mutation where table = 'test_wide_nested' and database = currentDatabase() format Null;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 556', () => {
    const query = `ALTER TABLE test_wide_nested ADD COLUMN \`info2.id\` Array(Int);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 557', () => {
    const query = `ALTER TABLE test_wide_nested ADD COLUMN \`info2.name\` Array(String);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 558', () => {
    const query = `ALTER table test_wide_nested update \`info2.id\` = \`info.id\`, \`info2.name\` = \`info.name\` where 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 559', () => {
    const query = `alter table test_wide_nested update \`info.id\` = [100,200,300], \`info.age\` = [10,20,30] where id = 1; -- { serverError UNFINISHED } kill mutation where table = 'test_wide_nested' and database = currentDatabase() format Null;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 560', () => {
    const query = `ALTER TABLE test_wide_not_nested UPDATE \`info.name\` = 'bb' WHERE id = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 561', () => {
    const query = `ALTER TABLE merge_tree_deduplication DROP PART '77_9_9_0'; -- some old part INSERT INTO merge_tree_deduplication (key, value) VALUES (10, '10');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 562', () => {
    const query = `ALTER TABLE merge_tree_deduplication DROP PART '77_13_13_0'; -- fresh part INSERT INTO merge_tree_deduplication (key, value) VALUES (12, '12');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 563', () => {
    const query = `ALTER TABLE merge_tree_deduplication DROP PARTITION 77;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 564', () => {
    const query = `ALTER TABLE merge_tree_deduplication MODIFY SETTING non_replicated_deduplication_window = 2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 565', () => {
    const query = `ALTER TABLE merge_tree_deduplication MODIFY SETTING non_replicated_deduplication_window = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 566', () => {
    const query = `ALTER TABLE merge_tree_deduplication MODIFY SETTING non_replicated_deduplication_window = 3;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 567', () => {
    const query = `ALTER TABLE merge_tree_no_deduplication MODIFY SETTING non_replicated_deduplication_window = 3;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 568', () => {
    const query = `ALTER TABLE t_sparse_alter DROP COLUMN s, RENAME COLUMN u TO t;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 569', () => {
    const query = `ALTER TABLE t_sparse_alter MODIFY COLUMN t UInt16;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 570', () => {
    const query = `ALTER TABLE t_src MOVE PARTITION 1 TO TABLE t_dst;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 571', () => {
    const query = `ALTER TABLE test_alter_decimal MODIFY COLUMN d Decimal(18, 8);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 572', () => {
    const query = `ALTER TABLE mmm DELETE WHERE a IN (SELECT a FROM mmm) SETTINGS mutations_sync=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 573', () => {
    const query = `ALTER TABLE report MODIFY COLUMN product Enum8('IU' = 1, 'WS' = 2, 'PS' = 3);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 574', () => {
    const query = `ALTER TABLE replicated_report MODIFY COLUMN product Enum8('IU' = 1, 'WS' = 2, 'PS' = 3) SETTINGS alter_sync=2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 575', () => {
    const query = `ALTER TABLE \`01746_merge_tree\` DROP COLUMN n3;  -- { serverError ALTER_OF_COLUMN_IS_FORBIDDEN }
ALTER TABLE \`01746_merge_tree\`
DROP COLUMN n2;  -- { serverError ALTER_OF_COLUMN_IS_FORBIDDEN }
ALTER TABLE \`01746_merge_tree\`
DROP COLUMN n4;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 576', () => {
    const query = `ALTER TABLE \`01746_null\` DROP COLUMN n1; -- { serverError ALTER_OF_COLUMN_IS_FORBIDDEN }
ALTER TABLE \`01746_null\`
DROP COLUMN n2; -- { serverError ALTER_OF_COLUMN_IS_FORBIDDEN }
ALTER TABLE \`01746_null\`
DROP COLUMN n3;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 577', () => {
    const query = `ALTER TABLE \`01746_dist\` DROP COLUMN n1; -- { serverError ALTER_OF_COLUMN_IS_FORBIDDEN }
ALTER TABLE \`01746_dist\`
DROP COLUMN n2; -- { serverError ALTER_OF_COLUMN_IS_FORBIDDEN }
ALTER TABLE \`01746_dist\`
DROP COLUMN n3;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 578', () => {
    const query = `ALTER TABLE \`01746_merge\` DROP COLUMN n1; -- { serverError ALTER_OF_COLUMN_IS_FORBIDDEN }
ALTER TABLE \`01746_merge\`
DROP COLUMN n2; -- { serverError ALTER_OF_COLUMN_IS_FORBIDDEN }
ALTER TABLE \`01746_merge\`
DROP COLUMN n3;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 579', () => {
    const query = `ALTER TABLE \`01746_buffer\` DROP COLUMN n1; -- { serverError ALTER_OF_COLUMN_IS_FORBIDDEN }
ALTER TABLE \`01746_buffer\`
DROP COLUMN n2; -- { serverError ALTER_OF_COLUMN_IS_FORBIDDEN }
ALTER TABLE \`01746_buffer\`
DROP COLUMN n3;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 580', () => {
    const query = `ALTER TABLE test_view DELETE WHERE pk = 2; --{serverError NOT_IMPLEMENTED} SELECT * FROM test_view ORDER BY f1, f2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 581', () => {
    const query = `ALTER TABLE bad_conversions MODIFY COLUMN a Array(String); -- { serverError TYPE_MISMATCH } SHOW CREATE TABLE bad_conversions;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 582', () => {
    const query = `ALTER TABLE bad_conversions_2 MODIFY COLUMN e Enum('bar' = 1, 'foo' = 2); -- { serverError CANNOT_CONVERT_TYPE } SHOW CREATE TABLE bad_conversions_2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 583', () => {
    const query = `ALTER TABLE signed_table DROP COLUMN s; --{serverError ALTER_OF_COLUMN_IS_FORBIDDEN} ALTER TABLE signed_table RENAME COLUMN s TO s1; --{serverError ALTER_OF_COLUMN_IS_FORBIDDEN}
DROP TABLE IF EXISTS signed_table;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 584', () => {
    const query = `ALTER TABLE alter_drop_version DROP COLUMN ver; --{serverError ALTER_OF_COLUMN_IS_FORBIDDEN} ALTER TABLE alter_drop_version RENAME COLUMN ver TO rev; --{serverError ALTER_OF_COLUMN_IS_FORBIDDEN}
DETACH TABLE alter_drop_version;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 585', () => {
    const query = `ALTER TABLE old_school_table MODIFY SETTING vertical_merge_algorithm_min_rows_to_activate = 10000, vertical_merge_algorithm_min_columns_to_activate = 10000;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 586', () => {
    const query = `alter table data_proj_order_by_incomp add projection tSort (select * order by t);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 587', () => {
    const query = `ALTER TABLE sales ADD PROJECTION test (SELECT toInt64(COUNT(*)) GROUP BY PRODUCT_ID, DATE_SOLD);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 588', () => {
    const query = `alter table t add projection p (select uniqHLL12(x));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 589', () => {
    const query = `alter table t rename column j to k;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 590', () => {
    const query = `alter table t add projection x (select * order by codectest);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 591', () => {
    const query = `alter table z add projection pp (select id, sum(c) group by id);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 592', () => {
    const query = `alter table z materialize projection pp settings mutations_sync=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 593', () => {
    const query = `ALTER TABLE t UPDATE value = 0 WHERE (value > 0) AND (created_at >= '2021-12-21') SETTINGS optimize_use_projections = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 594', () => {
    const query = `alter table x add column j int;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 595', () => {
    const query = `alter table x add projection p_agg (select sum(j));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 596', () => {
    const query = `alter table x materialize projection p_agg settings mutations_sync = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 597', () => {
    const query = `alter table tp_1 add projection pp (select x, count() group by x);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 598', () => {
    const query = `alter table tp_1 materialize projection pp;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 599', () => {
    const query = `alter table tp_1 clear projection pp;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 600', () => {
    const query = `alter table tp_1 drop projection pp;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 601', () => {
    const query = `alter table tp drop projection pp; -- { serverError NO_SUCH_PROJECTION_IN_TABLE } alter table tp drop projection if exists pp;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 602', () => {
    const query = `alter table tp drop projection if exists p;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 603', () => {
    const query = `alter table tp drop projection p;  -- { serverError NO_SUCH_PROJECTION_IN_TABLE } alter table tp drop projection if exists p;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 604', () => {
    const query = `alter table t detach partition 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 605', () => {
    const query = `alter table t attach partition 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 606', () => {
    const query = `alter table data_order_by_proj_incomp add projection tSort (select * order by t);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 607', () => {
    const query = `ALTER TABLE t2 ADD PROJECTION proj (SELECT id2 ORDER BY id2);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 608', () => {
    const query = `ALTER TABLE test ADD PROJECTION mtlog_proj_source_reference (SELECT * ORDER BY substring(ns, 1, 5));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 609', () => {
    const query = `alter table t add projection x (select * order by j);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 610', () => {
    const query = `ALTER TABLE test MODIFY COLUMN type Enum('x', 'y');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 611', () => {
    const query = `alter table mixed_final_mark attach partition 1 from has_final_mark;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 612', () => {
    const query = `alter table tp add projection uniq_city_proj ( select type, uniq(cityHash64(device)), sum(cnt) group by type );`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 613', () => {
    const query = `alter table tp materialize projection uniq_city_proj settings mutations_sync = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 614', () => {
    const query = `alter table x add index nn LOG2(i) type minmax granularity 1, add projection p2 (select MIN(i));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 615', () => {
    const query = `ALTER TABLE sqllt.table ADD COLUMN new_col UInt32 DEFAULT 123456789;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 616', () => {
    const query = `ALTER TABLE sqllt.table COMMENT COLUMN new_col 'dummy column with a comment';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 617', () => {
    const query = `ALTER TABLE sqllt.table CLEAR COLUMN new_col;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 618', () => {
    const query = `ALTER TABLE sqllt.table MODIFY COLUMN new_col DateTime DEFAULT '2015-05-18 07:40:13';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 619', () => {
    const query = `ALTER TABLE sqllt.table MODIFY COLUMN new_col REMOVE COMMENT;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 620', () => {
    const query = `ALTER TABLE sqllt.table RENAME COLUMN new_col TO the_new_col;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 621', () => {
    const query = `ALTER TABLE sqllt.table DROP COLUMN the_new_col;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 622', () => {
    const query = `ALTER TABLE sqllt.table UPDATE i = i + 1 WHERE 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 623', () => {
    const query = `ALTER TABLE sqllt.table DELETE WHERE i > 65535;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 624', () => {
    const query = `ALTER TABLE agg_table UPDATE agg_simple = 5 WHERE time BETWEEN toDateTime('2020-08-01 00:00:00') AND toDateTime('2020-12-01 00:00:00') SETTINGS mutations_sync = 2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 625', () => {
    const query = `ALTER TABLE agg_table UPDATE agg = (agg.1, agg.2) WHERE time BETWEEN toDateTime('2020-08-01 00:00:00') AND toDateTime('2020-12-01 00:00:00') SETTINGS mutations_sync = 2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 626', () => {
    const query = `ALTER TABLE agg_table UPDATE agg = (agg.1, arrayMap(x -> toUInt64(x / 2), agg.2)) WHERE time BETWEEN toDateTime('2020-08-01 00:00:00') AND toDateTime('2020-12-01 00:00:00') SETTINGS mutations_sync = 2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 627', () => {
    const query = `alter table tp_1 detach partition '0';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 628', () => {
    const query = `alter table tp_1 attach partition '0';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 629', () => {
    const query = `ALTER TABLE ttl_old_syntax MODIFY TTL toDate('2020-01-01'); -- { serverError BAD_ARGUMENTS } DROP TABLE ttl_old_syntax;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 630', () => {
    const query = `ALTER TABLE restore_01640 FETCH PARTITION tuple(toYYYYMM(toDate('2021-01-01'))) FROM '/clickhouse/{database}/{shard}/tables/test_01640' SETTINGS insert_keeper_fault_injection_probability=0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 631', () => {
    const query = `ALTER TABLE restore_01640 ATTACH PARTITION tuple(toYYYYMM(toDate('2021-01-01'))) SETTINGS insert_keeper_fault_injection_probability=0;;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 632', () => {
    const query = `ALTER TABLE partitioned_table DROP PART '3_1_1_0';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 633', () => {
    const query = `ALTER TABLE mutations_and_escaping_1648 UPDATE e = CAST('foo', 'Enum8(\\'foo\\' = 1, \\'bar\\' = 2)') WHERE d='2018-01-02' and sleepEachRow(1) = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 634', () => {
    const query = `ALTER TABLE mutations_and_escaping_1648 UPDATE e = CAST('foo', 'Enum8(\\'foo\\' = 1, \\'bar\\' = 2)') WHERE d='2018-01-02' SETTINGS mutations_sync = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 635', () => {
    const query = `ALTER TABLE simple_agf_aggregating_mt DELETE WHERE (a % 3) = 0
SETTINGS mutations_sync = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 636', () => {
    const query = `ALTER TABLE simple_agf_summing_mt DELETE WHERE (a % 3) = 0
SETTINGS mutations_sync = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 637', () => {
    const query = `ALTER TABLE table_with_lc_key MODIFY COLUMN lc_key String;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 638', () => {
    const query = `ALTER TABLE table_with_lc_key MODIFY COLUMN enum_key Enum('x' = 2, 'y' = 1, 'z' = 3);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 639', () => {
    const query = `ALTER TABLE table_with_lc_key MODIFY COLUMN enum_key Enum16('x' = 2, 'y' = 1, 'z' = 3); --{serverError ALTER_OF_COLUMN_IS_FORBIDDEN} SHOW CREATE TABLE table_with_lc_key;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 640', () => {
    const query = `ALTER TABLE table_with_lc_key MODIFY COLUMN enum_key Int8;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 641', () => {
    const query = `ALTER TABLE table_with_string_key MODIFY COLUMN str_key LowCardinality(String);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 642', () => {
    const query = `ALTER TABLE table_with_string_key MODIFY COLUMN int_key Enum8('y' = 1, 'x' = 2); --{serverError ALTER_OF_COLUMN_IS_FORBIDDEN} DROP TABLE IF EXISTS table_with_string_key;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 643', () => {
    const query = `ALTER TABLE wide_to_comp MODIFY setting min_rows_for_wide_part = 10000000;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 644', () => {
    const query = `ALTER USER 'test_01605' SETTINGS PROFILE 'test_01605';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 645', () => {
    const query = `ALTER TABLE table_with_column_ttl MODIFY COLUMN Age REMOVE TTL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 646', () => {
    const query = `ALTER TABLE replicated_mutations_empty_partitions DROP PARTITION '3';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 647', () => {
    const query = `ALTER TABLE replicated_mutations_empty_partitions DROP PARTITION '4';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 648', () => {
    const query = `ALTER TABLE replicated_mutations_empty_partitions DROP PARTITION '5';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 649', () => {
    const query = `ALTER TABLE replicated_mutations_empty_partitions DROP PARTITION '9';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 650', () => {
    const query = `ALTER TABLE replicated_mutations_empty_partitions MODIFY COLUMN value UInt64 SETTINGS replication_alter_partitions_sync=2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 651', () => {
    const query = `ALTER TABLE test_table add column array Array(UInt8) default [1, 2, 3];`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 652', () => {
    const query = `ALTER TABLE test_table add column struct.key Array(UInt8) default [2, 4, 6], add column struct.value Array(UInt8) alias array;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 653', () => {
    const query = `ALTER TABLE t DELETE WHERE id in (select id from t as tmp);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 654', () => {
    const query = `ALTER TABLE merge_tree_pk_sql ADD COLUMN key2 UInt64, MODIFY ORDER BY (key, key2);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 655', () => {
    const query = `ALTER TABLE replicated_merge_tree_pk_sql ADD COLUMN key2 UInt64, MODIFY ORDER BY (key, key2);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 656', () => {
    const query = `ALTER TABLE table_for_alter ADD COLUMN order UInt32, MODIFY ORDER BY (d, order);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 657', () => {
    const query = `ALTER TABLE table_for_alter ADD COLUMN datum UInt32, MODIFY ORDER BY (d, order, datum);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 658', () => {
    const query = `ALTER TABLE table2 MODIFY COLUMN \`Value\` DEFAULT 'some_string'; --{serverError CANNOT_PARSE_TEXT} ALTER TABLE table2 ADD COLUMN \`Value2\` DEFAULT 'some_string'; --{serverError BAD_ARGUMENTS}
DROP TABLE IF EXISTS table2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 659', () => {
    const query = `ALTER TABLE enum_test MODIFY COLUMN e Enum8('IU' = 1, 'WS' = 2, 'PS' = 3);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 660', () => {
    const query = `ALTER TABLE defaults_on_defaults ADD COLUMN \`Arr.C1\` Array(UInt32) DEFAULT emptyArrayUInt32();`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 661', () => {
    const query = `ALTER TABLE defaults_on_defaults ADD COLUMN \`Arr.C2\` Array(UInt32) DEFAULT arrayResize(emptyArrayUInt32(), length(Arr.C1));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 662', () => {
    const query = `ALTER TABLE defaults_on_defaults ADD COLUMN \`Arr.C3\` Array(UInt32) ALIAS arrayResize(emptyArrayUInt32(), length(Arr.C2));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 663', () => {
    const query = `ALTER TABLE defaults_on_defaults ADD COLUMN \`Arr.C4\` Array(UInt32) DEFAULT arrayResize(emptyArrayUInt32(), length(Arr.C3));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 664', () => {
    const query = `ALTER TABLE defaults_on_defaults ADD COLUMN \`ArrLen\` UInt64 DEFAULT length(Arr.C4);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 665', () => {
    const query = `ALTER TABLE table_with_version_replicated_1 MODIFY COLUMN version UInt32 SETTINGS replication_alter_partitions_sync=2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 666', () => {
    const query = `ALTER TABLE table_with_version MODIFY COLUMN version UInt32;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 667', () => {
    const query = `ALTER TABLE table_with_version MODIFY COLUMN version String; --{serverError ALTER_OF_COLUMN_IS_FORBIDDEN} ALTER TABLE table_with_version MODIFY COLUMN version Int64; --{serverError ALTER_OF_COLUMN_IS_FORBIDDEN}
ALTER TABLE table_with_version MODIFY COLUMN version UInt16; --{serverError ALTER_OF_COLUMN_IS_FORBIDDEN}
ALTER TABLE table_with_version MODIFY COLUMN version Float64; --{serverError ALTER_OF_COLUMN_IS_FORBIDDEN}
ALTER TABLE table_with_version MODIFY COLUMN version Date; --{serverError ALTER_OF_COLUMN_IS_FORBIDDEN}
ALTER TABLE table_with_version MODIFY COLUMN version DateTime; --{serverError ALTER_OF_COLUMN_IS_FORBIDDEN}
DROP TABLE IF EXISTS table_with_version;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 668', () => {
    const query = `ALTER TABLE buf_dest ADD COLUMN s String;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 669', () => {
    const query = `ALTER TABLE buf ADD COLUMN s String;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 670', () => {
    const query = `ALTER TABLE columns_with_multiple_streams MODIFY COLUMN field1 Nullable(UInt8);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 671', () => {
    const query = `ALTER TABLE columns_with_multiple_streams MODIFY COLUMN field3 CODEC(Delta, Default);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 672', () => {
    const query = `ALTER TABLE columns_with_multiple_streams_compact MODIFY COLUMN field1 Nullable(UInt8);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 673', () => {
    const query = `ALTER TABLE columns_with_multiple_streams_compact MODIFY COLUMN field3 CODEC(Delta, Default);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 674', () => {
    const query = `ALTER TABLE defaults ADD COLUMN m Int8;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 675', () => {
    const query = `ALTER TABLE defaults DROP COLUMN n;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 676', () => {
    const query = `ALTER TABLE defaults UPDATE n = 100 WHERE s = '1';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 677', () => {
    const query = `ALTER TABLE defaults DELETE WHERE n = 100;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 678', () => {
    const query = `ALTER TABLE test_new_col ADD COLUMN \`csv_col3\` String DEFAULT csv_as_array[3];`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 679', () => {
    const query = `ALTER TABLE default_table MODIFY COLUMN key REMOVE MATERIALIZED; --{serverError BAD_ARGUMENTS} ALTER TABLE default_table MODIFY COLUMN key REMOVE ALIAS; --{serverError BAD_ARGUMENTS}
ALTER TABLE default_table MODIFY COLUMN value1 REMOVE DEFAULT; --{serverError BAD_ARGUMENTS}
ALTER TABLE default_table MODIFY COLUMN value1 REMOVE ALIAS; --{serverError BAD_ARGUMENTS}
ALTER TABLE default_table MODIFY COLUMN value2 REMOVE DEFAULT; --{serverError BAD_ARGUMENTS}
ALTER TABLE default_table MODIFY COLUMN value2 REMOVE MATERIALIZED; --{serverError BAD_ARGUMENTS}
SHOW CREATE TABLE default_table;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 680', () => {
    const query = `ALTER TABLE r_prop_table1 MODIFY COLUMN column_comment REMOVE COMMENT;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 681', () => {
    const query = `ALTER TABLE r_prop_table2 MODIFY COLUMN column_codec REMOVE CODEC;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 682', () => {
    const query = `ALTER TABLE r_prop_table2 MODIFY COLUMN column_default REMOVE DEFAULT;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 683', () => {
    const query = `ALTER TABLE r_prop_table2 MODIFY COLUMN column_ttl REMOVE TTL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 684', () => {
    const query = `ALTER TABLE r_prop_table1 REMOVE TTL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 685', () => {
    const query = `ALTER TABLE prop_table MODIFY COLUMN column_comment REMOVE COMMENT;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 686', () => {
    const query = `ALTER TABLE prop_table MODIFY COLUMN column_codec REMOVE CODEC;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 687', () => {
    const query = `ALTER TABLE prop_table MODIFY COLUMN column_alias REMOVE ALIAS;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 688', () => {
    const query = `ALTER TABLE prop_table MODIFY COLUMN column_materialized REMOVE MATERIALIZED;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 689', () => {
    const query = `ALTER TABLE prop_table MODIFY COLUMN column_default REMOVE DEFAULT;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 690', () => {
    const query = `ALTER TABLE prop_table REMOVE TTL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 691', () => {
    const query = `ALTER TABLE prop_table MODIFY COLUMN column_ttl REMOVE TTL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 692', () => {
    const query = `ALTER TABLE no_prop_table MODIFY COLUMN some_column REMOVE DEFAULT; --{serverError BAD_ARGUMENTS} ALTER TABLE no_prop_table MODIFY COLUMN some_column REMOVE MATERIALIZED; --{serverError BAD_ARGUMENTS}
ALTER TABLE no_prop_table MODIFY COLUMN some_column REMOVE ALIAS; --{serverError BAD_ARGUMENTS}
ALTER TABLE no_prop_table MODIFY COLUMN some_column REMOVE CODEC; --{serverError BAD_ARGUMENTS}
ALTER TABLE no_prop_table MODIFY COLUMN some_column REMOVE COMMENT; --{serverError BAD_ARGUMENTS}
ALTER TABLE no_prop_table MODIFY COLUMN some_column REMOVE TTL; --{serverError BAD_ARGUMENTS}
ALTER TABLE no_prop_table REMOVE TTL; --{serverError BAD_ARGUMENTS}
SHOW CREATE TABLE no_prop_table;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 693', () => {
    const query = `ALTER TABLE r_no_prop_table MODIFY COLUMN some_column REMOVE DEFAULT; --{serverError BAD_ARGUMENTS} ALTER TABLE r_no_prop_table MODIFY COLUMN some_column REMOVE MATERIALIZED; --{serverError BAD_ARGUMENTS}
ALTER TABLE r_no_prop_table MODIFY COLUMN some_column REMOVE ALIAS; --{serverError BAD_ARGUMENTS}
ALTER TABLE r_no_prop_table MODIFY COLUMN some_column REMOVE CODEC; --{serverError BAD_ARGUMENTS}
ALTER TABLE r_no_prop_table MODIFY COLUMN some_column REMOVE COMMENT; --{serverError BAD_ARGUMENTS}
ALTER TABLE r_no_prop_table MODIFY COLUMN some_column REMOVE TTL; --{serverError BAD_ARGUMENTS}
ALTER TABLE r_no_prop_table REMOVE TTL;  --{serverError BAD_ARGUMENTS}
SHOW CREATE TABLE r_no_prop_table;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 694', () => {
    const query = `ALTER TABLE r_no_prop_table MODIFY COLUMN some_column REMOVE ttl;  --{serverError BAD_ARGUMENTS} ALTER TABLE r_no_prop_table remove TTL;  --{serverError BAD_ARGUMENTS}
DROP TABLE IF EXISTS r_no_prop_table;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 695', () => {
    const query = `ALTER TABLE mutation_table UPDATE price = 150 WHERE id = 1 SETTINGS mutations_sync = 2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 696', () => {
    const query = `alter table mutation_table update dt = toDateOrNull('2020-08-02') where name = 'car' SETTINGS mutations_sync = 2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 697', () => {
    const query = `alter table mutation_table update dt = toDateOrNull('2020-08-03') where name = 'car' and dt is null SETTINGS mutations_sync = 2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 698', () => {
    const query = `alter table mutation_table update dt = toDateOrNull('2020-08-04') where name = 'car' or dt is null SETTINGS mutations_sync = 2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 699', () => {
    const query = `alter table mutation_table update dt = Null where name is not null SETTINGS mutations_sync = 2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 700', () => {
    const query = `ALTER TABLE table_for_ttl MODIFY TTL d + INTERVAL 1 YEAR SETTINGS materialize_ttl_after_modify = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 701', () => {
    const query = `ALTER TABLE table_for_ttl MODIFY COLUMN value String TTL d + INTERVAL 1 DAY SETTINGS materialize_ttl_after_modify = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 702', () => {
    const query = `ALTER TABLE recompression_table MODIFY TTL dt + INTERVAL 1 DAY RECOMPRESS CODEC(ZSTD(12)) SETTINGS mutations_sync = 2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 703', () => {
    const query = `ALTER TABLE recompression_table_compact MODIFY TTL dt + INTERVAL 1 MONTH RECOMPRESS CODEC(ZSTD(12)) SETTINGS mutations_sync = 2; -- mutation affect all columns, so codec changes SELECT substring(name, 1, length(name) - 4), default_compression_codec FROM system.parts WHERE table = 'recompression_table_compact' and active = 1 and database = currentDatabase() ORDER BY name;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 704', () => {
    const query = `ALTER TABLE compression_codec_on_alias ADD COLUMN \`c3\` ALIAS c2 CODEC(ZSTD) AFTER c2; -- { serverError BAD_ARGUMENTS } select 'alter table compression_codec_on_alias add column (NOT ALIAS type) with CODEC';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 705', () => {
    const query = `ALTER TABLE compression_codec_on_alias ADD COLUMN c2 UInt64 CODEC(ZSTD) AFTER c1; -- success DROP TABLE IF EXISTS compression_codec_on_alias;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 706', () => {
    const query = `ALTER TABLE table_from_remote ADD COLUMN col UInt8;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 707', () => {
    const query = `ALTER TABLE table_from_numbers ADD COLUMN col UInt8; --{serverError NOT_IMPLEMENTED} SHOW CREATE TABLE table_from_numbers;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 708', () => {
    const query = `ALTER TABLE table_from_select ADD COLUMN col UInt8;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 709', () => {
    const query = `ALTER TABLE tbl ADD COLUMN xi Int64;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 710', () => {
    const query = `ALTER TABLE tbl UPDATE xi = a WHERE 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 711', () => {
    const query = `ALTER TABLE tbl DROP COLUMN a;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 712', () => {
    const query = `ALTER TABLE tbl ADD COLUMN a Int64;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 713', () => {
    const query = `ALTER TABLE tbl UPDATE a = xi WHERE 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 714', () => {
    const query = `ALTER TABLE tbl DROP COLUMN xi;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 715', () => {
    const query = `ALTER TABLE tbl ADD COLUMN xi String;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 716', () => {
    const query = `ALTER TABLE tbl UPDATE xi = b WHERE 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 717', () => {
    const query = `ALTER TABLE tbl DROP COLUMN b;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 718', () => {
    const query = `ALTER TABLE tbl ADD COLUMN b String;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 719', () => {
    const query = `ALTER TABLE tbl UPDATE b = xi WHERE 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 720', () => {
    const query = `ALTER TABLE tbl ADD COLUMN xi UInt8;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 721', () => {
    const query = `ALTER TABLE tbl UPDATE xi = c WHERE 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 722', () => {
    const query = `ALTER TABLE tbl DROP COLUMN c;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 723', () => {
    const query = `ALTER TABLE tbl ADD COLUMN c UInt8;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 724', () => {
    const query = `ALTER TABLE tbl UPDATE c = xi WHERE 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 725', () => {
    const query = `ALTER TABLE tbl ADD COLUMN xi Float64;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 726', () => {
    const query = `ALTER TABLE tbl UPDATE xi = d WHERE 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 727', () => {
    const query = `ALTER TABLE tbl DROP COLUMN d;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 728', () => {
    const query = `ALTER TABLE tbl ADD COLUMN d Float64;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 729', () => {
    const query = `ALTER TABLE tbl UPDATE d = xi WHERE 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 730', () => {
    const query = `ALTER TABLE tbl ADD COLUMN xi UInt32;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 731', () => {
    const query = `ALTER TABLE tbl UPDATE xi = e WHERE 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 732', () => {
    const query = `ALTER TABLE tbl DROP COLUMN e;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 733', () => {
    const query = `ALTER TABLE tbl ADD COLUMN e UInt32;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 734', () => {
    const query = `ALTER TABLE tbl UPDATE e = xi WHERE 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 735', () => {
    const query = `ALTER TABLE tbl MODIFY COLUMN a Int64, MODIFY COLUMN b String, MODIFY COLUMN c UInt8, MODIFY COLUMN d Float64, MODIFY COLUMN e UInt32;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 736', () => {
    const query = `ALTER TABLE compress_table MODIFY COLUMN value3 CODEC(Default);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 737', () => {
    const query = `ALTER TABLE compress_table MODIFY COLUMN value2 CODEC(Default(5)); --{serverError BAD_ARGUMENTS} DROP TABLE IF EXISTS compress_table;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 738', () => {
    const query = `ALTER TABLE replica1 DETACH PART 'all_100_100_0'; -- { serverError NO_SUCH_DATA_PART } SELECT v FROM replica1 ORDER BY v;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 739', () => {
    const query = `ALTER TABLE replica2 DETACH PART 'all_1_1_0';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 740', () => {
    const query = `ALTER TABLE replica2 ATTACH PART 'all_1_1_0' SETTINGS insert_keeper_fault_injection_probability=0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 741', () => {
    const query = `ALTER TABLE replica1 DROP PART 'all_3_3_0';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 742', () => {
    const query = `ALTER TABLE replica1 ATTACH PART 'all_3_3_0'; -- { serverError BAD_DATA_PART_NAME } SELECT v FROM replica1 ORDER BY v;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 743', () => {
    const query = `ALTER TABLE replica1 MODIFY SETTING max_replicated_merges_in_queue = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 744', () => {
    const query = `ALTER TABLE replica2 DETACH PART 'all_0_0_0';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 745', () => {
    const query = `ALTER TABLE replica2 DROP PARTITION ID 'all';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 746', () => {
    const query = `ALTER TABLE replica1 DETACH PART 'all_2_2_0'; --{serverError NOT_IMPLEMENTED} SELECT name FROM system.parts WHERE table = 'replica1' and database = currentDatabase() and active = 1 ORDER BY name;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 747', () => {
    const query = `ALTER TABLE mt_01451 DETACH PART 'all_100_100_0'; -- { serverError NO_SUCH_DATA_PART } ALTER TABLE mt_01451 DETACH PART 'all_2_2_0';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 748', () => {
    const query = `ALTER TABLE mt_01451 ATTACH PART 'all_2_2_0';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 749', () => {
    const query = `ALTER TABLE mt_01451 DROP PART 'all_4_4_0';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 750', () => {
    const query = `ALTER TABLE mt_01451 ATTACH PART 'all_4_4_0'; -- { serverError BAD_DATA_PART_NAME } SELECT v FROM mt_01451 ORDER BY v;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 751', () => {
    const query = `ALTER TABLE modify_sample_replicated MODIFY SAMPLE BY d;  -- { serverError BAD_ARGUMENTS } ALTER TABLE modify_sample_replicated MODIFY SAMPLE BY y;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 752', () => {
    const query = `ALTER TABLE modify_sample_old MODIFY SAMPLE BY x; -- { serverError BAD_ARGUMENTS } DROP TABLE modify_sample;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 753', () => {
    const query = `ALTER TABLE mytable_local MODIFY SETTING number_of_free_entries_in_pool_to_execute_mutation = 100;  -- { serverError BAD_ARGUMENTS } DROP TABLE mytable_local;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 754', () => {
    const query = `ALTER TABLE table_with_pk_clear CLEAR COLUMN key1 IN PARTITION tuple(); --{serverError ALTER_OF_COLUMN_IS_FORBIDDEN} SELECT count(distinct key1) FROM table_with_pk_clear;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 755', () => {
    const query = `ALTER TABLE table_with_pk_clear CLEAR COLUMN key2 IN PARTITION tuple(); --{serverError ALTER_OF_COLUMN_IS_FORBIDDEN} SELECT count(distinct key2) FROM table_with_pk_clear;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 756', () => {
    const query = `ALTER TABLE t UPDATE s = 'world' WHERE x = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 757', () => {
    const query = `ALTER TABLE mutation_table MODIFY COLUMN value UInt64 SETTINGS mutations_sync = 2; --{serverError UNFINISHED} SELECT distinct(value) FROM mutation_table ORDER BY value; --{serverError CANNOT_PARSE_TEXT}
KILL MUTATION where table = 'mutation_table' and database = currentDatabase();`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 758', () => {
    const query = `ALTER TABLE mutation_table MODIFY COLUMN value String SETTINGS mutations_sync = 2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 759', () => {
    const query = `ALTER TABLE t FREEZE;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 760', () => {
    const query = `ALTER TABLE t UPDATE s = 'goodbye' WHERE k = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 761', () => {
    const query = `ALTER TABLE t MODIFY COLUMN s Enum('goodbye' = 1, 'world' = 2);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 762', () => {
    const query = `ALTER TABLE t MODIFY COLUMN s Enum('hello' = 1, 'world' = 2);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 763', () => {
    const query = `ALTER TABLE t UPDATE x = x - 1 WHERE x % 2 = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 764', () => {
    const query = `ALTER TABLE non_metadata_alters MODIFY COLUMN value3 UInt64; --{serverError ALTER_OF_COLUMN_IS_FORBIDDEN} ALTER TABLE non_metadata_alters MODIFY COLUMN value1 UInt32; --{serverError ALTER_OF_COLUMN_IS_FORBIDDEN}
ALTER TABLE non_metadata_alters MODIFY COLUMN value4 Date; --{serverError ALTER_OF_COLUMN_IS_FORBIDDEN}
ALTER TABLE non_metadata_alters DROP COLUMN value4; --{serverError ALTER_OF_COLUMN_IS_FORBIDDEN}
ALTER TABLE non_metadata_alters MODIFY COLUMN value2 Enum8('x' = 5, 'y' = 6); --{serverError ALTER_OF_COLUMN_IS_FORBIDDEN}
ALTER TABLE non_metadata_alters RENAME COLUMN value4 TO renamed_value4; --{serverError ALTER_OF_COLUMN_IS_FORBIDDEN}
ALTER TABLE non_metadata_alters MODIFY COLUMN value3 UInt16 TTL value5 + INTERVAL 5 DAY; --{serverError ALTER_OF_COLUMN_IS_FORBIDDEN}
SET materialize_ttl_after_modify = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 765', () => {
    const query = `ALTER TABLE non_metadata_alters MODIFY COLUMN value3 UInt16 TTL value5 + INTERVAL 5 DAY;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 766', () => {
    const query = `ALTER TABLE non_metadata_alters MODIFY COLUMN value1 String DEFAULT 'X';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 767', () => {
    const query = `ALTER TABLE non_metadata_alters MODIFY COLUMN value2 Enum8('Hello' = 1, 'World' = 2, '!' = 3);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 768', () => {
    const query = `ALTER TABLE non_metadata_alters MODIFY COLUMN value3 Date;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 769', () => {
    const query = `ALTER TABLE non_metadata_alters MODIFY COLUMN value4 UInt32;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 770', () => {
    const query = `ALTER TABLE non_metadata_alters ADD COLUMN value6 Decimal(3, 3);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 771', () => {
    const query = `ALTER TABLE test CLEAR COLUMN x; --{serverError BAD_ARGUMENTS} DROP TABLE test;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 772', () => {
    const query = `ALTER TABLE test CLEAR COLUMN x;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 773', () => {
    const query = `ALTER TABLE test CLEAR COLUMN x IN PARTITION ''; --{serverError INVALID_PARTITION_VALUE} ALTER TABLE test CLEAR COLUMN x IN PARTITION 'asdasd'; --{serverError INVALID_PARTITION_VALUE}
ALTER TABLE test CLEAR COLUMN x IN PARTITION '123'; --{serverError INVALID_PARTITION_VALUE}
ALTER TABLE test CLEAR COLUMN y; --{serverError BAD_ARGUMENTS}
ALTER TABLE test ADD COLUMN z String DEFAULT 'Hello';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 774', () => {
    const query = `ALTER TABLE test CLEAR COLUMN y; --{serverError BAD_ARGUMENTS} ALTER TABLE test CLEAR COLUMN x;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 775', () => {
    const query = `ALTER TABLE test CLEAR COLUMN z;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 776', () => {
    const query = `ALTER TABLE test DROP COLUMN x; -- { serverError ILLEGAL_COLUMN } DROP TABLE test;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 777', () => {
    const query = `alter table Test clear column impression_id in partition '202001';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 778', () => {
    const query = `ALTER TABLE table_rename_with_ttl MODIFY TTL date1 + INTERVAL 1 MONTH;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 779', () => {
    const query = `ALTER TABLE table_rename_with_ttl RENAME COLUMN date1 TO renamed_date1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 780', () => {
    const query = `ALTER TABLE table_rename_with_ttl materialize TTL settings mutations_sync=2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 781', () => {
    const query = `ALTER TABLE mutation_delete_null_rows DELETE WHERE UserID = 0 SETTINGS mutations_sync=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 782', () => {
    const query = `ALTER TABLE alter_01355 ADD COLUMN Added1 UInt32 FIRST;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 783', () => {
    const query = `ALTER TABLE alter_01355 ADD COLUMN Added2 UInt32 AFTER NestedColumn;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 784', () => {
    const query = `ALTER TABLE alter_01355 ADD COLUMN Added3 UInt32 AFTER ToDrop;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 785', () => {
    const query = `ALTER TABLE alter_01355 MODIFY COLUMN Added2 UInt32 FIRST;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 786', () => {
    const query = `ALTER TABLE alter_01355 MODIFY COLUMN Added3 UInt32 AFTER CounterID;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 787', () => {
    const query = `ALTER TABLE cdp_orders DELETE WHERE order_time >= '2019-12-03 00:00:00';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 788', () => {
    const query = `ALTER TABLE test MODIFY COLUMN x Enum('hello' = 1, 'world' = 2, 'goodbye' = 3);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 789', () => {
    const query = `ALTER TABLE test MODIFY COLUMN x Enum('hello' = 1, 'world' = 2); -- { serverError ALTER_OF_COLUMN_IS_FORBIDDEN } ALTER TABLE test MODIFY COLUMN x Enum('hello' = 1, 'world' = 2, 'test' = 3);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 790', () => {
    const query = `ALTER TABLE test MODIFY COLUMN x Enum('hello' = 1, 'world' = 2, 'goodbye' = 4); -- { serverError ALTER_OF_COLUMN_IS_FORBIDDEN } ALTER TABLE test MODIFY COLUMN x Int8;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 791', () => {
    const query = `ALTER TABLE test MODIFY COLUMN x Enum8('' = 1); -- { serverError ALTER_OF_COLUMN_IS_FORBIDDEN } ALTER TABLE test MODIFY COLUMN x Enum16('' = 1); -- { serverError ALTER_OF_COLUMN_IS_FORBIDDEN }
ALTER TABLE test MODIFY COLUMN x UInt64; -- { serverError ALTER_OF_COLUMN_IS_FORBIDDEN }
ALTER TABLE test MODIFY COLUMN x String; -- { serverError ALTER_OF_COLUMN_IS_FORBIDDEN }
ALTER TABLE test MODIFY COLUMN x Nullable(Int64); -- { serverError ALTER_OF_COLUMN_IS_FORBIDDEN }
ALTER TABLE test RENAME COLUMN x TO z; -- { serverError ALTER_OF_COLUMN_IS_FORBIDDEN }
ALTER TABLE test RENAME COLUMN y TO z; -- { serverError ALTER_OF_COLUMN_IS_FORBIDDEN }
ALTER TABLE test DROP COLUMN x; -- { serverError UNKNOWN_IDENTIFIER }
ALTER TABLE test DROP COLUMN y; -- { serverError UNKNOWN_IDENTIFIER }
DROP TABLE test SYNC;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 792', () => {
    const query = `ALTER TABLE test MODIFY COLUMN x Enum8('' = 1); -- { serverError ALTER_OF_COLUMN_IS_FORBIDDEN } ALTER TABLE test MODIFY COLUMN x Enum16('' = 1); -- { serverError ALTER_OF_COLUMN_IS_FORBIDDEN }
ALTER TABLE test MODIFY COLUMN x UInt64; -- { serverError ALTER_OF_COLUMN_IS_FORBIDDEN }
ALTER TABLE test MODIFY COLUMN x String; -- { serverError ALTER_OF_COLUMN_IS_FORBIDDEN }
ALTER TABLE test MODIFY COLUMN x Nullable(Int64); -- { serverError ALTER_OF_COLUMN_IS_FORBIDDEN }
ALTER TABLE test RENAME COLUMN x TO z; -- { serverError ALTER_OF_COLUMN_IS_FORBIDDEN }
ALTER TABLE test RENAME COLUMN y TO z; -- { serverError ALTER_OF_COLUMN_IS_FORBIDDEN }
ALTER TABLE test DROP COLUMN x; -- { serverError UNKNOWN_IDENTIFIER }
ALTER TABLE test DROP COLUMN y; -- { serverError UNKNOWN_IDENTIFIER }
DROP TABLE test;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 793', () => {
    const query = `ALTER TABLE mt FREEZE;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 794', () => {
    const query = `ALTER TABLE mt UPDATE x = 'Goodbye' WHERE y = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 795', () => {
    const query = `ALTER TABLE add_table ADD COLUMN IF NOT EXISTS value1 UInt64;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 796', () => {
    const query = `ALTER TABLE add_table ADD COLUMN IF NOT EXISTS key String, ADD COLUMN IF NOT EXISTS value1 UInt64;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 797', () => {
    const query = `ALTER TABLE add_table ADD COLUMN IF NOT EXISTS value1 UInt64, ADD COLUMN IF NOT EXISTS value2 UInt64;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 798', () => {
    const query = `ALTER TABLE add_table ADD COLUMN value3 UInt64, ADD COLUMN IF NOT EXISTS value3 UInt32; --{serverError ILLEGAL_COLUMN} DROP TABLE IF EXISTS add_table;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 799', () => {
    const query = `alter table merge_tree add column dummy String after CounterID;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 800', () => {
    const query = `alter table merge_tree drop column dummy;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 801', () => {
    const query = `alter table merge1 add column dummy String after CounterID;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 802', () => {
    const query = `alter table merge2 add column dummy String after CounterID;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 803', () => {
    const query = `alter table merge add column dummy String after CounterID;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 804', () => {
    const query = `alter table merge drop column dummy;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 805', () => {
    const query = `alter table merge add column dummy1 String after CounterID;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 806', () => {
    const query = `ALTER QUOTA q2_01297 RENAME TO 'q2_01297_renamed';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 807', () => {
    const query = `ALTER QUOTA q1_01297 KEY BY user_name;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 808', () => {
    const query = `ALTER QUOTA q2_01297 KEY BY client_key, user_name;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 809', () => {
    const query = `ALTER QUOTA q3_01297 NOT KEYED;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 810', () => {
    const query = `ALTER QUOTA q1_01297 FOR INTERVAL 5 DAY NO LIMITS;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 811', () => {
    const query = `ALTER QUOTA q2_01297 FOR INTERVAL 30 MINUTE TRACKING ONLY;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 812', () => {
    const query = `ALTER QUOTA q3_01297 FOR INTERVAL 2 HOUR MAX errors = 10, FOR INTERVAL 1 HOUR MAX queries = 70;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 813', () => {
    const query = `ALTER QUOTA q4_01297 FOR RANDOMIZED INTERVAL 2000 SECOND errors MAX 5;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 814', () => {
    const query = `ALTER QUOTA q5_01297 FOR 1 YEAR MAX errors = 111;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 815', () => {
    const query = `ALTER QUOTA q1_01297 TO u1_01297;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 816', () => {
    const query = `ALTER QUOTA q2_01297 TO NONE;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 817', () => {
    const query = `ALTER QUOTA q1_01297, q2_01297 FOR 1 day TRACKING ONLY TO r1_01297;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 818', () => {
    const query = `alter table merge_distributed1 add column dummy String after CounterID;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 819', () => {
    const query = `alter table merge_distributed add column dummy String after CounterID;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 820', () => {
    const query = `alter table merge_distributed drop column dummy;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 821', () => {
    const query = `alter table merge_distributed add column dummy1 String after CounterID;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 822', () => {
    const query = `ALTER POLICY p1_01296 ON table USING 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 823', () => {
    const query = `ALTER POLICY p1_01296, p2_01296 ON table TO ALL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 824', () => {
    const query = `ALTER ROW POLICY p2_01295 ON db.table RENAME TO 'p2_01295_renamed';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 825', () => {
    const query = `ALTER ROW POLICY p1_01295 ON db.table FOR SELECT USING 0 AS RESTRICTIVE;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 826', () => {
    const query = `ALTER POLICY p1_01295 ON db.table TO u1_01295;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 827', () => {
    const query = `ALTER POLICY p2_01295 ON db.table TO NONE;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 828', () => {
    const query = `ALTER POLICY p1_01295, p2_01295 ON db.table TO ALL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 829', () => {
    const query = `ALTER SETTINGS PROFILE s2_01294 RENAME TO 's2_01294_renamed';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 830', () => {
    const query = `ALTER PROFILE s1_01294 SETTINGS readonly=0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 831', () => {
    const query = `ALTER PROFILE s2_01294 SETTINGS readonly=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 832', () => {
    const query = `ALTER PROFILE s3_01294 SETTINGS NONE;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 833', () => {
    const query = `ALTER PROFILE s1_01294 TO u1_01294;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 834', () => {
    const query = `ALTER PROFILE s2_01294 TO NONE;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 835', () => {
    const query = `ALTER SETTINGS PROFILE s1_01294 SETTINGS INHERIT 'default' TO NONE;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 836', () => {
    const query = `ALTER PROFILE s1_01294, s2_01294 SETTINGS max_memory_usage=6000000;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 837', () => {
    const query = `ALTER PROFILE s2_01294, s3_01294, s4_01294 TO r1_01294;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 838', () => {
    const query = `ALTER ROLE r2_01293 RENAME TO 'r2_01293_renamed';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 839', () => {
    const query = `ALTER ROLE r1_01293 SETTINGS readonly=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 840', () => {
    const query = `ALTER ROLE r2_01293 SETTINGS readonly=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 841', () => {
    const query = `ALTER ROLE r3_01293 SETTINGS NONE;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 842', () => {
    const query = `ALTER ROLE r1_01293, r2_01293 SETTINGS readonly=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 843', () => {
    const query = `ALTER USER u2_01292 RENAME TO 'u2_01292_renamed';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 844', () => {
    const query = `ALTER USER u1_01292 IDENTIFIED BY '123qwe';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 845', () => {
    const query = `ALTER USER u2_01292 IDENTIFIED BY '123qwe';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 846', () => {
    const query = `ALTER USER u3_01292 IDENTIFIED BY '123qwe';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 847', () => {
    const query = `ALTER USER u4_01292 IDENTIFIED WITH plaintext_password BY '123qwe';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 848', () => {
    const query = `ALTER USER u5_01292 NOT IDENTIFIED;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 849', () => {
    const query = `ALTER USER u1_01292 HOST NONE;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 850', () => {
    const query = `ALTER USER u2_01292 HOST NAME 'myhost.com';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 851', () => {
    const query = `ALTER USER u3_01292 ADD HOST NAME 'myhost.com';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 852', () => {
    const query = `ALTER USER u4_01292 DROP HOST NAME 'myhost.com';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 853', () => {
    const query = `ALTER USER u1_01292@'%' HOST LOCAL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 854', () => {
    const query = `ALTER USER u2_01292@'%.myhost.com' HOST ANY;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 855', () => {
    const query = `ALTER USER u1_01292 SETTINGS readonly=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 856', () => {
    const query = `ALTER USER u2_01292 SETTINGS readonly=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 857', () => {
    const query = `ALTER USER u3_01292 SETTINGS NONE;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 858', () => {
    const query = `ALTER USER u1_01292 DEFAULT ROLE r1_01292;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 859', () => {
    const query = `ALTER USER u2_01292 DEFAULT ROLE ALL EXCEPT r2_01292;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 860', () => {
    const query = `ALTER USER u1_01292 NOT IDENTIFIED HOST LIKE '%.%.myhost.com' DEFAULT ROLE NONE SETTINGS PROFILE 'default';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 861', () => {
    const query = `ALTER USER u1_01292, u2_01292 SETTINGS readonly=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 862', () => {
    const query = `ALTER TABLE rename_table_multiple RENAME COLUMN value1 TO value1_string, MODIFY COLUMN value1_string String; --{serverError NOT_IMPLEMENTED} ALTER TABLE rename_table_multiple MODIFY COLUMN value1 String, RENAME COLUMN value1 to value1_string; --{serverError NOT_IMPLEMENTED}
ALTER TABLE rename_table_multiple RENAME COLUMN value1 TO value1_string;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 863', () => {
    const query = `ALTER TABLE rename_table_multiple MODIFY COLUMN value1_string String;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 864', () => {
    const query = `ALTER TABLE rename_table_multiple RENAME COLUMN value2 TO value2_old, ADD COLUMN value2 Int64 DEFAULT 7;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 865', () => {
    const query = `ALTER TABLE rename_table_multiple DROP COLUMN value2_old, RENAME COLUMN value2 TO value2_old;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 866', () => {
    const query = `ALTER TABLE rename_table_multiple_compact RENAME COLUMN value1 TO value1_string, MODIFY COLUMN value1_string String; --{serverError NOT_IMPLEMENTED} ALTER TABLE rename_table_multiple_compact MODIFY COLUMN value1 String, RENAME COLUMN value1 to value1_string; --{serverError NOT_IMPLEMENTED}
ALTER TABLE rename_table_multiple_compact RENAME COLUMN value1 TO value1_string;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 867', () => {
    const query = `ALTER TABLE rename_table_multiple_compact MODIFY COLUMN value1_string String;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 868', () => {
    const query = `ALTER TABLE rename_table_multiple_compact RENAME COLUMN value2 TO value2_old, ADD COLUMN value2 Int64 DEFAULT 7;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 869', () => {
    const query = `ALTER TABLE rename_table_multiple_compact DROP COLUMN value2_old, RENAME COLUMN value2 TO value2_old;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 870', () => {
    const query = `ALTER TABLE rename_table RENAME COLUMN value1 TO old_value1, RENAME COLUMN value2 TO value1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 871', () => {
    const query = `ALTER TABLE rename_table RENAME COLUMN old_value1 TO v1, RENAME COLUMN value1 TO v2, RENAME COLUMN key to k;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 872', () => {
    const query = `ALTER TABLE rename_table_polymorphic RENAME COLUMN value1 TO old_value1, RENAME COLUMN value2 TO value1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 873', () => {
    const query = `ALTER TABLE rename_table_polymorphic RENAME COLUMN old_value1 TO v1, RENAME COLUMN value1 TO v2, RENAME COLUMN key to k;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 874', () => {
    const query = `ALTER TABLE table_for_rename1 RENAME COLUMN value1 TO value4;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 875', () => {
    const query = `ALTER TABLE table_for_rename1 RENAME COLUMN value2 TO value5;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 876', () => {
    const query = `ALTER TABLE table_for_rename1 RENAME COLUMN value4 TO value1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 877', () => {
    const query = `ALTER TABLE table_for_rename1 RENAME COLUMN value5 TO value2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 878', () => {
    const query = `ALTER TABLE table_for_rename RENAME COLUMN value1 TO value4;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 879', () => {
    const query = `ALTER TABLE table_for_rename RENAME COLUMN value2 TO value5;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 880', () => {
    const query = `ALTER TABLE table_for_rename RENAME COLUMN value4 TO value1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 881', () => {
    const query = `ALTER TABLE table_for_rename RENAME COLUMN value5 TO value2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 882', () => {
    const query = `ALTER TABLE visits RENAME COLUMN Name TO Name2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 883', () => {
    const query = `ALTER TABLE visits_dist RENAME COLUMN Name TO Name2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 884', () => {
    const query = `ALTER TABLE data_01269 DROP COLUMN alias;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 885', () => {
    const query = `ALTER TABLE data_01269 ADD COLUMN alias UInt8 ALIAS value>0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 886', () => {
    const query = `ALTER TABLE test_alter MODIFY COLUMN s DEFAULT 'Hello';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 887', () => {
    const query = `ALTER TABLE test_alter MODIFY COLUMN x DEFAULT '2000-01-01';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 888', () => {
    const query = `ALTER TABLE test_alter_r1 MODIFY COLUMN s DEFAULT 'Hello' SETTINGS replication_alter_partitions_sync = 2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 889', () => {
    const query = `ALTER TABLE test_alter_r2 MODIFY COLUMN x DEFAULT '2000-01-01' SETTINGS replication_alter_partitions_sync = 2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 890', () => {
    const query = `alter table t1 add column s3 String DEFAULT concat(s2,'_',s1);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 891', () => {
    const query = `alter table cdp_segments update mid_seqs = bitmapOr(mid_seqs, (select groupBitmapState(mid_seq) from cdp_customers where mid in ('6bf3c2ee-2b33-3030-9dc2-25c6c618d141'))) where seg_id = '1234567890';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 892', () => {
    const query = `ALTER TABLE table_for_rename_nested RENAME COLUMN n.x TO n.renamed_x;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 893', () => {
    const query = `ALTER TABLE table_for_rename_nested RENAME COLUMN n.y TO n.renamed_y;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 894', () => {
    const query = `ALTER TABLE table_for_rename_nested RENAME COLUMN n.renamed_x TO not_nested_x; --{serverError BAD_ARGUMENTS} ALTER TABLE table_for_rename_nested RENAME COLUMN n.renamed_x TO q.renamed_x; --{serverError BAD_ARGUMENTS}
ALTER TABLE table_for_rename_nested RENAME COLUMN value1 TO q.renamed_x; --{serverError BAD_ARGUMENTS}
ALTER TABLE table_for_rename_nested RENAME COLUMN n TO renamed_n; --{serverError NOT_IMPLEMENTED}
DROP TABLE IF EXISTS table_for_rename_nested;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 895', () => {
    const query = `ALTER TABLE table_rename_with_default RENAME COLUMN value1 TO renamed_value1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 896', () => {
    const query = `ALTER TABLE table_rename_with_ttl RENAME COLUMN date2 TO renamed_date2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 897', () => {
    const query = `ALTER TABLE table_for_rename_pk RENAME COLUMN key1 TO renamed_key1; --{serverError ALTER_OF_COLUMN_IS_FORBIDDEN} ALTER TABLE table_for_rename_pk RENAME COLUMN key3 TO renamed_key3; --{serverError ALTER_OF_COLUMN_IS_FORBIDDEN}
ALTER TABLE table_for_rename_pk RENAME COLUMN key2 TO renamed_key2; --{serverError ALTER_OF_COLUMN_IS_FORBIDDEN}
DROP TABLE IF EXISTS table_for_rename_pk;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 898', () => {
    const query = `ALTER TABLE table_for_rename_with_primary_key RENAME COLUMN key1 TO renamed_key1; --{serverError ALTER_OF_COLUMN_IS_FORBIDDEN} ALTER TABLE table_for_rename_with_primary_key RENAME COLUMN key2 TO renamed_key2; --{serverError ALTER_OF_COLUMN_IS_FORBIDDEN}
ALTER TABLE table_for_rename_with_primary_key RENAME COLUMN key3 TO renamed_key3; --{serverError ALTER_OF_COLUMN_IS_FORBIDDEN}
DROP TABLE IF EXISTS table_for_rename_with_primary_key;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 899', () => {
    const query = `ALTER TABLE table_for_rename_nested RENAME COLUMN n.renamed_x TO not_nested_x; --{serverError BAD_ARGUMENTS} ALTER TABLE table_for_rename_nested RENAME COLUMN n TO renamed_n; --{serverError NOT_IMPLEMENTED}
ALTER TABLE table_for_rename_nested RENAME COLUMN value1 TO renamed_value1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 900', () => {
    const query = `ALTER TABLE table_with_compact_parts RENAME COLUMN value1 to renamed_value1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 901', () => {
    const query = `ALTER TABLE table_with_compact_parts RENAME COLUMN value2 TO renamed_value2, RENAME COLUMN value3 TO renamed_value3;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 902', () => {
    const query = `ALTER TABLE table_for_rename RENAME COLUMN value1 to renamed_value1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 903', () => {
    const query = `ALTER TABLE table_for_rename RENAME COLUMN value3 to value2; --{serverError DUPLICATE_COLUMN} ALTER TABLE table_for_rename RENAME COLUMN value3 TO r1, RENAME COLUMN value3 TO r2; --{serverError BAD_ARGUMENTS}
ALTER TABLE table_for_rename RENAME COLUMN value3 TO r1, RENAME COLUMN r1 TO value1; --{serverError NOT_IMPLEMENTED}
ALTER TABLE table_for_rename RENAME COLUMN value2 TO renamed_value2, RENAME COLUMN value3 TO renamed_value3;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 904', () => {
    const query = `ALTER TABLE table_for_rename RENAME COLUMN value100 to renamed_value100; --{serverError NOT_FOUND_COLUMN_IN_BLOCK} ALTER TABLE table_for_rename RENAME COLUMN IF EXISTS value100 to renamed_value100;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 905', () => {
    const query = `alter table mt_compact drop column n.y;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 906', () => {
    const query = `alter table mt_compact add column n.y Array(String) DEFAULT ['qwqw'] after n.x;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 907', () => {
    const query = `alter table mt_compact update b = 42 where 1 SETTINGS mutations_sync = 2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 908', () => {
    const query = `ALTER TABLE table_with_single_pk DELETE WHERE key % 77 = 0 SETTINGS mutations_sync = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 909', () => {
    const query = `ALTER TABLE table_with_multi_pk DELETE WHERE key1 % 77 = 0 SETTINGS mutations_sync = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 910', () => {
    const query = `ALTER TABLE table_with_function_pk DELETE WHERE key1 % 77 = 0 SETTINGS mutations_sync = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 911', () => {
    const query = `ALTER TABLE table_without_pk DELETE WHERE key1 % 77 = 0 SETTINGS mutations_sync = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 912', () => {
    const query = `alter table txn_counters drop partition id 'all';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 913', () => {
    const query = `alter table trunc detach partition all;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 914', () => {
    const query = `alter table trunc attach partition id '0';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 915', () => {
    const query = `alter table trunc attach partition id '1';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 916', () => {
    const query = `alter table trunc attach partition id '2';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 917', () => {
    const query = `alter table trunc attach partition id '3';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 918', () => {
    const query = `alter table test_1164_memory.r1 add column m int;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 919', () => {
    const query = `alter table rmt update s = 's'||toString(n) where 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 920', () => {
    const query = `alter table rmt replace partition '0' from mt;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 921', () => {
    const query = `alter table rmt drop column s;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 922', () => {
    const query = `alter table rmt drop partition '0';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 923', () => {
    const query = `ALTER TABLE default_table MODIFY COLUMN enum_column Enum8('undefined' = 0, 'fox' = 1, 'index' = 2) DEFAULT 'undefined';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 924', () => {
    const query = `ALTER TABLE default_table MODIFY COLUMN enum_column Enum8('undefined' = 0, 'fox' = 1, 'index' = 2) DEFAULT 'fox';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 925', () => {
    const query = `alter user \`test 01119\` rename to " spaces ";`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 926', () => {
    const query = `ALTER TABLE minmax_compact ADD INDEX idx (i64, u64 * i64) TYPE minmax GRANULARITY 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 927', () => {
    const query = `ALTER TABLE minmax_compact MATERIALIZE INDEX idx IN PARTITION 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 928', () => {
    const query = `ALTER TABLE minmax_compact MATERIALIZE INDEX idx IN PARTITION 2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 929', () => {
    const query = `ALTER TABLE minmax_compact CLEAR INDEX idx IN PARTITION 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 930', () => {
    const query = `ALTER TABLE minmax_compact CLEAR INDEX idx IN PARTITION 2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 931', () => {
    const query = `ALTER TABLE clear_column CLEAR COLUMN y IN PARTITION 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 932', () => {
    const query = `ALTER TABLE clear_column CLEAR COLUMN y IN PARTITION 2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 933', () => {
    const query = `ALTER TABLE mt_compact MODIFY COLUMN s UInt64;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 934', () => {
    const query = `ALTER TABLE test_a ADD COLUMN NewColumn String DEFAULT '' AFTER OldColumn;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 935', () => {
    const query = `alter table t add column s String default 'foo';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 936', () => {
    const query = `ALTER TABLE table_with_cyclic_defaults ADD COLUMN c String DEFAULT b, ADD COLUMN b String DEFAULT c; --{serverError CYCLIC_ALIASES} ALTER TABLE table_with_cyclic_defaults ADD COLUMN b String DEFAULT a, MODIFY COLUMN a DEFAULT b; --{serverError CYCLIC_ALIASES}
SELECT 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 937', () => {
    const query = `ALTER TABLE mutations_and_quorum1 DELETE WHERE something = 'test1' SETTINGS mutations_sync=2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 938', () => {
    const query = `ALTER TABLE old_format_mt MODIFY SETTING enable_mixed_granularity_parts = 1; --{serverError BAD_ARGUMENTS} SELECT 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 939', () => {
    const query = `ALTER TABLE table_with_defaults_on_aliases ADD COLUMN col5 UInt64 ALIAS col2 * col4;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 940', () => {
    const query = `ALTER TABLE table_with_defaults_on_aliases ADD COLUMN col6 UInt64 MATERIALIZED col2 * col4;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 941', () => {
    const query = `ALTER TABLE alter_default ADD COLUMN value DEFAULT '10'; --{serverError BAD_ARGUMENTS} ALTER TABLE alter_default ADD COLUMN value String DEFAULT '10';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 942', () => {
    const query = `ALTER TABLE alter_default MODIFY COLUMN value UInt64;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 943', () => {
    const query = `ALTER TABLE alter_default MODIFY COLUMN value UInt64 DEFAULT 10;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 944', () => {
    const query = `ALTER TABLE alter_default MODIFY COLUMN value DEFAULT 100;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 945', () => {
    const query = `ALTER TABLE alter_default MODIFY COLUMN value UInt16 DEFAULT 100;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 946', () => {
    const query = `ALTER TABLE alter_default MODIFY COLUMN value UInt8 DEFAULT 10;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 947', () => {
    const query = `ALTER TABLE alter_default ADD COLUMN bad_column UInt8 DEFAULT 'q'; --{serverError CANNOT_PARSE_TEXT} ALTER TABLE alter_default ADD COLUMN better_column UInt8 DEFAULT '1';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 948', () => {
    const query = `ALTER TABLE alter_default ADD COLUMN other_date String DEFAULT '0';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 949', () => {
    const query = `ALTER TABLE alter_default MODIFY COLUMN other_date DateTime; --{serverError CANNOT_PARSE_DATETIME} ALTER TABLE alter_default MODIFY COLUMN other_date DEFAULT 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 950', () => {
    const query = `ALTER USER test_user_01075 HOST ANY;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 951', () => {
    const query = `ALTER USER test_user_01075 HOST NONE;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 952', () => {
    const query = `ALTER USER test_user_01075 HOST LOCAL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 953', () => {
    const query = `ALTER USER test_user_01075 HOST IP '192.168.23.15';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 954', () => {
    const query = `ALTER USER test_user_01075 HOST IP '2001:0db8:11a3:09d7:1f34:8a2e:07a0:765d';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 955', () => {
    const query = `ALTER USER test_user_01075 ADD HOST IP '127.0.0.1';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 956', () => {
    const query = `ALTER USER test_user_01075 DROP HOST IP '2001:0db8:11a3:09d7:1f34:8a2e:07a0:765d';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 957', () => {
    const query = `ALTER USER test_user_01075 DROP HOST NAME 'localhost';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 958', () => {
    const query = `ALTER USER test_user_01075 HOST LIKE '@.somesite.com';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 959', () => {
    const query = `ALTER USER test_user_01075 HOST REGEXP '.*\\.anothersite\\.com';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 960', () => {
    const query = `ALTER USER test_user_01075 HOST REGEXP '.*\\.anothersite\\.com', '.*\\.anothersite\\.org';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 961', () => {
    const query = `ALTER USER test_user_01075 HOST REGEXP '.*\\.anothersite2\\.com', REGEXP '.*\\.anothersite2\\.org';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 962', () => {
    const query = `ALTER USER test_user_01075 HOST REGEXP '.*\\.anothersite3\\.com' HOST REGEXP '.*\\.anothersite3\\.org';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 963', () => {
    const query = `ALTER USER test_user_01075_x@localhost RENAME TO test_user_01075_x@'%';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 964', () => {
    const query = `ALTER USER test_user_01075_x RENAME TO test_user_01075_x@'192.168.23.15';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 965', () => {
    const query = `ALTER TABLE merge_tree DROP PARTITION 20200103; -- unfortunately, this works, but not as user expected. SELECT 3, * FROM merge_tree ORDER BY d;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 966', () => {
    const query = `ALTER TABLE merge_tree DROP PARTITION '20200104';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 967', () => {
    const query = `ALTER TABLE merge_tree DROP PARTITION '2020-01-05';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 968', () => {
    const query = `ALTER TABLE merge_tree DROP PARTITION '202001-06'; -- { serverError CANNOT_PARSE_DATE } SELECT 6, * FROM merge_tree ORDER BY d;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 969', () => {
    const query = `ALTER TABLE old_syntax_01071_test ADD INDEX  id_minmax id TYPE minmax GRANULARITY 1; -- { serverError BAD_ARGUMENTS } CREATE TABLE new_syntax_01071_test (date Date, id UInt8) ENGINE = MergeTree() ORDER BY id;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 970', () => {
    const query = `ALTER TABLE new_syntax_01071_test ADD INDEX  id_minmax id TYPE minmax GRANULARITY 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 971', () => {
    const query = `alter table ttl modify ttl a % 2 = 0 ? today() - 10 : toDate('2100-01-01');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 972', () => {
    const query = `alter table ttl materialize ttl;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 973', () => {
    const query = `alter table ttl update a = 0 where i % 2 = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 974', () => {
    const query = `alter table ttl update d = '2000-01-01' where 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 975', () => {
    const query = `alter table ttl modify ttl d + interval 1 day;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 976', () => {
    const query = `alter table ttl modify ttl i % 2 = 0 ? toDate('2000-01-01') : toDate('2100-01-01');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 977', () => {
    const query = `alter table ttl modify ttl toDate('2000-01-01');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 978', () => {
    const query = `alter table ttl modify column s String ttl i % 2 = 0 ? today() - 10 : toDate('2100-01-01');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 979', () => {
    const query = `alter table ttl modify column s String ttl toDate('2000-01-01');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 980', () => {
    const query = `alter table ttl modify ttl i % 3 = 0 ? toDate('2000-01-01') : toDate('2100-01-01');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 981', () => {
    const query = `alter table ttl modify column s String ttl d + interval 1 month;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 982', () => {
    const query = `alter table ttl modify column s String ttl i % 3 = 0 ? today() - 10 : toDate('2100-01-01'), modify column t String ttl i % 3 = 1 ? today() - 10 : toDate('2100-01-01');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 983', () => {
    const query = `alter table ttl modify column s String ttl toDate('2000-01-02');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 984', () => {
    const query = `alter table ttl modify ttl i % 2 = 0 ? today() - 10 : toDate('2100-01-01');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 985', () => {
    const query = `alter table ttl modify ttl i % 3 = 0 ? today() - 10 : toDate('2100-01-01');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 986', () => {
    const query = `alter table ttl materialize ttl; -- { serverError INCORRECT_QUERY } alter table ttl modify ttl d + interval 1 day;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 987', () => {
    const query = `alter table ttl materialize ttl settings mutations_sync=2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 988', () => {
    const query = `alter table alter_ttl add column s String;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 989', () => {
    const query = `alter table alter_ttl modify column s String ttl toDate('2020-01-01');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 990', () => {
    const query = `alter table alter_ttl modify column s String ttl d + interval 1 day;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 991', () => {
    const query = `ALTER TABLE mv_target ADD COLUMN b UInt8 DEFAULT a + 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 992', () => {
    const query = `ALTER TABLE mv_target ADD COLUMN b UInt8;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 993', () => {
    const query = `ALTER TABLE test_alter_on_mutation MODIFY COLUMN value UInt64;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 994', () => {
    const query = `ALTER TABLE test_alter_on_mutation MODIFY COLUMN value String;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 995', () => {
    const query = `ALTER TABLE test_alter_on_mutation ADD COLUMN value1 Float64;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 996', () => {
    const query = `ALTER TABLE test_alter_on_mutation DROP COLUMN value;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 997', () => {
    const query = `ALTER TABLE test_alter_on_mutation MODIFY COLUMN value UInt64 DEFAULT 10;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 998', () => {
    const query = `ALTER TABLE nested_alter DROP COLUMN \`n.d\`;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 999', () => {
    const query = `ALTER TABLE alter_bug MODIFY COLUMN epoch DEFAULT toUInt64(_time_dec) CODEC(Delta,LZ4);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1000', () => {
    const query = `ALTER TABLE test DETACH PARTITION tuple();`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1001', () => {
    const query = `ALTER TABLE test_prewhere_default_column ADD COLUMN OperatingSystem UInt64 DEFAULT SessionType+1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1002', () => {
    const query = `alter table mt_compact modify setting min_rows_for_wide_part = 1000; -- { serverError NOT_IMPLEMENTED } show create table mt_compact;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1003', () => {
    const query = `alter table mt_compact attach partition 1 from mt_compact_2; -- { serverError BAD_ARGUMENTS } drop table mt_compact;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1004', () => {
    const query = `alter table mt_compact modify setting parts_to_delay_insert = 300;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1005', () => {
    const query = `alter table mt_compact modify setting min_rows_for_wide_part = 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1006', () => {
    const query = `alter table mt_compact update b = 42 where 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1007', () => {
    const query = `ALTER TABLE table_for_synchronous_mutations1 UPDATE v1 = v1 + 1 WHERE 1 SETTINGS mutations_sync = 2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1008', () => {
    const query = `ALTER TABLE table_for_synchronous_mutations_no_replication UPDATE v1 = v1 + 1 WHERE 1 SETTINGS mutations_sync = 2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1009', () => {
    const query = `ALTER TABLE column_size_bug DELETE WHERE value=1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1010', () => {
    const query = `ALTER TABLE pipe_01019 MODIFY QUERY
SELECT
v * 2 as v,
1 as v2
FROM src_01019;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1011', () => {
    const query = `ALTER TABLE dest_01019 ADD COLUMN v2 UInt64;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1012', () => {
    const query = `ALTER TABLE table_01 DETACH PARTITION ID '20191001';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1013', () => {
    const query = `ALTER TABLE table_01 ATTACH PART '20191001_1_1_0';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1014', () => {
    const query = `ALTER TABLE table_01 DETACH PARTITION ALL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1015', () => {
    const query = `ALTER TABLE bad_skip_idx ADD INDEX idx value TYPE bloom_filter(0.01) GRANULARITY 4;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1016', () => {
    const query = `ALTER TABLE replicated_constraints1 ADD CONSTRAINT b_constraint CHECK b > 10;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1017', () => {
    const query = `ALTER TABLE replicated_constraints2 ADD CONSTRAINT a_constraint CHECK a < 10;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1018', () => {
    const query = `ALTER TABLE replicated_table_for_alter1 MODIFY SETTING index_granularity = 4096; -- { serverError READONLY_SETTING } SHOW CREATE TABLE replicated_table_for_alter1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1019', () => {
    const query = `ALTER TABLE replicated_table_for_alter1 MODIFY SETTING use_minimalistic_part_header_in_zookeeper = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1020', () => {
    const query = `ALTER TABLE replicated_table_for_alter2 MODIFY SETTING  parts_to_throw_insert = 1, parts_to_delay_insert = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1021', () => {
    const query = `ALTER TABLE replicated_table_for_alter1 ADD COLUMN Data2 UInt64, MODIFY SETTING check_delay_period=5, check_delay_period=10, check_delay_period=15;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1022', () => {
    const query = `ALTER TABLE replicated_table_for_reset_setting1 MODIFY SETTING index_granularity = 4096; -- { serverError READONLY_SETTING } SHOW CREATE TABLE replicated_table_for_reset_setting1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1023', () => {
    const query = `ALTER TABLE replicated_table_for_reset_setting1 MODIFY SETTING merge_with_ttl_timeout = 100;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1024', () => {
    const query = `ALTER TABLE replicated_table_for_reset_setting2 MODIFY SETTING merge_with_ttl_timeout = 200;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1025', () => {
    const query = `ALTER TABLE replicated_table_for_reset_setting1 RESET SETTING check_delay_period, unknown_setting; -- { serverError BAD_ARGUMENTS } ALTER TABLE replicated_table_for_reset_setting1 RESET SETTING merge_with_ttl_timeout;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1026', () => {
    const query = `ALTER TABLE replicated_table_for_reset_setting2 RESET SETTING merge_with_ttl_timeout;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1027', () => {
    const query = `ALTER TABLE log_for_alter MODIFY SETTING aaa=123; -- { serverError BAD_ARGUMENTS } DROP TABLE IF EXISTS log_for_alter;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1028', () => {
    const query = `ALTER TABLE table_for_alter MODIFY SETTING index_granularity=555; -- { serverError READONLY_SETTING } SHOW CREATE TABLE table_for_alter;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1029', () => {
    const query = `ALTER TABLE table_for_alter MODIFY SETTING  parts_to_throw_insert = 1, parts_to_delay_insert = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1030', () => {
    const query = `ALTER TABLE table_for_alter MODIFY SETTING check_delay_period=10, check_delay_period=20, check_delay_period=30;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1031', () => {
    const query = `ALTER TABLE table_for_alter ADD COLUMN Data2 UInt64, MODIFY SETTING check_delay_period=5, check_delay_period=10, check_delay_period=15;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1032', () => {
    const query = `ALTER TABLE table_for_reset_setting MODIFY SETTING index_granularity=555; -- { serverError READONLY_SETTING } SHOW CREATE TABLE table_for_reset_setting;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1033', () => {
    const query = `ALTER TABLE table_for_reset_setting MODIFY SETTING  parts_to_throw_insert = 1, parts_to_delay_insert = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1034', () => {
    const query = `ALTER TABLE table_for_reset_setting RESET SETTING index_granularity; -- { serverError READONLY_SETTING } ALTER TABLE table_for_reset_setting RESET SETTING merge_with_ttl_timeout, unknown_setting; -- { serverError BAD_ARGUMENTS }
ALTER TABLE table_for_reset_setting MODIFY SETTING merge_with_ttl_timeout = 300, max_concurrent_queries = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1035', () => {
    const query = `ALTER TABLE table_for_reset_setting RESET SETTING max_concurrent_queries, merge_with_ttl_timeout;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1036', () => {
    const query = `ALTER TABLE test_move_partition_src MOVE PARTITION 1 TO TABLE test_move_partition_dest;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1037', () => {
    const query = `ALTER TABLE test_move_partition_src MOVE PART '0_1_1_0' TO TABLE test_move_partition_dest;  -- { clientError SYNTAX_ERROR } SELECT count() FROM test_move_partition_src;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1038', () => {
    const query = `ALTER TABLE mt_with_pk MODIFY COLUMN y Array(String);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1039', () => {
    const query = `ALTER TABLE mt_with_pk UPDATE w = 0 WHERE 1 SETTINGS mutations_sync = 2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1040', () => {
    const query = `ALTER TABLE mt_with_pk UPDATE y = ['q', 'q', 'q'] WHERE 1 SETTINGS mutations_sync = 2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1041', () => {
    const query = `ALTER TABLE mt_with_pk ADD INDEX idx1 z + w TYPE minmax GRANULARITY 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1042', () => {
    const query = `ALTER TABLE alter_attach DETACH PARTITION 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1043', () => {
    const query = `ALTER TABLE alter_attach ADD COLUMN s String;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1044', () => {
    const query = `ALTER TABLE alter_attach ATTACH PARTITION 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1045', () => {
    const query = `ALTER TABLE alter_attach DETACH PARTITION 2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1046', () => {
    const query = `ALTER TABLE alter_attach DROP COLUMN s;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1047', () => {
    const query = `ALTER TABLE alter_attach ATTACH PARTITION 2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1048', () => {
    const query = `ALTER TABLE alter_update_00806 UPDATE e = CAST('foo', 'Enum8(\\'foo\\' = 1, \\'bar\\' = 2)') WHERE d='2018-01-02' SETTINGS mutations_sync = 2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1049', () => {
    const query = `ALTER TABLE part_info FREEZE PARTITION '1970-10-02';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1050', () => {
    const query = `ALTER TABLE part_info FREEZE;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1051', () => {
    const query = `ALTER TABLE test_generic_events_all ADD COLUMN OperatingSystem UInt64 DEFAULT 42;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1052', () => {
    const query = `ALTER TABLE test_generic_events_all ADD COLUMN OperatingSystem UInt64 DEFAULT SessionType+1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1053', () => {
    const query = `alter table ttl modify ttl a; -- { serverError BAD_TTL_EXPRESSION } drop table if exists ttl;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1054', () => {
    const query = `alter table ttl modify column a Int ttl d + interval 1 day;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1055', () => {
    const query = `alter table ttl modify column d Int ttl d + interval 1 day; -- { serverError ILLEGAL_TYPE_OF_ARGUMENT } alter table ttl modify column d DateTime ttl d + interval 1 day; -- { serverError ALTER_OF_COLUMN_IS_FORBIDDEN }
drop table if exists ttl;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1056', () => {
    const query = `ALTER TABLE adaptive_granularity_alter2 MODIFY COLUMN v1 Int16;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1057', () => {
    const query = `ALTER TABLE adaptive_granularity_alter1 MODIFY COLUMN v2 String;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1058', () => {
    const query = `ALTER TABLE adaptive_granularity_alter MODIFY COLUMN v1 Int16;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1059', () => {
    const query = `ALTER TABLE adaptive_granularity_alter MODIFY COLUMN v2 String;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1060', () => {
    const query = `ALTER TABLE large_alter_table_00926 MODIFY COLUMN data CODEC(NONE, LZ4, LZ4HC, ZSTD);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1061', () => {
    const query = `ALTER TABLE add_materialized_column_after ADD COLUMN y String MATERIALIZED toString(x) AFTER x;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1062', () => {
    const query = `ALTER TABLE alter_compression_codec1 ADD COLUMN alter_column String DEFAULT 'default_value' CODEC(ZSTD);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1063', () => {
    const query = `ALTER TABLE alter_compression_codec1 MODIFY COLUMN alter_column CODEC(NONE);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1064', () => {
    const query = `ALTER TABLE alter_compression_codec1 MODIFY COLUMN alter_column CODEC(ZSTD, LZ4HC, LZ4, LZ4, NONE);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1065', () => {
    const query = `ALTER TABLE alter_compression_codec1 MODIFY COLUMN alter_column FixedString(100);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1066', () => {
    const query = `ALTER TABLE union2 MODIFY ORDER BY a; -- { serverError NOT_IMPLEMENTED } DROP TABLE union1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1067', () => {
    const query = `ALTER TABLE minmax_idx ADD INDEX idx1 u64 * i32 TYPE minmax GRANULARITY 10;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1068', () => {
    const query = `ALTER TABLE minmax_idx_r ADD INDEX idx2 u64 + i32 TYPE minmax GRANULARITY 10;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1069', () => {
    const query = `ALTER TABLE minmax_idx ADD INDEX idx3 u64 - i32 TYPE minmax GRANULARITY 10 AFTER idx1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1070', () => {
    const query = `ALTER TABLE minmax_idx DROP INDEX idx1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1071', () => {
    const query = `ALTER TABLE minmax_idx DROP INDEX idx2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1072', () => {
    const query = `ALTER TABLE minmax_idx_r DROP INDEX idx3;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1073', () => {
    const query = `ALTER TABLE minmax_idx2_r DROP INDEX idx1, DROP INDEX idx2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1074', () => {
    const query = `ALTER TABLE minmax_idx ADD INDEX idx2 u64 + i32 TYPE minmax GRANULARITY 10;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1075', () => {
    const query = `ALTER TABLE minmax_idx ADD INDEX idx3 (u64 - i32) TYPE minmax GRANULARITY 10 AFTER idx1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1076', () => {
    const query = `ALTER TABLE minmax_idx DROP INDEX idx3;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1077', () => {
    const query = `ALTER TABLE minmax_idx ADD INDEX idx1 (u64 * i32) TYPE minmax GRANULARITY 10;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1078', () => {
    const query = `ALTER TABLE minmax_idx2 DROP INDEX idx1, DROP INDEX idx2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1079', () => {
    const query = `ALTER TABLE alter_update_00806 UPDATE e = CAST('foo', 'Enum8(\\'foo\\' = 1, \\'bar\\' = 2)') WHERE d='2018-01-02' SETTINGS mutations_sync = 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1080', () => {
    const query = `ALTER TABLE delta_codec_for_alter MODIFY COLUMN x Codec(Delta, LZ4);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1081', () => {
    const query = `ALTER TABLE delta_codec_for_alter MODIFY COLUMN x UInt64 Codec(Delta, LZ4);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1082', () => {
    const query = `ALTER TABLE alter_compression_codec ADD COLUMN alter_column String DEFAULT 'default_value' CODEC(ZSTD);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1083', () => {
    const query = `ALTER TABLE alter_compression_codec MODIFY COLUMN alter_column CODEC(NONE);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1084', () => {
    const query = `ALTER TABLE alter_compression_codec MODIFY COLUMN alter_column CODEC(ZSTD, LZ4HC, LZ4, LZ4, NONE);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1085', () => {
    const query = `ALTER TABLE alter_compression_codec MODIFY COLUMN alter_column FixedString(100);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1086', () => {
    const query = `ALTER TABLE alter_bad_codec ADD COLUMN alter_column DateTime DEFAULT '2019-01-01 00:00:00' CODEC(gbdgkjsdh); -- { serverError UNKNOWN_CODEC } ALTER TABLE alter_bad_codec ADD COLUMN alter_column DateTime DEFAULT '2019-01-01 00:00:00' CODEC(ZSTD(100)); -- { serverError ILLEGAL_CODEC_PARAMETER }
DROP TABLE IF EXISTS alter_bad_codec;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1087', () => {
    const query = `ALTER TABLE large_alter_table_00804 MODIFY COLUMN data CODEC(NONE, LZ4, LZ4HC, ZSTD);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1088', () => {
    const query = `ALTER TABLE defaults ADD COLUMN n Nested(a UInt64, b String);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1089', () => {
    const query = `ALTER TABLE defaults ADD COLUMN n.c Array(UInt8) DEFAULT arrayMap(x -> 0, n.a) AFTER n.a;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1090', () => {
    const query = `ALTER TABLE old_style ADD COLUMN y UInt32, MODIFY ORDER BY (x, y); -- { serverError BAD_ARGUMENTS } DROP TABLE old_style;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1091', () => {
    const query = `ALTER TABLE summing_r1 MODIFY ORDER BY x; -- { serverError BAD_ARGUMENTS } ALTER TABLE summing_r1 ADD COLUMN z UInt32 AFTER y, MODIFY ORDER BY (x, y, -z);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1092', () => {
    const query = `ALTER TABLE summing_r1 ADD COLUMN t UInt32 AFTER z, MODIFY ORDER BY (x, y, t * t) SETTINGS replication_alter_partitions_sync = 2; -- { serverError UNFINISHED } ATTACH TABLE summing_r2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1093', () => {
    const query = `ALTER TABLE no_order MODIFY ORDER BY (a); -- { serverError BAD_ARGUMENTS} DROP TABLE no_order;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1094', () => {
    const query = `ALTER TABLE old_style ADD COLUMN y UInt32, MODIFY ORDER BY (x, y); -- { serverError BAD_ARGUMENTS} DROP TABLE old_style;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1095', () => {
    const query = `ALTER TABLE summing MODIFY ORDER BY x; -- { serverError BAD_ARGUMENTS} ALTER TABLE summing ADD COLUMN z UInt32 AFTER y, MODIFY ORDER BY (x, y, -z);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1096', () => {
    const query = `ALTER TABLE alter_column MODIFY COLUMN y Int64;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1097', () => {
    const query = `ALTER TABLE check_comments COMMENT COLUMN column_name1 'another comment';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1098', () => {
    const query = `ALTER TABLE dst_00753 DROP COLUMN x, MODIFY COLUMN y String, ADD COLUMN z String DEFAULT 'DEFZ';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1099', () => {
    const query = `ALTER TABLE alter_attach DETACH PARTITION ALL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1100', () => {
    const query = `ALTER TABLE detach_all_no_partition DETACH PARTITION ALL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1101', () => {
    const query = `ALTER TABLE detach_all_no_partition ATTACH PARTITION tuple();`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1102', () => {
    const query = `ALTER TABLE replicated_table_detach_all1 DETACH PARTITION ALL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1103', () => {
    const query = `ALTER TABLE replicated_table_detach_all1 ATTACH PARTITION tuple(1);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1104', () => {
    const query = `ALTER TABLE replicated_table_detach_all1 FETCH PARTITION ALL FROM '/clickhouse/tables/test_00753_{database}/replicated_table_detach_all1'; -- { serverError SUPPORT_IS_DISABLED } DROP TABLE replicated_table_detach_all1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1105', () => {
    const query = `ALTER TABLE partition_all2 REPLACE PARTITION ALL FROM partition_all; -- { serverError SUPPORT_IS_DISABLED } ALTER TABLE partition_all MOVE PARTITION ALL TO TABLE partition_all2; -- { serverError SUPPORT_IS_DISABLED }
ALTER TABLE partition_all2 CLEAR INDEX p IN PARTITION ALL; -- { serverError SUPPORT_IS_DISABLED }
ALTER TABLE partition_all2 CLEAR COLUMN q IN PARTITION ALL; -- { serverError SUPPORT_IS_DISABLED }
ALTER TABLE partition_all2 UPDATE q = q + 1 IN PARTITION ALL where p = 1; -- { serverError SUPPORT_IS_DISABLED }
ALTER TABLE partition_all2 FREEZE PARTITION ALL; -- { serverError SUPPORT_IS_DISABLED }
CHECK TABLE partition_all2 PARTITION ALL; -- { serverError SUPPORT_IS_DISABLED }
OPTIMIZE TABLE partition_all2 PARTITION ALL; -- { serverError SUPPORT_IS_DISABLED }
DROP TABLE partition_all;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1106', () => {
    const query = `ALTER TABLE partition_attach_all DETACH PARTITION ALL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1107', () => {
    const query = `ALTER TABLE partition_attach_all ATTACH PARTITION ALL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1108', () => {
    const query = `ALTER TABLE partition_attach_all DETACH PARTITION 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1109', () => {
    const query = `ALTER TABLE partition_attach_all DROP PARTITION ALL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1110', () => {
    const query = `ALTER TABLE replicated_partition_attach_all DETACH PARTITION ALL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1111', () => {
    const query = `ALTER TABLE replicated_partition_attach_all ATTACH PARTITION ALL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1112', () => {
    const query = `ALTER TABLE replicated_partition_attach_all DETACH PARTITION 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1113', () => {
    const query = `ALTER TABLE replicated_partition_attach_all DROP PARTITION ALL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1114', () => {
    const query = `ALTER TABLE check_query_comment_column COMMENT COLUMN first_column 'comment 1_1',
COMMENT COLUMN second_column 'comment 2_1',
COMMENT COLUMN third_column 'comment 3_1',
COMMENT COLUMN fourth_column 'comment 4_1',
COMMENT COLUMN fifth_column 'comment 5_1';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1115', () => {
    const query = `ALTER TABLE check_query_comment_column MODIFY COLUMN first_column COMMENT 'comment 1_2',
MODIFY COLUMN second_column COMMENT 'comment 2_2',
MODIFY COLUMN third_column COMMENT 'comment 3_2',
MODIFY COLUMN fourth_column COMMENT 'comment 4_2',
MODIFY COLUMN fifth_column COMMENT 'comment 5_2';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1116', () => {
    const query = `ALTER TABLE check_query_comment_column COMMENT COLUMN first_column 'comment 1_2',
COMMENT COLUMN second_column 'comment 2_2',
COMMENT COLUMN third_column 'comment 3_2';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1117', () => {
    const query = `ALTER TABLE check_query_comment_column MODIFY COLUMN first_column COMMENT 'comment 1_3',
MODIFY COLUMN second_column COMMENT 'comment 2_3',
MODIFY COLUMN third_column COMMENT 'comment 3_3';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1118', () => {
    const query = `ALTER TABLE check_query_comment_column MODIFY COLUMN first_column DEFAULT 1 COMMENT 'comment 1_3',
MODIFY COLUMN second_column COMMENT 'comment 2_3',            -- We can't change default value of partition key.
MODIFY COLUMN third_column DEFAULT 1 COMMENT 'comment 3_3';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1119', () => {
    const query = `ALTER TABLE byte_identical_r1 ADD COLUMN y UInt64 DEFAULT rand();`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1120', () => {
    const query = `alter table tab_00718 modify column b UInt32;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1121', () => {
    const query = `alter table tab_00718 modify column b LowCardinality(UInt32);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1122', () => {
    const query = `alter table tab_00718 modify column b LowCardinality(String);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1123', () => {
    const query = `alter table tab_00718 modify column b String;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1124', () => {
    const query = `ALTER TABLE uuid MODIFY COLUMN id0 UUID;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1125', () => {
    const query = `ALTER TABLE uuid MODIFY COLUMN id1 UUID;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1126', () => {
    const query = `ALTER TABLE uuid MODIFY COLUMN id0 UUID; -- { serverError ALTER_OF_COLUMN_IS_FORBIDDEN } ALTER TABLE uuid MODIFY COLUMN id1 UUID; -- { serverError ALTER_OF_COLUMN_IS_FORBIDDEN }
DROP TABLE uuid;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1127', () => {
    const query = `alter table t_00712_1 add column c Int32;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1128', () => {
    const query = `ALTER TABLE mergetree_00712 ADD COLUMN y UInt8 DEFAULT 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1129', () => {
    const query = `alter table lc_null_int8_defnull add column val2 LowCardinality(Nullable(Int8)) DEFAULT NULL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1130', () => {
    const query = `alter table cardinality add column y LowCardinality(String);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1131', () => {
    const query = `ALTER TABLE alter_00665 MODIFY COLUMN \`boolean_false\` Nullable(UInt8);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1132', () => {
    const query = `ALTER TABLE src DROP PARTITION 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1133', () => {
    const query = `ALTER TABLE dst REPLACE PARTITION 1 FROM dst;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1134', () => {
    const query = `ALTER TABLE dst ATTACH PARTITION ALL FROM src;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1135', () => {
    const query = `ALTER TABLE dst DETACH PARTITION 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1136', () => {
    const query = `ALTER TABLE dst DETACH PARTITION 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1137', () => {
    const query = `ALTER TABLE dst DETACH PARTITION 2;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1138', () => {
    const query = `ALTER TABLE dst ATTACH PARTITION 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1139', () => {
    const query = `alter table test_00615 drop column data;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1140', () => {
    const query = `alter table test_00615 add column data Nullable(Float64);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1141', () => {
    const query = `ALTER TABLE mv_00610 DROP PARTITION 201801;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1142', () => {
    const query = `alter table \`table_00609\` add column def UInt64 default val + 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1143', () => {
    const query = `alter table \`table_00609\` add column def UInt64;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1144', () => {
    const query = `ALTER TABLE partition_and_primary_keys_using_same_expression DROP PARTITION '2018-02-20';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1145', () => {
    const query = `ALTER TABLE nested ADD COLUMN n.b Array(UInt64);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1146', () => {
    const query = `ALTER TABLE nested ADD COLUMN n.c Array(UInt64) DEFAULT arrayMap(x -> x * 2, n.a);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1147', () => {
    const query = `ALTER TABLE nullable_00571 ADD COLUMN n Nullable(UInt64);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1148', () => {
    const query = `ALTER TABLE nullable_00571 DROP COLUMN n;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1149', () => {
    const query = `ALTER TABLE nullable_00571 ADD COLUMN n Nullable(UInt64) DEFAULT NULL;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1150', () => {
    const query = `ALTER TABLE nullable_00571 ADD COLUMN n Nullable(UInt64) DEFAULT 0;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1151', () => {
    const query = `ALTER TABLE null_00557 ADD COLUMN y String, MODIFY COLUMN x Int64 DEFAULT toInt64(y);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1152', () => {
    const query = `ALTER TABLE multidimensional ADD COLUMN t Tuple(String, Array(Nullable(String)), Tuple(UInt32, Date));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1153', () => {
    const query = `ALTER TABLE deduplication_by_partition DROP PARTITION 200001;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1154', () => {
    const query = `ALTER TABLE \`.inner_id.00000510-1000-4000-8000-000000000001\` DROP PARTITION ID 'all';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1155', () => {
    const query = `ALTER TABLE \`.inner_id.00000510-1000-4000-8000-000000000002\` DROP PARTITION ID 'all';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1156', () => {
    const query = `ALTER TABLE not_partitioned_replica1_00502 DETACH PARTITION ID 'all';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1157', () => {
    const query = `ALTER TABLE partitioned_by_week_replica1 DROP PARTITION '1999-12-27';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1158', () => {
    const query = `ALTER TABLE partitioned_by_tuple_replica1_00502 DETACH PARTITION ID '20000101-1';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1159', () => {
    const query = `ALTER TABLE partitioned_by_string_replica1 DROP PARTITION 'bbb';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1160', () => {
    const query = `ALTER TABLE without_fixed_size_columns_replica1 DROP PARTITION 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1161', () => {
    const query = `ALTER TABLE not_partitioned DETACH PARTITION ID 'all';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1162', () => {
    const query = `ALTER TABLE partitioned_by_week DROP PARTITION '1999-12-27';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1163', () => {
    const query = `ALTER TABLE partitioned_by_tuple DETACH PARTITION ID '20000101-1';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1164', () => {
    const query = `ALTER TABLE partitioned_by_string DROP PARTITION 'bbb';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1165', () => {
    const query = `ALTER TABLE without_fixed_size_columns DROP PARTITION 1;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1166', () => {
    const query = `ALTER TABLE nullable_alter MODIFY COLUMN x Nullable(String);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1167', () => {
    const query = `ALTER TABLE nullable_alter MODIFY COLUMN x Nullable(FixedString(5));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1168', () => {
    const query = `ALTER TABLE clear_column CLEAR COLUMN num IN PARTITION '201612';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1169', () => {
    const query = `ALTER TABLE clear_column CLEAR COLUMN num IN PARTITION '201611';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1170', () => {
    const query = `ALTER TABLE clear_column1 ADD COLUMN s String;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1171', () => {
    const query = `ALTER TABLE clear_column1 CLEAR COLUMN s IN PARTITION '200001';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1172', () => {
    const query = `ALTER TABLE clear_column1 CLEAR COLUMN i IN PARTITION '200001';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1173', () => {
    const query = `ALTER TABLE clear_column1 CLEAR COLUMN i IN PARTITION '200002';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1174', () => {
    const query = `ALTER TABLE clear_column1 CLEAR COLUMN s IN PARTITION '200002';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1175', () => {
    const query = `ALTER TABLE clear_column1 CLEAR COLUMN s IN PARTITION '200012', CLEAR COLUMN i IN PARTITION '200012';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1176', () => {
    const query = `ALTER TABLE clear_column1 DROP PARTITION '200012', DROP PARTITION '200011';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1177', () => {
    const query = `ALTER TABLE agg_func_col ADD COLUMN af_avg1 AggregateFunction(avg, UInt8);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1178', () => {
    const query = `ALTER TABLE agg_func_col ADD COLUMN af_gua AggregateFunction(groupUniqArray, String) DEFAULT arrayReduce('groupUniqArrayState', ['---', '---']);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1179', () => {
    const query = `ALTER TABLE alter_00394 ADD COLUMN \`n.i8\` Array(Int8) AFTER i32;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1180', () => {
    const query = `ALTER TABLE enum_nested_alter MODIFY COLUMN n.e Array(Enum8('Hello' = 1, 'World' = 2));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1181', () => {
    const query = `ALTER TABLE enum_nested_alter MODIFY COLUMN n.e Array(Enum16('Hello' = 1, 'World' = 2, 'a' = 300));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1182', () => {
    const query = `ALTER TABLE enum_nested_alter MODIFY COLUMN n.e Array(UInt16);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1183', () => {
    const query = `ALTER TABLE enum_nested_alter MODIFY COLUMN n.e Array(String);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1184', () => {
    const query = `ALTER TABLE enum_nested_alter  MODIFY COLUMN tasks.errcategory Array(Enum8(
'undefined' = 0, 'system' = 1, 'generic' = 2, 'asio.netdb' = 3, 'asio.misc' = 4, 
'asio.addrinfo' = 5, 'rtb.client' = 6, 'rtb.logic' = 7, 'http.status' = 8, 'http.code' = 9)),
MODIFY COLUMN tasks.status Array(Enum8('hello' = 1, 'world' = 2, 'goodbye' = 3));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1185', () => {
    const query = `ALTER TABLE enum_nested_alter MODIFY COLUMN n.e Array(Enum8('Hello.world' = 1, 'a' = 2));`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1186', () => {
    const query = `ALTER TABLE prewhere_defaults ADD COLUMN y UInt16 DEFAULT x;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1187', () => {
    const query = `alter table enums modify column e Enum8('world' = 2, 'hello' = 1, '!' = 3);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1188', () => {
    const query = `alter table enums modify column e Enum16('world' = 2, 'hello' = 1, '!' = 3),
modify column sign Enum16('minus' = -1, 'plus' = 1),
modify column letter Enum16('a' = 0, 'b' = 1, 'c' = 2, 'no letter' = -256);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1189', () => {
    const query = `alter table enums modify column e Enum8('world' = 2, 'hello' = 1, '!' = 3),
modify column sign Enum8('minus' = -1, 'plus' = 1);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1190', () => {
    const query = `alter table aliases_test modify column array alias [0, 1, 2];`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1191', () => {
    const query = `alter table aliases_test modify column array default [0, 1, 2];`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1192', () => {
    const query = `alter table aliases_test add column struct.key Array(UInt8) default [0, 1, 2], add column struct.value Array(UInt8) default array;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1193', () => {
    const query = `alter table aliases_test modify column struct.value alias array;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1194', () => {
    const query = `ALTER TABLE attach_r2 DROP PARTITION 201402;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1195', () => {
    const query = `alter table prewhere_column_missing add column arr Array(UInt64);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1196', () => {
    const query = `alter table prewhere_column_missing add column hash_x UInt64 default intHash64(x);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1197', () => {
    const query = `ALTER TABLE alter_00147 ADD COLUMN n.y Array(UInt64);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1198', () => {
    const query = `ALTER TABLE prewhere ADD COLUMN a1 String AFTER a;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1199', () => {
    const query = `ALTER TABLE alter_00121 DROP COLUMN x;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1200', () => {
    const query = `ALTER TABLE alter_00121 ADD COLUMN x UInt8;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1201', () => {
    const query = `alter table defaulted add column payload_length UInt64 materialized length(payload);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1202', () => {
    const query = `alter table defaulted modify column payload_length default length(payload);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1203', () => {
    const query = `alter table defaulted modify column payload_length default length(payload) % 65535;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1204', () => {
    const query = `alter table defaulted modify column payload_length UInt16 default length(payload);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1205', () => {
    const query = `alter table defaulted drop column payload_length;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1206', () => {
    const query = `ALTER TABLE replicated_alter1 ADD COLUMN dt DateTime('UTC');`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1207', () => {
    const query = `ALTER TABLE replicated_alter1 ADD COLUMN n Nested(ui8 UInt8, s String);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1208', () => {
    const query = `ALTER TABLE replicated_alter1 ADD COLUMN \`n.d\` Array(Date);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1209', () => {
    const query = `ALTER TABLE replicated_alter1 ADD COLUMN s String DEFAULT '0';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1210', () => {
    const query = `ALTER TABLE replicated_alter1 DROP COLUMN \`n.d\`, MODIFY COLUMN s Int64;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1211', () => {
    const query = `ALTER TABLE replicated_alter1 ADD COLUMN \`n.d\` Array(Date), MODIFY COLUMN s UInt32;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1212', () => {
    const query = `ALTER TABLE replicated_alter1 DROP COLUMN n.ui8, DROP COLUMN n.d;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1213', () => {
    const query = `ALTER TABLE replicated_alter1 DROP COLUMN n.s;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1214', () => {
    const query = `ALTER TABLE replicated_alter1 ADD COLUMN n.s Array(String), ADD COLUMN n.d Array(Date);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1215', () => {
    const query = `ALTER TABLE replicated_alter1 DROP COLUMN n;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1216', () => {
    const query = `ALTER TABLE replicated_alter1 MODIFY COLUMN dt Date, MODIFY COLUMN s DateTime('UTC') DEFAULT '1970-01-01 00:00:00';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1217', () => {
    const query = `ALTER TABLE alter_00061 ADD COLUMN n Nested(ui8 UInt8, s String);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1218', () => {
    const query = `ALTER TABLE alter_00061 ADD COLUMN \`n.d\` Array(Date);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1219', () => {
    const query = `ALTER TABLE alter_00061 ADD COLUMN s String DEFAULT '0';`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1220', () => {
    const query = `ALTER TABLE alter_00061 DROP COLUMN \`n.d\`, MODIFY COLUMN s Int64;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1221', () => {
    const query = `ALTER TABLE alter_00061 ADD COLUMN \`n.d\` Array(Date), MODIFY COLUMN s UInt32;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1222', () => {
    const query = `ALTER TABLE alter_00061 DROP COLUMN n.ui8, DROP COLUMN n.d;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1223', () => {
    const query = `ALTER TABLE alter_00061 DROP COLUMN n.s;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1224', () => {
    const query = `ALTER TABLE alter_00061 ADD COLUMN n.s Array(String), ADD COLUMN n.d Array(Date);`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1225', () => {
    const query = `ALTER TABLE alter_00061 DROP COLUMN n;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('[ALTER] should pass without errors: 1226', () => {
    const query = `ALTER TABLE alter_test ADD COLUMN Added2 UInt32;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});
