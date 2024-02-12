import {parseClickHouseQueryWithCursor} from '../../shared/lib';
import {KeywordSuggestion} from '../../../types';

test('should suggest properly after VIEW', () => {
    const parseResults = parseClickHouseQueryWithCursor('CREATE VIEW |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'IF'}];
    expect(parseResults.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after view name', () => {
    const parseResults = parseClickHouseQueryWithCursor('CREATE VIEW test_view |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'AS'}, {value: 'ON'}, {value: 'UUID'}];
    expect(parseResults.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after AS', () => {
    const parseResults = parseClickHouseQueryWithCursor('CREATE VIEW test_view AS |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'WITH'}, {value: 'SELECT'}];
    expect(parseResults.suggestKeywords).toEqual(keywordsSuggestion);
});
