import {ColumnSuggestion, parseMySqlQueryWithoutCursor} from '../../..';
import {parseMySqlQueryWithCursor} from '../../lib';

test('should suggest table name after MODIFY COLUMN', () => {
    const parseResult = parseMySqlQueryWithCursor('ALTER TABLE test_table MODIFY COLUMN |');
    const columnSuggestion: ColumnSuggestion = {tables: [{name: 'test_table'}]};

    expect(parseResult.suggestColumns).toEqual(columnSuggestion);
});

test('should suggest table name after MODIFY COLUMN between statements', () => {
    const parseResult = parseMySqlQueryWithCursor(
        'ALTER TABLE before_table DROP COLUMN id; ALTER TABLE test_table MODIFY COLUMN | ; ALTER TABLE after_table DROP COLUMN id;',
    );
    const columnSuggestion: ColumnSuggestion = {tables: [{name: 'test_table'}]};

    expect(parseResult.suggestColumns).toEqual(columnSuggestion);
});

test('should not report errors', () => {
    const parseResult = parseMySqlQueryWithoutCursor(
        'ALTER TABLE test_table MODIFY COLUMN id INT;',
    );

    expect(parseResult.errors).toHaveLength(0);
});