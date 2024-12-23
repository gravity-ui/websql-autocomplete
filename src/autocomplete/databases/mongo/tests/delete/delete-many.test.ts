import {parseMongoQueryWithoutCursor} from '../..';

test('should not report errors on deleteMany statement', () => {
    const autocompleteResult = parseMongoQueryWithoutCursor(`
        db.test_collection.deleteMany(
          {
            test_field: 'test_value',
          }
        );
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on extended deleteMany statement', () => {
    const autocompleteResult = parseMongoQueryWithoutCursor(`
      db.test_collection.deleteMany(
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

test('should not report errors on deleteMany statement without arguments', () => {
    const autocompleteResult = parseMongoQueryWithoutCursor(`
        db.test_collection.deleteMany();
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});
