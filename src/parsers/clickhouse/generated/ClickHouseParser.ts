// @ts-nocheck
// Generated from src/parsers/clickhouse/grammar/ClickHouseParser.g4 by ANTLR 4.13.1

import * as antlr from 'antlr4ng';
import {Token} from 'antlr4ng';

import {ClickHouseParserVisitor} from './ClickHouseParserVisitor.js';

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;

export class ClickHouseParser extends antlr.Parser {
    public static readonly ADD = 1;
    public static readonly AFTER = 2;
    public static readonly ALIAS = 3;
    public static readonly ALL = 4;
    public static readonly ALTER = 5;
    public static readonly AND = 6;
    public static readonly ANTI = 7;
    public static readonly ANY = 8;
    public static readonly ARRAY = 9;
    public static readonly AS = 10;
    public static readonly ASCENDING = 11;
    public static readonly ASOF = 12;
    public static readonly AST = 13;
    public static readonly ASYNC = 14;
    public static readonly ATTACH = 15;
    public static readonly BETWEEN = 16;
    public static readonly BOTH = 17;
    public static readonly BY = 18;
    public static readonly CASE = 19;
    public static readonly CAST = 20;
    public static readonly CHECK = 21;
    public static readonly CLEAR = 22;
    public static readonly CLUSTER = 23;
    public static readonly CODEC = 24;
    public static readonly COLLATE = 25;
    public static readonly COLUMN = 26;
    public static readonly COMMENT = 27;
    public static readonly CONSTRAINT = 28;
    public static readonly CREATE = 29;
    public static readonly CROSS = 30;
    public static readonly CUBE = 31;
    public static readonly CURRENT = 32;
    public static readonly DATABASE = 33;
    public static readonly DATABASES = 34;
    public static readonly DATE = 35;
    public static readonly DAY = 36;
    public static readonly DEDUPLICATE = 37;
    public static readonly DEFAULT = 38;
    public static readonly DELAY = 39;
    public static readonly DELETE = 40;
    public static readonly DESC = 41;
    public static readonly DESCENDING = 42;
    public static readonly DESCRIBE = 43;
    public static readonly DETACH = 44;
    public static readonly DICTIONARIES = 45;
    public static readonly DICTIONARY = 46;
    public static readonly DISK = 47;
    public static readonly DISTINCT = 48;
    public static readonly DISTRIBUTED = 49;
    public static readonly DROP = 50;
    public static readonly ELSE = 51;
    public static readonly END = 52;
    public static readonly ENGINE = 53;
    public static readonly EVENTS = 54;
    public static readonly EXISTS = 55;
    public static readonly EXPLAIN = 56;
    public static readonly EXPRESSION = 57;
    public static readonly EXTRACT = 58;
    public static readonly FETCHES = 59;
    public static readonly FINAL = 60;
    public static readonly FIRST = 61;
    public static readonly FLUSH = 62;
    public static readonly FOLLOWING = 63;
    public static readonly FOR = 64;
    public static readonly FORMAT = 65;
    public static readonly FREEZE = 66;
    public static readonly FROM = 67;
    public static readonly FULL = 68;
    public static readonly FUNCTION = 69;
    public static readonly GLOBAL = 70;
    public static readonly GRANULARITY = 71;
    public static readonly GROUP = 72;
    public static readonly HAVING = 73;
    public static readonly HIERARCHICAL = 74;
    public static readonly HOUR = 75;
    public static readonly ID = 76;
    public static readonly IF = 77;
    public static readonly ILIKE = 78;
    public static readonly IN = 79;
    public static readonly INDEX = 80;
    public static readonly INF = 81;
    public static readonly INJECTIVE = 82;
    public static readonly INNER = 83;
    public static readonly INSERT = 84;
    public static readonly INTERVAL = 85;
    public static readonly INTO = 86;
    public static readonly IS = 87;
    public static readonly IS_OBJECT_ID = 88;
    public static readonly JOIN = 89;
    public static readonly KEY = 90;
    public static readonly KILL = 91;
    public static readonly LAST = 92;
    public static readonly LAYOUT = 93;
    public static readonly LEADING = 94;
    public static readonly LEFT = 95;
    public static readonly LIFETIME = 96;
    public static readonly LIKE = 97;
    public static readonly LIMIT = 98;
    public static readonly LIVE = 99;
    public static readonly LOCAL = 100;
    public static readonly LOGS = 101;
    public static readonly MATERIALIZE = 102;
    public static readonly MATERIALIZED = 103;
    public static readonly MAX = 104;
    public static readonly MERGES = 105;
    public static readonly MIN = 106;
    public static readonly MINUTE = 107;
    public static readonly MODIFY = 108;
    public static readonly MONTH = 109;
    public static readonly MOVE = 110;
    public static readonly MUTATION = 111;
    public static readonly NAN_SQL = 112;
    public static readonly NO = 113;
    public static readonly NOT = 114;
    public static readonly NULL_SQL = 115;
    public static readonly NULLS = 116;
    public static readonly OFFSET = 117;
    public static readonly ON = 118;
    public static readonly OPTIMIZE = 119;
    public static readonly OR = 120;
    public static readonly ORDER = 121;
    public static readonly OUTER = 122;
    public static readonly OUTFILE = 123;
    public static readonly OVER = 124;
    public static readonly PARTITION = 125;
    public static readonly POPULATE = 126;
    public static readonly PRECEDING = 127;
    public static readonly PREWHERE = 128;
    public static readonly PRIMARY = 129;
    public static readonly PROJECTION = 130;
    public static readonly QUARTER = 131;
    public static readonly RANGE = 132;
    public static readonly RELOAD = 133;
    public static readonly REMOVE = 134;
    public static readonly RENAME = 135;
    public static readonly REPLACE = 136;
    public static readonly REPLICA = 137;
    public static readonly REPLICATED = 138;
    public static readonly RIGHT = 139;
    public static readonly ROLLUP = 140;
    public static readonly ROW = 141;
    public static readonly ROWS = 142;
    public static readonly SAMPLE = 143;
    public static readonly SECOND = 144;
    public static readonly SELECT = 145;
    public static readonly SEMI = 146;
    public static readonly SENDS = 147;
    public static readonly SET = 148;
    public static readonly SETTINGS = 149;
    public static readonly SHOW = 150;
    public static readonly SOURCE = 151;
    public static readonly START = 152;
    public static readonly STOP = 153;
    public static readonly SUBSTRING = 154;
    public static readonly SYNC = 155;
    public static readonly SYNTAX = 156;
    public static readonly SYSTEM = 157;
    public static readonly TABLE = 158;
    public static readonly TABLES = 159;
    public static readonly TEMPORARY = 160;
    public static readonly TEST = 161;
    public static readonly THEN = 162;
    public static readonly TIES = 163;
    public static readonly TIMEOUT = 164;
    public static readonly TIMESTAMP = 165;
    public static readonly TO = 166;
    public static readonly TOP = 167;
    public static readonly TOTALS = 168;
    public static readonly TRAILING = 169;
    public static readonly TRIM = 170;
    public static readonly TRUNCATE = 171;
    public static readonly TTL = 172;
    public static readonly TYPE = 173;
    public static readonly UNBOUNDED = 174;
    public static readonly UNION = 175;
    public static readonly UPDATE = 176;
    public static readonly USE = 177;
    public static readonly USING = 178;
    public static readonly UUID = 179;
    public static readonly VALUES = 180;
    public static readonly VIEW = 181;
    public static readonly VOLUME = 182;
    public static readonly WATCH = 183;
    public static readonly WEEK = 184;
    public static readonly WHEN = 185;
    public static readonly WHERE = 186;
    public static readonly WINDOW = 187;
    public static readonly WITH = 188;
    public static readonly YEAR = 189;
    public static readonly JSON_FALSE = 190;
    public static readonly JSON_TRUE = 191;
    public static readonly IDENTIFIER = 192;
    public static readonly FLOATING_LITERAL = 193;
    public static readonly OCTAL_LITERAL = 194;
    public static readonly DECIMAL_LITERAL = 195;
    public static readonly HEXADECIMAL_LITERAL = 196;
    public static readonly STRING_LITERAL = 197;
    public static readonly ARROW = 198;
    public static readonly ASTERISK = 199;
    public static readonly BACKQUOTE = 200;
    public static readonly BACKSLASH = 201;
    public static readonly COLON = 202;
    public static readonly COMMA = 203;
    public static readonly CONCAT = 204;
    public static readonly DASH = 205;
    public static readonly DOT = 206;
    public static readonly EQ_DOUBLE = 207;
    public static readonly EQ_SINGLE = 208;
    public static readonly GE = 209;
    public static readonly GT = 210;
    public static readonly LBRACE = 211;
    public static readonly LBRACKET = 212;
    public static readonly LE = 213;
    public static readonly LPAREN = 214;
    public static readonly LT = 215;
    public static readonly NOT_EQ = 216;
    public static readonly PERCENT = 217;
    public static readonly PLUS = 218;
    public static readonly QUERY = 219;
    public static readonly QUOTE_DOUBLE = 220;
    public static readonly QUOTE_SINGLE = 221;
    public static readonly RBRACE = 222;
    public static readonly RBRACKET = 223;
    public static readonly RPAREN = 224;
    public static readonly SEMICOLON = 225;
    public static readonly SLASH = 226;
    public static readonly UNDERSCORE = 227;
    public static readonly MULTI_LINE_COMMENT = 228;
    public static readonly SINGLE_LINE_COMMENT = 229;
    public static readonly WHITESPACE = 230;
    public static readonly RULE_root = 0;
    public static readonly RULE_queryStmt = 1;
    public static readonly RULE_query = 2;
    public static readonly RULE_ctes = 3;
    public static readonly RULE_namedQuery = 4;
    public static readonly RULE_columnAliases = 5;
    public static readonly RULE_alterStmt = 6;
    public static readonly RULE_alterTableClause = 7;
    public static readonly RULE_assignmentExprList = 8;
    public static readonly RULE_assignmentExpr = 9;
    public static readonly RULE_tableColumnPropertyType = 10;
    public static readonly RULE_partitionClause = 11;
    public static readonly RULE_attachStmt = 12;
    public static readonly RULE_checkStmt = 13;
    public static readonly RULE_createStmt = 14;
    public static readonly RULE_dictionarySchemaClause = 15;
    public static readonly RULE_dictionaryAttrDfnt = 16;
    public static readonly RULE_dictionaryEngineClause = 17;
    public static readonly RULE_dictionaryPrimaryKeyClause = 18;
    public static readonly RULE_dictionaryArgExpr = 19;
    public static readonly RULE_sourceClause = 20;
    public static readonly RULE_lifetimeClause = 21;
    public static readonly RULE_layoutClause = 22;
    public static readonly RULE_rangeClause = 23;
    public static readonly RULE_dictionarySettingsClause = 24;
    public static readonly RULE_clusterClause = 25;
    public static readonly RULE_uuidClause = 26;
    public static readonly RULE_destinationClause = 27;
    public static readonly RULE_subqueryClause = 28;
    public static readonly RULE_tableSchemaClause = 29;
    public static readonly RULE_engineClause = 30;
    public static readonly RULE_partitionByClause = 31;
    public static readonly RULE_primaryKeyClause = 32;
    public static readonly RULE_sampleByClause = 33;
    public static readonly RULE_ttlClause = 34;
    public static readonly RULE_engineExpr = 35;
    public static readonly RULE_tableElementExpr = 36;
    public static readonly RULE_tableColumnDfnt = 37;
    public static readonly RULE_tableColumnPropertyExpr = 38;
    public static readonly RULE_tableIndexDfnt = 39;
    public static readonly RULE_tableProjectionDfnt = 40;
    public static readonly RULE_codecExpr = 41;
    public static readonly RULE_codecArgExpr = 42;
    public static readonly RULE_ttlExpr = 43;
    public static readonly RULE_describeStmt = 44;
    public static readonly RULE_dropStmt = 45;
    public static readonly RULE_existsStmt = 46;
    public static readonly RULE_explainStmt = 47;
    public static readonly RULE_insertStmt = 48;
    public static readonly RULE_columnsClause = 49;
    public static readonly RULE_dataClause = 50;
    public static readonly RULE_killStmt = 51;
    public static readonly RULE_optimizeStmt = 52;
    public static readonly RULE_renameStmt = 53;
    public static readonly RULE_projectionSelectStmt = 54;
    public static readonly RULE_selectUnionStmt = 55;
    public static readonly RULE_selectStmtWithParens = 56;
    public static readonly RULE_selectStmt = 57;
    public static readonly RULE_withClause = 58;
    public static readonly RULE_topClause = 59;
    public static readonly RULE_fromClause = 60;
    public static readonly RULE_arrayJoinClause = 61;
    public static readonly RULE_windowClause = 62;
    public static readonly RULE_prewhereClause = 63;
    public static readonly RULE_whereClause = 64;
    public static readonly RULE_groupByClause = 65;
    public static readonly RULE_havingClause = 66;
    public static readonly RULE_orderByClause = 67;
    public static readonly RULE_projectionOrderByClause = 68;
    public static readonly RULE_limitByClause = 69;
    public static readonly RULE_limitClause = 70;
    public static readonly RULE_settingsClause = 71;
    public static readonly RULE_joinExpr = 72;
    public static readonly RULE_joinOp = 73;
    public static readonly RULE_joinOpCross = 74;
    public static readonly RULE_joinConstraintClause = 75;
    public static readonly RULE_sampleClause = 76;
    public static readonly RULE_limitExpr = 77;
    public static readonly RULE_orderExprList = 78;
    public static readonly RULE_orderExpr = 79;
    public static readonly RULE_ratioExpr = 80;
    public static readonly RULE_settingExprList = 81;
    public static readonly RULE_settingExpr = 82;
    public static readonly RULE_windowExpr = 83;
    public static readonly RULE_winPartitionByClause = 84;
    public static readonly RULE_winOrderByClause = 85;
    public static readonly RULE_winFrameClause = 86;
    public static readonly RULE_winFrameExtend = 87;
    public static readonly RULE_winFrameBound = 88;
    public static readonly RULE_setStmt = 89;
    public static readonly RULE_showStmt = 90;
    public static readonly RULE_systemStmt = 91;
    public static readonly RULE_truncateStmt = 92;
    public static readonly RULE_useStmt = 93;
    public static readonly RULE_watchStmt = 94;
    public static readonly RULE_columnTypeExpr = 95;
    public static readonly RULE_columnExprList = 96;
    public static readonly RULE_columnsExpr = 97;
    public static readonly RULE_columnExpr = 98;
    public static readonly RULE_columnArgList = 99;
    public static readonly RULE_columnArgExpr = 100;
    public static readonly RULE_columnLambdaExpr = 101;
    public static readonly RULE_columnIdentifier = 102;
    public static readonly RULE_nestedIdentifier = 103;
    public static readonly RULE_tableExpr = 104;
    public static readonly RULE_tableFunctionExpr = 105;
    public static readonly RULE_tableIdentifier = 106;
    public static readonly RULE_tableArgList = 107;
    public static readonly RULE_tableArgExpr = 108;
    public static readonly RULE_databaseIdentifier = 109;
    public static readonly RULE_floatingLiteral = 110;
    public static readonly RULE_numberLiteral = 111;
    public static readonly RULE_literal = 112;
    public static readonly RULE_interval = 113;
    public static readonly RULE_keyword = 114;
    public static readonly RULE_keywordForAlias = 115;
    public static readonly RULE_alias = 116;
    public static readonly RULE_identifier = 117;
    public static readonly RULE_identifierOrNull = 118;
    public static readonly RULE_enumValue = 119;

    public static readonly literalNames = [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        "'false'",
        "'true'",
        null,
        null,
        null,
        null,
        null,
        null,
        "'->'",
        "'*'",
        "'`'",
        "'\\'",
        "':'",
        "','",
        "'||'",
        "'-'",
        "'.'",
        "'=='",
        "'='",
        "'>='",
        "'>'",
        "'{'",
        "'['",
        "'<='",
        "'('",
        "'<'",
        null,
        "'%'",
        "'+'",
        "'?'",
        "'\"'",
        "'''",
        "'}'",
        "']'",
        "')'",
        "';'",
        "'/'",
        "'_'",
    ];

    public static readonly symbolicNames = [
        null,
        'ADD',
        'AFTER',
        'ALIAS',
        'ALL',
        'ALTER',
        'AND',
        'ANTI',
        'ANY',
        'ARRAY',
        'AS',
        'ASCENDING',
        'ASOF',
        'AST',
        'ASYNC',
        'ATTACH',
        'BETWEEN',
        'BOTH',
        'BY',
        'CASE',
        'CAST',
        'CHECK',
        'CLEAR',
        'CLUSTER',
        'CODEC',
        'COLLATE',
        'COLUMN',
        'COMMENT',
        'CONSTRAINT',
        'CREATE',
        'CROSS',
        'CUBE',
        'CURRENT',
        'DATABASE',
        'DATABASES',
        'DATE',
        'DAY',
        'DEDUPLICATE',
        'DEFAULT',
        'DELAY',
        'DELETE',
        'DESC',
        'DESCENDING',
        'DESCRIBE',
        'DETACH',
        'DICTIONARIES',
        'DICTIONARY',
        'DISK',
        'DISTINCT',
        'DISTRIBUTED',
        'DROP',
        'ELSE',
        'END',
        'ENGINE',
        'EVENTS',
        'EXISTS',
        'EXPLAIN',
        'EXPRESSION',
        'EXTRACT',
        'FETCHES',
        'FINAL',
        'FIRST',
        'FLUSH',
        'FOLLOWING',
        'FOR',
        'FORMAT',
        'FREEZE',
        'FROM',
        'FULL',
        'FUNCTION',
        'GLOBAL',
        'GRANULARITY',
        'GROUP',
        'HAVING',
        'HIERARCHICAL',
        'HOUR',
        'ID',
        'IF',
        'ILIKE',
        'IN',
        'INDEX',
        'INF',
        'INJECTIVE',
        'INNER',
        'INSERT',
        'INTERVAL',
        'INTO',
        'IS',
        'IS_OBJECT_ID',
        'JOIN',
        'KEY',
        'KILL',
        'LAST',
        'LAYOUT',
        'LEADING',
        'LEFT',
        'LIFETIME',
        'LIKE',
        'LIMIT',
        'LIVE',
        'LOCAL',
        'LOGS',
        'MATERIALIZE',
        'MATERIALIZED',
        'MAX',
        'MERGES',
        'MIN',
        'MINUTE',
        'MODIFY',
        'MONTH',
        'MOVE',
        'MUTATION',
        'NAN_SQL',
        'NO',
        'NOT',
        'NULL_SQL',
        'NULLS',
        'OFFSET',
        'ON',
        'OPTIMIZE',
        'OR',
        'ORDER',
        'OUTER',
        'OUTFILE',
        'OVER',
        'PARTITION',
        'POPULATE',
        'PRECEDING',
        'PREWHERE',
        'PRIMARY',
        'PROJECTION',
        'QUARTER',
        'RANGE',
        'RELOAD',
        'REMOVE',
        'RENAME',
        'REPLACE',
        'REPLICA',
        'REPLICATED',
        'RIGHT',
        'ROLLUP',
        'ROW',
        'ROWS',
        'SAMPLE',
        'SECOND',
        'SELECT',
        'SEMI',
        'SENDS',
        'SET',
        'SETTINGS',
        'SHOW',
        'SOURCE',
        'START',
        'STOP',
        'SUBSTRING',
        'SYNC',
        'SYNTAX',
        'SYSTEM',
        'TABLE',
        'TABLES',
        'TEMPORARY',
        'TEST',
        'THEN',
        'TIES',
        'TIMEOUT',
        'TIMESTAMP',
        'TO',
        'TOP',
        'TOTALS',
        'TRAILING',
        'TRIM',
        'TRUNCATE',
        'TTL',
        'TYPE',
        'UNBOUNDED',
        'UNION',
        'UPDATE',
        'USE',
        'USING',
        'UUID',
        'VALUES',
        'VIEW',
        'VOLUME',
        'WATCH',
        'WEEK',
        'WHEN',
        'WHERE',
        'WINDOW',
        'WITH',
        'YEAR',
        'JSON_FALSE',
        'JSON_TRUE',
        'IDENTIFIER',
        'FLOATING_LITERAL',
        'OCTAL_LITERAL',
        'DECIMAL_LITERAL',
        'HEXADECIMAL_LITERAL',
        'STRING_LITERAL',
        'ARROW',
        'ASTERISK',
        'BACKQUOTE',
        'BACKSLASH',
        'COLON',
        'COMMA',
        'CONCAT',
        'DASH',
        'DOT',
        'EQ_DOUBLE',
        'EQ_SINGLE',
        'GE',
        'GT',
        'LBRACE',
        'LBRACKET',
        'LE',
        'LPAREN',
        'LT',
        'NOT_EQ',
        'PERCENT',
        'PLUS',
        'QUERY',
        'QUOTE_DOUBLE',
        'QUOTE_SINGLE',
        'RBRACE',
        'RBRACKET',
        'RPAREN',
        'SEMICOLON',
        'SLASH',
        'UNDERSCORE',
        'MULTI_LINE_COMMENT',
        'SINGLE_LINE_COMMENT',
        'WHITESPACE',
    ];
    public static readonly ruleNames = [
        'root',
        'queryStmt',
        'query',
        'ctes',
        'namedQuery',
        'columnAliases',
        'alterStmt',
        'alterTableClause',
        'assignmentExprList',
        'assignmentExpr',
        'tableColumnPropertyType',
        'partitionClause',
        'attachStmt',
        'checkStmt',
        'createStmt',
        'dictionarySchemaClause',
        'dictionaryAttrDfnt',
        'dictionaryEngineClause',
        'dictionaryPrimaryKeyClause',
        'dictionaryArgExpr',
        'sourceClause',
        'lifetimeClause',
        'layoutClause',
        'rangeClause',
        'dictionarySettingsClause',
        'clusterClause',
        'uuidClause',
        'destinationClause',
        'subqueryClause',
        'tableSchemaClause',
        'engineClause',
        'partitionByClause',
        'primaryKeyClause',
        'sampleByClause',
        'ttlClause',
        'engineExpr',
        'tableElementExpr',
        'tableColumnDfnt',
        'tableColumnPropertyExpr',
        'tableIndexDfnt',
        'tableProjectionDfnt',
        'codecExpr',
        'codecArgExpr',
        'ttlExpr',
        'describeStmt',
        'dropStmt',
        'existsStmt',
        'explainStmt',
        'insertStmt',
        'columnsClause',
        'dataClause',
        'killStmt',
        'optimizeStmt',
        'renameStmt',
        'projectionSelectStmt',
        'selectUnionStmt',
        'selectStmtWithParens',
        'selectStmt',
        'withClause',
        'topClause',
        'fromClause',
        'arrayJoinClause',
        'windowClause',
        'prewhereClause',
        'whereClause',
        'groupByClause',
        'havingClause',
        'orderByClause',
        'projectionOrderByClause',
        'limitByClause',
        'limitClause',
        'settingsClause',
        'joinExpr',
        'joinOp',
        'joinOpCross',
        'joinConstraintClause',
        'sampleClause',
        'limitExpr',
        'orderExprList',
        'orderExpr',
        'ratioExpr',
        'settingExprList',
        'settingExpr',
        'windowExpr',
        'winPartitionByClause',
        'winOrderByClause',
        'winFrameClause',
        'winFrameExtend',
        'winFrameBound',
        'setStmt',
        'showStmt',
        'systemStmt',
        'truncateStmt',
        'useStmt',
        'watchStmt',
        'columnTypeExpr',
        'columnExprList',
        'columnsExpr',
        'columnExpr',
        'columnArgList',
        'columnArgExpr',
        'columnLambdaExpr',
        'columnIdentifier',
        'nestedIdentifier',
        'tableExpr',
        'tableFunctionExpr',
        'tableIdentifier',
        'tableArgList',
        'tableArgExpr',
        'databaseIdentifier',
        'floatingLiteral',
        'numberLiteral',
        'literal',
        'interval',
        'keyword',
        'keywordForAlias',
        'alias',
        'identifier',
        'identifierOrNull',
        'enumValue',
    ];

    public get grammarFileName(): string {
        return 'ClickHouseParser.g4';
    }
    public get literalNames(): (string | null)[] {
        return ClickHouseParser.literalNames;
    }
    public get symbolicNames(): (string | null)[] {
        return ClickHouseParser.symbolicNames;
    }
    public get ruleNames(): string[] {
        return ClickHouseParser.ruleNames;
    }
    public get serializedATN(): number[] {
        return ClickHouseParser._serializedATN;
    }

    protected createFailedPredicateException(
        predicate?: string,
        message?: string,
    ): antlr.FailedPredicateException {
        return new antlr.FailedPredicateException(this, predicate, message);
    }

    public constructor(input: antlr.TokenStream) {
        super(input);
        this.interpreter = new antlr.ParserATNSimulator(
            this,
            ClickHouseParser._ATN,
            ClickHouseParser.decisionsToDFA,
            new antlr.PredictionContextCache(),
        );
    }
    public root(): RootContext {
        let localContext = new RootContext(this.context, this.state);
        this.enterRule(localContext, 0, ClickHouseParser.RULE_root);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 243;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (
                    ((_la & ~0x1f) === 0 && ((1 << _la) & 539000864) !== 0) ||
                    (((_la - 41) & ~0x1f) === 0 && ((1 << (_la - 41)) & 49677) !== 0) ||
                    _la === 84 ||
                    _la === 91 ||
                    (((_la - 119) & ~0x1f) === 0 && ((1 << (_la - 119)) & 2751660033) !== 0) ||
                    (((_la - 157) & ~0x1f) === 0 && ((1 << (_la - 157)) & 2215657473) !== 0) ||
                    _la === 214
                ) {
                    {
                        {
                            this.state = 240;
                            this.queryStmt();
                        }
                    }
                    this.state = 245;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
            }
        } catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localContext;
    }
    public queryStmt(): QueryStmtContext {
        let localContext = new QueryStmtContext(this.context, this.state);
        this.enterRule(localContext, 2, ClickHouseParser.RULE_queryStmt);
        let _la: number;
        try {
            this.state = 260;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
                case ClickHouseParser.ALTER:
                case ClickHouseParser.ATTACH:
                case ClickHouseParser.CHECK:
                case ClickHouseParser.CREATE:
                case ClickHouseParser.DESC:
                case ClickHouseParser.DESCRIBE:
                case ClickHouseParser.DETACH:
                case ClickHouseParser.DROP:
                case ClickHouseParser.EXISTS:
                case ClickHouseParser.EXPLAIN:
                case ClickHouseParser.KILL:
                case ClickHouseParser.OPTIMIZE:
                case ClickHouseParser.RENAME:
                case ClickHouseParser.REPLACE:
                case ClickHouseParser.SELECT:
                case ClickHouseParser.SET:
                case ClickHouseParser.SHOW:
                case ClickHouseParser.SYSTEM:
                case ClickHouseParser.TRUNCATE:
                case ClickHouseParser.USE:
                case ClickHouseParser.WATCH:
                case ClickHouseParser.WITH:
                case ClickHouseParser.LPAREN:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 246;
                        this.query();
                        this.state = 250;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 86) {
                            {
                                this.state = 247;
                                this.match(ClickHouseParser.INTO);
                                this.state = 248;
                                this.match(ClickHouseParser.OUTFILE);
                                this.state = 249;
                                this.match(ClickHouseParser.STRING_LITERAL);
                            }
                        }

                        this.state = 254;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 65) {
                            {
                                this.state = 252;
                                this.match(ClickHouseParser.FORMAT);
                                this.state = 253;
                                this.identifierOrNull();
                            }
                        }

                        this.state = 257;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 225) {
                            {
                                this.state = 256;
                                this.match(ClickHouseParser.SEMICOLON);
                            }
                        }
                    }
                    break;
                case ClickHouseParser.INSERT:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 259;
                        this.insertStmt();
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
            }
        } catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localContext;
    }
    public query(): QueryContext {
        let localContext = new QueryContext(this.context, this.state);
        this.enterRule(localContext, 4, ClickHouseParser.RULE_query);
        try {
            this.state = 284;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 6, this.context)) {
                case 1:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 262;
                        this.alterStmt();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 263;
                        this.attachStmt();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(localContext, 3);
                    {
                        this.state = 264;
                        this.checkStmt();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(localContext, 4);
                    {
                        this.state = 265;
                        this.createStmt();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(localContext, 5);
                    {
                        this.state = 266;
                        this.describeStmt();
                    }
                    break;
                case 6:
                    this.enterOuterAlt(localContext, 6);
                    {
                        this.state = 267;
                        this.dropStmt();
                    }
                    break;
                case 7:
                    this.enterOuterAlt(localContext, 7);
                    {
                        this.state = 268;
                        this.existsStmt();
                    }
                    break;
                case 8:
                    this.enterOuterAlt(localContext, 8);
                    {
                        this.state = 269;
                        this.explainStmt();
                    }
                    break;
                case 9:
                    this.enterOuterAlt(localContext, 9);
                    {
                        this.state = 270;
                        this.killStmt();
                    }
                    break;
                case 10:
                    this.enterOuterAlt(localContext, 10);
                    {
                        this.state = 271;
                        this.optimizeStmt();
                    }
                    break;
                case 11:
                    this.enterOuterAlt(localContext, 11);
                    {
                        this.state = 272;
                        this.renameStmt();
                    }
                    break;
                case 12:
                    this.enterOuterAlt(localContext, 12);
                    {
                        this.state = 273;
                        this.selectUnionStmt();
                    }
                    break;
                case 13:
                    this.enterOuterAlt(localContext, 13);
                    {
                        this.state = 274;
                        this.setStmt();
                    }
                    break;
                case 14:
                    this.enterOuterAlt(localContext, 14);
                    {
                        this.state = 275;
                        this.showStmt();
                    }
                    break;
                case 15:
                    this.enterOuterAlt(localContext, 15);
                    {
                        this.state = 276;
                        this.systemStmt();
                    }
                    break;
                case 16:
                    this.enterOuterAlt(localContext, 16);
                    {
                        this.state = 277;
                        this.truncateStmt();
                    }
                    break;
                case 17:
                    this.enterOuterAlt(localContext, 17);
                    {
                        this.state = 278;
                        this.useStmt();
                    }
                    break;
                case 18:
                    this.enterOuterAlt(localContext, 18);
                    {
                        this.state = 279;
                        this.watchStmt();
                    }
                    break;
                case 19:
                    this.enterOuterAlt(localContext, 19);
                    {
                        this.state = 281;
                        this.errorHandler.sync(this);
                        switch (
                            this.interpreter.adaptivePredict(this.tokenStream, 5, this.context)
                        ) {
                            case 1:
                                {
                                    this.state = 280;
                                    this.ctes();
                                }
                                break;
                        }
                        this.state = 283;
                        this.selectStmt();
                    }
                    break;
            }
        } catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localContext;
    }
    public ctes(): CtesContext {
        let localContext = new CtesContext(this.context, this.state);
        this.enterRule(localContext, 6, ClickHouseParser.RULE_ctes);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 286;
                this.match(ClickHouseParser.WITH);
                this.state = 287;
                this.namedQuery();
                this.state = 292;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 203) {
                    {
                        {
                            this.state = 288;
                            this.match(ClickHouseParser.COMMA);
                            this.state = 289;
                            this.namedQuery();
                        }
                    }
                    this.state = 294;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
            }
        } catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localContext;
    }
    public namedQuery(): NamedQueryContext {
        let localContext = new NamedQueryContext(this.context, this.state);
        this.enterRule(localContext, 8, ClickHouseParser.RULE_namedQuery);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 295;
                localContext._name = this.identifier();
                this.state = 297;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 214) {
                    {
                        this.state = 296;
                        this.columnAliases();
                    }
                }

                this.state = 299;
                this.match(ClickHouseParser.AS);
                this.state = 300;
                this.match(ClickHouseParser.LPAREN);
                this.state = 301;
                this.query();
                this.state = 302;
                this.match(ClickHouseParser.RPAREN);
            }
        } catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localContext;
    }
    public columnAliases(): ColumnAliasesContext {
        let localContext = new ColumnAliasesContext(this.context, this.state);
        this.enterRule(localContext, 10, ClickHouseParser.RULE_columnAliases);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 304;
                this.match(ClickHouseParser.LPAREN);
                this.state = 305;
                this.identifier();
                this.state = 310;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 203) {
                    {
                        {
                            this.state = 306;
                            this.match(ClickHouseParser.COMMA);
                            this.state = 307;
                            this.identifier();
                        }
                    }
                    this.state = 312;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 313;
                this.match(ClickHouseParser.RPAREN);
            }
        } catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localContext;
    }
    public alterStmt(): AlterStmtContext {
        let localContext = new AlterStmtContext(this.context, this.state);
        this.enterRule(localContext, 12, ClickHouseParser.RULE_alterStmt);
        let _la: number;
        try {
            localContext = new AlterTableStmtContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 315;
                this.match(ClickHouseParser.ALTER);
                this.state = 316;
                this.match(ClickHouseParser.TABLE);
                this.state = 317;
                this.tableIdentifier();
                this.state = 319;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 118) {
                    {
                        this.state = 318;
                        this.clusterClause();
                    }
                }

                this.state = 321;
                this.alterTableClause();
                this.state = 326;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 203) {
                    {
                        {
                            this.state = 322;
                            this.match(ClickHouseParser.COMMA);
                            this.state = 323;
                            this.alterTableClause();
                        }
                    }
                    this.state = 328;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
            }
        } catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localContext;
    }
    public alterTableClause(): AlterTableClauseContext {
        let localContext = new AlterTableClauseContext(this.context, this.state);
        this.enterRule(localContext, 14, ClickHouseParser.RULE_alterTableClause);
        let _la: number;
        try {
            this.state = 543;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 40, this.context)) {
                case 1:
                    localContext = new AlterTableClauseAddColumnContext(localContext);
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 329;
                        this.match(ClickHouseParser.ADD);
                        this.state = 330;
                        this.match(ClickHouseParser.COLUMN);
                        this.state = 334;
                        this.errorHandler.sync(this);
                        switch (
                            this.interpreter.adaptivePredict(this.tokenStream, 12, this.context)
                        ) {
                            case 1:
                                {
                                    this.state = 331;
                                    this.match(ClickHouseParser.IF);
                                    this.state = 332;
                                    this.match(ClickHouseParser.NOT);
                                    this.state = 333;
                                    this.match(ClickHouseParser.EXISTS);
                                }
                                break;
                        }
                        this.state = 336;
                        this.tableColumnDfnt();
                        this.state = 339;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 2) {
                            {
                                this.state = 337;
                                this.match(ClickHouseParser.AFTER);
                                this.state = 338;
                                this.nestedIdentifier();
                            }
                        }
                    }
                    break;
                case 2:
                    localContext = new AlterTableClauseAddIndexContext(localContext);
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 341;
                        this.match(ClickHouseParser.ADD);
                        this.state = 342;
                        this.match(ClickHouseParser.INDEX);
                        this.state = 346;
                        this.errorHandler.sync(this);
                        switch (
                            this.interpreter.adaptivePredict(this.tokenStream, 14, this.context)
                        ) {
                            case 1:
                                {
                                    this.state = 343;
                                    this.match(ClickHouseParser.IF);
                                    this.state = 344;
                                    this.match(ClickHouseParser.NOT);
                                    this.state = 345;
                                    this.match(ClickHouseParser.EXISTS);
                                }
                                break;
                        }
                        this.state = 348;
                        this.tableIndexDfnt();
                        this.state = 351;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 2) {
                            {
                                this.state = 349;
                                this.match(ClickHouseParser.AFTER);
                                this.state = 350;
                                this.nestedIdentifier();
                            }
                        }
                    }
                    break;
                case 3:
                    localContext = new AlterTableClauseAddProjectionContext(localContext);
                    this.enterOuterAlt(localContext, 3);
                    {
                        this.state = 353;
                        this.match(ClickHouseParser.ADD);
                        this.state = 354;
                        this.match(ClickHouseParser.PROJECTION);
                        this.state = 358;
                        this.errorHandler.sync(this);
                        switch (
                            this.interpreter.adaptivePredict(this.tokenStream, 16, this.context)
                        ) {
                            case 1:
                                {
                                    this.state = 355;
                                    this.match(ClickHouseParser.IF);
                                    this.state = 356;
                                    this.match(ClickHouseParser.NOT);
                                    this.state = 357;
                                    this.match(ClickHouseParser.EXISTS);
                                }
                                break;
                        }
                        this.state = 360;
                        this.tableProjectionDfnt();
                        this.state = 363;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 2) {
                            {
                                this.state = 361;
                                this.match(ClickHouseParser.AFTER);
                                this.state = 362;
                                this.nestedIdentifier();
                            }
                        }
                    }
                    break;
                case 4:
                    localContext = new AlterTableClauseAttachContext(localContext);
                    this.enterOuterAlt(localContext, 4);
                    {
                        this.state = 365;
                        this.match(ClickHouseParser.ATTACH);
                        this.state = 366;
                        this.partitionClause();
                        this.state = 369;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 67) {
                            {
                                this.state = 367;
                                this.match(ClickHouseParser.FROM);
                                this.state = 368;
                                this.tableIdentifier();
                            }
                        }
                    }
                    break;
                case 5:
                    localContext = new AlterTableClauseClearColumnContext(localContext);
                    this.enterOuterAlt(localContext, 5);
                    {
                        this.state = 371;
                        this.match(ClickHouseParser.CLEAR);
                        this.state = 372;
                        this.match(ClickHouseParser.COLUMN);
                        this.state = 375;
                        this.errorHandler.sync(this);
                        switch (
                            this.interpreter.adaptivePredict(this.tokenStream, 19, this.context)
                        ) {
                            case 1:
                                {
                                    this.state = 373;
                                    this.match(ClickHouseParser.IF);
                                    this.state = 374;
                                    this.match(ClickHouseParser.EXISTS);
                                }
                                break;
                        }
                        this.state = 377;
                        this.nestedIdentifier();
                        this.state = 380;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 79) {
                            {
                                this.state = 378;
                                this.match(ClickHouseParser.IN);
                                this.state = 379;
                                this.partitionClause();
                            }
                        }
                    }
                    break;
                case 6:
                    localContext = new AlterTableClauseClearIndexContext(localContext);
                    this.enterOuterAlt(localContext, 6);
                    {
                        this.state = 382;
                        this.match(ClickHouseParser.CLEAR);
                        this.state = 383;
                        this.match(ClickHouseParser.INDEX);
                        this.state = 386;
                        this.errorHandler.sync(this);
                        switch (
                            this.interpreter.adaptivePredict(this.tokenStream, 21, this.context)
                        ) {
                            case 1:
                                {
                                    this.state = 384;
                                    this.match(ClickHouseParser.IF);
                                    this.state = 385;
                                    this.match(ClickHouseParser.EXISTS);
                                }
                                break;
                        }
                        this.state = 388;
                        this.nestedIdentifier();
                        this.state = 391;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 79) {
                            {
                                this.state = 389;
                                this.match(ClickHouseParser.IN);
                                this.state = 390;
                                this.partitionClause();
                            }
                        }
                    }
                    break;
                case 7:
                    localContext = new AlterTableClauseClearProjectionContext(localContext);
                    this.enterOuterAlt(localContext, 7);
                    {
                        this.state = 393;
                        this.match(ClickHouseParser.CLEAR);
                        this.state = 394;
                        this.match(ClickHouseParser.PROJECTION);
                        this.state = 397;
                        this.errorHandler.sync(this);
                        switch (
                            this.interpreter.adaptivePredict(this.tokenStream, 23, this.context)
                        ) {
                            case 1:
                                {
                                    this.state = 395;
                                    this.match(ClickHouseParser.IF);
                                    this.state = 396;
                                    this.match(ClickHouseParser.EXISTS);
                                }
                                break;
                        }
                        this.state = 399;
                        this.nestedIdentifier();
                        this.state = 402;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 79) {
                            {
                                this.state = 400;
                                this.match(ClickHouseParser.IN);
                                this.state = 401;
                                this.partitionClause();
                            }
                        }
                    }
                    break;
                case 8:
                    localContext = new AlterTableClauseCommentContext(localContext);
                    this.enterOuterAlt(localContext, 8);
                    {
                        this.state = 404;
                        this.match(ClickHouseParser.COMMENT);
                        this.state = 405;
                        this.match(ClickHouseParser.COLUMN);
                        this.state = 408;
                        this.errorHandler.sync(this);
                        switch (
                            this.interpreter.adaptivePredict(this.tokenStream, 25, this.context)
                        ) {
                            case 1:
                                {
                                    this.state = 406;
                                    this.match(ClickHouseParser.IF);
                                    this.state = 407;
                                    this.match(ClickHouseParser.EXISTS);
                                }
                                break;
                        }
                        this.state = 410;
                        this.nestedIdentifier();
                        this.state = 411;
                        this.match(ClickHouseParser.STRING_LITERAL);
                    }
                    break;
                case 9:
                    localContext = new AlterTableClauseDeleteContext(localContext);
                    this.enterOuterAlt(localContext, 9);
                    {
                        this.state = 413;
                        this.match(ClickHouseParser.DELETE);
                        this.state = 414;
                        this.match(ClickHouseParser.WHERE);
                        this.state = 415;
                        this.columnExpr(0);
                    }
                    break;
                case 10:
                    localContext = new AlterTableClauseDetachContext(localContext);
                    this.enterOuterAlt(localContext, 10);
                    {
                        this.state = 416;
                        this.match(ClickHouseParser.DETACH);
                        this.state = 417;
                        this.partitionClause();
                    }
                    break;
                case 11:
                    localContext = new AlterTableClauseDropColumnContext(localContext);
                    this.enterOuterAlt(localContext, 11);
                    {
                        this.state = 418;
                        this.match(ClickHouseParser.DROP);
                        this.state = 419;
                        this.match(ClickHouseParser.COLUMN);
                        this.state = 422;
                        this.errorHandler.sync(this);
                        switch (
                            this.interpreter.adaptivePredict(this.tokenStream, 26, this.context)
                        ) {
                            case 1:
                                {
                                    this.state = 420;
                                    this.match(ClickHouseParser.IF);
                                    this.state = 421;
                                    this.match(ClickHouseParser.EXISTS);
                                }
                                break;
                        }
                        this.state = 424;
                        this.nestedIdentifier();
                    }
                    break;
                case 12:
                    localContext = new AlterTableClauseDropIndexContext(localContext);
                    this.enterOuterAlt(localContext, 12);
                    {
                        this.state = 425;
                        this.match(ClickHouseParser.DROP);
                        this.state = 426;
                        this.match(ClickHouseParser.INDEX);
                        this.state = 429;
                        this.errorHandler.sync(this);
                        switch (
                            this.interpreter.adaptivePredict(this.tokenStream, 27, this.context)
                        ) {
                            case 1:
                                {
                                    this.state = 427;
                                    this.match(ClickHouseParser.IF);
                                    this.state = 428;
                                    this.match(ClickHouseParser.EXISTS);
                                }
                                break;
                        }
                        this.state = 431;
                        this.nestedIdentifier();
                    }
                    break;
                case 13:
                    localContext = new AlterTableClauseDropProjectionContext(localContext);
                    this.enterOuterAlt(localContext, 13);
                    {
                        this.state = 432;
                        this.match(ClickHouseParser.DROP);
                        this.state = 433;
                        this.match(ClickHouseParser.PROJECTION);
                        this.state = 436;
                        this.errorHandler.sync(this);
                        switch (
                            this.interpreter.adaptivePredict(this.tokenStream, 28, this.context)
                        ) {
                            case 1:
                                {
                                    this.state = 434;
                                    this.match(ClickHouseParser.IF);
                                    this.state = 435;
                                    this.match(ClickHouseParser.EXISTS);
                                }
                                break;
                        }
                        this.state = 438;
                        this.nestedIdentifier();
                    }
                    break;
                case 14:
                    localContext = new AlterTableClauseDropPartitionContext(localContext);
                    this.enterOuterAlt(localContext, 14);
                    {
                        this.state = 439;
                        this.match(ClickHouseParser.DROP);
                        this.state = 440;
                        this.partitionClause();
                    }
                    break;
                case 15:
                    localContext = new AlterTableClauseFreezePartitionContext(localContext);
                    this.enterOuterAlt(localContext, 15);
                    {
                        this.state = 441;
                        this.match(ClickHouseParser.FREEZE);
                        this.state = 443;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 125) {
                            {
                                this.state = 442;
                                this.partitionClause();
                            }
                        }
                    }
                    break;
                case 16:
                    localContext = new AlterTableClauseMaterializeIndexContext(localContext);
                    this.enterOuterAlt(localContext, 16);
                    {
                        this.state = 445;
                        this.match(ClickHouseParser.MATERIALIZE);
                        this.state = 446;
                        this.match(ClickHouseParser.INDEX);
                        this.state = 449;
                        this.errorHandler.sync(this);
                        switch (
                            this.interpreter.adaptivePredict(this.tokenStream, 30, this.context)
                        ) {
                            case 1:
                                {
                                    this.state = 447;
                                    this.match(ClickHouseParser.IF);
                                    this.state = 448;
                                    this.match(ClickHouseParser.EXISTS);
                                }
                                break;
                        }
                        this.state = 451;
                        this.nestedIdentifier();
                        this.state = 454;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 79) {
                            {
                                this.state = 452;
                                this.match(ClickHouseParser.IN);
                                this.state = 453;
                                this.partitionClause();
                            }
                        }
                    }
                    break;
                case 17:
                    localContext = new AlterTableClauseMaterializeProjectionContext(localContext);
                    this.enterOuterAlt(localContext, 17);
                    {
                        this.state = 456;
                        this.match(ClickHouseParser.MATERIALIZE);
                        this.state = 457;
                        this.match(ClickHouseParser.PROJECTION);
                        this.state = 460;
                        this.errorHandler.sync(this);
                        switch (
                            this.interpreter.adaptivePredict(this.tokenStream, 32, this.context)
                        ) {
                            case 1:
                                {
                                    this.state = 458;
                                    this.match(ClickHouseParser.IF);
                                    this.state = 459;
                                    this.match(ClickHouseParser.EXISTS);
                                }
                                break;
                        }
                        this.state = 462;
                        this.nestedIdentifier();
                        this.state = 465;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 79) {
                            {
                                this.state = 463;
                                this.match(ClickHouseParser.IN);
                                this.state = 464;
                                this.partitionClause();
                            }
                        }
                    }
                    break;
                case 18:
                    localContext = new AlterTableClauseModifyCodecContext(localContext);
                    this.enterOuterAlt(localContext, 18);
                    {
                        this.state = 467;
                        this.match(ClickHouseParser.MODIFY);
                        this.state = 468;
                        this.match(ClickHouseParser.COLUMN);
                        this.state = 471;
                        this.errorHandler.sync(this);
                        switch (
                            this.interpreter.adaptivePredict(this.tokenStream, 34, this.context)
                        ) {
                            case 1:
                                {
                                    this.state = 469;
                                    this.match(ClickHouseParser.IF);
                                    this.state = 470;
                                    this.match(ClickHouseParser.EXISTS);
                                }
                                break;
                        }
                        this.state = 473;
                        this.nestedIdentifier();
                        this.state = 474;
                        this.codecExpr();
                    }
                    break;
                case 19:
                    localContext = new AlterTableClauseModifyCommentContext(localContext);
                    this.enterOuterAlt(localContext, 19);
                    {
                        this.state = 476;
                        this.match(ClickHouseParser.MODIFY);
                        this.state = 477;
                        this.match(ClickHouseParser.COLUMN);
                        this.state = 480;
                        this.errorHandler.sync(this);
                        switch (
                            this.interpreter.adaptivePredict(this.tokenStream, 35, this.context)
                        ) {
                            case 1:
                                {
                                    this.state = 478;
                                    this.match(ClickHouseParser.IF);
                                    this.state = 479;
                                    this.match(ClickHouseParser.EXISTS);
                                }
                                break;
                        }
                        this.state = 482;
                        this.nestedIdentifier();
                        this.state = 483;
                        this.match(ClickHouseParser.COMMENT);
                        this.state = 484;
                        this.match(ClickHouseParser.STRING_LITERAL);
                    }
                    break;
                case 20:
                    localContext = new AlterTableClauseModifyRemoveContext(localContext);
                    this.enterOuterAlt(localContext, 20);
                    {
                        this.state = 486;
                        this.match(ClickHouseParser.MODIFY);
                        this.state = 487;
                        this.match(ClickHouseParser.COLUMN);
                        this.state = 490;
                        this.errorHandler.sync(this);
                        switch (
                            this.interpreter.adaptivePredict(this.tokenStream, 36, this.context)
                        ) {
                            case 1:
                                {
                                    this.state = 488;
                                    this.match(ClickHouseParser.IF);
                                    this.state = 489;
                                    this.match(ClickHouseParser.EXISTS);
                                }
                                break;
                        }
                        this.state = 492;
                        this.nestedIdentifier();
                        this.state = 493;
                        this.match(ClickHouseParser.REMOVE);
                        this.state = 494;
                        this.tableColumnPropertyType();
                    }
                    break;
                case 21:
                    localContext = new AlterTableClauseModifyContext(localContext);
                    this.enterOuterAlt(localContext, 21);
                    {
                        this.state = 496;
                        this.match(ClickHouseParser.MODIFY);
                        this.state = 497;
                        this.match(ClickHouseParser.COLUMN);
                        this.state = 500;
                        this.errorHandler.sync(this);
                        switch (
                            this.interpreter.adaptivePredict(this.tokenStream, 37, this.context)
                        ) {
                            case 1:
                                {
                                    this.state = 498;
                                    this.match(ClickHouseParser.IF);
                                    this.state = 499;
                                    this.match(ClickHouseParser.EXISTS);
                                }
                                break;
                        }
                        this.state = 502;
                        this.tableColumnDfnt();
                    }
                    break;
                case 22:
                    localContext = new AlterTableClauseModifyOrderByContext(localContext);
                    this.enterOuterAlt(localContext, 22);
                    {
                        this.state = 503;
                        this.match(ClickHouseParser.MODIFY);
                        this.state = 504;
                        this.match(ClickHouseParser.ORDER);
                        this.state = 505;
                        this.match(ClickHouseParser.BY);
                        this.state = 506;
                        this.columnExpr(0);
                    }
                    break;
                case 23:
                    localContext = new AlterTableClauseModifyTTLContext(localContext);
                    this.enterOuterAlt(localContext, 23);
                    {
                        this.state = 507;
                        this.match(ClickHouseParser.MODIFY);
                        this.state = 508;
                        this.ttlClause();
                    }
                    break;
                case 24:
                    localContext = new AlterTableClauseMovePartitionContext(localContext);
                    this.enterOuterAlt(localContext, 24);
                    {
                        this.state = 509;
                        this.match(ClickHouseParser.MOVE);
                        this.state = 510;
                        this.partitionClause();
                        this.state = 520;
                        this.errorHandler.sync(this);
                        switch (
                            this.interpreter.adaptivePredict(this.tokenStream, 38, this.context)
                        ) {
                            case 1:
                                {
                                    this.state = 511;
                                    this.match(ClickHouseParser.TO);
                                    this.state = 512;
                                    this.match(ClickHouseParser.DISK);
                                    this.state = 513;
                                    this.match(ClickHouseParser.STRING_LITERAL);
                                }
                                break;
                            case 2:
                                {
                                    this.state = 514;
                                    this.match(ClickHouseParser.TO);
                                    this.state = 515;
                                    this.match(ClickHouseParser.VOLUME);
                                    this.state = 516;
                                    this.match(ClickHouseParser.STRING_LITERAL);
                                }
                                break;
                            case 3:
                                {
                                    this.state = 517;
                                    this.match(ClickHouseParser.TO);
                                    this.state = 518;
                                    this.match(ClickHouseParser.TABLE);
                                    this.state = 519;
                                    this.tableIdentifier();
                                }
                                break;
                        }
                    }
                    break;
                case 25:
                    localContext = new AlterTableClauseRemoveTTLContext(localContext);
                    this.enterOuterAlt(localContext, 25);
                    {
                        this.state = 522;
                        this.match(ClickHouseParser.REMOVE);
                        this.state = 523;
                        this.match(ClickHouseParser.TTL);
                    }
                    break;
                case 26:
                    localContext = new AlterTableClauseRenameContext(localContext);
                    this.enterOuterAlt(localContext, 26);
                    {
                        this.state = 524;
                        this.match(ClickHouseParser.RENAME);
                        this.state = 525;
                        this.match(ClickHouseParser.COLUMN);
                        this.state = 528;
                        this.errorHandler.sync(this);
                        switch (
                            this.interpreter.adaptivePredict(this.tokenStream, 39, this.context)
                        ) {
                            case 1:
                                {
                                    this.state = 526;
                                    this.match(ClickHouseParser.IF);
                                    this.state = 527;
                                    this.match(ClickHouseParser.EXISTS);
                                }
                                break;
                        }
                        this.state = 530;
                        this.nestedIdentifier();
                        this.state = 531;
                        this.match(ClickHouseParser.TO);
                        this.state = 532;
                        this.nestedIdentifier();
                    }
                    break;
                case 27:
                    localContext = new AlterTableClauseReplaceContext(localContext);
                    this.enterOuterAlt(localContext, 27);
                    {
                        this.state = 534;
                        this.match(ClickHouseParser.REPLACE);
                        this.state = 535;
                        this.partitionClause();
                        this.state = 536;
                        this.match(ClickHouseParser.FROM);
                        this.state = 537;
                        this.tableIdentifier();
                    }
                    break;
                case 28:
                    localContext = new AlterTableClauseUpdateContext(localContext);
                    this.enterOuterAlt(localContext, 28);
                    {
                        this.state = 539;
                        this.match(ClickHouseParser.UPDATE);
                        this.state = 540;
                        this.assignmentExprList();
                        this.state = 541;
                        this.whereClause();
                    }
                    break;
            }
        } catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localContext;
    }
    public assignmentExprList(): AssignmentExprListContext {
        let localContext = new AssignmentExprListContext(this.context, this.state);
        this.enterRule(localContext, 16, ClickHouseParser.RULE_assignmentExprList);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 545;
                this.assignmentExpr();
                this.state = 550;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 203) {
                    {
                        {
                            this.state = 546;
                            this.match(ClickHouseParser.COMMA);
                            this.state = 547;
                            this.assignmentExpr();
                        }
                    }
                    this.state = 552;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
            }
        } catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localContext;
    }
    public assignmentExpr(): AssignmentExprContext {
        let localContext = new AssignmentExprContext(this.context, this.state);
        this.enterRule(localContext, 18, ClickHouseParser.RULE_assignmentExpr);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 553;
                this.nestedIdentifier();
                this.state = 554;
                this.match(ClickHouseParser.EQ_SINGLE);
                this.state = 555;
                this.columnExpr(0);
            }
        } catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localContext;
    }
    public tableColumnPropertyType(): TableColumnPropertyTypeContext {
        let localContext = new TableColumnPropertyTypeContext(this.context, this.state);
        this.enterRule(localContext, 20, ClickHouseParser.RULE_tableColumnPropertyType);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 557;
                _la = this.tokenStream.LA(1);
                if (
                    !(
                        ((_la & ~0x1f) === 0 && ((1 << _la) & 150994952) !== 0) ||
                        _la === 38 ||
                        _la === 103 ||
                        _la === 172
                    )
                ) {
                    this.errorHandler.recoverInline(this);
                } else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
            }
        } catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localContext;
    }
    public partitionClause(): PartitionClauseContext {
        let localContext = new PartitionClauseContext(this.context, this.state);
        this.enterRule(localContext, 22, ClickHouseParser.RULE_partitionClause);
        try {
            this.state = 564;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 42, this.context)) {
                case 1:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 559;
                        this.match(ClickHouseParser.PARTITION);
                        this.state = 560;
                        this.columnExpr(0);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 561;
                        this.match(ClickHouseParser.PARTITION);
                        this.state = 562;
                        this.match(ClickHouseParser.ID);
                        this.state = 563;
                        this.match(ClickHouseParser.STRING_LITERAL);
                    }
                    break;
            }
        } catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localContext;
    }
    public attachStmt(): AttachStmtContext {
        let localContext = new AttachStmtContext(this.context, this.state);
        this.enterRule(localContext, 24, ClickHouseParser.RULE_attachStmt);
        let _la: number;
        try {
            localContext = new AttachDictionaryStmtContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 566;
                this.match(ClickHouseParser.ATTACH);
                this.state = 567;
                this.match(ClickHouseParser.DICTIONARY);
                this.state = 568;
                this.tableIdentifier();
                this.state = 570;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 118) {
                    {
                        this.state = 569;
                        this.clusterClause();
                    }
                }
            }
        } catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localContext;
    }
    public checkStmt(): CheckStmtContext {
        let localContext = new CheckStmtContext(this.context, this.state);
        this.enterRule(localContext, 26, ClickHouseParser.RULE_checkStmt);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 572;
                this.match(ClickHouseParser.CHECK);
                this.state = 573;
                this.match(ClickHouseParser.TABLE);
                this.state = 574;
                this.tableIdentifier();
                this.state = 576;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 125) {
                    {
                        this.state = 575;
                        this.partitionClause();
                    }
                }
            }
        } catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localContext;
    }
    public createStmt(): CreateStmtContext {
        let localContext = new CreateStmtContext(this.context, this.state);
        this.enterRule(localContext, 28, ClickHouseParser.RULE_createStmt);
        let _la: number;
        try {
            this.state = 731;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 80, this.context)) {
                case 1:
                    localContext = new CreateDatabaseStmtContext(localContext);
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 578;
                        _la = this.tokenStream.LA(1);
                        if (!(_la === 15 || _la === 29)) {
                            this.errorHandler.recoverInline(this);
                        } else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 579;
                        this.match(ClickHouseParser.DATABASE);
                        this.state = 583;
                        this.errorHandler.sync(this);
                        switch (
                            this.interpreter.adaptivePredict(this.tokenStream, 45, this.context)
                        ) {
                            case 1:
                                {
                                    this.state = 580;
                                    this.match(ClickHouseParser.IF);
                                    this.state = 581;
                                    this.match(ClickHouseParser.NOT);
                                    this.state = 582;
                                    this.match(ClickHouseParser.EXISTS);
                                }
                                break;
                        }
                        this.state = 585;
                        this.databaseIdentifier();
                        this.state = 587;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 118) {
                            {
                                this.state = 586;
                                this.clusterClause();
                            }
                        }

                        this.state = 590;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 53) {
                            {
                                this.state = 589;
                                this.engineExpr();
                            }
                        }
                    }
                    break;
                case 2:
                    localContext = new CreateDictionaryStmtContext(localContext);
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 599;
                        this.errorHandler.sync(this);
                        switch (this.tokenStream.LA(1)) {
                            case ClickHouseParser.ATTACH:
                                {
                                    this.state = 592;
                                    this.match(ClickHouseParser.ATTACH);
                                }
                                break;
                            case ClickHouseParser.CREATE:
                                {
                                    this.state = 593;
                                    this.match(ClickHouseParser.CREATE);
                                    this.state = 596;
                                    this.errorHandler.sync(this);
                                    _la = this.tokenStream.LA(1);
                                    if (_la === 120) {
                                        {
                                            this.state = 594;
                                            this.match(ClickHouseParser.OR);
                                            this.state = 595;
                                            this.match(ClickHouseParser.REPLACE);
                                        }
                                    }
                                }
                                break;
                            case ClickHouseParser.REPLACE:
                                {
                                    this.state = 598;
                                    this.match(ClickHouseParser.REPLACE);
                                }
                                break;
                            default:
                                throw new antlr.NoViableAltException(this);
                        }
                        this.state = 601;
                        this.match(ClickHouseParser.DICTIONARY);
                        this.state = 605;
                        this.errorHandler.sync(this);
                        switch (
                            this.interpreter.adaptivePredict(this.tokenStream, 50, this.context)
                        ) {
                            case 1:
                                {
                                    this.state = 602;
                                    this.match(ClickHouseParser.IF);
                                    this.state = 603;
                                    this.match(ClickHouseParser.NOT);
                                    this.state = 604;
                                    this.match(ClickHouseParser.EXISTS);
                                }
                                break;
                        }
                        this.state = 607;
                        this.tableIdentifier();
                        this.state = 609;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 179) {
                            {
                                this.state = 608;
                                this.uuidClause();
                            }
                        }

                        this.state = 612;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 118) {
                            {
                                this.state = 611;
                                this.clusterClause();
                            }
                        }

                        this.state = 614;
                        this.dictionarySchemaClause();
                        this.state = 615;
                        this.dictionaryEngineClause();
                    }
                    break;
                case 3:
                    localContext = new CreateLiveViewStmtContext(localContext);
                    this.enterOuterAlt(localContext, 3);
                    {
                        this.state = 617;
                        _la = this.tokenStream.LA(1);
                        if (!(_la === 15 || _la === 29)) {
                            this.errorHandler.recoverInline(this);
                        } else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 618;
                        this.match(ClickHouseParser.LIVE);
                        this.state = 619;
                        this.match(ClickHouseParser.VIEW);
                        this.state = 623;
                        this.errorHandler.sync(this);
                        switch (
                            this.interpreter.adaptivePredict(this.tokenStream, 53, this.context)
                        ) {
                            case 1:
                                {
                                    this.state = 620;
                                    this.match(ClickHouseParser.IF);
                                    this.state = 621;
                                    this.match(ClickHouseParser.NOT);
                                    this.state = 622;
                                    this.match(ClickHouseParser.EXISTS);
                                }
                                break;
                        }
                        this.state = 625;
                        this.tableIdentifier();
                        this.state = 627;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 179) {
                            {
                                this.state = 626;
                                this.uuidClause();
                            }
                        }

                        this.state = 630;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 118) {
                            {
                                this.state = 629;
                                this.clusterClause();
                            }
                        }

                        this.state = 637;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 188) {
                            {
                                this.state = 632;
                                this.match(ClickHouseParser.WITH);
                                this.state = 633;
                                this.match(ClickHouseParser.TIMEOUT);
                                this.state = 635;
                                this.errorHandler.sync(this);
                                _la = this.tokenStream.LA(1);
                                if (_la === 195) {
                                    {
                                        this.state = 634;
                                        this.match(ClickHouseParser.DECIMAL_LITERAL);
                                    }
                                }
                            }
                        }

                        this.state = 640;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 166) {
                            {
                                this.state = 639;
                                this.destinationClause();
                            }
                        }

                        this.state = 643;
                        this.errorHandler.sync(this);
                        switch (
                            this.interpreter.adaptivePredict(this.tokenStream, 59, this.context)
                        ) {
                            case 1:
                                {
                                    this.state = 642;
                                    this.tableSchemaClause();
                                }
                                break;
                        }
                        this.state = 645;
                        this.subqueryClause();
                    }
                    break;
                case 4:
                    localContext = new CreateMaterializedViewStmtContext(localContext);
                    this.enterOuterAlt(localContext, 4);
                    {
                        this.state = 647;
                        _la = this.tokenStream.LA(1);
                        if (!(_la === 15 || _la === 29)) {
                            this.errorHandler.recoverInline(this);
                        } else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 648;
                        this.match(ClickHouseParser.MATERIALIZED);
                        this.state = 649;
                        this.match(ClickHouseParser.VIEW);
                        this.state = 653;
                        this.errorHandler.sync(this);
                        switch (
                            this.interpreter.adaptivePredict(this.tokenStream, 60, this.context)
                        ) {
                            case 1:
                                {
                                    this.state = 650;
                                    this.match(ClickHouseParser.IF);
                                    this.state = 651;
                                    this.match(ClickHouseParser.NOT);
                                    this.state = 652;
                                    this.match(ClickHouseParser.EXISTS);
                                }
                                break;
                        }
                        this.state = 655;
                        this.tableIdentifier();
                        this.state = 657;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 179) {
                            {
                                this.state = 656;
                                this.uuidClause();
                            }
                        }

                        this.state = 660;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 118) {
                            {
                                this.state = 659;
                                this.clusterClause();
                            }
                        }

                        this.state = 663;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 10 || _la === 214) {
                            {
                                this.state = 662;
                                this.tableSchemaClause();
                            }
                        }

                        this.state = 670;
                        this.errorHandler.sync(this);
                        switch (this.tokenStream.LA(1)) {
                            case ClickHouseParser.TO:
                                {
                                    this.state = 665;
                                    this.destinationClause();
                                }
                                break;
                            case ClickHouseParser.ENGINE:
                                {
                                    this.state = 666;
                                    this.engineClause();
                                    this.state = 668;
                                    this.errorHandler.sync(this);
                                    _la = this.tokenStream.LA(1);
                                    if (_la === 126) {
                                        {
                                            this.state = 667;
                                            this.match(ClickHouseParser.POPULATE);
                                        }
                                    }
                                }
                                break;
                            default:
                                throw new antlr.NoViableAltException(this);
                        }
                        this.state = 672;
                        this.subqueryClause();
                    }
                    break;
                case 5:
                    localContext = new CreateTableStmtContext(localContext);
                    this.enterOuterAlt(localContext, 5);
                    {
                        this.state = 681;
                        this.errorHandler.sync(this);
                        switch (this.tokenStream.LA(1)) {
                            case ClickHouseParser.ATTACH:
                                {
                                    this.state = 674;
                                    this.match(ClickHouseParser.ATTACH);
                                }
                                break;
                            case ClickHouseParser.CREATE:
                                {
                                    this.state = 675;
                                    this.match(ClickHouseParser.CREATE);
                                    this.state = 678;
                                    this.errorHandler.sync(this);
                                    _la = this.tokenStream.LA(1);
                                    if (_la === 120) {
                                        {
                                            this.state = 676;
                                            this.match(ClickHouseParser.OR);
                                            this.state = 677;
                                            this.match(ClickHouseParser.REPLACE);
                                        }
                                    }
                                }
                                break;
                            case ClickHouseParser.REPLACE:
                                {
                                    this.state = 680;
                                    this.match(ClickHouseParser.REPLACE);
                                }
                                break;
                            default:
                                throw new antlr.NoViableAltException(this);
                        }
                        this.state = 684;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 160) {
                            {
                                this.state = 683;
                                this.match(ClickHouseParser.TEMPORARY);
                            }
                        }

                        this.state = 686;
                        this.match(ClickHouseParser.TABLE);
                        this.state = 690;
                        this.errorHandler.sync(this);
                        switch (
                            this.interpreter.adaptivePredict(this.tokenStream, 69, this.context)
                        ) {
                            case 1:
                                {
                                    this.state = 687;
                                    this.match(ClickHouseParser.IF);
                                    this.state = 688;
                                    this.match(ClickHouseParser.NOT);
                                    this.state = 689;
                                    this.match(ClickHouseParser.EXISTS);
                                }
                                break;
                        }
                        this.state = 692;
                        this.tableIdentifier();
                        this.state = 694;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 179) {
                            {
                                this.state = 693;
                                this.uuidClause();
                            }
                        }

                        this.state = 697;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 118) {
                            {
                                this.state = 696;
                                this.clusterClause();
                            }
                        }

                        this.state = 700;
                        this.errorHandler.sync(this);
                        switch (
                            this.interpreter.adaptivePredict(this.tokenStream, 72, this.context)
                        ) {
                            case 1:
                                {
                                    this.state = 699;
                                    this.tableSchemaClause();
                                }
                                break;
                        }
                        this.state = 703;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 53) {
                            {
                                this.state = 702;
                                this.engineClause();
                            }
                        }

                        this.state = 706;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 10) {
                            {
                                this.state = 705;
                                this.subqueryClause();
                            }
                        }
                    }
                    break;
                case 6:
                    localContext = new CreateViewStmtContext(localContext);
                    this.enterOuterAlt(localContext, 6);
                    {
                        this.state = 708;
                        _la = this.tokenStream.LA(1);
                        if (!(_la === 15 || _la === 29)) {
                            this.errorHandler.recoverInline(this);
                        } else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 711;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 120) {
                            {
                                this.state = 709;
                                this.match(ClickHouseParser.OR);
                                this.state = 710;
                                this.match(ClickHouseParser.REPLACE);
                            }
                        }

                        this.state = 713;
                        this.match(ClickHouseParser.VIEW);
                        this.state = 717;
                        this.errorHandler.sync(this);
                        switch (
                            this.interpreter.adaptivePredict(this.tokenStream, 76, this.context)
                        ) {
                            case 1:
                                {
                                    this.state = 714;
                                    this.match(ClickHouseParser.IF);
                                    this.state = 715;
                                    this.match(ClickHouseParser.NOT);
                                    this.state = 716;
                                    this.match(ClickHouseParser.EXISTS);
                                }
                                break;
                        }
                        this.state = 719;
                        this.tableIdentifier();
                        this.state = 721;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 179) {
                            {
                                this.state = 720;
                                this.uuidClause();
                            }
                        }

                        this.state = 724;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 118) {
                            {
                                this.state = 723;
                                this.clusterClause();
                            }
                        }

                        this.state = 727;
                        this.errorHandler.sync(this);
                        switch (
                            this.interpreter.adaptivePredict(this.tokenStream, 79, this.context)
                        ) {
                            case 1:
                                {
                                    this.state = 726;
                                    this.tableSchemaClause();
                                }
                                break;
                        }
                        this.state = 729;
                        this.subqueryClause();
                    }
                    break;
            }
        } catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localContext;
    }
    public dictionarySchemaClause(): DictionarySchemaClauseContext {
        let localContext = new DictionarySchemaClauseContext(this.context, this.state);
        this.enterRule(localContext, 30, ClickHouseParser.RULE_dictionarySchemaClause);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 733;
                this.match(ClickHouseParser.LPAREN);
                this.state = 734;
                this.dictionaryAttrDfnt();
                this.state = 739;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 203) {
                    {
                        {
                            this.state = 735;
                            this.match(ClickHouseParser.COMMA);
                            this.state = 736;
                            this.dictionaryAttrDfnt();
                        }
                    }
                    this.state = 741;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 742;
                this.match(ClickHouseParser.RPAREN);
            }
        } catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localContext;
    }
    public dictionaryAttrDfnt(): DictionaryAttrDfntContext {
        let localContext = new DictionaryAttrDfntContext(this.context, this.state);
        this.enterRule(localContext, 32, ClickHouseParser.RULE_dictionaryAttrDfnt);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 744;
                this.identifier();
                this.state = 745;
                this.columnTypeExpr();
                this.state = 767;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 83, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                            this.state = 765;
                            this.errorHandler.sync(this);
                            switch (
                                this.interpreter.adaptivePredict(this.tokenStream, 82, this.context)
                            ) {
                                case 1:
                                    {
                                        this.state = 746;
                                        if (!!localContext.attrs.has('default')) {
                                            throw this.createFailedPredicateException(
                                                '!$attrs.has("default")',
                                            );
                                        }
                                        this.state = 747;
                                        this.match(ClickHouseParser.DEFAULT);
                                        this.state = 748;
                                        this.literal();
                                        localContext.attrs.add('default');
                                    }
                                    break;
                                case 2:
                                    {
                                        this.state = 751;
                                        if (!!localContext.attrs.has('expression')) {
                                            throw this.createFailedPredicateException(
                                                '!$attrs.has("expression")',
                                            );
                                        }
                                        this.state = 752;
                                        this.match(ClickHouseParser.EXPRESSION);
                                        this.state = 753;
                                        this.columnExpr(0);
                                        localContext.attrs.add('expression');
                                    }
                                    break;
                                case 3:
                                    {
                                        this.state = 756;
                                        if (!!localContext.attrs.has('hierarchical')) {
                                            throw this.createFailedPredicateException(
                                                '!$attrs.has("hierarchical")',
                                            );
                                        }
                                        this.state = 757;
                                        this.match(ClickHouseParser.HIERARCHICAL);
                                        localContext.attrs.add('hierarchical');
                                    }
                                    break;
                                case 4:
                                    {
                                        this.state = 759;
                                        if (!!localContext.attrs.has('injective')) {
                                            throw this.createFailedPredicateException(
                                                '!$attrs.has("injective")',
                                            );
                                        }
                                        this.state = 760;
                                        this.match(ClickHouseParser.INJECTIVE);
                                        localContext.attrs.add('injective');
                                    }
                                    break;
                                case 5:
                                    {
                                        this.state = 762;
                                        if (!!localContext.attrs.has('is_object_id')) {
                                            throw this.createFailedPredicateException(
                                                '!$attrs.has("is_object_id")',
                                            );
                                        }
                                        this.state = 763;
                                        this.match(ClickHouseParser.IS_OBJECT_ID);
                                        localContext.attrs.add('is_object_id');
                                    }
                                    break;
                            }
                        }
                    }
                    this.state = 769;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(
                        this.tokenStream,
                        83,
                        this.context,
                    );
                }
            }
        } catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localContext;
    }
    public dictionaryEngineClause(): DictionaryEngineClauseContext {
        let localContext = new DictionaryEngineClauseContext(this.context, this.state);
        this.enterRule(localContext, 34, ClickHouseParser.RULE_dictionaryEngineClause);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 771;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 84, this.context)) {
                    case 1:
                        {
                            this.state = 770;
                            this.dictionaryPrimaryKeyClause();
                        }
                        break;
                }
                this.state = 795;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 86, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                            this.state = 793;
                            this.errorHandler.sync(this);
                            switch (
                                this.interpreter.adaptivePredict(this.tokenStream, 85, this.context)
                            ) {
                                case 1:
                                    {
                                        this.state = 773;
                                        if (!!localContext.clauses.has('source')) {
                                            throw this.createFailedPredicateException(
                                                '!$clauses.has("source")',
                                            );
                                        }
                                        this.state = 774;
                                        this.sourceClause();
                                        localContext.clauses.add('source');
                                    }
                                    break;
                                case 2:
                                    {
                                        this.state = 777;
                                        if (!!localContext.clauses.has('lifetime')) {
                                            throw this.createFailedPredicateException(
                                                '!$clauses.has("lifetime")',
                                            );
                                        }
                                        this.state = 778;
                                        this.lifetimeClause();
                                        localContext.clauses.add('lifetime');
                                    }
                                    break;
                                case 3:
                                    {
                                        this.state = 781;
                                        if (!!localContext.clauses.has('layout')) {
                                            throw this.createFailedPredicateException(
                                                '!$clauses.has("layout")',
                                            );
                                        }
                                        this.state = 782;
                                        this.layoutClause();
                                        localContext.clauses.add('layout');
                                    }
                                    break;
                                case 4:
                                    {
                                        this.state = 785;
                                        if (!!localContext.clauses.has('range')) {
                                            throw this.createFailedPredicateException(
                                                '!$clauses.has("range")',
                                            );
                                        }
                                        this.state = 786;
                                        this.rangeClause();
                                        localContext.clauses.add('range');
                                    }
                                    break;
                                case 5:
                                    {
                                        this.state = 789;
                                        if (!!localContext.clauses.has('settings')) {
                                            throw this.createFailedPredicateException(
                                                '!$clauses.has("settings")',
                                            );
                                        }
                                        this.state = 790;
                                        this.dictionarySettingsClause();
                                        localContext.clauses.add('settings');
                                    }
                                    break;
                            }
                        }
                    }
                    this.state = 797;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(
                        this.tokenStream,
                        86,
                        this.context,
                    );
                }
            }
        } catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localContext;
    }
    public dictionaryPrimaryKeyClause(): DictionaryPrimaryKeyClauseContext {
        let localContext = new DictionaryPrimaryKeyClauseContext(this.context, this.state);
        this.enterRule(localContext, 36, ClickHouseParser.RULE_dictionaryPrimaryKeyClause);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 798;
                this.match(ClickHouseParser.PRIMARY);
                this.state = 799;
                this.match(ClickHouseParser.KEY);
                this.state = 800;
                this.columnExprList();
            }
        } catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localContext;
    }
    public dictionaryArgExpr(): DictionaryArgExprContext {
        let localContext = new DictionaryArgExprContext(this.context, this.state);
        this.enterRule(localContext, 38, ClickHouseParser.RULE_dictionaryArgExpr);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 802;
                this.identifier();
                this.state = 809;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                    case ClickHouseParser.AFTER:
                    case ClickHouseParser.ALIAS:
                    case ClickHouseParser.ALL:
                    case ClickHouseParser.ALTER:
                    case ClickHouseParser.AND:
                    case ClickHouseParser.ANTI:
                    case ClickHouseParser.ANY:
                    case ClickHouseParser.ARRAY:
                    case ClickHouseParser.AS:
                    case ClickHouseParser.ASCENDING:
                    case ClickHouseParser.ASOF:
                    case ClickHouseParser.AST:
                    case ClickHouseParser.ASYNC:
                    case ClickHouseParser.ATTACH:
                    case ClickHouseParser.BETWEEN:
                    case ClickHouseParser.BOTH:
                    case ClickHouseParser.BY:
                    case ClickHouseParser.CASE:
                    case ClickHouseParser.CAST:
                    case ClickHouseParser.CHECK:
                    case ClickHouseParser.CLEAR:
                    case ClickHouseParser.CLUSTER:
                    case ClickHouseParser.CODEC:
                    case ClickHouseParser.COLLATE:
                    case ClickHouseParser.COLUMN:
                    case ClickHouseParser.COMMENT:
                    case ClickHouseParser.CONSTRAINT:
                    case ClickHouseParser.CREATE:
                    case ClickHouseParser.CROSS:
                    case ClickHouseParser.CUBE:
                    case ClickHouseParser.CURRENT:
                    case ClickHouseParser.DATABASE:
                    case ClickHouseParser.DATABASES:
                    case ClickHouseParser.DATE:
                    case ClickHouseParser.DAY:
                    case ClickHouseParser.DEDUPLICATE:
                    case ClickHouseParser.DEFAULT:
                    case ClickHouseParser.DELAY:
                    case ClickHouseParser.DELETE:
                    case ClickHouseParser.DESC:
                    case ClickHouseParser.DESCENDING:
                    case ClickHouseParser.DESCRIBE:
                    case ClickHouseParser.DETACH:
                    case ClickHouseParser.DICTIONARIES:
                    case ClickHouseParser.DICTIONARY:
                    case ClickHouseParser.DISK:
                    case ClickHouseParser.DISTINCT:
                    case ClickHouseParser.DISTRIBUTED:
                    case ClickHouseParser.DROP:
                    case ClickHouseParser.ELSE:
                    case ClickHouseParser.END:
                    case ClickHouseParser.ENGINE:
                    case ClickHouseParser.EVENTS:
                    case ClickHouseParser.EXISTS:
                    case ClickHouseParser.EXPLAIN:
                    case ClickHouseParser.EXPRESSION:
                    case ClickHouseParser.EXTRACT:
                    case ClickHouseParser.FETCHES:
                    case ClickHouseParser.FINAL:
                    case ClickHouseParser.FIRST:
                    case ClickHouseParser.FLUSH:
                    case ClickHouseParser.FOLLOWING:
                    case ClickHouseParser.FOR:
                    case ClickHouseParser.FORMAT:
                    case ClickHouseParser.FREEZE:
                    case ClickHouseParser.FROM:
                    case ClickHouseParser.FULL:
                    case ClickHouseParser.FUNCTION:
                    case ClickHouseParser.GLOBAL:
                    case ClickHouseParser.GRANULARITY:
                    case ClickHouseParser.GROUP:
                    case ClickHouseParser.HAVING:
                    case ClickHouseParser.HIERARCHICAL:
                    case ClickHouseParser.HOUR:
                    case ClickHouseParser.ID:
                    case ClickHouseParser.IF:
                    case ClickHouseParser.ILIKE:
                    case ClickHouseParser.IN:
                    case ClickHouseParser.INDEX:
                    case ClickHouseParser.INJECTIVE:
                    case ClickHouseParser.INNER:
                    case ClickHouseParser.INSERT:
                    case ClickHouseParser.INTERVAL:
                    case ClickHouseParser.INTO:
                    case ClickHouseParser.IS:
                    case ClickHouseParser.IS_OBJECT_ID:
                    case ClickHouseParser.JOIN:
                    case ClickHouseParser.KEY:
                    case ClickHouseParser.KILL:
                    case ClickHouseParser.LAST:
                    case ClickHouseParser.LAYOUT:
                    case ClickHouseParser.LEADING:
                    case ClickHouseParser.LEFT:
                    case ClickHouseParser.LIFETIME:
                    case ClickHouseParser.LIKE:
                    case ClickHouseParser.LIMIT:
                    case ClickHouseParser.LIVE:
                    case ClickHouseParser.LOCAL:
                    case ClickHouseParser.LOGS:
                    case ClickHouseParser.MATERIALIZE:
                    case ClickHouseParser.MATERIALIZED:
                    case ClickHouseParser.MAX:
                    case ClickHouseParser.MERGES:
                    case ClickHouseParser.MIN:
                    case ClickHouseParser.MINUTE:
                    case ClickHouseParser.MODIFY:
                    case ClickHouseParser.MONTH:
                    case ClickHouseParser.MOVE:
                    case ClickHouseParser.MUTATION:
                    case ClickHouseParser.NO:
                    case ClickHouseParser.NOT:
                    case ClickHouseParser.NULLS:
                    case ClickHouseParser.OFFSET:
                    case ClickHouseParser.ON:
                    case ClickHouseParser.OPTIMIZE:
                    case ClickHouseParser.OR:
                    case ClickHouseParser.ORDER:
                    case ClickHouseParser.OUTER:
                    case ClickHouseParser.OUTFILE:
                    case ClickHouseParser.OVER:
                    case ClickHouseParser.PARTITION:
                    case ClickHouseParser.POPULATE:
                    case ClickHouseParser.PRECEDING:
                    case ClickHouseParser.PREWHERE:
                    case ClickHouseParser.PRIMARY:
                    case ClickHouseParser.QUARTER:
                    case ClickHouseParser.RANGE:
                    case ClickHouseParser.RELOAD:
                    case ClickHouseParser.REMOVE:
                    case ClickHouseParser.RENAME:
                    case ClickHouseParser.REPLACE:
                    case ClickHouseParser.REPLICA:
                    case ClickHouseParser.REPLICATED:
                    case ClickHouseParser.RIGHT:
                    case ClickHouseParser.ROLLUP:
                    case ClickHouseParser.ROW:
                    case ClickHouseParser.ROWS:
                    case ClickHouseParser.SAMPLE:
                    case ClickHouseParser.SECOND:
                    case ClickHouseParser.SELECT:
                    case ClickHouseParser.SEMI:
                    case ClickHouseParser.SENDS:
                    case ClickHouseParser.SET:
                    case ClickHouseParser.SETTINGS:
                    case ClickHouseParser.SHOW:
                    case ClickHouseParser.SOURCE:
                    case ClickHouseParser.START:
                    case ClickHouseParser.STOP:
                    case ClickHouseParser.SUBSTRING:
                    case ClickHouseParser.SYNC:
                    case ClickHouseParser.SYNTAX:
                    case ClickHouseParser.SYSTEM:
                    case ClickHouseParser.TABLE:
                    case ClickHouseParser.TABLES:
                    case ClickHouseParser.TEMPORARY:
                    case ClickHouseParser.TEST:
                    case ClickHouseParser.THEN:
                    case ClickHouseParser.TIES:
                    case ClickHouseParser.TIMEOUT:
                    case ClickHouseParser.TIMESTAMP:
                    case ClickHouseParser.TO:
                    case ClickHouseParser.TOP:
                    case ClickHouseParser.TOTALS:
                    case ClickHouseParser.TRAILING:
                    case ClickHouseParser.TRIM:
                    case ClickHouseParser.TRUNCATE:
                    case ClickHouseParser.TTL:
                    case ClickHouseParser.TYPE:
                    case ClickHouseParser.UNBOUNDED:
                    case ClickHouseParser.UNION:
                    case ClickHouseParser.UPDATE:
                    case ClickHouseParser.USE:
                    case ClickHouseParser.USING:
                    case ClickHouseParser.UUID:
                    case ClickHouseParser.VALUES:
                    case ClickHouseParser.VIEW:
                    case ClickHouseParser.VOLUME:
                    case ClickHouseParser.WATCH:
                    case ClickHouseParser.WEEK:
                    case ClickHouseParser.WHEN:
                    case ClickHouseParser.WHERE:
                    case ClickHouseParser.WINDOW:
                    case ClickHouseParser.WITH:
                    case ClickHouseParser.YEAR:
                    case ClickHouseParser.JSON_FALSE:
                    case ClickHouseParser.JSON_TRUE:
                    case ClickHouseParser.IDENTIFIER:
                        {
                            this.state = 803;
                            this.identifier();
                            this.state = 806;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                            if (_la === 214) {
                                {
                                    this.state = 804;
                                    this.match(ClickHouseParser.LPAREN);
                                    this.state = 805;
                                    this.match(ClickHouseParser.RPAREN);
                                }
                            }
                        }
                        break;
                    case ClickHouseParser.INF:
                    case ClickHouseParser.NAN_SQL:
                    case ClickHouseParser.NULL_SQL:
                    case ClickHouseParser.FLOATING_LITERAL:
                    case ClickHouseParser.OCTAL_LITERAL:
                    case ClickHouseParser.DECIMAL_LITERAL:
                    case ClickHouseParser.HEXADECIMAL_LITERAL:
                    case ClickHouseParser.STRING_LITERAL:
                    case ClickHouseParser.DASH:
                    case ClickHouseParser.DOT:
                    case ClickHouseParser.PLUS:
                        {
                            this.state = 808;
                            this.literal();
                        }
                        break;
                    default:
                        throw new antlr.NoViableAltException(this);
                }
            }
        } catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localContext;
    }
    public sourceClause(): SourceClauseContext {
        let localContext = new SourceClauseContext(this.context, this.state);
        this.enterRule(localContext, 40, ClickHouseParser.RULE_sourceClause);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 811;
                this.match(ClickHouseParser.SOURCE);
                this.state = 812;
                this.match(ClickHouseParser.LPAREN);
                this.state = 813;
                this.identifier();
                this.state = 814;
                this.match(ClickHouseParser.LPAREN);
                this.state = 818;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (
                    (((_la - 2) & ~0x1f) === 0 && ((1 << (_la - 2)) & 4294967295) !== 0) ||
                    (((_la - 34) & ~0x1f) === 0 && ((1 << (_la - 34)) & 4294967295) !== 0) ||
                    (((_la - 66) & ~0x1f) === 0 && ((1 << (_la - 66)) & 4294934527) !== 0) ||
                    (((_la - 98) & ~0x1f) === 0 && ((1 << (_la - 98)) & 4294819839) !== 0) ||
                    (((_la - 131) & ~0x1f) === 0 && ((1 << (_la - 131)) & 4294967295) !== 0) ||
                    (((_la - 163) & ~0x1f) === 0 && ((1 << (_la - 163)) & 1073741823) !== 0)
                ) {
                    {
                        {
                            this.state = 815;
                            this.dictionaryArgExpr();
                        }
                    }
                    this.state = 820;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 821;
                this.match(ClickHouseParser.RPAREN);
                this.state = 822;
                this.match(ClickHouseParser.RPAREN);
            }
        } catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localContext;
    }
    public lifetimeClause(): LifetimeClauseContext {
        let localContext = new LifetimeClauseContext(this.context, this.state);
        this.enterRule(localContext, 42, ClickHouseParser.RULE_lifetimeClause);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 824;
                this.match(ClickHouseParser.LIFETIME);
                this.state = 825;
                this.match(ClickHouseParser.LPAREN);
                this.state = 835;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                    case ClickHouseParser.DECIMAL_LITERAL:
                        {
                            this.state = 826;
                            this.match(ClickHouseParser.DECIMAL_LITERAL);
                        }
                        break;
                    case ClickHouseParser.MIN:
                        {
                            this.state = 827;
                            this.match(ClickHouseParser.MIN);
                            this.state = 828;
                            this.match(ClickHouseParser.DECIMAL_LITERAL);
                            this.state = 829;
                            this.match(ClickHouseParser.MAX);
                            this.state = 830;
                            this.match(ClickHouseParser.DECIMAL_LITERAL);
                        }
                        break;
                    case ClickHouseParser.MAX:
                        {
                            this.state = 831;
                            this.match(ClickHouseParser.MAX);
                            this.state = 832;
                            this.match(ClickHouseParser.DECIMAL_LITERAL);
                            this.state = 833;
                            this.match(ClickHouseParser.MIN);
                            this.state = 834;
                            this.match(ClickHouseParser.DECIMAL_LITERAL);
                        }
                        break;
                    default:
                        throw new antlr.NoViableAltException(this);
                }
                this.state = 837;
                this.match(ClickHouseParser.RPAREN);
            }
        } catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localContext;
    }
    public layoutClause(): LayoutClauseContext {
        let localContext = new LayoutClauseContext(this.context, this.state);
        this.enterRule(localContext, 44, ClickHouseParser.RULE_layoutClause);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 839;
                this.match(ClickHouseParser.LAYOUT);
                this.state = 840;
                this.match(ClickHouseParser.LPAREN);
                this.state = 841;
                this.identifier();
                this.state = 842;
                this.match(ClickHouseParser.LPAREN);
                this.state = 846;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (
                    (((_la - 2) & ~0x1f) === 0 && ((1 << (_la - 2)) & 4294967295) !== 0) ||
                    (((_la - 34) & ~0x1f) === 0 && ((1 << (_la - 34)) & 4294967295) !== 0) ||
                    (((_la - 66) & ~0x1f) === 0 && ((1 << (_la - 66)) & 4294934527) !== 0) ||
                    (((_la - 98) & ~0x1f) === 0 && ((1 << (_la - 98)) & 4294819839) !== 0) ||
                    (((_la - 131) & ~0x1f) === 0 && ((1 << (_la - 131)) & 4294967295) !== 0) ||
                    (((_la - 163) & ~0x1f) === 0 && ((1 << (_la - 163)) & 1073741823) !== 0)
                ) {
                    {
                        {
                            this.state = 843;
                            this.dictionaryArgExpr();
                        }
                    }
                    this.state = 848;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 849;
                this.match(ClickHouseParser.RPAREN);
                this.state = 850;
                this.match(ClickHouseParser.RPAREN);
            }
        } catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localContext;
    }
    public rangeClause(): RangeClauseContext {
        let localContext = new RangeClauseContext(this.context, this.state);
        this.enterRule(localContext, 46, ClickHouseParser.RULE_rangeClause);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 852;
                this.match(ClickHouseParser.RANGE);
                this.state = 853;
                this.match(ClickHouseParser.LPAREN);
                this.state = 864;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                    case ClickHouseParser.MIN:
                        {
                            this.state = 854;
                            this.match(ClickHouseParser.MIN);
                            this.state = 855;
                            this.identifier();
                            this.state = 856;
                            this.match(ClickHouseParser.MAX);
                            this.state = 857;
                            this.identifier();
                        }
                        break;
                    case ClickHouseParser.MAX:
                        {
                            this.state = 859;
                            this.match(ClickHouseParser.MAX);
                            this.state = 860;
                            this.identifier();
                            this.state = 861;
                            this.match(ClickHouseParser.MIN);
                            this.state = 862;
                            this.identifier();
                        }
                        break;
                    default:
                        throw new antlr.NoViableAltException(this);
                }
                this.state = 866;
                this.match(ClickHouseParser.RPAREN);
            }
        } catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localContext;
    }
    public dictionarySettingsClause(): DictionarySettingsClauseContext {
        let localContext = new DictionarySettingsClauseContext(this.context, this.state);
        this.enterRule(localContext, 48, ClickHouseParser.RULE_dictionarySettingsClause);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 868;
                this.match(ClickHouseParser.SETTINGS);
                this.state = 869;
                this.match(ClickHouseParser.LPAREN);
                this.state = 870;
                this.settingExprList();
                this.state = 871;
                this.match(ClickHouseParser.RPAREN);
            }
        } catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localContext;
    }
    public clusterClause(): ClusterClauseContext {
        let localContext = new ClusterClauseContext(this.context, this.state);
        this.enterRule(localContext, 50, ClickHouseParser.RULE_clusterClause);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 873;
                this.match(ClickHouseParser.ON);
                this.state = 874;
                this.match(ClickHouseParser.CLUSTER);
                this.state = 877;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                    case ClickHouseParser.AFTER:
                    case ClickHouseParser.ALIAS:
                    case ClickHouseParser.ALL:
                    case ClickHouseParser.ALTER:
                    case ClickHouseParser.AND:
                    case ClickHouseParser.ANTI:
                    case ClickHouseParser.ANY:
                    case ClickHouseParser.ARRAY:
                    case ClickHouseParser.AS:
                    case ClickHouseParser.ASCENDING:
                    case ClickHouseParser.ASOF:
                    case ClickHouseParser.AST:
                    case ClickHouseParser.ASYNC:
                    case ClickHouseParser.ATTACH:
                    case ClickHouseParser.BETWEEN:
                    case ClickHouseParser.BOTH:
                    case ClickHouseParser.BY:
                    case ClickHouseParser.CASE:
                    case ClickHouseParser.CAST:
                    case ClickHouseParser.CHECK:
                    case ClickHouseParser.CLEAR:
                    case ClickHouseParser.CLUSTER:
                    case ClickHouseParser.CODEC:
                    case ClickHouseParser.COLLATE:
                    case ClickHouseParser.COLUMN:
                    case ClickHouseParser.COMMENT:
                    case ClickHouseParser.CONSTRAINT:
                    case ClickHouseParser.CREATE:
                    case ClickHouseParser.CROSS:
                    case ClickHouseParser.CUBE:
                    case ClickHouseParser.CURRENT:
                    case ClickHouseParser.DATABASE:
                    case ClickHouseParser.DATABASES:
                    case ClickHouseParser.DATE:
                    case ClickHouseParser.DAY:
                    case ClickHouseParser.DEDUPLICATE:
                    case ClickHouseParser.DEFAULT:
                    case ClickHouseParser.DELAY:
                    case ClickHouseParser.DELETE:
                    case ClickHouseParser.DESC:
                    case ClickHouseParser.DESCENDING:
                    case ClickHouseParser.DESCRIBE:
                    case ClickHouseParser.DETACH:
                    case ClickHouseParser.DICTIONARIES:
                    case ClickHouseParser.DICTIONARY:
                    case ClickHouseParser.DISK:
                    case ClickHouseParser.DISTINCT:
                    case ClickHouseParser.DISTRIBUTED:
                    case ClickHouseParser.DROP:
                    case ClickHouseParser.ELSE:
                    case ClickHouseParser.END:
                    case ClickHouseParser.ENGINE:
                    case ClickHouseParser.EVENTS:
                    case ClickHouseParser.EXISTS:
                    case ClickHouseParser.EXPLAIN:
                    case ClickHouseParser.EXPRESSION:
                    case ClickHouseParser.EXTRACT:
                    case ClickHouseParser.FETCHES:
                    case ClickHouseParser.FINAL:
                    case ClickHouseParser.FIRST:
                    case ClickHouseParser.FLUSH:
                    case ClickHouseParser.FOLLOWING:
                    case ClickHouseParser.FOR:
                    case ClickHouseParser.FORMAT:
                    case ClickHouseParser.FREEZE:
                    case ClickHouseParser.FROM:
                    case ClickHouseParser.FULL:
                    case ClickHouseParser.FUNCTION:
                    case ClickHouseParser.GLOBAL:
                    case ClickHouseParser.GRANULARITY:
                    case ClickHouseParser.GROUP:
                    case ClickHouseParser.HAVING:
                    case ClickHouseParser.HIERARCHICAL:
                    case ClickHouseParser.HOUR:
                    case ClickHouseParser.ID:
                    case ClickHouseParser.IF:
                    case ClickHouseParser.ILIKE:
                    case ClickHouseParser.IN:
                    case ClickHouseParser.INDEX:
                    case ClickHouseParser.INJECTIVE:
                    case ClickHouseParser.INNER:
                    case ClickHouseParser.INSERT:
                    case ClickHouseParser.INTERVAL:
                    case ClickHouseParser.INTO:
                    case ClickHouseParser.IS:
                    case ClickHouseParser.IS_OBJECT_ID:
                    case ClickHouseParser.JOIN:
                    case ClickHouseParser.KEY:
                    case ClickHouseParser.KILL:
                    case ClickHouseParser.LAST:
                    case ClickHouseParser.LAYOUT:
                    case ClickHouseParser.LEADING:
                    case ClickHouseParser.LEFT:
                    case ClickHouseParser.LIFETIME:
                    case ClickHouseParser.LIKE:
                    case ClickHouseParser.LIMIT:
                    case ClickHouseParser.LIVE:
                    case ClickHouseParser.LOCAL:
                    case ClickHouseParser.LOGS:
                    case ClickHouseParser.MATERIALIZE:
                    case ClickHouseParser.MATERIALIZED:
                    case ClickHouseParser.MAX:
                    case ClickHouseParser.MERGES:
                    case ClickHouseParser.MIN:
                    case ClickHouseParser.MINUTE:
                    case ClickHouseParser.MODIFY:
                    case ClickHouseParser.MONTH:
                    case ClickHouseParser.MOVE:
                    case ClickHouseParser.MUTATION:
                    case ClickHouseParser.NO:
                    case ClickHouseParser.NOT:
                    case ClickHouseParser.NULLS:
                    case ClickHouseParser.OFFSET:
                    case ClickHouseParser.ON:
                    case ClickHouseParser.OPTIMIZE:
                    case ClickHouseParser.OR:
                    case ClickHouseParser.ORDER:
                    case ClickHouseParser.OUTER:
                    case ClickHouseParser.OUTFILE:
                    case ClickHouseParser.OVER:
                    case ClickHouseParser.PARTITION:
                    case ClickHouseParser.POPULATE:
                    case ClickHouseParser.PRECEDING:
                    case ClickHouseParser.PREWHERE:
                    case ClickHouseParser.PRIMARY:
                    case ClickHouseParser.QUARTER:
                    case ClickHouseParser.RANGE:
                    case ClickHouseParser.RELOAD:
                    case ClickHouseParser.REMOVE:
                    case ClickHouseParser.RENAME:
                    case ClickHouseParser.REPLACE:
                    case ClickHouseParser.REPLICA:
                    case ClickHouseParser.REPLICATED:
                    case ClickHouseParser.RIGHT:
                    case ClickHouseParser.ROLLUP:
                    case ClickHouseParser.ROW:
                    case ClickHouseParser.ROWS:
                    case ClickHouseParser.SAMPLE:
                    case ClickHouseParser.SECOND:
                    case ClickHouseParser.SELECT:
                    case ClickHouseParser.SEMI:
                    case ClickHouseParser.SENDS:
                    case ClickHouseParser.SET:
                    case ClickHouseParser.SETTINGS:
                    case ClickHouseParser.SHOW:
                    case ClickHouseParser.SOURCE:
                    case ClickHouseParser.START:
                    case ClickHouseParser.STOP:
                    case ClickHouseParser.SUBSTRING:
                    case ClickHouseParser.SYNC:
                    case ClickHouseParser.SYNTAX:
                    case ClickHouseParser.SYSTEM:
                    case ClickHouseParser.TABLE:
                    case ClickHouseParser.TABLES:
                    case ClickHouseParser.TEMPORARY:
                    case ClickHouseParser.TEST:
                    case ClickHouseParser.THEN:
                    case ClickHouseParser.TIES:
                    case ClickHouseParser.TIMEOUT:
                    case ClickHouseParser.TIMESTAMP:
                    case ClickHouseParser.TO:
                    case ClickHouseParser.TOP:
                    case ClickHouseParser.TOTALS:
                    case ClickHouseParser.TRAILING:
                    case ClickHouseParser.TRIM:
                    case ClickHouseParser.TRUNCATE:
                    case ClickHouseParser.TTL:
                    case ClickHouseParser.TYPE:
                    case ClickHouseParser.UNBOUNDED:
                    case ClickHouseParser.UNION:
                    case ClickHouseParser.UPDATE:
                    case ClickHouseParser.USE:
                    case ClickHouseParser.USING:
                    case ClickHouseParser.UUID:
                    case ClickHouseParser.VALUES:
                    case ClickHouseParser.VIEW:
                    case ClickHouseParser.VOLUME:
                    case ClickHouseParser.WATCH:
                    case ClickHouseParser.WEEK:
                    case ClickHouseParser.WHEN:
                    case ClickHouseParser.WHERE:
                    case ClickHouseParser.WINDOW:
                    case ClickHouseParser.WITH:
                    case ClickHouseParser.YEAR:
                    case ClickHouseParser.JSON_FALSE:
                    case ClickHouseParser.JSON_TRUE:
                    case ClickHouseParser.IDENTIFIER:
                        {
                            this.state = 875;
                            this.identifier();
                        }
                        break;
                    case ClickHouseParser.STRING_LITERAL:
                        {
                            this.state = 876;
                            this.match(ClickHouseParser.STRING_LITERAL);
                        }
                        break;
                    default:
                        throw new antlr.NoViableAltException(this);
                }
            }
        } catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localContext;
    }
    public uuidClause(): UuidClauseContext {
        let localContext = new UuidClauseContext(this.context, this.state);
        this.enterRule(localContext, 52, ClickHouseParser.RULE_uuidClause);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 879;
                this.match(ClickHouseParser.UUID);
                this.state = 880;
                this.match(ClickHouseParser.STRING_LITERAL);
            }
        } catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localContext;
    }
    public destinationClause(): DestinationClauseContext {
        let localContext = new DestinationClauseContext(this.context, this.state);
        this.enterRule(localContext, 54, ClickHouseParser.RULE_destinationClause);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 882;
                this.match(ClickHouseParser.TO);
                this.state = 883;
                this.tableIdentifier();
            }
        } catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localContext;
    }
    public subqueryClause(): SubqueryClauseContext {
        let localContext = new SubqueryClauseContext(this.context, this.state);
        this.enterRule(localContext, 56, ClickHouseParser.RULE_subqueryClause);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 885;
                this.match(ClickHouseParser.AS);
                this.state = 886;
                this.selectUnionStmt();
            }
        } catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localContext;
    }
    public tableSchemaClause(): TableSchemaClauseContext {
        let localContext = new TableSchemaClauseContext(this.context, this.state);
        this.enterRule(localContext, 58, ClickHouseParser.RULE_tableSchemaClause);
        let _la: number;
        try {
            this.state = 903;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 95, this.context)) {
                case 1:
                    localContext = new SchemaDescriptionClauseContext(localContext);
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 888;
                        this.match(ClickHouseParser.LPAREN);
                        this.state = 889;
                        this.tableElementExpr();
                        this.state = 894;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        while (_la === 203) {
                            {
                                {
                                    this.state = 890;
                                    this.match(ClickHouseParser.COMMA);
                                    this.state = 891;
                                    this.tableElementExpr();
                                }
                            }
                            this.state = 896;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                        }
                        this.state = 897;
                        this.match(ClickHouseParser.RPAREN);
                    }
                    break;
                case 2:
                    localContext = new SchemaAsTableClauseContext(localContext);
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 899;
                        this.match(ClickHouseParser.AS);
                        this.state = 900;
                        this.tableIdentifier();
                    }
                    break;
                case 3:
                    localContext = new SchemaAsFunctionClauseContext(localContext);
                    this.enterOuterAlt(localContext, 3);
                    {
                        this.state = 901;
                        this.match(ClickHouseParser.AS);
                        this.state = 902;
                        this.tableFunctionExpr();
                    }
                    break;
            }
        } catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localContext;
    }
    public engineClause(): EngineClauseContext {
        let localContext = new EngineClauseContext(this.context, this.state);
        this.enterRule(localContext, 60, ClickHouseParser.RULE_engineClause);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 905;
                this.engineExpr();
                this.state = 932;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 97, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                            this.state = 930;
                            this.errorHandler.sync(this);
                            switch (
                                this.interpreter.adaptivePredict(this.tokenStream, 96, this.context)
                            ) {
                                case 1:
                                    {
                                        this.state = 906;
                                        if (!!localContext.clauses.has('orderByClause')) {
                                            throw this.createFailedPredicateException(
                                                '!$clauses.has("orderByClause")',
                                            );
                                        }
                                        this.state = 907;
                                        this.orderByClause();
                                        localContext.clauses.add('orderByClause');
                                    }
                                    break;
                                case 2:
                                    {
                                        this.state = 910;
                                        if (!!localContext.clauses.has('partitionByClause')) {
                                            throw this.createFailedPredicateException(
                                                '!$clauses.has("partitionByClause")',
                                            );
                                        }
                                        this.state = 911;
                                        this.partitionByClause();
                                        localContext.clauses.add('partitionByClause');
                                    }
                                    break;
                                case 3:
                                    {
                                        this.state = 914;
                                        if (!!localContext.clauses.has('primaryKeyClause')) {
                                            throw this.createFailedPredicateException(
                                                '!$clauses.has("primaryKeyClause")',
                                            );
                                        }
                                        this.state = 915;
                                        this.primaryKeyClause();
                                        localContext.clauses.add('primaryKeyClause');
                                    }
                                    break;
                                case 4:
                                    {
                                        this.state = 918;
                                        if (!!localContext.clauses.has('sampleByClause')) {
                                            throw this.createFailedPredicateException(
                                                '!$clauses.has("sampleByClause")',
                                            );
                                        }
                                        this.state = 919;
                                        this.sampleByClause();
                                        localContext.clauses.add('sampleByClause');
                                    }
                                    break;
                                case 5:
                                    {
                                        this.state = 922;
                                        if (!!localContext.clauses.has('ttlClause')) {
                                            throw this.createFailedPredicateException(
                                                '!$clauses.has("ttlClause")',
                                            );
                                        }
                                        this.state = 923;
                                        this.ttlClause();
                                        localContext.clauses.add('ttlClause');
                                    }
                                    break;
                                case 6:
                                    {
                                        this.state = 926;
                                        if (!!localContext.clauses.has('settingsClause')) {
                                            throw this.createFailedPredicateException(
                                                '!$clauses.has("settingsClause")',
                                            );
                                        }
                                        this.state = 927;
                                        this.settingsClause();
                                        localContext.clauses.add('settingsClause');
                                    }
                                    break;
                            }
                        }
                    }
                    this.state = 934;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(
                        this.tokenStream,
                        97,
                        this.context,
                    );
                }
            }
        } catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localContext;
    }
    public partitionByClause(): PartitionByClauseContext {
        let localContext = new PartitionByClauseContext(this.context, this.state);
        this.enterRule(localContext, 62, ClickHouseParser.RULE_partitionByClause);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 935;
                this.match(ClickHouseParser.PARTITION);
                this.state = 936;
                this.match(ClickHouseParser.BY);
                this.state = 937;
                this.columnExpr(0);
            }
        } catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localContext;
    }
    public primaryKeyClause(): PrimaryKeyClauseContext {
        let localContext = new PrimaryKeyClauseContext(this.context, this.state);
        this.enterRule(localContext, 64, ClickHouseParser.RULE_primaryKeyClause);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 939;
                this.match(ClickHouseParser.PRIMARY);
                this.state = 940;
                this.match(ClickHouseParser.KEY);
                this.state = 941;
                this.columnExpr(0);
            }
        } catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localContext;
    }
    public sampleByClause(): SampleByClauseContext {
        let localContext = new SampleByClauseContext(this.context, this.state);
        this.enterRule(localContext, 66, ClickHouseParser.RULE_sampleByClause);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 943;
                this.match(ClickHouseParser.SAMPLE);
                this.state = 944;
                this.match(ClickHouseParser.BY);
                this.state = 945;
                this.columnExpr(0);
            }
        } catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localContext;
    }
    public ttlClause(): TtlClauseContext {
        let localContext = new TtlClauseContext(this.context, this.state);
        this.enterRule(localContext, 68, ClickHouseParser.RULE_ttlClause);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 947;
                this.match(ClickHouseParser.TTL);
                this.state = 948;
                this.ttlExpr();
                this.state = 953;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 98, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                            {
                                this.state = 949;
                                this.match(ClickHouseParser.COMMA);
                                this.state = 950;
                                this.ttlExpr();
                            }
                        }
                    }
                    this.state = 955;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(
                        this.tokenStream,
                        98,
                        this.context,
                    );
                }
            }
        } catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localContext;
    }
    public engineExpr(): EngineExprContext {
        let localContext = new EngineExprContext(this.context, this.state);
        this.enterRule(localContext, 70, ClickHouseParser.RULE_engineExpr);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 956;
                this.match(ClickHouseParser.ENGINE);
                this.state = 958;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 208) {
                    {
                        this.state = 957;
                        this.match(ClickHouseParser.EQ_SINGLE);
                    }
                }

                this.state = 960;
                this.identifierOrNull();
                this.state = 966;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 101, this.context)) {
                    case 1:
                        {
                            this.state = 961;
                            this.match(ClickHouseParser.LPAREN);
                            this.state = 963;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                            if (
                                ((_la & ~0x1f) === 0 && ((1 << _la) & 4294967292) !== 0) ||
                                (((_la - 32) & ~0x1f) === 0 &&
                                    ((1 << (_la - 32)) & 4294967295) !== 0) ||
                                (((_la - 64) & ~0x1f) === 0 &&
                                    ((1 << (_la - 64)) & 4294967295) !== 0) ||
                                (((_la - 96) & ~0x1f) === 0 &&
                                    ((1 << (_la - 96)) & 4294967295) !== 0) ||
                                (((_la - 128) & ~0x1f) === 0 &&
                                    ((1 << (_la - 128)) & 4294967291) !== 0) ||
                                (((_la - 160) & ~0x1f) === 0 &&
                                    ((1 << (_la - 160)) & 4294967295) !== 0) ||
                                (((_la - 192) & ~0x1f) === 0 &&
                                    ((1 << (_la - 192)) & 72376511) !== 0)
                            ) {
                                {
                                    this.state = 962;
                                    this.columnExprList();
                                }
                            }

                            this.state = 965;
                            this.match(ClickHouseParser.RPAREN);
                        }
                        break;
                }
            }
        } catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localContext;
    }
    public tableElementExpr(): TableElementExprContext {
        let localContext = new TableElementExprContext(this.context, this.state);
        this.enterRule(localContext, 72, ClickHouseParser.RULE_tableElementExpr);
        try {
            this.state = 978;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 102, this.context)) {
                case 1:
                    localContext = new TableElementExprColumnContext(localContext);
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 968;
                        this.tableColumnDfnt();
                    }
                    break;
                case 2:
                    localContext = new TableElementExprConstraintContext(localContext);
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 969;
                        this.match(ClickHouseParser.CONSTRAINT);
                        this.state = 970;
                        this.identifier();
                        this.state = 971;
                        this.match(ClickHouseParser.CHECK);
                        this.state = 972;
                        this.columnExpr(0);
                    }
                    break;
                case 3:
                    localContext = new TableElementExprIndexContext(localContext);
                    this.enterOuterAlt(localContext, 3);
                    {
                        this.state = 974;
                        this.match(ClickHouseParser.INDEX);
                        this.state = 975;
                        this.tableIndexDfnt();
                    }
                    break;
                case 4:
                    localContext = new TableElementExprProjectionContext(localContext);
                    this.enterOuterAlt(localContext, 4);
                    {
                        this.state = 976;
                        this.match(ClickHouseParser.PROJECTION);
                        this.state = 977;
                        this.tableProjectionDfnt();
                    }
                    break;
            }
        } catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localContext;
    }
    public tableColumnDfnt(): TableColumnDfntContext {
        let localContext = new TableColumnDfntContext(this.context, this.state);
        this.enterRule(localContext, 74, ClickHouseParser.RULE_tableColumnDfnt);
        let _la: number;
        try {
            this.state = 1012;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 111, this.context)) {
                case 1:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 980;
                        this.nestedIdentifier();
                        this.state = 981;
                        this.columnTypeExpr();
                        this.state = 983;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 3 || _la === 38 || _la === 103) {
                            {
                                this.state = 982;
                                this.tableColumnPropertyExpr();
                            }
                        }

                        this.state = 987;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 27) {
                            {
                                this.state = 985;
                                this.match(ClickHouseParser.COMMENT);
                                this.state = 986;
                                this.match(ClickHouseParser.STRING_LITERAL);
                            }
                        }

                        this.state = 990;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 24) {
                            {
                                this.state = 989;
                                this.codecExpr();
                            }
                        }

                        this.state = 994;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 172) {
                            {
                                this.state = 992;
                                this.match(ClickHouseParser.TTL);
                                this.state = 993;
                                this.columnExpr(0);
                            }
                        }
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 996;
                        this.nestedIdentifier();
                        this.state = 998;
                        this.errorHandler.sync(this);
                        switch (
                            this.interpreter.adaptivePredict(this.tokenStream, 107, this.context)
                        ) {
                            case 1:
                                {
                                    this.state = 997;
                                    this.columnTypeExpr();
                                }
                                break;
                        }
                        this.state = 1000;
                        this.tableColumnPropertyExpr();
                        this.state = 1003;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 27) {
                            {
                                this.state = 1001;
                                this.match(ClickHouseParser.COMMENT);
                                this.state = 1002;
                                this.match(ClickHouseParser.STRING_LITERAL);
                            }
                        }

                        this.state = 1006;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 24) {
                            {
                                this.state = 1005;
                                this.codecExpr();
                            }
                        }

                        this.state = 1010;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 172) {
                            {
                                this.state = 1008;
                                this.match(ClickHouseParser.TTL);
                                this.state = 1009;
                                this.columnExpr(0);
                            }
                        }
                    }
                    break;
            }
        } catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localContext;
    }
    public tableColumnPropertyExpr(): TableColumnPropertyExprContext {
        let localContext = new TableColumnPropertyExprContext(this.context, this.state);
        this.enterRule(localContext, 76, ClickHouseParser.RULE_tableColumnPropertyExpr);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1014;
                _la = this.tokenStream.LA(1);
                if (!(_la === 3 || _la === 38 || _la === 103)) {
                    this.errorHandler.recoverInline(this);
                } else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 1015;
                this.columnExpr(0);
            }
        } catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localContext;
    }
    public tableIndexDfnt(): TableIndexDfntContext {
        let localContext = new TableIndexDfntContext(this.context, this.state);
        this.enterRule(localContext, 78, ClickHouseParser.RULE_tableIndexDfnt);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1017;
                this.nestedIdentifier();
                this.state = 1018;
                this.columnExpr(0);
                this.state = 1019;
                this.match(ClickHouseParser.TYPE);
                this.state = 1020;
                this.columnTypeExpr();
                this.state = 1021;
                this.match(ClickHouseParser.GRANULARITY);
                this.state = 1022;
                this.match(ClickHouseParser.DECIMAL_LITERAL);
            }
        } catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localContext;
    }
    public tableProjectionDfnt(): TableProjectionDfntContext {
        let localContext = new TableProjectionDfntContext(this.context, this.state);
        this.enterRule(localContext, 80, ClickHouseParser.RULE_tableProjectionDfnt);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1024;
                this.nestedIdentifier();
                this.state = 1025;
                this.projectionSelectStmt();
            }
        } catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localContext;
    }
    public codecExpr(): CodecExprContext {
        let localContext = new CodecExprContext(this.context, this.state);
        this.enterRule(localContext, 82, ClickHouseParser.RULE_codecExpr);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1027;
                this.match(ClickHouseParser.CODEC);
                this.state = 1028;
                this.match(ClickHouseParser.LPAREN);
                this.state = 1029;
                this.codecArgExpr();
                this.state = 1034;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 203) {
                    {
                        {
                            this.state = 1030;
                            this.match(ClickHouseParser.COMMA);
                            this.state = 1031;
                            this.codecArgExpr();
                        }
                    }
                    this.state = 1036;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 1037;
                this.match(ClickHouseParser.RPAREN);
            }
        } catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localContext;
    }
    public codecArgExpr(): CodecArgExprContext {
        let localContext = new CodecArgExprContext(this.context, this.state);
        this.enterRule(localContext, 84, ClickHouseParser.RULE_codecArgExpr);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1039;
                this.identifier();
                this.state = 1045;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 214) {
                    {
                        this.state = 1040;
                        this.match(ClickHouseParser.LPAREN);
                        this.state = 1042;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (
                            ((_la & ~0x1f) === 0 && ((1 << _la) & 4294967292) !== 0) ||
                            (((_la - 32) & ~0x1f) === 0 &&
                                ((1 << (_la - 32)) & 4294967295) !== 0) ||
                            (((_la - 64) & ~0x1f) === 0 &&
                                ((1 << (_la - 64)) & 4294967295) !== 0) ||
                            (((_la - 96) & ~0x1f) === 0 &&
                                ((1 << (_la - 96)) & 4294967295) !== 0) ||
                            (((_la - 128) & ~0x1f) === 0 &&
                                ((1 << (_la - 128)) & 4294967291) !== 0) ||
                            (((_la - 160) & ~0x1f) === 0 &&
                                ((1 << (_la - 160)) & 4294967295) !== 0) ||
                            (((_la - 192) & ~0x1f) === 0 && ((1 << (_la - 192)) & 72376511) !== 0)
                        ) {
                            {
                                this.state = 1041;
                                this.columnExprList();
                            }
                        }

                        this.state = 1044;
                        this.match(ClickHouseParser.RPAREN);
                    }
                }
            }
        } catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localContext;
    }
    public ttlExpr(): TtlExprContext {
        let localContext = new TtlExprContext(this.context, this.state);
        this.enterRule(localContext, 86, ClickHouseParser.RULE_ttlExpr);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1047;
                this.columnExpr(0);
                this.state = 1055;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 115, this.context)) {
                    case 1:
                        {
                            this.state = 1048;
                            this.match(ClickHouseParser.DELETE);
                        }
                        break;
                    case 2:
                        {
                            this.state = 1049;
                            this.match(ClickHouseParser.TO);
                            this.state = 1050;
                            this.match(ClickHouseParser.DISK);
                            this.state = 1051;
                            this.match(ClickHouseParser.STRING_LITERAL);
                        }
                        break;
                    case 3:
                        {
                            this.state = 1052;
                            this.match(ClickHouseParser.TO);
                            this.state = 1053;
                            this.match(ClickHouseParser.VOLUME);
                            this.state = 1054;
                            this.match(ClickHouseParser.STRING_LITERAL);
                        }
                        break;
                }
            }
        } catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localContext;
    }
    public describeStmt(): DescribeStmtContext {
        let localContext = new DescribeStmtContext(this.context, this.state);
        this.enterRule(localContext, 88, ClickHouseParser.RULE_describeStmt);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1057;
                _la = this.tokenStream.LA(1);
                if (!(_la === 41 || _la === 43)) {
                    this.errorHandler.recoverInline(this);
                } else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 1059;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 116, this.context)) {
                    case 1:
                        {
                            this.state = 1058;
                            this.match(ClickHouseParser.TABLE);
                        }
                        break;
                }
                this.state = 1061;
                this.tableExpr(0);
            }
        } catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localContext;
    }
    public dropStmt(): DropStmtContext {
        let localContext = new DropStmtContext(this.context, this.state);
        this.enterRule(localContext, 90, ClickHouseParser.RULE_dropStmt);
        let _la: number;
        try {
            this.state = 1094;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 124, this.context)) {
                case 1:
                    localContext = new DropDatabaseStmtContext(localContext);
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 1063;
                        _la = this.tokenStream.LA(1);
                        if (!(_la === 44 || _la === 50)) {
                            this.errorHandler.recoverInline(this);
                        } else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 1064;
                        this.match(ClickHouseParser.DATABASE);
                        this.state = 1067;
                        this.errorHandler.sync(this);
                        switch (
                            this.interpreter.adaptivePredict(this.tokenStream, 117, this.context)
                        ) {
                            case 1:
                                {
                                    this.state = 1065;
                                    this.match(ClickHouseParser.IF);
                                    this.state = 1066;
                                    this.match(ClickHouseParser.EXISTS);
                                }
                                break;
                        }
                        this.state = 1069;
                        this.databaseIdentifier();
                        this.state = 1071;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 118) {
                            {
                                this.state = 1070;
                                this.clusterClause();
                            }
                        }
                    }
                    break;
                case 2:
                    localContext = new DropTableStmtContext(localContext);
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 1073;
                        _la = this.tokenStream.LA(1);
                        if (!(_la === 44 || _la === 50)) {
                            this.errorHandler.recoverInline(this);
                        } else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 1080;
                        this.errorHandler.sync(this);
                        switch (this.tokenStream.LA(1)) {
                            case ClickHouseParser.DICTIONARY:
                                {
                                    this.state = 1074;
                                    this.match(ClickHouseParser.DICTIONARY);
                                }
                                break;
                            case ClickHouseParser.TABLE:
                            case ClickHouseParser.TEMPORARY:
                                {
                                    this.state = 1076;
                                    this.errorHandler.sync(this);
                                    _la = this.tokenStream.LA(1);
                                    if (_la === 160) {
                                        {
                                            this.state = 1075;
                                            this.match(ClickHouseParser.TEMPORARY);
                                        }
                                    }

                                    this.state = 1078;
                                    this.match(ClickHouseParser.TABLE);
                                }
                                break;
                            case ClickHouseParser.VIEW:
                                {
                                    this.state = 1079;
                                    this.match(ClickHouseParser.VIEW);
                                }
                                break;
                            default:
                                throw new antlr.NoViableAltException(this);
                        }
                        this.state = 1084;
                        this.errorHandler.sync(this);
                        switch (
                            this.interpreter.adaptivePredict(this.tokenStream, 121, this.context)
                        ) {
                            case 1:
                                {
                                    this.state = 1082;
                                    this.match(ClickHouseParser.IF);
                                    this.state = 1083;
                                    this.match(ClickHouseParser.EXISTS);
                                }
                                break;
                        }
                        this.state = 1086;
                        this.tableIdentifier();
                        this.state = 1088;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 118) {
                            {
                                this.state = 1087;
                                this.clusterClause();
                            }
                        }

                        this.state = 1092;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 113) {
                            {
                                this.state = 1090;
                                this.match(ClickHouseParser.NO);
                                this.state = 1091;
                                this.match(ClickHouseParser.DELAY);
                            }
                        }
                    }
                    break;
            }
        } catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localContext;
    }
    public existsStmt(): ExistsStmtContext {
        let localContext = new ExistsStmtContext(this.context, this.state);
        this.enterRule(localContext, 92, ClickHouseParser.RULE_existsStmt);
        let _la: number;
        try {
            this.state = 1109;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 127, this.context)) {
                case 1:
                    localContext = new ExistsDatabaseStmtContext(localContext);
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 1096;
                        this.match(ClickHouseParser.EXISTS);
                        this.state = 1097;
                        this.match(ClickHouseParser.DATABASE);
                        this.state = 1098;
                        this.databaseIdentifier();
                    }
                    break;
                case 2:
                    localContext = new ExistsTableStmtContext(localContext);
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 1099;
                        this.match(ClickHouseParser.EXISTS);
                        this.state = 1106;
                        this.errorHandler.sync(this);
                        switch (
                            this.interpreter.adaptivePredict(this.tokenStream, 126, this.context)
                        ) {
                            case 1:
                                {
                                    this.state = 1100;
                                    this.match(ClickHouseParser.DICTIONARY);
                                }
                                break;
                            case 2:
                                {
                                    this.state = 1102;
                                    this.errorHandler.sync(this);
                                    _la = this.tokenStream.LA(1);
                                    if (_la === 160) {
                                        {
                                            this.state = 1101;
                                            this.match(ClickHouseParser.TEMPORARY);
                                        }
                                    }

                                    this.state = 1104;
                                    this.match(ClickHouseParser.TABLE);
                                }
                                break;
                            case 3:
                                {
                                    this.state = 1105;
                                    this.match(ClickHouseParser.VIEW);
                                }
                                break;
                        }
                        this.state = 1108;
                        this.tableIdentifier();
                    }
                    break;
            }
        } catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localContext;
    }
    public explainStmt(): ExplainStmtContext {
        let localContext = new ExplainStmtContext(this.context, this.state);
        this.enterRule(localContext, 94, ClickHouseParser.RULE_explainStmt);
        try {
            this.state = 1117;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 128, this.context)) {
                case 1:
                    localContext = new ExplainASTStmtContext(localContext);
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 1111;
                        this.match(ClickHouseParser.EXPLAIN);
                        this.state = 1112;
                        this.match(ClickHouseParser.AST);
                        this.state = 1113;
                        this.query();
                    }
                    break;
                case 2:
                    localContext = new ExplainSyntaxStmtContext(localContext);
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 1114;
                        this.match(ClickHouseParser.EXPLAIN);
                        this.state = 1115;
                        this.match(ClickHouseParser.SYNTAX);
                        this.state = 1116;
                        this.query();
                    }
                    break;
            }
        } catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localContext;
    }
    public insertStmt(): InsertStmtContext {
        let localContext = new InsertStmtContext(this.context, this.state);
        this.enterRule(localContext, 96, ClickHouseParser.RULE_insertStmt);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1119;
                this.match(ClickHouseParser.INSERT);
                this.state = 1120;
                this.match(ClickHouseParser.INTO);
                this.state = 1122;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 129, this.context)) {
                    case 1:
                        {
                            this.state = 1121;
                            this.match(ClickHouseParser.TABLE);
                        }
                        break;
                }
                this.state = 1127;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 130, this.context)) {
                    case 1:
                        {
                            this.state = 1124;
                            this.tableIdentifier();
                        }
                        break;
                    case 2:
                        {
                            this.state = 1125;
                            this.match(ClickHouseParser.FUNCTION);
                            this.state = 1126;
                            this.tableFunctionExpr();
                        }
                        break;
                }
                this.state = 1130;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 131, this.context)) {
                    case 1:
                        {
                            this.state = 1129;
                            this.columnsClause();
                        }
                        break;
                }
                this.state = 1132;
                this.dataClause();
            }
        } catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localContext;
    }
    public columnsClause(): ColumnsClauseContext {
        let localContext = new ColumnsClauseContext(this.context, this.state);
        this.enterRule(localContext, 98, ClickHouseParser.RULE_columnsClause);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1134;
                this.match(ClickHouseParser.LPAREN);
                this.state = 1135;
                this.nestedIdentifier();
                this.state = 1140;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 203) {
                    {
                        {
                            this.state = 1136;
                            this.match(ClickHouseParser.COMMA);
                            this.state = 1137;
                            this.nestedIdentifier();
                        }
                    }
                    this.state = 1142;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 1143;
                this.match(ClickHouseParser.RPAREN);
            }
        } catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localContext;
    }
    public dataClause(): DataClauseContext {
        let localContext = new DataClauseContext(this.context, this.state);
        this.enterRule(localContext, 100, ClickHouseParser.RULE_dataClause);
        let _la: number;
        try {
            this.state = 1154;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
                case ClickHouseParser.FORMAT:
                    localContext = new DataClauseFormatContext(localContext);
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 1145;
                        this.match(ClickHouseParser.FORMAT);
                        this.state = 1146;
                        this.identifier();
                    }
                    break;
                case ClickHouseParser.VALUES:
                    localContext = new DataClauseValuesContext(localContext);
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 1147;
                        this.match(ClickHouseParser.VALUES);
                    }
                    break;
                case ClickHouseParser.SELECT:
                case ClickHouseParser.WITH:
                case ClickHouseParser.LPAREN:
                    localContext = new DataClauseSelectContext(localContext);
                    this.enterOuterAlt(localContext, 3);
                    {
                        this.state = 1148;
                        this.selectUnionStmt();
                        this.state = 1150;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 225) {
                            {
                                this.state = 1149;
                                this.match(ClickHouseParser.SEMICOLON);
                            }
                        }

                        this.state = 1152;
                        this.match(ClickHouseParser.EOF);
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
            }
        } catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localContext;
    }
    public killStmt(): KillStmtContext {
        let localContext = new KillStmtContext(this.context, this.state);
        this.enterRule(localContext, 102, ClickHouseParser.RULE_killStmt);
        let _la: number;
        try {
            localContext = new KillMutationStmtContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1156;
                this.match(ClickHouseParser.KILL);
                this.state = 1157;
                this.match(ClickHouseParser.MUTATION);
                this.state = 1159;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 118) {
                    {
                        this.state = 1158;
                        this.clusterClause();
                    }
                }

                this.state = 1161;
                this.whereClause();
                this.state = 1163;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 14 || _la === 155 || _la === 161) {
                    {
                        this.state = 1162;
                        _la = this.tokenStream.LA(1);
                        if (!(_la === 14 || _la === 155 || _la === 161)) {
                            this.errorHandler.recoverInline(this);
                        } else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                    }
                }
            }
        } catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localContext;
    }
    public optimizeStmt(): OptimizeStmtContext {
        let localContext = new OptimizeStmtContext(this.context, this.state);
        this.enterRule(localContext, 104, ClickHouseParser.RULE_optimizeStmt);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1165;
                this.match(ClickHouseParser.OPTIMIZE);
                this.state = 1166;
                this.match(ClickHouseParser.TABLE);
                this.state = 1167;
                this.tableIdentifier();
                this.state = 1169;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 118) {
                    {
                        this.state = 1168;
                        this.clusterClause();
                    }
                }

                this.state = 1172;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 125) {
                    {
                        this.state = 1171;
                        this.partitionClause();
                    }
                }

                this.state = 1175;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 60) {
                    {
                        this.state = 1174;
                        this.match(ClickHouseParser.FINAL);
                    }
                }

                this.state = 1178;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 37) {
                    {
                        this.state = 1177;
                        this.match(ClickHouseParser.DEDUPLICATE);
                    }
                }
            }
        } catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localContext;
    }
    public renameStmt(): RenameStmtContext {
        let localContext = new RenameStmtContext(this.context, this.state);
        this.enterRule(localContext, 106, ClickHouseParser.RULE_renameStmt);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1180;
                this.match(ClickHouseParser.RENAME);
                this.state = 1181;
                this.match(ClickHouseParser.TABLE);
                this.state = 1182;
                this.tableIdentifier();
                this.state = 1183;
                this.match(ClickHouseParser.TO);
                this.state = 1184;
                this.tableIdentifier();
                this.state = 1192;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 203) {
                    {
                        {
                            this.state = 1185;
                            this.match(ClickHouseParser.COMMA);
                            this.state = 1186;
                            this.tableIdentifier();
                            this.state = 1187;
                            this.match(ClickHouseParser.TO);
                            this.state = 1188;
                            this.tableIdentifier();
                        }
                    }
                    this.state = 1194;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 1196;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 118) {
                    {
                        this.state = 1195;
                        this.clusterClause();
                    }
                }
            }
        } catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localContext;
    }
    public projectionSelectStmt(): ProjectionSelectStmtContext {
        let localContext = new ProjectionSelectStmtContext(this.context, this.state);
        this.enterRule(localContext, 108, ClickHouseParser.RULE_projectionSelectStmt);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1198;
                this.match(ClickHouseParser.LPAREN);
                this.state = 1200;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 188) {
                    {
                        this.state = 1199;
                        this.withClause();
                    }
                }

                this.state = 1202;
                this.match(ClickHouseParser.SELECT);
                this.state = 1203;
                this.columnExprList();
                this.state = 1205;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 72) {
                    {
                        this.state = 1204;
                        this.groupByClause();
                    }
                }

                this.state = 1208;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 121) {
                    {
                        this.state = 1207;
                        this.projectionOrderByClause();
                    }
                }

                this.state = 1210;
                this.match(ClickHouseParser.RPAREN);
            }
        } catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localContext;
    }
    public selectUnionStmt(): SelectUnionStmtContext {
        let localContext = new SelectUnionStmtContext(this.context, this.state);
        this.enterRule(localContext, 110, ClickHouseParser.RULE_selectUnionStmt);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1212;
                this.selectStmtWithParens();
                this.state = 1218;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 175) {
                    {
                        {
                            this.state = 1213;
                            this.match(ClickHouseParser.UNION);
                            this.state = 1214;
                            this.match(ClickHouseParser.ALL);
                            this.state = 1215;
                            this.selectStmtWithParens();
                        }
                    }
                    this.state = 1220;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
            }
        } catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localContext;
    }
    public selectStmtWithParens(): SelectStmtWithParensContext {
        let localContext = new SelectStmtWithParensContext(this.context, this.state);
        this.enterRule(localContext, 112, ClickHouseParser.RULE_selectStmtWithParens);
        try {
            this.state = 1226;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
                case ClickHouseParser.SELECT:
                case ClickHouseParser.WITH:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 1221;
                        this.selectStmt();
                    }
                    break;
                case ClickHouseParser.LPAREN:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 1222;
                        this.match(ClickHouseParser.LPAREN);
                        this.state = 1223;
                        this.selectUnionStmt();
                        this.state = 1224;
                        this.match(ClickHouseParser.RPAREN);
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
            }
        } catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localContext;
    }
    public selectStmt(): SelectStmtContext {
        let localContext = new SelectStmtContext(this.context, this.state);
        this.enterRule(localContext, 114, ClickHouseParser.RULE_selectStmt);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1229;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 188) {
                    {
                        this.state = 1228;
                        this.withClause();
                    }
                }

                this.state = 1231;
                this.match(ClickHouseParser.SELECT);
                this.state = 1233;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 149, this.context)) {
                    case 1:
                        {
                            this.state = 1232;
                            this.match(ClickHouseParser.DISTINCT);
                        }
                        break;
                }
                this.state = 1236;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 150, this.context)) {
                    case 1:
                        {
                            this.state = 1235;
                            this.topClause();
                        }
                        break;
                }
                this.state = 1238;
                this.columnExprList();
                this.state = 1240;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 67) {
                    {
                        this.state = 1239;
                        this.fromClause();
                    }
                }

                this.state = 1243;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 9 || _la === 83 || _la === 95) {
                    {
                        this.state = 1242;
                        this.arrayJoinClause();
                    }
                }

                this.state = 1246;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 187) {
                    {
                        this.state = 1245;
                        this.windowClause();
                    }
                }

                this.state = 1249;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 128) {
                    {
                        this.state = 1248;
                        this.prewhereClause();
                    }
                }

                this.state = 1252;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 186) {
                    {
                        this.state = 1251;
                        this.whereClause();
                    }
                }

                this.state = 1255;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 72) {
                    {
                        this.state = 1254;
                        this.groupByClause();
                    }
                }

                this.state = 1259;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 157, this.context)) {
                    case 1:
                        {
                            this.state = 1257;
                            this.match(ClickHouseParser.WITH);
                            this.state = 1258;
                            _la = this.tokenStream.LA(1);
                            if (!(_la === 31 || _la === 140)) {
                                this.errorHandler.recoverInline(this);
                            } else {
                                this.errorHandler.reportMatch(this);
                                this.consume();
                            }
                        }
                        break;
                }
                this.state = 1263;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 158, this.context)) {
                    case 1:
                        {
                            this.state = 1261;
                            this.match(ClickHouseParser.WITH);
                            this.state = 1262;
                            this.match(ClickHouseParser.TOTALS);
                        }
                        break;
                }
                this.state = 1266;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 73) {
                    {
                        this.state = 1265;
                        this.havingClause();
                    }
                }

                this.state = 1269;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 121) {
                    {
                        this.state = 1268;
                        this.orderByClause();
                    }
                }

                this.state = 1272;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 161, this.context)) {
                    case 1:
                        {
                            this.state = 1271;
                            this.limitByClause();
                        }
                        break;
                }
                this.state = 1275;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 98) {
                    {
                        this.state = 1274;
                        this.limitClause();
                    }
                }

                this.state = 1278;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 149) {
                    {
                        this.state = 1277;
                        this.settingsClause();
                    }
                }
            }
        } catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localContext;
    }
    public withClause(): WithClauseContext {
        let localContext = new WithClauseContext(this.context, this.state);
        this.enterRule(localContext, 116, ClickHouseParser.RULE_withClause);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1280;
                this.match(ClickHouseParser.WITH);
                this.state = 1281;
                this.columnExprList();
            }
        } catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localContext;
    }
    public topClause(): TopClauseContext {
        let localContext = new TopClauseContext(this.context, this.state);
        this.enterRule(localContext, 118, ClickHouseParser.RULE_topClause);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1283;
                this.match(ClickHouseParser.TOP);
                this.state = 1284;
                this.match(ClickHouseParser.DECIMAL_LITERAL);
                this.state = 1287;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 164, this.context)) {
                    case 1:
                        {
                            this.state = 1285;
                            this.match(ClickHouseParser.WITH);
                            this.state = 1286;
                            this.match(ClickHouseParser.TIES);
                        }
                        break;
                }
            }
        } catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localContext;
    }
    public fromClause(): FromClauseContext {
        let localContext = new FromClauseContext(this.context, this.state);
        this.enterRule(localContext, 120, ClickHouseParser.RULE_fromClause);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1289;
                this.match(ClickHouseParser.FROM);
                this.state = 1290;
                this.joinExpr(0);
            }
        } catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localContext;
    }
    public arrayJoinClause(): ArrayJoinClauseContext {
        let localContext = new ArrayJoinClauseContext(this.context, this.state);
        this.enterRule(localContext, 122, ClickHouseParser.RULE_arrayJoinClause);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1293;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 83 || _la === 95) {
                    {
                        this.state = 1292;
                        _la = this.tokenStream.LA(1);
                        if (!(_la === 83 || _la === 95)) {
                            this.errorHandler.recoverInline(this);
                        } else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                    }
                }

                this.state = 1295;
                this.match(ClickHouseParser.ARRAY);
                this.state = 1296;
                this.match(ClickHouseParser.JOIN);
                this.state = 1297;
                this.columnExprList();
            }
        } catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localContext;
    }
    public windowClause(): WindowClauseContext {
        let localContext = new WindowClauseContext(this.context, this.state);
        this.enterRule(localContext, 124, ClickHouseParser.RULE_windowClause);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1299;
                this.match(ClickHouseParser.WINDOW);
                this.state = 1300;
                this.identifier();
                this.state = 1301;
                this.match(ClickHouseParser.AS);
                this.state = 1302;
                this.match(ClickHouseParser.LPAREN);
                this.state = 1303;
                this.windowExpr();
                this.state = 1304;
                this.match(ClickHouseParser.RPAREN);
            }
        } catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localContext;
    }
    public prewhereClause(): PrewhereClauseContext {
        let localContext = new PrewhereClauseContext(this.context, this.state);
        this.enterRule(localContext, 126, ClickHouseParser.RULE_prewhereClause);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1306;
                this.match(ClickHouseParser.PREWHERE);
                this.state = 1307;
                this.columnExpr(0);
            }
        } catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localContext;
    }
    public whereClause(): WhereClauseContext {
        let localContext = new WhereClauseContext(this.context, this.state);
        this.enterRule(localContext, 128, ClickHouseParser.RULE_whereClause);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1309;
                this.match(ClickHouseParser.WHERE);
                this.state = 1310;
                this.columnExpr(0);
            }
        } catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localContext;
    }
    public groupByClause(): GroupByClauseContext {
        let localContext = new GroupByClauseContext(this.context, this.state);
        this.enterRule(localContext, 130, ClickHouseParser.RULE_groupByClause);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1312;
                this.match(ClickHouseParser.GROUP);
                this.state = 1313;
                this.match(ClickHouseParser.BY);
                this.state = 1320;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 166, this.context)) {
                    case 1:
                        {
                            this.state = 1314;
                            _la = this.tokenStream.LA(1);
                            if (!(_la === 31 || _la === 140)) {
                                this.errorHandler.recoverInline(this);
                            } else {
                                this.errorHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 1315;
                            this.match(ClickHouseParser.LPAREN);
                            this.state = 1316;
                            this.columnExprList();
                            this.state = 1317;
                            this.match(ClickHouseParser.RPAREN);
                        }
                        break;
                    case 2:
                        {
                            this.state = 1319;
                            this.columnExprList();
                        }
                        break;
                }
            }
        } catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localContext;
    }
    public havingClause(): HavingClauseContext {
        let localContext = new HavingClauseContext(this.context, this.state);
        this.enterRule(localContext, 132, ClickHouseParser.RULE_havingClause);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1322;
                this.match(ClickHouseParser.HAVING);
                this.state = 1323;
                this.columnExpr(0);
            }
        } catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localContext;
    }
    public orderByClause(): OrderByClauseContext {
        let localContext = new OrderByClauseContext(this.context, this.state);
        this.enterRule(localContext, 134, ClickHouseParser.RULE_orderByClause);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1325;
                this.match(ClickHouseParser.ORDER);
                this.state = 1326;
                this.match(ClickHouseParser.BY);
                this.state = 1327;
                this.orderExprList();
            }
        } catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localContext;
    }
    public projectionOrderByClause(): ProjectionOrderByClauseContext {
        let localContext = new ProjectionOrderByClauseContext(this.context, this.state);
        this.enterRule(localContext, 136, ClickHouseParser.RULE_projectionOrderByClause);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1329;
                this.match(ClickHouseParser.ORDER);
                this.state = 1330;
                this.match(ClickHouseParser.BY);
                this.state = 1331;
                this.columnExprList();
            }
        } catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localContext;
    }
    public limitByClause(): LimitByClauseContext {
        let localContext = new LimitByClauseContext(this.context, this.state);
        this.enterRule(localContext, 138, ClickHouseParser.RULE_limitByClause);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1333;
                this.match(ClickHouseParser.LIMIT);
                this.state = 1334;
                this.limitExpr();
                this.state = 1335;
                this.match(ClickHouseParser.BY);
                this.state = 1336;
                this.columnExprList();
            }
        } catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localContext;
    }
    public limitClause(): LimitClauseContext {
        let localContext = new LimitClauseContext(this.context, this.state);
        this.enterRule(localContext, 140, ClickHouseParser.RULE_limitClause);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1338;
                this.match(ClickHouseParser.LIMIT);
                this.state = 1339;
                this.limitExpr();
                this.state = 1342;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 167, this.context)) {
                    case 1:
                        {
                            this.state = 1340;
                            this.match(ClickHouseParser.WITH);
                            this.state = 1341;
                            this.match(ClickHouseParser.TIES);
                        }
                        break;
                }
            }
        } catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localContext;
    }
    public settingsClause(): SettingsClauseContext {
        let localContext = new SettingsClauseContext(this.context, this.state);
        this.enterRule(localContext, 142, ClickHouseParser.RULE_settingsClause);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1344;
                this.match(ClickHouseParser.SETTINGS);
                this.state = 1345;
                this.settingExprList();
            }
        } catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localContext;
    }

    public joinExpr(): JoinExprContext;
    public joinExpr(_p: number): JoinExprContext;
    public joinExpr(_p?: number): JoinExprContext {
        if (_p === undefined) {
            _p = 0;
        }

        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new JoinExprContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 144;
        this.enterRecursionRule(localContext, 144, ClickHouseParser.RULE_joinExpr, _p);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1359;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 170, this.context)) {
                    case 1:
                        {
                            localContext = new JoinExprTableContext(localContext);
                            this.context = localContext;
                            previousContext = localContext;

                            this.state = 1348;
                            this.tableExpr(0);
                            this.state = 1350;
                            this.errorHandler.sync(this);
                            switch (
                                this.interpreter.adaptivePredict(
                                    this.tokenStream,
                                    168,
                                    this.context,
                                )
                            ) {
                                case 1:
                                    {
                                        this.state = 1349;
                                        this.match(ClickHouseParser.FINAL);
                                    }
                                    break;
                            }
                            this.state = 1353;
                            this.errorHandler.sync(this);
                            switch (
                                this.interpreter.adaptivePredict(
                                    this.tokenStream,
                                    169,
                                    this.context,
                                )
                            ) {
                                case 1:
                                    {
                                        this.state = 1352;
                                        this.sampleClause();
                                    }
                                    break;
                            }
                        }
                        break;
                    case 2:
                        {
                            localContext = new JoinExprParensContext(localContext);
                            this.context = localContext;
                            previousContext = localContext;
                            this.state = 1355;
                            this.match(ClickHouseParser.LPAREN);
                            this.state = 1356;
                            this.joinExpr(0);
                            this.state = 1357;
                            this.match(ClickHouseParser.RPAREN);
                        }
                        break;
                }
                this.context!.stop = this.tokenStream.LT(-1);
                this.state = 1378;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 174, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        previousContext = localContext;
                        {
                            this.state = 1376;
                            this.errorHandler.sync(this);
                            switch (
                                this.interpreter.adaptivePredict(
                                    this.tokenStream,
                                    173,
                                    this.context,
                                )
                            ) {
                                case 1:
                                    {
                                        localContext = new JoinExprCrossOpContext(
                                            new JoinExprContext(parentContext, parentState),
                                        );
                                        this.pushNewRecursionContext(
                                            localContext,
                                            _startState,
                                            ClickHouseParser.RULE_joinExpr,
                                        );
                                        this.state = 1361;
                                        if (!this.precpred(this.context, 3)) {
                                            throw this.createFailedPredicateException(
                                                'this.precpred(this.context, 3)',
                                            );
                                        }
                                        this.state = 1362;
                                        this.joinOpCross();
                                        this.state = 1363;
                                        this.joinExpr(4);
                                    }
                                    break;
                                case 2:
                                    {
                                        localContext = new JoinExprOpContext(
                                            new JoinExprContext(parentContext, parentState),
                                        );
                                        this.pushNewRecursionContext(
                                            localContext,
                                            _startState,
                                            ClickHouseParser.RULE_joinExpr,
                                        );
                                        this.state = 1365;
                                        if (!this.precpred(this.context, 4)) {
                                            throw this.createFailedPredicateException(
                                                'this.precpred(this.context, 4)',
                                            );
                                        }
                                        this.state = 1367;
                                        this.errorHandler.sync(this);
                                        _la = this.tokenStream.LA(1);
                                        if (_la === 70 || _la === 100) {
                                            {
                                                this.state = 1366;
                                                _la = this.tokenStream.LA(1);
                                                if (!(_la === 70 || _la === 100)) {
                                                    this.errorHandler.recoverInline(this);
                                                } else {
                                                    this.errorHandler.reportMatch(this);
                                                    this.consume();
                                                }
                                            }
                                        }

                                        this.state = 1370;
                                        this.errorHandler.sync(this);
                                        _la = this.tokenStream.LA(1);
                                        if (
                                            ((_la & ~0x1f) === 0 && ((1 << _la) & 4496) !== 0) ||
                                            (((_la - 68) & ~0x1f) === 0 &&
                                                ((1 << (_la - 68)) & 134250497) !== 0) ||
                                            _la === 139 ||
                                            _la === 146
                                        ) {
                                            {
                                                this.state = 1369;
                                                this.joinOp();
                                            }
                                        }

                                        this.state = 1372;
                                        this.match(ClickHouseParser.JOIN);
                                        this.state = 1373;
                                        this.joinExpr(0);
                                        this.state = 1374;
                                        this.joinConstraintClause();
                                    }
                                    break;
                            }
                        }
                    }
                    this.state = 1380;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(
                        this.tokenStream,
                        174,
                        this.context,
                    );
                }
            }
        } catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.unrollRecursionContexts(parentContext);
        }
        return localContext;
    }
    public joinOp(): JoinOpContext {
        let localContext = new JoinOpContext(this.context, this.state);
        this.enterRule(localContext, 146, ClickHouseParser.RULE_joinOp);
        let _la: number;
        try {
            this.state = 1424;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 188, this.context)) {
                case 1:
                    localContext = new JoinOpInnerContext(localContext);
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 1390;
                        this.errorHandler.sync(this);
                        switch (
                            this.interpreter.adaptivePredict(this.tokenStream, 177, this.context)
                        ) {
                            case 1:
                                {
                                    this.state = 1382;
                                    this.errorHandler.sync(this);
                                    _la = this.tokenStream.LA(1);
                                    if ((_la & ~0x1f) === 0 && ((1 << _la) & 4368) !== 0) {
                                        {
                                            this.state = 1381;
                                            _la = this.tokenStream.LA(1);
                                            if (
                                                !((_la & ~0x1f) === 0 && ((1 << _la) & 4368) !== 0)
                                            ) {
                                                this.errorHandler.recoverInline(this);
                                            } else {
                                                this.errorHandler.reportMatch(this);
                                                this.consume();
                                            }
                                        }
                                    }

                                    this.state = 1384;
                                    this.match(ClickHouseParser.INNER);
                                }
                                break;
                            case 2:
                                {
                                    this.state = 1385;
                                    this.match(ClickHouseParser.INNER);
                                    this.state = 1387;
                                    this.errorHandler.sync(this);
                                    _la = this.tokenStream.LA(1);
                                    if ((_la & ~0x1f) === 0 && ((1 << _la) & 4368) !== 0) {
                                        {
                                            this.state = 1386;
                                            _la = this.tokenStream.LA(1);
                                            if (
                                                !((_la & ~0x1f) === 0 && ((1 << _la) & 4368) !== 0)
                                            ) {
                                                this.errorHandler.recoverInline(this);
                                            } else {
                                                this.errorHandler.reportMatch(this);
                                                this.consume();
                                            }
                                        }
                                    }
                                }
                                break;
                            case 3:
                                {
                                    this.state = 1389;
                                    _la = this.tokenStream.LA(1);
                                    if (!((_la & ~0x1f) === 0 && ((1 << _la) & 4368) !== 0)) {
                                        this.errorHandler.recoverInline(this);
                                    } else {
                                        this.errorHandler.reportMatch(this);
                                        this.consume();
                                    }
                                }
                                break;
                        }
                    }
                    break;
                case 2:
                    localContext = new JoinOpLeftRightContext(localContext);
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 1406;
                        this.errorHandler.sync(this);
                        switch (
                            this.interpreter.adaptivePredict(this.tokenStream, 182, this.context)
                        ) {
                            case 1:
                                {
                                    this.state = 1393;
                                    this.errorHandler.sync(this);
                                    _la = this.tokenStream.LA(1);
                                    if (
                                        ((_la & ~0x1f) === 0 && ((1 << _la) & 4496) !== 0) ||
                                        _la === 146
                                    ) {
                                        {
                                            this.state = 1392;
                                            _la = this.tokenStream.LA(1);
                                            if (
                                                !(
                                                    ((_la & ~0x1f) === 0 &&
                                                        ((1 << _la) & 4496) !== 0) ||
                                                    _la === 146
                                                )
                                            ) {
                                                this.errorHandler.recoverInline(this);
                                            } else {
                                                this.errorHandler.reportMatch(this);
                                                this.consume();
                                            }
                                        }
                                    }

                                    this.state = 1395;
                                    _la = this.tokenStream.LA(1);
                                    if (!(_la === 95 || _la === 139)) {
                                        this.errorHandler.recoverInline(this);
                                    } else {
                                        this.errorHandler.reportMatch(this);
                                        this.consume();
                                    }
                                    this.state = 1397;
                                    this.errorHandler.sync(this);
                                    _la = this.tokenStream.LA(1);
                                    if (_la === 122) {
                                        {
                                            this.state = 1396;
                                            this.match(ClickHouseParser.OUTER);
                                        }
                                    }
                                }
                                break;
                            case 2:
                                {
                                    this.state = 1399;
                                    _la = this.tokenStream.LA(1);
                                    if (!(_la === 95 || _la === 139)) {
                                        this.errorHandler.recoverInline(this);
                                    } else {
                                        this.errorHandler.reportMatch(this);
                                        this.consume();
                                    }
                                    this.state = 1401;
                                    this.errorHandler.sync(this);
                                    _la = this.tokenStream.LA(1);
                                    if (_la === 122) {
                                        {
                                            this.state = 1400;
                                            this.match(ClickHouseParser.OUTER);
                                        }
                                    }

                                    this.state = 1404;
                                    this.errorHandler.sync(this);
                                    _la = this.tokenStream.LA(1);
                                    if (
                                        ((_la & ~0x1f) === 0 && ((1 << _la) & 4496) !== 0) ||
                                        _la === 146
                                    ) {
                                        {
                                            this.state = 1403;
                                            _la = this.tokenStream.LA(1);
                                            if (
                                                !(
                                                    ((_la & ~0x1f) === 0 &&
                                                        ((1 << _la) & 4496) !== 0) ||
                                                    _la === 146
                                                )
                                            ) {
                                                this.errorHandler.recoverInline(this);
                                            } else {
                                                this.errorHandler.reportMatch(this);
                                                this.consume();
                                            }
                                        }
                                    }
                                }
                                break;
                        }
                    }
                    break;
                case 3:
                    localContext = new JoinOpFullContext(localContext);
                    this.enterOuterAlt(localContext, 3);
                    {
                        this.state = 1422;
                        this.errorHandler.sync(this);
                        switch (
                            this.interpreter.adaptivePredict(this.tokenStream, 187, this.context)
                        ) {
                            case 1:
                                {
                                    this.state = 1409;
                                    this.errorHandler.sync(this);
                                    _la = this.tokenStream.LA(1);
                                    if (_la === 4 || _la === 8) {
                                        {
                                            this.state = 1408;
                                            _la = this.tokenStream.LA(1);
                                            if (!(_la === 4 || _la === 8)) {
                                                this.errorHandler.recoverInline(this);
                                            } else {
                                                this.errorHandler.reportMatch(this);
                                                this.consume();
                                            }
                                        }
                                    }

                                    this.state = 1411;
                                    this.match(ClickHouseParser.FULL);
                                    this.state = 1413;
                                    this.errorHandler.sync(this);
                                    _la = this.tokenStream.LA(1);
                                    if (_la === 122) {
                                        {
                                            this.state = 1412;
                                            this.match(ClickHouseParser.OUTER);
                                        }
                                    }
                                }
                                break;
                            case 2:
                                {
                                    this.state = 1415;
                                    this.match(ClickHouseParser.FULL);
                                    this.state = 1417;
                                    this.errorHandler.sync(this);
                                    _la = this.tokenStream.LA(1);
                                    if (_la === 122) {
                                        {
                                            this.state = 1416;
                                            this.match(ClickHouseParser.OUTER);
                                        }
                                    }

                                    this.state = 1420;
                                    this.errorHandler.sync(this);
                                    _la = this.tokenStream.LA(1);
                                    if (_la === 4 || _la === 8) {
                                        {
                                            this.state = 1419;
                                            _la = this.tokenStream.LA(1);
                                            if (!(_la === 4 || _la === 8)) {
                                                this.errorHandler.recoverInline(this);
                                            } else {
                                                this.errorHandler.reportMatch(this);
                                                this.consume();
                                            }
                                        }
                                    }
                                }
                                break;
                        }
                    }
                    break;
            }
        } catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localContext;
    }
    public joinOpCross(): JoinOpCrossContext {
        let localContext = new JoinOpCrossContext(this.context, this.state);
        this.enterRule(localContext, 148, ClickHouseParser.RULE_joinOpCross);
        let _la: number;
        try {
            this.state = 1432;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
                case ClickHouseParser.CROSS:
                case ClickHouseParser.GLOBAL:
                case ClickHouseParser.LOCAL:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 1427;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 70 || _la === 100) {
                            {
                                this.state = 1426;
                                _la = this.tokenStream.LA(1);
                                if (!(_la === 70 || _la === 100)) {
                                    this.errorHandler.recoverInline(this);
                                } else {
                                    this.errorHandler.reportMatch(this);
                                    this.consume();
                                }
                            }
                        }

                        this.state = 1429;
                        this.match(ClickHouseParser.CROSS);
                        this.state = 1430;
                        this.match(ClickHouseParser.JOIN);
                    }
                    break;
                case ClickHouseParser.COMMA:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 1431;
                        this.match(ClickHouseParser.COMMA);
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
            }
        } catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localContext;
    }
    public joinConstraintClause(): JoinConstraintClauseContext {
        let localContext = new JoinConstraintClauseContext(this.context, this.state);
        this.enterRule(localContext, 150, ClickHouseParser.RULE_joinConstraintClause);
        try {
            this.state = 1443;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 191, this.context)) {
                case 1:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 1434;
                        this.match(ClickHouseParser.ON);
                        this.state = 1435;
                        this.columnExprList();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 1436;
                        this.match(ClickHouseParser.USING);
                        this.state = 1437;
                        this.match(ClickHouseParser.LPAREN);
                        this.state = 1438;
                        this.columnExprList();
                        this.state = 1439;
                        this.match(ClickHouseParser.RPAREN);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(localContext, 3);
                    {
                        this.state = 1441;
                        this.match(ClickHouseParser.USING);
                        this.state = 1442;
                        this.columnExprList();
                    }
                    break;
            }
        } catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localContext;
    }
    public sampleClause(): SampleClauseContext {
        let localContext = new SampleClauseContext(this.context, this.state);
        this.enterRule(localContext, 152, ClickHouseParser.RULE_sampleClause);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1445;
                this.match(ClickHouseParser.SAMPLE);
                this.state = 1446;
                this.ratioExpr();
                this.state = 1449;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 192, this.context)) {
                    case 1:
                        {
                            this.state = 1447;
                            this.match(ClickHouseParser.OFFSET);
                            this.state = 1448;
                            this.ratioExpr();
                        }
                        break;
                }
            }
        } catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localContext;
    }
    public limitExpr(): LimitExprContext {
        let localContext = new LimitExprContext(this.context, this.state);
        this.enterRule(localContext, 154, ClickHouseParser.RULE_limitExpr);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1451;
                this.columnExpr(0);
                this.state = 1454;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 117 || _la === 203) {
                    {
                        this.state = 1452;
                        _la = this.tokenStream.LA(1);
                        if (!(_la === 117 || _la === 203)) {
                            this.errorHandler.recoverInline(this);
                        } else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 1453;
                        this.columnExpr(0);
                    }
                }
            }
        } catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localContext;
    }
    public orderExprList(): OrderExprListContext {
        let localContext = new OrderExprListContext(this.context, this.state);
        this.enterRule(localContext, 156, ClickHouseParser.RULE_orderExprList);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1456;
                this.orderExpr();
                this.state = 1461;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 194, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                            {
                                this.state = 1457;
                                this.match(ClickHouseParser.COMMA);
                                this.state = 1458;
                                this.orderExpr();
                            }
                        }
                    }
                    this.state = 1463;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(
                        this.tokenStream,
                        194,
                        this.context,
                    );
                }
            }
        } catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localContext;
    }
    public orderExpr(): OrderExprContext {
        let localContext = new OrderExprContext(this.context, this.state);
        this.enterRule(localContext, 158, ClickHouseParser.RULE_orderExpr);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1464;
                this.columnExpr(0);
                this.state = 1466;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 195, this.context)) {
                    case 1:
                        {
                            this.state = 1465;
                            _la = this.tokenStream.LA(1);
                            if (
                                !(
                                    ((_la - 11) & ~0x1f) === 0 &&
                                    ((1 << (_la - 11)) & 3221225473) !== 0
                                )
                            ) {
                                this.errorHandler.recoverInline(this);
                            } else {
                                this.errorHandler.reportMatch(this);
                                this.consume();
                            }
                        }
                        break;
                }
                this.state = 1470;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 196, this.context)) {
                    case 1:
                        {
                            this.state = 1468;
                            this.match(ClickHouseParser.NULLS);
                            this.state = 1469;
                            _la = this.tokenStream.LA(1);
                            if (!(_la === 61 || _la === 92)) {
                                this.errorHandler.recoverInline(this);
                            } else {
                                this.errorHandler.reportMatch(this);
                                this.consume();
                            }
                        }
                        break;
                }
                this.state = 1474;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 197, this.context)) {
                    case 1:
                        {
                            this.state = 1472;
                            this.match(ClickHouseParser.COLLATE);
                            this.state = 1473;
                            this.match(ClickHouseParser.STRING_LITERAL);
                        }
                        break;
                }
            }
        } catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localContext;
    }
    public ratioExpr(): RatioExprContext {
        let localContext = new RatioExprContext(this.context, this.state);
        this.enterRule(localContext, 160, ClickHouseParser.RULE_ratioExpr);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1476;
                this.numberLiteral();
                this.state = 1479;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 198, this.context)) {
                    case 1:
                        {
                            this.state = 1477;
                            this.match(ClickHouseParser.SLASH);
                            this.state = 1478;
                            this.numberLiteral();
                        }
                        break;
                }
            }
        } catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localContext;
    }
    public settingExprList(): SettingExprListContext {
        let localContext = new SettingExprListContext(this.context, this.state);
        this.enterRule(localContext, 162, ClickHouseParser.RULE_settingExprList);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1481;
                this.settingExpr();
                this.state = 1486;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 199, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                            {
                                this.state = 1482;
                                this.match(ClickHouseParser.COMMA);
                                this.state = 1483;
                                this.settingExpr();
                            }
                        }
                    }
                    this.state = 1488;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(
                        this.tokenStream,
                        199,
                        this.context,
                    );
                }
            }
        } catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localContext;
    }
    public settingExpr(): SettingExprContext {
        let localContext = new SettingExprContext(this.context, this.state);
        this.enterRule(localContext, 164, ClickHouseParser.RULE_settingExpr);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1489;
                this.identifier();
                this.state = 1490;
                this.match(ClickHouseParser.EQ_SINGLE);
                this.state = 1491;
                this.literal();
            }
        } catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localContext;
    }
    public windowExpr(): WindowExprContext {
        let localContext = new WindowExprContext(this.context, this.state);
        this.enterRule(localContext, 166, ClickHouseParser.RULE_windowExpr);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1494;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 125) {
                    {
                        this.state = 1493;
                        this.winPartitionByClause();
                    }
                }

                this.state = 1497;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 121) {
                    {
                        this.state = 1496;
                        this.winOrderByClause();
                    }
                }

                this.state = 1500;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 132 || _la === 142) {
                    {
                        this.state = 1499;
                        this.winFrameClause();
                    }
                }
            }
        } catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localContext;
    }
    public winPartitionByClause(): WinPartitionByClauseContext {
        let localContext = new WinPartitionByClauseContext(this.context, this.state);
        this.enterRule(localContext, 168, ClickHouseParser.RULE_winPartitionByClause);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1502;
                this.match(ClickHouseParser.PARTITION);
                this.state = 1503;
                this.match(ClickHouseParser.BY);
                this.state = 1504;
                this.columnExprList();
            }
        } catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localContext;
    }
    public winOrderByClause(): WinOrderByClauseContext {
        let localContext = new WinOrderByClauseContext(this.context, this.state);
        this.enterRule(localContext, 170, ClickHouseParser.RULE_winOrderByClause);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1506;
                this.match(ClickHouseParser.ORDER);
                this.state = 1507;
                this.match(ClickHouseParser.BY);
                this.state = 1508;
                this.orderExprList();
            }
        } catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localContext;
    }
    public winFrameClause(): WinFrameClauseContext {
        let localContext = new WinFrameClauseContext(this.context, this.state);
        this.enterRule(localContext, 172, ClickHouseParser.RULE_winFrameClause);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1510;
                _la = this.tokenStream.LA(1);
                if (!(_la === 132 || _la === 142)) {
                    this.errorHandler.recoverInline(this);
                } else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 1511;
                this.winFrameExtend();
            }
        } catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localContext;
    }
    public winFrameExtend(): WinFrameExtendContext {
        let localContext = new WinFrameExtendContext(this.context, this.state);
        this.enterRule(localContext, 174, ClickHouseParser.RULE_winFrameExtend);
        try {
            this.state = 1519;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
                case ClickHouseParser.CURRENT:
                case ClickHouseParser.INF:
                case ClickHouseParser.NAN_SQL:
                case ClickHouseParser.UNBOUNDED:
                case ClickHouseParser.FLOATING_LITERAL:
                case ClickHouseParser.OCTAL_LITERAL:
                case ClickHouseParser.DECIMAL_LITERAL:
                case ClickHouseParser.HEXADECIMAL_LITERAL:
                case ClickHouseParser.DASH:
                case ClickHouseParser.DOT:
                case ClickHouseParser.PLUS:
                    localContext = new FrameStartContext(localContext);
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 1513;
                        this.winFrameBound();
                    }
                    break;
                case ClickHouseParser.BETWEEN:
                    localContext = new FrameBetweenContext(localContext);
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 1514;
                        this.match(ClickHouseParser.BETWEEN);
                        this.state = 1515;
                        this.winFrameBound();
                        this.state = 1516;
                        this.match(ClickHouseParser.AND);
                        this.state = 1517;
                        this.winFrameBound();
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
            }
        } catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localContext;
    }
    public winFrameBound(): WinFrameBoundContext {
        let localContext = new WinFrameBoundContext(this.context, this.state);
        this.enterRule(localContext, 176, ClickHouseParser.RULE_winFrameBound);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1533;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 204, this.context)) {
                    case 1:
                        {
                            this.state = 1521;
                            this.match(ClickHouseParser.CURRENT);
                            this.state = 1522;
                            this.match(ClickHouseParser.ROW);
                        }
                        break;
                    case 2:
                        {
                            this.state = 1523;
                            this.match(ClickHouseParser.UNBOUNDED);
                            this.state = 1524;
                            this.match(ClickHouseParser.PRECEDING);
                        }
                        break;
                    case 3:
                        {
                            this.state = 1525;
                            this.match(ClickHouseParser.UNBOUNDED);
                            this.state = 1526;
                            this.match(ClickHouseParser.FOLLOWING);
                        }
                        break;
                    case 4:
                        {
                            this.state = 1527;
                            this.numberLiteral();
                            this.state = 1528;
                            this.match(ClickHouseParser.PRECEDING);
                        }
                        break;
                    case 5:
                        {
                            this.state = 1530;
                            this.numberLiteral();
                            this.state = 1531;
                            this.match(ClickHouseParser.FOLLOWING);
                        }
                        break;
                }
            }
        } catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localContext;
    }
    public setStmt(): SetStmtContext {
        let localContext = new SetStmtContext(this.context, this.state);
        this.enterRule(localContext, 178, ClickHouseParser.RULE_setStmt);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1535;
                this.match(ClickHouseParser.SET);
                this.state = 1536;
                this.settingExprList();
            }
        } catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localContext;
    }
    public showStmt(): ShowStmtContext {
        let localContext = new ShowStmtContext(this.context, this.state);
        this.enterRule(localContext, 180, ClickHouseParser.RULE_showStmt);
        let _la: number;
        try {
            this.state = 1580;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 212, this.context)) {
                case 1:
                    localContext = new ShowCreateDatabaseStmtContext(localContext);
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 1538;
                        this.match(ClickHouseParser.SHOW);
                        this.state = 1539;
                        this.match(ClickHouseParser.CREATE);
                        this.state = 1540;
                        this.match(ClickHouseParser.DATABASE);
                        this.state = 1541;
                        this.databaseIdentifier();
                    }
                    break;
                case 2:
                    localContext = new ShowCreateDictionaryStmtContext(localContext);
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 1542;
                        this.match(ClickHouseParser.SHOW);
                        this.state = 1543;
                        this.match(ClickHouseParser.CREATE);
                        this.state = 1544;
                        this.match(ClickHouseParser.DICTIONARY);
                        this.state = 1545;
                        this.tableIdentifier();
                    }
                    break;
                case 3:
                    localContext = new ShowCreateTableStmtContext(localContext);
                    this.enterOuterAlt(localContext, 3);
                    {
                        this.state = 1546;
                        this.match(ClickHouseParser.SHOW);
                        this.state = 1547;
                        this.match(ClickHouseParser.CREATE);
                        this.state = 1549;
                        this.errorHandler.sync(this);
                        switch (
                            this.interpreter.adaptivePredict(this.tokenStream, 205, this.context)
                        ) {
                            case 1:
                                {
                                    this.state = 1548;
                                    this.match(ClickHouseParser.TEMPORARY);
                                }
                                break;
                        }
                        this.state = 1552;
                        this.errorHandler.sync(this);
                        switch (
                            this.interpreter.adaptivePredict(this.tokenStream, 206, this.context)
                        ) {
                            case 1:
                                {
                                    this.state = 1551;
                                    this.match(ClickHouseParser.TABLE);
                                }
                                break;
                        }
                        this.state = 1554;
                        this.tableIdentifier();
                    }
                    break;
                case 4:
                    localContext = new ShowDatabasesStmtContext(localContext);
                    this.enterOuterAlt(localContext, 4);
                    {
                        this.state = 1555;
                        this.match(ClickHouseParser.SHOW);
                        this.state = 1556;
                        this.match(ClickHouseParser.DATABASES);
                    }
                    break;
                case 5:
                    localContext = new ShowDictionariesStmtContext(localContext);
                    this.enterOuterAlt(localContext, 5);
                    {
                        this.state = 1557;
                        this.match(ClickHouseParser.SHOW);
                        this.state = 1558;
                        this.match(ClickHouseParser.DICTIONARIES);
                        this.state = 1561;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 67) {
                            {
                                this.state = 1559;
                                this.match(ClickHouseParser.FROM);
                                this.state = 1560;
                                this.databaseIdentifier();
                            }
                        }
                    }
                    break;
                case 6:
                    localContext = new ShowTablesStmtContext(localContext);
                    this.enterOuterAlt(localContext, 6);
                    {
                        this.state = 1563;
                        this.match(ClickHouseParser.SHOW);
                        this.state = 1565;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 160) {
                            {
                                this.state = 1564;
                                this.match(ClickHouseParser.TEMPORARY);
                            }
                        }

                        this.state = 1567;
                        this.match(ClickHouseParser.TABLES);
                        this.state = 1570;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 67 || _la === 79) {
                            {
                                this.state = 1568;
                                _la = this.tokenStream.LA(1);
                                if (!(_la === 67 || _la === 79)) {
                                    this.errorHandler.recoverInline(this);
                                } else {
                                    this.errorHandler.reportMatch(this);
                                    this.consume();
                                }
                                this.state = 1569;
                                this.databaseIdentifier();
                            }
                        }

                        this.state = 1575;
                        this.errorHandler.sync(this);
                        switch (this.tokenStream.LA(1)) {
                            case ClickHouseParser.LIKE:
                                {
                                    this.state = 1572;
                                    this.match(ClickHouseParser.LIKE);
                                    this.state = 1573;
                                    this.match(ClickHouseParser.STRING_LITERAL);
                                }
                                break;
                            case ClickHouseParser.WHERE:
                                {
                                    this.state = 1574;
                                    this.whereClause();
                                }
                                break;
                            case ClickHouseParser.EOF:
                            case ClickHouseParser.ALTER:
                            case ClickHouseParser.ATTACH:
                            case ClickHouseParser.CHECK:
                            case ClickHouseParser.CREATE:
                            case ClickHouseParser.DESC:
                            case ClickHouseParser.DESCRIBE:
                            case ClickHouseParser.DETACH:
                            case ClickHouseParser.DROP:
                            case ClickHouseParser.EXISTS:
                            case ClickHouseParser.EXPLAIN:
                            case ClickHouseParser.FORMAT:
                            case ClickHouseParser.INSERT:
                            case ClickHouseParser.INTO:
                            case ClickHouseParser.KILL:
                            case ClickHouseParser.LIMIT:
                            case ClickHouseParser.OPTIMIZE:
                            case ClickHouseParser.RENAME:
                            case ClickHouseParser.REPLACE:
                            case ClickHouseParser.SELECT:
                            case ClickHouseParser.SET:
                            case ClickHouseParser.SHOW:
                            case ClickHouseParser.SYSTEM:
                            case ClickHouseParser.TRUNCATE:
                            case ClickHouseParser.USE:
                            case ClickHouseParser.WATCH:
                            case ClickHouseParser.WITH:
                            case ClickHouseParser.LPAREN:
                            case ClickHouseParser.RPAREN:
                            case ClickHouseParser.SEMICOLON:
                                break;
                            default:
                                break;
                        }
                        this.state = 1578;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 98) {
                            {
                                this.state = 1577;
                                this.limitClause();
                            }
                        }
                    }
                    break;
            }
        } catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localContext;
    }
    public systemStmt(): SystemStmtContext {
        let localContext = new SystemStmtContext(this.context, this.state);
        this.enterRule(localContext, 182, ClickHouseParser.RULE_systemStmt);
        let _la: number;
        try {
            this.state = 1616;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 215, this.context)) {
                case 1:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 1582;
                        this.match(ClickHouseParser.SYSTEM);
                        this.state = 1583;
                        this.match(ClickHouseParser.FLUSH);
                        this.state = 1584;
                        this.match(ClickHouseParser.DISTRIBUTED);
                        this.state = 1585;
                        this.tableIdentifier();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 1586;
                        this.match(ClickHouseParser.SYSTEM);
                        this.state = 1587;
                        this.match(ClickHouseParser.FLUSH);
                        this.state = 1588;
                        this.match(ClickHouseParser.LOGS);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(localContext, 3);
                    {
                        this.state = 1589;
                        this.match(ClickHouseParser.SYSTEM);
                        this.state = 1590;
                        this.match(ClickHouseParser.RELOAD);
                        this.state = 1591;
                        this.match(ClickHouseParser.DICTIONARIES);
                    }
                    break;
                case 4:
                    this.enterOuterAlt(localContext, 4);
                    {
                        this.state = 1592;
                        this.match(ClickHouseParser.SYSTEM);
                        this.state = 1593;
                        this.match(ClickHouseParser.RELOAD);
                        this.state = 1594;
                        this.match(ClickHouseParser.DICTIONARY);
                        this.state = 1595;
                        this.tableIdentifier();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(localContext, 5);
                    {
                        this.state = 1596;
                        this.match(ClickHouseParser.SYSTEM);
                        this.state = 1597;
                        _la = this.tokenStream.LA(1);
                        if (!(_la === 152 || _la === 153)) {
                            this.errorHandler.recoverInline(this);
                        } else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 1605;
                        this.errorHandler.sync(this);
                        switch (this.tokenStream.LA(1)) {
                            case ClickHouseParser.DISTRIBUTED:
                                {
                                    this.state = 1598;
                                    this.match(ClickHouseParser.DISTRIBUTED);
                                    this.state = 1599;
                                    this.match(ClickHouseParser.SENDS);
                                }
                                break;
                            case ClickHouseParser.FETCHES:
                                {
                                    this.state = 1600;
                                    this.match(ClickHouseParser.FETCHES);
                                }
                                break;
                            case ClickHouseParser.MERGES:
                            case ClickHouseParser.TTL:
                                {
                                    this.state = 1602;
                                    this.errorHandler.sync(this);
                                    _la = this.tokenStream.LA(1);
                                    if (_la === 172) {
                                        {
                                            this.state = 1601;
                                            this.match(ClickHouseParser.TTL);
                                        }
                                    }

                                    this.state = 1604;
                                    this.match(ClickHouseParser.MERGES);
                                }
                                break;
                            default:
                                throw new antlr.NoViableAltException(this);
                        }
                        this.state = 1607;
                        this.tableIdentifier();
                    }
                    break;
                case 6:
                    this.enterOuterAlt(localContext, 6);
                    {
                        this.state = 1608;
                        this.match(ClickHouseParser.SYSTEM);
                        this.state = 1609;
                        _la = this.tokenStream.LA(1);
                        if (!(_la === 152 || _la === 153)) {
                            this.errorHandler.recoverInline(this);
                        } else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 1610;
                        this.match(ClickHouseParser.REPLICATED);
                        this.state = 1611;
                        this.match(ClickHouseParser.SENDS);
                    }
                    break;
                case 7:
                    this.enterOuterAlt(localContext, 7);
                    {
                        this.state = 1612;
                        this.match(ClickHouseParser.SYSTEM);
                        this.state = 1613;
                        this.match(ClickHouseParser.SYNC);
                        this.state = 1614;
                        this.match(ClickHouseParser.REPLICA);
                        this.state = 1615;
                        this.tableIdentifier();
                    }
                    break;
            }
        } catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localContext;
    }
    public truncateStmt(): TruncateStmtContext {
        let localContext = new TruncateStmtContext(this.context, this.state);
        this.enterRule(localContext, 184, ClickHouseParser.RULE_truncateStmt);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1618;
                this.match(ClickHouseParser.TRUNCATE);
                this.state = 1620;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 216, this.context)) {
                    case 1:
                        {
                            this.state = 1619;
                            this.match(ClickHouseParser.TEMPORARY);
                        }
                        break;
                }
                this.state = 1623;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 217, this.context)) {
                    case 1:
                        {
                            this.state = 1622;
                            this.match(ClickHouseParser.TABLE);
                        }
                        break;
                }
                this.state = 1627;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 218, this.context)) {
                    case 1:
                        {
                            this.state = 1625;
                            this.match(ClickHouseParser.IF);
                            this.state = 1626;
                            this.match(ClickHouseParser.EXISTS);
                        }
                        break;
                }
                this.state = 1629;
                this.tableIdentifier();
                this.state = 1631;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 118) {
                    {
                        this.state = 1630;
                        this.clusterClause();
                    }
                }
            }
        } catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localContext;
    }
    public useStmt(): UseStmtContext {
        let localContext = new UseStmtContext(this.context, this.state);
        this.enterRule(localContext, 186, ClickHouseParser.RULE_useStmt);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1633;
                this.match(ClickHouseParser.USE);
                this.state = 1634;
                this.databaseIdentifier();
            }
        } catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localContext;
    }
    public watchStmt(): WatchStmtContext {
        let localContext = new WatchStmtContext(this.context, this.state);
        this.enterRule(localContext, 188, ClickHouseParser.RULE_watchStmt);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1636;
                this.match(ClickHouseParser.WATCH);
                this.state = 1637;
                this.tableIdentifier();
                this.state = 1639;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 54) {
                    {
                        this.state = 1638;
                        this.match(ClickHouseParser.EVENTS);
                    }
                }

                this.state = 1643;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 98) {
                    {
                        this.state = 1641;
                        this.match(ClickHouseParser.LIMIT);
                        this.state = 1642;
                        this.match(ClickHouseParser.DECIMAL_LITERAL);
                    }
                }
            }
        } catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localContext;
    }
    public columnTypeExpr(): ColumnTypeExprContext {
        let localContext = new ColumnTypeExprContext(this.context, this.state);
        this.enterRule(localContext, 190, ClickHouseParser.RULE_columnTypeExpr);
        let _la: number;
        try {
            this.state = 1692;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 226, this.context)) {
                case 1:
                    localContext = new ColumnTypeExprSimpleContext(localContext);
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 1645;
                        this.identifier();
                    }
                    break;
                case 2:
                    localContext = new ColumnTypeExprNestedContext(localContext);
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 1646;
                        this.identifier();
                        this.state = 1647;
                        this.match(ClickHouseParser.LPAREN);
                        this.state = 1648;
                        this.identifier();
                        this.state = 1649;
                        this.columnTypeExpr();
                        this.state = 1656;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        while (_la === 203) {
                            {
                                {
                                    this.state = 1650;
                                    this.match(ClickHouseParser.COMMA);
                                    this.state = 1651;
                                    this.identifier();
                                    this.state = 1652;
                                    this.columnTypeExpr();
                                }
                            }
                            this.state = 1658;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                        }
                        this.state = 1659;
                        this.match(ClickHouseParser.RPAREN);
                    }
                    break;
                case 3:
                    localContext = new ColumnTypeExprEnumContext(localContext);
                    this.enterOuterAlt(localContext, 3);
                    {
                        this.state = 1661;
                        this.identifier();
                        this.state = 1662;
                        this.match(ClickHouseParser.LPAREN);
                        this.state = 1663;
                        this.enumValue();
                        this.state = 1668;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        while (_la === 203) {
                            {
                                {
                                    this.state = 1664;
                                    this.match(ClickHouseParser.COMMA);
                                    this.state = 1665;
                                    this.enumValue();
                                }
                            }
                            this.state = 1670;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                        }
                        this.state = 1671;
                        this.match(ClickHouseParser.RPAREN);
                    }
                    break;
                case 4:
                    localContext = new ColumnTypeExprComplexContext(localContext);
                    this.enterOuterAlt(localContext, 4);
                    {
                        this.state = 1673;
                        this.identifier();
                        this.state = 1674;
                        this.match(ClickHouseParser.LPAREN);
                        this.state = 1675;
                        this.columnTypeExpr();
                        this.state = 1680;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        while (_la === 203) {
                            {
                                {
                                    this.state = 1676;
                                    this.match(ClickHouseParser.COMMA);
                                    this.state = 1677;
                                    this.columnTypeExpr();
                                }
                            }
                            this.state = 1682;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                        }
                        this.state = 1683;
                        this.match(ClickHouseParser.RPAREN);
                    }
                    break;
                case 5:
                    localContext = new ColumnTypeExprParamContext(localContext);
                    this.enterOuterAlt(localContext, 5);
                    {
                        this.state = 1685;
                        this.identifier();
                        this.state = 1686;
                        this.match(ClickHouseParser.LPAREN);
                        this.state = 1688;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (
                            ((_la & ~0x1f) === 0 && ((1 << _la) & 4294967292) !== 0) ||
                            (((_la - 32) & ~0x1f) === 0 &&
                                ((1 << (_la - 32)) & 4294967295) !== 0) ||
                            (((_la - 64) & ~0x1f) === 0 &&
                                ((1 << (_la - 64)) & 4294967295) !== 0) ||
                            (((_la - 96) & ~0x1f) === 0 &&
                                ((1 << (_la - 96)) & 4294967295) !== 0) ||
                            (((_la - 128) & ~0x1f) === 0 &&
                                ((1 << (_la - 128)) & 4294967291) !== 0) ||
                            (((_la - 160) & ~0x1f) === 0 &&
                                ((1 << (_la - 160)) & 4294967295) !== 0) ||
                            (((_la - 192) & ~0x1f) === 0 && ((1 << (_la - 192)) & 72376511) !== 0)
                        ) {
                            {
                                this.state = 1687;
                                this.columnExprList();
                            }
                        }

                        this.state = 1690;
                        this.match(ClickHouseParser.RPAREN);
                    }
                    break;
            }
        } catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localContext;
    }
    public columnExprList(): ColumnExprListContext {
        let localContext = new ColumnExprListContext(this.context, this.state);
        this.enterRule(localContext, 192, ClickHouseParser.RULE_columnExprList);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1694;
                this.columnsExpr();
                this.state = 1699;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 227, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                            {
                                this.state = 1695;
                                this.match(ClickHouseParser.COMMA);
                                this.state = 1696;
                                this.columnsExpr();
                            }
                        }
                    }
                    this.state = 1701;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(
                        this.tokenStream,
                        227,
                        this.context,
                    );
                }
            }
        } catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localContext;
    }
    public columnsExpr(): ColumnsExprContext {
        let localContext = new ColumnsExprContext(this.context, this.state);
        this.enterRule(localContext, 194, ClickHouseParser.RULE_columnsExpr);
        let _la: number;
        try {
            this.state = 1713;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 229, this.context)) {
                case 1:
                    localContext = new ColumnsExprAsteriskContext(localContext);
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 1705;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (
                            (((_la - 2) & ~0x1f) === 0 && ((1 << (_la - 2)) & 4294967295) !== 0) ||
                            (((_la - 34) & ~0x1f) === 0 &&
                                ((1 << (_la - 34)) & 4294967295) !== 0) ||
                            (((_la - 66) & ~0x1f) === 0 &&
                                ((1 << (_la - 66)) & 4294934527) !== 0) ||
                            (((_la - 98) & ~0x1f) === 0 &&
                                ((1 << (_la - 98)) & 4294819839) !== 0) ||
                            (((_la - 131) & ~0x1f) === 0 &&
                                ((1 << (_la - 131)) & 4294967295) !== 0) ||
                            (((_la - 163) & ~0x1f) === 0 && ((1 << (_la - 163)) & 1073741823) !== 0)
                        ) {
                            {
                                this.state = 1702;
                                this.tableIdentifier();
                                this.state = 1703;
                                this.match(ClickHouseParser.DOT);
                            }
                        }

                        this.state = 1707;
                        this.match(ClickHouseParser.ASTERISK);
                    }
                    break;
                case 2:
                    localContext = new ColumnsExprSubqueryContext(localContext);
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 1708;
                        this.match(ClickHouseParser.LPAREN);
                        this.state = 1709;
                        this.selectUnionStmt();
                        this.state = 1710;
                        this.match(ClickHouseParser.RPAREN);
                    }
                    break;
                case 3:
                    localContext = new ColumnsExprColumnContext(localContext);
                    this.enterOuterAlt(localContext, 3);
                    {
                        this.state = 1712;
                        this.columnExpr(0);
                    }
                    break;
            }
        } catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localContext;
    }

    public columnExpr(): ColumnExprContext;
    public columnExpr(_p: number): ColumnExprContext;
    public columnExpr(_p?: number): ColumnExprContext {
        if (_p === undefined) {
            _p = 0;
        }

        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new ColumnExprContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 196;
        this.enterRecursionRule(localContext, 196, ClickHouseParser.RULE_columnExpr, _p);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1844;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 242, this.context)) {
                    case 1:
                        {
                            localContext = new ColumnExprCaseContext(localContext);
                            this.context = localContext;
                            previousContext = localContext;

                            this.state = 1716;
                            this.match(ClickHouseParser.CASE);
                            this.state = 1718;
                            this.errorHandler.sync(this);
                            switch (
                                this.interpreter.adaptivePredict(
                                    this.tokenStream,
                                    230,
                                    this.context,
                                )
                            ) {
                                case 1:
                                    {
                                        this.state = 1717;
                                        this.columnExpr(0);
                                    }
                                    break;
                            }
                            this.state = 1725;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                            do {
                                {
                                    {
                                        this.state = 1720;
                                        this.match(ClickHouseParser.WHEN);
                                        this.state = 1721;
                                        this.columnExpr(0);
                                        this.state = 1722;
                                        this.match(ClickHouseParser.THEN);
                                        this.state = 1723;
                                        this.columnExpr(0);
                                    }
                                }
                                this.state = 1727;
                                this.errorHandler.sync(this);
                                _la = this.tokenStream.LA(1);
                            } while (_la === 185);
                            this.state = 1731;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                            if (_la === 51) {
                                {
                                    this.state = 1729;
                                    this.match(ClickHouseParser.ELSE);
                                    this.state = 1730;
                                    this.columnExpr(0);
                                }
                            }

                            this.state = 1733;
                            this.match(ClickHouseParser.END);
                        }
                        break;
                    case 2:
                        {
                            localContext = new ColumnExprCastContext(localContext);
                            this.context = localContext;
                            previousContext = localContext;
                            this.state = 1735;
                            this.match(ClickHouseParser.CAST);
                            this.state = 1736;
                            this.match(ClickHouseParser.LPAREN);
                            this.state = 1737;
                            this.columnExpr(0);
                            this.state = 1738;
                            this.match(ClickHouseParser.AS);
                            this.state = 1739;
                            this.columnTypeExpr();
                            this.state = 1740;
                            this.match(ClickHouseParser.RPAREN);
                        }
                        break;
                    case 3:
                        {
                            localContext = new ColumnExprDateContext(localContext);
                            this.context = localContext;
                            previousContext = localContext;
                            this.state = 1742;
                            this.match(ClickHouseParser.DATE);
                            this.state = 1743;
                            this.match(ClickHouseParser.STRING_LITERAL);
                        }
                        break;
                    case 4:
                        {
                            localContext = new ColumnExprExtractContext(localContext);
                            this.context = localContext;
                            previousContext = localContext;
                            this.state = 1744;
                            this.match(ClickHouseParser.EXTRACT);
                            this.state = 1745;
                            this.match(ClickHouseParser.LPAREN);
                            this.state = 1746;
                            this.interval();
                            this.state = 1747;
                            this.match(ClickHouseParser.FROM);
                            this.state = 1748;
                            this.columnExpr(0);
                            this.state = 1749;
                            this.match(ClickHouseParser.RPAREN);
                        }
                        break;
                    case 5:
                        {
                            localContext = new ColumnExprIntervalContext(localContext);
                            this.context = localContext;
                            previousContext = localContext;
                            this.state = 1751;
                            this.match(ClickHouseParser.INTERVAL);
                            this.state = 1752;
                            this.columnExpr(0);
                            this.state = 1753;
                            this.interval();
                        }
                        break;
                    case 6:
                        {
                            localContext = new ColumnExprSubstringContext(localContext);
                            this.context = localContext;
                            previousContext = localContext;
                            this.state = 1755;
                            this.match(ClickHouseParser.SUBSTRING);
                            this.state = 1756;
                            this.match(ClickHouseParser.LPAREN);
                            this.state = 1757;
                            this.columnExpr(0);
                            this.state = 1758;
                            this.match(ClickHouseParser.FROM);
                            this.state = 1759;
                            this.columnExpr(0);
                            this.state = 1762;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                            if (_la === 64) {
                                {
                                    this.state = 1760;
                                    this.match(ClickHouseParser.FOR);
                                    this.state = 1761;
                                    this.columnExpr(0);
                                }
                            }

                            this.state = 1764;
                            this.match(ClickHouseParser.RPAREN);
                        }
                        break;
                    case 7:
                        {
                            localContext = new ColumnExprTimestampContext(localContext);
                            this.context = localContext;
                            previousContext = localContext;
                            this.state = 1766;
                            this.match(ClickHouseParser.TIMESTAMP);
                            this.state = 1767;
                            this.match(ClickHouseParser.STRING_LITERAL);
                        }
                        break;
                    case 8:
                        {
                            localContext = new ColumnExprTrimContext(localContext);
                            this.context = localContext;
                            previousContext = localContext;
                            this.state = 1768;
                            this.match(ClickHouseParser.TRIM);
                            this.state = 1769;
                            this.match(ClickHouseParser.LPAREN);
                            this.state = 1770;
                            _la = this.tokenStream.LA(1);
                            if (!(_la === 17 || _la === 94 || _la === 169)) {
                                this.errorHandler.recoverInline(this);
                            } else {
                                this.errorHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 1771;
                            this.match(ClickHouseParser.STRING_LITERAL);
                            this.state = 1772;
                            this.match(ClickHouseParser.FROM);
                            this.state = 1773;
                            this.columnExpr(0);
                            this.state = 1774;
                            this.match(ClickHouseParser.RPAREN);
                        }
                        break;
                    case 9:
                        {
                            localContext = new ColumnExprWinFunctionContext(localContext);
                            this.context = localContext;
                            previousContext = localContext;
                            this.state = 1776;
                            this.identifier();
                            {
                                this.state = 1777;
                                this.match(ClickHouseParser.LPAREN);
                                this.state = 1779;
                                this.errorHandler.sync(this);
                                _la = this.tokenStream.LA(1);
                                if (
                                    ((_la & ~0x1f) === 0 && ((1 << _la) & 4294967292) !== 0) ||
                                    (((_la - 32) & ~0x1f) === 0 &&
                                        ((1 << (_la - 32)) & 4294967295) !== 0) ||
                                    (((_la - 64) & ~0x1f) === 0 &&
                                        ((1 << (_la - 64)) & 4294967295) !== 0) ||
                                    (((_la - 96) & ~0x1f) === 0 &&
                                        ((1 << (_la - 96)) & 4294967295) !== 0) ||
                                    (((_la - 128) & ~0x1f) === 0 &&
                                        ((1 << (_la - 128)) & 4294967291) !== 0) ||
                                    (((_la - 160) & ~0x1f) === 0 &&
                                        ((1 << (_la - 160)) & 4294967295) !== 0) ||
                                    (((_la - 192) & ~0x1f) === 0 &&
                                        ((1 << (_la - 192)) & 72376511) !== 0)
                                ) {
                                    {
                                        this.state = 1778;
                                        this.columnExprList();
                                    }
                                }

                                this.state = 1781;
                                this.match(ClickHouseParser.RPAREN);
                            }
                            this.state = 1783;
                            this.match(ClickHouseParser.OVER);
                            this.state = 1784;
                            this.match(ClickHouseParser.LPAREN);
                            this.state = 1785;
                            this.windowExpr();
                            this.state = 1786;
                            this.match(ClickHouseParser.RPAREN);
                        }
                        break;
                    case 10:
                        {
                            localContext = new ColumnExprWinFunctionTargetContext(localContext);
                            this.context = localContext;
                            previousContext = localContext;
                            this.state = 1788;
                            this.identifier();
                            {
                                this.state = 1789;
                                this.match(ClickHouseParser.LPAREN);
                                this.state = 1791;
                                this.errorHandler.sync(this);
                                _la = this.tokenStream.LA(1);
                                if (
                                    ((_la & ~0x1f) === 0 && ((1 << _la) & 4294967292) !== 0) ||
                                    (((_la - 32) & ~0x1f) === 0 &&
                                        ((1 << (_la - 32)) & 4294967295) !== 0) ||
                                    (((_la - 64) & ~0x1f) === 0 &&
                                        ((1 << (_la - 64)) & 4294967295) !== 0) ||
                                    (((_la - 96) & ~0x1f) === 0 &&
                                        ((1 << (_la - 96)) & 4294967295) !== 0) ||
                                    (((_la - 128) & ~0x1f) === 0 &&
                                        ((1 << (_la - 128)) & 4294967291) !== 0) ||
                                    (((_la - 160) & ~0x1f) === 0 &&
                                        ((1 << (_la - 160)) & 4294967295) !== 0) ||
                                    (((_la - 192) & ~0x1f) === 0 &&
                                        ((1 << (_la - 192)) & 72376511) !== 0)
                                ) {
                                    {
                                        this.state = 1790;
                                        this.columnExprList();
                                    }
                                }

                                this.state = 1793;
                                this.match(ClickHouseParser.RPAREN);
                            }
                            this.state = 1795;
                            this.match(ClickHouseParser.OVER);
                            this.state = 1796;
                            this.identifier();
                        }
                        break;
                    case 11:
                        {
                            localContext = new ColumnExprFunctionContext(localContext);
                            this.context = localContext;
                            previousContext = localContext;
                            this.state = 1798;
                            this.identifier();
                            this.state = 1804;
                            this.errorHandler.sync(this);
                            switch (
                                this.interpreter.adaptivePredict(
                                    this.tokenStream,
                                    237,
                                    this.context,
                                )
                            ) {
                                case 1:
                                    {
                                        this.state = 1799;
                                        this.match(ClickHouseParser.LPAREN);
                                        this.state = 1801;
                                        this.errorHandler.sync(this);
                                        _la = this.tokenStream.LA(1);
                                        if (
                                            ((_la & ~0x1f) === 0 &&
                                                ((1 << _la) & 4294967292) !== 0) ||
                                            (((_la - 32) & ~0x1f) === 0 &&
                                                ((1 << (_la - 32)) & 4294967295) !== 0) ||
                                            (((_la - 64) & ~0x1f) === 0 &&
                                                ((1 << (_la - 64)) & 4294967295) !== 0) ||
                                            (((_la - 96) & ~0x1f) === 0 &&
                                                ((1 << (_la - 96)) & 4294967295) !== 0) ||
                                            (((_la - 128) & ~0x1f) === 0 &&
                                                ((1 << (_la - 128)) & 4294967291) !== 0) ||
                                            (((_la - 160) & ~0x1f) === 0 &&
                                                ((1 << (_la - 160)) & 4294967295) !== 0) ||
                                            (((_la - 192) & ~0x1f) === 0 &&
                                                ((1 << (_la - 192)) & 72376511) !== 0)
                                        ) {
                                            {
                                                this.state = 1800;
                                                this.columnExprList();
                                            }
                                        }

                                        this.state = 1803;
                                        this.match(ClickHouseParser.RPAREN);
                                    }
                                    break;
                            }
                            this.state = 1806;
                            this.match(ClickHouseParser.LPAREN);
                            this.state = 1808;
                            this.errorHandler.sync(this);
                            switch (
                                this.interpreter.adaptivePredict(
                                    this.tokenStream,
                                    238,
                                    this.context,
                                )
                            ) {
                                case 1:
                                    {
                                        this.state = 1807;
                                        this.match(ClickHouseParser.DISTINCT);
                                    }
                                    break;
                            }
                            this.state = 1811;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                            if (
                                ((_la & ~0x1f) === 0 && ((1 << _la) & 4294967292) !== 0) ||
                                (((_la - 32) & ~0x1f) === 0 &&
                                    ((1 << (_la - 32)) & 4294967295) !== 0) ||
                                (((_la - 64) & ~0x1f) === 0 &&
                                    ((1 << (_la - 64)) & 4294967295) !== 0) ||
                                (((_la - 96) & ~0x1f) === 0 &&
                                    ((1 << (_la - 96)) & 4294967295) !== 0) ||
                                (((_la - 128) & ~0x1f) === 0 &&
                                    ((1 << (_la - 128)) & 4294967291) !== 0) ||
                                (((_la - 160) & ~0x1f) === 0 &&
                                    ((1 << (_la - 160)) & 4294967295) !== 0) ||
                                (((_la - 192) & ~0x1f) === 0 &&
                                    ((1 << (_la - 192)) & 72376511) !== 0)
                            ) {
                                {
                                    this.state = 1810;
                                    this.columnArgList();
                                }
                            }

                            this.state = 1813;
                            this.match(ClickHouseParser.RPAREN);
                        }
                        break;
                    case 12:
                        {
                            localContext = new ColumnExprLiteralContext(localContext);
                            this.context = localContext;
                            previousContext = localContext;
                            this.state = 1815;
                            this.literal();
                        }
                        break;
                    case 13:
                        {
                            localContext = new ColumnExprNegateContext(localContext);
                            this.context = localContext;
                            previousContext = localContext;
                            this.state = 1816;
                            this.match(ClickHouseParser.DASH);
                            this.state = 1817;
                            this.columnExpr(17);
                        }
                        break;
                    case 14:
                        {
                            localContext = new ColumnExprNotContext(localContext);
                            this.context = localContext;
                            previousContext = localContext;
                            this.state = 1818;
                            this.match(ClickHouseParser.NOT);
                            this.state = 1819;
                            this.columnExpr(12);
                        }
                        break;
                    case 15:
                        {
                            localContext = new ColumnExprAsteriskContext(localContext);
                            this.context = localContext;
                            previousContext = localContext;
                            this.state = 1823;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                            if (
                                (((_la - 2) & ~0x1f) === 0 &&
                                    ((1 << (_la - 2)) & 4294967295) !== 0) ||
                                (((_la - 34) & ~0x1f) === 0 &&
                                    ((1 << (_la - 34)) & 4294967295) !== 0) ||
                                (((_la - 66) & ~0x1f) === 0 &&
                                    ((1 << (_la - 66)) & 4294934527) !== 0) ||
                                (((_la - 98) & ~0x1f) === 0 &&
                                    ((1 << (_la - 98)) & 4294819839) !== 0) ||
                                (((_la - 131) & ~0x1f) === 0 &&
                                    ((1 << (_la - 131)) & 4294967295) !== 0) ||
                                (((_la - 163) & ~0x1f) === 0 &&
                                    ((1 << (_la - 163)) & 1073741823) !== 0)
                            ) {
                                {
                                    this.state = 1820;
                                    this.tableIdentifier();
                                    this.state = 1821;
                                    this.match(ClickHouseParser.DOT);
                                }
                            }

                            this.state = 1825;
                            this.match(ClickHouseParser.ASTERISK);
                        }
                        break;
                    case 16:
                        {
                            localContext = new ColumnExprSubqueryContext(localContext);
                            this.context = localContext;
                            previousContext = localContext;
                            this.state = 1826;
                            this.match(ClickHouseParser.LPAREN);
                            this.state = 1827;
                            this.selectUnionStmt();
                            this.state = 1828;
                            this.match(ClickHouseParser.RPAREN);
                        }
                        break;
                    case 17:
                        {
                            localContext = new ColumnExprParensContext(localContext);
                            this.context = localContext;
                            previousContext = localContext;
                            this.state = 1830;
                            this.match(ClickHouseParser.LPAREN);
                            this.state = 1831;
                            this.columnExpr(0);
                            this.state = 1832;
                            this.match(ClickHouseParser.RPAREN);
                        }
                        break;
                    case 18:
                        {
                            localContext = new ColumnExprTupleContext(localContext);
                            this.context = localContext;
                            previousContext = localContext;
                            this.state = 1834;
                            this.match(ClickHouseParser.LPAREN);
                            this.state = 1835;
                            this.columnExprList();
                            this.state = 1836;
                            this.match(ClickHouseParser.RPAREN);
                        }
                        break;
                    case 19:
                        {
                            localContext = new ColumnExprArrayContext(localContext);
                            this.context = localContext;
                            previousContext = localContext;
                            this.state = 1838;
                            this.match(ClickHouseParser.LBRACKET);
                            this.state = 1840;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                            if (
                                ((_la & ~0x1f) === 0 && ((1 << _la) & 4294967292) !== 0) ||
                                (((_la - 32) & ~0x1f) === 0 &&
                                    ((1 << (_la - 32)) & 4294967295) !== 0) ||
                                (((_la - 64) & ~0x1f) === 0 &&
                                    ((1 << (_la - 64)) & 4294967295) !== 0) ||
                                (((_la - 96) & ~0x1f) === 0 &&
                                    ((1 << (_la - 96)) & 4294967295) !== 0) ||
                                (((_la - 128) & ~0x1f) === 0 &&
                                    ((1 << (_la - 128)) & 4294967291) !== 0) ||
                                (((_la - 160) & ~0x1f) === 0 &&
                                    ((1 << (_la - 160)) & 4294967295) !== 0) ||
                                (((_la - 192) & ~0x1f) === 0 &&
                                    ((1 << (_la - 192)) & 72376511) !== 0)
                            ) {
                                {
                                    this.state = 1839;
                                    this.columnExprList();
                                }
                            }

                            this.state = 1842;
                            this.match(ClickHouseParser.RBRACKET);
                        }
                        break;
                    case 20:
                        {
                            localContext = new ColumnExprIdentifierContext(localContext);
                            this.context = localContext;
                            previousContext = localContext;
                            this.state = 1843;
                            this.columnIdentifier();
                        }
                        break;
                }
                this.context!.stop = this.tokenStream.LT(-1);
                this.state = 1917;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 251, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        previousContext = localContext;
                        {
                            this.state = 1915;
                            this.errorHandler.sync(this);
                            switch (
                                this.interpreter.adaptivePredict(
                                    this.tokenStream,
                                    250,
                                    this.context,
                                )
                            ) {
                                case 1:
                                    {
                                        localContext = new ColumnExprPrecedence1Context(
                                            new ColumnExprContext(parentContext, parentState),
                                        );
                                        this.pushNewRecursionContext(
                                            localContext,
                                            _startState,
                                            ClickHouseParser.RULE_columnExpr,
                                        );
                                        this.state = 1846;
                                        if (!this.precpred(this.context, 16)) {
                                            throw this.createFailedPredicateException(
                                                'this.precpred(this.context, 16)',
                                            );
                                        }
                                        this.state = 1847;
                                        _la = this.tokenStream.LA(1);
                                        if (
                                            !(
                                                ((_la - 199) & ~0x1f) === 0 &&
                                                ((1 << (_la - 199)) & 134479873) !== 0
                                            )
                                        ) {
                                            this.errorHandler.recoverInline(this);
                                        } else {
                                            this.errorHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 1848;
                                        this.columnExpr(17);
                                    }
                                    break;
                                case 2:
                                    {
                                        localContext = new ColumnExprPrecedence2Context(
                                            new ColumnExprContext(parentContext, parentState),
                                        );
                                        this.pushNewRecursionContext(
                                            localContext,
                                            _startState,
                                            ClickHouseParser.RULE_columnExpr,
                                        );
                                        this.state = 1849;
                                        if (!this.precpred(this.context, 15)) {
                                            throw this.createFailedPredicateException(
                                                'this.precpred(this.context, 15)',
                                            );
                                        }
                                        this.state = 1850;
                                        _la = this.tokenStream.LA(1);
                                        if (
                                            !(
                                                ((_la - 204) & ~0x1f) === 0 &&
                                                ((1 << (_la - 204)) & 16387) !== 0
                                            )
                                        ) {
                                            this.errorHandler.recoverInline(this);
                                        } else {
                                            this.errorHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 1851;
                                        this.columnExpr(16);
                                    }
                                    break;
                                case 3:
                                    {
                                        localContext = new ColumnExprPrecedence3Context(
                                            new ColumnExprContext(parentContext, parentState),
                                        );
                                        this.pushNewRecursionContext(
                                            localContext,
                                            _startState,
                                            ClickHouseParser.RULE_columnExpr,
                                        );
                                        this.state = 1852;
                                        if (!this.precpred(this.context, 14)) {
                                            throw this.createFailedPredicateException(
                                                'this.precpred(this.context, 14)',
                                            );
                                        }
                                        this.state = 1871;
                                        this.errorHandler.sync(this);
                                        switch (
                                            this.interpreter.adaptivePredict(
                                                this.tokenStream,
                                                246,
                                                this.context,
                                            )
                                        ) {
                                            case 1:
                                                {
                                                    this.state = 1853;
                                                    this.match(ClickHouseParser.EQ_DOUBLE);
                                                }
                                                break;
                                            case 2:
                                                {
                                                    this.state = 1854;
                                                    this.match(ClickHouseParser.EQ_SINGLE);
                                                }
                                                break;
                                            case 3:
                                                {
                                                    this.state = 1855;
                                                    this.match(ClickHouseParser.NOT_EQ);
                                                }
                                                break;
                                            case 4:
                                                {
                                                    this.state = 1856;
                                                    this.match(ClickHouseParser.LE);
                                                }
                                                break;
                                            case 5:
                                                {
                                                    this.state = 1857;
                                                    this.match(ClickHouseParser.GE);
                                                }
                                                break;
                                            case 6:
                                                {
                                                    this.state = 1858;
                                                    this.match(ClickHouseParser.LT);
                                                }
                                                break;
                                            case 7:
                                                {
                                                    this.state = 1859;
                                                    this.match(ClickHouseParser.GT);
                                                }
                                                break;
                                            case 8:
                                                {
                                                    this.state = 1861;
                                                    this.errorHandler.sync(this);
                                                    _la = this.tokenStream.LA(1);
                                                    if (_la === 70) {
                                                        {
                                                            this.state = 1860;
                                                            this.match(ClickHouseParser.GLOBAL);
                                                        }
                                                    }

                                                    this.state = 1864;
                                                    this.errorHandler.sync(this);
                                                    _la = this.tokenStream.LA(1);
                                                    if (_la === 114) {
                                                        {
                                                            this.state = 1863;
                                                            this.match(ClickHouseParser.NOT);
                                                        }
                                                    }

                                                    this.state = 1866;
                                                    this.match(ClickHouseParser.IN);
                                                }
                                                break;
                                            case 9:
                                                {
                                                    this.state = 1868;
                                                    this.errorHandler.sync(this);
                                                    _la = this.tokenStream.LA(1);
                                                    if (_la === 114) {
                                                        {
                                                            this.state = 1867;
                                                            this.match(ClickHouseParser.NOT);
                                                        }
                                                    }

                                                    this.state = 1870;
                                                    _la = this.tokenStream.LA(1);
                                                    if (!(_la === 78 || _la === 97)) {
                                                        this.errorHandler.recoverInline(this);
                                                    } else {
                                                        this.errorHandler.reportMatch(this);
                                                        this.consume();
                                                    }
                                                }
                                                break;
                                        }
                                        this.state = 1873;
                                        this.columnExpr(15);
                                    }
                                    break;
                                case 4:
                                    {
                                        localContext = new ColumnExprAndContext(
                                            new ColumnExprContext(parentContext, parentState),
                                        );
                                        this.pushNewRecursionContext(
                                            localContext,
                                            _startState,
                                            ClickHouseParser.RULE_columnExpr,
                                        );
                                        this.state = 1874;
                                        if (!this.precpred(this.context, 11)) {
                                            throw this.createFailedPredicateException(
                                                'this.precpred(this.context, 11)',
                                            );
                                        }
                                        this.state = 1875;
                                        this.match(ClickHouseParser.AND);
                                        this.state = 1876;
                                        this.columnExpr(12);
                                    }
                                    break;
                                case 5:
                                    {
                                        localContext = new ColumnExprOrContext(
                                            new ColumnExprContext(parentContext, parentState),
                                        );
                                        this.pushNewRecursionContext(
                                            localContext,
                                            _startState,
                                            ClickHouseParser.RULE_columnExpr,
                                        );
                                        this.state = 1877;
                                        if (!this.precpred(this.context, 10)) {
                                            throw this.createFailedPredicateException(
                                                'this.precpred(this.context, 10)',
                                            );
                                        }
                                        this.state = 1878;
                                        this.match(ClickHouseParser.OR);
                                        this.state = 1879;
                                        this.columnExpr(11);
                                    }
                                    break;
                                case 6:
                                    {
                                        localContext = new ColumnExprBetweenContext(
                                            new ColumnExprContext(parentContext, parentState),
                                        );
                                        this.pushNewRecursionContext(
                                            localContext,
                                            _startState,
                                            ClickHouseParser.RULE_columnExpr,
                                        );
                                        this.state = 1880;
                                        if (!this.precpred(this.context, 9)) {
                                            throw this.createFailedPredicateException(
                                                'this.precpred(this.context, 9)',
                                            );
                                        }
                                        this.state = 1882;
                                        this.errorHandler.sync(this);
                                        _la = this.tokenStream.LA(1);
                                        if (_la === 114) {
                                            {
                                                this.state = 1881;
                                                this.match(ClickHouseParser.NOT);
                                            }
                                        }

                                        this.state = 1884;
                                        this.match(ClickHouseParser.BETWEEN);
                                        this.state = 1885;
                                        this.columnExpr(0);
                                        this.state = 1886;
                                        this.match(ClickHouseParser.AND);
                                        this.state = 1887;
                                        this.columnExpr(10);
                                    }
                                    break;
                                case 7:
                                    {
                                        localContext = new ColumnExprTernaryOpContext(
                                            new ColumnExprContext(parentContext, parentState),
                                        );
                                        this.pushNewRecursionContext(
                                            localContext,
                                            _startState,
                                            ClickHouseParser.RULE_columnExpr,
                                        );
                                        this.state = 1889;
                                        if (!this.precpred(this.context, 8)) {
                                            throw this.createFailedPredicateException(
                                                'this.precpred(this.context, 8)',
                                            );
                                        }
                                        this.state = 1890;
                                        this.match(ClickHouseParser.QUERY);
                                        this.state = 1891;
                                        this.columnExpr(0);
                                        this.state = 1892;
                                        this.match(ClickHouseParser.COLON);
                                        this.state = 1893;
                                        this.columnExpr(8);
                                    }
                                    break;
                                case 8:
                                    {
                                        localContext = new ColumnExprArrayAccessContext(
                                            new ColumnExprContext(parentContext, parentState),
                                        );
                                        this.pushNewRecursionContext(
                                            localContext,
                                            _startState,
                                            ClickHouseParser.RULE_columnExpr,
                                        );
                                        this.state = 1895;
                                        if (!this.precpred(this.context, 19)) {
                                            throw this.createFailedPredicateException(
                                                'this.precpred(this.context, 19)',
                                            );
                                        }
                                        this.state = 1896;
                                        this.match(ClickHouseParser.LBRACKET);
                                        this.state = 1897;
                                        this.columnExpr(0);
                                        this.state = 1898;
                                        this.match(ClickHouseParser.RBRACKET);
                                    }
                                    break;
                                case 9:
                                    {
                                        localContext = new ColumnExprTupleAccessContext(
                                            new ColumnExprContext(parentContext, parentState),
                                        );
                                        this.pushNewRecursionContext(
                                            localContext,
                                            _startState,
                                            ClickHouseParser.RULE_columnExpr,
                                        );
                                        this.state = 1900;
                                        if (!this.precpred(this.context, 18)) {
                                            throw this.createFailedPredicateException(
                                                'this.precpred(this.context, 18)',
                                            );
                                        }
                                        this.state = 1901;
                                        this.match(ClickHouseParser.DOT);
                                        this.state = 1902;
                                        this.match(ClickHouseParser.DECIMAL_LITERAL);
                                    }
                                    break;
                                case 10:
                                    {
                                        localContext = new ColumnExprIsNullContext(
                                            new ColumnExprContext(parentContext, parentState),
                                        );
                                        this.pushNewRecursionContext(
                                            localContext,
                                            _startState,
                                            ClickHouseParser.RULE_columnExpr,
                                        );
                                        this.state = 1903;
                                        if (!this.precpred(this.context, 13)) {
                                            throw this.createFailedPredicateException(
                                                'this.precpred(this.context, 13)',
                                            );
                                        }
                                        this.state = 1904;
                                        this.match(ClickHouseParser.IS);
                                        this.state = 1906;
                                        this.errorHandler.sync(this);
                                        _la = this.tokenStream.LA(1);
                                        if (_la === 114) {
                                            {
                                                this.state = 1905;
                                                this.match(ClickHouseParser.NOT);
                                            }
                                        }

                                        this.state = 1908;
                                        this.match(ClickHouseParser.NULL_SQL);
                                    }
                                    break;
                                case 11:
                                    {
                                        localContext = new ColumnExprAliasContext(
                                            new ColumnExprContext(parentContext, parentState),
                                        );
                                        this.pushNewRecursionContext(
                                            localContext,
                                            _startState,
                                            ClickHouseParser.RULE_columnExpr,
                                        );
                                        this.state = 1909;
                                        if (!this.precpred(this.context, 7)) {
                                            throw this.createFailedPredicateException(
                                                'this.precpred(this.context, 7)',
                                            );
                                        }
                                        this.state = 1913;
                                        this.errorHandler.sync(this);
                                        switch (this.tokenStream.LA(1)) {
                                            case ClickHouseParser.DATE:
                                            case ClickHouseParser.FIRST:
                                            case ClickHouseParser.ID:
                                            case ClickHouseParser.KEY:
                                            case ClickHouseParser.IDENTIFIER:
                                                {
                                                    this.state = 1910;
                                                    this.alias();
                                                }
                                                break;
                                            case ClickHouseParser.AS:
                                                {
                                                    this.state = 1911;
                                                    this.match(ClickHouseParser.AS);
                                                    this.state = 1912;
                                                    this.identifier();
                                                }
                                                break;
                                            default:
                                                throw new antlr.NoViableAltException(this);
                                        }
                                    }
                                    break;
                            }
                        }
                    }
                    this.state = 1919;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(
                        this.tokenStream,
                        251,
                        this.context,
                    );
                }
            }
        } catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.unrollRecursionContexts(parentContext);
        }
        return localContext;
    }
    public columnArgList(): ColumnArgListContext {
        let localContext = new ColumnArgListContext(this.context, this.state);
        this.enterRule(localContext, 198, ClickHouseParser.RULE_columnArgList);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1920;
                this.columnArgExpr();
                this.state = 1925;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 203) {
                    {
                        {
                            this.state = 1921;
                            this.match(ClickHouseParser.COMMA);
                            this.state = 1922;
                            this.columnArgExpr();
                        }
                    }
                    this.state = 1927;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
            }
        } catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localContext;
    }
    public columnArgExpr(): ColumnArgExprContext {
        let localContext = new ColumnArgExprContext(this.context, this.state);
        this.enterRule(localContext, 200, ClickHouseParser.RULE_columnArgExpr);
        try {
            this.state = 1930;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 253, this.context)) {
                case 1:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 1928;
                        this.columnLambdaExpr();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 1929;
                        this.columnExpr(0);
                    }
                    break;
            }
        } catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localContext;
    }
    public columnLambdaExpr(): ColumnLambdaExprContext {
        let localContext = new ColumnLambdaExprContext(this.context, this.state);
        this.enterRule(localContext, 202, ClickHouseParser.RULE_columnLambdaExpr);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1951;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                    case ClickHouseParser.LPAREN:
                        {
                            this.state = 1932;
                            this.match(ClickHouseParser.LPAREN);
                            this.state = 1933;
                            this.identifier();
                            this.state = 1938;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                            while (_la === 203) {
                                {
                                    {
                                        this.state = 1934;
                                        this.match(ClickHouseParser.COMMA);
                                        this.state = 1935;
                                        this.identifier();
                                    }
                                }
                                this.state = 1940;
                                this.errorHandler.sync(this);
                                _la = this.tokenStream.LA(1);
                            }
                            this.state = 1941;
                            this.match(ClickHouseParser.RPAREN);
                        }
                        break;
                    case ClickHouseParser.AFTER:
                    case ClickHouseParser.ALIAS:
                    case ClickHouseParser.ALL:
                    case ClickHouseParser.ALTER:
                    case ClickHouseParser.AND:
                    case ClickHouseParser.ANTI:
                    case ClickHouseParser.ANY:
                    case ClickHouseParser.ARRAY:
                    case ClickHouseParser.AS:
                    case ClickHouseParser.ASCENDING:
                    case ClickHouseParser.ASOF:
                    case ClickHouseParser.AST:
                    case ClickHouseParser.ASYNC:
                    case ClickHouseParser.ATTACH:
                    case ClickHouseParser.BETWEEN:
                    case ClickHouseParser.BOTH:
                    case ClickHouseParser.BY:
                    case ClickHouseParser.CASE:
                    case ClickHouseParser.CAST:
                    case ClickHouseParser.CHECK:
                    case ClickHouseParser.CLEAR:
                    case ClickHouseParser.CLUSTER:
                    case ClickHouseParser.CODEC:
                    case ClickHouseParser.COLLATE:
                    case ClickHouseParser.COLUMN:
                    case ClickHouseParser.COMMENT:
                    case ClickHouseParser.CONSTRAINT:
                    case ClickHouseParser.CREATE:
                    case ClickHouseParser.CROSS:
                    case ClickHouseParser.CUBE:
                    case ClickHouseParser.CURRENT:
                    case ClickHouseParser.DATABASE:
                    case ClickHouseParser.DATABASES:
                    case ClickHouseParser.DATE:
                    case ClickHouseParser.DAY:
                    case ClickHouseParser.DEDUPLICATE:
                    case ClickHouseParser.DEFAULT:
                    case ClickHouseParser.DELAY:
                    case ClickHouseParser.DELETE:
                    case ClickHouseParser.DESC:
                    case ClickHouseParser.DESCENDING:
                    case ClickHouseParser.DESCRIBE:
                    case ClickHouseParser.DETACH:
                    case ClickHouseParser.DICTIONARIES:
                    case ClickHouseParser.DICTIONARY:
                    case ClickHouseParser.DISK:
                    case ClickHouseParser.DISTINCT:
                    case ClickHouseParser.DISTRIBUTED:
                    case ClickHouseParser.DROP:
                    case ClickHouseParser.ELSE:
                    case ClickHouseParser.END:
                    case ClickHouseParser.ENGINE:
                    case ClickHouseParser.EVENTS:
                    case ClickHouseParser.EXISTS:
                    case ClickHouseParser.EXPLAIN:
                    case ClickHouseParser.EXPRESSION:
                    case ClickHouseParser.EXTRACT:
                    case ClickHouseParser.FETCHES:
                    case ClickHouseParser.FINAL:
                    case ClickHouseParser.FIRST:
                    case ClickHouseParser.FLUSH:
                    case ClickHouseParser.FOLLOWING:
                    case ClickHouseParser.FOR:
                    case ClickHouseParser.FORMAT:
                    case ClickHouseParser.FREEZE:
                    case ClickHouseParser.FROM:
                    case ClickHouseParser.FULL:
                    case ClickHouseParser.FUNCTION:
                    case ClickHouseParser.GLOBAL:
                    case ClickHouseParser.GRANULARITY:
                    case ClickHouseParser.GROUP:
                    case ClickHouseParser.HAVING:
                    case ClickHouseParser.HIERARCHICAL:
                    case ClickHouseParser.HOUR:
                    case ClickHouseParser.ID:
                    case ClickHouseParser.IF:
                    case ClickHouseParser.ILIKE:
                    case ClickHouseParser.IN:
                    case ClickHouseParser.INDEX:
                    case ClickHouseParser.INJECTIVE:
                    case ClickHouseParser.INNER:
                    case ClickHouseParser.INSERT:
                    case ClickHouseParser.INTERVAL:
                    case ClickHouseParser.INTO:
                    case ClickHouseParser.IS:
                    case ClickHouseParser.IS_OBJECT_ID:
                    case ClickHouseParser.JOIN:
                    case ClickHouseParser.KEY:
                    case ClickHouseParser.KILL:
                    case ClickHouseParser.LAST:
                    case ClickHouseParser.LAYOUT:
                    case ClickHouseParser.LEADING:
                    case ClickHouseParser.LEFT:
                    case ClickHouseParser.LIFETIME:
                    case ClickHouseParser.LIKE:
                    case ClickHouseParser.LIMIT:
                    case ClickHouseParser.LIVE:
                    case ClickHouseParser.LOCAL:
                    case ClickHouseParser.LOGS:
                    case ClickHouseParser.MATERIALIZE:
                    case ClickHouseParser.MATERIALIZED:
                    case ClickHouseParser.MAX:
                    case ClickHouseParser.MERGES:
                    case ClickHouseParser.MIN:
                    case ClickHouseParser.MINUTE:
                    case ClickHouseParser.MODIFY:
                    case ClickHouseParser.MONTH:
                    case ClickHouseParser.MOVE:
                    case ClickHouseParser.MUTATION:
                    case ClickHouseParser.NO:
                    case ClickHouseParser.NOT:
                    case ClickHouseParser.NULLS:
                    case ClickHouseParser.OFFSET:
                    case ClickHouseParser.ON:
                    case ClickHouseParser.OPTIMIZE:
                    case ClickHouseParser.OR:
                    case ClickHouseParser.ORDER:
                    case ClickHouseParser.OUTER:
                    case ClickHouseParser.OUTFILE:
                    case ClickHouseParser.OVER:
                    case ClickHouseParser.PARTITION:
                    case ClickHouseParser.POPULATE:
                    case ClickHouseParser.PRECEDING:
                    case ClickHouseParser.PREWHERE:
                    case ClickHouseParser.PRIMARY:
                    case ClickHouseParser.QUARTER:
                    case ClickHouseParser.RANGE:
                    case ClickHouseParser.RELOAD:
                    case ClickHouseParser.REMOVE:
                    case ClickHouseParser.RENAME:
                    case ClickHouseParser.REPLACE:
                    case ClickHouseParser.REPLICA:
                    case ClickHouseParser.REPLICATED:
                    case ClickHouseParser.RIGHT:
                    case ClickHouseParser.ROLLUP:
                    case ClickHouseParser.ROW:
                    case ClickHouseParser.ROWS:
                    case ClickHouseParser.SAMPLE:
                    case ClickHouseParser.SECOND:
                    case ClickHouseParser.SELECT:
                    case ClickHouseParser.SEMI:
                    case ClickHouseParser.SENDS:
                    case ClickHouseParser.SET:
                    case ClickHouseParser.SETTINGS:
                    case ClickHouseParser.SHOW:
                    case ClickHouseParser.SOURCE:
                    case ClickHouseParser.START:
                    case ClickHouseParser.STOP:
                    case ClickHouseParser.SUBSTRING:
                    case ClickHouseParser.SYNC:
                    case ClickHouseParser.SYNTAX:
                    case ClickHouseParser.SYSTEM:
                    case ClickHouseParser.TABLE:
                    case ClickHouseParser.TABLES:
                    case ClickHouseParser.TEMPORARY:
                    case ClickHouseParser.TEST:
                    case ClickHouseParser.THEN:
                    case ClickHouseParser.TIES:
                    case ClickHouseParser.TIMEOUT:
                    case ClickHouseParser.TIMESTAMP:
                    case ClickHouseParser.TO:
                    case ClickHouseParser.TOP:
                    case ClickHouseParser.TOTALS:
                    case ClickHouseParser.TRAILING:
                    case ClickHouseParser.TRIM:
                    case ClickHouseParser.TRUNCATE:
                    case ClickHouseParser.TTL:
                    case ClickHouseParser.TYPE:
                    case ClickHouseParser.UNBOUNDED:
                    case ClickHouseParser.UNION:
                    case ClickHouseParser.UPDATE:
                    case ClickHouseParser.USE:
                    case ClickHouseParser.USING:
                    case ClickHouseParser.UUID:
                    case ClickHouseParser.VALUES:
                    case ClickHouseParser.VIEW:
                    case ClickHouseParser.VOLUME:
                    case ClickHouseParser.WATCH:
                    case ClickHouseParser.WEEK:
                    case ClickHouseParser.WHEN:
                    case ClickHouseParser.WHERE:
                    case ClickHouseParser.WINDOW:
                    case ClickHouseParser.WITH:
                    case ClickHouseParser.YEAR:
                    case ClickHouseParser.JSON_FALSE:
                    case ClickHouseParser.JSON_TRUE:
                    case ClickHouseParser.IDENTIFIER:
                        {
                            this.state = 1943;
                            this.identifier();
                            this.state = 1948;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                            while (_la === 203) {
                                {
                                    {
                                        this.state = 1944;
                                        this.match(ClickHouseParser.COMMA);
                                        this.state = 1945;
                                        this.identifier();
                                    }
                                }
                                this.state = 1950;
                                this.errorHandler.sync(this);
                                _la = this.tokenStream.LA(1);
                            }
                        }
                        break;
                    default:
                        throw new antlr.NoViableAltException(this);
                }
                this.state = 1953;
                this.match(ClickHouseParser.ARROW);
                this.state = 1954;
                this.columnExpr(0);
            }
        } catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localContext;
    }
    public columnIdentifier(): ColumnIdentifierContext {
        let localContext = new ColumnIdentifierContext(this.context, this.state);
        this.enterRule(localContext, 204, ClickHouseParser.RULE_columnIdentifier);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1959;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 257, this.context)) {
                    case 1:
                        {
                            this.state = 1956;
                            this.tableIdentifier();
                            this.state = 1957;
                            this.match(ClickHouseParser.DOT);
                        }
                        break;
                }
                this.state = 1961;
                this.nestedIdentifier();
            }
        } catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localContext;
    }
    public nestedIdentifier(): NestedIdentifierContext {
        let localContext = new NestedIdentifierContext(this.context, this.state);
        this.enterRule(localContext, 206, ClickHouseParser.RULE_nestedIdentifier);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1963;
                this.identifier();
                this.state = 1966;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 258, this.context)) {
                    case 1:
                        {
                            this.state = 1964;
                            this.match(ClickHouseParser.DOT);
                            this.state = 1965;
                            this.identifier();
                        }
                        break;
                }
            }
        } catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localContext;
    }

    public tableExpr(): TableExprContext;
    public tableExpr(_p: number): TableExprContext;
    public tableExpr(_p?: number): TableExprContext {
        if (_p === undefined) {
            _p = 0;
        }

        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new TableExprContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 208;
        this.enterRecursionRule(localContext, 208, ClickHouseParser.RULE_tableExpr, _p);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1975;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 259, this.context)) {
                    case 1:
                        {
                            localContext = new TableExprIdentifierContext(localContext);
                            this.context = localContext;
                            previousContext = localContext;

                            this.state = 1969;
                            this.tableIdentifier();
                        }
                        break;
                    case 2:
                        {
                            localContext = new TableExprFunctionContext(localContext);
                            this.context = localContext;
                            previousContext = localContext;
                            this.state = 1970;
                            this.tableFunctionExpr();
                        }
                        break;
                    case 3:
                        {
                            localContext = new TableExprSubqueryContext(localContext);
                            this.context = localContext;
                            previousContext = localContext;
                            this.state = 1971;
                            this.match(ClickHouseParser.LPAREN);
                            this.state = 1972;
                            this.selectUnionStmt();
                            this.state = 1973;
                            this.match(ClickHouseParser.RPAREN);
                        }
                        break;
                }
                this.context!.stop = this.tokenStream.LT(-1);
                this.state = 1985;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 261, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        previousContext = localContext;
                        {
                            {
                                localContext = new TableExprAliasContext(
                                    new TableExprContext(parentContext, parentState),
                                );
                                this.pushNewRecursionContext(
                                    localContext,
                                    _startState,
                                    ClickHouseParser.RULE_tableExpr,
                                );
                                this.state = 1977;
                                if (!this.precpred(this.context, 1)) {
                                    throw this.createFailedPredicateException(
                                        'this.precpred(this.context, 1)',
                                    );
                                }
                                this.state = 1981;
                                this.errorHandler.sync(this);
                                switch (this.tokenStream.LA(1)) {
                                    case ClickHouseParser.DATE:
                                    case ClickHouseParser.FIRST:
                                    case ClickHouseParser.ID:
                                    case ClickHouseParser.KEY:
                                    case ClickHouseParser.IDENTIFIER:
                                        {
                                            this.state = 1978;
                                            this.alias();
                                        }
                                        break;
                                    case ClickHouseParser.AS:
                                        {
                                            this.state = 1979;
                                            this.match(ClickHouseParser.AS);
                                            this.state = 1980;
                                            this.identifier();
                                        }
                                        break;
                                    default:
                                        throw new antlr.NoViableAltException(this);
                                }
                            }
                        }
                    }
                    this.state = 1987;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(
                        this.tokenStream,
                        261,
                        this.context,
                    );
                }
            }
        } catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.unrollRecursionContexts(parentContext);
        }
        return localContext;
    }
    public tableFunctionExpr(): TableFunctionExprContext {
        let localContext = new TableFunctionExprContext(this.context, this.state);
        this.enterRule(localContext, 210, ClickHouseParser.RULE_tableFunctionExpr);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1988;
                this.identifier();
                this.state = 1989;
                this.match(ClickHouseParser.LPAREN);
                this.state = 1991;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (
                    ((_la & ~0x1f) === 0 && ((1 << _la) & 4294967292) !== 0) ||
                    (((_la - 32) & ~0x1f) === 0 && ((1 << (_la - 32)) & 4294967295) !== 0) ||
                    (((_la - 64) & ~0x1f) === 0 && ((1 << (_la - 64)) & 4294967295) !== 0) ||
                    (((_la - 96) & ~0x1f) === 0 && ((1 << (_la - 96)) & 4294967295) !== 0) ||
                    (((_la - 128) & ~0x1f) === 0 && ((1 << (_la - 128)) & 4294967291) !== 0) ||
                    (((_la - 160) & ~0x1f) === 0 && ((1 << (_la - 160)) & 4294967295) !== 0) ||
                    (((_la - 192) & ~0x1f) === 0 && ((1 << (_la - 192)) & 67133503) !== 0)
                ) {
                    {
                        this.state = 1990;
                        this.tableArgList();
                    }
                }

                this.state = 1993;
                this.match(ClickHouseParser.RPAREN);
            }
        } catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localContext;
    }
    public tableIdentifier(): TableIdentifierContext {
        let localContext = new TableIdentifierContext(this.context, this.state);
        this.enterRule(localContext, 212, ClickHouseParser.RULE_tableIdentifier);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1998;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 263, this.context)) {
                    case 1:
                        {
                            this.state = 1995;
                            this.databaseIdentifier();
                            this.state = 1996;
                            this.match(ClickHouseParser.DOT);
                        }
                        break;
                }
                this.state = 2000;
                this.identifier();
            }
        } catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localContext;
    }
    public tableArgList(): TableArgListContext {
        let localContext = new TableArgListContext(this.context, this.state);
        this.enterRule(localContext, 214, ClickHouseParser.RULE_tableArgList);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 2002;
                this.tableArgExpr();
                this.state = 2007;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 203) {
                    {
                        {
                            this.state = 2003;
                            this.match(ClickHouseParser.COMMA);
                            this.state = 2004;
                            this.tableArgExpr();
                        }
                    }
                    this.state = 2009;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
            }
        } catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localContext;
    }
    public tableArgExpr(): TableArgExprContext {
        let localContext = new TableArgExprContext(this.context, this.state);
        this.enterRule(localContext, 216, ClickHouseParser.RULE_tableArgExpr);
        try {
            this.state = 2013;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 265, this.context)) {
                case 1:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 2010;
                        this.nestedIdentifier();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 2011;
                        this.tableFunctionExpr();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(localContext, 3);
                    {
                        this.state = 2012;
                        this.literal();
                    }
                    break;
            }
        } catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localContext;
    }
    public databaseIdentifier(): DatabaseIdentifierContext {
        let localContext = new DatabaseIdentifierContext(this.context, this.state);
        this.enterRule(localContext, 218, ClickHouseParser.RULE_databaseIdentifier);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 2015;
                this.identifier();
            }
        } catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localContext;
    }
    public floatingLiteral(): FloatingLiteralContext {
        let localContext = new FloatingLiteralContext(this.context, this.state);
        this.enterRule(localContext, 220, ClickHouseParser.RULE_floatingLiteral);
        let _la: number;
        try {
            this.state = 2025;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
                case ClickHouseParser.FLOATING_LITERAL:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 2017;
                        this.match(ClickHouseParser.FLOATING_LITERAL);
                    }
                    break;
                case ClickHouseParser.DOT:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 2018;
                        this.match(ClickHouseParser.DOT);
                        this.state = 2019;
                        _la = this.tokenStream.LA(1);
                        if (!(_la === 194 || _la === 195)) {
                            this.errorHandler.recoverInline(this);
                        } else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                    }
                    break;
                case ClickHouseParser.DECIMAL_LITERAL:
                    this.enterOuterAlt(localContext, 3);
                    {
                        this.state = 2020;
                        this.match(ClickHouseParser.DECIMAL_LITERAL);
                        this.state = 2021;
                        this.match(ClickHouseParser.DOT);
                        this.state = 2023;
                        this.errorHandler.sync(this);
                        switch (
                            this.interpreter.adaptivePredict(this.tokenStream, 266, this.context)
                        ) {
                            case 1:
                                {
                                    this.state = 2022;
                                    _la = this.tokenStream.LA(1);
                                    if (!(_la === 194 || _la === 195)) {
                                        this.errorHandler.recoverInline(this);
                                    } else {
                                        this.errorHandler.reportMatch(this);
                                        this.consume();
                                    }
                                }
                                break;
                        }
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
            }
        } catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localContext;
    }
    public numberLiteral(): NumberLiteralContext {
        let localContext = new NumberLiteralContext(this.context, this.state);
        this.enterRule(localContext, 222, ClickHouseParser.RULE_numberLiteral);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 2028;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 205 || _la === 218) {
                    {
                        this.state = 2027;
                        _la = this.tokenStream.LA(1);
                        if (!(_la === 205 || _la === 218)) {
                            this.errorHandler.recoverInline(this);
                        } else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                    }
                }

                this.state = 2036;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 269, this.context)) {
                    case 1:
                        {
                            this.state = 2030;
                            this.floatingLiteral();
                        }
                        break;
                    case 2:
                        {
                            this.state = 2031;
                            this.match(ClickHouseParser.OCTAL_LITERAL);
                        }
                        break;
                    case 3:
                        {
                            this.state = 2032;
                            this.match(ClickHouseParser.DECIMAL_LITERAL);
                        }
                        break;
                    case 4:
                        {
                            this.state = 2033;
                            this.match(ClickHouseParser.HEXADECIMAL_LITERAL);
                        }
                        break;
                    case 5:
                        {
                            this.state = 2034;
                            this.match(ClickHouseParser.INF);
                        }
                        break;
                    case 6:
                        {
                            this.state = 2035;
                            this.match(ClickHouseParser.NAN_SQL);
                        }
                        break;
                }
            }
        } catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localContext;
    }
    public literal(): LiteralContext {
        let localContext = new LiteralContext(this.context, this.state);
        this.enterRule(localContext, 224, ClickHouseParser.RULE_literal);
        try {
            this.state = 2041;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
                case ClickHouseParser.INF:
                case ClickHouseParser.NAN_SQL:
                case ClickHouseParser.FLOATING_LITERAL:
                case ClickHouseParser.OCTAL_LITERAL:
                case ClickHouseParser.DECIMAL_LITERAL:
                case ClickHouseParser.HEXADECIMAL_LITERAL:
                case ClickHouseParser.DASH:
                case ClickHouseParser.DOT:
                case ClickHouseParser.PLUS:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 2038;
                        this.numberLiteral();
                    }
                    break;
                case ClickHouseParser.STRING_LITERAL:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 2039;
                        this.match(ClickHouseParser.STRING_LITERAL);
                    }
                    break;
                case ClickHouseParser.NULL_SQL:
                    this.enterOuterAlt(localContext, 3);
                    {
                        this.state = 2040;
                        this.match(ClickHouseParser.NULL_SQL);
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
            }
        } catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localContext;
    }
    public interval(): IntervalContext {
        let localContext = new IntervalContext(this.context, this.state);
        this.enterRule(localContext, 226, ClickHouseParser.RULE_interval);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 2043;
                _la = this.tokenStream.LA(1);
                if (
                    !(
                        _la === 36 ||
                        _la === 75 ||
                        (((_la - 107) & ~0x1f) === 0 && ((1 << (_la - 107)) & 16777221) !== 0) ||
                        _la === 144 ||
                        _la === 184 ||
                        _la === 189
                    )
                ) {
                    this.errorHandler.recoverInline(this);
                } else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
            }
        } catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localContext;
    }
    public keyword(): KeywordContext {
        let localContext = new KeywordContext(this.context, this.state);
        this.enterRule(localContext, 228, ClickHouseParser.RULE_keyword);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 2045;
                _la = this.tokenStream.LA(1);
                if (
                    !(
                        ((_la & ~0x1f) === 0 && ((1 << _la) & 4294967292) !== 0) ||
                        (((_la - 32) & ~0x1f) === 0 && ((1 << (_la - 32)) & 4294967279) !== 0) ||
                        (((_la - 64) & ~0x1f) === 0 && ((1 << (_la - 64)) & 4294834175) !== 0) ||
                        (((_la - 96) & ~0x1f) === 0 && ((1 << (_la - 96)) & 4294367231) !== 0) ||
                        (((_la - 128) & ~0x1f) === 0 && ((1 << (_la - 128)) & 4294901747) !== 0) ||
                        (((_la - 160) & ~0x1f) === 0 && ((1 << (_la - 160)) & 3741319167) !== 0)
                    )
                ) {
                    this.errorHandler.recoverInline(this);
                } else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
            }
        } catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localContext;
    }
    public keywordForAlias(): KeywordForAliasContext {
        let localContext = new KeywordForAliasContext(this.context, this.state);
        this.enterRule(localContext, 230, ClickHouseParser.RULE_keywordForAlias);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 2047;
                _la = this.tokenStream.LA(1);
                if (!(_la === 35 || _la === 61 || _la === 76 || _la === 90)) {
                    this.errorHandler.recoverInline(this);
                } else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
            }
        } catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localContext;
    }
    public alias(): AliasContext {
        let localContext = new AliasContext(this.context, this.state);
        this.enterRule(localContext, 232, ClickHouseParser.RULE_alias);
        try {
            this.state = 2051;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
                case ClickHouseParser.IDENTIFIER:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 2049;
                        this.match(ClickHouseParser.IDENTIFIER);
                    }
                    break;
                case ClickHouseParser.DATE:
                case ClickHouseParser.FIRST:
                case ClickHouseParser.ID:
                case ClickHouseParser.KEY:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 2050;
                        this.keywordForAlias();
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
            }
        } catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localContext;
    }
    public identifier(): IdentifierContext {
        let localContext = new IdentifierContext(this.context, this.state);
        this.enterRule(localContext, 234, ClickHouseParser.RULE_identifier);
        try {
            this.state = 2056;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
                case ClickHouseParser.IDENTIFIER:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 2053;
                        this.match(ClickHouseParser.IDENTIFIER);
                    }
                    break;
                case ClickHouseParser.DAY:
                case ClickHouseParser.HOUR:
                case ClickHouseParser.MINUTE:
                case ClickHouseParser.MONTH:
                case ClickHouseParser.QUARTER:
                case ClickHouseParser.SECOND:
                case ClickHouseParser.WEEK:
                case ClickHouseParser.YEAR:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 2054;
                        this.interval();
                    }
                    break;
                case ClickHouseParser.AFTER:
                case ClickHouseParser.ALIAS:
                case ClickHouseParser.ALL:
                case ClickHouseParser.ALTER:
                case ClickHouseParser.AND:
                case ClickHouseParser.ANTI:
                case ClickHouseParser.ANY:
                case ClickHouseParser.ARRAY:
                case ClickHouseParser.AS:
                case ClickHouseParser.ASCENDING:
                case ClickHouseParser.ASOF:
                case ClickHouseParser.AST:
                case ClickHouseParser.ASYNC:
                case ClickHouseParser.ATTACH:
                case ClickHouseParser.BETWEEN:
                case ClickHouseParser.BOTH:
                case ClickHouseParser.BY:
                case ClickHouseParser.CASE:
                case ClickHouseParser.CAST:
                case ClickHouseParser.CHECK:
                case ClickHouseParser.CLEAR:
                case ClickHouseParser.CLUSTER:
                case ClickHouseParser.CODEC:
                case ClickHouseParser.COLLATE:
                case ClickHouseParser.COLUMN:
                case ClickHouseParser.COMMENT:
                case ClickHouseParser.CONSTRAINT:
                case ClickHouseParser.CREATE:
                case ClickHouseParser.CROSS:
                case ClickHouseParser.CUBE:
                case ClickHouseParser.CURRENT:
                case ClickHouseParser.DATABASE:
                case ClickHouseParser.DATABASES:
                case ClickHouseParser.DATE:
                case ClickHouseParser.DEDUPLICATE:
                case ClickHouseParser.DEFAULT:
                case ClickHouseParser.DELAY:
                case ClickHouseParser.DELETE:
                case ClickHouseParser.DESC:
                case ClickHouseParser.DESCENDING:
                case ClickHouseParser.DESCRIBE:
                case ClickHouseParser.DETACH:
                case ClickHouseParser.DICTIONARIES:
                case ClickHouseParser.DICTIONARY:
                case ClickHouseParser.DISK:
                case ClickHouseParser.DISTINCT:
                case ClickHouseParser.DISTRIBUTED:
                case ClickHouseParser.DROP:
                case ClickHouseParser.ELSE:
                case ClickHouseParser.END:
                case ClickHouseParser.ENGINE:
                case ClickHouseParser.EVENTS:
                case ClickHouseParser.EXISTS:
                case ClickHouseParser.EXPLAIN:
                case ClickHouseParser.EXPRESSION:
                case ClickHouseParser.EXTRACT:
                case ClickHouseParser.FETCHES:
                case ClickHouseParser.FINAL:
                case ClickHouseParser.FIRST:
                case ClickHouseParser.FLUSH:
                case ClickHouseParser.FOLLOWING:
                case ClickHouseParser.FOR:
                case ClickHouseParser.FORMAT:
                case ClickHouseParser.FREEZE:
                case ClickHouseParser.FROM:
                case ClickHouseParser.FULL:
                case ClickHouseParser.FUNCTION:
                case ClickHouseParser.GLOBAL:
                case ClickHouseParser.GRANULARITY:
                case ClickHouseParser.GROUP:
                case ClickHouseParser.HAVING:
                case ClickHouseParser.HIERARCHICAL:
                case ClickHouseParser.ID:
                case ClickHouseParser.IF:
                case ClickHouseParser.ILIKE:
                case ClickHouseParser.IN:
                case ClickHouseParser.INDEX:
                case ClickHouseParser.INJECTIVE:
                case ClickHouseParser.INNER:
                case ClickHouseParser.INSERT:
                case ClickHouseParser.INTERVAL:
                case ClickHouseParser.INTO:
                case ClickHouseParser.IS:
                case ClickHouseParser.IS_OBJECT_ID:
                case ClickHouseParser.JOIN:
                case ClickHouseParser.KEY:
                case ClickHouseParser.KILL:
                case ClickHouseParser.LAST:
                case ClickHouseParser.LAYOUT:
                case ClickHouseParser.LEADING:
                case ClickHouseParser.LEFT:
                case ClickHouseParser.LIFETIME:
                case ClickHouseParser.LIKE:
                case ClickHouseParser.LIMIT:
                case ClickHouseParser.LIVE:
                case ClickHouseParser.LOCAL:
                case ClickHouseParser.LOGS:
                case ClickHouseParser.MATERIALIZE:
                case ClickHouseParser.MATERIALIZED:
                case ClickHouseParser.MAX:
                case ClickHouseParser.MERGES:
                case ClickHouseParser.MIN:
                case ClickHouseParser.MODIFY:
                case ClickHouseParser.MOVE:
                case ClickHouseParser.MUTATION:
                case ClickHouseParser.NO:
                case ClickHouseParser.NOT:
                case ClickHouseParser.NULLS:
                case ClickHouseParser.OFFSET:
                case ClickHouseParser.ON:
                case ClickHouseParser.OPTIMIZE:
                case ClickHouseParser.OR:
                case ClickHouseParser.ORDER:
                case ClickHouseParser.OUTER:
                case ClickHouseParser.OUTFILE:
                case ClickHouseParser.OVER:
                case ClickHouseParser.PARTITION:
                case ClickHouseParser.POPULATE:
                case ClickHouseParser.PRECEDING:
                case ClickHouseParser.PREWHERE:
                case ClickHouseParser.PRIMARY:
                case ClickHouseParser.RANGE:
                case ClickHouseParser.RELOAD:
                case ClickHouseParser.REMOVE:
                case ClickHouseParser.RENAME:
                case ClickHouseParser.REPLACE:
                case ClickHouseParser.REPLICA:
                case ClickHouseParser.REPLICATED:
                case ClickHouseParser.RIGHT:
                case ClickHouseParser.ROLLUP:
                case ClickHouseParser.ROW:
                case ClickHouseParser.ROWS:
                case ClickHouseParser.SAMPLE:
                case ClickHouseParser.SELECT:
                case ClickHouseParser.SEMI:
                case ClickHouseParser.SENDS:
                case ClickHouseParser.SET:
                case ClickHouseParser.SETTINGS:
                case ClickHouseParser.SHOW:
                case ClickHouseParser.SOURCE:
                case ClickHouseParser.START:
                case ClickHouseParser.STOP:
                case ClickHouseParser.SUBSTRING:
                case ClickHouseParser.SYNC:
                case ClickHouseParser.SYNTAX:
                case ClickHouseParser.SYSTEM:
                case ClickHouseParser.TABLE:
                case ClickHouseParser.TABLES:
                case ClickHouseParser.TEMPORARY:
                case ClickHouseParser.TEST:
                case ClickHouseParser.THEN:
                case ClickHouseParser.TIES:
                case ClickHouseParser.TIMEOUT:
                case ClickHouseParser.TIMESTAMP:
                case ClickHouseParser.TO:
                case ClickHouseParser.TOP:
                case ClickHouseParser.TOTALS:
                case ClickHouseParser.TRAILING:
                case ClickHouseParser.TRIM:
                case ClickHouseParser.TRUNCATE:
                case ClickHouseParser.TTL:
                case ClickHouseParser.TYPE:
                case ClickHouseParser.UNBOUNDED:
                case ClickHouseParser.UNION:
                case ClickHouseParser.UPDATE:
                case ClickHouseParser.USE:
                case ClickHouseParser.USING:
                case ClickHouseParser.UUID:
                case ClickHouseParser.VALUES:
                case ClickHouseParser.VIEW:
                case ClickHouseParser.VOLUME:
                case ClickHouseParser.WATCH:
                case ClickHouseParser.WHEN:
                case ClickHouseParser.WHERE:
                case ClickHouseParser.WINDOW:
                case ClickHouseParser.WITH:
                case ClickHouseParser.JSON_FALSE:
                case ClickHouseParser.JSON_TRUE:
                    this.enterOuterAlt(localContext, 3);
                    {
                        this.state = 2055;
                        this.keyword();
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
            }
        } catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localContext;
    }
    public identifierOrNull(): IdentifierOrNullContext {
        let localContext = new IdentifierOrNullContext(this.context, this.state);
        this.enterRule(localContext, 236, ClickHouseParser.RULE_identifierOrNull);
        try {
            this.state = 2060;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
                case ClickHouseParser.AFTER:
                case ClickHouseParser.ALIAS:
                case ClickHouseParser.ALL:
                case ClickHouseParser.ALTER:
                case ClickHouseParser.AND:
                case ClickHouseParser.ANTI:
                case ClickHouseParser.ANY:
                case ClickHouseParser.ARRAY:
                case ClickHouseParser.AS:
                case ClickHouseParser.ASCENDING:
                case ClickHouseParser.ASOF:
                case ClickHouseParser.AST:
                case ClickHouseParser.ASYNC:
                case ClickHouseParser.ATTACH:
                case ClickHouseParser.BETWEEN:
                case ClickHouseParser.BOTH:
                case ClickHouseParser.BY:
                case ClickHouseParser.CASE:
                case ClickHouseParser.CAST:
                case ClickHouseParser.CHECK:
                case ClickHouseParser.CLEAR:
                case ClickHouseParser.CLUSTER:
                case ClickHouseParser.CODEC:
                case ClickHouseParser.COLLATE:
                case ClickHouseParser.COLUMN:
                case ClickHouseParser.COMMENT:
                case ClickHouseParser.CONSTRAINT:
                case ClickHouseParser.CREATE:
                case ClickHouseParser.CROSS:
                case ClickHouseParser.CUBE:
                case ClickHouseParser.CURRENT:
                case ClickHouseParser.DATABASE:
                case ClickHouseParser.DATABASES:
                case ClickHouseParser.DATE:
                case ClickHouseParser.DAY:
                case ClickHouseParser.DEDUPLICATE:
                case ClickHouseParser.DEFAULT:
                case ClickHouseParser.DELAY:
                case ClickHouseParser.DELETE:
                case ClickHouseParser.DESC:
                case ClickHouseParser.DESCENDING:
                case ClickHouseParser.DESCRIBE:
                case ClickHouseParser.DETACH:
                case ClickHouseParser.DICTIONARIES:
                case ClickHouseParser.DICTIONARY:
                case ClickHouseParser.DISK:
                case ClickHouseParser.DISTINCT:
                case ClickHouseParser.DISTRIBUTED:
                case ClickHouseParser.DROP:
                case ClickHouseParser.ELSE:
                case ClickHouseParser.END:
                case ClickHouseParser.ENGINE:
                case ClickHouseParser.EVENTS:
                case ClickHouseParser.EXISTS:
                case ClickHouseParser.EXPLAIN:
                case ClickHouseParser.EXPRESSION:
                case ClickHouseParser.EXTRACT:
                case ClickHouseParser.FETCHES:
                case ClickHouseParser.FINAL:
                case ClickHouseParser.FIRST:
                case ClickHouseParser.FLUSH:
                case ClickHouseParser.FOLLOWING:
                case ClickHouseParser.FOR:
                case ClickHouseParser.FORMAT:
                case ClickHouseParser.FREEZE:
                case ClickHouseParser.FROM:
                case ClickHouseParser.FULL:
                case ClickHouseParser.FUNCTION:
                case ClickHouseParser.GLOBAL:
                case ClickHouseParser.GRANULARITY:
                case ClickHouseParser.GROUP:
                case ClickHouseParser.HAVING:
                case ClickHouseParser.HIERARCHICAL:
                case ClickHouseParser.HOUR:
                case ClickHouseParser.ID:
                case ClickHouseParser.IF:
                case ClickHouseParser.ILIKE:
                case ClickHouseParser.IN:
                case ClickHouseParser.INDEX:
                case ClickHouseParser.INJECTIVE:
                case ClickHouseParser.INNER:
                case ClickHouseParser.INSERT:
                case ClickHouseParser.INTERVAL:
                case ClickHouseParser.INTO:
                case ClickHouseParser.IS:
                case ClickHouseParser.IS_OBJECT_ID:
                case ClickHouseParser.JOIN:
                case ClickHouseParser.KEY:
                case ClickHouseParser.KILL:
                case ClickHouseParser.LAST:
                case ClickHouseParser.LAYOUT:
                case ClickHouseParser.LEADING:
                case ClickHouseParser.LEFT:
                case ClickHouseParser.LIFETIME:
                case ClickHouseParser.LIKE:
                case ClickHouseParser.LIMIT:
                case ClickHouseParser.LIVE:
                case ClickHouseParser.LOCAL:
                case ClickHouseParser.LOGS:
                case ClickHouseParser.MATERIALIZE:
                case ClickHouseParser.MATERIALIZED:
                case ClickHouseParser.MAX:
                case ClickHouseParser.MERGES:
                case ClickHouseParser.MIN:
                case ClickHouseParser.MINUTE:
                case ClickHouseParser.MODIFY:
                case ClickHouseParser.MONTH:
                case ClickHouseParser.MOVE:
                case ClickHouseParser.MUTATION:
                case ClickHouseParser.NO:
                case ClickHouseParser.NOT:
                case ClickHouseParser.NULLS:
                case ClickHouseParser.OFFSET:
                case ClickHouseParser.ON:
                case ClickHouseParser.OPTIMIZE:
                case ClickHouseParser.OR:
                case ClickHouseParser.ORDER:
                case ClickHouseParser.OUTER:
                case ClickHouseParser.OUTFILE:
                case ClickHouseParser.OVER:
                case ClickHouseParser.PARTITION:
                case ClickHouseParser.POPULATE:
                case ClickHouseParser.PRECEDING:
                case ClickHouseParser.PREWHERE:
                case ClickHouseParser.PRIMARY:
                case ClickHouseParser.QUARTER:
                case ClickHouseParser.RANGE:
                case ClickHouseParser.RELOAD:
                case ClickHouseParser.REMOVE:
                case ClickHouseParser.RENAME:
                case ClickHouseParser.REPLACE:
                case ClickHouseParser.REPLICA:
                case ClickHouseParser.REPLICATED:
                case ClickHouseParser.RIGHT:
                case ClickHouseParser.ROLLUP:
                case ClickHouseParser.ROW:
                case ClickHouseParser.ROWS:
                case ClickHouseParser.SAMPLE:
                case ClickHouseParser.SECOND:
                case ClickHouseParser.SELECT:
                case ClickHouseParser.SEMI:
                case ClickHouseParser.SENDS:
                case ClickHouseParser.SET:
                case ClickHouseParser.SETTINGS:
                case ClickHouseParser.SHOW:
                case ClickHouseParser.SOURCE:
                case ClickHouseParser.START:
                case ClickHouseParser.STOP:
                case ClickHouseParser.SUBSTRING:
                case ClickHouseParser.SYNC:
                case ClickHouseParser.SYNTAX:
                case ClickHouseParser.SYSTEM:
                case ClickHouseParser.TABLE:
                case ClickHouseParser.TABLES:
                case ClickHouseParser.TEMPORARY:
                case ClickHouseParser.TEST:
                case ClickHouseParser.THEN:
                case ClickHouseParser.TIES:
                case ClickHouseParser.TIMEOUT:
                case ClickHouseParser.TIMESTAMP:
                case ClickHouseParser.TO:
                case ClickHouseParser.TOP:
                case ClickHouseParser.TOTALS:
                case ClickHouseParser.TRAILING:
                case ClickHouseParser.TRIM:
                case ClickHouseParser.TRUNCATE:
                case ClickHouseParser.TTL:
                case ClickHouseParser.TYPE:
                case ClickHouseParser.UNBOUNDED:
                case ClickHouseParser.UNION:
                case ClickHouseParser.UPDATE:
                case ClickHouseParser.USE:
                case ClickHouseParser.USING:
                case ClickHouseParser.UUID:
                case ClickHouseParser.VALUES:
                case ClickHouseParser.VIEW:
                case ClickHouseParser.VOLUME:
                case ClickHouseParser.WATCH:
                case ClickHouseParser.WEEK:
                case ClickHouseParser.WHEN:
                case ClickHouseParser.WHERE:
                case ClickHouseParser.WINDOW:
                case ClickHouseParser.WITH:
                case ClickHouseParser.YEAR:
                case ClickHouseParser.JSON_FALSE:
                case ClickHouseParser.JSON_TRUE:
                case ClickHouseParser.IDENTIFIER:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 2058;
                        this.identifier();
                    }
                    break;
                case ClickHouseParser.NULL_SQL:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 2059;
                        this.match(ClickHouseParser.NULL_SQL);
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
            }
        } catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localContext;
    }
    public enumValue(): EnumValueContext {
        let localContext = new EnumValueContext(this.context, this.state);
        this.enterRule(localContext, 238, ClickHouseParser.RULE_enumValue);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 2062;
                this.match(ClickHouseParser.STRING_LITERAL);
                this.state = 2063;
                this.match(ClickHouseParser.EQ_SINGLE);
                this.state = 2064;
                this.numberLiteral();
            }
        } catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localContext;
    }

    public override sempred(
        localContext: antlr.RuleContext | null,
        ruleIndex: number,
        predIndex: number,
    ): boolean {
        switch (ruleIndex) {
            case 16:
                return this.dictionaryAttrDfnt_sempred(
                    localContext as DictionaryAttrDfntContext,
                    predIndex,
                );
            case 17:
                return this.dictionaryEngineClause_sempred(
                    localContext as DictionaryEngineClauseContext,
                    predIndex,
                );
            case 30:
                return this.engineClause_sempred(localContext as EngineClauseContext, predIndex);
            case 72:
                return this.joinExpr_sempred(localContext as JoinExprContext, predIndex);
            case 98:
                return this.columnExpr_sempred(localContext as ColumnExprContext, predIndex);
            case 104:
                return this.tableExpr_sempred(localContext as TableExprContext, predIndex);
        }
        return true;
    }
    private dictionaryAttrDfnt_sempred(
        localContext: DictionaryAttrDfntContext | null,
        predIndex: number,
    ): boolean {
        switch (predIndex) {
            case 0:
                return !localContext?.attrs?.has('default');
            case 1:
                return !localContext?.attrs?.has('expression');
            case 2:
                return !localContext?.attrs?.has('hierarchical');
            case 3:
                return !localContext?.attrs?.has('injective');
            case 4:
                return !localContext?.attrs?.has('is_object_id');
        }
        return true;
    }
    private dictionaryEngineClause_sempred(
        localContext: DictionaryEngineClauseContext | null,
        predIndex: number,
    ): boolean {
        switch (predIndex) {
            case 5:
                return !localContext?.clauses?.has('source');
            case 6:
                return !localContext?.clauses?.has('lifetime');
            case 7:
                return !localContext?.clauses?.has('layout');
            case 8:
                return !localContext?.clauses?.has('range');
            case 9:
                return !localContext?.clauses?.has('settings');
        }
        return true;
    }
    private engineClause_sempred(
        localContext: EngineClauseContext | null,
        predIndex: number,
    ): boolean {
        switch (predIndex) {
            case 10:
                return !localContext?.clauses?.has('orderByClause');
            case 11:
                return !localContext?.clauses?.has('partitionByClause');
            case 12:
                return !localContext?.clauses?.has('primaryKeyClause');
            case 13:
                return !localContext?.clauses?.has('sampleByClause');
            case 14:
                return !localContext?.clauses?.has('ttlClause');
            case 15:
                return !localContext?.clauses?.has('settingsClause');
        }
        return true;
    }
    private joinExpr_sempred(localContext: JoinExprContext | null, predIndex: number): boolean {
        switch (predIndex) {
            case 16:
                return this.precpred(this.context, 3);
            case 17:
                return this.precpred(this.context, 4);
        }
        return true;
    }
    private columnExpr_sempred(localContext: ColumnExprContext | null, predIndex: number): boolean {
        switch (predIndex) {
            case 18:
                return this.precpred(this.context, 16);
            case 19:
                return this.precpred(this.context, 15);
            case 20:
                return this.precpred(this.context, 14);
            case 21:
                return this.precpred(this.context, 11);
            case 22:
                return this.precpred(this.context, 10);
            case 23:
                return this.precpred(this.context, 9);
            case 24:
                return this.precpred(this.context, 8);
            case 25:
                return this.precpred(this.context, 19);
            case 26:
                return this.precpred(this.context, 18);
            case 27:
                return this.precpred(this.context, 13);
            case 28:
                return this.precpred(this.context, 7);
        }
        return true;
    }
    private tableExpr_sempred(localContext: TableExprContext | null, predIndex: number): boolean {
        switch (predIndex) {
            case 29:
                return this.precpred(this.context, 1);
        }
        return true;
    }

    public static readonly _serializedATN: number[] = [
        4, 1, 230, 2067, 2, 0, 7, 0, 2, 1, 7, 1, 2, 2, 7, 2, 2, 3, 7, 3, 2, 4, 7, 4, 2, 5, 7, 5, 2,
        6, 7, 6, 2, 7, 7, 7, 2, 8, 7, 8, 2, 9, 7, 9, 2, 10, 7, 10, 2, 11, 7, 11, 2, 12, 7, 12, 2,
        13, 7, 13, 2, 14, 7, 14, 2, 15, 7, 15, 2, 16, 7, 16, 2, 17, 7, 17, 2, 18, 7, 18, 2, 19, 7,
        19, 2, 20, 7, 20, 2, 21, 7, 21, 2, 22, 7, 22, 2, 23, 7, 23, 2, 24, 7, 24, 2, 25, 7, 25, 2,
        26, 7, 26, 2, 27, 7, 27, 2, 28, 7, 28, 2, 29, 7, 29, 2, 30, 7, 30, 2, 31, 7, 31, 2, 32, 7,
        32, 2, 33, 7, 33, 2, 34, 7, 34, 2, 35, 7, 35, 2, 36, 7, 36, 2, 37, 7, 37, 2, 38, 7, 38, 2,
        39, 7, 39, 2, 40, 7, 40, 2, 41, 7, 41, 2, 42, 7, 42, 2, 43, 7, 43, 2, 44, 7, 44, 2, 45, 7,
        45, 2, 46, 7, 46, 2, 47, 7, 47, 2, 48, 7, 48, 2, 49, 7, 49, 2, 50, 7, 50, 2, 51, 7, 51, 2,
        52, 7, 52, 2, 53, 7, 53, 2, 54, 7, 54, 2, 55, 7, 55, 2, 56, 7, 56, 2, 57, 7, 57, 2, 58, 7,
        58, 2, 59, 7, 59, 2, 60, 7, 60, 2, 61, 7, 61, 2, 62, 7, 62, 2, 63, 7, 63, 2, 64, 7, 64, 2,
        65, 7, 65, 2, 66, 7, 66, 2, 67, 7, 67, 2, 68, 7, 68, 2, 69, 7, 69, 2, 70, 7, 70, 2, 71, 7,
        71, 2, 72, 7, 72, 2, 73, 7, 73, 2, 74, 7, 74, 2, 75, 7, 75, 2, 76, 7, 76, 2, 77, 7, 77, 2,
        78, 7, 78, 2, 79, 7, 79, 2, 80, 7, 80, 2, 81, 7, 81, 2, 82, 7, 82, 2, 83, 7, 83, 2, 84, 7,
        84, 2, 85, 7, 85, 2, 86, 7, 86, 2, 87, 7, 87, 2, 88, 7, 88, 2, 89, 7, 89, 2, 90, 7, 90, 2,
        91, 7, 91, 2, 92, 7, 92, 2, 93, 7, 93, 2, 94, 7, 94, 2, 95, 7, 95, 2, 96, 7, 96, 2, 97, 7,
        97, 2, 98, 7, 98, 2, 99, 7, 99, 2, 100, 7, 100, 2, 101, 7, 101, 2, 102, 7, 102, 2, 103, 7,
        103, 2, 104, 7, 104, 2, 105, 7, 105, 2, 106, 7, 106, 2, 107, 7, 107, 2, 108, 7, 108, 2, 109,
        7, 109, 2, 110, 7, 110, 2, 111, 7, 111, 2, 112, 7, 112, 2, 113, 7, 113, 2, 114, 7, 114, 2,
        115, 7, 115, 2, 116, 7, 116, 2, 117, 7, 117, 2, 118, 7, 118, 2, 119, 7, 119, 1, 0, 5, 0,
        242, 8, 0, 10, 0, 12, 0, 245, 9, 0, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 251, 8, 1, 1, 1, 1, 1, 3,
        1, 255, 8, 1, 1, 1, 3, 1, 258, 8, 1, 1, 1, 3, 1, 261, 8, 1, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1,
        2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 3, 2, 282,
        8, 2, 1, 2, 3, 2, 285, 8, 2, 1, 3, 1, 3, 1, 3, 1, 3, 5, 3, 291, 8, 3, 10, 3, 12, 3, 294, 9,
        3, 1, 4, 1, 4, 3, 4, 298, 8, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 5, 1, 5, 1, 5, 1, 5, 5, 5,
        309, 8, 5, 10, 5, 12, 5, 312, 9, 5, 1, 5, 1, 5, 1, 6, 1, 6, 1, 6, 1, 6, 3, 6, 320, 8, 6, 1,
        6, 1, 6, 1, 6, 5, 6, 325, 8, 6, 10, 6, 12, 6, 328, 9, 6, 1, 7, 1, 7, 1, 7, 1, 7, 1, 7, 3, 7,
        335, 8, 7, 1, 7, 1, 7, 1, 7, 3, 7, 340, 8, 7, 1, 7, 1, 7, 1, 7, 1, 7, 1, 7, 3, 7, 347, 8, 7,
        1, 7, 1, 7, 1, 7, 3, 7, 352, 8, 7, 1, 7, 1, 7, 1, 7, 1, 7, 1, 7, 3, 7, 359, 8, 7, 1, 7, 1,
        7, 1, 7, 3, 7, 364, 8, 7, 1, 7, 1, 7, 1, 7, 1, 7, 3, 7, 370, 8, 7, 1, 7, 1, 7, 1, 7, 1, 7,
        3, 7, 376, 8, 7, 1, 7, 1, 7, 1, 7, 3, 7, 381, 8, 7, 1, 7, 1, 7, 1, 7, 1, 7, 3, 7, 387, 8, 7,
        1, 7, 1, 7, 1, 7, 3, 7, 392, 8, 7, 1, 7, 1, 7, 1, 7, 1, 7, 3, 7, 398, 8, 7, 1, 7, 1, 7, 1,
        7, 3, 7, 403, 8, 7, 1, 7, 1, 7, 1, 7, 1, 7, 3, 7, 409, 8, 7, 1, 7, 1, 7, 1, 7, 1, 7, 1, 7,
        1, 7, 1, 7, 1, 7, 1, 7, 1, 7, 1, 7, 1, 7, 3, 7, 423, 8, 7, 1, 7, 1, 7, 1, 7, 1, 7, 1, 7, 3,
        7, 430, 8, 7, 1, 7, 1, 7, 1, 7, 1, 7, 1, 7, 3, 7, 437, 8, 7, 1, 7, 1, 7, 1, 7, 1, 7, 1, 7,
        3, 7, 444, 8, 7, 1, 7, 1, 7, 1, 7, 1, 7, 3, 7, 450, 8, 7, 1, 7, 1, 7, 1, 7, 3, 7, 455, 8, 7,
        1, 7, 1, 7, 1, 7, 1, 7, 3, 7, 461, 8, 7, 1, 7, 1, 7, 1, 7, 3, 7, 466, 8, 7, 1, 7, 1, 7, 1,
        7, 1, 7, 3, 7, 472, 8, 7, 1, 7, 1, 7, 1, 7, 1, 7, 1, 7, 1, 7, 1, 7, 3, 7, 481, 8, 7, 1, 7,
        1, 7, 1, 7, 1, 7, 1, 7, 1, 7, 1, 7, 1, 7, 3, 7, 491, 8, 7, 1, 7, 1, 7, 1, 7, 1, 7, 1, 7, 1,
        7, 1, 7, 1, 7, 3, 7, 501, 8, 7, 1, 7, 1, 7, 1, 7, 1, 7, 1, 7, 1, 7, 1, 7, 1, 7, 1, 7, 1, 7,
        1, 7, 1, 7, 1, 7, 1, 7, 1, 7, 1, 7, 1, 7, 1, 7, 3, 7, 521, 8, 7, 1, 7, 1, 7, 1, 7, 1, 7, 1,
        7, 1, 7, 3, 7, 529, 8, 7, 1, 7, 1, 7, 1, 7, 1, 7, 1, 7, 1, 7, 1, 7, 1, 7, 1, 7, 1, 7, 1, 7,
        1, 7, 1, 7, 3, 7, 544, 8, 7, 1, 8, 1, 8, 1, 8, 5, 8, 549, 8, 8, 10, 8, 12, 8, 552, 9, 8, 1,
        9, 1, 9, 1, 9, 1, 9, 1, 10, 1, 10, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 3, 11, 565, 8, 11, 1,
        12, 1, 12, 1, 12, 1, 12, 3, 12, 571, 8, 12, 1, 13, 1, 13, 1, 13, 1, 13, 3, 13, 577, 8, 13,
        1, 14, 1, 14, 1, 14, 1, 14, 1, 14, 3, 14, 584, 8, 14, 1, 14, 1, 14, 3, 14, 588, 8, 14, 1,
        14, 3, 14, 591, 8, 14, 1, 14, 1, 14, 1, 14, 1, 14, 3, 14, 597, 8, 14, 1, 14, 3, 14, 600, 8,
        14, 1, 14, 1, 14, 1, 14, 1, 14, 3, 14, 606, 8, 14, 1, 14, 1, 14, 3, 14, 610, 8, 14, 1, 14,
        3, 14, 613, 8, 14, 1, 14, 1, 14, 1, 14, 1, 14, 1, 14, 1, 14, 1, 14, 1, 14, 1, 14, 3, 14,
        624, 8, 14, 1, 14, 1, 14, 3, 14, 628, 8, 14, 1, 14, 3, 14, 631, 8, 14, 1, 14, 1, 14, 1, 14,
        3, 14, 636, 8, 14, 3, 14, 638, 8, 14, 1, 14, 3, 14, 641, 8, 14, 1, 14, 3, 14, 644, 8, 14, 1,
        14, 1, 14, 1, 14, 1, 14, 1, 14, 1, 14, 1, 14, 1, 14, 3, 14, 654, 8, 14, 1, 14, 1, 14, 3, 14,
        658, 8, 14, 1, 14, 3, 14, 661, 8, 14, 1, 14, 3, 14, 664, 8, 14, 1, 14, 1, 14, 1, 14, 3, 14,
        669, 8, 14, 3, 14, 671, 8, 14, 1, 14, 1, 14, 1, 14, 1, 14, 1, 14, 1, 14, 3, 14, 679, 8, 14,
        1, 14, 3, 14, 682, 8, 14, 1, 14, 3, 14, 685, 8, 14, 1, 14, 1, 14, 1, 14, 1, 14, 3, 14, 691,
        8, 14, 1, 14, 1, 14, 3, 14, 695, 8, 14, 1, 14, 3, 14, 698, 8, 14, 1, 14, 3, 14, 701, 8, 14,
        1, 14, 3, 14, 704, 8, 14, 1, 14, 3, 14, 707, 8, 14, 1, 14, 1, 14, 1, 14, 3, 14, 712, 8, 14,
        1, 14, 1, 14, 1, 14, 1, 14, 3, 14, 718, 8, 14, 1, 14, 1, 14, 3, 14, 722, 8, 14, 1, 14, 3,
        14, 725, 8, 14, 1, 14, 3, 14, 728, 8, 14, 1, 14, 1, 14, 3, 14, 732, 8, 14, 1, 15, 1, 15, 1,
        15, 1, 15, 5, 15, 738, 8, 15, 10, 15, 12, 15, 741, 9, 15, 1, 15, 1, 15, 1, 16, 1, 16, 1, 16,
        1, 16, 1, 16, 1, 16, 1, 16, 1, 16, 1, 16, 1, 16, 1, 16, 1, 16, 1, 16, 1, 16, 1, 16, 1, 16,
        1, 16, 1, 16, 1, 16, 1, 16, 1, 16, 5, 16, 766, 8, 16, 10, 16, 12, 16, 769, 9, 16, 1, 17, 3,
        17, 772, 8, 17, 1, 17, 1, 17, 1, 17, 1, 17, 1, 17, 1, 17, 1, 17, 1, 17, 1, 17, 1, 17, 1, 17,
        1, 17, 1, 17, 1, 17, 1, 17, 1, 17, 1, 17, 1, 17, 1, 17, 1, 17, 5, 17, 794, 8, 17, 10, 17,
        12, 17, 797, 9, 17, 1, 18, 1, 18, 1, 18, 1, 18, 1, 19, 1, 19, 1, 19, 1, 19, 3, 19, 807, 8,
        19, 1, 19, 3, 19, 810, 8, 19, 1, 20, 1, 20, 1, 20, 1, 20, 1, 20, 5, 20, 817, 8, 20, 10, 20,
        12, 20, 820, 9, 20, 1, 20, 1, 20, 1, 20, 1, 21, 1, 21, 1, 21, 1, 21, 1, 21, 1, 21, 1, 21, 1,
        21, 1, 21, 1, 21, 1, 21, 3, 21, 836, 8, 21, 1, 21, 1, 21, 1, 22, 1, 22, 1, 22, 1, 22, 1, 22,
        5, 22, 845, 8, 22, 10, 22, 12, 22, 848, 9, 22, 1, 22, 1, 22, 1, 22, 1, 23, 1, 23, 1, 23, 1,
        23, 1, 23, 1, 23, 1, 23, 1, 23, 1, 23, 1, 23, 1, 23, 1, 23, 3, 23, 865, 8, 23, 1, 23, 1, 23,
        1, 24, 1, 24, 1, 24, 1, 24, 1, 24, 1, 25, 1, 25, 1, 25, 1, 25, 3, 25, 878, 8, 25, 1, 26, 1,
        26, 1, 26, 1, 27, 1, 27, 1, 27, 1, 28, 1, 28, 1, 28, 1, 29, 1, 29, 1, 29, 1, 29, 5, 29, 893,
        8, 29, 10, 29, 12, 29, 896, 9, 29, 1, 29, 1, 29, 1, 29, 1, 29, 1, 29, 1, 29, 3, 29, 904, 8,
        29, 1, 30, 1, 30, 1, 30, 1, 30, 1, 30, 1, 30, 1, 30, 1, 30, 1, 30, 1, 30, 1, 30, 1, 30, 1,
        30, 1, 30, 1, 30, 1, 30, 1, 30, 1, 30, 1, 30, 1, 30, 1, 30, 1, 30, 1, 30, 1, 30, 1, 30, 5,
        30, 931, 8, 30, 10, 30, 12, 30, 934, 9, 30, 1, 31, 1, 31, 1, 31, 1, 31, 1, 32, 1, 32, 1, 32,
        1, 32, 1, 33, 1, 33, 1, 33, 1, 33, 1, 34, 1, 34, 1, 34, 1, 34, 5, 34, 952, 8, 34, 10, 34,
        12, 34, 955, 9, 34, 1, 35, 1, 35, 3, 35, 959, 8, 35, 1, 35, 1, 35, 1, 35, 3, 35, 964, 8, 35,
        1, 35, 3, 35, 967, 8, 35, 1, 36, 1, 36, 1, 36, 1, 36, 1, 36, 1, 36, 1, 36, 1, 36, 1, 36, 1,
        36, 3, 36, 979, 8, 36, 1, 37, 1, 37, 1, 37, 3, 37, 984, 8, 37, 1, 37, 1, 37, 3, 37, 988, 8,
        37, 1, 37, 3, 37, 991, 8, 37, 1, 37, 1, 37, 3, 37, 995, 8, 37, 1, 37, 1, 37, 3, 37, 999, 8,
        37, 1, 37, 1, 37, 1, 37, 3, 37, 1004, 8, 37, 1, 37, 3, 37, 1007, 8, 37, 1, 37, 1, 37, 3, 37,
        1011, 8, 37, 3, 37, 1013, 8, 37, 1, 38, 1, 38, 1, 38, 1, 39, 1, 39, 1, 39, 1, 39, 1, 39, 1,
        39, 1, 39, 1, 40, 1, 40, 1, 40, 1, 41, 1, 41, 1, 41, 1, 41, 1, 41, 5, 41, 1033, 8, 41, 10,
        41, 12, 41, 1036, 9, 41, 1, 41, 1, 41, 1, 42, 1, 42, 1, 42, 3, 42, 1043, 8, 42, 1, 42, 3,
        42, 1046, 8, 42, 1, 43, 1, 43, 1, 43, 1, 43, 1, 43, 1, 43, 1, 43, 1, 43, 3, 43, 1056, 8, 43,
        1, 44, 1, 44, 3, 44, 1060, 8, 44, 1, 44, 1, 44, 1, 45, 1, 45, 1, 45, 1, 45, 3, 45, 1068, 8,
        45, 1, 45, 1, 45, 3, 45, 1072, 8, 45, 1, 45, 1, 45, 1, 45, 3, 45, 1077, 8, 45, 1, 45, 1, 45,
        3, 45, 1081, 8, 45, 1, 45, 1, 45, 3, 45, 1085, 8, 45, 1, 45, 1, 45, 3, 45, 1089, 8, 45, 1,
        45, 1, 45, 3, 45, 1093, 8, 45, 3, 45, 1095, 8, 45, 1, 46, 1, 46, 1, 46, 1, 46, 1, 46, 1, 46,
        3, 46, 1103, 8, 46, 1, 46, 1, 46, 3, 46, 1107, 8, 46, 1, 46, 3, 46, 1110, 8, 46, 1, 47, 1,
        47, 1, 47, 1, 47, 1, 47, 1, 47, 3, 47, 1118, 8, 47, 1, 48, 1, 48, 1, 48, 3, 48, 1123, 8, 48,
        1, 48, 1, 48, 1, 48, 3, 48, 1128, 8, 48, 1, 48, 3, 48, 1131, 8, 48, 1, 48, 1, 48, 1, 49, 1,
        49, 1, 49, 1, 49, 5, 49, 1139, 8, 49, 10, 49, 12, 49, 1142, 9, 49, 1, 49, 1, 49, 1, 50, 1,
        50, 1, 50, 1, 50, 1, 50, 3, 50, 1151, 8, 50, 1, 50, 1, 50, 3, 50, 1155, 8, 50, 1, 51, 1, 51,
        1, 51, 3, 51, 1160, 8, 51, 1, 51, 1, 51, 3, 51, 1164, 8, 51, 1, 52, 1, 52, 1, 52, 1, 52, 3,
        52, 1170, 8, 52, 1, 52, 3, 52, 1173, 8, 52, 1, 52, 3, 52, 1176, 8, 52, 1, 52, 3, 52, 1179,
        8, 52, 1, 53, 1, 53, 1, 53, 1, 53, 1, 53, 1, 53, 1, 53, 1, 53, 1, 53, 1, 53, 5, 53, 1191, 8,
        53, 10, 53, 12, 53, 1194, 9, 53, 1, 53, 3, 53, 1197, 8, 53, 1, 54, 1, 54, 3, 54, 1201, 8,
        54, 1, 54, 1, 54, 1, 54, 3, 54, 1206, 8, 54, 1, 54, 3, 54, 1209, 8, 54, 1, 54, 1, 54, 1, 55,
        1, 55, 1, 55, 1, 55, 5, 55, 1217, 8, 55, 10, 55, 12, 55, 1220, 9, 55, 1, 56, 1, 56, 1, 56,
        1, 56, 1, 56, 3, 56, 1227, 8, 56, 1, 57, 3, 57, 1230, 8, 57, 1, 57, 1, 57, 3, 57, 1234, 8,
        57, 1, 57, 3, 57, 1237, 8, 57, 1, 57, 1, 57, 3, 57, 1241, 8, 57, 1, 57, 3, 57, 1244, 8, 57,
        1, 57, 3, 57, 1247, 8, 57, 1, 57, 3, 57, 1250, 8, 57, 1, 57, 3, 57, 1253, 8, 57, 1, 57, 3,
        57, 1256, 8, 57, 1, 57, 1, 57, 3, 57, 1260, 8, 57, 1, 57, 1, 57, 3, 57, 1264, 8, 57, 1, 57,
        3, 57, 1267, 8, 57, 1, 57, 3, 57, 1270, 8, 57, 1, 57, 3, 57, 1273, 8, 57, 1, 57, 3, 57,
        1276, 8, 57, 1, 57, 3, 57, 1279, 8, 57, 1, 58, 1, 58, 1, 58, 1, 59, 1, 59, 1, 59, 1, 59, 3,
        59, 1288, 8, 59, 1, 60, 1, 60, 1, 60, 1, 61, 3, 61, 1294, 8, 61, 1, 61, 1, 61, 1, 61, 1, 61,
        1, 62, 1, 62, 1, 62, 1, 62, 1, 62, 1, 62, 1, 62, 1, 63, 1, 63, 1, 63, 1, 64, 1, 64, 1, 64,
        1, 65, 1, 65, 1, 65, 1, 65, 1, 65, 1, 65, 1, 65, 1, 65, 3, 65, 1321, 8, 65, 1, 66, 1, 66, 1,
        66, 1, 67, 1, 67, 1, 67, 1, 67, 1, 68, 1, 68, 1, 68, 1, 68, 1, 69, 1, 69, 1, 69, 1, 69, 1,
        69, 1, 70, 1, 70, 1, 70, 1, 70, 3, 70, 1343, 8, 70, 1, 71, 1, 71, 1, 71, 1, 72, 1, 72, 1,
        72, 3, 72, 1351, 8, 72, 1, 72, 3, 72, 1354, 8, 72, 1, 72, 1, 72, 1, 72, 1, 72, 3, 72, 1360,
        8, 72, 1, 72, 1, 72, 1, 72, 1, 72, 1, 72, 1, 72, 3, 72, 1368, 8, 72, 1, 72, 3, 72, 1371, 8,
        72, 1, 72, 1, 72, 1, 72, 1, 72, 5, 72, 1377, 8, 72, 10, 72, 12, 72, 1380, 9, 72, 1, 73, 3,
        73, 1383, 8, 73, 1, 73, 1, 73, 1, 73, 3, 73, 1388, 8, 73, 1, 73, 3, 73, 1391, 8, 73, 1, 73,
        3, 73, 1394, 8, 73, 1, 73, 1, 73, 3, 73, 1398, 8, 73, 1, 73, 1, 73, 3, 73, 1402, 8, 73, 1,
        73, 3, 73, 1405, 8, 73, 3, 73, 1407, 8, 73, 1, 73, 3, 73, 1410, 8, 73, 1, 73, 1, 73, 3, 73,
        1414, 8, 73, 1, 73, 1, 73, 3, 73, 1418, 8, 73, 1, 73, 3, 73, 1421, 8, 73, 3, 73, 1423, 8,
        73, 3, 73, 1425, 8, 73, 1, 74, 3, 74, 1428, 8, 74, 1, 74, 1, 74, 1, 74, 3, 74, 1433, 8, 74,
        1, 75, 1, 75, 1, 75, 1, 75, 1, 75, 1, 75, 1, 75, 1, 75, 1, 75, 3, 75, 1444, 8, 75, 1, 76, 1,
        76, 1, 76, 1, 76, 3, 76, 1450, 8, 76, 1, 77, 1, 77, 1, 77, 3, 77, 1455, 8, 77, 1, 78, 1, 78,
        1, 78, 5, 78, 1460, 8, 78, 10, 78, 12, 78, 1463, 9, 78, 1, 79, 1, 79, 3, 79, 1467, 8, 79, 1,
        79, 1, 79, 3, 79, 1471, 8, 79, 1, 79, 1, 79, 3, 79, 1475, 8, 79, 1, 80, 1, 80, 1, 80, 3, 80,
        1480, 8, 80, 1, 81, 1, 81, 1, 81, 5, 81, 1485, 8, 81, 10, 81, 12, 81, 1488, 9, 81, 1, 82, 1,
        82, 1, 82, 1, 82, 1, 83, 3, 83, 1495, 8, 83, 1, 83, 3, 83, 1498, 8, 83, 1, 83, 3, 83, 1501,
        8, 83, 1, 84, 1, 84, 1, 84, 1, 84, 1, 85, 1, 85, 1, 85, 1, 85, 1, 86, 1, 86, 1, 86, 1, 87,
        1, 87, 1, 87, 1, 87, 1, 87, 1, 87, 3, 87, 1520, 8, 87, 1, 88, 1, 88, 1, 88, 1, 88, 1, 88, 1,
        88, 1, 88, 1, 88, 1, 88, 1, 88, 1, 88, 1, 88, 3, 88, 1534, 8, 88, 1, 89, 1, 89, 1, 89, 1,
        90, 1, 90, 1, 90, 1, 90, 1, 90, 1, 90, 1, 90, 1, 90, 1, 90, 1, 90, 1, 90, 3, 90, 1550, 8,
        90, 1, 90, 3, 90, 1553, 8, 90, 1, 90, 1, 90, 1, 90, 1, 90, 1, 90, 1, 90, 1, 90, 3, 90, 1562,
        8, 90, 1, 90, 1, 90, 3, 90, 1566, 8, 90, 1, 90, 1, 90, 1, 90, 3, 90, 1571, 8, 90, 1, 90, 1,
        90, 1, 90, 3, 90, 1576, 8, 90, 1, 90, 3, 90, 1579, 8, 90, 3, 90, 1581, 8, 90, 1, 91, 1, 91,
        1, 91, 1, 91, 1, 91, 1, 91, 1, 91, 1, 91, 1, 91, 1, 91, 1, 91, 1, 91, 1, 91, 1, 91, 1, 91,
        1, 91, 1, 91, 1, 91, 1, 91, 1, 91, 3, 91, 1603, 8, 91, 1, 91, 3, 91, 1606, 8, 91, 1, 91, 1,
        91, 1, 91, 1, 91, 1, 91, 1, 91, 1, 91, 1, 91, 1, 91, 3, 91, 1617, 8, 91, 1, 92, 1, 92, 3,
        92, 1621, 8, 92, 1, 92, 3, 92, 1624, 8, 92, 1, 92, 1, 92, 3, 92, 1628, 8, 92, 1, 92, 1, 92,
        3, 92, 1632, 8, 92, 1, 93, 1, 93, 1, 93, 1, 94, 1, 94, 1, 94, 3, 94, 1640, 8, 94, 1, 94, 1,
        94, 3, 94, 1644, 8, 94, 1, 95, 1, 95, 1, 95, 1, 95, 1, 95, 1, 95, 1, 95, 1, 95, 1, 95, 5,
        95, 1655, 8, 95, 10, 95, 12, 95, 1658, 9, 95, 1, 95, 1, 95, 1, 95, 1, 95, 1, 95, 1, 95, 1,
        95, 5, 95, 1667, 8, 95, 10, 95, 12, 95, 1670, 9, 95, 1, 95, 1, 95, 1, 95, 1, 95, 1, 95, 1,
        95, 1, 95, 5, 95, 1679, 8, 95, 10, 95, 12, 95, 1682, 9, 95, 1, 95, 1, 95, 1, 95, 1, 95, 1,
        95, 3, 95, 1689, 8, 95, 1, 95, 1, 95, 3, 95, 1693, 8, 95, 1, 96, 1, 96, 1, 96, 5, 96, 1698,
        8, 96, 10, 96, 12, 96, 1701, 9, 96, 1, 97, 1, 97, 1, 97, 3, 97, 1706, 8, 97, 1, 97, 1, 97,
        1, 97, 1, 97, 1, 97, 1, 97, 3, 97, 1714, 8, 97, 1, 98, 1, 98, 1, 98, 3, 98, 1719, 8, 98, 1,
        98, 1, 98, 1, 98, 1, 98, 1, 98, 4, 98, 1726, 8, 98, 11, 98, 12, 98, 1727, 1, 98, 1, 98, 3,
        98, 1732, 8, 98, 1, 98, 1, 98, 1, 98, 1, 98, 1, 98, 1, 98, 1, 98, 1, 98, 1, 98, 1, 98, 1,
        98, 1, 98, 1, 98, 1, 98, 1, 98, 1, 98, 1, 98, 1, 98, 1, 98, 1, 98, 1, 98, 1, 98, 1, 98, 1,
        98, 1, 98, 1, 98, 1, 98, 1, 98, 1, 98, 3, 98, 1763, 8, 98, 1, 98, 1, 98, 1, 98, 1, 98, 1,
        98, 1, 98, 1, 98, 1, 98, 1, 98, 1, 98, 1, 98, 1, 98, 1, 98, 1, 98, 1, 98, 3, 98, 1780, 8,
        98, 1, 98, 1, 98, 1, 98, 1, 98, 1, 98, 1, 98, 1, 98, 1, 98, 1, 98, 1, 98, 3, 98, 1792, 8,
        98, 1, 98, 1, 98, 1, 98, 1, 98, 1, 98, 1, 98, 1, 98, 1, 98, 3, 98, 1802, 8, 98, 1, 98, 3,
        98, 1805, 8, 98, 1, 98, 1, 98, 3, 98, 1809, 8, 98, 1, 98, 3, 98, 1812, 8, 98, 1, 98, 1, 98,
        1, 98, 1, 98, 1, 98, 1, 98, 1, 98, 1, 98, 1, 98, 1, 98, 3, 98, 1824, 8, 98, 1, 98, 1, 98, 1,
        98, 1, 98, 1, 98, 1, 98, 1, 98, 1, 98, 1, 98, 1, 98, 1, 98, 1, 98, 1, 98, 1, 98, 1, 98, 3,
        98, 1841, 8, 98, 1, 98, 1, 98, 3, 98, 1845, 8, 98, 1, 98, 1, 98, 1, 98, 1, 98, 1, 98, 1, 98,
        1, 98, 1, 98, 1, 98, 1, 98, 1, 98, 1, 98, 1, 98, 1, 98, 1, 98, 3, 98, 1862, 8, 98, 1, 98, 3,
        98, 1865, 8, 98, 1, 98, 1, 98, 3, 98, 1869, 8, 98, 1, 98, 3, 98, 1872, 8, 98, 1, 98, 1, 98,
        1, 98, 1, 98, 1, 98, 1, 98, 1, 98, 1, 98, 1, 98, 3, 98, 1883, 8, 98, 1, 98, 1, 98, 1, 98, 1,
        98, 1, 98, 1, 98, 1, 98, 1, 98, 1, 98, 1, 98, 1, 98, 1, 98, 1, 98, 1, 98, 1, 98, 1, 98, 1,
        98, 1, 98, 1, 98, 1, 98, 1, 98, 1, 98, 3, 98, 1907, 8, 98, 1, 98, 1, 98, 1, 98, 1, 98, 1,
        98, 3, 98, 1914, 8, 98, 5, 98, 1916, 8, 98, 10, 98, 12, 98, 1919, 9, 98, 1, 99, 1, 99, 1,
        99, 5, 99, 1924, 8, 99, 10, 99, 12, 99, 1927, 9, 99, 1, 100, 1, 100, 3, 100, 1931, 8, 100,
        1, 101, 1, 101, 1, 101, 1, 101, 5, 101, 1937, 8, 101, 10, 101, 12, 101, 1940, 9, 101, 1,
        101, 1, 101, 1, 101, 1, 101, 1, 101, 5, 101, 1947, 8, 101, 10, 101, 12, 101, 1950, 9, 101,
        3, 101, 1952, 8, 101, 1, 101, 1, 101, 1, 101, 1, 102, 1, 102, 1, 102, 3, 102, 1960, 8, 102,
        1, 102, 1, 102, 1, 103, 1, 103, 1, 103, 3, 103, 1967, 8, 103, 1, 104, 1, 104, 1, 104, 1,
        104, 1, 104, 1, 104, 1, 104, 3, 104, 1976, 8, 104, 1, 104, 1, 104, 1, 104, 1, 104, 3, 104,
        1982, 8, 104, 5, 104, 1984, 8, 104, 10, 104, 12, 104, 1987, 9, 104, 1, 105, 1, 105, 1, 105,
        3, 105, 1992, 8, 105, 1, 105, 1, 105, 1, 106, 1, 106, 1, 106, 3, 106, 1999, 8, 106, 1, 106,
        1, 106, 1, 107, 1, 107, 1, 107, 5, 107, 2006, 8, 107, 10, 107, 12, 107, 2009, 9, 107, 1,
        108, 1, 108, 1, 108, 3, 108, 2014, 8, 108, 1, 109, 1, 109, 1, 110, 1, 110, 1, 110, 1, 110,
        1, 110, 1, 110, 3, 110, 2024, 8, 110, 3, 110, 2026, 8, 110, 1, 111, 3, 111, 2029, 8, 111, 1,
        111, 1, 111, 1, 111, 1, 111, 1, 111, 1, 111, 3, 111, 2037, 8, 111, 1, 112, 1, 112, 1, 112,
        3, 112, 2042, 8, 112, 1, 113, 1, 113, 1, 114, 1, 114, 1, 115, 1, 115, 1, 116, 1, 116, 3,
        116, 2052, 8, 116, 1, 117, 1, 117, 1, 117, 3, 117, 2057, 8, 117, 1, 118, 1, 118, 3, 118,
        2061, 8, 118, 1, 119, 1, 119, 1, 119, 1, 119, 1, 119, 0, 3, 144, 196, 208, 120, 0, 2, 4, 6,
        8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52,
        54, 56, 58, 60, 62, 64, 66, 68, 70, 72, 74, 76, 78, 80, 82, 84, 86, 88, 90, 92, 94, 96, 98,
        100, 102, 104, 106, 108, 110, 112, 114, 116, 118, 120, 122, 124, 126, 128, 130, 132, 134,
        136, 138, 140, 142, 144, 146, 148, 150, 152, 154, 156, 158, 160, 162, 164, 166, 168, 170,
        172, 174, 176, 178, 180, 182, 184, 186, 188, 190, 192, 194, 196, 198, 200, 202, 204, 206,
        208, 210, 212, 214, 216, 218, 220, 222, 224, 226, 228, 230, 232, 234, 236, 238, 0, 28, 6, 0,
        3, 3, 24, 24, 27, 27, 38, 38, 103, 103, 172, 172, 2, 0, 15, 15, 29, 29, 3, 0, 3, 3, 38, 38,
        103, 103, 2, 0, 41, 41, 43, 43, 2, 0, 44, 44, 50, 50, 3, 0, 14, 14, 155, 155, 161, 161, 2,
        0, 31, 31, 140, 140, 2, 0, 83, 83, 95, 95, 2, 0, 70, 70, 100, 100, 3, 0, 4, 4, 8, 8, 12, 12,
        4, 0, 4, 4, 7, 8, 12, 12, 146, 146, 2, 0, 95, 95, 139, 139, 2, 0, 4, 4, 8, 8, 2, 0, 117,
        117, 203, 203, 2, 0, 11, 11, 41, 42, 2, 0, 61, 61, 92, 92, 2, 0, 132, 132, 142, 142, 2, 0,
        67, 67, 79, 79, 1, 0, 152, 153, 3, 0, 17, 17, 94, 94, 169, 169, 3, 0, 199, 199, 217, 217,
        226, 226, 2, 0, 204, 205, 218, 218, 2, 0, 78, 78, 97, 97, 1, 0, 194, 195, 2, 0, 205, 205,
        218, 218, 8, 0, 36, 36, 75, 75, 107, 107, 109, 109, 131, 131, 144, 144, 184, 184, 189, 189,
        12, 0, 2, 35, 37, 74, 76, 80, 82, 106, 108, 108, 110, 111, 113, 114, 116, 129, 132, 143,
        145, 183, 185, 188, 190, 191, 4, 0, 35, 35, 61, 61, 76, 76, 90, 90, 2354, 0, 243, 1, 0, 0,
        0, 2, 260, 1, 0, 0, 0, 4, 284, 1, 0, 0, 0, 6, 286, 1, 0, 0, 0, 8, 295, 1, 0, 0, 0, 10, 304,
        1, 0, 0, 0, 12, 315, 1, 0, 0, 0, 14, 543, 1, 0, 0, 0, 16, 545, 1, 0, 0, 0, 18, 553, 1, 0, 0,
        0, 20, 557, 1, 0, 0, 0, 22, 564, 1, 0, 0, 0, 24, 566, 1, 0, 0, 0, 26, 572, 1, 0, 0, 0, 28,
        731, 1, 0, 0, 0, 30, 733, 1, 0, 0, 0, 32, 744, 1, 0, 0, 0, 34, 771, 1, 0, 0, 0, 36, 798, 1,
        0, 0, 0, 38, 802, 1, 0, 0, 0, 40, 811, 1, 0, 0, 0, 42, 824, 1, 0, 0, 0, 44, 839, 1, 0, 0, 0,
        46, 852, 1, 0, 0, 0, 48, 868, 1, 0, 0, 0, 50, 873, 1, 0, 0, 0, 52, 879, 1, 0, 0, 0, 54, 882,
        1, 0, 0, 0, 56, 885, 1, 0, 0, 0, 58, 903, 1, 0, 0, 0, 60, 905, 1, 0, 0, 0, 62, 935, 1, 0, 0,
        0, 64, 939, 1, 0, 0, 0, 66, 943, 1, 0, 0, 0, 68, 947, 1, 0, 0, 0, 70, 956, 1, 0, 0, 0, 72,
        978, 1, 0, 0, 0, 74, 1012, 1, 0, 0, 0, 76, 1014, 1, 0, 0, 0, 78, 1017, 1, 0, 0, 0, 80, 1024,
        1, 0, 0, 0, 82, 1027, 1, 0, 0, 0, 84, 1039, 1, 0, 0, 0, 86, 1047, 1, 0, 0, 0, 88, 1057, 1,
        0, 0, 0, 90, 1094, 1, 0, 0, 0, 92, 1109, 1, 0, 0, 0, 94, 1117, 1, 0, 0, 0, 96, 1119, 1, 0,
        0, 0, 98, 1134, 1, 0, 0, 0, 100, 1154, 1, 0, 0, 0, 102, 1156, 1, 0, 0, 0, 104, 1165, 1, 0,
        0, 0, 106, 1180, 1, 0, 0, 0, 108, 1198, 1, 0, 0, 0, 110, 1212, 1, 0, 0, 0, 112, 1226, 1, 0,
        0, 0, 114, 1229, 1, 0, 0, 0, 116, 1280, 1, 0, 0, 0, 118, 1283, 1, 0, 0, 0, 120, 1289, 1, 0,
        0, 0, 122, 1293, 1, 0, 0, 0, 124, 1299, 1, 0, 0, 0, 126, 1306, 1, 0, 0, 0, 128, 1309, 1, 0,
        0, 0, 130, 1312, 1, 0, 0, 0, 132, 1322, 1, 0, 0, 0, 134, 1325, 1, 0, 0, 0, 136, 1329, 1, 0,
        0, 0, 138, 1333, 1, 0, 0, 0, 140, 1338, 1, 0, 0, 0, 142, 1344, 1, 0, 0, 0, 144, 1359, 1, 0,
        0, 0, 146, 1424, 1, 0, 0, 0, 148, 1432, 1, 0, 0, 0, 150, 1443, 1, 0, 0, 0, 152, 1445, 1, 0,
        0, 0, 154, 1451, 1, 0, 0, 0, 156, 1456, 1, 0, 0, 0, 158, 1464, 1, 0, 0, 0, 160, 1476, 1, 0,
        0, 0, 162, 1481, 1, 0, 0, 0, 164, 1489, 1, 0, 0, 0, 166, 1494, 1, 0, 0, 0, 168, 1502, 1, 0,
        0, 0, 170, 1506, 1, 0, 0, 0, 172, 1510, 1, 0, 0, 0, 174, 1519, 1, 0, 0, 0, 176, 1533, 1, 0,
        0, 0, 178, 1535, 1, 0, 0, 0, 180, 1580, 1, 0, 0, 0, 182, 1616, 1, 0, 0, 0, 184, 1618, 1, 0,
        0, 0, 186, 1633, 1, 0, 0, 0, 188, 1636, 1, 0, 0, 0, 190, 1692, 1, 0, 0, 0, 192, 1694, 1, 0,
        0, 0, 194, 1713, 1, 0, 0, 0, 196, 1844, 1, 0, 0, 0, 198, 1920, 1, 0, 0, 0, 200, 1930, 1, 0,
        0, 0, 202, 1951, 1, 0, 0, 0, 204, 1959, 1, 0, 0, 0, 206, 1963, 1, 0, 0, 0, 208, 1975, 1, 0,
        0, 0, 210, 1988, 1, 0, 0, 0, 212, 1998, 1, 0, 0, 0, 214, 2002, 1, 0, 0, 0, 216, 2013, 1, 0,
        0, 0, 218, 2015, 1, 0, 0, 0, 220, 2025, 1, 0, 0, 0, 222, 2028, 1, 0, 0, 0, 224, 2041, 1, 0,
        0, 0, 226, 2043, 1, 0, 0, 0, 228, 2045, 1, 0, 0, 0, 230, 2047, 1, 0, 0, 0, 232, 2051, 1, 0,
        0, 0, 234, 2056, 1, 0, 0, 0, 236, 2060, 1, 0, 0, 0, 238, 2062, 1, 0, 0, 0, 240, 242, 3, 2,
        1, 0, 241, 240, 1, 0, 0, 0, 242, 245, 1, 0, 0, 0, 243, 241, 1, 0, 0, 0, 243, 244, 1, 0, 0,
        0, 244, 1, 1, 0, 0, 0, 245, 243, 1, 0, 0, 0, 246, 250, 3, 4, 2, 0, 247, 248, 5, 86, 0, 0,
        248, 249, 5, 123, 0, 0, 249, 251, 5, 197, 0, 0, 250, 247, 1, 0, 0, 0, 250, 251, 1, 0, 0, 0,
        251, 254, 1, 0, 0, 0, 252, 253, 5, 65, 0, 0, 253, 255, 3, 236, 118, 0, 254, 252, 1, 0, 0, 0,
        254, 255, 1, 0, 0, 0, 255, 257, 1, 0, 0, 0, 256, 258, 5, 225, 0, 0, 257, 256, 1, 0, 0, 0,
        257, 258, 1, 0, 0, 0, 258, 261, 1, 0, 0, 0, 259, 261, 3, 96, 48, 0, 260, 246, 1, 0, 0, 0,
        260, 259, 1, 0, 0, 0, 261, 3, 1, 0, 0, 0, 262, 285, 3, 12, 6, 0, 263, 285, 3, 24, 12, 0,
        264, 285, 3, 26, 13, 0, 265, 285, 3, 28, 14, 0, 266, 285, 3, 88, 44, 0, 267, 285, 3, 90, 45,
        0, 268, 285, 3, 92, 46, 0, 269, 285, 3, 94, 47, 0, 270, 285, 3, 102, 51, 0, 271, 285, 3,
        104, 52, 0, 272, 285, 3, 106, 53, 0, 273, 285, 3, 110, 55, 0, 274, 285, 3, 178, 89, 0, 275,
        285, 3, 180, 90, 0, 276, 285, 3, 182, 91, 0, 277, 285, 3, 184, 92, 0, 278, 285, 3, 186, 93,
        0, 279, 285, 3, 188, 94, 0, 280, 282, 3, 6, 3, 0, 281, 280, 1, 0, 0, 0, 281, 282, 1, 0, 0,
        0, 282, 283, 1, 0, 0, 0, 283, 285, 3, 114, 57, 0, 284, 262, 1, 0, 0, 0, 284, 263, 1, 0, 0,
        0, 284, 264, 1, 0, 0, 0, 284, 265, 1, 0, 0, 0, 284, 266, 1, 0, 0, 0, 284, 267, 1, 0, 0, 0,
        284, 268, 1, 0, 0, 0, 284, 269, 1, 0, 0, 0, 284, 270, 1, 0, 0, 0, 284, 271, 1, 0, 0, 0, 284,
        272, 1, 0, 0, 0, 284, 273, 1, 0, 0, 0, 284, 274, 1, 0, 0, 0, 284, 275, 1, 0, 0, 0, 284, 276,
        1, 0, 0, 0, 284, 277, 1, 0, 0, 0, 284, 278, 1, 0, 0, 0, 284, 279, 1, 0, 0, 0, 284, 281, 1,
        0, 0, 0, 285, 5, 1, 0, 0, 0, 286, 287, 5, 188, 0, 0, 287, 292, 3, 8, 4, 0, 288, 289, 5, 203,
        0, 0, 289, 291, 3, 8, 4, 0, 290, 288, 1, 0, 0, 0, 291, 294, 1, 0, 0, 0, 292, 290, 1, 0, 0,
        0, 292, 293, 1, 0, 0, 0, 293, 7, 1, 0, 0, 0, 294, 292, 1, 0, 0, 0, 295, 297, 3, 234, 117, 0,
        296, 298, 3, 10, 5, 0, 297, 296, 1, 0, 0, 0, 297, 298, 1, 0, 0, 0, 298, 299, 1, 0, 0, 0,
        299, 300, 5, 10, 0, 0, 300, 301, 5, 214, 0, 0, 301, 302, 3, 4, 2, 0, 302, 303, 5, 224, 0, 0,
        303, 9, 1, 0, 0, 0, 304, 305, 5, 214, 0, 0, 305, 310, 3, 234, 117, 0, 306, 307, 5, 203, 0,
        0, 307, 309, 3, 234, 117, 0, 308, 306, 1, 0, 0, 0, 309, 312, 1, 0, 0, 0, 310, 308, 1, 0, 0,
        0, 310, 311, 1, 0, 0, 0, 311, 313, 1, 0, 0, 0, 312, 310, 1, 0, 0, 0, 313, 314, 5, 224, 0, 0,
        314, 11, 1, 0, 0, 0, 315, 316, 5, 5, 0, 0, 316, 317, 5, 158, 0, 0, 317, 319, 3, 212, 106, 0,
        318, 320, 3, 50, 25, 0, 319, 318, 1, 0, 0, 0, 319, 320, 1, 0, 0, 0, 320, 321, 1, 0, 0, 0,
        321, 326, 3, 14, 7, 0, 322, 323, 5, 203, 0, 0, 323, 325, 3, 14, 7, 0, 324, 322, 1, 0, 0, 0,
        325, 328, 1, 0, 0, 0, 326, 324, 1, 0, 0, 0, 326, 327, 1, 0, 0, 0, 327, 13, 1, 0, 0, 0, 328,
        326, 1, 0, 0, 0, 329, 330, 5, 1, 0, 0, 330, 334, 5, 26, 0, 0, 331, 332, 5, 77, 0, 0, 332,
        333, 5, 114, 0, 0, 333, 335, 5, 55, 0, 0, 334, 331, 1, 0, 0, 0, 334, 335, 1, 0, 0, 0, 335,
        336, 1, 0, 0, 0, 336, 339, 3, 74, 37, 0, 337, 338, 5, 2, 0, 0, 338, 340, 3, 206, 103, 0,
        339, 337, 1, 0, 0, 0, 339, 340, 1, 0, 0, 0, 340, 544, 1, 0, 0, 0, 341, 342, 5, 1, 0, 0, 342,
        346, 5, 80, 0, 0, 343, 344, 5, 77, 0, 0, 344, 345, 5, 114, 0, 0, 345, 347, 5, 55, 0, 0, 346,
        343, 1, 0, 0, 0, 346, 347, 1, 0, 0, 0, 347, 348, 1, 0, 0, 0, 348, 351, 3, 78, 39, 0, 349,
        350, 5, 2, 0, 0, 350, 352, 3, 206, 103, 0, 351, 349, 1, 0, 0, 0, 351, 352, 1, 0, 0, 0, 352,
        544, 1, 0, 0, 0, 353, 354, 5, 1, 0, 0, 354, 358, 5, 130, 0, 0, 355, 356, 5, 77, 0, 0, 356,
        357, 5, 114, 0, 0, 357, 359, 5, 55, 0, 0, 358, 355, 1, 0, 0, 0, 358, 359, 1, 0, 0, 0, 359,
        360, 1, 0, 0, 0, 360, 363, 3, 80, 40, 0, 361, 362, 5, 2, 0, 0, 362, 364, 3, 206, 103, 0,
        363, 361, 1, 0, 0, 0, 363, 364, 1, 0, 0, 0, 364, 544, 1, 0, 0, 0, 365, 366, 5, 15, 0, 0,
        366, 369, 3, 22, 11, 0, 367, 368, 5, 67, 0, 0, 368, 370, 3, 212, 106, 0, 369, 367, 1, 0, 0,
        0, 369, 370, 1, 0, 0, 0, 370, 544, 1, 0, 0, 0, 371, 372, 5, 22, 0, 0, 372, 375, 5, 26, 0, 0,
        373, 374, 5, 77, 0, 0, 374, 376, 5, 55, 0, 0, 375, 373, 1, 0, 0, 0, 375, 376, 1, 0, 0, 0,
        376, 377, 1, 0, 0, 0, 377, 380, 3, 206, 103, 0, 378, 379, 5, 79, 0, 0, 379, 381, 3, 22, 11,
        0, 380, 378, 1, 0, 0, 0, 380, 381, 1, 0, 0, 0, 381, 544, 1, 0, 0, 0, 382, 383, 5, 22, 0, 0,
        383, 386, 5, 80, 0, 0, 384, 385, 5, 77, 0, 0, 385, 387, 5, 55, 0, 0, 386, 384, 1, 0, 0, 0,
        386, 387, 1, 0, 0, 0, 387, 388, 1, 0, 0, 0, 388, 391, 3, 206, 103, 0, 389, 390, 5, 79, 0, 0,
        390, 392, 3, 22, 11, 0, 391, 389, 1, 0, 0, 0, 391, 392, 1, 0, 0, 0, 392, 544, 1, 0, 0, 0,
        393, 394, 5, 22, 0, 0, 394, 397, 5, 130, 0, 0, 395, 396, 5, 77, 0, 0, 396, 398, 5, 55, 0, 0,
        397, 395, 1, 0, 0, 0, 397, 398, 1, 0, 0, 0, 398, 399, 1, 0, 0, 0, 399, 402, 3, 206, 103, 0,
        400, 401, 5, 79, 0, 0, 401, 403, 3, 22, 11, 0, 402, 400, 1, 0, 0, 0, 402, 403, 1, 0, 0, 0,
        403, 544, 1, 0, 0, 0, 404, 405, 5, 27, 0, 0, 405, 408, 5, 26, 0, 0, 406, 407, 5, 77, 0, 0,
        407, 409, 5, 55, 0, 0, 408, 406, 1, 0, 0, 0, 408, 409, 1, 0, 0, 0, 409, 410, 1, 0, 0, 0,
        410, 411, 3, 206, 103, 0, 411, 412, 5, 197, 0, 0, 412, 544, 1, 0, 0, 0, 413, 414, 5, 40, 0,
        0, 414, 415, 5, 186, 0, 0, 415, 544, 3, 196, 98, 0, 416, 417, 5, 44, 0, 0, 417, 544, 3, 22,
        11, 0, 418, 419, 5, 50, 0, 0, 419, 422, 5, 26, 0, 0, 420, 421, 5, 77, 0, 0, 421, 423, 5, 55,
        0, 0, 422, 420, 1, 0, 0, 0, 422, 423, 1, 0, 0, 0, 423, 424, 1, 0, 0, 0, 424, 544, 3, 206,
        103, 0, 425, 426, 5, 50, 0, 0, 426, 429, 5, 80, 0, 0, 427, 428, 5, 77, 0, 0, 428, 430, 5,
        55, 0, 0, 429, 427, 1, 0, 0, 0, 429, 430, 1, 0, 0, 0, 430, 431, 1, 0, 0, 0, 431, 544, 3,
        206, 103, 0, 432, 433, 5, 50, 0, 0, 433, 436, 5, 130, 0, 0, 434, 435, 5, 77, 0, 0, 435, 437,
        5, 55, 0, 0, 436, 434, 1, 0, 0, 0, 436, 437, 1, 0, 0, 0, 437, 438, 1, 0, 0, 0, 438, 544, 3,
        206, 103, 0, 439, 440, 5, 50, 0, 0, 440, 544, 3, 22, 11, 0, 441, 443, 5, 66, 0, 0, 442, 444,
        3, 22, 11, 0, 443, 442, 1, 0, 0, 0, 443, 444, 1, 0, 0, 0, 444, 544, 1, 0, 0, 0, 445, 446, 5,
        102, 0, 0, 446, 449, 5, 80, 0, 0, 447, 448, 5, 77, 0, 0, 448, 450, 5, 55, 0, 0, 449, 447, 1,
        0, 0, 0, 449, 450, 1, 0, 0, 0, 450, 451, 1, 0, 0, 0, 451, 454, 3, 206, 103, 0, 452, 453, 5,
        79, 0, 0, 453, 455, 3, 22, 11, 0, 454, 452, 1, 0, 0, 0, 454, 455, 1, 0, 0, 0, 455, 544, 1,
        0, 0, 0, 456, 457, 5, 102, 0, 0, 457, 460, 5, 130, 0, 0, 458, 459, 5, 77, 0, 0, 459, 461, 5,
        55, 0, 0, 460, 458, 1, 0, 0, 0, 460, 461, 1, 0, 0, 0, 461, 462, 1, 0, 0, 0, 462, 465, 3,
        206, 103, 0, 463, 464, 5, 79, 0, 0, 464, 466, 3, 22, 11, 0, 465, 463, 1, 0, 0, 0, 465, 466,
        1, 0, 0, 0, 466, 544, 1, 0, 0, 0, 467, 468, 5, 108, 0, 0, 468, 471, 5, 26, 0, 0, 469, 470,
        5, 77, 0, 0, 470, 472, 5, 55, 0, 0, 471, 469, 1, 0, 0, 0, 471, 472, 1, 0, 0, 0, 472, 473, 1,
        0, 0, 0, 473, 474, 3, 206, 103, 0, 474, 475, 3, 82, 41, 0, 475, 544, 1, 0, 0, 0, 476, 477,
        5, 108, 0, 0, 477, 480, 5, 26, 0, 0, 478, 479, 5, 77, 0, 0, 479, 481, 5, 55, 0, 0, 480, 478,
        1, 0, 0, 0, 480, 481, 1, 0, 0, 0, 481, 482, 1, 0, 0, 0, 482, 483, 3, 206, 103, 0, 483, 484,
        5, 27, 0, 0, 484, 485, 5, 197, 0, 0, 485, 544, 1, 0, 0, 0, 486, 487, 5, 108, 0, 0, 487, 490,
        5, 26, 0, 0, 488, 489, 5, 77, 0, 0, 489, 491, 5, 55, 0, 0, 490, 488, 1, 0, 0, 0, 490, 491,
        1, 0, 0, 0, 491, 492, 1, 0, 0, 0, 492, 493, 3, 206, 103, 0, 493, 494, 5, 134, 0, 0, 494,
        495, 3, 20, 10, 0, 495, 544, 1, 0, 0, 0, 496, 497, 5, 108, 0, 0, 497, 500, 5, 26, 0, 0, 498,
        499, 5, 77, 0, 0, 499, 501, 5, 55, 0, 0, 500, 498, 1, 0, 0, 0, 500, 501, 1, 0, 0, 0, 501,
        502, 1, 0, 0, 0, 502, 544, 3, 74, 37, 0, 503, 504, 5, 108, 0, 0, 504, 505, 5, 121, 0, 0,
        505, 506, 5, 18, 0, 0, 506, 544, 3, 196, 98, 0, 507, 508, 5, 108, 0, 0, 508, 544, 3, 68, 34,
        0, 509, 510, 5, 110, 0, 0, 510, 520, 3, 22, 11, 0, 511, 512, 5, 166, 0, 0, 512, 513, 5, 47,
        0, 0, 513, 521, 5, 197, 0, 0, 514, 515, 5, 166, 0, 0, 515, 516, 5, 182, 0, 0, 516, 521, 5,
        197, 0, 0, 517, 518, 5, 166, 0, 0, 518, 519, 5, 158, 0, 0, 519, 521, 3, 212, 106, 0, 520,
        511, 1, 0, 0, 0, 520, 514, 1, 0, 0, 0, 520, 517, 1, 0, 0, 0, 521, 544, 1, 0, 0, 0, 522, 523,
        5, 134, 0, 0, 523, 544, 5, 172, 0, 0, 524, 525, 5, 135, 0, 0, 525, 528, 5, 26, 0, 0, 526,
        527, 5, 77, 0, 0, 527, 529, 5, 55, 0, 0, 528, 526, 1, 0, 0, 0, 528, 529, 1, 0, 0, 0, 529,
        530, 1, 0, 0, 0, 530, 531, 3, 206, 103, 0, 531, 532, 5, 166, 0, 0, 532, 533, 3, 206, 103, 0,
        533, 544, 1, 0, 0, 0, 534, 535, 5, 136, 0, 0, 535, 536, 3, 22, 11, 0, 536, 537, 5, 67, 0, 0,
        537, 538, 3, 212, 106, 0, 538, 544, 1, 0, 0, 0, 539, 540, 5, 176, 0, 0, 540, 541, 3, 16, 8,
        0, 541, 542, 3, 128, 64, 0, 542, 544, 1, 0, 0, 0, 543, 329, 1, 0, 0, 0, 543, 341, 1, 0, 0,
        0, 543, 353, 1, 0, 0, 0, 543, 365, 1, 0, 0, 0, 543, 371, 1, 0, 0, 0, 543, 382, 1, 0, 0, 0,
        543, 393, 1, 0, 0, 0, 543, 404, 1, 0, 0, 0, 543, 413, 1, 0, 0, 0, 543, 416, 1, 0, 0, 0, 543,
        418, 1, 0, 0, 0, 543, 425, 1, 0, 0, 0, 543, 432, 1, 0, 0, 0, 543, 439, 1, 0, 0, 0, 543, 441,
        1, 0, 0, 0, 543, 445, 1, 0, 0, 0, 543, 456, 1, 0, 0, 0, 543, 467, 1, 0, 0, 0, 543, 476, 1,
        0, 0, 0, 543, 486, 1, 0, 0, 0, 543, 496, 1, 0, 0, 0, 543, 503, 1, 0, 0, 0, 543, 507, 1, 0,
        0, 0, 543, 509, 1, 0, 0, 0, 543, 522, 1, 0, 0, 0, 543, 524, 1, 0, 0, 0, 543, 534, 1, 0, 0,
        0, 543, 539, 1, 0, 0, 0, 544, 15, 1, 0, 0, 0, 545, 550, 3, 18, 9, 0, 546, 547, 5, 203, 0, 0,
        547, 549, 3, 18, 9, 0, 548, 546, 1, 0, 0, 0, 549, 552, 1, 0, 0, 0, 550, 548, 1, 0, 0, 0,
        550, 551, 1, 0, 0, 0, 551, 17, 1, 0, 0, 0, 552, 550, 1, 0, 0, 0, 553, 554, 3, 206, 103, 0,
        554, 555, 5, 208, 0, 0, 555, 556, 3, 196, 98, 0, 556, 19, 1, 0, 0, 0, 557, 558, 7, 0, 0, 0,
        558, 21, 1, 0, 0, 0, 559, 560, 5, 125, 0, 0, 560, 565, 3, 196, 98, 0, 561, 562, 5, 125, 0,
        0, 562, 563, 5, 76, 0, 0, 563, 565, 5, 197, 0, 0, 564, 559, 1, 0, 0, 0, 564, 561, 1, 0, 0,
        0, 565, 23, 1, 0, 0, 0, 566, 567, 5, 15, 0, 0, 567, 568, 5, 46, 0, 0, 568, 570, 3, 212, 106,
        0, 569, 571, 3, 50, 25, 0, 570, 569, 1, 0, 0, 0, 570, 571, 1, 0, 0, 0, 571, 25, 1, 0, 0, 0,
        572, 573, 5, 21, 0, 0, 573, 574, 5, 158, 0, 0, 574, 576, 3, 212, 106, 0, 575, 577, 3, 22,
        11, 0, 576, 575, 1, 0, 0, 0, 576, 577, 1, 0, 0, 0, 577, 27, 1, 0, 0, 0, 578, 579, 7, 1, 0,
        0, 579, 583, 5, 33, 0, 0, 580, 581, 5, 77, 0, 0, 581, 582, 5, 114, 0, 0, 582, 584, 5, 55, 0,
        0, 583, 580, 1, 0, 0, 0, 583, 584, 1, 0, 0, 0, 584, 585, 1, 0, 0, 0, 585, 587, 3, 218, 109,
        0, 586, 588, 3, 50, 25, 0, 587, 586, 1, 0, 0, 0, 587, 588, 1, 0, 0, 0, 588, 590, 1, 0, 0, 0,
        589, 591, 3, 70, 35, 0, 590, 589, 1, 0, 0, 0, 590, 591, 1, 0, 0, 0, 591, 732, 1, 0, 0, 0,
        592, 600, 5, 15, 0, 0, 593, 596, 5, 29, 0, 0, 594, 595, 5, 120, 0, 0, 595, 597, 5, 136, 0,
        0, 596, 594, 1, 0, 0, 0, 596, 597, 1, 0, 0, 0, 597, 600, 1, 0, 0, 0, 598, 600, 5, 136, 0, 0,
        599, 592, 1, 0, 0, 0, 599, 593, 1, 0, 0, 0, 599, 598, 1, 0, 0, 0, 600, 601, 1, 0, 0, 0, 601,
        605, 5, 46, 0, 0, 602, 603, 5, 77, 0, 0, 603, 604, 5, 114, 0, 0, 604, 606, 5, 55, 0, 0, 605,
        602, 1, 0, 0, 0, 605, 606, 1, 0, 0, 0, 606, 607, 1, 0, 0, 0, 607, 609, 3, 212, 106, 0, 608,
        610, 3, 52, 26, 0, 609, 608, 1, 0, 0, 0, 609, 610, 1, 0, 0, 0, 610, 612, 1, 0, 0, 0, 611,
        613, 3, 50, 25, 0, 612, 611, 1, 0, 0, 0, 612, 613, 1, 0, 0, 0, 613, 614, 1, 0, 0, 0, 614,
        615, 3, 30, 15, 0, 615, 616, 3, 34, 17, 0, 616, 732, 1, 0, 0, 0, 617, 618, 7, 1, 0, 0, 618,
        619, 5, 99, 0, 0, 619, 623, 5, 181, 0, 0, 620, 621, 5, 77, 0, 0, 621, 622, 5, 114, 0, 0,
        622, 624, 5, 55, 0, 0, 623, 620, 1, 0, 0, 0, 623, 624, 1, 0, 0, 0, 624, 625, 1, 0, 0, 0,
        625, 627, 3, 212, 106, 0, 626, 628, 3, 52, 26, 0, 627, 626, 1, 0, 0, 0, 627, 628, 1, 0, 0,
        0, 628, 630, 1, 0, 0, 0, 629, 631, 3, 50, 25, 0, 630, 629, 1, 0, 0, 0, 630, 631, 1, 0, 0, 0,
        631, 637, 1, 0, 0, 0, 632, 633, 5, 188, 0, 0, 633, 635, 5, 164, 0, 0, 634, 636, 5, 195, 0,
        0, 635, 634, 1, 0, 0, 0, 635, 636, 1, 0, 0, 0, 636, 638, 1, 0, 0, 0, 637, 632, 1, 0, 0, 0,
        637, 638, 1, 0, 0, 0, 638, 640, 1, 0, 0, 0, 639, 641, 3, 54, 27, 0, 640, 639, 1, 0, 0, 0,
        640, 641, 1, 0, 0, 0, 641, 643, 1, 0, 0, 0, 642, 644, 3, 58, 29, 0, 643, 642, 1, 0, 0, 0,
        643, 644, 1, 0, 0, 0, 644, 645, 1, 0, 0, 0, 645, 646, 3, 56, 28, 0, 646, 732, 1, 0, 0, 0,
        647, 648, 7, 1, 0, 0, 648, 649, 5, 103, 0, 0, 649, 653, 5, 181, 0, 0, 650, 651, 5, 77, 0, 0,
        651, 652, 5, 114, 0, 0, 652, 654, 5, 55, 0, 0, 653, 650, 1, 0, 0, 0, 653, 654, 1, 0, 0, 0,
        654, 655, 1, 0, 0, 0, 655, 657, 3, 212, 106, 0, 656, 658, 3, 52, 26, 0, 657, 656, 1, 0, 0,
        0, 657, 658, 1, 0, 0, 0, 658, 660, 1, 0, 0, 0, 659, 661, 3, 50, 25, 0, 660, 659, 1, 0, 0, 0,
        660, 661, 1, 0, 0, 0, 661, 663, 1, 0, 0, 0, 662, 664, 3, 58, 29, 0, 663, 662, 1, 0, 0, 0,
        663, 664, 1, 0, 0, 0, 664, 670, 1, 0, 0, 0, 665, 671, 3, 54, 27, 0, 666, 668, 3, 60, 30, 0,
        667, 669, 5, 126, 0, 0, 668, 667, 1, 0, 0, 0, 668, 669, 1, 0, 0, 0, 669, 671, 1, 0, 0, 0,
        670, 665, 1, 0, 0, 0, 670, 666, 1, 0, 0, 0, 671, 672, 1, 0, 0, 0, 672, 673, 3, 56, 28, 0,
        673, 732, 1, 0, 0, 0, 674, 682, 5, 15, 0, 0, 675, 678, 5, 29, 0, 0, 676, 677, 5, 120, 0, 0,
        677, 679, 5, 136, 0, 0, 678, 676, 1, 0, 0, 0, 678, 679, 1, 0, 0, 0, 679, 682, 1, 0, 0, 0,
        680, 682, 5, 136, 0, 0, 681, 674, 1, 0, 0, 0, 681, 675, 1, 0, 0, 0, 681, 680, 1, 0, 0, 0,
        682, 684, 1, 0, 0, 0, 683, 685, 5, 160, 0, 0, 684, 683, 1, 0, 0, 0, 684, 685, 1, 0, 0, 0,
        685, 686, 1, 0, 0, 0, 686, 690, 5, 158, 0, 0, 687, 688, 5, 77, 0, 0, 688, 689, 5, 114, 0, 0,
        689, 691, 5, 55, 0, 0, 690, 687, 1, 0, 0, 0, 690, 691, 1, 0, 0, 0, 691, 692, 1, 0, 0, 0,
        692, 694, 3, 212, 106, 0, 693, 695, 3, 52, 26, 0, 694, 693, 1, 0, 0, 0, 694, 695, 1, 0, 0,
        0, 695, 697, 1, 0, 0, 0, 696, 698, 3, 50, 25, 0, 697, 696, 1, 0, 0, 0, 697, 698, 1, 0, 0, 0,
        698, 700, 1, 0, 0, 0, 699, 701, 3, 58, 29, 0, 700, 699, 1, 0, 0, 0, 700, 701, 1, 0, 0, 0,
        701, 703, 1, 0, 0, 0, 702, 704, 3, 60, 30, 0, 703, 702, 1, 0, 0, 0, 703, 704, 1, 0, 0, 0,
        704, 706, 1, 0, 0, 0, 705, 707, 3, 56, 28, 0, 706, 705, 1, 0, 0, 0, 706, 707, 1, 0, 0, 0,
        707, 732, 1, 0, 0, 0, 708, 711, 7, 1, 0, 0, 709, 710, 5, 120, 0, 0, 710, 712, 5, 136, 0, 0,
        711, 709, 1, 0, 0, 0, 711, 712, 1, 0, 0, 0, 712, 713, 1, 0, 0, 0, 713, 717, 5, 181, 0, 0,
        714, 715, 5, 77, 0, 0, 715, 716, 5, 114, 0, 0, 716, 718, 5, 55, 0, 0, 717, 714, 1, 0, 0, 0,
        717, 718, 1, 0, 0, 0, 718, 719, 1, 0, 0, 0, 719, 721, 3, 212, 106, 0, 720, 722, 3, 52, 26,
        0, 721, 720, 1, 0, 0, 0, 721, 722, 1, 0, 0, 0, 722, 724, 1, 0, 0, 0, 723, 725, 3, 50, 25, 0,
        724, 723, 1, 0, 0, 0, 724, 725, 1, 0, 0, 0, 725, 727, 1, 0, 0, 0, 726, 728, 3, 58, 29, 0,
        727, 726, 1, 0, 0, 0, 727, 728, 1, 0, 0, 0, 728, 729, 1, 0, 0, 0, 729, 730, 3, 56, 28, 0,
        730, 732, 1, 0, 0, 0, 731, 578, 1, 0, 0, 0, 731, 599, 1, 0, 0, 0, 731, 617, 1, 0, 0, 0, 731,
        647, 1, 0, 0, 0, 731, 681, 1, 0, 0, 0, 731, 708, 1, 0, 0, 0, 732, 29, 1, 0, 0, 0, 733, 734,
        5, 214, 0, 0, 734, 739, 3, 32, 16, 0, 735, 736, 5, 203, 0, 0, 736, 738, 3, 32, 16, 0, 737,
        735, 1, 0, 0, 0, 738, 741, 1, 0, 0, 0, 739, 737, 1, 0, 0, 0, 739, 740, 1, 0, 0, 0, 740, 742,
        1, 0, 0, 0, 741, 739, 1, 0, 0, 0, 742, 743, 5, 224, 0, 0, 743, 31, 1, 0, 0, 0, 744, 745, 3,
        234, 117, 0, 745, 767, 3, 190, 95, 0, 746, 747, 4, 16, 0, 1, 747, 748, 5, 38, 0, 0, 748,
        749, 3, 224, 112, 0, 749, 750, 6, 16, -1, 0, 750, 766, 1, 0, 0, 0, 751, 752, 4, 16, 1, 1,
        752, 753, 5, 57, 0, 0, 753, 754, 3, 196, 98, 0, 754, 755, 6, 16, -1, 0, 755, 766, 1, 0, 0,
        0, 756, 757, 4, 16, 2, 1, 757, 758, 5, 74, 0, 0, 758, 766, 6, 16, -1, 0, 759, 760, 4, 16, 3,
        1, 760, 761, 5, 82, 0, 0, 761, 766, 6, 16, -1, 0, 762, 763, 4, 16, 4, 1, 763, 764, 5, 88, 0,
        0, 764, 766, 6, 16, -1, 0, 765, 746, 1, 0, 0, 0, 765, 751, 1, 0, 0, 0, 765, 756, 1, 0, 0, 0,
        765, 759, 1, 0, 0, 0, 765, 762, 1, 0, 0, 0, 766, 769, 1, 0, 0, 0, 767, 765, 1, 0, 0, 0, 767,
        768, 1, 0, 0, 0, 768, 33, 1, 0, 0, 0, 769, 767, 1, 0, 0, 0, 770, 772, 3, 36, 18, 0, 771,
        770, 1, 0, 0, 0, 771, 772, 1, 0, 0, 0, 772, 795, 1, 0, 0, 0, 773, 774, 4, 17, 5, 1, 774,
        775, 3, 40, 20, 0, 775, 776, 6, 17, -1, 0, 776, 794, 1, 0, 0, 0, 777, 778, 4, 17, 6, 1, 778,
        779, 3, 42, 21, 0, 779, 780, 6, 17, -1, 0, 780, 794, 1, 0, 0, 0, 781, 782, 4, 17, 7, 1, 782,
        783, 3, 44, 22, 0, 783, 784, 6, 17, -1, 0, 784, 794, 1, 0, 0, 0, 785, 786, 4, 17, 8, 1, 786,
        787, 3, 46, 23, 0, 787, 788, 6, 17, -1, 0, 788, 794, 1, 0, 0, 0, 789, 790, 4, 17, 9, 1, 790,
        791, 3, 48, 24, 0, 791, 792, 6, 17, -1, 0, 792, 794, 1, 0, 0, 0, 793, 773, 1, 0, 0, 0, 793,
        777, 1, 0, 0, 0, 793, 781, 1, 0, 0, 0, 793, 785, 1, 0, 0, 0, 793, 789, 1, 0, 0, 0, 794, 797,
        1, 0, 0, 0, 795, 793, 1, 0, 0, 0, 795, 796, 1, 0, 0, 0, 796, 35, 1, 0, 0, 0, 797, 795, 1, 0,
        0, 0, 798, 799, 5, 129, 0, 0, 799, 800, 5, 90, 0, 0, 800, 801, 3, 192, 96, 0, 801, 37, 1, 0,
        0, 0, 802, 809, 3, 234, 117, 0, 803, 806, 3, 234, 117, 0, 804, 805, 5, 214, 0, 0, 805, 807,
        5, 224, 0, 0, 806, 804, 1, 0, 0, 0, 806, 807, 1, 0, 0, 0, 807, 810, 1, 0, 0, 0, 808, 810, 3,
        224, 112, 0, 809, 803, 1, 0, 0, 0, 809, 808, 1, 0, 0, 0, 810, 39, 1, 0, 0, 0, 811, 812, 5,
        151, 0, 0, 812, 813, 5, 214, 0, 0, 813, 814, 3, 234, 117, 0, 814, 818, 5, 214, 0, 0, 815,
        817, 3, 38, 19, 0, 816, 815, 1, 0, 0, 0, 817, 820, 1, 0, 0, 0, 818, 816, 1, 0, 0, 0, 818,
        819, 1, 0, 0, 0, 819, 821, 1, 0, 0, 0, 820, 818, 1, 0, 0, 0, 821, 822, 5, 224, 0, 0, 822,
        823, 5, 224, 0, 0, 823, 41, 1, 0, 0, 0, 824, 825, 5, 96, 0, 0, 825, 835, 5, 214, 0, 0, 826,
        836, 5, 195, 0, 0, 827, 828, 5, 106, 0, 0, 828, 829, 5, 195, 0, 0, 829, 830, 5, 104, 0, 0,
        830, 836, 5, 195, 0, 0, 831, 832, 5, 104, 0, 0, 832, 833, 5, 195, 0, 0, 833, 834, 5, 106, 0,
        0, 834, 836, 5, 195, 0, 0, 835, 826, 1, 0, 0, 0, 835, 827, 1, 0, 0, 0, 835, 831, 1, 0, 0, 0,
        836, 837, 1, 0, 0, 0, 837, 838, 5, 224, 0, 0, 838, 43, 1, 0, 0, 0, 839, 840, 5, 93, 0, 0,
        840, 841, 5, 214, 0, 0, 841, 842, 3, 234, 117, 0, 842, 846, 5, 214, 0, 0, 843, 845, 3, 38,
        19, 0, 844, 843, 1, 0, 0, 0, 845, 848, 1, 0, 0, 0, 846, 844, 1, 0, 0, 0, 846, 847, 1, 0, 0,
        0, 847, 849, 1, 0, 0, 0, 848, 846, 1, 0, 0, 0, 849, 850, 5, 224, 0, 0, 850, 851, 5, 224, 0,
        0, 851, 45, 1, 0, 0, 0, 852, 853, 5, 132, 0, 0, 853, 864, 5, 214, 0, 0, 854, 855, 5, 106, 0,
        0, 855, 856, 3, 234, 117, 0, 856, 857, 5, 104, 0, 0, 857, 858, 3, 234, 117, 0, 858, 865, 1,
        0, 0, 0, 859, 860, 5, 104, 0, 0, 860, 861, 3, 234, 117, 0, 861, 862, 5, 106, 0, 0, 862, 863,
        3, 234, 117, 0, 863, 865, 1, 0, 0, 0, 864, 854, 1, 0, 0, 0, 864, 859, 1, 0, 0, 0, 865, 866,
        1, 0, 0, 0, 866, 867, 5, 224, 0, 0, 867, 47, 1, 0, 0, 0, 868, 869, 5, 149, 0, 0, 869, 870,
        5, 214, 0, 0, 870, 871, 3, 162, 81, 0, 871, 872, 5, 224, 0, 0, 872, 49, 1, 0, 0, 0, 873,
        874, 5, 118, 0, 0, 874, 877, 5, 23, 0, 0, 875, 878, 3, 234, 117, 0, 876, 878, 5, 197, 0, 0,
        877, 875, 1, 0, 0, 0, 877, 876, 1, 0, 0, 0, 878, 51, 1, 0, 0, 0, 879, 880, 5, 179, 0, 0,
        880, 881, 5, 197, 0, 0, 881, 53, 1, 0, 0, 0, 882, 883, 5, 166, 0, 0, 883, 884, 3, 212, 106,
        0, 884, 55, 1, 0, 0, 0, 885, 886, 5, 10, 0, 0, 886, 887, 3, 110, 55, 0, 887, 57, 1, 0, 0, 0,
        888, 889, 5, 214, 0, 0, 889, 894, 3, 72, 36, 0, 890, 891, 5, 203, 0, 0, 891, 893, 3, 72, 36,
        0, 892, 890, 1, 0, 0, 0, 893, 896, 1, 0, 0, 0, 894, 892, 1, 0, 0, 0, 894, 895, 1, 0, 0, 0,
        895, 897, 1, 0, 0, 0, 896, 894, 1, 0, 0, 0, 897, 898, 5, 224, 0, 0, 898, 904, 1, 0, 0, 0,
        899, 900, 5, 10, 0, 0, 900, 904, 3, 212, 106, 0, 901, 902, 5, 10, 0, 0, 902, 904, 3, 210,
        105, 0, 903, 888, 1, 0, 0, 0, 903, 899, 1, 0, 0, 0, 903, 901, 1, 0, 0, 0, 904, 59, 1, 0, 0,
        0, 905, 932, 3, 70, 35, 0, 906, 907, 4, 30, 10, 1, 907, 908, 3, 134, 67, 0, 908, 909, 6, 30,
        -1, 0, 909, 931, 1, 0, 0, 0, 910, 911, 4, 30, 11, 1, 911, 912, 3, 62, 31, 0, 912, 913, 6,
        30, -1, 0, 913, 931, 1, 0, 0, 0, 914, 915, 4, 30, 12, 1, 915, 916, 3, 64, 32, 0, 916, 917,
        6, 30, -1, 0, 917, 931, 1, 0, 0, 0, 918, 919, 4, 30, 13, 1, 919, 920, 3, 66, 33, 0, 920,
        921, 6, 30, -1, 0, 921, 931, 1, 0, 0, 0, 922, 923, 4, 30, 14, 1, 923, 924, 3, 68, 34, 0,
        924, 925, 6, 30, -1, 0, 925, 931, 1, 0, 0, 0, 926, 927, 4, 30, 15, 1, 927, 928, 3, 142, 71,
        0, 928, 929, 6, 30, -1, 0, 929, 931, 1, 0, 0, 0, 930, 906, 1, 0, 0, 0, 930, 910, 1, 0, 0, 0,
        930, 914, 1, 0, 0, 0, 930, 918, 1, 0, 0, 0, 930, 922, 1, 0, 0, 0, 930, 926, 1, 0, 0, 0, 931,
        934, 1, 0, 0, 0, 932, 930, 1, 0, 0, 0, 932, 933, 1, 0, 0, 0, 933, 61, 1, 0, 0, 0, 934, 932,
        1, 0, 0, 0, 935, 936, 5, 125, 0, 0, 936, 937, 5, 18, 0, 0, 937, 938, 3, 196, 98, 0, 938, 63,
        1, 0, 0, 0, 939, 940, 5, 129, 0, 0, 940, 941, 5, 90, 0, 0, 941, 942, 3, 196, 98, 0, 942, 65,
        1, 0, 0, 0, 943, 944, 5, 143, 0, 0, 944, 945, 5, 18, 0, 0, 945, 946, 3, 196, 98, 0, 946, 67,
        1, 0, 0, 0, 947, 948, 5, 172, 0, 0, 948, 953, 3, 86, 43, 0, 949, 950, 5, 203, 0, 0, 950,
        952, 3, 86, 43, 0, 951, 949, 1, 0, 0, 0, 952, 955, 1, 0, 0, 0, 953, 951, 1, 0, 0, 0, 953,
        954, 1, 0, 0, 0, 954, 69, 1, 0, 0, 0, 955, 953, 1, 0, 0, 0, 956, 958, 5, 53, 0, 0, 957, 959,
        5, 208, 0, 0, 958, 957, 1, 0, 0, 0, 958, 959, 1, 0, 0, 0, 959, 960, 1, 0, 0, 0, 960, 966, 3,
        236, 118, 0, 961, 963, 5, 214, 0, 0, 962, 964, 3, 192, 96, 0, 963, 962, 1, 0, 0, 0, 963,
        964, 1, 0, 0, 0, 964, 965, 1, 0, 0, 0, 965, 967, 5, 224, 0, 0, 966, 961, 1, 0, 0, 0, 966,
        967, 1, 0, 0, 0, 967, 71, 1, 0, 0, 0, 968, 979, 3, 74, 37, 0, 969, 970, 5, 28, 0, 0, 970,
        971, 3, 234, 117, 0, 971, 972, 5, 21, 0, 0, 972, 973, 3, 196, 98, 0, 973, 979, 1, 0, 0, 0,
        974, 975, 5, 80, 0, 0, 975, 979, 3, 78, 39, 0, 976, 977, 5, 130, 0, 0, 977, 979, 3, 80, 40,
        0, 978, 968, 1, 0, 0, 0, 978, 969, 1, 0, 0, 0, 978, 974, 1, 0, 0, 0, 978, 976, 1, 0, 0, 0,
        979, 73, 1, 0, 0, 0, 980, 981, 3, 206, 103, 0, 981, 983, 3, 190, 95, 0, 982, 984, 3, 76, 38,
        0, 983, 982, 1, 0, 0, 0, 983, 984, 1, 0, 0, 0, 984, 987, 1, 0, 0, 0, 985, 986, 5, 27, 0, 0,
        986, 988, 5, 197, 0, 0, 987, 985, 1, 0, 0, 0, 987, 988, 1, 0, 0, 0, 988, 990, 1, 0, 0, 0,
        989, 991, 3, 82, 41, 0, 990, 989, 1, 0, 0, 0, 990, 991, 1, 0, 0, 0, 991, 994, 1, 0, 0, 0,
        992, 993, 5, 172, 0, 0, 993, 995, 3, 196, 98, 0, 994, 992, 1, 0, 0, 0, 994, 995, 1, 0, 0, 0,
        995, 1013, 1, 0, 0, 0, 996, 998, 3, 206, 103, 0, 997, 999, 3, 190, 95, 0, 998, 997, 1, 0, 0,
        0, 998, 999, 1, 0, 0, 0, 999, 1000, 1, 0, 0, 0, 1000, 1003, 3, 76, 38, 0, 1001, 1002, 5, 27,
        0, 0, 1002, 1004, 5, 197, 0, 0, 1003, 1001, 1, 0, 0, 0, 1003, 1004, 1, 0, 0, 0, 1004, 1006,
        1, 0, 0, 0, 1005, 1007, 3, 82, 41, 0, 1006, 1005, 1, 0, 0, 0, 1006, 1007, 1, 0, 0, 0, 1007,
        1010, 1, 0, 0, 0, 1008, 1009, 5, 172, 0, 0, 1009, 1011, 3, 196, 98, 0, 1010, 1008, 1, 0, 0,
        0, 1010, 1011, 1, 0, 0, 0, 1011, 1013, 1, 0, 0, 0, 1012, 980, 1, 0, 0, 0, 1012, 996, 1, 0,
        0, 0, 1013, 75, 1, 0, 0, 0, 1014, 1015, 7, 2, 0, 0, 1015, 1016, 3, 196, 98, 0, 1016, 77, 1,
        0, 0, 0, 1017, 1018, 3, 206, 103, 0, 1018, 1019, 3, 196, 98, 0, 1019, 1020, 5, 173, 0, 0,
        1020, 1021, 3, 190, 95, 0, 1021, 1022, 5, 71, 0, 0, 1022, 1023, 5, 195, 0, 0, 1023, 79, 1,
        0, 0, 0, 1024, 1025, 3, 206, 103, 0, 1025, 1026, 3, 108, 54, 0, 1026, 81, 1, 0, 0, 0, 1027,
        1028, 5, 24, 0, 0, 1028, 1029, 5, 214, 0, 0, 1029, 1034, 3, 84, 42, 0, 1030, 1031, 5, 203,
        0, 0, 1031, 1033, 3, 84, 42, 0, 1032, 1030, 1, 0, 0, 0, 1033, 1036, 1, 0, 0, 0, 1034, 1032,
        1, 0, 0, 0, 1034, 1035, 1, 0, 0, 0, 1035, 1037, 1, 0, 0, 0, 1036, 1034, 1, 0, 0, 0, 1037,
        1038, 5, 224, 0, 0, 1038, 83, 1, 0, 0, 0, 1039, 1045, 3, 234, 117, 0, 1040, 1042, 5, 214, 0,
        0, 1041, 1043, 3, 192, 96, 0, 1042, 1041, 1, 0, 0, 0, 1042, 1043, 1, 0, 0, 0, 1043, 1044, 1,
        0, 0, 0, 1044, 1046, 5, 224, 0, 0, 1045, 1040, 1, 0, 0, 0, 1045, 1046, 1, 0, 0, 0, 1046, 85,
        1, 0, 0, 0, 1047, 1055, 3, 196, 98, 0, 1048, 1056, 5, 40, 0, 0, 1049, 1050, 5, 166, 0, 0,
        1050, 1051, 5, 47, 0, 0, 1051, 1056, 5, 197, 0, 0, 1052, 1053, 5, 166, 0, 0, 1053, 1054, 5,
        182, 0, 0, 1054, 1056, 5, 197, 0, 0, 1055, 1048, 1, 0, 0, 0, 1055, 1049, 1, 0, 0, 0, 1055,
        1052, 1, 0, 0, 0, 1055, 1056, 1, 0, 0, 0, 1056, 87, 1, 0, 0, 0, 1057, 1059, 7, 3, 0, 0,
        1058, 1060, 5, 158, 0, 0, 1059, 1058, 1, 0, 0, 0, 1059, 1060, 1, 0, 0, 0, 1060, 1061, 1, 0,
        0, 0, 1061, 1062, 3, 208, 104, 0, 1062, 89, 1, 0, 0, 0, 1063, 1064, 7, 4, 0, 0, 1064, 1067,
        5, 33, 0, 0, 1065, 1066, 5, 77, 0, 0, 1066, 1068, 5, 55, 0, 0, 1067, 1065, 1, 0, 0, 0, 1067,
        1068, 1, 0, 0, 0, 1068, 1069, 1, 0, 0, 0, 1069, 1071, 3, 218, 109, 0, 1070, 1072, 3, 50, 25,
        0, 1071, 1070, 1, 0, 0, 0, 1071, 1072, 1, 0, 0, 0, 1072, 1095, 1, 0, 0, 0, 1073, 1080, 7, 4,
        0, 0, 1074, 1081, 5, 46, 0, 0, 1075, 1077, 5, 160, 0, 0, 1076, 1075, 1, 0, 0, 0, 1076, 1077,
        1, 0, 0, 0, 1077, 1078, 1, 0, 0, 0, 1078, 1081, 5, 158, 0, 0, 1079, 1081, 5, 181, 0, 0,
        1080, 1074, 1, 0, 0, 0, 1080, 1076, 1, 0, 0, 0, 1080, 1079, 1, 0, 0, 0, 1081, 1084, 1, 0, 0,
        0, 1082, 1083, 5, 77, 0, 0, 1083, 1085, 5, 55, 0, 0, 1084, 1082, 1, 0, 0, 0, 1084, 1085, 1,
        0, 0, 0, 1085, 1086, 1, 0, 0, 0, 1086, 1088, 3, 212, 106, 0, 1087, 1089, 3, 50, 25, 0, 1088,
        1087, 1, 0, 0, 0, 1088, 1089, 1, 0, 0, 0, 1089, 1092, 1, 0, 0, 0, 1090, 1091, 5, 113, 0, 0,
        1091, 1093, 5, 39, 0, 0, 1092, 1090, 1, 0, 0, 0, 1092, 1093, 1, 0, 0, 0, 1093, 1095, 1, 0,
        0, 0, 1094, 1063, 1, 0, 0, 0, 1094, 1073, 1, 0, 0, 0, 1095, 91, 1, 0, 0, 0, 1096, 1097, 5,
        55, 0, 0, 1097, 1098, 5, 33, 0, 0, 1098, 1110, 3, 218, 109, 0, 1099, 1106, 5, 55, 0, 0,
        1100, 1107, 5, 46, 0, 0, 1101, 1103, 5, 160, 0, 0, 1102, 1101, 1, 0, 0, 0, 1102, 1103, 1, 0,
        0, 0, 1103, 1104, 1, 0, 0, 0, 1104, 1107, 5, 158, 0, 0, 1105, 1107, 5, 181, 0, 0, 1106,
        1100, 1, 0, 0, 0, 1106, 1102, 1, 0, 0, 0, 1106, 1105, 1, 0, 0, 0, 1106, 1107, 1, 0, 0, 0,
        1107, 1108, 1, 0, 0, 0, 1108, 1110, 3, 212, 106, 0, 1109, 1096, 1, 0, 0, 0, 1109, 1099, 1,
        0, 0, 0, 1110, 93, 1, 0, 0, 0, 1111, 1112, 5, 56, 0, 0, 1112, 1113, 5, 13, 0, 0, 1113, 1118,
        3, 4, 2, 0, 1114, 1115, 5, 56, 0, 0, 1115, 1116, 5, 156, 0, 0, 1116, 1118, 3, 4, 2, 0, 1117,
        1111, 1, 0, 0, 0, 1117, 1114, 1, 0, 0, 0, 1118, 95, 1, 0, 0, 0, 1119, 1120, 5, 84, 0, 0,
        1120, 1122, 5, 86, 0, 0, 1121, 1123, 5, 158, 0, 0, 1122, 1121, 1, 0, 0, 0, 1122, 1123, 1, 0,
        0, 0, 1123, 1127, 1, 0, 0, 0, 1124, 1128, 3, 212, 106, 0, 1125, 1126, 5, 69, 0, 0, 1126,
        1128, 3, 210, 105, 0, 1127, 1124, 1, 0, 0, 0, 1127, 1125, 1, 0, 0, 0, 1128, 1130, 1, 0, 0,
        0, 1129, 1131, 3, 98, 49, 0, 1130, 1129, 1, 0, 0, 0, 1130, 1131, 1, 0, 0, 0, 1131, 1132, 1,
        0, 0, 0, 1132, 1133, 3, 100, 50, 0, 1133, 97, 1, 0, 0, 0, 1134, 1135, 5, 214, 0, 0, 1135,
        1140, 3, 206, 103, 0, 1136, 1137, 5, 203, 0, 0, 1137, 1139, 3, 206, 103, 0, 1138, 1136, 1,
        0, 0, 0, 1139, 1142, 1, 0, 0, 0, 1140, 1138, 1, 0, 0, 0, 1140, 1141, 1, 0, 0, 0, 1141, 1143,
        1, 0, 0, 0, 1142, 1140, 1, 0, 0, 0, 1143, 1144, 5, 224, 0, 0, 1144, 99, 1, 0, 0, 0, 1145,
        1146, 5, 65, 0, 0, 1146, 1155, 3, 234, 117, 0, 1147, 1155, 5, 180, 0, 0, 1148, 1150, 3, 110,
        55, 0, 1149, 1151, 5, 225, 0, 0, 1150, 1149, 1, 0, 0, 0, 1150, 1151, 1, 0, 0, 0, 1151, 1152,
        1, 0, 0, 0, 1152, 1153, 5, 0, 0, 1, 1153, 1155, 1, 0, 0, 0, 1154, 1145, 1, 0, 0, 0, 1154,
        1147, 1, 0, 0, 0, 1154, 1148, 1, 0, 0, 0, 1155, 101, 1, 0, 0, 0, 1156, 1157, 5, 91, 0, 0,
        1157, 1159, 5, 111, 0, 0, 1158, 1160, 3, 50, 25, 0, 1159, 1158, 1, 0, 0, 0, 1159, 1160, 1,
        0, 0, 0, 1160, 1161, 1, 0, 0, 0, 1161, 1163, 3, 128, 64, 0, 1162, 1164, 7, 5, 0, 0, 1163,
        1162, 1, 0, 0, 0, 1163, 1164, 1, 0, 0, 0, 1164, 103, 1, 0, 0, 0, 1165, 1166, 5, 119, 0, 0,
        1166, 1167, 5, 158, 0, 0, 1167, 1169, 3, 212, 106, 0, 1168, 1170, 3, 50, 25, 0, 1169, 1168,
        1, 0, 0, 0, 1169, 1170, 1, 0, 0, 0, 1170, 1172, 1, 0, 0, 0, 1171, 1173, 3, 22, 11, 0, 1172,
        1171, 1, 0, 0, 0, 1172, 1173, 1, 0, 0, 0, 1173, 1175, 1, 0, 0, 0, 1174, 1176, 5, 60, 0, 0,
        1175, 1174, 1, 0, 0, 0, 1175, 1176, 1, 0, 0, 0, 1176, 1178, 1, 0, 0, 0, 1177, 1179, 5, 37,
        0, 0, 1178, 1177, 1, 0, 0, 0, 1178, 1179, 1, 0, 0, 0, 1179, 105, 1, 0, 0, 0, 1180, 1181, 5,
        135, 0, 0, 1181, 1182, 5, 158, 0, 0, 1182, 1183, 3, 212, 106, 0, 1183, 1184, 5, 166, 0, 0,
        1184, 1192, 3, 212, 106, 0, 1185, 1186, 5, 203, 0, 0, 1186, 1187, 3, 212, 106, 0, 1187,
        1188, 5, 166, 0, 0, 1188, 1189, 3, 212, 106, 0, 1189, 1191, 1, 0, 0, 0, 1190, 1185, 1, 0, 0,
        0, 1191, 1194, 1, 0, 0, 0, 1192, 1190, 1, 0, 0, 0, 1192, 1193, 1, 0, 0, 0, 1193, 1196, 1, 0,
        0, 0, 1194, 1192, 1, 0, 0, 0, 1195, 1197, 3, 50, 25, 0, 1196, 1195, 1, 0, 0, 0, 1196, 1197,
        1, 0, 0, 0, 1197, 107, 1, 0, 0, 0, 1198, 1200, 5, 214, 0, 0, 1199, 1201, 3, 116, 58, 0,
        1200, 1199, 1, 0, 0, 0, 1200, 1201, 1, 0, 0, 0, 1201, 1202, 1, 0, 0, 0, 1202, 1203, 5, 145,
        0, 0, 1203, 1205, 3, 192, 96, 0, 1204, 1206, 3, 130, 65, 0, 1205, 1204, 1, 0, 0, 0, 1205,
        1206, 1, 0, 0, 0, 1206, 1208, 1, 0, 0, 0, 1207, 1209, 3, 136, 68, 0, 1208, 1207, 1, 0, 0, 0,
        1208, 1209, 1, 0, 0, 0, 1209, 1210, 1, 0, 0, 0, 1210, 1211, 5, 224, 0, 0, 1211, 109, 1, 0,
        0, 0, 1212, 1218, 3, 112, 56, 0, 1213, 1214, 5, 175, 0, 0, 1214, 1215, 5, 4, 0, 0, 1215,
        1217, 3, 112, 56, 0, 1216, 1213, 1, 0, 0, 0, 1217, 1220, 1, 0, 0, 0, 1218, 1216, 1, 0, 0, 0,
        1218, 1219, 1, 0, 0, 0, 1219, 111, 1, 0, 0, 0, 1220, 1218, 1, 0, 0, 0, 1221, 1227, 3, 114,
        57, 0, 1222, 1223, 5, 214, 0, 0, 1223, 1224, 3, 110, 55, 0, 1224, 1225, 5, 224, 0, 0, 1225,
        1227, 1, 0, 0, 0, 1226, 1221, 1, 0, 0, 0, 1226, 1222, 1, 0, 0, 0, 1227, 113, 1, 0, 0, 0,
        1228, 1230, 3, 116, 58, 0, 1229, 1228, 1, 0, 0, 0, 1229, 1230, 1, 0, 0, 0, 1230, 1231, 1, 0,
        0, 0, 1231, 1233, 5, 145, 0, 0, 1232, 1234, 5, 48, 0, 0, 1233, 1232, 1, 0, 0, 0, 1233, 1234,
        1, 0, 0, 0, 1234, 1236, 1, 0, 0, 0, 1235, 1237, 3, 118, 59, 0, 1236, 1235, 1, 0, 0, 0, 1236,
        1237, 1, 0, 0, 0, 1237, 1238, 1, 0, 0, 0, 1238, 1240, 3, 192, 96, 0, 1239, 1241, 3, 120, 60,
        0, 1240, 1239, 1, 0, 0, 0, 1240, 1241, 1, 0, 0, 0, 1241, 1243, 1, 0, 0, 0, 1242, 1244, 3,
        122, 61, 0, 1243, 1242, 1, 0, 0, 0, 1243, 1244, 1, 0, 0, 0, 1244, 1246, 1, 0, 0, 0, 1245,
        1247, 3, 124, 62, 0, 1246, 1245, 1, 0, 0, 0, 1246, 1247, 1, 0, 0, 0, 1247, 1249, 1, 0, 0, 0,
        1248, 1250, 3, 126, 63, 0, 1249, 1248, 1, 0, 0, 0, 1249, 1250, 1, 0, 0, 0, 1250, 1252, 1, 0,
        0, 0, 1251, 1253, 3, 128, 64, 0, 1252, 1251, 1, 0, 0, 0, 1252, 1253, 1, 0, 0, 0, 1253, 1255,
        1, 0, 0, 0, 1254, 1256, 3, 130, 65, 0, 1255, 1254, 1, 0, 0, 0, 1255, 1256, 1, 0, 0, 0, 1256,
        1259, 1, 0, 0, 0, 1257, 1258, 5, 188, 0, 0, 1258, 1260, 7, 6, 0, 0, 1259, 1257, 1, 0, 0, 0,
        1259, 1260, 1, 0, 0, 0, 1260, 1263, 1, 0, 0, 0, 1261, 1262, 5, 188, 0, 0, 1262, 1264, 5,
        168, 0, 0, 1263, 1261, 1, 0, 0, 0, 1263, 1264, 1, 0, 0, 0, 1264, 1266, 1, 0, 0, 0, 1265,
        1267, 3, 132, 66, 0, 1266, 1265, 1, 0, 0, 0, 1266, 1267, 1, 0, 0, 0, 1267, 1269, 1, 0, 0, 0,
        1268, 1270, 3, 134, 67, 0, 1269, 1268, 1, 0, 0, 0, 1269, 1270, 1, 0, 0, 0, 1270, 1272, 1, 0,
        0, 0, 1271, 1273, 3, 138, 69, 0, 1272, 1271, 1, 0, 0, 0, 1272, 1273, 1, 0, 0, 0, 1273, 1275,
        1, 0, 0, 0, 1274, 1276, 3, 140, 70, 0, 1275, 1274, 1, 0, 0, 0, 1275, 1276, 1, 0, 0, 0, 1276,
        1278, 1, 0, 0, 0, 1277, 1279, 3, 142, 71, 0, 1278, 1277, 1, 0, 0, 0, 1278, 1279, 1, 0, 0, 0,
        1279, 115, 1, 0, 0, 0, 1280, 1281, 5, 188, 0, 0, 1281, 1282, 3, 192, 96, 0, 1282, 117, 1, 0,
        0, 0, 1283, 1284, 5, 167, 0, 0, 1284, 1287, 5, 195, 0, 0, 1285, 1286, 5, 188, 0, 0, 1286,
        1288, 5, 163, 0, 0, 1287, 1285, 1, 0, 0, 0, 1287, 1288, 1, 0, 0, 0, 1288, 119, 1, 0, 0, 0,
        1289, 1290, 5, 67, 0, 0, 1290, 1291, 3, 144, 72, 0, 1291, 121, 1, 0, 0, 0, 1292, 1294, 7, 7,
        0, 0, 1293, 1292, 1, 0, 0, 0, 1293, 1294, 1, 0, 0, 0, 1294, 1295, 1, 0, 0, 0, 1295, 1296, 5,
        9, 0, 0, 1296, 1297, 5, 89, 0, 0, 1297, 1298, 3, 192, 96, 0, 1298, 123, 1, 0, 0, 0, 1299,
        1300, 5, 187, 0, 0, 1300, 1301, 3, 234, 117, 0, 1301, 1302, 5, 10, 0, 0, 1302, 1303, 5, 214,
        0, 0, 1303, 1304, 3, 166, 83, 0, 1304, 1305, 5, 224, 0, 0, 1305, 125, 1, 0, 0, 0, 1306,
        1307, 5, 128, 0, 0, 1307, 1308, 3, 196, 98, 0, 1308, 127, 1, 0, 0, 0, 1309, 1310, 5, 186, 0,
        0, 1310, 1311, 3, 196, 98, 0, 1311, 129, 1, 0, 0, 0, 1312, 1313, 5, 72, 0, 0, 1313, 1320, 5,
        18, 0, 0, 1314, 1315, 7, 6, 0, 0, 1315, 1316, 5, 214, 0, 0, 1316, 1317, 3, 192, 96, 0, 1317,
        1318, 5, 224, 0, 0, 1318, 1321, 1, 0, 0, 0, 1319, 1321, 3, 192, 96, 0, 1320, 1314, 1, 0, 0,
        0, 1320, 1319, 1, 0, 0, 0, 1321, 131, 1, 0, 0, 0, 1322, 1323, 5, 73, 0, 0, 1323, 1324, 3,
        196, 98, 0, 1324, 133, 1, 0, 0, 0, 1325, 1326, 5, 121, 0, 0, 1326, 1327, 5, 18, 0, 0, 1327,
        1328, 3, 156, 78, 0, 1328, 135, 1, 0, 0, 0, 1329, 1330, 5, 121, 0, 0, 1330, 1331, 5, 18, 0,
        0, 1331, 1332, 3, 192, 96, 0, 1332, 137, 1, 0, 0, 0, 1333, 1334, 5, 98, 0, 0, 1334, 1335, 3,
        154, 77, 0, 1335, 1336, 5, 18, 0, 0, 1336, 1337, 3, 192, 96, 0, 1337, 139, 1, 0, 0, 0, 1338,
        1339, 5, 98, 0, 0, 1339, 1342, 3, 154, 77, 0, 1340, 1341, 5, 188, 0, 0, 1341, 1343, 5, 163,
        0, 0, 1342, 1340, 1, 0, 0, 0, 1342, 1343, 1, 0, 0, 0, 1343, 141, 1, 0, 0, 0, 1344, 1345, 5,
        149, 0, 0, 1345, 1346, 3, 162, 81, 0, 1346, 143, 1, 0, 0, 0, 1347, 1348, 6, 72, -1, 0, 1348,
        1350, 3, 208, 104, 0, 1349, 1351, 5, 60, 0, 0, 1350, 1349, 1, 0, 0, 0, 1350, 1351, 1, 0, 0,
        0, 1351, 1353, 1, 0, 0, 0, 1352, 1354, 3, 152, 76, 0, 1353, 1352, 1, 0, 0, 0, 1353, 1354, 1,
        0, 0, 0, 1354, 1360, 1, 0, 0, 0, 1355, 1356, 5, 214, 0, 0, 1356, 1357, 3, 144, 72, 0, 1357,
        1358, 5, 224, 0, 0, 1358, 1360, 1, 0, 0, 0, 1359, 1347, 1, 0, 0, 0, 1359, 1355, 1, 0, 0, 0,
        1360, 1378, 1, 0, 0, 0, 1361, 1362, 10, 3, 0, 0, 1362, 1363, 3, 148, 74, 0, 1363, 1364, 3,
        144, 72, 4, 1364, 1377, 1, 0, 0, 0, 1365, 1367, 10, 4, 0, 0, 1366, 1368, 7, 8, 0, 0, 1367,
        1366, 1, 0, 0, 0, 1367, 1368, 1, 0, 0, 0, 1368, 1370, 1, 0, 0, 0, 1369, 1371, 3, 146, 73, 0,
        1370, 1369, 1, 0, 0, 0, 1370, 1371, 1, 0, 0, 0, 1371, 1372, 1, 0, 0, 0, 1372, 1373, 5, 89,
        0, 0, 1373, 1374, 3, 144, 72, 0, 1374, 1375, 3, 150, 75, 0, 1375, 1377, 1, 0, 0, 0, 1376,
        1361, 1, 0, 0, 0, 1376, 1365, 1, 0, 0, 0, 1377, 1380, 1, 0, 0, 0, 1378, 1376, 1, 0, 0, 0,
        1378, 1379, 1, 0, 0, 0, 1379, 145, 1, 0, 0, 0, 1380, 1378, 1, 0, 0, 0, 1381, 1383, 7, 9, 0,
        0, 1382, 1381, 1, 0, 0, 0, 1382, 1383, 1, 0, 0, 0, 1383, 1384, 1, 0, 0, 0, 1384, 1391, 5,
        83, 0, 0, 1385, 1387, 5, 83, 0, 0, 1386, 1388, 7, 9, 0, 0, 1387, 1386, 1, 0, 0, 0, 1387,
        1388, 1, 0, 0, 0, 1388, 1391, 1, 0, 0, 0, 1389, 1391, 7, 9, 0, 0, 1390, 1382, 1, 0, 0, 0,
        1390, 1385, 1, 0, 0, 0, 1390, 1389, 1, 0, 0, 0, 1391, 1425, 1, 0, 0, 0, 1392, 1394, 7, 10,
        0, 0, 1393, 1392, 1, 0, 0, 0, 1393, 1394, 1, 0, 0, 0, 1394, 1395, 1, 0, 0, 0, 1395, 1397, 7,
        11, 0, 0, 1396, 1398, 5, 122, 0, 0, 1397, 1396, 1, 0, 0, 0, 1397, 1398, 1, 0, 0, 0, 1398,
        1407, 1, 0, 0, 0, 1399, 1401, 7, 11, 0, 0, 1400, 1402, 5, 122, 0, 0, 1401, 1400, 1, 0, 0, 0,
        1401, 1402, 1, 0, 0, 0, 1402, 1404, 1, 0, 0, 0, 1403, 1405, 7, 10, 0, 0, 1404, 1403, 1, 0,
        0, 0, 1404, 1405, 1, 0, 0, 0, 1405, 1407, 1, 0, 0, 0, 1406, 1393, 1, 0, 0, 0, 1406, 1399, 1,
        0, 0, 0, 1407, 1425, 1, 0, 0, 0, 1408, 1410, 7, 12, 0, 0, 1409, 1408, 1, 0, 0, 0, 1409,
        1410, 1, 0, 0, 0, 1410, 1411, 1, 0, 0, 0, 1411, 1413, 5, 68, 0, 0, 1412, 1414, 5, 122, 0, 0,
        1413, 1412, 1, 0, 0, 0, 1413, 1414, 1, 0, 0, 0, 1414, 1423, 1, 0, 0, 0, 1415, 1417, 5, 68,
        0, 0, 1416, 1418, 5, 122, 0, 0, 1417, 1416, 1, 0, 0, 0, 1417, 1418, 1, 0, 0, 0, 1418, 1420,
        1, 0, 0, 0, 1419, 1421, 7, 12, 0, 0, 1420, 1419, 1, 0, 0, 0, 1420, 1421, 1, 0, 0, 0, 1421,
        1423, 1, 0, 0, 0, 1422, 1409, 1, 0, 0, 0, 1422, 1415, 1, 0, 0, 0, 1423, 1425, 1, 0, 0, 0,
        1424, 1390, 1, 0, 0, 0, 1424, 1406, 1, 0, 0, 0, 1424, 1422, 1, 0, 0, 0, 1425, 147, 1, 0, 0,
        0, 1426, 1428, 7, 8, 0, 0, 1427, 1426, 1, 0, 0, 0, 1427, 1428, 1, 0, 0, 0, 1428, 1429, 1, 0,
        0, 0, 1429, 1430, 5, 30, 0, 0, 1430, 1433, 5, 89, 0, 0, 1431, 1433, 5, 203, 0, 0, 1432,
        1427, 1, 0, 0, 0, 1432, 1431, 1, 0, 0, 0, 1433, 149, 1, 0, 0, 0, 1434, 1435, 5, 118, 0, 0,
        1435, 1444, 3, 192, 96, 0, 1436, 1437, 5, 178, 0, 0, 1437, 1438, 5, 214, 0, 0, 1438, 1439,
        3, 192, 96, 0, 1439, 1440, 5, 224, 0, 0, 1440, 1444, 1, 0, 0, 0, 1441, 1442, 5, 178, 0, 0,
        1442, 1444, 3, 192, 96, 0, 1443, 1434, 1, 0, 0, 0, 1443, 1436, 1, 0, 0, 0, 1443, 1441, 1, 0,
        0, 0, 1444, 151, 1, 0, 0, 0, 1445, 1446, 5, 143, 0, 0, 1446, 1449, 3, 160, 80, 0, 1447,
        1448, 5, 117, 0, 0, 1448, 1450, 3, 160, 80, 0, 1449, 1447, 1, 0, 0, 0, 1449, 1450, 1, 0, 0,
        0, 1450, 153, 1, 0, 0, 0, 1451, 1454, 3, 196, 98, 0, 1452, 1453, 7, 13, 0, 0, 1453, 1455, 3,
        196, 98, 0, 1454, 1452, 1, 0, 0, 0, 1454, 1455, 1, 0, 0, 0, 1455, 155, 1, 0, 0, 0, 1456,
        1461, 3, 158, 79, 0, 1457, 1458, 5, 203, 0, 0, 1458, 1460, 3, 158, 79, 0, 1459, 1457, 1, 0,
        0, 0, 1460, 1463, 1, 0, 0, 0, 1461, 1459, 1, 0, 0, 0, 1461, 1462, 1, 0, 0, 0, 1462, 157, 1,
        0, 0, 0, 1463, 1461, 1, 0, 0, 0, 1464, 1466, 3, 196, 98, 0, 1465, 1467, 7, 14, 0, 0, 1466,
        1465, 1, 0, 0, 0, 1466, 1467, 1, 0, 0, 0, 1467, 1470, 1, 0, 0, 0, 1468, 1469, 5, 116, 0, 0,
        1469, 1471, 7, 15, 0, 0, 1470, 1468, 1, 0, 0, 0, 1470, 1471, 1, 0, 0, 0, 1471, 1474, 1, 0,
        0, 0, 1472, 1473, 5, 25, 0, 0, 1473, 1475, 5, 197, 0, 0, 1474, 1472, 1, 0, 0, 0, 1474, 1475,
        1, 0, 0, 0, 1475, 159, 1, 0, 0, 0, 1476, 1479, 3, 222, 111, 0, 1477, 1478, 5, 226, 0, 0,
        1478, 1480, 3, 222, 111, 0, 1479, 1477, 1, 0, 0, 0, 1479, 1480, 1, 0, 0, 0, 1480, 161, 1, 0,
        0, 0, 1481, 1486, 3, 164, 82, 0, 1482, 1483, 5, 203, 0, 0, 1483, 1485, 3, 164, 82, 0, 1484,
        1482, 1, 0, 0, 0, 1485, 1488, 1, 0, 0, 0, 1486, 1484, 1, 0, 0, 0, 1486, 1487, 1, 0, 0, 0,
        1487, 163, 1, 0, 0, 0, 1488, 1486, 1, 0, 0, 0, 1489, 1490, 3, 234, 117, 0, 1490, 1491, 5,
        208, 0, 0, 1491, 1492, 3, 224, 112, 0, 1492, 165, 1, 0, 0, 0, 1493, 1495, 3, 168, 84, 0,
        1494, 1493, 1, 0, 0, 0, 1494, 1495, 1, 0, 0, 0, 1495, 1497, 1, 0, 0, 0, 1496, 1498, 3, 170,
        85, 0, 1497, 1496, 1, 0, 0, 0, 1497, 1498, 1, 0, 0, 0, 1498, 1500, 1, 0, 0, 0, 1499, 1501,
        3, 172, 86, 0, 1500, 1499, 1, 0, 0, 0, 1500, 1501, 1, 0, 0, 0, 1501, 167, 1, 0, 0, 0, 1502,
        1503, 5, 125, 0, 0, 1503, 1504, 5, 18, 0, 0, 1504, 1505, 3, 192, 96, 0, 1505, 169, 1, 0, 0,
        0, 1506, 1507, 5, 121, 0, 0, 1507, 1508, 5, 18, 0, 0, 1508, 1509, 3, 156, 78, 0, 1509, 171,
        1, 0, 0, 0, 1510, 1511, 7, 16, 0, 0, 1511, 1512, 3, 174, 87, 0, 1512, 173, 1, 0, 0, 0, 1513,
        1520, 3, 176, 88, 0, 1514, 1515, 5, 16, 0, 0, 1515, 1516, 3, 176, 88, 0, 1516, 1517, 5, 6,
        0, 0, 1517, 1518, 3, 176, 88, 0, 1518, 1520, 1, 0, 0, 0, 1519, 1513, 1, 0, 0, 0, 1519, 1514,
        1, 0, 0, 0, 1520, 175, 1, 0, 0, 0, 1521, 1522, 5, 32, 0, 0, 1522, 1534, 5, 141, 0, 0, 1523,
        1524, 5, 174, 0, 0, 1524, 1534, 5, 127, 0, 0, 1525, 1526, 5, 174, 0, 0, 1526, 1534, 5, 63,
        0, 0, 1527, 1528, 3, 222, 111, 0, 1528, 1529, 5, 127, 0, 0, 1529, 1534, 1, 0, 0, 0, 1530,
        1531, 3, 222, 111, 0, 1531, 1532, 5, 63, 0, 0, 1532, 1534, 1, 0, 0, 0, 1533, 1521, 1, 0, 0,
        0, 1533, 1523, 1, 0, 0, 0, 1533, 1525, 1, 0, 0, 0, 1533, 1527, 1, 0, 0, 0, 1533, 1530, 1, 0,
        0, 0, 1534, 177, 1, 0, 0, 0, 1535, 1536, 5, 148, 0, 0, 1536, 1537, 3, 162, 81, 0, 1537, 179,
        1, 0, 0, 0, 1538, 1539, 5, 150, 0, 0, 1539, 1540, 5, 29, 0, 0, 1540, 1541, 5, 33, 0, 0,
        1541, 1581, 3, 218, 109, 0, 1542, 1543, 5, 150, 0, 0, 1543, 1544, 5, 29, 0, 0, 1544, 1545,
        5, 46, 0, 0, 1545, 1581, 3, 212, 106, 0, 1546, 1547, 5, 150, 0, 0, 1547, 1549, 5, 29, 0, 0,
        1548, 1550, 5, 160, 0, 0, 1549, 1548, 1, 0, 0, 0, 1549, 1550, 1, 0, 0, 0, 1550, 1552, 1, 0,
        0, 0, 1551, 1553, 5, 158, 0, 0, 1552, 1551, 1, 0, 0, 0, 1552, 1553, 1, 0, 0, 0, 1553, 1554,
        1, 0, 0, 0, 1554, 1581, 3, 212, 106, 0, 1555, 1556, 5, 150, 0, 0, 1556, 1581, 5, 34, 0, 0,
        1557, 1558, 5, 150, 0, 0, 1558, 1561, 5, 45, 0, 0, 1559, 1560, 5, 67, 0, 0, 1560, 1562, 3,
        218, 109, 0, 1561, 1559, 1, 0, 0, 0, 1561, 1562, 1, 0, 0, 0, 1562, 1581, 1, 0, 0, 0, 1563,
        1565, 5, 150, 0, 0, 1564, 1566, 5, 160, 0, 0, 1565, 1564, 1, 0, 0, 0, 1565, 1566, 1, 0, 0,
        0, 1566, 1567, 1, 0, 0, 0, 1567, 1570, 5, 159, 0, 0, 1568, 1569, 7, 17, 0, 0, 1569, 1571, 3,
        218, 109, 0, 1570, 1568, 1, 0, 0, 0, 1570, 1571, 1, 0, 0, 0, 1571, 1575, 1, 0, 0, 0, 1572,
        1573, 5, 97, 0, 0, 1573, 1576, 5, 197, 0, 0, 1574, 1576, 3, 128, 64, 0, 1575, 1572, 1, 0, 0,
        0, 1575, 1574, 1, 0, 0, 0, 1575, 1576, 1, 0, 0, 0, 1576, 1578, 1, 0, 0, 0, 1577, 1579, 3,
        140, 70, 0, 1578, 1577, 1, 0, 0, 0, 1578, 1579, 1, 0, 0, 0, 1579, 1581, 1, 0, 0, 0, 1580,
        1538, 1, 0, 0, 0, 1580, 1542, 1, 0, 0, 0, 1580, 1546, 1, 0, 0, 0, 1580, 1555, 1, 0, 0, 0,
        1580, 1557, 1, 0, 0, 0, 1580, 1563, 1, 0, 0, 0, 1581, 181, 1, 0, 0, 0, 1582, 1583, 5, 157,
        0, 0, 1583, 1584, 5, 62, 0, 0, 1584, 1585, 5, 49, 0, 0, 1585, 1617, 3, 212, 106, 0, 1586,
        1587, 5, 157, 0, 0, 1587, 1588, 5, 62, 0, 0, 1588, 1617, 5, 101, 0, 0, 1589, 1590, 5, 157,
        0, 0, 1590, 1591, 5, 133, 0, 0, 1591, 1617, 5, 45, 0, 0, 1592, 1593, 5, 157, 0, 0, 1593,
        1594, 5, 133, 0, 0, 1594, 1595, 5, 46, 0, 0, 1595, 1617, 3, 212, 106, 0, 1596, 1597, 5, 157,
        0, 0, 1597, 1605, 7, 18, 0, 0, 1598, 1599, 5, 49, 0, 0, 1599, 1606, 5, 147, 0, 0, 1600,
        1606, 5, 59, 0, 0, 1601, 1603, 5, 172, 0, 0, 1602, 1601, 1, 0, 0, 0, 1602, 1603, 1, 0, 0, 0,
        1603, 1604, 1, 0, 0, 0, 1604, 1606, 5, 105, 0, 0, 1605, 1598, 1, 0, 0, 0, 1605, 1600, 1, 0,
        0, 0, 1605, 1602, 1, 0, 0, 0, 1606, 1607, 1, 0, 0, 0, 1607, 1617, 3, 212, 106, 0, 1608,
        1609, 5, 157, 0, 0, 1609, 1610, 7, 18, 0, 0, 1610, 1611, 5, 138, 0, 0, 1611, 1617, 5, 147,
        0, 0, 1612, 1613, 5, 157, 0, 0, 1613, 1614, 5, 155, 0, 0, 1614, 1615, 5, 137, 0, 0, 1615,
        1617, 3, 212, 106, 0, 1616, 1582, 1, 0, 0, 0, 1616, 1586, 1, 0, 0, 0, 1616, 1589, 1, 0, 0,
        0, 1616, 1592, 1, 0, 0, 0, 1616, 1596, 1, 0, 0, 0, 1616, 1608, 1, 0, 0, 0, 1616, 1612, 1, 0,
        0, 0, 1617, 183, 1, 0, 0, 0, 1618, 1620, 5, 171, 0, 0, 1619, 1621, 5, 160, 0, 0, 1620, 1619,
        1, 0, 0, 0, 1620, 1621, 1, 0, 0, 0, 1621, 1623, 1, 0, 0, 0, 1622, 1624, 5, 158, 0, 0, 1623,
        1622, 1, 0, 0, 0, 1623, 1624, 1, 0, 0, 0, 1624, 1627, 1, 0, 0, 0, 1625, 1626, 5, 77, 0, 0,
        1626, 1628, 5, 55, 0, 0, 1627, 1625, 1, 0, 0, 0, 1627, 1628, 1, 0, 0, 0, 1628, 1629, 1, 0,
        0, 0, 1629, 1631, 3, 212, 106, 0, 1630, 1632, 3, 50, 25, 0, 1631, 1630, 1, 0, 0, 0, 1631,
        1632, 1, 0, 0, 0, 1632, 185, 1, 0, 0, 0, 1633, 1634, 5, 177, 0, 0, 1634, 1635, 3, 218, 109,
        0, 1635, 187, 1, 0, 0, 0, 1636, 1637, 5, 183, 0, 0, 1637, 1639, 3, 212, 106, 0, 1638, 1640,
        5, 54, 0, 0, 1639, 1638, 1, 0, 0, 0, 1639, 1640, 1, 0, 0, 0, 1640, 1643, 1, 0, 0, 0, 1641,
        1642, 5, 98, 0, 0, 1642, 1644, 5, 195, 0, 0, 1643, 1641, 1, 0, 0, 0, 1643, 1644, 1, 0, 0, 0,
        1644, 189, 1, 0, 0, 0, 1645, 1693, 3, 234, 117, 0, 1646, 1647, 3, 234, 117, 0, 1647, 1648,
        5, 214, 0, 0, 1648, 1649, 3, 234, 117, 0, 1649, 1656, 3, 190, 95, 0, 1650, 1651, 5, 203, 0,
        0, 1651, 1652, 3, 234, 117, 0, 1652, 1653, 3, 190, 95, 0, 1653, 1655, 1, 0, 0, 0, 1654,
        1650, 1, 0, 0, 0, 1655, 1658, 1, 0, 0, 0, 1656, 1654, 1, 0, 0, 0, 1656, 1657, 1, 0, 0, 0,
        1657, 1659, 1, 0, 0, 0, 1658, 1656, 1, 0, 0, 0, 1659, 1660, 5, 224, 0, 0, 1660, 1693, 1, 0,
        0, 0, 1661, 1662, 3, 234, 117, 0, 1662, 1663, 5, 214, 0, 0, 1663, 1668, 3, 238, 119, 0,
        1664, 1665, 5, 203, 0, 0, 1665, 1667, 3, 238, 119, 0, 1666, 1664, 1, 0, 0, 0, 1667, 1670, 1,
        0, 0, 0, 1668, 1666, 1, 0, 0, 0, 1668, 1669, 1, 0, 0, 0, 1669, 1671, 1, 0, 0, 0, 1670, 1668,
        1, 0, 0, 0, 1671, 1672, 5, 224, 0, 0, 1672, 1693, 1, 0, 0, 0, 1673, 1674, 3, 234, 117, 0,
        1674, 1675, 5, 214, 0, 0, 1675, 1680, 3, 190, 95, 0, 1676, 1677, 5, 203, 0, 0, 1677, 1679,
        3, 190, 95, 0, 1678, 1676, 1, 0, 0, 0, 1679, 1682, 1, 0, 0, 0, 1680, 1678, 1, 0, 0, 0, 1680,
        1681, 1, 0, 0, 0, 1681, 1683, 1, 0, 0, 0, 1682, 1680, 1, 0, 0, 0, 1683, 1684, 5, 224, 0, 0,
        1684, 1693, 1, 0, 0, 0, 1685, 1686, 3, 234, 117, 0, 1686, 1688, 5, 214, 0, 0, 1687, 1689, 3,
        192, 96, 0, 1688, 1687, 1, 0, 0, 0, 1688, 1689, 1, 0, 0, 0, 1689, 1690, 1, 0, 0, 0, 1690,
        1691, 5, 224, 0, 0, 1691, 1693, 1, 0, 0, 0, 1692, 1645, 1, 0, 0, 0, 1692, 1646, 1, 0, 0, 0,
        1692, 1661, 1, 0, 0, 0, 1692, 1673, 1, 0, 0, 0, 1692, 1685, 1, 0, 0, 0, 1693, 191, 1, 0, 0,
        0, 1694, 1699, 3, 194, 97, 0, 1695, 1696, 5, 203, 0, 0, 1696, 1698, 3, 194, 97, 0, 1697,
        1695, 1, 0, 0, 0, 1698, 1701, 1, 0, 0, 0, 1699, 1697, 1, 0, 0, 0, 1699, 1700, 1, 0, 0, 0,
        1700, 193, 1, 0, 0, 0, 1701, 1699, 1, 0, 0, 0, 1702, 1703, 3, 212, 106, 0, 1703, 1704, 5,
        206, 0, 0, 1704, 1706, 1, 0, 0, 0, 1705, 1702, 1, 0, 0, 0, 1705, 1706, 1, 0, 0, 0, 1706,
        1707, 1, 0, 0, 0, 1707, 1714, 5, 199, 0, 0, 1708, 1709, 5, 214, 0, 0, 1709, 1710, 3, 110,
        55, 0, 1710, 1711, 5, 224, 0, 0, 1711, 1714, 1, 0, 0, 0, 1712, 1714, 3, 196, 98, 0, 1713,
        1705, 1, 0, 0, 0, 1713, 1708, 1, 0, 0, 0, 1713, 1712, 1, 0, 0, 0, 1714, 195, 1, 0, 0, 0,
        1715, 1716, 6, 98, -1, 0, 1716, 1718, 5, 19, 0, 0, 1717, 1719, 3, 196, 98, 0, 1718, 1717, 1,
        0, 0, 0, 1718, 1719, 1, 0, 0, 0, 1719, 1725, 1, 0, 0, 0, 1720, 1721, 5, 185, 0, 0, 1721,
        1722, 3, 196, 98, 0, 1722, 1723, 5, 162, 0, 0, 1723, 1724, 3, 196, 98, 0, 1724, 1726, 1, 0,
        0, 0, 1725, 1720, 1, 0, 0, 0, 1726, 1727, 1, 0, 0, 0, 1727, 1725, 1, 0, 0, 0, 1727, 1728, 1,
        0, 0, 0, 1728, 1731, 1, 0, 0, 0, 1729, 1730, 5, 51, 0, 0, 1730, 1732, 3, 196, 98, 0, 1731,
        1729, 1, 0, 0, 0, 1731, 1732, 1, 0, 0, 0, 1732, 1733, 1, 0, 0, 0, 1733, 1734, 5, 52, 0, 0,
        1734, 1845, 1, 0, 0, 0, 1735, 1736, 5, 20, 0, 0, 1736, 1737, 5, 214, 0, 0, 1737, 1738, 3,
        196, 98, 0, 1738, 1739, 5, 10, 0, 0, 1739, 1740, 3, 190, 95, 0, 1740, 1741, 5, 224, 0, 0,
        1741, 1845, 1, 0, 0, 0, 1742, 1743, 5, 35, 0, 0, 1743, 1845, 5, 197, 0, 0, 1744, 1745, 5,
        58, 0, 0, 1745, 1746, 5, 214, 0, 0, 1746, 1747, 3, 226, 113, 0, 1747, 1748, 5, 67, 0, 0,
        1748, 1749, 3, 196, 98, 0, 1749, 1750, 5, 224, 0, 0, 1750, 1845, 1, 0, 0, 0, 1751, 1752, 5,
        85, 0, 0, 1752, 1753, 3, 196, 98, 0, 1753, 1754, 3, 226, 113, 0, 1754, 1845, 1, 0, 0, 0,
        1755, 1756, 5, 154, 0, 0, 1756, 1757, 5, 214, 0, 0, 1757, 1758, 3, 196, 98, 0, 1758, 1759,
        5, 67, 0, 0, 1759, 1762, 3, 196, 98, 0, 1760, 1761, 5, 64, 0, 0, 1761, 1763, 3, 196, 98, 0,
        1762, 1760, 1, 0, 0, 0, 1762, 1763, 1, 0, 0, 0, 1763, 1764, 1, 0, 0, 0, 1764, 1765, 5, 224,
        0, 0, 1765, 1845, 1, 0, 0, 0, 1766, 1767, 5, 165, 0, 0, 1767, 1845, 5, 197, 0, 0, 1768,
        1769, 5, 170, 0, 0, 1769, 1770, 5, 214, 0, 0, 1770, 1771, 7, 19, 0, 0, 1771, 1772, 5, 197,
        0, 0, 1772, 1773, 5, 67, 0, 0, 1773, 1774, 3, 196, 98, 0, 1774, 1775, 5, 224, 0, 0, 1775,
        1845, 1, 0, 0, 0, 1776, 1777, 3, 234, 117, 0, 1777, 1779, 5, 214, 0, 0, 1778, 1780, 3, 192,
        96, 0, 1779, 1778, 1, 0, 0, 0, 1779, 1780, 1, 0, 0, 0, 1780, 1781, 1, 0, 0, 0, 1781, 1782,
        5, 224, 0, 0, 1782, 1783, 1, 0, 0, 0, 1783, 1784, 5, 124, 0, 0, 1784, 1785, 5, 214, 0, 0,
        1785, 1786, 3, 166, 83, 0, 1786, 1787, 5, 224, 0, 0, 1787, 1845, 1, 0, 0, 0, 1788, 1789, 3,
        234, 117, 0, 1789, 1791, 5, 214, 0, 0, 1790, 1792, 3, 192, 96, 0, 1791, 1790, 1, 0, 0, 0,
        1791, 1792, 1, 0, 0, 0, 1792, 1793, 1, 0, 0, 0, 1793, 1794, 5, 224, 0, 0, 1794, 1795, 1, 0,
        0, 0, 1795, 1796, 5, 124, 0, 0, 1796, 1797, 3, 234, 117, 0, 1797, 1845, 1, 0, 0, 0, 1798,
        1804, 3, 234, 117, 0, 1799, 1801, 5, 214, 0, 0, 1800, 1802, 3, 192, 96, 0, 1801, 1800, 1, 0,
        0, 0, 1801, 1802, 1, 0, 0, 0, 1802, 1803, 1, 0, 0, 0, 1803, 1805, 5, 224, 0, 0, 1804, 1799,
        1, 0, 0, 0, 1804, 1805, 1, 0, 0, 0, 1805, 1806, 1, 0, 0, 0, 1806, 1808, 5, 214, 0, 0, 1807,
        1809, 5, 48, 0, 0, 1808, 1807, 1, 0, 0, 0, 1808, 1809, 1, 0, 0, 0, 1809, 1811, 1, 0, 0, 0,
        1810, 1812, 3, 198, 99, 0, 1811, 1810, 1, 0, 0, 0, 1811, 1812, 1, 0, 0, 0, 1812, 1813, 1, 0,
        0, 0, 1813, 1814, 5, 224, 0, 0, 1814, 1845, 1, 0, 0, 0, 1815, 1845, 3, 224, 112, 0, 1816,
        1817, 5, 205, 0, 0, 1817, 1845, 3, 196, 98, 17, 1818, 1819, 5, 114, 0, 0, 1819, 1845, 3,
        196, 98, 12, 1820, 1821, 3, 212, 106, 0, 1821, 1822, 5, 206, 0, 0, 1822, 1824, 1, 0, 0, 0,
        1823, 1820, 1, 0, 0, 0, 1823, 1824, 1, 0, 0, 0, 1824, 1825, 1, 0, 0, 0, 1825, 1845, 5, 199,
        0, 0, 1826, 1827, 5, 214, 0, 0, 1827, 1828, 3, 110, 55, 0, 1828, 1829, 5, 224, 0, 0, 1829,
        1845, 1, 0, 0, 0, 1830, 1831, 5, 214, 0, 0, 1831, 1832, 3, 196, 98, 0, 1832, 1833, 5, 224,
        0, 0, 1833, 1845, 1, 0, 0, 0, 1834, 1835, 5, 214, 0, 0, 1835, 1836, 3, 192, 96, 0, 1836,
        1837, 5, 224, 0, 0, 1837, 1845, 1, 0, 0, 0, 1838, 1840, 5, 212, 0, 0, 1839, 1841, 3, 192,
        96, 0, 1840, 1839, 1, 0, 0, 0, 1840, 1841, 1, 0, 0, 0, 1841, 1842, 1, 0, 0, 0, 1842, 1845,
        5, 223, 0, 0, 1843, 1845, 3, 204, 102, 0, 1844, 1715, 1, 0, 0, 0, 1844, 1735, 1, 0, 0, 0,
        1844, 1742, 1, 0, 0, 0, 1844, 1744, 1, 0, 0, 0, 1844, 1751, 1, 0, 0, 0, 1844, 1755, 1, 0, 0,
        0, 1844, 1766, 1, 0, 0, 0, 1844, 1768, 1, 0, 0, 0, 1844, 1776, 1, 0, 0, 0, 1844, 1788, 1, 0,
        0, 0, 1844, 1798, 1, 0, 0, 0, 1844, 1815, 1, 0, 0, 0, 1844, 1816, 1, 0, 0, 0, 1844, 1818, 1,
        0, 0, 0, 1844, 1823, 1, 0, 0, 0, 1844, 1826, 1, 0, 0, 0, 1844, 1830, 1, 0, 0, 0, 1844, 1834,
        1, 0, 0, 0, 1844, 1838, 1, 0, 0, 0, 1844, 1843, 1, 0, 0, 0, 1845, 1917, 1, 0, 0, 0, 1846,
        1847, 10, 16, 0, 0, 1847, 1848, 7, 20, 0, 0, 1848, 1916, 3, 196, 98, 17, 1849, 1850, 10, 15,
        0, 0, 1850, 1851, 7, 21, 0, 0, 1851, 1916, 3, 196, 98, 16, 1852, 1871, 10, 14, 0, 0, 1853,
        1872, 5, 207, 0, 0, 1854, 1872, 5, 208, 0, 0, 1855, 1872, 5, 216, 0, 0, 1856, 1872, 5, 213,
        0, 0, 1857, 1872, 5, 209, 0, 0, 1858, 1872, 5, 215, 0, 0, 1859, 1872, 5, 210, 0, 0, 1860,
        1862, 5, 70, 0, 0, 1861, 1860, 1, 0, 0, 0, 1861, 1862, 1, 0, 0, 0, 1862, 1864, 1, 0, 0, 0,
        1863, 1865, 5, 114, 0, 0, 1864, 1863, 1, 0, 0, 0, 1864, 1865, 1, 0, 0, 0, 1865, 1866, 1, 0,
        0, 0, 1866, 1872, 5, 79, 0, 0, 1867, 1869, 5, 114, 0, 0, 1868, 1867, 1, 0, 0, 0, 1868, 1869,
        1, 0, 0, 0, 1869, 1870, 1, 0, 0, 0, 1870, 1872, 7, 22, 0, 0, 1871, 1853, 1, 0, 0, 0, 1871,
        1854, 1, 0, 0, 0, 1871, 1855, 1, 0, 0, 0, 1871, 1856, 1, 0, 0, 0, 1871, 1857, 1, 0, 0, 0,
        1871, 1858, 1, 0, 0, 0, 1871, 1859, 1, 0, 0, 0, 1871, 1861, 1, 0, 0, 0, 1871, 1868, 1, 0, 0,
        0, 1872, 1873, 1, 0, 0, 0, 1873, 1916, 3, 196, 98, 15, 1874, 1875, 10, 11, 0, 0, 1875, 1876,
        5, 6, 0, 0, 1876, 1916, 3, 196, 98, 12, 1877, 1878, 10, 10, 0, 0, 1878, 1879, 5, 120, 0, 0,
        1879, 1916, 3, 196, 98, 11, 1880, 1882, 10, 9, 0, 0, 1881, 1883, 5, 114, 0, 0, 1882, 1881,
        1, 0, 0, 0, 1882, 1883, 1, 0, 0, 0, 1883, 1884, 1, 0, 0, 0, 1884, 1885, 5, 16, 0, 0, 1885,
        1886, 3, 196, 98, 0, 1886, 1887, 5, 6, 0, 0, 1887, 1888, 3, 196, 98, 10, 1888, 1916, 1, 0,
        0, 0, 1889, 1890, 10, 8, 0, 0, 1890, 1891, 5, 219, 0, 0, 1891, 1892, 3, 196, 98, 0, 1892,
        1893, 5, 202, 0, 0, 1893, 1894, 3, 196, 98, 8, 1894, 1916, 1, 0, 0, 0, 1895, 1896, 10, 19,
        0, 0, 1896, 1897, 5, 212, 0, 0, 1897, 1898, 3, 196, 98, 0, 1898, 1899, 5, 223, 0, 0, 1899,
        1916, 1, 0, 0, 0, 1900, 1901, 10, 18, 0, 0, 1901, 1902, 5, 206, 0, 0, 1902, 1916, 5, 195, 0,
        0, 1903, 1904, 10, 13, 0, 0, 1904, 1906, 5, 87, 0, 0, 1905, 1907, 5, 114, 0, 0, 1906, 1905,
        1, 0, 0, 0, 1906, 1907, 1, 0, 0, 0, 1907, 1908, 1, 0, 0, 0, 1908, 1916, 5, 115, 0, 0, 1909,
        1913, 10, 7, 0, 0, 1910, 1914, 3, 232, 116, 0, 1911, 1912, 5, 10, 0, 0, 1912, 1914, 3, 234,
        117, 0, 1913, 1910, 1, 0, 0, 0, 1913, 1911, 1, 0, 0, 0, 1914, 1916, 1, 0, 0, 0, 1915, 1846,
        1, 0, 0, 0, 1915, 1849, 1, 0, 0, 0, 1915, 1852, 1, 0, 0, 0, 1915, 1874, 1, 0, 0, 0, 1915,
        1877, 1, 0, 0, 0, 1915, 1880, 1, 0, 0, 0, 1915, 1889, 1, 0, 0, 0, 1915, 1895, 1, 0, 0, 0,
        1915, 1900, 1, 0, 0, 0, 1915, 1903, 1, 0, 0, 0, 1915, 1909, 1, 0, 0, 0, 1916, 1919, 1, 0, 0,
        0, 1917, 1915, 1, 0, 0, 0, 1917, 1918, 1, 0, 0, 0, 1918, 197, 1, 0, 0, 0, 1919, 1917, 1, 0,
        0, 0, 1920, 1925, 3, 200, 100, 0, 1921, 1922, 5, 203, 0, 0, 1922, 1924, 3, 200, 100, 0,
        1923, 1921, 1, 0, 0, 0, 1924, 1927, 1, 0, 0, 0, 1925, 1923, 1, 0, 0, 0, 1925, 1926, 1, 0, 0,
        0, 1926, 199, 1, 0, 0, 0, 1927, 1925, 1, 0, 0, 0, 1928, 1931, 3, 202, 101, 0, 1929, 1931, 3,
        196, 98, 0, 1930, 1928, 1, 0, 0, 0, 1930, 1929, 1, 0, 0, 0, 1931, 201, 1, 0, 0, 0, 1932,
        1933, 5, 214, 0, 0, 1933, 1938, 3, 234, 117, 0, 1934, 1935, 5, 203, 0, 0, 1935, 1937, 3,
        234, 117, 0, 1936, 1934, 1, 0, 0, 0, 1937, 1940, 1, 0, 0, 0, 1938, 1936, 1, 0, 0, 0, 1938,
        1939, 1, 0, 0, 0, 1939, 1941, 1, 0, 0, 0, 1940, 1938, 1, 0, 0, 0, 1941, 1942, 5, 224, 0, 0,
        1942, 1952, 1, 0, 0, 0, 1943, 1948, 3, 234, 117, 0, 1944, 1945, 5, 203, 0, 0, 1945, 1947, 3,
        234, 117, 0, 1946, 1944, 1, 0, 0, 0, 1947, 1950, 1, 0, 0, 0, 1948, 1946, 1, 0, 0, 0, 1948,
        1949, 1, 0, 0, 0, 1949, 1952, 1, 0, 0, 0, 1950, 1948, 1, 0, 0, 0, 1951, 1932, 1, 0, 0, 0,
        1951, 1943, 1, 0, 0, 0, 1952, 1953, 1, 0, 0, 0, 1953, 1954, 5, 198, 0, 0, 1954, 1955, 3,
        196, 98, 0, 1955, 203, 1, 0, 0, 0, 1956, 1957, 3, 212, 106, 0, 1957, 1958, 5, 206, 0, 0,
        1958, 1960, 1, 0, 0, 0, 1959, 1956, 1, 0, 0, 0, 1959, 1960, 1, 0, 0, 0, 1960, 1961, 1, 0, 0,
        0, 1961, 1962, 3, 206, 103, 0, 1962, 205, 1, 0, 0, 0, 1963, 1966, 3, 234, 117, 0, 1964,
        1965, 5, 206, 0, 0, 1965, 1967, 3, 234, 117, 0, 1966, 1964, 1, 0, 0, 0, 1966, 1967, 1, 0, 0,
        0, 1967, 207, 1, 0, 0, 0, 1968, 1969, 6, 104, -1, 0, 1969, 1976, 3, 212, 106, 0, 1970, 1976,
        3, 210, 105, 0, 1971, 1972, 5, 214, 0, 0, 1972, 1973, 3, 110, 55, 0, 1973, 1974, 5, 224, 0,
        0, 1974, 1976, 1, 0, 0, 0, 1975, 1968, 1, 0, 0, 0, 1975, 1970, 1, 0, 0, 0, 1975, 1971, 1, 0,
        0, 0, 1976, 1985, 1, 0, 0, 0, 1977, 1981, 10, 1, 0, 0, 1978, 1982, 3, 232, 116, 0, 1979,
        1980, 5, 10, 0, 0, 1980, 1982, 3, 234, 117, 0, 1981, 1978, 1, 0, 0, 0, 1981, 1979, 1, 0, 0,
        0, 1982, 1984, 1, 0, 0, 0, 1983, 1977, 1, 0, 0, 0, 1984, 1987, 1, 0, 0, 0, 1985, 1983, 1, 0,
        0, 0, 1985, 1986, 1, 0, 0, 0, 1986, 209, 1, 0, 0, 0, 1987, 1985, 1, 0, 0, 0, 1988, 1989, 3,
        234, 117, 0, 1989, 1991, 5, 214, 0, 0, 1990, 1992, 3, 214, 107, 0, 1991, 1990, 1, 0, 0, 0,
        1991, 1992, 1, 0, 0, 0, 1992, 1993, 1, 0, 0, 0, 1993, 1994, 5, 224, 0, 0, 1994, 211, 1, 0,
        0, 0, 1995, 1996, 3, 218, 109, 0, 1996, 1997, 5, 206, 0, 0, 1997, 1999, 1, 0, 0, 0, 1998,
        1995, 1, 0, 0, 0, 1998, 1999, 1, 0, 0, 0, 1999, 2000, 1, 0, 0, 0, 2000, 2001, 3, 234, 117,
        0, 2001, 213, 1, 0, 0, 0, 2002, 2007, 3, 216, 108, 0, 2003, 2004, 5, 203, 0, 0, 2004, 2006,
        3, 216, 108, 0, 2005, 2003, 1, 0, 0, 0, 2006, 2009, 1, 0, 0, 0, 2007, 2005, 1, 0, 0, 0,
        2007, 2008, 1, 0, 0, 0, 2008, 215, 1, 0, 0, 0, 2009, 2007, 1, 0, 0, 0, 2010, 2014, 3, 206,
        103, 0, 2011, 2014, 3, 210, 105, 0, 2012, 2014, 3, 224, 112, 0, 2013, 2010, 1, 0, 0, 0,
        2013, 2011, 1, 0, 0, 0, 2013, 2012, 1, 0, 0, 0, 2014, 217, 1, 0, 0, 0, 2015, 2016, 3, 234,
        117, 0, 2016, 219, 1, 0, 0, 0, 2017, 2026, 5, 193, 0, 0, 2018, 2019, 5, 206, 0, 0, 2019,
        2026, 7, 23, 0, 0, 2020, 2021, 5, 195, 0, 0, 2021, 2023, 5, 206, 0, 0, 2022, 2024, 7, 23, 0,
        0, 2023, 2022, 1, 0, 0, 0, 2023, 2024, 1, 0, 0, 0, 2024, 2026, 1, 0, 0, 0, 2025, 2017, 1, 0,
        0, 0, 2025, 2018, 1, 0, 0, 0, 2025, 2020, 1, 0, 0, 0, 2026, 221, 1, 0, 0, 0, 2027, 2029, 7,
        24, 0, 0, 2028, 2027, 1, 0, 0, 0, 2028, 2029, 1, 0, 0, 0, 2029, 2036, 1, 0, 0, 0, 2030,
        2037, 3, 220, 110, 0, 2031, 2037, 5, 194, 0, 0, 2032, 2037, 5, 195, 0, 0, 2033, 2037, 5,
        196, 0, 0, 2034, 2037, 5, 81, 0, 0, 2035, 2037, 5, 112, 0, 0, 2036, 2030, 1, 0, 0, 0, 2036,
        2031, 1, 0, 0, 0, 2036, 2032, 1, 0, 0, 0, 2036, 2033, 1, 0, 0, 0, 2036, 2034, 1, 0, 0, 0,
        2036, 2035, 1, 0, 0, 0, 2037, 223, 1, 0, 0, 0, 2038, 2042, 3, 222, 111, 0, 2039, 2042, 5,
        197, 0, 0, 2040, 2042, 5, 115, 0, 0, 2041, 2038, 1, 0, 0, 0, 2041, 2039, 1, 0, 0, 0, 2041,
        2040, 1, 0, 0, 0, 2042, 225, 1, 0, 0, 0, 2043, 2044, 7, 25, 0, 0, 2044, 227, 1, 0, 0, 0,
        2045, 2046, 7, 26, 0, 0, 2046, 229, 1, 0, 0, 0, 2047, 2048, 7, 27, 0, 0, 2048, 231, 1, 0, 0,
        0, 2049, 2052, 5, 192, 0, 0, 2050, 2052, 3, 230, 115, 0, 2051, 2049, 1, 0, 0, 0, 2051, 2050,
        1, 0, 0, 0, 2052, 233, 1, 0, 0, 0, 2053, 2057, 5, 192, 0, 0, 2054, 2057, 3, 226, 113, 0,
        2055, 2057, 3, 228, 114, 0, 2056, 2053, 1, 0, 0, 0, 2056, 2054, 1, 0, 0, 0, 2056, 2055, 1,
        0, 0, 0, 2057, 235, 1, 0, 0, 0, 2058, 2061, 3, 234, 117, 0, 2059, 2061, 5, 115, 0, 0, 2060,
        2058, 1, 0, 0, 0, 2060, 2059, 1, 0, 0, 0, 2061, 237, 1, 0, 0, 0, 2062, 2063, 5, 197, 0, 0,
        2063, 2064, 5, 208, 0, 0, 2064, 2065, 3, 222, 111, 0, 2065, 239, 1, 0, 0, 0, 274, 243, 250,
        254, 257, 260, 281, 284, 292, 297, 310, 319, 326, 334, 339, 346, 351, 358, 363, 369, 375,
        380, 386, 391, 397, 402, 408, 422, 429, 436, 443, 449, 454, 460, 465, 471, 480, 490, 500,
        520, 528, 543, 550, 564, 570, 576, 583, 587, 590, 596, 599, 605, 609, 612, 623, 627, 630,
        635, 637, 640, 643, 653, 657, 660, 663, 668, 670, 678, 681, 684, 690, 694, 697, 700, 703,
        706, 711, 717, 721, 724, 727, 731, 739, 765, 767, 771, 793, 795, 806, 809, 818, 835, 846,
        864, 877, 894, 903, 930, 932, 953, 958, 963, 966, 978, 983, 987, 990, 994, 998, 1003, 1006,
        1010, 1012, 1034, 1042, 1045, 1055, 1059, 1067, 1071, 1076, 1080, 1084, 1088, 1092, 1094,
        1102, 1106, 1109, 1117, 1122, 1127, 1130, 1140, 1150, 1154, 1159, 1163, 1169, 1172, 1175,
        1178, 1192, 1196, 1200, 1205, 1208, 1218, 1226, 1229, 1233, 1236, 1240, 1243, 1246, 1249,
        1252, 1255, 1259, 1263, 1266, 1269, 1272, 1275, 1278, 1287, 1293, 1320, 1342, 1350, 1353,
        1359, 1367, 1370, 1376, 1378, 1382, 1387, 1390, 1393, 1397, 1401, 1404, 1406, 1409, 1413,
        1417, 1420, 1422, 1424, 1427, 1432, 1443, 1449, 1454, 1461, 1466, 1470, 1474, 1479, 1486,
        1494, 1497, 1500, 1519, 1533, 1549, 1552, 1561, 1565, 1570, 1575, 1578, 1580, 1602, 1605,
        1616, 1620, 1623, 1627, 1631, 1639, 1643, 1656, 1668, 1680, 1688, 1692, 1699, 1705, 1713,
        1718, 1727, 1731, 1762, 1779, 1791, 1801, 1804, 1808, 1811, 1823, 1840, 1844, 1861, 1864,
        1868, 1871, 1882, 1906, 1913, 1915, 1917, 1925, 1930, 1938, 1948, 1951, 1959, 1966, 1975,
        1981, 1985, 1991, 1998, 2007, 2013, 2023, 2025, 2028, 2036, 2041, 2051, 2056, 2060,
    ];

    private static __ATN: antlr.ATN;
    public static get _ATN(): antlr.ATN {
        if (!ClickHouseParser.__ATN) {
            ClickHouseParser.__ATN = new antlr.ATNDeserializer().deserialize(
                ClickHouseParser._serializedATN,
            );
        }

        return ClickHouseParser.__ATN;
    }

    private static readonly vocabulary = new antlr.Vocabulary(
        ClickHouseParser.literalNames,
        ClickHouseParser.symbolicNames,
        [],
    );

    public override get vocabulary(): antlr.Vocabulary {
        return ClickHouseParser.vocabulary;
    }

    private static readonly decisionsToDFA = ClickHouseParser._ATN.decisionToState.map(
        (ds: antlr.DecisionState, index: number) => new antlr.DFA(ds, index),
    );
}

export class RootContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public queryStmt(): QueryStmtContext[];
    public queryStmt(i: number): QueryStmtContext | null;
    public queryStmt(i?: number): QueryStmtContext[] | QueryStmtContext | null {
        if (i === undefined) {
            return this.getRuleContexts(QueryStmtContext);
        }

        return this.getRuleContext(i, QueryStmtContext);
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_root;
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitRoot) {
            return visitor.visitRoot(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class QueryStmtContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public query(): QueryContext | null {
        return this.getRuleContext(0, QueryContext);
    }
    public INTO(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.INTO, 0);
    }
    public OUTFILE(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.OUTFILE, 0);
    }
    public STRING_LITERAL(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.STRING_LITERAL, 0);
    }
    public FORMAT(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.FORMAT, 0);
    }
    public identifierOrNull(): IdentifierOrNullContext | null {
        return this.getRuleContext(0, IdentifierOrNullContext);
    }
    public SEMICOLON(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.SEMICOLON, 0);
    }
    public insertStmt(): InsertStmtContext | null {
        return this.getRuleContext(0, InsertStmtContext);
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_queryStmt;
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitQueryStmt) {
            return visitor.visitQueryStmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class QueryContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public alterStmt(): AlterStmtContext | null {
        return this.getRuleContext(0, AlterStmtContext);
    }
    public attachStmt(): AttachStmtContext | null {
        return this.getRuleContext(0, AttachStmtContext);
    }
    public checkStmt(): CheckStmtContext | null {
        return this.getRuleContext(0, CheckStmtContext);
    }
    public createStmt(): CreateStmtContext | null {
        return this.getRuleContext(0, CreateStmtContext);
    }
    public describeStmt(): DescribeStmtContext | null {
        return this.getRuleContext(0, DescribeStmtContext);
    }
    public dropStmt(): DropStmtContext | null {
        return this.getRuleContext(0, DropStmtContext);
    }
    public existsStmt(): ExistsStmtContext | null {
        return this.getRuleContext(0, ExistsStmtContext);
    }
    public explainStmt(): ExplainStmtContext | null {
        return this.getRuleContext(0, ExplainStmtContext);
    }
    public killStmt(): KillStmtContext | null {
        return this.getRuleContext(0, KillStmtContext);
    }
    public optimizeStmt(): OptimizeStmtContext | null {
        return this.getRuleContext(0, OptimizeStmtContext);
    }
    public renameStmt(): RenameStmtContext | null {
        return this.getRuleContext(0, RenameStmtContext);
    }
    public selectUnionStmt(): SelectUnionStmtContext | null {
        return this.getRuleContext(0, SelectUnionStmtContext);
    }
    public setStmt(): SetStmtContext | null {
        return this.getRuleContext(0, SetStmtContext);
    }
    public showStmt(): ShowStmtContext | null {
        return this.getRuleContext(0, ShowStmtContext);
    }
    public systemStmt(): SystemStmtContext | null {
        return this.getRuleContext(0, SystemStmtContext);
    }
    public truncateStmt(): TruncateStmtContext | null {
        return this.getRuleContext(0, TruncateStmtContext);
    }
    public useStmt(): UseStmtContext | null {
        return this.getRuleContext(0, UseStmtContext);
    }
    public watchStmt(): WatchStmtContext | null {
        return this.getRuleContext(0, WatchStmtContext);
    }
    public selectStmt(): SelectStmtContext | null {
        return this.getRuleContext(0, SelectStmtContext);
    }
    public ctes(): CtesContext | null {
        return this.getRuleContext(0, CtesContext);
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_query;
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitQuery) {
            return visitor.visitQuery(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class CtesContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public WITH(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.WITH, 0)!;
    }
    public namedQuery(): NamedQueryContext[];
    public namedQuery(i: number): NamedQueryContext | null;
    public namedQuery(i?: number): NamedQueryContext[] | NamedQueryContext | null {
        if (i === undefined) {
            return this.getRuleContexts(NamedQueryContext);
        }

        return this.getRuleContext(i, NamedQueryContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
        if (i === undefined) {
            return this.getTokens(ClickHouseParser.COMMA);
        } else {
            return this.getToken(ClickHouseParser.COMMA, i);
        }
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_ctes;
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitCtes) {
            return visitor.visitCtes(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class NamedQueryContext extends antlr.ParserRuleContext {
    public _name?: IdentifierContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public AS(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.AS, 0)!;
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.LPAREN, 0)!;
    }
    public query(): QueryContext {
        return this.getRuleContext(0, QueryContext)!;
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.RPAREN, 0)!;
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public columnAliases(): ColumnAliasesContext | null {
        return this.getRuleContext(0, ColumnAliasesContext);
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_namedQuery;
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitNamedQuery) {
            return visitor.visitNamedQuery(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class ColumnAliasesContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.LPAREN, 0)!;
    }
    public identifier(): IdentifierContext[];
    public identifier(i: number): IdentifierContext | null;
    public identifier(i?: number): IdentifierContext[] | IdentifierContext | null {
        if (i === undefined) {
            return this.getRuleContexts(IdentifierContext);
        }

        return this.getRuleContext(i, IdentifierContext);
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.RPAREN, 0)!;
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
        if (i === undefined) {
            return this.getTokens(ClickHouseParser.COMMA);
        } else {
            return this.getToken(ClickHouseParser.COMMA, i);
        }
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_columnAliases;
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitColumnAliases) {
            return visitor.visitColumnAliases(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class AlterStmtContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_alterStmt;
    }
    public override copyFrom(ctx: AlterStmtContext): void {
        super.copyFrom(ctx);
    }
}
export class AlterTableStmtContext extends AlterStmtContext {
    public constructor(ctx: AlterStmtContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public ALTER(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.ALTER, 0)!;
    }
    public TABLE(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.TABLE, 0)!;
    }
    public tableIdentifier(): TableIdentifierContext {
        return this.getRuleContext(0, TableIdentifierContext)!;
    }
    public alterTableClause(): AlterTableClauseContext[];
    public alterTableClause(i: number): AlterTableClauseContext | null;
    public alterTableClause(
        i?: number,
    ): AlterTableClauseContext[] | AlterTableClauseContext | null {
        if (i === undefined) {
            return this.getRuleContexts(AlterTableClauseContext);
        }

        return this.getRuleContext(i, AlterTableClauseContext);
    }
    public clusterClause(): ClusterClauseContext | null {
        return this.getRuleContext(0, ClusterClauseContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
        if (i === undefined) {
            return this.getTokens(ClickHouseParser.COMMA);
        } else {
            return this.getToken(ClickHouseParser.COMMA, i);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitAlterTableStmt) {
            return visitor.visitAlterTableStmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class AlterTableClauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_alterTableClause;
    }
    public override copyFrom(ctx: AlterTableClauseContext): void {
        super.copyFrom(ctx);
    }
}
export class AlterTableClauseReplaceContext extends AlterTableClauseContext {
    public constructor(ctx: AlterTableClauseContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public REPLACE(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.REPLACE, 0)!;
    }
    public partitionClause(): PartitionClauseContext {
        return this.getRuleContext(0, PartitionClauseContext)!;
    }
    public FROM(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.FROM, 0)!;
    }
    public tableIdentifier(): TableIdentifierContext {
        return this.getRuleContext(0, TableIdentifierContext)!;
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitAlterTableClauseReplace) {
            return visitor.visitAlterTableClauseReplace(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class AlterTableClauseModifyOrderByContext extends AlterTableClauseContext {
    public constructor(ctx: AlterTableClauseContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public MODIFY(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.MODIFY, 0)!;
    }
    public ORDER(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.ORDER, 0)!;
    }
    public BY(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.BY, 0)!;
    }
    public columnExpr(): ColumnExprContext {
        return this.getRuleContext(0, ColumnExprContext)!;
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitAlterTableClauseModifyOrderBy) {
            return visitor.visitAlterTableClauseModifyOrderBy(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class AlterTableClauseUpdateContext extends AlterTableClauseContext {
    public constructor(ctx: AlterTableClauseContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public UPDATE(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.UPDATE, 0)!;
    }
    public assignmentExprList(): AssignmentExprListContext {
        return this.getRuleContext(0, AssignmentExprListContext)!;
    }
    public whereClause(): WhereClauseContext {
        return this.getRuleContext(0, WhereClauseContext)!;
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitAlterTableClauseUpdate) {
            return visitor.visitAlterTableClauseUpdate(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class AlterTableClauseClearProjectionContext extends AlterTableClauseContext {
    public constructor(ctx: AlterTableClauseContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public CLEAR(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.CLEAR, 0)!;
    }
    public PROJECTION(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.PROJECTION, 0)!;
    }
    public nestedIdentifier(): NestedIdentifierContext {
        return this.getRuleContext(0, NestedIdentifierContext)!;
    }
    public IF(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.IF, 0);
    }
    public EXISTS(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.EXISTS, 0);
    }
    public IN(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.IN, 0);
    }
    public partitionClause(): PartitionClauseContext | null {
        return this.getRuleContext(0, PartitionClauseContext);
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitAlterTableClauseClearProjection) {
            return visitor.visitAlterTableClauseClearProjection(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class AlterTableClauseModifyRemoveContext extends AlterTableClauseContext {
    public constructor(ctx: AlterTableClauseContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public MODIFY(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.MODIFY, 0)!;
    }
    public COLUMN(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.COLUMN, 0)!;
    }
    public nestedIdentifier(): NestedIdentifierContext {
        return this.getRuleContext(0, NestedIdentifierContext)!;
    }
    public REMOVE(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.REMOVE, 0)!;
    }
    public tableColumnPropertyType(): TableColumnPropertyTypeContext {
        return this.getRuleContext(0, TableColumnPropertyTypeContext)!;
    }
    public IF(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.IF, 0);
    }
    public EXISTS(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.EXISTS, 0);
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitAlterTableClauseModifyRemove) {
            return visitor.visitAlterTableClauseModifyRemove(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class AlterTableClauseDeleteContext extends AlterTableClauseContext {
    public constructor(ctx: AlterTableClauseContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public DELETE(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.DELETE, 0)!;
    }
    public WHERE(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.WHERE, 0)!;
    }
    public columnExpr(): ColumnExprContext {
        return this.getRuleContext(0, ColumnExprContext)!;
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitAlterTableClauseDelete) {
            return visitor.visitAlterTableClauseDelete(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class AlterTableClauseCommentContext extends AlterTableClauseContext {
    public constructor(ctx: AlterTableClauseContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public COMMENT(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.COMMENT, 0)!;
    }
    public COLUMN(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.COLUMN, 0)!;
    }
    public nestedIdentifier(): NestedIdentifierContext {
        return this.getRuleContext(0, NestedIdentifierContext)!;
    }
    public STRING_LITERAL(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.STRING_LITERAL, 0)!;
    }
    public IF(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.IF, 0);
    }
    public EXISTS(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.EXISTS, 0);
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitAlterTableClauseComment) {
            return visitor.visitAlterTableClauseComment(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class AlterTableClauseDropColumnContext extends AlterTableClauseContext {
    public constructor(ctx: AlterTableClauseContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public DROP(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.DROP, 0)!;
    }
    public COLUMN(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.COLUMN, 0)!;
    }
    public nestedIdentifier(): NestedIdentifierContext {
        return this.getRuleContext(0, NestedIdentifierContext)!;
    }
    public IF(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.IF, 0);
    }
    public EXISTS(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.EXISTS, 0);
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitAlterTableClauseDropColumn) {
            return visitor.visitAlterTableClauseDropColumn(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class AlterTableClauseDetachContext extends AlterTableClauseContext {
    public constructor(ctx: AlterTableClauseContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public DETACH(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.DETACH, 0)!;
    }
    public partitionClause(): PartitionClauseContext {
        return this.getRuleContext(0, PartitionClauseContext)!;
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitAlterTableClauseDetach) {
            return visitor.visitAlterTableClauseDetach(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class AlterTableClauseAddIndexContext extends AlterTableClauseContext {
    public constructor(ctx: AlterTableClauseContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public ADD(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.ADD, 0)!;
    }
    public INDEX(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.INDEX, 0)!;
    }
    public tableIndexDfnt(): TableIndexDfntContext {
        return this.getRuleContext(0, TableIndexDfntContext)!;
    }
    public IF(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.IF, 0);
    }
    public NOT(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.NOT, 0);
    }
    public EXISTS(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.EXISTS, 0);
    }
    public AFTER(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.AFTER, 0);
    }
    public nestedIdentifier(): NestedIdentifierContext | null {
        return this.getRuleContext(0, NestedIdentifierContext);
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitAlterTableClauseAddIndex) {
            return visitor.visitAlterTableClauseAddIndex(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class AlterTableClauseDropPartitionContext extends AlterTableClauseContext {
    public constructor(ctx: AlterTableClauseContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public DROP(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.DROP, 0)!;
    }
    public partitionClause(): PartitionClauseContext {
        return this.getRuleContext(0, PartitionClauseContext)!;
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitAlterTableClauseDropPartition) {
            return visitor.visitAlterTableClauseDropPartition(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class AlterTableClauseMaterializeIndexContext extends AlterTableClauseContext {
    public constructor(ctx: AlterTableClauseContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public MATERIALIZE(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.MATERIALIZE, 0)!;
    }
    public INDEX(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.INDEX, 0)!;
    }
    public nestedIdentifier(): NestedIdentifierContext {
        return this.getRuleContext(0, NestedIdentifierContext)!;
    }
    public IF(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.IF, 0);
    }
    public EXISTS(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.EXISTS, 0);
    }
    public IN(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.IN, 0);
    }
    public partitionClause(): PartitionClauseContext | null {
        return this.getRuleContext(0, PartitionClauseContext);
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitAlterTableClauseMaterializeIndex) {
            return visitor.visitAlterTableClauseMaterializeIndex(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class AlterTableClauseMaterializeProjectionContext extends AlterTableClauseContext {
    public constructor(ctx: AlterTableClauseContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public MATERIALIZE(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.MATERIALIZE, 0)!;
    }
    public PROJECTION(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.PROJECTION, 0)!;
    }
    public nestedIdentifier(): NestedIdentifierContext {
        return this.getRuleContext(0, NestedIdentifierContext)!;
    }
    public IF(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.IF, 0);
    }
    public EXISTS(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.EXISTS, 0);
    }
    public IN(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.IN, 0);
    }
    public partitionClause(): PartitionClauseContext | null {
        return this.getRuleContext(0, PartitionClauseContext);
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitAlterTableClauseMaterializeProjection) {
            return visitor.visitAlterTableClauseMaterializeProjection(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class AlterTableClauseMovePartitionContext extends AlterTableClauseContext {
    public constructor(ctx: AlterTableClauseContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public MOVE(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.MOVE, 0)!;
    }
    public partitionClause(): PartitionClauseContext {
        return this.getRuleContext(0, PartitionClauseContext)!;
    }
    public TO(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.TO, 0);
    }
    public DISK(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.DISK, 0);
    }
    public STRING_LITERAL(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.STRING_LITERAL, 0);
    }
    public VOLUME(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.VOLUME, 0);
    }
    public TABLE(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.TABLE, 0);
    }
    public tableIdentifier(): TableIdentifierContext | null {
        return this.getRuleContext(0, TableIdentifierContext);
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitAlterTableClauseMovePartition) {
            return visitor.visitAlterTableClauseMovePartition(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class AlterTableClauseRenameContext extends AlterTableClauseContext {
    public constructor(ctx: AlterTableClauseContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public RENAME(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.RENAME, 0)!;
    }
    public COLUMN(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.COLUMN, 0)!;
    }
    public nestedIdentifier(): NestedIdentifierContext[];
    public nestedIdentifier(i: number): NestedIdentifierContext | null;
    public nestedIdentifier(
        i?: number,
    ): NestedIdentifierContext[] | NestedIdentifierContext | null {
        if (i === undefined) {
            return this.getRuleContexts(NestedIdentifierContext);
        }

        return this.getRuleContext(i, NestedIdentifierContext);
    }
    public TO(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.TO, 0)!;
    }
    public IF(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.IF, 0);
    }
    public EXISTS(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.EXISTS, 0);
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitAlterTableClauseRename) {
            return visitor.visitAlterTableClauseRename(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class AlterTableClauseFreezePartitionContext extends AlterTableClauseContext {
    public constructor(ctx: AlterTableClauseContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public FREEZE(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.FREEZE, 0)!;
    }
    public partitionClause(): PartitionClauseContext | null {
        return this.getRuleContext(0, PartitionClauseContext);
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitAlterTableClauseFreezePartition) {
            return visitor.visitAlterTableClauseFreezePartition(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class AlterTableClauseClearColumnContext extends AlterTableClauseContext {
    public constructor(ctx: AlterTableClauseContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public CLEAR(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.CLEAR, 0)!;
    }
    public COLUMN(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.COLUMN, 0)!;
    }
    public nestedIdentifier(): NestedIdentifierContext {
        return this.getRuleContext(0, NestedIdentifierContext)!;
    }
    public IF(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.IF, 0);
    }
    public EXISTS(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.EXISTS, 0);
    }
    public IN(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.IN, 0);
    }
    public partitionClause(): PartitionClauseContext | null {
        return this.getRuleContext(0, PartitionClauseContext);
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitAlterTableClauseClearColumn) {
            return visitor.visitAlterTableClauseClearColumn(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class AlterTableClauseModifyContext extends AlterTableClauseContext {
    public constructor(ctx: AlterTableClauseContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public MODIFY(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.MODIFY, 0)!;
    }
    public COLUMN(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.COLUMN, 0)!;
    }
    public tableColumnDfnt(): TableColumnDfntContext {
        return this.getRuleContext(0, TableColumnDfntContext)!;
    }
    public IF(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.IF, 0);
    }
    public EXISTS(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.EXISTS, 0);
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitAlterTableClauseModify) {
            return visitor.visitAlterTableClauseModify(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class AlterTableClauseClearIndexContext extends AlterTableClauseContext {
    public constructor(ctx: AlterTableClauseContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public CLEAR(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.CLEAR, 0)!;
    }
    public INDEX(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.INDEX, 0)!;
    }
    public nestedIdentifier(): NestedIdentifierContext {
        return this.getRuleContext(0, NestedIdentifierContext)!;
    }
    public IF(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.IF, 0);
    }
    public EXISTS(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.EXISTS, 0);
    }
    public IN(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.IN, 0);
    }
    public partitionClause(): PartitionClauseContext | null {
        return this.getRuleContext(0, PartitionClauseContext);
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitAlterTableClauseClearIndex) {
            return visitor.visitAlterTableClauseClearIndex(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class AlterTableClauseRemoveTTLContext extends AlterTableClauseContext {
    public constructor(ctx: AlterTableClauseContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public REMOVE(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.REMOVE, 0)!;
    }
    public TTL(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.TTL, 0)!;
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitAlterTableClauseRemoveTTL) {
            return visitor.visitAlterTableClauseRemoveTTL(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class AlterTableClauseModifyCodecContext extends AlterTableClauseContext {
    public constructor(ctx: AlterTableClauseContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public MODIFY(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.MODIFY, 0)!;
    }
    public COLUMN(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.COLUMN, 0)!;
    }
    public nestedIdentifier(): NestedIdentifierContext {
        return this.getRuleContext(0, NestedIdentifierContext)!;
    }
    public codecExpr(): CodecExprContext {
        return this.getRuleContext(0, CodecExprContext)!;
    }
    public IF(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.IF, 0);
    }
    public EXISTS(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.EXISTS, 0);
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitAlterTableClauseModifyCodec) {
            return visitor.visitAlterTableClauseModifyCodec(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class AlterTableClauseAttachContext extends AlterTableClauseContext {
    public constructor(ctx: AlterTableClauseContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public ATTACH(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.ATTACH, 0)!;
    }
    public partitionClause(): PartitionClauseContext {
        return this.getRuleContext(0, PartitionClauseContext)!;
    }
    public FROM(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.FROM, 0);
    }
    public tableIdentifier(): TableIdentifierContext | null {
        return this.getRuleContext(0, TableIdentifierContext);
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitAlterTableClauseAttach) {
            return visitor.visitAlterTableClauseAttach(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class AlterTableClauseDropProjectionContext extends AlterTableClauseContext {
    public constructor(ctx: AlterTableClauseContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public DROP(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.DROP, 0)!;
    }
    public PROJECTION(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.PROJECTION, 0)!;
    }
    public nestedIdentifier(): NestedIdentifierContext {
        return this.getRuleContext(0, NestedIdentifierContext)!;
    }
    public IF(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.IF, 0);
    }
    public EXISTS(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.EXISTS, 0);
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitAlterTableClauseDropProjection) {
            return visitor.visitAlterTableClauseDropProjection(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class AlterTableClauseDropIndexContext extends AlterTableClauseContext {
    public constructor(ctx: AlterTableClauseContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public DROP(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.DROP, 0)!;
    }
    public INDEX(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.INDEX, 0)!;
    }
    public nestedIdentifier(): NestedIdentifierContext {
        return this.getRuleContext(0, NestedIdentifierContext)!;
    }
    public IF(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.IF, 0);
    }
    public EXISTS(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.EXISTS, 0);
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitAlterTableClauseDropIndex) {
            return visitor.visitAlterTableClauseDropIndex(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class AlterTableClauseModifyCommentContext extends AlterTableClauseContext {
    public constructor(ctx: AlterTableClauseContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public MODIFY(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.MODIFY, 0)!;
    }
    public COLUMN(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.COLUMN, 0)!;
    }
    public nestedIdentifier(): NestedIdentifierContext {
        return this.getRuleContext(0, NestedIdentifierContext)!;
    }
    public COMMENT(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.COMMENT, 0)!;
    }
    public STRING_LITERAL(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.STRING_LITERAL, 0)!;
    }
    public IF(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.IF, 0);
    }
    public EXISTS(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.EXISTS, 0);
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitAlterTableClauseModifyComment) {
            return visitor.visitAlterTableClauseModifyComment(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class AlterTableClauseModifyTTLContext extends AlterTableClauseContext {
    public constructor(ctx: AlterTableClauseContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public MODIFY(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.MODIFY, 0)!;
    }
    public ttlClause(): TtlClauseContext {
        return this.getRuleContext(0, TtlClauseContext)!;
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitAlterTableClauseModifyTTL) {
            return visitor.visitAlterTableClauseModifyTTL(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class AlterTableClauseAddProjectionContext extends AlterTableClauseContext {
    public constructor(ctx: AlterTableClauseContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public ADD(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.ADD, 0)!;
    }
    public PROJECTION(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.PROJECTION, 0)!;
    }
    public tableProjectionDfnt(): TableProjectionDfntContext {
        return this.getRuleContext(0, TableProjectionDfntContext)!;
    }
    public IF(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.IF, 0);
    }
    public NOT(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.NOT, 0);
    }
    public EXISTS(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.EXISTS, 0);
    }
    public AFTER(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.AFTER, 0);
    }
    public nestedIdentifier(): NestedIdentifierContext | null {
        return this.getRuleContext(0, NestedIdentifierContext);
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitAlterTableClauseAddProjection) {
            return visitor.visitAlterTableClauseAddProjection(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class AlterTableClauseAddColumnContext extends AlterTableClauseContext {
    public constructor(ctx: AlterTableClauseContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public ADD(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.ADD, 0)!;
    }
    public COLUMN(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.COLUMN, 0)!;
    }
    public tableColumnDfnt(): TableColumnDfntContext {
        return this.getRuleContext(0, TableColumnDfntContext)!;
    }
    public IF(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.IF, 0);
    }
    public NOT(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.NOT, 0);
    }
    public EXISTS(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.EXISTS, 0);
    }
    public AFTER(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.AFTER, 0);
    }
    public nestedIdentifier(): NestedIdentifierContext | null {
        return this.getRuleContext(0, NestedIdentifierContext);
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitAlterTableClauseAddColumn) {
            return visitor.visitAlterTableClauseAddColumn(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class AssignmentExprListContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public assignmentExpr(): AssignmentExprContext[];
    public assignmentExpr(i: number): AssignmentExprContext | null;
    public assignmentExpr(i?: number): AssignmentExprContext[] | AssignmentExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(AssignmentExprContext);
        }

        return this.getRuleContext(i, AssignmentExprContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
        if (i === undefined) {
            return this.getTokens(ClickHouseParser.COMMA);
        } else {
            return this.getToken(ClickHouseParser.COMMA, i);
        }
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_assignmentExprList;
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitAssignmentExprList) {
            return visitor.visitAssignmentExprList(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class AssignmentExprContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public nestedIdentifier(): NestedIdentifierContext {
        return this.getRuleContext(0, NestedIdentifierContext)!;
    }
    public EQ_SINGLE(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.EQ_SINGLE, 0)!;
    }
    public columnExpr(): ColumnExprContext {
        return this.getRuleContext(0, ColumnExprContext)!;
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_assignmentExpr;
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitAssignmentExpr) {
            return visitor.visitAssignmentExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class TableColumnPropertyTypeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ALIAS(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.ALIAS, 0);
    }
    public CODEC(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.CODEC, 0);
    }
    public COMMENT(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.COMMENT, 0);
    }
    public DEFAULT(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.DEFAULT, 0);
    }
    public MATERIALIZED(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.MATERIALIZED, 0);
    }
    public TTL(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.TTL, 0);
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_tableColumnPropertyType;
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitTableColumnPropertyType) {
            return visitor.visitTableColumnPropertyType(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class PartitionClauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public PARTITION(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.PARTITION, 0)!;
    }
    public columnExpr(): ColumnExprContext | null {
        return this.getRuleContext(0, ColumnExprContext);
    }
    public ID(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.ID, 0);
    }
    public STRING_LITERAL(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.STRING_LITERAL, 0);
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_partitionClause;
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitPartitionClause) {
            return visitor.visitPartitionClause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class AttachStmtContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_attachStmt;
    }
    public override copyFrom(ctx: AttachStmtContext): void {
        super.copyFrom(ctx);
    }
}
export class AttachDictionaryStmtContext extends AttachStmtContext {
    public constructor(ctx: AttachStmtContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public ATTACH(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.ATTACH, 0)!;
    }
    public DICTIONARY(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.DICTIONARY, 0)!;
    }
    public tableIdentifier(): TableIdentifierContext {
        return this.getRuleContext(0, TableIdentifierContext)!;
    }
    public clusterClause(): ClusterClauseContext | null {
        return this.getRuleContext(0, ClusterClauseContext);
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitAttachDictionaryStmt) {
            return visitor.visitAttachDictionaryStmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class CheckStmtContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public CHECK(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.CHECK, 0)!;
    }
    public TABLE(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.TABLE, 0)!;
    }
    public tableIdentifier(): TableIdentifierContext {
        return this.getRuleContext(0, TableIdentifierContext)!;
    }
    public partitionClause(): PartitionClauseContext | null {
        return this.getRuleContext(0, PartitionClauseContext);
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_checkStmt;
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitCheckStmt) {
            return visitor.visitCheckStmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class CreateStmtContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_createStmt;
    }
    public override copyFrom(ctx: CreateStmtContext): void {
        super.copyFrom(ctx);
    }
}
export class CreateViewStmtContext extends CreateStmtContext {
    public constructor(ctx: CreateStmtContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public VIEW(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.VIEW, 0)!;
    }
    public tableIdentifier(): TableIdentifierContext {
        return this.getRuleContext(0, TableIdentifierContext)!;
    }
    public subqueryClause(): SubqueryClauseContext {
        return this.getRuleContext(0, SubqueryClauseContext)!;
    }
    public ATTACH(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.ATTACH, 0);
    }
    public CREATE(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.CREATE, 0);
    }
    public OR(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.OR, 0);
    }
    public REPLACE(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.REPLACE, 0);
    }
    public IF(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.IF, 0);
    }
    public NOT(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.NOT, 0);
    }
    public EXISTS(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.EXISTS, 0);
    }
    public uuidClause(): UuidClauseContext | null {
        return this.getRuleContext(0, UuidClauseContext);
    }
    public clusterClause(): ClusterClauseContext | null {
        return this.getRuleContext(0, ClusterClauseContext);
    }
    public tableSchemaClause(): TableSchemaClauseContext | null {
        return this.getRuleContext(0, TableSchemaClauseContext);
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitCreateViewStmt) {
            return visitor.visitCreateViewStmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class CreateDictionaryStmtContext extends CreateStmtContext {
    public constructor(ctx: CreateStmtContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public DICTIONARY(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.DICTIONARY, 0)!;
    }
    public tableIdentifier(): TableIdentifierContext {
        return this.getRuleContext(0, TableIdentifierContext)!;
    }
    public dictionarySchemaClause(): DictionarySchemaClauseContext {
        return this.getRuleContext(0, DictionarySchemaClauseContext)!;
    }
    public dictionaryEngineClause(): DictionaryEngineClauseContext {
        return this.getRuleContext(0, DictionaryEngineClauseContext)!;
    }
    public ATTACH(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.ATTACH, 0);
    }
    public CREATE(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.CREATE, 0);
    }
    public REPLACE(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.REPLACE, 0);
    }
    public IF(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.IF, 0);
    }
    public NOT(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.NOT, 0);
    }
    public EXISTS(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.EXISTS, 0);
    }
    public uuidClause(): UuidClauseContext | null {
        return this.getRuleContext(0, UuidClauseContext);
    }
    public clusterClause(): ClusterClauseContext | null {
        return this.getRuleContext(0, ClusterClauseContext);
    }
    public OR(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.OR, 0);
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitCreateDictionaryStmt) {
            return visitor.visitCreateDictionaryStmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class CreateDatabaseStmtContext extends CreateStmtContext {
    public constructor(ctx: CreateStmtContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public DATABASE(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.DATABASE, 0)!;
    }
    public databaseIdentifier(): DatabaseIdentifierContext {
        return this.getRuleContext(0, DatabaseIdentifierContext)!;
    }
    public ATTACH(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.ATTACH, 0);
    }
    public CREATE(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.CREATE, 0);
    }
    public IF(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.IF, 0);
    }
    public NOT(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.NOT, 0);
    }
    public EXISTS(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.EXISTS, 0);
    }
    public clusterClause(): ClusterClauseContext | null {
        return this.getRuleContext(0, ClusterClauseContext);
    }
    public engineExpr(): EngineExprContext | null {
        return this.getRuleContext(0, EngineExprContext);
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitCreateDatabaseStmt) {
            return visitor.visitCreateDatabaseStmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class CreateLiveViewStmtContext extends CreateStmtContext {
    public constructor(ctx: CreateStmtContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public LIVE(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.LIVE, 0)!;
    }
    public VIEW(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.VIEW, 0)!;
    }
    public tableIdentifier(): TableIdentifierContext {
        return this.getRuleContext(0, TableIdentifierContext)!;
    }
    public subqueryClause(): SubqueryClauseContext {
        return this.getRuleContext(0, SubqueryClauseContext)!;
    }
    public ATTACH(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.ATTACH, 0);
    }
    public CREATE(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.CREATE, 0);
    }
    public IF(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.IF, 0);
    }
    public NOT(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.NOT, 0);
    }
    public EXISTS(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.EXISTS, 0);
    }
    public uuidClause(): UuidClauseContext | null {
        return this.getRuleContext(0, UuidClauseContext);
    }
    public clusterClause(): ClusterClauseContext | null {
        return this.getRuleContext(0, ClusterClauseContext);
    }
    public WITH(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.WITH, 0);
    }
    public TIMEOUT(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.TIMEOUT, 0);
    }
    public destinationClause(): DestinationClauseContext | null {
        return this.getRuleContext(0, DestinationClauseContext);
    }
    public tableSchemaClause(): TableSchemaClauseContext | null {
        return this.getRuleContext(0, TableSchemaClauseContext);
    }
    public DECIMAL_LITERAL(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.DECIMAL_LITERAL, 0);
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitCreateLiveViewStmt) {
            return visitor.visitCreateLiveViewStmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class CreateMaterializedViewStmtContext extends CreateStmtContext {
    public constructor(ctx: CreateStmtContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public MATERIALIZED(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.MATERIALIZED, 0)!;
    }
    public VIEW(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.VIEW, 0)!;
    }
    public tableIdentifier(): TableIdentifierContext {
        return this.getRuleContext(0, TableIdentifierContext)!;
    }
    public subqueryClause(): SubqueryClauseContext {
        return this.getRuleContext(0, SubqueryClauseContext)!;
    }
    public ATTACH(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.ATTACH, 0);
    }
    public CREATE(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.CREATE, 0);
    }
    public destinationClause(): DestinationClauseContext | null {
        return this.getRuleContext(0, DestinationClauseContext);
    }
    public engineClause(): EngineClauseContext | null {
        return this.getRuleContext(0, EngineClauseContext);
    }
    public IF(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.IF, 0);
    }
    public NOT(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.NOT, 0);
    }
    public EXISTS(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.EXISTS, 0);
    }
    public uuidClause(): UuidClauseContext | null {
        return this.getRuleContext(0, UuidClauseContext);
    }
    public clusterClause(): ClusterClauseContext | null {
        return this.getRuleContext(0, ClusterClauseContext);
    }
    public tableSchemaClause(): TableSchemaClauseContext | null {
        return this.getRuleContext(0, TableSchemaClauseContext);
    }
    public POPULATE(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.POPULATE, 0);
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitCreateMaterializedViewStmt) {
            return visitor.visitCreateMaterializedViewStmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class CreateTableStmtContext extends CreateStmtContext {
    public constructor(ctx: CreateStmtContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public TABLE(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.TABLE, 0)!;
    }
    public tableIdentifier(): TableIdentifierContext {
        return this.getRuleContext(0, TableIdentifierContext)!;
    }
    public ATTACH(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.ATTACH, 0);
    }
    public CREATE(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.CREATE, 0);
    }
    public REPLACE(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.REPLACE, 0);
    }
    public TEMPORARY(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.TEMPORARY, 0);
    }
    public IF(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.IF, 0);
    }
    public NOT(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.NOT, 0);
    }
    public EXISTS(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.EXISTS, 0);
    }
    public uuidClause(): UuidClauseContext | null {
        return this.getRuleContext(0, UuidClauseContext);
    }
    public clusterClause(): ClusterClauseContext | null {
        return this.getRuleContext(0, ClusterClauseContext);
    }
    public tableSchemaClause(): TableSchemaClauseContext | null {
        return this.getRuleContext(0, TableSchemaClauseContext);
    }
    public engineClause(): EngineClauseContext | null {
        return this.getRuleContext(0, EngineClauseContext);
    }
    public subqueryClause(): SubqueryClauseContext | null {
        return this.getRuleContext(0, SubqueryClauseContext);
    }
    public OR(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.OR, 0);
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitCreateTableStmt) {
            return visitor.visitCreateTableStmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class DictionarySchemaClauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.LPAREN, 0)!;
    }
    public dictionaryAttrDfnt(): DictionaryAttrDfntContext[];
    public dictionaryAttrDfnt(i: number): DictionaryAttrDfntContext | null;
    public dictionaryAttrDfnt(
        i?: number,
    ): DictionaryAttrDfntContext[] | DictionaryAttrDfntContext | null {
        if (i === undefined) {
            return this.getRuleContexts(DictionaryAttrDfntContext);
        }

        return this.getRuleContext(i, DictionaryAttrDfntContext);
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.RPAREN, 0)!;
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
        if (i === undefined) {
            return this.getTokens(ClickHouseParser.COMMA);
        } else {
            return this.getToken(ClickHouseParser.COMMA, i);
        }
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_dictionarySchemaClause;
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitDictionarySchemaClause) {
            return visitor.visitDictionarySchemaClause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class DictionaryAttrDfntContext extends antlr.ParserRuleContext {
    public attrs: Set<string> = new Set();
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public columnTypeExpr(): ColumnTypeExprContext {
        return this.getRuleContext(0, ColumnTypeExprContext)!;
    }
    public DEFAULT(): antlr.TerminalNode[];
    public DEFAULT(i: number): antlr.TerminalNode | null;
    public DEFAULT(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
        if (i === undefined) {
            return this.getTokens(ClickHouseParser.DEFAULT);
        } else {
            return this.getToken(ClickHouseParser.DEFAULT, i);
        }
    }
    public literal(): LiteralContext[];
    public literal(i: number): LiteralContext | null;
    public literal(i?: number): LiteralContext[] | LiteralContext | null {
        if (i === undefined) {
            return this.getRuleContexts(LiteralContext);
        }

        return this.getRuleContext(i, LiteralContext);
    }
    public EXPRESSION(): antlr.TerminalNode[];
    public EXPRESSION(i: number): antlr.TerminalNode | null;
    public EXPRESSION(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
        if (i === undefined) {
            return this.getTokens(ClickHouseParser.EXPRESSION);
        } else {
            return this.getToken(ClickHouseParser.EXPRESSION, i);
        }
    }
    public columnExpr(): ColumnExprContext[];
    public columnExpr(i: number): ColumnExprContext | null;
    public columnExpr(i?: number): ColumnExprContext[] | ColumnExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ColumnExprContext);
        }

        return this.getRuleContext(i, ColumnExprContext);
    }
    public HIERARCHICAL(): antlr.TerminalNode[];
    public HIERARCHICAL(i: number): antlr.TerminalNode | null;
    public HIERARCHICAL(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
        if (i === undefined) {
            return this.getTokens(ClickHouseParser.HIERARCHICAL);
        } else {
            return this.getToken(ClickHouseParser.HIERARCHICAL, i);
        }
    }
    public INJECTIVE(): antlr.TerminalNode[];
    public INJECTIVE(i: number): antlr.TerminalNode | null;
    public INJECTIVE(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
        if (i === undefined) {
            return this.getTokens(ClickHouseParser.INJECTIVE);
        } else {
            return this.getToken(ClickHouseParser.INJECTIVE, i);
        }
    }
    public IS_OBJECT_ID(): antlr.TerminalNode[];
    public IS_OBJECT_ID(i: number): antlr.TerminalNode | null;
    public IS_OBJECT_ID(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
        if (i === undefined) {
            return this.getTokens(ClickHouseParser.IS_OBJECT_ID);
        } else {
            return this.getToken(ClickHouseParser.IS_OBJECT_ID, i);
        }
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_dictionaryAttrDfnt;
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitDictionaryAttrDfnt) {
            return visitor.visitDictionaryAttrDfnt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class DictionaryEngineClauseContext extends antlr.ParserRuleContext {
    public clauses: Set<string> = new Set();
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public dictionaryPrimaryKeyClause(): DictionaryPrimaryKeyClauseContext | null {
        return this.getRuleContext(0, DictionaryPrimaryKeyClauseContext);
    }
    public sourceClause(): SourceClauseContext[];
    public sourceClause(i: number): SourceClauseContext | null;
    public sourceClause(i?: number): SourceClauseContext[] | SourceClauseContext | null {
        if (i === undefined) {
            return this.getRuleContexts(SourceClauseContext);
        }

        return this.getRuleContext(i, SourceClauseContext);
    }
    public lifetimeClause(): LifetimeClauseContext[];
    public lifetimeClause(i: number): LifetimeClauseContext | null;
    public lifetimeClause(i?: number): LifetimeClauseContext[] | LifetimeClauseContext | null {
        if (i === undefined) {
            return this.getRuleContexts(LifetimeClauseContext);
        }

        return this.getRuleContext(i, LifetimeClauseContext);
    }
    public layoutClause(): LayoutClauseContext[];
    public layoutClause(i: number): LayoutClauseContext | null;
    public layoutClause(i?: number): LayoutClauseContext[] | LayoutClauseContext | null {
        if (i === undefined) {
            return this.getRuleContexts(LayoutClauseContext);
        }

        return this.getRuleContext(i, LayoutClauseContext);
    }
    public rangeClause(): RangeClauseContext[];
    public rangeClause(i: number): RangeClauseContext | null;
    public rangeClause(i?: number): RangeClauseContext[] | RangeClauseContext | null {
        if (i === undefined) {
            return this.getRuleContexts(RangeClauseContext);
        }

        return this.getRuleContext(i, RangeClauseContext);
    }
    public dictionarySettingsClause(): DictionarySettingsClauseContext[];
    public dictionarySettingsClause(i: number): DictionarySettingsClauseContext | null;
    public dictionarySettingsClause(
        i?: number,
    ): DictionarySettingsClauseContext[] | DictionarySettingsClauseContext | null {
        if (i === undefined) {
            return this.getRuleContexts(DictionarySettingsClauseContext);
        }

        return this.getRuleContext(i, DictionarySettingsClauseContext);
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_dictionaryEngineClause;
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitDictionaryEngineClause) {
            return visitor.visitDictionaryEngineClause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class DictionaryPrimaryKeyClauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public PRIMARY(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.PRIMARY, 0)!;
    }
    public KEY(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.KEY, 0)!;
    }
    public columnExprList(): ColumnExprListContext {
        return this.getRuleContext(0, ColumnExprListContext)!;
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_dictionaryPrimaryKeyClause;
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitDictionaryPrimaryKeyClause) {
            return visitor.visitDictionaryPrimaryKeyClause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class DictionaryArgExprContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public identifier(): IdentifierContext[];
    public identifier(i: number): IdentifierContext | null;
    public identifier(i?: number): IdentifierContext[] | IdentifierContext | null {
        if (i === undefined) {
            return this.getRuleContexts(IdentifierContext);
        }

        return this.getRuleContext(i, IdentifierContext);
    }
    public literal(): LiteralContext | null {
        return this.getRuleContext(0, LiteralContext);
    }
    public LPAREN(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.LPAREN, 0);
    }
    public RPAREN(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.RPAREN, 0);
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_dictionaryArgExpr;
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitDictionaryArgExpr) {
            return visitor.visitDictionaryArgExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class SourceClauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public SOURCE(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.SOURCE, 0)!;
    }
    public LPAREN(): antlr.TerminalNode[];
    public LPAREN(i: number): antlr.TerminalNode | null;
    public LPAREN(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
        if (i === undefined) {
            return this.getTokens(ClickHouseParser.LPAREN);
        } else {
            return this.getToken(ClickHouseParser.LPAREN, i);
        }
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public RPAREN(): antlr.TerminalNode[];
    public RPAREN(i: number): antlr.TerminalNode | null;
    public RPAREN(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
        if (i === undefined) {
            return this.getTokens(ClickHouseParser.RPAREN);
        } else {
            return this.getToken(ClickHouseParser.RPAREN, i);
        }
    }
    public dictionaryArgExpr(): DictionaryArgExprContext[];
    public dictionaryArgExpr(i: number): DictionaryArgExprContext | null;
    public dictionaryArgExpr(
        i?: number,
    ): DictionaryArgExprContext[] | DictionaryArgExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(DictionaryArgExprContext);
        }

        return this.getRuleContext(i, DictionaryArgExprContext);
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_sourceClause;
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitSourceClause) {
            return visitor.visitSourceClause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class LifetimeClauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LIFETIME(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.LIFETIME, 0)!;
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.LPAREN, 0)!;
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.RPAREN, 0)!;
    }
    public DECIMAL_LITERAL(): antlr.TerminalNode[];
    public DECIMAL_LITERAL(i: number): antlr.TerminalNode | null;
    public DECIMAL_LITERAL(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
        if (i === undefined) {
            return this.getTokens(ClickHouseParser.DECIMAL_LITERAL);
        } else {
            return this.getToken(ClickHouseParser.DECIMAL_LITERAL, i);
        }
    }
    public MIN(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.MIN, 0);
    }
    public MAX(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.MAX, 0);
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_lifetimeClause;
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitLifetimeClause) {
            return visitor.visitLifetimeClause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class LayoutClauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LAYOUT(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.LAYOUT, 0)!;
    }
    public LPAREN(): antlr.TerminalNode[];
    public LPAREN(i: number): antlr.TerminalNode | null;
    public LPAREN(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
        if (i === undefined) {
            return this.getTokens(ClickHouseParser.LPAREN);
        } else {
            return this.getToken(ClickHouseParser.LPAREN, i);
        }
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public RPAREN(): antlr.TerminalNode[];
    public RPAREN(i: number): antlr.TerminalNode | null;
    public RPAREN(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
        if (i === undefined) {
            return this.getTokens(ClickHouseParser.RPAREN);
        } else {
            return this.getToken(ClickHouseParser.RPAREN, i);
        }
    }
    public dictionaryArgExpr(): DictionaryArgExprContext[];
    public dictionaryArgExpr(i: number): DictionaryArgExprContext | null;
    public dictionaryArgExpr(
        i?: number,
    ): DictionaryArgExprContext[] | DictionaryArgExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(DictionaryArgExprContext);
        }

        return this.getRuleContext(i, DictionaryArgExprContext);
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_layoutClause;
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitLayoutClause) {
            return visitor.visitLayoutClause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class RangeClauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public RANGE(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.RANGE, 0)!;
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.LPAREN, 0)!;
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.RPAREN, 0)!;
    }
    public MIN(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.MIN, 0);
    }
    public identifier(): IdentifierContext[];
    public identifier(i: number): IdentifierContext | null;
    public identifier(i?: number): IdentifierContext[] | IdentifierContext | null {
        if (i === undefined) {
            return this.getRuleContexts(IdentifierContext);
        }

        return this.getRuleContext(i, IdentifierContext);
    }
    public MAX(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.MAX, 0);
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_rangeClause;
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitRangeClause) {
            return visitor.visitRangeClause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class DictionarySettingsClauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public SETTINGS(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.SETTINGS, 0)!;
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.LPAREN, 0)!;
    }
    public settingExprList(): SettingExprListContext {
        return this.getRuleContext(0, SettingExprListContext)!;
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.RPAREN, 0)!;
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_dictionarySettingsClause;
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitDictionarySettingsClause) {
            return visitor.visitDictionarySettingsClause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class ClusterClauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ON(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.ON, 0)!;
    }
    public CLUSTER(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.CLUSTER, 0)!;
    }
    public identifier(): IdentifierContext | null {
        return this.getRuleContext(0, IdentifierContext);
    }
    public STRING_LITERAL(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.STRING_LITERAL, 0);
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_clusterClause;
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitClusterClause) {
            return visitor.visitClusterClause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class UuidClauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public UUID(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.UUID, 0)!;
    }
    public STRING_LITERAL(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.STRING_LITERAL, 0)!;
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_uuidClause;
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitUuidClause) {
            return visitor.visitUuidClause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class DestinationClauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public TO(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.TO, 0)!;
    }
    public tableIdentifier(): TableIdentifierContext {
        return this.getRuleContext(0, TableIdentifierContext)!;
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_destinationClause;
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitDestinationClause) {
            return visitor.visitDestinationClause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class SubqueryClauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public AS(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.AS, 0)!;
    }
    public selectUnionStmt(): SelectUnionStmtContext {
        return this.getRuleContext(0, SelectUnionStmtContext)!;
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_subqueryClause;
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitSubqueryClause) {
            return visitor.visitSubqueryClause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class TableSchemaClauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_tableSchemaClause;
    }
    public override copyFrom(ctx: TableSchemaClauseContext): void {
        super.copyFrom(ctx);
    }
}
export class SchemaAsTableClauseContext extends TableSchemaClauseContext {
    public constructor(ctx: TableSchemaClauseContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public AS(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.AS, 0)!;
    }
    public tableIdentifier(): TableIdentifierContext {
        return this.getRuleContext(0, TableIdentifierContext)!;
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitSchemaAsTableClause) {
            return visitor.visitSchemaAsTableClause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class SchemaAsFunctionClauseContext extends TableSchemaClauseContext {
    public constructor(ctx: TableSchemaClauseContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public AS(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.AS, 0)!;
    }
    public tableFunctionExpr(): TableFunctionExprContext {
        return this.getRuleContext(0, TableFunctionExprContext)!;
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitSchemaAsFunctionClause) {
            return visitor.visitSchemaAsFunctionClause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class SchemaDescriptionClauseContext extends TableSchemaClauseContext {
    public constructor(ctx: TableSchemaClauseContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.LPAREN, 0)!;
    }
    public tableElementExpr(): TableElementExprContext[];
    public tableElementExpr(i: number): TableElementExprContext | null;
    public tableElementExpr(
        i?: number,
    ): TableElementExprContext[] | TableElementExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(TableElementExprContext);
        }

        return this.getRuleContext(i, TableElementExprContext);
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.RPAREN, 0)!;
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
        if (i === undefined) {
            return this.getTokens(ClickHouseParser.COMMA);
        } else {
            return this.getToken(ClickHouseParser.COMMA, i);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitSchemaDescriptionClause) {
            return visitor.visitSchemaDescriptionClause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class EngineClauseContext extends antlr.ParserRuleContext {
    public clauses: Set<string> = new Set();
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public engineExpr(): EngineExprContext {
        return this.getRuleContext(0, EngineExprContext)!;
    }
    public orderByClause(): OrderByClauseContext[];
    public orderByClause(i: number): OrderByClauseContext | null;
    public orderByClause(i?: number): OrderByClauseContext[] | OrderByClauseContext | null {
        if (i === undefined) {
            return this.getRuleContexts(OrderByClauseContext);
        }

        return this.getRuleContext(i, OrderByClauseContext);
    }
    public partitionByClause(): PartitionByClauseContext[];
    public partitionByClause(i: number): PartitionByClauseContext | null;
    public partitionByClause(
        i?: number,
    ): PartitionByClauseContext[] | PartitionByClauseContext | null {
        if (i === undefined) {
            return this.getRuleContexts(PartitionByClauseContext);
        }

        return this.getRuleContext(i, PartitionByClauseContext);
    }
    public primaryKeyClause(): PrimaryKeyClauseContext[];
    public primaryKeyClause(i: number): PrimaryKeyClauseContext | null;
    public primaryKeyClause(
        i?: number,
    ): PrimaryKeyClauseContext[] | PrimaryKeyClauseContext | null {
        if (i === undefined) {
            return this.getRuleContexts(PrimaryKeyClauseContext);
        }

        return this.getRuleContext(i, PrimaryKeyClauseContext);
    }
    public sampleByClause(): SampleByClauseContext[];
    public sampleByClause(i: number): SampleByClauseContext | null;
    public sampleByClause(i?: number): SampleByClauseContext[] | SampleByClauseContext | null {
        if (i === undefined) {
            return this.getRuleContexts(SampleByClauseContext);
        }

        return this.getRuleContext(i, SampleByClauseContext);
    }
    public ttlClause(): TtlClauseContext[];
    public ttlClause(i: number): TtlClauseContext | null;
    public ttlClause(i?: number): TtlClauseContext[] | TtlClauseContext | null {
        if (i === undefined) {
            return this.getRuleContexts(TtlClauseContext);
        }

        return this.getRuleContext(i, TtlClauseContext);
    }
    public settingsClause(): SettingsClauseContext[];
    public settingsClause(i: number): SettingsClauseContext | null;
    public settingsClause(i?: number): SettingsClauseContext[] | SettingsClauseContext | null {
        if (i === undefined) {
            return this.getRuleContexts(SettingsClauseContext);
        }

        return this.getRuleContext(i, SettingsClauseContext);
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_engineClause;
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitEngineClause) {
            return visitor.visitEngineClause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class PartitionByClauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public PARTITION(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.PARTITION, 0)!;
    }
    public BY(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.BY, 0)!;
    }
    public columnExpr(): ColumnExprContext {
        return this.getRuleContext(0, ColumnExprContext)!;
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_partitionByClause;
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitPartitionByClause) {
            return visitor.visitPartitionByClause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class PrimaryKeyClauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public PRIMARY(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.PRIMARY, 0)!;
    }
    public KEY(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.KEY, 0)!;
    }
    public columnExpr(): ColumnExprContext {
        return this.getRuleContext(0, ColumnExprContext)!;
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_primaryKeyClause;
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitPrimaryKeyClause) {
            return visitor.visitPrimaryKeyClause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class SampleByClauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public SAMPLE(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.SAMPLE, 0)!;
    }
    public BY(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.BY, 0)!;
    }
    public columnExpr(): ColumnExprContext {
        return this.getRuleContext(0, ColumnExprContext)!;
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_sampleByClause;
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitSampleByClause) {
            return visitor.visitSampleByClause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class TtlClauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public TTL(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.TTL, 0)!;
    }
    public ttlExpr(): TtlExprContext[];
    public ttlExpr(i: number): TtlExprContext | null;
    public ttlExpr(i?: number): TtlExprContext[] | TtlExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(TtlExprContext);
        }

        return this.getRuleContext(i, TtlExprContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
        if (i === undefined) {
            return this.getTokens(ClickHouseParser.COMMA);
        } else {
            return this.getToken(ClickHouseParser.COMMA, i);
        }
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_ttlClause;
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitTtlClause) {
            return visitor.visitTtlClause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class EngineExprContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ENGINE(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.ENGINE, 0)!;
    }
    public identifierOrNull(): IdentifierOrNullContext {
        return this.getRuleContext(0, IdentifierOrNullContext)!;
    }
    public EQ_SINGLE(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.EQ_SINGLE, 0);
    }
    public LPAREN(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.LPAREN, 0);
    }
    public RPAREN(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.RPAREN, 0);
    }
    public columnExprList(): ColumnExprListContext | null {
        return this.getRuleContext(0, ColumnExprListContext);
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_engineExpr;
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitEngineExpr) {
            return visitor.visitEngineExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class TableElementExprContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_tableElementExpr;
    }
    public override copyFrom(ctx: TableElementExprContext): void {
        super.copyFrom(ctx);
    }
}
export class TableElementExprProjectionContext extends TableElementExprContext {
    public constructor(ctx: TableElementExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public PROJECTION(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.PROJECTION, 0)!;
    }
    public tableProjectionDfnt(): TableProjectionDfntContext {
        return this.getRuleContext(0, TableProjectionDfntContext)!;
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitTableElementExprProjection) {
            return visitor.visitTableElementExprProjection(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class TableElementExprConstraintContext extends TableElementExprContext {
    public constructor(ctx: TableElementExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public CONSTRAINT(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.CONSTRAINT, 0)!;
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public CHECK(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.CHECK, 0)!;
    }
    public columnExpr(): ColumnExprContext {
        return this.getRuleContext(0, ColumnExprContext)!;
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitTableElementExprConstraint) {
            return visitor.visitTableElementExprConstraint(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class TableElementExprColumnContext extends TableElementExprContext {
    public constructor(ctx: TableElementExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public tableColumnDfnt(): TableColumnDfntContext {
        return this.getRuleContext(0, TableColumnDfntContext)!;
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitTableElementExprColumn) {
            return visitor.visitTableElementExprColumn(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class TableElementExprIndexContext extends TableElementExprContext {
    public constructor(ctx: TableElementExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public INDEX(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.INDEX, 0)!;
    }
    public tableIndexDfnt(): TableIndexDfntContext {
        return this.getRuleContext(0, TableIndexDfntContext)!;
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitTableElementExprIndex) {
            return visitor.visitTableElementExprIndex(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class TableColumnDfntContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public nestedIdentifier(): NestedIdentifierContext {
        return this.getRuleContext(0, NestedIdentifierContext)!;
    }
    public columnTypeExpr(): ColumnTypeExprContext | null {
        return this.getRuleContext(0, ColumnTypeExprContext);
    }
    public tableColumnPropertyExpr(): TableColumnPropertyExprContext | null {
        return this.getRuleContext(0, TableColumnPropertyExprContext);
    }
    public COMMENT(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.COMMENT, 0);
    }
    public STRING_LITERAL(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.STRING_LITERAL, 0);
    }
    public codecExpr(): CodecExprContext | null {
        return this.getRuleContext(0, CodecExprContext);
    }
    public TTL(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.TTL, 0);
    }
    public columnExpr(): ColumnExprContext | null {
        return this.getRuleContext(0, ColumnExprContext);
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_tableColumnDfnt;
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitTableColumnDfnt) {
            return visitor.visitTableColumnDfnt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class TableColumnPropertyExprContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public columnExpr(): ColumnExprContext {
        return this.getRuleContext(0, ColumnExprContext)!;
    }
    public DEFAULT(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.DEFAULT, 0);
    }
    public MATERIALIZED(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.MATERIALIZED, 0);
    }
    public ALIAS(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.ALIAS, 0);
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_tableColumnPropertyExpr;
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitTableColumnPropertyExpr) {
            return visitor.visitTableColumnPropertyExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class TableIndexDfntContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public nestedIdentifier(): NestedIdentifierContext {
        return this.getRuleContext(0, NestedIdentifierContext)!;
    }
    public columnExpr(): ColumnExprContext {
        return this.getRuleContext(0, ColumnExprContext)!;
    }
    public TYPE(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.TYPE, 0)!;
    }
    public columnTypeExpr(): ColumnTypeExprContext {
        return this.getRuleContext(0, ColumnTypeExprContext)!;
    }
    public GRANULARITY(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.GRANULARITY, 0)!;
    }
    public DECIMAL_LITERAL(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.DECIMAL_LITERAL, 0)!;
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_tableIndexDfnt;
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitTableIndexDfnt) {
            return visitor.visitTableIndexDfnt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class TableProjectionDfntContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public nestedIdentifier(): NestedIdentifierContext {
        return this.getRuleContext(0, NestedIdentifierContext)!;
    }
    public projectionSelectStmt(): ProjectionSelectStmtContext {
        return this.getRuleContext(0, ProjectionSelectStmtContext)!;
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_tableProjectionDfnt;
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitTableProjectionDfnt) {
            return visitor.visitTableProjectionDfnt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class CodecExprContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public CODEC(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.CODEC, 0)!;
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.LPAREN, 0)!;
    }
    public codecArgExpr(): CodecArgExprContext[];
    public codecArgExpr(i: number): CodecArgExprContext | null;
    public codecArgExpr(i?: number): CodecArgExprContext[] | CodecArgExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(CodecArgExprContext);
        }

        return this.getRuleContext(i, CodecArgExprContext);
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.RPAREN, 0)!;
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
        if (i === undefined) {
            return this.getTokens(ClickHouseParser.COMMA);
        } else {
            return this.getToken(ClickHouseParser.COMMA, i);
        }
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_codecExpr;
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitCodecExpr) {
            return visitor.visitCodecExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class CodecArgExprContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public LPAREN(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.LPAREN, 0);
    }
    public RPAREN(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.RPAREN, 0);
    }
    public columnExprList(): ColumnExprListContext | null {
        return this.getRuleContext(0, ColumnExprListContext);
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_codecArgExpr;
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitCodecArgExpr) {
            return visitor.visitCodecArgExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class TtlExprContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public columnExpr(): ColumnExprContext {
        return this.getRuleContext(0, ColumnExprContext)!;
    }
    public DELETE(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.DELETE, 0);
    }
    public TO(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.TO, 0);
    }
    public DISK(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.DISK, 0);
    }
    public STRING_LITERAL(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.STRING_LITERAL, 0);
    }
    public VOLUME(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.VOLUME, 0);
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_ttlExpr;
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitTtlExpr) {
            return visitor.visitTtlExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class DescribeStmtContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public tableExpr(): TableExprContext {
        return this.getRuleContext(0, TableExprContext)!;
    }
    public DESCRIBE(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.DESCRIBE, 0);
    }
    public DESC(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.DESC, 0);
    }
    public TABLE(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.TABLE, 0);
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_describeStmt;
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitDescribeStmt) {
            return visitor.visitDescribeStmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class DropStmtContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_dropStmt;
    }
    public override copyFrom(ctx: DropStmtContext): void {
        super.copyFrom(ctx);
    }
}
export class DropDatabaseStmtContext extends DropStmtContext {
    public constructor(ctx: DropStmtContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public DATABASE(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.DATABASE, 0)!;
    }
    public databaseIdentifier(): DatabaseIdentifierContext {
        return this.getRuleContext(0, DatabaseIdentifierContext)!;
    }
    public DETACH(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.DETACH, 0);
    }
    public DROP(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.DROP, 0);
    }
    public IF(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.IF, 0);
    }
    public EXISTS(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.EXISTS, 0);
    }
    public clusterClause(): ClusterClauseContext | null {
        return this.getRuleContext(0, ClusterClauseContext);
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitDropDatabaseStmt) {
            return visitor.visitDropDatabaseStmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class DropTableStmtContext extends DropStmtContext {
    public constructor(ctx: DropStmtContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public tableIdentifier(): TableIdentifierContext {
        return this.getRuleContext(0, TableIdentifierContext)!;
    }
    public DETACH(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.DETACH, 0);
    }
    public DROP(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.DROP, 0);
    }
    public DICTIONARY(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.DICTIONARY, 0);
    }
    public TABLE(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.TABLE, 0);
    }
    public VIEW(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.VIEW, 0);
    }
    public IF(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.IF, 0);
    }
    public EXISTS(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.EXISTS, 0);
    }
    public clusterClause(): ClusterClauseContext | null {
        return this.getRuleContext(0, ClusterClauseContext);
    }
    public NO(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.NO, 0);
    }
    public DELAY(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.DELAY, 0);
    }
    public TEMPORARY(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.TEMPORARY, 0);
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitDropTableStmt) {
            return visitor.visitDropTableStmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class ExistsStmtContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_existsStmt;
    }
    public override copyFrom(ctx: ExistsStmtContext): void {
        super.copyFrom(ctx);
    }
}
export class ExistsTableStmtContext extends ExistsStmtContext {
    public constructor(ctx: ExistsStmtContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public EXISTS(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.EXISTS, 0)!;
    }
    public tableIdentifier(): TableIdentifierContext {
        return this.getRuleContext(0, TableIdentifierContext)!;
    }
    public DICTIONARY(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.DICTIONARY, 0);
    }
    public TABLE(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.TABLE, 0);
    }
    public VIEW(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.VIEW, 0);
    }
    public TEMPORARY(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.TEMPORARY, 0);
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitExistsTableStmt) {
            return visitor.visitExistsTableStmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ExistsDatabaseStmtContext extends ExistsStmtContext {
    public constructor(ctx: ExistsStmtContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public EXISTS(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.EXISTS, 0)!;
    }
    public DATABASE(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.DATABASE, 0)!;
    }
    public databaseIdentifier(): DatabaseIdentifierContext {
        return this.getRuleContext(0, DatabaseIdentifierContext)!;
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitExistsDatabaseStmt) {
            return visitor.visitExistsDatabaseStmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class ExplainStmtContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_explainStmt;
    }
    public override copyFrom(ctx: ExplainStmtContext): void {
        super.copyFrom(ctx);
    }
}
export class ExplainSyntaxStmtContext extends ExplainStmtContext {
    public constructor(ctx: ExplainStmtContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public EXPLAIN(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.EXPLAIN, 0)!;
    }
    public SYNTAX(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.SYNTAX, 0)!;
    }
    public query(): QueryContext {
        return this.getRuleContext(0, QueryContext)!;
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitExplainSyntaxStmt) {
            return visitor.visitExplainSyntaxStmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ExplainASTStmtContext extends ExplainStmtContext {
    public constructor(ctx: ExplainStmtContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public EXPLAIN(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.EXPLAIN, 0)!;
    }
    public AST(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.AST, 0)!;
    }
    public query(): QueryContext {
        return this.getRuleContext(0, QueryContext)!;
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitExplainASTStmt) {
            return visitor.visitExplainASTStmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class InsertStmtContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public INSERT(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.INSERT, 0)!;
    }
    public INTO(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.INTO, 0)!;
    }
    public dataClause(): DataClauseContext {
        return this.getRuleContext(0, DataClauseContext)!;
    }
    public tableIdentifier(): TableIdentifierContext | null {
        return this.getRuleContext(0, TableIdentifierContext);
    }
    public FUNCTION(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.FUNCTION, 0);
    }
    public tableFunctionExpr(): TableFunctionExprContext | null {
        return this.getRuleContext(0, TableFunctionExprContext);
    }
    public TABLE(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.TABLE, 0);
    }
    public columnsClause(): ColumnsClauseContext | null {
        return this.getRuleContext(0, ColumnsClauseContext);
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_insertStmt;
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitInsertStmt) {
            return visitor.visitInsertStmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class ColumnsClauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.LPAREN, 0)!;
    }
    public nestedIdentifier(): NestedIdentifierContext[];
    public nestedIdentifier(i: number): NestedIdentifierContext | null;
    public nestedIdentifier(
        i?: number,
    ): NestedIdentifierContext[] | NestedIdentifierContext | null {
        if (i === undefined) {
            return this.getRuleContexts(NestedIdentifierContext);
        }

        return this.getRuleContext(i, NestedIdentifierContext);
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.RPAREN, 0)!;
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
        if (i === undefined) {
            return this.getTokens(ClickHouseParser.COMMA);
        } else {
            return this.getToken(ClickHouseParser.COMMA, i);
        }
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_columnsClause;
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitColumnsClause) {
            return visitor.visitColumnsClause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class DataClauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_dataClause;
    }
    public override copyFrom(ctx: DataClauseContext): void {
        super.copyFrom(ctx);
    }
}
export class DataClauseValuesContext extends DataClauseContext {
    public constructor(ctx: DataClauseContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public VALUES(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.VALUES, 0)!;
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitDataClauseValues) {
            return visitor.visitDataClauseValues(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class DataClauseFormatContext extends DataClauseContext {
    public constructor(ctx: DataClauseContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public FORMAT(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.FORMAT, 0)!;
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitDataClauseFormat) {
            return visitor.visitDataClauseFormat(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class DataClauseSelectContext extends DataClauseContext {
    public constructor(ctx: DataClauseContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public selectUnionStmt(): SelectUnionStmtContext {
        return this.getRuleContext(0, SelectUnionStmtContext)!;
    }
    public EOF(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.EOF, 0)!;
    }
    public SEMICOLON(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.SEMICOLON, 0);
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitDataClauseSelect) {
            return visitor.visitDataClauseSelect(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class KillStmtContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_killStmt;
    }
    public override copyFrom(ctx: KillStmtContext): void {
        super.copyFrom(ctx);
    }
}
export class KillMutationStmtContext extends KillStmtContext {
    public constructor(ctx: KillStmtContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KILL(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.KILL, 0)!;
    }
    public MUTATION(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.MUTATION, 0)!;
    }
    public whereClause(): WhereClauseContext {
        return this.getRuleContext(0, WhereClauseContext)!;
    }
    public clusterClause(): ClusterClauseContext | null {
        return this.getRuleContext(0, ClusterClauseContext);
    }
    public SYNC(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.SYNC, 0);
    }
    public ASYNC(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.ASYNC, 0);
    }
    public TEST(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.TEST, 0);
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitKillMutationStmt) {
            return visitor.visitKillMutationStmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class OptimizeStmtContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public OPTIMIZE(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.OPTIMIZE, 0)!;
    }
    public TABLE(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.TABLE, 0)!;
    }
    public tableIdentifier(): TableIdentifierContext {
        return this.getRuleContext(0, TableIdentifierContext)!;
    }
    public clusterClause(): ClusterClauseContext | null {
        return this.getRuleContext(0, ClusterClauseContext);
    }
    public partitionClause(): PartitionClauseContext | null {
        return this.getRuleContext(0, PartitionClauseContext);
    }
    public FINAL(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.FINAL, 0);
    }
    public DEDUPLICATE(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.DEDUPLICATE, 0);
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_optimizeStmt;
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitOptimizeStmt) {
            return visitor.visitOptimizeStmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class RenameStmtContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public RENAME(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.RENAME, 0)!;
    }
    public TABLE(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.TABLE, 0)!;
    }
    public tableIdentifier(): TableIdentifierContext[];
    public tableIdentifier(i: number): TableIdentifierContext | null;
    public tableIdentifier(i?: number): TableIdentifierContext[] | TableIdentifierContext | null {
        if (i === undefined) {
            return this.getRuleContexts(TableIdentifierContext);
        }

        return this.getRuleContext(i, TableIdentifierContext);
    }
    public TO(): antlr.TerminalNode[];
    public TO(i: number): antlr.TerminalNode | null;
    public TO(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
        if (i === undefined) {
            return this.getTokens(ClickHouseParser.TO);
        } else {
            return this.getToken(ClickHouseParser.TO, i);
        }
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
        if (i === undefined) {
            return this.getTokens(ClickHouseParser.COMMA);
        } else {
            return this.getToken(ClickHouseParser.COMMA, i);
        }
    }
    public clusterClause(): ClusterClauseContext | null {
        return this.getRuleContext(0, ClusterClauseContext);
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_renameStmt;
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitRenameStmt) {
            return visitor.visitRenameStmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class ProjectionSelectStmtContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.LPAREN, 0)!;
    }
    public SELECT(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.SELECT, 0)!;
    }
    public columnExprList(): ColumnExprListContext {
        return this.getRuleContext(0, ColumnExprListContext)!;
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.RPAREN, 0)!;
    }
    public withClause(): WithClauseContext | null {
        return this.getRuleContext(0, WithClauseContext);
    }
    public groupByClause(): GroupByClauseContext | null {
        return this.getRuleContext(0, GroupByClauseContext);
    }
    public projectionOrderByClause(): ProjectionOrderByClauseContext | null {
        return this.getRuleContext(0, ProjectionOrderByClauseContext);
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_projectionSelectStmt;
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitProjectionSelectStmt) {
            return visitor.visitProjectionSelectStmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class SelectUnionStmtContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public selectStmtWithParens(): SelectStmtWithParensContext[];
    public selectStmtWithParens(i: number): SelectStmtWithParensContext | null;
    public selectStmtWithParens(
        i?: number,
    ): SelectStmtWithParensContext[] | SelectStmtWithParensContext | null {
        if (i === undefined) {
            return this.getRuleContexts(SelectStmtWithParensContext);
        }

        return this.getRuleContext(i, SelectStmtWithParensContext);
    }
    public UNION(): antlr.TerminalNode[];
    public UNION(i: number): antlr.TerminalNode | null;
    public UNION(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
        if (i === undefined) {
            return this.getTokens(ClickHouseParser.UNION);
        } else {
            return this.getToken(ClickHouseParser.UNION, i);
        }
    }
    public ALL(): antlr.TerminalNode[];
    public ALL(i: number): antlr.TerminalNode | null;
    public ALL(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
        if (i === undefined) {
            return this.getTokens(ClickHouseParser.ALL);
        } else {
            return this.getToken(ClickHouseParser.ALL, i);
        }
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_selectUnionStmt;
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitSelectUnionStmt) {
            return visitor.visitSelectUnionStmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class SelectStmtWithParensContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public selectStmt(): SelectStmtContext | null {
        return this.getRuleContext(0, SelectStmtContext);
    }
    public LPAREN(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.LPAREN, 0);
    }
    public selectUnionStmt(): SelectUnionStmtContext | null {
        return this.getRuleContext(0, SelectUnionStmtContext);
    }
    public RPAREN(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.RPAREN, 0);
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_selectStmtWithParens;
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitSelectStmtWithParens) {
            return visitor.visitSelectStmtWithParens(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class SelectStmtContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public SELECT(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.SELECT, 0)!;
    }
    public columnExprList(): ColumnExprListContext {
        return this.getRuleContext(0, ColumnExprListContext)!;
    }
    public withClause(): WithClauseContext | null {
        return this.getRuleContext(0, WithClauseContext);
    }
    public DISTINCT(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.DISTINCT, 0);
    }
    public topClause(): TopClauseContext | null {
        return this.getRuleContext(0, TopClauseContext);
    }
    public fromClause(): FromClauseContext | null {
        return this.getRuleContext(0, FromClauseContext);
    }
    public arrayJoinClause(): ArrayJoinClauseContext | null {
        return this.getRuleContext(0, ArrayJoinClauseContext);
    }
    public windowClause(): WindowClauseContext | null {
        return this.getRuleContext(0, WindowClauseContext);
    }
    public prewhereClause(): PrewhereClauseContext | null {
        return this.getRuleContext(0, PrewhereClauseContext);
    }
    public whereClause(): WhereClauseContext | null {
        return this.getRuleContext(0, WhereClauseContext);
    }
    public groupByClause(): GroupByClauseContext | null {
        return this.getRuleContext(0, GroupByClauseContext);
    }
    public WITH(): antlr.TerminalNode[];
    public WITH(i: number): antlr.TerminalNode | null;
    public WITH(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
        if (i === undefined) {
            return this.getTokens(ClickHouseParser.WITH);
        } else {
            return this.getToken(ClickHouseParser.WITH, i);
        }
    }
    public TOTALS(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.TOTALS, 0);
    }
    public havingClause(): HavingClauseContext | null {
        return this.getRuleContext(0, HavingClauseContext);
    }
    public orderByClause(): OrderByClauseContext | null {
        return this.getRuleContext(0, OrderByClauseContext);
    }
    public limitByClause(): LimitByClauseContext | null {
        return this.getRuleContext(0, LimitByClauseContext);
    }
    public limitClause(): LimitClauseContext | null {
        return this.getRuleContext(0, LimitClauseContext);
    }
    public settingsClause(): SettingsClauseContext | null {
        return this.getRuleContext(0, SettingsClauseContext);
    }
    public CUBE(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.CUBE, 0);
    }
    public ROLLUP(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.ROLLUP, 0);
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_selectStmt;
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitSelectStmt) {
            return visitor.visitSelectStmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class WithClauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public WITH(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.WITH, 0)!;
    }
    public columnExprList(): ColumnExprListContext {
        return this.getRuleContext(0, ColumnExprListContext)!;
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_withClause;
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitWithClause) {
            return visitor.visitWithClause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class TopClauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public TOP(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.TOP, 0)!;
    }
    public DECIMAL_LITERAL(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.DECIMAL_LITERAL, 0)!;
    }
    public WITH(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.WITH, 0);
    }
    public TIES(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.TIES, 0);
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_topClause;
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitTopClause) {
            return visitor.visitTopClause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class FromClauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public FROM(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.FROM, 0)!;
    }
    public joinExpr(): JoinExprContext {
        return this.getRuleContext(0, JoinExprContext)!;
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_fromClause;
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitFromClause) {
            return visitor.visitFromClause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class ArrayJoinClauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ARRAY(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.ARRAY, 0)!;
    }
    public JOIN(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.JOIN, 0)!;
    }
    public columnExprList(): ColumnExprListContext {
        return this.getRuleContext(0, ColumnExprListContext)!;
    }
    public LEFT(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.LEFT, 0);
    }
    public INNER(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.INNER, 0);
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_arrayJoinClause;
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitArrayJoinClause) {
            return visitor.visitArrayJoinClause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class WindowClauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public WINDOW(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.WINDOW, 0)!;
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public AS(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.AS, 0)!;
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.LPAREN, 0)!;
    }
    public windowExpr(): WindowExprContext {
        return this.getRuleContext(0, WindowExprContext)!;
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.RPAREN, 0)!;
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_windowClause;
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitWindowClause) {
            return visitor.visitWindowClause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class PrewhereClauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public PREWHERE(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.PREWHERE, 0)!;
    }
    public columnExpr(): ColumnExprContext {
        return this.getRuleContext(0, ColumnExprContext)!;
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_prewhereClause;
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitPrewhereClause) {
            return visitor.visitPrewhereClause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class WhereClauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public WHERE(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.WHERE, 0)!;
    }
    public columnExpr(): ColumnExprContext {
        return this.getRuleContext(0, ColumnExprContext)!;
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_whereClause;
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitWhereClause) {
            return visitor.visitWhereClause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class GroupByClauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public GROUP(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.GROUP, 0)!;
    }
    public BY(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.BY, 0)!;
    }
    public LPAREN(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.LPAREN, 0);
    }
    public columnExprList(): ColumnExprListContext | null {
        return this.getRuleContext(0, ColumnExprListContext);
    }
    public RPAREN(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.RPAREN, 0);
    }
    public CUBE(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.CUBE, 0);
    }
    public ROLLUP(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.ROLLUP, 0);
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_groupByClause;
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitGroupByClause) {
            return visitor.visitGroupByClause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class HavingClauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public HAVING(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.HAVING, 0)!;
    }
    public columnExpr(): ColumnExprContext {
        return this.getRuleContext(0, ColumnExprContext)!;
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_havingClause;
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitHavingClause) {
            return visitor.visitHavingClause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class OrderByClauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ORDER(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.ORDER, 0)!;
    }
    public BY(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.BY, 0)!;
    }
    public orderExprList(): OrderExprListContext {
        return this.getRuleContext(0, OrderExprListContext)!;
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_orderByClause;
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitOrderByClause) {
            return visitor.visitOrderByClause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class ProjectionOrderByClauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ORDER(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.ORDER, 0)!;
    }
    public BY(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.BY, 0)!;
    }
    public columnExprList(): ColumnExprListContext {
        return this.getRuleContext(0, ColumnExprListContext)!;
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_projectionOrderByClause;
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitProjectionOrderByClause) {
            return visitor.visitProjectionOrderByClause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class LimitByClauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LIMIT(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.LIMIT, 0)!;
    }
    public limitExpr(): LimitExprContext {
        return this.getRuleContext(0, LimitExprContext)!;
    }
    public BY(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.BY, 0)!;
    }
    public columnExprList(): ColumnExprListContext {
        return this.getRuleContext(0, ColumnExprListContext)!;
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_limitByClause;
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitLimitByClause) {
            return visitor.visitLimitByClause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class LimitClauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LIMIT(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.LIMIT, 0)!;
    }
    public limitExpr(): LimitExprContext {
        return this.getRuleContext(0, LimitExprContext)!;
    }
    public WITH(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.WITH, 0);
    }
    public TIES(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.TIES, 0);
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_limitClause;
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitLimitClause) {
            return visitor.visitLimitClause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class SettingsClauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public SETTINGS(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.SETTINGS, 0)!;
    }
    public settingExprList(): SettingExprListContext {
        return this.getRuleContext(0, SettingExprListContext)!;
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_settingsClause;
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitSettingsClause) {
            return visitor.visitSettingsClause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class JoinExprContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_joinExpr;
    }
    public override copyFrom(ctx: JoinExprContext): void {
        super.copyFrom(ctx);
    }
}
export class JoinExprOpContext extends JoinExprContext {
    public constructor(ctx: JoinExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public joinExpr(): JoinExprContext[];
    public joinExpr(i: number): JoinExprContext | null;
    public joinExpr(i?: number): JoinExprContext[] | JoinExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(JoinExprContext);
        }

        return this.getRuleContext(i, JoinExprContext);
    }
    public JOIN(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.JOIN, 0)!;
    }
    public joinConstraintClause(): JoinConstraintClauseContext {
        return this.getRuleContext(0, JoinConstraintClauseContext)!;
    }
    public joinOp(): JoinOpContext | null {
        return this.getRuleContext(0, JoinOpContext);
    }
    public GLOBAL(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.GLOBAL, 0);
    }
    public LOCAL(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.LOCAL, 0);
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitJoinExprOp) {
            return visitor.visitJoinExprOp(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class JoinExprTableContext extends JoinExprContext {
    public constructor(ctx: JoinExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public tableExpr(): TableExprContext {
        return this.getRuleContext(0, TableExprContext)!;
    }
    public FINAL(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.FINAL, 0);
    }
    public sampleClause(): SampleClauseContext | null {
        return this.getRuleContext(0, SampleClauseContext);
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitJoinExprTable) {
            return visitor.visitJoinExprTable(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class JoinExprParensContext extends JoinExprContext {
    public constructor(ctx: JoinExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.LPAREN, 0)!;
    }
    public joinExpr(): JoinExprContext {
        return this.getRuleContext(0, JoinExprContext)!;
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.RPAREN, 0)!;
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitJoinExprParens) {
            return visitor.visitJoinExprParens(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class JoinExprCrossOpContext extends JoinExprContext {
    public constructor(ctx: JoinExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public joinExpr(): JoinExprContext[];
    public joinExpr(i: number): JoinExprContext | null;
    public joinExpr(i?: number): JoinExprContext[] | JoinExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(JoinExprContext);
        }

        return this.getRuleContext(i, JoinExprContext);
    }
    public joinOpCross(): JoinOpCrossContext {
        return this.getRuleContext(0, JoinOpCrossContext)!;
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitJoinExprCrossOp) {
            return visitor.visitJoinExprCrossOp(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class JoinOpContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_joinOp;
    }
    public override copyFrom(ctx: JoinOpContext): void {
        super.copyFrom(ctx);
    }
}
export class JoinOpFullContext extends JoinOpContext {
    public constructor(ctx: JoinOpContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public FULL(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.FULL, 0);
    }
    public OUTER(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.OUTER, 0);
    }
    public ALL(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.ALL, 0);
    }
    public ANY(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.ANY, 0);
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitJoinOpFull) {
            return visitor.visitJoinOpFull(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class JoinOpInnerContext extends JoinOpContext {
    public constructor(ctx: JoinOpContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public INNER(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.INNER, 0);
    }
    public ALL(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.ALL, 0);
    }
    public ANY(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.ANY, 0);
    }
    public ASOF(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.ASOF, 0);
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitJoinOpInner) {
            return visitor.visitJoinOpInner(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class JoinOpLeftRightContext extends JoinOpContext {
    public constructor(ctx: JoinOpContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public LEFT(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.LEFT, 0);
    }
    public RIGHT(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.RIGHT, 0);
    }
    public OUTER(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.OUTER, 0);
    }
    public SEMI(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.SEMI, 0);
    }
    public ALL(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.ALL, 0);
    }
    public ANTI(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.ANTI, 0);
    }
    public ANY(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.ANY, 0);
    }
    public ASOF(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.ASOF, 0);
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitJoinOpLeftRight) {
            return visitor.visitJoinOpLeftRight(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class JoinOpCrossContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public CROSS(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.CROSS, 0);
    }
    public JOIN(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.JOIN, 0);
    }
    public GLOBAL(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.GLOBAL, 0);
    }
    public LOCAL(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.LOCAL, 0);
    }
    public COMMA(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.COMMA, 0);
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_joinOpCross;
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitJoinOpCross) {
            return visitor.visitJoinOpCross(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class JoinConstraintClauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ON(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.ON, 0);
    }
    public columnExprList(): ColumnExprListContext {
        return this.getRuleContext(0, ColumnExprListContext)!;
    }
    public USING(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.USING, 0);
    }
    public LPAREN(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.LPAREN, 0);
    }
    public RPAREN(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.RPAREN, 0);
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_joinConstraintClause;
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitJoinConstraintClause) {
            return visitor.visitJoinConstraintClause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class SampleClauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public SAMPLE(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.SAMPLE, 0)!;
    }
    public ratioExpr(): RatioExprContext[];
    public ratioExpr(i: number): RatioExprContext | null;
    public ratioExpr(i?: number): RatioExprContext[] | RatioExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(RatioExprContext);
        }

        return this.getRuleContext(i, RatioExprContext);
    }
    public OFFSET(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.OFFSET, 0);
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_sampleClause;
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitSampleClause) {
            return visitor.visitSampleClause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class LimitExprContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public columnExpr(): ColumnExprContext[];
    public columnExpr(i: number): ColumnExprContext | null;
    public columnExpr(i?: number): ColumnExprContext[] | ColumnExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ColumnExprContext);
        }

        return this.getRuleContext(i, ColumnExprContext);
    }
    public COMMA(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.COMMA, 0);
    }
    public OFFSET(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.OFFSET, 0);
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_limitExpr;
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitLimitExpr) {
            return visitor.visitLimitExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class OrderExprListContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public orderExpr(): OrderExprContext[];
    public orderExpr(i: number): OrderExprContext | null;
    public orderExpr(i?: number): OrderExprContext[] | OrderExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(OrderExprContext);
        }

        return this.getRuleContext(i, OrderExprContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
        if (i === undefined) {
            return this.getTokens(ClickHouseParser.COMMA);
        } else {
            return this.getToken(ClickHouseParser.COMMA, i);
        }
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_orderExprList;
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitOrderExprList) {
            return visitor.visitOrderExprList(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class OrderExprContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public columnExpr(): ColumnExprContext {
        return this.getRuleContext(0, ColumnExprContext)!;
    }
    public NULLS(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.NULLS, 0);
    }
    public COLLATE(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.COLLATE, 0);
    }
    public STRING_LITERAL(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.STRING_LITERAL, 0);
    }
    public ASCENDING(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.ASCENDING, 0);
    }
    public DESCENDING(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.DESCENDING, 0);
    }
    public DESC(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.DESC, 0);
    }
    public FIRST(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.FIRST, 0);
    }
    public LAST(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.LAST, 0);
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_orderExpr;
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitOrderExpr) {
            return visitor.visitOrderExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class RatioExprContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public numberLiteral(): NumberLiteralContext[];
    public numberLiteral(i: number): NumberLiteralContext | null;
    public numberLiteral(i?: number): NumberLiteralContext[] | NumberLiteralContext | null {
        if (i === undefined) {
            return this.getRuleContexts(NumberLiteralContext);
        }

        return this.getRuleContext(i, NumberLiteralContext);
    }
    public SLASH(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.SLASH, 0);
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_ratioExpr;
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitRatioExpr) {
            return visitor.visitRatioExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class SettingExprListContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public settingExpr(): SettingExprContext[];
    public settingExpr(i: number): SettingExprContext | null;
    public settingExpr(i?: number): SettingExprContext[] | SettingExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(SettingExprContext);
        }

        return this.getRuleContext(i, SettingExprContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
        if (i === undefined) {
            return this.getTokens(ClickHouseParser.COMMA);
        } else {
            return this.getToken(ClickHouseParser.COMMA, i);
        }
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_settingExprList;
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitSettingExprList) {
            return visitor.visitSettingExprList(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class SettingExprContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public EQ_SINGLE(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.EQ_SINGLE, 0)!;
    }
    public literal(): LiteralContext {
        return this.getRuleContext(0, LiteralContext)!;
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_settingExpr;
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitSettingExpr) {
            return visitor.visitSettingExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class WindowExprContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public winPartitionByClause(): WinPartitionByClauseContext | null {
        return this.getRuleContext(0, WinPartitionByClauseContext);
    }
    public winOrderByClause(): WinOrderByClauseContext | null {
        return this.getRuleContext(0, WinOrderByClauseContext);
    }
    public winFrameClause(): WinFrameClauseContext | null {
        return this.getRuleContext(0, WinFrameClauseContext);
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_windowExpr;
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitWindowExpr) {
            return visitor.visitWindowExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class WinPartitionByClauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public PARTITION(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.PARTITION, 0)!;
    }
    public BY(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.BY, 0)!;
    }
    public columnExprList(): ColumnExprListContext {
        return this.getRuleContext(0, ColumnExprListContext)!;
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_winPartitionByClause;
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitWinPartitionByClause) {
            return visitor.visitWinPartitionByClause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class WinOrderByClauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ORDER(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.ORDER, 0)!;
    }
    public BY(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.BY, 0)!;
    }
    public orderExprList(): OrderExprListContext {
        return this.getRuleContext(0, OrderExprListContext)!;
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_winOrderByClause;
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitWinOrderByClause) {
            return visitor.visitWinOrderByClause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class WinFrameClauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public winFrameExtend(): WinFrameExtendContext {
        return this.getRuleContext(0, WinFrameExtendContext)!;
    }
    public ROWS(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.ROWS, 0);
    }
    public RANGE(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.RANGE, 0);
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_winFrameClause;
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitWinFrameClause) {
            return visitor.visitWinFrameClause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class WinFrameExtendContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_winFrameExtend;
    }
    public override copyFrom(ctx: WinFrameExtendContext): void {
        super.copyFrom(ctx);
    }
}
export class FrameStartContext extends WinFrameExtendContext {
    public constructor(ctx: WinFrameExtendContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public winFrameBound(): WinFrameBoundContext {
        return this.getRuleContext(0, WinFrameBoundContext)!;
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitFrameStart) {
            return visitor.visitFrameStart(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class FrameBetweenContext extends WinFrameExtendContext {
    public constructor(ctx: WinFrameExtendContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public BETWEEN(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.BETWEEN, 0)!;
    }
    public winFrameBound(): WinFrameBoundContext[];
    public winFrameBound(i: number): WinFrameBoundContext | null;
    public winFrameBound(i?: number): WinFrameBoundContext[] | WinFrameBoundContext | null {
        if (i === undefined) {
            return this.getRuleContexts(WinFrameBoundContext);
        }

        return this.getRuleContext(i, WinFrameBoundContext);
    }
    public AND(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.AND, 0)!;
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitFrameBetween) {
            return visitor.visitFrameBetween(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class WinFrameBoundContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public CURRENT(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.CURRENT, 0);
    }
    public ROW(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.ROW, 0);
    }
    public UNBOUNDED(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.UNBOUNDED, 0);
    }
    public PRECEDING(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.PRECEDING, 0);
    }
    public FOLLOWING(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.FOLLOWING, 0);
    }
    public numberLiteral(): NumberLiteralContext | null {
        return this.getRuleContext(0, NumberLiteralContext);
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_winFrameBound;
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitWinFrameBound) {
            return visitor.visitWinFrameBound(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class SetStmtContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public SET(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.SET, 0)!;
    }
    public settingExprList(): SettingExprListContext {
        return this.getRuleContext(0, SettingExprListContext)!;
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_setStmt;
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitSetStmt) {
            return visitor.visitSetStmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class ShowStmtContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_showStmt;
    }
    public override copyFrom(ctx: ShowStmtContext): void {
        super.copyFrom(ctx);
    }
}
export class ShowCreateDatabaseStmtContext extends ShowStmtContext {
    public constructor(ctx: ShowStmtContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public SHOW(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.SHOW, 0)!;
    }
    public CREATE(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.CREATE, 0)!;
    }
    public DATABASE(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.DATABASE, 0)!;
    }
    public databaseIdentifier(): DatabaseIdentifierContext {
        return this.getRuleContext(0, DatabaseIdentifierContext)!;
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitShowCreateDatabaseStmt) {
            return visitor.visitShowCreateDatabaseStmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ShowDatabasesStmtContext extends ShowStmtContext {
    public constructor(ctx: ShowStmtContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public SHOW(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.SHOW, 0)!;
    }
    public DATABASES(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.DATABASES, 0)!;
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitShowDatabasesStmt) {
            return visitor.visitShowDatabasesStmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ShowCreateTableStmtContext extends ShowStmtContext {
    public constructor(ctx: ShowStmtContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public SHOW(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.SHOW, 0)!;
    }
    public CREATE(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.CREATE, 0)!;
    }
    public tableIdentifier(): TableIdentifierContext {
        return this.getRuleContext(0, TableIdentifierContext)!;
    }
    public TEMPORARY(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.TEMPORARY, 0);
    }
    public TABLE(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.TABLE, 0);
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitShowCreateTableStmt) {
            return visitor.visitShowCreateTableStmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ShowTablesStmtContext extends ShowStmtContext {
    public constructor(ctx: ShowStmtContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public SHOW(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.SHOW, 0)!;
    }
    public TABLES(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.TABLES, 0)!;
    }
    public TEMPORARY(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.TEMPORARY, 0);
    }
    public databaseIdentifier(): DatabaseIdentifierContext | null {
        return this.getRuleContext(0, DatabaseIdentifierContext);
    }
    public LIKE(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.LIKE, 0);
    }
    public STRING_LITERAL(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.STRING_LITERAL, 0);
    }
    public whereClause(): WhereClauseContext | null {
        return this.getRuleContext(0, WhereClauseContext);
    }
    public limitClause(): LimitClauseContext | null {
        return this.getRuleContext(0, LimitClauseContext);
    }
    public FROM(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.FROM, 0);
    }
    public IN(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.IN, 0);
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitShowTablesStmt) {
            return visitor.visitShowTablesStmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ShowDictionariesStmtContext extends ShowStmtContext {
    public constructor(ctx: ShowStmtContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public SHOW(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.SHOW, 0)!;
    }
    public DICTIONARIES(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.DICTIONARIES, 0)!;
    }
    public FROM(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.FROM, 0);
    }
    public databaseIdentifier(): DatabaseIdentifierContext | null {
        return this.getRuleContext(0, DatabaseIdentifierContext);
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitShowDictionariesStmt) {
            return visitor.visitShowDictionariesStmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ShowCreateDictionaryStmtContext extends ShowStmtContext {
    public constructor(ctx: ShowStmtContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public SHOW(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.SHOW, 0)!;
    }
    public CREATE(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.CREATE, 0)!;
    }
    public DICTIONARY(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.DICTIONARY, 0)!;
    }
    public tableIdentifier(): TableIdentifierContext {
        return this.getRuleContext(0, TableIdentifierContext)!;
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitShowCreateDictionaryStmt) {
            return visitor.visitShowCreateDictionaryStmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class SystemStmtContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public SYSTEM(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.SYSTEM, 0)!;
    }
    public FLUSH(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.FLUSH, 0);
    }
    public DISTRIBUTED(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.DISTRIBUTED, 0);
    }
    public tableIdentifier(): TableIdentifierContext | null {
        return this.getRuleContext(0, TableIdentifierContext);
    }
    public LOGS(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.LOGS, 0);
    }
    public RELOAD(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.RELOAD, 0);
    }
    public DICTIONARIES(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.DICTIONARIES, 0);
    }
    public DICTIONARY(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.DICTIONARY, 0);
    }
    public START(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.START, 0);
    }
    public STOP(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.STOP, 0);
    }
    public SENDS(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.SENDS, 0);
    }
    public FETCHES(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.FETCHES, 0);
    }
    public MERGES(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.MERGES, 0);
    }
    public TTL(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.TTL, 0);
    }
    public REPLICATED(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.REPLICATED, 0);
    }
    public SYNC(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.SYNC, 0);
    }
    public REPLICA(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.REPLICA, 0);
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_systemStmt;
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitSystemStmt) {
            return visitor.visitSystemStmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class TruncateStmtContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public TRUNCATE(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.TRUNCATE, 0)!;
    }
    public tableIdentifier(): TableIdentifierContext {
        return this.getRuleContext(0, TableIdentifierContext)!;
    }
    public TEMPORARY(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.TEMPORARY, 0);
    }
    public TABLE(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.TABLE, 0);
    }
    public IF(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.IF, 0);
    }
    public EXISTS(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.EXISTS, 0);
    }
    public clusterClause(): ClusterClauseContext | null {
        return this.getRuleContext(0, ClusterClauseContext);
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_truncateStmt;
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitTruncateStmt) {
            return visitor.visitTruncateStmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class UseStmtContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public USE(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.USE, 0)!;
    }
    public databaseIdentifier(): DatabaseIdentifierContext {
        return this.getRuleContext(0, DatabaseIdentifierContext)!;
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_useStmt;
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitUseStmt) {
            return visitor.visitUseStmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class WatchStmtContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public WATCH(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.WATCH, 0)!;
    }
    public tableIdentifier(): TableIdentifierContext {
        return this.getRuleContext(0, TableIdentifierContext)!;
    }
    public EVENTS(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.EVENTS, 0);
    }
    public LIMIT(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.LIMIT, 0);
    }
    public DECIMAL_LITERAL(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.DECIMAL_LITERAL, 0);
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_watchStmt;
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitWatchStmt) {
            return visitor.visitWatchStmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class ColumnTypeExprContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_columnTypeExpr;
    }
    public override copyFrom(ctx: ColumnTypeExprContext): void {
        super.copyFrom(ctx);
    }
}
export class ColumnTypeExprNestedContext extends ColumnTypeExprContext {
    public constructor(ctx: ColumnTypeExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public identifier(): IdentifierContext[];
    public identifier(i: number): IdentifierContext | null;
    public identifier(i?: number): IdentifierContext[] | IdentifierContext | null {
        if (i === undefined) {
            return this.getRuleContexts(IdentifierContext);
        }

        return this.getRuleContext(i, IdentifierContext);
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.LPAREN, 0)!;
    }
    public columnTypeExpr(): ColumnTypeExprContext[];
    public columnTypeExpr(i: number): ColumnTypeExprContext | null;
    public columnTypeExpr(i?: number): ColumnTypeExprContext[] | ColumnTypeExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ColumnTypeExprContext);
        }

        return this.getRuleContext(i, ColumnTypeExprContext);
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.RPAREN, 0)!;
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
        if (i === undefined) {
            return this.getTokens(ClickHouseParser.COMMA);
        } else {
            return this.getToken(ClickHouseParser.COMMA, i);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitColumnTypeExprNested) {
            return visitor.visitColumnTypeExprNested(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ColumnTypeExprParamContext extends ColumnTypeExprContext {
    public constructor(ctx: ColumnTypeExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.LPAREN, 0)!;
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.RPAREN, 0)!;
    }
    public columnExprList(): ColumnExprListContext | null {
        return this.getRuleContext(0, ColumnExprListContext);
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitColumnTypeExprParam) {
            return visitor.visitColumnTypeExprParam(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ColumnTypeExprSimpleContext extends ColumnTypeExprContext {
    public constructor(ctx: ColumnTypeExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitColumnTypeExprSimple) {
            return visitor.visitColumnTypeExprSimple(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ColumnTypeExprComplexContext extends ColumnTypeExprContext {
    public constructor(ctx: ColumnTypeExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.LPAREN, 0)!;
    }
    public columnTypeExpr(): ColumnTypeExprContext[];
    public columnTypeExpr(i: number): ColumnTypeExprContext | null;
    public columnTypeExpr(i?: number): ColumnTypeExprContext[] | ColumnTypeExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ColumnTypeExprContext);
        }

        return this.getRuleContext(i, ColumnTypeExprContext);
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.RPAREN, 0)!;
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
        if (i === undefined) {
            return this.getTokens(ClickHouseParser.COMMA);
        } else {
            return this.getToken(ClickHouseParser.COMMA, i);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitColumnTypeExprComplex) {
            return visitor.visitColumnTypeExprComplex(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ColumnTypeExprEnumContext extends ColumnTypeExprContext {
    public constructor(ctx: ColumnTypeExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.LPAREN, 0)!;
    }
    public enumValue(): EnumValueContext[];
    public enumValue(i: number): EnumValueContext | null;
    public enumValue(i?: number): EnumValueContext[] | EnumValueContext | null {
        if (i === undefined) {
            return this.getRuleContexts(EnumValueContext);
        }

        return this.getRuleContext(i, EnumValueContext);
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.RPAREN, 0)!;
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
        if (i === undefined) {
            return this.getTokens(ClickHouseParser.COMMA);
        } else {
            return this.getToken(ClickHouseParser.COMMA, i);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitColumnTypeExprEnum) {
            return visitor.visitColumnTypeExprEnum(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class ColumnExprListContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public columnsExpr(): ColumnsExprContext[];
    public columnsExpr(i: number): ColumnsExprContext | null;
    public columnsExpr(i?: number): ColumnsExprContext[] | ColumnsExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ColumnsExprContext);
        }

        return this.getRuleContext(i, ColumnsExprContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
        if (i === undefined) {
            return this.getTokens(ClickHouseParser.COMMA);
        } else {
            return this.getToken(ClickHouseParser.COMMA, i);
        }
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_columnExprList;
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitColumnExprList) {
            return visitor.visitColumnExprList(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class ColumnsExprContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_columnsExpr;
    }
    public override copyFrom(ctx: ColumnsExprContext): void {
        super.copyFrom(ctx);
    }
}
export class ColumnsExprColumnContext extends ColumnsExprContext {
    public constructor(ctx: ColumnsExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public columnExpr(): ColumnExprContext {
        return this.getRuleContext(0, ColumnExprContext)!;
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitColumnsExprColumn) {
            return visitor.visitColumnsExprColumn(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ColumnsExprAsteriskContext extends ColumnsExprContext {
    public constructor(ctx: ColumnsExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public ASTERISK(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.ASTERISK, 0)!;
    }
    public tableIdentifier(): TableIdentifierContext | null {
        return this.getRuleContext(0, TableIdentifierContext);
    }
    public DOT(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.DOT, 0);
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitColumnsExprAsterisk) {
            return visitor.visitColumnsExprAsterisk(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ColumnsExprSubqueryContext extends ColumnsExprContext {
    public constructor(ctx: ColumnsExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.LPAREN, 0)!;
    }
    public selectUnionStmt(): SelectUnionStmtContext {
        return this.getRuleContext(0, SelectUnionStmtContext)!;
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.RPAREN, 0)!;
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitColumnsExprSubquery) {
            return visitor.visitColumnsExprSubquery(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class ColumnExprContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_columnExpr;
    }
    public override copyFrom(ctx: ColumnExprContext): void {
        super.copyFrom(ctx);
    }
}
export class ColumnExprTernaryOpContext extends ColumnExprContext {
    public constructor(ctx: ColumnExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public columnExpr(): ColumnExprContext[];
    public columnExpr(i: number): ColumnExprContext | null;
    public columnExpr(i?: number): ColumnExprContext[] | ColumnExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ColumnExprContext);
        }

        return this.getRuleContext(i, ColumnExprContext);
    }
    public QUERY(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.QUERY, 0)!;
    }
    public COLON(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.COLON, 0)!;
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitColumnExprTernaryOp) {
            return visitor.visitColumnExprTernaryOp(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ColumnExprAliasContext extends ColumnExprContext {
    public constructor(ctx: ColumnExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public columnExpr(): ColumnExprContext {
        return this.getRuleContext(0, ColumnExprContext)!;
    }
    public alias(): AliasContext | null {
        return this.getRuleContext(0, AliasContext);
    }
    public AS(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.AS, 0);
    }
    public identifier(): IdentifierContext | null {
        return this.getRuleContext(0, IdentifierContext);
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitColumnExprAlias) {
            return visitor.visitColumnExprAlias(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ColumnExprExtractContext extends ColumnExprContext {
    public constructor(ctx: ColumnExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public EXTRACT(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.EXTRACT, 0)!;
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.LPAREN, 0)!;
    }
    public interval(): IntervalContext {
        return this.getRuleContext(0, IntervalContext)!;
    }
    public FROM(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.FROM, 0)!;
    }
    public columnExpr(): ColumnExprContext {
        return this.getRuleContext(0, ColumnExprContext)!;
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.RPAREN, 0)!;
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitColumnExprExtract) {
            return visitor.visitColumnExprExtract(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ColumnExprNegateContext extends ColumnExprContext {
    public constructor(ctx: ColumnExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public DASH(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.DASH, 0)!;
    }
    public columnExpr(): ColumnExprContext {
        return this.getRuleContext(0, ColumnExprContext)!;
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitColumnExprNegate) {
            return visitor.visitColumnExprNegate(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ColumnExprSubqueryContext extends ColumnExprContext {
    public constructor(ctx: ColumnExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.LPAREN, 0)!;
    }
    public selectUnionStmt(): SelectUnionStmtContext {
        return this.getRuleContext(0, SelectUnionStmtContext)!;
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.RPAREN, 0)!;
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitColumnExprSubquery) {
            return visitor.visitColumnExprSubquery(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ColumnExprLiteralContext extends ColumnExprContext {
    public constructor(ctx: ColumnExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public literal(): LiteralContext {
        return this.getRuleContext(0, LiteralContext)!;
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitColumnExprLiteral) {
            return visitor.visitColumnExprLiteral(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ColumnExprArrayContext extends ColumnExprContext {
    public constructor(ctx: ColumnExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public LBRACKET(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.LBRACKET, 0)!;
    }
    public RBRACKET(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.RBRACKET, 0)!;
    }
    public columnExprList(): ColumnExprListContext | null {
        return this.getRuleContext(0, ColumnExprListContext);
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitColumnExprArray) {
            return visitor.visitColumnExprArray(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ColumnExprSubstringContext extends ColumnExprContext {
    public constructor(ctx: ColumnExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public SUBSTRING(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.SUBSTRING, 0)!;
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.LPAREN, 0)!;
    }
    public columnExpr(): ColumnExprContext[];
    public columnExpr(i: number): ColumnExprContext | null;
    public columnExpr(i?: number): ColumnExprContext[] | ColumnExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ColumnExprContext);
        }

        return this.getRuleContext(i, ColumnExprContext);
    }
    public FROM(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.FROM, 0)!;
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.RPAREN, 0)!;
    }
    public FOR(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.FOR, 0);
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitColumnExprSubstring) {
            return visitor.visitColumnExprSubstring(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ColumnExprCastContext extends ColumnExprContext {
    public constructor(ctx: ColumnExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public CAST(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.CAST, 0)!;
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.LPAREN, 0)!;
    }
    public columnExpr(): ColumnExprContext {
        return this.getRuleContext(0, ColumnExprContext)!;
    }
    public AS(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.AS, 0)!;
    }
    public columnTypeExpr(): ColumnTypeExprContext {
        return this.getRuleContext(0, ColumnTypeExprContext)!;
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.RPAREN, 0)!;
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitColumnExprCast) {
            return visitor.visitColumnExprCast(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ColumnExprOrContext extends ColumnExprContext {
    public constructor(ctx: ColumnExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public columnExpr(): ColumnExprContext[];
    public columnExpr(i: number): ColumnExprContext | null;
    public columnExpr(i?: number): ColumnExprContext[] | ColumnExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ColumnExprContext);
        }

        return this.getRuleContext(i, ColumnExprContext);
    }
    public OR(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.OR, 0)!;
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitColumnExprOr) {
            return visitor.visitColumnExprOr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ColumnExprPrecedence1Context extends ColumnExprContext {
    public constructor(ctx: ColumnExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public columnExpr(): ColumnExprContext[];
    public columnExpr(i: number): ColumnExprContext | null;
    public columnExpr(i?: number): ColumnExprContext[] | ColumnExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ColumnExprContext);
        }

        return this.getRuleContext(i, ColumnExprContext);
    }
    public ASTERISK(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.ASTERISK, 0);
    }
    public SLASH(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.SLASH, 0);
    }
    public PERCENT(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.PERCENT, 0);
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitColumnExprPrecedence1) {
            return visitor.visitColumnExprPrecedence1(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ColumnExprPrecedence2Context extends ColumnExprContext {
    public constructor(ctx: ColumnExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public columnExpr(): ColumnExprContext[];
    public columnExpr(i: number): ColumnExprContext | null;
    public columnExpr(i?: number): ColumnExprContext[] | ColumnExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ColumnExprContext);
        }

        return this.getRuleContext(i, ColumnExprContext);
    }
    public PLUS(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.PLUS, 0);
    }
    public DASH(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.DASH, 0);
    }
    public CONCAT(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.CONCAT, 0);
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitColumnExprPrecedence2) {
            return visitor.visitColumnExprPrecedence2(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ColumnExprPrecedence3Context extends ColumnExprContext {
    public constructor(ctx: ColumnExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public columnExpr(): ColumnExprContext[];
    public columnExpr(i: number): ColumnExprContext | null;
    public columnExpr(i?: number): ColumnExprContext[] | ColumnExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ColumnExprContext);
        }

        return this.getRuleContext(i, ColumnExprContext);
    }
    public EQ_DOUBLE(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.EQ_DOUBLE, 0);
    }
    public EQ_SINGLE(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.EQ_SINGLE, 0);
    }
    public NOT_EQ(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.NOT_EQ, 0);
    }
    public LE(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.LE, 0);
    }
    public GE(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.GE, 0);
    }
    public LT(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.LT, 0);
    }
    public GT(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.GT, 0);
    }
    public IN(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.IN, 0);
    }
    public LIKE(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.LIKE, 0);
    }
    public ILIKE(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.ILIKE, 0);
    }
    public GLOBAL(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.GLOBAL, 0);
    }
    public NOT(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.NOT, 0);
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitColumnExprPrecedence3) {
            return visitor.visitColumnExprPrecedence3(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ColumnExprIntervalContext extends ColumnExprContext {
    public constructor(ctx: ColumnExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public INTERVAL(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.INTERVAL, 0)!;
    }
    public columnExpr(): ColumnExprContext {
        return this.getRuleContext(0, ColumnExprContext)!;
    }
    public interval(): IntervalContext {
        return this.getRuleContext(0, IntervalContext)!;
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitColumnExprInterval) {
            return visitor.visitColumnExprInterval(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ColumnExprIsNullContext extends ColumnExprContext {
    public constructor(ctx: ColumnExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public columnExpr(): ColumnExprContext {
        return this.getRuleContext(0, ColumnExprContext)!;
    }
    public IS(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.IS, 0)!;
    }
    public NULL_SQL(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.NULL_SQL, 0)!;
    }
    public NOT(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.NOT, 0);
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitColumnExprIsNull) {
            return visitor.visitColumnExprIsNull(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ColumnExprWinFunctionTargetContext extends ColumnExprContext {
    public constructor(ctx: ColumnExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public identifier(): IdentifierContext[];
    public identifier(i: number): IdentifierContext | null;
    public identifier(i?: number): IdentifierContext[] | IdentifierContext | null {
        if (i === undefined) {
            return this.getRuleContexts(IdentifierContext);
        }

        return this.getRuleContext(i, IdentifierContext);
    }
    public OVER(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.OVER, 0)!;
    }
    public LPAREN(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.LPAREN, 0);
    }
    public RPAREN(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.RPAREN, 0);
    }
    public columnExprList(): ColumnExprListContext | null {
        return this.getRuleContext(0, ColumnExprListContext);
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitColumnExprWinFunctionTarget) {
            return visitor.visitColumnExprWinFunctionTarget(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ColumnExprTrimContext extends ColumnExprContext {
    public constructor(ctx: ColumnExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public TRIM(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.TRIM, 0)!;
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.LPAREN, 0)!;
    }
    public STRING_LITERAL(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.STRING_LITERAL, 0)!;
    }
    public FROM(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.FROM, 0)!;
    }
    public columnExpr(): ColumnExprContext {
        return this.getRuleContext(0, ColumnExprContext)!;
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.RPAREN, 0)!;
    }
    public BOTH(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.BOTH, 0);
    }
    public LEADING(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.LEADING, 0);
    }
    public TRAILING(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.TRAILING, 0);
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitColumnExprTrim) {
            return visitor.visitColumnExprTrim(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ColumnExprTupleContext extends ColumnExprContext {
    public constructor(ctx: ColumnExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.LPAREN, 0)!;
    }
    public columnExprList(): ColumnExprListContext {
        return this.getRuleContext(0, ColumnExprListContext)!;
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.RPAREN, 0)!;
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitColumnExprTuple) {
            return visitor.visitColumnExprTuple(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ColumnExprArrayAccessContext extends ColumnExprContext {
    public constructor(ctx: ColumnExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public columnExpr(): ColumnExprContext[];
    public columnExpr(i: number): ColumnExprContext | null;
    public columnExpr(i?: number): ColumnExprContext[] | ColumnExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ColumnExprContext);
        }

        return this.getRuleContext(i, ColumnExprContext);
    }
    public LBRACKET(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.LBRACKET, 0)!;
    }
    public RBRACKET(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.RBRACKET, 0)!;
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitColumnExprArrayAccess) {
            return visitor.visitColumnExprArrayAccess(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ColumnExprBetweenContext extends ColumnExprContext {
    public constructor(ctx: ColumnExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public columnExpr(): ColumnExprContext[];
    public columnExpr(i: number): ColumnExprContext | null;
    public columnExpr(i?: number): ColumnExprContext[] | ColumnExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ColumnExprContext);
        }

        return this.getRuleContext(i, ColumnExprContext);
    }
    public BETWEEN(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.BETWEEN, 0)!;
    }
    public AND(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.AND, 0)!;
    }
    public NOT(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.NOT, 0);
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitColumnExprBetween) {
            return visitor.visitColumnExprBetween(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ColumnExprParensContext extends ColumnExprContext {
    public constructor(ctx: ColumnExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.LPAREN, 0)!;
    }
    public columnExpr(): ColumnExprContext {
        return this.getRuleContext(0, ColumnExprContext)!;
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.RPAREN, 0)!;
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitColumnExprParens) {
            return visitor.visitColumnExprParens(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ColumnExprTimestampContext extends ColumnExprContext {
    public constructor(ctx: ColumnExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public TIMESTAMP(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.TIMESTAMP, 0)!;
    }
    public STRING_LITERAL(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.STRING_LITERAL, 0)!;
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitColumnExprTimestamp) {
            return visitor.visitColumnExprTimestamp(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ColumnExprAndContext extends ColumnExprContext {
    public constructor(ctx: ColumnExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public columnExpr(): ColumnExprContext[];
    public columnExpr(i: number): ColumnExprContext | null;
    public columnExpr(i?: number): ColumnExprContext[] | ColumnExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ColumnExprContext);
        }

        return this.getRuleContext(i, ColumnExprContext);
    }
    public AND(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.AND, 0)!;
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitColumnExprAnd) {
            return visitor.visitColumnExprAnd(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ColumnExprTupleAccessContext extends ColumnExprContext {
    public constructor(ctx: ColumnExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public columnExpr(): ColumnExprContext {
        return this.getRuleContext(0, ColumnExprContext)!;
    }
    public DOT(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.DOT, 0)!;
    }
    public DECIMAL_LITERAL(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.DECIMAL_LITERAL, 0)!;
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitColumnExprTupleAccess) {
            return visitor.visitColumnExprTupleAccess(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ColumnExprCaseContext extends ColumnExprContext {
    public constructor(ctx: ColumnExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public CASE(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.CASE, 0)!;
    }
    public END(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.END, 0)!;
    }
    public columnExpr(): ColumnExprContext[];
    public columnExpr(i: number): ColumnExprContext | null;
    public columnExpr(i?: number): ColumnExprContext[] | ColumnExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ColumnExprContext);
        }

        return this.getRuleContext(i, ColumnExprContext);
    }
    public WHEN(): antlr.TerminalNode[];
    public WHEN(i: number): antlr.TerminalNode | null;
    public WHEN(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
        if (i === undefined) {
            return this.getTokens(ClickHouseParser.WHEN);
        } else {
            return this.getToken(ClickHouseParser.WHEN, i);
        }
    }
    public THEN(): antlr.TerminalNode[];
    public THEN(i: number): antlr.TerminalNode | null;
    public THEN(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
        if (i === undefined) {
            return this.getTokens(ClickHouseParser.THEN);
        } else {
            return this.getToken(ClickHouseParser.THEN, i);
        }
    }
    public ELSE(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.ELSE, 0);
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitColumnExprCase) {
            return visitor.visitColumnExprCase(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ColumnExprDateContext extends ColumnExprContext {
    public constructor(ctx: ColumnExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public DATE(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.DATE, 0)!;
    }
    public STRING_LITERAL(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.STRING_LITERAL, 0)!;
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitColumnExprDate) {
            return visitor.visitColumnExprDate(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ColumnExprNotContext extends ColumnExprContext {
    public constructor(ctx: ColumnExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public NOT(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.NOT, 0)!;
    }
    public columnExpr(): ColumnExprContext {
        return this.getRuleContext(0, ColumnExprContext)!;
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitColumnExprNot) {
            return visitor.visitColumnExprNot(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ColumnExprWinFunctionContext extends ColumnExprContext {
    public constructor(ctx: ColumnExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public OVER(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.OVER, 0)!;
    }
    public LPAREN(): antlr.TerminalNode[];
    public LPAREN(i: number): antlr.TerminalNode | null;
    public LPAREN(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
        if (i === undefined) {
            return this.getTokens(ClickHouseParser.LPAREN);
        } else {
            return this.getToken(ClickHouseParser.LPAREN, i);
        }
    }
    public windowExpr(): WindowExprContext {
        return this.getRuleContext(0, WindowExprContext)!;
    }
    public RPAREN(): antlr.TerminalNode[];
    public RPAREN(i: number): antlr.TerminalNode | null;
    public RPAREN(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
        if (i === undefined) {
            return this.getTokens(ClickHouseParser.RPAREN);
        } else {
            return this.getToken(ClickHouseParser.RPAREN, i);
        }
    }
    public columnExprList(): ColumnExprListContext | null {
        return this.getRuleContext(0, ColumnExprListContext);
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitColumnExprWinFunction) {
            return visitor.visitColumnExprWinFunction(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ColumnExprIdentifierContext extends ColumnExprContext {
    public constructor(ctx: ColumnExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public columnIdentifier(): ColumnIdentifierContext {
        return this.getRuleContext(0, ColumnIdentifierContext)!;
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitColumnExprIdentifier) {
            return visitor.visitColumnExprIdentifier(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ColumnExprFunctionContext extends ColumnExprContext {
    public constructor(ctx: ColumnExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public LPAREN(): antlr.TerminalNode[];
    public LPAREN(i: number): antlr.TerminalNode | null;
    public LPAREN(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
        if (i === undefined) {
            return this.getTokens(ClickHouseParser.LPAREN);
        } else {
            return this.getToken(ClickHouseParser.LPAREN, i);
        }
    }
    public RPAREN(): antlr.TerminalNode[];
    public RPAREN(i: number): antlr.TerminalNode | null;
    public RPAREN(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
        if (i === undefined) {
            return this.getTokens(ClickHouseParser.RPAREN);
        } else {
            return this.getToken(ClickHouseParser.RPAREN, i);
        }
    }
    public DISTINCT(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.DISTINCT, 0);
    }
    public columnArgList(): ColumnArgListContext | null {
        return this.getRuleContext(0, ColumnArgListContext);
    }
    public columnExprList(): ColumnExprListContext | null {
        return this.getRuleContext(0, ColumnExprListContext);
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitColumnExprFunction) {
            return visitor.visitColumnExprFunction(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ColumnExprAsteriskContext extends ColumnExprContext {
    public constructor(ctx: ColumnExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public ASTERISK(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.ASTERISK, 0)!;
    }
    public tableIdentifier(): TableIdentifierContext | null {
        return this.getRuleContext(0, TableIdentifierContext);
    }
    public DOT(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.DOT, 0);
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitColumnExprAsterisk) {
            return visitor.visitColumnExprAsterisk(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class ColumnArgListContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public columnArgExpr(): ColumnArgExprContext[];
    public columnArgExpr(i: number): ColumnArgExprContext | null;
    public columnArgExpr(i?: number): ColumnArgExprContext[] | ColumnArgExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ColumnArgExprContext);
        }

        return this.getRuleContext(i, ColumnArgExprContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
        if (i === undefined) {
            return this.getTokens(ClickHouseParser.COMMA);
        } else {
            return this.getToken(ClickHouseParser.COMMA, i);
        }
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_columnArgList;
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitColumnArgList) {
            return visitor.visitColumnArgList(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class ColumnArgExprContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public columnLambdaExpr(): ColumnLambdaExprContext | null {
        return this.getRuleContext(0, ColumnLambdaExprContext);
    }
    public columnExpr(): ColumnExprContext | null {
        return this.getRuleContext(0, ColumnExprContext);
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_columnArgExpr;
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitColumnArgExpr) {
            return visitor.visitColumnArgExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class ColumnLambdaExprContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ARROW(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.ARROW, 0)!;
    }
    public columnExpr(): ColumnExprContext {
        return this.getRuleContext(0, ColumnExprContext)!;
    }
    public LPAREN(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.LPAREN, 0);
    }
    public identifier(): IdentifierContext[];
    public identifier(i: number): IdentifierContext | null;
    public identifier(i?: number): IdentifierContext[] | IdentifierContext | null {
        if (i === undefined) {
            return this.getRuleContexts(IdentifierContext);
        }

        return this.getRuleContext(i, IdentifierContext);
    }
    public RPAREN(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.RPAREN, 0);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
        if (i === undefined) {
            return this.getTokens(ClickHouseParser.COMMA);
        } else {
            return this.getToken(ClickHouseParser.COMMA, i);
        }
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_columnLambdaExpr;
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitColumnLambdaExpr) {
            return visitor.visitColumnLambdaExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class ColumnIdentifierContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public nestedIdentifier(): NestedIdentifierContext {
        return this.getRuleContext(0, NestedIdentifierContext)!;
    }
    public tableIdentifier(): TableIdentifierContext | null {
        return this.getRuleContext(0, TableIdentifierContext);
    }
    public DOT(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.DOT, 0);
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_columnIdentifier;
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitColumnIdentifier) {
            return visitor.visitColumnIdentifier(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class NestedIdentifierContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public identifier(): IdentifierContext[];
    public identifier(i: number): IdentifierContext | null;
    public identifier(i?: number): IdentifierContext[] | IdentifierContext | null {
        if (i === undefined) {
            return this.getRuleContexts(IdentifierContext);
        }

        return this.getRuleContext(i, IdentifierContext);
    }
    public DOT(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.DOT, 0);
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_nestedIdentifier;
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitNestedIdentifier) {
            return visitor.visitNestedIdentifier(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class TableExprContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_tableExpr;
    }
    public override copyFrom(ctx: TableExprContext): void {
        super.copyFrom(ctx);
    }
}
export class TableExprIdentifierContext extends TableExprContext {
    public constructor(ctx: TableExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public tableIdentifier(): TableIdentifierContext {
        return this.getRuleContext(0, TableIdentifierContext)!;
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitTableExprIdentifier) {
            return visitor.visitTableExprIdentifier(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class TableExprSubqueryContext extends TableExprContext {
    public constructor(ctx: TableExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.LPAREN, 0)!;
    }
    public selectUnionStmt(): SelectUnionStmtContext {
        return this.getRuleContext(0, SelectUnionStmtContext)!;
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.RPAREN, 0)!;
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitTableExprSubquery) {
            return visitor.visitTableExprSubquery(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class TableExprAliasContext extends TableExprContext {
    public constructor(ctx: TableExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public tableExpr(): TableExprContext {
        return this.getRuleContext(0, TableExprContext)!;
    }
    public alias(): AliasContext | null {
        return this.getRuleContext(0, AliasContext);
    }
    public AS(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.AS, 0);
    }
    public identifier(): IdentifierContext | null {
        return this.getRuleContext(0, IdentifierContext);
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitTableExprAlias) {
            return visitor.visitTableExprAlias(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class TableExprFunctionContext extends TableExprContext {
    public constructor(ctx: TableExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public tableFunctionExpr(): TableFunctionExprContext {
        return this.getRuleContext(0, TableFunctionExprContext)!;
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitTableExprFunction) {
            return visitor.visitTableExprFunction(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class TableFunctionExprContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.LPAREN, 0)!;
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.RPAREN, 0)!;
    }
    public tableArgList(): TableArgListContext | null {
        return this.getRuleContext(0, TableArgListContext);
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_tableFunctionExpr;
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitTableFunctionExpr) {
            return visitor.visitTableFunctionExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class TableIdentifierContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public databaseIdentifier(): DatabaseIdentifierContext | null {
        return this.getRuleContext(0, DatabaseIdentifierContext);
    }
    public DOT(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.DOT, 0);
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_tableIdentifier;
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitTableIdentifier) {
            return visitor.visitTableIdentifier(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class TableArgListContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public tableArgExpr(): TableArgExprContext[];
    public tableArgExpr(i: number): TableArgExprContext | null;
    public tableArgExpr(i?: number): TableArgExprContext[] | TableArgExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(TableArgExprContext);
        }

        return this.getRuleContext(i, TableArgExprContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
        if (i === undefined) {
            return this.getTokens(ClickHouseParser.COMMA);
        } else {
            return this.getToken(ClickHouseParser.COMMA, i);
        }
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_tableArgList;
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitTableArgList) {
            return visitor.visitTableArgList(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class TableArgExprContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public nestedIdentifier(): NestedIdentifierContext | null {
        return this.getRuleContext(0, NestedIdentifierContext);
    }
    public tableFunctionExpr(): TableFunctionExprContext | null {
        return this.getRuleContext(0, TableFunctionExprContext);
    }
    public literal(): LiteralContext | null {
        return this.getRuleContext(0, LiteralContext);
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_tableArgExpr;
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitTableArgExpr) {
            return visitor.visitTableArgExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class DatabaseIdentifierContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_databaseIdentifier;
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitDatabaseIdentifier) {
            return visitor.visitDatabaseIdentifier(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class FloatingLiteralContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public FLOATING_LITERAL(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.FLOATING_LITERAL, 0);
    }
    public DOT(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.DOT, 0);
    }
    public DECIMAL_LITERAL(): antlr.TerminalNode[];
    public DECIMAL_LITERAL(i: number): antlr.TerminalNode | null;
    public DECIMAL_LITERAL(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
        if (i === undefined) {
            return this.getTokens(ClickHouseParser.DECIMAL_LITERAL);
        } else {
            return this.getToken(ClickHouseParser.DECIMAL_LITERAL, i);
        }
    }
    public OCTAL_LITERAL(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.OCTAL_LITERAL, 0);
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_floatingLiteral;
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitFloatingLiteral) {
            return visitor.visitFloatingLiteral(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class NumberLiteralContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public floatingLiteral(): FloatingLiteralContext | null {
        return this.getRuleContext(0, FloatingLiteralContext);
    }
    public OCTAL_LITERAL(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.OCTAL_LITERAL, 0);
    }
    public DECIMAL_LITERAL(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.DECIMAL_LITERAL, 0);
    }
    public HEXADECIMAL_LITERAL(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.HEXADECIMAL_LITERAL, 0);
    }
    public INF(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.INF, 0);
    }
    public NAN_SQL(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.NAN_SQL, 0);
    }
    public PLUS(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.PLUS, 0);
    }
    public DASH(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.DASH, 0);
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_numberLiteral;
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitNumberLiteral) {
            return visitor.visitNumberLiteral(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class LiteralContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public numberLiteral(): NumberLiteralContext | null {
        return this.getRuleContext(0, NumberLiteralContext);
    }
    public STRING_LITERAL(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.STRING_LITERAL, 0);
    }
    public NULL_SQL(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.NULL_SQL, 0);
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_literal;
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitLiteral) {
            return visitor.visitLiteral(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class IntervalContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public SECOND(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.SECOND, 0);
    }
    public MINUTE(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.MINUTE, 0);
    }
    public HOUR(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.HOUR, 0);
    }
    public DAY(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.DAY, 0);
    }
    public WEEK(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.WEEK, 0);
    }
    public MONTH(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.MONTH, 0);
    }
    public QUARTER(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.QUARTER, 0);
    }
    public YEAR(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.YEAR, 0);
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_interval;
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitInterval) {
            return visitor.visitInterval(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class KeywordContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public AFTER(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.AFTER, 0);
    }
    public ALIAS(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.ALIAS, 0);
    }
    public ALL(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.ALL, 0);
    }
    public ALTER(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.ALTER, 0);
    }
    public AND(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.AND, 0);
    }
    public ANTI(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.ANTI, 0);
    }
    public ANY(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.ANY, 0);
    }
    public ARRAY(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.ARRAY, 0);
    }
    public AS(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.AS, 0);
    }
    public ASCENDING(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.ASCENDING, 0);
    }
    public ASOF(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.ASOF, 0);
    }
    public AST(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.AST, 0);
    }
    public ASYNC(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.ASYNC, 0);
    }
    public ATTACH(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.ATTACH, 0);
    }
    public BETWEEN(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.BETWEEN, 0);
    }
    public BOTH(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.BOTH, 0);
    }
    public BY(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.BY, 0);
    }
    public CASE(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.CASE, 0);
    }
    public CAST(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.CAST, 0);
    }
    public CHECK(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.CHECK, 0);
    }
    public CLEAR(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.CLEAR, 0);
    }
    public CLUSTER(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.CLUSTER, 0);
    }
    public CODEC(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.CODEC, 0);
    }
    public COLLATE(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.COLLATE, 0);
    }
    public COLUMN(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.COLUMN, 0);
    }
    public COMMENT(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.COMMENT, 0);
    }
    public CONSTRAINT(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.CONSTRAINT, 0);
    }
    public CREATE(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.CREATE, 0);
    }
    public CROSS(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.CROSS, 0);
    }
    public CUBE(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.CUBE, 0);
    }
    public CURRENT(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.CURRENT, 0);
    }
    public DATABASE(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.DATABASE, 0);
    }
    public DATABASES(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.DATABASES, 0);
    }
    public DATE(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.DATE, 0);
    }
    public DEDUPLICATE(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.DEDUPLICATE, 0);
    }
    public DEFAULT(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.DEFAULT, 0);
    }
    public DELAY(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.DELAY, 0);
    }
    public DELETE(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.DELETE, 0);
    }
    public DESCRIBE(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.DESCRIBE, 0);
    }
    public DESC(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.DESC, 0);
    }
    public DESCENDING(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.DESCENDING, 0);
    }
    public DETACH(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.DETACH, 0);
    }
    public DICTIONARIES(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.DICTIONARIES, 0);
    }
    public DICTIONARY(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.DICTIONARY, 0);
    }
    public DISK(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.DISK, 0);
    }
    public DISTINCT(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.DISTINCT, 0);
    }
    public DISTRIBUTED(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.DISTRIBUTED, 0);
    }
    public DROP(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.DROP, 0);
    }
    public ELSE(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.ELSE, 0);
    }
    public END(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.END, 0);
    }
    public ENGINE(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.ENGINE, 0);
    }
    public EVENTS(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.EVENTS, 0);
    }
    public EXISTS(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.EXISTS, 0);
    }
    public EXPLAIN(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.EXPLAIN, 0);
    }
    public EXPRESSION(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.EXPRESSION, 0);
    }
    public EXTRACT(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.EXTRACT, 0);
    }
    public FETCHES(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.FETCHES, 0);
    }
    public FINAL(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.FINAL, 0);
    }
    public FIRST(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.FIRST, 0);
    }
    public FLUSH(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.FLUSH, 0);
    }
    public FOR(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.FOR, 0);
    }
    public FOLLOWING(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.FOLLOWING, 0);
    }
    public FORMAT(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.FORMAT, 0);
    }
    public FREEZE(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.FREEZE, 0);
    }
    public FROM(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.FROM, 0);
    }
    public FULL(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.FULL, 0);
    }
    public FUNCTION(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.FUNCTION, 0);
    }
    public GLOBAL(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.GLOBAL, 0);
    }
    public GRANULARITY(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.GRANULARITY, 0);
    }
    public GROUP(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.GROUP, 0);
    }
    public HAVING(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.HAVING, 0);
    }
    public HIERARCHICAL(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.HIERARCHICAL, 0);
    }
    public ID(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.ID, 0);
    }
    public IF(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.IF, 0);
    }
    public ILIKE(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.ILIKE, 0);
    }
    public IN(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.IN, 0);
    }
    public INDEX(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.INDEX, 0);
    }
    public INJECTIVE(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.INJECTIVE, 0);
    }
    public INNER(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.INNER, 0);
    }
    public INSERT(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.INSERT, 0);
    }
    public INTERVAL(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.INTERVAL, 0);
    }
    public INTO(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.INTO, 0);
    }
    public IS(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.IS, 0);
    }
    public IS_OBJECT_ID(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.IS_OBJECT_ID, 0);
    }
    public JOIN(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.JOIN, 0);
    }
    public JSON_FALSE(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.JSON_FALSE, 0);
    }
    public JSON_TRUE(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.JSON_TRUE, 0);
    }
    public KEY(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.KEY, 0);
    }
    public KILL(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.KILL, 0);
    }
    public LAST(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.LAST, 0);
    }
    public LAYOUT(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.LAYOUT, 0);
    }
    public LEADING(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.LEADING, 0);
    }
    public LEFT(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.LEFT, 0);
    }
    public LIFETIME(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.LIFETIME, 0);
    }
    public LIKE(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.LIKE, 0);
    }
    public LIMIT(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.LIMIT, 0);
    }
    public LIVE(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.LIVE, 0);
    }
    public LOCAL(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.LOCAL, 0);
    }
    public LOGS(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.LOGS, 0);
    }
    public MATERIALIZE(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.MATERIALIZE, 0);
    }
    public MATERIALIZED(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.MATERIALIZED, 0);
    }
    public MAX(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.MAX, 0);
    }
    public MERGES(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.MERGES, 0);
    }
    public MIN(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.MIN, 0);
    }
    public MODIFY(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.MODIFY, 0);
    }
    public MOVE(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.MOVE, 0);
    }
    public MUTATION(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.MUTATION, 0);
    }
    public NO(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.NO, 0);
    }
    public NOT(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.NOT, 0);
    }
    public NULLS(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.NULLS, 0);
    }
    public OFFSET(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.OFFSET, 0);
    }
    public ON(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.ON, 0);
    }
    public OPTIMIZE(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.OPTIMIZE, 0);
    }
    public OR(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.OR, 0);
    }
    public ORDER(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.ORDER, 0);
    }
    public OUTER(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.OUTER, 0);
    }
    public OUTFILE(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.OUTFILE, 0);
    }
    public OVER(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.OVER, 0);
    }
    public PARTITION(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.PARTITION, 0);
    }
    public POPULATE(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.POPULATE, 0);
    }
    public PRECEDING(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.PRECEDING, 0);
    }
    public PREWHERE(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.PREWHERE, 0);
    }
    public PRIMARY(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.PRIMARY, 0);
    }
    public RANGE(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.RANGE, 0);
    }
    public RELOAD(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.RELOAD, 0);
    }
    public REMOVE(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.REMOVE, 0);
    }
    public RENAME(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.RENAME, 0);
    }
    public REPLACE(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.REPLACE, 0);
    }
    public REPLICA(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.REPLICA, 0);
    }
    public REPLICATED(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.REPLICATED, 0);
    }
    public RIGHT(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.RIGHT, 0);
    }
    public ROLLUP(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.ROLLUP, 0);
    }
    public ROW(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.ROW, 0);
    }
    public ROWS(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.ROWS, 0);
    }
    public SAMPLE(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.SAMPLE, 0);
    }
    public SELECT(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.SELECT, 0);
    }
    public SEMI(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.SEMI, 0);
    }
    public SENDS(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.SENDS, 0);
    }
    public SET(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.SET, 0);
    }
    public SETTINGS(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.SETTINGS, 0);
    }
    public SHOW(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.SHOW, 0);
    }
    public SOURCE(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.SOURCE, 0);
    }
    public START(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.START, 0);
    }
    public STOP(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.STOP, 0);
    }
    public SUBSTRING(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.SUBSTRING, 0);
    }
    public SYNC(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.SYNC, 0);
    }
    public SYNTAX(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.SYNTAX, 0);
    }
    public SYSTEM(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.SYSTEM, 0);
    }
    public TABLE(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.TABLE, 0);
    }
    public TABLES(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.TABLES, 0);
    }
    public TEMPORARY(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.TEMPORARY, 0);
    }
    public TEST(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.TEST, 0);
    }
    public THEN(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.THEN, 0);
    }
    public TIES(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.TIES, 0);
    }
    public TIMEOUT(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.TIMEOUT, 0);
    }
    public TIMESTAMP(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.TIMESTAMP, 0);
    }
    public TOTALS(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.TOTALS, 0);
    }
    public TRAILING(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.TRAILING, 0);
    }
    public TRIM(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.TRIM, 0);
    }
    public TRUNCATE(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.TRUNCATE, 0);
    }
    public TO(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.TO, 0);
    }
    public TOP(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.TOP, 0);
    }
    public TTL(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.TTL, 0);
    }
    public TYPE(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.TYPE, 0);
    }
    public UNBOUNDED(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.UNBOUNDED, 0);
    }
    public UNION(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.UNION, 0);
    }
    public UPDATE(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.UPDATE, 0);
    }
    public USE(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.USE, 0);
    }
    public USING(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.USING, 0);
    }
    public UUID(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.UUID, 0);
    }
    public VALUES(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.VALUES, 0);
    }
    public VIEW(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.VIEW, 0);
    }
    public VOLUME(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.VOLUME, 0);
    }
    public WATCH(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.WATCH, 0);
    }
    public WHEN(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.WHEN, 0);
    }
    public WHERE(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.WHERE, 0);
    }
    public WINDOW(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.WINDOW, 0);
    }
    public WITH(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.WITH, 0);
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_keyword;
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitKeyword) {
            return visitor.visitKeyword(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class KeywordForAliasContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public DATE(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.DATE, 0);
    }
    public FIRST(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.FIRST, 0);
    }
    public ID(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.ID, 0);
    }
    public KEY(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.KEY, 0);
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_keywordForAlias;
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitKeywordForAlias) {
            return visitor.visitKeywordForAlias(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class AliasContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public IDENTIFIER(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.IDENTIFIER, 0);
    }
    public keywordForAlias(): KeywordForAliasContext | null {
        return this.getRuleContext(0, KeywordForAliasContext);
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_alias;
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitAlias) {
            return visitor.visitAlias(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class IdentifierContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public IDENTIFIER(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.IDENTIFIER, 0);
    }
    public interval(): IntervalContext | null {
        return this.getRuleContext(0, IntervalContext);
    }
    public keyword(): KeywordContext | null {
        return this.getRuleContext(0, KeywordContext);
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_identifier;
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitIdentifier) {
            return visitor.visitIdentifier(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class IdentifierOrNullContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public identifier(): IdentifierContext | null {
        return this.getRuleContext(0, IdentifierContext);
    }
    public NULL_SQL(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.NULL_SQL, 0);
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_identifierOrNull;
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitIdentifierOrNull) {
            return visitor.visitIdentifierOrNull(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class EnumValueContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public STRING_LITERAL(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.STRING_LITERAL, 0)!;
    }
    public EQ_SINGLE(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.EQ_SINGLE, 0)!;
    }
    public numberLiteral(): NumberLiteralContext {
        return this.getRuleContext(0, NumberLiteralContext)!;
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_enumValue;
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitEnumValue) {
            return visitor.visitEnumValue(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
