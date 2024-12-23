import {parseMongoQueryWithoutCursor} from '../..';

test('should not report errors on aggregate statement', () => {
    const autocompleteResult = parseMongoQueryWithoutCursor(`
        db.test_collection.aggregate();
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on extended aggregate statement', () => {
    const autocompleteResult = parseMongoQueryWithoutCursor(`
        db.test_collection.aggregate(
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

        db.collection('test_collection').aggregate(
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
        db.test_collection.aggregate(
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

        db.collection('test_collection').aggregate(
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

        db.test_collection.aggregate(
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

        db.test_collection.aggregate(
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
