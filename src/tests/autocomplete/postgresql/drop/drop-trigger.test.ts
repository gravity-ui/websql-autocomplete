import {parsePostgreSqlQueryWithCursor} from '../../../test-lib';
import {KeywordSuggestion} from '../../../../autocomplete/autocomplete-types';
import {parsePostgreSqlQueryWithoutCursor} from '../../../../autocomplete/autocomplete';

test('should suggest properly after DROP TRIGGER', () => {
    const autocompleteResult = parsePostgreSqlQueryWithCursor('DROP TRIGGER |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'IF'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);

    expect(autocompleteResult.suggestTriggers).toEqual(true);
});

test('should not report errors on full statement', () => {
    const autocompleteResult = parsePostgreSqlQueryWithoutCursor(
        'DROP TRIGGER test_trigger ON test_table;',
    );
    expect(autocompleteResult.errors).toHaveLength(0);
});
