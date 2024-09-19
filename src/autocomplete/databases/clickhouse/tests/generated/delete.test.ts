/* no-irregular-whitespace: "off" */
/* eslint no-useless-escape: "off" */
import {parseClickHouseQuery} from '../../index';

test('should pass without errors delete: 1', () => {
    const query = `DELETE FROM users_compact WHERE uid = 1231;  -- { serverError SUPPORT_IS_DISABLED } SELECT 'testing drop mode';`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors delete: 2', () => {
    const query = `DELETE FROM users_compact WHERE uid = 1231;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors delete: 3', () => {
    const query = `DELETE FROM users_compact WHERE uid = 6666;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors delete: 4', () => {
    const query = `DELETE FROM users_wide WHERE uid = 1231;  -- { serverError SUPPORT_IS_DISABLED } SELECT 'testing drop mode';`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors delete: 5', () => {
    const query = `DELETE FROM users_wide WHERE uid = 1231;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors delete: 6', () => {
    const query = `DELETE FROM users_wide WHERE uid = 6666;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors delete: 7', () => {
    const query = `DELETE FROM t_lightweight_deletes WHERE a = 1 SETTINGS lightweight_deletes_sync = 2;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors delete: 8', () => {
    const query = `DELETE FROM t_lightweight_deletes WHERE a = 2 SETTINGS lightweight_deletes_sync = 0;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors delete: 9', () => {
    const query = `DELETE FROM lwd_merge WHERE id % 10 > 0;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors delete: 10', () => {
    const query = `DELETE FROM lwd_merge WHERE id % 100 == 0;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors delete: 11', () => {
    const query = `DELETE FROM t_lwd_mutations WHERE id % 10 = 0;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors delete: 12', () => {
    const query = `DELETE FROM t_lwd_mutations WHERE id % 10 = 2;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors delete: 13', () => {
    const query = `DELETE FROM t_materialize_delete WHERE id % 7 = 3;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors delete: 14', () => {
    const query = `DELETE FROM t_materialize_delete WHERE id % 7 = 4;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors delete: 15', () => {
    const query = `DELETE FROM test_apply_deleted_mask WHERE id % 2 = 0;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors delete: 16', () => {
    const query = `DELETE FROM t_mutations_subcolumns WHERE obj.k1.k2 = 'fee';`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors delete: 17', () => {
    const query = `DELETE FROM t_missed_subcolumns WHERE obj.k1.k3 = 'fee';`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors delete: 18', () => {
    const query = `DELETE FROM t_projections_lwd WHERE a = 1; -- { serverError SUPPORT_IS_DISABLED } KILL MUTATION WHERE database = currentDatabase() AND table = 't_projections_lwd' SYNC FORMAT Null;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors delete: 19', () => {
    const query = `DELETE FROM t_projections_lwd WHERE a = 2;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors delete: 20', () => {
    const query = `DELETE FROM t_sparse_mutation WHERE id % 2 = 0;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors delete: 21', () => {
    const query = `DELETE FROM 02707_keepermap_delete_update WHERE value LIKE 'Some%string';`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors delete: 22', () => {
    const query = `DELETE FROM 02707_keepermap_delete_update WHERE 1 = 1;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors delete: 23', () => {
    const query = `DELETE FROM 02581_trips                        WHERE id IN (SELECT (number*10 + 9)::UInt32 FROM numbers(10000000)) SETTINGS lightweight_deletes_sync = 2;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors delete: 24', () => {
    const query = `DELETE FROM 02577_keepermap_delete_update WHERE value LIKE 'Some%string';`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors delete: 25', () => {
    const query = `DELETE FROM 02577_keepermap_delete_update WHERE 1 = 1;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors delete: 26', () => {
    const query = `DELETE FROM t1_local ON CLUSTER test_shard_localhost WHERE tc1 = 1;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors delete: 27', () => {
    const query = `DELETE FROM lwd_test_02521 WHERE id < 25000;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors delete: 28', () => {
    const query = `DELETE FROM kekv WHERE a = 1; -- { serverError BAD_ARGUMENTS} DELETE FROM kekv WHERE a = 1; -- { serverError BAD_ARGUMENTS}
DROP TABLE IF EXISTS kek;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors delete: 29', () => {
    const query = `DELETE FROM table_02513 WHERE n%10=0;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors delete: 30', () => {
    const query = `DELETE FROM test_filter WHERE c = 0;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors delete: 31', () => {
    const query = `delete from test where id % 2 = 0 SETTINGS mutations_sync=0;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors delete: 32', () => {
    const query = `DELETE FROM 02418_test WHERE key <= 2;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors delete: 33', () => {
    const query = `DELETE FROM 02416_rocksdb WHERE value LIKE 'Some%string';`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors delete: 34', () => {
    const query = `DELETE FROM 02416_rocksdb WHERE 1 = 1;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors delete: 35', () => {
    const query = `DELETE FROM lwd_test WHERE (id % 3) = 0;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors delete: 36', () => {
    const query = `DELETE FROM lwd_test WHERE (id % 2) = 0;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors delete: 37', () => {
    const query = `DELETE FROM lwd_test WHERE (id % 3) = 2;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors delete: 38', () => {
    const query = `DELETE FROM replicated_table_r1 WHERE id = 10;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors delete: 39', () => {
    const query = `DELETE FROM replicated_table_r2 WHERE name IN ('1','2','3','4');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors delete: 40', () => {
    const query = `DELETE FROM replicated_table_r1 WHERE 1;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors delete: 41', () => {
    const query = `DELETE FROM t_light_r1 WHERE c%5=1;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors delete: 42', () => {
    const query = `DELETE FROM t_light_r2 WHERE c=4;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors delete: 43', () => {
    const query = `DELETE FROM t_light_sync_r1 WHERE c%3=1;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors delete: 44', () => {
    const query = `DELETE FROM t_merge_tree IN PARTITION '2024-08-01' WHERE id = '1';`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors delete: 45', () => {
    const query = `DELETE FROM t_replicated_merge_tree IN PARTITION '2024-08-01' WHERE id = '1';`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors delete: 46', () => {
    const query = `DELETE FROM t_obj WHERE id = 10;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors delete: 47', () => {
    const query = `DELETE FROM lwd_test WHERE id < 100000;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors delete: 48', () => {
    const query = `DELETE FROM lwd_test WHERE id < 200000;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors delete: 49', () => {
    const query = `DELETE FROM lwd_test WHERE id < 300000;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors delete: 50', () => {
    const query = `DELETE FROM lwd_test WHERE id >= 300000 and id < 400000;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors delete: 51', () => {
    const query = `DELETE FROM merge_table_standard_delete WHERE id = 10;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors delete: 52', () => {
    const query = `DELETE FROM merge_table_standard_delete WHERE name IN ('1','2','3','4');`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors delete: 53', () => {
    const query = `DELETE FROM merge_table_standard_delete WHERE 1;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors delete: 54', () => {
    const query = `DELETE FROM t_light WHERE c%5=1;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors delete: 55', () => {
    const query = `DELETE FROM t_light WHERE c=4;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors delete: 56', () => {
    const query = `DELETE FROM t_large WHERE a = 50000;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors delete: 57', () => {
    const query = `DELETE FROM t_proj WHERE a < 100; -- { serverError SUPPORT_IS_DISABLED } SELECT avg(a), avg(b), count() FROM t_proj;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors delete: 58', () => {
    const query = `DELETE FROM merge_table_standard_delete WHERE id = 10; -- { serverError SUPPORT_IS_DISABLED } SET enable_lightweight_delete = false;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors delete: 59', () => {
    const query = `DELETE FROM merge_table_standard_delete WHERE id = 10; -- { serverError SUPPORT_IS_DISABLED } DROP TABLE merge_table_standard_delete;`;

    const autocompleteResult = parseClickHouseQuery(query, {line: 0, column: 0});
    expect(autocompleteResult.errors).toHaveLength(0);
});
