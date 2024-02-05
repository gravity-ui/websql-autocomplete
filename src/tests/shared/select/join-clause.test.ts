import {ColumnSuggestion, KeywordSuggestion, TableOrViewSuggestion} from '../../..';
import {
    DatabaseType,
    groupParseSql,
    groupParseSqlWithCursor,
    groupParseSqlWithoutCursor,
} from '../lib';

test('should suggest JOIN', () => {
    const parseResults = groupParseSqlWithCursor('SELECT * FROM test_table |');
    const joinKeywords: KeywordSuggestion[] = [
        {value: 'JOIN'},
        {value: 'LEFT'},
        {value: 'RIGHT'},
        {value: 'INNER'},
    ];

    parseResults.forEach(({suggestKeywords}) => {
        joinKeywords.forEach((keyword) => {
            expect(suggestKeywords).toContainEqual(keyword);
        });
    });
});

test('should suggest JOIN midway', () => {
    const parseResults = groupParseSqlWithCursor('SELECT * FROM test_table JO|');
    const joinKeywords: KeywordSuggestion[] = [
        {value: 'JOIN'},
        {value: 'LEFT'},
        {value: 'RIGHT'},
        {value: 'INNER'},
    ];

    parseResults.forEach(({suggestKeywords}) => {
        joinKeywords.forEach((keyword) => {
            expect(suggestKeywords).toContainEqual(keyword);
        });
    });
});

test('should suggest JOIN after newline', () => {
    const parseResults = groupParseSql('SELECT * FROM test_table\n', {
        line: 2,
        column: 1,
    });
    const joinKeywords: KeywordSuggestion[] = [
        {value: 'JOIN'},
        {value: 'LEFT'},
        {value: 'RIGHT'},
        {value: 'INNER'},
    ];

    parseResults.forEach(({suggestKeywords}) => {
        joinKeywords.forEach((keyword) => {
            expect(suggestKeywords).toContainEqual(keyword);
        });
    });
});

test('should suggest FULL', () => {
    const parseResults = groupParseSqlWithCursor('SELECT * FROM test_table |', [
        DatabaseType.PostgreSql,
        DatabaseType.ClickHouse,
    ]);
    const fullKeyword: KeywordSuggestion = {value: 'FULL'};

    parseResults.forEach(({suggestKeywords}) => {
        expect(suggestKeywords).toContainEqual(fullKeyword);
    });
});

test('should suggest JOIN after INNER', () => {
    const parseResults = groupParseSqlWithCursor('SELECT * FROM test_table INNER |');
    const joinKeyword: KeywordSuggestion = {value: 'JOIN'};

    parseResults.forEach(({suggestKeywords}) => {
        expect(suggestKeywords).toContainEqual(joinKeyword);
    });
});

test('should suggest OUTER, JOIN after LEFT', () => {
    const parseResults = groupParseSqlWithCursor('SELECT * FROM test_table LEFT |');
    const joinKeywords: KeywordSuggestion[] = [{value: 'JOIN'}, {value: 'OUTER'}];

    parseResults.forEach(({suggestKeywords}) => {
        joinKeywords.forEach((keyword) => {
            expect(suggestKeywords).toContainEqual(keyword);
        });
    });
});

test('should suggest OUTER, JOIN after RIGHT', () => {
    const parseResults = groupParseSqlWithCursor('SELECT * FROM test_table RIGHT |');
    const joinKeywords: KeywordSuggestion[] = [{value: 'JOIN'}, {value: 'OUTER'}];

    parseResults.forEach(({suggestKeywords}) => {
        joinKeywords.forEach((keyword) => {
            expect(suggestKeywords).toContainEqual(keyword);
        });
    });
});

test('should suggest OUTER, JOIN after FULL', () => {
    const parseResults = groupParseSqlWithCursor('SELECT * FROM test_table FULL |', [
        DatabaseType.PostgreSql,
        DatabaseType.ClickHouse,
    ]);
    const joinKeywords: KeywordSuggestion[] = [{value: 'JOIN'}, {value: 'OUTER'}];

    parseResults.forEach(({suggestKeywords}) => {
        joinKeywords.forEach((keyword) => {
            expect(suggestKeywords).toContainEqual(keyword);
        });
    });
});

test('should suggest JOIN after LEFT OUTER', () => {
    const parseResults = groupParseSqlWithCursor('SELECT * FROM test_table LEFT OUTER |');
    const joinKeyword: KeywordSuggestion = {value: 'JOIN'};

    parseResults.forEach(({suggestKeywords}) => {
        expect(suggestKeywords).toContainEqual(joinKeyword);
    });
});

test('should suggest JOIN after RIGHT OUTER', () => {
    const parseResults = groupParseSqlWithCursor('SELECT * FROM test_table RIGHT OUTER |');
    const joinKeyword: KeywordSuggestion = {value: 'JOIN'};

    parseResults.forEach(({suggestKeywords}) => {
        expect(suggestKeywords).toContainEqual(joinKeyword);
    });
});

