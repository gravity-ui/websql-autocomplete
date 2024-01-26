import {CharStream, CommonTokenStream, ParseTree, Token} from 'antlr4ng';
import * as c3 from 'antlr4-c3';

import {TokenPosition} from './lib/cursor';
import {TableQueryPosition} from './lib/tables';

export interface ParserSyntaxError extends TokenPosition {
    message: string;
}

export interface KeywordSuggestion {
    value: string;
}

export interface ColumnSuggestion {
    tables?: {name: string; alias?: string}[];
}

export enum TableSuggestion {
    ALL = 'ALL',
    TABLES = 'TABLES',
    VIEWS = 'VIEWS',
}

export interface AutocompleteParseResult {
    errors: ParserSyntaxError[];
    suggestKeywords?: KeywordSuggestion[];
    suggestTables?: TableSuggestion;
    suggestTemplates?: boolean;
    suggestAggregateFunctions?: boolean;
    suggestFunctions?: boolean;
    suggestColumns?: ColumnSuggestion;
}

export type LexerConstructor<T> = new (input: CharStream) => T;

export type ParserConstructor<T> = new (input: CommonTokenStream) => T;

export type SymbolTableVisitorConstructor<T> = new () => T;

export interface ISymbolTableVisitor {
    symbolTable: c3.SymbolTable;
    scope: c3.ScopedSymbol;
}

export type GetParseTree<P> = (parser: P, type?: TableQueryPosition['type']) => ParseTree;

export type GenerateSuggestionsFromRules = (
    rules: c3.CandidatesCollection['rules'],
    cursorTokenIndex: number,
    previousToken?: Token,
) => Partial<AutocompleteParseResult> & {suggestColumns?: boolean};
