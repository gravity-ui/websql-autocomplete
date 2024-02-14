import * as c3 from 'antlr4-c3';

export class TableSymbol extends c3.TypedSymbol {
    name: string;
    alias: string | undefined;

    constructor(name: string, alias?: string, type?: c3.IType) {
        super(name, type);

        this.name = name;
        this.alias = alias;
    }
}

export class ColumnAliasSymbol extends c3.TypedSymbol {
    name: string;

    constructor(name: string, type?: c3.IType) {
        super(name, type);

        this.name = name;
    }
}
