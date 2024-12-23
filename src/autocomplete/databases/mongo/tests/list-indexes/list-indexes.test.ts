import {parseMongoQueryWithoutCursor} from '../..';

test('should not report errors on listIndexes statement', () => {
    const autocompleteResult = parseMongoQueryWithoutCursor(`
        db.test_collection.listIndexes();

        db.collection('test_collection').listIndexes();
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on extended listIndexes statement', () => {
    const autocompleteResult = parseMongoQueryWithoutCursor(`
        db.test_collection.listIndexes(
            {
                test_option: 'test_value',
            }
        );

        db.collection('test_collection').listIndexes(
            {
                test_option: 'test_value',
            }
        );
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});
