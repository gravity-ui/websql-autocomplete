import {parseMongoQueryWithoutCursor} from '../..';

test('should not report errors on createIndexes statement', () => {
    const autocompleteResult = parseMongoQueryWithoutCursor(`
        db.test_collection.createIndexes([
            {
                key: {
                    test_index1: 1,
                },
            },
            {
                key: {
                    test_index2: 1,
                },
            },
        ]);
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on extended createIndexes statement', () => {
    const autocompleteResult = parseMongoQueryWithoutCursor(`
        db.test_collection.createIndexes(
            [
                {
                    key: {
                        test_index1: '2d',
                    },
                },
                {
                    key: {
                        test_index2: 1,
                    },
                },
            ],
            {
                test_option: 'test_value',
            }
        );
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});
