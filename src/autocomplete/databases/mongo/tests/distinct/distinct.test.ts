import {parseMongoQueryWithoutCursor} from '../..';

test('should not report errors on distinct statement', () => {
    const autocompleteResult = parseMongoQueryWithoutCursor(`
        db.test_collection.distinct('test_key');
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on extended distinct statement', () => {
    const autocompleteResult = parseMongoQueryWithoutCursor(`
      db.test_collection.distinct(
        'test_key',
        {
            test_filter_option: 'test_value',
        },
        {
            test_option: 'test_value',
        }
      );
  `);

    expect(autocompleteResult.errors).toHaveLength(0);
});
