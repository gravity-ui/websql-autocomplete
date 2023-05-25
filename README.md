# About

A tool that suggest sql completion for various sql dialects.

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