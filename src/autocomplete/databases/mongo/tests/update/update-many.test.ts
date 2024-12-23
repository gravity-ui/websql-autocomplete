import {parseMongoQueryWithoutCursor} from '../..';

test('should not report errors on updateMany statement', () => {
    const autocompleteResult = parseMongoQueryWithoutCursor(`
        db.test_collection.updateMany(
          {
            test_field1: 'test_value1',
          },
          {
            $set: {
              test_field2: 'test_value2',
            }
          }
        );
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on document list in updateMany statement', () => {
    const autocompleteResult = parseMongoQueryWithoutCursor(`
      db.test_collection.updateMany(
        {
          test_field1: 'test_value1',
        },
        [
          {
            test_field2: 'test_value2',
          },
          {
            test_field3: 'test_value3',
          },
        ]
      );
  `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on extended updateMany statement', () => {
    const autocompleteResult = parseMongoQueryWithoutCursor(`
        db.test_collection.updateMany(
          {
            test_field1: 'test_value1',
          },
          {
            $set: {
              test_field2: 'test_value2',
            }
          },
          {
            test_option: 'test_value',
          }
        );
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});
