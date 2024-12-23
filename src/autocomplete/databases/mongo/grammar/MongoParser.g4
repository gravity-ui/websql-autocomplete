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
    | insertManyMethod
    | bulkWriteMethod
    | updateOneMethod
    | updateManyMethod
    | replaceOneMethod
    | deleteOneMethod
    | deleteManyMethod
    | renameMethod
    | dropMethod
    | isCappedMethod
    | createIndexMethod
    | createIndexesMethod
    | dropIndexMethod
    | dropIndexesMethod
    | listIndexesMethod
    | indexesMethod
    | indexExistsMethod
    | indexInformationMethod
    | estimatedDocumentCountMethod
    | countDocumentsMethod
    | distinctMethod
    | aggregateMethod
    ;

aggregateMethod
    : AGGREGATE LPAREN (aggregateArgument1 (COMMA aggregateArgument2)?)? RPAREN explainMethod?
    ;

aggregateArgument2
    : object
    ;

aggregateArgument1
    : array
    ;

distinctMethod
    : DISTINCT LPAREN distinctArgument1 (COMMA distinctArgument2 (COMMA distinctArgument3)?)? RPAREN
    ;

distinctArgument1
    : STRING
    ;

distinctArgument2
    : object
    ;

distinctArgument3
    : object
    ;

countDocumentsMethod
    : COUNT_DOCUMENTS LPAREN (countDocumentsArgument1 (COMMA countDocumentsArgument2)?)? RPAREN
    ;

countDocumentsArgument2
    : object
    ;

countDocumentsArgument1
    : object
    ;

estimatedDocumentCountMethod
    : ESTIMATED_DOCUMENT_COUNT LPAREN estimatedDocumentCountArgument? RPAREN
    ;

estimatedDocumentCountArgument
    : object
    ;

indexInformationMethod
    : INDEX_INFORMATION LPAREN indexInformationArgument? RPAREN
    ;

indexInformationArgument
    : object
    ;

indexExistsMethod
    : INDEX_EXISTS LPAREN indexExistsArgument1 (COMMA indexExistsArgument2)? RPAREN
    ;

indexExistsArgument2
    : object
    ;

indexExistsArgument1
    : STRING
    | LBRACKET STRING (COMMA STRING)* COMMA? RBRACKET
    ;

indexesMethod
    : INDEXES LPAREN indexesArgument? RPAREN
    ;

indexesArgument
    : object
    ;

listIndexesMethod
    : LIST_INDEXES LPAREN listIndexesArgument? RPAREN
    ;

listIndexesArgument
    : object
    ;

dropIndexesMethod
    : DROP_INDEXES LPAREN dropIndexesArgument? RPAREN
    ;

dropIndexesArgument
    : object
    ;

dropIndexMethod
    : DROP_INDEX LPAREN dropIndexArgument1 (COMMA dropIndexArgument2)? RPAREN
    ;

dropIndexArgument2
    : object
    ;

dropIndexArgument1
    : STRING
    ;

createIndexesMethod
    : CREATE_INDEXES LPAREN createIndexesArgument1 (COMMA createIndexesArgument2)? RPAREN
    ;

createIndexesArgument2
    : object
    ;

createIndexesArgument1
    : array
    ;

createIndexMethod
    : CREATE_INDEX LPAREN createIndexArgument1 (COMMA createIndexArgument2)? RPAREN
    ;

createIndexArgument2
    : object
    ;

createIndexArgument1
    : STRING
    | object
    | array
    ;

isCappedMethod
    : IS_CAPPED LPAREN isCappedArgument? RPAREN
    ;

isCappedArgument
    : object
    ;

dropMethod
    : DROP LPAREN dropArgument? RPAREN
    ;

dropArgument
    : object
    ;

renameMethod
    : RENAME LPAREN renameArgument1 (COMMA renameArgument2)? RPAREN
    ;

renameArgument1
    : STRING
    ;

renameArgument2
    : object
    ;

deleteManyMethod
    : DELETE_MANY LPAREN (deleteManyArgument1 (COMMA deleteManyArgument2)?)? RPAREN
    ;

deleteManyArgument1
    : object
    ;

deleteManyArgument2
    : object
    ;

deleteOneMethod
    : DELETE_ONE LPAREN (deleteOneArgument1 (COMMA deleteOneArgument2)?)? RPAREN
    ;

deleteOneArgument1
    : object
    ;

deleteOneArgument2
    : object
    ;

replaceOneMethod
    : REPLACE_ONE LPAREN replaceOneArgument1 COMMA replaceOneArgument2 (COMMA replaceOneArgument3)? RPAREN
    ;

replaceOneArgument1
    : object
    ;

replaceOneArgument2
    : documentToInsert
    ;

replaceOneArgument3
    : object
    ;

updateManyMethod
    : UPDATE_MANY LPAREN updateManyArgument1 COMMA updateManyArgument2 (COMMA updateManyArgument3)? RPAREN
    ;

updateManyArgument1
    : object
    ;

updateManyArgument2
    : object
    | array
    ;

updateManyArgument3
    : object
    ;

updateOneMethod
    : UPDATE_ONE LPAREN updateOneArgument1 COMMA updateOneArgument2 (COMMA updateOneArgument3)? RPAREN
    ;

updateOneArgument1
    : object
    ;

updateOneArgument2
    : array
    | object
    ;

updateOneArgument3
    : object
    ;

bulkWriteMethod
    : BULK_WRITE LPAREN bulkWriteArgument1 (COMMA bulkWriteArgument2)? RPAREN
    ;

bulkWriteArgument1
    : array
    ;

bulkWriteArgument2
    : object
    ;

insertManyMethod
    : INSERT_MANY LPAREN insertManyArgument1 (COMMA insertManyArgument2)? RPAREN
    ;

insertManyArgument1
    : LBRACKET documentToInsert (COMMA documentToInsert)* COMMA? RBRACKET
    ;

insertManyArgument2
    : object
    ;

insertOneMethod
    : INSERT_ONE LPAREN insertOneArgument1 (COMMA insertOneArgument2)? RPAREN
    ;

insertOneArgument1
    : documentToInsert
    ;

insertOneArgument2
    : object
    ;

documentToInsert
    : object
    | array
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
    | FIND
    | FIND_ONE
    | FIND_ONE_AND_DELETE
    | FIND_ONE_AND_REPLACE
    | FIND_ONE_AND_UPDATE
    | SHOW_RECORD_ID
    | RETURN_KEY
    | FILTER
    | MIN
    | MAX
    | SORT
    | LIMIT
    | EXPLAIN
    | HINT
    | SKIP_
    | INSERT_ONE
    | INSERT_MANY
    | BULK_WRITE
    | UPDATE_ONE
    | UPDATE_MANY
    | REPLACE_ONE
    | DELETE_ONE
    | DELETE_MANY
    | RENAME
    | DROP
    | IS_CAPPED
    | CREATE_INDEX
    | CREATE_INDEXES
    | DROP_INDEX
    | DROP_INDEXES
    | LIST_INDEXES
    | INDEXES
    | INDEX_EXISTS
    | INDEX_INFORMATION
    | ESTIMATED_DOCUMENT_COUNT
    | COUNT_DOCUMENTS
    | DISTINCT
    | AGGREGATE
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