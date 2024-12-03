import {parseMongoQueryWithoutCursor} from '../..';

test('should not report errors on findOneAndReplace statement', () => {
    const autocompleteResult = parseMongoQueryWithoutCursor(`
        db.test_collection.findOneAndReplace(
          {test_field: 'test_value'},
          {new_test_field: 'new_test_value'}
        );
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on extended findOneAndReplace statement', () => {
    const autocompleteResult = parseMongoQueryWithoutCursor(`
        db.test_collection.findOneAndReplace(
          {test_field: 'test_value'},
          {new_test_field: 'new_test_value'},
          {test_options: 'test_value'}
        );
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});
