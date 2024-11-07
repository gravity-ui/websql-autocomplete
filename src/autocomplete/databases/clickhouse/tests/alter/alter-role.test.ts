import {parseClickHouseQueryWithCursor, parseClickHouseQueryWithoutCursor} from '../..';
import {KeywordSuggestion} from '../../../../shared';

test('should not report errors', () => {
    const autocompleteResult = parseClickHouseQueryWithoutCursor('ALTER ROLE test_role;');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on extended statement', () => {
    const autocompleteResult = parseClickHouseQueryWithoutCursor(`
    ALTER ROLE IF EXISTS test_role1, test_role2 ON CLUSTER test_cluster
      SETTINGS
          test_variable1 = 'test_value1' MIN = 'test_value_min1' MAX = 'test_value_max1' READONLY,
          test_variable2 = 'test_value2' MIN 'test_value_min2' MAX 'test_value_max2' WRITABLE,
          test_variable3 = 'test_value3' MIN 'test_value_min3' MAX 'test_value_max3' CONST,
          test_variable4 = 'test_value4' MIN 'test_value_min4' MAX 'test_value_max4' CHANGEABLE_IN_READONLY,
          PROFILE 'test_profile'
      ;
  `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should suggest properly after ROLE', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('ALTER ROLE |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'IF'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after role identifier', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('ALTER ROLE test_role |');

    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: 'SETTINGS'},
        {value: 'ON'},
        {value: 'RENAME'},
        {value: 'FORMAT'},
        {value: 'INTO'},
    ];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after ON', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('ALTER ROLE test_role ON |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'CLUSTER'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after RENAME', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('ALTER ROLE test_role RENAME |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'TO'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after SETTINGS', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('ALTER ROLE test_role SETTINGS |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'PROFILE'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after settings expression', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor(
        "ALTER ROLE test_role SETTINGS test_variable = 'test_value' |",
    );

    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: 'READONLY'},
        {value: 'WRITABLE'},
        {value: 'CONST'},
        {value: 'CHANGEABLE_IN_READONLY'},
        {value: 'MAX'},
        {value: 'MIN'},
        {value: 'FORMAT'},
        {value: 'INTO'},
    ];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});
