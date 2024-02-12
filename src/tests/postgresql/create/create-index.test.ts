import {parsePostgreSqlQueryWithCursor} from '../../shared/lib';
import {KeywordSuggestion} from '../../../types';

test('should suggest properly after INDEX', () => {
    const parseResult = parsePostgreSqlQueryWithCursor('CREATE INDEX |');

    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: 'CONCURRENTLY'},
        {value: 'IF'},
        {value: 'ON'},
    ];
    expect(parseResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after index name', () => {
    const parseResult = parsePostgreSqlQueryWithCursor('CREATE INDEX test_index |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'ON'}];
    expect(parseResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after ON', () => {
    const parseResult = parsePostgreSqlQueryWithCursor('CREATE INDEX test_index ON |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'ONLY'}];
    expect(parseResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after table name', () => {
    const parseResult = parsePostgreSqlQueryWithCursor('CREATE INDEX test_index ON test_table |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: '*'}, {value: 'USING'}];
    expect(parseResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after USING', () => {
    const parseResult = parsePostgreSqlQueryWithCursor(
        'CREATE INDEX test_index ON test_table USING |',
    );

    const keywordsSuggestion: KeywordSuggestion[] = [];
    expect(parseResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after USING HASH', () => {
    const parseResult = parsePostgreSqlQueryWithCursor(
        'CREATE INDEX test_index ON test_table USING HASH |',
    );

    const keywordsSuggestion: KeywordSuggestion[] = [];
    expect(parseResult.suggestKeywords).toEqual(keywordsSuggestion);
});
