import {parsePostgreSqlQueryWithCursor} from '../../shared/lib';
import {KeywordSuggestion} from '../../../types';

test('should suggest properly after SCHEMA', () => {
    const parseResult = parsePostgreSqlQueryWithCursor('CREATE SCHEMA |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'AUTHORIZATION'}, {value: 'IF'}];
    expect(parseResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after schema name', () => {
    const parseResult = parsePostgreSqlQueryWithCursor('CREATE SCHEMA test_schema |');

    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: 'CREATE'},
        {value: 'GRANT'},
        {value: 'AUTHORIZATION'},
    ];
    expect(parseResult.suggestKeywords).toEqual(keywordsSuggestion);
});
