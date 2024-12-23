import {parseMongoQueryWithoutCursor} from '../..';

test('should not report errors on dropIndex statement', () => {
    const autocompleteResult = parseMongoQueryWithoutCursor(`
        db.test_collection.dropIndex('test_index');

        db.collection('test_collection').dropIndex('test_index');
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on extended dropIndex statement', () => {
    const autocompleteResult = parseMongoQueryWithoutCursor(`
        db.test_collection.dropIndex(
            'test_index',
            {
                test_option: 'test_value',
            }
        );

        db.collection('test_collection').dropIndex(
            'test_index',
            {
                test_option: 'test_value',
            }
        );
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});
