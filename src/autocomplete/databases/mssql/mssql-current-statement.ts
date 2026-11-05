import {BaseErrorListener, CommonTokenStream, Token, TokenStream} from 'antlr4ng';

import {CursorPosition, StatementPosition} from '../../shared/autocomplete-types.js';
import {findCursorTokenIndex} from '../../shared/cursor.js';
import {createLexer} from '../../shared/query.js';
import {TSqlLexer} from './generated/TSqlLexer.js';
import {TSqlParser} from './generated/TSqlParser.js';
import {MsSqlStatementsVisitor} from './mssql-extract-statements.js';

const statementStartTokens = new Set([
    TSqlParser.SELECT,
    TSqlParser.INSERT,
    TSqlParser.UPDATE,
    TSqlParser.DELETE,
    TSqlParser.MERGE,
    TSqlParser.WITH,
    TSqlParser.CREATE,
    TSqlParser.ALTER,
    TSqlParser.DROP,
    TSqlParser.TRUNCATE,
    TSqlParser.USE,
]);

class FirstSyntaxErrorListener extends BaseErrorListener {
    index = Infinity;

    override syntaxError(_recognizer: unknown, offendingSymbol: Token | null): void {
        if (offendingSymbol) {
            this.index = Math.min(this.index, offendingSymbol.start);
        }
    }
}

function getBracketsDepth(tokenStream: TokenStream, startIndex: number, endIndex: number): number {
    let depth = 0;
    for (let i = 0; i < tokenStream.size; i++) {
        const token = tokenStream.get(i);
        if (token.start < startIndex || token.start >= endIndex) {
            continue;
        }

        if (token.type === TSqlParser.LR_BRACKET) {
            depth++;
        } else if (token.type === TSqlParser.RR_BRACKET) {
            depth--;
        }
    }

    return depth;
}

// Context suggestions rely on semicolons to find the current statement, but they are optional in T-SQL.
// So we replace other statements with spaces, positions of the current statement stay the same.
// Query with cursor is not valid, and parser splits it into odd statements while recovering from errors.
// That's why we only trust statements that start with a statement keyword
export function getMsSqlCurrentStatementQuery(
    query: string,
    tokenStream: TokenStream,
    cursor: CursorPosition,
): string {
    const cursorTokenIndex = findCursorTokenIndex(tokenStream, cursor, TSqlParser.SPACE, true);
    if (cursorTokenIndex === undefined) {
        return query;
    }

    // Lexer errors are already reported by the main parser
    const lexer = createLexer(TSqlLexer, query);
    lexer.removeErrorListeners();
    const parser = new TSqlParser(new CommonTokenStream(lexer));
    const errorListener = new FirstSyntaxErrorListener();
    parser.removeErrorListeners();
    parser.addErrorListener(errorListener);
    const statementsVisitor = new MsSqlStatementsVisitor();
    statementsVisitor.visit(parser.tsql_file());

    const tokenTypeByStartIndex = new Map<number, number>();
    for (let i = 0; i < tokenStream.size; i++) {
        const token = tokenStream.get(i);
        tokenTypeByStartIndex.set(token.start, token.type);
    }

    const isStatementStart = ({startIndex}: StatementPosition): boolean =>
        statementStartTokens.has(tokenTypeByStartIndex.get(startIndex) ?? Token.INVALID_TYPE);

    // Token positions are counted in code points, not in UTF-16 code units
    const cursorIndex = tokenStream.get(cursorTokenIndex).start;
    const statements = statementsVisitor.statementPositions;
    let startIndex = 0;
    let endIndex = Infinity;
    statements.forEach((statement, index) => {
        const previousStatement = statements[index - 1];
        if (
            previousStatement &&
            statement.startIndex <= cursorIndex &&
            previousStatement.endIndex <= errorListener.index &&
            isStatementStart(statement)
        ) {
            startIndex = statement.startIndex;
        }

        if (
            endIndex === Infinity &&
            statement.startIndex > cursorIndex &&
            isStatementStart(statement) &&
            getBracketsDepth(tokenStream, cursorIndex, statement.startIndex) === 0
        ) {
            endIndex = statement.startIndex;
        }
    });

    return Array.from(query)
        .map((character, index) =>
            (index < startIndex || index >= endIndex) && character !== '\n' && character !== '\r'
                ? ' '
                : character,
        )
        .join('');
}
