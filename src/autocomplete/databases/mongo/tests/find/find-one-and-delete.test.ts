import {parseMongoQueryWithoutCursor} from '../..';

test('should not report errors on findOneAndDelete statement', () => {
    const autocompleteResult = parseMongoQueryWithoutCursor(`
        db.test_collection.findOneAndDelete(
          {test_field: 'test_value'}
        );

        db.collection('test_collection').findOneAndDelete(
          {test_field: 'test_value'}
        );
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on extended findOneAndDelete statement', () => {
    const autocompleteResult = parseMongoQueryWithoutCursor(`
        db.test_collection.findOneAndDelete(
          {test_field: 'test_value'},
          {test_options: 'test_value'}
        );

        db.collection('test_collection').findOneAndDelete(
          {test_field: 'test_value'},
          {test_options: 'test_value'}
        );
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});
