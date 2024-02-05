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

test('should suggest FROM after newline', () => {
    const parseResults = groupParseSqlWithCursor('SELECT * |');
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
