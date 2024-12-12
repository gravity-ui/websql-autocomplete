import {ParseTree, ParserRuleContext, TerminalNode, Token, TokenStream} from 'antlr4ng';

import {CursorPosition} from './autocomplete-types';

type TokenPosition = {index: number; context: ParseTree; text: string};

export function computeTokenPosition(
    parseTree: ParseTree | null,
    tokenStream: TokenStream,
    cursorPosition: CursorPosition,
    identifierTokenTypes: number[] = [],
): TokenPosition | undefined {
    if (!parseTree) {
        return;
    }
    if (parseTree instanceof TerminalNode) {
        return computeTokenPositionOfTerminalNode(parseTree, cursorPosition, identifierTokenTypes);
    }
    return computeTokenPositionOfChildNode(
        parseTree as ParserRuleContext,
        tokenStream,
        cursorPosition,
        identifierTokenTypes,
    );
}

function getTokenPosition(
    token: Token,
    text: string,
    cursorPosition: CursorPosition,
    identifierTokenTypes: number[],
    parseTree: ParseTree,
): TokenPosition | undefined {
    const start = token.column;
    const stop = token.column + text.length;

    //it means token is eof
    if (token.start > token.stop) {
        return {
            index: token.tokenIndex,
            context: parseTree,
            text: text.substring(0, cursorPosition.column),
        };
    }

    if (
        token.line === cursorPosition.line &&
        start <= cursorPosition.column &&
        stop >= cursorPosition.column
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

function computeTokenPositionOfTerminalNode(
    parseTree: TerminalNode,
    cursorPosition: CursorPosition,
    identifierTokenTypes: number[],
): TokenPosition | undefined {
    const token = parseTree.symbol;
    const text = parseTree.getText();
    return getTokenPosition(token, text, cursorPosition, identifierTokenTypes, parseTree);
}

function computeTokenPositionOfChildNode(
    parseTree: ParserRuleContext,
    tokenStream: TokenStream,
    cursorPosition: CursorPosition,
    identifierTokenTypes: number[],
): TokenPosition | undefined {
    if (
        !parseTree.start ||
        !parseTree.stop ||
        parseTree.start.line > cursorPosition.line ||
        parseTree.stop.line < cursorPosition.line
    ) {
        return undefined;
    }

    for (let i = 0; i < parseTree.getChildCount(); i++) {
        const tokenPosition = computeTokenPosition(
            parseTree.getChild(i),
            tokenStream,
            cursorPosition,
            identifierTokenTypes,
        );
        if (tokenPosition !== undefined) {
            return tokenPosition;
        }
    }

    for (let i = parseTree.start.tokenIndex; i <= parseTree.stop.tokenIndex; i++) {
        const tokenPosition = getTokenPosition(
            tokenStream.get(i),
            tokenStream.get(i).text ?? '',
            cursorPosition,
            identifierTokenTypes,
            parseTree,
        );
        if (tokenPosition) {
            return tokenPosition;
        }
    }

    return undefined;
}
