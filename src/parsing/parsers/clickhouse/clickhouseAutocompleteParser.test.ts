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

import {clickhouseAutocompleteParser} from './clickhouseAutocompleteParser';
import structure from './jison/structure.json';
import type { AutocompleteParser } from '../../lib/types';
import { extractTestCases, runTestCases } from '../../test/testing';
import { assertPartials, CommonParser } from '../../lib/parsing-typed';
import {describe, it} from '@jest/globals';

const jisonFolder = 'src/parsing/parsers/clickhouse/jison';
const groupedTestCases = extractTestCases(jisonFolder, structure.autocomplete);

describe('clickhouseAutocompleteParser', () => {
  // TODO: Fix the types
  runTestCases(clickhouseAutocompleteParser as unknown as AutocompleteParser, groupedTestCases);

  describe('partial removal', () => {
    it('should identify part lengths', () => {
      assertPartials(clickhouseAutocompleteParser as unknown as CommonParser);
    });
  });
});
