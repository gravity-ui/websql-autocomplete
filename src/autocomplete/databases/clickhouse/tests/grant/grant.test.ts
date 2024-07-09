import {parseClickHouseQueryWithCursor} from '../../index';

// TODO: support grant statement
test.skip('should suggest keywords after GRANT', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('GRANT |');
    expect(autocompleteResult).toEqual([]);
});
