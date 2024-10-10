import {LexerConstructor} from './autocomplete-types';
import {Token, tokenize} from './tokenize';
import type {Lexer as LexerType} from 'antlr4ng';

export interface StatementPosition {
    startIndex: number;
    endIndex: number;
}

export function extractStatementPositionsFromQuery<L extends LexerType>(
    query: string,
    Lexer: LexerConstructor<L>,
    symbolicNames: (string | null)[],
    whiteSpaceToken: number,
    emptyTokens: number[],
    closeStatementToken: number,
): StatementPosition[] {
    const {tokens} = tokenize(Lexer, symbolicNames, whiteSpaceToken, query);

    let statementStartIndex = 0;
    let processingNewStatement = false;
    let lastStatementToken: Token;

    const statementPositions: StatementPosition[] = [];

    tokens.forEach((token, index) => {
        const isCloseStatementToken = token.type === closeStatementToken;
        const isEmptyToken = emptyTokens.includes(token.type);

        if (!processingNewStatement && isEmptyToken) {
            return;
        }

        if (!processingNewStatement) {
            processingNewStatement = true;
            statementStartIndex = token.startIndex;
        }

        if (!isEmptyToken && !isCloseStatementToken) {
            lastStatementToken = token;
        }

        if (isCloseStatementToken && statementStartIndex === token.startIndex) {
            processingNewStatement = false;
            return;
        }

        const isLastToken = index === tokens.length - 1;
        if (isCloseStatementToken || isLastToken) {
            const tokenTextLength = lastStatementToken.text?.length || 0;
            const statementEndIndex = lastStatementToken.startIndex + tokenTextLength;

            const statementAbsolutePosition: StatementPosition = {
                startIndex: statementStartIndex,
                endIndex: statementEndIndex,
            };

            statementPositions.push(statementAbsolutePosition);
        }

        if (isCloseStatementToken) {
            processingNewStatement = false;
        }
    });

    return statementPositions;
}
