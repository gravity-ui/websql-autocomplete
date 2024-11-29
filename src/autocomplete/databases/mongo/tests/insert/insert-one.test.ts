import {parseMongoQueryWithoutCursor} from '../..';

test('should not report errors on insertOne statement', () => {
    const autocompleteResult = parseMongoQueryWithoutCursor(`
        db.test_collection.insertOne(
          {
            test_field: 'test_value'
          },
          {
            test_field: 'test_value'
          }
        )
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});
