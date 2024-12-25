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
    | databaseOperation
    ;

databaseOperation
    : DB DOT databaseMethod
    ;

databaseMethod
    : databaseCollectionMethod
    | databaseCreateCollectionMethod
    | databaseCommandMethod
    | aggregateMethod
    | databaseListCollectionsMethod
    | databaseRenameCollectionMethod
    | databaseDropCollectionMethod
    | databaseDropDatabaseMethod
    | databaseCreateIndexMethod
    | databaseRemoveUserMethod
    | databaseIndexInformationMethod
    | databaseRunCursorCommandMethod
    ;

databaseRunCursorCommandMethod
    : RUN_CURSOR_COMMAND LPAREN databaseRunCursorCommandArgument1 (
        COMMA databaseRunCursorCommandArgument2
    )? RPAREN
    ;

databaseRunCursorCommandArgument1
    : object
    ;

databaseRunCursorCommandArgument2
    : object
    ;

databaseIndexInformationMethod
    : INDEX_INFORMATION LPAREN databaseIndexInformationArgument1 (
        COMMA databaseIndexInformationArgument2
    )? RPAREN
    ;

databaseIndexInformationArgument1
    : STRING
    ;

databaseIndexInformationArgument2
    : object
    ;

databaseRemoveUserMethod
    : REMOVE_USER LPAREN databaseRemoveUserArgument1 (COMMA databaseRemoveUserArgument2)? RPAREN
    ;

databaseRemoveUserArgument1
    : STRING
    ;

databaseRemoveUserArgument2
    : object
    ;

databaseCreateIndexMethod
    : CREATE_INDEX LPAREN databaseCreateIndexArgument1 COMMA databaseCreateIndexArgument2 (
        COMMA databaseCreateIndexArgument3
    )? RPAREN
    ;

databaseCreateIndexArgument3
    : object
    ;

databaseCreateIndexArgument2
    : STRING
    | object
    | array
    ;

databaseCreateIndexArgument1
    : STRING
    ;

databaseDropDatabaseMethod
    : DROP_DATABASE LPAREN databaseDropDatabaseArgument? RPAREN
    ;

databaseDropDatabaseArgument
    : object
    ;

databaseDropCollectionMethod
    : DROP_COLLECTION LPAREN databaseDropCollectionArgument1 (
        COMMA databaseDropCollectionArgument2
    )? RPAREN
    ;

databaseDropCollectionArgument1
    : STRING
    ;

databaseDropCollectionArgument2
    : object
    ;

databaseRenameCollectionMethod
    : RENAME_COLLECTION LPAREN databaseRenameCollectionArgument1 COMMA databaseRenameCollectionArgument2 (
        COMMA databaseRenameCollectionArgument3
    )? RPAREN
    ;

databaseRenameCollectionArgument1
    : STRING
    ;

databaseRenameCollectionArgument2
    : STRING
    ;

databaseRenameCollectionArgument3
    : object
    ;

databaseListCollectionsMethod
    : LIST_COLLECTIONS LPAREN (
        databaseListCollectionsArgument1 (COMMA databaseListCollectionsArgument2)
    )? RPAREN
    ;

databaseListCollectionsArgument1
    : object
    ;

databaseListCollectionsArgument2
    : object
    ;

databaseCommandMethod
    : COMMAND LPAREN databaseCommandArgument1 (COMMA databaseCommandArgument2)? RPAREN
    ;

databaseCommandArgument1
    : object
    ;

databaseCommandArgument2
    : object
    ;

databaseCreateCollectionMethod
    : CREATE_COLLECTION LPAREN databaseCreateCollectionArgument1 (
        COMMA databaseCreateCollectionArgument2
    )? RPAREN
    ;

databaseCreateCollectionArgument1
    : STRING
    ;

databaseCreateCollectionArgument2
    : object
    ;

databaseCollectionMethod
    : COLLECTION LPAREN quotedCollectionName RPAREN DOT collectionMethod
    ;

quotedCollectionName
    : STRING
    ;

collectionOperation
    : DB DOT collectionName DOT collectionMethod
    ;

collectionName
    : IDENTIFIER
    ;

