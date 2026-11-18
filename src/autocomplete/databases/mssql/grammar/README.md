# T-SQL grammar

Source: [antlr/grammars-v4, sql/tsql](https://github.com/antlr/grammars-v4/tree/8c7185f34a6958da71c6faa2e07abe9710f3e236/sql/tsql), pinned to commit `8c7185f34a6958da71c6faa2e07abe9710f3e236`.

The upstream MIT license and copyright notices are preserved in both grammar files.

## Local changes

- `TSqlLexer.g4`: send `SPACE` tokens to `channel(HIDDEN)` instead of skipping them. The shared autocomplete code needs whitespace tokens to locate the cursor.
- `TSqlLexer.g4`: add `DOUBLE_CURLY_PLACEHOLDER` token for `{{ ... }}`, guarded by the `doubleCurlyPlaceholdersEnabled` lexer member and disabled by default.
- `TSqlParser.g4`: allow `DOUBLE_CURLY_PLACEHOLDER` in `parameter` (so wherever a constant is allowed) and in `top_count` (`TOP {{n}}`).

## Regeneration

From the repository root, run `npm run generate:mssql` (Java is required). Commit the generated files together with grammar changes; do not edit generated files manually.
