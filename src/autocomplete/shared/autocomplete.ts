import {
    AutocompleteResultBase,
    CursorPosition,
    EnrichAutocompleteResult,
    GetParseTree,
    KeywordSuggestion,
    LexerConstructor,
    LexerOptions,
    ParserConstructor,
} from './autocomplete-types.js';
import {Lexer as LexerType, ParserRuleContext, Parser as ParserType} from 'antlr4ng';
import {createParser} from './query.js';
import {SqlErrorListener} from './sql-error-listener.js';
import * as c3 from 'antlr4-c3';
import {findCursorTokenIndex} from './cursor.js';

export function parseQueryWithoutCursor<L extends LexerType, P extends ParserType>(
    Lexer: LexerConstructor<L>,
    Parser: ParserConstructor<P>,
    whitespaceToken: number,
    getParseTree: GetParseTree<P>,
    query: string,
    lexerOptions?: LexerOptions,
): Pick<AutocompleteResultBase, 'errors'> {
    const parser = createParser(Lexer, Parser, query, lexerOptions);
    const errorListener = new SqlErrorListener(whitespaceToken);

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
    whitespaceToken: number,
    ignoredTokens: Set<number>,
    rulesToVisit: Set<number>,
    getParseTree: GetParseTree<P>,
    enrichAutocompleteResult: EnrichAutocompleteResult<A>,
    query: string,
    cursor: CursorPosition,
    context?: ParserRuleContext,
    lexerOptions?: LexerOptions,
): A {
    const parser = createParser(Lexer, Parser, query, lexerOptions);
    const {tokenStream} = parser;
    const errorListener = new SqlErrorListener(whitespaceToken);

    parser.removeErrorListeners();
    parser.addErrorListener(errorListener);
    getParseTree(parser);

    const core = new c3.CodeCompletionCore(parser);
    core.ignoredTokens = ignoredTokens;
    core.preferredRules = rulesToVisit;
    const cursorTokenIndex = findCursorTokenIndex(tokenStream, cursor, whitespaceToken);

    if (cursorTokenIndex === undefined) {
        throw new Error(
            `Could not find cursor token index for line: ${cursor.line}, column: ${cursor.column}`,
        );
    }

    const suggestKeywords: KeywordSuggestion[] = [];
    const {tokens, rules} = core.collectCandidates(cursorTokenIndex, context);
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
