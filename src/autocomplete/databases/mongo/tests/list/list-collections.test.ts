import {Command, extractMongoCommandsFromQuery, parseMongoQueryWithoutCursor} from '../..';

test('should not report errors on listCollections statement', () => {
    const autocompleteResult = parseMongoQueryWithoutCursor(`
        db.listCollections();
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on extended listCollections statement', () => {
    const autocompleteResult = parseMongoQueryWithoutCursor(`
        db.listCollections(
            {
                test_field: 'test_value'
            }
        );

        db.listCollections(
            {
                test_field: 'test_value'
            },
            {
                test_option_field: 'test_value'
            }
        );
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should extract listCollections commands properly', () => {
    const result = extractMongoCommandsFromQuery(`
        db.listCollections();
        db.listCollections(
            {
                test_field: 'test_value'
            }
        );
        db.listCollections(
            {
                test_field: 'test_value'
            },
            {
                test_option_field: 'test_value'
            }
        );
    `);

    const commands: Command[] = [
        {
            type: 'database',
            method: 'listCollections',
        },
        {
            type: 'database',
            method: 'listCollections',
            filter: {
                test_field: 'test_value',
            },
        },
        {
            type: 'database',
            method: 'listCollections',
            filter: {
                test_field: 'test_value',
            },
            options: {
                test_option_field: 'test_value',
            },
        },
    ];
    expect(result).toEqual({commands});
});
