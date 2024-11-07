import {parseClickHouseQueryWithCursor, parseClickHouseQueryWithoutCursor} from '../..';
import {KeywordSuggestion} from '../../../../shared';

test('should not report errors', () => {
    const autocompleteResult = parseClickHouseQueryWithoutCursor(
        'ALTER SETTINGS PROFILE test_settings_profile;',
    );

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on extended statement', () => {
    const autocompleteResult = parseClickHouseQueryWithoutCursor(`
      ALTER SETTINGS PROFILE test_settings_profile1, test_settings_profile2 ON CLUSTER test_cluster
        SETTINGS
          test_variable1 = 'test_value1' MIN = 'test_value_min1' MAX = 'test_value_max1' READONLY,
          test_variable2 = 'test_value2' MIN 'test_value_min2' MAX 'test_value_max2' WRITABLE,
          INHERIT 'test_profile'
        TO test_role1, test_user1, ALL, ALL EXCEPT test_role2, test_user2, CURRENT_USER;

      ALTER SETTINGS PROFILE test_settings_profile1 RENAME TO test_settings_profile2 ON CLUSTER test_cluster
        SETTINGS
            test_variable1 = 'test_value1' MIN = 'test_value_min1' MAX = 'test_value_max1' READONLY,
            test_variable2 = 'test_value2' MIN 'test_value_min2' MAX 'test_value_max2' WRITABLE,
            test_variable3 = 'test_value3' MIN 'test_value_min3' MAX 'test_value_max3' CONST,
            test_variable4 = 'test_value4' MIN 'test_value_min4' MAX 'test_value_max4' CHANGEABLE_IN_READONLY,
            PROFILE 'test_profile'
        TO test_role1, test_user1, ALL, ALL EXCEPT test_role2, test_user2, CURRENT_USER;
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should suggest properly after SETTINGS', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('ALTER SETTINGS |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'PROFILE'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after PROFILE', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('ALTER SETTINGS PROFILE |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'IF'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after settings profile identifier', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor(
        'ALTER SETTINGS PROFILE test_settings_profile |',
    );

    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: 'TO'},
        {value: 'SETTINGS'},
        {value: 'ON'},
        {value: 'RENAME'},
        {value: 'FORMAT'},
        {value: 'INTO'},
    ];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after IF', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('ALTER SETTINGS PROFILE IF |');

    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: 'TO'},
        {value: 'SETTINGS'},
        {value: 'ON'},
        {value: 'RENAME'},
        {value: 'EXISTS'},
        {value: 'FORMAT'},
        {value: 'INTO'},
    ];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after settings profile identifier', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor(
        'ALTER SETTINGS PROFILE test_settings_profile |',
    );

    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: 'TO'},
        {value: 'SETTINGS'},
        {value: 'ON'},
        {value: 'RENAME'},
        {value: 'FORMAT'},
        {value: 'INTO'},
    ];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after ON', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor(
        'ALTER SETTINGS PROFILE test_settings_profile ON |',
    );

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'CLUSTER'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after SETTINGS', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor(
        'ALTER SETTINGS PROFILE test_settings_profile SETTINGS |',
    );

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'PROFILE'}, {value: 'INHERIT'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after settings expression', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor(
        "ALTER SETTINGS PROFILE test_settings_profile SETTINGS test_variable = 'test_value' |",
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
