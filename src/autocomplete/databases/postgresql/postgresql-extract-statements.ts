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
    let processingNewStatement = false;
    let lastStatementToken: Token;

    const tokenDictionary = postgreSqlAutocompleteData.tokenDictionary;
    const statements: PostgreSqlStatement[] = [];

    tokens.forEach((token, index) => {
        const isNewlineOrSpaceToken = [PostgreSqlLexer.Newline, tokenDictionary.SPACE].includes(
            token.type,
        );
        const isSemicolonToken = token.type === tokenDictionary.SEMICOLON;

        if (!processingNewStatement && isNewlineOrSpaceToken) {
            return;
        }

        if (!processingNewStatement) {
            processingNewStatement = true;
            statementStartIndex = token.startIndex;
            startColumn = token.columnIndex + 1;
            startLine = token.line;
        }

        if (!isNewlineOrSpaceToken && !isSemicolonToken) {
            lastStatementToken = token;
        }

        if (isSemicolonToken && statementStartIndex === token.startIndex) {
            processingNewStatement = false;
            return;
        }

        if (isSemicolonToken || index === tokens.length - 1) {
            const statement: PostgreSqlStatement = {
                startLine,
                endLine: lastStatementToken.line,
                startColumn,
                endColumn:
                    lastStatementToken.columnIndex + 1 + getTokenTextLength(lastStatementToken),
                statement: query.slice(
                    statementStartIndex,
                    lastStatementToken.startIndex + getTokenTextLength(lastStatementToken),
                ),
            };

            if (cursorPosition) {
                statement.hasCursor = hasCursorInStatement(cursorPosition, statement);
            }

            statements.push(statement);
        }

        if (isSemicolonToken) {
            processingNewStatement = false;
        }
    });

    return statements;
}

function getTokenTextLength(token: Token): number {
    return token.text?.length || 0;
}

function hasCursorInStatement(
    cursorPosition: CursorPosition,
    statement: PostgreSqlStatement,
): boolean {
    const isCursorAfterStart =
        cursorPosition.line > statement.startLine ||
        (cursorPosition.line === statement.startLine &&
            cursorPosition.column > statement.startColumn);

    const isCursorBeforeEnd =
        cursorPosition.line < statement.endLine ||
        (cursorPosition.line === statement.endLine && cursorPosition.column <= statement.endColumn);

    return isCursorAfterStart && isCursorBeforeEnd;
}
