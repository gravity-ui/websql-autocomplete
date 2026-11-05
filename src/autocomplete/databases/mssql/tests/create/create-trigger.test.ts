import {parseMsSqlQueryWithCursor, parseMsSqlQueryWithoutCursor} from '../../index.js';
import {KeywordSuggestion, TableOrViewSuggestion} from '../../../../shared/autocomplete-types.js';

test.each(['CREATE TRIGGER |', 'CREATE OR ALTER TRIGGER |'])(
    'should not suggest existing triggers after %s',
    (query) => {
        const autocompleteResult = parseMsSqlQueryWithCursor(query);

        expect(autocompleteResult.suggestTriggers).toEqual(false);
    },
);

test('should suggest tables and views after ON', () => {
    const autocompleteResult = parseMsSqlQueryWithCursor('CREATE TRIGGER test_trigger ON |');

    expect(autocompleteResult.suggestViewsOrTables).toEqual(TableOrViewSuggestion.ALL);
});

test('should suggest properly after table name', () => {
    const autocompleteResult = parseMsSqlQueryWithCursor(
        'CREATE TRIGGER test_trigger ON test_table |',
    );

    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: 'INSTEAD'},
        {value: 'AFTER'},
        {value: 'FOR'},
        {value: 'WITH'},
    ];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should not report errors on full statement', () => {
    const autocompleteResult = parseMsSqlQueryWithoutCursor(
        'CREATE TRIGGER test_trigger ON test_table AFTER INSERT, UPDATE AS BEGIN SELECT * FROM inserted; END;',
    );

    expect(autocompleteResult.errors).toHaveLength(0);
});
