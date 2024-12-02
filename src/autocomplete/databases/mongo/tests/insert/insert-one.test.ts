import {parseMongoQueryWithoutCursor} from '../..';

test('should not report errors on insertOne statement', () => {
    const autocompleteResult = parseMongoQueryWithoutCursor(`
        db.test_collection.insertOne(
          {
            test_field: 'test_value'
          }
        );
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on extended insertOne statement', () => {
    const autocompleteResult = parseMongoQueryWithoutCursor(`
      db.test_collection.insertOne(
        {
          test_field: 'test_value'
        },
        {
          test_option: 'test_value'
        }
      );
  `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on array document in insertOne statement', () => {
    const autocompleteResult = parseMongoQueryWithoutCursor(`
    db.test_collection.insertOne(
      [
        {
          test_field: 'test_value1'
        },
        1,
        'test_value2',
        [1, 2, {test_field2: 'test_value3'}]
      ]
    );
`);

    expect(autocompleteResult.errors).toHaveLength(0);
});
