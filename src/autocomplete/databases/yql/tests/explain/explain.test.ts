import {parseYQLQueryWithCursor} from '../../../../shared/parse-query-with-cursor';
import {KeywordSuggestion} from '../../../../autocomplete-types';

test('should suggest keywords after EXPLAIN', () => {
    const autocompleteResult = parseYQLQueryWithCursor('EXPLAIN |');
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
        {value: 'FOR'},
        {value: 'VALUES'},
        {value: 'GRANT'},
        {value: 'REVOKE'},
        {value: 'QUERY'},
    ];

    expect(autocompleteResult.suggestKeywords).toEqual(keywords);
    expect(autocompleteResult.suggestTemplates).toEqual(true);
});
