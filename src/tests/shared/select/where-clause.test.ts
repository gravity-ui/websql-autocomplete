import {ColumnSuggestion, KeywordSuggestion} from '../../..';
import {groupParseSql, groupParseSqlWithCursor, groupParseSqlWithoutCursor} from '../lib';

test('should suggest WHERE', () => {
    const parseResults = groupParseSqlWithCursor('SELECT * FROM test_table |');
    const whereKeyword: KeywordSuggestion = {value: 'WHERE'};

    parseResults.forEach(({suggestKeywords}) => {
        expect(suggestKeywords).toContainEqual(whereKeyword);
    });
});

test('should suggest WHERE midway', () => {
    const parseResults = groupParseSqlWithCursor('SELECT * FROM test_table WH|');
    const whereKeyword: KeywordSuggestion = {value: 'WHERE'};

    parseResults.forEach(({suggestKeywords}) => {
        expect(suggestKeywords).toContainEqual(whereKeyword);
    });
});

test('should suggest WHERE after newline', () => {
    const parseResults = groupParseSql('SELECT * FROM test_table\n', {
        line: 2,
        column: 1,
    });
    const whereKeyword: KeywordSuggestion = {value: 'WHERE'};

    parseResults.forEach(({suggestKeywords}) => {
        expect(suggestKeywords).toContainEqual(whereKeyword);
    });
});

test('should suggest table name for column', () => {
    const parseResults = groupParseSqlWithCursor('SELECT * FROM test_table WHERE |');
    const collumnSuggestions: ColumnSuggestion = {
        tables: [{name: 'test_table'}],
    };

    parseResults.forEach(({suggestColumns}) => {
        expect(suggestColumns).toEqual(collumnSuggestions);
    });
});

test('should suggest table name and alias for column', () => {
    const parseResults = groupParseSqlWithCursor('SELECT * FROM test_table t1 WHERE |');
    const collumnSuggestions: ColumnSuggestion = {
        tables: [{name: 'test_table', alias: 't1'}],
    };

    parseResults.forEach(({suggestColumns}) => {
        expect(suggestColumns).toEqual(collumnSuggestions);
    });
});

test('should suggest table name and alias (with AS) for column', () => {
    const parseResults = groupParseSqlWithCursor('SELECT * FROM test_table AS t1 WHERE |');
    const collumnSuggestions: ColumnSuggestion = {
        tables: [{name: 'test_table', alias: 't1'}],
    };

    parseResults.forEach(({suggestColumns}) => {
        expect(suggestColumns).toEqual(collumnSuggestions);
    });
});

test('should suggest table name and alias for second column', () => {
    const parseResults = groupParseSqlWithCursor(
        'SELECT * FROM test_table AS t1 WHERE id = 2 AND |',
    );
    const collumnSuggestions: ColumnSuggestion = {tables: [{name: 'test_table', alias: 't1'}]};

    parseResults.forEach(({suggestColumns}) => {
        expect(suggestColumns).toEqual(collumnSuggestions);
    });
});

test('should suggest multiple table names for column', () => {
    const parseResults = groupParseSqlWithCursor(
        'SELECT * FROM test_table_1, test_table_2 WHERE |',
    );
    const collumnSuggestions: ColumnSuggestion = {
        tables: [{name: 'test_table_1'}, {name: 'test_table_2'}],
    };

    parseResults.forEach(({suggestColumns}) => {
        expect(suggestColumns).toEqual(collumnSuggestions);
    });
});

test('should suggest multiple table names and aliases for column', () => {
    const parseResults = groupParseSqlWithCursor(
        'SELECT * FROM test_table_1 t1, test_table_2 t2 WHERE |',
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

test('should suggest multiple table names and aliases (with AS) for column', () => {
    const parseResults = groupParseSqlWithCursor(
        'SELECT * FROM test_table_1 AS t1, test_table_2 AS t2 WHERE |',
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

test('should not report errors', () => {
    const parseResults = groupParseSqlWithoutCursor('SELECT * FROM test_table WHERE id = 1;');

    parseResults.forEach(({errors}) => {
        expect(errors).toHaveLength(0);
    });
});

test('should not report errors with multiple statements', () => {
    const parseResults = groupParseSqlWithoutCursor(
        'SELECT * FROM test_table WHERE id = 1;\nSELECT * FROM test_table WHERE id = 1;',
    );

    parseResults.forEach(({errors}) => {
        expect(errors).toHaveLength(0);
    });
});
