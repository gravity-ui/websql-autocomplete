// $antlr-format alignTrailingComments true, columnLimit 150, minEmptyLines 1, maxEmptyLinesToKeep 1, reflowComments false, useTab false
// $antlr-format allowShortRulesOnASingleLine false, allowShortBlocksOnASingleLine true, alignSemicolons hanging, alignColons hanging

parser grammar MongoParser;

options {
    tokenVocab = MongoLexer;
}

root
    : commands? EOF
    ;

commands
    : command SEMICOLON?
    | command SEMICOLON commands
    ;

command
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
    | findOneMethod
    | findOneAndDeleteMethod
    | findOneAndReplaceMethod
    | findOneAndUpdateMethod
    | insertOneMethod
    ;

findOneAndUpdateMethod
    : FIND_ONE_AND_UPDATE LPAREN findOneAndUpdateArgument1 COMMA findOneAndUpdateArgument2 (
        COMMA findOneAndUpdateArgument3
    )? RPAREN
    ;

findOneAndUpdateArgument1
    : object
    ;

findOneAndUpdateArgument2
    : object
    ;

findOneAndUpdateArgument3
    : object
    ;

findOneAndReplaceMethod
    : FIND_ONE_AND_REPLACE LPAREN findOneAndReplaceArgument1 COMMA findOneAndReplaceArgument2 (
        COMMA findOneAndReplaceArgument3
    )? RPAREN
    ;

findOneAndReplaceArgument1
    : object
    ;

findOneAndReplaceArgument2
    : object
    ;

findOneAndReplaceArgument3
    : object
    ;

findOneAndDeleteMethod
    : FIND_ONE_AND_DELETE LPAREN findOneAndDeleteArgument1 (COMMA findOneAndDeleteArgument2)? RPAREN
    ;

findOneAndDeleteArgument1
    : object
    ;

findOneAndDeleteArgument2
    : object
    ;

findOneMethod
    : FIND_ONE LPAREN (findOneArgument1 (COMMA findOneArgument2)?)? RPAREN
    ;

findOneArgument1
    : object
    ;

findOneArgument2
    : object
    ;

insertOneMethod
    : INSERT_ONE LPAREN insertOneArgument1 (COMMA insertOneArgument2)? RPAREN
    ;

insertOneArgument1
    : object
    | array
    ;

insertOneArgument2
    : object
    ;

findMethod
    : FIND LPAREN (findMethodArgument1 (COMMA findMethodArgument2)?)? RPAREN findMethodModifier* explainMethod?
    ;

findMethodArgument1
    : object
    ;

findMethodArgument2
    : object
    ;

explainMethod
    : DOT EXPLAIN LPAREN explainMethodArgument? RPAREN
    ;

explainMethodArgument
    : STRING
    | boolean
    | object
    ;

findMethodModifier
    : DOT skipModifier
    | DOT limitModifier
    | DOT filterModifier
    | DOT minModifier
    | DOT maxModifier
    | DOT hintModifier
    | DOT returnKeyModifier
    | DOT showRecordIdModifier
    | DOT sortModifier
    ;

skipModifier
    : SKIP_ LPAREN skipModifierArgument RPAREN
    ;

skipModifierArgument
    : number
    ;

limitModifier
    : LIMIT LPAREN limitModifierArgument RPAREN
    ;

limitModifierArgument
    : number
    ;

filterModifier
    : FILTER LPAREN filterModifierArgument RPAREN
    ;

filterModifierArgument
    : object
    ;

minModifier
    : MIN LPAREN minModifierArgument RPAREN
    ;

minModifierArgument
    : object
    ;

maxModifier
    : MAX LPAREN maxModifierArgument RPAREN
    ;

maxModifierArgument
    : object
    ;

hintModifier
    : HINT LPAREN hintModifierArgument RPAREN
    ;

hintModifierArgument
    : object
    | STRING
    ;

returnKeyModifier
    : RETURN_KEY LPAREN returnKeyModifierArgument RPAREN
    ;

returnKeyModifierArgument
    : boolean
    ;

showRecordIdModifier
    : SHOW_RECORD_ID LPAREN showRecordIdModifierArgument RPAREN
    ;

showRecordIdModifierArgument
    : boolean
    ;

sortModifier
    : SORT LPAREN sortModifierArgument1 (COMMA sortModifierArgument2)? RPAREN
    ;

sortModifierArgument1
    : json5
    ;

sortModifierArgument2
    : number
    | STRING
    | object
    ;

reservedKeyword
    : DB
    | SKIP_
    | INSERT_ONE
    | FIND
    | SHOW_RECORD_ID
    | RETURN_KEY
    | FILTER
    | MIN
    | MAX
    | SORT
    | LIMIT
    | EXPLAIN
    | HINT
    ;

// JSON5 rules
json5
    : value?
    ;

object
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
    | reservedKeyword
    ;

value
    : STRING
    | number
    | object
    | array
    | boolean
    | NULL
    ;

array
    : LBRACKET value (COMMA value)* COMMA? RBRACKET
    | LBRACKET RBRACKET
    ;

number
    : SYMBOL? (NUMERIC_LITERAL | NUMBER)
    ;