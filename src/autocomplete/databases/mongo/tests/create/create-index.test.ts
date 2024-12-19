import {parseMongoQueryWithoutCursor} from '../..';

test('should not report errors on createIndex statement', () => {
    const autocompleteResult = parseMongoQueryWithoutCursor(`
        db.test_collection.createIndex('test_index');
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on createIndex statement with array in argument', () => {
    const autocompleteResult = parseMongoQueryWithoutCursor(`
        db.test_collection.createIndex([['test_index_1', -1], ['test_index_2', 1]]);
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on createIndex statement with object argument', () => {
    const autocompleteResult = parseMongoQueryWithoutCursor(`
        db.test_collection.createIndex({
            test_index_1: -1,
            test_index_2: 1,
        });
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on extended createIndex statement', () => {
    const autocompleteResult = parseMongoQueryWithoutCursor(`
        db.test_collection.createIndex(
            {
                test_index_1: -1,
                test_index_2: 1,
            },
            {
                test_option: 'test_value',
            }
        );
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});
