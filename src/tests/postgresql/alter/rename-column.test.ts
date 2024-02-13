import {ColumnSuggestion, KeywordSuggestion, parsePostgreSqlQueryWithoutCursor} from '../../..';
import {parsePostgreSqlQueryWithCursor} from '../../lib';

// This doesn't work for now because SymbolTableVisitor doesn't visit qualified_name to get the view name
test.skip('should suggest view name after RENAME COLUMN', () => {
    const parseResult = parsePostgreSqlQueryWithCursor('ALTER VIEW test_view RENAME COLUMN |');
    const columnSuggestion: ColumnSuggestion = {tables: [{name: 'test_view'}]};

    expect(parseResult.suggestColumns).toEqual(columnSuggestion);
});

test('should suggest table name after RENAME COLUMN', () => {
    const parseResult = parsePostgreSqlQueryWithCursor('ALTER TABLE test_table RENAME COLUMN |');
    const columnSuggestion: ColumnSuggestion = {tables: [{name: 'test_table'}]};

    expect(parseResult.suggestColumns).toEqual(columnSuggestion);
});

test('should suggest table name after RENAME COLUMN between statements', () => {
    const parseResult = parsePostgreSqlQueryWithCursor(
        'ALTER TABLE before_table DROP COLUMN id; ALTER TABLE test_table RENAME COLUMN | ; ALTER TABLE after_table DROP COLUMN id;',
    );
    const columnSuggestion: ColumnSuggestion = {tables: [{name: 'test_table'}]};

    expect(parseResult.suggestColumns).toEqual(columnSuggestion);
});

test('should suggest TO after column name', () => {
    const parseResult = parsePostgreSqlQueryWithCursor('ALTER TABLE test_table RENAME COLUMN id |');
    const toSuggestion: KeywordSuggestion = {value: 'TO'};

    expect(parseResult.suggestKeywords).toContainEqual(toSuggestion);
});

test('should not report errors', () => {
    const parseResult = parsePostgreSqlQueryWithoutCursor(
        'ALTER TABLE test_table RENAME COLUMN id TO name;',
    );

    expect(parseResult.errors).toHaveLength(0);
});
