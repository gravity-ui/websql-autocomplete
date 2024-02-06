import {KeywordSuggestion, TableOrViewSuggestion} from '../../..';
import {groupParseSqlWithCursor, groupParseSqlWithoutCursor} from '../lib';

test('should suggest DROP', () => {
    const parseResults = groupParseSqlWithCursor('|');
    const selectKeyword: KeywordSuggestion = {value: 'DROP'};

    parseResults.forEach(({suggestKeywords}) => {
        expect(suggestKeywords).toContainEqual(selectKeyword);
    });
});

test('should suggest DROP midway', () => {
    const parseResults = groupParseSqlWithCursor('DR|');
    const selectKeyword: KeywordSuggestion = {value: 'DROP'};

    parseResults.forEach(({suggestKeywords}) => {
        expect(suggestKeywords).toContainEqual(selectKeyword);
    });
});

test('should suggest tables after DROP TABLE', () => {
    const parseResults = groupParseSqlWithCursor('DROP TABLE |');

    parseResults.forEach(({suggestViewsOrTables}) => {
        expect(suggestViewsOrTables).toEqual(TableOrViewSuggestion.TABLES);
    });
});

test('should suggest views after DROP VIEW', () => {
    const parseResults = groupParseSqlWithCursor('DROP VIEW |');

    parseResults.forEach(({suggestViewsOrTables}) => {
        expect(suggestViewsOrTables).toEqual(TableOrViewSuggestion.VIEWS);
    });
});

test('should suggest tables after multiple drop statements', () => {
    const parseResults = groupParseSqlWithCursor('DROP VIEW test_view; DROP TABLE |');

    parseResults.forEach(({suggestViewsOrTables}) => {
        expect(suggestViewsOrTables).toEqual(TableOrViewSuggestion.TABLES);
    });
});

test('should suggest views after multiple drop statements', () => {
    const parseResults = groupParseSqlWithCursor('DROP TABLE test_table; DROP VIEW |');

    parseResults.forEach(({suggestViewsOrTables}) => {
        expect(suggestViewsOrTables).toEqual(TableOrViewSuggestion.VIEWS);
    });
});

test('should not report error on DROP TABLE', () => {
    const parseResults = groupParseSqlWithoutCursor('DROP TABLE test_table;');

    parseResults.forEach(({errors}) => {
        expect(errors).toHaveLength(0);
    });
});

test('should not report error on DROP VIEW', () => {
    const parseResults = groupParseSqlWithoutCursor('DROP VIEW test_view;');

    parseResults.forEach(({errors}) => {
        expect(errors).toHaveLength(0);
    });
});
