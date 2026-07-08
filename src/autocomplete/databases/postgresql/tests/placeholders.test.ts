import {CreateTokenSource} from '../../../shared/autocomplete-types';
import {PlaceholderInfo, PlaceholderTokenSource} from '../../../shared/placeholder-token-source';
import {PostgreSqlLexer} from '../generated/PostgreSqlLexer';
import {
    PostgreSqlParseOptions,
    getPostgreSqlParserExpectedTokens,
    parsePostgreSqlQueryWithCursor,
    parsePostgreSqlQueryWithoutCursor,
} from '../index';

// `{{ ... }}` placeholders masquerade as a value token, choosing per position:
// a string constant where one is expected, an integer literal in numeric-only spots
// (e.g. SET STATISTICS). The token source asks `getPostgreSqlParserExpectedTokens`
// at each `{{` to pick a valid masquerade type; string is preferred when both fit.
const MASQUERADE_FILLERS = {
    [PostgreSqlLexer.StringConstant]: "'x'",
    [PostgreSqlLexer.Integral]: '1',
};

const createTokenSource: CreateTokenSource = (lexer) =>
    new PlaceholderTokenSource(lexer, MASQUERADE_FILLERS, getPostgreSqlParserExpectedTokens);

const OPTIONS: PostgreSqlParseOptions = {createTokenSource};

// Parses `query` and hands back the placeholders the token source actually
// substituted (only the valid ones — a `{{ ... }}` in a position where no masquerade
// fits is left raw and never recorded), in document order, alongside parse errors.
function parseAndExtractPlaceholders(query: string): {
    errors: ReturnType<typeof parsePostgreSqlQueryWithoutCursor>['errors'];
    placeholders: PlaceholderInfo[];
} {
    let tokenSource: PlaceholderTokenSource | undefined;
    const {errors} = parsePostgreSqlQueryWithoutCursor(query, {
        createTokenSource: (lexer) => {
            tokenSource = new PlaceholderTokenSource(
                lexer,
                MASQUERADE_FILLERS,
                getPostgreSqlParserExpectedTokens,
            );
            return tokenSource;
        },
    });

    return {errors, placeholders: Array.from(tokenSource?.placeholders.values() ?? [])};
}

