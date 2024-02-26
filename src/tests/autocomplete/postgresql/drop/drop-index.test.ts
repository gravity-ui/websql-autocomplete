import {parsePostgreSqlQueryWithCursor} from '../../../test-lib';
import {KeywordSuggestion} from '../../../../autocomplete/autocomplete-types';
import {parsePostgreSqlQueryWithoutCursor} from '../../../../autocomplete/autocomplete';

test('should suggest properly after DROP INDEX', () => {
    const autocompleteResult = parsePostgreSqlQueryWithCursor('DROP INDEX |');

    const keywords: KeywordSuggestion[] = [{value: 'CONCURRENTLY'}, {value: 'IF'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywords);

    expect(autocompleteResult.suggestIndexes).toEqual(true);
});

test('should not report errors on full statement', () => {
    const autocompleteResult = parsePostgreSqlQueryWithoutCursor('DROP INDEX test_index;');
    expect(autocompleteResult.errors).toHaveLength(0);
});
