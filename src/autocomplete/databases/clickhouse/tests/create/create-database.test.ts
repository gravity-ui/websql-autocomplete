import {KeywordSuggestion} from '../../../../shared/autocomplete-types';
import {parseClickHouseQueryWithCursor, parseClickHouseQueryWithoutCursor} from '../../index';

test('should suggest properly after DATABASE', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('CREATE DATABASE |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'IF'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after database name', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('CREATE DATABASE test_database |');

    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: 'COMMENT'},
        {value: 'ENGINE'},
        {value: 'ON'},
        {value: 'FORMAT'},
        {value: 'INTO'},
    ];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after ENGINE', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor(
        'CREATE DATABASE test_database ENGINE |',
    );

    const keywordsSuggestion: KeywordSuggestion[] = [];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should not throw error on statement without engine', () => {
    const autocompleteResult = parseClickHouseQueryWithoutCursor('CREATE DATABASE test_database;');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not throw error on statement with engine', () => {
    const autocompleteResult = parseClickHouseQueryWithoutCursor(
        'CREATE DATABASE test_database ENGINE = Memory;',
    );

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should suggest after engine declaration', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor(
        'CREATE DATABASE test_database ENGINE = Memory |',
    );

    expect(autocompleteResult.suggestKeywords).toEqual([
        {value: 'COMMENT'},
        {value: 'FORMAT'},
        {value: 'INTO'},
    ]);
});

test('should not throw error on statement comment', () => {
    const autocompleteResult = parseClickHouseQueryWithoutCursor(
        "CREATE DATABASE test_database ENGINE = Memory COMMENT 'test_comment';",
    );

    expect(autocompleteResult.errors).toHaveLength(0);
});
