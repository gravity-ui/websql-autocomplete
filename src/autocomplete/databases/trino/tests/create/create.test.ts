import {parseTrinoQueryWithCursor} from '../../index.js';
import {KeywordSuggestion} from '../../../../shared/autocomplete-types.js';

test('should suggest properly after CREATE', () => {
    const autocompleteResult = parseTrinoQueryWithCursor('CREATE |');

    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: 'ROLE'},
        {value: 'FUNCTION'},
        {value: 'OR'},
        {value: 'VIEW'},
        {value: 'MATERIALIZED'},
        {value: 'TABLE'},
        {value: 'SCHEMA'},
        {value: 'CATALOG'},
    ];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});
