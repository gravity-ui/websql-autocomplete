import {KeywordSuggestion, TableOrViewSuggestion} from '../../..';
import {DatabaseType, groupParseSqlWithCursor} from '../lib';

test('should suggest ALTER', () => {
    const parseResults = groupParseSqlWithCursor('|');
    const alterKeyword: KeywordSuggestion = {value: 'ALTER'};

    parseResults.forEach(({suggestKeywords}) => {
        expect(suggestKeywords).toContainEqual(alterKeyword);
    });
});

test('should suggest tables after ALTER TABLE', () => {
    const parseResults = groupParseSqlWithCursor('ALTER TABLE |');

    parseResults.forEach(({suggestViewsOrTables}) => {
        expect(suggestViewsOrTables).toEqual(TableOrViewSuggestion.TABLES);
    });
});

test('should suggest tables after ALTER TABLE between statements', () => {
    const parseResults = groupParseSqlWithCursor(
        'DROP VIEW before_view; ALTER TABLE | ; DROP VIEW after_view;',
    );

    parseResults.forEach(({suggestViewsOrTables}) => {
        expect(suggestViewsOrTables).toEqual(TableOrViewSuggestion.TABLES);
    });
});

test('should suggest tables after ALTER VIEW', () => {
    const parseResults = groupParseSqlWithCursor('ALTER VIEW |', [
        DatabaseType.MySql,
        DatabaseType.PostgreSql,
    ]);

    parseResults.forEach(({suggestViewsOrTables}) => {
        expect(suggestViewsOrTables).toEqual(TableOrViewSuggestion.VIEWS);
    });
});

test('should suggest tables after ALTER VIEW between statements', () => {
    const parseResults = groupParseSqlWithCursor(
        'ALTER TABLE before_table DROP COLUMN id; ALTER VIEW | ; ALTER TABLE after_table DROP COLUMN id;',
        [DatabaseType.MySql, DatabaseType.PostgreSql],
    );

    parseResults.forEach(({suggestViewsOrTables}) => {
        expect(suggestViewsOrTables).toEqual(TableOrViewSuggestion.VIEWS);
    });
});
