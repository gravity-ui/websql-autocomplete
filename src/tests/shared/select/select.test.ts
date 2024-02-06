import {ColumnSuggestion, KeywordSuggestion} from '../../..';
import {DatabaseType, groupParseSqlWithCursor, groupParseSqlWithoutCursor} from '../lib';

test('should suggest SELECT and contain suggestTemplates on empty query', () => {
    const parseResults = groupParseSqlWithCursor('|');
    const selectKeyword: KeywordSuggestion = {value: 'SELECT'};

    parseResults.forEach(({suggestKeywords, suggestTemplates}) => {
        expect(suggestKeywords).toContainEqual(selectKeyword);
        expect(suggestTemplates).toEqual(true);
    });
});

test('should suggest SELECT and contain suggestTemplates with EXPLAIN prefix', () => {
    const parseResults = groupParseSqlWithCursor('EXPLAIN |', [
        DatabaseType.MySql,
        DatabaseType.PostgreSql,
    ]);
    const selectKeyword: KeywordSuggestion = {value: 'SELECT'};

    parseResults.forEach(({suggestKeywords, suggestTemplates}) => {
        expect(suggestKeywords).toContainEqual(selectKeyword);
        expect(suggestTemplates).toEqual(true);
    });
});

test('should suggest ASTERISK, functions and not contain suggestTemplates with SELECT prefix', () => {
    const parseResults = groupParseSqlWithCursor('SELECT |');
    const asteriskKeyword: KeywordSuggestion = {value: '*'};

    parseResults.forEach(
        ({suggestTemplates, suggestKeywords, suggestFunctions, suggestAggregateFunctions}) => {
            expect(suggestKeywords).toContainEqual(asteriskKeyword);
            expect(suggestFunctions).toEqual(true);
            expect(suggestAggregateFunctions).toEqual(true);
            expect(suggestTemplates).toEqual(false);
        },
    );
});

test('should suggest table name for column', () => {
    const parseResults = groupParseSqlWithCursor('SELECT | FROM test_table');
    const collumnSuggestions: ColumnSuggestion = {tables: [{name: 'test_table'}]};

    parseResults.forEach(({suggestColumns}) => {
        expect(suggestColumns).toEqual(collumnSuggestions);
    });
});

test('should suggest table name for column between statements', () => {
    const parseResults = groupParseSqlWithCursor(
        'ALTER TABLE before_table DROP COLUMN id; SELECT | FROM test_table ; ALTER TABLE after_table DROP COLUMN id;',
    );
    const collumnSuggestions: ColumnSuggestion = {tables: [{name: 'test_table'}]};

    parseResults.forEach(({suggestColumns}) => {
        expect(suggestColumns).toEqual(collumnSuggestions);
    });
});

test('should suggest table name and alias for column', () => {
    const parseResults = groupParseSqlWithCursor('SELECT | FROM test_table t');
    const collumnSuggestions: ColumnSuggestion = {tables: [{name: 'test_table', alias: 't'}]};

    parseResults.forEach(({suggestColumns}) => {
        expect(suggestColumns).toEqual(collumnSuggestions);
    });
});

test('should suggest table name and alias (with AS) for column', () => {
    const parseResults = groupParseSqlWithCursor('SELECT | FROM test_table AS t');
    const collumnSuggestions: ColumnSuggestion = {tables: [{name: 'test_table', alias: 't'}]};

    parseResults.forEach(({suggestColumns}) => {
        expect(suggestColumns).toEqual(collumnSuggestions);
    });
});

test('should suggest table name and alias for second column', () => {
    const parseResults = groupParseSqlWithCursor('SELECT id, | FROM test_table AS t');
    const collumnSuggestions: ColumnSuggestion = {tables: [{name: 'test_table', alias: 't'}]};

    parseResults.forEach(({suggestColumns}) => {
        expect(suggestColumns).toEqual(collumnSuggestions);
    });
});

test('should suggest multiple table names for column', () => {
    const parseResults = groupParseSqlWithCursor('SELECT | FROM test_table_1, test_table_2');
    const collumnSuggestions: ColumnSuggestion = {
        tables: [{name: 'test_table_1'}, {name: 'test_table_2'}],
    };

    parseResults.forEach(({suggestColumns}) => {
        expect(suggestColumns).toEqual(collumnSuggestions);
    });
});

test('should suggest multiple table names for column between statements', () => {
    const parseResults = groupParseSqlWithCursor(
        'ALTER TABLE before_table DROP COLUMN id; SELECT | FROM test_table_1, test_table_2 ; ALTER TABLE after_table DROP COLUMN id;',
    );
    const collumnSuggestions: ColumnSuggestion = {
        tables: [{name: 'test_table_1'}, {name: 'test_table_2'}],
    };

    parseResults.forEach(({suggestColumns}) => {
        expect(suggestColumns).toEqual(collumnSuggestions);
    });
});

test('should suggest multiple table names and aliases for column', () => {
    const parseResults = groupParseSqlWithCursor('SELECT | FROM test_table_1 t1, test_table_2 t2');
    const collumnSuggestions: ColumnSuggestion = {
        tables: [
            {name: 'test_table_1', alias: 't1'},
            {name: 'test_table_2', alias: 't2'},
        ],
    };

    parseResults.forEach(({suggestColumns}) => {
        expect(suggestColumns).toEqual(collumnSuggestions);
    });
});

test('should suggest multiple table names and aliases (with AS) for column', () => {
    const parseResults = groupParseSqlWithCursor(
        'SELECT | FROM test_table_1 AS t1, test_table_2 AS t2',
    );
    const collumnSuggestions: ColumnSuggestion = {
        tables: [
            {name: 'test_table_1', alias: 't1'},
            {name: 'test_table_2', alias: 't2'},
        ],
    };

    parseResults.forEach(({suggestColumns}) => {
        expect(suggestColumns).toEqual(collumnSuggestions);
    });
});

test('should not suggest tables after table name', () => {
    const parseResults = groupParseSqlWithCursor('SELECT * FROM test_table |');

    parseResults.forEach(({suggestViewsOrTables}) => {
        expect(suggestViewsOrTables).toEqual(undefined);
    });
});

test('should not report errors', () => {
    const parseResults = groupParseSqlWithoutCursor('SELECT c1, c2 FROM test_table;');

    parseResults.forEach(({errors}) => {
        expect(errors).toHaveLength(0);
    });
});
