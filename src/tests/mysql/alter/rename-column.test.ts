import {ColumnSuggestion, KeywordSuggestion, parseMySqlQueryWithoutCursor} from '../../..';
import {parseMySqlQueryWithCursor} from '../../lib';

test('should suggest table name after RENAME COLUMN', () => {
    const parseResult = parseMySqlQueryWithCursor('ALTER TABLE test_table RENAME COLUMN |');
    const columnSuggestion: ColumnSuggestion = {tables: [{name: 'test_table'}]};

    expect(parseResult.suggestColumns).toEqual(columnSuggestion);
});

test('should suggest table name after RENAME COLUMN between statements', () => {
    const parseResult = parseMySqlQueryWithCursor(
        'ALTER TABLE before_table DROP COLUMN id; ALTER TABLE test_table RENAME COLUMN | ; ALTER TABLE after_table DROP COLUMN id;',
    );
    const columnSuggestion: ColumnSuggestion = {tables: [{name: 'test_table'}]};

    expect(parseResult.suggestColumns).toEqual(columnSuggestion);
});

test('should suggest TO after column name', () => {
    const parseResult = parseMySqlQueryWithCursor('ALTER TABLE test_table RENAME COLUMN id |');
    const toSuggestion: KeywordSuggestion = {value: 'TO'};

    expect(parseResult.suggestKeywords).toContainEqual(toSuggestion);
});

test('should not report errors', () => {
    const parseResult = parseMySqlQueryWithoutCursor(
        'ALTER TABLE test_table RENAME COLUMN id TO name;',
    );

    expect(parseResult.errors).toHaveLength(0);
});
