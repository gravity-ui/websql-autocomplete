import {expect, test} from '@jest/globals';

import {StatementPart, parseGenericSqlWithoutCursor} from '../../../../index';

test('should not report errors on full statement and fill locations', () => {
    const parseResult = parseGenericSqlWithoutCursor('CREATE ROLE test_role;');

    expect(parseResult.errors).toBeUndefined();

    const statementParts: StatementPart[] = [
        {
            type: 'statement',
            location: {
                first_column: 1,
                first_line: 1,
                last_column: 22,
                last_line: 1,
            },
        },
    ];
    expect(parseResult.locations).toEqual(statementParts);
});
