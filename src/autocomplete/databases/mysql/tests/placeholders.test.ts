import {CreateTokenSource} from '../../../shared/autocomplete-types';
import {MySqlLexer} from '../generated/MySqlLexer';
import {
    MySqlParseOptions,
    getMySqlParserExpectedTokens,
    parseMySqlQueryWithCursor,
    parseMySqlQueryWithoutCursor,
} from '../index';

import {PlaceholderTokenSource} from './placeholder-token-source';

// `{{ ... }}` placeholders masquerade as a value token, choosing per position:
// a string literal where one is expected, a numeric literal in numeric-only spots
// (e.g. LIMIT). The token source asks `getMySqlParserExpectedTokens` at each `{{`
// to pick a valid masquerade type; string is preferred when both fit.
const createTokenSource: CreateTokenSource = (lexer) =>
    new PlaceholderTokenSource(
        lexer,
        [MySqlLexer.STRING_LITERAL, MySqlLexer.DECIMAL_LITERAL],
        getMySqlParserExpectedTokens,
    );

const OPTIONS: MySqlParseOptions = {createTokenSource};

describe('mysql template placeholders {{ ... }}', () => {
    describe('valid positions parse without errors', () => {
        test('value position after `=`', () => {
            const {errors} = parseMySqlQueryWithoutCursor(
                'SELECT * FROM users WHERE id = {{user_id}}',
                OPTIONS,
            );

            expect(errors).toHaveLength(0);
        });

        test('several placeholders in one query', () => {
            const {errors} = parseMySqlQueryWithoutCursor(
                'SELECT * FROM users WHERE id = {{user_id}} AND status = {{status}}',
                OPTIONS,
            );

            expect(errors).toHaveLength(0);
        });

        test('inside an IN list', () => {
            const {errors} = parseMySqlQueryWithoutCursor(
                'SELECT * FROM users WHERE id IN ({{ids}})',
                OPTIONS,
            );

            expect(errors).toHaveLength(0);
        });

        test('placeholder inside a string literal is left untouched', () => {
            const {errors} = parseMySqlQueryWithoutCursor(
                "SELECT * FROM users WHERE name = 'hello {{user}} world'",
                OPTIONS,
            );

            expect(errors).toHaveLength(0);
        });

        test('numeric position after LIMIT (masquerades as a number)', () => {
            const {errors} = parseMySqlQueryWithoutCursor(
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
            const {errors} = parseMySqlQueryWithoutCursor(
                'SELECT * FROM users WHERE name = {{first last}}',
                OPTIONS,
            );

            expect(errors).toHaveLength(0);
        });
    });

    describe('autocomplete after a placeholder', () => {
        test('suggests continuation keywords right after a placeholder', () => {
            const result = parseMySqlQueryWithCursor(
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
            const result = parseMySqlQueryWithCursor('SELECT {{col}} FROM |', OPTIONS);

            expect(result.suggestViewsOrTables).toBeDefined();
        });
    });

    describe('the masquerade type is chosen to fit the position', () => {
        // The expected tokens at the placeholder position are computed from the text
        // before the `{{`, with the cursor at its end — exactly what the token source
        // consults to pick the masquerade type.
        function expectedAtPlaceholder(query: string): number[] {
            const prefix = query.slice(0, query.indexOf('{{'));
            return getMySqlParserExpectedTokens(prefix, {line: 1, column: prefix.length + 1});
        }

        test('a value position expects a string literal', () => {
            const expected = expectedAtPlaceholder('SELECT * FROM users WHERE id = {{user_id}}');

            expect(expected).toContain(MySqlLexer.STRING_LITERAL);
        });

        test('the LIMIT position expects a numeric literal but not a string', () => {
            const expected = expectedAtPlaceholder('SELECT * FROM t LIMIT {{count}}');

            expect(expected).toContain(MySqlLexer.DECIMAL_LITERAL);
            expect(expected).not.toContain(MySqlLexer.STRING_LITERAL);
        });
    });

    describe('a placeholder where no value token fits is left untouched', () => {
        test('after GROUP a keyword (BY) is required, so the placeholder is not substituted', () => {
            const query = 'SELECT * FROM t GROUP {{by}}';
            const prefix = query.slice(0, query.indexOf('{{'));

            // Neither a string nor a numeric literal is valid right after GROUP, so the
            // token source finds no masquerade and leaves the raw braces in place.
            const expected = getMySqlParserExpectedTokens(prefix, {
                line: 1,
                column: prefix.length + 1,
            });
            expect(expected).not.toContain(MySqlLexer.STRING_LITERAL);
            expect(expected).not.toContain(MySqlLexer.DECIMAL_LITERAL);

            // As a result the query no longer parses cleanly.
            const {errors} = parseMySqlQueryWithoutCursor(query, OPTIONS);
            expect(errors.length).toBeGreaterThan(0);
        });
    });

    describe('a syntax error after a valid placeholder keeps the real position', () => {
        test('error is anchored on the offending token, not shifted by the placeholder', () => {
            // The placeholder sits in a valid value position (`id = {{test_id}}`),
            // so it must not itself raise an error. The syntax error is `beta`, a
            // stray token dangling after `AND alpha`.
            const query = 'SELECT * FROM users WHERE id = {{test_id}} AND alpha beta';
            const {errors} = parseMySqlQueryWithoutCursor(query, OPTIONS);

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

            // The placeholder never leaks its STRING_LITERAL masquerade into the message.
            expect(errors.every((error) => !error.message.includes('STRING_LITERAL'))).toBe(true);
        });
    });
});
