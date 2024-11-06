import * as c3 from 'antlr4-c3';
import type {Lexer as LexerType, Parser as ParserType, Token, TokenStream} from 'antlr4ng';

import {GetParseTree, LexerConstructor, ParserConstructor} from './autocomplete-types';
import {createParser} from './query';
import {SqlErrorListener} from './sql-error-listener';

export interface StatementPosition {
    startIndex: number;
    endIndex: number;
}

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
    statementRule: number,
    getParseTree: GetParseTree<P>,
): ExtractStatementPositionsResult {
    const parser = createParser(Lexer, Parser, query);
    const {tokenStream} = parser;
    const errorListener = new SqlErrorListener(whitespaceToken);

    parser.removeErrorListeners();
    parser.addErrorListener(errorListener);
    getParseTree(parser);

    const autocompleteStatementPositions = extractStatementsUsingAutocomplete(
        parser,
        tokenStream,
        statementRule,
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

export function extractStatementsUsingAutocomplete<P extends ParserType>(
    parser: P,
    tokenStream: TokenStream,
    statementRule: number,
): StatementPosition[] {
    const core = new c3.CodeCompletionCore(parser);
    core.preferredRules = new Set([statementRule]);

    // Last token is EOF, so we want to get second to last
    let currentToken = tokenStream.get(tokenStream.size - 2);
    const statementPositions: StatementPosition[] = [];

    while (currentToken?.tokenIndex > 0) {
        const {rules} = core.collectCandidates(currentToken.tokenIndex);
        let startToken: Token | undefined;

        for (const [ruleId, {startTokenIndex}] of rules) {
            if (ruleId === statementRule) {
                startToken = tokenStream.get(startTokenIndex);
                break;
            }
        }

        if (!startToken) {
            break;
        }

        // Skip comments
        if (startToken.tokenIndex > currentToken.tokenIndex) {
            currentToken = tokenStream.get(currentToken.tokenIndex - 1);
            continue;
        }

        statementPositions.push({
            startIndex: startToken.start,
            endIndex: currentToken.start + (currentToken.text?.length || 0),
        });
        currentToken = tokenStream.get(startToken.tokenIndex - 1);
    }

    statementPositions.reverse();
    return statementPositions;
}
