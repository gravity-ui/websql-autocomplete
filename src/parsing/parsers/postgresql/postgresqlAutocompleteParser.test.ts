import {postgresqlAutocompleteParser} from './postgresqlAutocompleteParser';
import structure from './jison/structure.json';
import type { AutocompleteParser } from '../../lib/types';
import { extractTestCases, runTestCases } from '../../test/testing';
import { assertPartials, CommonParser } from '../../lib/parsing-typed';

const jisonFolder = 'src/parsing/parsers/postgresql/jison';
const groupedTestCases = extractTestCases(jisonFolder, structure.autocomplete);

describe('postgresqlAutocompleteParser', () => {
  // TODO: Fix the types
  runTestCases(postgresqlAutocompleteParser as unknown as AutocompleteParser, groupedTestCases);

  describe('partial removal', () => {
    it('should identify part lengths', () => {
      assertPartials(postgresqlAutocompleteParser as unknown as CommonParser);
    });
  });
});
