import {expect, test} from '@jest/globals';

import {KeywordSuggestion, parseGenericSql} from '../../../../../index';

test('should suggest keywords', () => {
    const parseResult = parseGenericSql('bla; ', '');

    expect(parseResult.errors).not.toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [{value: 'SELECT', weight: -1}];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));
});

test('should suggest keywords', () => {
    const parseResult = parseGenericSql('bla bla bla;bla; ', '');

    expect(parseResult.errors).not.toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [{value: 'SELECT', weight: -1}];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));
});

test('should suggest keywords', () => {
    const parseResult = parseGenericSql('bla bla bla;bla;\n', ';bladiblaa blaa');

    expect(parseResult.errors).not.toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [{value: 'SELECT', weight: -1}];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));
});

test('should suggest keywords', () => {
    const parseResult = parseGenericSql('FROM; ', '');

    expect(parseResult.errors).not.toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [{value: 'SELECT', weight: -1}];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));
});

test('should suggest keywords', () => {
    const parseResult = parseGenericSql('INTO USE; ', '');

    expect(parseResult.errors).not.toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [{value: 'SELECT', weight: -1}];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));
});

test('should suggest keywords', () => {
    const parseResult = parseGenericSql('INTO SELECT; OR FROM FROM;', '');

    expect(parseResult.errors).not.toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [{value: 'SELECT', weight: -1}];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));
});

test('should suggest keywords', () => {
    const parseResult = parseGenericSql('INTO SELECT; OR FROM FROM;', ';BLAAA; AND;');

    expect(parseResult.errors).not.toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [{value: 'SELECT', weight: -1}];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));
});

test('should suggest keywords', () => {
    const parseResult = parseGenericSql('INTO bla bla;AND booo;', '');

    expect(parseResult.errors).not.toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [{value: 'SELECT', weight: -1}];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));
});

test('should suggest keywords', () => {
    const parseResult = parseGenericSql('', '; SELECT LIMIT 10');

    expect(parseResult.errors).not.toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [{value: 'SELECT', weight: -1}];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));
});

test('should suggest keywords', () => {
    const parseResult = parseGenericSql('', ' * FROM boo; SELECT LIMIT 10');

    expect(parseResult.errors).not.toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [{value: 'SELECT', weight: -1}];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));
});

test('should suggest keywords', () => {
    const parseResult = parseGenericSql('bla', ' * FROM boo; SELECT LIMIT 10');

    expect(parseResult.errors).not.toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [{value: 'SELECT', weight: -1}];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));
});
