import {KeywordSuggestion} from '../../../../../shared/autocomplete-types.js';
import {parseYqlQueryWithCursor} from '../../../index.js';

test('should suggest properly after CREATE', () => {
    const autocompleteResult = parseYqlQueryWithCursor('CREATE |');

    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: 'SECRET'},
        {value: 'STREAMING'},
        {value: 'OR'},
        {value: 'TRANSFER'},
        {value: 'RESOURCE'},
        {value: 'BACKUP'},
        {value: 'VIEW'},
        {value: 'TOPIC'},
        {value: 'ASYNC'},
        {value: 'EXTERNAL'},
        {value: 'OBJECT'},
        {value: 'GROUP'},
        {value: 'USER'},
        {value: 'TEMPORARY'},
        {value: 'TEMP'},
        {value: 'TABLESTORE'},
        {value: 'TABLE'},
    ];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});
