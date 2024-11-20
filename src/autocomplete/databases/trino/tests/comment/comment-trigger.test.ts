import {parseTrinoQueryWithCursor, parseTrinoQueryWithoutCursor} from '../../index';
import {KeywordSuggestion} from '../../../../shared/autocomplete-types';

test('should suggest properly after COMMENT ON TRIGGER', () => {
    const autocompleteResult = parseTrinoQueryWithCursor('COMMENT ON TRIGGER |');

    const keywordsSuggestion: KeywordSuggestion[] = [];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);

    // expect(autocompleteResult.suggestTriggers).toEqual(true);
});

test('should not report errors on full statement', () => {
    const autocompleteResult = parseTrinoQueryWithoutCursor(
        "COMMENT ON TRIGGER test_trigger ON test_table IS 'test_comment';",
    );
    expect(autocompleteResult.errors).toHaveLength(0);
});
