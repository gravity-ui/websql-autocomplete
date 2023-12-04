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

import {KeywordSuggestion, WeightedKeywordSuggestion} from '../index';

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
    identifierChain?: IdentifierChainEntry[];
    owner?: string;
    subQuery?: string;
    subQueryAlias?: string;
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
    colRef?: {
        identifierChain: IdentifierChainEntry[];
        tables?: ParsedTable[];
        linked?: boolean;
        owner?: string;
    };
    argumentPosition?: number;
    identifierChain?: IdentifierChainEntry[];
    expression?: AwaitedTokenExpression;
    parentLocation?: ParsedLocation;
    path?: string;
    qualified?: boolean;
    columns?: ColumnDetails[];
    subquery?: boolean;
    suffix?: string;
    linked?: boolean;
    firstInChain?: unknown;
    target?: unknown;
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
    tables?: ParsedTable[];
    tablePrimaries?: ParsedTable[];
    prefix?: string;
    linked?: boolean;
}

export interface SuggestHdfs {
    path: string;
}

export interface AutocompleteParseResult {
    colRef?: {
        identifierChain: IdentifierChainEntry[];
        linked?: boolean;
    };
    commonTableExpressions?: IdentifierLocation[];
    locations: IdentifierLocation[];
    lowerCase: boolean;
    subQueries: SubQuery[];
    suggestAggregateFunctions?: {
        tables?: ParsedTable[];
        tablePrimaries?: ParsedTable[];
        linked?: boolean;
    };
    suggestAnalyticFunctions?: boolean;
    suggestColRefKeywords?: {
        [type: string]: string[];
    };
    suggestColumnAliases?: ColumnAliasDetails[];
    suggestColumns?: SuggestColumns;
    suggestCommonTableExpressions?: IdentifierSuggestion[];
    suggestDatabases?: SuggestDatabases;
    suggestFilters?: FiltersSuggestion;
    suggestFunctions?: SuggestFunctions;
    suggestGroupBys?: CommonPopularSuggestion;
    suggestHdfs?: SuggestHdfs;
    suggestJoins?: JoinsSuggestion;
    suggestJoinConditions?: JoinConditionsSuggestion;
    suggestIdentifiers?: IdentifierSuggestion[];
    suggestKeyValues?: KeyValuesSuggestion;
    suggestKeywords?: WeightedKeywordSuggestion[];
    suggestOrderBys?: CommonPopularSuggestion;
    suggestSetOptions?: boolean;
    suggestTables?: TablesSuggestion;
    suggestValues?: {
        missingEndQuote?: boolean;
        partialQuote?: boolean;
    };
    udfArgument?: {
        name: string;
        position: number;
    };
    useDatabase?: string;
    error?: {
        expected?: string[];
        recoverable?: boolean;
    };
    errors?: ErrorLocation[];
    definitions?: IdentifierLocation[];
    suggestTemplates?: boolean;
    suggestEngines?: {
        engines: string[];
        functionalEngines: string[];
    };
}

export interface AutocompleteParser {
    parseSql(beforeCursor: string, afterCursor: string, debug?: boolean): AutocompleteParseResult;
}

export interface ParserContext {
    SELECT_FIRST_OPTIONAL_KEYWORDS: KeywordSuggestion[];
    KEYWORDS: Record<string, string[]>;
    yy: {
        result: Partial<AutocompleteParseResult>;
        cursorFound?: {
            first_line: number;
            last_line: number;
            last_column: number;
            first_column: number;
        };
        partialLengths: PartialLengths;
        partialCursor: unknown;
        primariesStack: ParsedTable[][];
        locations: IdentifierLocation[];
        definitions: IdentifierLocation[];
        allLocations: IdentifierLocation[];
        latestCommonTableExpressions?: IdentifierLocation[];
        correlatedSubQuery?: unknown;
        subQueries: SubQuery[];
        selectListAliases: ColumnAliasDetails[];
        latestTablePrimaries: ParsedTable[];
        errors: ErrorLocation[];
        resultStack: Partial<AutocompleteParseResult>[];
        locationsStack: IdentifierLocation[][];
        selectListAliasesStack: ColumnAliasDetails[][];
        subQueriesStack: SubQuery[][];
        activeDialect: string;
        lowerCase: boolean;
        caseDetermined: unknown;
        missingEndQuote: boolean;
        parseError(message: string, error: ErrorLocation): void;
    };

