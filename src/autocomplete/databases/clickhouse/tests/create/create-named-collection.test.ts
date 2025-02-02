import {parseClickHouseQueryWithCursor, parseClickHouseQueryWithoutCursor} from '../..';
import {KeywordSuggestion} from '../../../../shared';

test('should not report errors', () => {
    const autocompleteResult = parseClickHouseQueryWithoutCursor(
        "CREATE NAMED COLLECTION test_named_collection AS test_key = 'test_value';",
    );

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on extended statement', () => {
    const autocompleteResult = parseClickHouseQueryWithoutCursor(`
      CREATE NAMED COLLECTION test_named_collection ON CLUSTER test_cluster
      AS
        test_key1 = 'test_value1',
        test_key2 = 'test_value2' OVERRIDABLE,
        test_key3 = 'test_value3' NOT OVERRIDABLE,
        test_key4 = 1 NOT OVERRIDABLE;
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should suggest properly after NAMED', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('CREATE NAMED |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'COLLECTION'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after COLLECTION', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('CREATE NAMED COLLECTION |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'IF'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after IF', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('CREATE NAMED COLLECTION IF |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'AS'}, {value: 'ON'}, {value: 'NOT'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after NOT', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('CREATE NAMED COLLECTION IF NOT |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'EXISTS'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after ON', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor(
        'CREATE NAMED COLLECTION test_named_collection ON |',
    );

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'CLUSTER'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after set expression', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor(
        "CREATE NAMED COLLECTION test_named_collection AS test_key = 'test_value' |",
    );

    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: 'OVERRIDABLE'},
        {value: 'NOT'},
        {value: 'FORMAT'},
        {value: 'INTO'},
    ];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after set expression', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor(
        "CREATE NAMED COLLECTION test_named_collection AS test_key = 'test_value' NOT |",
    );

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'OVERRIDABLE'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});
