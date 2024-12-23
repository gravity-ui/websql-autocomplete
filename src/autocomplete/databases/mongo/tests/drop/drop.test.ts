import {parseMongoQueryWithoutCursor} from '../..';

test('should not report errors on drop statement', () => {
    const autocompleteResult = parseMongoQueryWithoutCursor(`
        db.test_collection.drop();
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on extended drop statement', () => {
    const autocompleteResult = parseMongoQueryWithoutCursor(`
        db.test_collection.drop(
            {
                test_option: 'test_value',
            }
        );
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});
