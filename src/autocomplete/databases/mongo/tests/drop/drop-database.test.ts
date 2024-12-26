import {Command, extractMongoCommandsFromQuery, parseMongoQueryWithoutCursor} from '../..';

test('should not report errors on dropDatabase statement', () => {
    const autocompleteResult = parseMongoQueryWithoutCursor(`
        db.dropDatabase();
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on extended dropDatabase statement', () => {
    const autocompleteResult = parseMongoQueryWithoutCursor(`
        db.dropDatabase(
            {
                test_option_field: 'test_value',
            }
        );
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should extract dropDatabase commands properly', () => {
    const result = extractMongoCommandsFromQuery(`
        db.dropDatabase();
        db.dropDatabase(
            {
                test_option_field: 'test_value',
            }
        );
    `);

    const commands: Command[] = [
        {
            type: 'database',
            method: 'dropDatabase',
        },
        {
            type: 'database',
            method: 'dropDatabase',
            options: {
                test_option_field: 'test_value',
            },
        },
    ];
    expect(result).toEqual({commands});
});
