import {parseTrinoQueryWithCursor, parseTrinoQueryWithoutCursor} from '../../index';

// TODO Get context of table in COMMENT statement
test.skip('should suggest properly after COMMENT ON CONSTRAINT', () => {
    const autocompleteResult = parseTrinoQueryWithCursor('COMMENT ON TABLE |');

    expect(autocompleteResult.suggestKeywords).toEqual([]);
    // expect(autocompleteResult.suggestConstraints).toEqual(true);
});

test('should not report errors on full statement', () => {
    const autocompleteResult = parseTrinoQueryWithoutCursor(
        "COMMENT ON TABLE catalog.schema.test_constraint IS 'test_comment'",
    );
    expect(autocompleteResult.errors).toHaveLength(0);
});
