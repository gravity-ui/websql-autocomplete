import {Command, extractMongoCommandsFromQuery, parseMongoQueryWithoutCursor} from '../..';

test('should not report errors on stats statement', () => {
    const autocompleteResult = parseMongoQueryWithoutCursor(`
        db.stats();
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on extended stats statement', () => {
    const autocompleteResult = parseMongoQueryWithoutCursor(`
        db.stats(
            {
                test_option_field: 'test_value',
            }
        );
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should extract stats commands properly', () => {
    const result = extractMongoCommandsFromQuery(`
        db.stats();
        db.stats(
            {
                test_option_field: 'test_value',
            }
        );
    `);

    const commands: Command[] = [
        {
            type: 'database',
            method: 'stats',
        },
        {
            type: 'database',
            method: 'stats',
            options: {
                test_option_field: 'test_value',
            },
        },
    ];
    expect(result).toEqual({commands});
});
