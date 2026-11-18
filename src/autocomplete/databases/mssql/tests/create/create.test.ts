import {parseMsSqlQueryWithCursor} from '../../index.js';

test('should suggest properly after CREATE', () => {
    const autocompleteResult = parseMsSqlQueryWithCursor('CREATE |');

    expect(autocompleteResult.suggestKeywords).toEqual(
        expect.arrayContaining([
            {value: 'TABLE'},
            {value: 'VIEW'},
            {value: 'OR'},
            {value: 'INDEX'},
            {value: 'UNIQUE'},
            {value: 'CLUSTERED'},
            {value: 'NONCLUSTERED'},
            {value: 'TRIGGER'},
            {value: 'PROCEDURE'},
            {value: 'FUNCTION'},
            {value: 'DATABASE'},
            {value: 'SCHEMA'},
        ]),
    );
});
