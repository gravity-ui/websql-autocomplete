import {Command, extractMongoCommandsFromQuery, parseMongoQueryWithoutCursor} from '../..';

test('should not report errors on aggregate statement', () => {
    const autocompleteResult = parseMongoQueryWithoutCursor(`
        db.aggregate();
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on extended aggregate statement', () => {
    const autocompleteResult = parseMongoQueryWithoutCursor(`
        db.aggregate(
            [
                {
                    $limit: 10,
                },
                {
                    $sort: { test_field: -1 }
                },
            ],
            {
                test_option: 'test_value',    
            }
        );
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on extended aggregate statements with explain modifier', () => {
    const autocompleteResult = parseMongoQueryWithoutCursor(`
        db.aggregate(
            [
                {
                    $limit: 10,
                },
                {
                    $sort: { test_field: -1 }
                },
            ],
            {
                test_option: 'test_value',    
            }
        ).explain(true);

        db.aggregate(
            [
                {
                    $limit: 10,
                },
                {
                    $sort: { test_field: -1 }
                },
            ],
            {
                test_option: 'test_value',    
            }
        ).explain({
            test_option: 'test_value',
        });

        db.aggregate(
            [
                {
                    $limit: 10,
                },
                {
                    $sort: { test_field: -1 }
                },
            ],
            {
                test_option: 'test_value',    
            }
        ).explain('test_value');
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should extract aggregate commands properly', () => {
    const result = extractMongoCommandsFromQuery(`
        db.aggregate();

        db.aggregate(
            [
                {
                    $limit: 10,
                },
                {
                    $sort: { test_field: -1 }
                },
            ],
            {
                test_option: 'test_value',    
            }
        );

        db.aggregate(
            [
                {
                    $limit: 10,
                },
                {
                    $sort: { test_field: -1 }
                },
            ],
            {
                test_option: 'test_value',    
            }
        ).explain(true);

        db.aggregate(
            [
                {
                    $limit: 10,
                },
                {
                    $sort: { test_field: -1 }
                },
            ],
            {
                test_option: 'test_value',    
            }
        ).explain({
            test_option: 'test_value',
        });

        db.aggregate(
            [
                {
                    $limit: 10,
                },
                {
                    $sort: { test_field: -1 }
                },
            ],
            {
                test_option: 'test_value',    
            }
        ).explain('test_value');
    `);

    const commands: Command[] = [
        {
            type: 'database',
            method: 'aggregate',
        },
        {
            type: 'database',
            method: 'aggregate',
            pipeline: [
                {
                    $limit: 10,
                },
                {
                    $sort: {
                        test_field: -1,
                    },
                },
            ],
            options: {
                test_option: 'test_value',
            },
        },
        {
            type: 'database',
            method: 'aggregate',
            pipeline: [
                {
                    $limit: 10,
                },
                {
                    $sort: {
                        test_field: -1,
                    },
                },
            ],
            options: {
                test_option: 'test_value',
            },
            explain: {
                parameters: true,
            },
        },
        {
            type: 'database',
            method: 'aggregate',
            pipeline: [
                {
                    $limit: 10,
                },
                {
                    $sort: {
                        test_field: -1,
                    },
                },
            ],
            options: {
                test_option: 'test_value',
            },
            explain: {
                parameters: {
                    test_option: 'test_value',
                },
            },
        },
        {
            type: 'database',
            method: 'aggregate',
            pipeline: [
                {
                    $limit: 10,
                },
                {
                    $sort: {
                        test_field: -1,
                    },
                },
            ],
            options: {
                test_option: 'test_value',
            },
            explain: {
                parameters: 'test_value',
            },
        },
    ];

    expect(result).toEqual({
        commands,
    });
});
