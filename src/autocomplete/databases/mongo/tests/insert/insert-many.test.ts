import {parseMongoQueryWithoutCursor} from '../..';

test('should not report errors on insertMany statement', () => {
    const autocompleteResult = parseMongoQueryWithoutCursor(`
        db.test_collection.insertMany(
          [{
            test_field: 'test_value'
          }],
        );
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on extended insertMany statement', () => {
    const autocompleteResult = parseMongoQueryWithoutCursor(`
      db.test_collection.insertMany(
        [
          {
            test_field: 'test_value1'
          },
          {
            test_field2: 'test_value2'
          },
          {
            test_field3: 'test_value3'
          },
          [1, 2, 3],
          [{test_field4: 'test_value4'}]
        ],
        {
          test_option: 'test_value'
        }
      );
  `);

    expect(autocompleteResult.errors).toHaveLength(0);
});
