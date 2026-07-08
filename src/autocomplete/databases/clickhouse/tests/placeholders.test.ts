import {CreateTokenSource} from '../../../shared/autocomplete-types';
import {PlaceholderInfo, PlaceholderTokenSource} from '../../../shared/placeholder-token-source';
import {ClickHouseLexer} from '../generated/ClickHouseLexer';
import {
    ClickHouseParseOptions,
    getClickHouseParserExpectedTokens,
    parseClickHouseQueryWithCursor,
    parseClickHouseQueryWithoutCursor,
} from '../index';

// `{{ ... }}` placeholders masquerade as a value token, choosing per position:
// a string literal where one is expected, a decimal literal in numeric-only spots
// (e.g. TOP). The token source asks `getClickHouseParserExpectedTokens` at each `{{`
// to pick a valid masquerade type; string comes first, so it is preferred when both fit.
const MASQUERADE_FILLERS = [
    {tokenType: ClickHouseLexer.STRING_LITERAL, filler: "'x'"},
    {tokenType: ClickHouseLexer.DECIMAL_LITERAL, filler: '1'},
];

const createTokenSource: CreateTokenSource = (lexer) =>
    new PlaceholderTokenSource(lexer, MASQUERADE_FILLERS, getClickHouseParserExpectedTokens);

const OPTIONS: ClickHouseParseOptions = {createTokenSource};

// Parses `query` and hands back the placeholders the token source actually
// substituted (only the valid ones — a `{{ ... }}` in a position where no masquerade
// fits is left raw and never recorded), in document order, alongside parse errors.
function parseAndExtractPlaceholders(query: string): {
    errors: ReturnType<typeof parseClickHouseQueryWithoutCursor>['errors'];
    placeholders: PlaceholderInfo[];
} {
    let tokenSource: PlaceholderTokenSource | undefined;
    const {errors} = parseClickHouseQueryWithoutCursor(query, {
        createTokenSource: (lexer) => {
            tokenSource = new PlaceholderTokenSource(
                lexer,
                MASQUERADE_FILLERS,
                getClickHouseParserExpectedTokens,
            );
            return tokenSource;
        },
    });

    return {errors, placeholders: Array.from(tokenSource?.placeholders.values() ?? [])};
}

