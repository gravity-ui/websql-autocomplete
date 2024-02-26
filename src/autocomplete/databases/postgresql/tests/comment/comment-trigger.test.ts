import {parsePostgreSqlQueryWithCursor} from '../../../../shared/parse-query-with-cursor';
import {KeywordSuggestion} from '../../../../autocomplete-types';
import {parsePostgreSqlQueryWithoutCursor} from '../../../../autocomplete';

test('should suggest properly after COMMENT ON TRIGGER', () => {
    const autocompleteResult = parsePostgreSqlQueryWithCursor('COMMENT ON TRIGGER |');

    const keywordsSuggestion: KeywordSuggestion[] = [];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);

    expect(autocompleteResult.suggestTriggers).toEqual(true);
});

test('should not report errors on full statement', () => {
    const autocompleteResult = parsePostgreSqlQueryWithoutCursor(
        "COMMENT ON TRIGGER test_trigger ON test_table IS 'test_comment';",
    );
    expect(autocompleteResult.errors).toHaveLength(0);
});
