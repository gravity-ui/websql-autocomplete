import {parseTrinoQueryWithCursor} from '../index';
import {KeywordSuggestion} from '../../../shared/autocomplete-types';

test('should suggest properly for an empty query', () => {
    const autocompleteResult = parseTrinoQueryWithCursor('|');

    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: 'WITH'},
        {value: 'SELECT'},
        {value: 'TABLE'},
        {value: 'VALUES'},
        {value: 'USE'},
        {value: 'CREATE'},
        {value: 'DROP'},
        {value: 'ALTER'},
        {value: 'INSERT'},
        {value: 'UPDATE'},
        {value: 'DELETE'},
        {value: 'TRUNCATE'},
        {value: 'COMMENT'},
        {value: 'ANALYZE'},
        {value: 'REFRESH'},
        {value: 'CALL'},
        {value: 'GRANT'},
        {value: 'REVOKE'},
        {value: 'SET'},
        {value: 'DENY'},
        {value: 'SHOW'},
        {value: 'EXPLAIN'},
        {value: 'DESCRIBE'},
        {value: 'DESC'},
        {value: 'RESET'},
        {value: 'START'},
        {value: 'COMMIT'},
        {value: 'ROLLBACK'},
        {value: 'PREPARE'},
        {value: 'DEALLOCATE'},
        {value: 'EXECUTE'},
        {value: 'MERGE'},
    ];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
    expect(autocompleteResult.suggestTemplates).toEqual(true);
});
