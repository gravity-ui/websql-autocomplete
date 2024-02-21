import {
    ColumnSuggestion,
    KeywordSuggestion,
    parsePostgreSqlQueryWithoutCursor,
} from '../../../../index';
import {parsePostgreSqlQueryWithCursor} from '../../../lib';

test('should suggest view name after RENAME COLUMN', () => {
    const autocompleteResult = parsePostgreSqlQueryWithCursor(
        'ALTER VIEW test_view RENAME COLUMN |',
    );
    const columnSuggestion: ColumnSuggestion = {tables: [{name: 'test_view'}]};

    expect(autocompleteResult.suggestColumns).toEqual(columnSuggestion);
});

test('should suggest view name after RENAME COLUMN between statements', () => {
    const autocompleteResult = parsePostgreSqlQueryWithCursor(
        'ALTER TABLE before_table DROP COLUMN id; ALTER VIEW test_view RENAME COLUMN | ; ALTER TABLE after_table DROP COLUMN id;',
    );
    const columnSuggestion: ColumnSuggestion = {tables: [{name: 'test_view'}]};

    expect(autocompleteResult.suggestColumns).toEqual(columnSuggestion);
});

test('should suggest table name after RENAME COLUMN', () => {
    const autocompleteResult = parsePostgreSqlQueryWithCursor(
        'ALTER TABLE test_table RENAME COLUMN |',
    );
    const columnSuggestion: ColumnSuggestion = {tables: [{name: 'test_table'}]};

    expect(autocompleteResult.suggestColumns).toEqual(columnSuggestion);
});

test('should suggest table name after RENAME COLUMN between statements', () => {
    const autocompleteResult = parsePostgreSqlQueryWithCursor(
        'ALTER TABLE before_table DROP COLUMN id; ALTER TABLE test_table RENAME COLUMN | ; ALTER TABLE after_table DROP COLUMN id;',
    );
    const columnSuggestion: ColumnSuggestion = {tables: [{name: 'test_table'}]};

    expect(autocompleteResult.suggestColumns).toEqual(columnSuggestion);
});

test('should suggest TO after column name', () => {
    const autocompleteResult = parsePostgreSqlQueryWithCursor(
        'ALTER TABLE test_table RENAME COLUMN id |',
    );
    const toSuggestion: KeywordSuggestion = {value: 'TO'};

    expect(autocompleteResult.suggestKeywords).toContainEqual(toSuggestion);
});

test('should not report errors', () => {
    const autocompleteResult = parsePostgreSqlQueryWithoutCursor(
        'ALTER TABLE test_table RENAME COLUMN id TO name;',
    );

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors', () => {
    const autocompleteResult = parsePostgreSqlQueryWithoutCursor(
        'ALTER VIEW test_view RENAME COLUMN id TO name;',
    );

    expect(autocompleteResult.errors).toHaveLength(0);
});
