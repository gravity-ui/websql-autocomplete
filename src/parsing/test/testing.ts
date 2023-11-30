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

// Needed to compare by val without taking attr order into account
import {existsSync, readFileSync} from 'fs';

import type {MatcherFunction} from '@jest/expect';
import {beforeAll, describe, expect, it} from '@jest/globals';

import type {ParseResult} from '..';
import {AutocompleteParser} from '../lib/types';

interface ExpectedError {
    text: string;
    token: string;
    loc: {
        first_line: number;
        last_line: number;
        first_column: number;
        last_column: number;
    };
}

export interface TestCase {
    namePrefix: string; // ex. "should suggest keywords"
    beforeCursor: string;
    afterCursor: string;
    containsKeywords?: string[];
    doesNotContainKeywords?: string[];
    containsColRefKeywords?: boolean | string[];
    noErrors?: boolean;
    locationsOnly?: boolean;
    noLocations?: boolean;
    expectedDefinitions: unknown;
    expectedLocations?: ParseResult['locations'];
    expectedResult: {
        lowerCase?: boolean;
        locations?: ParseResult['locations'];
        suggestTables?: {
            identifierChain?: {name: string}[];
            onlyTables?: boolean;
        };
        suggestDatabases?: {
            appendDot?: boolean;
        };
        suggestTemplates?: boolean;
    };
    expectedErrors?: ExpectedError[];
}

interface GroupedTestCases {
    jisonFile: string;
    testCases: TestCase[];
}

export function getToEqualAutocompleteValues(
    actualItems: {value: string}[],
    expectedValues: string[],
): ReturnType<MatcherFunction> {
    if (actualItems.length !== expectedValues.length) {
        return {pass: false, message: () => 'items length is not equal'};
    }

    for (let i = 0; i < expectedValues.length; i++) {
        const stringValue =
            typeof actualItems[i] !== 'string'
                ? String(actualItems[i]?.value)
                : actualItems[i]?.value;
        if (stringValue !== expectedValues[i]) {
            return {
                pass: false,
                message: () => `got '${stringValue}', but expected '${expectedValues}'`,
            };
        }
    }

    return {pass: true, message: () => 'test'};
}

