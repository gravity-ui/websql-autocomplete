# WebSQL autocomplete

![ci_badge](https://img.shields.io/github/actions/workflow/status/gravity-ui/websql-autocomplete/ci.yml)
![npm_package_version_badge](https://img.shields.io/npm/v/@gravity-ui/websql-autocomplete)
![last_commit_badge](https://img.shields.io/github/last-commit/gravity-ui/websql-autocomplete)
![license_badge](https://img.shields.io/github/license/gravity-ui/websql-autocomplete)

A tool that provides autocompletion for various sql dialects.

# Autocomplete theory

In order to parse any language, you need a [lexer](https://en.wikipedia.org/wiki/Lexical_analysis) (tokenizer) and a [parser](https://en.wikipedia.org/wiki/Parsing#Parser) (ast builder)

Resources to research:

- The ANTLR Mega Tutorial: https://tomassetti.me/antlr-mega-tutorial/
- Code Completion with ANTLR4-c3: https://tomassetti.me/code-completion-with-antlr4-c3/

# How everything works

1. ANTLR4 grammar and lexer for different `{dialect}` are defined in `src/autocomplete/databases/{dialect}/grammar` directories.
2. Actual parsers and lexers for different `{dialect}` are generated into `src/autocomplete/databases/{dialect}/generated` directories.
3. Dialect specific code, which is required for the core logic to work, is put in `src/autocomplete/databases/{dialect}/{dialect}-autocomplete.ts` files.
4. The core logic is inside `src/autocomplete/shared/autocomplete.ts` file. It uses dialect specific helpers to generate autocomplete suggestions based on current cursor position.

# How to add a new dialect

1. Add new dialect files to [src/autocomplete/databases/{$dialect}](src/autocomplete/databases)
2. Add new dialect to the `typesVersions`, `exports` variables in [package.json](package.json)
3. Add new dialect to the `databases` array in [build.js](build.js)

# Main scripts

- `npm run generate` - Generate parsers and lexers (Java has to be installed on your system for this to work)
- `npm run test` - Run tests
