import {
    ColumnSuggestion,
    KeywordSuggestion,
    parseClickHouseQueryWithoutCursor,
} from '../../../../index';
import {parseClickHouseQueryWithCursor} from '../../../test-lib';

test('should suggest table name after RENAME COLUMN', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor(
        'ALTER TABLE test_table RENAME COLUMN |',
    );
    const columnSuggestion: ColumnSuggestion = {tables: [{name: 'test_table'}]};

    expect(autocompleteResult.suggestColumns).toEqual(columnSuggestion);
});

test('should suggest table name after RENAME COLUMN between statements', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor(
        'ALTER TABLE before_table DROP COLUMN id; ALTER TABLE test_table RENAME COLUMN | ; ALTER TABLE after_table DROP COLUMN id;',
    );
    const columnSuggestion: ColumnSuggestion = {tables: [{name: 'test_table'}]};

    expect(autocompleteResult.suggestColumns).toEqual(columnSuggestion);
});

test('should suggest TO after column name', () => {
    const autocompleteResult = parseClickHouseQueryWithCursor(
        'ALTER TABLE test_table RENAME COLUMN id |',
    );
    const toSuggestion: KeywordSuggestion = {value: 'TO'};

    expect(autocompleteResult.suggestKeywords).toContainEqual(toSuggestion);
});

test('should not report errors', () => {
    const autocompleteResult = parseClickHouseQueryWithoutCursor(
        'ALTER TABLE test_table RENAME COLUMN id TO name;',
    );

    expect(autocompleteResult.errors).toHaveLength(0);
});
