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
export declare function parseMySqlQueryWithoutCursor(query: string): {
    errors: ParserSyntaxError[];
};
export declare function parseMySqlQuery(query: string, cursor: CursorPosition): {
    errors: ParserSyntaxError[];
    suggestKeywords: KeywordSuggestion[];
};
export {};
