import {expect, test} from '@jest/globals';

import {IdentifierLocation, parseMySqlQueryWithoutCursor} from '../../../../index';

test('should not report errors on full statement and fill locations', () => {
    const parseResult = parseMySqlQueryWithoutCursor('DROP ROLE test_role;');

    expect(parseResult.errors).toBeUndefined();

    const locations: IdentifierLocation[] = [
        {
            location: {
                first_column: 1,
                first_line: 1,
                last_column: 20,
                last_line: 1,
            },
            type: 'statement',
        },
        {
            identifier: 'DROP ROLE',
            location: {
                first_column: 1,
                first_line: 1,
                last_column: 5,
                last_line: 1,
            },
            type: 'statementType',
        },
    ];
    expect(parseResult.locations).toEqual(locations);
});