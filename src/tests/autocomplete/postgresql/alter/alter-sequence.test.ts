import {parsePostgreSqlQueryWithCursor} from '../../../lib';
import {KeywordSuggestion} from '../../../../types';
import {parsePostgreSqlQueryWithoutCursor} from '../../../../index';

test('should suggest properly after ALTER SEQUENCE', () => {
    const autocompleteResult = parsePostgreSqlQueryWithCursor('ALTER SEQUENCE |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'IF'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);

    expect(autocompleteResult.suggestSequences).toEqual(true);
});

test('should not report errors on full statement', () => {
    const autocompleteResult = parsePostgreSqlQueryWithoutCursor(
        'ALTER SEQUENCE test_sequence INCREMENT 2;',
    );
    expect(autocompleteResult.errors).toHaveLength(0);
});
