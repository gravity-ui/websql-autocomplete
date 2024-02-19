import {parseMySqlQueryWithCursor} from '../lib';

// Checkout isStartingToWriteRule comment for more information about these tests

test('MySqlParser.RULE_indexName should not be suggested multiple times', () => {
    const parseResult = parseMySqlQueryWithCursor('DROP INDEX test_index |');
    expect(parseResult.suggestIndexes).toEqual(false);
});

test('MySqlParser.RULE_triggerName should not be suggested multiple times', () => {
    const parseResult = parseMySqlQueryWithCursor('DROP TRIGGER test_trigger |');
    expect(parseResult.suggestTriggers).toEqual(false);
});
