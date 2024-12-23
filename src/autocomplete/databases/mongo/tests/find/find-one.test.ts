import {parseMongoQueryWithoutCursor} from '../..';

test('should not report errors on findOne statement', () => {
    const autocompleteResult = parseMongoQueryWithoutCursor(`
        db.test_collection.findOne(
            {test_field: 'test_value'}
        );

        db.collection('test_collection').findOne(
            {test_field: 'test_value'}
        );
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on extended findOne statement', () => {
    const autocompleteResult = parseMongoQueryWithoutCursor(`
        db.test_collection.findOne(
          {test_field: 'test_value'},
          {test_option: 'test_value'}
        );

        db.collection('test_collection').findOne(
          {test_field: 'test_value'},
          {test_option: 'test_value'}
        );
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});
