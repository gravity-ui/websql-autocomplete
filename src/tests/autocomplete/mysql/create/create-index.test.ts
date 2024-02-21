import {parseMySqlQueryWithCursor} from '../../../lib';
import {KeywordSuggestion} from '../../../../types';

test('should suggest properly after INDEX', () => {
    const autocompleteResult = parseMySqlQueryWithCursor('CREATE INDEX |');

    const keywordsSuggestion: KeywordSuggestion[] = [];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after index name', () => {
    const autocompleteResult = parseMySqlQueryWithCursor('CREATE INDEX test_index |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'ON'}, {value: 'USING'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after USING', () => {
    const autocompleteResult = parseMySqlQueryWithCursor('CREATE INDEX test_index USING |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'BTREE'}, {value: 'HASH'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after USING HASH', () => {
    const autocompleteResult = parseMySqlQueryWithCursor('CREATE INDEX test_index USING HASH |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'ON'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after ON', () => {
    const autocompleteResult = parseMySqlQueryWithCursor('CREATE INDEX test_index USING HASH ON |');

    const keywordsSuggestion: KeywordSuggestion[] = [];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after column name', () => {
    const autocompleteResult = parseMySqlQueryWithCursor(
        'CREATE INDEX test_index USING HASH ON test_column |',
    );

    const keywordsSuggestion: KeywordSuggestion[] = [];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});
