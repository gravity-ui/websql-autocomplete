import {parsePostgreSqlQueryWithCursor} from '../../../../shared/parse-query-with-cursor';
import {parsePostgreSqlQueryWithoutCursor} from '../../../../autocomplete';

// TODO Get context of table in COMMENT statement
test.skip('should suggest properly after COMMENT ON CONSTRAINT', () => {
    const autocompleteResult = parsePostgreSqlQueryWithCursor('COMMENT ON CONSTRAINT |');

    expect(autocompleteResult.suggestKeywords).toEqual([]);
    expect(autocompleteResult.suggestConstraints).toEqual(true);
});

// TODO Get context of table in COMMENT statement
test.skip('should not report errors on full statement', () => {
    const autocompleteResult = parsePostgreSqlQueryWithoutCursor(
        "COMMENT ON CONSTRAINT test_constraint ON test_table IS 'test_comment';",
    );
    expect(autocompleteResult.errors).toHaveLength(0);
});
