import {parsePostgreSqlQueryWithCursor} from '../../test-lib';

// Checkout isStartingToWriteRule comment for more information about these tests

test('PostgreSqlParser.RULE_indexName should not be suggested multiple times', () => {
    const autocompleteResult = parsePostgreSqlQueryWithCursor('DROP INDEX test_index |');
    expect(autocompleteResult.suggestIndexes).toEqual(false);
});

test('PostgreSqlParser.triggerName should not be suggested multiple times', () => {
    const autocompleteResult = parsePostgreSqlQueryWithCursor('DROP TRIGGER test_trigger |');
    expect(autocompleteResult.suggestTriggers).toEqual(false);
});
