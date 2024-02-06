import {DatabaseType, groupParseSqlWithCursor, groupParseSqlWithoutCursor} from '../lib';

test('should suggest table name after ALTER COLUMN', () => {
    const parseResults = groupParseSqlWithCursor('ALTER TABLE test_table ALTER COLUMN |', [
        DatabaseType.MySql,
        DatabaseType.PostgreSql,
    ]);
    const columnSuggestion = {tables: [{name: 'test_table'}]};

    parseResults.forEach(({suggestColumns}) => {
        expect(suggestColumns).toEqual(columnSuggestion);
    });
});

test('should suggest table name after ALTER COLUMN between statements', () => {
    const parseResults = groupParseSqlWithCursor(
        'ALTER TABLE before_table DROP COLUMN id; ALTER TABLE test_table ALTER COLUMN | ; ALTER TABLE after_table DROP COLUMN id;',
        [DatabaseType.MySql, DatabaseType.PostgreSql],
    );
    const columnSuggestion = {tables: [{name: 'test_table'}]};

    parseResults.forEach(({suggestColumns}) => {
        expect(suggestColumns).toEqual(columnSuggestion);
    });
});

test('should not report errors', () => {
    const parseResults = groupParseSqlWithoutCursor(
        'ALTER TABLE test_table ALTER COLUMN id SET DEFAULT 1;',
        [DatabaseType.MySql, DatabaseType.PostgreSql],
    );

    parseResults.forEach(({errors}) => {
        expect(errors).toHaveLength(0);
    });
});
