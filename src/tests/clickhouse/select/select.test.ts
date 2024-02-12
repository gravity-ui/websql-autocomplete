import {TableOrViewSuggestion} from '../../../types';
import {parseClickHouseQueryWithCursor} from '../../shared/lib';

test('should suggest tables with inline comment', () => {
    const parseResult = parseClickHouseQueryWithCursor(
        'SELECT * FROM | --SELECT * FROM test_table',
    );

    expect(parseResult.suggestViewsOrTables).toEqual(TableOrViewSuggestion.ALL);
});

test('should suggest tables with multiline comment', () => {
    const parseResult = parseClickHouseQueryWithCursor(
        'SELECT * FROM | /*SELECT * FROM test_table*/',
    );

    expect(parseResult.suggestViewsOrTables).toEqual(TableOrViewSuggestion.ALL);
});
