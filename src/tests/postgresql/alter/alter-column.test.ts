import {ColumnSuggestion, parsePostgreSqlQueryWithoutCursor} from '../../..';
import {parsePostgreSqlQueryWithCursor} from '../../lib';

// This doesn't work for now because SymbolTableVisitor doesn't visit qualified_name to get the view name
test.skip('should suggest view name after ALTER COLUMN', () => {
    const parseResult = parsePostgreSqlQueryWithCursor('ALTER VIEW test_view ALTER COLUMN |');
    const columnSuggestion: ColumnSuggestion = {tables: [{name: 'test_view'}]};

    expect(parseResult.suggestColumns).toEqual(columnSuggestion);
});

test('should suggest table name after ALTER COLUMN', () => {
    const parseResult = parsePostgreSqlQueryWithCursor('ALTER TABLE test_table ALTER COLUMN |');
    const columnSuggestion: ColumnSuggestion = {tables: [{name: 'test_table'}]};

    expect(parseResult.suggestColumns).toEqual(columnSuggestion);
});

test('should suggest table name after ALTER COLUMN between statements', () => {
    const parseResult = parsePostgreSqlQueryWithCursor(
        'ALTER TABLE before_table DROP COLUMN id; ALTER TABLE test_table ALTER COLUMN | ; ALTER TABLE after_table DROP COLUMN id;',
    );
    const columnSuggestion: ColumnSuggestion = {tables: [{name: 'test_table'}]};

    expect(parseResult.suggestColumns).toEqual(columnSuggestion);
});

test('should not report errors', () => {
    const parseResult = parsePostgreSqlQueryWithoutCursor(
        'ALTER TABLE test_table ALTER COLUMN id SET DEFAULT 1;',
    );

    expect(parseResult.errors).toHaveLength(0);
});