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

const identifierRegex = /^([A-Za-z_][\w$]*|"[^"]+"|`[^`]+`)$/;

// Name of the subquery result column for a select item without alias:
// a qualified column (t.column) gives "column", any other expression is kept as is
export function getSubqueryColumnName(expressionText: string): string {
    const parts = expressionText.split('.');
    if (parts.every((part) => identifierRegex.test(part))) {
        return parts[parts.length - 1] ?? expressionText;
    }

    return expressionText;
}
