/*
 MySQL (Positive Technologies) grammar The MIT License (MIT). Copyright (c) 2015-2017, Ivan
 Kochurkin (kvanttt@gmail.com), Positive Technologies. Copyright (c) 2017, Ivan Khudyashev
 (IHudyashov@ptsecurity.com)
 
 Permission is hereby granted, free of charge, to any person obtaining a copy of this software and
 associated documentation files (the "Software"), to deal in the Software without restriction,
 including without limitation the rights to use, copy, modify, merge, publish, distribute,
 sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:
 
 The above copyright notice and this permission notice shall be included in all copies or
 substantial portions of the Software.
 
 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT
 NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
 DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT
 OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

// $antlr-format columnLimit 500, minEmptyLines 1, maxEmptyLinesToKeep 1, useTab false, reflowComments false, breakBeforeBraces false
// $antlr-format keepEmptyLinesAtTheStartOfBlocks false, allowShortRulesOnASingleLine false, alignSemicolons hanging, alignColons hanging
// $antlr-format alignTrailingComments true

parser grammar MySqlParser;

options {
    tokenVocab = MySqlLexer;
}

// Top Level Description

root
    : statements? EOF
    ;

// We can omit statement semicolon only if it's the last statement
statements
    : statement SEMI?
    | statement SEMI statements
    ;

statement
    : ddlStatement
    | dmlStatement
    | transactionStatement
    | replicationStatement
    | preparedStatement
    | administrationStatement
    | utilityStatement
    ;

ddlStatement
    : createDatabase
    | createEvent
    | createIndex
    | createLogfileGroup
    | createProcedure
    | createFunction
    | createServer
    | createTable
    | createTablespaceInnodb
    | createTablespaceNdb
    | createTrigger
    | createView
    | createRole
    | alterDatabase
    | alterEvent
    | alterFunction
    | alterInstance
    | alterLogfileGroup
    | alterProcedure
    | alterServer
    | alterTable
    | alterTablespace
    | alterView
    | dropDatabase
    | dropEvent
    | dropIndex
    | dropLogfileGroup
    | dropProcedure
    | dropFunction
    | dropServer
    | dropTable
    | dropTablespace
    | dropTrigger
    | dropView
    | dropRole
    | setRole
    | renameTable
    | truncateTable
    ;

dmlStatement
    : selectStatement
    | insertStatement
    | updateStatement
    | deleteStatement
    | replaceStatement
    | callStatement
    | loadDataStatement
    | loadXmlStatement
    | doStatement
    | handlerStatement
    | valuesStatement
    | withStatement
    | tableStatement
    ;

transactionStatement
    : startTransaction
    | beginWork
    | commitWork
    | rollbackWork
    | savepointStatement
    | rollbackStatement
    | releaseStatement
    | lockTables
    | unlockTables
    ;

replicationStatement
    : changeMaster
    | changeReplicationFilter
    | purgeBinaryLogs
    | resetMaster
    | resetSlave
    | startSlave
    | stopSlave
    | startGroupReplication
    | stopGroupReplication
    | xaStartTransaction
    | xaEndTransaction
    | xaPrepareStatement
    | xaCommitWork
    | xaRollbackWork
    | xaRecoverWork
    ;

preparedStatement
    : prepareStatement
    | executeStatement
    | deallocatePrepare
    ;

// remark: NOT INCLUDED IN sqlStatement, but include in body
//  of routine's statements
compoundStatement
    : blockStatement
    | caseStatement
    | ifStatement
    | leaveStatement
    | loopStatement
    | repeatStatement
    | whileStatement
    | iterateStatement
    | returnStatement
    | cursorStatement
    ;

administrationStatement
    : alterUser
    | createUser
    | dropUser
    | grantStatement
    | grantProxy
    | renameUser
    | revokeStatement
    | revokeProxy
    | analyzeTable
    | checkTable
    | checksumTable
    | optimizeTable
    | repairTable
    | createUdfunction
    | installPlugin
    | uninstallPlugin
    | setStatement
    | showStatement
    | binlogStatement
    | cacheIndexStatement
    | flushStatement
    | killStatement
    | loadIndexIntoCache
    | resetStatement
    | shutdownStatement
    ;

utilityStatement
    : simpleDescribeStatement
    | fullDescribeStatement
    | helpStatement
    | useStatement
    | signalStatement
    | resignalStatement
    | diagnosticsStatement
    ;

// Data Definition Language

//    Create statements

createDatabase
    : CREATE dbFormat = (DATABASE | SCHEMA) ifNotExists? uid createDatabaseOption*
    ;

createEvent
    : CREATE ownerStatement? EVENT ifNotExists? fullId ON SCHEDULE scheduleExpression (ON COMPLETION NOT? PRESERVE)? enableType? (COMMENT STRING_LITERAL)? DO routineBody
    ;

createIndex
    : CREATE intimeAction = (ONLINE | OFFLINE)? indexCategory = (UNIQUE | FULLTEXT | SPATIAL)? INDEX uid indexType? ON tableIdentifier indexColumnNames indexOption* (ALGORITHM EQUAL_SYMBOL? algType = (DEFAULT | INPLACE | COPY) | LOCK EQUAL_SYMBOL? lockType = (DEFAULT | NONE | SHARED | EXCLUSIVE))*
    ;

createLogfileGroup
    : CREATE LOGFILE GROUP uid ADD UNDOFILE undoFile = STRING_LITERAL (INITIAL_SIZE EQUAL_SYMBOL? initSize = fileSizeLiteral)? (UNDO_BUFFER_SIZE EQUAL_SYMBOL? undoSize = fileSizeLiteral)? (REDO_BUFFER_SIZE EQUAL_SYMBOL? redoSize = fileSizeLiteral)? (NODEGROUP EQUAL_SYMBOL? uid)? WAIT? (
        COMMENT EQUAL_SYMBOL? comment = STRING_LITERAL
    )? ENGINE EQUAL_SYMBOL? engineName
    ;

createProcedure
    : CREATE ownerStatement? PROCEDURE fullId LR_BRACKET procedureParameter? (COMMA procedureParameter)* RR_BRACKET routineOption* routineBody
    ;

createFunction
    : CREATE ownerStatement? AGGREGATE? FUNCTION ifNotExists? fullId LR_BRACKET functionParameter? (COMMA functionParameter)* RR_BRACKET RETURNS dataType routineOption* (routineBody | returnStatement)
    ;

createRole
    : CREATE ROLE ifNotExists? newRoleNameList
    ;

createServer
    : CREATE SERVER uid FOREIGN DATA WRAPPER wrapperName = (MYSQL | STRING_LITERAL) OPTIONS LR_BRACKET serverOption (COMMA serverOption)* RR_BRACKET
    ;

createTable
    : CREATE TEMPORARY? TABLE ifNotExists? tableIdentifier (LIKE tableIdentifier | LR_BRACKET LIKE parenthesisTable = tableIdentifier RR_BRACKET)                                              # copyCreateTable
    | CREATE TEMPORARY? TABLE ifNotExists? tableIdentifier createDefinitions? ( tableOption (COMMA? tableOption)*)? partitionDefinitions? keyViolate = (IGNORE | REPLACE)? AS? selectStatement # queryCreateTable
    | CREATE TEMPORARY? TABLE ifNotExists? tableIdentifier createDefinitions ( tableOption (COMMA? tableOption)*)? partitionDefinitions?                                                       # columnCreateTable
    ;

createTablespaceInnodb
    : CREATE TABLESPACE uid ADD DATAFILE datafile = STRING_LITERAL (FILE_BLOCK_SIZE EQUAL_SYMBOL fileBlockSize = fileSizeLiteral)? (ENGINE EQUAL_SYMBOL? engineName)?
    ;

createTablespaceNdb
    : CREATE TABLESPACE uid ADD DATAFILE datafile = STRING_LITERAL USE LOGFILE GROUP uid (EXTENT_SIZE EQUAL_SYMBOL? extentSize = fileSizeLiteral)? (INITIAL_SIZE EQUAL_SYMBOL? initialSize = fileSizeLiteral)? (AUTOEXTEND_SIZE EQUAL_SYMBOL? autoextendSize = fileSizeLiteral)? (MAX_SIZE EQUAL_SYMBOL? maxSize = fileSizeLiteral)? (
        NODEGROUP EQUAL_SYMBOL? uid
    )? WAIT? (COMMENT EQUAL_SYMBOL? comment = STRING_LITERAL)? ENGINE EQUAL_SYMBOL? engineName
    ;

createTrigger
    : CREATE ownerStatement? TRIGGER ifNotExists? thisTrigger = fullId triggerTime = (BEFORE | AFTER) triggerEvent = (INSERT | UPDATE | DELETE) ON tableIdentifier FOR EACH ROW (triggerPlace = (FOLLOWS | PRECEDES) otherTrigger = fullId)? routineBody
    ;

withClause
    : WITH RECURSIVE? commonTableExpressions
    ;

commonTableExpressions
    : cteName (LR_BRACKET cteColumnName (COMMA cteColumnName)* RR_BRACKET)? AS LR_BRACKET dmlStatement RR_BRACKET (COMMA commonTableExpressions)?
    ;

cteName
    : uid
    ;

cteColumnName
    : uid
    ;

createView
    : CREATE orReplace? (ALGORITHM EQUAL_SYMBOL algType = (UNDEFINED | MERGE | TEMPTABLE))? ownerStatement? (SQL SECURITY secContext = (DEFINER | INVOKER))? VIEW fullId (LR_BRACKET uidList RR_BRACKET)? AS (
        LR_BRACKET withClause? selectStatement RR_BRACKET
        | withClause? selectStatement (WITH checkOption = (CASCADED | LOCAL)? CHECK OPTION)?
    )
    ;

// details

createDatabaseOption
    : DEFAULT? charSet EQUAL_SYMBOL? (charsetName | DEFAULT)
    | DEFAULT? COLLATE EQUAL_SYMBOL? collationName
    | DEFAULT? ENCRYPTION EQUAL_SYMBOL? STRING_LITERAL
    | READ ONLY EQUAL_SYMBOL? (DEFAULT | ZERO_DECIMAL | ONE_DECIMAL)
    ;

charSet
    : CHARACTER SET
    | CHARSET
    | CHAR SET
    ;

currentUserExpression
    : CURRENT_USER (LR_BRACKET RR_BRACKET)?
    ;

ownerStatement
    : DEFINER EQUAL_SYMBOL (userName | currentUserExpression)
    ;

scheduleExpression
    : AT timestampValue intervalExpr*                                                                                                                                                                     # preciseSchedule
    | EVERY (decimalLiteral | expression) intervalType ( STARTS startTimestamp = timestampValue (startIntervals += intervalExpr)*)? (ENDS endTimestamp = timestampValue (endIntervals += intervalExpr)*)? # intervalSchedule
    ;

timestampValue
    : CURRENT_TIMESTAMP
    | stringLiteral
    | decimalLiteral
    | expression
    ;

intervalExpr
    : PLUS INTERVAL (decimalLiteral | expression) intervalType
    ;

intervalType
    : intervalTypeBase
    | YEAR
    | YEAR_MONTH
    | DAY_HOUR
    | DAY_MINUTE
    | DAY_SECOND
    | HOUR_MINUTE
    | HOUR_SECOND
    | MINUTE_SECOND
    | SECOND_MICROSECOND
    | MINUTE_MICROSECOND
    | HOUR_MICROSECOND
    | DAY_MICROSECOND
    ;

enableType
    : ENABLE
    | DISABLE
    | DISABLE ON SLAVE
    ;

indexType
    : USING (BTREE | HASH)
    ;

indexOption
    : KEY_BLOCK_SIZE EQUAL_SYMBOL? fileSizeLiteral
    | indexType
    | WITH PARSER uid
    | COMMENT STRING_LITERAL
    | (VISIBLE | INVISIBLE)
    | ENGINE_ATTRIBUTE EQUAL_SYMBOL? STRING_LITERAL
    | SECONDARY_ENGINE_ATTRIBUTE EQUAL_SYMBOL? STRING_LITERAL
    ;

procedureParameter
    : direction = (IN | OUT | INOUT)? uid dataType
    ;

functionParameter
    : uid dataType
    ;

routineOption
    : COMMENT STRING_LITERAL                                        # routineComment
    | LANGUAGE SQL                                                  # routineLanguage
    | NOT? DETERMINISTIC                                            # routineBehavior
    | ( CONTAINS SQL | NO SQL | READS SQL DATA | MODIFIES SQL DATA) # routineData
    | SQL SECURITY context = (DEFINER | INVOKER)                    # routineSecurity
    ;

serverOption
    : HOST STRING_LITERAL
    | DATABASE STRING_LITERAL
    | USER STRING_LITERAL
    | PASSWORD STRING_LITERAL
    | SOCKET STRING_LITERAL
    | OWNER STRING_LITERAL
    | PORT decimalLiteral
    ;

createDefinitions
    : LR_BRACKET createDefinition (COMMA createDefinition)* RR_BRACKET
    ;

createDefinition
    : fullColumnName columnDefinition # columnDeclaration
    | tableConstraint NOT? ENFORCED?  # constraintDeclaration
    | indexColumnDefinition           # indexDeclaration
    ;

columnDefinition
    : dataType columnConstraint* NOT? ENFORCED?
    ;

columnConstraint
    : nullNotnull                                                                 # nullColumnConstraint
    | DEFAULT defaultValue                                                        # defaultColumnConstraint
    | VISIBLE                                                                     # visibilityColumnConstraint
    | INVISIBLE                                                                   # invisibilityColumnConstraint
    | (AUTO_INCREMENT | ON UPDATE currentTimestamp)                               # autoIncrementColumnConstraint
    | PRIMARY? KEY                                                                # primaryKeyColumnConstraint
    | UNIQUE KEY?                                                                 # uniqueKeyColumnConstraint
    | COMMENT STRING_LITERAL                                                      # commentColumnConstraint
    | COLUMN_FORMAT colformat = (FIXED | DYNAMIC | DEFAULT)                       # formatColumnConstraint
    | STORAGE storageval = (DISK | MEMORY | DEFAULT)                              # storageColumnConstraint
    | referenceDefinition                                                         # referenceColumnConstraint
    | COLLATE collationName                                                       # collateColumnConstraint
    | (GENERATED ALWAYS)? AS LR_BRACKET expression RR_BRACKET (VIRTUAL | STORED)? # generatedColumnConstraint
    | SERIAL DEFAULT VALUE                                                        # serialDefaultColumnConstraint
    | (CONSTRAINT name = uid?)? CHECK LR_BRACKET expression RR_BRACKET            # checkColumnConstraint
    ;

tableConstraint
    : (CONSTRAINT name = uid?)? PRIMARY KEY index = uid? indexType? indexColumnNames indexOption*                         # primaryKeyTableConstraint
    | (CONSTRAINT name = uid?)? UNIQUE indexFormat = (INDEX | KEY)? index = uid? indexType? indexColumnNames indexOption* # uniqueKeyTableConstraint
    | (CONSTRAINT name = uid?)? FOREIGN KEY index = uid? indexColumnNames referenceDefinition                             # foreignKeyTableConstraint
    | (CONSTRAINT name = uid?)? CHECK LR_BRACKET expression RR_BRACKET                                                    # checkTableConstraint
    ;

referenceDefinition
    : REFERENCES tableIdentifier indexColumnNames? (MATCH matchType = (FULL | PARTIAL | SIMPLE))? referenceAction?
    ;

referenceAction
    : ON DELETE onDelete = referenceControlType (ON UPDATE onUpdate = referenceControlType)?
    | ON UPDATE onUpdate = referenceControlType (ON DELETE onDelete = referenceControlType)?
    ;

referenceControlType
    : RESTRICT
    | CASCADE
    | SET NULL_LITERAL
    | NO ACTION
    | SET DEFAULT
    ;

indexColumnDefinition
    : indexFormat = (INDEX | KEY) uid? indexType? indexColumnNames indexOption*            # simpleIndexDeclaration
    | (FULLTEXT | SPATIAL) indexFormat = (INDEX | KEY)? uid? indexColumnNames indexOption* # specialIndexDeclaration
    ;

tableOption
    : ENGINE EQUAL_SYMBOL? engineName?                                                                          # tableOptionEngine
    | ENGINE_ATTRIBUTE EQUAL_SYMBOL? STRING_LITERAL                                                             # tableOptionEngineAttribute
    | AUTOEXTEND_SIZE EQUAL_SYMBOL? decimalLiteral                                                              # tableOptionAutoextendSize
    | AUTO_INCREMENT EQUAL_SYMBOL? decimalLiteral                                                               # tableOptionAutoIncrement
    | AVG_ROW_LENGTH EQUAL_SYMBOL? decimalLiteral                                                               # tableOptionAverage
    | DEFAULT? charSet EQUAL_SYMBOL? (charsetName | DEFAULT)                                                    # tableOptionCharset
    | (CHECKSUM | PAGE_CHECKSUM) EQUAL_SYMBOL? boolValue = (ZERO_DECIMAL | ONE_DECIMAL)                         # tableOptionChecksum
    | DEFAULT? COLLATE EQUAL_SYMBOL? collationName                                                              # tableOptionCollate
    | COMMENT EQUAL_SYMBOL? STRING_LITERAL                                                                      # tableOptionComment
    | COMPRESSION EQUAL_SYMBOL? (STRING_LITERAL | ID)                                                           # tableOptionCompression
    | CONNECTION EQUAL_SYMBOL? STRING_LITERAL                                                                   # tableOptionConnection
    | (DATA | INDEX) DIRECTORY EQUAL_SYMBOL? STRING_LITERAL                                                     # tableOptionDataDirectory
    | DELAY_KEY_WRITE EQUAL_SYMBOL? boolValue = (ZERO_DECIMAL | ONE_DECIMAL)                                    # tableOptionDelay
    | ENCRYPTION EQUAL_SYMBOL? STRING_LITERAL                                                                   # tableOptionEncryption
    | (PAGE_COMPRESSED | STRING_LITERAL) EQUAL_SYMBOL? (ZERO_DECIMAL | ONE_DECIMAL)                             # tableOptionPageCompressed
    | (PAGE_COMPRESSION_LEVEL | STRING_LITERAL) EQUAL_SYMBOL? decimalLiteral                                    # tableOptionPageCompressionLevel
    | ENCRYPTION_KEY_ID EQUAL_SYMBOL? decimalLiteral                                                            # tableOptionEncryptionKeyId
    | INDEX DIRECTORY EQUAL_SYMBOL? STRING_LITERAL                                                              # tableOptionIndexDirectory
    | INSERT_METHOD EQUAL_SYMBOL? insertMethod = (NO | FIRST | LAST)                                            # tableOptionInsertMethod
    | KEY_BLOCK_SIZE EQUAL_SYMBOL? fileSizeLiteral                                                              # tableOptionKeyBlockSize
    | MAX_ROWS EQUAL_SYMBOL? decimalLiteral                                                                     # tableOptionMaxRows
    | MIN_ROWS EQUAL_SYMBOL? decimalLiteral                                                                     # tableOptionMinRows
    | PACK_KEYS EQUAL_SYMBOL? extBoolValue = (ZERO_DECIMAL | ONE_DECIMAL | DEFAULT)                             # tableOptionPackKeys
    | PASSWORD EQUAL_SYMBOL? STRING_LITERAL                                                                     # tableOptionPassword
    | ROW_FORMAT EQUAL_SYMBOL? rowFormat = ( DEFAULT | DYNAMIC | FIXED | COMPRESSED | REDUNDANT | COMPACT | ID) # tableOptionRowFormat
    | START TRANSACTION                                                                                         # tableOptionStartTransaction
    | SECONDARY_ENGINE_ATTRIBUTE EQUAL_SYMBOL? STRING_LITERAL                                                   # tableOptionSecondaryEngineAttribute
    | STATS_AUTO_RECALC EQUAL_SYMBOL? extBoolValue = (DEFAULT | ZERO_DECIMAL | ONE_DECIMAL)                     # tableOptionRecalculation
    | STATS_PERSISTENT EQUAL_SYMBOL? extBoolValue = (DEFAULT | ZERO_DECIMAL | ONE_DECIMAL)                      # tableOptionPersistent
    | STATS_SAMPLE_PAGES EQUAL_SYMBOL? (DEFAULT | decimalLiteral)                                               # tableOptionSamplePage
    | TABLESPACE uid tablespaceStorage?                                                                         # tableOptionTablespace
    | TABLE_TYPE EQUAL_SYMBOL tableType                                                                         # tableOptionTableType
    | tablespaceStorage                                                                                         # tableOptionTablespace
    | TRANSACTIONAL EQUAL_SYMBOL? (ZERO_DECIMAL | ONE_DECIMAL)                                                  # tableOptionTransactional
    | UNION EQUAL_SYMBOL? LR_BRACKET tables RR_BRACKET                                                          # tableOptionUnion
    ;

tableType
    : MYSQL
    | ODBC
    ;

tablespaceStorage
    : STORAGE (DISK | MEMORY | DEFAULT)
    ;

partitionDefinitions
    : PARTITION BY partitionFunctionDefinition (PARTITIONS count = decimalLiteral)? (SUBPARTITION BY subpartitionFunctionDefinition (SUBPARTITIONS subCount = decimalLiteral)?)? (LR_BRACKET partitionDefinition (COMMA partitionDefinition)* RR_BRACKET)?
    ;

partitionFunctionDefinition
    : LINEAR? HASH LR_BRACKET expression RR_BRACKET                                                              # partitionFunctionHash
    | LINEAR? KEY (ALGORITHM EQUAL_SYMBOL algType = (ONE_DECIMAL | TWO_DECIMAL))? LR_BRACKET uidList? RR_BRACKET # partitionFunctionKey // Optional uidList for MySQL only
    | RANGE (LR_BRACKET expression RR_BRACKET | COLUMNS LR_BRACKET uidList RR_BRACKET)                           # partitionFunctionRange
    | LIST (LR_BRACKET expression RR_BRACKET | COLUMNS LR_BRACKET uidList RR_BRACKET)                            # partitionFunctionList
    ;

subpartitionFunctionDefinition
    : LINEAR? HASH LR_BRACKET expression RR_BRACKET                                                             # subPartitionFunctionHash
    | LINEAR? KEY (ALGORITHM EQUAL_SYMBOL algType = (ONE_DECIMAL | TWO_DECIMAL))? LR_BRACKET uidList RR_BRACKET # subPartitionFunctionKey
    ;

partitionDefinition
    : PARTITION uid VALUES LESS THAN LR_BRACKET partitionDefinerAtom (COMMA partitionDefinerAtom)* RR_BRACKET partitionOption* (LR_BRACKET subpartitionDefinition (COMMA subpartitionDefinition)* RR_BRACKET)? # partitionComparison
    | PARTITION uid VALUES LESS THAN partitionDefinerAtom partitionOption* ( LR_BRACKET subpartitionDefinition (COMMA subpartitionDefinition)* RR_BRACKET)?                                                    # partitionComparison
    | PARTITION uid VALUES IN LR_BRACKET partitionDefinerAtom (COMMA partitionDefinerAtom)* RR_BRACKET partitionOption* ( LR_BRACKET subpartitionDefinition (COMMA subpartitionDefinition)* RR_BRACKET)?       # partitionListAtom
    | PARTITION uid VALUES IN LR_BRACKET partitionDefinerVector (COMMA partitionDefinerVector)* RR_BRACKET partitionOption* ( LR_BRACKET subpartitionDefinition (COMMA subpartitionDefinition)* RR_BRACKET)?   # partitionListVector
    | PARTITION uid partitionOption* (LR_BRACKET subpartitionDefinition (COMMA subpartitionDefinition)* RR_BRACKET)?                                                                                           # partitionSimple
    ;

partitionDefinerAtom
    : constant
    | expression
    | MAXVALUE
    ;

partitionDefinerVector
    : LR_BRACKET partitionDefinerAtom (COMMA partitionDefinerAtom)+ RR_BRACKET
    ;

subpartitionDefinition
    : SUBPARTITION uid partitionOption*
    ;

partitionOption
    : DEFAULT? STORAGE? ENGINE EQUAL_SYMBOL? engineName             # partitionOptionEngine
    | COMMENT EQUAL_SYMBOL? comment = STRING_LITERAL                # partitionOptionComment
    | DATA DIRECTORY EQUAL_SYMBOL? dataDirectory = STRING_LITERAL   # partitionOptionDataDirectory
    | INDEX DIRECTORY EQUAL_SYMBOL? indexDirectory = STRING_LITERAL # partitionOptionIndexDirectory
    | MAX_ROWS EQUAL_SYMBOL? maxRows = decimalLiteral               # partitionOptionMaxRows
    | MIN_ROWS EQUAL_SYMBOL? minRows = decimalLiteral               # partitionOptionMinRows
    | TABLESPACE EQUAL_SYMBOL? tablespace = uid                     # partitionOptionTablespace
    | NODEGROUP EQUAL_SYMBOL? nodegroup = uid                       # partitionOptionNodeGroup
    ;

//    Alter statements

alterDatabase
    : ALTER dbFormat = (DATABASE | SCHEMA) databaseName createDatabaseOption+       # alterSimpleDatabase
    | ALTER dbFormat = (DATABASE | SCHEMA) databaseName UPGRADE DATA DIRECTORY NAME # alterUpgradeName
    ;

alterEvent
    : ALTER ownerStatement? EVENT fullId (ON SCHEDULE scheduleExpression)? (ON COMPLETION NOT? PRESERVE)? (RENAME TO fullId)? enableType? (COMMENT STRING_LITERAL)? (DO routineBody)?
    ;

alterFunction
    : ALTER FUNCTION fullId routineOption*
    ;

alterInstance
    : ALTER INSTANCE ROTATE INNODB MASTER KEY
    ;

alterLogfileGroup
    : ALTER LOGFILE GROUP uid ADD UNDOFILE STRING_LITERAL (INITIAL_SIZE EQUAL_SYMBOL? fileSizeLiteral)? WAIT? ENGINE EQUAL_SYMBOL? engineName
    ;

alterProcedure
    : ALTER PROCEDURE fullId routineOption*
    ;

alterServer
    : ALTER SERVER uid OPTIONS LR_BRACKET serverOption (COMMA serverOption)* RR_BRACKET
    ;

alterTable
    : ALTER intimeAction = (ONLINE | OFFLINE)? IGNORE? TABLE tableIdentifier waitNowaitClause? (alterSpecification (COMMA alterSpecification)*)? partitionDefinitions?
    ;

alterTablespace
    : ALTER TABLESPACE uid objectAction = (ADD | DROP) DATAFILE STRING_LITERAL (INITIAL_SIZE EQUAL_SYMBOL fileSizeLiteral)? WAIT? ENGINE EQUAL_SYMBOL? engineName
    ;

alterView
    : ALTER (ALGORITHM EQUAL_SYMBOL algType = (UNDEFINED | MERGE | TEMPTABLE))? ownerStatement? (SQL SECURITY secContext = (DEFINER | INVOKER))? VIEW fullId (LR_BRACKET uidList RR_BRACKET)? AS selectStatement (WITH checkOpt = (CASCADED | LOCAL)? CHECK OPTION)?
    ;

// details

alterSpecification
    : tableOption (COMMA? tableOption)*                                                                                               # alterByTableOption
    | ADD COLUMN? uid columnDefinition (FIRST | AFTER uid)?                                                                           # alterByAddColumn
    | ADD COLUMN? LR_BRACKET uid columnDefinition (COMMA uid columnDefinition)* RR_BRACKET                                            # alterByAddColumns
    | ADD indexFormat = (INDEX | KEY) uid? indexType? indexColumnNames indexOption*                                                   # alterByAddIndex
    | ADD (CONSTRAINT name = uid?)? PRIMARY KEY index = uid? indexType? indexColumnNames indexOption*                                 # alterByAddPrimaryKey
    | ADD (CONSTRAINT name = uid?)? UNIQUE indexFormat = (INDEX | KEY)? uid? indexType? indexColumnNames indexOption*                 # alterByAddUniqueKey
    | ADD keyType = (FULLTEXT | SPATIAL) indexFormat = (INDEX | KEY)? uid? indexColumnNames indexOption*                              # alterByAddSpecialIndex
    | ADD (CONSTRAINT name = uid?)? FOREIGN KEY uid? indexColumnNames referenceDefinition                                             # alterByAddForeignKey
    | ADD (CONSTRAINT name = uid?)? CHECK (uid | stringLiteral | LR_BRACKET expression RR_BRACKET) NOT? ENFORCED?                     # alterByAddCheckTableConstraint
    | ALTER (CONSTRAINT constraintName?)? CHECK (uid | stringLiteral | LR_BRACKET expression RR_BRACKET) NOT? ENFORCED?               # alterByAlterCheckTableConstraint
    | ADD (CONSTRAINT name = uid?)? CHECK LR_BRACKET expression RR_BRACKET                                                            # alterByAddCheckTableConstraint
    | ALGORITHM EQUAL_SYMBOL? algType = (DEFAULT | INSTANT | INPLACE | COPY)                                                          # alterBySetAlgorithm
    | ALTER COLUMN? uid (SET DEFAULT defaultValue | DROP DEFAULT)                                                                     # alterByChangeDefault
    | CHANGE COLUMN? oldColumn = uid newColumn = uid columnDefinition ( FIRST | AFTER afterColumn = uid)?                             # alterByChangeColumn
    | RENAME COLUMN oldColumn = uid TO newColumn = uid                                                                                # alterByRenameColumn
    | LOCK EQUAL_SYMBOL? lockType = (DEFAULT | NONE | SHARED | EXCLUSIVE)                                                             # alterByLock
    | MODIFY COLUMN? uid columnDefinition (FIRST | AFTER uid)?                                                                        # alterByModifyColumn
    | DROP COLUMN? uid RESTRICT?                                                                                                      # alterByDropColumn
    | DROP (CONSTRAINT | CHECK) constraintName                                                                                        # alterByDropConstraintCheck
    | DROP PRIMARY KEY                                                                                                                # alterByDropPrimaryKey
    | DROP indexFormat = (INDEX | KEY) indexName                                                                                      # alterByDropIndex
    | RENAME indexFormat = (INDEX | KEY) indexName TO uid                                                                             # alterByRenameIndex
    | ALTER COLUMN? uid ( SET DEFAULT ( stringLiteral | LR_BRACKET expression RR_BRACKET) | SET (VISIBLE | INVISIBLE) | DROP DEFAULT) # alterByAlterColumnDefault
    | ALTER INDEX indexName (VISIBLE | INVISIBLE)                                                                                     # alterByAlterIndexVisibility
    | DROP FOREIGN KEY uid                                                                                                            # alterByDropForeignKey
    | DISABLE KEYS                                                                                                                    # alterByDisableKeys
    | ENABLE KEYS                                                                                                                     # alterByEnableKeys
    | RENAME renameFormat = (TO | AS)? (uid | fullId)                                                                                 # alterByRename
    | ORDER BY uidList                                                                                                                # alterByOrder
    | CONVERT TO (CHARSET | CHARACTER SET) charsetName (COLLATE collationName)?                                                       # alterByConvertCharset
    | DEFAULT? CHARACTER SET EQUAL_SYMBOL charsetName (COLLATE EQUAL_SYMBOL collationName)?                                           # alterByDefaultCharset
    | DISCARD TABLESPACE                                                                                                              # alterByDiscardTablespace
    | IMPORT TABLESPACE                                                                                                               # alterByImportTablespace
    | FORCE                                                                                                                           # alterByForce
    | validationFormat = (WITHOUT | WITH) VALIDATION                                                                                  # alterByValidate
    | ADD COLUMN? LR_BRACKET createDefinition (COMMA createDefinition)* RR_BRACKET                                                    # alterByAddDefinitions
    | alterPartitionSpecification                                                                                                     # alterPartition
    ;

alterPartitionSpecification
    : ADD PARTITION LR_BRACKET partitionDefinition (COMMA partitionDefinition)* RR_BRACKET                     # alterByAddPartition
    | DROP PARTITION uidList                                                                                   # alterByDropPartition
    | DISCARD PARTITION (uidList | ALL) TABLESPACE                                                             # alterByDiscardPartition
    | IMPORT PARTITION (uidList | ALL) TABLESPACE                                                              # alterByImportPartition
    | TRUNCATE PARTITION (uidList | ALL)                                                                       # alterByTruncatePartition
    | COALESCE PARTITION decimalLiteral                                                                        # alterByCoalescePartition
    | REORGANIZE PARTITION uidList INTO LR_BRACKET partitionDefinition (COMMA partitionDefinition)* RR_BRACKET # alterByReorganizePartition
    | EXCHANGE PARTITION uid WITH TABLE tableIdentifier (validationFormat = (WITH | WITHOUT) VALIDATION)?      # alterByExchangePartition
    | ANALYZE PARTITION (uidList | ALL)                                                                        # alterByAnalyzePartition
    | CHECK PARTITION (uidList | ALL)                                                                          # alterByCheckPartition
    | OPTIMIZE PARTITION (uidList | ALL)                                                                       # alterByOptimizePartition
    | REBUILD PARTITION (uidList | ALL)                                                                        # alterByRebuildPartition
    | REPAIR PARTITION (uidList | ALL)                                                                         # alterByRepairPartition
    | REMOVE PARTITIONING                                                                                      # alterByRemovePartitioning
    | UPGRADE PARTITIONING                                                                                     # alterByUpgradePartitioning
    ;

//    Drop statements

dropDatabase
    : DROP dbFormat = (DATABASE | SCHEMA) ifExists? databaseName
    ;

dropEvent
    : DROP EVENT ifExists? fullId
    ;

dropIndex
    : DROP INDEX intimeAction = (ONLINE | OFFLINE)? indexName ON tableIdentifier (ALGORITHM EQUAL_SYMBOL? algType = (DEFAULT | INPLACE | COPY) | LOCK EQUAL_SYMBOL? lockType = (DEFAULT | NONE | SHARED | EXCLUSIVE))*
    ;

dropLogfileGroup
    : DROP LOGFILE GROUP uid ENGINE EQUAL_SYMBOL engineName
    ;

dropProcedure
    : DROP PROCEDURE ifExists? fullId
    ;

dropFunction
    : DROP FUNCTION ifExists? fullId
    ;

dropServer
    : DROP SERVER ifExists? uid
    ;

dropTable
    : DROP TEMPORARY? TABLE ifExists? tables dropType = (RESTRICT | CASCADE)?
    ;

dropTablespace
    : DROP TABLESPACE uid (ENGINE EQUAL_SYMBOL? engineName)?
    ;

dropTrigger
    : DROP TRIGGER ifExists? triggerName
    ;

dropView
    : DROP VIEW ifExists? fullId (COMMA fullId)* dropType = (RESTRICT | CASCADE)?
    ;

dropRole
    : DROP ROLE ifExists? roleNameList
    ;

setRole
    : SET DEFAULT ROLE (NONE | ALL | roleNameList) TO userNameList
    | SET ROLE roleOption
    ;

//    Other DDL statements

renameTable
    : RENAME TABLE renameTableClause (COMMA renameTableClause)*
    ;

renameTableClause
    : tableIdentifier TO tableIdentifier
    ;

truncateTable
    : TRUNCATE TABLE? tableIdentifier
    ;

// Data Manipulation Language

//    Primary DML Statements

callStatement
    : CALL fullId (LR_BRACKET (constants | expressions)? RR_BRACKET)?
    ;

deleteStatement
    : singleDeleteStatement
    | multipleDeleteStatement
    ;

doStatement
    : DO expressions
    ;

handlerStatement
    : handlerOpenStatement
    | handlerReadIndexStatement
    | handlerReadStatement
    | handlerCloseStatement
    ;

insertStatement
    : INSERT priority = (LOW_PRIORITY | DELAYED | HIGH_PRIORITY)? IGNORE? INTO? tableIdentifier (PARTITION LR_BRACKET partitions = uidList? RR_BRACKET)? ((LR_BRACKET columns = fullColumnNameList? RR_BRACKET)? insertStatementValue (AS? uid)? | SET setFirst = updatedElement (COMMA setElements += updatedElement)*) (
        ON DUPLICATE KEY UPDATE duplicatedFirst = updatedElement ( COMMA duplicatedElements += updatedElement)*
    )?
    ;

loadDataStatement
    : LOAD DATA priority = (LOW_PRIORITY | CONCURRENT)? LOCAL? INFILE filename = STRING_LITERAL violation = (REPLACE | IGNORE)? INTO TABLE tableIdentifier (PARTITION LR_BRACKET uidList RR_BRACKET)? (CHARACTER SET charset = charsetName)? (fieldsFormat = (FIELDS | COLUMNS) selectFieldsInto+)? (LINES selectLinesInto+)? (
        IGNORE decimalLiteral linesFormat = (LINES | ROWS)
    )? (LR_BRACKET assignmentField (COMMA assignmentField)* RR_BRACKET)? (SET updatedElement (COMMA updatedElement)*)?
    ;

loadXmlStatement
    : LOAD XML priority = (LOW_PRIORITY | CONCURRENT)? LOCAL? INFILE filename = STRING_LITERAL violation = (REPLACE | IGNORE)? INTO TABLE tableIdentifier (CHARACTER SET charset = charsetName)? (ROWS IDENTIFIED BY LESS_SYMBOL tag = STRING_LITERAL GREATER_SYMBOL)? (IGNORE decimalLiteral linesFormat = (LINES | ROWS))? (
        LR_BRACKET assignmentField (COMMA assignmentField)* RR_BRACKET
    )? (SET updatedElement (COMMA updatedElement)*)?
    ;

replaceStatement
    : REPLACE priority = (LOW_PRIORITY | DELAYED)? INTO? tableIdentifier (PARTITION LR_BRACKET partitions = uidList RR_BRACKET)? ((LR_BRACKET columns = uidList RR_BRACKET)? insertStatementValue | SET setFirst = updatedElement (COMMA setElements += updatedElement)*)
    ;

selectStatement
    : querySpecification lockClause?                                                                                                                                                            # simpleSelect
    | queryExpression lockClause?                                                                                                                                                               # parenthesisSelect
    | (querySpecificationNointo | queryExpressionNointo) unionStatement+ ( UNION unionType = (ALL | DISTINCT)? (querySpecification | queryExpression))? orderByClause? limitClause? lockClause? # unionSelect
    | queryExpressionNointo unionParenthesis+ (UNION unionType = (ALL | DISTINCT)? queryExpression)? orderByClause? limitClause? lockClause?                                                    # unionParenthesisSelect
    | querySpecificationNointo (COMMA lateralStatement)+                                                                                                                                        # withLateralStatement
    ;

updateStatement
    : singleUpdateStatement
    | multipleUpdateStatement
    ;

// https://dev.mysql.com/doc/refman/8.0/en/values.html
valuesStatement
    : VALUES LR_BRACKET expressionsWithDefaults? RR_BRACKET (COMMA LR_BRACKET expressionsWithDefaults? RR_BRACKET)*
    ;

// details

insertStatementValue
    : selectStatement
    | insertFormat = (VALUES | VALUE) LR_BRACKET expressionsWithDefaults? RR_BRACKET ( COMMA LR_BRACKET expressionsWithDefaults? RR_BRACKET)*
    ;

updatedElement
    : fullColumnName EQUAL_SYMBOL (expression | DEFAULT)
    ;

assignmentField
    : uid
    | LOCAL_ID
    ;

lockClause
    : FOR UPDATE
    | LOCK IN SHARE MODE
    ;

//    Detailed DML Statements

singleDeleteStatement
    : DELETE priority = LOW_PRIORITY? QUICK? IGNORE? FROM tableIdentifier (AS? uid)? (PARTITION LR_BRACKET uidList RR_BRACKET)? (WHERE expression)? orderByClause? (LIMIT limitClauseAtom)?
    ;

multipleDeleteStatement
    : DELETE priority = LOW_PRIORITY? QUICK? IGNORE? (tableIdentifier (DOT STAR)? ( COMMA tableIdentifier (DOT STAR)?)* FROM tableSources | FROM tableIdentifier (DOT STAR)? ( COMMA tableIdentifier (DOT STAR)?)* USING tableSources) (WHERE expression)?
    ;

handlerOpenStatement
    : HANDLER tableIdentifier OPEN (AS? uid)?
    ;

handlerReadIndexStatement
    : HANDLER tableIdentifier READ index = uid (comparisonOperator LR_BRACKET constants RR_BRACKET | moveOrder = (FIRST | NEXT | PREV | LAST)) (WHERE expression)? (LIMIT limitClauseAtom)?
    ;

handlerReadStatement
    : HANDLER tableIdentifier READ moveOrder = (FIRST | NEXT) (WHERE expression)? (LIMIT limitClauseAtom)?
    ;

handlerCloseStatement
    : HANDLER tableIdentifier CLOSE
    ;

singleUpdateStatement
    : UPDATE priority = LOW_PRIORITY? IGNORE? tableIdentifier (AS? uid)? SET updatedElement (COMMA updatedElement)* (WHERE expression)? orderByClause? limitClause?
    ;

multipleUpdateStatement
    : UPDATE priority = LOW_PRIORITY? IGNORE? tableIdentifiers SET updatedElement (COMMA updatedElement)* (WHERE expression)?
    ;

// details

orderByClause
    : ORDER BY orderByExpression (COMMA orderByExpression)*
    ;

orderByExpression
    : expression order = (ASC | DESC)?
    ;

tableSources
    : tableSource (COMMA tableSource)*
    ;

tableSource
    : tableSourceItem joinPart*                       # tableSourceBase
    | LR_BRACKET tableSourceItem joinPart* RR_BRACKET # tableSourceNested
    | jsonTable                                       # tableJson
    ;

tableSourceItem
    : tableIdentifier (PARTITION LR_BRACKET uidList RR_BRACKET)? (AS? alias = uid)? (indexHint (COMMA indexHint)*)? # atomTableItem
    | (LR_BRACKET parenthesisSubquery = selectStatement RR_BRACKET) AS? alias = uid                                 # subqueryTableItem
    | LR_BRACKET tableSources RR_BRACKET                                                                            # tableSourcesItem
    ;

indexHint
    : indexHintAction = (USE | IGNORE | FORCE) keyFormat = (INDEX | KEY) (FOR indexHintType)? LR_BRACKET indexNameList RR_BRACKET
    ;

indexHintType
    : JOIN
    | ORDER BY
    | GROUP BY
    ;

joinPart
    : (INNER | CROSS)? JOIN LATERAL? tableSourceItem joinSpec*      # innerJoin
    | STRAIGHT_JOIN tableSourceItem (ON expression)*                # straightJoin
    | (LEFT | RIGHT) OUTER? JOIN LATERAL? tableSourceItem joinSpec* # outerJoin
    | NATURAL ((LEFT | RIGHT) OUTER?)? JOIN tableSourceItem         # naturalJoin
    ;

joinSpec
    : (ON expression)
    | USING LR_BRACKET uidList RR_BRACKET
    ;

//    Select Statement's Details

queryExpression
    : LR_BRACKET querySpecification RR_BRACKET
    | LR_BRACKET queryExpression RR_BRACKET
    ;

queryExpressionNointo
    : LR_BRACKET querySpecificationNointo RR_BRACKET
    | LR_BRACKET queryExpressionNointo RR_BRACKET
    ;

querySpecification
    : SELECT selectSpec* selectElements selectIntoExpression? fromClause groupByClause? havingClause? windowClause? orderByClause? limitClause?
    | SELECT selectSpec* selectElements fromClause groupByClause? havingClause? windowClause? orderByClause? limitClause? selectIntoExpression?
    ;

querySpecificationNointo
    : SELECT selectSpec* selectElements fromClause groupByClause? havingClause? windowClause? orderByClause? limitClause? unionStatement?
    ;

unionParenthesis
    : UNION unionType = (ALL | DISTINCT)? queryExpressionNointo
    ;

unionStatement
    : UNION unionType = (ALL | DISTINCT)? (querySpecificationNointo | queryExpressionNointo)
    ;

lateralStatement
    : LATERAL (querySpecificationNointo | queryExpressionNointo | (LR_BRACKET (querySpecificationNointo | queryExpressionNointo) RR_BRACKET (AS? uid)?))
    ;

// JSON

// https://dev.mysql.com/doc/refman/8.0/en/json-table-functions.html
jsonTable
    : JSON_TABLE LR_BRACKET STRING_LITERAL COMMA STRING_LITERAL COLUMNS LR_BRACKET jsonColumnList RR_BRACKET RR_BRACKET (AS? uid)?
    ;

jsonColumnList
    : jsonColumn (COMMA jsonColumn)*
    ;

jsonColumn
    : fullColumnName (FOR ORDINALITY | dataType (PATH STRING_LITERAL jsonOnEmpty? jsonOnError? | EXISTS PATH STRING_LITERAL))
    | NESTED PATH? STRING_LITERAL COLUMNS LR_BRACKET jsonColumnList RR_BRACKET
    ;

jsonOnEmpty
    : (NULL_LITERAL | ERROR | DEFAULT defaultValue) ON EMPTY
    ;

jsonOnError
    : (NULL_LITERAL | ERROR | DEFAULT defaultValue) ON ERROR
    ;

// details

selectSpec
    : (ALL | DISTINCT | DISTINCTROW)
    | HIGH_PRIORITY
    | STRAIGHT_JOIN
    | SQL_SMALL_RESULT
    | SQL_BIG_RESULT
    | SQL_BUFFER_RESULT
    | (SQL_CACHE | SQL_NO_CACHE)
    | SQL_CALC_FOUND_ROWS
    ;

selectElements
    : (star = STAR | selectElement) (COMMA selectElement)*
    ;

selectElementAlias
    : AS? uid
    ;

selectElement
    : fullId DOT STAR                                       # selectStarElement
    | fullColumnName selectElementAlias?                    # selectColumnElement
    | functionCall selectElementAlias?                      # selectFunctionElement
    | (LOCAL_ID VAR_ASSIGN)? expression selectElementAlias? # selectExpressionElement
    ;

selectIntoExpression
    : INTO assignmentField (COMMA assignmentField)*                                                                                                                      # selectIntoVariables
    | INTO DUMPFILE STRING_LITERAL                                                                                                                                       # selectIntoDumpFile
    | ( INTO OUTFILE filename = STRING_LITERAL (CHARACTER SET charset = charsetName)? ( fieldsFormat = (FIELDS | COLUMNS) selectFieldsInto+)? (LINES selectLinesInto+)?) # selectIntoTextFile
    ;

selectFieldsInto
    : TERMINATED BY terminationField = STRING_LITERAL
    | OPTIONALLY? ENCLOSED BY enclosion = STRING_LITERAL
    | ESCAPED BY escaping = STRING_LITERAL
    ;

selectLinesInto
    : STARTING BY starting = STRING_LITERAL
    | TERMINATED BY terminationLine = STRING_LITERAL
    ;

fromClause
    : (FROM tableSources)? (WHERE whereExpr = expression)?
    ;

groupByClause
    : GROUP BY groupByItem (COMMA groupByItem)* (WITH ROLLUP)?
    ;

havingClause
    : HAVING havingExpr = expression
    ;

windowClause
    : WINDOW windowName AS LR_BRACKET windowSpec RR_BRACKET (COMMA windowName AS LR_BRACKET windowSpec RR_BRACKET)*
    ;

groupByItem
    : expression order = (ASC | DESC)?
    ;

limitClause
    : LIMIT ((offset = limitClauseAtom COMMA)? limit = limitClauseAtom | limit = limitClauseAtom OFFSET offset = limitClauseAtom)
    ;

limitClauseAtom
    : decimalLiteral
    | mysqlVariable
    | simpleId
    ;

// Transaction's Statements

startTransaction
    : START TRANSACTION (transactionMode (COMMA transactionMode)*)?
    ;

beginWork
    : BEGIN WORK?
    ;

commitWork
    : COMMIT WORK? (AND nochain = NO? CHAIN)? (norelease = NO? RELEASE)?
    ;

rollbackWork
    : ROLLBACK WORK? (AND nochain = NO? CHAIN)? (norelease = NO? RELEASE)?
    ;

savepointStatement
    : SAVEPOINT uid
    ;

rollbackStatement
    : ROLLBACK WORK? TO SAVEPOINT? uid
    ;

releaseStatement
    : RELEASE SAVEPOINT uid
    ;

lockTables
    : LOCK (TABLE | TABLES) lockTableElement (COMMA lockTableElement)* waitNowaitClause?
    ;

unlockTables
    : UNLOCK TABLES
    ;

// details

setAutocommitStatement
    : SET AUTOCOMMIT EQUAL_SYMBOL autocommitValue = (ZERO_DECIMAL | ONE_DECIMAL)
    ;

setTransactionStatement
    : SET transactionContext = (GLOBAL | SESSION)? TRANSACTION transactionOption (COMMA transactionOption)*
    ;

transactionMode
    : WITH CONSISTENT SNAPSHOT
    | READ WRITE
    | READ ONLY
    ;

lockTableElement
    : tableIdentifier (AS? uid)? lockAction
    ;

lockAction
    : READ LOCAL?
    | LOW_PRIORITY? WRITE
    ;

transactionOption
    : ISOLATION LEVEL transactionLevel
    | READ WRITE
    | READ ONLY
    ;

transactionLevel
    : REPEATABLE READ
    | READ COMMITTED
    | READ UNCOMMITTED
    | SERIALIZABLE
    ;

// Replication's Statements

//    Base Replication

changeMaster
    : CHANGE MASTER TO masterOption (COMMA masterOption)* channelOption?
    ;

changeReplicationFilter
    : CHANGE REPLICATION FILTER replicationFilter (COMMA replicationFilter)*
    ;

purgeBinaryLogs
    : PURGE purgeFormat = (BINARY | MASTER) LOGS (TO fileName = STRING_LITERAL | BEFORE timeValue = STRING_LITERAL)
    ;

resetMaster
    : RESET MASTER
    ;

resetSlave
    : RESET SLAVE ALL? channelOption?
    ;

startSlave
    : START SLAVE (threadType (COMMA threadType)*)? (UNTIL untilOption)? connectionOption* channelOption?
    ;

stopSlave
    : STOP SLAVE (threadType (COMMA threadType)*)?
    ;

startGroupReplication
    : START GROUP_REPLICATION
    ;

stopGroupReplication
    : STOP GROUP_REPLICATION
    ;

// details

masterOption
    : stringMasterOption EQUAL_SYMBOL STRING_LITERAL                           # masterStringOption
    | decimalMasterOption EQUAL_SYMBOL decimalLiteral                          # masterDecimalOption
    | boolMasterOption EQUAL_SYMBOL boolVal = (ZERO_DECIMAL | ONE_DECIMAL)     # masterBoolOption
    | MASTER_HEARTBEAT_PERIOD EQUAL_SYMBOL REAL_LITERAL                        # masterRealOption
    | IGNORE_SERVER_IDS EQUAL_SYMBOL LR_BRACKET (uid (COMMA uid)*)? RR_BRACKET # masterUidListOption
    ;

stringMasterOption
    : MASTER_BIND
    | MASTER_HOST
    | MASTER_USER
    | MASTER_PASSWORD
    | MASTER_LOG_FILE
    | RELAY_LOG_FILE
    | MASTER_SSL_CA
    | MASTER_SSL_CAPATH
    | MASTER_SSL_CERT
    | MASTER_SSL_CRL
    | MASTER_SSL_CRLPATH
    | MASTER_SSL_KEY
    | MASTER_SSL_CIPHER
    | MASTER_TLS_VERSION
    ;

decimalMasterOption
    : MASTER_PORT
    | MASTER_CONNECT_RETRY
    | MASTER_RETRY_COUNT
    | MASTER_DELAY
    | MASTER_LOG_POS
    | RELAY_LOG_POS
    ;

boolMasterOption
    : MASTER_AUTO_POSITION
    | MASTER_SSL
    | MASTER_SSL_VERIFY_SERVER_CERT
    ;

channelOption
    : FOR CHANNEL STRING_LITERAL
    ;

replicationFilter
    : REPLICATE_DO_DB EQUAL_SYMBOL LR_BRACKET uidList RR_BRACKET                           # doDbReplication
    | REPLICATE_IGNORE_DB EQUAL_SYMBOL LR_BRACKET uidList RR_BRACKET                       # ignoreDbReplication
    | REPLICATE_DO_TABLE EQUAL_SYMBOL LR_BRACKET tables RR_BRACKET                         # doTableReplication
    | REPLICATE_IGNORE_TABLE EQUAL_SYMBOL LR_BRACKET tables RR_BRACKET                     # ignoreTableReplication
    | REPLICATE_WILD_DO_TABLE EQUAL_SYMBOL LR_BRACKET simpleStrings RR_BRACKET             # wildDoTableReplication
    | REPLICATE_WILD_IGNORE_TABLE EQUAL_SYMBOL LR_BRACKET simpleStrings RR_BRACKET         # wildIgnoreTableReplication
    | REPLICATE_REWRITE_DB EQUAL_SYMBOL LR_BRACKET tablePair (COMMA tablePair)* RR_BRACKET # rewriteDbReplication
    ;

tablePair
    : LR_BRACKET firstTable = tableIdentifier COMMA secondTable = tableIdentifier RR_BRACKET
    ;

threadType
    : IO_THREAD
    | SQL_THREAD
    ;

untilOption
    : gtids = (SQL_BEFORE_GTIDS | SQL_AFTER_GTIDS) EQUAL_SYMBOL gtuidSet                           # gtidsUntilOption
    | MASTER_LOG_FILE EQUAL_SYMBOL STRING_LITERAL COMMA MASTER_LOG_POS EQUAL_SYMBOL decimalLiteral # masterLogUntilOption
    | RELAY_LOG_FILE EQUAL_SYMBOL STRING_LITERAL COMMA RELAY_LOG_POS EQUAL_SYMBOL decimalLiteral   # relayLogUntilOption
    | SQL_AFTER_MTS_GAPS                                                                           # sqlGapsUntilOption
    ;

connectionOption
    : USER EQUAL_SYMBOL conOptUser = STRING_LITERAL            # userConnectionOption
    | PASSWORD EQUAL_SYMBOL conOptPassword = STRING_LITERAL    # passwordConnectionOption
    | DEFAULT_AUTH EQUAL_SYMBOL conOptDefAuth = STRING_LITERAL # defaultAuthConnectionOption
    | PLUGIN_DIR EQUAL_SYMBOL conOptPluginDir = STRING_LITERAL # pluginDirConnectionOption
    ;

gtuidSet
    : uuidSet (COMMA uuidSet)*
    | STRING_LITERAL
    ;

//    XA Transactions

xaStartTransaction
    : XA xaStart = (START | BEGIN) xid xaAction = (JOIN | RESUME)?
    ;

xaEndTransaction
    : XA END xid (SUSPEND (FOR MIGRATE)?)?
    ;

xaPrepareStatement
    : XA PREPARE xid
    ;

xaCommitWork
    : XA COMMIT xid (ONE PHASE)?
    ;

xaRollbackWork
    : XA ROLLBACK xid
    ;

xaRecoverWork
    : XA RECOVER (CONVERT xid)?
    ;

// Prepared Statements

prepareStatement
    : PREPARE uid FROM (query = STRING_LITERAL | variable = LOCAL_ID)
    ;

executeStatement
    : EXECUTE uid (USING userVariables)?
    ;

deallocatePrepare
    : dropFormat = (DEALLOCATE | DROP) PREPARE uid
    ;

// Compound Statements

routineBody
    : blockStatement
    | statement
    ;

// details

blockStatement
    : (uid COLON_SYMB)? BEGIN (declareVariable SEMI)* (declareCondition SEMI)* (declareCursor SEMI)* (declareHandler SEMI)* procedureSqlStatement* END uid?
    ;

caseStatement
    : CASE (uid | expression)? caseAlternative+ (ELSE procedureSqlStatement+)? END CASE
    ;

ifStatement
    : IF expression THEN thenStatements += procedureSqlStatement+ elifAlternative* (ELSE elseStatements += procedureSqlStatement+)? END IF
    ;

iterateStatement
    : ITERATE uid
    ;

leaveStatement
    : LEAVE uid
    ;

loopStatement
    : (uid COLON_SYMB)? LOOP procedureSqlStatement+ END LOOP uid?
    ;

repeatStatement
    : (uid COLON_SYMB)? REPEAT procedureSqlStatement+ UNTIL expression END REPEAT uid?
    ;

returnStatement
    : RETURN expression
    ;

whileStatement
    : (uid COLON_SYMB)? WHILE expression DO procedureSqlStatement+ END WHILE uid?
    ;

cursorStatement
    : CLOSE uid                            # CloseCursor
    | FETCH (NEXT? FROM)? uid INTO uidList # FetchCursor
    | OPEN uid                             # OpenCursor
    ;

// details

declareVariable
    : DECLARE uidList dataType (DEFAULT expression)?
    ;

declareCondition
    : DECLARE uid CONDITION FOR (decimalLiteral | SQLSTATE VALUE? STRING_LITERAL)
    ;

declareCursor
    : DECLARE uid CURSOR FOR selectStatement
    ;

declareHandler
    : DECLARE handlerAction = (CONTINUE | EXIT | UNDO) HANDLER FOR handlerConditionValue (COMMA handlerConditionValue)* routineBody
    ;

handlerConditionValue
    : decimalLiteral                 # handlerConditionCode
    | SQLSTATE VALUE? STRING_LITERAL # handlerConditionState
    | uid                            # handlerConditionName
    | SQLWARNING                     # handlerConditionWarning
    | NOT FOUND                      # handlerConditionNotfound
    | SQLEXCEPTION                   # handlerConditionException
    ;

procedureSqlStatement
    : (compoundStatement | statement) SEMI
    ;

caseAlternative
    : WHEN (constant | expression) THEN procedureSqlStatement+
    ;

elifAlternative
    : ELSEIF expression THEN procedureSqlStatement+
    ;

// Administration Statements

//    Account management statements

alterUser
    : ALTER USER userSpecification (COMMA userSpecification)*                                                                                                                                                                      # alterUserMysqlV56
    | ALTER USER ifExists? newUserAuthOptionList (REQUIRE (tlsNone = NONE | tlsOption (AND? tlsOption)*))? (WITH userResourceOption+)? (userPasswordOption | userLockOption)* (COMMENT STRING_LITERAL | ATTRIBUTE STRING_LITERAL)? # alterUserMysqlV80
    | ALTER USER ifExists? userName DEFAULT ROLE roleOption                                                                                                                                                                        # alterUserMysqlV80
    ;

createUser
    : CREATE USER newUserAuthOptionList                                                                                                                                                                                                                           # createUserMysqlV56
    | CREATE USER ifNotExists? newUserAuthOptionList (DEFAULT ROLE roleOption)? (REQUIRE (tlsNone = NONE | tlsOption (AND? tlsOption)*))? (WITH userResourceOption+)? (userPasswordOption | userLockOption)* (COMMENT STRING_LITERAL | ATTRIBUTE STRING_LITERAL)? # createUserMysqlV80
    ;

dropUser
    : DROP USER ifExists? userNameList
    ;

grantStatement
    : GRANT privelegeClause (COMMA privelegeClause)* ON (TABLE | FUNCTION | PROCEDURE)? privilegeLevel TO userOrRoleNameList (REQUIRE (tlsNone = NONE | tlsOption (AND? tlsOption)*))? (WITH (GRANT OPTION | userResourceOption)*)? (AS userName WITH ROLE roleOption)?
    | GRANT roleNameList TO userOrRoleNameList (WITH ADMIN OPTION)?
    ;

roleOption
    : DEFAULT
    | NONE
    | ALL (EXCEPT roleNameList)?
    | roleNameList
    ;

grantProxy
    : GRANT PROXY ON fromFirst = userName TO toFirst = userName (COMMA toOther += userName)* (WITH GRANT OPTION)?
    ;

renameUser
    : RENAME USER renameUserClause (COMMA renameUserClause)*
    ;

revokeStatement
    : REVOKE privelegeClause (COMMA privelegeClause)* ON privilegeObject = (TABLE | FUNCTION | PROCEDURE)? privilegeLevel FROM userOrRoleNameList # detailedPrivilegeRevoke
    | REVOKE ALL PRIVILEGES? COMMA GRANT OPTION FROM userOrRoleNameList                                                                           # shortPrivilegeRevoke
    | REVOKE roleNameList FROM userOrRoleNameList*                                                                                                # roleRevoke
    ;

revokeProxy
    : REVOKE PROXY ON onUser = userName FROM fromFirst = userName (COMMA fromOther += userName)*
    ;

setPasswordStatement
    : SET PASSWORD (FOR userName)? EQUAL_SYMBOL (passwordFunctionClause | STRING_LITERAL)
    ;

// details

userSpecification
    : userName userPasswordOption
    ;

newUserAuthOptionList
    : newUserAuthOption (COMMA newUserAuthOption)*
    ;

newUserAuthOption
    : newUserName IDENTIFIED BY PASSWORD hashed = STRING_LITERAL # hashAuthOption
    | newUserName IDENTIFIED BY RANDOM PASSWORD authOptionClause # randomAuthOption
    | newUserName IDENTIFIED BY STRING_LITERAL authOptionClause  # stringAuthOption
    | newUserName IDENTIFIED WITH authenticationRule             # moduleAuthOption
    | newUserName                                                # simpleAuthOption
    ;

authOptionClause
    : (REPLACE STRING_LITERAL)? (RETAIN CURRENT PASSWORD)?
    ;

authenticationRule
    : authPlugin ((BY | USING | AS) (STRING_LITERAL | RANDOM PASSWORD) authOptionClause)? # module
    | authPlugin USING passwordFunctionClause                                             # passwordModuleOption
    ;

tlsOption
    : SSL
    | X509
    | CIPHER STRING_LITERAL
    | ISSUER STRING_LITERAL
    | SUBJECT STRING_LITERAL
    ;

userResourceOption
    : MAX_QUERIES_PER_HOUR decimalLiteral
    | MAX_UPDATES_PER_HOUR decimalLiteral
    | MAX_CONNECTIONS_PER_HOUR decimalLiteral
    | MAX_USER_CONNECTIONS decimalLiteral
    ;

userPasswordOption
    : PASSWORD EXPIRE (expireType = DEFAULT | expireType = NEVER | expireType = INTERVAL decimalLiteral DAY)?
    | PASSWORD HISTORY (DEFAULT | decimalLiteral)
    | PASSWORD REUSE INTERVAL (DEFAULT | decimalLiteral DAY)
    | PASSWORD REQUIRE CURRENT (OPTIONAL | DEFAULT)?
    | FAILED_LOGIN_ATTEMPTS decimalLiteral
    | PASSWORD_LOCK_TIME (decimalLiteral | UNBOUNDED)
    ;

userLockOption
    : ACCOUNT lockType = (LOCK | UNLOCK)
    ;

privelegeClause
    : privilege (LR_BRACKET uidList RR_BRACKET)?
    ;

privilege
    : ALL PRIVILEGES?
    | ALTER ROUTINE?
    | CREATE (TEMPORARY TABLES | ROUTINE | VIEW | USER | TABLESPACE | ROLE)?
    | DELETE
    | DROP (ROLE)?
    | EVENT
    | EXECUTE
    | FILE
    | GRANT OPTION
    | INDEX
    | INSERT
    | LOCK TABLES
    | PROCESS
    | PROXY
    | REFERENCES
    | RELOAD
    | REPLICATION (CLIENT | SLAVE)
    | SELECT
    | SHOW (VIEW | DATABASES)
    | SHUTDOWN
    | SUPER
    | TRIGGER
    | UPDATE
    | USAGE
    | APPLICATION_PASSWORD_ADMIN
    | AUDIT_ABORT_EXEMPT
    | AUDIT_ADMIN
    | AUTHENTICATION_POLICY_ADMIN
    | BACKUP_ADMIN
    | BINLOG_ADMIN
    | BINLOG_ENCRYPTION_ADMIN
    | CLONE_ADMIN
    | CONNECTION_ADMIN
    | ENCRYPTION_KEY_ADMIN
    | FIREWALL_ADMIN
    | FIREWALL_EXEMPT
    | FIREWALL_USER
    | FLUSH_OPTIMIZER_COSTS
    | FLUSH_STATUS
    | FLUSH_TABLES
    | FLUSH_USER_RESOURCES
    | GROUP_REPLICATION_ADMIN
    | INNODB_REDO_LOG_ARCHIVE
    | INNODB_REDO_LOG_ENABLE
    | NDB_STORED_USER
    | PASSWORDLESS_USER_ADMIN
    | PERSIST_RO_VARIABLES_ADMIN
    | REPLICATION_APPLIER
    | REPLICATION_SLAVE_ADMIN
    | RESOURCE_GROUP_ADMIN
    | RESOURCE_GROUP_USER
    | ROLE_ADMIN
    | SERVICE_CONNECTION_ADMIN
    | SESSION_VARIABLES_ADMIN
    | SET_USER_ID
    | SKIP_QUERY_REWRITE
    | SHOW_ROUTINE
    | SYSTEM_USER
    | SYSTEM_VARIABLES_ADMIN
    | TABLE_ENCRYPTION_ADMIN
    | TP_CONNECTION_ADMIN
    | VERSION_TOKEN_ADMIN
    | XA_RECOVER_ADMIN
    // MySQL on Amazon RDS
    | LOAD FROM S3
    | SELECT INTO S3
    | INVOKE LAMBDA
    ;

privilegeLevel
    : STAR          # currentSchemaPriviLevel
    | STAR DOT STAR # globalPrivLevel
    | uid DOT STAR  # definiteSchemaPrivLevel
    | uid DOT uid   # definiteFullTablePrivLevel
    | uid dottedId  # definiteFullTablePrivLevel2
    | uid           # definiteTablePrivLevel
    ;

renameUserClause
    : userName TO newUserName
    ;

//    Table maintenance statements

analyzeTable
    : ANALYZE actionOption = (NO_WRITE_TO_BINLOG | LOCAL)? (TABLE | TABLES) tables (UPDATE HISTOGRAM ON fullColumnName (COMMA fullColumnName)* (WITH decimalLiteral BUCKETS)?)? (DROP HISTOGRAM ON fullColumnName (COMMA fullColumnName)*)?
    ;

checkTable
    : CHECK TABLE tables checkTableOption*
    ;

checksumTable
    : CHECKSUM TABLE tables actionOption = (QUICK | EXTENDED)?
    ;

optimizeTable
    : OPTIMIZE actionOption = (NO_WRITE_TO_BINLOG | LOCAL)? (TABLE | TABLES) tables
    ;

repairTable
    : REPAIR actionOption = (NO_WRITE_TO_BINLOG | LOCAL)? TABLE tables QUICK? EXTENDED? USE_FRM?
    ;

// details

checkTableOption
    : FOR UPGRADE
    | QUICK
    | FAST
    | MEDIUM
    | EXTENDED
    | CHANGED
    ;

//    Plugin and udf statements

createUdfunction
    : CREATE AGGREGATE? FUNCTION ifNotExists? uid RETURNS returnType = (STRING | INTEGER | REAL | DECIMAL) SONAME STRING_LITERAL
    ;

installPlugin
    : INSTALL PLUGIN uid SONAME STRING_LITERAL
    ;

uninstallPlugin
    : UNINSTALL PLUGIN uid
    ;

//    Set and show statements

setStatement
    : SET variableClause (EQUAL_SYMBOL | VAR_ASSIGN) (expression | ON) (COMMA variableClause (EQUAL_SYMBOL | VAR_ASSIGN) (expression | ON))* # setVariable
    | SET charSet (charsetName | DEFAULT)                                                                                                    # setCharset
    | SET NAMES (charsetName (COLLATE collationName)? | DEFAULT)                                                                             # setNames
    | setPasswordStatement                                                                                                                   # setPassword
    | setTransactionStatement                                                                                                                # setTransaction
    | setAutocommitStatement                                                                                                                 # setAutocommit
    | SET fullId (EQUAL_SYMBOL | VAR_ASSIGN) expression (COMMA fullId (EQUAL_SYMBOL | VAR_ASSIGN) expression)*                               # setNewValueInsideTrigger
    ;

showStatement
    : SHOW logFormat = (BINARY | MASTER) LOGS                                                                                                                                                # showMasterLogs
    | SHOW logFormat = (BINLOG | RELAYLOG) EVENTS (IN filename = STRING_LITERAL)? ( FROM fromPosition = decimalLiteral)? (LIMIT (offset = decimalLiteral COMMA)? rowCount = decimalLiteral)? # showLogEvents
    | SHOW showCommonEntity showFilter?                                                                                                                                                      # showObjectFilter
    | SHOW FULL? columnsFormat = (COLUMNS | FIELDS) tableFormat = (FROM | IN) tableIdentifier ( schemaFormat = (FROM | IN) uid)? showFilter?                                                 # showColumns
    | SHOW CREATE schemaFormat = (DATABASE | SCHEMA) ifNotExists? databaseName                                                                                                               # showCreateDb
    | SHOW CREATE namedEntity = (EVENT | FUNCTION | PROCEDURE) fullId                                                                                                                        # showCreateFullIdObject
    | SHOW CREATE (TABLE | VIEW) tableIdentifier                                                                                                                                             # showCreateTableOrView
    | SHOW CREATE TRIGGER triggerName                                                                                                                                                        # showCreateTrigger
    | SHOW CREATE USER userName                                                                                                                                                              # showCreateUser
    | SHOW ENGINE engineName engineOption = (STATUS | MUTEX)                                                                                                                                 # showEngine
    | SHOW showGlobalInfoClause                                                                                                                                                              # showGlobalInfo
    | SHOW errorFormat = (ERRORS | WARNINGS) ( LIMIT (offset = decimalLiteral COMMA)? rowCount = decimalLiteral)?                                                                            # showErrors
    | SHOW COUNT LR_BRACKET STAR RR_BRACKET errorFormat = (ERRORS | WARNINGS)                                                                                                                # showCountErrors
    | SHOW showSchemaEntity (schemaFormat = (FROM | IN) uid)? showFilter?                                                                                                                    # showSchemaFilter
    | SHOW routine = (FUNCTION | PROCEDURE) CODE fullId                                                                                                                                      # showRoutine
    | SHOW GRANTS (FOR userName)?                                                                                                                                                            # showGrants
    | SHOW indexFormat = (INDEX | INDEXES | KEYS) tableFormat = (FROM | IN) tableIdentifier ( schemaFormat = (FROM | IN) uid)? (WHERE expression)?                                           # showIndexes
    | SHOW OPEN TABLES (schemaFormat = (FROM | IN) uid)? showFilter?                                                                                                                         # showOpenTables
    | SHOW PROFILE showProfileType (COMMA showProfileType)* (FOR QUERY queryCount = decimalLiteral)? ( LIMIT (offset = decimalLiteral COMMA)? rowCount = decimalLiteral)                     # showProfile
    | SHOW SLAVE STATUS (FOR CHANNEL STRING_LITERAL)?                                                                                                                                        # showSlaveStatus
    ;

// details

variableClause
    : LOCAL_ID
    | GLOBAL_ID
    | ( (AT_SIGN AT_SIGN)? (GLOBAL | SESSION | LOCAL))? uid
    ;

showCommonEntity
    : CHARACTER SET
    | COLLATION
    | DATABASES
    | SCHEMAS
    | FUNCTION STATUS
    | PROCEDURE STATUS
    | (GLOBAL | SESSION)? (STATUS | VARIABLES)
    ;

showFilter
    : LIKE STRING_LITERAL
    | WHERE expression
    ;

showGlobalInfoClause
    : STORAGE? ENGINES
    | MASTER STATUS
    | PLUGINS
    | PRIVILEGES
    | FULL? PROCESSLIST
    | PROFILES
    | SLAVE HOSTS
    | AUTHORS
    | CONTRIBUTORS
    ;

showSchemaEntity
    : EVENTS
    | TABLE STATUS
    | FULL? TABLES
    | TRIGGERS
    ;

showProfileType
    : ALL
    | BLOCK IO
    | CONTEXT SWITCHES
    | CPU
    | IPC
    | MEMORY
    | PAGE FAULTS
    | SOURCE
    | SWAPS
    ;

//    Other administrative statements

binlogStatement
    : BINLOG STRING_LITERAL
    ;

cacheIndexStatement
    : CACHE INDEX tableIndexes (COMMA tableIndexes)* (PARTITION LR_BRACKET (uidList | ALL) RR_BRACKET)? IN schema = uid
    ;

flushStatement
    : FLUSH flushFormat = (NO_WRITE_TO_BINLOG | LOCAL)? flushOption (COMMA flushOption)*
    ;

killStatement
    : KILL connectionFormat = (CONNECTION | QUERY)? expression
    ;

loadIndexIntoCache
    : LOAD INDEX INTO CACHE loadedTableIndexes (COMMA loadedTableIndexes)*
    ;

// remark reset (maser | slave) describe in replication's
//  statements section
resetStatement
    : RESET QUERY CACHE
    ;

shutdownStatement
    : SHUTDOWN
    ;

// details

tableIndexes
    : tableIdentifier (indexFormat = (INDEX | KEY)? LR_BRACKET indexNameList RR_BRACKET)?
    ;

flushOption
    : (DES_KEY_FILE | HOSTS | ( BINARY | ENGINE | ERROR | GENERAL | RELAY | SLOW)? LOGS | OPTIMIZER_COSTS | PRIVILEGES | QUERY CACHE | STATUS | USER_RESOURCES | TABLES (WITH READ LOCK)?) # simpleFlushOption
    | RELAY LOGS channelOption?                                                                                                                                                            # channelFlushOption
    | (TABLE | TABLES) tables? flushTableOption?                                                                                                                                           # tableFlushOption
    ;

flushTableOption
    : WITH READ LOCK
    | FOR EXPORT
    ;

loadedTableIndexes
    : tableIdentifier (PARTITION LR_BRACKET (partitionList = uidList | ALL) RR_BRACKET)? (indexFormat = (INDEX | KEY)? LR_BRACKET indexNameList RR_BRACKET)? (IGNORE LEAVES)?
    ;

// Utility Statements

simpleDescribeStatement
    : command = (EXPLAIN | DESCRIBE | DESC) tableIdentifier (column = uid | pattern = STRING_LITERAL)?
    ;

fullDescribeStatement
    : command = (EXPLAIN | DESCRIBE | DESC) (formatType = (EXTENDED | PARTITIONS | FORMAT) EQUAL_SYMBOL formatValue = (TRADITIONAL | JSON))? describeObjectClause
    ;

helpStatement
    : HELP STRING_LITERAL
    ;

useStatement
    : USE uid
    ;

signalStatement
    : SIGNAL (( SQLSTATE VALUE? stringLiteral) | ID | REVERSE_QUOTE_ID) (SET signalConditionInformation ( COMMA signalConditionInformation)*)?
    ;

resignalStatement
    : RESIGNAL (( SQLSTATE VALUE? stringLiteral) | ID | REVERSE_QUOTE_ID)? (SET signalConditionInformation ( COMMA signalConditionInformation)*)?
    ;

signalConditionInformation
    : (CLASS_ORIGIN | SUBCLASS_ORIGIN | MESSAGE_TEXT | MYSQL_ERRNO | CONSTRAINT_CATALOG | CONSTRAINT_SCHEMA | CONSTRAINT_NAME | CATALOG_NAME | SCHEMA_NAME | TABLE_NAME | COLUMN_NAME | CURSOR_NAME) EQUAL_SYMBOL (stringLiteral | DECIMAL_LITERAL | mysqlVariable | simpleId)
    ;

withStatement
    : WITH RECURSIVE? commonTableExpressions (COMMA commonTableExpressions)*
    ;

tableStatement
    : TABLE tableIdentifier orderByClause? limitClause?
    ;

diagnosticsStatement
    : GET (CURRENT | STACKED)? DIAGNOSTICS (
        (variableClause EQUAL_SYMBOL ( NUMBER | ROW_COUNT) ( COMMA variableClause EQUAL_SYMBOL ( NUMBER | ROW_COUNT))*)
        | ( CONDITION (decimalLiteral | variableClause) variableClause EQUAL_SYMBOL diagnosticsConditionInformationName ( COMMA variableClause EQUAL_SYMBOL diagnosticsConditionInformationName)*)
    )
    ;

diagnosticsConditionInformationName
    : CLASS_ORIGIN
    | SUBCLASS_ORIGIN
    | RETURNED_SQLSTATE
    | MESSAGE_TEXT
    | MYSQL_ERRNO
    | CONSTRAINT_CATALOG
    | CONSTRAINT_SCHEMA
    | CONSTRAINT_NAME
    | CATALOG_NAME
    | SCHEMA_NAME
    | TABLE_NAME
    | COLUMN_NAME
    | CURSOR_NAME
    ;

// details

describeObjectClause
    : (selectStatement | deleteStatement | insertStatement | replaceStatement | updateStatement) # describeStatements
    | FOR CONNECTION uid                                                                         # describeConnection
    ;

// Common Clauses

//    DB Objects

fullId
    : uid (DOT_ID | DOT uid)?
    ;

tableName
    : uid
    ;

tableNameWithDotPrefix
    : DOT_ID
    ;

tableIdentifier
    : databaseName tableNameWithDotPrefix
    | (databaseName DOT)? tableName
    ;

tableIdentifiers
    : tableIdentifier (COMMA tableIdentifier)*
    ;

userOrRoleName
    : userName
    | roleName
    ;

userOrRoleNameList
    : userOrRoleName (COMMA userOrRoleName)*
    ;

newRoleNameList
    : newRoleName (COMMA newRoleName)*
    ;

newRoleName
    : uid
    ;

roleNameList
    : roleName (COMMA roleName)*
    ;

roleName
    : newRoleName
    ;

fullColumnName
    : uid (dottedId dottedId?)?
    | .? dottedId dottedId?
    ;

databaseName
    : uid
    ;

indexName
    : uid
    ;

constraintName
    : uid
    ;

triggerName
    : fullId
    ;

indexNameList
    : indexName (COMMA indexName)*
    ;

indexColumnName
    : ((uid | STRING_LITERAL) (LR_BRACKET decimalLiteral RR_BRACKET)? | expression) sortType = (ASC | DESC)?
    ;

simpleUserName
    : STRING_LITERAL
    | ID
    | ADMIN
    | keywordsCanBeId
    ;

hostName
    : (LOCAL_ID | HOST_IP_ADDRESS | AT_SIGN)
    ;

userNameList
    : userName (COMMA userName)*
    ;

newUserName
    : simpleUserName
    | simpleUserName hostName
    | currentUserExpression
    ;

userName
    : newUserName
    ;

mysqlVariable
    : LOCAL_ID
    | GLOBAL_ID
    ;

charsetName
    : BINARY
    | charsetNameBase
    | STRING_LITERAL
    | CHARSET_REVERSE_QOUTE_STRING
    ;

collationName
    : uid
    | STRING_LITERAL
    ;

engineName
    : engineNameBase
    | ID
    | STRING_LITERAL
    ;

engineNameBase
    : ARCHIVE
    | BLACKHOLE
    | CONNECT
    | CSV
    | FEDERATED
    | INNODB
    | MEMORY
    | MRG_MYISAM
    | MYISAM
    | NDB
    | NDBCLUSTER
    | PERFORMANCE_SCHEMA
    | TOKUDB
    ;

uuidSet
    : decimalLiteral MINUS decimalLiteral MINUS decimalLiteral MINUS decimalLiteral MINUS decimalLiteral (COLON_SYMB decimalLiteral MINUS decimalLiteral)+
    ;

xid
    : globalTableUid = xuidStringId (COMMA qualifier = xuidStringId (COMMA idFormat = decimalLiteral)?)?
    ;

xuidStringId
    : STRING_LITERAL
    | BIT_STRING
    | HEXADECIMAL_LITERAL+
    ;

authPlugin
    : uid
    | STRING_LITERAL
    ;

uid
    : simpleId
    //| DOUBLE_QUOTE_ID
    //| REVERSE_QUOTE_ID
    | CHARSET_REVERSE_QOUTE_STRING
    | STRING_LITERAL
    ;

simpleId
    : ID
    | charsetNameBase
    | transactionLevelBase
    | engineNameBase
    | privilegesBase
    | intervalTypeBase
    | dataTypeBase
    | keywordsCanBeId
    | scalarFunctionName
    ;

dottedId
    : DOT_ID
    | DOT uid
    ;

//    Literals

decimalLiteral
    : DECIMAL_LITERAL
    | ZERO_DECIMAL
    | ONE_DECIMAL
    | TWO_DECIMAL
    | REAL_LITERAL
    ;

fileSizeLiteral
    : FILESIZE_LITERAL
    | decimalLiteral
    ;

stringLiteral
    : (STRING_CHARSET_NAME? STRING_LITERAL | START_NATIONAL_STRING_LITERAL) STRING_LITERAL+
    | (STRING_CHARSET_NAME? STRING_LITERAL | START_NATIONAL_STRING_LITERAL) (COLLATE collationName)?
    ;

booleanLiteral
    : TRUE
    | FALSE
    ;

hexadecimalLiteral
    : STRING_CHARSET_NAME? HEXADECIMAL_LITERAL
    ;

nullNotnull
    : NOT? (NULL_LITERAL | NULL_SPEC_LITERAL)
    ;

constant
    : stringLiteral
    | decimalLiteral
    | MINUS decimalLiteral
    | hexadecimalLiteral
    | booleanLiteral
    | REAL_LITERAL
    | BIT_STRING
    | NOT? nullLiteral = (NULL_LITERAL | NULL_SPEC_LITERAL)
    ;

//    Data Types

dataType
    : typeName = (CHAR | CHARACTER | VARCHAR | TINYTEXT | TEXT | MEDIUMTEXT | LONGTEXT | NCHAR | NVARCHAR | LONG) VARYING? lengthOneDimension? BINARY? (charSet charsetName)? (COLLATE collationName | BINARY)? # stringDataType
    | NATIONAL typeName = (CHAR | CHARACTER) VARYING lengthOneDimension? BINARY?                                                                                                                                # nationalVaryingStringDataType
    | NATIONAL typeName = (VARCHAR | CHARACTER | CHAR) lengthOneDimension? BINARY?                                                                                                                              # nationalStringDataType
    | NCHAR typeName = VARCHAR lengthOneDimension? BINARY?                                                                                                                                                      # nationalStringDataType
    | typeName = ( TINYINT | SMALLINT | MEDIUMINT | INT | INTEGER | BIGINT | MIDDLEINT | INT1 | INT2 | INT3 | INT4 | INT8) lengthOneDimension? (SIGNED | UNSIGNED | ZEROFILL)*                                  # dimensionDataType
    | typeName = REAL lengthTwoDimension? (SIGNED | UNSIGNED | ZEROFILL)*                                                                                                                                       # dimensionDataType
    | typeName = DOUBLE PRECISION? lengthTwoDimension? (SIGNED | UNSIGNED | ZEROFILL)*                                                                                                                          # dimensionDataType
    | typeName = (DECIMAL | DEC | FIXED | NUMERIC | FLOAT | FLOAT4 | FLOAT8) lengthTwoOptionalDimension? ( SIGNED | UNSIGNED | ZEROFILL)*                                                                       # dimensionDataType
    | typeName = (DATE | TINYBLOB | MEDIUMBLOB | LONGBLOB | BOOL | BOOLEAN | SERIAL)                                                                                                                            # simpleDataType
    | typeName = (BIT | TIME | TIMESTAMP | DATETIME | BINARY | VARBINARY | BLOB | YEAR) lengthOneDimension?                                                                                                     # dimensionDataType
    | typeName = (ENUM | SET) collectionOptions BINARY? (charSet charsetName)?                                                                                                                                  # collectionDataType
    | typeName = ( GEOMETRYCOLLECTION | GEOMCOLLECTION | LINESTRING | MULTILINESTRING | MULTIPOINT | MULTIPOLYGON | POINT | POLYGON | JSON | GEOMETRY) (SRID decimalLiteral)?                                   # spatialDataType
    | typeName = LONG VARCHAR? BINARY? (charSet charsetName)? (COLLATE collationName)?                                                                                                                          # longVarcharDataType // LONG VARCHAR is the same as LONG
    | LONG VARBINARY                                                                                                                                                                                            # longVarbinaryDataType
    ;

collectionOptions
    : LR_BRACKET STRING_LITERAL (COMMA STRING_LITERAL)* RR_BRACKET
    ;

convertedDataType
    : (typeName = (BINARY | NCHAR | FLOAT) lengthOneDimension? | typeName = CHAR lengthOneDimension? (charSet charsetName)? | typeName = (DATE | DATETIME | TIME | YEAR | JSON | INT | INTEGER | DOUBLE) | typeName = (DECIMAL | DEC) lengthTwoOptionalDimension? | (SIGNED | UNSIGNED) (INTEGER | INT)?) ARRAY?
    ;

lengthOneDimension
    : LR_BRACKET decimalLiteral RR_BRACKET
    ;

lengthTwoDimension
    : LR_BRACKET decimalLiteral COMMA decimalLiteral RR_BRACKET
    ;

lengthTwoOptionalDimension
    : LR_BRACKET decimalLiteral (COMMA decimalLiteral)? RR_BRACKET
    ;

//    Common Lists

uidList
    : uid (COMMA uid)*
    ;

fullColumnNameList
    : fullColumnName (COMMA fullColumnName)*
    ;

tables
    : tableIdentifier (COMMA tableIdentifier)*
    ;

indexColumnNames
    : LR_BRACKET indexColumnName (COMMA indexColumnName)* RR_BRACKET
    ;

expressions
    : expression (COMMA expression)*
    ;

expressionsWithDefaults
    : expressionOrDefault (COMMA expressionOrDefault)*
    ;

constants
    : constant (COMMA constant)*
    ;

simpleStrings
    : STRING_LITERAL (COMMA STRING_LITERAL)*
    ;

userVariables
    : LOCAL_ID (COMMA LOCAL_ID)*
    ;

//    Common Expressons

defaultValue
    : NULL_LITERAL
    | CAST LR_BRACKET expression AS convertedDataType RR_BRACKET
    | unaryOperator? constant
    | currentTimestamp (ON UPDATE currentTimestamp)?
    | LR_BRACKET expression RR_BRACKET
    | LR_BRACKET fullId RR_BRACKET
    ;

currentTimestamp
    : ((CURRENT_TIMESTAMP | LOCALTIME | LOCALTIMESTAMP) (LR_BRACKET decimalLiteral? RR_BRACKET)? | NOW LR_BRACKET decimalLiteral? RR_BRACKET)
    ;

expressionOrDefault
    : expression
    | DEFAULT
    ;

ifExists
    : IF EXISTS
    ;

ifNotExists
    : IF NOT EXISTS
    ;

orReplace
    : OR REPLACE
    ;

waitNowaitClause
    : WAIT decimalLiteral
    | NOWAIT
    ;

//    Functions

functionCall
    : specificFunction                                       # specificFunctionCall
    | aggregateWindowedFunction                              # aggregateFunctionCall
    | nonAggregateWindowedFunction                           # nonAggregateFunctionCall
    | scalarFunctionName LR_BRACKET functionArgs? RR_BRACKET # scalarFunctionCall
    | fullId LR_BRACKET functionArgs? RR_BRACKET             # udfFunctionCall
    | passwordFunctionClause                                 # passwordFunctionCall
    ;

specificFunction
    : (CURRENT_DATE | CURRENT_TIME | CURRENT_TIMESTAMP | LOCALTIME | UTC_TIMESTAMP | SCHEMA) (LR_BRACKET RR_BRACKET)?                                                                                                                                # simpleFunctionCall
    | currentUserExpression                                                                                                                                                                                                                          # currentUser
    | CONVERT LR_BRACKET expression separator = COMMA convertedDataType RR_BRACKET                                                                                                                                                                   # dataTypeFunctionCall
    | CONVERT LR_BRACKET expression USING charsetName RR_BRACKET                                                                                                                                                                                     # dataTypeFunctionCall
    | CAST LR_BRACKET expression AS convertedDataType RR_BRACKET                                                                                                                                                                                     # dataTypeFunctionCall
    | VALUES LR_BRACKET fullColumnName RR_BRACKET                                                                                                                                                                                                    # valuesFunctionCall
    | CASE expression caseFuncAlternative+ (ELSE elseArg = functionArg)? END                                                                                                                                                                         # caseExpressionFunctionCall
    | CASE caseFuncAlternative+ (ELSE elseArg = functionArg)? END                                                                                                                                                                                    # caseFunctionCall
    | CHAR LR_BRACKET functionArgs (USING charsetName)? RR_BRACKET                                                                                                                                                                                   # charFunctionCall
    | POSITION LR_BRACKET (positionString = stringLiteral | positionExpression = expression) IN ( inString = stringLiteral | inExpression = expression) RR_BRACKET                                                                                   # positionFunctionCall
    | (SUBSTR | SUBSTRING) LR_BRACKET (sourceString = stringLiteral | sourceExpression = expression) FROM (fromDecimal = decimalLiteral | fromExpression = expression) (FOR ( forDecimal = decimalLiteral | forExpression = expression))? RR_BRACKET # substrFunctionCall
    | TRIM LR_BRACKET positioinForm = (BOTH | LEADING | TRAILING) ( sourceString = stringLiteral | sourceExpression = expression)? FROM (fromString = stringLiteral | fromExpression = expression) RR_BRACKET                                        # trimFunctionCall
    | TRIM LR_BRACKET (sourceString = stringLiteral | sourceExpression = expression) FROM ( fromString = stringLiteral | fromExpression = expression) RR_BRACKET                                                                                     # trimFunctionCall
    | WEIGHT_STRING LR_BRACKET (stringLiteral | expression) ( AS stringFormat = (CHAR | BINARY) LR_BRACKET decimalLiteral RR_BRACKET)? levelsInWeightString? RR_BRACKET                                                                              # weightFunctionCall
    | EXTRACT LR_BRACKET intervalType FROM (sourceString = stringLiteral | sourceExpression = expression) RR_BRACKET                                                                                                                                 # extractFunctionCall
    | GET_FORMAT LR_BRACKET datetimeFormat = (DATE | TIME | DATETIME) COMMA stringLiteral RR_BRACKET                                                                                                                                                 # getFormatFunctionCall
    | JSON_VALUE LR_BRACKET expression COMMA expression (RETURNING convertedDataType)? jsonOnEmpty? jsonOnError? RR_BRACKET                                                                                                                          # jsonValueFunctionCall
    ;

caseFuncAlternative
    : WHEN condition = functionArg THEN consequent = functionArg
    ;

levelsInWeightString
    : LEVEL levelInWeightListElement (COMMA levelInWeightListElement)*   # levelWeightList
    | LEVEL firstLevel = decimalLiteral MINUS lastLevel = decimalLiteral # levelWeightRange
    ;

levelInWeightListElement
    : decimalLiteral orderType = (ASC | DESC | REVERSE)?
    ;

aggregateWindowedFunction
    : (AVG | MAX | MIN | SUM) LR_BRACKET aggregator = (ALL | DISTINCT)? functionArg RR_BRACKET overClause?
    | COUNT LR_BRACKET ( starArg = STAR | aggregator = ALL? functionArg | aggregator = DISTINCT functionArgs) RR_BRACKET overClause?
    | ( BIT_AND | BIT_OR | BIT_XOR | STD | STDDEV | STDDEV_POP | STDDEV_SAMP | VAR_POP | VAR_SAMP | VARIANCE) LR_BRACKET aggregator = ALL? functionArg RR_BRACKET overClause?
    | GROUP_CONCAT LR_BRACKET aggregator = DISTINCT? functionArgs ( ORDER BY orderByExpression (COMMA orderByExpression)*)? (SEPARATOR separator = STRING_LITERAL)? RR_BRACKET
    ;

nonAggregateWindowedFunction
    : (LAG | LEAD) LR_BRACKET expression (COMMA decimalLiteral)? (COMMA decimalLiteral)? RR_BRACKET overClause
    | (FIRST_VALUE | LAST_VALUE) LR_BRACKET expression RR_BRACKET overClause
    | (CUME_DIST | DENSE_RANK | PERCENT_RANK | RANK | ROW_NUMBER) LR_BRACKET RR_BRACKET overClause
    | NTH_VALUE LR_BRACKET expression COMMA decimalLiteral RR_BRACKET overClause
    | NTILE LR_BRACKET decimalLiteral RR_BRACKET overClause
    ;

overClause
    : OVER (LR_BRACKET windowSpec RR_BRACKET | windowName)
    ;

windowSpec
    : windowName? partitionClause? orderByClause? frameClause?
    ;

windowName
    : uid
    ;

frameClause
    : frameUnits frameExtent
    ;

frameUnits
    : ROWS
    | RANGE
    ;

frameExtent
    : frameRange
    | frameBetween
    ;

frameBetween
    : BETWEEN frameRange AND frameRange
    ;

frameRange
    : CURRENT ROW
    | UNBOUNDED (PRECEDING | FOLLOWING)
    | expression (PRECEDING | FOLLOWING)
    ;

partitionClause
    : PARTITION BY expression (COMMA expression)*
    ;

scalarFunctionName
    : functionNameBase
    | ASCII
    | CURDATE
    | CURRENT_DATE
    | CURRENT_TIME
    | CURRENT_TIMESTAMP
    | CURTIME
    | DATE_ADD
    | DATE_SUB
    | IF
    | INSERT
    | LOCALTIME
    | LOCALTIMESTAMP
    | MID
    | NOW
    | REPEAT
    | REPLACE
    | SUBSTR
    | SUBSTRING
    | SYSDATE
    | TRIM
    | UTC_DATE
    | UTC_TIME
    | UTC_TIMESTAMP
    ;

passwordFunctionClause
    : functionName = (PASSWORD | OLD_PASSWORD) LR_BRACKET functionArg RR_BRACKET
    ;

functionArgs
    : (constant | fullColumnName | functionCall | expression) (COMMA (constant | fullColumnName | functionCall | expression))*
    ;

functionArg
    : constant
    | fullColumnName
    | functionCall
    | expression
    ;

//    Expressions, predicates

// Simplified approach for expression
expression
    : notOperator = (NOT | EXCLAMATION_SYMBOL) expression    # notExpression
    | expression logicalOperator expression                  # logicalExpression
    | predicate IS NOT? testValue = (TRUE | FALSE | UNKNOWN) # isExpression
    | predicate                                              # predicateExpression
    ;

predicate
    : predicate NOT? IN LR_BRACKET (selectStatement | expressions) RR_BRACKET                            # inPredicate
    | predicate IS nullNotnull                                                                           # isNullPredicate
    | left = predicate comparisonOperator right = predicate                                              # binaryComparisonPredicate
    | predicate comparisonOperator quantifier = (ALL | ANY | SOME) LR_BRACKET selectStatement RR_BRACKET # subqueryComparisonPredicate
    | predicate NOT? BETWEEN predicate AND predicate                                                     # betweenPredicate
    | predicate SOUNDS LIKE predicate                                                                    # soundsLikePredicate
    | predicate NOT? LIKE predicate (ESCAPE STRING_LITERAL)?                                             # likePredicate
    | predicate NOT? regex = (REGEXP | RLIKE) predicate                                                  # regexpPredicate
    | predicate MEMBER OF LR_BRACKET predicate RR_BRACKET                                                # jsonMemberOfPredicate
    | expressionAtom                                                                                     # expressionAtomPredicate
    ;

// Add in ASTVisitor nullNotnull in constant
expressionAtom
    : constant                                                  # constantExpressionAtom
    | fullColumnName                                            # fullColumnNameExpressionAtom
    | functionCall                                              # functionCallExpressionAtom
    | expressionAtom COLLATE collationName                      # collateExpressionAtom
    | mysqlVariable                                             # mysqlVariableExpressionAtom
    | unaryOperator expressionAtom                              # unaryExpressionAtom
    | BINARY expressionAtom                                     # binaryExpressionAtom
    | LOCAL_ID VAR_ASSIGN expressionAtom                        # variableAssignExpressionAtom
    | LR_BRACKET expression (COMMA expression)* RR_BRACKET      # nestedExpressionAtom
    | ROW LR_BRACKET expression (COMMA expression)+ RR_BRACKET  # nestedRowExpressionAtom
    | EXISTS LR_BRACKET selectStatement RR_BRACKET              # existsExpressionAtom
    | LR_BRACKET selectStatement RR_BRACKET                     # subqueryExpressionAtom
    | INTERVAL expression intervalType                          # intervalExpressionAtom
    | left = expressionAtom bitOperator right = expressionAtom  # bitExpressionAtom
    | left = expressionAtom multOperator right = expressionAtom # mathExpressionAtom
    | left = expressionAtom addOperator right = expressionAtom  # mathExpressionAtom
    | left = expressionAtom jsonOperator right = expressionAtom # jsonExpressionAtom
    ;

unaryOperator
    : EXCLAMATION_SYMBOL
    | BIT_NOT_OP
    | PLUS
    | MINUS
    | NOT
    ;

comparisonOperator
    : EQUAL_SYMBOL
    | GREATER_SYMBOL
    | LESS_SYMBOL
    | LESS_SYMBOL EQUAL_SYMBOL
    | GREATER_SYMBOL EQUAL_SYMBOL
    | LESS_SYMBOL GREATER_SYMBOL
    | EXCLAMATION_SYMBOL EQUAL_SYMBOL
    | LESS_SYMBOL EQUAL_SYMBOL GREATER_SYMBOL
    ;

logicalOperator
    : AND
    | BIT_AND_OP BIT_AND_OP
    | XOR
    | OR
    | BIT_OR_OP BIT_OR_OP
    ;

bitOperator
    : LESS_SYMBOL LESS_SYMBOL
    | GREATER_SYMBOL GREATER_SYMBOL
    | BIT_AND_OP
    | BIT_XOR_OP
    | BIT_OR_OP
    ;

multOperator
    : STAR
    | DIVIDE
    | MODULE
    | DIV
    | MOD
    ;

addOperator
    : PLUS
    | MINUS
    ;

jsonOperator
    : MINUS GREATER_SYMBOL
    | MINUS GREATER_SYMBOL GREATER_SYMBOL
    ;

//    Simple id sets
//     (that keyword, which can be id)

charsetNameBase
    : ARMSCII8
    | ASCII
    | BIG5
    | BINARY
    | CP1250
    | CP1251
    | CP1256
    | CP1257
    | CP850
    | CP852
    | CP866
    | CP932
    | DEC8
    | EUCJPMS
    | EUCKR
    | GB18030
    | GB2312
    | GBK
    | GEOSTD8
    | GREEK
    | HEBREW
    | HP8
    | KEYBCS2
    | KOI8R
    | KOI8U
    | LATIN1
    | LATIN2
    | LATIN5
    | LATIN7
    | MACCE
    | MACROMAN
    | SJIS
    | SWE7
    | TIS620
    | UCS2
    | UJIS
    | UTF16
    | UTF16LE
    | UTF32
    | UTF8
    | UTF8MB3
    | UTF8MB4
    ;

transactionLevelBase
    : REPEATABLE
    | COMMITTED
    | UNCOMMITTED
    | SERIALIZABLE
    ;

privilegesBase
    : TABLES
    | ROUTINE
    | EXECUTE
    | FILE
    | PROCESS
    | RELOAD
    | SHUTDOWN
    | SUPER
    | PRIVILEGES
    ;

intervalTypeBase
    : QUARTER
    | MONTH
    | DAY
    | HOUR
    | MINUTE
    | WEEK
    | SECOND
    | MICROSECOND
    ;

dataTypeBase
    : DATE
    | TIME
    | TIMESTAMP
    | DATETIME
    | YEAR
    | ENUM
    | TEXT
    ;

keywordsCanBeId
    : ACCOUNT
    | ACTION
    | ADMIN
    | AFTER
    | AGGREGATE
    | ALGORITHM
    | ANY
    | ARRAY
    | AT
    | AUDIT_ADMIN
    | AUDIT_ABORT_EXEMPT
    | AUTHORS
    | AUTOCOMMIT
    | AUTOEXTEND_SIZE
    | AUTO_INCREMENT
    | AUTHENTICATION_POLICY_ADMIN
    | AVG
    | AVG_ROW_LENGTH
    | ATTRIBUTE
    | BACKUP_ADMIN
    | BEGIN
    | BINLOG
    | BINLOG_ADMIN
    | BINLOG_ENCRYPTION_ADMIN
    | BIT
    | BIT_AND
    | BIT_OR
    | BIT_XOR
    | BLOCK
    | BOOL
    | BOOLEAN
    | BTREE
    | BUCKETS
    | CACHE
    | CASCADED
    | CHAIN
    | CHANGED
    | CHANNEL
    | CHECKSUM
    | PAGE_CHECKSUM
    | CATALOG_NAME
    | CIPHER
    | CLASS_ORIGIN
    | CLIENT
    | CLONE_ADMIN
    | CLOSE
    | CLUSTERING
    | COALESCE
    | CODE
    | COLUMNS
    | COLUMN_FORMAT
    | COLUMN_NAME
    | COMMENT
    | COMMIT
    | COMPACT
    | COMPLETION
    | COMPRESSED
    | COMPRESSION
    | CONCURRENT
    | CONDITION
    | CONNECT
    | CONNECTION
    | CONNECTION_ADMIN
    | CONSISTENT
    | CONSTRAINT_CATALOG
    | CONSTRAINT_NAME
    | CONSTRAINT_SCHEMA
    | CONTAINS
    | CONTEXT
    | CONTRIBUTORS
    | COPY
    | COUNT
    | CPU
    | CURRENT
    | CURRENT_USER
    | CURSOR_NAME
    | DATA
    | DATAFILE
    | DEALLOCATE
    | DEFAULT
    | DEFAULT_AUTH
    | DEFINER
    | DELAY_KEY_WRITE
    | DES_KEY_FILE
    | DIAGNOSTICS
    | DIRECTORY
    | DISABLE
    | DISCARD
    | DISK
    | DO
    | DUMPFILE
    | DUPLICATE
    | DYNAMIC
    | EMPTY
    | ENABLE
    | ENCRYPTION
    | ENCRYPTION_KEY_ADMIN
    | END
    | ENDS
    | ENGINE
    | ENGINE_ATTRIBUTE
    | ENGINES
    | ENFORCED
    | ERROR
    | ERRORS
    | ESCAPE
    | EUR
    | EVEN
    | EVENT
    | EVENTS
    | EVERY
    | EXCEPT
    | EXCHANGE
    | EXCLUSIVE
    | EXPIRE
    | EXPORT
    | EXTENDED
    | EXTENT_SIZE
    | FAILED_LOGIN_ATTEMPTS
    | FAST
    | FAULTS
    | FIELDS
    | FILE_BLOCK_SIZE
    | FILTER
    | FIREWALL_ADMIN
    | FIREWALL_EXEMPT
    | FIREWALL_USER
    | FIRST
    | FIXED
    | FLUSH
    | FOLLOWS
    | FOUND
    | FULL
    | FUNCTION
    | GENERAL
    | GLOBAL
    | GRANTS
    | GROUP
    | GROUP_CONCAT
    | GROUP_REPLICATION
    | GROUP_REPLICATION_ADMIN
    | HANDLER
    | HASH
    | HELP
    | HISTORY
    | HOST
    | HOSTS
    | IDENTIFIED
    | IGNORED
    | IGNORE_SERVER_IDS
    | IMPORT
    | INDEXES
    | INITIAL_SIZE
    | INNODB_REDO_LOG_ARCHIVE
    | INPLACE
    | INSERT_METHOD
    | INSTALL
    | INSTANCE
    | INSTANT
    | INTERNAL
    | INVOKE
    | INVOKER
    | IO
    | IO_THREAD
    | IPC
    | ISO
    | ISOLATION
    | ISSUER
    | JIS
    | JSON
    | KEY_BLOCK_SIZE
    | LAMBDA
    | LANGUAGE
    | LAST
    | LATERAL
    | LEAVES
    | LESS
    | LEVEL
    | LIST
    | LOCAL
    | LOGFILE
    | LOGS
    | MASTER
    | MASTER_AUTO_POSITION
    | MASTER_CONNECT_RETRY
    | MASTER_DELAY
    | MASTER_HEARTBEAT_PERIOD
    | MASTER_HOST
    | MASTER_LOG_FILE
    | MASTER_LOG_POS
    | MASTER_PASSWORD
    | MASTER_PORT
    | MASTER_RETRY_COUNT
    | MASTER_SSL
    | MASTER_SSL_CA
    | MASTER_SSL_CAPATH
    | MASTER_SSL_CERT
    | MASTER_SSL_CIPHER
    | MASTER_SSL_CRL
    | MASTER_SSL_CRLPATH
    | MASTER_SSL_KEY
    | MASTER_TLS_VERSION
    | MASTER_USER
    | MAX_CONNECTIONS_PER_HOUR
    | MAX_QUERIES_PER_HOUR
    | MAX
    | MAX_ROWS
    | MAX_SIZE
    | MAX_UPDATES_PER_HOUR
    | MAX_USER_CONNECTIONS
    | MEDIUM
    | MEMBER
    | MEMORY
    | MERGE
    | MESSAGE_TEXT
    | MID
    | MIGRATE
    | MIN
    | MIN_ROWS
    | MODE
    | MODIFY
    | MUTEX
    | MYSQL
    | MYSQL_ERRNO
    | NAME
    | NAMES
    | NCHAR
    | NDB_STORED_USER
    | NESTED
    | NEVER
    | NEXT
    | NO
    | NOCOPY
    | NODEGROUP
    | NONE
    | NOWAIT
    | NUMBER
    | ODBC
    | OFFLINE
    | OFFSET
    | OF
    | OJ
    | OLD_PASSWORD
    | ONE
    | ONLINE
    | ONLY
    | OPEN
    | OPTIMIZER_COSTS
    | OPTIONAL
    | OPTIONS
    | ORDER
    | ORDINALITY
    | OWNER
    | PACK_KEYS
    | PAGE
    | PARSER
    | PARTIAL
    | PARTITIONING
    | PARTITIONS
    | PASSWORD
    | PASSWORDLESS_USER_ADMIN
    | PASSWORD_LOCK_TIME
    | PATH
    | PERSIST_RO_VARIABLES_ADMIN
    | PHASE
    | PLUGINS
    | PLUGIN_DIR
    | PLUGIN
    | PORT
    | PRECEDES
    | PREPARE
    | PRESERVE
    | PREV
    | PRIMARY
    | PROCESSLIST
    | PROFILE
    | PROFILES
    | PROXY
    | QUERY
    | QUICK
    | REBUILD
    | RECOVER
    | RECURSIVE
    | REDO_BUFFER_SIZE
    | REDUNDANT
    | RELAY
    | RELAYLOG
    | RELAY_LOG_FILE
    | RELAY_LOG_POS
    | REMOVE
    | REORGANIZE
    | REPAIR
    | REPLICATE_DO_DB
    | REPLICATE_DO_TABLE
    | REPLICATE_IGNORE_DB
    | REPLICATE_IGNORE_TABLE
    | REPLICATE_REWRITE_DB
    | REPLICATE_WILD_DO_TABLE
    | REPLICATE_WILD_IGNORE_TABLE
    | REPLICATION
    | REPLICATION_APPLIER
    | REPLICATION_SLAVE_ADMIN
    | RESET
    | RESOURCE_GROUP_ADMIN
    | RESOURCE_GROUP_USER
    | RESUME
    | RETURNED_SQLSTATE
    | RETURNS
    | REUSE
    | ROLE
    | ROLE_ADMIN
    | ROLLBACK
    | ROLLUP
    | ROTATE
    | ROW
    | ROWS
    | ROW_FORMAT
    | RTREE
    | S3
    | SAVEPOINT
    | SCHEDULE
    | SCHEMA_NAME
    | SECURITY
    | SECONDARY_ENGINE_ATTRIBUTE
    | SERIAL
    | SERVER
    | SESSION
    | SESSION_VARIABLES_ADMIN
    | SET_USER_ID
    | SHARE
    | SHARED
    | SHOW_ROUTINE
    | SIGNED
    | SIMPLE
    | SLAVE
    | SLOW
    | SKIP_QUERY_REWRITE
    | SNAPSHOT
    | SOCKET
    | SOME
    | SONAME
    | SOUNDS
    | SOURCE
    | SQL_AFTER_GTIDS
    | SQL_AFTER_MTS_GAPS
    | SQL_BEFORE_GTIDS
    | SQL_BUFFER_RESULT
    | SQL_CACHE
    | SQL_NO_CACHE
    | SQL_THREAD
    | STACKED
    | START
    | STARTS
    | STATS_AUTO_RECALC
    | STATS_PERSISTENT
    | STATS_SAMPLE_PAGES
    | STATUS
    | STD
    | STDDEV
    | STDDEV_POP
    | STDDEV_SAMP
    | STOP
    | STORAGE
    | STRING
    | SUBCLASS_ORIGIN
    | SUBJECT
    | SUBPARTITION
    | SUBPARTITIONS
    | SUM
    | SUSPEND
    | SWAPS
    | SWITCHES
    | SYSTEM_VARIABLES_ADMIN
    | TABLE_NAME
    | TABLESPACE
    | TABLE_ENCRYPTION_ADMIN
    | TABLE_TYPE
    | TEMPORARY
    | TEMPTABLE
    | THAN
    | TP_CONNECTION_ADMIN
    | TRADITIONAL
    | TRANSACTION
    | TRANSACTIONAL
    | TRIGGERS
    | TRUNCATE
    | UNBOUNDED
    | UNDEFINED
    | UNDOFILE
    | UNDO_BUFFER_SIZE
    | UNINSTALL
    | UNKNOWN
    | UNTIL
    | UPGRADE
    | USA
    | USER
    | USE_FRM
    | USER_RESOURCES
    | VALIDATION
    | VALUE
    | VAR_POP
    | VAR_SAMP
    | VARIABLES
    | VARIANCE
    | VERSION_TOKEN_ADMIN
    | VIEW
    | VIRTUAL
    | WAIT
    | WARNINGS
    | WITHOUT
    | WORK
    | WRAPPER
    | X509
    | XA
    | XA_RECOVER_ADMIN
    | XML
    ;

functionNameBase
    : ABS
    | ACOS
    | ADDDATE
    | ADDTIME
    | AES_DECRYPT
    | AES_ENCRYPT
    | AREA
    | ASBINARY
    | ASIN
    | ASTEXT
    | ASWKB
    | ASWKT
    | ASYMMETRIC_DECRYPT
    | ASYMMETRIC_DERIVE
    | ASYMMETRIC_ENCRYPT
    | ASYMMETRIC_SIGN
    | ASYMMETRIC_VERIFY
    | ATAN
    | ATAN2
    | BENCHMARK
    | BIN
    | BIT_COUNT
    | BIT_LENGTH
    | BUFFER
    | CEIL
    | CEILING
    | CENTROID
    | CHARACTER_LENGTH
    | CHARSET
    | CHAR_LENGTH
    | COERCIBILITY
    | COLLATION
    | COMPRESS
    | CONCAT
    | CONCAT_WS
    | CONNECTION_ID
    | CONV
    | CONVERT_TZ
    | COS
    | COT
    | COUNT
    | CRC32
    | CREATE_ASYMMETRIC_PRIV_KEY
    | CREATE_ASYMMETRIC_PUB_KEY
    | CREATE_DH_PARAMETERS
    | CREATE_DIGEST
    | CROSSES
    | CUME_DIST
    | DATABASE
    | DATE
    | DATEDIFF
    | DATE_FORMAT
    | DAY
    | DAYNAME
    | DAYOFMONTH
    | DAYOFWEEK
    | DAYOFYEAR
    | DECODE
    | DEGREES
    | DENSE_RANK
    | DES_DECRYPT
    | DES_ENCRYPT
    | DIMENSION
    | DISJOINT
    | ELT
    | ENCODE
    | ENCRYPT
    | ENDPOINT
    | ENVELOPE
    | EQUALS
    | EXP
    | EXPORT_SET
    | EXTERIORRING
    | EXTRACTVALUE
    | FIELD
    | FIND_IN_SET
    | FIRST_VALUE
    | FLOOR
    | FORMAT
    | FOUND_ROWS
    | FROM_BASE64
    | FROM_DAYS
    | FROM_UNIXTIME
    | GEOMCOLLFROMTEXT
    | GEOMCOLLFROMWKB
    | GEOMETRYCOLLECTION
    | GEOMETRYCOLLECTIONFROMTEXT
    | GEOMETRYCOLLECTIONFROMWKB
    | GEOMETRYFROMTEXT
    | GEOMETRYFROMWKB
    | GEOMETRYN
    | GEOMETRYTYPE
    | GEOMFROMTEXT
    | GEOMFROMWKB
    | GET_FORMAT
    | GET_LOCK
    | GLENGTH
    | GREATEST
    | GTID_SUBSET
    | GTID_SUBTRACT
    | HEX
    | HOUR
    | IFNULL
    | INET6_ATON
    | INET6_NTOA
    | INET_ATON
    | INET_NTOA
    | INSTR
    | INTERIORRINGN
    | INTERSECTS
    | INVISIBLE
    | ISCLOSED
    | ISEMPTY
    | ISNULL
    | ISSIMPLE
    | IS_FREE_LOCK
    | IS_IPV4
    | IS_IPV4_COMPAT
    | IS_IPV4_MAPPED
    | IS_IPV6
    | IS_USED_LOCK
    | LAG
    | LAST_INSERT_ID
    | LAST_VALUE
    | LCASE
    | LEAD
    | LEAST
    | LEFT
    | LENGTH
    | LINEFROMTEXT
    | LINEFROMWKB
    | LINESTRING
    | LINESTRINGFROMTEXT
    | LINESTRINGFROMWKB
    | LN
    | LOAD_FILE
    | LOCATE
    | LOG
    | LOG10
    | LOG2
    | LOWER
    | LPAD
    | LTRIM
    | MAKEDATE
    | MAKETIME
    | MAKE_SET
    | MASTER_POS_WAIT
    | MBRCONTAINS
    | MBRDISJOINT
    | MBREQUAL
    | MBRINTERSECTS
    | MBROVERLAPS
    | MBRTOUCHES
    | MBRWITHIN
    | MD5
    | MICROSECOND
    | MINUTE
    | MLINEFROMTEXT
    | MLINEFROMWKB
    | MOD
    | MONTH
    | MONTHNAME
    | MPOINTFROMTEXT
    | MPOINTFROMWKB
    | MPOLYFROMTEXT
    | MPOLYFROMWKB
    | MULTILINESTRING
    | MULTILINESTRINGFROMTEXT
    | MULTILINESTRINGFROMWKB
    | MULTIPOINT
    | MULTIPOINTFROMTEXT
    | MULTIPOINTFROMWKB
    | MULTIPOLYGON
    | MULTIPOLYGONFROMTEXT
    | MULTIPOLYGONFROMWKB
    | NAME_CONST
    | NTH_VALUE
    | NTILE
    | NULLIF
    | NUMGEOMETRIES
    | NUMINTERIORRINGS
    | NUMPOINTS
    | OCT
    | OCTET_LENGTH
    | ORD
    | OVERLAPS
    | PERCENT_RANK
    | PERIOD_ADD
    | PERIOD_DIFF
    | PI
    | POINT
    | POINTFROMTEXT
    | POINTFROMWKB
    | POINTN
    | POLYFROMTEXT
    | POLYFROMWKB
    | POLYGON
    | POLYGONFROMTEXT
    | POLYGONFROMWKB
    | POSITION
    | POW
    | POWER
    | QUARTER
    | QUOTE
    | RADIANS
    | RAND
    | RANDOM
    | RANK
    | RANDOM_BYTES
    | RELEASE_LOCK
    | REVERSE
    | RIGHT
    | ROUND
    | ROW_COUNT
    | ROW_NUMBER
    | RPAD
    | RTRIM
    | SCHEMA
    | SECOND
    | SEC_TO_TIME
    | SESSION_USER
    | SESSION_VARIABLES_ADMIN
    | SHA
    | SHA1
    | SHA2
    | SIGN
    | SIN
    | SLEEP
    | SOUNDEX
    | SQL_THREAD_WAIT_AFTER_GTIDS
    | SQRT
    | SRID
    | STARTPOINT
    | STRCMP
    | STR_TO_DATE
    | ST_AREA
    | ST_ASBINARY
    | ST_ASTEXT
    | ST_ASWKB
    | ST_ASWKT
    | ST_BUFFER
    | ST_CENTROID
    | ST_CONTAINS
    | ST_CROSSES
    | ST_DIFFERENCE
    | ST_DIMENSION
    | ST_DISJOINT
    | ST_DISTANCE
    | ST_ENDPOINT
    | ST_ENVELOPE
    | ST_EQUALS
    | ST_EXTERIORRING
    | ST_GEOMCOLLFROMTEXT
    | ST_GEOMCOLLFROMTXT
    | ST_GEOMCOLLFROMWKB
    | ST_GEOMETRYCOLLECTIONFROMTEXT
    | ST_GEOMETRYCOLLECTIONFROMWKB
    | ST_GEOMETRYFROMTEXT
    | ST_GEOMETRYFROMWKB
    | ST_GEOMETRYN
    | ST_GEOMETRYTYPE
    | ST_GEOMFROMTEXT
    | ST_GEOMFROMWKB
    | ST_INTERIORRINGN
    | ST_INTERSECTION
    | ST_INTERSECTS
    | ST_ISCLOSED
    | ST_ISEMPTY
    | ST_ISSIMPLE
    | ST_LINEFROMTEXT
    | ST_LINEFROMWKB
    | ST_LINESTRINGFROMTEXT
    | ST_LINESTRINGFROMWKB
    | ST_NUMGEOMETRIES
    | ST_NUMINTERIORRING
    | ST_NUMINTERIORRINGS
    | ST_NUMPOINTS
    | ST_OVERLAPS
    | ST_POINTFROMTEXT
    | ST_POINTFROMWKB
    | ST_POINTN
    | ST_POLYFROMTEXT
    | ST_POLYFROMWKB
    | ST_POLYGONFROMTEXT
    | ST_POLYGONFROMWKB
    | ST_SRID
    | ST_STARTPOINT
    | ST_SYMDIFFERENCE
    | ST_TOUCHES
    | ST_UNION
    | ST_WITHIN
    | ST_X
    | ST_Y
    | SUBDATE
    | SUBSTRING_INDEX
    | SUBTIME
    | SYSTEM_USER
    | TAN
    | TIME
    | TIMEDIFF
    | TIMESTAMP
    | TIMESTAMPADD
    | TIMESTAMPDIFF
    | TIME_FORMAT
    | TIME_TO_SEC
    | TOUCHES
    | TO_BASE64
    | TO_DAYS
    | TO_SECONDS
    | UCASE
    | UNCOMPRESS
    | UNCOMPRESSED_LENGTH
    | UNHEX
    | UNIX_TIMESTAMP
    | UPDATEXML
    | UPPER
    | UUID
    | UUID_SHORT
    | VALIDATE_PASSWORD_STRENGTH
    | VERSION
    | VISIBLE
    | WAIT_UNTIL_SQL_THREAD_AFTER_GTIDS
    | WEEK
    | WEEKDAY
    | WEEKOFYEAR
    | WEIGHT_STRING
    | WITHIN
    | YEAR
    | YEARWEEK
    | Y_FUNCTION
    | X_FUNCTION
    | JSON_ARRAY
    | JSON_OBJECT
    | JSON_QUOTE
    | JSON_CONTAINS
    | JSON_CONTAINS_PATH
    | JSON_EXTRACT
    | JSON_KEYS
    | JSON_OVERLAPS
    | JSON_SEARCH
    | JSON_VALUE
    | JSON_ARRAY_APPEND
    | JSON_ARRAY_INSERT
    | JSON_INSERT
    | JSON_MERGE
    | JSON_MERGE_PATCH
    | JSON_MERGE_PRESERVE
    | JSON_REMOVE
    | JSON_REPLACE
    | JSON_SET
    | JSON_UNQUOTE
    | JSON_DEPTH
    | JSON_LENGTH
    | JSON_TYPE
    | JSON_VALID
    | JSON_TABLE
    | JSON_SCHEMA_VALID
    | JSON_SCHEMA_VALIDATION_REPORT
    | JSON_PRETTY
    | JSON_STORAGE_FREE
    | JSON_STORAGE_SIZE
    | JSON_ARRAYAGG
    | JSON_OBJECTAGG
    ;