import {parseClickHouseQueryWithCursor, parseClickHouseQueryWithoutCursor} from '../..';
import {KeywordSuggestion} from '../../../../shared';

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
          PROFILE 'test_profile'
      ;
  `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should suggest properly after settings', () => {
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
