import {ColumnSuggestion, parseMySqlQueryWithoutCursor} from '../../..';
import {parseMySqlQueryWithCursor} from '../../lib';

test('should suggest table name after DROP COLUMN', () => {
    const parseResult = parseMySqlQueryWithCursor('ALTER TABLE test_table DROP COLUMN |');
    const columnSuggestion: ColumnSuggestion = {tables: [{name: 'test_table'}]};

    expect(parseResult.suggestColumns).toEqual(columnSuggestion);
});

test('should suggest table name after DROP COLUMN between statements', () => {
    const parseResult = parseMySqlQueryWithCursor(
        'ALTER TABLE before_table DROP COLUMN id; ALTER TABLE test_table DROP COLUMN | ; ALTER TABLE after_table DROP COLUMN id;',
    );
    const columnSuggestion: ColumnSuggestion = {tables: [{name: 'test_table'}]};

    expect(parseResult.suggestColumns).toEqual(columnSuggestion);
});

test('should not report errors', () => {
    const parseResult = parseMySqlQueryWithoutCursor('ALTER TABLE test_table DROP COLUMN id;');

    expect(parseResult.errors).toHaveLength(0);
});
