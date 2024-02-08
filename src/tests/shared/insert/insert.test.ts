import {ColumnSuggestion, KeywordSuggestion, TableOrViewSuggestion} from '../../..';
import {DatabaseType, groupParseSqlWithCursor, groupParseSqlWithoutCursor} from '../lib';

test('should suggest INSERT', () => {
    const parseResults = groupParseSqlWithCursor('|');
    const insertKeyword: KeywordSuggestion = {value: 'INSERT'};

    parseResults.forEach(({suggestKeywords}) => {
        expect(suggestKeywords).toContainEqual(insertKeyword);
    });
});

test('should suggest INTO after INSERT', () => {
    const parseResults = groupParseSqlWithCursor('INSERT |');
    const intoKeyword: KeywordSuggestion = {value: 'INTO'};

    parseResults.forEach(({suggestKeywords}) => {
        expect(suggestKeywords).toContainEqual(intoKeyword);
    });
});

test('should suggest tables after INSERT INTO', () => {
    const parseResults = groupParseSqlWithCursor('INSERT INTO |');

    parseResults.forEach(({suggestViewsOrTables}) => {
        expect(suggestViewsOrTables).toEqual(TableOrViewSuggestion.ALL);
    });
});

test('should suggest tables after INSERT INTO between statements', () => {
    const parseResults = groupParseSqlWithCursor(
        'ALTER TABLE before_table DROP COLUMN id; INSERT INTO | ; ALTER TABLE after_table DROP COLUMN id;',
    );

    parseResults.forEach(({suggestViewsOrTables}) => {
        expect(suggestViewsOrTables).toEqual(TableOrViewSuggestion.ALL);
    });
});

test('should suggest table name for column', () => {
    const parseResults = groupParseSqlWithCursor('INSERT INTO test_table(|', [
        // TODO ClickHouse throw error on insert statement for some reason
        DatabaseType.MySql,
        DatabaseType.PostgreSql,
    ]);
    const columnSuggestion: ColumnSuggestion = {tables: [{name: 'test_table'}]};

    parseResults.forEach(({suggestColumns}) => {
        expect(suggestColumns).toEqual(columnSuggestion);
    });
});

test('should suggest table name for column between statements', () => {
    const parseResults = groupParseSqlWithCursor(
        'ALTER TABLE before_table DROP COLUMN id; INSERT INTO test_table(| ; ALTER TABLE after_table DROP COLUMN id',
        [
            // TODO ClickHouse throw error on insert statement for some reason
            DatabaseType.MySql,
            DatabaseType.PostgreSql,
        ],
    );
    const columnSuggestion: ColumnSuggestion = {tables: [{name: 'test_table'}]};

    parseResults.forEach(({suggestColumns}) => {
        expect(suggestColumns).toEqual(columnSuggestion);
    });
});

test('should suggest VALUES', () => {
    const parseResults = groupParseSqlWithCursor('INSERT INTO test_table(id) |');
    const valuesKeyword: KeywordSuggestion = {value: 'VALUES'};

    parseResults.forEach(({suggestKeywords}) => {
        expect(suggestKeywords).toContainEqual(valuesKeyword);
    });
});

test('should not report errors', () => {
    const parseResults = groupParseSqlWithoutCursor('INSERT INTO test_table(id) VALUES(1);', [
        // TODO ClickHouse throw error on insert statement for some reason
        DatabaseType.MySql,
        DatabaseType.PostgreSql,
    ]);

    parseResults.forEach(({errors}) => {
        expect(errors).toHaveLength(0);
    });
});
