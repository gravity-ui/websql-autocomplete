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

export interface AutocompleteParseResult {
    // Meta
    locations?: IdentifierLocation[];
    errors?: ErrorLocation[];

    // Suggestions
    suggestAggregateFunctions?: AggregateFunctionsSuggestion;
    suggestAnalyticFunctions?: boolean;
    suggestColRefKeywords?: ColRefKeywordsSuggestion;
    suggestColumnAliases?: ColumnAliasDetails[];
    suggestColumns?: ColumnSuggestion;
    suggestCommonTableExpressions?: IdentifierSuggestion[];
    suggestDatabases?: DatabasesSuggestion;
    suggestFilters?: FiltersSuggestion;
    suggestFunctions?: FunctionsSuggestion;
    suggestGroupBys?: GroupBysSuggestion;
    suggestHdfs?: HdfsSuggestion;
    suggestJoins?: JoinsSuggestion;
    suggestJoinConditions?: JoinConditionsSuggestion;
    suggestIdentifiers?: IdentifierSuggestion[];
    suggestKeyValues?: KeyValuesSuggestion;
    suggestKeywords?: WeightedKeywordSuggestion[];
    suggestOrderBys?: OrderBysSuggestion;
    suggestSetOptions?: boolean;
    suggestTables?: TablesSuggestion;
    suggestValues?: ValuesSuggestion;
    suggestTemplates?: boolean;
    suggestEngines?: EnginesSuggestion;

    // Other
    subQueries?: SubQuery[];
    commonTableExpressions?: IdentifierLocation[];
    useDatabase?: string;
    udfArgument?: UdfArgumentPosition;
    error?: {
        expected?: string[];
        recoverable?: boolean;
    };
    definitions?: IdentifierLocation[];
    colRef?: DetailedColumnReference;
    lowerCase?: boolean;
}

export interface WeightedKeywordSuggestion {
    value: string;
    weight: number;
}

export type KeywordSuggestion = WeightedKeywordSuggestion | string;

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

export type IdentifierLocationType =
    | 'alias'
    | 'asterisk'
    | 'column'
    | 'database'
    | 'file'
    | 'function'
    | 'functionArgument'
    | 'statement'
    | 'statementType'
    | 'table'
    | 'unknown'
    | 'variable'
    | 'subQuery'
    | 'complex'
    | 'selectList'
    | 'whereClause'
    | 'limitClause';

export interface IdentifierLocation {
    identifier?: string;
    type: IdentifierLocationType;
    alias?: string;
    source?: string;
    location: ParsedLocation;
    function?: string;
    missing?: boolean;
    value?: string;
    active?: boolean;
    tables?: ParsedTable[];
    colRef?: DetailedColumnReference;
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
    firstInChain?: boolean;
    target?: string;
}

export interface DetailedColumnReference {
    identifierChain: IdentifierChainEntry[];
    tables?: ParsedTable[];
    linked?: boolean;
    owner?: string;
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
    tables?: ParsedTable[];
}

export type OrderBysSuggestion = {
    tables?: ParsedTable[];
    tablePrimaries?: ParsedTable[];
    prefix?: string;
    linked?: boolean;
};

export type GroupBysSuggestion = OrderBysSuggestion;

export interface HdfsSuggestion {
    path: string;
}

export interface UdfArgumentPosition {
    name: string;
    position: number;
}

