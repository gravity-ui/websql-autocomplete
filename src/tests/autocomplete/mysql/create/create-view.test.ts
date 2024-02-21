import {parseMySqlQueryWithCursor} from '../../../test-lib';
import {KeywordSuggestion} from '../../../../types';

test('should suggest properly after VIEW', () => {
    const autocompleteResult = parseMySqlQueryWithCursor('CREATE VIEW |');

    const keywordsSuggestion: KeywordSuggestion[] = [];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after view name', () => {
    const autocompleteResult = parseMySqlQueryWithCursor('CREATE VIEW test_view |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'AS'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after AS', () => {
    const autocompleteResult = parseMySqlQueryWithCursor('CREATE VIEW test_view AS |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'SELECT'}, {value: 'WITH'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});
