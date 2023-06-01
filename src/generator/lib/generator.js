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

import {deleteFile, fileExists, listDir, readFile, writeFile} from './files.js';
import jisonCli from "jison/lib/cli.js";

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

const AUTOCOMPLETE_PARSER_JSDOC = `/**
 * @param {string} input
 *
 * @return {AutocompleteParseResult}
 */
`;

const PARSING_FOLDER = '../parsing';
const PARSERS_FOLDER = `${PARSING_FOLDER}/parsers`;

async function getConcatenatedContent(sources) {
  const contents = [];

  for (const source of sources) {
    contents.push(await readFile(source));
  }

  return contents.join();
}

/**
 * Searches through the SQL_FOLDER and if a jison/structure.json file exists it considers it a parser
 */
async function findParserSources() {
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
}

/**
 * Identifies all the SQL parsers based on subfolders in SQL_FOLDER and adds them to parserDefinitions
 */
export async function identifySqlParsers() {
  const parserSources = await findParserSources();
  const foundDefinitions = {};

  for (const parserSource of parserSources) {
    const structure = JSON.parse(await readFile(parserSource.structureFile));
    if (!structure.autocomplete) {
      console.log("parser definition doesn't have autocomplete");
      continue
    }

    foundDefinitions[`${parserSource.dialect}AutocompleteParser`] = await createParserDefinition(
      structure.autocomplete,
      parserSource,
      true,
      structure
    );
  }

  return { ...foundDefinitions };
}

async function createParserDefinition(
  sources,
  { dialect, outputFolder, jisonFolder },
  autocomplete,
  { lexer, imports }
) {
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
            : `import { extendParser } from './parser-extension';\n\nexport let ${parserName} = `
        )
        // Add jsdoc to the parse function
        .replace('parse: function parse', AUTOCOMPLETE_PARSER_JSDOC + 'parse: function parse')
        // Fix a bug in jison (https://github.com/zaach/jison/pull/356)
        .replace(
          'loc: yyloc,',
          "loc: lexer.yylloc, ruleId: stack.slice(stack.length - 2, stack.length).join(''),"
        )}\n`
  };
}

function findParsersToGenerateFromArgs(parserDefinitions) {
  process.argv.shift(); // drop "node"
  process.argv.shift(); // drop "generateParsers.js"

  const foundDefinitions = new Set();
  const invalid = [];

  if (process.argv[0] === 'all') {
    Object.values(parserDefinitions).forEach(definition => foundDefinitions.add(definition));
  } else {
    process.argv.forEach(arg => {
      if (parserDefinitions[arg]) {
        foundDefinitions.add(parserDefinitions[arg]);
      } else {
        let found = false;
        Object.keys(parserDefinitions).forEach(key => {
          if (key.indexOf(arg) === 0) {
            found = true;
            foundDefinitions.add(parserDefinitions[key]);
          }
        });
        if (!found) {
          invalid.push(arg);
        }
      }
    });
  }

  if (invalid.length) {
    throw new Error(`Could not find parser definitions for '${invalid.join(", '")}'`);
  }

  return [...foundDefinitions];
}

export async function generateParser(parserDefinition) {
  const jisonContents = await getConcatenatedContent(parserDefinition.sources);
  await writeFile(parserDefinition.targetJison, jisonContents);

  const generatedParserFileName = `${parserDefinition.parserName}.js`;
  const options = {
    file: parserDefinition.targetJison,
    outfile: generatedParserFileName,
    'module-type': 'js'
  };
  if (parserDefinition.lexer) {
    options.lexfile = parserDefinition.lexer;
  }

  try {
    jisonCli.main(options); // Writes the generated parser in the current folder
  } catch (err) {
    console.error('Failed calling jison cli');
    throw err;
  }

  // Remove the concatenated jison file
  deleteFile(parserDefinition.targetJison);

  const generatedFileContents = await readFile(generatedParserFileName);
  const modifiedContents = await parserDefinition.afterParse(generatedFileContents);

  // Write a modified version of the parser to the defined outputFolder
  await writeFile(`${parserDefinition.outputFolder}/${generatedParserFileName}`, modifiedContents);

  // Remove the generated parser
  deleteFile(generatedParserFileName);
}

export async function generateParsers() {
  console.log('Identifying parsers...');
  const parserDefinitions = await identifySqlParsers();

  const definitionsToGenerate = findParsersToGenerateFromArgs(parserDefinitions);
  const totalParserCount = definitionsToGenerate.length;
  if (totalParserCount > 1) {
    console.log(`Generating ${totalParserCount} parser(s)...`);
  }

  for (let i = 0; i < definitionsToGenerate.length; i++) {
    const parserDefinition = definitionsToGenerate[i];
    console.log(
        `Generating "${parserDefinition.parserName}"${
            definitionsToGenerate.length > 1 ? ` (${i + 1}/${totalParserCount})` : ''
        }...`
    );
    await generateParser(parserDefinition);
  }

  console.log('Done!');
}
