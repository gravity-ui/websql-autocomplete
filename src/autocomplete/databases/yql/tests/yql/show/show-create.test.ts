import {KeywordSuggestion} from '../../../../../shared/autocomplete-types';
import {parseYqlQueryWithCursor} from '../../../index';

test('should suggest keywords after SHOW', () => {
    const autocompleteResult = parseYqlQueryWithCursor('SHOW |');
    const keywords: KeywordSuggestion[] = [{value: 'CREATE'}];

    expect(autocompleteResult.suggestKeywords).toEqual(keywords);
});

test('should suggest keywords after SHOW CREATE', () => {
    const autocompleteResult = parseYqlQueryWithCursor('SHOW CREATE |');
    const keywords: KeywordSuggestion[] = [{value: 'TABLE'}, {value: 'VIEW'}];

    expect(autocompleteResult.suggestKeywords).toEqual(keywords);
});

test('should suggest table after SHOW CREATE TABLE', () => {
    const autocompleteResult = parseYqlQueryWithCursor('SHOW CREATE TABLE |');

    expect(autocompleteResult.suggestEntity).toEqual(['table']);
});

test('should suggest view after SHOW CREATE VIEW', () => {
    const autocompleteResult = parseYqlQueryWithCursor('SHOW CREATE VIEW |');

    expect(autocompleteResult.suggestEntity).toEqual(['view']);
});
