import {parseYqlQueryWithCursor, parseYqlQueryWithoutCursor} from '../../../index';

// ------------------- CREATE TABLE: column ENCODING ---------------------

test('should not report errors for CREATE TABLE with column ENCODING(OFF)', () => {
    const autocompleteResult = parseYqlQueryWithoutCursor(
        'CREATE TABLE `ExampleTable` (id Uint64, name Utf8 ENCODING(OFF)) WITH (STORE = COLUMN);',
    );
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors for CREATE TABLE with column ENCODING(DICT)', () => {
    const autocompleteResult = parseYqlQueryWithoutCursor(
        'CREATE TABLE `ExampleTable` (id Uint64, name Utf8 ENCODING(DICT)) WITH (STORE = COLUMN);',
    );
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors for empty ENCODING parentheses', () => {
    const autocompleteResult = parseYqlQueryWithoutCursor(
        'CREATE TABLE `ExampleTable` (id Uint64, name Utf8 ENCODING()) WITH (STORE = COLUMN);',
    );
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors for ENCODING lowercase and dict', () => {
    const autocompleteResult = parseYqlQueryWithoutCursor(
        'CREATE TABLE `ExampleTable` (id Uint64, name Utf8 encoding(dict)) WITH (STORE = COLUMN);',
    );
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors for combined ENCODING and COMPRESSION and NULL', () => {
    const autocompleteResult = parseYqlQueryWithoutCursor(
        'CREATE TABLE `ExampleTable` (id Uint64, name Utf8 ENCODING(DICT) COMPRESSION(algorithm = zstd, level = 5) NULL) WITH (STORE = COLUMN);',
    );
    expect(autocompleteResult.errors).toHaveLength(0);
});

// ----------------- ALTER TABLE: ALTER COLUMN SET ENCODING --------------

test('should not report errors for ALTER TABLE ALTER COLUMN SET ENCODING()', () => {
    const autocompleteResult = parseYqlQueryWithoutCursor(
        'ALTER TABLE `ExampleTable` ALTER COLUMN `emptyEncoding` SET ENCODING();',
    );
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors for ALTER TABLE ALTER COLUMN SET ENCODING(OFF)', () => {
    const autocompleteResult = parseYqlQueryWithoutCursor(
        'ALTER TABLE `ExampleTable` ALTER COLUMN `offEncoding` SET ENCODING(OFF);',
    );
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors for ALTER TABLE ALTER COLUMN SET ENCODING(DICT)', () => {
    const autocompleteResult = parseYqlQueryWithoutCursor(
        'ALTER TABLE `ExampleTable` ALTER COLUMN `dictEncoding` SET ENCODING(DICT);',
    );
    expect(autocompleteResult.errors).toHaveLength(0);
});

// ----------------- ALTER TABLE: ADD COLUMN with ENCODING ---------------

test('should not report errors for ALTER TABLE ADD COLUMN with ENCODING(DICT)', () => {
    const autocompleteResult = parseYqlQueryWithoutCursor(
        'ALTER TABLE `ExampleTable` ADD COLUMN `newColumn` Utf8 ENCODING(DICT);',
    );
    expect(autocompleteResult.errors).toHaveLength(0);
});

// ----------------- ENCODING keyword suggestion ----------------------------

test('should suggest ENCODING among column options after column type in CREATE TABLE', () => {
    const autocompleteResult = parseYqlQueryWithCursor('CREATE TABLE test_table (col1 Utf8 |');

    expect(autocompleteResult.suggestKeywords).toContainEqual({value: 'ENCODING'});
});

test('should suggest ENCODING after ALTER COLUMN SET', () => {
    const autocompleteResult = parseYqlQueryWithCursor(
        'ALTER TABLE test_table ALTER COLUMN id SET |',
    );

    expect(autocompleteResult.suggestKeywords).toContainEqual({value: 'ENCODING'});
});

test('should suggest ENCODING among column options after ADD COLUMN type', () => {
    const autocompleteResult = parseYqlQueryWithCursor(
        'ALTER TABLE test_table ADD COLUMN test Utf8 |',
    );

    expect(autocompleteResult.suggestKeywords).toContainEqual({value: 'ENCODING'});
});

// ----------------- ENCODING parameter position ----------------------------

test('should not suggest column-option keywords inside ENCODING parentheses', () => {
    const autocompleteResult = parseYqlQueryWithCursor(
        'ALTER TABLE test_table ALTER COLUMN id SET ENCODING(|',
    );

    const keywords = autocompleteResult.suggestKeywords ?? [];
    // Column-option keywords (e.g. NOT, DEFAULT, FAMILY, COMPRESSION) must not appear
    // at the position of an encoding configuration name.
    expect(keywords).not.toContainEqual({value: 'NOT'});
    expect(keywords).not.toContainEqual({value: 'DEFAULT'});
    expect(keywords).not.toContainEqual({value: 'FAMILY'});
    expect(keywords).not.toContainEqual({value: 'COMPRESSION'});
});

// ----------------- suggestEncodingSettings --------------------------------

test('should suggest encoding settings inside ALTER COLUMN SET ENCODING(', () => {
    const autocompleteResult = parseYqlQueryWithCursor(
        'ALTER TABLE test_table ALTER COLUMN id SET ENCODING(|',
    );
    expect(autocompleteResult.suggestEncodingSettings).toBe(true);
});

test('should suggest encoding settings after comma in ALTER COLUMN SET ENCODING', () => {
    const autocompleteResult = parseYqlQueryWithCursor(
        'ALTER TABLE test_table ALTER COLUMN id SET ENCODING(DICT, |',
    );
    expect(autocompleteResult.suggestEncodingSettings).toBe(true);
});

test('should suggest encoding settings inside ADD COLUMN ENCODING(', () => {
    const autocompleteResult = parseYqlQueryWithCursor(
        'ALTER TABLE test_table ADD COLUMN name Utf8 ENCODING(|',
    );
    expect(autocompleteResult.suggestEncodingSettings).toBe(true);
});

test('should suggest encoding settings inside CREATE TABLE column ENCODING(', () => {
    const autocompleteResult = parseYqlQueryWithCursor(
        'CREATE TABLE test_table (id Uint64, name Utf8 ENCODING(|',
    );
    expect(autocompleteResult.suggestEncodingSettings).toBe(true);
});

test('should NOT suggest encoding settings outside ENCODING(...)', () => {
    const autocompleteResult = parseYqlQueryWithCursor('ALTER TABLE test_table ALTER COLUMN id |');
    expect(autocompleteResult.suggestEncodingSettings).toBeFalsy();
});

test('should NOT suggest encoding settings inside COMPRESSION(...)', () => {
    const autocompleteResult = parseYqlQueryWithCursor(
        'ALTER TABLE test_table ALTER COLUMN id SET COMPRESSION(|',
    );
    expect(autocompleteResult.suggestEncodingSettings).toBeFalsy();
});

test('should NOT suggest encoding settings inside WITH (...)', () => {
    const autocompleteResult = parseYqlQueryWithCursor(
        'CREATE TABLE test_table (col1 String) WITH (|',
    );
    expect(autocompleteResult.suggestEncodingSettings).toBeFalsy();
});
