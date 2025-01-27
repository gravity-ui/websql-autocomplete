import {
    Command,
    extractMongoCommandsFromQuery,
    parseMongoQueryWithCursor,
    parseMongoQueryWithoutCursor,
} from '../..';

test('should not report errors on removeUser statement', () => {
    const autocompleteResult = parseMongoQueryWithoutCursor(`
        db.removeUser('test_user');
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on extended removeUser statement', () => {
    const autocompleteResult = parseMongoQueryWithoutCursor(`
        db.removeUser(
            'test_user',
            {
                test_option_field: 'test_value',
            }
        );
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should suggest users on first removeUser argument', () => {
    const autocompleteResult = parseMongoQueryWithCursor(`
        db.removeUser(|
    `);

    expect(autocompleteResult.suggestQuotedUsers).toEqual(true);
});

test('should extract removeUser commands properly', () => {
    const result = extractMongoCommandsFromQuery(`
        db.removeUser('test_user');
        db.removeUser(
            'test_user',
            {
                test_option_field: 'test_value',
            }
        );
    `);

    const commands: Command[] = [
        {
            type: 'database',
            method: 'removeUser',
            username: 'test_user',
        },
        {
            type: 'database',
            method: 'removeUser',
            username: 'test_user',
            options: {
                test_option_field: 'test_value',
            },
        },
    ];
    expect(result).toEqual({commands});
});
