import {ColumnSuggestion, KeywordSuggestion, TableOrViewSuggestion} from '../../..';
import {DatabaseType, groupParseSqlWithCursor, groupParseSqlWithoutCursor} from '../lib';

test('should suggest UPDATE', () => {
    const parseResults = groupParseSqlWithCursor('|', [
        DatabaseType.MySql,
        DatabaseType.PostgreSql,
    ]);
    const updateKeyword: KeywordSuggestion = {value: 'UPDATE'};

    parseResults.forEach(({suggestKeywords}) => {
        expect(suggestKeywords).toContainEqual(updateKeyword);
    });
});

test('should suggest tables after UPDATE', () => {
    const parseResults = groupParseSqlWithCursor('UPDATE |', [
        DatabaseType.MySql,
        DatabaseType.PostgreSql,
    ]);

    parseResults.forEach(({suggestViewsOrTables}) => {
        expect(suggestViewsOrTables).toEqual(TableOrViewSuggestion.ALL);
    });
});

test('should suggest tables after UPDATE between statements', () => {
    const parseResults = groupParseSqlWithCursor(
        'ALTER TABLE before_table DROP COLUMN id; UPDATE | ; ALTER TABLE after_table DROP COLUMN id;',
        [DatabaseType.MySql, DatabaseType.PostgreSql],
    );

    parseResults.forEach(({suggestViewsOrTables}) => {
        expect(suggestViewsOrTables).toEqual(TableOrViewSuggestion.ALL);
    });
});

test('should suggest SET after UPDATE table', () => {
    const parseResults = groupParseSqlWithCursor('UPDATE test_table |', [
        DatabaseType.MySql,
        DatabaseType.PostgreSql,
    ]);
    const setKeyword: KeywordSuggestion = {value: 'SET'};

    parseResults.forEach(({suggestKeywords}) => {
        expect(suggestKeywords).toContainEqual(setKeyword);
    });
});

test('should suggest table name for column after SET', () => {
    const parseResults = groupParseSqlWithCursor('UPDATE test_table SET |', [
        DatabaseType.MySql,
        DatabaseType.PostgreSql,
    ]);
    const columnSuggestion: ColumnSuggestion = {tables: [{name: 'test_table'}]};

    parseResults.forEach(({suggestColumns}) => {
        expect(suggestColumns).toEqual(columnSuggestion);
    });
});

test('should suggest table name for column after SET between statements', () => {
    const parseResults = groupParseSqlWithCursor(
        'ALTER TABLE before_table DROP COLUMN id; UPDATE test_table SET | ; ALTER TABLE after_table DROP COLUMN id;',
        [DatabaseType.MySql, DatabaseType.PostgreSql],
    );
    const columnSuggestion: ColumnSuggestion = {tables: [{name: 'test_table'}]};

    parseResults.forEach(({suggestColumns}) => {
        expect(suggestColumns).toEqual(columnSuggestion);
    });
});

test('should suggest table name for second column after SET', () => {
    const parseResults = groupParseSqlWithCursor('UPDATE test_table SET id = 1, |', [
        DatabaseType.MySql,
        DatabaseType.PostgreSql,
    ]);
    const columnSuggestion: ColumnSuggestion = {tables: [{name: 'test_table'}]};

    parseResults.forEach(({suggestColumns}) => {
        expect(suggestColumns).toEqual(columnSuggestion);
    });
});

test('should suggest table name for second column after SET between statements', () => {
    const parseResults = groupParseSqlWithCursor(
        'ALTER TABLE before_table DROP COLUMN id; UPDATE test_table SET id = 1, | ; ALTER TABLE after_table DROP COLUMN id;',
        [DatabaseType.MySql, DatabaseType.PostgreSql],
    );
    const columnSuggestion: ColumnSuggestion = {tables: [{name: 'test_table'}]};

    parseResults.forEach(({suggestColumns}) => {
        expect(suggestColumns).toEqual(columnSuggestion);
    });
});

test('should suggest table name for column after WHERE', () => {
    const parseResults = groupParseSqlWithCursor('UPDATE test_table SET id = 1 WHERE |', [
        DatabaseType.MySql,
        DatabaseType.PostgreSql,
    ]);
    const columnSuggestion: ColumnSuggestion = {tables: [{name: 'test_table'}]};

    parseResults.forEach(({suggestColumns}) => {
        expect(suggestColumns).toEqual(columnSuggestion);
    });
});

test('should suggest table name for column after WHERE between statements', () => {
    const parseResults = groupParseSqlWithCursor(
        'ALTER TABLE before_table DROP COLUMN id; UPDATE test_table SET id = 1 WHERE | ; ALTER TABLE after_table DROP COLUMN id;',
        [DatabaseType.MySql, DatabaseType.PostgreSql],
    );
    const columnSuggestion: ColumnSuggestion = {tables: [{name: 'test_table'}]};

    parseResults.forEach(({suggestColumns}) => {
        expect(suggestColumns).toEqual(columnSuggestion);
    });
});

test('should not report errors', () => {
    const parseResults = groupParseSqlWithoutCursor('UPDATE test_table SET id = 1 WHERE id = 1;', [
        DatabaseType.MySql,
        // TODO PostgreSQL for some reason throws error on update statement
        // DatabaseType.PostgreSql,
    ]);

    parseResults.forEach(({errors}) => {
        expect(errors).toHaveLength(0);
    });
});