collectionMethod
    : collectionFindMethod
    | collectionFindOneMethod
    | collectionFindOneAndDeleteMethod
    | collectionFindOneAndReplaceMethod
    | collectionFindOneAndUpdateMethod
    | collectionInsertOneMethod
    | collectionInsertManyMethod
    | collectionBulkWriteMethod
    | collectionUpdateOneMethod
    | collectionUpdateManyMethod
    | collectionReplaceOneMethod
    | collectionDeleteOneMethod
    | collectionDeleteManyMethod
    | collectionRenameMethod
    | collectionDropMethod
    | collectionIsCappedMethod
    | collectionCreateIndexMethod
    | collectionCreateIndexesMethod
    | collectionDropIndexMethod
    | collectionDropIndexesMethod
    | collectionListIndexesMethod
    | collectionIndexesMethod
    | collectionIndexExistsMethod
    | collectionIndexInformationMethod
    | collectionEstimatedDocumentCountMethod
    | collectionCountDocumentsMethod
    | collectionDistinctMethod
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

collectionDistinctMethod
    : DISTINCT LPAREN collectionDistinctArgument1 (
        COMMA collectionDistinctArgument2 (COMMA collectionDistinctArgument3)?
    )? RPAREN
    ;

collectionDistinctArgument1
    : STRING
    ;

collectionDistinctArgument2
    : object
    ;

collectionDistinctArgument3
    : object
    ;

collectionCountDocumentsMethod
    : COUNT_DOCUMENTS LPAREN (
        collectionCountDocumentsArgument1 (COMMA collectionCountDocumentsArgument2)?
    )? RPAREN
    ;

collectionCountDocumentsArgument2
    : object
    ;

collectionCountDocumentsArgument1
    : object
    ;

collectionEstimatedDocumentCountMethod
    : ESTIMATED_DOCUMENT_COUNT LPAREN collectionEstimatedDocumentCountArgument? RPAREN
    ;

collectionEstimatedDocumentCountArgument
    : object
    ;

collectionIndexInformationMethod
    : INDEX_INFORMATION LPAREN collectionIndexInformationArgument? RPAREN
    ;

collectionIndexInformationArgument
    : object
    ;

collectionIndexExistsMethod
    : INDEX_EXISTS LPAREN collectionIndexExistsArgument1 (COMMA collectionIndexExistsArgument2)? RPAREN
    ;

collectionIndexExistsArgument2
    : object
    ;

collectionIndexExistsArgument1
    : STRING
    | LBRACKET STRING (COMMA STRING)* COMMA? RBRACKET
    ;

collectionIndexesMethod
    : INDEXES LPAREN collectionIndexesArgument? RPAREN
    ;

collectionIndexesArgument
    : object
    ;

collectionListIndexesMethod
    : LIST_INDEXES LPAREN collectionListIndexesArgument? RPAREN
    ;

collectionListIndexesArgument
    : object
    ;

collectionDropIndexesMethod
    : DROP_INDEXES LPAREN collectionDropIndexesArgument? RPAREN
    ;

collectionDropIndexesArgument
    : object
    ;

collectionDropIndexMethod
    : DROP_INDEX LPAREN collectionDropIndexArgument1 (COMMA collectionDropIndexArgument2)? RPAREN
    ;

collectionDropIndexArgument2
    : object
    ;

collectionDropIndexArgument1
    : STRING
    ;

collectionCreateIndexesMethod
    : CREATE_INDEXES LPAREN collectionCreateIndexesArgument1 (
        COMMA collectionCreateIndexesArgument2
    )? RPAREN
    ;

collectionCreateIndexesArgument2
    : object
    ;

collectionCreateIndexesArgument1
    : array
    ;

collectionCreateIndexMethod
    : CREATE_INDEX LPAREN collectionCreateIndexArgument1 (COMMA collectionCreateIndexArgument2)? RPAREN
    ;

collectionCreateIndexArgument2
    : object
    ;

collectionCreateIndexArgument1
    : STRING
    | object
    | array
    ;

collectionIsCappedMethod
    : IS_CAPPED LPAREN collectionIsCappedArgument? RPAREN
    ;

collectionIsCappedArgument
    : object
    ;

collectionDropMethod
    : DROP LPAREN collectionDropArgument? RPAREN
    ;

collectionDropArgument
    : object
    ;

collectionRenameMethod
    : RENAME LPAREN collectionRenameArgument1 (COMMA collectionRenameArgument2)? RPAREN
    ;

collectionRenameArgument1
    : STRING
    ;

collectionRenameArgument2
    : object
    ;

collectionDeleteManyMethod
    : DELETE_MANY LPAREN (collectionDeleteManyArgument1 (COMMA collectionDeleteManyArgument2)?)? RPAREN
    ;

collectionDeleteManyArgument1
    : object
    ;

collectionDeleteManyArgument2
    : object
    ;

collectionDeleteOneMethod
    : DELETE_ONE LPAREN (collectionDeleteOneArgument1 (COMMA collectionDeleteOneArgument2)?)? RPAREN
    ;

