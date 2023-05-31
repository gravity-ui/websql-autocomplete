# About

A tool that provides autocompletion for various sql dialects.

# Scripts

- `npm run setup` - Install all dependencies
- `npm run generate` - Generate parsers
- `npm run test` - Run tests

# Repository structure

- `src/parsing/index.ts` - api file that you can import in your project. You need to compile it yourself though!
- `src/parsing/parsers/{dialect}/jison/` - contains grammar definitions for {dialect}, from which the parser is built
- `src/parsing/parsers/{dialect}/**/*.test.*` - contains parser tests
- `src/generator/main.js` - tool that builds autocomplete parsers

# Contributing

- When adding a new file, just add Yandex copyright header
- When editing or moving a file that hasn't been edited by Yandex, add Yandex copyright header underneath the existent copyright from Cloudera, and update changed files list in [NOTICE.txt](NOTICE.txt) at the bottom
- Delete files freely

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
