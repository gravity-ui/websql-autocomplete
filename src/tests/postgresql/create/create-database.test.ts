import {parsePostgreSqlQueryWithCursor} from '../../shared/lib';
import {KeywordSuggestion} from '../../../types';

test('should suggest properly after DATABASE', () => {
    const parseResult = parsePostgreSqlQueryWithCursor('CREATE DATABASE |');

    const keywordsSuggestion: KeywordSuggestion[] = [];
    expect(parseResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after database name', () => {
    const parseResult = parsePostgreSqlQueryWithCursor('CREATE DATABASE test_database |');

    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: 'WITH'},
        {value: 'CONNECTION'},
        {value: 'ENCODING'},
        {value: 'LOCATION'},
        {value: 'OWNER'},
        {value: 'TABLESPACE'},
        {value: 'TEMPLATE'},
    ];
    expect(parseResult.suggestKeywords).toEqual(keywordsSuggestion);
});
