import {ColumnSuggestion, KeywordSuggestion} from '../../..';
import {DatabaseType, groupParseSqlWithCursor, groupParseSqlWithoutCursor} from '../lib';

test('should suggest nested SELECT', () => {
    const parseResults = groupParseSqlWithCursor('SELECT * FROM (|');
    const selectKeyword: KeywordSuggestion = {value: 'SELECT'};

    parseResults.forEach(({suggestKeywords}) => {
        expect(suggestKeywords).toContainEqual(selectKeyword);
    });
});

test('should suggest table name for nested SELECT column', () => {
    const parseResults = groupParseSqlWithCursor('SELECT * FROM (SELECT | FROM test_table');
    const columnSuggestion: ColumnSuggestion = {tables: [{name: 'test_table'}]};

    parseResults.forEach(({suggestColumns}) => {
        expect(suggestColumns).toEqual(columnSuggestion);
    });
});

test('should suggest table name for nested SELECT column between statements', () => {
    const parseResults = groupParseSqlWithCursor(
        'ALTER TABLE before_table DROP COLUMN id; SELECT * FROM (SELECT | FROM test_table ; ALTER TABLE after_table DROP COLUMN id;',
    );
    const columnSuggestion: ColumnSuggestion = {tables: [{name: 'test_table'}]};

    parseResults.forEach(({suggestColumns}) => {
        expect(suggestColumns).toEqual(columnSuggestion);
    });
});

test('should suggest table name for nested WHERE condition', () => {
    const parseResults = groupParseSqlWithCursor('SELECT * FROM (SELECT * FROM test_table WHERE |');
    const columnSuggestion: ColumnSuggestion = {tables: [{name: 'test_table'}]};

    parseResults.forEach(({suggestColumns}) => {
        expect(suggestColumns).toEqual(columnSuggestion);
    });
});

test('should suggest table name for nested JOIN condition', () => {
    const parseResults = groupParseSqlWithCursor(
        'SELECT * FROM (SELECT * FROM test_table_1 t1 JOIN test_table_2 t2 ON |',
    );
    const columnSuggestion: ColumnSuggestion = {
        tables: [
            {name: 'test_table_1', alias: 't1'},
            {name: 'test_table_2', alias: 't2'},
        ],
    };

    parseResults.forEach(({suggestColumns}) => {
        expect(suggestColumns).toEqual(columnSuggestion);
    });
});

test('should suggest double nested SELECT', () => {
    const parseResults = groupParseSqlWithCursor('SELECT * FROM (SELECT * FROM (|');
    const selectKeyword: KeywordSuggestion = {value: 'SELECT'};

    parseResults.forEach(({suggestKeywords}) => {
        expect(suggestKeywords).toContainEqual(selectKeyword);
    });
});

test('should suggest table name for double nested SELECT column', () => {
    const parseResults = groupParseSqlWithCursor(
        'SELECT * FROM (SELECT * FROM (SELECT | FROM test_table',
    );
    const columnSuggestion: ColumnSuggestion = {tables: [{name: 'test_table'}]};

    parseResults.forEach(({suggestColumns}) => {
        expect(suggestColumns).toEqual(columnSuggestion);
    });
});

test('should suggest table name for double nested SELECT column between statements', () => {
    const parseResults = groupParseSqlWithCursor(
        'ALTER TABLE before_table DROP COLUMN id; SELECT * FROM (SELECT * FROM (SELECT | FROM test_table ; ALTER TABLE after_table DROP COLUMN id;',
    );
    const columnSuggestion: ColumnSuggestion = {tables: [{name: 'test_table'}]};

    parseResults.forEach(({suggestColumns}) => {
        expect(suggestColumns).toEqual(columnSuggestion);
    });
});

test('should suggest table name for double nested WHERE condition', () => {
    const parseResults = groupParseSqlWithCursor(
        'SELECT * FROM (SELECT * FROM (SELECT * FROM test_table WHERE |',
    );
    const columnSuggestion: ColumnSuggestion = {tables: [{name: 'test_table'}]};

    parseResults.forEach(({suggestColumns}) => {
        expect(suggestColumns).toEqual(columnSuggestion);
    });
});

test('should suggest table name for double nested JOIN condition', () => {
    const parseResults = groupParseSqlWithCursor(
        'SELECT * FROM (SELECT * FROM (SELECT * FROM test_table_1 t1 JOIN test_table_2 t2 ON |',
    );
    const columnSuggestion: ColumnSuggestion = {
        tables: [
            {name: 'test_table_1', alias: 't1'},
            {name: 'test_table_2', alias: 't2'},
        ],
    };

    parseResults.forEach(({suggestColumns}) => {
        expect(suggestColumns).toEqual(columnSuggestion);
    });
});

test('should not report errors', () => {
    const parseResults = groupParseSqlWithoutCursor('SELECT * FROM (SELECT * FROM test_table) t1;');

    parseResults.forEach(({errors}) => {
        expect(errors).toHaveLength(0);
    });
});

// TODO PostgreSQL grammar doesn't throw error here but it should
test.skip('should report errors on missing alias', () => {
    const parseResults = groupParseSqlWithoutCursor('SELECT * FROM (SELECT * FROM test_table);', [
        DatabaseType.MySql,
        DatabaseType.PostgreSql,
    ]);

    parseResults.forEach(({errors}) => {
        expect(errors).toHaveLength(1);
    });
});
