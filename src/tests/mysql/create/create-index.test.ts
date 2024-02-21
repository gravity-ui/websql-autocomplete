import {parseMySqlQueryWithCursor} from '../../lib';
import {KeywordSuggestion} from '../../../types';

test('should suggest properly after INDEX', () => {
    const autocompleteResults = parseMySqlQueryWithCursor('CREATE INDEX |');

    const keywordsSuggestion: KeywordSuggestion[] = [];
    expect(autocompleteResults.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after index name', () => {
    const autocompleteResults = parseMySqlQueryWithCursor('CREATE INDEX test_index |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'ON'}, {value: 'USING'}];
    expect(autocompleteResults.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after USING', () => {
    const autocompleteResults = parseMySqlQueryWithCursor('CREATE INDEX test_index USING |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'BTREE'}, {value: 'HASH'}];
    expect(autocompleteResults.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after USING HASH', () => {
    const autocompleteResults = parseMySqlQueryWithCursor('CREATE INDEX test_index USING HASH |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'ON'}];
    expect(autocompleteResults.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after ON', () => {
    const autocompleteResults = parseMySqlQueryWithCursor(
        'CREATE INDEX test_index USING HASH ON |',
    );

    const keywordsSuggestion: KeywordSuggestion[] = [];
    expect(autocompleteResults.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after column name', () => {
    const autocompleteResults = parseMySqlQueryWithCursor(
        'CREATE INDEX test_index USING HASH ON test_column |',
    );

    const keywordsSuggestion: KeywordSuggestion[] = [];
    expect(autocompleteResults.suggestKeywords).toEqual(keywordsSuggestion);
});
