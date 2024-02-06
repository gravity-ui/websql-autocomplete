import {DatabaseType, groupParseSqlWithCursor, groupParseSqlWithoutCursor} from '../lib';

test('should suggest table name after MODIFY COLUMN', () => {
    const parseResults = groupParseSqlWithCursor('ALTER TABLE test_table MODIFY COLUMN |', [
        DatabaseType.MySql,
        DatabaseType.ClickHouse,
    ]);
    const columnSuggestion = {tables: [{name: 'test_table'}]};

    parseResults.forEach(({suggestColumns}) => {
        expect(suggestColumns).toEqual(columnSuggestion);
    });
});

test('should suggest table name after MODIFY COLUMN between statements', () => {
    const parseResults = groupParseSqlWithCursor(
        'ALTER TABLE before_table DROP COLUMN id; ALTER TABLE test_table MODIFY COLUMN | ; ALTER TABLE after_table DROP COLUMN id;',
        [DatabaseType.MySql, DatabaseType.ClickHouse],
    );
    const columnSuggestion = {tables: [{name: 'test_table'}]};

    parseResults.forEach(({suggestColumns}) => {
        expect(suggestColumns).toEqual(columnSuggestion);
    });
});

test('should not report errors', () => {
    const parseResults = groupParseSqlWithoutCursor(
        'ALTER TABLE test_table MODIFY COLUMN id INT;',
        [DatabaseType.MySql, DatabaseType.ClickHouse],
    );

    parseResults.forEach(({errors}) => {
        expect(errors).toHaveLength(0);
    });
});
