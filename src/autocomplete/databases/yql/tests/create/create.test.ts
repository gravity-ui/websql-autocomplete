import {KeywordSuggestion} from '../../../../autocomplete-types';
import {parseYQLQueryWithCursor} from '../../../../shared/parse-query-with-cursor';

test('should suggest properly after CREATE', () => {
    const autocompleteResult = parseYQLQueryWithCursor('CREATE |');

    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: 'VIEW'},
        {value: 'TOPIC'},
        {value: 'ASYNC'},
        {value: 'EXTERNAL'},
        {value: 'OBJECT'},
        {value: 'GROUP'},
        {value: 'USER'},
        {value: 'TABLESTORE'},
        {value: 'TABLE'},
    ];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});
