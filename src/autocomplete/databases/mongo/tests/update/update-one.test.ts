import {parseMongoQueryWithoutCursor} from '../..';

test('should not report errors on updateOne statement', () => {
    const autocompleteResult = parseMongoQueryWithoutCursor(`
        db.test_collection.updateOne(
          {
            test_field1: 'test_value1',
          },
          {
            $set: {
              test_field2: 'test_value2',
            }
          }
        );

        db.collection('test_collection').updateOne(
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

test('should not report errors on document list in updateOne statement', () => {
    const autocompleteResult = parseMongoQueryWithoutCursor(`
      db.test_collection.updateOne(
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

      db.collection('test_collection').updateOne(
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

test('should not report errors on extended updateOne statement', () => {
    const autocompleteResult = parseMongoQueryWithoutCursor(`
        db.test_collection.updateOne(
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

        db.collection('test_collection').updateOne(
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
