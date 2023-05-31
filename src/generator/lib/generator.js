// Licensed to Cloudera, Inc. under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  Cloudera, Inc. licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
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

/* eslint-disable no-restricted-syntax */

import { fileExists, listDir, readFile } from './files.js';

const LICENSE = `// Licensed to Cloudera, Inc. under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  Cloudera, Inc. licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
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

`;

const SQL_STATEMENTS_PARSER_JSDOC = `/**
 * @param {string} input
 *
 * @return {SqlStatementsParserResult}
 */
`;

const AUTOCOMPLETE_PARSER_JSDOC = `/**
 * @param {string} input
 *
 * @return {AutocompleteParseResult}
 */
`;

const PARSING_FOLDER = '../parsing';
const PARSERS_FOLDER = `${PARSING_FOLDER}/parsers`;

/*
 The FIXED_PARSER_DEFINITIONS are for parsers other than the ones used for SQL autocomplete and syntax
 which are identified automatically under SQL_FOLDER

 The "afterParse" function can be used to modify the generated parser code, for instance, add the license header,
 add specific imports, and make sure it is ES modules compatible etc.
 */
const FIXED_PARSER_DEFINITIONS = {
  globalSearchParser: {
    sources: [`${PARSING_FOLDER}/jison/globalSearchParser.jison`],
    targetJison: 'globalSearchParser.jison',
    outputFolder: PARSING_FOLDER,
    parserName: 'globalSearchParser',
    afterParse: async contents =>
      `${LICENSE}${contents.replace(
        'var globalSearchParser = ',
        "import SqlParseSupport from 'parse/sqlParseSupport';\n\nvar globalSearchParser = "
      )}\nexport default globalSearchParser;\n`
  },
  solrFormulaParser: {
    sources: [`${PARSING_FOLDER}/jison/solrFormulaParser.jison`],
    targetJison: 'solrFormulaParser.jison',
    outputFolder: PARSING_FOLDER,
    parserName: 'solrFormulaParser',
    afterParse: async contents => `${LICENSE}${contents}\nexport default solrFormulaParser;\n`
  },
  solrQueryParser: {
    sources: [`${PARSING_FOLDER}/jison/solrQueryParser.jison`],
    targetJison: 'solrQueryParser.jison',
    outputFolder: PARSING_FOLDER,
    parserName: 'solrQueryParser',
    afterParse: async contents => `${LICENSE}${contents}\nexport default solrQueryParser;\n`
  },
  sqlStatementsParser: {
    sources: [`${PARSING_FOLDER}/jison/sqlStatementsParser.jison`],
    targetJison: 'sqlStatementsParser.jison',
    outputFolder: PARSING_FOLDER,
    parserName: 'sqlStatementsParser',
    afterParse: async contents =>
      `${LICENSE}${contents.replace(
        'parse: function parse',
        SQL_STATEMENTS_PARSER_JSDOC + 'parse: function parse'
      )}\nexport default sqlStatementsParser;\n`
  },
  hplsqlStatementsParser: {
    sources: [`${PARSING_FOLDER}/jison/hplsqlStatementsParser.jison`],
    targetJison: 'hplsqlStatementsParser.jison',
    outputFolder: PARSING_FOLDER,
    parserName: 'hplsqlStatementsParser',
    afterParse: async contents =>
      `${LICENSE}${contents.replace(
        'parse: function parse',
        SQL_STATEMENTS_PARSER_JSDOC + 'parse: function parse'
      )}\nexport default hplsqlStatementsParser;\n`
  }
};

/**
 * Searches through the SQL_FOLDER and if a jison/structure.json file exists it considers it a parser
 */
const findParserSources = async () => {
  const folders = await listDir(PARSERS_FOLDER);
  const structureFiles = [];
  for (const folder of folders) {
    const outputFolder = `${PARSERS_FOLDER}/${folder}`;
    const jisonFolder = `${outputFolder}/jison`;
    const structureFile = `${jisonFolder}/structure.json`;
    if (fileExists(structureFile)) {
      structureFiles.push({ dialect: folder, outputFolder, jisonFolder, structureFile });
    }
  }
  return structureFiles;
};

/**
 * Identifies all the SQL parsers based on subfolders in SQL_FOLDER and adds them to parserDefinitions
 */
export const identifySqlParsers = async () => {
  const parserSources = await findParserSources();
  const foundDefinitions = {};

  for (const parserSource of parserSources) {
    const structure = JSON.parse(await readFile(parserSource.structureFile));
    if (structure.autocomplete) {
      foundDefinitions[`${parserSource.dialect}AutocompleteParser`] = createParserDefinition(
        structure.autocomplete,
        parserSource,
        true,
        structure
      );
    }
    if (structure.syntax) {
      foundDefinitions[`${parserSource.dialect}SyntaxParser`] = createParserDefinition(
        structure.syntax,
        parserSource,
        false,
        structure
      );
    }
  }
  return { ...FIXED_PARSER_DEFINITIONS, ...foundDefinitions };
};

const createParserDefinition = (
  sources,
  { dialect, outputFolder, jisonFolder },
  autocomplete,
  { lexer, imports }
) => {
  const parserName = `${dialect}${autocomplete ? 'AutocompleteParser' : 'SyntaxParser'}`;

  const absoluteSources = sources.map(source => `${jisonFolder}/${source}`);

  for (const source of absoluteSources) {
    if (!fileExists(source)) {
      throw new Error(
        `Could not find the file '${source}' as defined in structure.json for ${dialect}`
      );
    }
  }

  return {
    sources: sources.map(source => `${jisonFolder}/${source}`),
    lexer: `${jisonFolder}/${lexer}`,
    targetJison: `${outputFolder}/${parserName}.jison`,
    sqlParser: autocomplete ? 'AUTOCOMPLETE' : 'SYNTAX',
    parserName,
    outputFolder,
    afterParse: async contents =>
      `${LICENSE}${contents
        // Add default import of sqlParseSupport or imports specified in the structure file
        .replace(
          `var ${parserName} = `,
          imports
            ? `${imports.join(';\n')};\n\n$var ${parserName} = `
            : `import { extendParser } from './parser-extension';\n\nvar ${parserName} = `
        )
        // Add jsdoc to the parse function
        .replace('parse: function parse', AUTOCOMPLETE_PARSER_JSDOC + 'parse: function parse')
        // Fix a bug in jison (https://github.com/zaach/jison/pull/356)
        .replace(
          'loc: yyloc,',
          "loc: lexer.yylloc, ruleId: stack.slice(stack.length - 2, stack.length).join(''),"
        )}\nexport default ${parserName};\n`
  };
};

/* eslint-enable no-restricted-syntax */
