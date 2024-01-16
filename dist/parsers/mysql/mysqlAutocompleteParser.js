import { CharStreams, CommonTokenStream } from 'antlr4ng';
import * as c3 from 'antlr4-c3';
import { findCursorTokenIndex } from '../lib/tokenPosition.js';
import { SqlErrorListener } from '../lib/sqlErrorListener.js';
import { MySqlLexer } from './generated/MySqlLexer.js';
import { MySqlParser } from './generated/MySqlParser.js';
import { MySqlParserVisitor } from './generated/MySqlParserVisitor.js';
import { preferredRules } from './lib/preferredRules.js';
import { ignoredTokens } from './lib/ignoredTokens.js';
var TableSuggestion;
(function (TableSuggestion) {
    TableSuggestion["ALL"] = "ALL";
    TableSuggestion["TABLES"] = "TABLES";
    TableSuggestion["VIEWS"] = "VIEWS";
})(TableSuggestion || (TableSuggestion = {}));
const quotesRegex = /^'(.*)'$/;
class TableSymbol extends c3.TypedSymbol {
    constructor(name, alias, type) {
        super(name, type);
        this.name = name;
        this.alias = alias;
    }
}
class SymbolTableVisitor extends MySqlParserVisitor {
    constructor() {
        super();
        this.visitAtomTableItem = (context) => {
            var _a;
            this.symbolTable.addNewSymbolOfType(TableSymbol, this.scope, context.tableName().getText(), (_a = context.uid()) === null || _a === void 0 ? void 0 : _a.getText());
            return this.visitChildren(context);
        };
        this.symbolTable = new c3.SymbolTable('', {});
        this.scope = this.symbolTable.addNewSymbolOfType(c3.ScopedSymbol, undefined);
    }
}
function generateSuggestionsFromRules(rules, cursorTokenIndex, previousToken) {
    var _a, _b;
    let suggestTables;
    let suggestAggregateFunctions = false;
    let suggestFunctions = false;
    for (const [ruleId, ruleData] of rules) {
        switch (ruleId) {
            case MySqlParser.RULE_tableName: {
                if (cursorTokenIndex === ruleData.startTokenIndex &&
                    !ruleData.ruleList.includes(MySqlParser.RULE_createTable)) {
                    suggestTables = TableSuggestion.ALL;
                }
                break;
            }
            case MySqlParser.RULE_alterTable:
            case MySqlParser.RULE_dropTable: {
                const isPreviousTokenTable = ((_a = previousToken === null || previousToken === void 0 ? void 0 : previousToken.text) === null || _a === void 0 ? void 0 : _a.toLowerCase()) === 'table';
                if (isPreviousTokenTable) {
                    suggestTables = TableSuggestion.TABLES;
                }
                break;
            }
            case MySqlParser.RULE_alterView:
            case MySqlParser.RULE_dropView: {
                const isPreviousTokenView = ((_b = previousToken === null || previousToken === void 0 ? void 0 : previousToken.text) === null || _b === void 0 ? void 0 : _b.toLowerCase()) === 'view';
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
    return { suggestTables, suggestAggregateFunctions, suggestFunctions };
}
export function parseMySqlQueryWithoutCursor(query) {
    const inputStream = CharStreams.fromString(query);
    const lexer = new MySqlLexer(inputStream);
    const tokenStream = new CommonTokenStream(lexer);
    const parser = new MySqlParser(tokenStream);
    const errorListener = new SqlErrorListener(MySqlLexer.SPACE);
    parser.removeErrorListeners();
    parser.addErrorListener(errorListener);
    parser.root();
    return { errors: errorListener.errors };
}
export function parseMySqlQuery(query, cursor) {
    const inputStream = CharStreams.fromString(query);
    const lexer = new MySqlLexer(inputStream);
    const tokenStream = new CommonTokenStream(lexer);
    const parser = new MySqlParser(tokenStream);
    const errorListener = new SqlErrorListener(MySqlLexer.SPACE);
    parser.removeErrorListeners();
    parser.addErrorListener(errorListener);
    const parseTree = parser.root();
    const visitor = new SymbolTableVisitor();
    visitor.visit(parseTree);
    const core = new c3.CodeCompletionCore(parser);
    core.ignoredTokens = ignoredTokens;
    core.preferredRules = preferredRules;
    const cursorTokenIndex = findCursorTokenIndex(tokenStream, cursor, MySqlLexer.SPACE);
    const suggestKeywords = [];
    let result = {
        errors: errorListener.errors,
    };
    if (cursorTokenIndex !== undefined) {
        // Subtracting 2, because of whitespace token
        const previousToken = tokenStream.get(cursorTokenIndex - 2);
        const { tokens, rules } = core.collectCandidates(cursorTokenIndex);
        const suggestionsFromRules = generateSuggestionsFromRules(rules, cursorTokenIndex, previousToken);
        result = Object.assign(Object.assign({}, result), suggestionsFromRules);
        tokens.forEach((_, tokenType) => {
            var _a;
            // Literal keyword names are quoted
            const name = (_a = parser.vocabulary.getLiteralName(tokenType)) === null || _a === void 0 ? void 0 : _a.replace(quotesRegex, '$1');
            if (name) {
                suggestKeywords.push({
                    value: name,
                });
            }
        });
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
    const isDdlStatementStart = Boolean(suggestKeywords.find(({ value }) => value === 'CREATE'));
    const isDmlStatementStart = Boolean(suggestKeywords.find(({ value }) => value === 'SELECT'));
    // Doesn't work as expected
    const suggestTemplates = isDdlStatementStart || isDmlStatementStart;
    result.suggestTemplates = suggestTemplates;
    result.suggestKeywords = suggestKeywords;
    return result;
}
