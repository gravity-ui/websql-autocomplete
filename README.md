# About

A tool that provides autocompletion for various sql dialects.

# Parser theory

In order to parse any language, you need a [lexer](https://en.wikipedia.org/wiki/Lexical_analysis) (tokenizer) and a [parser](https://en.wikipedia.org/wiki/Parsing#Parser) (ast builder)

Resources to research:
- Bison grammar specification: https://www.gnu.org/software/bison/manual/html_node/Rules-Syntax.html
- Playlist with the explanation on how parser and lexer work together: https://www.youtube.com/playlist?list=PLIrl0f9NJZy4oOOAVPU6MyRdFjJFGtceu

# How everything works

1. Autocomplete parser source code for different `{dialect}` are defined in `src/parsing/parsers/{dialect}` directories.
2. Lexer configuration is specified in `src/parsing/parsers/{dialect}/jison/sql.jisonlex` file.
3. SQL grammar is specified in `src/parsing/parsers/{dialect}/jison/**/*.jison`. It is placed in multiple files for easier understanding. Test files `*.test.json` are placed nearby. Jison is basically bison, but for javascript.
4. `src/parsing/parsers/{dialect}/jison/structure.json` specifies paths to a lexer, and to all the grammar files.
5. Parser extension (basically the autocomplete features) is specified in `src/parsing/parsers/{dialect}/parser-extension.js`.
6. `src/generator/main.js` concatenates all the jison files into a single big jison file, and runs the jison tool with the specified lexer, then wires everything up with the `parser-extension.js`, generating `src/parsing/parsers/{dialect}/{dialect}AutocompleteParser.js`.
7. The generated file is in plain javascript, so we create a convenient typescript wrapper in `src/parsing/index.ts` with all the types and functions. Our users should include this file in their own projects (for the time being they need to compile it yourself)

# Main scripts

- `npm run setup` - Install all dependencies
- `npm run generate` - Generate parsers
- `npm run test` - Run tests

# Contributing

- When adding a new file, just add Yandex copyright header
- When editing a file that has not Yandex copyright, add Yandex copyright header underneath the existent copyright from Cloudera, and update changed files list in [NOTICE.txt](NOTICE.txt) at the bottom
- Delete and move files freely

Yandex copyright:
```text
// Please note that the code below is the modified code distributed on the terms, mentioned below.
// The copyright for the changes belongs to YANDEX LLC.
//
// Copyright 2023 YANDEX LLC
//
// Licensed under the Apache License, Version 2.0 (the "License")
// You may not use this file except in compliance with the License.
// You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software distributed under
// the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
// either express or implied. See the License for the specific language governing permissions
// and limitations under the License.
```
