import {parseClickHouseQueryWithCursor} from '../../lib';
import {KeywordSuggestion} from '../../../types';

test('should suggest properly after VIEW', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('CREATE VIEW |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'IF'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after view name', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('CREATE VIEW test_view |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'AS'}, {value: 'ON'}, {value: 'UUID'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after AS', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('CREATE VIEW test_view AS |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'WITH'}, {value: 'SELECT'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});
