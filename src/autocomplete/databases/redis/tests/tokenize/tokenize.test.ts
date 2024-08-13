import {RedisCommands, extractRedisCommandsFromQuery} from '../../redis-tokenize';

test('should extract commands from simple query', () => {
    const result = extractRedisCommandsFromQuery('SET test_key test_value');
    const commands: RedisCommands = [['SET', 'test_key', 'test_value']];

    expect(result).toEqual(commands);
});

test('should extract commands from multiline (2) query', () => {
    const result = extractRedisCommandsFromQuery('GET test_key\nSET test_key test_value');
    const commands: RedisCommands = [
        ['GET', 'test_key'],
        ['SET', 'test_key', 'test_value'],
    ];

    expect(result).toEqual(commands);
});

test('should extract commands from multiline (3) query', () => {
    const result = extractRedisCommandsFromQuery(
        'GET test_key\nSET test_key test_value\nINCR test_key',
    );
    const commands: RedisCommands = [
        ['GET', 'test_key'],
        ['SET', 'test_key', 'test_value'],
        ['INCR', 'test_key'],
    ];

    expect(result).toEqual(commands);
});

test('should extract commands with weird spacing', () => {
    const result = extractRedisCommandsFromQuery('SET    test_key     test_value\n\n');
    const commands: RedisCommands = [['SET', 'test_key', 'test_value']];

    expect(result).toEqual(commands);
});
