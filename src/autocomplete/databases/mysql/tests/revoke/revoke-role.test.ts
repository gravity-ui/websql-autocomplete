import {parseMySqlQueryWithCursor, parseMySqlQueryWithoutCursor} from '../../index';

test('should suggest roles after REVOKE', () => {
    const autocompleteResult = parseMySqlQueryWithCursor('REVOKE |');
    expect(autocompleteResult.suggestRoles).toEqual(true);
});

test('should not report errors on a full statement', () => {
    const autocompleteResult = parseMySqlQueryWithoutCursor('REVOKE test_role FROM test_user;');
    expect(autocompleteResult.errors).toHaveLength(0);
});
