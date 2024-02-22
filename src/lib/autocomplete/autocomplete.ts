import {
    AutocompleteResultBase,
    ClickHouseAutocompleteResult,
    GenerateSuggestionsFromRules,
    GetParseTree,
    ISymbolTableVisitor, KeywordSuggestion,
    LexerConstructor,
    MySqlAutocompleteResult,
    ParserConstructor,
    PostgreSqlAutocompleteResult,
    SymbolTableVisitorConstructor
} from './autocomplete-types';
import {mySqlAutocompleteData} from './mysql/mysql-autocomplete';
import {clickHouseAutocompleteData} from './clickhouse/clickhouse-autocomplete';
import {postgreSqlAutocompleteData} from './postgresql/postgresql-autocomplete';
import {
    AbstractParseTreeVisitor,
    CharStreams,
    CommonTokenStream,
    Lexer as LexerType,
    Parser as ParserType,
    TokenStream
} from 'antlr4ng';
import {getTableQueryPosition, TokenDictionary} from '../tables';
import {SqlErrorListener} from '../sql-error-listener';
import * as c3 from 'antlr4-c3';
import {CursorPosition, findCursorTokenIndex, getCursorIndex} from '../cursor';
import {getCurrentStatement, shouldSuggestTemplates} from '../query';
import {ColumnAliasSymbol, TableSymbol} from '../symbol-table';

const quotesRegex = /^'(.*)'$/;

export function parseMySqlQueryWithoutCursor(
    query: string,
): Pick<MySqlAutocompleteResult, 'errors'> {
    return parseQueryWithoutCursor(
        mySqlAutocompleteData.Lexer,
        mySqlAutocompleteData.Parser,
        mySqlAutocompleteData.tokenDictionary,
        mySqlAutocompleteData.getParseTree,
        query,
    );
}

export function parseMySqlQuery(query: string, cursor: CursorPosition): MySqlAutocompleteResult {
    return parseQuery(
        mySqlAutocompleteData.Lexer,
        mySqlAutocompleteData.Parser,
        mySqlAutocompleteData.SymbolTableVisitor,
        mySqlAutocompleteData.tokenDictionary,
        mySqlAutocompleteData.ignoredTokens,
        mySqlAutocompleteData.preferredRules,
        mySqlAutocompleteData.explicitlyParseJoin,
        mySqlAutocompleteData.getParseTree,
        mySqlAutocompleteData.generateSuggestionsFromRules,
        query,
        cursor,
    );
}

export function parsePostgreSqlQueryWithoutCursor(
    query: string,
): Pick<PostgreSqlAutocompleteResult, 'errors'> {
    return parseQueryWithoutCursor(
        postgreSqlAutocompleteData.Lexer,
        postgreSqlAutocompleteData.Parser,
        postgreSqlAutocompleteData.tokenDictionary,
        postgreSqlAutocompleteData.getParseTree,
        query,
    );
}

export function parsePostgreSqlQuery(
    query: string,
    cursor: CursorPosition,
): PostgreSqlAutocompleteResult {
    return parseQuery(
        postgreSqlAutocompleteData.Lexer,
        postgreSqlAutocompleteData.Parser,
        postgreSqlAutocompleteData.SymbolTableVisitor,
        postgreSqlAutocompleteData.tokenDictionary,
        postgreSqlAutocompleteData.ignoredTokens,
        postgreSqlAutocompleteData.preferredRules,
        postgreSqlAutocompleteData.explicitlyParseJoin,
        postgreSqlAutocompleteData.getParseTree,
        postgreSqlAutocompleteData.generateSuggestionsFromRules,
        query,
        cursor,
    );
}

export function parseClickHouseQueryWithoutCursor(
    query: string,
): Pick<ClickHouseAutocompleteResult, 'errors'> {
    return parseQueryWithoutCursor(
        clickHouseAutocompleteData.Lexer,
        clickHouseAutocompleteData.Parser,
        clickHouseAutocompleteData.tokenDictionary,
        clickHouseAutocompleteData.getParseTree,
        query,
    );
}

export function parseClickHouseQuery(
    query: string,
    cursor: CursorPosition,
): ClickHouseAutocompleteResult {
    return parseQuery(
        clickHouseAutocompleteData.Lexer,
        clickHouseAutocompleteData.Parser,
        clickHouseAutocompleteData.SymbolTableVisitor,
        clickHouseAutocompleteData.tokenDictionary,
        clickHouseAutocompleteData.ignoredTokens,
        clickHouseAutocompleteData.preferredRules,
        clickHouseAutocompleteData.explicitlyParseJoin,
        clickHouseAutocompleteData.getParseTree,
        clickHouseAutocompleteData.generateSuggestionsFromRules,
        query,
        cursor,
    );
}

