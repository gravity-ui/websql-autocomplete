import {parseMongoQueryWithCursor, parseMongoQueryWithoutCursor} from '../..';

test('should not report errors on find statement', () => {
    const autocompleteResult = parseMongoQueryWithoutCursor(`
        db.test_collection
            .find({test_field: 'test_value'}, {test_field: 'test_value'})
            .skip(1)
            .limit(1)
            .filter({test_field: 'test_value'})
            .min({test_field: 'test_value'})
            .max({test_field: 'test_value'})
            .hint('test_index')
            .returnKey(true)
            .showRecordId(true)
            .sort('test_field', 'DESC')
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should suggest properly find modifiers', () => {
    const autocompleteResult = parseMongoQueryWithCursor('db.test_collection.find().|');

    expect(autocompleteResult.suggestKeywords).toEqual([
        {value: 'explain'},
        {value: 'sort'},
        {value: 'showRecordId'},
        {value: 'returnKey'},
        {value: 'hint'},
        {value: 'max'},
        {value: 'min'},
        {value: 'filter'},
        {value: 'limit'},
        {value: 'skip'},
    ]);
});
