import {parseYqlQueryWithCursor, parseYqlQueryWithoutCursor} from '../../../index';

// ------------------- CREATE TABLE: column COMPRESSION ---------------------

test('should not report errors for CREATE TABLE with column COMPRESSION', () => {
    const autocompleteResult = parseYqlQueryWithoutCursor(
        'CREATE TABLE `ExampleTable` (id Uint64, name Utf8 COMPRESSION(algorithm=zstd, level=3)) WITH (STORE = COLUMN);',
    );
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors for CREATE TABLE with column COMPRESSION and NOT NULL DEFAULT', () => {
    const autocompleteResult = parseYqlQueryWithoutCursor(
        "CREATE TABLE `ExampleTable` (id Uint64, name Utf8 COMPRESSION(algorithm=lz4) NOT NULL DEFAULT 'x') WITH (STORE = COLUMN);",
    );
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors for COMPRESSION with off algorithm', () => {
    const autocompleteResult = parseYqlQueryWithoutCursor(
        'CREATE TABLE `ExampleTable` (id Uint64, name Utf8 COMPRESSION(algorithm=off)) WITH (STORE = COLUMN);',
    );
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors for empty COMPRESSION parentheses', () => {
    const autocompleteResult = parseYqlQueryWithoutCursor(
        'CREATE TABLE `ExampleTable` (id Uint64, name Utf8 COMPRESSION()) WITH (STORE = COLUMN);',
    );
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors for inline COMPRESSION with trailing comma', () => {
    const autocompleteResult = parseYqlQueryWithoutCursor(
        'CREATE TABLE `ExampleTable` (id Uint64, name Utf8 COMPRESSION(algorithm=zstd, level=3,)) WITH (STORE = COLUMN);',
    );
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should suggest COMPRESSION among column options after column type in CREATE TABLE', () => {
    const autocompleteResult = parseYqlQueryWithCursor('CREATE TABLE test_table (col1 Utf8 |');

    expect(autocompleteResult.suggestKeywords).toContainEqual({value: 'COMPRESSION'});
});

// ----------------- ALTER TABLE: ALTER COLUMN SET COMPRESSION --------------

test('should not report errors for ALTER TABLE ALTER COLUMN SET COMPRESSION', () => {
    const autocompleteResult = parseYqlQueryWithoutCursor(
        'ALTER TABLE `ExampleTable` ALTER COLUMN name SET COMPRESSION(algorithm=zstd, level=3);',
    );
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should suggest COMPRESSION after ALTER COLUMN SET', () => {
    const autocompleteResult = parseYqlQueryWithCursor(
        'ALTER TABLE test_table ALTER COLUMN id SET |',
    );

    expect(autocompleteResult.suggestKeywords).toContainEqual({value: 'COMPRESSION'});
});

// ----------------- ALTER TABLE: ADD COLUMN with COMPRESSION ---------------

test('should not report errors for ALTER TABLE ADD COLUMN with COMPRESSION', () => {
    const autocompleteResult = parseYqlQueryWithoutCursor(
        'ALTER TABLE `ExampleTable` ADD COLUMN name Utf8 COMPRESSION(algorithm=zstd);',
    );
    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should suggest COMPRESSION among column options after ADD COLUMN type', () => {
    const autocompleteResult = parseYqlQueryWithCursor(
        'ALTER TABLE test_table ADD COLUMN test Utf8 |',
    );

    expect(autocompleteResult.suggestKeywords).toContainEqual({value: 'COMPRESSION'});
});

// ----------------- COMPRESSION parameter position -------------------------

test('should not suggest column-option keywords inside COMPRESSION parentheses', () => {
    const autocompleteResult = parseYqlQueryWithCursor(
        'ALTER TABLE test_table ALTER COLUMN id SET COMPRESSION(|',
    );

    const keywords = autocompleteResult.suggestKeywords ?? [];
    // Column-option keywords (e.g. NOT, DEFAULT, FAMILY, ENCODING) must not appear
    // at the position of a compression parameter name.
    expect(keywords).not.toContainEqual({value: 'NOT'});
    expect(keywords).not.toContainEqual({value: 'DEFAULT'});
    expect(keywords).not.toContainEqual({value: 'FAMILY'});
    expect(keywords).not.toContainEqual({value: 'ENCODING'});
});

// ----------------- suggestCompressionSettings ------------------------------

test('should suggest compression settings inside ALTER COLUMN SET COMPRESSION(', () => {
    const autocompleteResult = parseYqlQueryWithCursor(
        'ALTER TABLE test_table ALTER COLUMN id SET COMPRESSION(|',
    );
    expect(autocompleteResult.suggestCompressionSettings).toBe(true);
});

test('should suggest compression settings after comma in ALTER COLUMN SET COMPRESSION', () => {
    const autocompleteResult = parseYqlQueryWithCursor(
        'ALTER TABLE test_table ALTER COLUMN id SET COMPRESSION(algorithm=zstd, |',
    );
    expect(autocompleteResult.suggestCompressionSettings).toBe(true);
});

test('should suggest compression settings inside ADD COLUMN COMPRESSION(', () => {
    const autocompleteResult = parseYqlQueryWithCursor(
        'ALTER TABLE test_table ADD COLUMN name Utf8 COMPRESSION(|',
    );
    expect(autocompleteResult.suggestCompressionSettings).toBe(true);
});

test('should suggest compression settings inside CREATE TABLE column COMPRESSION(', () => {
    const autocompleteResult = parseYqlQueryWithCursor(
        'CREATE TABLE test_table (id Uint64, name Utf8 COMPRESSION(|',
    );
    expect(autocompleteResult.suggestCompressionSettings).toBe(true);
});

test('should NOT suggest compression settings at value position (after =)', () => {
    const autocompleteResult = parseYqlQueryWithCursor(
        'ALTER TABLE test_table ALTER COLUMN id SET COMPRESSION(algorithm=|',
    );
    expect(autocompleteResult.suggestCompressionSettings).toBeFalsy();
});

test('should NOT suggest compression settings outside COMPRESSION(...)', () => {
    const autocompleteResult = parseYqlQueryWithCursor('ALTER TABLE test_table ALTER COLUMN id |');
    expect(autocompleteResult.suggestCompressionSettings).toBeFalsy();
});

test('should NOT suggest compression settings inside WITH (...)', () => {
    const autocompleteResult = parseYqlQueryWithCursor(
        'CREATE TABLE test_table (col1 String) WITH (|',
    );
    expect(autocompleteResult.suggestCompressionSettings).toBeFalsy();
});
