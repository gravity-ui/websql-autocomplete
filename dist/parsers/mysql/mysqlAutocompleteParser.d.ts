interface CursorPosition {
    line: number;
    column: number;
}
interface TokenPosition {
    startLine: number;
    startColumn: number;
    endLine: number;
    endColumn: number;
}
interface ParserSyntaxError extends TokenPosition {
    message: string;
}
interface KeywordSuggestion {
    value: string;
}
declare enum TableSuggestion {
    ALL = "ALL",
    TABLES = "TABLES",
    VIEWS = "VIEWS"
}
interface AutocompleteParseResult {
    errors: ParserSyntaxError[];
    suggestKeywords?: KeywordSuggestion[];
    suggestTables?: TableSuggestion;
    suggestTemplates?: boolean;
    suggestAggregateFunctions?: boolean;
    suggestFunctions?: boolean;
}
export declare function parseMySqlQueryWithoutCursor(query: string): Pick<AutocompleteParseResult, 'errors'>;
export declare function parseMySqlQuery(query: string, cursor: CursorPosition): AutocompleteParseResult;
export {};
