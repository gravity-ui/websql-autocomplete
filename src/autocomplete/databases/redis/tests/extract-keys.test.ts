import {extractRedisKeysFromQuery} from '..';

test('should extract key from command', () => {
    const result = extractRedisKeysFromQuery(`
        APPEND test_key1 test_value
        COPY test_key2 test_value
        DECR test_key3
        DECRBY test_key4 1
        DEL test_key5
        UNLINK test_key6
        DUMP test_key7
        EXISTS test_key8
        EXISTS test_key8
    `);

    expect(result).toEqual([
        {keyName: 'test_key1'},
        {keyName: 'test_key2'},
        {keyName: 'test_key3'},
        {keyName: 'test_key4'},
        {keyName: 'test_key5'},
        {keyName: 'test_key6'},
        {keyName: 'test_key7'},
        {keyName: 'test_key8'},
    ]);
});
