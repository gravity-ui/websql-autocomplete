import {parseMySqlQueryWithCursor} from '../../../../shared/parse-query-with-cursor';
import {parseMySqlQueryWithoutCursor} from '../../../../autocomplete';

test('should suggest keywords after GRANT', () => {
    const autocompleteResult = parseMySqlQueryWithCursor('GRANT |');
    expect(autocompleteResult.suggestRoles).toEqual(true);
});

test('should not report errors on a full statement', () => {
    const autocompleteResult = parseMySqlQueryWithoutCursor('GRANT test_role TO test_user;');
    expect(autocompleteResult.errors).toHaveLength(0);
});
