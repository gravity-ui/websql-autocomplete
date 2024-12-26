import {Command, extractMongoCommandsFromQuery, parseMongoQueryWithoutCursor} from '../..';

test('should not report errors on runCursorCommand statement', () => {
    const autocompleteResult = parseMongoQueryWithoutCursor(`
        db.runCursorCommand({
            find: 'test_collection',
            filter: {
                test_filter_field: 'test_value'
            },
        });
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on extended runCursorCommand statement', () => {
    const autocompleteResult = parseMongoQueryWithoutCursor(`
        db.runCursorCommand(
            {
                find: 'test_collection',
                filter: {
                    test_filter_field: 'test_value'
                },
            },
            {
                test_option: 'test_value'
            }
        );
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should extract command runCursorCommand properly', () => {
    const result = extractMongoCommandsFromQuery(`
        db.runCursorCommand({
            find: 'test_collection',
            filter: {
                test_filter_field: 'test_value'
            },
        });
        db.runCursorCommand(
            {
                find: 'test_collection',
                filter: {
                    test_filter_field: 'test_value'
                },
            },
            {
                test_option: 'test_value'
            }
        );
    `);

    const commands: Command[] = [
        {
            type: 'database',
            method: 'runCursorCommand',
            document: {
                find: 'test_collection',
                filter: {
                    test_filter_field: 'test_value',
                },
            },
        },
        {
            type: 'database',
            method: 'runCursorCommand',
            document: {
                find: 'test_collection',
                filter: {
                    test_filter_field: 'test_value',
                },
            },
            options: {
                test_option: 'test_value',
            },
        },
    ];
    expect(result).toEqual({commands});
});
