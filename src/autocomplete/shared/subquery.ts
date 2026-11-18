import {ParseTree} from 'antlr4ng';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ContextConstructor<T> = abstract new (...args: any[]) => T;

// Depth-first search, so the outermost matching context is found first,
// e.g. the first SELECT of UNION, not the one nested in it
export function findFirstContextOfType<T extends ParseTree>(
    tree: ParseTree,
    type: ContextConstructor<T>,
): T | undefined {
    if (tree instanceof type) {
        return tree;
    }

    for (let i = 0; i < tree.getChildCount(); i++) {
        const child = tree.getChild(i);
        const context = child ? findFirstContextOfType(child, type) : undefined;
        if (context) {
            return context;
        }
    }

    return undefined;
}

const identifier = '[A-Za-z_][\\w$]*|"(?:[^"]|"")*"|`(?:[^`]|``)*`';
// A column reference like column, table.column or "schema"."table"."column.with.dots"
const columnReferenceRegex = new RegExp(`^(?:(?:${identifier})\\.)*(${identifier})$`);

// Last identifier of a column reference (t.column -> column),
// undefined if the expression is not a column reference
export function getColumnReferenceName(expressionText: string): string | undefined {
    return columnReferenceRegex.exec(expressionText)?.[1];
}

// Name of the subquery result column for a select item without alias:
// a column reference (t.column) gives its last identifier, any other expression is kept as is
export function getSubqueryColumnName(expressionText: string): string {
    return getColumnReferenceName(expressionText) ?? expressionText;
}
