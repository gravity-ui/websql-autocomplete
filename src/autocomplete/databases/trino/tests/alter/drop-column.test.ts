import {ColumnSuggestion} from '../../../../shared/autocomplete-types';
import {parseTrinoQueryWithCursor, parseTrinoQueryWithoutCursor} from '../../index';

test('should suggest table name after DROP COLUMN', () => {
    const autocompleteResult = parseTrinoQueryWithCursor(
        'ALTER TABLE test_table DROP COLUMN |',
    );
    const columnSuggestion: ColumnSuggestion = {tables: [{name: 'test_table'}]};

    expect(autocompleteResult.suggestColumns).toEqual(columnSuggestion);
});

test('should suggest table name after DROP COLUMN between statements', () => {
    const autocompleteResult = parseTrinoQueryWithCursor(
        'ALTER TABLE before_table DROP COLUMN id; ALTER TABLE test_table DROP COLUMN | ; ALTER TABLE after_table DROP COLUMN id;',
    );
    const columnSuggestion: ColumnSuggestion = {tables: [{name: 'test_table'}]};

    expect(autocompleteResult.suggestColumns).toEqual(columnSuggestion);
});

test('should not report errors', () => {
    const autocompleteResult = parseTrinoQueryWithoutCursor(
        'ALTER TABLE test_table DROP COLUMN id;',
    );

    expect(autocompleteResult.errors).toHaveLength(0);
});