export function toEqualDefinition(
    actualResponse: Partial<ParseResult>,
    testDefinition: TestCase,
): ReturnType<MatcherFunction> {
    if (
        typeof testDefinition.noErrors === 'undefined' &&
        actualResponse.errors &&
        !testDefinition.expectedErrors
    ) {
        let allRecoverable = true;
        actualResponse.errors.forEach((error) => {
            allRecoverable = allRecoverable && error.recoverable;
        });
        if (allRecoverable) {
            delete actualResponse.errors;
        }
    }

    if (testDefinition.noErrors && actualResponse.errors) {
        return {
            pass: false,
            message: constructTestCaseMessage(testDefinition, {
                Expected: 'no errors',
                'Found errors': actualResponse.errors,
            }),
        };
    }

    if (
        (testDefinition.expectedResult?.locations || testDefinition.expectedLocations) &&
        actualResponse.locations
    ) {
        const expectedLoc =
            testDefinition.expectedLocations || testDefinition.expectedResult.locations;
        const expectsType = expectedLoc?.some((location) => location.type === 'statementType');
        if (!expectsType) {
            actualResponse.locations = actualResponse.locations.filter(
                (location) => location.type !== 'statementType',
            );
        }
    }

    if (testDefinition.expectedDefinitions) {
        if (!resultEquals(actualResponse.definitions, testDefinition.expectedDefinitions)) {
            return {
                pass: false,
                message: constructTestCaseMessage(testDefinition, {
                    'Expected definitions': testDefinition.expectedDefinitions,
                    'Found definitions': actualResponse.definitions,
                }),
            };
        }
    } else {
        delete actualResponse.definitions;
    }

    if (testDefinition.locationsOnly) {
        return {
            pass: resultEquals(actualResponse.locations, testDefinition.expectedLocations),
            message: constructTestCaseMessage(testDefinition, {
                Expected: 'only locations',
                Found: 'other fields',
            }),
        };
    }

    if (actualResponse.suggestKeywords) {
        const weightFreeKeywords: ParseResult['suggestKeywords'] = [];
        actualResponse.suggestKeywords.forEach((keyword) => {
            if (typeof keyword !== 'string') {
                // This file is going to be obsolete in 2 weeks, when we rewrite tests
                // @ts-ignore
                weightFreeKeywords.push(keyword.value);
            }
        });
        actualResponse.suggestKeywords = weightFreeKeywords;
    }

    if (testDefinition.noLocations) {
        if (actualResponse.locations && actualResponse.locations.length > 0) {
            return {
                pass: false,
                message: constructTestCaseMessage(testDefinition, {
                    'Expected locations': 'none',
                    'Found locations': actualResponse.locations?.length,
                }),
            };
        }
    }
    if (!testDefinition.expectedResult?.locations) {
        delete actualResponse.locations;
    }
    let deleteKeywords = false;
    if (testDefinition.containsColRefKeywords) {
        const actualSuggestColRefKeywords = actualResponse.suggestColRefKeywords;

        if (typeof actualSuggestColRefKeywords === 'undefined') {
            return {
                pass: false,
                message: constructTestCaseMessage(testDefinition, {
                    'colRef keywords': 'not found',
                }),
            };
        } else if (testDefinition.containsColRefKeywords !== true) {
            let contains = true;
            testDefinition.containsColRefKeywords.forEach((keyword) => {
                contains =
                    contains &&
                    (actualSuggestColRefKeywords.BOOLEAN?.indexOf(keyword) !== -1 ||
                        actualSuggestColRefKeywords.NUMBER?.indexOf(keyword) !== -1 ||
                        actualSuggestColRefKeywords.STRING?.indexOf(keyword) !== -1);
            });
            if (!contains) {
                return {
                    pass: false,
                    message: constructTestCaseMessage(testDefinition, {
                        'Expected colRef keywords': testDefinition.containsColRefKeywords,
                        'Parser colRef keywords': actualResponse.suggestColRefKeywords,
                    }),
                };
            }
        }
        delete actualResponse.suggestColRefKeywords;
    }

    if (typeof testDefinition.containsKeywords !== 'undefined') {
        const keywords = actualResponse.suggestKeywords;
        let contains = true;
        testDefinition.containsKeywords.forEach((keyword): boolean | void => {
            // This file is going to be obsolete in 2 weeks, when we rewrite tests
            // @ts-ignore
            if (typeof keywords === 'undefined' || keywords.indexOf(keyword) === -1) {
                contains = false;
                return false;
            }
        });
        if (!contains) {
            return {
                pass: false,
                message: constructTestCaseMessage(testDefinition, {
                    'Expected keywords': testDefinition.containsKeywords,
                    'Found keywords': keywords,
                }),
            };
        }
        deleteKeywords = true;
    }
    if (typeof testDefinition.doesNotContainKeywords !== 'undefined') {
        const keywords = actualResponse.suggestKeywords || [];
        let contains = false;
        testDefinition.doesNotContainKeywords.forEach((keyword): boolean | void => {
            // This file is going to be obsolete in 2 weeks, when we rewrite tests
            // @ts-ignore
            if (typeof keywords === 'undefined' || keywords.indexOf(keyword) !== -1) {
                contains = true;
                return false;
            }
        });
        if (contains) {
            return {
                pass: false,
                message: constructTestCaseMessage(testDefinition, {
                    'Not expected keywords': testDefinition.doesNotContainKeywords,
                    'Found keywords': keywords,
                }),
            };
        }
        deleteKeywords = true;
    }

    if (deleteKeywords) {
        delete actualResponse.suggestKeywords;
    }

    if (
        testDefinition.expectedResult &&
        typeof testDefinition.expectedResult.lowerCase === 'undefined'
    ) {
        testDefinition.expectedResult.lowerCase = false;
    }

    if (testDefinition.expectedErrors) {
        if (!Array.isArray(testDefinition.expectedErrors)) {
            return {
                pass: false,
                message: constructTestCaseMessage(testDefinition, {
                    expectedErrors: 'should be an array',
                }),
            };
        }

        if (!actualResponse.errors) {
            return {
                pass: false,
                message: constructTestCaseMessage(testDefinition, {
                    'Expected errors': testDefinition.expectedErrors,
                    'Parser errors': 'none',
                }),
            };
        }

        const filteredResponseErrors = actualResponse.errors.map(
            (responseError: Record<string, any>, index) => {
                if (!testDefinition.expectedErrors) {
                    return {};
                }

                // This file is going to be obsolete in 2 weeks, when we rewrite tests
                // @ts-ignore
                const expectedKeys = Object.keys(testDefinition.expectedErrors[index]);
                return expectedKeys.reduce<Record<string, any>>((acc, expectedKey) => {
                    acc[expectedKey] = responseError[expectedKey];
                    return acc;
                }, {});
            },
        );

        if (!resultEquals(testDefinition.expectedErrors, filteredResponseErrors)) {
            return {
                pass: false,
                message: constructTestCaseMessage(testDefinition, {
                    'Expected errors': testDefinition.expectedErrors,
                    'Parser errors': filteredResponseErrors,
                }),
            };
        }

        delete actualResponse.errors;
    }

    if (testDefinition.expectedResult?.suggestTemplates === undefined) {
        delete actualResponse.suggestTemplates;
    }
    if (testDefinition.expectedResult?.suggestTemplates === false) {
        if (actualResponse.suggestTemplates) {
            return {
                pass: false,
                message: constructTestCaseMessage(testDefinition, {
                    'Expected suggestTemplates': 'false',
                }),
            };
        }
        delete testDefinition.expectedResult.suggestTemplates;
    }

    return {
        pass:
            !testDefinition.expectedResult ||
            resultEquals(actualResponse, testDefinition.expectedResult),
        message: constructTestCaseMessage(testDefinition, {
            'Expected result': testDefinition.expectedResult,
            'Parser result': actualResponse,
        }),
    };
}

