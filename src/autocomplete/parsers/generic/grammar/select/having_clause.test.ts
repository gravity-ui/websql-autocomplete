import {expect, test} from '@jest/globals';

import {ColumnsSuggestion, parseGenericSql, parseGenericSqlWithoutCursor} from '../../../../index';

test('should suggest columns', () => {
    const parseResult = parseGenericSql(
        'SELECT COUNT(test_column_1), test_column_1 FROM test_table GROUP BY test_column_1 HAVING ',
        '',
    );

    expect(parseResult.errors).toBeUndefined();

    const columnsSuggestion: ColumnsSuggestion = {
        tables: [
            {
                identifierChain: [
                    {
                        name: 'test_table',
                    },
                ],
            },
        ],
    };
    expect(parseResult.suggestColumns).toEqual(columnsSuggestion);
});

test('should not report errors', () => {
    const parseResult = parseGenericSqlWithoutCursor(
        'SELECT COUNT(test_column_1), test_column_1 FROM test_table GROUP BY test_column_1 HAVING COUNT(test_column_1) > 5',
    );
    expect(parseResult.errors).toBeUndefined();
});
