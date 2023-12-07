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

import {
    AutocompleteError,
    AutocompleteParseResult,
    AwaitedTokenExpression,
    ColRefKeywordsSuggestion,
    ColumnAliasDetails,
    ColumnDetails,
    ColumnReference,
    ColumnSpecification,
    ColumnsSuggestion,
    DatabasesSuggestion,
    FiltersSuggestion,
    FunctionsSuggestion,
    GroupBysSuggestion,
    HadoopDistributedFileSystemsSuggestion,
    IdentifierChainEntry,
    IdentifierLocation,
    IdentifierSuggestion,
    JoinConditionsSuggestion,
    JoinsSuggestion,
    KeyValuesSuggestion,
    KeywordSuggestion,
    Location,
    OrderBysSuggestion,
    SubQuery,
    Table,
    TablesSuggestion,
    TokenExpression,
    ValuesSuggestion,
    WeightedKeywordSuggestion,
} from '../index';

export interface ParserContext {
    SELECT_FIRST_OPTIONAL_KEYWORDS: KeywordSuggestion[];
    KEYWORDS: Record<string, string[]>;
    yy: {
        result: AutocompleteParseResult;
        cursorFound?: {
            first_line: number;
            last_line: number;
            last_column: number;
            first_column: number;
        };
        partialLengths: PartialLengths;
        partialCursor?: boolean;
        primariesStack: Table[][];
        locations: IdentifierLocation[];
        definitions: IdentifierLocation[];
        allLocations: IdentifierLocation[];
        latestCommonTableExpressions?: IdentifierLocation[];
        correlatedSubQuery?: boolean;
        subQueries: SubQuery[];
        selectListAliases: ColumnAliasDetails[];
        latestTablePrimaries: Table[];
        errors: AutocompleteError[];
        resultStack: Partial<AutocompleteParseResult>[];
        locationsStack: IdentifierLocation[][];
        selectListAliasesStack: ColumnAliasDetails[][];
        subQueriesStack: SubQuery[][];
        activeDialect: string;
        lowerCase: boolean;
        caseDetermined?: boolean;
        missingEndQuote: boolean;
        parseError(message: string, error: AutocompleteError): void;
    };