function parseQueryWithoutCursor<L extends LexerType, P extends ParserType>(
    Lexer: LexerConstructor<L>,
    Parser: ParserConstructor<P>,
    tokenDictionary: TokenDictionary,
    getParseTree: GetParseTree<P>,
    query: string,
): Pick<AutocompleteResultBase, 'errors'> {
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
    S extends ISymbolTableVisitor & AbstractParseTreeVisitor<{}>,
>(
    Lexer: LexerConstructor<L>,
    Parser: ParserConstructor<P>,
    SymbolTableVisitor: SymbolTableVisitorConstructor<S>,
    tokenDictionary: TokenDictionary,
    explicitlyParseJoin: boolean,
    getParseTree: GetParseTree<P>,
    initialTokenStream: TokenStream,
    cursor: CursorPosition,
    initialQuery: string,
    shouldSuggestColumnAliases?: boolean,
): Pick<AutocompleteResultBase, 'suggestColumns' | 'suggestColumnAliases'> {
    // Here we need the actual token index, without special logic for spaces
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
    const result: Pick<AutocompleteResultBase, 'suggestColumns' | 'suggestColumnAliases'> = {};

    if (tableQueryPosition) {
        const query = initialQuery.slice(tableQueryPosition.start, tableQueryPosition.end);

        const inputStream = CharStreams.fromString(query);
        const lexer = new Lexer(inputStream);
        const tokenStream = new CommonTokenStream(lexer);
        const parser = new Parser(tokenStream);

        parser.removeErrorListeners();
        const parseTree = getParseTree(parser, tableQueryPosition.type);
        const visitor = new SymbolTableVisitor();

        visitor.visit(parseTree);

        if (explicitlyParseJoin && tableQueryPosition.joinTableQueryPosition) {
            const joinTableQuery = initialQuery.slice(
                tableQueryPosition.joinTableQueryPosition.start,
                tableQueryPosition.joinTableQueryPosition.end,
            );
            const joinInputStream = CharStreams.fromString(joinTableQuery);
            const joinLexer = new Lexer(joinInputStream);
            const joinTokenStream = new CommonTokenStream(joinLexer);
            const joinParser = new Parser(joinTokenStream);

            joinParser.removeErrorListeners();
            const joinParseTree = getParseTree(joinParser, 'from');
            visitor.visit(joinParseTree);
        }

        if (shouldSuggestColumnAliases && tableQueryPosition.selectTableQueryPosition) {
            const selectTableQuery = initialQuery.slice(
                tableQueryPosition.selectTableQueryPosition.start,
                tableQueryPosition.selectTableQueryPosition.end,
            );
            const selectInputStream = CharStreams.fromString(selectTableQuery);
            const selectLexer = new Lexer(selectInputStream);
            const selectTokenStream = new CommonTokenStream(selectLexer);
            const selectParser = new Parser(selectTokenStream);

            selectParser.removeErrorListeners();
            const selectParseTree = getParseTree(selectParser, 'select');
            visitor.visit(selectParseTree);
        }

        const tables = visitor.symbolTable.getNestedSymbolsOfTypeSync(TableSymbol);
        if (tables.length) {
            result.suggestColumns = {
                tables: tables.map((tableSymbol) => ({
                    name: tableSymbol.name,
                    alias: tableSymbol.alias,
                })),
            };
        }

        const columnAliases = visitor.symbolTable.getNestedSymbolsOfTypeSync(ColumnAliasSymbol);
        if (columnAliases.length) {
            result.suggestColumnAliases = columnAliases.map(({name}) => ({name}));
        }
    }

    return result;
}

function parseQuery<
    A extends AutocompleteResultBase,
    L extends LexerType,
    P extends ParserType,
    S extends ISymbolTableVisitor & AbstractParseTreeVisitor<{}>,
>(
    Lexer: LexerConstructor<L>,
    Parser: ParserConstructor<P>,
    SymbolTableVisitor: SymbolTableVisitorConstructor<S>,
    tokenDictionary: TokenDictionary,
    ignoredTokens: Set<number>,
    preferredRules: Set<number>,
    explicitlyParseJoin: boolean,
    getParseTree: GetParseTree<P>,
    generateSuggestionsFromRules: GenerateSuggestionsFromRules<A>,
    query: string,
    cursor: CursorPosition,
): AutocompleteResultBase {
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
    let result: AutocompleteResultBase = {
        errors: errorListener.errors,
    };

    if (cursorTokenIndex === undefined) {
        throw new Error(
            `Could not find cursor token index for line: ${cursor.line}, column: ${cursor.column}`,
        );
    }

    const {tokens, rules} = core.collectCandidates(cursorTokenIndex);
    const {shouldSuggestColumns, shouldSuggestColumnAliases, ...suggestionsFromRules} =
        generateSuggestionsFromRules(rules, cursorTokenIndex, tokenStream);
    result = {...result, ...suggestionsFromRules};
    tokens.forEach((_, tokenType) => {
        // Literal keyword names are quoted
        const literalName = parser.vocabulary.getLiteralName(tokenType)?.replace(quotesRegex, '$1');
        // ClickHouse Parser does not give out literal names
        const name = literalName || parser.vocabulary.getSymbolicName(tokenType);

        if (!name) {
            throw new Error(`Could not get name for token ${tokenType}`);
        }

        suggestKeywords.push({
            value: name,
        });
    });

    const cursorIndex = getCursorIndex(query, cursor);
    // We can get this by token instead of splitting the string
    const currentStatement = getCurrentStatement(query, cursorIndex);

    if (shouldSuggestColumns) {
        const {suggestColumns, suggestColumnAliases} = getColumnSuggestions(
            Lexer,
            Parser,
            SymbolTableVisitor,
            tokenDictionary,
            explicitlyParseJoin,
            getParseTree,
            tokenStream,
            cursor,
            query,
            shouldSuggestColumnAliases,
        );
        result.suggestColumns = suggestColumns;
        result.suggestColumnAliases = suggestColumnAliases;
    }

    result.suggestTemplates = shouldSuggestTemplates(
        currentStatement.statement,
        currentStatement.cursorIndex,
    );
    result.suggestKeywords = suggestKeywords;
    return result;
}