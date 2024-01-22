import {CharStreams, CommonTokenStream, ParseTree, Token, TokenStream} from 'antlr4ng';
import * as c3 from 'antlr4-c3';

import {
    CursorPosition,
    TokenPosition,
    findCursorTokenIndex,
    getCursorIndex,
} from '../../lib/cursor.js';
import {getCurrentStatement} from '../../lib/query.js';
import {TableSymbol} from '../../lib/symbolTable.js';
import {SqlErrorListener} from '../../lib/sqlErrorListener.js';
import {MySqlLexer} from './generated/MySqlLexer.js';
import {AtomTableItemContext, MySqlParser, TableNameContext} from './generated/MySqlParser.js';
import {MySqlParserVisitor} from './generated/MySqlParserVisitor.js';
import {preferredRules} from './lib/preferredRules.js';
import {ignoredTokens} from './lib/ignoredTokens.js';
import {TableQueryPosition, TokenDictionary, getTableQueryPosition} from '../../lib/tables.js';

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

const tokenDictionary: TokenDictionary = {
    FROM: MySqlParser.FROM,
    OPENING_BRACKET: MySqlParser.LR_BRACKET,
    CLOSING_BRACKET: MySqlParser.RR_BRACKET,
    ALTER: MySqlParser.ALTER,
    INSERT: MySqlParser.INSERT,
    UPDATE: MySqlParser.UPDATE,
};

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
            const rawAlias = context.uid()?.getText();
            // For some reason LEFT | RIGHT keyword gets confused with alias
            const isAliasPartOfJoinStatement =
                rawAlias?.toLowerCase() === 'left' || rawAlias?.toLowerCase() === 'right';

            this.symbolTable.addNewSymbolOfType(
                TableSymbol,
                this.scope,
                context.tableName().getText(),
                isAliasPartOfJoinStatement ? undefined : rawAlias,
            );
        } catch (error) {
            if (!(error instanceof c3.DuplicateSymbolError)) {
                throw error;
            }
        }

        return this.visitChildren(context) as {};
    };
}

const spaceSymbols = '(\\s|\r\n|\n|\r)+';
const explainRegex = new RegExp(`^(${spaceSymbols})?explain${spaceSymbols}$`);
const multipleKeywordsRegex = new RegExp(`^(${spaceSymbols})?\\S+${spaceSymbols}`);

function shouldSuggestTemplates(statement: string, cursorIndex: number): boolean {
    const currentStatementBeforeCursor = statement.slice(0, cursorIndex).toLowerCase();

    return Boolean(
        cursorIndex === 0 ||
            // First keyword in statement
            !currentStatementBeforeCursor.match(multipleKeywordsRegex) ||
            // Explain statement
            currentStatementBeforeCursor.match(explainRegex),
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

function getParseTree(parser: MySqlParser, type: TableQueryPosition['type']): ParseTree {
    switch (type) {
        case 'from':
            return parser.fromClause();
        case 'alter':
            return parser.alterTable();
        case 'insert':
            return parser.insertStatement();
        case 'update':
            return parser.multipleUpdateStatement();
    }
}

function getColumnSuggestions(
    initialTokenStream: TokenStream,
    cursor: CursorPosition,
    currentStatement: string,
): ColumnSuggestion | undefined {
    const realCursorTokenIndex = findCursorTokenIndex(
        initialTokenStream,
        cursor,
        MySqlLexer.SPACE,
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
        const lexer = new MySqlLexer(inputStream);
        const tokenStream = new CommonTokenStream(lexer);
        const parser = new MySqlParser(tokenStream);

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
            result.suggestColumns = getColumnSuggestions(
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
