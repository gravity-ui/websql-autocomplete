import {parsePostgreSqlQueryWithCursor, parsePostgreSqlQueryWithoutCursor} from '../../index';
import {KeywordSuggestion} from '../../../../shared/autocomplete-types';

test('should suggest properly after ALTER INDEX', () => {
    const autocompleteResult = parsePostgreSqlQueryWithCursor('ALTER INDEX |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'IF'}, {value: 'ALL'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);

    expect(autocompleteResult.suggestIndexes).toEqual(true);
});

test('should not report errors on full statement', () => {
    const autocompleteResult = parsePostgreSqlQueryWithoutCursor(
        'ALTER INDEX test_index RENAME to test_index_2;',
    );
    expect(autocompleteResult.errors).toHaveLength(0);
});
