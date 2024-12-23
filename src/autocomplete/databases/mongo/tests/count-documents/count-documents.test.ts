import {parseMongoQueryWithoutCursor} from '../..';

test('should not report errors on countDocuments statement', () => {
    const autocompleteResult = parseMongoQueryWithoutCursor(`
        db.test_collection.countDocuments();
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on extended countDocuments statement', () => {
    const autocompleteResult = parseMongoQueryWithoutCursor(`
        db.test_collection.countDocuments(
            {
                test_filter_option: 'test_value',
            },
            {
                test_option: 'test_value',
            }
        );
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});
