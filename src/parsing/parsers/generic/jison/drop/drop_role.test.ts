import {
    parseGenericSqlWithoutCursor, StatementPart
} from '../../../../index';
import {expect, test} from '@jest/globals';

test('should not report errors on full statement and fill locations', () => {
    const parseResult = parseGenericSqlWithoutCursor('DROP ROLE test_role;');

    expect(parseResult.errors).toBeUndefined();

    const statementParts: StatementPart[] = [
        {
            location: {
                first_column: 1,
                first_line: 1,
                last_column: 20,
                last_line: 1
            },
            type: "statement"
        },
        {
            identifier: "DROP ROLE",
            location: {
                first_column: 1,
                first_line: 1,
                last_column: 5,
                last_line: 1
            },
            type: "statementType"
        }
    ];
    expect(parseResult.locations).toEqual(statementParts);
})