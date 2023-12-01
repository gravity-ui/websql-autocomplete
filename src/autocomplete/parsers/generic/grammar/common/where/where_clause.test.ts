import {expect, test} from '@jest/globals';

import {ColumnSuggestion, FunctionsSuggestion, parseGenericSql} from '../../../../../index';

// TODO: move to other place
test('should suggest columns', () => {
    const parseResult = parseGenericSql('SELECT * FROM test_table WHERE ', '');

    expect(parseResult.errors).toBeUndefined();

    const columnsSuggestion: ColumnSuggestion = {
        source: 'where',
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

    const functionsSuggestion: FunctionsSuggestion = {};
    expect(parseResult.suggestFunctions).toEqual(functionsSuggestion);
});
