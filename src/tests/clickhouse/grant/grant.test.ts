import {parseClickHouseQueryWithCursor} from '../../shared/lib';

// TODO: support grant statement
test.skip('should suggest keywords after GRANT', () => {
    const parseResult = parseClickHouseQueryWithCursor('GRANT |');
    expect(parseResult).toEqual([]);
});