describe('clickhouse template placeholders {{ ... }}', () => {
    describe('valid positions parse without errors', () => {
        test('value position after `=`', () => {
            const {errors} = parseClickHouseQueryWithoutCursor(
                'SELECT * FROM users WHERE id = {{user_id}}',
                OPTIONS,
            );

            expect(errors).toHaveLength(0);
        });

        test('several placeholders in one query', () => {
            const {errors} = parseClickHouseQueryWithoutCursor(
                'SELECT * FROM users WHERE id = {{user_id}} AND status = {{status}}',
                OPTIONS,
            );

            expect(errors).toHaveLength(0);
        });

        test('a numeric-position placeholder precedes another placeholder', () => {
            // `{{n}}` sits in a numeric-only position (TOP), so when the second
            // placeholder is resolved the first must be masked as the integer it became —
            // not a string, which TOP rejects and which would break recovery and leave
            // `{{user_id}}` unsubstituted.
            const {errors} = parseClickHouseQueryWithoutCursor(
                'SELECT TOP {{n}} * FROM users WHERE id = {{user_id}}',
                OPTIONS,
            );

            expect(errors).toHaveLength(0);
        });

        test('inside an IN list', () => {
            const {errors} = parseClickHouseQueryWithoutCursor(
                'SELECT * FROM users WHERE id IN ({{ids}})',
                OPTIONS,
            );

            expect(errors).toHaveLength(0);
        });

        test('placeholder inside a string literal is left untouched', () => {
            const {errors} = parseClickHouseQueryWithoutCursor(
                "SELECT * FROM users WHERE name = 'hello {{user}} world'",
                OPTIONS,
            );

            expect(errors).toHaveLength(0);
        });

        test('numeric-only position after TOP (masquerades as a number)', () => {
            // `SELECT TOP` expects a bare `DECIMAL_LITERAL` and rejects a string, so the
            // placeholder must masquerade as a number, not a string.
            const {errors} = parseClickHouseQueryWithoutCursor(
                'SELECT TOP {{count}} * FROM t',
                OPTIONS,
            );

            expect(errors).toHaveLength(0);
        });

        test('LIMIT accepts a string too, so the placeholder masquerades as a string', () => {
            // Unlike TOP, ClickHouse `LIMIT` accepts a string literal as well, so the
            // (preferred) string masquerade is valid here and parses.
            const {errors} = parseClickHouseQueryWithoutCursor(
                'SELECT * FROM t LIMIT {{count}}',
                OPTIONS,
            );

            expect(errors).toHaveLength(0);
        });

        test('multi-word content collapses into a single value token', () => {
            // Without substitution `first last` would be two dangling tokens and the
            // query would fail to parse; collapsing the placeholder into one string
            // literal keeps it valid — proof the substitution actually happens rather
            // than the (invisible) braces simply being dropped.
            const {errors} = parseClickHouseQueryWithoutCursor(
                'SELECT * FROM users WHERE name = {{first last}}',
                OPTIONS,
            );

            expect(errors).toHaveLength(0);
        });
    });

    describe('autocomplete after a placeholder', () => {
        test('suggests continuation keywords right after a placeholder', () => {
            const result = parseClickHouseQueryWithCursor(
                'SELECT * FROM users WHERE id = {{user_id}} |',
                OPTIONS,
            );

            expect(result.errors).toHaveLength(0);

            const keywords = (result.suggestKeywords ?? []).map((suggestion) => suggestion.value);
            expect(keywords).toContain('AND');
            expect(keywords).toContain('OR');
            expect(keywords).toContain('ORDER');
        });

        test('suggests tables after FROM even when a placeholder precedes it', () => {
            const result = parseClickHouseQueryWithCursor('SELECT {{col}} FROM |', OPTIONS);

            expect(result.suggestViewsOrTables).toBeDefined();
        });
    });

    describe('the masquerade type is chosen to fit the position', () => {
        // The expected tokens at the placeholder position are computed from the text
        // before the `{{`, with the cursor at its end — exactly what the token source
        // consults to pick the masquerade type.
        function expectedAtPlaceholder(query: string): number[] {
            const prefix = query.slice(0, query.indexOf('{{'));
            return getClickHouseParserExpectedTokens(prefix, {line: 1, column: prefix.length + 1});
        }

        test('a value position expects a string literal', () => {
            const expected = expectedAtPlaceholder('SELECT * FROM users WHERE id = {{user_id}}');

            expect(expected).toContain(ClickHouseLexer.STRING_LITERAL);
        });

        test('the TOP position expects a decimal literal but not a string', () => {
            const expected = expectedAtPlaceholder('SELECT TOP {{count}} * FROM t');

            expect(expected).toContain(ClickHouseLexer.DECIMAL_LITERAL);
            expect(expected).not.toContain(ClickHouseLexer.STRING_LITERAL);
        });
    });

    describe('a placeholder where no value token fits is left untouched', () => {
        test('after GROUP a keyword (BY) is required, so the placeholder is not substituted', () => {
            const query = 'SELECT * FROM t GROUP {{by}}';
            const prefix = query.slice(0, query.indexOf('{{'));

            // Neither a string nor a decimal literal is valid right after GROUP, so the
            // token source finds no masquerade and leaves the raw braces in place.
            const expected = getClickHouseParserExpectedTokens(prefix, {
                line: 1,
                column: prefix.length + 1,
            });
            expect(expected).not.toContain(ClickHouseLexer.STRING_LITERAL);
            expect(expected).not.toContain(ClickHouseLexer.DECIMAL_LITERAL);

            // As a result the query no longer parses cleanly.
            const {errors} = parseClickHouseQueryWithoutCursor(query, OPTIONS);
            expect(errors.length).toBeGreaterThan(0);
        });
    });

    describe('a syntax error after a valid placeholder keeps the real position', () => {
        test('error is anchored on the offending token, not shifted by the placeholder', () => {
            // The placeholder sits in a valid value position (`id = {{test_id}}`), so it
            // must not itself raise an error. The syntax error is `zzz`, a stray token
            // dangling after `ORDER` (where `BY` is required).
            const query = 'SELECT * FROM users WHERE id = {{test_id}} ORDER zzz';
            const {errors} = parseClickHouseQueryWithoutCursor(query, OPTIONS);

            // `{{test_id}}` is 11 characters wide. If the placeholder substitution
            // shifted downstream coordinates, `zzz`'s column would no longer line up
            // with its raw offset in the original string — so this offset check is
            // exactly what proves positions stay put.
            const errorStart = query.indexOf('zzz');

            expect(errors.length).toBeGreaterThan(0);
            expect(
                errors.some(
                    (error) =>
                        error.startColumn === errorStart &&
                        error.endColumn === errorStart + 'zzz'.length,
                ),
            ).toBe(true);

            // The placeholder never leaks its STRING_LITERAL masquerade into the message.
            expect(errors.every((error) => !error.message.includes('STRING_LITERAL'))).toBe(true);
        });
    });

    describe('extracting substituted placeholders', () => {
        test('recovers the name and the exact original offsets', () => {
            const query = 'SELECT * FROM users WHERE id = {{user_id}}';
            const {errors, placeholders} = parseAndExtractPlaceholders(query);

            expect(errors).toHaveLength(0);
            expect(placeholders).toHaveLength(1);
            expect(placeholders[0]).toMatchObject({
                name: 'user_id',
                // `start`/`stop` are inclusive offsets of the first `{` and last `}`
                // in the *original* text, so they point straight back at the source.
                start: query.indexOf('{{'),
                stop: query.indexOf('}}') + 1,
                masqueradeTokenType: ClickHouseLexer.STRING_LITERAL,
            });
        });

        test('trims whitespace around the name', () => {
            const {placeholders} = parseAndExtractPlaceholders(
                'SELECT * FROM users WHERE id = {{  user_id  }}',
            );

            expect(placeholders.map((placeholder) => placeholder.name)).toEqual(['user_id']);
        });

        test('extracts several placeholders in document order', () => {
            const {placeholders} = parseAndExtractPlaceholders(
                'SELECT * FROM users WHERE id = {{first}} AND status = {{second}}',
            );

            expect(placeholders.map((placeholder) => placeholder.name)).toEqual([
                'first',
                'second',
            ]);
        });

        test('records the masquerade type chosen per position', () => {
            const {placeholders} = parseAndExtractPlaceholders(
                'SELECT TOP {{count}} * FROM t WHERE a = {{value}}',
            );

            // The TOP position is numeric-only (a decimal), the value position a string.
            expect(placeholders.map((placeholder) => placeholder.masqueradeTokenType)).toEqual([
                ClickHouseLexer.DECIMAL_LITERAL,
                ClickHouseLexer.STRING_LITERAL,
            ]);
        });

        test('a placeholder inside a string literal is not extracted', () => {
            const {errors, placeholders} = parseAndExtractPlaceholders(
                "SELECT * FROM users WHERE name = 'hello {{user}} world'",
            );

            expect(errors).toHaveLength(0);
            expect(placeholders).toHaveLength(0);
        });

        test('a placeholder in an invalid position is left raw and not extracted', () => {
            const {errors, placeholders} = parseAndExtractPlaceholders(
                'SELECT * FROM t GROUP {{by}}',
            );

            // Only substituted (valid) placeholders are recorded; the raw one surfaces
            // as a parse error instead.
            expect(placeholders).toHaveLength(0);
            expect(errors.length).toBeGreaterThan(0);
        });
    });
});
