import {parseYqlQueryWithoutCursor} from '../../../../../autocomplete';
import {KeywordSuggestion} from '../../../../../autocomplete-types';
import {parseYqlQueryWithCursor} from '../../../../../shared/parse-query-with-cursor';

test('should suggest keywords after ASYNC ', () => {
    const autocompleteResult = parseYqlQueryWithCursor('ALTER ASYNC |');
    const keywords: KeywordSuggestion[] = [{value: 'REPLICATION'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywords);
});

test('should suggest entity after REPLICATION ', () => {
    const autocompleteResult = parseYqlQueryWithCursor('ALTER ASYNC REPLICATION |');
    const keywords: KeywordSuggestion[] = [];
    expect(autocompleteResult.suggestKeywords).toEqual(keywords);
    expect(autocompleteResult.suggestEntity).toEqual(['replication']);
});

test('should suggest keywords after topic name', () => {
    const autocompleteResult = parseYqlQueryWithCursor('ALTER ASYNC REPLICATION test |');
    const keywords: KeywordSuggestion[] = [{value: 'SET'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywords);
});

test('should not report errors on full statement', () => {
    const autocompleteResult = parseYqlQueryWithoutCursor(
        'ALTER ASYNC REPLICATION test SET (some="any")',
    );
    expect(autocompleteResult.errors).toHaveLength(0);
});
