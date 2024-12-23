import {parseMongoQueryWithoutCursor} from '../..';

test('should not report errors on rename statement', () => {
    const autocompleteResult = parseMongoQueryWithoutCursor(`
        db.test_collection.rename('test_collection_new_name');

        db.collection('test_collection').rename('test_collection_new_name');
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on extended rename statement', () => {
    const autocompleteResult = parseMongoQueryWithoutCursor(`
        db.test_collection.rename(
            'test_collection_new_name',
            {
                test_option: 'test_value',
            }
        );

        db.collection('test_collection').rename(
            'test_collection_new_name',
            {
                test_option: 'test_value',
            }
        );
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});