describe('postgresql template placeholders {{ ... }}', () => {
    describe('valid positions parse without errors', () => {
        test('value position after `=`', () => {
            const {errors} = parsePostgreSqlQueryWithoutCursor(
                'SELECT * FROM users WHERE id = {{user_id}}',
                OPTIONS,
            );

            expect(errors).toHaveLength(0);
        });

        test('several placeholders in one query', () => {
            const {errors} = parsePostgreSqlQueryWithoutCursor(
                'SELECT * FROM users WHERE id = {{user_id}} AND status = {{status}}',
                OPTIONS,
            );

            expect(errors).toHaveLength(0);
        });

        test('a numeric-position placeholder precedes another placeholder', () => {
            // `{{step}}` sits in a numeric-only position (INCREMENT BY), so when the
            // second placeholder is resolved the first must be masked as the integer it
            // became — not a string, which INCREMENT BY rejects and which would break
            // recovery and leave `{{start}}` unsubstituted.
            const {errors} = parsePostgreSqlQueryWithoutCursor(
                'CREATE SEQUENCE s INCREMENT BY {{step}} START WITH {{start}}',
                OPTIONS,
            );

            expect(errors).toHaveLength(0);
        });

        test('inside an IN list', () => {
            const {errors} = parsePostgreSqlQueryWithoutCursor(
                'SELECT * FROM users WHERE id IN ({{ids}})',
                OPTIONS,
            );

            expect(errors).toHaveLength(0);
        });

        test('placeholder inside a string literal is left untouched', () => {
            const {errors} = parsePostgreSqlQueryWithoutCursor(
                "SELECT * FROM users WHERE name = 'hello {{user}} world'",
                OPTIONS,
            );

            expect(errors).toHaveLength(0);
        });

        test('numeric-only position after SET STATISTICS (masquerades as a number)', () => {
            // `SET STATISTICS` expects a bare integer (`signedIconst`) and rejects a
            // string, so the placeholder must masquerade as `Integral`, not a string.
            const {errors} = parsePostgreSqlQueryWithoutCursor(
                'ALTER TABLE t ALTER COLUMN c SET STATISTICS {{count}}',
                OPTIONS,
            );

            expect(errors).toHaveLength(0);
        });

        test('LIMIT accepts an expression, so the placeholder masquerades as a string', () => {
            // Unlike MySQL, PostgreSQL `LIMIT` takes a full expression, so a string
            // constant is valid here and the (preferred) string masquerade parses.
            const {errors} = parsePostgreSqlQueryWithoutCursor(
                'SELECT * FROM t LIMIT {{count}}',
                OPTIONS,
            );

            expect(errors).toHaveLength(0);
        });

        test('multi-word content collapses into a single value token', () => {
            // Without substitution `first last` would be two dangling tokens and the
            // query would fail to parse; collapsing the placeholder into one string
            // constant keeps it valid — proof the substitution actually happens rather
            // than the (invisible) braces simply being dropped.
            const {errors} = parsePostgreSqlQueryWithoutCursor(
                'SELECT * FROM users WHERE name = {{first last}}',
                OPTIONS,
            );

            expect(errors).toHaveLength(0);
        });
    });

    describe('autocomplete after a placeholder', () => {
        test('suggests continuation keywords right after a placeholder', () => {
            const result = parsePostgreSqlQueryWithCursor(
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
            const result = parsePostgreSqlQueryWithCursor('SELECT {{col}} FROM |', OPTIONS);

            expect(result.suggestViewsOrTables).toBeDefined();
        });
    });

    describe('the masquerade type is chosen to fit the position', () => {
        // The expected tokens at the placeholder position are computed from the text
        // before the `{{`, with the cursor at its end — exactly what the token source
        // consults to pick the masquerade type.
        function expectedAtPlaceholder(query: string): number[] {
            const prefix = query.slice(0, query.indexOf('{{'));
            return getPostgreSqlParserExpectedTokens(prefix, {line: 1, column: prefix.length + 1});
        }

        test('a value position expects a string constant', () => {
            const expected = expectedAtPlaceholder('SELECT * FROM users WHERE id = {{user_id}}');

            expect(expected).toContain(PostgreSqlLexer.StringConstant);
        });

        test('the SET STATISTICS position expects an integer but not a string', () => {
            const expected = expectedAtPlaceholder(
                'ALTER TABLE t ALTER COLUMN c SET STATISTICS {{count}}',
            );

            expect(expected).toContain(PostgreSqlLexer.Integral);
            expect(expected).not.toContain(PostgreSqlLexer.StringConstant);
        });
    });

    describe('a placeholder where no value token fits is left untouched', () => {
        test('after GROUP a keyword (BY) is required, so the placeholder is not substituted', () => {
            const query = 'SELECT * FROM t GROUP {{by}}';
            const prefix = query.slice(0, query.indexOf('{{'));

            // Neither a string nor an integer literal is valid right after GROUP, so the
            // token source finds no masquerade and leaves the raw braces in place.
            const expected = getPostgreSqlParserExpectedTokens(prefix, {
                line: 1,
                column: prefix.length + 1,
            });
            expect(expected).not.toContain(PostgreSqlLexer.StringConstant);
            expect(expected).not.toContain(PostgreSqlLexer.Integral);

            // As a result the query no longer parses cleanly.
            const {errors} = parsePostgreSqlQueryWithoutCursor(query, OPTIONS);
            expect(errors.length).toBeGreaterThan(0);
        });
    });

    describe('a syntax error after a valid placeholder keeps the real position', () => {
        test('error is anchored on the offending token, not shifted by the placeholder', () => {
            // The placeholder sits in a valid value position (`id = {{test_id}}`),
            // so it must not itself raise an error. The syntax error is `beta`, a
            // stray token dangling after `AND alpha`.
            const query = 'SELECT * FROM users WHERE id = {{test_id}} AND alpha beta';
            const {errors} = parsePostgreSqlQueryWithoutCursor(query, OPTIONS);

            // `{{test_id}}` is 11 characters wide. If the placeholder substitution
            // shifted downstream coordinates, `beta`'s column would no longer line
            // up with its raw offset in the original string — so this offset check
            // is exactly what proves positions stay put.
            const errorStart = query.indexOf('beta');

            expect(errors.length).toBeGreaterThan(0);
            expect(
                errors.some(
                    (error) =>
                        error.startColumn === errorStart &&
                        error.endColumn === errorStart + 'beta'.length,
                ),
            ).toBe(true);

            // The placeholder never leaks its StringConstant masquerade into the message.
            expect(errors.every((error) => !error.message.includes('StringConstant'))).toBe(true);
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
                masqueradeTokenType: PostgreSqlLexer.StringConstant,
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
                'SELECT * FROM t WHERE a = {{first}} AND b = {{second}}',
            );

            expect(placeholders.map((placeholder) => placeholder.name)).toEqual([
                'first',
                'second',
            ]);
        });

        test('records the masquerade type chosen per position', () => {
            const {placeholders} = parseAndExtractPlaceholders(
                'CREATE SEQUENCE s INCREMENT BY {{step}} START WITH {{start}}',
            );

            // Both sit in numeric-only positions, so both were substituted as integers.
            expect(
                placeholders.map((placeholder) => placeholder.masqueradeTokenType),
            ).toEqual([PostgreSqlLexer.Integral, PostgreSqlLexer.Integral]);
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
