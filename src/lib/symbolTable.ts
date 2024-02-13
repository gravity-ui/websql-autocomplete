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
