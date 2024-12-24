import {ParseTree, ParserRuleContext, TerminalNode, Token, TokenStream} from 'antlr4ng';

import {CursorPosition} from './autocomplete-types';

type TokenContext = {index: number; context: ParseTree; text: string};

export function computeTokenContext(
    parseTree: ParseTree,
    tokenStream: TokenStream,
    cursorPosition: CursorPosition,
    identifierTokenTypes: number[] = [],
): TokenContext | undefined {
    if (parseTree instanceof TerminalNode) {
        return computeTokenContextOfTerminalNode(parseTree, cursorPosition, identifierTokenTypes);
    }
    return computeTokenContextOfChildNode(
        parseTree as ParserRuleContext,
        tokenStream,
        cursorPosition,
        identifierTokenTypes,
    );
}

function getTokenContext(
    token: Token,
    text: string,
    cursorPosition: CursorPosition,
    identifierTokenTypes: number[],
    parseTree: ParseTree,
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
        //to get context correctly we need to take previous token i.e.
        // "select | from" - need to get match with `select` token
        start <= cursorPosition.column - 2 &&
        stop >= cursorPosition.column - 2
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
): TokenContext | undefined {
    const token = parseTree.symbol;
    const text = parseTree.getText();
    return getTokenContext(token, text, cursorPosition, identifierTokenTypes, parseTree);
}

function computeTokenContextOfChildNode(
    parseTree: ParserRuleContext,
    tokenStream: TokenStream,
    cursorPosition: CursorPosition,
    identifierTokenTypes: number[],
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
        const tokenContext = computeTokenContext(
            child,
            tokenStream,
            cursorPosition,
            identifierTokenTypes,
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
        );
        if (tokenContext) {
            return tokenContext;
        }
    }

    return undefined;
}
