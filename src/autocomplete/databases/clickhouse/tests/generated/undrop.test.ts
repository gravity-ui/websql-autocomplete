/* eslint no-useless-escape: "off" */
import {parseClickHouseQueryWithoutCursor} from '../../index';

test('should pass without errors undrop: 1', () => {
    const query = `undrop table 02681_undrop_mergetree;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors undrop: 2', () => {
    const query = `undrop table 02681_undrop_detach; -- { serverError TABLE_ALREADY_EXISTS } attach table 02681_undrop_detach;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors undrop: 3', () => {
    const query = `undrop table 02681_undrop_uuid_on_cluster on cluster test_shard_localhost format Null;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors undrop: 4', () => {
    const query = `undrop table 02681_undrop_no_uuid_on_cluster on cluster test_shard_localhost format Null;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors undrop: 5', () => {
    const query = `undrop table 02681_undrop_replicatedmergetree;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors undrop: 6', () => {
    const query = `undrop table 02681_undrop_log;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors undrop: 7', () => {
    const query = `undrop table 02681_undrop_distributed;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors undrop: 8', () => {
    const query = `undrop table 02681_undrop_multiple;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should pass without errors undrop: 9', () => {
    const query = `undrop table 02681_undrop_multiple; -- { serverError TABLE_ALREADY_EXISTS } drop table 02681_undrop_multiple sync;`;

    const autocompleteResult = parseClickHouseQueryWithoutCursor(query);
    expect(autocompleteResult.errors).toHaveLength(0);
});
