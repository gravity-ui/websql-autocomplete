import {parseMongoQueryWithoutCursor} from '../..';

test('should not report errors on indexExists statement', () => {
    const autocompleteResult = parseMongoQueryWithoutCursor(`
        db.test_collection.indexExists('test_index');

        db.collection('test_collection').indexExists('test_index');
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on extended indexExists statement', () => {
    const autocompleteResult = parseMongoQueryWithoutCursor(`
        db.test_collection.indexExists(
            ['test_index1', 'test_index2', 'test_index3'],
            {
                test_option: 'test_value',
            }
        );

        db.collection('test_collection').indexExists(
            ['test_index1', 'test_index2', 'test_index3'],
            {
                test_option: 'test_value',
            }
        );
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});
