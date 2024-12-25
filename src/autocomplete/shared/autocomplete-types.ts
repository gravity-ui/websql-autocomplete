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

import {TokenPosition} from './cursor';
import {TableQueryPosition, TokenDictionary} from './tables';

export {
    StatementPosition,
    ExtractStatementPositionsResult,
    StatementExtractionStrategy,
} from './extract-statement-positions-from-query';

export interface AutocompleteResultBase {
    errors: ParserSyntaxError[];
    suggestKeywords?: KeywordSuggestion[];
    suggestTemplates?: boolean;
    suggestDatabases?: boolean;
}

export interface SqlAutocompleteResult extends AutocompleteResultBase {
    suggestAggregateFunctions?: boolean;
    suggestFunctions?: boolean;
    suggestColumns?: ColumnSuggestion;
    suggestColumnAliases?: ColumnAliasSuggestion[];
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
    columns?: string[];
}

export interface TableContextSuggestion {
    tables?: Table[];
}

export type ColumnSuggestion = TableContextSuggestion;

export type TableIndexSuggestion = TableContextSuggestion;

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

export interface VariableSuggestion {
    name: string;
    value: unknown;
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
    shouldSuggestAllColumns?: boolean;
    shouldSuggestColumnAliases?: boolean;
    shouldSuggestConstraints?: boolean;
    shouldSuggestTableIndexes?: boolean;
    shouldSuggestVariables?: boolean;
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
