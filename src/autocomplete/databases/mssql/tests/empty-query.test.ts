import {parseMsSqlQueryWithCursor} from '../index.js';
import {KeywordSuggestion} from '../../../shared/autocomplete-types.js';

test('should suggest properly for an empty query', () => {
    const autocompleteResult = parseMsSqlQueryWithCursor('|');

    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: 'GO'},
        {value: 'WITH'},
        {value: 'MERGE'},
        {value: 'DELETE'},
        {value: 'INSERT'},
        {value: 'SELECT'},
        {value: 'UPDATE'},
        {value: 'BEGIN'},
        {value: 'BREAK'},
        {value: 'CONTINUE'},
        {value: 'GOTO'},
        {value: 'IF'},
        {value: 'PRINT'},
        {value: 'RAISERROR'},
        {value: 'RETURN'},
        {value: 'THROW'},
        {value: 'WAITFOR'},
        {value: 'WHILE'},
        {value: 'ALTER'},
        {value: 'CHECKPOINT'},
        {value: 'END'},
        {value: 'GET'},
        {value: 'SEND'},
        {value: 'CREATE'},
        {value: 'CLOSE'},
        {value: 'DEALLOCATE'},
        {value: 'DECLARE'},
        {value: 'FETCH'},
        {value: 'OPEN'},
        {value: 'EXECUTE'},
        {value: 'KILL'},
        {value: 'RECONFIGURE'},
        {value: 'GRANT'},
        {value: 'REVERT'},
        {value: 'SET'},
        {value: 'SETUSER'},
        {value: 'SHUTDOWN'},
        {value: 'COMMIT'},
        {value: 'ROLLBACK'},
        {value: 'SAVE'},
        {value: 'USE'},
        {value: 'DISABLE'},
        {value: 'DROP'},
        {value: 'ENABLE'},
        {value: 'LOCK'},
        {value: 'TRUNCATE'},
        {value: 'DBCC'},
        {value: 'BACKUP'},
    ];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
    expect(autocompleteResult.suggestTemplates).toEqual(true);
});
