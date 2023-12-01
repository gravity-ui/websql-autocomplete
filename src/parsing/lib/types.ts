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

import {KeywordSuggestion} from '../index';

export interface IdentifierChainEntry {
    name?: string;
    asterisk?: boolean;
    cte?: string;
    subQuery?: string;
}

export interface SubQuery {
    alias: string;
    columns: ColumnDetails[];
    subQueries?: SubQuery[];
}

export interface ParsedTable {
    alias?: string;
    identifierChain: IdentifierChainEntry[];
    subQuery?: SubQuery; // TODO: Define
}

export interface ParsedLocation {
    first_line: number;
    first_column: number;
    last_line: number;
    last_column: number;
}

export interface IdentifierLocation {
    identifier?: string;
    type: string;
    alias?: string;
    source?: string;
    location: ParsedLocation;
    function?: string;
    missing?: boolean;
    value?: string;
    active?: boolean;
    tables?: ParsedTable[];
    colRef?: boolean | {identifierChain: IdentifierChainEntry[]; tables: ParsedTable[]};
    argumentPosition?: number;
    identifierChain?: IdentifierChainEntry[];
    expression?: AwaitedTokenExpression;
    parentLocation?: ParsedLocation;
    path?: string;
    qualified?: boolean;
    columns?: ColumnDetails[];
    subquery?: boolean;
    suffix?: string;
}

export interface ColumnAliasDetails {
    name: string;
    udfRef?: string;
    types: string[];
}

export interface ColumnDetails {
    type?: string | string[];
    identifierChain?: IdentifierChainEntry[];
    location?: ParsedLocation;
    alias?: string;
    subQuery?: string;
    udfRef?: string;
}

export interface CommonPopularSuggestion {
    tables: ParsedTable[];
    prefix?: string;
}

export interface AutocompleteParseResult {
    colRef?: {
        identifierChain: IdentifierChainEntry[];
    };
    commonTableExpressions?: {
        alias: string;
        columns: ColumnDetails[];
    }[];
    locations: IdentifierLocation[];
    lowerCase: boolean;
    subQueries: SubQuery[];
    suggestAggregateFunctions?: {
        tables: ParsedTable[];
    };
    suggestAnalyticFunctions?: boolean;
    suggestColRefKeywords?: {
        [type: string]: string[];
    };
    suggestColumnAliases?: ColumnAliasDetails[];
    suggestColumns?: SuggestColumns;
    suggestCommonTableExpressions?: {
        appendBacktick?: boolean;
        name: string;
        prependFrom: boolean;
        prependQuestionMark: boolean;
    }[];
    suggestDatabases?: {
        appendBacktick?: boolean;
        appendDot?: boolean;
        prependFrom?: boolean;
        prependQuestionMark?: boolean;
    };
    suggestFilters?: {
        tables: ParsedTable[];
        prefix?: string;
    };
    suggestFunctions?: SuggestFunctions;
    suggestGroupBys?: CommonPopularSuggestion;
    suggestHdfs?: {
        path: string;
    };
    suggestJoins?: {
        prependJoin?: boolean;
        tables: ParsedTable[];
    };
    suggestJoinConditions?: {
        prependOn?: boolean;
        tables: ParsedTable[];
    };
    suggestIdentifiers?: {
        name: string;
        type: string;
    }[];
    suggestKeyValues?: unknown;
    suggestKeywords?: {
        value: string;
        weight: number;
    }[];
    suggestOrderBys?: CommonPopularSuggestion;
    suggestSetOptions?: boolean;
    suggestTables?: {
        appendBacktick?: boolean;
        identifierChain?: IdentifierChainEntry[];
        onlyTables?: boolean;
        onlyViews?: boolean;
        prependFrom?: boolean;
        prependQuestionMark?: boolean;
    };
    suggestValues?: {
        missingEndQuote?: boolean;
        partialQuote?: boolean;
    };
    udfArgument?: {
        name: string;
        position: number;
    };
    useDatabase?: string;
}

export interface AutocompleteParser {
    parseSql(beforeCursor: string, afterCursor: string, debug?: boolean): AutocompleteParseResult;
}

export interface ParserContext {
    SELECT_FIRST_OPTIONAL_KEYWORDS: KeywordSuggestion[];
    KEYWORDS: Record<string, string[]>;
    yy: {
        result: AutocompleteParseResult;
        cursorFound: {
            first_line: number;
            last_line: number;
            last_column: number;
            first_column: number;
        };
        partialLengths: PartialLengths;
        partialCursor: unknown;
        primariesStack: unknown[];
        locations: IdentifierLocation[];
        definitions: IdentifierLocation[];
        allLocations: IdentifierLocation[];
    };

