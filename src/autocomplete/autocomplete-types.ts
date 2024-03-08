import {
    AbstractParseTreeVisitor,
    CharStream,
    CommonTokenStream,
    Lexer as LexerType,
    ParseTree,
    ParserRuleContext,
    Parser as ParserType,
    TokenStream,
} from 'antlr4ng';
import * as c3 from 'antlr4-c3';

import {TokenPosition} from './shared/cursor';
import {TableQueryPosition, TokenDictionary} from './shared/tables';

export interface AutocompleteResultBase {
    errors: ParserSyntaxError[];
    suggestKeywords?: KeywordSuggestion[];
    suggestTemplates?: boolean;
    suggestAggregateFunctions?: boolean;
    suggestFunctions?: boolean;
    suggestColumns?: ColumnSuggestion;
    suggestColumnAliases?: ColumnAliasSuggestion[];
    suggestDatabases?: boolean;
}

export interface MySqlAutocompleteResult extends AutocompleteResultBase {
    suggestViewsOrTables?: TableOrViewSuggestion;
    suggestIndexes?: boolean;
    suggestTriggers?: boolean;
    suggestConstraints?: ConstraintSuggestion;
    suggestRoles?: boolean;
    suggestUsers?: boolean;
}

export interface PostgreSqlAutocompleteResult extends AutocompleteResultBase {
    suggestViewsOrTables?: TableOrViewSuggestion;
    suggestIndexes?: boolean;
    suggestTriggers?: boolean;
    suggestConstraints?: ConstraintSuggestion;
    suggestSequences?: boolean;
    suggestSchemas?: boolean;
    suggestRoles?: boolean;
}

export interface ClickHouseAutocompleteResult extends AutocompleteResultBase {
    suggestViewsOrTables?: TableOrViewSuggestion;
    suggestEngines?: EngineSuggestion;
}

export type YQLEntity =
    | 'externalDataSource'
    | 'view'
    | 'object'
    | 'tableStore'
    | 'table'
    | 'replication'
    | 'topic'
    | 'group'
    | 'user';

export interface YQLAutocompleteResult extends AutocompleteResultBase {
    suggestEntity?: YQLEntity[];
    suggestSimpleTypes?: boolean;
    suggestUdfs?: boolean;
    suggestWindowFunctions?: boolean;
    suggestTableFunctions?: boolean;
    suggestPragmas?: boolean;
}

export interface ParserSyntaxError extends TokenPosition {
    message: string;
}

export interface KeywordSuggestion {
    value: string;
}

export interface Table {
    name: string;
    alias?: string;
}

export interface TableContextSuggestion {
    tables?: Table[];
}

export type ColumnSuggestion = TableContextSuggestion;

export type ConstraintSuggestion = TableContextSuggestion;

export enum TableOrViewSuggestion {
    ALL = 'ALL',
    TABLES = 'TABLES',
    VIEWS = 'VIEWS',
}

export interface EngineSuggestion {
    engines: string[];
    functionalEngines: string[];
}

export interface ColumnAliasSuggestion {
    name: string;
}

export type LexerConstructor<T> = new (input: CharStream) => T;

export type ParserConstructor<T> = new (input: CommonTokenStream) => T;

export type SymbolTableVisitorConstructor<T> = new () => T;

export interface ISymbolTableVisitor {
    symbolTable: c3.SymbolTable;
    scope: c3.ScopedSymbol;
}

export type SymbolTableVisitor = ISymbolTableVisitor & AbstractParseTreeVisitor<{}>;

export type GetParseTree<P> = (
    parser: P,
    type?: TableQueryPosition['type'] | 'select',
) => ParseTree;

export type ProcessVisitedRulesResult<A extends AutocompleteResultBase> = Partial<A> & {
    shouldSuggestColumns?: boolean;
    shouldSuggestColumnAliases?: boolean;
    shouldSuggestConstraints?: boolean;
};

export type ProcessVisitedRules<A extends AutocompleteResultBase> = (
    rules: c3.CandidatesCollection['rules'],
    cursorTokenIndex: number,
    tokenStream: TokenStream,
) => ProcessVisitedRulesResult<A>;

export type EnrichAutocompleteResult<A extends AutocompleteResultBase> = (
    result: AutocompleteResultBase,
    rules: c3.CandidatesCollection['rules'],
    tokenStream: TokenStream,
    cursorTokenIndex: number,
    cursor: CursorPosition,
    query: string,
) => A;

export interface AutocompleteData<
    A extends AutocompleteResultBase,
    L extends LexerType,
    P extends ParserType,
> {
    Lexer: LexerConstructor<L>;
    Parser: ParserConstructor<P>;
    getParseTree: GetParseTree<P>;
    tokenDictionary: TokenDictionary;
    ignoredTokens: Set<number>;
    rulesToVisit: Set<number>;
    enrichAutocompleteResult: EnrichAutocompleteResult<A>;
    context?: ParserRuleContext;
}

export interface CursorPosition {
    line: number;
    column: number;
}
