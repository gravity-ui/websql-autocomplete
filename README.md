# About

A tool that suggest sql completion for various sql dialects.

# Repository structure

- `desktop/core/src/desktop/js/parse/sql/{dialect}/jison/` - contains grammar definitions for {dialect}, from which the actual autocomplete parser is built
- `desktop/core/src/desktop/js/parse/sql/{dialect}/{dialect}AutocompleteParser.js` - the actual autocomplete parser that you can import in your project
- `desktop/core/src/desktop/js/parse/sql/{dialect}/**/*.test.*` - contains autocomplete parser tests
- `tools/jison/generateParsers.js` - tool that builds autocomplete parsers

# How to

## Setup

```shell
npm install

cd tools/jison
npm install
```

## Run tests

```shell
npm run test src/desktop/js/parse/sql/
```

## Generate parsers

```shell
cd tools/jison
node generateParsers.js generic
```