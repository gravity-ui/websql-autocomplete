import {parseMsSqlQueryWithCursor} from '../../index.js';

test('should suggest properly after ALTER', () => {
    const autocompleteResult = parseMsSqlQueryWithCursor('ALTER |');

    expect(autocompleteResult.suggestKeywords).toEqual(
        expect.arrayContaining([
            {value: 'TABLE'},
            {value: 'VIEW'},
            {value: 'INDEX'},
            {value: 'TRIGGER'},
            {value: 'PROCEDURE'},
            {value: 'FUNCTION'},
            {value: 'DATABASE'},
            {value: 'SCHEMA'},
        ]),
    );
});
