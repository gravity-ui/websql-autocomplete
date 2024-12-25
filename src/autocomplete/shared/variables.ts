import * as c3 from 'antlr4-c3';
import {Lexer as LexerType, ParseTree, Parser as ParserType, TokenStream} from 'antlr4ng';
import {createParser} from './query';
import {
    CursorPosition,
    GetParseTree,
    LexerConstructor,
    ParserConstructor,
    SymbolTableVisitor,
    VariableSuggestion,
} from './autocomplete-types';
import {VariableSymbol, getScope} from './symbol-table';
import {computeTokenContext} from './compute-token-position';

export function getVariableSuggestions<L extends LexerType, P extends ParserType>(
    Lexer: LexerConstructor<L>,
    Parser: ParserConstructor<P>,
    symbolVariableVisitor: SymbolTableVisitor,
    getParseTree: GetParseTree<P>,
    tokenStream: TokenStream,
    cursor: CursorPosition,
    query: string,
): VariableSuggestion[] {
    const parser = createParser(Lexer, Parser, query);
    const parseTree = getParseTree(parser);

    const tokenContext = computeTokenContext(parseTree, tokenStream, cursor);

    if (!tokenContext) {
        throw new Error(`Could not find tokenContext at Ln ${cursor.line}, Col ${cursor.column}`);
    }

    symbolVariableVisitor.visit(parseTree);

    return suggestVariables(symbolVariableVisitor.symbolTable, tokenContext.context);
}

function suggestVariables(symbolTable: c3.SymbolTable, context: ParseTree): VariableSuggestion[] {
    const scope = getScope(context, symbolTable);
    let symbols: VariableSymbol[] = [];

    // Local scope
    if (scope instanceof c3.ScopedSymbol) {
        symbols = scope.getNestedSymbolsOfTypeSync(VariableSymbol);

        // Global scope
    } else if (symbolTable) {
        symbols = symbolTable
            .getNestedSymbolsOfTypeSync(VariableSymbol)
            // If symbol's parent has context it means it is local scoped, so no need to suggest it in global scope
            .filter((symbol) => !symbol.parent?.context);
    }

    return symbols.map((symbol) => ({name: symbol.name, value: symbol.value}));
}
