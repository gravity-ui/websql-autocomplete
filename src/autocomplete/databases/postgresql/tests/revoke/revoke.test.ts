import {parsePostgreSqlQueryWithCursor} from '../../../../shared/parse-query-with-cursor';
import {KeywordSuggestion} from '../../../../autocomplete-types';

// TODO Grammar is not full?
test('should suggest keywords after REVOKE', () => {
    const autocompleteResult = parsePostgreSqlQueryWithCursor('REVOKE |');

    const keywords: KeywordSuggestion[] = [
        {value: 'ADMIN'},
        {value: 'SELECT'},
        {value: 'REFERENCES'},
        {value: 'CREATE'},
        {value: 'GRANT'},
        {value: 'ALL'},
    ];
    expect(autocompleteResult.suggestKeywords).toEqual(keywords);
});

test('should suggest keywords after SELECT', () => {
    const autocompleteResult = parsePostgreSqlQueryWithCursor('REVOKE SELECT |');

    const keywords: KeywordSuggestion[] = [{value: 'FROM'}, {value: 'ON'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywords);
});

test('should suggest keywords after SELECT ON', () => {
    const autocompleteResult = parsePostgreSqlQueryWithCursor('REVOKE SELECT ON |');

    const keywords: KeywordSuggestion[] = [
        {value: 'TABLE'},
        {value: 'SEQUENCE'},
        {value: 'FOREIGN'},
        {value: 'FUNCTION'},
        {value: 'PROCEDURE'},
        {value: 'ROUTINE'},
        {value: 'DATABASE'},
        {value: 'DOMAIN'},
        {value: 'LANGUAGE'},
        {value: 'LARGE'},
        {value: 'SCHEMA'},
        {value: 'TABLESPACE'},
        {value: 'TYPE'},
        {value: 'ALL'},
    ];
    expect(autocompleteResult.suggestKeywords).toEqual(keywords);
});

test('should suggest keywords after SELECT ON table', () => {
    const autocompleteResult = parsePostgreSqlQueryWithCursor(
        'REVOKE SELECT ON TABLE test_table |',
    );

    const keywords: KeywordSuggestion[] = [{value: 'FROM'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywords);
});

test('should suggest keywords after SELECT ON table TO', () => {
    const autocompleteResult = parsePostgreSqlQueryWithCursor(
        'REVOKE SELECT ON TABLE test_table FROM |',
    );

    const keywords: KeywordSuggestion[] = [{value: 'GROUP'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywords);

    expect(autocompleteResult.suggestRoles).toEqual(true);
});

test('should suggest keywords after SELECT ON table TO user', () => {
    const autocompleteResult = parsePostgreSqlQueryWithCursor(
        'REVOKE SELECT ON TABLE test_table FROM test_user |',
    );

    const keywords: KeywordSuggestion[] = [{value: 'WITH'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywords);
});

test('should suggest sequences', () => {
    const autocompleteResult = parsePostgreSqlQueryWithCursor('REVOKE ALL ON SEQUENCE |');

    const keywords: KeywordSuggestion[] = [{value: 'TO'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywords);

    expect(autocompleteResult.suggestSequences).toEqual(true);
});

test('should suggest schemas', () => {
    const autocompleteResult = parsePostgreSqlQueryWithCursor('REVOKE ALL ON SCHEMA |');

    const keywords: KeywordSuggestion[] = [{value: 'TO'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywords);

    expect(autocompleteResult.suggestSchemas).toEqual(true);
});

test('should suggest databases', () => {
    const autocompleteResult = parsePostgreSqlQueryWithCursor('REVOKE ALL ON DATABASE |');

    const keywords: KeywordSuggestion[] = [{value: 'TO'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywords);

    expect(autocompleteResult.suggestDatabases).toEqual(true);
});
