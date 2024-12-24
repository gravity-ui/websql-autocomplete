import * as c3 from 'antlr4-c3';
import {Lexer as LexerType, ParseTree, Parser as ParserType, TokenStream} from 'antlr4ng';
import {createParser} from './query';
import {
    ColumnAliasSuggestion,
    CursorPosition,
    GetParseTree,
    LexerConstructor,
    ParserConstructor,
    SqlAutocompleteResult,
    SymbolTableVisitor,
    Table,
    TableContextSuggestion,
} from './autocomplete-types';
import {ColumnAliasSymbol, TableSymbol, getScope, getUniqueTableSuggestions} from './symbol-table';
import {computeTokenContext} from './compute-token-position';

interface ContextSuggestions {
    tableContextSuggestion?: TableContextSuggestion;
    suggestColumnAliases?: SqlAutocompleteResult['suggestColumnAliases'];
}

export function getTablesSuggestions<L extends LexerType, P extends ParserType>(
    Lexer: LexerConstructor<L>,
    Parser: ParserConstructor<P>,
    symbolTableVisitor: SymbolTableVisitor,
    getParseTree: GetParseTree<P>,
    tokenStream: TokenStream,
    cursor: CursorPosition,
    query: string,
): ContextSuggestions {
    const result: ContextSuggestions = {};
    const parser = createParser(Lexer, Parser, query);
    const parseTree = getParseTree(parser);
    const tokenPosition = computeTokenContext(parseTree, tokenStream, cursor);

    if (!tokenPosition) {
        throw new Error(`Could not find tokenPosition at Ln ${cursor.line}, Col ${cursor.column}`);
    }

    symbolTableVisitor.visit(parseTree);

    const tables = suggestTables(symbolTableVisitor.symbolTable, tokenPosition.context);

    const columnAliases = suggestColumnAliases(
        symbolTableVisitor.symbolTable,
        tokenPosition.context,
    );

    if (tables.length) {
        result.tableContextSuggestion = {
            tables,
        };
    }
    if (columnAliases.length) {
        result.suggestColumnAliases = columnAliases;
    }
    return result;
}

function suggestTables(symbolTable: c3.SymbolTable, context: ParseTree): Table[] {
    const scope = getScope(context, symbolTable);
    let symbols: TableSymbol[] = [];
    // Local scope
    if (scope instanceof c3.ScopedSymbol) {
        symbols = scope
            .getNestedSymbolsOfTypeSync(TableSymbol)
            .filter((sym) => sym.parent?.context === scope.context);

        // Global scope
    } else if (symbolTable) {
        symbols = symbolTable.getNestedSymbolsOfTypeSync(TableSymbol);
    }

    const tables = getUniqueTableSuggestions(symbols);

    return tables;
}

function suggestColumnAliases(
    symbolTable: c3.SymbolTable,
    context: ParseTree,
): ColumnAliasSuggestion[] {
    const scope = getScope(context, symbolTable);
    let symbols: ColumnAliasSymbol[] = [];

    // Local scope
    if (scope instanceof c3.ScopedSymbol) {
        symbols = scope
            .getNestedSymbolsOfTypeSync(ColumnAliasSymbol)
            .filter((sym) => sym.parent?.context === scope.context);

        // Global scope
    } else if (symbolTable) {
        symbols = symbolTable.getNestedSymbolsOfTypeSync(ColumnAliasSymbol);
    }

    return symbols.map(({name}) => ({name}));
}
