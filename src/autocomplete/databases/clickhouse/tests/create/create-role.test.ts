import {parseClickHouseQueryWithCursor, parseClickHouseQueryWithoutCursor} from '../../index.js';
import {KeywordSuggestion} from '../../../../shared/index.js';

test('should not report errors', () => {
    const autocompleteResult = parseClickHouseQueryWithoutCursor('CREATE ROLE test_role;');

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on extended statement', () => {
    const autocompleteResult = parseClickHouseQueryWithoutCursor(`
    CREATE ROLE IF NOT EXISTS test_role1, test_role2 ON CLUSTER test_cluster IN test_access_storage_type
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

test('should suggest properly after IF', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('CREATE ROLE IF |');

    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: 'SETTINGS'},
        {value: 'IN'},
        {value: 'ON'},
        {value: 'NOT'},
        {value: 'FORMAT'},
        {value: 'INTO'},
    ];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after NOT', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('CREATE ROLE IF NOT |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'EXISTS'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after OR', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('CREATE ROLE OR |');

    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: 'SETTINGS'},
        {value: 'IN'},
        {value: 'ON'},
        {value: 'REPLACE'},
        {value: 'FORMAT'},
        {value: 'INTO'},
    ];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after ROLE', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('CREATE ROLE |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'OR'}, {value: 'IF'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after ON', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('CREATE ROLE test_role ON |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'CLUSTER'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after SETTINGS', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('CREATE ROLE test_role SETTINGS |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'PROFILE'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after settings expression', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor(
        "CREATE ROLE test_role SETTINGS test_variable = 'test_value' |",
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
