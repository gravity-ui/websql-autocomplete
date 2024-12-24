import * as c3 from 'antlr4-c3';
import {ColumnAliasSuggestion, SymbolTableVisitor, Table} from './autocomplete-types';
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

export function getUniqueTableSuggestions(symbols: TableSymbol[] = []): Table[] {
    const suggestionsMap = symbols.reduce(
        (acc, table) => {
            const aliases = acc[table.name]?.aliases ?? new Set();
            if (table.alias) {
                aliases.add(table.alias);
            }

            // It's fine to assign to accumulator here
            // eslint-disable-next-line no-param-reassign
            acc[table.name] = {aliases, columns: table.columns};
            return acc;
        },
        {} as Record<string, {aliases: Set<string>; columns?: string[]}>,
    );
    return Object.keys(suggestionsMap).reduce((acc, tableName) => {
        const aliases = suggestionsMap[tableName]?.aliases;
        const columns = suggestionsMap[tableName]?.columns;
        if (aliases && aliases.size > 0) {
            aliases?.forEach((alias) => {
                acc.push({name: tableName, alias, columns});
            });
        } else {
            acc.push({name: tableName, columns});
        }

        return acc;
    }, [] as Table[]);
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
