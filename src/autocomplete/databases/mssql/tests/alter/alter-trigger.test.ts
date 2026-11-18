import {parseMsSqlQueryWithCursor} from '../../index.js';

test.each(['ALTER TRIGGER |', 'ALTER TRIGGER test_schema.|'])(
    'should suggest triggers after %s',
    (query) => {
        const autocompleteResult = parseMsSqlQueryWithCursor(query);

        expect(autocompleteResult.suggestTriggers).toEqual(true);
    },
);
