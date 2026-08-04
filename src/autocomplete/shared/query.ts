import {CharStream, CommonTokenStream, Lexer as LexerType, Parser as ParserType} from 'antlr4ng';

import {
    CursorPosition,
    LexerConstructor,
    ParserConstructor,
    ParserOptions,
} from './autocomplete-types.js';
import {getCursorIndex} from './cursor.js';

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
    parserOptions?: ParserOptions,
): P {
    const lexer = createLexer(Lexer, query, parserOptions);
    const tokenStream = new CommonTokenStream(lexer);
    const parser = new Parser(tokenStream);

    parser.removeErrorListeners();

    return parser;
}

export function createLexer<L extends LexerType>(
    Lexer: LexerConstructor<L>,
    query: string,
    parserOptions?: ParserOptions,
): L {
    const inputStream = CharStream.fromString(query);
    const lexer = new Lexer(inputStream);

    // Only the dialects whose grammars declare the token have the field, the rest ignore the option
    if ('doubleCurlyPlaceholdersEnabled' in lexer) {
        lexer.doubleCurlyPlaceholdersEnabled =
            parserOptions?.doubleCurlyPlaceholdersEnabled ?? false;
    }

    return lexer;
}
