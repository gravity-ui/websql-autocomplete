import {CharStream, CommonTokenStream, Lexer as LexerType, Parser as ParserType} from 'antlr4ng';

import {CursorPosition, LexerConstructor, ParserConstructor} from './autocomplete-types';
import {getCursorIndex} from './cursor';
import {PlaceholderTokenSource} from './placeholder-token-source';

export function getCurrentStatement(
    query: string,
    cursorIndex: number,
): {statement: string; cursorIndex: number} {
    const textBeforeCursor = query.slice(0, cursorIndex - 1);
    const textAfterCursor = query.slice(cursorIndex - 1);

    const semiColonBeforeIndex = textBeforeCursor.lastIndexOf(';');
    const semiColonAfterIndex = textAfterCursor.indexOf(';');

    const statementStartIndex = semiColonBeforeIndex > -1 ? semiColonBeforeIndex + 1 : 0;
    const statementEndIndex =
        semiColonAfterIndex > -1 ? semiColonAfterIndex + textBeforeCursor.length : query.length;

    const statement = query.slice(statementStartIndex, statementEndIndex);
    const newCursorIndex = cursorIndex - statementStartIndex;

    return {statement, cursorIndex: newCursorIndex};
}

const spaceSymbols = '(\\s|\r\n|\n|\r)+';
const explainRegex = new RegExp(`^(${spaceSymbols})?explain${spaceSymbols}$`);
const multipleKeywordsRegex = new RegExp(`^(${spaceSymbols})?\\S+${spaceSymbols}`);

// TODO Find a better way to suggestTemplates
export function shouldSuggestTemplates(query: string, cursor: CursorPosition): boolean {
    const cursorIndex = getCursorIndex(query, cursor);
    const currentStatement = getCurrentStatement(query, cursorIndex);
    const currentStatementBeforeCursor = currentStatement.statement
        .slice(0, currentStatement.cursorIndex)
        .toLowerCase();

    return Boolean(
        cursorIndex === 0 ||
            // First keyword in statement
            !currentStatementBeforeCursor.match(multipleKeywordsRegex) ||
            // Explain statement
            currentStatementBeforeCursor.match(explainRegex),
    );
}

export function createParser<L extends LexerType, P extends ParserType>(
    Lexer: LexerConstructor<L>,
    Parser: ParserConstructor<P>,
    query: string,
    // When provided, `{{ ... }}` placeholders are collapsed into a single synthetic
    // token of this native token type, so the unchanged grammar accepts them.
    placeholderTokenType?: number,
): P {
    const inputStream = CharStream.fromString(query);
    const lexer = new Lexer(inputStream);
    const tokenSource =
        placeholderTokenType === undefined
            ? lexer
            : new PlaceholderTokenSource(lexer, placeholderTokenType);
    const tokenStream = new CommonTokenStream(tokenSource);
    const parser = new Parser(tokenStream);

    parser.removeErrorListeners();

    return parser;
}

export function createLexer<L extends LexerType>(Lexer: LexerConstructor<L>, query: string): L {
    const inputStream = CharStream.fromString(query);
    return new Lexer(inputStream);
}