collectionDeleteOneArgument1
    : object
    ;

collectionDeleteOneArgument2
    : object
    ;

collectionReplaceOneMethod
    : REPLACE_ONE LPAREN collectionReplaceOneArgument1 COMMA collectionReplaceOneArgument2 (
        COMMA collectionReplaceOneArgument3
    )? RPAREN
    ;

collectionReplaceOneArgument1
    : object
    ;

collectionReplaceOneArgument2
    : documentToInsert
    ;

collectionReplaceOneArgument3
    : object
    ;

collectionUpdateManyMethod
    : UPDATE_MANY LPAREN collectionUpdateManyArgument1 COMMA collectionUpdateManyArgument2 (
        COMMA collectionUpdateManyArgument3
    )? RPAREN
    ;

collectionUpdateManyArgument1
    : object
    ;

collectionUpdateManyArgument2
    : object
    | array
    ;

collectionUpdateManyArgument3
    : object
    ;

collectionUpdateOneMethod
    : UPDATE_ONE LPAREN collectionUpdateOneArgument1 COMMA collectionUpdateOneArgument2 (
        COMMA collectionUpdateOneArgument3
    )? RPAREN
    ;

collectionUpdateOneArgument1
    : object
    ;

collectionUpdateOneArgument2
    : array
    | object
    ;

collectionUpdateOneArgument3
    : object
    ;

collectionBulkWriteMethod
    : BULK_WRITE LPAREN collectionBulkWriteArgument1 (COMMA collectionBulkWriteArgument2)? RPAREN
    ;

collectionBulkWriteArgument1
    : array
    ;

collectionBulkWriteArgument2
    : object
    ;

collectionInsertManyMethod
    : INSERT_MANY LPAREN collectionInsertManyArgument1 (COMMA collectionInsertManyArgument2)? RPAREN
    ;

collectionInsertManyArgument1
    : LBRACKET documentToInsert (COMMA documentToInsert)* COMMA? RBRACKET
    ;

collectionInsertManyArgument2
    : object
    ;

collectionInsertOneMethod
    : INSERT_ONE LPAREN collectionInsertOneArgument1 (COMMA collectionInsertOneArgument2)? RPAREN
    ;

collectionInsertOneArgument1
    : documentToInsert
    ;

collectionInsertOneArgument2
    : object
    ;

documentToInsert
    : object
    | array
    ;

collectionFindOneAndUpdateMethod
    : FIND_ONE_AND_UPDATE LPAREN collectionFindOneAndUpdateArgument1 COMMA collectionFindOneAndUpdateArgument2 (
        COMMA collectionFindOneAndUpdateArgument3
    )? RPAREN
    ;

collectionFindOneAndUpdateArgument1
    : object
    ;

collectionFindOneAndUpdateArgument2
    : object
    ;

collectionFindOneAndUpdateArgument3
    : object
    ;

collectionFindOneAndReplaceMethod
    : FIND_ONE_AND_REPLACE LPAREN collectionFindOneAndReplaceArgument1 COMMA collectionFindOneAndReplaceArgument2 (
        COMMA collectionFindOneAndReplaceArgument3
    )? RPAREN
    ;

collectionFindOneAndReplaceArgument1
    : object
    ;

collectionFindOneAndReplaceArgument2
    : object
    ;

collectionFindOneAndReplaceArgument3
    : object
    ;

collectionFindOneAndDeleteMethod
    : FIND_ONE_AND_DELETE LPAREN collectionFindOneAndDeleteArgument1 (
        COMMA collectionFindOneAndDeleteArgument2
    )? RPAREN
    ;

collectionFindOneAndDeleteArgument1
    : object
    ;

collectionFindOneAndDeleteArgument2
    : object
    ;

collectionFindOneMethod
    : FIND_ONE LPAREN (collectionFindOneArgument1 (COMMA collectionFindOneArgument2)?)? RPAREN
    ;

collectionFindOneArgument1
    : object
    ;

collectionFindOneArgument2
    : object
    ;

collectionFindMethod
    : FIND LPAREN (collectionFindMethodArgument1 (COMMA collectionFindMethodArgument2)?)? RPAREN collectionFindMethodModifier* explainMethod?
    ;

collectionFindMethodArgument1
    : object
    ;

collectionFindMethodArgument2
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

collectionFindMethodModifier
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
    | COLLECTION
    | CREATE_COLLECTION
    | COMMAND
    | LIST_COLLECTIONS
    | RENAME_COLLECTION
    | DROP_COLLECTION
    | DROP_DATABASE
    | REMOVE_USER
    | RUN_CURSOR_COMMAND
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