    parse(beforeCursor: string, afterCursor?: string): AutocompleteParseResult;
    parseSql(
        beforeCursor: string,
        afterCursor: string,
        debug: boolean,
    ): Partial<AutocompleteParseResult>;
    lexer: Lexer;
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
    applyTypes(suggestion: SuggestFunctions | SuggestColumns, typeDetails: ValueExpression): void;
    applyTypeToSuggestions(details: ValueExpression): void;
    extractExpressionText(result: TokenExpression, ...expressions: AwaitedTokenExpression[]): void;
    getSubQuery(cols: SubQuery): {
        columns: ColumnDetails[];
    };
    identifyPartials(beforeCursor: string, afterCursor: string): PartialLengths;
    suggestKeywords(keywords: Array<string | KeywordSuggestion>): void;
    valueExpressionSuggest(oppositeValueExpression?: ValueExpression, operator?: string): void;
    suggestColumns(details?: SuggestColumns): unknown;
    suggestFunctions(...args: unknown[]): unknown;
    suggestValues(...args: unknown[]): unknown;
    prepareNewStatement(): void;
    commitLocations(): void;
    addCommonTableExpressions(identifiers: IdentifierLocation[]): void;
    pushQueryState(): void;
    popQueryState(subQuery: SubQuery): void;
    suggestSelectListAliases(): void;
    mergeSuggestKeywords(): void;
    suggestValueExpressionKeywords(
        valueExpression: ValueExpression,
        extras: Array<KeywordSuggestion | string>,
    ): void;
    addColRefIfExists(valueExpression: ValueExpression): void;
    getValueExpressionKeywords(
        valueExpression: ValueExpression,
        extras?: KeywordSuggestion[],
    ): {suggestKeywords: KeywordSuggestion[]; suggestColRefKeywords?: SuggestColRefKeywords};
    getTypeKeywords(): KeywordSuggestion[];
    suggestColRefKeywords(keywords: SuggestColRefKeywords): void;
    getSelectListKeywords(excludeAsterisk?: boolean): KeywordSuggestion[];
    getColumnDataTypeKeywords(): KeywordSuggestion[];
    selectListNoTableSuggest(
        selectListEdit: ValueExpression,
        hasDistinctOrAll: ValueExpression | string,
    ): void;
    checkForKeywords(expression: ValueExpression): void;
    suggestAggregateFunctions(): void;
    suggestAnalyticFunctions(): void;
    suggestJoinConditions(details: JoinConditionsSuggestion): void;
    suggestJoins(details: JoinsSuggestion): void;
    findCaseType(whenThenList: ValueExpression): void;
    applyArgumentTypesToSuggestions(functionName: string, position: number): void;
    expandIdentifierChain(options: {
        wrapper?: {
            identifierChain?: IdentifierChainEntry[];
            owner?: string;
            tables?: ParsedTable[];
            linked?: boolean;
        };
        tablePrimaries?: ParsedTable[];
        isColumnWrapper?: boolean;
        isColumnLocation?: boolean;
        anyOwner?: boolean;
    }): void;
    createWeightedKeywords(
        keywords: KeywordSuggestion[] | undefined,
        weight: number,
    ): WeightedKeywordSuggestion[];
    addTablePrimary(ref: ParsedTable): void;
    suggestFileFormats(): void;
    getKeywordsForOptionalsLR(
        optionals: ValueExpression[],
        keywords: KeywordSuggestion[] | KeywordSuggestion[][],
        override: boolean[],
    ): void;
    suggestDdlAndDmlKeywords(extraKeywords: KeywordSuggestion[]): void;
    suggestTemplates(): void;
    checkForSelectListKeywords(selectList: ValueExpression[]): void;
    suggestFunctions(details: SuggestFunctions): void;
    suggestSetOptions(): void;
    suggestIdentifiers(identifiers?: IdentifierSuggestion[]): void;
    suggestColumns(details?: SuggestColumns): void;
    suggestGroupBys(details?: CommonPopularSuggestion): void;
    suggestOrderBys(details?: CommonPopularSuggestion): void;
    suggestFilters(details?: FiltersSuggestion): void;
    suggestKeyValues(details?: KeyValuesSuggestion): void;
    suggestTables(details?: TablesSuggestion): void;
    suggestTablesOrColumns(identifier?: string): void;
    firstDefined(...args: ParsedLocation[]): ParsedLocation | undefined;
    addColRefToVariableIfExists(left: ValueExpression, right: ValueExpression): void;
    suggestDatabases(details: SuggestDatabases): void;
    suggestHdfs(details: SuggestHdfs): void;
    determineCase(text: string): void;
    handleQuotedValueWithCursor(
        lexer: Lexer,
        yytext: string,
        yylloc: ParsedLocation,
        quoteChar: string,
    ): boolean;
    suggestEngines(): void;
}

