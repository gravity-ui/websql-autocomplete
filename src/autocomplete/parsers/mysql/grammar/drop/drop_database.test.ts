import {expect, test} from '@jest/globals';

import {
    DatabasesSuggestion,
    IdentifierLocation,
    KeywordSuggestion,
    parseMySqlQuery,
    parseMySqlQueryWithoutCursor,
} from '../../../../index';

test('should suggest databases and IF EXISTS', () => {
    const parseResult = parseMySqlQuery('DROP DATABASE ', '');

    expect(parseResult.errors).toBeUndefined();

    const databasesSuggestion: DatabasesSuggestion = {};
    expect(parseResult.suggestDatabases).toEqual(databasesSuggestion);

    const suggestions: KeywordSuggestion[] = [{value: 'IF EXISTS', weight: -1}];
    expect(parseResult.suggestKeywords).toEqual(suggestions);
});

test('should suggest CASCADE', () => {
    const parseResult = parseMySqlQuery('DROP DATABASE test_database ', '');

    expect(parseResult.errors).toBeUndefined();

    const suggestions: KeywordSuggestion[] = [{value: 'CASCADE', weight: -1}];
    expect(parseResult.suggestKeywords).toEqual(suggestions);
});

test('should not report errors on full statement and fill locations', () => {
    const parseResult = parseMySqlQueryWithoutCursor('DROP DATABASE test_database CASCADE;');

    expect(parseResult.errors).toBeUndefined();

    const locations: IdentifierLocation[] = [
        {
            location: {
                first_column: 1,
                first_line: 1,
                last_column: 36,
                last_line: 1,
            },
            type: 'statement',
        },
        {
            identifier: 'DROP DATABASE',
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