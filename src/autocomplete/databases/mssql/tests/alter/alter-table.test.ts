import {parseMsSqlQueryWithCursor, parseMsSqlQueryWithoutCursor} from '../../index.js';
import {
    ColumnSuggestion,
    ConstraintSuggestion,
    KeywordSuggestion,
    TableOrViewSuggestion,
} from '../../../../shared/autocomplete-types.js';

test('should suggest tables after ALTER TABLE', () => {
    const autocompleteResult = parseMsSqlQueryWithCursor('ALTER TABLE |');

    expect(autocompleteResult.suggestViewsOrTables).toEqual(TableOrViewSuggestion.TABLES);
});

test('should suggest tables for qualified name after ALTER TABLE', () => {
    const autocompleteResult = parseMsSqlQueryWithCursor('ALTER TABLE test_schema.|');

    expect(autocompleteResult.suggestViewsOrTables).toEqual(TableOrViewSuggestion.TABLES);
});

test('should suggest properly after table name', () => {
    const autocompleteResult = parseMsSqlQueryWithCursor('ALTER TABLE test_table |');

    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: 'SWITCH'},
        {value: 'REBUILD'},
        {value: 'DISABLE'},
        {value: 'ENABLE'},
        {value: 'CHECK'},
        {value: 'NOCHECK'},
        {value: 'WITH'},
        {value: 'DROP'},
        {value: 'ALTER'},
        {value: 'ADD'},
        {value: 'SET'},
    ];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test('should suggest properly after DROP', () => {
    const autocompleteResult = parseMsSqlQueryWithCursor('ALTER TABLE test_table DROP |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'CONSTRAINT'}, {value: 'COLUMN'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
});

test.each([
    'ALTER TABLE test_table DROP COLUMN |',
    'ALTER TABLE test_table DROP COLUMN test_column, |',
    'ALTER TABLE test_table ALTER COLUMN |',
    'ALTER TABLE test_table WITH CHECK ADD CONSTRAINT test_constraint FOREIGN KEY (|',
])('should suggest table name for column in %s', (query) => {
    const autocompleteResult = parseMsSqlQueryWithCursor(query);
    const columnSuggestions: ColumnSuggestion = {tables: [{name: 'test_table'}]};

    expect(autocompleteResult.suggestColumns).toEqual(columnSuggestions);
});

test('should suggest table name for column after previous statement without semicolon', () => {
    const autocompleteResult = parseMsSqlQueryWithCursor(
        'SELECT * FROM before_table\nALTER TABLE test_table DROP COLUMN |',
    );
    const columnSuggestions: ColumnSuggestion = {tables: [{name: 'test_table'}]};

    expect(autocompleteResult.suggestColumns).toEqual(columnSuggestions);
});

test('should not suggest columns for new column', () => {
    const autocompleteResult = parseMsSqlQueryWithCursor('ALTER TABLE test_table ADD |');

    expect(autocompleteResult.suggestColumns).toBeUndefined();
});

test.each([
    'ALTER TABLE test_table DROP CONSTRAINT |',
    'ALTER TABLE test_table NOCHECK CONSTRAINT |',
    'ALTER TABLE test_table CHECK CONSTRAINT |',
])('should suggest table name for constraint in %s', (query) => {
    const autocompleteResult = parseMsSqlQueryWithCursor(query);
    const constraintSuggestions: ConstraintSuggestion = {tables: [{name: 'test_table'}]};

    expect(autocompleteResult.suggestConstraints).toEqual(constraintSuggestions);
});

test('should not suggest constraints for new constraint', () => {
    const autocompleteResult = parseMsSqlQueryWithCursor(
        'ALTER TABLE test_table WITH CHECK ADD CONSTRAINT |',
    );

    expect(autocompleteResult.suggestConstraints).toBeUndefined();
});

test('should suggest tables after REFERENCES', () => {
    const autocompleteResult = parseMsSqlQueryWithCursor(
        'ALTER TABLE test_table ADD CONSTRAINT test_constraint FOREIGN KEY (id) REFERENCES |',
    );

    expect(autocompleteResult.suggestViewsOrTables).toEqual(TableOrViewSuggestion.TABLES);
});

test('should not report errors on full statement', () => {
    const autocompleteResult = parseMsSqlQueryWithoutCursor(
        'ALTER TABLE test_table ADD CONSTRAINT test_constraint FOREIGN KEY (id) REFERENCES test_table_2 (id);',
    );

    expect(autocompleteResult.errors).toHaveLength(0);
});
