import {parsePostgreSqlQueryWithCursor} from '../lib';
import {KeywordSuggestion} from '../../types';

test('should suggest properly for an empty query', () => {
    const parseResult = parsePostgreSqlQueryWithCursor('|');

    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: 'ALTER'},
        {value: 'ANALYSE'},
        {value: 'ANALYZE'},
        {value: 'CALL'},
        {value: 'CHECKPOINT'},
        {value: 'CLOSE'},
        {value: 'CLUSTER'},
        {value: 'COMMENT'},
        {value: 'SET'},
        {value: 'COPY'},
        {value: 'CREATE'},
        {value: 'DEALLOCATE'},
        {value: 'DECLARE'},
        {value: 'WITH'},
        {value: 'DELETE'},
        {value: 'DISCARD'},
        {value: 'DO'},
        {value: 'DROP'},
        {value: 'EXECUTE'},
        {value: 'EXPLAIN'},
        {value: 'FETCH'},
        {value: 'MOVE'},
        {value: 'GRANT'},
        {value: 'IMPORT'},
        {value: 'INSERT'},
        {value: 'MERGE'},
        {value: 'LISTEN'},
        {value: 'REFRESH'},
        {value: 'LOAD'},
        {value: 'LOCK'},
        {value: 'NOTIFY'},
        {value: 'PREPARE'},
        {value: 'REASSIGN'},
        {value: 'REINDEX'},
        {value: 'REVOKE'},
        {value: 'SECURITY'},
        {value: 'SELECT'},
        {value: 'VALUES'},
        {value: 'TABLE'},
        {value: 'ABORT'},
        {value: 'BEGIN'},
        {value: 'START'},
        {value: 'COMMIT'},
        {value: 'END'},
        {value: 'ROLLBACK'},
        {value: 'SAVEPOINT'},
        {value: 'RELEASE'},
        {value: 'TRUNCATE'},
        {value: 'UNLISTEN'},
        {value: 'UPDATE'},
        {value: 'VACUUM'},
        {value: 'RESET'},
        {value: 'SHOW'},
    ];
    expect(parseResult.suggestKeywords).toEqual(keywordsSuggestion);
    expect(parseResult.suggestTemplates).toEqual(true);
});