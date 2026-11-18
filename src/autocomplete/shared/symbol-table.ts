import * as c3 from 'antlr4-c3';
import {ColumnAliasSuggestion, SymbolTableVisitor, Table} from './autocomplete-types.js';
import {ParseTree} from 'antlr4ng';

export class TableSymbol extends c3.TypedSymbol {
    name: string;
    alias: string | undefined;
    columns?: string[];

    constructor(name: string, alias?: string, columns?: string[], type?: c3.IType) {
        super(name, type);

        this.name = name;
        this.alias = alias;
        this.columns = columns;
    }
}

export class VariableSymbol extends c3.VariableSymbol {
    value: {columns?: string[]} | undefined;
}

export function getUniqueTableSuggestions(symbols: TableSymbol[] = []): Table[] {
    const suggestionsMap = new Map<
        string,
        {name: string; aliases: Set<string>; columns?: string[]}
    >();

    symbols.forEach(({name, alias, columns}) => {
        // Subqueries have no name, so they are told apart by alias, otherwise columns get mixed up
        const key = name || `subquery:${alias ?? ''}`;
        const suggestion = suggestionsMap.get(key) ?? {name, aliases: new Set<string>()};

        if (alias) {
            suggestion.aliases.add(alias);
        }
        suggestion.columns = columns;
        suggestionsMap.set(key, suggestion);
    });

    const tables: Table[] = [];
    suggestionsMap.forEach(({name, aliases, columns}) => {
        if (aliases.size > 0) {
            aliases.forEach((alias) => tables.push({name, alias, columns}));
        } else {
            tables.push({name, columns});
        }
    });

    return tables;
}

export function getTablesFromSymbolTable(visitor: SymbolTableVisitor): Table[] {
    const suggestions = visitor.symbolTable.getNestedSymbolsOfTypeSync(TableSymbol);
    return getUniqueTableSuggestions(suggestions);
}

export class ColumnAliasSymbol extends c3.TypedSymbol {
    name: string;

    constructor(name: string, type?: c3.IType) {
        super(name, type);

        this.name = name;
    }
}

export function getColumnAliasesFromSymbolTable(
    visitor: SymbolTableVisitor,
): ColumnAliasSuggestion[] {
    return visitor.symbolTable
        .getNestedSymbolsOfTypeSync(ColumnAliasSymbol)
        .map(({name}) => ({name}));
}

export function getScope(
    context: ParseTree,
    symbolTable: c3.SymbolTable,
): c3.BaseSymbol | undefined {
    const scope = symbolTable.symbolWithContextSync(context);
    if (scope) {
        return scope;
    }
    if (!context.parent) {
        return undefined;
    }
    return getScope(context.parent, symbolTable);
}
