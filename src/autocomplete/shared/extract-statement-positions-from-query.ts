import type {Lexer as LexerType, ParseTree, Parser as ParserType, TokenStream} from 'antlr4ng';

import {
    GetParseTree,
    LexerConstructor,
    ParserConstructor,
    StatementPosition,
    StatementsVisitor,
} from './autocomplete-types';
import {createParser} from './query';
import {SqlErrorListener} from './sql-error-listener';

export enum StatementExtractionStrategy {
    Autocomplete = 'autocomplete',
    Tokens = 'tokens',
}

export interface ExtractStatementPositionsResult {
    statementPositions: StatementPosition[];
    strategy: StatementExtractionStrategy;
}

export function extractStatementPositionsFromQuery<L extends LexerType, P extends ParserType>(
    query: string,
    Lexer: LexerConstructor<L>,
    Parser: ParserConstructor<P>,
    whitespaceToken: number,
    emptySpaceTokens: number[],
    endStatementToken: number,
    statementsVisitor: StatementsVisitor,
    getParseTree: GetParseTree<P>,
): ExtractStatementPositionsResult {
    const parser = createParser(Lexer, Parser, query);
    const {tokenStream} = parser;
    const errorListener = new SqlErrorListener(whitespaceToken);

    parser.removeErrorListeners();
    parser.addErrorListener(errorListener);
    const parseTree = getParseTree(parser);

    const autocompleteStatementPositions = extractStatementsUsingAutocomplete(
        parseTree,
        tokenStream,
        statementsVisitor,
        emptySpaceTokens,
    );
    if (autocompleteStatementPositions.length) {
        return {
            statementPositions: autocompleteStatementPositions,
            strategy: StatementExtractionStrategy.Autocomplete,
        };
    }

    const tokenStatementPositions = extractStatementsUsingTokens(
        tokenStream,
        emptySpaceTokens,
        endStatementToken,
    );
    return {
        statementPositions: tokenStatementPositions,
        strategy: StatementExtractionStrategy.Tokens,
    };
}

export function extractStatementsUsingTokens(
    tokenStream: TokenStream,
    emptySpaceTokens: number[],
    endStatementToken: number,
): StatementPosition[] {
    let statementStartIndex = 0;
    let processingNewStatement = false;

    // Last token is EOF, so we want to get second to last
    const lastTokenIndex = tokenStream.size - 2;
    const statementPositions: StatementPosition[] = [];

    for (let index = 0; index <= lastTokenIndex; index++) {
        const token = tokenStream.get(index);
        const isEndStatementToken = token.type === endStatementToken;
        const isEmptyToken = emptySpaceTokens.includes(token.type);

        if (!processingNewStatement && isEmptyToken) {
            continue;
        }

        if (!processingNewStatement) {
            processingNewStatement = true;
            statementStartIndex = token.start;
        }

        if (isEndStatementToken && statementStartIndex === token.start) {
            processingNewStatement = false;
            continue;
        }

        const isLastToken = index === lastTokenIndex;
        if (isEndStatementToken || isLastToken) {
            const tokenTextLength = token.text?.length || 0;
            const statementEndIndex = token.start + tokenTextLength;

            const statementAbsolutePosition: StatementPosition = {
                startIndex: statementStartIndex,
                endIndex: statementEndIndex,
            };

            statementPositions.push(statementAbsolutePosition);
        }

        if (isEndStatementToken) {
            processingNewStatement = false;
        }
    }

    return statementPositions;
}

export function extractStatementsUsingAutocomplete(
    parseTree: ParseTree,
    tokenStream: TokenStream,
    statementsVisitor: StatementsVisitor,
    emptySpaceTokens: number[],
): StatementPosition[] {
    statementsVisitor.visit(parseTree);
    const statementPositions = statementsVisitor.statementPositions;
    const lastAutocompleteStatement = statementPositions[statementPositions.length - 1];
    if (!lastAutocompleteStatement) {
        return [];
    }

    // If last statement is not complete, the visitor will not parse it,
    // so we want to add the rest of the query as a new statement
    const lastTokenEndIndex = getLastNonEmptyTokenEndIndex(tokenStream, emptySpaceTokens);
    if (lastAutocompleteStatement.endIndex !== lastTokenEndIndex) {
        const firstTokenStartIndex = getFirstNonEmptyTokenStartIndex(
            tokenStream,
            emptySpaceTokens,
            statementsVisitor.lastTokenIndex,
        );

        return [
            ...statementPositions,
            {
                startIndex: firstTokenStartIndex,
                endIndex: lastTokenEndIndex,
            },
        ];
    }

    return statementPositions;
}

function getLastNonEmptyTokenEndIndex(
    tokenStream: TokenStream,
    emptySpaceTokens: number[],
): number {
    const lastTokenIndex = tokenStream.size - 2;

    for (let index = lastTokenIndex; index >= 0; index--) {
        const token = tokenStream.get(index);
        if (!emptySpaceTokens.includes(token.type)) {
            return token.start + (token.text?.length || 0);
        }
    }

    return -1;
}

function getFirstNonEmptyTokenStartIndex(
    tokenStream: TokenStream,
    emptySpaceTokens: number[],
    lastTokenIndex: number,
): number {
    for (let index = lastTokenIndex + 1; index < tokenStream.size; index++) {
        const token = tokenStream.get(index);
        if (!emptySpaceTokens.includes(token.type)) {
            return token.start;
        }
    }

    return -1;
}
