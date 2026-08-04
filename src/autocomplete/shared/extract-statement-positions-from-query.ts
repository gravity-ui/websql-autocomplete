import type {
    Lexer as LexerType,
    ParseTree,
    Parser as ParserType,
    TerminalNode,
    Token,
    TokenStream,
} from 'antlr4ng';

import {
    GetParseTree,
    LexerConstructor,
    ParserConstructor,
    ParserOptions,
    StatementPosition,
    StatementsVisitor,
} from './autocomplete-types.js';
import {normalizePositions} from './normalize-positions.js';
import {createParser} from './query.js';
import {SqlErrorListener} from './sql-error-listener.js';

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
    parserOptions?: ParserOptions,
): ExtractStatementPositionsResult {
    const parser = createParser(Lexer, Parser, query, parserOptions);
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
        endStatementToken,
    );
    if (autocompleteStatementPositions.length) {
        return {
            statementPositions: normalizePositions(query, autocompleteStatementPositions),
            strategy: StatementExtractionStrategy.Autocomplete,
        };
    }

    const tokenStatementPositions = extractStatementsUsingTokens(
        tokenStream,
        emptySpaceTokens,
        endStatementToken,
    );
    return {
        statementPositions: normalizePositions(query, tokenStatementPositions),
        strategy: StatementExtractionStrategy.Tokens,
    };
}

export function extractStatementsUsingTokens(
    tokenStream: TokenStream,
    emptySpaceTokens: number[],
    endStatementToken: number,
    startTokenIndex = 0,
): StatementPosition[] {
    let statementStartIndex = 0;
    let processingNewStatement = false;

    // Last token is EOF, so we want to get second to last
    const lastTokenIndex = tokenStream.size - 2;
    const statementPositions: StatementPosition[] = [];

    for (let index = startTokenIndex; index <= lastTokenIndex; index++) {
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
    endStatementToken: number,
): StatementPosition[] {
    statementsVisitor.visit(parseTree);
    const statementPositions = statementsVisitor.statementPositions;
    const lastAutocompleteStatement = statementPositions[statementPositions.length - 1];
    if (!lastAutocompleteStatement) {
        return [];
    }

    const lastTokenEndIndex = getLastNonEmptyTokenEndIndex(tokenStream, emptySpaceTokens);
    if (lastAutocompleteStatement.endIndex === lastTokenEndIndex) {
        return statementPositions;
    }

    // If last statement is not complete or there is an error in the query,
    // the visitor will only parse first valid n statements, so we want to tokenize the rest of the query
    const restStatements = extractStatementsUsingTokens(
        tokenStream,
        emptySpaceTokens,
        endStatementToken,
        statementsVisitor.lastTokenIndex,
    );
    if (restStatements[0] && lastAutocompleteStatement.endIndex >= restStatements[0].startIndex) {
        // Parsing methods clash too much - fallback to tokens extraction
        return [];
    }

    return [...statementPositions, ...restStatements];
}

function getLastNonEmptyTokenEndIndex(
    tokenStream: TokenStream,
    emptySpaceTokens: number[],
): number {
    // Last token is EOF, so we want to get second to last
    const lastTokenIndex = tokenStream.size - 2;

    for (let index = lastTokenIndex; index >= 0; index--) {
        const token = tokenStream.get(index);
        if (!emptySpaceTokens.includes(token.type)) {
            return token.start + (token.text?.length || 0);
        }
    }

    return -1;
}

export function getStatementEndIndex(stopToken: Token, semicolon: TerminalNode | null): number {
    if (semicolon) {
        return semicolon.symbol.start + 1;
    }

    // Sometimes stopToken is EOF token, so we want to return its start index
    if (stopToken.type === -1) {
        return stopToken.start;
    }

    return stopToken.start + (stopToken.text?.length ?? 0);
}
