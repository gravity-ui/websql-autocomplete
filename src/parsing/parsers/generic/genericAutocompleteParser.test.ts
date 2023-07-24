// Licensed to Cloudera, Inc. under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  Cloudera, Inc. licenses this file
// to you under the Apache License, Version 2.0 (the
// 'License'); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an 'AS IS' BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

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

import {genericAutocompleteParser} from './genericAutocompleteParser';
import structure from './jison/structure.json';
import { AutocompleteParser } from '../../lib/types';
import { extractTestCases, runTestCases } from '../../test/testing';
import { assertPartials, CommonParser } from '../../lib/parsing-typed';

const jisonFolder = 'src/parsing/parsers/generic/jison';

let structureFiles = structure.autocomplete

// We slice first 3 arguments which required for the other places
const exactFiles = process.argv.slice(3).filter((arg) => /.jison$/.test(arg))

if (exactFiles) {
  structureFiles = structureFiles.filter(
      (filePath) => exactFiles.some(
          (exactFile) => new RegExp(exactFile + '$').test(filePath)
      )
  )
}

const groupedTestCases = extractTestCases(jisonFolder, structureFiles);

if (groupedTestCases.length === 0) {
  process.stdout.write(''.concat('\x1b[33m', 'JISON test cases list is empty', '\x1b[0m\ ', '\n'));
}

describe('genericAutocompleteParser', () => {
  // TODO: Fix the types
  runTestCases(genericAutocompleteParser as unknown as AutocompleteParser, groupedTestCases);

  describe('partial removal', () => {
    it('should identify part lengths', () => {
      assertPartials(genericAutocompleteParser as unknown as CommonParser);
    });
  });
});
