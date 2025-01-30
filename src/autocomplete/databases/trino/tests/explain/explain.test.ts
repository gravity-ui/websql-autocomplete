import {KeywordSuggestion} from '../../../../shared/autocomplete-types';
import {parseTrinoQueryWithCursor} from '../../index';

test('should suggest SELECT and contain suggestTemplates with EXPLAIN prefix', () => {
    const autocompleteResult = parseTrinoQueryWithCursor('EXPLAIN |');
    const keywordSuggestion: KeywordSuggestion[] = [
        {value: 'ANALYZE'},
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

    expect(autocompleteResult.suggestKeywords).toEqual(keywordSuggestion);
    expect(autocompleteResult.suggestTemplates).toEqual(true);
});
