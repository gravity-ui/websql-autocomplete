import {Command, extractMongoCommandsFromQuery, parseMongoQueryWithoutCursor} from '../..';

test('should not report errors on profilingLevel statement', () => {
    const autocompleteResult = parseMongoQueryWithoutCursor(`
        db.profilingLevel();
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on extended profilingLevel statement', () => {
    const autocompleteResult = parseMongoQueryWithoutCursor(`
        db.profilingLevel(
            {
                test_option_field: 'test_value',
            }
        );
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should extract profilingLevel commands properly', () => {
    const result = extractMongoCommandsFromQuery(`
        db.profilingLevel();
        db.profilingLevel(
            {
                test_option_field: 'test_value',
            }
        );
    `);

    const commands: Command[] = [
        {
            type: 'database',
            method: 'profilingLevel',
        },
        {
            type: 'database',
            method: 'profilingLevel',
            options: {
                test_option_field: 'test_value',
            },
        },
    ];
    expect(result).toEqual({commands});
});
