import {KeywordSuggestion} from '../../../../autocomplete-types';
import {parseClickHouseQueryWithCursor} from '../../../../shared/parse-query-with-cursor';

test('should suggest properly after CREATE', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('CREATE |');

    const keywordsSuggestion: KeywordSuggestion[] = [
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
