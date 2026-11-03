# T-SQL grammar

Source: [antlr/grammars-v4, sql/tsql](https://github.com/antlr/grammars-v4/tree/8c7185f34a6958da71c6faa2e07abe9710f3e236/sql/tsql), pinned to commit `8c7185f34a6958da71c6faa2e07abe9710f3e236`.

The upstream MIT license and copyright notices are preserved in both grammar files.

## Local changes

- `TSqlLexer.g4`: send `SPACE` tokens to `channel(HIDDEN)` instead of skipping them. The shared autocomplete code needs whitespace tokens to locate the cursor.

## Regeneration

From the repository root, run `npm run generate:mssql` (Java is required). Commit the generated files together with grammar changes; do not edit generated files manually.
