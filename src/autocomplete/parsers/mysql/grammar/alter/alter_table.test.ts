import {expect, test} from '@jest/globals';

import {DatabasesSuggestion, TablesSuggestion, parseMySqlQuery} from '../../../../index';

test('should suggest tables to alter', () => {
    const parseResult = parseMySqlQuery('ALTER TABLE ', '');

    expect(parseResult.errors).toBeUndefined();

    const tablesSuggestion: TablesSuggestion = {
        onlyTables: true,
    };
    expect(parseResult.suggestTables).toEqual(tablesSuggestion);

    const databasesSuggestion: DatabasesSuggestion = {
        appendDot: true,
    };
    expect(parseResult.suggestDatabases).toEqual(databasesSuggestion);
});

// TODO: add full tests + locations test