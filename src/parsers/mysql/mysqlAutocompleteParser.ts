import {
    CharStreams,
    CommonTokenStream,
    TokenStream,
    ANTLRErrorListener,
    Token,
    ATNSimulator,
    Recognizer,
} from 'antlr4ng';
import * as c3 from 'antlr4-c3';

import {MySqlLexer} from './generated/MySqlLexer.js';
import {MySqlParser} from './generated/MySqlParser.js';
import {preferredRules} from './lib/preferredRules.js';

interface CursorPosition {
    line: number;
    column: number;
}

interface TokenPosition {
    startLine: number;
    startColumn: number;
    endLine: number;
    endColumn: number;
}

interface ParserSyntaxError extends TokenPosition {
    message: string;
}

interface KeywordSuggestion {
    value: string;
}

enum TableSuggestion {
    ALL = 'ALL',
    TABLES = 'TABLES',
    VIEWS = 'VIEWS',
}

interface AutocompleteParseResult {
    errors: ParserSyntaxError[];
    suggestKeywords?: KeywordSuggestion[];
    suggestTables?: TableSuggestion;
    suggestTemplates?: boolean;
    suggestAggregateFunctions?: boolean;
    suggestFunctions?: boolean;
}

const possibleIdentifierPrefixRegex = /[\w]$/;
const lineSeparatorRegex = /\n|\r|\r\n/g;
const quotesRegex = /^'(.*)'$/;

function getTokenPosition(token: Token): TokenPosition {
    const startColumn = token.column;
    const endColumn = token.column + (token.text?.length || 0);
    const startLine = token.line;
    const endLine =
        token.type !== MySqlLexer.SPACE || !token.text
            ? startLine
            : startLine + (token.text.match(lineSeparatorRegex)?.length || 0);

    return {startColumn, startLine, endColumn, endLine};
}

function findCursorTokenIndex(
    tokenStream: TokenStream,
    cursor: CursorPosition,
): number | undefined {
    // Cursor position is 1-based, while token's charPositionInLine is 0-based
    const cursorCol = cursor.column - 1;

    for (let i = 0; i < tokenStream.size; i++) {
        const token = tokenStream.get(i);
        const {startColumn, startLine, endColumn, endLine} = getTokenPosition(token);

        // endColumn makes sense only if startLine === endLine
        if (endLine > cursor.line || (startLine === cursor.line && endColumn > cursorCol)) {
            if (
                i > 0 &&
                startLine === cursor.line &&
                startColumn === cursorCol &&
                // If previous token is an identifier (i.e. word, not a symbol),
                // then we want to return previous token index
                possibleIdentifierPrefixRegex.test(tokenStream.get(i - 1).text || '')
            ) {
                return i - 1;
            } else if (tokenStream.get(i).type === MySqlLexer.SPACE) {
                return i + 1;
            }
            return i;
        }
    }

    return undefined;
}

class MySqlErrorListener implements ANTLRErrorListener {
    errors: ParserSyntaxError[];

    constructor() {
        this.errors = [];
    }

    syntaxError<S extends Token, T extends ATNSimulator>(
        _recognizer: Recognizer<T>,
        token: S | null,
        startLine: number,
        startColumn: number,
        message: string,
    ) {
        if (token) {
            const tokenPosition = getTokenPosition(token);
            this.errors.push({message, ...tokenPosition});
        } else {
            this.errors.push({
                message,
                startLine,
                startColumn,
                endLine: startLine,
                endColumn: startColumn,
            });
        }
    }

    reportAmbiguity() {}
    reportAttemptingFullContext() {}
    reportContextSensitivity() {}
}

function generateSuggestionsFromRules(
    rules: c3.CandidatesCollection['rules'],
    previousToken?: Token,
): Partial<AutocompleteParseResult> {
    let suggestTables: AutocompleteParseResult['suggestTables'];
    let suggestAggregateFunctions = false;
    let suggestFunctions = false;

    for (const [ruleId, ruleData] of rules) {
        switch (ruleId) {
            case MySqlParser.RULE_tableName: {
                if (!ruleData.ruleList.includes(MySqlParser.RULE_createTable)) {
                    suggestTables = TableSuggestion.ALL;
                }
                break;
            }
            case MySqlParser.RULE_alterTable:
            case MySqlParser.RULE_dropTable: {
                const isPreviousTokenTable = previousToken?.text?.toLowerCase() === 'table';
                if (isPreviousTokenTable) {
                    suggestTables = TableSuggestion.TABLES;
                }
                break;
            }
            case MySqlParser.RULE_alterView:
            case MySqlParser.RULE_dropView: {
                const isPreviousTokenView = previousToken?.text?.toLowerCase() === 'view';
                if (isPreviousTokenView) {
                    suggestTables = TableSuggestion.VIEWS;
                }
                break;
            }
            case MySqlParser.RULE_aggregateWindowedFunction: {
                suggestAggregateFunctions = true;
                break;
            }
            case MySqlParser.RULE_scalarFunctionName: {
                suggestFunctions = true;
                break;
            }
        }
    }

    return {suggestTables, suggestAggregateFunctions, suggestFunctions};
}

export function parseMySqlQueryWithoutCursor(
    query: string,
): Pick<AutocompleteParseResult, 'errors'> {
    const inputStream = CharStreams.fromString(query);
    const lexer = new MySqlLexer(inputStream);
    const tokenStream = new CommonTokenStream(lexer);
    const parser = new MySqlParser(tokenStream);
    const errorListener = new MySqlErrorListener();

    parser.removeErrorListeners();
    parser.addErrorListener(errorListener);
    parser.root();

    return {errors: errorListener.errors};
}

export function parseMySqlQuery(query: string, cursor: CursorPosition): AutocompleteParseResult {
    const inputStream = CharStreams.fromString(query);
    const lexer = new MySqlLexer(inputStream);
    const tokenStream = new CommonTokenStream(lexer);
    const parser = new MySqlParser(tokenStream);
    const errorListener = new MySqlErrorListener();

    parser.removeErrorListeners();
    parser.addErrorListener(errorListener);
    parser.root();

    const core = new c3.CodeCompletionCore(parser);
    core.ignoredTokens = new Set([]); // TODO
    core.preferredRules = preferredRules;
    const cursorTokenIndex = findCursorTokenIndex(tokenStream, cursor);
    const suggestKeywords: KeywordSuggestion[] = [];
    let result: AutocompleteParseResult = {
        errors: errorListener.errors,
    };

    if (cursorTokenIndex !== undefined) {
        // Subtracting 2, because of whitespace token
        const previousToken = tokenStream.get(cursorTokenIndex - 2);
        const {tokens, rules} = core.collectCandidates(cursorTokenIndex);
        const suggestionsFromRules = generateSuggestionsFromRules(rules, previousToken);

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
    }

    const isDdlStatementStart = Boolean(suggestKeywords.find(({value}) => value === 'CREATE'));
    const isDmlStatementStart = Boolean(suggestKeywords.find(({value}) => value === 'SELECT'));
    const suggestTemplates = isDdlStatementStart || isDmlStatementStart;
    result.suggestTemplates = suggestTemplates; // ???
    result.suggestKeywords = suggestKeywords;
    return result;
}
