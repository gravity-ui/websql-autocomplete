import {CharStreams, CommonTokenStream, Token} from 'antlr4ng';
import * as c3 from 'antlr4-c3';

import {
    findCursorTokenIndex,
    TokenPosition,
    CursorPosition,
    getCursorIndex,
} from '../lib/cursor.js';
import {
    modifyInvalidQuery,
    getCurrentStatement,
    spaceSymbolsRegex,
    explainRegex,
} from '../lib/query.js';
import {TableSymbol} from '../lib/symbolTable.js';
import {SqlErrorListener} from '../lib/sqlErrorListener.js';
import {MySqlLexer} from './generated/MySqlLexer.js';
import {MySqlParser, AtomTableItemContext, TableNameContext} from './generated/MySqlParser.js';
import {MySqlParserVisitor} from './generated/MySqlParserVisitor.js';
import {preferredRules} from './lib/preferredRules.js';
import {ignoredTokens} from './lib/ignoredTokens.js';

interface ParserSyntaxError extends TokenPosition {
    message: string;
}

interface KeywordSuggestion {
    value: string;
}

interface ColumnSuggestion {
    tables?: {name: string; alias?: string}[];
}

enum TableSuggestion {
    ALL = 'ALL',
    TABLES = 'TABLES',
    VIEWS = 'VIEWS',
}

export interface AutocompleteParseResult {
    errors: ParserSyntaxError[];
    suggestKeywords?: KeywordSuggestion[];
    suggestTables?: TableSuggestion;
    suggestTemplates?: boolean;
    suggestAggregateFunctions?: boolean;
    suggestFunctions?: boolean;
    suggestColumns?: ColumnSuggestion;
}

const quotesRegex = /^'(.*)'$/;

class SymbolTableVisitor extends MySqlParserVisitor<{}> {
    symbolTable: c3.SymbolTable;
    scope: c3.ScopedSymbol;

    constructor() {
        super();
        this.symbolTable = new c3.SymbolTable('', {});
        this.scope = this.symbolTable.addNewSymbolOfType(c3.ScopedSymbol, undefined);
    }

    visitTableName = (context: TableNameContext): {} => {
        try {
            this.symbolTable.addNewSymbolOfType(TableSymbol, this.scope, context.getText());
        } catch (error) {
            if (!(error instanceof c3.DuplicateSymbolError)) {
                throw error;
            }
        }

        return this.visitChildren(context) as {};
    };

    visitAtomTableItem = (context: AtomTableItemContext): {} => {
        try {
            this.symbolTable.addNewSymbolOfType(
                TableSymbol,
                this.scope,
                context.tableName().getText(),
                context.uid()?.getText(),
            );
        } catch (error) {
            if (!(error instanceof c3.DuplicateSymbolError)) {
                throw error;
            }
        }

        return this.visitChildren(context) as {};
    };
}

function shouldSuggestTemplates(statement: string, cursorIndex: number): boolean {
    const currentStatementBeforeCursor = statement.slice(0, cursorIndex).toLowerCase();

    return !!(
        cursorIndex === 0 ||
        currentStatementBeforeCursor.replace(spaceSymbolsRegex, '').length === 0 ||
        currentStatementBeforeCursor.match(explainRegex)
    );
}

function generateSuggestionsFromRules(
    rules: c3.CandidatesCollection['rules'],
    cursorTokenIndex: number,
    previousToken?: Token,
): Partial<AutocompleteParseResult> & {suggestColumns?: boolean} {
    let suggestTables: AutocompleteParseResult['suggestTables'];
    let suggestAggregateFunctions = false;
    let suggestFunctions = false;
    let suggestColumns = false;

    for (const [ruleId, ruleData] of rules) {
        switch (ruleId) {
            case MySqlParser.RULE_tableName: {
                if (
                    cursorTokenIndex === ruleData.startTokenIndex &&
                    !ruleData.ruleList.includes(MySqlParser.RULE_createTable)
                ) {
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
            case MySqlParser.RULE_fullColumnName:
            case MySqlParser.RULE_indexColumnName: {
                if (cursorTokenIndex === ruleData.startTokenIndex) {
                    suggestColumns = true;
                }
                break;
            }
        }
    }

    return {suggestTables, suggestAggregateFunctions, suggestFunctions, suggestColumns};
}

export function parseMySqlQueryWithoutCursor(
    query: string,
): Pick<AutocompleteParseResult, 'errors'> {
    const inputStream = CharStreams.fromString(query);
    const lexer = new MySqlLexer(inputStream);
    const tokenStream = new CommonTokenStream(lexer);
    const parser = new MySqlParser(tokenStream);
    const errorListener = new SqlErrorListener(MySqlLexer.SPACE);

    parser.removeErrorListeners();
    parser.addErrorListener(errorListener);
    parser.root();

    return {errors: errorListener.errors};
}

export function parseMySqlQuery(query: string, cursor: CursorPosition): AutocompleteParseResult {
    // ParserVisitor doesn't work for incorrect query
    // This is required for column name suggestions
    // let modifiedQuery = modifyInvalidQuery(query, cursor);

    const inputStream = CharStreams.fromString(query);
    const lexer = new MySqlLexer(inputStream);
    const tokenStream = new CommonTokenStream(lexer);
    const parser = new MySqlParser(tokenStream);
    const errorListener = new SqlErrorListener(MySqlLexer.SPACE);

    parser.removeErrorListeners();
    parser.addErrorListener(errorListener);
    parser.root();

    const core = new c3.CodeCompletionCore(parser);
    core.ignoredTokens = ignoredTokens;
    core.preferredRules = preferredRules;
    const cursorTokenIndex = findCursorTokenIndex(tokenStream, cursor, MySqlLexer.SPACE);
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
            const modifiedQuery = modifyInvalidQuery(
                currentStatement.statement,
                currentStatement.cursorIndex,
            );
            const inputStream = CharStreams.fromString(modifiedQuery);
            const lexer = new MySqlLexer(inputStream);
            const tokenStream = new CommonTokenStream(lexer);
            const parser = new MySqlParser(tokenStream);

            parser.removeErrorListeners();
            const parseTree = parser.root();
            const visitor = new SymbolTableVisitor();
            visitor.visit(parseTree);
            const tables = visitor.symbolTable.getNestedSymbolsOfTypeSync(TableSymbol);

            if (tables.length) {
                result.suggestColumns = {
                    tables: tables.map((tableSymbol) => ({
                        name: tableSymbol.name,
                        alias: tableSymbol.alias,
                    })),
                };
            }
        }

        result.suggestTemplates = shouldSuggestTemplates(
            currentStatement.statement,
            currentStatement.cursorIndex,
        );
    }

    result.suggestKeywords = suggestKeywords;
    return result;
}
