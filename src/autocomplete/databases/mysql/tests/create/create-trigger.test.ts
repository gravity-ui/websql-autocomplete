import {parseMySqlQueryWithCursor} from '../../index';
import {KeywordSuggestion} from '../../../../shared/autocomplete-types';

test('should suggest properly after TRIGGER', () => {
    const autocompleteResult = parseMySqlQueryWithCursor('CREATE TRIGGER |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'IF'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after trigger name', () => {
    const autocompleteResult = parseMySqlQueryWithCursor('CREATE TRIGGER test_trigger |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'BEFORE'}, {value: 'AFTER'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after AFTER', () => {
    const autocompleteResult = parseMySqlQueryWithCursor('CREATE TRIGGER test_trigger AFTER |');

    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: 'DELETE'},
        {value: 'INSERT'},
        {value: 'UPDATE'},
    ];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after UPDATE', () => {
    const autocompleteResult = parseMySqlQueryWithCursor(
        'CREATE TRIGGER test_trigger AFTER UPDATE |',
    );

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'ON'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after ON', () => {
    const autocompleteResult = parseMySqlQueryWithCursor(
        'CREATE TRIGGER test_trigger AFTER UPDATE ON |',
    );

    const keywordsSuggestion: KeywordSuggestion[] = [];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after table name', () => {
    const autocompleteResult = parseMySqlQueryWithCursor(
        'CREATE TRIGGER test_trigger AFTER UPDATE ON test_table |',
    );

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'FOR'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after FOR EACH ROW', () => {
    const autocompleteResult = parseMySqlQueryWithCursor(
        'CREATE TRIGGER test_trigger AFTER UPDATE ON test_table FOR EACH ROW |',
    );

    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: 'BEGIN'},
        {value: 'CREATE'},
        {value: 'ALTER'},
        {value: 'DROP'},
        {value: 'SET'},
        {value: 'RENAME'},
        {value: 'TRUNCATE'},
        {value: 'SELECT'},
        {value: 'INSERT'},
        {value: 'UPDATE'},
        {value: 'DELETE'},
        {value: 'REPLACE'},
        {value: 'CALL'},
        {value: 'LOAD'},
        {value: 'DO'},
        {value: 'HANDLER'},
        {value: 'VALUES'},
        {value: 'WITH'},
        {value: 'TABLE'},
        {value: 'START'},
        {value: 'COMMIT'},
        {value: 'ROLLBACK'},
        {value: 'SAVEPOINT'},
        {value: 'RELEASE'},
        {value: 'LOCK'},
        {value: 'UNLOCK'},
        {value: 'CHANGE'},
        {value: 'PURGE'},
        {value: 'RESET'},
        {value: 'STOP'},
        {value: 'XA'},
        {value: 'PREPARE'},
        {value: 'EXECUTE'},
        {value: 'DEALLOCATE'},
        {value: 'GRANT'},
        {value: 'REVOKE'},
        {value: 'ANALYZE'},
        {value: 'CHECK'},
        {value: 'CHECKSUM'},
        {value: 'OPTIMIZE'},
        {value: 'REPAIR'},
        {value: 'INSTALL'},
        {value: 'UNINSTALL'},
        {value: 'SHOW'},
        {value: 'BINLOG'},
        {value: 'CACHE'},
        {value: 'FLUSH'},
        {value: 'KILL'},
        {value: 'SHUTDOWN'},
        {value: 'DESC'},
        {value: 'DESCRIBE'},
        {value: 'EXPLAIN'},
        {value: 'HELP'},
        {value: 'USE'},
        {value: 'SIGNAL'},
        {value: 'RESIGNAL'},
        {value: 'GET'},
        {value: 'FOLLOWS'},
        {value: 'PRECEDES'},
    ];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});
