import { ANTLRErrorListener, Token, ATNSimulator, Recognizer } from 'antlr4ng';
import { TokenPosition } from '../lib/tokenPosition.js';
interface ParserSyntaxError extends TokenPosition {
    message: string;
}
export declare class SqlErrorListener implements ANTLRErrorListener {
    errors: ParserSyntaxError[];
    whitespaceToken: number;
    constructor(whitespaceToken: number);
    syntaxError<S extends Token, T extends ATNSimulator>(_recognizer: Recognizer<T>, token: S | null, startLine: number, startColumn: number, message: string): void;
    reportAmbiguity(): void;
    reportAttemptingFullContext(): void;
    reportContextSensitivity(): void;
}
export {};
