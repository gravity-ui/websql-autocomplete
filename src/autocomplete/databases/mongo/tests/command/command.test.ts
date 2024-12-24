import {extractMongoCommandsFromQuery, parseMongoQueryWithoutCursor} from '../..';

test('should not report errors on command statement', () => {
    const autocompleteResult = parseMongoQueryWithoutCursor(`
        db.command({ping: 1});
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on extended command statement', () => {
    const autocompleteResult = parseMongoQueryWithoutCursor(`
        db.command({ping: 1}, {
            test_option: 'test_value'
        });
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should extract command commands properly', () => {
    const result = extractMongoCommandsFromQuery(`
        db.command({ping: 1});
        db.command({ping: 1}, {
            test_option: 'test_value'
        });
    `);

    expect(result).toEqual({
        commands: [
            {
                type: 'database',
                method: 'command',
                document: {ping: 1},
            },
            {
                type: 'database',
                method: 'command',
                document: {ping: 1},
                options: {
                    test_option: 'test_value',
                },
            },
        ],
    });
});
