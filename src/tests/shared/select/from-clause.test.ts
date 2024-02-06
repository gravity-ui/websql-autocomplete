import {KeywordSuggestion, TableOrViewSuggestion} from '../../..';
import {groupParseSqlWithCursor} from '../lib';

test('should suggest FROM', () => {
    const parseResults = groupParseSqlWithCursor('SELECT * |');
    const fromKeyword: KeywordSuggestion = {value: 'FROM'};

    parseResults.forEach(({suggestKeywords}) => {
        expect(suggestKeywords).toContainEqual(fromKeyword);
    });
});

test('should suggest FROM midway', () => {
    const parseResults = groupParseSqlWithCursor('SELECT * FR|');
    const fromKeyword: KeywordSuggestion = {value: 'FROM'};

    parseResults.forEach(({suggestKeywords}) => {
        expect(suggestKeywords).toContainEqual(fromKeyword);
    });
});

test('should suggest ALL tables', () => {
    const parseResults = groupParseSqlWithCursor('SELECT * FROM |');

    parseResults.forEach(({suggestViewsOrTables}) => {
        expect(suggestViewsOrTables).toEqual(TableOrViewSuggestion.ALL);
    });
});

test('should suggest ALL tables between statements', () => {
    const parseResults = groupParseSqlWithCursor(
        'ALTER TABLE before_table DROP COLUMN id; SELECT * FROM | ; ALTER TABLE after_table DROP COLUMN id;',
    );

    parseResults.forEach(({suggestViewsOrTables}) => {
        expect(suggestViewsOrTables).toEqual(TableOrViewSuggestion.ALL);
    });
});
