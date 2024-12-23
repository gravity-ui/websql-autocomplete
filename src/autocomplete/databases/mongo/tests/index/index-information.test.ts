import {parseMongoQueryWithoutCursor} from '../..';

test('should not report errors on indexInformation statement', () => {
    const autocompleteResult = parseMongoQueryWithoutCursor(`
        db.test_collection.indexInformation();
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on extended indexInformation statement', () => {
    const autocompleteResult = parseMongoQueryWithoutCursor(`
        db.test_collection.indexInformation(
            {
                test_option: 'test_value',
            }
        );
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});