test('should suggest JOIN after FULL OUTER', () => {
    const parseResults = groupParseSqlWithCursor('SELECT * FROM test_table FULL OUTER |', [
        DatabaseType.PostgreSql,
        DatabaseType.ClickHouse,
    ]);
    const joinKeyword: KeywordSuggestion = {value: 'JOIN'};

    parseResults.forEach(({suggestKeywords}) => {
        expect(suggestKeywords).toContainEqual(joinKeyword);
    });
});

test('should suggest tables after JOIN', () => {
    const parseResults = groupParseSqlWithCursor('SELECT * FROM test_table JOIN |');

    parseResults.forEach(({suggestViewsOrTables}) => {
        expect(suggestViewsOrTables).toEqual(TableOrViewSuggestion.ALL);
    });
});

test('should suggest ON', () => {
    const parseResults = groupParseSqlWithCursor('SELECT * FROM test_table_1 JOIN test_table_2 |');
    const onKeyword: KeywordSuggestion = {value: 'ON'};

    parseResults.forEach(({suggestKeywords}) => {
        expect(suggestKeywords).toContainEqual(onKeyword);
    });
});

test('should suggest table names for ON clause', () => {
    const parseResults = groupParseSqlWithCursor(
        'SELECT * FROM test_table_1 JOIN test_table_2 ON |',
    );
    const columnSuggestion: ColumnSuggestion = {
        tables: [{name: 'test_table_1'}, {name: 'test_table_2'}],
    };

    parseResults.forEach(({suggestColumns}) => {
        expect(suggestColumns).toEqual(columnSuggestion);
    });
});

test('should suggest table names and aliases for ON clause', () => {
    const parseResults = groupParseSqlWithCursor(
        'SELECT * FROM test_table_1 t1 JOIN test_table_2 t2 ON |',
    );
    const columnSuggestion: ColumnSuggestion = {
        tables: [
            {name: 'test_table_1', alias: 't1'},
            {name: 'test_table_2', alias: 't2'},
        ],
    };

    parseResults.forEach(({suggestColumns}) => {
        expect(suggestColumns).toEqual(columnSuggestion);
    });
});

test('should suggest table names and aliases (with AS) for ON clause', () => {
    const parseResults = groupParseSqlWithCursor(
        'SELECT * FROM test_table_1 AS t1 JOIN test_table_2 AS t2 ON |',
    );
    const columnSuggestion: ColumnSuggestion = {
        tables: [
            {name: 'test_table_1', alias: 't1'},
            {name: 'test_table_2', alias: 't2'},
        ],
    };

    parseResults.forEach(({suggestColumns}) => {
        expect(suggestColumns).toEqual(columnSuggestion);
    });
});

test('should suggest table names and aliases for ON clause for second column', () => {
    const parseResults = groupParseSqlWithCursor(
        'SELECT * FROM test_table_1 AS t1 JOIN test_table_2 AS t2 ON id = |',
    );
    const columnSuggestion: ColumnSuggestion = {
        tables: [
            {name: 'test_table_1', alias: 't1'},
            {name: 'test_table_2', alias: 't2'},
        ],
    };

    parseResults.forEach(({suggestColumns}) => {
        expect(suggestColumns).toEqual(columnSuggestion);
    });
});

test('should suggest table names and aliases for ON clause for second condition', () => {
    const parseResults = groupParseSqlWithCursor(
        'SELECT * FROM test_table_1 AS t1 JOIN test_table_2 AS t2 ON id = id AND |',
    );
    const columnSuggestion: ColumnSuggestion = {
        tables: [
            {name: 'test_table_1', alias: 't1'},
            {name: 'test_table_2', alias: 't2'},
        ],
    };

    parseResults.forEach(({suggestColumns}) => {
        expect(suggestColumns).toEqual(columnSuggestion);
    });
});

test('should suggest table names and aliases for WHERE clause', () => {
    const parseResults = groupParseSqlWithCursor(
        'SELECT * FROM test_table_1 AS t1 JOIN test_table_2 AS t2 ON id = id WHERE |',
    );
    const columnSuggestion: ColumnSuggestion = {
        tables: [
            {name: 'test_table_1', alias: 't1'},
            {name: 'test_table_2', alias: 't2'},
        ],
    };

    parseResults.forEach(({suggestColumns}) => {
        expect(suggestColumns).toEqual(columnSuggestion);
    });
});

test('should not report errors', () => {
    const parseResults = groupParseSqlWithoutCursor(
        'SELECT * FROM test_table_1 AS t1 JOIN test_table_2 AS t2 ON t1.id = t2.id;',
    );

    parseResults.forEach(({errors}) => {
        expect(errors).toHaveLength(0);
    });
});

test('should not report errors with multiple statements', () => {
    const parseResults = groupParseSqlWithoutCursor(`
      SELECT * FROM test_table_1 AS t1 JOIN test_table_2 AS t2 ON t1.id = t2.id;
      SELECT * FROM test_table_1 AS t1 JOIN test_table_2 AS t2 ON t1.id = t2.id;
  `);

    parseResults.forEach(({errors}) => {
        expect(errors).toHaveLength(0);
    });
});