export interface ColumnSpecification {
    identifier: IdentifierChainEntry;
    location: ParsedLocation;
    type: string;
}

export interface SuggestFunctions {
    types?: string[];
    udfRef?: string;
}

export interface SuggestDatabases {
    appendBacktick?: boolean;
    appendDot?: boolean;
    prependFrom?: boolean;
    prependQuestionMark?: boolean;
}

export interface SuggestColumns {
    appendBacktick?: boolean;
    identifierChain?: IdentifierChainEntry[];
    source?: string;
    tables?: ParsedTable[];
    types?: string[];
    udfRef?: string;
    linked?: boolean;
    owner?: string;
}

export interface ColumnReference {
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
    types?: string[];
    columnReference?: ColumnReference[];
    function?: string;
    suggestKeywords?: Array<KeywordSuggestion | string>;
    lastType?: ValueExpression;
    cursorAtStart?: boolean;
    inValueEdit?: boolean;
    suggestFunctions?: boolean;
    suggestColumns?: boolean;
    suggestAggregateFunctions?: boolean;
    suggestColRefKeywords?: SuggestColRefKeywords;
    caseTypes?: ValueExpression[];
    valueExpression?: ValueExpression;
    alias?: string;
}

export interface ErrorLocation {
    text?: unknown;
    token?: unknown;
    line?: unknown;
    loc?: unknown;
    ruleId?: unknown;
    expected?: unknown;
    recoverable?: unknown;
}

export type SuggestColRefKeywords = Record<string, string[]>;

export interface JoinConditionsSuggestion {
    prependOn?: boolean;
    tables?: ParsedTable[];
    tablePrimaries?: ParsedTable[];
    linked?: boolean;
}

export interface JoinsSuggestion {
    prependJoin: unknown;
    joinType: unknown;
    tables: ParsedTable[];
}

export interface IdentifierSuggestion {
    name?: string;
    type?: string;
    prependFrom?: boolean;
    prependQuestionMark?: boolean;
    appendBacktick?: boolean;
}
export interface FiltersSuggestion {
    tables?: ParsedTable[];
    tablePrimaries?: ParsedTable[];
    prefix?: string;
    linked?: boolean;
}

export interface KeyValuesSuggestion {
    linked?: boolean;
}

export interface TablesSuggestion {
    appendBacktick?: boolean;
    identifierChain?: IdentifierChainEntry[];
    onlyTables?: boolean;
    onlyViews?: boolean;
    prependFrom?: boolean;
    prependQuestionMark?: boolean;
}

export interface Lexer {
    setInput: (input: unknown, yy: unknown) => unknown;
    upcomingInput(): string;
    input(): string;
    unput(char: string): Lexer;
    popState(): unknown;
}
