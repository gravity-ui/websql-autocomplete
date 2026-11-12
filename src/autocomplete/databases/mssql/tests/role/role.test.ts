import {parseMsSqlQueryWithCursor, parseMsSqlQueryWithoutCursor} from '../../index.js';

test.each([
    'ALTER ROLE |',
    'ALTER ROLE test_role ADD MEMBER |',
    'DROP ROLE |',
    'DROP ROLE IF EXISTS |',
])('should suggest roles after %s', (query) => {
    const autocompleteResult = parseMsSqlQueryWithCursor(query);

    expect(autocompleteResult.suggestRoles).toEqual(true);
});

test.each(['CREATE ROLE |', 'ALTER ROLE test_role WITH NAME = |'])(
    'should not suggest roles for new name after %s',
    (query) => {
        const autocompleteResult = parseMsSqlQueryWithCursor(query);

        expect(autocompleteResult.suggestRoles).toBeFalsy();
    },
);

test.each([
    'CREATE ROLE test_role AUTHORIZATION dbo',
    'ALTER ROLE test_role ADD MEMBER test_user',
    'ALTER ROLE test_role WITH NAME = test_role2',
    'DROP ROLE IF EXISTS test_role',
])('should not report errors on %s', (query) => {
    const autocompleteResult = parseMsSqlQueryWithoutCursor(query);

    expect(autocompleteResult.errors).toHaveLength(0);
});
