import {
    Command,
    extractMongoCommandsFromQuery,
    parseMongoQueryWithCursor,
    parseMongoQueryWithoutCursor,
} from '../..';

test('should not report errors on admin statements', () => {
    const autocompleteResult = parseMongoQueryWithoutCursor(`
        db.admin().command({ping: 1});
        db.admin().removeUser('test_user');
        db.admin().buildInfo();
        db.admin().serverInfo();
        db.admin().serverStatus();
        db.admin().ping();
        db.admin().listDatabases();
        db.admin().replSetGetStatus();
        db.admin().validateCollection('test_collection');
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on extended admin statements', () => {
    const autocompleteResult = parseMongoQueryWithoutCursor(`
        db.admin().command(
            {
                ping: 1
            },
            {
                test_option: 'test_value',
            }
        );
        db.admin().removeUser('test_user', {
            test_option: 'test_value',
        });
        db.admin().buildInfo({
            test_option: 'test_value',
        });
        db.admin().serverInfo({
            test_option: 'test_value',
        });
        db.admin().serverStatus({
            test_option: 'test_value',
        });
        db.admin().ping({
            test_option: 'test_value',
        });
        db.admin().listDatabases({
            test_option: 'test_value',
        });
        db.admin().replSetGetStatus({
            test_option: 'test_value',
        });
        db.admin().validateCollection('test_collection');
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should suggest keywords after db.admin().', () => {
    const autocompleteResult = parseMongoQueryWithCursor('db.admin().|');

    expect(autocompleteResult.suggestKeywords).toEqual([
        {value: 'command'},
        {value: 'removeUser'},
        {value: 'buildInfo'},
        {value: 'serverInfo'},
        {value: 'serverStatus'},
        {value: 'ping'},
        {value: 'listDatabases'},
        {value: 'replSetGetStatus'},
        {value: 'validateCollection'},
    ]);
});

test('should extract admin commands properly', () => {
    const result = extractMongoCommandsFromQuery(`
        db.admin().command({ping: 1});
        db.admin().removeUser('test_user');
        db.admin().buildInfo();
        db.admin().serverInfo();
        db.admin().serverStatus();
        db.admin().ping();
        db.admin().listDatabases();
        db.admin().replSetGetStatus();
        db.admin().validateCollection('test_collection');
    `);

    const commands: Command[] = [
        {
            type: 'database',
            method: 'admin',
            childMethod: {
                method: 'command',
                document: {ping: 1},
            },
        },
        {
            type: 'database',
            method: 'admin',
            childMethod: {
                method: 'removeUser',
                username: 'test_user',
            },
        },
        {
            type: 'database',
            method: 'admin',
            childMethod: {
                method: 'buildInfo',
            },
        },
        {
            type: 'database',
            method: 'admin',
            childMethod: {
                method: 'serverInfo',
            },
        },
        {
            type: 'database',
            method: 'admin',
            childMethod: {
                method: 'serverStatus',
            },
        },
        {
            type: 'database',
            method: 'admin',
            childMethod: {
                method: 'ping',
            },
        },
        {
            type: 'database',
            method: 'admin',
            childMethod: {
                method: 'listDatabases',
            },
        },
        {
            type: 'database',
            method: 'admin',
            childMethod: {
                method: 'replSetGetStatus',
            },
        },
        {
            type: 'database',
            method: 'admin',
            childMethod: {
                method: 'validateCollection',
                collectionName: 'test_collection',
            },
        },
    ];

    expect(result).toEqual({
        commands,
    });
});

test('should extract extended admin commands properly', () => {
    const result = extractMongoCommandsFromQuery(`
        db.admin().command(
            {
                ping: 1
            },
            {
                test_option: 'test_value',
            }
        );
        db.admin().removeUser('test_user', {
            test_option: 'test_value',
        });
        db.admin().buildInfo({
            test_option: 'test_value',
        });
        db.admin().serverInfo({
            test_option: 'test_value',
        });
        db.admin().serverStatus({
            test_option: 'test_value',
        });
        db.admin().ping({
            test_option: 'test_value',
        });
        db.admin().listDatabases({
            test_option: 'test_value',
        });
        db.admin().replSetGetStatus({
            test_option: 'test_value',
        });
        db.admin().validateCollection('test_collection', {
            test_option: 'test_value',
        });
    `);

    const commands: Command[] = [
        {
            type: 'database',
            method: 'admin',
            childMethod: {
                method: 'command',
                document: {
                    ping: 1,
                },
                options: {
                    test_option: 'test_value',
                },
            },
        },
        {
            type: 'database',
            method: 'admin',
            childMethod: {
                method: 'removeUser',
                username: 'test_user',
                options: {
                    test_option: 'test_value',
                },
            },
        },
        {
            type: 'database',
            method: 'admin',
            childMethod: {
                method: 'buildInfo',
                options: {
                    test_option: 'test_value',
                },
            },
        },
        {
            type: 'database',
            method: 'admin',
            childMethod: {
                method: 'serverInfo',
                options: {
                    test_option: 'test_value',
                },
            },
        },
        {
            type: 'database',
            method: 'admin',
            childMethod: {
                method: 'serverStatus',
                options: {
                    test_option: 'test_value',
                },
            },
        },
        {
            type: 'database',
            method: 'admin',
            childMethod: {
                method: 'ping',
                options: {
                    test_option: 'test_value',
                },
            },
        },
        {
            type: 'database',
            method: 'admin',
            childMethod: {
                method: 'listDatabases',
                options: {
                    test_option: 'test_value',
                },
            },
        },
        {
            type: 'database',
            method: 'admin',
            childMethod: {
                method: 'replSetGetStatus',
                options: {
                    test_option: 'test_value',
                },
            },
        },
        {
            type: 'database',
            method: 'admin',
            childMethod: {
                method: 'validateCollection',
                collectionName: 'test_collection',
                options: {
                    test_option: 'test_value',
                },
            },
        },
    ];

    expect(result).toEqual({
        commands,
    });
});
