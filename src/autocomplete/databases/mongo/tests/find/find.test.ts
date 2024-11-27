import {parseMongoQueryWithCursor} from '../..';

test('should suggest properly keywords after find', () => {
    const autocompleteResult = parseMongoQueryWithCursor('db.test_collection.|');

    expect(autocompleteResult.suggestKeywords).toEqual([{value: 'find'}, {value: 'insertOne'}]);
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
