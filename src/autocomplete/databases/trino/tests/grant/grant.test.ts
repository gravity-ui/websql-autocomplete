import {parseTrinoQueryWithCursor} from '../../index';
import {KeywordSuggestion} from '../../../../shared/autocomplete-types';

// TODO Grammar is not full?
test('should suggest keywords after GRANT', () => {
    const autocompleteResult = parseTrinoQueryWithCursor('GRANT |');

    const keywords: KeywordSuggestion[] = [
        {value: 'SELECT'},
        {value: 'REFERENCES'},
        {value: 'CREATE'},
        {value: 'ALL'},
    ];
    expect(autocompleteResult.suggestKeywords).toEqual(keywords);
});

test('should suggest keywords after SELECT', () => {
    const autocompleteResult = parseTrinoQueryWithCursor('GRANT SELECT |');

    const keywords: KeywordSuggestion[] = [{value: 'TO'}, {value: 'ON'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywords);
});

test('should suggest keywords after SELECT ON', () => {
    const autocompleteResult = parseTrinoQueryWithCursor('GRANT SELECT ON |');

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
    const autocompleteResult = parseTrinoQueryWithCursor('GRANT SELECT ON TABLE test_table |');

    const keywords: KeywordSuggestion[] = [{value: 'TO'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywords);
});

test('should suggest keywords after SELECT ON table TO', () => {
    const autocompleteResult = parseTrinoQueryWithCursor(
        'GRANT SELECT ON TABLE test_table TO |',
    );

    const keywords: KeywordSuggestion[] = [{value: 'GROUP'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywords);
});

test('should suggest keywords after SELECT ON table TO user', () => {
    const autocompleteResult = parseTrinoQueryWithCursor(
        'GRANT SELECT ON TABLE test_table TO test_user |',
    );

    const keywords: KeywordSuggestion[] = [{value: 'WITH'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywords);
});

test('should suggest sequences', () => {
    const autocompleteResult = parseTrinoQueryWithCursor('GRANT ALL ON SEQUENCE |');

    const keywords: KeywordSuggestion[] = [{value: 'TO'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywords);
});

test('should suggest schemas', () => {
    const autocompleteResult = parseTrinoQueryWithCursor('GRANT ALL ON SCHEMA |');

    const keywords: KeywordSuggestion[] = [{value: 'TO'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywords);

    expect(autocompleteResult.suggestSchemas).toEqual(true);
});

test('should suggest databases', () => {
    const autocompleteResult = parseTrinoQueryWithCursor('GRANT ALL ON DATABASE |');

    const keywords: KeywordSuggestion[] = [{value: 'TO'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywords);

    expect(autocompleteResult.suggestDatabases).toEqual(true);
});
