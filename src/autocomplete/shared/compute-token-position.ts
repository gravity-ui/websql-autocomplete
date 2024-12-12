import {ParseTree, ParserRuleContext, TerminalNode, Token, TokenStream} from 'antlr4ng';

import {CursorPosition} from './autocomplete-types';

type TokenPosition = {index: number; context: ParseTree; text: string};

export function computeTokenPosition(
    parseTree: ParseTree | null,
    tokens: TokenStream,
    caretPosition: CursorPosition,
    identifierTokenTypes: number[] = [],
): TokenPosition | undefined {
    if (!parseTree) {
        return;
    }
    if (parseTree instanceof TerminalNode) {
        return computeTokenPositionOfTerminal(
            parseTree,
            tokens,
            caretPosition,
            identifierTokenTypes,
        );
    } else {
        return computeTokenPositionOfChildNode(
            parseTree as ParserRuleContext,
            tokens,
            caretPosition,
            identifierTokenTypes,
        );
    }
}

function positionOfToken(
    token: Token,
    text: string,
    caretPosition: CursorPosition,
    identifierTokenTypes: number[],
    parseTree: ParseTree,
): TokenPosition | undefined {
    const start = token.column;
    const stop = token.column + text.length;
    if (
        token.line === caretPosition.line &&
        start <= caretPosition.column &&
        stop >= caretPosition.column
    ) {
        let index = token.tokenIndex;
        if (identifierTokenTypes.includes(token.type)) {
            index--;
        }
        return {
            index,
            context: parseTree,
            text: text.substring(0, caretPosition.column - start),
        };
        //it means token is eof
    } else if (token.start > token.stop) {
        return {
            index: token.tokenIndex,
            context: parseTree,
            text: text.substring(0, caretPosition.column),
        };
    } else {
        return undefined;
    }
}

function computeTokenPositionOfTerminal(
    parseTree: TerminalNode,
    _tokens: TokenStream,
    caretPosition: CursorPosition,
    identifierTokenTypes: number[],
): TokenPosition | undefined {
    const token = parseTree.symbol;
    const text = parseTree.getText();
    return positionOfToken(token, text, caretPosition, identifierTokenTypes, parseTree);
}

function computeTokenPositionOfChildNode(
    parseTree: ParserRuleContext,
    tokens: TokenStream,
    caretPosition: CursorPosition,
    identifierTokenTypes: number[],
): TokenPosition | undefined {
    if (
        (parseTree.start && parseTree.start.line > caretPosition.line) ||
        (parseTree.stop && parseTree.stop.line < caretPosition.line)
    ) {
        return undefined;
    }
    for (let i = 0; i < parseTree.getChildCount(); i++) {
        const position = computeTokenPosition(
            parseTree.getChild(i),
            tokens,
            caretPosition,
            identifierTokenTypes,
        );
        if (position !== undefined) {
            return position;
        }
    }
    if (parseTree.start && parseTree.stop) {
        for (let i = parseTree.start.tokenIndex; i <= parseTree.stop.tokenIndex; i++) {
            const pos = positionOfToken(
                tokens.get(i),
                tokens.get(i).text ?? '',
                caretPosition,
                identifierTokenTypes,
                parseTree,
            );
            if (pos) {
                return pos;
            }
        }
    }
    return undefined;
}
