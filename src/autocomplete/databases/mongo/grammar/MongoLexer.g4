// $antlr-format alignTrailingComments true, columnLimit 150, maxEmptyLinesToKeep 1, reflowComments false, useTab false
// $antlr-format allowShortRulesOnASingleLine true, allowShortBlocksOnASingleLine true, minEmptyLines 0, alignSemicolons ownLine
// $antlr-format alignColons trailing, singleLineOverrulesHangingColon true, alignLexerCommands true, alignLabels true, alignTrailers true

lexer grammar MongoLexer;

options {
    caseInsensitive = false;
}

DB                   : 'db';
FIND                 : 'find';
FIND_ONE             : 'findOne';
FIND_ONE_AND_DELETE  : 'findOneAndDelete';
FIND_ONE_AND_REPLACE : 'findOneAndReplace';
FIND_ONE_AND_UPDATE  : 'findOneAndUpdate';
SHOW_RECORD_ID       : 'showRecordId';
RETURN_KEY           : 'returnKey';
FILTER               : 'filter';
MIN                  : 'min';
MAX                  : 'max';
SORT                 : 'sort';
LIMIT                : 'limit';
EXPLAIN              : 'explain';
HINT                 : 'hint';
// skip is reserved keyword by antlr, that's why we need this postfix
SKIP_          : 'skip';
INSERT_ONE     : 'insertOne';
INSERT_MANY    : 'insertMany';
BULK_WRITE     : 'bulkWrite';
UPDATE_ONE     : 'updateOne';
UPDATE_MANY    : 'updateMany';
REPLACE_ONE    : 'replaceOne';
DELETE_ONE     : 'deleteOne';
DELETE_MANY    : 'deleteMany';
RENAME         : 'rename';
DROP           : 'drop';
IS_CAPPED      : 'isCapped';
CREATE_INDEX   : 'createIndex';
CREATE_INDEXES : 'createIndexes';
DROP_INDEX     : 'dropIndex';
DROP_INDEXES   : 'dropIndexes';
LIST_INDEXES   : 'listIndexes';

LBRACKET  : '[';
RBRACKET  : ']';
LPAREN    : '(';
RPAREN    : ')';
LBRACE    : '{';
RBRACE    : '}';
COLON     : ':';
COMMA     : ',';
SEMICOLON : ';';
DOT       : '.';

TRUE   : 'true';
FALSE  : 'false';
NULL   : 'null';
STRING : '"' DOUBLE_QUOTE_CHAR* '"' | '\'' SINGLE_QUOTE_CHAR* '\'';
NUMBER:
    INT ('.' [0-9]*)? EXP? // +1.e2, 1234, 1234.5
    | '.' [0-9]+ EXP?      // -.2e3
    | '0' [xX] HEX+        // 0x12345678
;
NUMERIC_LITERAL : 'Infinity' | 'NaN';
SYMBOL          : '+' | '-';

IDENTIFIER          : IDENTIFIER_START IDENTIFIER_PART*;
SINGLE_LINE_COMMENT : '//' .*? (NEWLINE | EOF)     -> skip;
MULTI_LINE_COMMENT  : '/*' .*? '*/'                -> skip;
WS                  : [ \t\n\r\u00A0\uFEFF\u2003]+ -> skip;

fragment IDENTIFIER_START  : [\p{L}] | '$' | '_' | '\\' UNICODE_SEQUENCE;
fragment IDENTIFIER_PART   : IDENTIFIER_START | [\p{M}] | [\p{N}] | [\p{Pc}] | '\u200C' | '\u200D';
fragment UNICODE_SEQUENCE  : 'u' HEX HEX HEX HEX;
fragment NEWLINE           : '\r\n' | [\r\n\u2028\u2029];
fragment HEX               : [0-9a-fA-F];
fragment INT               : '0' | [1-9] [0-9]*;
fragment EXP               : [Ee] SYMBOL? [0-9]*;
fragment DOUBLE_QUOTE_CHAR : ~["\\\r\n] | ESCAPE_SEQUENCE;
fragment SINGLE_QUOTE_CHAR : ~['\\\r\n] | ESCAPE_SEQUENCE;
fragment ESCAPE_SEQUENCE:
    '\\' (
        NEWLINE
        | UNICODE_SEQUENCE       // \u1234
        | ['"\\/bfnrtv]          // single escape char
        | ~['"\\bfnrtv0-9xu\r\n] // non escape char
        | '0'                    // \0
        | 'x' HEX HEX            // \x3a
    )
;