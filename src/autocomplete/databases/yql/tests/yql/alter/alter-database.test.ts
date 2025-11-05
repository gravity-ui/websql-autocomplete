import {KeywordSuggestion} from '../../../../../shared/autocomplete-types';
import {parseYqlQueryWithCursor} from '../../../index';

test('should suggest keywords after ALTER', () => {
    const autocompleteResult = parseYqlQueryWithCursor('ALTER |');

    expect(autocompleteResult.suggestKeywords).toContainEqual({value: 'DATABASE'});
});

test('should suggest keywords after ALTER DATABASE', () => {
    const autocompleteResult = parseYqlQueryWithCursor('ALTER DATABASE test_db |');
    const keywords: KeywordSuggestion[] = [{value: 'OWNER'}, {value: 'SET'}];

    expect(autocompleteResult.suggestKeywords).toEqual(keywords);
});

test('should suggest keywords after ALTER DATABASE OWNER', () => {
    const autocompleteResult = parseYqlQueryWithCursor('ALTER DATABASE test_db OWNER |');
    const keywords: KeywordSuggestion[] = [{value: 'TO'}];

    expect(autocompleteResult.suggestKeywords).toEqual(keywords);
});

test('should suggest keywords after ALTER DATABASE SET', () => {
    const autocompleteResult = parseYqlQueryWithCursor('ALTER DATABASE test_db SET |');

    expect(autocompleteResult.suggestKeywords).toEqual([]);
});
