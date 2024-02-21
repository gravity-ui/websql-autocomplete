import {parsePostgreSqlQueryWithCursor} from '../../../test-lib';
import {KeywordSuggestion} from '../../../../types';
import {parsePostgreSqlQueryWithoutCursor} from '../../../../index';

test('should suggest properly after REINDEX INDEX', () => {
    const autocompleteResult = parsePostgreSqlQueryWithCursor('REINDEX INDEX |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'CONCURRENTLY'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);

    expect(autocompleteResult.suggestIndexes).toEqual(true);
});

test('should not report errors on full statement', () => {
    const autocompleteResult = parsePostgreSqlQueryWithoutCursor('REINDEX INDEX test_index;');
    expect(autocompleteResult.errors).toHaveLength(0);
});
