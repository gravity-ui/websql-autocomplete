import {parseClickHouseQueryWithCursor, parseClickHouseQueryWithoutCursor} from '../..';
import {KeywordSuggestion} from '../../../../shared';

test('should not report errors', () => {
    const autocompleteResult = parseClickHouseQueryWithoutCursor(
        'CREATE SETTINGS PROFILE test_settings_profile;',
    );

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on extended statement', () => {
    const autocompleteResult = parseClickHouseQueryWithoutCursor(`
      CREATE SETTINGS PROFILE test_settings_profile1, test_settings_profile2 ON CLUSTER test_cluster
        IN test_access_storage_type
        SETTINGS
          test_variable1 = 'test_value1' MIN = 'test_value_min1' MAX = 'test_value_max1' READONLY,
          test_variable2 = 'test_value2' MIN 'test_value_min2' MAX 'test_value_max2' WRITABLE,
          PROFILE 'test_profile'
        TO test_role1, test_user1, ALL, ALL EXCEPT test_role2, test_user2, CURRENT_USER;
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should suggest properly after SETTINGS', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('CREATE SETTINGS |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'PROFILE'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after PROFILE', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('CREATE SETTINGS PROFILE |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'OR'}, {value: 'IF'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after OR', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('CREATE SETTINGS PROFILE OR |');

    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: 'TO'},
        {value: 'SETTINGS'},
        {value: 'IN'},
        {value: 'ON'},
        {value: 'REPLACE'},
        {value: 'FORMAT'},
        {value: 'INTO'},
    ];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after IF', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('CREATE SETTINGS PROFILE IF |');

    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: 'TO'},
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
    const autocompleteResult = parseClickHouseQueryWithCursor('CREATE SETTINGS PROFILE IF NOT |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'EXISTS'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after settings profile identifier', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor(
        'CREATE SETTINGS PROFILE test_settings_profile |',
    );

    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: 'TO'},
        {value: 'SETTINGS'},
        {value: 'IN'},
        {value: 'ON'},
        {value: 'FORMAT'},
        {value: 'INTO'},
    ];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after ON', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor(
        'CREATE SETTINGS PROFILE test_settings_profile ON |',
    );

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'CLUSTER'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after SETTINGS', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor(
        'CREATE SETTINGS PROFILE test_settings_profile SETTINGS |',
    );

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'PROFILE'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after settings expression', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor(
        "CREATE SETTINGS PROFILE test_settings_profile SETTINGS test_variable = 'test_value' |",
    );

    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: 'READONLY'},
        {value: 'WRITABLE'},
        {value: 'CONST'},
        {value: 'CHANGEABLE_IN_READONLY'},
        {value: 'MAX'},
        {value: 'MIN'},
        {value: 'TO'},
        {value: 'FORMAT'},
        {value: 'INTO'},
    ];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});
