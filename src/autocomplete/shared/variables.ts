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
import {getScope} from './symbol-table';
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

    const tokenPosition = computeTokenContext(parseTree, tokenStream, cursor);

    if (!tokenPosition) {
        throw new Error(`Could not find tokenPosition at Ln ${cursor.line}, Col ${cursor.column}`);
    }

    symbolVariableVisitor.visit(parseTree);

    return suggestVariables(symbolVariableVisitor.symbolTable, tokenPosition.context);
}

function suggestVariables(symbolTable: c3.SymbolTable, context: ParseTree): VariableSuggestion[] {
    const scope = getScope(context, symbolTable);
    let symbols: c3.VariableSymbol[] = [];

    // Local scope
    if (scope instanceof c3.ScopedSymbol) {
        symbols = scope.getNestedSymbolsOfTypeSync(c3.VariableSymbol);

        // Global scope
    } else if (symbolTable) {
        symbols = symbolTable
            .getNestedSymbolsOfTypeSync(c3.VariableSymbol)
            // If symbol's parent has context it means it is local scoped, so no need to suggest it in global scope
            .filter((symbol) => !symbol.parent?.context);
    }

    return symbols.map((symbol) => ({name: symbol.name, value: symbol.value}));
}