    parse(beforeCursor: string, afterCursor: string): AutocompleteParseResult;
    addAsteriskLocation(location: ParsedLocation, identifierChain: IdentifierChainEntry[]): void;
    addClauseLocation(
        type: string,
        precedingLocation: ParsedLocation,
        locationIfPresent: ParsedLocation,
        isCursor: boolean,
    ): void;
    isInSubquery(): boolean;
    addColumnAliasLocation(
        location: ParsedLocation,
        alias: string,
        parentLocation: ParsedLocation,
    ): void;
    addColumnLocation(location: ParsedLocation, identifierChain: IdentifierChainEntry[]): void;
    addCteAliasLocation(location: ParsedLocation, alias: string): void;
    addDatabaseLocation(location: ParsedLocation, identifierChain: IdentifierChainEntry[]): void;
    addFileLocation(location: ParsedLocation, path: string): void;
    addFunctionLocation(location: ParsedLocation, functionName: string): void;
    addFunctionArgumentLocations(
        functionName: string,
        expressions: TokenExpressionWithLocation[],
        identifierChain: IdentifierChainEntry[],
    ): void;
    addNewDatabaseLocation(location: ParsedLocation, identifierChain: IdentifierChainEntry[]): void;
    addNewTableLocation(
        location: ParsedLocation,
        identifierChain: IdentifierChainEntry[],
        colSpec: ColumnSpecification[],
    ): void;
    addStatementLocation(location: ParsedLocation): void;
    addStatementTypeLocation(
        identifier: string,
        location: ParsedLocation,
        additionalText: string,
    ): void;
    addSubqueryAliasLocation(location: ParsedLocation, alias: string): void;
    addTableAliasLocation(
        location: ParsedLocation,
        alias: string,
        identifierChain: IdentifierChainEntry[],
    ): void;
    addTableLocation(location: ParsedLocation, identifierChain: IdentifierChainEntry[]): void;
    addVariableLocation(location: ParsedLocation, value: string): void;
    addUnknownLocation(
        location: ParsedLocation,
        identifierChain: IdentifierChainEntry[],
    ): IdentifierLocation;
    applyTypes(suggestion: SuggestFunctions | SuggestColumns, typeDetails: TypeDetails): void;
    applyTypeToSuggestions(details: TypeDetails): void;
    extractExpressionText(result: TokenExpression, ...expressions: AwaitedTokenExpression[]): void;
    getSubQuery(cols: SubQuery): {
        columns: ColumnDetails[];
    };
    identifyPartials(beforeCursor: string, afterCursor: string): PartialLengths;
    suggestKeywords(keywords: string | Array<string | KeywordSuggestion>): void;
    valueExpressionSuggest(oppositeValueExpression?: ValueExpression, operator?: string): void;
    suggestColumns(...args: unknown[]): unknown;
    suggestFunctions(...args: unknown[]): unknown;
    suggestValues(...args: unknown[]): unknown;
}

export interface ColumnSpecification {
    identifier: IdentifierChainEntry;
    location: ParsedLocation;
    type: string;
}

export interface SuggestFunctions {
    types: string[];
    udfRef?: string;
}

export interface SuggestColumns {
    appendBacktick?: boolean;
    identifierChain?: IdentifierChainEntry[];
    source?: string;
    tables: ParsedTable[];
    types?: string[];
    udfRef?: string;
}

export interface TypeDetails {
    types: string[];
    function: string;
}

interface ColumnReference {
    name: string;
}

interface ColumnTokenExpression {
    columnReference: ColumnReference[];
}

export interface TokenExpression {
    text: string;
}

export type AwaitedTokenExpression = number | string | ColumnTokenExpression | TokenExpression;

export interface TokenExpressionWithLocation {
    location: ParsedLocation;
    expression: AwaitedTokenExpression;
    suffix?: string;
}

export interface SubQuery {
    selectList: Array<{
        alias?: string;
        asterisk?: boolean;
        valueExpression: ValueExpression;
        columnReference: Array<{
            name: string;
        }>;
    }>;
    tableExpression: {
        tableReferenceList: {
            primary: {
                identifierChain: IdentifierChainEntry[];
            };
            suggestKeywords: string[];
            suggestJoins: {
                prependJoin: boolean;
                tables: Array<{
                    identifierChain: IdentifierChainEntry;
                }>;
            };
        };
    };
}

export interface PartialLengths {
    left: number;
    right: number;
    backtickBefore: unknown;
    backtickAfter: unknown;
}

export interface ValueExpression {
    types: string[];
    columnReference: ColumnReference[];
    function: string;
}
