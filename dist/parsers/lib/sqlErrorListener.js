import { getTokenPosition } from '../lib/tokenPosition.js';
export class SqlErrorListener {
    constructor(whitespaceToken) {
        this.errors = [];
        this.whitespaceToken = whitespaceToken;
    }
    syntaxError(_recognizer, token, startLine, startColumn, message) {
        if (token) {
            const tokenPosition = getTokenPosition(token, this.whitespaceToken);
            this.errors.push(Object.assign({ message }, tokenPosition));
        }
        else {
            this.errors.push({
                message,
                startLine,
                startColumn,
                endLine: startLine,
                endColumn: startColumn,
            });
        }
    }
    reportAmbiguity() { }
    reportAttemptingFullContext() { }
    reportContextSensitivity() { }
}
