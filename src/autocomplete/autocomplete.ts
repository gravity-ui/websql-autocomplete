import {
    AutocompleteResultBase,
    ClickHouseAutocompleteResult,
    CursorPosition,
    EnrichAutocompleteResult,
    GetParseTree,
    KeywordSuggestion,
    LexerConstructor,
    MySqlAutocompleteResult,
    ParserConstructor,
    PostgreSqlAutocompleteResult,
    YQLAutocompleteResult,
} from './autocomplete-types';
import {postgreSqlAutocompleteData} from './databases/postgresql/postgresql-autocomplete';
import {mySqlAutocompleteData} from './databases/mysql/mysql-autocomplete';
import {Lexer as LexerType, Parser as ParserType} from 'antlr4ng';
import {TokenDictionary} from './shared/tables';
import {createParser} from './shared/query';
import {SqlErrorListener} from './shared/sql-error-listener';
import * as c3 from 'antlr4-c3';
import {findCursorTokenIndex} from './shared/cursor';
import {clickHouseAutocompleteData} from './databases/clickhouse/clickhouse-autocomplete';
import {yqlAutocompleteData} from './databases/yql/yql-autocomplete';

function parseQueryWithoutCursor<L extends LexerType, P extends ParserType>(
    Lexer: LexerConstructor<L>,
    Parser: ParserConstructor<P>,
    tokenDictionary: TokenDictionary,
    getParseTree: GetParseTree<P>,
    query: string,
): Pick<AutocompleteResultBase, 'errors'> {
    const parser = createParser(Lexer, Parser, query);
    const errorListener = new SqlErrorListener(tokenDictionary.SPACE);

    parser.removeErrorListeners();
    parser.addErrorListener(errorListener);
    getParseTree(parser);

    return {errors: errorListener.errors};
}

const quotesRegex = /^'(.*)'$/;

export function parseQuery<
    A extends AutocompleteResultBase,
    L extends LexerType,
    P extends ParserType,
>(
    Lexer: LexerConstructor<L>,
    Parser: ParserConstructor<P>,
    tokenDictionary: TokenDictionary,
    ignoredTokens: Set<number>,
    rulesToVisit: Set<number>,
    getParseTree: GetParseTree<P>,
    enrichAutocompleteResult: EnrichAutocompleteResult<A>,
    query: string,
    cursor: CursorPosition,
): A {
    const parser = createParser(Lexer, Parser, query);
    const {tokenStream} = parser;
    const errorListener = new SqlErrorListener(tokenDictionary.SPACE);

    parser.removeErrorListeners();
    parser.addErrorListener(errorListener);
    getParseTree(parser);

    const core = new c3.CodeCompletionCore(parser);
    core.ignoredTokens = ignoredTokens;
    core.preferredRules = rulesToVisit;
    const cursorTokenIndex = findCursorTokenIndex(tokenStream, cursor, tokenDictionary.SPACE);

    if (cursorTokenIndex === undefined) {
        throw new Error(
            `Could not find cursor token index for line: ${cursor.line}, column: ${cursor.column}`,
        );
    }

    const suggestKeywords: KeywordSuggestion[] = [];
    const {tokens, rules} = core.collectCandidates(cursorTokenIndex);
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

    const result: AutocompleteResultBase = {
        errors: errorListener.errors,
        suggestKeywords,
    };

    return enrichAutocompleteResult(result, rules, tokenStream, cursorTokenIndex, cursor, query);
}

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
        mySqlAutocompleteData.tokenDictionary,
        mySqlAutocompleteData.ignoredTokens,
        mySqlAutocompleteData.rulesToVisit,
        mySqlAutocompleteData.getParseTree,
        mySqlAutocompleteData.enrichAutocompleteResult,
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
        postgreSqlAutocompleteData.tokenDictionary,
        postgreSqlAutocompleteData.ignoredTokens,
        postgreSqlAutocompleteData.rulesToVisit,
        postgreSqlAutocompleteData.getParseTree,
        postgreSqlAutocompleteData.enrichAutocompleteResult,
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
        clickHouseAutocompleteData.tokenDictionary,
        clickHouseAutocompleteData.ignoredTokens,
        clickHouseAutocompleteData.rulesToVisit,
        clickHouseAutocompleteData.getParseTree,
        clickHouseAutocompleteData.enrichAutocompleteResult,
        query,
        cursor,
    );
}

export function parseYQLQueryWithoutCursor(query: string): Pick<YQLAutocompleteResult, 'errors'> {
    return parseQueryWithoutCursor(
        yqlAutocompleteData.Lexer,
        yqlAutocompleteData.Parser,
        yqlAutocompleteData.tokenDictionary,
        yqlAutocompleteData.getParseTree,
        query,
    );
}

export function parseYQLQuery(query: string, cursor: CursorPosition): YQLAutocompleteResult {
    return parseQuery(
        yqlAutocompleteData.Lexer,
        yqlAutocompleteData.Parser,
        yqlAutocompleteData.tokenDictionary,
        yqlAutocompleteData.ignoredTokens,
        yqlAutocompleteData.rulesToVisit,
        yqlAutocompleteData.getParseTree,
        yqlAutocompleteData.enrichAutocompleteResult,
        query,
        cursor,
    );
}
