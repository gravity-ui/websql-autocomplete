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

import {deleteFile, fileExists, listDir, readFile, writeFile} from './files';
import jisonCli, {JisonOptions} from 'jison/lib/cli.js';

interface StructureFileObject {
    dialect: string;
    outputFolder: string;
    jisonFolder: string;
    structureFile: string;
}

interface ParserDefinition {
    sources: string[];
    lexer: string;
    concatenatedJisonFileName: string;
    sqlParser: 'AUTOCOMPLETE';
    parserName: string;
    outputFolder: string;
    extendParser: (content: string) => Promise<string>;
}

interface ParserStructure {
    lexer: string;
    imports: string[];
}

function getLicenseText(): string {
    return `// Licensed to Cloudera, Inc. under one
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
}

export function createFullParserName(shortName: string): string {
    return `${shortName}AutocompleteParser`;
}

async function concatinateJisonFiles(sources: string[]): Promise<string> {
    const contents = [];

    for (const source of sources) {
        contents.push(await readFile(source));
    }

    return contents.join();
}

/**
 * Searches through the SQL_FOLDER and if a jison/structure.json file exists it considers it a parser
 */
async function getParserStructureFiles(): Promise<StructureFileObject[]> {
    const parsersFolder = `../parsing/parsers`;

    const folders = await listDir(parsersFolder);
    const structureFiles = [];

    for (const folder of folders) {
        const outputFolder = `${parsersFolder}/${folder}`;
        const jisonFolder = `${outputFolder}/jison`;
        const structureFile = `${jisonFolder}/structure.json`;

        if (fileExists(structureFile)) {
            structureFiles.push({dialect: folder, outputFolder, jisonFolder, structureFile});
        }
    }

    return structureFiles;
}

/**
 * Identifies all the SQL parsers based on subfolders in SQL_FOLDER and adds them to parserDefinitions
 */
async function getAvailableParserDefinitions(): Promise<Map<string, ParserDefinition>> {
    const parserSources = await getParserStructureFiles();
    const foundDefinitions = new Map<string, ParserDefinition>();

    for (const parserSource of parserSources) {
        const structure = JSON.parse(await readFile(parserSource.structureFile));
        if (!structure.autocomplete) {
            console.log("parser definition doesn't have autocomplete");
            continue;
        }

        const parserDefinition = await createParserDefinition(
            structure.autocomplete,
            parserSource,
            structure,
        );
        foundDefinitions.set(createFullParserName(parserSource.dialect), parserDefinition);
    }

    return foundDefinitions;
}

async function createParserDefinition(
    sources: string[],
    {dialect, outputFolder, jisonFolder}: StructureFileObject,
    {lexer, imports}: ParserStructure,
): Promise<ParserDefinition> {
    const parserName = createFullParserName(dialect);

    const absoluteSources = sources.map((source) => `${jisonFolder}/${source}`);
    for (const source of absoluteSources) {
        if (!fileExists(source)) {
            throw new Error(
                `Could not find the file '${source}' as defined in structure.json for ${dialect}`,
            );
        }
    }

    return {
        sources: sources.map((source) => `${jisonFolder}/${source}`),
        lexer: `${jisonFolder}/${lexer}`,
        concatenatedJisonFileName: `${outputFolder}/${parserName}.jison`,
        sqlParser: 'AUTOCOMPLETE',
        parserName,
        outputFolder,
        extendParser: async (content) => {
            let fixedContents = content
                .replace(
                    `var ${parserName} = `,
                    imports
                        ? `${imports.join(';\n')};\n\n$var ${parserName} = `
                        : `import { extendParser } from './parser-extension';\n\n/** @type {any} */\nexport let ${parserName} = `,
                )
                // Fix a bug in jison (https://github.com/zaach/jison/pull/356)
                .replace(
                    'loc: yyloc,',
                    "loc: lexer.yylloc, ruleId: stack.slice(stack.length - 2, stack.length).join(''),",
                );
            return `${getLicenseText()}${fixedContents}\n`;
        },
    };
}

async function findParserDefinitions(parserNames: string[]): Promise<ParserDefinition[]> {
    const availableParsers = await getAvailableParserDefinitions();

    const foundParsers: ParserDefinition[] = [];

    parserNames.forEach((parserName) => {
        const parserDefinition = availableParsers.get(parserName);

        if (parserDefinition) {
            foundParsers.push(parserDefinition);
        }
    });

    return foundParsers;
}

function runJisonCli(parserDefinition: ParserDefinition, parserFileName: string): void {
    const options: JisonOptions = {
        file: parserDefinition.concatenatedJisonFileName,
        outfile: parserFileName,
        'module-type': 'js',
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
}

async function generateJisonParser(
    parserDefinition: ParserDefinition,
    outputFileName: string,
): Promise<string> {
    const jisonContents = await concatinateJisonFiles(parserDefinition.sources);
    await writeFile(parserDefinition.concatenatedJisonFileName, jisonContents);

    runJisonCli(parserDefinition, outputFileName);
    const generatedFileContents = await readFile(outputFileName);

    deleteFile(parserDefinition.concatenatedJisonFileName);
    deleteFile(outputFileName);

    return generatedFileContents;
}

async function extendParser(
    astFileContents: string,
    parserDefinition: ParserDefinition,
    outputFileName: string,
): Promise<void> {
    const modifiedContents = await parserDefinition.extendParser(astFileContents);
    await writeFile(outputFileName, modifiedContents);
}

async function generateParser(parserDefinition: ParserDefinition): Promise<void> {
    const parserFileName = `${parserDefinition.parserName}.js`;
    let outputFileName = `${parserDefinition.outputFolder}/${parserFileName}`;

    const jisonParserContents = await generateJisonParser(parserDefinition, parserFileName);
    await extendParser(jisonParserContents, parserDefinition, outputFileName);
}

export async function generateParsers(parserNames: string[]): Promise<void> {
    const parserDefinitions = await findParserDefinitions(parserNames);
    if (parserNames.length !== parserDefinitions.length) {
        throw new Error(`Could not find all requested parser definitions`);
    }

    for (let i = 0; i < parserDefinitions.length; i++) {
        console.log(`Generating ${parserDefinitions[i].parserName}`);
        await generateParser(parserDefinitions[i]);
    }
}
