import {
    Command,
    extractMongoCommandsFromQuery,
    parseMongoQueryWithCursor,
    parseMongoQueryWithoutCursor,
} from '../..';

test('should not report errors on renameCollection statement', () => {
    const autocompleteResult = parseMongoQueryWithoutCursor(`
        db.renameCollection('test_collection_old_name', 'test_collection_new_name');
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should suggest collections on first renameCollection argument', () => {
    const autocompleteResult = parseMongoQueryWithCursor(`
        db.renameCollection(|
    `);

    expect(autocompleteResult.suggestQuotedCollections).toEqual(true);
});

test('should not report errors on extended renameCollection statement', () => {
    const autocompleteResult = parseMongoQueryWithoutCursor(`
        db.renameCollection(
            'test_collection_old_name',
            'test_collection_new_name',
            {
                test_option_field: 'test_value',
            }
        );
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should extract renameCollection commands properly', () => {
    const result = extractMongoCommandsFromQuery(`
        db.renameCollection('test_collection_old_name', 'test_collection_new_name');
        db.renameCollection(
            'test_collection_old_name',
            'test_collection_new_name',
            {
                test_option_field: 'test_value',
            }
        );
    `);

    const commands: Command[] = [
        {
            type: 'database',
            method: 'renameCollection',
            currentName: 'test_collection_old_name',
            newName: 'test_collection_new_name',
        },
        {
            type: 'database',
            method: 'renameCollection',
            currentName: 'test_collection_old_name',
            newName: 'test_collection_new_name',
            options: {
                test_option_field: 'test_value',
            },
        },
    ];
    expect(result).toEqual({commands});
});
