import {Token, tokenize} from '../../shared/tokenize';
import {postgreSqlAutocompleteData} from './postgresql-autocomplete';
import {PostgreSqlLexer} from './generated/PostgreSqlLexer';
import {CursorPosition} from '../../shared';

export interface PostgreSqlStatement {
    startLine: number;
    endLine: number;
    startColumn: number;
    endColumn: number;
    statement: string;
    hasCursor?: boolean;
}

export function extractPostgreSqlStatementsFromQuery(
    query: string,
    cursorPosition?: CursorPosition,
): PostgreSqlStatement[] {
    const {tokens} = tokenize(
        postgreSqlAutocompleteData.Lexer,
        PostgreSqlLexer.symbolicNames,
        postgreSqlAutocompleteData.tokenDictionary.SPACE,
        query,
    );

    let startLine = 0;
    let startColumn = 0;
    let statementStartIndex = 0;
    let pendingNewStatement = true;
    let lastStatementToken: Token;

    const tokenDictionary = postgreSqlAutocompleteData.tokenDictionary;
    const statements: PostgreSqlStatement[] = [];

    tokens.forEach((token, index) => {
        const isNewlineOrSpaceToken = [PostgreSqlLexer.Newline, tokenDictionary.SPACE].includes(
            token.type,
        );
        const isSemicolonToken = token.type === tokenDictionary.SEMICOLON;

        if (pendingNewStatement && isNewlineOrSpaceToken) {
            return;
        }

        if (pendingNewStatement) {
            pendingNewStatement = false;
            statementStartIndex = token.startIndex;
            startColumn = token.column;
            startLine = token.line;
        }

        if (!isNewlineOrSpaceToken && !isSemicolonToken) {
            lastStatementToken = token;
        }

        if (isSemicolonToken && statementStartIndex === token.startIndex) {
            pendingNewStatement = true;
            return;
        }

        if (isSemicolonToken || index === tokens.length - 1) {
            const statement: PostgreSqlStatement = {
                startLine,
                endLine: lastStatementToken.line,
                startColumn,
                endColumn: lastStatementToken.column + (lastStatementToken.text?.length || 0),
                statement: query.slice(
                    statementStartIndex,
                    lastStatementToken.startIndex + (lastStatementToken.text?.length || 0),
                ),
            };

            if (cursorPosition) {
                statement.hasCursor = hasCursorInStatement(cursorPosition, statement);
            }

            statements.push(statement);
        }

        if (isSemicolonToken) {
            pendingNewStatement = true;
        }
    });

    return statements;
}

function hasCursorInStatement(
    cursorPosition: CursorPosition,
    statement: PostgreSqlStatement,
): boolean {
    const cursorIncludedFromLeft =
        cursorPosition.line > statement.startLine ||
        (cursorPosition.line === statement.startLine &&
            cursorPosition.column > statement.startColumn);

    const cursorIncludedToRight =
        cursorPosition.line < statement.endLine ||
        (cursorPosition.line === statement.endLine && cursorPosition.column <= statement.endColumn);

    return cursorIncludedFromLeft && cursorIncludedToRight;
}
