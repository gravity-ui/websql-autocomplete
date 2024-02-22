import {parsePostgreSqlQueryWithCursor} from '../../../test-lib';
import {KeywordSuggestion} from '../../../../index';
import {parsePostgreSqlQueryWithoutCursor} from '../../../../index';

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
