import {describe, it} from '@jest/globals';

import {CommonParser, assertPartials} from '../../lib/parsing-typed';
import type {AutocompleteParser} from '../../lib/types';
import {extractTestCases, runTestCases} from '../../test/testing';

import structure from './jison/structure.json';
import {postgresqlAutocompleteParser} from './postgresqlAutocompleteParser';

const jisonFolder = 'src/parsing/parsers/postgresql/jison';
const groupedTestCases = extractTestCases(jisonFolder, structure.autocomplete);
// const groupedTestCases = extractTestCases(jisonFolder, structure.autocomplete.filter((item) => item.indexOf('offset_clause') > -1));

describe('postgresqlAutocompleteParser', () => {
    // TODO: Fix the types
    runTestCases(postgresqlAutocompleteParser as unknown as AutocompleteParser, groupedTestCases);

    describe('partial removal', () => {
        it('should identify part lengths', () => {
            assertPartials(postgresqlAutocompleteParser as unknown as CommonParser);
        });
    });
});
