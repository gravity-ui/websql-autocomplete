import {parsePostgreSqlQueryWithCursor} from '../../../test-lib';
import {KeywordSuggestion} from '../../../../autocomplete/autocomplete-types';
import {parsePostgreSqlQueryWithoutCursor} from '../../../../autocomplete/autocomplete';

test('should suggest properly after ALTER TRIGGER', () => {
    const autocompleteResult = parsePostgreSqlQueryWithCursor('ALTER TRIGGER |');

    const keywordsSuggestion: KeywordSuggestion[] = [];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);

    expect(autocompleteResult.suggestTriggers).toEqual(true);
});

test('should not report errors on full statement', () => {
    const autocompleteResult = parsePostgreSqlQueryWithoutCursor(
        'ALTER TRIGGER test_trigger ON test_table RENAME TO test_trigger_2;',
    );
    expect(autocompleteResult.errors).toHaveLength(0);
});
