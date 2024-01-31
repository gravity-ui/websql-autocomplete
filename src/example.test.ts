import {parseMySqlQueryWithoutCursor} from '.';

test('a', () => {
    expect(parseMySqlQueryWithoutCursor('SELECT').errors).toHaveLength(1);
});
