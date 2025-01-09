import {ParseTree, ParserRuleContext, TerminalNode, Token, TokenStream} from 'antlr4ng';

import {CursorPosition} from './autocomplete-types';

type TokenContext = {index: number; context: ParseTree; text: string};

function getWhitespaceBeforeCursor(
    tokenStream: TokenStream,
    cursorPosition: CursorPosition,
    whitespaceTokenTypes: number[],
): number {
    for (let i = 0; i < tokenStream.size; i++) {
        const token = tokenStream.get(i);
        const tokenStart = token.column;
        const tokenLength = token.text?.length ?? 0;
        const tokenStop = token.column + tokenLength;
        // If it is token before cursor
        if (
            token.line === cursorPosition.line &&
            tokenStart <= cursorPosition.column - 1 &&
            tokenStop >= cursorPosition.column - 1 &&
            whitespaceTokenTypes.includes(token.type)
        ) {
            let j = i - 1;
            while (j >= 0) {
                const prevToken = tokenStream.get(j);
                if (whitespaceTokenTypes.includes(prevToken.type)) {
                    j -= 1;
                } else {
                    return i + 1 - j;
                }
            }
        }
    }
    return 0;
}

export function computeTokenContext(
    parseTree: ParseTree,
    tokenStream: TokenStream,
    cursorPosition: CursorPosition,
    identifierTokenTypes: number[] = [],
    whitespaceTokenTypes: number[] = [],
): TokenContext | undefined {
    const whitespacesBeforeCursor = getWhitespaceBeforeCursor(
        tokenStream,
        cursorPosition,
        whitespaceTokenTypes,
    );
    return computeTokenContextInternal(
        parseTree,
        tokenStream,
        cursorPosition,
        identifierTokenTypes,
        whitespacesBeforeCursor,
    );
}

function computeTokenContextInternal(
    parseTree: ParseTree,
    tokenStream: TokenStream,
    cursorPosition: CursorPosition,
    identifierTokenTypes: number[] = [],
    whitespacesBeforeCursor: number,
): TokenContext | undefined {
    if (parseTree instanceof TerminalNode) {
        return computeTokenContextOfTerminalNode(
            parseTree,
            cursorPosition,
            identifierTokenTypes,
            whitespacesBeforeCursor,
        );
    }
    return computeTokenContextOfChildNode(
        parseTree as ParserRuleContext,
        tokenStream,
        cursorPosition,
        identifierTokenTypes,
        whitespacesBeforeCursor,
    );
}

function getTokenContext(
    token: Token,
    text: string,
    cursorPosition: CursorPosition,
    identifierTokenTypes: number[],
    parseTree: ParseTree,
    whitespacesBeforeCursor: number,
): TokenContext | undefined {
    const start = token.column;
    const stop = token.column + text.length;
    // It means token is eof
    if (token.start > token.stop) {
        return {
            index: token.tokenIndex,
            context: parseTree,
            text: text.substring(0, cursorPosition.column),
        };
    }

    if (
        token.line === cursorPosition.line &&
        // To get context correctly we need to take previous token i.e.
        // "select | from" - need to get match with `select` token
        start <= cursorPosition.column - 1 - whitespacesBeforeCursor &&
        stop >= cursorPosition.column - 1 - whitespacesBeforeCursor
    ) {
        let index = token.tokenIndex;
        if (identifierTokenTypes.includes(token.type)) {
            index--;
        }
        return {
            index,
            context: parseTree,
            text: text.substring(0, cursorPosition.column - start),
        };
    }

    return undefined;
}

function computeTokenContextOfTerminalNode(
    parseTree: TerminalNode,
    cursorPosition: CursorPosition,
    identifierTokenTypes: number[],
    whitespacesBeforeCursor: number,
): TokenContext | undefined {
    const token = parseTree.symbol;
    const text = parseTree.getText();
    return getTokenContext(
        token,
        text,
        cursorPosition,
        identifierTokenTypes,
        parseTree,
        whitespacesBeforeCursor,
    );
}

function computeTokenContextOfChildNode(
    parseTree: ParserRuleContext,
    tokenStream: TokenStream,
    cursorPosition: CursorPosition,
    identifierTokenTypes: number[],
    whitespacesBeforeCursor: number,
): TokenContext | undefined {
    if (
        !parseTree.start ||
        !parseTree.stop ||
        parseTree.start.line > cursorPosition.line ||
        parseTree.stop.line < cursorPosition.line
    ) {
        return undefined;
    }

    for (let i = 0; i < parseTree.getChildCount(); i++) {
        const child = parseTree.getChild(i);
        if (!child) {
            continue;
        }
        const tokenContext = computeTokenContextInternal(
            child,
            tokenStream,
            cursorPosition,
            identifierTokenTypes,
            whitespacesBeforeCursor,
        );
        if (tokenContext) {
            return tokenContext;
        }
    }

    for (let i = parseTree.start.tokenIndex; i <= parseTree.stop.tokenIndex; i++) {
        const tokenContext = getTokenContext(
            tokenStream.get(i),
            tokenStream.get(i).text ?? '',
            cursorPosition,
            identifierTokenTypes,
            parseTree,
            whitespacesBeforeCursor,
        );
        if (tokenContext) {
            return tokenContext;
        }
    }

    return undefined;
}