function constructTestCaseMessage(testCase: TestCase, details: Record<string, any>): () => string {
    let message = `- Query: ${testCase.beforeCursor + '|' + testCase.afterCursor} \n`;

    for (const key in details) {
        if (Object.prototype.hasOwnProperty.call(details, key)) {
            let value = details[key];
            if (value === undefined) {
                value = 'undefined';
            } else if (typeof value !== 'string') {
                value = jsonStringToJsString(JSON.stringify(value));
            }

            message += `- ${key}: ${value} \n`;
        }
    }

    return () => message;
}

function resultEquals(a: any, b: any): boolean {
    if (typeof a !== typeof b) {
        return false;
    }

    if (a === b) {
        return true;
    }

    if (typeof a === 'object' && a !== null) {
        const aKeys = Object.keys(a);
        if (aKeys.length !== Object.keys(b).length) {
            return false;
        }

        for (let i = 0; i < aKeys.length; i++) {
            const aKey = aKeys[i];

            if (aKey === undefined) {
                return false;
            }

            if (!resultEquals(a[aKey], b[aKey])) {
                return false;
            }
        }

        return true;
    }

    return a == b;
}

function jsonStringToJsString(jsonString: string): string {
    return jsonString
        .replace(/'([a-zA-Z]+)':/g, (_, group) => {
            return group + ':';
        })
        .replace(/([:{,])/g, (_, group) => {
            return group + ' ';
        })
        .replace(/[}]/g, ' }')
        .replace(/["]/g, "'")
        .replace(/'([a-z_]+)':/gi, '$1:');
}

/*
Finds and parses x.test.json files given a list of jison files.
For example, if alter_table.jison is part of the structure it will look for alter_table.test.json, and if it
exists it'll parse it (TestCase[]). Test cases are grouped per found .jison file.
 */
export function extractTestCases(
    jisonFolder: string,
    structureFiles: string[],
): GroupedTestCases[] {
    const groupedTestCases: GroupedTestCases[] = [];

    structureFiles.forEach((jisonFile) => {
        const testFile = `${jisonFolder}/${jisonFile.replace('.jison', '.test.json')}`;
        if (!existsSync(testFile)) {
            return;
        }

        const testCases = JSON.parse(readFileSync(testFile).toString()) as TestCase[];
        groupedTestCases.push({jisonFile, testCases});
    });

    return groupedTestCases;
}

function createAssertForAutocomplete(
    parser: AutocompleteParser,
    debug = false,
): (testCase: TestCase) => void {
    return (testCase: TestCase) => {
        expect(
            parser.parseSql(testCase.beforeCursor, testCase.afterCursor, debug),
        ).toEqualDefinition(testCase);
    };
}

function prettyLineBreaks(text: string): string {
    return text.replace(/\n/g, '\\n').replace(/\r/g, '\\r');
}

export function runTestCases(
    autocompleteParser: AutocompleteParser,
    groupedTestCases: GroupedTestCases[],
    debug = false,
): void {
    beforeAll(() => {
        // This guarantees that any parse errors are actually thrown
        (
            autocompleteParser as unknown as {yy: {parseError: (msg?: string) => void}}
        ).yy.parseError = (msg): void => {
            throw Error(msg);
        };
    });

    const assertTestCase = createAssertForAutocomplete(autocompleteParser, debug);

    groupedTestCases.forEach(({jisonFile, testCases}) => {
        // Each group (jison file) gets its own describe
        describe(jisonFile, () => {
            testCases.forEach((testCase) => {
                it(`${testCase.namePrefix} given "${prettyLineBreaks(
                    testCase.beforeCursor,
                )}|${prettyLineBreaks(testCase.afterCursor)}"`, () => {
                    assertTestCase(testCase);
                });
            });
        });
    });
}
