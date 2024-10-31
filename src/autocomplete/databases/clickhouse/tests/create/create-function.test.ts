import {parseClickHouseQueryWithCursor, parseClickHouseQueryWithoutCursor} from '../..';
import {KeywordSuggestion} from '../../../../shared';

test('should not report errors', () => {
    const autocompleteResult = parseClickHouseQueryWithoutCursor(
        'CREATE FUNCTION test_function AS (test_argument) -> test_argument * 1 + 1 - 1 || 1 % 1 * test_function2(1);',
    );

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on extended statement', () => {
    const autocompleteResult = parseClickHouseQueryWithoutCursor(`
    CREATE FUNCTION IF NOT EXISTS test_function
      AS (test_argument) -> test_argument * 1 + 1 - 1 || 1 % 1 * test_function2(1);  
  `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on empty function arguments', () => {
    const autocompleteResult = parseClickHouseQueryWithoutCursor(
        'CREATE FUNCTION test_function AS () -> test_argument * 1 + 1 - 1 || 1 % 1 * test_function2(1);',
    );

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on argument declaration without parenthesis', () => {
    const autocompleteResult = parseClickHouseQueryWithoutCursor(
        'CREATE FUNCTION test_function AS test_argument -> test_argument * 1 + 1 - 1 || 1 % 1 * test_function2(1);',
    );

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on function in expression with argument', () => {
    const autocompleteResult = parseClickHouseQueryWithoutCursor(
        'CREATE FUNCTION test_function AS test_argument -> test_function(test_argument);',
    );

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should suggest properly after function identifier', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('CREATE FUNCTION test_function |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'AS'}, {value: 'ON'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after if', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('CREATE FUNCTION IF |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'AS'}, {value: 'ON'}, {value: 'NOT'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after not', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('CREATE FUNCTION IF NOT |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'EXISTS'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});
