import * as c3 from 'antlr4-c3';
import {Lexer as LexerType, ParseTree, Parser as ParserType, TokenStream} from 'antlr4ng';
import {createParser} from './query';
import {
    CursorPosition,
    GetParseTree,
    LexerConstructor,
    ParserConstructor,
    SymbolTableVisitor,
} from './autocomplete-types';
import {getScope} from './symbol-table';
import {computeTokenPosition} from './compute-token-position';

export function getVariablesSuggestions<L extends LexerType, P extends ParserType>(
    Lexer: LexerConstructor<L>,
    Parser: ParserConstructor<P>,
    symbolVariableVisitor: SymbolTableVisitor,
    getParseTree: GetParseTree<P>,
    tokenStream: TokenStream,
    cursor: CursorPosition,
    query: string,
): string[] {
    const parser = createParser(Lexer, Parser, query);
    const parseTree = getParseTree(parser);

    const tokenPosition = computeTokenPosition(parseTree, tokenStream, cursor);

    if (!tokenPosition) {
        throw new Error(`Could not find tokenPosition at Ln ${cursor.line}, Col ${cursor.column}`);
    }

    symbolVariableVisitor.visit(parseTree);

    const symbolTable = symbolVariableVisitor.symbolTable;

    const variables = suggestVariables(symbolTable, tokenPosition.context);

    return variables;
}

function suggestVariables(symbolTable: c3.SymbolTable, context: ParseTree): string[] {
    const scope = getScope(context, symbolTable);
    let symbols: c3.VariableSymbol[] = [];

    //Local scope
    if (scope instanceof c3.ScopedSymbol) {
        symbols = scope.getNestedSymbolsOfTypeSync(c3.VariableSymbol);

        //Global scope
    } else if (symbolTable) {
        symbols = symbolTable
            .getNestedSymbolsOfTypeSync(c3.VariableSymbol)
            //if symbol's parent has context it means it is local scoped, so no need to suggest it in global scope
            .filter((symbol) => !symbol.parent?.context);
    }

    return symbols.map((symbol) => symbol.name);
}
