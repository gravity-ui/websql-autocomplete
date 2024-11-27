// $antlr-format alignTrailingComments true, columnLimit 150, minEmptyLines 1, maxEmptyLinesToKeep 1, reflowComments false, useTab false
// $antlr-format allowShortRulesOnASingleLine false, allowShortBlocksOnASingleLine true, alignSemicolons hanging, alignColons hanging

parser grammar MongoParser;

options {
    tokenVocab = MongoLexer;
}

root
    : statements EOF
    ;

statements
    : statement SEMICOLON?
    | statement SEMICOLON statements
    ;

statement
    : collectionOperation
    ;

collectionOperation
    : DB DOT collectionName DOT collectionMethod
    ;

collectionName
    : IDENTIFIER
    ;

collectionMethod
    : findMethod
    | insertOneMethod
    ;

insertOneMethod
    : INSERT_ONE LPAREN insertOneParam RPAREN
    ;

insertOneParam
    : json5
    ;

findMethod
    // TODO: MONGO SUPPORT MODIFICATION OPTIONS AFTER FIND PARAM
    : FIND LPAREN parameters RPAREN findMethodModifier* explainMethod?
    ;

explainMethod
    : DOT EXPLAIN LPAREN json5 RPAREN
    ;

findMethodModifier
    : DOT skipModifier
    | DOT limitModifier
    | DOT countModifier
    | DOT filterModifier
    | DOT minModifier
    | DOT maxModifier
    | DOT addQueryModifierModifier
    | DOT returnKeyModifier
    | DOT showRecordIdModifier
    | DOT sortModifier
    ;

skipModifier
    : SKIP_ LPAREN number RPAREN
    ;

limitModifier
    : LIMIT LPAREN number RPAREN
    ;

countModifier
    : COUNT LPAREN parameters RPAREN
    ;

filterModifier
    : FILTER LPAREN parameters RPAREN
    ;

minModifier
    : MIN LPAREN parameters RPAREN
    ;

maxModifier
    : MAX LPAREN parameters RPAREN
    ;

addQueryModifierModifier
    : ADD_QUERY_MODIFIER LPAREN STRING COMMA parameters RPAREN
    ;

returnKeyModifier
    : RETURN_KEY LPAREN boolean RPAREN
    ;

showRecordIdModifier
    : SHOW_RECORD_ID LPAREN boolean RPAREN
    ;

sortModifier
    : SORT LPAREN parameters (COMMA option)? RPAREN
    ;

parameters
    : json5
    ;

option
    : json5
    ;

json5
    : value?
    ;

obj
    : LBRACE pair (COMMA pair)* COMMA? RBRACE
    | LBRACE RBRACE
    ;

pair
    : key COLON value
    ;

boolean
    : TRUE
    | FALSE
    ;

key
    : STRING
    | identifier
    | NUMERIC_LITERAL
    | boolean
    | NULL
    ;

identifier
    : IDENTIFIER
    | reservedKeywords
    ;

value
    : STRING
    | number
    | obj
    | arr
    | boolean
    | NULL
    ;

arr
    : LBRACKET value (COMMA value)* COMMA? RBRACKET
    | LBRACKET RBRACKET
    ;

number
    : SYMBOL? (NUMERIC_LITERAL | NUMBER)
    ;

// TODO: MONGO implement reserved keywords
reservedKeywords
    : SKIP_
    | INSERT_ONE
    | SHOW_RECORD_ID
    | RETURN_KEY
    | FILTER
    | MIN
    | MAX
    | SORT
    | LIMIT
    | ADD_QUERY_MODIFIER
    | EXPLAIN
    | COUNT
    ;