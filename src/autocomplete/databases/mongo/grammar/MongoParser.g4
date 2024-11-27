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
    : FIND LPAREN findParam RPAREN findModifier*
    ;

findModifier
    : DOT skip LPAREN number RPAREN
    | DOT offset LPAREN number RPAREN
    ;

skip
    : SKIP_
    ;

offset
    : OFFSET
    ;

findParam
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

key
    : STRING
    | IDENTIFIER
    | LITERAL
    | NUMERIC_LITERAL
    ;

value
    : STRING
    | number
    | obj
    | arr
    | LITERAL
    ;

arr
    : LBRACKET value (COMMA value)* COMMA? RBRACKET
    | LBRACKET RBRACKET
    ;

number
    : SYMBOL? (NUMERIC_LITERAL | NUMBER)
    ;