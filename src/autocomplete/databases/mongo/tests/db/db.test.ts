import {parseMongoQueryWithCursor} from '../..';

test('should suggest properly on empty statement', () => {
    const autocompleteResult = parseMongoQueryWithCursor('|');

    expect(autocompleteResult.suggestKeywords).toEqual([{value: 'db'}]);
});

test('should suggest collections after db', () => {
    const autocompleteResult = parseMongoQueryWithCursor('db.|');

    expect(autocompleteResult.suggestCollections).toEqual(true);
});