    parse(beforeCursor: string, afterCursor?: string): AutocompleteParseResult;
    parseSql(
        beforeCursor: string,
        afterCursor: string,
        debug: boolean,
    ): Partial<AutocompleteParseResult>;
    lexer: Lexer;
    addAsteriskLocation(location: Location, identifierChain: IdentifierChainEntry[]): void;
    addClauseLocation(
        type: string,
        precedingLocation: Location,
        locationIfPresent: Location,
        isCursor: boolean,
    ): void;
    isInSubquery(): boolean;
    addColumnAliasLocation(location: Location, alias: string, parentLocation: Location): void;
    addColumnLocation(location: Location, identifierChain: IdentifierChainEntry[]): void;
    addCteAliasLocation(location: Location, alias: string): void;
    addDatabaseLocation(location: Location, identifierChain: IdentifierChainEntry[]): void;
    addFileLocation(location: Location, path: string): void;
    addFunctionLocation(location: Location, functionName: string): void;
    addFunctionArgumentLocations(
        functionName: string,
        expressions: TokenExpressionWithLocation[],
        identifierChain: IdentifierChainEntry[],
    ): void;
    addNewDatabaseLocation(location: Location, identifierChain: IdentifierChainEntry[]): void;
    addNewTableLocation(
        location: Location,
        identifierChain: IdentifierChainEntry[],
        colSpec: ColumnSpecification[],
    ): void;
    addStatementLocation(location: Location): void;
    addStatementTypeLocation(identifier: string, location: Location, additionalText: string): void;
    addSubqueryAliasLocation(location: Location, alias: string): void;
    addTableAliasLocation(
        location: Location,
        alias: string,
        identifierChain: IdentifierChainEntry[],
    ): void;
    addTableLocation(location: Location, identifierChain: IdentifierChainEntry[]): void;
    addVariableLocation(location: Location, value: string): void;
    addUnknownLocation(
        location: Location,
        identifierChain: IdentifierChainEntry[],
    ): IdentifierLocation;
    applyTypes(
        suggestion: FunctionsSuggestion | ColumnsSuggestion,
        typeDetails: ValueExpression,
    ): void;
    applyTypeToSuggestions(details: ValueExpression): void;
    extractExpressionText(result: TokenExpression, ...expressions: AwaitedTokenExpression[]): void;
    getSubQuery(cols: {selectList: SelectExpression[]; tableExpression: TableExpression}): {
        columns: ColumnDetails[];
    };
    identifyPartials(beforeCursor: string, afterCursor: string): PartialLengths;
    suggestKeywords(keywords: Array<string | KeywordSuggestion>): void;
    valueExpressionSuggest(oppositeValueExpression?: ValueExpression, operator?: string): void;
    suggestColumns(details?: ColumnsSuggestion): void;
    suggestFunctions(...args: FunctionsSuggestion[]): void;
    suggestValues(...args: ValuesSuggestion[]): void;
    prepareNewStatement(): void;
    commitLocations(): void;
    addCommonTableExpressions(identifiers: IdentifierLocation[]): void;
    pushQueryState(): void;
    popQueryState(subQuery: SubQuery): void;
    suggestSelectListAliases(): void;
    mergeSuggestKeywords(): void;
    suggestValueExpressionKeywords(
        valueExpression: ValueExpression,
        extras: KeywordSuggestion[],
    ): void;
    addColRefIfExists(valueExpression: ValueExpression): void;
    getValueExpressionKeywords(
        valueExpression: ValueExpression,
        extras?: KeywordSuggestion[],
    ): {suggestKeywords: KeywordSuggestion[]; suggestColRefKeywords?: ColRefKeywordsSuggestion};
    getTypeKeywords(): KeywordSuggestion[];
    suggestColRefKeywords(keywords: ColRefKeywordsSuggestion): void;
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
            tables?: Table[];
            linked?: boolean;
        };
        tablePrimaries?: Table[];
        isColumnWrapper?: boolean;
        isColumnLocation?: boolean;
        anyOwner?: boolean;
    }): void;
    createWeightedKeywords(
        keywords: KeywordSuggestion[] | undefined,
        weight: number,
    ): WeightedKeywordSuggestion[];
    addTablePrimary(ref: Table): void;
    suggestFileFormats(): void;
    getKeywordsForOptionalsLR(
        optionals: ValueExpression[],
        keywords: KeywordSuggestion[] | KeywordSuggestion[][],
        override: boolean[],
    ): void;
    suggestDdlAndDmlKeywords(extraKeywords: KeywordSuggestion[]): void;
    suggestTemplates(): void;
    checkForSelectListKeywords(selectList: ValueExpression[]): void;
    suggestFunctions(details: FunctionsSuggestion): void;
    suggestSetOptions(): void;
    suggestIdentifiers(identifiers?: IdentifierSuggestion[]): void;
    suggestColumns(details?: ColumnsSuggestion): void;
    suggestGroupBys(details?: GroupBysSuggestion): void;
    suggestOrderBys(details?: OrderBysSuggestion): void;
    suggestFilters(details?: FiltersSuggestion): void;
    suggestKeyValues(details?: KeyValuesSuggestion): void;
    suggestTables(details?: TablesSuggestion): void;
    suggestTablesOrColumns(identifier?: string): void;
    firstDefined(...args: Location[]): Location | undefined;
    addColRefToVariableIfExists(left: ValueExpression, right: ValueExpression): void;
    suggestDatabases(details: DatabasesSuggestion): void;
    suggestHdfs(details: HadoopDistributedFileSystemsSuggestion): void;
    determineCase(text: string): void;
    handleQuotedValueWithCursor(
        lexer: Lexer,
        yytext: string,
        yylloc: Location,
        quoteChar: string,
    ): boolean;
    suggestEngines(): void;
}

export interface TokenExpressionWithLocation {
    location: Location;
    expression: AwaitedTokenExpression;
    suffix?: string;
}

export interface PartialLengths {
    left: number;
    right: number;
    backtickBefore: boolean;
    backtickAfter: boolean;
}

export interface ValueExpression {
    types?: string[];
    columnReference?: ColumnReference[];
    function?: string;
    suggestKeywords?: KeywordSuggestion[];
    lastType?: ValueExpression;
    cursorAtStart?: boolean;
    inValueEdit?: boolean;
    suggestFunctions?: boolean;
    suggestColumns?: boolean;
    suggestAggregateFunctions?: boolean;
    suggestColRefKeywords?: ColRefKeywordsSuggestion;
    caseTypes?: ValueExpression[];
    valueExpression?: ValueExpression;
    alias?: string;
}

export interface SelectExpression {
    alias?: string;
    asterisk?: boolean;
    valueExpression: ValueExpression;
    columnReference: ColumnReference[];
}

export interface TableExpression {
    tableReferenceList?: {
        primary?: {
            identifierChain?: IdentifierChainEntry[];
        };
        suggestKeywords?: string[];
        suggestJoins?: {
            prependJoin?: boolean;
            tables?: Array<{
                identifierChain?: IdentifierChainEntry[];
            }>;
        };
    };
}

export interface Lexer {
    setInput: (input: unknown, yy: unknown) => Lexer;
    upcomingInput(): string;
    input(): string;
    unput(char: string): Lexer;
    popState(): unknown;
}
