import {KeywordSuggestion} from '../../../../../shared/autocomplete-types';
import {parseYqlQueryWithCursor} from '../../../index';

test('should suggest properly after CREATE', () => {
    const autocompleteResult = parseYqlQueryWithCursor('CREATE |');

    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: 'VIEW'},
        {value: 'TOPIC'},
        {value: 'ASYNC'},
        {value: 'EXTERNAL'},
        {value: 'OR'},
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
