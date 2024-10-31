import {parseClickHouseQueryWithCursor, parseClickHouseQueryWithoutCursor} from '../..';
import {KeywordSuggestion} from '../../../../shared';

test('should not report errors', () => {
    const autocompleteResult = parseClickHouseQueryWithoutCursor(
        'CREATE INDEX test_index ON test_table (test_column);',
    );

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on extended statement', () => {
    const autocompleteResult = parseClickHouseQueryWithoutCursor(
        `
          CREATE INDEX IF NOT EXISTS test_index
            ON test_table (
              test_column1 ASC,
              test_column2 ASCENDING,
              test_column3 DESC,
              test_column4 DESCENDING
            )
            TYPE test_type
            GRANULARITY 1;
        `,
    );

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should suggest properly after if', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('CREATE INDEX IF |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'ON'}, {value: 'NOT'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after not', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('CREATE INDEX IF NOT |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'EXISTS'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after index identifier', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor('CREATE INDEX test_index |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'ON'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after column identifier', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor(
        'CREATE INDEX test_index ON test_table (test_column |',
    );

    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: 'ASC'},
        {value: 'ASCENDING'},
        {value: 'DESC'},
        {value: 'DESCENDING'},
    ];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after columns declaration', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor(
        'CREATE INDEX test_index ON test_table (test_column DESC) |',
    );

    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: 'GRANULARITY'},
        {value: 'TYPE'},
        {value: 'FORMAT'},
        {value: 'INTO'},
    ];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after type identifier', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor(
        'CREATE INDEX test_index ON test_table (test_column DESC) TYPE test_type |',
    );

    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: 'GRANULARITY'},
        {value: 'FORMAT'},
        {value: 'INTO'},
    ];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});
