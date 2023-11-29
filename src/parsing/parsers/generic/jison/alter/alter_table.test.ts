import {
    DatabasesSuggestion,
    KeywordSuggestion,
    parseGenericSql, TablesSuggestion,
} from '../../../../index';
import {expect, test} from '@jest/globals';

test('should suggest altering table', () => {
    const parseResult = parseGenericSql('ALTER ', '');

    expect(parseResult.errors).toBeUndefined();

    const suggestion: KeywordSuggestion = { value: 'TABLE', weight: -1 };
    expect(parseResult.suggestKeywords).toContainEqual(suggestion);
})

test('should suggest tables to alter', () => {
    const parseResult = parseGenericSql('ALTER TABLE ', '');

    expect(parseResult.errors).toBeUndefined();

    const tablesSuggestion: TablesSuggestion = {
        onlyTables: true,
    };
    expect(parseResult.suggestTables).toEqual(tablesSuggestion);

    const databasesSuggestion: DatabasesSuggestion = {
        appendDot: true,
    }
    expect(parseResult.suggestDatabases).toEqual(databasesSuggestion);
})

// TODO: add full tests + locations test