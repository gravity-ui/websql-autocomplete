import {parseClickHouseQueryWithCursor, parseClickHouseQueryWithoutCursor} from '../..';
import {KeywordSuggestion} from '../../../../shared';

test('should not report errors', () => {
    const autocompleteResult = parseClickHouseQueryWithoutCursor('CREATE QUOTA test_quota;');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on extended statement', () => {
    const autocompleteResult = parseClickHouseQueryWithoutCursor(`
      CREATE QUOTA IF NOT EXISTS test_quota ON CLUSTER test_cluster
        IN test_access_storage_type KEYED BY user_name
        FOR RANDOMIZED INTERVAL 1 second MAX queries = 10,
        FOR RANDOMIZED INTERVAL 1 minute MAX query_selects = 10,
        FOR RANDOMIZED INTERVAL 1 hour MAX query_inserts = 10
        FOR RANDOMIZED INTERVAL 1 day MAX errors = 10
        FOR RANDOMIZED INTERVAL 1 week MAX result_rows = 10,
        FOR RANDOMIZED INTERVAL 1 month MAX result_bytes = 10,
        FOR RANDOMIZED INTERVAL 1 quarter MAX read_rows = 10, MAX execution_time = 10,
        FOR RANDOMIZED INTERVAL 1 year MAX read_bytes = 10
        FOR RANDOMIZED INTERVAL 1 year NO LIMITS
        FOR RANDOMIZED INTERVAL 1 year TRACKING ONLY
      TO test_role1, test_user1, ALL, ALL EXCEPT test_role2, test_user2, CURRENT_USER;
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should suggest properly after quota', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('CREATE QUOTA |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'OR'}, {value: 'IF'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after or', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('CREATE QUOTA OR |');

    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: 'TO'},
        {value: 'FOR'},
        {value: 'KEYED'},
        {value: 'IN'},
        {value: 'ON'},
        {value: 'REPLACE'},
        {value: 'FORMAT'},
        {value: 'INTO'},
    ];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after if', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('CREATE QUOTA IF |');

    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: 'TO'},
        {value: 'FOR'},
        {value: 'KEYED'},
        {value: 'IN'},
        {value: 'ON'},
        {value: 'NOT'},
        {value: 'FORMAT'},
        {value: 'INTO'},
    ];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after not', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('CREATE QUOTA IF NOT |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'EXISTS'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after ON', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('CREATE QUOTA test_quota ON |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'CLUSTER'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after keyed', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('CREATE QUOTA test_quota KEYED |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'BY'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after by', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('CREATE QUOTA test_quota KEYED BY |');

    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: 'USER_NAME'},
        {value: 'IP_ADDRESS'},
        {value: 'CLIENT_KEY'},
        {value: 'NOT'},
        {value: 'CLIENT_KEY_OR_USER_NAME'},
        {value: 'CLIENT_KEY_OR_IP_ADDRESS'},
    ];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after for', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('CREATE QUOTA test_quota FOR |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'INTERVAL'}, {value: 'RANDOMIZED'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after interval identifier', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor(
        'CREATE QUOTA test_quota FOR INTERVAL 1 |',
    );

    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: 'DAY'},
        {value: 'HOUR'},
        {value: 'MINUTE'},
        {value: 'MONTH'},
        {value: 'QUARTER'},
        {value: 'SECOND'},
        {value: 'WEEK'},
        {value: 'YEAR'},
    ];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after interval declaration', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor(
        'CREATE QUOTA test_quota FOR INTERVAL 1 year |',
    );

    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: 'MAX'},
        {value: 'NO'},
        {value: 'TRACKING'},
    ];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after no', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor(
        'CREATE QUOTA test_quota FOR INTERVAL 1 year NO |',
    );

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'LIMITS'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after tracking', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor(
        'CREATE QUOTA test_quota FOR INTERVAL 1 year TRACKING |',
    );

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'ONLY'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after max', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor(
        'CREATE QUOTA test_quota FOR INTERVAL 1 MINUTE MAX |',
    );

    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: 'QUERIES'},
        {value: 'query_selects'},
        {value: 'query_inserts'},
        {value: 'ERRORS'},
        {value: 'result_rows'},
        {value: 'result_bytes'},
        {value: 'read_rows'},
        {value: 'read_bytes'},
        {value: 'execution_time'},
        {value: 'failed_sequential_authentications'},
    ];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after to', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('CREATE QUOTA test_quota TO |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'CURRENT_USER'}, {value: 'ALL'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after all', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('CREATE QUOTA test_quota TO ALL |');

    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: 'EXCEPT'},
        {value: 'FORMAT'},
        {value: 'INTO'},
    ];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});
