import {parseMySqlQueryWithCursor, parseMySqlQueryWithoutCursor} from '../index';

const OPTIONS = {supportPlaceholders: true} as const;

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

    describe('placeholders in invalid positions raise a valid error on the placeholder', () => {
        test('placeholder where a keyword is required (GROUP ... BY)', () => {
            const query = 'SELECT * FROM t GROUP {{by}}';
            const {errors} = parseMySqlQueryWithoutCursor(query, OPTIONS);
            const placeholderStart = query.indexOf('{{by}}');

            expect(errors.length).toBeGreaterThan(0);

            // The error is anchored on the placeholder's real span (0-based column),
            // i.e. positions are not shifted by the substitution.
            expect(errors.some((error) => error.startColumn === placeholderStart)).toBe(true);
            expect(
                errors.some(
                    (error) =>
                        error.startColumn === placeholderStart &&
                        error.endColumn === placeholderStart + '{{by}}'.length,
                ),
            ).toBe(true);

            // The message blames the placeholder text, and never leaks the
            // internal STRING_LITERAL masquerade.
            expect(errors.some((error) => error.message.includes('{{by}}'))).toBe(true);
            expect(errors.every((error) => !error.message.includes('STRING_LITERAL'))).toBe(true);
        });

        test('placeholder in the numeric-only LIMIT position', () => {
            const query = 'SELECT * FROM t LIMIT {{count}}';
            const {errors} = parseMySqlQueryWithoutCursor(query, OPTIONS);
            const placeholderStart = query.indexOf('{{count}}');

            expect(errors.length).toBeGreaterThan(0);
            expect(errors.some((error) => error.startColumn === placeholderStart)).toBe(true);
            expect(errors.some((error) => error.message.includes('{{count}}'))).toBe(true);
            expect(errors.every((error) => !error.message.includes('STRING_LITERAL'))).toBe(true);
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
