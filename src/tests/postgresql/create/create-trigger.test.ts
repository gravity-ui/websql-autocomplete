import {parsePostgreSqlQueryWithCursor} from '../../lib';
import {KeywordSuggestion} from '../../../types';

test('should suggest properly after TRIGGER', () => {
    const parseResult = parsePostgreSqlQueryWithCursor('CREATE TRIGGER |');

    const keywordsSuggestion: KeywordSuggestion[] = [];
    expect(parseResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after trigger name', () => {
    const parseResult = parsePostgreSqlQueryWithCursor('CREATE TRIGGER test_trigger |');

    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: 'BEFORE'},
        {value: 'AFTER'},
        {value: 'INSTEAD'},
    ];
    expect(parseResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after AFTER', () => {
    const parseResult = parsePostgreSqlQueryWithCursor('CREATE TRIGGER test_trigger AFTER |');

    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: 'INSERT'},
        {value: 'DELETE'},
        {value: 'UPDATE'},
        {value: 'TRUNCATE'},
    ];
    expect(parseResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after UPDATE', () => {
    const parseResult = parsePostgreSqlQueryWithCursor(
        'CREATE TRIGGER test_trigger AFTER UPDATE |',
    );

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'OF'}, {value: 'OR'}, {value: 'ON'}];
    expect(parseResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after ON', () => {
    const parseResult = parsePostgreSqlQueryWithCursor(
        'CREATE TRIGGER test_trigger AFTER UPDATE ON |',
    );

    const keywordsSuggestion: KeywordSuggestion[] = [];
    expect(parseResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after table name', () => {
    const parseResult = parsePostgreSqlQueryWithCursor(
        'CREATE TRIGGER test_trigger AFTER UPDATE ON test_table |',
    );

    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: 'REFERENCING'},
        {value: 'FOR'},
        {value: 'WHEN'},
        {value: 'EXECUTE'},
    ];
    expect(parseResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after FOR EACH ROW', () => {
    const parseResult = parsePostgreSqlQueryWithCursor(
        'CREATE TRIGGER test_trigger AFTER UPDATE ON test_table FOR EACH ROW |',
    );

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'WHEN'}, {value: 'EXECUTE'}];
    expect(parseResult.suggestKeywords).toEqual(keywordsSuggestion);
});
