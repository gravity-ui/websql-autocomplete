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

    const tokenPosion = computeTokenPosition(parseTree, tokenStream, cursor);

    if (!tokenPosion) {
        throw new Error(`Could not find tokenPosion at Ln ${cursor.line}, Col ${cursor.column}`);
    }

    const symbolTable: c3.SymbolTable | null = symbolVariableVisitor.visit(parseTree) as any;

    const variables = suggestVariables(symbolTable, tokenPosion.context);

    return variables;
}

function suggestVariables(symbolTable: c3.SymbolTable | null, context?: ParseTree): string[] {
    const scope = getScope(context, symbolTable);
    let symbols: c3.VariableSymbol[] = [];
    if (scope instanceof c3.ScopedSymbol) {
        //Local scope
        symbols = scope.getNestedSymbolsOfTypeSync(c3.VariableSymbol);
    } else if (symbolTable) {
        //Global scope
        symbols = symbolTable
            .getNestedSymbolsOfTypeSync(c3.VariableSymbol)
            //if symbol's parent has context it means it is local scoped, so no need to suggest it in global scope
            .filter((sym) => !sym.parent?.context);
    }
    return symbols.map((s) => s.name);
}
