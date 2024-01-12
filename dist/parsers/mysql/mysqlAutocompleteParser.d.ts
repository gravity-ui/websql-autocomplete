interface CursorPosition {
    line: number;
    column: number;
}
interface ParserSyntaxError {
    message: string;
    startLine: number;
    startColumn: number;
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
