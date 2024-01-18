import * as c3 from 'antlr4-c3';

export class TableSymbol extends c3.TypedSymbol {
    public name: string;
    public alias: string | undefined;

    public constructor(name: string, alias?: string, type?: c3.IType) {
        super(name, type);

        this.name = name;
        this.alias = alias;
    }
}
