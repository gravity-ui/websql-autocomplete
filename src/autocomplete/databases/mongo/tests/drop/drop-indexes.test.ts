import {parseMongoQueryWithoutCursor} from '../..';

test('should not report errors on dropIndexes statement', () => {
    const autocompleteResult = parseMongoQueryWithoutCursor(`
        db.test_collection.dropIndexes();

        db.collection('test_collection').dropIndexes();
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on extended dropIndexes statement', () => {
    const autocompleteResult = parseMongoQueryWithoutCursor(`
        db.test_collection.dropIndexes(
            {
                test_option: 'test_value',
            }
        );

        db.collection('test_collection').dropIndexes(
            {
                test_option: 'test_value',
            }
        );
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});
