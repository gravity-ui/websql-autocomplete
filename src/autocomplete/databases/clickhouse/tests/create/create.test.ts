import {KeywordSuggestion} from '../../../../shared/autocomplete-types';
import {parseClickHouseQueryWithCursor} from '../../index';

test('should suggest properly after CREATE', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('CREATE |');

    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: 'NAMED'},
        {value: 'SETTINGS'},
        {value: 'ROLE'},
        {value: 'QUOTA'},
        {value: 'POLICY'},
        {value: 'ROW'},
        {value: 'USER'},
        {value: 'VIEW'},
        {value: 'OR'},
        {value: 'TABLE'},
        {value: 'TEMPORARY'},
        {value: 'MATERIALIZED'},
        {value: 'LIVE'},
        {value: 'DICTIONARY'},
        {value: 'DATABASE'},
    ];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});
