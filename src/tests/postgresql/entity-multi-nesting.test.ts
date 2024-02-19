import {parsePostgreSqlQueryWithCursor} from '../lib';

// Checkout isStartingToWriteRule comment for more information about these tests

test('PostgreSqlParser.RULE_indexName should not be suggested multiple times', () => {
    const parseResult = parsePostgreSqlQueryWithCursor('DROP INDEX test_index |');
    expect(parseResult.suggestIndexes).toEqual(false);
});

test('PostgreSqlParser.triggerName should not be suggested multiple times', () => {
    const parseResult = parsePostgreSqlQueryWithCursor('DROP TRIGGER test_trigger |');
    expect(parseResult.suggestTriggers).toEqual(false);
});
