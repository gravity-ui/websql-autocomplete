import {ColumnSuggestion} from '../../..';
import {parsePostgreSqlQueryWithCursor} from '../../shared/lib';

// This doesn't work for now because SymbolTableVisitor doesn't visit qualified_name to get the view name
test.skip('should suggest view name after RENAME COLUMN', () => {
    const parseResult = parsePostgreSqlQueryWithCursor('ALTER VIEW test_view RENAME COLUMN |');
    const columnSuggestion: ColumnSuggestion = {tables: [{name: 'test_view'}]};

    expect(parseResult.suggestColumns).toEqual(columnSuggestion);
});
