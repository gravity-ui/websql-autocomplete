import {parseMongoQueryWithoutCursor} from '../..';

test('should not report errors on findOneAndUpdate statement', () => {
    const autocompleteResult = parseMongoQueryWithoutCursor(`
        db.test_collection.findOneAndUpdate(
          {test_field: 'test_value'},
          {test_field: 'new_test_value'}
        );

        db.collection('test_collection').findOneAndUpdate(
          {test_field: 'test_value'},
          {test_field: 'new_test_value'}
        );
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on extended findOneAndUpdate statement', () => {
    const autocompleteResult = parseMongoQueryWithoutCursor(`
        db.test_collection.findOneAndUpdate(
          {test_field: 'test_value'},
          {test_field: 'new_test_value'},
          {test_options: 'test_value'}
        );

        db.collection('test_collection').findOneAndUpdate(
          {test_field: 'test_value'},
          {test_field: 'new_test_value'},
          {test_options: 'test_value'}
        );
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});
