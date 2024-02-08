import {parseMySqlQueryWithCursor} from '../../shared/lib';
import {KeywordSuggestion} from '../../../types';

test('should suggest properly after TRIGGER', () => {
    const parseResults = parseMySqlQueryWithCursor('CREATE TRIGGER |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'IF'}];
    expect(parseResults.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after trigger name', () => {
    const parseResults = parseMySqlQueryWithCursor('CREATE TRIGGER test_trigger |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'BEFORE'}, {value: 'AFTER'}];
    expect(parseResults.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after AFTER', () => {
    const parseResults = parseMySqlQueryWithCursor('CREATE TRIGGER test_trigger AFTER |');

    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: 'DELETE'},
        {value: 'INSERT'},
        {value: 'UPDATE'},
    ];
    expect(parseResults.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after UPDATE', () => {
    const parseResults = parseMySqlQueryWithCursor('CREATE TRIGGER test_trigger AFTER UPDATE |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'ON'}];
    expect(parseResults.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after ON', () => {
    const parseResults = parseMySqlQueryWithCursor('CREATE TRIGGER test_trigger AFTER UPDATE ON |');

    const keywordsSuggestion: KeywordSuggestion[] = [];
    expect(parseResults.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after table name', () => {
    const parseResults = parseMySqlQueryWithCursor(
        'CREATE TRIGGER test_trigger AFTER UPDATE ON test_table |',
    );

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'FOR'}];
    expect(parseResults.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after FOR EACH ROW', () => {
    const parseResults = parseMySqlQueryWithCursor(
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
    expect(parseResults.suggestKeywords).toEqual(keywordsSuggestion);
});
