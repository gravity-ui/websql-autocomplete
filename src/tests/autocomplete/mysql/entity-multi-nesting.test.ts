import {parseMySqlQueryWithCursor} from '../../lib';

// Checkout isStartingToWriteRule comment for more information about these tests

test('MySqlParser.RULE_indexName should not be suggested multiple times', () => {
    const autocompleteResult = parseMySqlQueryWithCursor('DROP INDEX test_index |');
    expect(autocompleteResult.suggestIndexes).toEqual(false);
});

test('MySqlParser.RULE_triggerName should not be suggested multiple times', () => {
    const autocompleteResult = parseMySqlQueryWithCursor('DROP TRIGGER test_trigger |');
    expect(autocompleteResult.suggestTriggers).toEqual(false);
});
