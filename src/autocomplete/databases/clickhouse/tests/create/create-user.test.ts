import {parseClickHouseQueryWithCursor, parseClickHouseQueryWithoutCursor} from '../../index';
import {KeywordSuggestion} from '../../../../shared/autocomplete-types';

test('should suggest properly after USER', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('CREATE USER |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'IF'}, {value: 'OR'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after user name', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('CREATE USER test_user |');

    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: 'NOT'},
        {value: 'IDENTIFIED'},
        {value: 'ON'},
    ];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after not', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('CREATE USER test_user NOT |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'IDENTIFIED'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after identified', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('CREATE USER test_user IDENTIFIED |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'WITH'}, {value: 'BY'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after if', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('CREATE USER IF |');

    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: 'NOT'},
        {value: 'IDENTIFIED'},
        {value: 'ON'},
    ];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after not', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('CREATE USER IF NOT |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'IDENTIFIED'}, {value: 'EXISTS'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after or', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('CREATE USER OR |');

    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: 'NOT'},
        {value: 'IDENTIFIED'},
        {value: 'ON'},
        {value: 'REPLACE'},
    ];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after identified', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('CREATE USER test_user IDENTIFIED |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'WITH'}, {value: 'BY'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after with', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor(
        'CREATE USER test_user IDENTIFIED WITH |',
    );

    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: 'LDAP'},
        {value: 'NO_PASSWORD'},
        {value: 'PLAINTEXT_PASSWORD'},
        {value: 'SHA256_PASSWORD'},
        {value: 'SHA256_HASH'},
        {value: 'DOUBLE_SHA1_PASSWORD'},
        {value: 'DOUBLE_SHA1_HASH'},
    ];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after ldap', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor(
        'CREATE USER test_user IDENTIFIED WITH LDAP |',
    );

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'SERVER'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should not report errors', () => {
    const autocompleteResult = parseClickHouseQueryWithoutCursor(`
        CREATE USER test_user NOT IDENTIFIED;
        CREATE USER test_user IDENTIFIED BY 'test_password';
        CREATE USER test_user IDENTIFIED WITH LDAP SERVER 'test_server';
        CREATE USER test_user IDENTIFIED WITH NO_PASSWORD;
        CREATE USER test_user IDENTIFIED WITH PLAINTEXT_PASSWORD BY 'test_password';
        CREATE USER test_user IDENTIFIED WITH SHA256_PASSWORD BY 'test_password';
        CREATE USER test_user IDENTIFIED WITH SHA256_HASH BY 'test_password';
        CREATE USER test_user IDENTIFIED WITH DOUBLE_SHA1_PASSWORD BY 'test_password';
        CREATE USER test_user IDENTIFIED WITH DOUBLE_SHA1_HASH BY 'test_password';
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});
