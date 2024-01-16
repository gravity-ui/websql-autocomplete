import { TokenStream, Token } from 'antlr4ng';
export interface CursorPosition {
    line: number;
    column: number;
}
export interface TokenPosition {
    startLine: number;
    startColumn: number;
    endLine: number;
    endColumn: number;
}
export declare function getTokenPosition(token: Token, whitespaceToken: number): TokenPosition;
export declare function findCursorTokenIndex(tokenStream: TokenStream, cursor: CursorPosition, whitespaceToken: number): number | undefined;
