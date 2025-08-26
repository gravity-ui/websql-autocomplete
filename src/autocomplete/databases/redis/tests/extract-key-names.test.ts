import {extractRedisKeyNamesFromQuery} from '..';

test('should extract key names from command', () => {
    const result = extractRedisKeyNamesFromQuery(`
        APPEND test_key1 test_value
        COPY test_key2 test_value
        DECR test_key3
        DECRBY test_key4 1
        DEL test_key5
        UNLINK test_key6
        DUMP test_key7
        EXISTS test_key8
    `);

    expect(result).toEqual([
        'test_key1',
        'test_key2',
        'test_key3',
        'test_key4',
        'test_key5',
        'test_key6',
        'test_key7',
        'test_key8',
    ]);
});
