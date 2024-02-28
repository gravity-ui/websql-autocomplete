import * as c3 from 'antlr4-c3';
import {ColumnAliasSuggestion, SymbolTableVisitor, Table} from '../autocomplete-types';

export class TableSymbol extends c3.TypedSymbol {
    name: string;
    alias: string | undefined;

    constructor(name: string, alias?: string, type?: c3.IType) {
        super(name, type);

        this.name = name;
        this.alias = alias;
    }
}

export function getTablesFromSymbolTable(visitor: SymbolTableVisitor): Table[] {
    return visitor.symbolTable.getNestedSymbolsOfTypeSync(TableSymbol).map((tableSymbol) => ({
        name: tableSymbol.name,
        alias: tableSymbol.alias,
    }));
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
