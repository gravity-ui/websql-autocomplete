import {expect, test} from '@jest/globals';

import {KeywordSuggestion, parseMySqlQuery} from '../../../../../index';

test('should suggest keywords', () => {
    const parseResult = parseMySqlQuery('bla; ', '');

    expect(parseResult.errors).not.toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [{value: 'SELECT', weight: -1}];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));
});

test('should suggest keywords', () => {
    const parseResult = parseMySqlQuery('bla bla bla;bla; ', '');

    expect(parseResult.errors).not.toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [{value: 'SELECT', weight: -1}];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));
});

test('should suggest keywords', () => {
    const parseResult = parseMySqlQuery('bla bla bla;bla;\n', ';bladiblaa blaa');

    expect(parseResult.errors).not.toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [{value: 'SELECT', weight: -1}];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));
});

test('should suggest keywords', () => {
    const parseResult = parseMySqlQuery('FROM; ', '');

    expect(parseResult.errors).not.toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [{value: 'SELECT', weight: -1}];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));
});

test('should suggest keywords', () => {
    const parseResult = parseMySqlQuery('INTO USE; ', '');

    expect(parseResult.errors).not.toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [{value: 'SELECT', weight: -1}];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));
});

test('should suggest keywords', () => {
    const parseResult = parseMySqlQuery('INTO SELECT; OR FROM FROM;', '');

    expect(parseResult.errors).not.toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [{value: 'SELECT', weight: -1}];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));
});

test('should suggest keywords', () => {
    const parseResult = parseMySqlQuery('INTO SELECT; OR FROM FROM;', ';BLAAA; AND;');

    expect(parseResult.errors).not.toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [{value: 'SELECT', weight: -1}];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));
});

test('should suggest keywords', () => {
    const parseResult = parseMySqlQuery('INTO bla bla;AND booo;', '');

    expect(parseResult.errors).not.toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [{value: 'SELECT', weight: -1}];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));
});

test('should suggest keywords', () => {
    const parseResult = parseMySqlQuery('', '; SELECT LIMIT 10');

    expect(parseResult.errors).not.toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [{value: 'SELECT', weight: -1}];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));
});

test('should suggest keywords', () => {
    const parseResult = parseMySqlQuery('', ' * FROM boo; SELECT LIMIT 10');

    expect(parseResult.errors).not.toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [{value: 'SELECT', weight: -1}];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));
});

test('should suggest keywords', () => {
    const parseResult = parseMySqlQuery('bla', ' * FROM boo; SELECT LIMIT 10');

    expect(parseResult.errors).not.toBeUndefined();

    const keywordSuggestions: KeywordSuggestion[] = [{value: 'SELECT', weight: -1}];
    expect(parseResult.suggestKeywords).toEqual(expect.arrayContaining(keywordSuggestions));
});