export interface AutocompleteParser {
    parseSql(beforeCursor: string, afterCursor: string, debug?: boolean): AutocompleteParseResult;
}

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
        primariesStack: ParsedTable[][];
        locations: IdentifierLocation[];
        definitions: IdentifierLocation[];
        allLocations: IdentifierLocation[];
        latestCommonTableExpressions?: IdentifierLocation[];
        correlatedSubQuery?: boolean;
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
        caseDetermined?: boolean;
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
    applyTypes(
        suggestion: FunctionsSuggestion | ColumnSuggestion,
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
    suggestColumns(details?: ColumnSuggestion): void;
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
    suggestFunctions(details: FunctionsSuggestion): void;
    suggestSetOptions(): void;
    suggestIdentifiers(identifiers?: IdentifierSuggestion[]): void;
    suggestColumns(details?: ColumnSuggestion): void;
    suggestGroupBys(details?: GroupBysSuggestion): void;
    suggestOrderBys(details?: OrderBysSuggestion): void;
    suggestFilters(details?: FiltersSuggestion): void;
    suggestKeyValues(details?: KeyValuesSuggestion): void;
    suggestTables(details?: TablesSuggestion): void;
    suggestTablesOrColumns(identifier?: string): void;
    firstDefined(...args: ParsedLocation[]): ParsedLocation | undefined;
    addColRefToVariableIfExists(left: ValueExpression, right: ValueExpression): void;
    suggestDatabases(details: DatabasesSuggestion): void;
    suggestHdfs(details: HdfsSuggestion): void;
    determineCase(text: string): void;
    handleQuotedValueWithCursor(
        lexer: Lexer,
        yytext: string,
        yylloc: ParsedLocation,
        quoteChar: string,
    ): boolean;
    suggestEngines(): void;
}

export interface EnginesSuggestion {
    engines: string[];
    functionalEngines: string[];
}

export interface ValuesSuggestion {
    missingEndQuote?: boolean;
    partialQuote?: string;
}

export interface AggregateFunctionsSuggestion {
    tables?: ParsedTable[];
    tablePrimaries?: ParsedTable[];
    linked?: boolean;
}

export interface ColumnSpecification {
    identifier: IdentifierChainEntry;
    location: ParsedLocation;
    type: string;
}

export interface FunctionsSuggestion {
    types?: string[];
    udfRef?: string;
}

export interface DatabasesSuggestion {
    appendBacktick?: boolean;
    appendDot?: boolean;
    prependFrom?: boolean;
    prependQuestionMark?: boolean;
}

export interface ColumnSuggestion {
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

export interface CommonTableExpressionsSuggestion {
    name: string;
    prependFrom?: boolean;
    prependQuestionMark?: boolean;
}

export interface CommonTableExpression {
    alias: string;
    columns: ColumnSuggestion[];
}

interface ColumnTokenExpression {
    types: string[];
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

export interface ErrorLocation {
    expected: string[];
    line: number;
    loc: ParsedLocation;
    recoverable: boolean;
    ruleId: string;
    text: string;
    token: string;
}

export type ColRefKeywordsSuggestion = Record<string, string[]>;

export interface JoinConditionsSuggestion {
    prependOn?: boolean;
    tables?: ParsedTable[];
    tablePrimaries?: ParsedTable[];
    linked?: boolean;
}

export interface JoinsSuggestion {
    prependJoin: boolean;
    joinType?: unknown;
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
    setInput: (input: unknown, yy: unknown) => Lexer;
    upcomingInput(): string;
    input(): string;
    unput(char: string): Lexer;
    popState(): unknown;
}

export interface UdfArgument {
    type: string;
    multiple?: boolean;
    keywords?: string[];
    optional?: boolean;
}

export interface UdfDetails {
    returnTypes: string[];
    name: string;
    arguments: UdfArgument[][];
    altArguments?: UdfArgument[][];
    signature: string;
    draggable: string;
    description?: string;
    described?: boolean;
}

export interface UdfCategoryFunctions {
    [attr: string]: UdfDetails;
}

export interface UdfCategory {
    name: string;
    functions: UdfCategoryFunctions;
    isAnalytic?: boolean;
    isAggregate?: boolean;
}

export interface SetOptions {
    [attr: string]: SetDetails;
}

export interface SetDetails {
    default: string;
    type: string;
    description: string;
}

export interface TypeConversion {
    [attr: string]: {
        [attr: string]: boolean;
    };
}