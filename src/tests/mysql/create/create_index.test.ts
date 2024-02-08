import {parseMySqlQueryWithCursor} from '../../shared/lib';
import {KeywordSuggestion} from '../../../types';

test('should suggest properly after INDEX', () => {
    const parseResults = parseMySqlQueryWithCursor('CREATE INDEX |');

    const keywordsSuggestion: KeywordSuggestion[] = [];
    expect(parseResults.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after index name', () => {
    const parseResults = parseMySqlQueryWithCursor('CREATE INDEX test_index |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'ON'}, {value: 'USING'}];
    expect(parseResults.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after USING', () => {
    const parseResults = parseMySqlQueryWithCursor('CREATE INDEX test_index USING |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'BTREE'}, {value: 'HASH'}];
    expect(parseResults.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after USING HASH', () => {
    const parseResults = parseMySqlQueryWithCursor('CREATE INDEX test_index USING HASH |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'ON'}];
    expect(parseResults.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after ON', () => {
    const parseResults = parseMySqlQueryWithCursor('CREATE INDEX test_index USING HASH ON |');

    const keywordsSuggestion: KeywordSuggestion[] = [];
    expect(parseResults.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after column name', () => {
    const parseResults = parseMySqlQueryWithCursor(
        'CREATE INDEX test_index USING HASH ON test_column |',
    );

    const keywordsSuggestion: KeywordSuggestion[] = [];
    expect(parseResults.suggestKeywords).toEqual(keywordsSuggestion);
});
