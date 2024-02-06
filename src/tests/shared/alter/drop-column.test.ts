import {groupParseSqlWithCursor, groupParseSqlWithoutCursor} from '../lib';

test('should suggest table name after DROP COLUMN', () => {
    const parseResults = groupParseSqlWithCursor('ALTER TABLE test_table DROP COLUMN |');
    const columnSuggestion = {tables: [{name: 'test_table'}]};

    parseResults.forEach(({suggestColumns}) => {
        expect(suggestColumns).toEqual(columnSuggestion);
    });
});

test('should suggest table name after DROP COLUMN between statements', () => {
    const parseResults = groupParseSqlWithCursor(
        'ALTER TABLE before_table DROP COLUMN id; ALTER TABLE test_table DROP COLUMN | ; ALTER TABLE after_table DROP COLUMN id;',
    );
    const columnSuggestion = {tables: [{name: 'test_table'}]};

    parseResults.forEach(({suggestColumns}) => {
        expect(suggestColumns).toEqual(columnSuggestion);
    });
});

test('should not report errors', () => {
    const parseResults = groupParseSqlWithoutCursor('ALTER TABLE test_table DROP COLUMN id;');

    parseResults.forEach(({errors}) => {
        expect(errors).toHaveLength(0);
    });
});
