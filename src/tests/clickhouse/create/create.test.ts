import {KeywordSuggestion} from '../../../types';
import {parseClickHouseQueryWithCursor} from '../../shared/lib';

test('should suggest properly after CREATE', () => {
    const parseResults = parseClickHouseQueryWithCursor('CREATE |');

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
    expect(parseResults.suggestKeywords).toEqual(keywordsSuggestion);
});
