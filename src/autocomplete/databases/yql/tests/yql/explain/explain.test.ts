import {parseYqlQueryWithCursor} from '../../../index';
import {KeywordSuggestion} from '../../../../../shared/autocomplete-types';

test('should suggest keywords after EXPLAIN', () => {
    const autocompleteResult = parseYqlQueryWithCursor('EXPLAIN |');
    const keywords: KeywordSuggestion[] = [
        {value: 'PRAGMA'},
        {value: 'DISCARD'},
        {value: 'PROCESS'},
        {value: 'REDUCE'},
        {value: 'FROM'},
        {value: 'SELECT'},
        {value: 'CREATE'},
        {value: 'DROP'},
        {value: 'USE'},
        {value: 'INSERT'},
        {value: 'UPSERT'},
        {value: 'REPLACE'},
        {value: 'COMMIT'},
        {value: 'BATCH'},
        {value: 'UPDATE'},
        {value: 'DELETE'},
        {value: 'ROLLBACK'},
        {value: 'DECLARE'},
        {value: 'IMPORT'},
        {value: 'EXPORT'},
        {value: 'ALTER'},
        {value: 'DO'},
        {value: 'DEFINE'},
        {value: 'EVALUATE'},
        {value: 'IF'},
        {value: 'PARALLEL'},
        {value: 'FOR'},
        {value: 'VALUES'},
        {value: 'GRANT'},
        {value: 'REVOKE'},
        {value: 'ANALYZE'},
        {value: 'BACKUP'},
        {value: 'RESTORE'},
        {value: 'QUERY'},
    ];

    expect(autocompleteResult.suggestKeywords).toEqual(keywords);
    expect(autocompleteResult.suggestTemplates).toEqual(true);
});
