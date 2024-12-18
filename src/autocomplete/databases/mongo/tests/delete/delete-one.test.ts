import {parseMongoQueryWithoutCursor} from '../..';

test('should not report errors on deleteOne statement', () => {
    const autocompleteResult = parseMongoQueryWithoutCursor(`
        db.test_collection.deleteOne(
          {
            test_field: 'test_value',
          }
        );
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on extended deleteOne statement', () => {
    const autocompleteResult = parseMongoQueryWithoutCursor(`
      db.test_collection.deleteOne(
        {
          test_field: 'test_value',
        },
        {
          test_option: 'test_value',
        }
      );
  `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on deleteOne statement without arguments', () => {
    const autocompleteResult = parseMongoQueryWithoutCursor(`
        db.test_collection.deleteOne();
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});
