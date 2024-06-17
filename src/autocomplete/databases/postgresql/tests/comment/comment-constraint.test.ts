import {parsePostgreSqlQueryWithCursor, parsePostgreSqlQueryWithoutCursor} from '../../index';

// TODO Get context of table in COMMENT statement
test.skip('should suggest properly after COMMENT ON CONSTRAINT', () => {
    const autocompleteResult = parsePostgreSqlQueryWithCursor('COMMENT ON CONSTRAINT |');

    expect(autocompleteResult.suggestKeywords).toEqual([]);
    expect(autocompleteResult.suggestConstraints).toEqual(true);
});

test('should not report errors on full statement', () => {
    const autocompleteResult = parsePostgreSqlQueryWithoutCursor(
        "COMMENT ON CONSTRAINT test_constraint ON test_table IS 'test_comment';",
    );
    expect(autocompleteResult.errors).toHaveLength(0);
});
