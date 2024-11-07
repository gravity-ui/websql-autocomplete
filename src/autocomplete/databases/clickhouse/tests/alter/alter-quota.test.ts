import {parseClickHouseQueryWithCursor, parseClickHouseQueryWithoutCursor} from '../..';
import {KeywordSuggestion} from '../../../../shared';

test('should not report errors', () => {
    const autocompleteResult = parseClickHouseQueryWithoutCursor('ALTER QUOTA test_quota;');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on extended statement', () => {
    const autocompleteResult = parseClickHouseQueryWithoutCursor(`
      ALTER QUOTA IF EXISTS test_quota ON CLUSTER test_cluster KEYED BY user_name
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

      ALTER QUOTA IF EXISTS test_quota ON CLUSTER test_cluster KEY BY user_name
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

      ALTER QUOTA IF EXISTS test_quota1 ON CLUSTER test_cluster RENAME TO test_quota2 NOT KEYED
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

test('should suggest properly after QUOTA', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('ALTER QUOTA |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'IF'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after IF', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('ALTER QUOTA IF |');

    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: 'TO'},
        {value: 'FOR'},
        {value: 'KEY'},
        {value: 'KEYED'},
        {value: 'NOT'},
        {value: 'RENAME'},
        {value: 'ON'},
        {value: 'EXISTS'},
        {value: 'FORMAT'},
        {value: 'INTO'},
    ];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after ON', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('ALTER QUOTA test_quota ON |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'CLUSTER'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after KEYED', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('ALTER QUOTA test_quota KEYED |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'BY'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after NOT', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('ALTER QUOTA test_quota NOT |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'KEYED'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after BY', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('ALTER QUOTA test_quota KEYED BY |');

    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: 'USER_NAME'},
        {value: 'IP_ADDRESS'},
        {value: 'CLIENT_KEY'},
        {value: 'CLIENT_KEY_OR_USER_NAME'},
        {value: 'CLIENT_KEY_OR_IP_ADDRESS'},
    ];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after FOR', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('ALTER QUOTA test_quota FOR |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'INTERVAL'}, {value: 'RANDOMIZED'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after interval identifier', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor(
        'ALTER QUOTA test_quota FOR INTERVAL 1 |',
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
        'ALTER QUOTA test_quota FOR INTERVAL 1 year |',
    );

    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: 'MAX'},
        {value: 'NO'},
        {value: 'TRACKING'},
    ];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after NO', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor(
        'ALTER QUOTA test_quota FOR INTERVAL 1 year NO |',
    );

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'LIMITS'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after TRACKING', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor(
        'ALTER QUOTA test_quota FOR INTERVAL 1 year TRACKING |',
    );

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'ONLY'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after MAX', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor(
        'ALTER QUOTA test_quota FOR INTERVAL 1 MINUTE MAX |',
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

test('should suggest properly after TO', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('ALTER QUOTA test_quota TO |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'CURRENT_USER'}, {value: 'ALL'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after ALL', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('ALTER QUOTA test_quota TO ALL |');

    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: 'EXCEPT'},
        {value: 'FORMAT'},
        {value: 'INTO'},
    ];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});
