import {
    AbstractParseTreeVisitor,
    CharStreams,
    CommonTokenStream,
    Lexer as LexerType,
    Parser as ParserType,
    TokenStream,
} from 'antlr4ng';
import * as c3 from 'antlr4-c3';

import {TableSymbol} from './lib/symbolTable.js';
import {SqlErrorListener} from './lib/sqlErrorListener.js';
import {getCurrentStatement, shouldSuggestTemplates} from './lib/query.js';
import {CursorPosition, findCursorTokenIndex, getCursorIndex} from './lib/cursor.js';
import {TokenDictionary, getTableQueryPosition} from './lib/tables.js';
import {
    AutocompleteParseResult,
    ColumnSuggestion,
    GenerateSuggestionsFromRules,
    GetParseTree,
    ISymbolTableVisitor,
    KeywordSuggestion,
    LexerConstructor,
    ParserConstructor,
    SymbolTableVisitorConstructor,
} from './types.js';
import {mySqlParserData} from './parsers/mysql/mySqlParserData.js';

export {AutocompleteParseResult};

function parseQueryWithoutCursor<L extends LexerType, P extends ParserType>(
    Lexer: LexerConstructor<L>,
    Parser: ParserConstructor<P>,
    tokenDictionary: TokenDictionary,
    getParseTree: GetParseTree<P>,
    query: string,
): Pick<AutocompleteParseResult, 'errors'> {
    const inputStream = CharStreams.fromString(query);
    const lexer = new Lexer(inputStream);
    const tokenStream = new CommonTokenStream(lexer);
    const parser = new Parser(tokenStream);
    const errorListener = new SqlErrorListener(tokenDictionary.SPACE);

    parser.removeErrorListeners();
    parser.addErrorListener(errorListener);
    getParseTree(parser);

    return {errors: errorListener.errors};
}

function getColumnSuggestions<
    L extends LexerType,
    P extends ParserType,
    V extends AbstractParseTreeVisitor<{}>,
    S extends ISymbolTableVisitor & V,
>(
    Lexer: LexerConstructor<L>,
    Parser: ParserConstructor<P>,
    SymbolTableVisitor: SymbolTableVisitorConstructor<S>,
    tokenDictionary: TokenDictionary,
    getParseTree: GetParseTree<P>,
    initialTokenStream: TokenStream,
    cursor: CursorPosition,
    currentStatement: string,
): ColumnSuggestion | undefined {
    const realCursorTokenIndex = findCursorTokenIndex(
        initialTokenStream,
        cursor,
        tokenDictionary.SPACE,
        true,
    );

    if (!realCursorTokenIndex) {
        throw new Error(
            `Could not find realCursorTokenIndex at Ln ${cursor.line}, Col ${cursor.column}`,
        );
    }

    const tableQueryPosition = getTableQueryPosition(
        initialTokenStream,
        realCursorTokenIndex,
        tokenDictionary,
    );

    if (tableQueryPosition) {
        const query = currentStatement.slice(tableQueryPosition.start, tableQueryPosition.end);

        const inputStream = CharStreams.fromString(query);
        const lexer = new Lexer(inputStream);
        const tokenStream = new CommonTokenStream(lexer);
        const parser = new Parser(tokenStream);

        parser.removeErrorListeners();
        const parseTree = getParseTree(parser, tableQueryPosition.type);
        const visitor = new SymbolTableVisitor();

        visitor.visit(parseTree);
        const tables = visitor.symbolTable.getNestedSymbolsOfTypeSync(TableSymbol);

        if (tables.length) {
            return {
                tables: tables.map((tableSymbol) => ({
                    name: tableSymbol.name,
                    alias: tableSymbol.alias,
                })),
            };
        }
    }

    return undefined;
}

const quotesRegex = /^'(.*)'$/;

export function parseQuery<
    L extends LexerType,
    P extends ParserType,
    V extends AbstractParseTreeVisitor<{}>,
    S extends ISymbolTableVisitor & V,
>(
    Lexer: LexerConstructor<L>,
    Parser: ParserConstructor<P>,
    SymbolTableVisitor: SymbolTableVisitorConstructor<S>,
    tokenDictionary: TokenDictionary,
    ignoredTokens: Set<number>,
    preferredRules: Set<number>,
    getParseTree: GetParseTree<P>,
    generateSuggestionsFromRules: GenerateSuggestionsFromRules,
    query: string,
    cursor: CursorPosition,
): AutocompleteParseResult {
    const inputStream = CharStreams.fromString(query);
    const lexer = new Lexer(inputStream);
    const tokenStream = new CommonTokenStream(lexer);
    const parser = new Parser(tokenStream);
    const errorListener = new SqlErrorListener(tokenDictionary.SPACE);

    parser.removeErrorListeners();
    parser.addErrorListener(errorListener);
    getParseTree(parser);

    const core = new c3.CodeCompletionCore(parser);
    core.ignoredTokens = ignoredTokens;
    core.preferredRules = preferredRules;
    const cursorTokenIndex = findCursorTokenIndex(tokenStream, cursor, tokenDictionary.SPACE);
    const suggestKeywords: KeywordSuggestion[] = [];
    let result: AutocompleteParseResult = {
        errors: errorListener.errors,
    };

    if (cursorTokenIndex !== undefined) {
        // Subtracting 2, because of whitespace token
        const previousToken = tokenStream.get(cursorTokenIndex - 2);
        const {tokens, rules} = core.collectCandidates(cursorTokenIndex);
        const {suggestColumns, ...suggestionsFromRules} = generateSuggestionsFromRules(
            rules,
            cursorTokenIndex,
            previousToken,
        );

        result = {...result, ...suggestionsFromRules};
        tokens.forEach((_, tokenType) => {
            // Literal keyword names are quoted
            const name = parser.vocabulary.getLiteralName(tokenType)?.replace(quotesRegex, '$1');

            if (name) {
                suggestKeywords.push({
                    value: name,
                });
            }
        });

        const cursorIndex = getCursorIndex(query, cursor);
        const currentStatement = getCurrentStatement(query, cursorIndex);

        if (suggestColumns) {
            result.suggestColumns = getColumnSuggestions(
                Lexer,
                Parser,
                SymbolTableVisitor,
                tokenDictionary,
                getParseTree,
                tokenStream,
                cursor,
                currentStatement.statement,
            );
        }

        result.suggestTemplates = shouldSuggestTemplates(
            currentStatement.statement,
            currentStatement.cursorIndex,
        );
    }

    result.suggestKeywords = suggestKeywords;
    return result;
}

export function parseMySqlQueryWithoutCursor(
    query: string,
): Pick<AutocompleteParseResult, 'errors'> {
    return parseQueryWithoutCursor(
        mySqlParserData.Lexer,
        mySqlParserData.Parser,
        mySqlParserData.tokenDictionary,
        mySqlParserData.getParseTree,
        query,
    );
}

export function parseMySqlQuery(query: string, cursor: CursorPosition): AutocompleteParseResult {
    return parseQuery(
        mySqlParserData.Lexer,
        mySqlParserData.Parser,
        mySqlParserData.SymbolTableVisitor,
        mySqlParserData.tokenDictionary,
        mySqlParserData.ignoredTokens,
        mySqlParserData.preferredRules,
        mySqlParserData.getParseTree,
        mySqlParserData.generateSuggestionsFromRules,
        query,
        cursor,
    );
}
