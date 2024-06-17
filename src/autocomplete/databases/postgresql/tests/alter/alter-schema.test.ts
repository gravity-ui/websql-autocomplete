import {KeywordSuggestion} from '../../../../shared/autocomplete-types';
import {parsePostgreSqlQueryWithCursor, parsePostgreSqlQueryWithoutCursor} from '../../index';

test('should suggest after ALTER SCHEMA', () => {
    const autocompleteResult = parsePostgreSqlQueryWithCursor('ALTER SCHEMA |');

    const keywordSuggestion: KeywordSuggestion[] = [];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordSuggestion);

    expect(autocompleteResult.suggestSchemas).toEqual(true);
});

test('should not report errors', () => {
    const autocompleteResult = parsePostgreSqlQueryWithoutCursor(
        'ALTER SCHEMA test_schema RENAME TO test_schema_2;',
    );
    expect(autocompleteResult.errors).toHaveLength(0);
});

describe('should suggest schemas in ALTER OBJECT SCHEMA statement', () => {
    const objects = [
        'COLLATION',
        'CONVERSION',
        'DOMAIN',
        'EXTENSION',
        'FUNCTION',
        'PROCEDURE',
        'ROUTINE',
        'TABLE',
        'STATISTICS',
        'TEXT SEARCH PARSER',
        'TEXT SEARCH DICTIONARY',
        'TEXT SEARCH TEMPLATE',
        'TEXT SEARCH CONFIGURATION',
        'SEQUENCE',
        'VIEW',
        'MATERIALIZED VIEW',
        'FOREIGN TABLE',
        'TYPE',
    ];

    for (const object of objects) {
        // It's fine to run tests in a loop
        // eslint-disable-next-line @typescript-eslint/no-loop-func
        test(`should suggest schemas in ALTER ${object} SCHEMA statement`, () => {
            const autocompleteResult = parsePostgreSqlQueryWithCursor(
                `ALTER ${object} test_name SET SCHEMA |`,
            );
            expect(autocompleteResult.suggestSchemas).toEqual(true);
        });
    }
});
