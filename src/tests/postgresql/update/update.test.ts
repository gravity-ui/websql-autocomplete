import {parsePostgreSqlQueryWithCursor} from '../../shared/lib';
import {KeywordSuggestion} from '../../../types';

// TODO: check other fields, not only suggestKeywords

test('should suggest properly after UPDATE', () => {
    const parseResult = parsePostgreSqlQueryWithCursor('UPDATE |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'ONLY'}];
    expect(parseResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after table name', () => {
    const parseResult = parsePostgreSqlQueryWithCursor('UPDATE test_table |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: '*'}, {value: 'AS'}, {value: 'SET'}];
    expect(parseResult.suggestKeywords).toEqual(keywordsSuggestion);
});

// TODO SET is perceived as alias here
test.skip('should suggest properly after SET', () => {
    const parseResult = parsePostgreSqlQueryWithCursor('UPDATE test_table SET |');

    const keywordsSuggestion: KeywordSuggestion[] = [];
    expect(parseResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after column', () => {
    const parseResult = parsePostgreSqlQueryWithCursor('UPDATE test_table SET test_column |');

    const keywordsSuggestion: KeywordSuggestion[] = [];
    expect(parseResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after column equals', () => {
    const parseResult = parsePostgreSqlQueryWithCursor('UPDATE test_table SET test_column = |');

    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: 'NOT'},
        {value: 'OPERATOR'},
        {value: 'EXISTS'},
        {value: 'ARRAY'},
        {value: 'GROUPING'},
        {value: 'UNIQUE'},
        {value: 'INTERVAL'},
        {value: 'TRUE'},
        {value: 'FALSE'},
        {value: 'NULL'},
        {value: 'CASE'},
        {value: 'ROW'},
    ];
    expect(parseResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after the first column', () => {
    const parseResult = parsePostgreSqlQueryWithCursor(
        'UPDATE test_table SET test_column = "test" |',
    );

    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: 'COLLATE'},
        {value: 'AT'},
        {value: '*'},
        {value: 'OPERATOR'},
        {value: 'SIMILAR'},
        {value: 'ILIKE'},
        {value: 'LIKE'},
        {value: 'NOT'},
        {value: 'IS'},
        {value: 'ISNULL'},
        {value: 'NOTNULL'},
        {value: 'IN'},
        {value: 'BETWEEN'},
        {value: 'AND'},
        {value: 'OR'},
        {value: 'FROM'},
        {value: 'WHERE'},
        {value: 'RETURNING'},
    ];
    expect(parseResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after WHERE', () => {
    const parseResult = parsePostgreSqlQueryWithCursor(
        'UPDATE test_table SET test_column = "test" WHERE |',
    );

    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: 'NOT'},
        {value: 'OPERATOR'},
        {value: 'EXISTS'},
        {value: 'ARRAY'},
        {value: 'GROUPING'},
        {value: 'UNIQUE'},
        {value: 'INTERVAL'},
        {value: 'TRUE'},
        {value: 'FALSE'},
        {value: 'NULL'},
        {value: 'CASE'},
        {value: 'ROW'},
        {value: 'CURRENT'},
    ];
    expect(parseResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after RETURNING', () => {
    const parseResult = parsePostgreSqlQueryWithCursor(
        'UPDATE test_table SET test_column = "test" RETURNING |',
    );

    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: '*'},
        {value: 'NOT'},
        {value: 'OPERATOR'},
        {value: 'EXISTS'},
        {value: 'ARRAY'},
        {value: 'GROUPING'},
        {value: 'UNIQUE'},
        {value: 'INTERVAL'},
        {value: 'TRUE'},
        {value: 'FALSE'},
        {value: 'NULL'},
        {value: 'CASE'},
        {value: 'ROW'},
    ];
    expect(parseResult.suggestKeywords).toEqual(keywordsSuggestion);
});
