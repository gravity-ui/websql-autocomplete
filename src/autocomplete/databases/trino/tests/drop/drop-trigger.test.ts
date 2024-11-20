import {parseTrinoQueryWithCursor, parseTrinoQueryWithoutCursor} from '../../index';
import {KeywordSuggestion} from '../../../../shared/autocomplete-types';

test('should suggest properly after DROP TRIGGER', () => {
    const autocompleteResult = parseTrinoQueryWithCursor('DROP TRIGGER |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'IF'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);

    // expect(autocompleteResult.suggestTriggers).toEqual(true);
});

test('should not report errors on full statement', () => {
    const autocompleteResult = parseTrinoQueryWithoutCursor(
        'DROP TRIGGER test_trigger ON test_table;',
    );
    expect(autocompleteResult.errors).toHaveLength(0);
});
