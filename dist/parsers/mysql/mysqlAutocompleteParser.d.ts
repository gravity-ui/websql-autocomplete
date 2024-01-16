import { TokenPosition, CursorPosition } from '../lib/tokenPosition.js';
interface ParserSyntaxError extends TokenPosition {
    message: string;
}
interface KeywordSuggestion {
    value: string;
}
interface ColumnSuggestion {
    tables?: {
        name: string;
        alias?: string;
    }[];
}
declare enum TableSuggestion {
    ALL = "ALL",
    TABLES = "TABLES",
    VIEWS = "VIEWS"
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
export declare function parseMySqlQueryWithoutCursor(query: string): Pick<AutocompleteParseResult, 'errors'>;
export declare function parseMySqlQuery(query: string, cursor: CursorPosition): AutocompleteParseResult;
export {};
