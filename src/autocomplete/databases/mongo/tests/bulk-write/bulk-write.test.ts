import {parseMongoQueryWithoutCursor} from '../..';

test('should not report errors on bulkWrite statement', () => {
    const autocompleteResult = parseMongoQueryWithoutCursor(`
        db.test_collection.bulkWrite(
          [
            {test_field: 'test_value'},
            {test_field: 'test_value'},
            {test_field: 'test_value'}
          ]
        );
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on extended bulkWrite statement', () => {
    const autocompleteResult = parseMongoQueryWithoutCursor(`
        db.test_collection.bulkWrite(
          [
            {test_field: 'test_value'},
            {test_field: 'test_value'},
            {test_field: 'test_value'},
          ],
          {test_option: 'test_value'}
        );
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});
