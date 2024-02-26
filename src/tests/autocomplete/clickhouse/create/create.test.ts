import {KeywordSuggestion} from '../../../../autocomplete/autocomplete-types';
import {parseClickHouseQueryWithCursor} from '../../../test-lib';

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
