import {Command, extractMongoCommandsFromQuery, parseMongoQueryWithoutCursor} from '../..';

test('should not report errors on setProfilingLevel statement', () => {
    const autocompleteResult = parseMongoQueryWithoutCursor(`
        db.setProfilingLevel('slow_only');
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on extended setProfilingLevel statement', () => {
    const autocompleteResult = parseMongoQueryWithoutCursor(`
        db.setProfilingLevel(
            'slow_only',
            {
                test_option_field: 'test_value',
            }
        );
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should extract setProfilingLevel commands properly', () => {
    const result = extractMongoCommandsFromQuery(`
        db.setProfilingLevel('slow_only');
        db.setProfilingLevel(
            'slow_only',
            {
                test_option_field: 'test_value',
            }
        );
    `);

    const commands: Command[] = [
        {
            type: 'database',
            method: 'setProfilingLevel',
            level: 'slow_only',
        },
        {
            type: 'database',
            method: 'setProfilingLevel',
            level: 'slow_only',
            options: {
                test_option_field: 'test_value',
            },
        },
    ];
    expect(result).toEqual({commands});
});
