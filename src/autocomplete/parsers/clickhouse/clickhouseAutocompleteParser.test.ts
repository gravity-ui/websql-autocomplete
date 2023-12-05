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

import {describe, it} from '@jest/globals';

import {CommonParser, assertPartials} from '../../lib/autocomplete-parse-result';
import type {AutocompleteParser} from '../../lib/types';
import {extractTestCases, runTestCases} from '../../test/testing';

import {clickhouseAutocompleteParser} from './clickhouseAutocompleteParser';
import structure from './grammar/structure.json';

const grammarFolder = 'src/autocomplete/parsers/clickhouse/grammar';
const groupedTestCases = extractTestCases(grammarFolder, structure.autocomplete);

describe('clickhouseAutocompleteParser', () => {
    // TODO: Fix the types
    runTestCases(clickhouseAutocompleteParser as unknown as AutocompleteParser, groupedTestCases);

    describe('partial removal', () => {
        it('should identify part lengths', () => {
            assertPartials(clickhouseAutocompleteParser as unknown as CommonParser);
        });
    });
});
