import {KeywordSuggestion} from '../../../types';
import {groupParseSqlWithCursor, groupParseSqlWithoutCursor} from '../lib';

test('should suggest table name after RENAME COLUMN', () => {
    const parseResults = groupParseSqlWithCursor('ALTER TABLE test_table RENAME COLUMN |');
    const columnSuggestion = {tables: [{name: 'test_table'}]};

    parseResults.forEach(({suggestColumns}) => {
        expect(suggestColumns).toEqual(columnSuggestion);
    });
});

test('should suggest table name after RENAME COLUMN between statements', () => {
    const parseResults = groupParseSqlWithCursor(
        'ALTER TABLE before_table DROP COLUMN id; ALTER TABLE test_table RENAME COLUMN | ; ALTER TABLE after_table DROP COLUMN id;',
    );
    const columnSuggestion = {tables: [{name: 'test_table'}]};

    parseResults.forEach(({suggestColumns}) => {
        expect(suggestColumns).toEqual(columnSuggestion);
    });
});

test('should suggest TO after column name', () => {
    const parseResults = groupParseSqlWithCursor('ALTER TABLE test_table RENAME COLUMN id |');
    const toSuggestion: KeywordSuggestion = {value: 'TO'};

    parseResults.forEach(({suggestKeywords}) => {
        expect(suggestKeywords).toContainEqual(toSuggestion);
    });
});

test('should not report errors', () => {
    const parseResults = groupParseSqlWithoutCursor(
        'ALTER TABLE test_table RENAME COLUMN id TO name;',
    );

    parseResults.forEach(({errors}) => {
        expect(errors).toHaveLength(0);
    });
});
