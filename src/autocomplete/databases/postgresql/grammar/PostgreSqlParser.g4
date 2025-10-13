/*
 PostgreSQL grammar. The MIT License (MIT). Copyright (c) 2021-2023, Oleksii Kovalov
 (Oleksii.Kovalov@outlook.com). Permission is hereby granted, free of charge, to any person
 obtaining a copy of this software and associated documentation files (the "Software"), to deal in
 the Software without restriction, including without limitation the rights to use, copy, modify,
 merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons
 to whom the Software is furnished to do so, subject to the following conditions: The above
 copyright notice and this permission notice shall be included in all copies or substantial portions
 of the Software. THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
 PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
 CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

// $antlr-format columnLimit 500, minEmptyLines 1, maxEmptyLinesToKeep 1, useTab false, reflowComments false, breakBeforeBraces false
// $antlr-format keepEmptyLinesAtTheStartOfBlocks false, allowShortRulesOnASingleLine false, alignSemicolons hanging, alignColons hanging
// $antlr-format alignTrailingComments true

parser grammar PostgreSqlParser;

options {
    tokenVocab = PostgreSqlLexer;
    superClass = PostgreSqlParserBase;
}

@header {
}

@members {
}

root
    : statements? EOF
    ;

plsqlRoot
    : plsqlFunction
    ;

statements
    : statement SEMI?
    | statement SEMI statements
    ;

statement
    : alterEventTriggerStatement
    | alterCollationStatement
    | alterDatabaseStatement
    | alterDatabaseSetStatement
    | alterDefaultPrivilegesStatement
    | alterDomainStatement
    | alterEnumStatement
    | alterExtensionStatement
    | alterExtensionContentsStatement
    | alterForeignDataWrapperStatement
    | alterForeignServerStatement
    | alterFunctionStatement
    | alterObjectDependsStatement
    | alterObjectSchemaStatement
    | alterOwnerStatement
    | alterOperatorStatement
    | alterTypeStatement
    | alterPolicyStatement
    | alterSequenceStatement
    | alterSystemStatement
    | alterTableStatement
    | alterTablespaceStatement
    | alterCompositeTypeStatement
    | alterPublicationStatement
    | alterRoleSetStatement
    | alterRoleStatement
    | alterSubscriptionStatement
    | alterStatsStatement
    | altertsConfigurationStatement
    | altertsDictionaryStatement
    | alterUserMappingStatement
    | analyzeStatement
    | callStatement
    | checkpointStatement
    | closePortalStatement
    | clusterStatement
    | commentStatement
    | setConstraintsStatement
    | copyStatement
    | createAccessMethodStatement
    | createAsStatement
    | createAssertionStatement
    | createCastStatement
    | createConversionStatement
    | createDomainStatement
    | createExtensionStatement
    | createForeignDataWrapperStatement
    | createForeignServerStatement
    | createForeignTableStatement
    | createFunctionStatement
    | createMaterializedViewStatement
    | createOperatorClassStatement
    | createOperatorFamilyStatement
    | createPublicationStatement
    | alterOperatorFamilyStatement
    | createPolicyStatement
    | createProcedureLangStatement
    | createSchemaStatement
    | createSequenceStatement
    | createStatement
    | createSubscriptionStatement
    | createStatsStatement
    | createTablespaceStatement
    | createTransformStatement
    | createTriggerStatement
    | createEventTriggerStatement
    | createRoleStatement
    | createUserMappingStatement
    | createDatabaseStatement
    | deallocateStatement
    | declareCursorStatement
    | defineStatement
    | deleteStatement
    | discardStatement
    | doStatement
    | dropCastStatement
    | dropOperatorClassStatement
    | dropOperatorFamilyStatement
    | dropOwnedStatement
    | dropStatement
    | dropSubscriptionStatement
    | dropTablespaceStatement
    | dropTransformStatement
    | dropRoleStatement
    | dropUserMappingStatement
    | dropDatabaseStatement
    | executeStatement
    | explainStatement
    | fetchStatement
    | grantStatement
    | grantPrivilegeStatement
    | importForeignSchemaStatement
    | indexStatement
    | insertStatement
    | mergeStatement
    | listenStatement
    | refreshMaterializedViewStatement
    | loadStatement
    | lockStatement
    | notifyStatement
    | prepareStatement
    | reassignOwnedStatement
    | reindexStatement
    | removeAggregateStatement
    | removeFunctionStatement
    | removeOperatorStatement
    | renameStatement
    | revokeStatement
    | revokePrivilegeStatement
    | ruleStatement
    | securityLabelStatement
    | selectStatement
    | transactionStatement
    | truncateStatement
    | unlistenStatement
    | updateStatement
    | vacuumStatement
    | variableResetStatement
    | variableSetStatement
    | variableShowStatement
    | viewStatement
    | plsqlConsoleCommand
    ;

plsqlConsoleCommand
    : MetaCommand EndMetaCommand?
    ;

callStatement
    : CALL functionApplication
    ;

optionalWith
    : WITH
    //| WITH_LA
    |
    ;

optionalRoleList
    : createRoleElement*
    ;

alterOptionalRoleList
    : alterRoleElemement*
    ;

alterRoleElemement
    : PASSWORD (sconst | NULL_P)
    | (ENCRYPTED | UNENCRYPTED) PASSWORD sconst
    | INHERIT
    | CONNECTION LIMIT signedIconst
    | VALID UNTIL sconst
    | roleOrAliases roleNameList
    | identifier
    ;

createRoleElement
    : alterRoleElemement
    | SYSID iconst
    | ADMIN roleNameList
    | IN_P? roleOrAliases roleNameList
    ;

createRoleStatement
    : CREATE roleOrAliases roleName optionalWith optionalRoleList
    ;

alterRoleStatement
    : ALTER roleOrAliases roleName optionalWith alterOptionalRoleList
    ;

optionalInDatabase
    :
    | IN_P DATABASE databaseName
    ;

alterRoleSetStatement
    : ALTER roleOrAliases ALL? roleName optionalInDatabase setResetClause
    ;

dropRoleStatement
    : DROP roleOrAliases (IF_P EXISTS)? roleNameList
    ;

addOrDrop
    : ADD_P
    | DROP
    ;

createSchemaStatement
    : CREATE SCHEMA (IF_P NOT EXISTS)? (optionalSchemaName AUTHORIZATION roleName | columnId) optionalSchemaList
    ;

optionalSchemaName
    : columnId
    |
    ;

optionalSchemaList
    : schemaStatement*
    ;

schemaStatement
    : createStatement
    | indexStatement
    | createSequenceStatement
    | createTriggerStatement
    | grantStatement
    | viewStatement
    ;

variableSetStatement
    : SET (LOCAL | SESSION)? setStatementEnding
    ;

setStatementEnding
    : TRANSACTION transactionModeList
    | SESSION CHARACTERISTICS AS TRANSACTION transactionModeList
    | setStatementMore
    ;

genericSetClause
    : variableName (TO | EQUAL) variableList
    ;

setStatementMore
    : genericSetClause
    | variableName FROM CURRENT_P
    | TIME ZONE zoneValue
    | CATALOG sconst
    | SCHEMA schemaName
    | NAMES optionalEncoding
    | roleOrAliases nonReservedWordOrSconst
    | SESSION AUTHORIZATION nonReservedWordOrSconst
    | XML_P OPTION documentOrContent
    | TRANSACTION SNAPSHOT sconst
    ;

variableName
    : columnId (DOT columnId)*
    ;

variableList
    : variableValue (COMMA variableValue)*
    ;

variableValue
    : booleanOrString
    | numericOnly
    ;

isoLevel
    : READ (UNCOMMITTED | COMMITTED)
    | REPEATABLE READ
    | SERIALIZABLE
    ;

booleanOrString
    : TRUE_P
    | FALSE_P
    | ON
    | nonReservedWordOrSconst
    ;

zoneValue
    : sconst
    | identifier
    | constInterval sconst optionalInterval
    | constInterval OPEN_PAREN iconst CLOSE_PAREN sconst
    | numericOnly
    | DEFAULT
    | LOCAL
    ;

optionalEncoding
    : sconst
    | DEFAULT
    |
    ;

nonReservedWordOrSconst
    : nonReservedWord
    | sconst
    ;

variableResetStatement
    : RESET resetClauseRest
    ;

resetClauseRest
    : genericResetClause
    | TIME ZONE
    | TRANSACTION ISOLATION LEVEL
    | SESSION AUTHORIZATION
    ;

genericResetClause
    : variableName
    | ALL
    ;

setResetClause
    : SET setStatementEnding
    | variableResetStatement
    ;

functionSetResetClause
    : SET setStatementMore
    | variableResetStatement
    ;

variableShowStatement
    : SHOW (variableName | TIME ZONE | TRANSACTION ISOLATION LEVEL | SESSION AUTHORIZATION | ALL)
    ;

setConstraintsStatement
    : SET CONSTRAINTS constraintsSetList constraintsSetMode
    ;

constraintsSetList
    : ALL
    | qualifiedNameList
    ;

constraintsSetMode
    : DEFERRED
    | IMMEDIATE
    ;

checkpointStatement
    : CHECKPOINT
    ;

discardStatement
    : DISCARD (ALL | TEMP | TEMPORARY | PLANS | SEQUENCES)
    ;

alterTableStatement
    : ALTER TABLE (IF_P EXISTS)? relationExpression (alterTableCommands | partitionCommand)
    | ALTER TABLE ALL IN_P TABLESPACE name (OWNED BY roleNameList)? SET TABLESPACE name optionalNowait
    | ALTER INDEX (IF_P EXISTS)? indexName (alterTableCommands | indexPartitionCommand)
    | ALTER INDEX ALL IN_P TABLESPACE name (OWNED BY roleNameList)? SET TABLESPACE name optionalNowait
    | ALTER VIEW (IF_P EXISTS)? viewName alterTableCommands
    | ALTER MATERIALIZED VIEW (IF_P EXISTS)? qualifiedName alterTableCommands
    | ALTER MATERIALIZED VIEW ALL IN_P TABLESPACE name (OWNED BY roleNameList)? SET TABLESPACE name optionalNowait
    | ALTER FOREIGN TABLE (IF_P EXISTS)? relationExpression alterTableCommands
    ;

alterTableCommands
    : alterTableCommand (COMMA alterTableCommand)*
    ;

partitionCommand
    : ATTACH PARTITION qualifiedName partitionBoundSpecification
    | DETACH PARTITION qualifiedName
    ;

indexPartitionCommand
    : ATTACH PARTITION qualifiedName
    ;

alterTableCommand
    : ADD_P columnDefinition
    | ADD_P IF_P NOT EXISTS columnDefinition
    | ADD_P COLUMN columnDefinition
    | ADD_P COLUMN IF_P NOT EXISTS columnDefinition
    | ALTER optionalColumn columnId alterColumnDefault
    | ALTER optionalColumn columnId DROP NOT NULL_P
    | ALTER optionalColumn columnId SET NOT NULL_P
    | ALTER optionalColumn columnId DROP EXPRESSION
    | ALTER optionalColumn columnId DROP EXPRESSION IF_P EXISTS
    | ALTER optionalColumn columnId SET STATISTICS signedIconst
    | ALTER optionalColumn iconst SET STATISTICS signedIconst
    | ALTER optionalColumn columnId SET relOptions
    | ALTER optionalColumn columnId RESET relOptions
    | ALTER optionalColumn columnId SET STORAGE columnId
    | ALTER optionalColumn columnId ADD_P GENERATED generatedWhen AS IDENTITY_P optionalParenthesizedSeqOptionsList
    | ALTER optionalColumn columnId alterIdentityColumnOptionList
    | ALTER optionalColumn columnId DROP IDENTITY_P
    | ALTER optionalColumn columnId DROP IDENTITY_P IF_P EXISTS
    | DROP optionalColumn IF_P EXISTS columnId optionalDropBehavior
    | DROP optionalColumn columnId optionalDropBehavior
    | ALTER optionalColumn columnId optionalSetData TYPE_P typeName optionalCollateClause alterUsing
    | ALTER optionalColumn columnId alterGenericOptions
    | ADD_P tableConstraint
    | ALTER CONSTRAINT constraintName constraintAttributeElement+
    | VALIDATE CONSTRAINT constraintName
    | DROP CONSTRAINT (IF_P EXISTS)? constraintName optionalDropBehavior
    | SET WITHOUT OIDS
    | CLUSTER ON name
    | SET WITHOUT CLUSTER
    | SET LOGGED
    | SET UNLOGGED
    | ENABLE_P (ALWAYS | REPLICA)? TRIGGER triggerName
    | ENABLE_P TRIGGER (ALL | USER)
    | DISABLE_P TRIGGER triggerName
    | DISABLE_P TRIGGER (ALL | USER)
    | ENABLE_P RULE name
    | ENABLE_P ALWAYS RULE name
    | ENABLE_P REPLICA RULE name
    | DISABLE_P RULE name
    | INHERIT qualifiedName
    | NO INHERIT qualifiedName
    | OF anyName
    | NOT OF
    | OWNER TO roleName
    | SET TABLESPACE name
    | SET relOptions
    | RESET relOptions
    | REPLICA IDENTITY_P replicaIdentity
    | ENABLE_P ROW LEVEL SECURITY
    | DISABLE_P ROW LEVEL SECURITY
    | FORCE ROW LEVEL SECURITY
    | NO FORCE ROW LEVEL SECURITY
    | alterGenericOptions
    ;

alterColumnDefault
    : SET DEFAULT expression1
    | DROP DEFAULT
    ;

optionalDropBehavior
    : CASCADE
    | RESTRICT
    |
    ;

optionalCollateClause
    : COLLATE anyName
    |
    ;

alterUsing
    : USING expression1
    |
    ;

replicaIdentity
    : NOTHING
    | FULL
    | DEFAULT
    | USING INDEX indexName
    ;

relOptions
    : OPEN_PAREN relOptionList CLOSE_PAREN
    ;

optionalRelOptions
    : WITH relOptions
    |
    ;

relOptionList
    : relOptionElem (COMMA relOptionElem)*
    ;

relOptionElem
    : columnLabel (EQUAL definitionArgument | DOT columnLabel (EQUAL definitionArgument)?)?
    ;

alterIdentityColumnOptionList
    : alterIdentityColumnOption+
    ;

alterIdentityColumnOption
    : RESTART (optionalWith numericOnly)?
    | SET (sequenceOptionItem | GENERATED generatedWhen)
    ;

partitionBoundSpecification
    : FOR VALUES WITH OPEN_PAREN hashPartitionBound CLOSE_PAREN
    | FOR VALUES IN_P OPEN_PAREN expressionList CLOSE_PAREN
    | FOR VALUES FROM OPEN_PAREN expressionList CLOSE_PAREN TO OPEN_PAREN expressionList CLOSE_PAREN
    | DEFAULT
    ;

hashPartitionBoundElement
    : nonReservedWord iconst
    ;

hashPartitionBound
    : hashPartitionBoundElement (COMMA hashPartitionBoundElement)*
    ;

alterCompositeTypeStatement
    : ALTER TYPE_P anyName alterTypeCommands
    ;

alterTypeCommands
    : alterTypeCommand (COMMA alterTypeCommand)*
    ;

alterTypeCommand
    : ADD_P ATTRIBUTE tableFunctionElement optionalDropBehavior
    | DROP ATTRIBUTE (IF_P EXISTS)? columnId optionalDropBehavior
    | ALTER ATTRIBUTE columnId optionalSetData TYPE_P typeName optionalCollateClause optionalDropBehavior
    ;

closePortalStatement
    : CLOSE (cursorName | ALL)
    ;

copyStatement
    : COPY BINARY? qualifiedName columnListWithParentheses fromOrTo PROGRAM? copyFileName copyDelimiter optionalWith copyOptions whereClause
    | COPY OPEN_PAREN preparableStatement CLOSE_PAREN TO PROGRAM? copyFileName optionalWith copyOptions
    ;

fromOrTo
    : FROM
    | TO
    ;

copyFileName
    : sconst
    | STDIN
    | STDOUT
    ;

copyOptions
    : copyOptionsItem*
    | OPEN_PAREN copyGenericOptionList CLOSE_PAREN
    ;

copyOptionsItem
    : BINARY
    | FREEZE
    | DELIMITER optionalAs sconst
    | NULL_P optionalAs sconst
    | CSV
    | HEADER_P
    | QUOTE optionalAs sconst
    | ESCAPE optionalAs sconst
    | FORCE QUOTE columnList
    | FORCE QUOTE STAR
    | FORCE NOT NULL_P columnList
    | FORCE NULL_P columnList
    | ENCODING sconst
    ;

copyDelimiter
    : USING? DELIMITERS sconst
    |
    ;

copyGenericOptionList
    : copyGenericOptionElem (COMMA copyGenericOptionElem)*
    ;

copyGenericOptionElem
    : columnLabel copyGenericOptionArgument
    ;

copyGenericOptionArgument
    : booleanOrString
    | numericOnly
    | STAR
    | OPEN_PAREN booleanOrString (COMMA booleanOrString)* CLOSE_PAREN
    |
    ;

createStatement
    : CREATE temporaryOption TABLE (IF_P NOT EXISTS)? tableIdentifier (
        OPEN_PAREN optionalTableElementList CLOSE_PAREN inheritClause optionalPartitionSpecification optionalTableAccessMethodClause with onCommitOption optionalTablespace
        | OF anyName optionalTypedTableElementList optionalPartitionSpecification optionalTableAccessMethodClause with onCommitOption optionalTablespace
        | PARTITION OF qualifiedName optionalTypedTableElementList partitionBoundSpecification optionalPartitionSpecification optionalTableAccessMethodClause with onCommitOption optionalTablespace
    )
    ;

temporaryOption
    : TEMPORARY
    | TEMP
    | LOCAL (TEMPORARY | TEMP)
    | GLOBAL (TEMPORARY | TEMP)
    | UNLOGGED
    |
    ;

optionalTableElementList
    : tableElementList
    |
    ;

optionalTypedTableElementList
    : OPEN_PAREN typedTableElementList CLOSE_PAREN
    |
    ;

tableElementList
    : tableElement (COMMA tableElement)*
    ;

typedTableElementList
    : typedTableElement (COMMA typedTableElement)*
    ;

tableElement
    : tableConstraint
    | tableLikeClause
    | columnDefinition
    ;

typedTableElement
    : columnOptions
    | tableConstraint
    ;

columnDefinition
    : columnId typeName createGenericOptions columnQualifierList
    ;

columnOptions
    : columnId (WITH OPTIONS)? columnQualifierList
    ;

columnQualifierList
    : columnConstraint*
    ;

columnConstraint
    : CONSTRAINT name columnConstraintElement
    | columnConstraintElement
    | constraintAttribute
    | COLLATE anyName
    ;

columnConstraintElement
    : NOT NULL_P
    | NULL_P
    | UNIQUE optionalDefinition usingIndexTablespace
    | PRIMARY KEY optionalDefinition usingIndexTablespace
    | CHECK OPEN_PAREN expression1 CLOSE_PAREN (NO INHERIT)?
    | DEFAULT expression2
    | GENERATED generatedWhen AS ( IDENTITY_P optionalParenthesizedSeqOptionsList | OPEN_PAREN expression1 CLOSE_PAREN STORED)
    | REFERENCES qualifiedName columnListWithParentheses matchClause keyActions
    ;

generatedWhen
    : ALWAYS
    | BY DEFAULT
    ;

constraintAttribute
    : DEFERRABLE
    | NOT DEFERRABLE
    | INITIALLY (DEFERRED | IMMEDIATE)
    ;

tableLikeClause
    : LIKE qualifiedName tableLikeOptionList
    ;

tableLikeOptionList
    : ((INCLUDING | EXCLUDING) tableLikeOption)*
    ;

tableLikeOption
    : COMMENTS
    | CONSTRAINTS
    | DEFAULTS
    | IDENTITY_P
    | GENERATED
    | INDEXES
    | STATISTICS
    | STORAGE
    | ALL
    ;

tableConstraint
    : CONSTRAINT name constraintElement
    | constraintElement
    ;

constraintElement
    : CHECK OPEN_PAREN expression1 CLOSE_PAREN constraintAttributeSpecification
    | UNIQUE ( OPEN_PAREN columnList CLOSE_PAREN optionalColumnListInclude optionalDefinition usingIndexTablespace constraintAttributeSpecification | existingIndex constraintAttributeSpecification)
    | PRIMARY KEY ( OPEN_PAREN columnList CLOSE_PAREN optionalColumnListInclude optionalDefinition usingIndexTablespace constraintAttributeSpecification | existingIndex constraintAttributeSpecification)
    | EXCLUDE optionalAccessMethodClause OPEN_PAREN exclusionConstraintList CLOSE_PAREN optionalColumnListInclude optionalDefinition usingIndexTablespace exclusionWhereClause constraintAttributeSpecification
    | FOREIGN KEY OPEN_PAREN columnList CLOSE_PAREN REFERENCES qualifiedName columnListWithParentheses matchClause keyActions constraintAttributeSpecification
    ;

columnListWithParentheses
    : OPEN_PAREN columnList CLOSE_PAREN
    |
    ;

columnList
    : columnElement (COMMA columnElement)*
    ;

columnElement
    : columnId
    ;

optionalColumnListInclude
    : INCLUDE OPEN_PAREN columnList CLOSE_PAREN
    |
    ;

matchClause
    : MATCH (FULL | PARTIAL | SIMPLE)
    |
    ;

exclusionConstraintList
    : exclusionConstraintElement (COMMA exclusionConstraintElement)*
    ;

exclusionConstraintElement
    : indexElement WITH (anyOperator | OPERATOR OPEN_PAREN anyOperator CLOSE_PAREN)
    ;

exclusionWhereClause
    : WHERE OPEN_PAREN expression1 CLOSE_PAREN
    |
    ;

keyActions
    : onKeyUpdateClause
    | onKeyDeleteClause
    | onKeyUpdateClause onKeyDeleteClause
    | onKeyDeleteClause onKeyUpdateClause
    |
    ;

onKeyUpdateClause
    : ON UPDATE keyAction
    ;

onKeyDeleteClause
    : ON DELETE_P keyAction
    ;

keyAction
    : NO ACTION
    | RESTRICT
    | CASCADE
    | SET (NULL_P | DEFAULT)
    ;

inheritClause
    : INHERITS OPEN_PAREN qualifiedNameList CLOSE_PAREN
    |
    ;

optionalPartitionSpecification
    : partitionSpecification
    |
    ;

partitionSpecification
    : PARTITION BY columnId OPEN_PAREN partitionElements CLOSE_PAREN
    ;

partitionElements
    : partitionElement (COMMA partitionElement)*
    ;

partitionElement
    : columnId optionalCollate optionalClass
    | functionExpressionWindowless optionalCollate optionalClass
    | OPEN_PAREN expression1 CLOSE_PAREN optionalCollate optionalClass
    ;

optionalTableAccessMethodClause
    : USING name
    |
    ;

with
    : WITH relOptions
    | WITHOUT OIDS
    |
    ;

onCommitOption
    : ON COMMIT (DROP | DELETE_P ROWS | PRESERVE ROWS)
    |
    ;

optionalTablespace
    : TABLESPACE name
    |
    ;

usingIndexTablespace
    : USING INDEX TABLESPACE name
    |
    ;

existingIndex
    : USING INDEX indexName
    ;

createStatsStatement
    : CREATE STATISTICS (IF_P NOT EXISTS)? anyName optionalNameList ON expressionList FROM fromList
    ;

alterStatsStatement
    : ALTER STATISTICS (IF_P EXISTS)? anyName SET STATISTICS signedIconst
    ;

createAsStatement
    : CREATE temporaryOption TABLE (IF_P NOT EXISTS)? createAsTarget AS selectStatement withData
    ;

createAsTarget
    : qualifiedName columnListWithParentheses optionalTableAccessMethodClause with onCommitOption optionalTablespace
    ;

withData
    : WITH (DATA_P | NO DATA_P)
    |
    ;

createMaterializedViewStatement
    : CREATE UNLOGGED? MATERIALIZED VIEW (IF_P NOT EXISTS)? createMaterializedViewTarget AS selectStatement withData
    ;

createMaterializedViewTarget
    : qualifiedName columnListWithParentheses optionalTableAccessMethodClause optionalRelOptions optionalTablespace
    ;

refreshMaterializedViewStatement
    : REFRESH MATERIALIZED VIEW CONCURRENTLY? qualifiedName withData
    ;

createSequenceStatement
    : CREATE temporaryOption SEQUENCE (IF_P NOT EXISTS)? qualifiedName sequenceOptionList?
    ;

alterSequenceStatement
    : ALTER SEQUENCE (IF_P EXISTS)? sequenceName sequenceOptionList
    ;

optionalParenthesizedSeqOptionsList
    : OPEN_PAREN sequenceOptionList CLOSE_PAREN
    |
    ;

sequenceOptionList
    : sequenceOptionItem+
    ;

sequenceOptionItem
    : AS simpleTypeName
    | CACHE numericOnly
    | CYCLE
    | INCREMENT BY? numericOnly
    | MAXVALUE numericOnly
    | MINVALUE numericOnly
    | NO (MAXVALUE | MINVALUE | CYCLE)
    | OWNED BY anyName
    | SEQUENCE NAME_P anyName
    | START optionalWith numericOnly
    | RESTART optionalWith numericOnly?
    ;

numericOnly
    : fconst
    | PLUS fconst
    | MINUS fconst
    | signedIconst
    ;

numericOnlyList
    : numericOnly (COMMA numericOnly)*
    ;

createProcedureLangStatement
    : CREATE optionalOrReplace TRUSTED? optionalProcedural LANGUAGE name (HANDLER handlerName optionalInlineHandler validatorClause?)?
    ;

handlerName
    : name attributes?
    ;

optionalInlineHandler
    : INLINE_P handlerName
    |
    ;

validatorClause
    : VALIDATOR handlerName
    | NO VALIDATOR
    ;

optionalProcedural
    : PROCEDURAL
    |
    ;

createTablespaceStatement
    : CREATE TABLESPACE name optionalTablespaceOwner LOCATION sconst optionalRelOptions
    ;

optionalTablespaceOwner
    : OWNER roleName
    |
    ;

dropTablespaceStatement
    : DROP TABLESPACE (IF_P EXISTS)? name
    ;

createExtensionStatement
    : CREATE EXTENSION (IF_P NOT EXISTS)? name optionalWith createExtensionOptionItem*
    ;

createExtensionOptionItem
    : SCHEMA schemaName
    | VERSION_P nonReservedWordOrSconst
    | FROM nonReservedWordOrSconst
    | CASCADE
    ;

alterExtensionStatement
    : ALTER EXTENSION name UPDATE alterExtensionOptionItem*
    ;

alterExtensionOptionItem
    : TO nonReservedWordOrSconst
    ;

alterExtensionContentsStatement
    : ALTER EXTENSION name addOrDrop objectTypeName name
    | ALTER EXTENSION name addOrDrop ROLE roleName
    | ALTER EXTENSION name addOrDrop DATABASE databaseName
    | ALTER EXTENSION name addOrDrop SCHEMA schemaName
    | ALTER EXTENSION name addOrDrop INDEX indexName
    | ALTER EXTENSION name addOrDrop objectTypeAnyName anyName
    | ALTER EXTENSION name addOrDrop TABLE tableIdentifier
    | ALTER EXTENSION name addOrDrop SEQUENCE sequenceName
    | ALTER EXTENSION name addOrDrop AGGREGATE aggregateWithArgumentTypes
    | ALTER EXTENSION name addOrDrop CAST OPEN_PAREN typeName AS typeName CLOSE_PAREN
    | ALTER EXTENSION name addOrDrop DOMAIN_P typeName
    | ALTER EXTENSION name addOrDrop FUNCTION functionWithArgumentTypes
    | ALTER EXTENSION name addOrDrop OPERATOR operatorWithArgumentTypes
    | ALTER EXTENSION name addOrDrop OPERATOR CLASS anyName USING name
    | ALTER EXTENSION name addOrDrop OPERATOR FAMILY anyName USING name
    | ALTER EXTENSION name addOrDrop PROCEDURE functionWithArgumentTypes
    | ALTER EXTENSION name addOrDrop ROUTINE functionWithArgumentTypes
    | ALTER EXTENSION name addOrDrop TRANSFORM FOR typeName LANGUAGE name
    | ALTER EXTENSION name addOrDrop TYPE_P typeName
    ;

createForeignDataWrapperStatement
    : CREATE FOREIGN DATA_P WRAPPER name forwardOptions? createGenericOptions
    ;

forwardOption
    : HANDLER handlerName
    | NO HANDLER
    | VALIDATOR handlerName
    | NO VALIDATOR
    ;

forwardOptions
    : forwardOption+
    ;

alterForeignDataWrapperStatement
    : ALTER FOREIGN DATA_P WRAPPER name forwardOptions? alterGenericOptions
    | ALTER FOREIGN DATA_P WRAPPER name forwardOptions
    ;

createGenericOptions
    : OPTIONS OPEN_PAREN genericOptionList CLOSE_PAREN
    |
    ;

genericOptionList
    : genericOptionElement (COMMA genericOptionElement)*
    ;

alterGenericOptions
    : OPTIONS OPEN_PAREN alterGenericOptionList CLOSE_PAREN
    ;

alterGenericOptionList
    : alterGenericOptionElem (COMMA alterGenericOptionElem)*
    ;

alterGenericOptionElem
    : genericOptionElement
    | SET genericOptionElement
    | ADD_P genericOptionElement
    | DROP genericOptionName
    ;

genericOptionElement
    : genericOptionName genericOptionArgument
    ;

genericOptionName
    : columnLabel
    ;

genericOptionArgument
    : sconst
    ;

createForeignServerStatement
    : CREATE SERVER name optionalType foreignServerVersion? FOREIGN DATA_P WRAPPER name createGenericOptions
    | CREATE SERVER IF_P NOT EXISTS name optionalType foreignServerVersion? FOREIGN DATA_P WRAPPER name createGenericOptions
    ;

optionalType
    : TYPE_P sconst
    |
    ;

foreignServerVersion
    : VERSION_P (sconst | NULL_P)
    ;

alterForeignServerStatement
    : ALTER SERVER name (alterGenericOptions | foreignServerVersion alterGenericOptions?)
    ;

createForeignTableStatement
    : CREATE FOREIGN TABLE qualifiedName OPEN_PAREN optionalTableElementList CLOSE_PAREN inheritClause SERVER name createGenericOptions
    | CREATE FOREIGN TABLE IF_P NOT EXISTS qualifiedName OPEN_PAREN optionalTableElementList CLOSE_PAREN inheritClause SERVER name createGenericOptions
    | CREATE FOREIGN TABLE qualifiedName PARTITION OF qualifiedName optionalTypedTableElementList partitionBoundSpecification SERVER name createGenericOptions
    | CREATE FOREIGN TABLE IF_P NOT EXISTS qualifiedName PARTITION OF qualifiedName optionalTypedTableElementList partitionBoundSpecification SERVER name createGenericOptions
    ;

importForeignSchemaStatement
    : IMPORT_P FOREIGN SCHEMA name importQualification FROM SERVER name INTO name createGenericOptions
    ;

importQualificationType
    : LIMIT TO
    | EXCEPT
    ;

importQualification
    : importQualificationType OPEN_PAREN relationExpressionList CLOSE_PAREN
    |
    ;

createUserMappingStatement
    : CREATE USER MAPPING FOR authIdentifier SERVER name createGenericOptions
    | CREATE USER MAPPING IF_P NOT EXISTS FOR authIdentifier SERVER name createGenericOptions
    ;

authIdentifier
    : roleName
    | USER
    ;

dropUserMappingStatement
    : DROP USER MAPPING FOR authIdentifier SERVER name
    | DROP USER MAPPING IF_P EXISTS FOR authIdentifier SERVER name
    ;

alterUserMappingStatement
    : ALTER USER MAPPING FOR authIdentifier SERVER name alterGenericOptions
    ;

createPolicyStatement
    : CREATE POLICY name ON qualifiedName rowSecurityDefaultPermissive rowSecurityDefaultForCmd rowSecurityOptionalToUser rowSecurityOptionalExpression rowSecurityOptionalWithCheck
    ;

alterPolicyStatement
    : ALTER POLICY name ON qualifiedName rowSecurityOptionalToUser rowSecurityOptionalExpression rowSecurityOptionalWithCheck
    ;

rowSecurityOptionalExpression
    : USING OPEN_PAREN expression1 CLOSE_PAREN
    |
    ;

rowSecurityOptionalWithCheck
    : WITH CHECK OPEN_PAREN expression1 CLOSE_PAREN
    |
    ;

rowSecurityOptionalToUser
    : TO roleNameList
    |
    ;

rowSecurityDefaultPermissive
    : AS identifier
    |
    ;

rowSecurityDefaultForCmd
    : FOR rowSecurityCommand
    |
    ;

rowSecurityCommand
    : ALL
    | SELECT
    | INSERT
    | UPDATE
    | DELETE_P
    ;

createAccessMethodStatement
    : CREATE ACCESS METHOD name TYPE_P accessMethodType HANDLER handlerName
    ;

accessMethodType
    : INDEX
    | TABLE
    ;

createTriggerStatement
    : CREATE TRIGGER name triggerActionTime triggerEvents ON qualifiedName triggerReferencing triggerForSpec triggerWhen EXECUTE functionOrProcedure functionName OPEN_PAREN triggerFunctionArguments CLOSE_PAREN
    | CREATE CONSTRAINT TRIGGER name AFTER triggerEvents ON qualifiedName optionalConstraintFromTable constraintAttributeSpecification FOR EACH ROW triggerWhen EXECUTE functionOrProcedure functionName OPEN_PAREN triggerFunctionArguments CLOSE_PAREN
    ;

triggerActionTime
    : BEFORE
    | AFTER
    | INSTEAD OF
    ;

triggerEvents
    : triggerOneEvent (OR triggerOneEvent)*
    ;

triggerOneEvent
    : INSERT
    | DELETE_P
    | UPDATE
    | UPDATE OF columnList
    | TRUNCATE
    ;

triggerReferencing
    : REFERENCING triggerTransitions
    |
    ;

triggerTransitions
    : triggerTransition+
    ;

triggerTransition
    : transitionOldOrNew transitionRowOrTable optionalAs transitionRelName
    ;

transitionOldOrNew
    : NEW
    | OLD
    ;

transitionRowOrTable
    : TABLE
    | ROW
    ;

transitionRelName
    : columnId
    ;

triggerForSpec
    : FOR EACH? triggerForType
    |
    ;

triggerForType
    : ROW
    | STATEMENT
    ;

triggerWhen
    : WHEN OPEN_PAREN expression1 CLOSE_PAREN
    |
    ;

functionOrProcedure
    : FUNCTION
    | PROCEDURE
    ;

triggerFunctionArguments
    : (triggerFunctionArgument |) (COMMA triggerFunctionArgument)*
    ;

triggerFunctionArgument
    : iconst
    | fconst
    | sconst
    | columnLabel
    ;

optionalConstraintFromTable
    : FROM qualifiedName
    |
    ;

constraintAttributeSpecification
    : constraintAttributeElement*
    ;

constraintAttributeElement
    : NOT DEFERRABLE
    | DEFERRABLE
    | INITIALLY IMMEDIATE
    | INITIALLY DEFERRED
    | NOT VALID
    | NO INHERIT
    ;

createEventTriggerStatement
    : CREATE EVENT TRIGGER name ON columnLabel EXECUTE functionOrProcedure functionName OPEN_PAREN CLOSE_PAREN
    | CREATE EVENT TRIGGER name ON columnLabel WHEN eventTriggerWhenList EXECUTE functionOrProcedure functionName OPEN_PAREN CLOSE_PAREN
    ;

eventTriggerWhenList
    : eventTriggerWhenItem (AND eventTriggerWhenItem)*
    ;

eventTriggerWhenItem
    : columnId IN_P OPEN_PAREN eventTriggerValueList CLOSE_PAREN
    ;

eventTriggerValueList
    : sconst (COMMA sconst)*
    ;

alterEventTriggerStatement
    : ALTER EVENT TRIGGER name enableTrigger
    ;

enableTrigger
    : ENABLE_P
    | ENABLE_P REPLICA
    | ENABLE_P ALWAYS
    | DISABLE_P
    ;

createAssertionStatement
    : CREATE ASSERTION anyName CHECK OPEN_PAREN expression1 CLOSE_PAREN constraintAttributeSpecification
    ;

defineStatement
    : CREATE optionalOrReplace AGGREGATE functionName aggregateArguments definition
    | CREATE optionalOrReplace AGGREGATE functionName oldAggregateDefinition
    | CREATE OPERATOR anyOperator definition
    | CREATE TYPE_P anyName definition
    | CREATE TYPE_P anyName
    | CREATE TYPE_P anyName AS OPEN_PAREN optionalTableFunctionElementList CLOSE_PAREN
    | CREATE TYPE_P anyName AS ENUM_P OPEN_PAREN enumValueList? CLOSE_PAREN
    | CREATE TYPE_P anyName AS RANGE definition
    | CREATE TEXT_P SEARCH PARSER anyName definition
    | CREATE TEXT_P SEARCH DICTIONARY anyName definition
    | CREATE TEXT_P SEARCH TEMPLATE anyName definition
    | CREATE TEXT_P SEARCH CONFIGURATION anyName definition
    | CREATE COLLATION anyName definition
    | CREATE COLLATION IF_P NOT EXISTS anyName definition
    | CREATE COLLATION anyName FROM anyName
    | CREATE COLLATION IF_P NOT EXISTS anyName FROM anyName
    ;

definition
    : OPEN_PAREN definitionElement (COMMA definitionElement)* CLOSE_PAREN
    ;

definitionElement
    : columnLabel (EQUAL definitionArgument)?
    ;

definitionArgument
    : functionType
    | reservedKeyword
    | allOperatorQualifier
    | numericOnly
    | sconst
    | NONE
    ;

oldAggregateDefinition
    : OPEN_PAREN oldAggregateElement (COMMA oldAggregateElement)* CLOSE_PAREN
    ;

oldAggregateElement
    : identifier EQUAL definitionArgument
    ;

enumValueList
    : sconst (COMMA sconst)*
    ;

alterEnumStatement
    : ALTER TYPE_P anyName ADD_P VALUE_P optionalIfNotExists sconst
    | ALTER TYPE_P anyName ADD_P VALUE_P optionalIfNotExists sconst BEFORE sconst
    | ALTER TYPE_P anyName ADD_P VALUE_P optionalIfNotExists sconst AFTER sconst
    | ALTER TYPE_P anyName RENAME VALUE_P sconst TO sconst
    ;

optionalIfNotExists
    : IF_P NOT EXISTS
    |
    ;

createOperatorClassStatement
    : CREATE OPERATOR CLASS anyName DEFAULT? FOR TYPE_P typeName USING name optionalOperatorFamily AS operatorClassItemList
    ;

operatorClassItemList
    : operatorClassItem (COMMA operatorClassItem)*
    ;

operatorClassItem
    : OPERATOR iconst anyOperator operatorClassPurpose RECHECK?
    | OPERATOR iconst operatorWithArgumentTypes operatorClassPurpose RECHECK?
    | FUNCTION iconst functionWithArgumentTypes
    | FUNCTION iconst OPEN_PAREN typeList CLOSE_PAREN functionWithArgumentTypes
    | STORAGE typeName
    ;

optionalOperatorFamily
    : FAMILY anyName
    |
    ;

operatorClassPurpose
    : FOR SEARCH
    | FOR ORDER BY anyName
    |
    ;

createOperatorFamilyStatement
    : CREATE OPERATOR FAMILY anyName USING name
    ;

alterOperatorFamilyStatement
    : ALTER OPERATOR FAMILY anyName USING name ADD_P operatorClassItemList
    | ALTER OPERATOR FAMILY anyName USING name DROP operatorClassDropList
    ;

operatorClassDropList
    : operatorClassDrop (COMMA operatorClassDrop)*
    ;

operatorClassDrop
    : OPERATOR iconst OPEN_PAREN typeList CLOSE_PAREN
    | FUNCTION iconst OPEN_PAREN typeList CLOSE_PAREN
    ;

dropOperatorClassStatement
    : DROP OPERATOR CLASS anyName USING name optionalDropBehavior
    | DROP OPERATOR CLASS IF_P EXISTS anyName USING name optionalDropBehavior
    ;

dropOperatorFamilyStatement
    : DROP OPERATOR FAMILY anyName USING name optionalDropBehavior
    | DROP OPERATOR FAMILY IF_P EXISTS anyName USING name optionalDropBehavior
    ;

dropOwnedStatement
    : DROP OWNED BY roleNameList optionalDropBehavior
    ;

reassignOwnedStatement
    : REASSIGN OWNED BY roleNameList TO roleName
    ;

dropStatement
    : DROP objectTypeAnyName (IF_P EXISTS)? anyNameList optionalDropBehavior
    | DROP TABLE (IF_P EXISTS)? tableIdentifierList optionalDropBehavior
    | DROP SEQUENCE (IF_P EXISTS)? sequenceNameList optionalDropBehavior
    | DROP INDEX (IF_P EXISTS)? indexNameList optionalDropBehavior
    | DROP SCHEMA (IF_P EXISTS)? schemaNameList optionalDropBehavior
    | DROP dropTypeName (IF_P EXISTS)? nameList optionalDropBehavior
    | DROP objectTypeNameOnAnyName (IF_P EXISTS)? name ON anyName optionalDropBehavior
    | DROP TRIGGER (IF_P EXISTS)? triggerName ON anyName optionalDropBehavior
    | DROP TYPE_P typeNameList optionalDropBehavior
    | DROP TYPE_P IF_P EXISTS typeNameList optionalDropBehavior
    | DROP DOMAIN_P typeNameList optionalDropBehavior
    | DROP DOMAIN_P IF_P EXISTS typeNameList optionalDropBehavior
    | DROP INDEX CONCURRENTLY indexName optionalDropBehavior
    | DROP INDEX CONCURRENTLY IF_P EXISTS indexName optionalDropBehavior
    ;

objectTypeAnyName
    : VIEW
    | MATERIALIZED VIEW
    | FOREIGN TABLE
    | COLLATION
    | CONVERSION_P
    | STATISTICS
    | TEXT_P SEARCH PARSER
    | TEXT_P SEARCH DICTIONARY
    | TEXT_P SEARCH TEMPLATE
    | TEXT_P SEARCH CONFIGURATION
    ;

objectTypeName
    : dropTypeName
    | SUBSCRIPTION
    | TABLESPACE
    ;

dropTypeName
    : ACCESS METHOD
    | EVENT TRIGGER
    | EXTENSION
    | FOREIGN DATA_P WRAPPER
    | optionalProcedural LANGUAGE
    | PUBLICATION
    | SERVER
    ;

objectTypeNameOnAnyName
    : POLICY
    | RULE
    ;

anyNameList
    : anyName (COMMA anyName)*
    ;

anyName
    : columnId attributes?
    ;

attributes
    : (DOT attributeName)+
    ;

typeNameList
    : typeName (COMMA typeName)*
    ;

truncateStatement
    : TRUNCATE optionalTable relationExpressionList optionalRestartSequences optionalDropBehavior
    ;

optionalRestartSequences
    : CONTINUE_P IDENTITY_P
    | RESTART IDENTITY_P
    |
    ;

commentStatement
    : COMMENT ON objectTypeAnyName anyName IS commentText
    | COMMENT ON TABLE tableIdentifier IS commentText
    | COMMENT ON SEQUENCE sequenceName IS commentText
    | COMMENT ON INDEX indexName IS commentText
    | COMMENT ON COLUMN anyName IS commentText
    | COMMENT ON objectTypeName name IS commentText
    | COMMENT ON ROLE roleName IS commentText
    | COMMENT ON DATABASE databaseName IS commentText
    | COMMENT ON SCHEMA schemaName IS commentText
    | COMMENT ON TYPE_P typeName IS commentText
    | COMMENT ON DOMAIN_P typeName IS commentText
    | COMMENT ON AGGREGATE aggregateWithArgumentTypes IS commentText
    | COMMENT ON FUNCTION functionWithArgumentTypes IS commentText
    | COMMENT ON OPERATOR operatorWithArgumentTypes IS commentText
    | COMMENT ON CONSTRAINT constraintName ON (DOMAIN_P)? anyName IS commentText
    | COMMENT ON objectTypeNameOnAnyName name ON anyName IS commentText
    | COMMENT ON TRIGGER triggerName ON anyName IS commentText
    | COMMENT ON PROCEDURE functionWithArgumentTypes IS commentText
    | COMMENT ON ROUTINE functionWithArgumentTypes IS commentText
    | COMMENT ON TRANSFORM FOR typeName LANGUAGE name IS commentText
    | COMMENT ON OPERATOR CLASS anyName USING name IS commentText
    | COMMENT ON OPERATOR FAMILY anyName USING name IS commentText
    | COMMENT ON LARGE_P OBJECT_P numericOnly IS commentText
    | COMMENT ON CAST OPEN_PAREN typeName AS typeName CLOSE_PAREN IS commentText
    ;

commentText
    : sconst
    | NULL_P
    ;

securityLabelStatement
    : SECURITY LABEL optionalProvider ON objectTypeAnyName anyName IS securityLabel
    | SECURITY LABEL optionalProvider ON TABLE tableIdentifier IS securityLabel
    | SECURITY LABEL optionalProvider ON SEQUENCE sequenceName IS securityLabel
    | SECURITY LABEL optionalProvider ON INDEX indexName IS securityLabel
    | SECURITY LABEL optionalProvider ON COLUMN anyName IS securityLabel
    | SECURITY LABEL optionalProvider ON objectTypeName name IS securityLabel
    | SECURITY LABEL optionalProvider ON ROLE roleName IS securityLabel
    | SECURITY LABEL optionalProvider ON DATABASE databaseName IS securityLabel
    | SECURITY LABEL optionalProvider ON SCHEMA schemaName IS securityLabel
    | SECURITY LABEL optionalProvider ON TYPE_P typeName IS securityLabel
    | SECURITY LABEL optionalProvider ON DOMAIN_P typeName IS securityLabel
    | SECURITY LABEL optionalProvider ON AGGREGATE aggregateWithArgumentTypes IS securityLabel
    | SECURITY LABEL optionalProvider ON FUNCTION functionWithArgumentTypes IS securityLabel
    | SECURITY LABEL optionalProvider ON LARGE_P OBJECT_P numericOnly IS securityLabel
    | SECURITY LABEL optionalProvider ON PROCEDURE functionWithArgumentTypes IS securityLabel
    | SECURITY LABEL optionalProvider ON ROUTINE functionWithArgumentTypes IS securityLabel
    ;

optionalProvider
    : FOR nonReservedWordOrSconst
    |
    ;

securityLabel
    : sconst
    | NULL_P
    ;

fetchStatement
    : FETCH fetchArguments
    | MOVE fetchArguments
    ;

fetchArguments
    : cursorName
    | fromOrIn cursorName
    | NEXT optionalFromOrIn cursorName
    | PRIOR optionalFromOrIn cursorName
    | FIRST_P optionalFromOrIn cursorName
    | LAST_P optionalFromOrIn cursorName
    | ABSOLUTE_P signedIconst optionalFromOrIn cursorName
    | RELATIVE_P signedIconst optionalFromOrIn cursorName
    | signedIconst optionalFromOrIn cursorName
    | ALL optionalFromOrIn cursorName
    | FORWARD optionalFromOrIn cursorName
    | FORWARD signedIconst optionalFromOrIn cursorName
    | FORWARD ALL optionalFromOrIn cursorName
    | BACKWARD optionalFromOrIn cursorName
    | BACKWARD signedIconst optionalFromOrIn cursorName
    | BACKWARD ALL optionalFromOrIn cursorName
    ;

fromOrIn
    : FROM
    | IN_P
    ;

optionalFromOrIn
    : fromOrIn
    |
    ;

grantStatement
    : GRANT privileges ON privilegeTarget TO granteeList optionalWithGrantOption
    ;

revokeStatement
    : REVOKE privileges ON privilegeTarget FROM granteeList optionalDropBehavior
    | REVOKE GRANT OPTION FOR privileges ON privilegeTarget FROM granteeList optionalDropBehavior
    ;

privileges
    : privilegeList
    | ALL
    | ALL PRIVILEGES
    | ALL OPEN_PAREN columnList CLOSE_PAREN
    | ALL PRIVILEGES OPEN_PAREN columnList CLOSE_PAREN
    ;

privilegeList
    : privilege (COMMA privilege)*
    ;

privilege
    : SELECT columnListWithParentheses
    | REFERENCES columnListWithParentheses
    | CREATE columnListWithParentheses
    | columnId columnListWithParentheses
    ;

privilegeTarget
    : qualifiedNameList
    | TABLE qualifiedNameList
    | SEQUENCE sequenceNameList
    | FOREIGN DATA_P WRAPPER nameList
    | FOREIGN SERVER nameList
    | FUNCTION functionWithArgumentTypesList
    | PROCEDURE functionWithArgumentTypesList
    | ROUTINE functionWithArgumentTypesList
    | DATABASE databaseNameList
    | DOMAIN_P anyNameList
    | LANGUAGE nameList
    | LARGE_P OBJECT_P numericOnlyList
    | SCHEMA schemaNameList
    | TABLESPACE nameList
    | TYPE_P anyNameList
    | ALL (TABLES | SEQUENCES | FUNCTIONS | PROCEDURES | ROUTINES) IN_P SCHEMA schemaNameList
    ;

granteeList
    : grantee (COMMA grantee)*
    ;

grantee
    : roleName
    | GROUP_P roleName
    ;

optionalWithGrantOption
    : WITH GRANT OPTION
    |
    ;

grantPrivilegeStatement
    : GRANT privilegeList TO roleNameList optionalGrantAdminOption optionalGrantedBy
    ;

revokePrivilegeStatement
    : REVOKE privilegeList FROM roleNameList optionalGrantedBy optionalDropBehavior
    | REVOKE ADMIN OPTION FOR privilegeList FROM roleNameList optionalGrantedBy optionalDropBehavior
    ;

optionalGrantAdminOption
    : WITH ADMIN OPTION
    |
    ;

optionalGrantedBy
    : GRANTED BY roleName
    |
    ;

alterDefaultPrivilegesStatement
    : ALTER DEFAULT PRIVILEGES defultPrivilegeOption* defaultPrivelegeAction
    ;

defultPrivilegeOption
    : IN_P SCHEMA schemaNameList
    | FOR roleOrAliases roleNameList
    ;

defaultPrivelegeAction
    : GRANT privileges ON defultPrivilegeTarget TO granteeList optionalWithGrantOption
    | REVOKE privileges ON defultPrivilegeTarget FROM granteeList optionalDropBehavior
    | REVOKE GRANT OPTION FOR privileges ON defultPrivilegeTarget FROM granteeList optionalDropBehavior
    ;

defultPrivilegeTarget
    : TABLES
    | FUNCTIONS
    | ROUTINES
    | SEQUENCES
    | TYPES_P
    | SCHEMAS
    ;

//create index

indexStatement
    : CREATE UNIQUE? INDEX CONCURRENTLY? name? ON relationExpression optionalAccessMethodClause OPEN_PAREN indexParameters CLOSE_PAREN optionalInclude optionalRelOptions optionalTablespace whereClause
    | CREATE UNIQUE? INDEX CONCURRENTLY? IF_P NOT EXISTS name ON relationExpression optionalAccessMethodClause OPEN_PAREN indexParameters CLOSE_PAREN optionalInclude optionalRelOptions optionalTablespace whereClause
    ;

optionalAccessMethodClause
    : USING name
    |
    ;

indexParameters
    : indexElement (COMMA indexElement)*
    ;

indexElemOptions
    : optionalCollate optionalClass optionalAscOrDesc optionalNullsOrder
    | optionalCollate anyName relOptions optionalAscOrDesc optionalNullsOrder
    ;

indexElement
    : columnId indexElemOptions
    | functionExpressionWindowless indexElemOptions
    | OPEN_PAREN expression1 CLOSE_PAREN indexElemOptions
    ;

optionalInclude
    : INCLUDE OPEN_PAREN indexElement (COMMA indexElement)* CLOSE_PAREN
    |
    ;

optionalCollate
    : COLLATE anyName
    |
    ;

optionalClass
    : anyName
    |
    ;

optionalAscOrDesc
    : ASC
    | DESC
    |
    ;

//TOD NULLS_LA was used

optionalNullsOrder
    : NULLS_P FIRST_P
    | NULLS_P LAST_P
    |
    ;

createFunctionStatement
    : CREATE optionalOrReplace (FUNCTION | PROCEDURE) functionName OPEN_PAREN functionArgumentsWithDefaultsList? CLOSE_PAREN (RETURNS (functionReturn | TABLE OPEN_PAREN tableFunctionColumnList CLOSE_PAREN))? createFunctionOptionList
    ;

optionalOrReplace
    : OR REPLACE
    |
    ;

functionArgumentsList
    : functionArgument (COMMA functionArgument)*
    ;

functionWithArgumentTypesList
    : functionWithArgumentTypes (COMMA functionWithArgumentTypes)*
    ;

functionWithArgumentTypes
    : functionName OPEN_PAREN functionArgumentsList? CLOSE_PAREN
    | typeFunctionNameKeyword
    | columnId indirection?
    ;

functionArgumentsWithDefaultsList
    : functionArgumentWithDefault (COMMA functionArgumentWithDefault)*
    ;

functionArgumentWithDefault
    : functionArgument ((DEFAULT | EQUAL) expression1)?
    ;

functionArgument
    : argumentClass parameterName? functionType
    | parameterName argumentClass? functionType
    | functionType
    ;

argumentClass
    : IN_P OUT_P?
    | OUT_P
    | INOUT
    | VARIADIC
    ;

parameterName
    : typeFunctionName
    | builtinFunctionName
    | LEFT
    | RIGHT
    ;

functionReturn
    : functionType
    ;

functionType
    : typeName
    | SETOF? (builtinFunctionName | typeFunctionName | LEFT | RIGHT) attributes PERCENT TYPE_P
    ;

aggregateArguments
    : OPEN_PAREN (STAR | aggregateArgumentsList | ORDER BY aggregateArgumentsList | aggregateArgumentsList ORDER BY aggregateArgumentsList) CLOSE_PAREN
    ;

aggregateArgumentsList
    : functionArgument (COMMA functionArgument)*
    ;

aggregateWithArgumentTypes
    : functionName aggregateArguments
    ;

aggregateWithArgumentTypesList
    : aggregateWithArgumentTypes (COMMA aggregateWithArgumentTypes)*
    ;

createFunctionOptionList
    : createFunctionOptionItem+ {
                this.ParseRoutineBody(localContext);
            }
    //                    | createfunc_opt_list createfunc_opt_item
    ;

commonFunctionOptionItem
    : CALLED ON NULL_P INPUT_P
    | RETURNS NULL_P ON NULL_P INPUT_P
    | STRICT_P
    | IMMUTABLE
    | STABLE
    | VOLATILE
    | EXTERNAL SECURITY DEFINER
    | EXTERNAL SECURITY INVOKER
    | SECURITY DEFINER
    | SECURITY INVOKER
    | LEAKPROOF
    | NOT LEAKPROOF
    | COST numericOnly
    | ROWS numericOnly
    | SUPPORT anyName
    | functionSetResetClause
    | PARALLEL columnId
    ;

createFunctionOptionItem
    : AS functionAs
    | LANGUAGE nonReservedWordOrSconst
    | TRANSFORM transformTypeList
    | WINDOW
    | commonFunctionOptionItem
    ;

//https://www.postgresql.org/docs/9.1/sql-createfunction.html

//    | AS 'definition'

//    | AS 'obj_file', 'link_symbol'

functionAs
    locals[ParserRuleContext Definition]
    :
    /* |AS 'definition'*/ def = sconst
    /*| AS 'obj_file', 'link_symbol'*/
    | sconst COMMA sconst
    ;

transformTypeList
    : FOR TYPE_P typeName (COMMA FOR TYPE_P typeName)*
    ;

optionalDefinition
    : WITH definition
    |
    ;

tableFunctionColumn
    : parameterName functionType
    ;

tableFunctionColumnList
    : tableFunctionColumn (COMMA tableFunctionColumn)*
    ;

alterFunctionStatement
    : ALTER (FUNCTION | PROCEDURE | ROUTINE) functionWithArgumentTypes commonFunctionOptionItem+ RESTRICT?
    ;

removeFunctionStatement
    : DROP FUNCTION functionWithArgumentTypesList optionalDropBehavior
    | DROP FUNCTION IF_P EXISTS functionWithArgumentTypesList optionalDropBehavior
    | DROP PROCEDURE functionWithArgumentTypesList optionalDropBehavior
    | DROP PROCEDURE IF_P EXISTS functionWithArgumentTypesList optionalDropBehavior
    | DROP ROUTINE functionWithArgumentTypesList optionalDropBehavior
    | DROP ROUTINE IF_P EXISTS functionWithArgumentTypesList optionalDropBehavior
    ;

removeAggregateStatement
    : DROP AGGREGATE aggregateWithArgumentTypesList optionalDropBehavior
    | DROP AGGREGATE IF_P EXISTS aggregateWithArgumentTypesList optionalDropBehavior
    ;

removeOperatorStatement
    : DROP OPERATOR operatorWithArgumentTypesList optionalDropBehavior
    | DROP OPERATOR IF_P EXISTS operatorWithArgumentTypesList optionalDropBehavior
    ;

operatorArgumentTypes
    : OPEN_PAREN typeName CLOSE_PAREN
    | OPEN_PAREN typeName COMMA typeName CLOSE_PAREN
    | OPEN_PAREN NONE COMMA typeName CLOSE_PAREN
    | OPEN_PAREN typeName COMMA NONE CLOSE_PAREN
    ;

anyOperator
    : (columnId DOT)* allOperator
    ;

operatorWithArgumentTypesList
    : operatorWithArgumentTypes (COMMA operatorWithArgumentTypes)*
    ;

operatorWithArgumentTypes
    : anyOperator operatorArgumentTypes
    ;

doStatement
    : DO doStatementOptionsList
    ;

doStatementOptionsList
    : doStatementOptionItem+
    ;

doStatementOptionItem
    : sconst
    | LANGUAGE nonReservedWordOrSconst
    ;

createCastStatement
    : CREATE CAST OPEN_PAREN typeName AS typeName CLOSE_PAREN WITH FUNCTION functionWithArgumentTypes castContext
    | CREATE CAST OPEN_PAREN typeName AS typeName CLOSE_PAREN WITHOUT FUNCTION castContext
    | CREATE CAST OPEN_PAREN typeName AS typeName CLOSE_PAREN WITH INOUT castContext
    ;

castContext
    : AS IMPLICIT_P
    | AS ASSIGNMENT
    |
    ;

dropCastStatement
    : DROP CAST optionalIfExists OPEN_PAREN typeName AS typeName CLOSE_PAREN optionalDropBehavior
    ;

optionalIfExists
    : IF_P EXISTS
    |
    ;

createTransformStatement
    : CREATE optionalOrReplace TRANSFORM FOR typeName LANGUAGE name OPEN_PAREN transformElementList CLOSE_PAREN
    ;

transformElementList
    : FROM SQL_P WITH FUNCTION functionWithArgumentTypes COMMA TO SQL_P WITH FUNCTION functionWithArgumentTypes
    | TO SQL_P WITH FUNCTION functionWithArgumentTypes COMMA FROM SQL_P WITH FUNCTION functionWithArgumentTypes
    | FROM SQL_P WITH FUNCTION functionWithArgumentTypes
    | TO SQL_P WITH FUNCTION functionWithArgumentTypes
    ;

dropTransformStatement
    : DROP TRANSFORM optionalIfExists FOR typeName LANGUAGE name optionalDropBehavior
    ;

reindexStatement
    : REINDEX (OPEN_PAREN reindexOptionList CLOSE_PAREN)? reindexTargetType CONCURRENTLY? qualifiedName
    | REINDEX (OPEN_PAREN reindexOptionList CLOSE_PAREN)? DATABASE CONCURRENTLY? databaseName
    | REINDEX (OPEN_PAREN reindexOptionList CLOSE_PAREN)? SCHEMA CONCURRENTLY? schemaName
    | REINDEX (OPEN_PAREN reindexOptionList CLOSE_PAREN)? INDEX CONCURRENTLY? indexName
    | REINDEX (OPEN_PAREN reindexOptionList CLOSE_PAREN)? SYSTEM_P CONCURRENTLY? name
    ;

reindexTargetType
    : TABLE
    | SYSTEM_P
    ;

reindexOptionList
    : reindexOptionElement (COMMA reindexOptionElement)*
    ;

reindexOptionElement
    : VERBOSE
    | TABLESPACE
    | CONCURRENTLY
    ;

alterTablespaceStatement
    : ALTER TABLESPACE name SET relOptions
    | ALTER TABLESPACE name RESET relOptions
    ;

renameStatement
    : ALTER AGGREGATE aggregateWithArgumentTypes RENAME TO name
    | ALTER COLLATION anyName RENAME TO name
    | ALTER CONVERSION_P anyName RENAME TO name
    | ALTER DATABASE databaseName RENAME TO name
    | ALTER DOMAIN_P anyName RENAME TO name
    | ALTER DOMAIN_P anyName RENAME CONSTRAINT constraintName TO name
    | ALTER FOREIGN DATA_P WRAPPER name RENAME TO name
    | ALTER FUNCTION functionWithArgumentTypes RENAME TO name
    | ALTER optionalProcedural LANGUAGE name RENAME TO name
    | ALTER OPERATOR CLASS anyName USING name RENAME TO name
    | ALTER OPERATOR FAMILY anyName USING name RENAME TO name
    | ALTER POLICY name ON qualifiedName RENAME TO name
    | ALTER POLICY IF_P EXISTS name ON qualifiedName RENAME TO name
    | ALTER PROCEDURE functionWithArgumentTypes RENAME TO name
    | ALTER PUBLICATION name RENAME TO name
    | ALTER ROUTINE functionWithArgumentTypes RENAME TO name
    | ALTER SCHEMA schemaName RENAME TO name
    | ALTER SERVER name RENAME TO name
    | ALTER SUBSCRIPTION name RENAME TO name
    | ALTER TABLE relationExpression RENAME TO name
    | ALTER TABLE IF_P EXISTS relationExpression RENAME TO name
    | ALTER SEQUENCE (IF_P EXISTS)? sequenceName RENAME TO name
    | ALTER VIEW qualifiedName RENAME TO name
    | ALTER VIEW IF_P EXISTS qualifiedName RENAME TO name
    | ALTER MATERIALIZED VIEW qualifiedName RENAME TO name
    | ALTER MATERIALIZED VIEW IF_P EXISTS qualifiedName RENAME TO name
    | ALTER INDEX (IF_P EXISTS)? indexName RENAME TO name
    | ALTER FOREIGN TABLE relationExpression RENAME TO name
    | ALTER FOREIGN TABLE IF_P EXISTS relationExpression RENAME TO name
    | ALTER TABLE relationExpression RENAME optionalColumn name TO name
    | ALTER TABLE IF_P EXISTS relationExpression RENAME optionalColumn name TO name
    | ALTER VIEW qualifiedName RENAME optionalColumn name TO name
    | ALTER VIEW IF_P EXISTS qualifiedName RENAME optionalColumn name TO name
    | ALTER MATERIALIZED VIEW qualifiedName RENAME optionalColumn name TO name
    | ALTER MATERIALIZED VIEW IF_P EXISTS qualifiedName RENAME optionalColumn name TO name
    | ALTER TABLE (IF_P EXISTS)? relationExpression RENAME CONSTRAINT constraintName TO name
    | ALTER FOREIGN TABLE relationExpression RENAME optionalColumn name TO name
    | ALTER FOREIGN TABLE IF_P EXISTS relationExpression RENAME optionalColumn name TO name
    | ALTER RULE name ON qualifiedName RENAME TO name
    | ALTER TRIGGER triggerName ON qualifiedName RENAME TO name
    | ALTER EVENT TRIGGER name RENAME TO name
    | ALTER roleOrAliases roleName RENAME TO roleName
    | ALTER TABLESPACE name RENAME TO name
    | ALTER STATISTICS anyName RENAME TO name
    | ALTER TEXT_P SEARCH PARSER anyName RENAME TO name
    | ALTER TEXT_P SEARCH DICTIONARY anyName RENAME TO name
    | ALTER TEXT_P SEARCH TEMPLATE anyName RENAME TO name
    | ALTER TEXT_P SEARCH CONFIGURATION anyName RENAME TO name
    | ALTER TYPE_P anyName RENAME TO name
    | ALTER TYPE_P anyName RENAME ATTRIBUTE name TO name optionalDropBehavior
    ;

optionalColumn
    : COLUMN
    |
    ;

optionalSetData
    : SET DATA_P
    |
    ;

alterObjectDependsStatement
    : ALTER FUNCTION functionWithArgumentTypes NO? DEPENDS ON EXTENSION name
    | ALTER PROCEDURE functionWithArgumentTypes NO? DEPENDS ON EXTENSION name
    | ALTER ROUTINE functionWithArgumentTypes NO? DEPENDS ON EXTENSION name
    | ALTER TRIGGER triggerName ON qualifiedName NO? DEPENDS ON EXTENSION name
    | ALTER MATERIALIZED VIEW qualifiedName NO? DEPENDS ON EXTENSION name
    | ALTER INDEX indexName NO? DEPENDS ON EXTENSION name
    ;

alterObjectSchemaStatement
    : ALTER AGGREGATE aggregateWithArgumentTypes SET SCHEMA schemaName
    | ALTER COLLATION anyName SET SCHEMA schemaName
    | ALTER CONVERSION_P anyName SET SCHEMA schemaName
    | ALTER DOMAIN_P anyName SET SCHEMA schemaName
    | ALTER EXTENSION name SET SCHEMA schemaName
    | ALTER FUNCTION functionWithArgumentTypes SET SCHEMA schemaName
    | ALTER OPERATOR operatorWithArgumentTypes SET SCHEMA schemaName
    | ALTER OPERATOR CLASS anyName USING name SET SCHEMA schemaName
    | ALTER OPERATOR FAMILY anyName USING name SET SCHEMA schemaName
    | ALTER PROCEDURE functionWithArgumentTypes SET SCHEMA schemaName
    | ALTER ROUTINE functionWithArgumentTypes SET SCHEMA schemaName
    | ALTER TABLE relationExpression SET SCHEMA schemaName
    | ALTER TABLE IF_P EXISTS relationExpression SET SCHEMA schemaName
    | ALTER STATISTICS anyName SET SCHEMA schemaName
    | ALTER TEXT_P SEARCH PARSER anyName SET SCHEMA schemaName
    | ALTER TEXT_P SEARCH DICTIONARY anyName SET SCHEMA schemaName
    | ALTER TEXT_P SEARCH TEMPLATE anyName SET SCHEMA schemaName
    | ALTER TEXT_P SEARCH CONFIGURATION anyName SET SCHEMA schemaName
    | ALTER SEQUENCE (IF_P EXISTS)? sequenceName SET SCHEMA schemaName
    | ALTER VIEW qualifiedName SET SCHEMA schemaName
    | ALTER VIEW IF_P EXISTS qualifiedName SET SCHEMA schemaName
    | ALTER MATERIALIZED VIEW qualifiedName SET SCHEMA schemaName
    | ALTER MATERIALIZED VIEW IF_P EXISTS qualifiedName SET SCHEMA schemaName
    | ALTER FOREIGN TABLE relationExpression SET SCHEMA schemaName
    | ALTER FOREIGN TABLE IF_P EXISTS relationExpression SET SCHEMA schemaName
    | ALTER TYPE_P anyName SET SCHEMA schemaName
    ;

alterOperatorStatement
    : ALTER OPERATOR operatorWithArgumentTypes SET OPEN_PAREN operatorDefinitionList CLOSE_PAREN
    ;

operatorDefinitionList
    : operatorDefinitionElement (COMMA operatorDefinitionElement)*
    ;

operatorDefinitionElement
    : columnLabel EQUAL NONE
    | columnLabel EQUAL operatorDefinitionArgument
    ;

operatorDefinitionArgument
    : functionType
    | reservedKeyword
    | allOperatorQualifier
    | numericOnly
    | sconst
    ;

alterTypeStatement
    : ALTER TYPE_P anyName SET OPEN_PAREN operatorDefinitionList CLOSE_PAREN
    ;

alterOwnerStatement
    : ALTER AGGREGATE aggregateWithArgumentTypes OWNER TO roleName
    | ALTER COLLATION anyName OWNER TO roleName
    | ALTER CONVERSION_P anyName OWNER TO roleName
    | ALTER DATABASE databaseName OWNER TO roleName
    | ALTER DOMAIN_P anyName OWNER TO roleName
    | ALTER FUNCTION functionWithArgumentTypes OWNER TO roleName
    | ALTER optionalProcedural LANGUAGE name OWNER TO roleName
    | ALTER LARGE_P OBJECT_P numericOnly OWNER TO roleName
    | ALTER OPERATOR operatorWithArgumentTypes OWNER TO roleName
    | ALTER OPERATOR CLASS anyName USING name OWNER TO roleName
    | ALTER OPERATOR FAMILY anyName USING name OWNER TO roleName
    | ALTER PROCEDURE functionWithArgumentTypes OWNER TO roleName
    | ALTER ROUTINE functionWithArgumentTypes OWNER TO roleName
    | ALTER SCHEMA schemaName OWNER TO roleName
    | ALTER TYPE_P anyName OWNER TO roleName
    | ALTER TABLESPACE name OWNER TO roleName
    | ALTER STATISTICS anyName OWNER TO roleName
    | ALTER TEXT_P SEARCH DICTIONARY anyName OWNER TO roleName
    | ALTER TEXT_P SEARCH CONFIGURATION anyName OWNER TO roleName
    | ALTER FOREIGN DATA_P WRAPPER name OWNER TO roleName
    | ALTER SERVER name OWNER TO roleName
    | ALTER EVENT TRIGGER name OWNER TO roleName
    | ALTER PUBLICATION name OWNER TO roleName
    | ALTER SUBSCRIPTION name OWNER TO roleName
    ;

createPublicationStatement
    : CREATE PUBLICATION name optionalPublicationForTables optionalDefinition
    ;

optionalPublicationForTables
    : publicationForTables
    |
    ;

publicationForTables
    : FOR TABLE relationExpressionList
    | FOR ALL TABLES
    ;

alterPublicationStatement
    : ALTER PUBLICATION name SET definition
    | ALTER PUBLICATION name ADD_P TABLE relationExpressionList
    | ALTER PUBLICATION name SET TABLE relationExpressionList
    | ALTER PUBLICATION name DROP TABLE relationExpressionList
    ;

createSubscriptionStatement
    : CREATE SUBSCRIPTION name CONNECTION sconst PUBLICATION publicationNameList optionalDefinition
    ;

publicationNameList
    : publicationNameItem (COMMA publicationNameItem)*
    ;

publicationNameItem
    : columnLabel
    ;

alterSubscriptionStatement
    : ALTER SUBSCRIPTION name SET definition
    | ALTER SUBSCRIPTION name CONNECTION sconst
    | ALTER SUBSCRIPTION name REFRESH PUBLICATION optionalDefinition
    | ALTER SUBSCRIPTION name SET PUBLICATION publicationNameList optionalDefinition
    | ALTER SUBSCRIPTION name ENABLE_P
    | ALTER SUBSCRIPTION name DISABLE_P
    ;

dropSubscriptionStatement
    : DROP SUBSCRIPTION name optionalDropBehavior
    | DROP SUBSCRIPTION IF_P EXISTS name optionalDropBehavior
    ;

ruleStatement
    : CREATE optionalOrReplace RULE name AS ON event TO qualifiedName whereClause DO optionalInstead ruleActionList
    ;

ruleActionList
    : NOTHING
    | ruleActionStatement
    | OPEN_PAREN ruleActionMulti CLOSE_PAREN
    ;

ruleActionMulti
    : ruleActionStatementOrEmpty (SEMI ruleActionStatementOrEmpty)*
    ;

ruleActionStatement
    : selectStatement
    | insertStatement
    | updateStatement
    | deleteStatement
    | notifyStatement
    ;

ruleActionStatementOrEmpty
    : ruleActionStatement
    |
    ;

event
    : SELECT
    | UPDATE
    | DELETE_P
    | INSERT
    ;

optionalInstead
    : INSTEAD
    | ALSO
    |
    ;

notifyStatement
    : NOTIFY columnId notifyPayload
    ;

notifyPayload
    : COMMA sconst
    |
    ;

listenStatement
    : LISTEN columnId
    ;

unlistenStatement
    : UNLISTEN columnId
    | UNLISTEN STAR
    ;

transactionStatement
    : ABORT_P optionalTransaction optionalTransactionChain
    | BEGIN_P optionalTransaction transactionModeList?
    | START TRANSACTION transactionModeList?
    | COMMIT optionalTransaction optionalTransactionChain
    | END_P optionalTransaction optionalTransactionChain
    | ROLLBACK optionalTransaction optionalTransactionChain
    | SAVEPOINT columnId
    | RELEASE SAVEPOINT columnId
    | RELEASE columnId
    | ROLLBACK optionalTransaction TO SAVEPOINT columnId
    | ROLLBACK optionalTransaction TO columnId
    | PREPARE TRANSACTION sconst
    | COMMIT PREPARED sconst
    | ROLLBACK PREPARED sconst
    ;

optionalTransaction
    : WORK
    | TRANSACTION
    |
    ;

transactionModeItem
    : ISOLATION LEVEL isoLevel
    | READ ONLY
    | READ WRITE
    | DEFERRABLE
    | NOT DEFERRABLE
    ;

transactionModeList
    : transactionModeItem (COMMA? transactionModeItem)*
    ;

optionalTransactionChain
    : AND NO? CHAIN
    |
    ;

viewStatement
    : CREATE (OR REPLACE)? temporaryOption (VIEW qualifiedName columnListWithParentheses optionalRelOptions | RECURSIVE VIEW qualifiedName OPEN_PAREN columnList CLOSE_PAREN optionalRelOptions) AS selectStatement optionalCheckOption
    ;

optionalCheckOption
    : WITH (CASCADED | LOCAL)? CHECK OPTION
    |
    ;

loadStatement
    : LOAD fileName
    ;

createDatabaseStatement
    : CREATE DATABASE name optionalWith createDatabaseOptionList
    ;

createDatabaseOptionList
    : createDatabaseOptionItem+
    |
    ;

createDatabaseOptionItem
    : createDatabaseOptionName EQUAL? (signedIconst | booleanOrString | DEFAULT)
    ;

createDatabaseOptionName
    : identifier
    | CONNECTION LIMIT
    | ENCODING
    | LOCATION
    | OWNER
    | TABLESPACE
    | TEMPLATE
    ;

alterDatabaseStatement
    : ALTER DATABASE databaseName (WITH createDatabaseOptionList | createDatabaseOptionList | SET TABLESPACE name)
    ;

alterDatabaseSetStatement
    : ALTER DATABASE databaseName setResetClause
    ;

dropDatabaseStatement
    : DROP DATABASE (IF_P EXISTS)? databaseName (optionalWith OPEN_PAREN FORCE (COMMA FORCE)* CLOSE_PAREN)?
    ;

alterCollationStatement
    : ALTER COLLATION anyName REFRESH VERSION_P
    ;

alterSystemStatement
    : ALTER SYSTEM_P (SET | RESET) genericSetClause
    ;

createDomainStatement
    : CREATE DOMAIN_P anyName optionalAs typeName columnQualifierList
    ;

alterDomainStatement
    : ALTER DOMAIN_P anyName alterDomainCommand
    ;

alterDomainCommand
    : alterColumnDefault
    | DROP NOT NULL_P
    | SET NOT NULL_P
    | ADD_P tableConstraint
    | DROP CONSTRAINT (IF_P EXISTS)? constraintName optionalDropBehavior
    | VALIDATE CONSTRAINT constraintName
    ;

optionalAs
    : AS
    |
    ;

altertsDictionaryStatement
    : ALTER TEXT_P SEARCH DICTIONARY anyName definition
    ;

altertsConfigurationStatement
    : ALTER TEXT_P SEARCH CONFIGURATION anyName ADD_P MAPPING FOR nameList WITH anyNameList
    | ALTER TEXT_P SEARCH CONFIGURATION anyName ALTER MAPPING FOR nameList WITH anyNameList
    | ALTER TEXT_P SEARCH CONFIGURATION anyName ALTER MAPPING REPLACE anyName WITH anyName
    | ALTER TEXT_P SEARCH CONFIGURATION anyName ALTER MAPPING FOR nameList REPLACE anyName WITH anyName
    | ALTER TEXT_P SEARCH CONFIGURATION anyName DROP MAPPING FOR nameList
    | ALTER TEXT_P SEARCH CONFIGURATION anyName DROP MAPPING IF_P EXISTS FOR nameList
    ;

createConversionStatement
    : CREATE DEFAULT? CONVERSION_P anyName FOR sconst TO sconst FROM anyName
    ;

clusterStatement
    : CLUSTER optionalVerbose qualifiedName clusterIndexSpecification
    | CLUSTER optionalVerbose
    | CLUSTER optionalVerbose name ON qualifiedName
    ;

clusterIndexSpecification
    : USING name
    |
    ;

vacuumStatement
    : VACUUM FULL? FREEZE? optionalVerbose analyzeKeyword? optionalVacuumRelationList
    | VACUUM OPEN_PAREN vacuumAnalyzeOptionList CLOSE_PAREN optionalVacuumRelationList
    ;

analyzeStatement
    : analyzeKeyword optionalVerbose optionalVacuumRelationList
    | analyzeKeyword OPEN_PAREN vacuumAnalyzeOptionList CLOSE_PAREN optionalVacuumRelationList
    ;

vacuumAnalyzeOptionList
    : vacuumAnalyzeOptionElement (COMMA vacuumAnalyzeOptionElement)*
    ;

analyzeKeyword
    : ANALYZE
    | ANALYSE
    ;

vacuumAnalyzeOptionElement
    : vacuumAnalyzeOptionName vacuumAnalyzeOptionArgument
    ;

vacuumAnalyzeOptionName
    : nonReservedWord
    | analyzeKeyword
    ;

vacuumAnalyzeOptionArgument
    : booleanOrString
    | numericOnly
    |
    ;

optionalVerbose
    : VERBOSE
    |
    ;

optionalNameList
    : OPEN_PAREN nameList CLOSE_PAREN
    |
    ;

vacuumRelation
    : qualifiedName optionalNameList
    ;

optionalVacuumRelationList
    : vacuumRelation (COMMA vacuumRelation)*
    |
    ;

explainStatement
    : EXPLAIN explainableStatement
    | EXPLAIN analyzeKeyword optionalVerbose explainableStatement
    | EXPLAIN VERBOSE explainableStatement
    | EXPLAIN OPEN_PAREN explainOptionElement (COMMA explainOptionElement)* CLOSE_PAREN explainableStatement
    ;

explainableStatement
    : selectStatement
    | insertStatement
    | updateStatement
    | deleteStatement
    | declareCursorStatement
    | createAsStatement
    | createMaterializedViewStatement
    | refreshMaterializedViewStatement
    | executeStatement
    ;

explainOptionElement
    : explainOptionName explainOptionArgument
    ;

explainOptionName
    : nonReservedWord
    | analyzeKeyword
    ;

explainOptionArgument
    : booleanOrString
    | numericOnly
    |
    ;

prepareStatement
    : PREPARE name prepareTypeClause AS preparableStatement
    ;

prepareTypeClause
    : OPEN_PAREN typeList CLOSE_PAREN
    |
    ;

preparableStatement
    : selectStatement
    | insertStatement
    | updateStatement
    | deleteStatement
    ;

executeStatement
    : EXECUTE name executeParameterClause
    | CREATE temporaryOption TABLE createAsTarget AS EXECUTE name executeParameterClause withData
    | CREATE temporaryOption TABLE IF_P NOT EXISTS createAsTarget AS EXECUTE name executeParameterClause withData
    ;

executeParameterClause
    : OPEN_PAREN expressionList CLOSE_PAREN
    |
    ;

deallocateStatement
    : DEALLOCATE name
    | DEALLOCATE PREPARE name
    | DEALLOCATE ALL
    | DEALLOCATE PREPARE ALL
    ;

insertStatement
    : withClause? INSERT INTO insertTarget insertRest optionalOnConflict returningClause
    ;

insertTarget
    : tableIdentifier (AS columnId)?
    ;

insertRest
    : selectStatement
    | OVERRIDING overrideKind VALUE_P selectStatement
    | OPEN_PAREN insertColumnList CLOSE_PAREN (OVERRIDING overrideKind VALUE_P)? selectStatement
    | DEFAULT VALUES
    ;

overrideKind
    : USER
    | SYSTEM_P
    ;

insertColumnList
    : insertColumnItem (COMMA insertColumnItem)*
    ;

insertColumnItem
    : columnId optionalIndirection
    ;

optionalOnConflict
    : ON CONFLICT optionalConflictExpr DO (UPDATE SET setClauseList whereClause | NOTHING)
    |
    ;

optionalConflictExpr
    : OPEN_PAREN indexParameters CLOSE_PAREN whereClause
    | ON CONSTRAINT constraintName
    |
    ;

returningClause
    : RETURNING targetList
    |
    ;

// https://www.postgresql.org/docs/current/sql-merge.html
mergeStatement
    : MERGE INTO? qualifiedName aliasClause? USING (selectWithParenthesis | qualifiedName) aliasClause? ON expression1 (mergeInsertClause mergeUpdateClause? | mergeUpdateClause mergeInsertClause?) mergeDeleteClause?
    ;

mergeInsertClause
    : WHEN NOT MATCHED (AND expression1)? THEN? INSERT (OPEN_PAREN insertColumnList CLOSE_PAREN)? valuesClause
    ;

mergeUpdateClause
    : WHEN MATCHED (AND expression1)? THEN? UPDATE SET setClauseList
    ;

mergeDeleteClause
    : WHEN MATCHED THEN? DELETE_P
    ;

deleteStatement
    : withClause? DELETE_P FROM relationExpressionOptionalAlias usingClause whereOrCurrentClause returningClause
    ;

usingClause
    : USING fromList
    |
    ;

lockStatement
    : LOCK_P optionalTable relationExpressionList optionalLock optionalNowait
    ;

optionalLock
    : IN_P lockType MODE
    |
    ;

lockType
    : ACCESS (SHARE | EXCLUSIVE)
    | ROW (SHARE | EXCLUSIVE)
    | SHARE (UPDATE EXCLUSIVE | ROW EXCLUSIVE)?
    | EXCLUSIVE
    ;

optionalNowait
    : NOWAIT
    |
    ;

optionalNowaitOrSkip
    : NOWAIT
    | SKIP_P LOCKED
    |
    ;

updateStatement
    : withClause? UPDATE relationExpressionOptionalAlias SET setClauseList fromClause whereOrCurrentClause returningClause
    ;

setClauseList
    : setClause (COMMA setClause)*
    ;

setClause
    : setTarget EQUAL expression1
    | OPEN_PAREN setTarget (COMMA setTarget)* CLOSE_PAREN EQUAL expression1
    ;

setTarget
    : columnId optionalIndirection
    ;

declareCursorStatement
    : DECLARE cursorName (NO SCROLL | SCROLL | BINARY | INSENSITIVE)* CURSOR optionalHold FOR selectStatement
    ;

cursorName
    : name
    ;

optionalHold
    :
    | WITH HOLD
    | WITHOUT HOLD
    ;

/*
TODO: why select_with_parens alternative is needed at all?
i guess it because original byson grammar can choose selectStatement(2)->select_with_parens on only OPEN_PARENT/SELECT kewords at the begining of statement;
(select * from tab);
parse can go through selectStatement( )->select_no_parens(1)->select_clause(2)->select_with_parens(1)->select_no_parens(1)->select_clause(1)->simple_select
instead of           selectStatement(1)->select_no_parens(1)->select_clause(2)->select_with_parens(1)->select_no_parens(1)->select_clause(1)->simple_select
all standard tests passed on both variants
*/

selectStatement
    : selectWithoutParenthesis
    | selectWithParenthesis
    ;

selectWithParenthesis
    : OPEN_PAREN selectWithoutParenthesis CLOSE_PAREN
    | OPEN_PAREN selectWithParenthesis CLOSE_PAREN
    ;

selectWithoutParenthesis
    : selectClause optionalSortClause (forLockingClause optionalSelectLimit | selectLimit forLockingClause?)?
    | withClause selectClause optionalSortClause ( forLockingClause optionalSelectLimit | selectLimit forLockingClause?)?
    ;

selectClause
    : simpleSelectIntersect ((UNION | EXCEPT) allOrDistinct simpleSelectIntersect)*
    ;

simpleSelectIntersect
    : simpleSelectPramary (INTERSECT allOrDistinct simpleSelectPramary)*
    ;

simpleSelectStart
    : targetList intoClause?
    | allClause optionalTargetList intoClause?
    | distinctClause targetList intoClause?
    | intoClause
    ;

simpleSelectPramary
    : SELECT simpleSelectStart fromClause whereClause groupClause havingClause windowClause
    | valuesClause
    | TABLE relationExpression
    | selectWithParenthesis
    ;

withClause
    : WITH RECURSIVE? commonTableExpression (COMMA commonTableExpression)*
    ;

commonTableExpression
    : name optionalNameList AS optionalMaterialized OPEN_PAREN preparableStatement CLOSE_PAREN
    ;

optionalMaterialized
    : MATERIALIZED
    | NOT MATERIALIZED
    |
    ;

intoClause
    : INTO (STRICT_P? optionalTemporaryTableName | intoTarget)
    ;

optionalTemporaryTableName
    : (LOCAL | GLOBAL)? (TEMPORARY | TEMP) optionalTable qualifiedName
    | UNLOGGED optionalTable qualifiedName
    | TABLE qualifiedName
    | qualifiedName
    ;

optionalTable
    : TABLE
    |
    ;

allOrDistinct
    : ALL
    | DISTINCT
    |
    ;

distinctClause
    : DISTINCT (ON OPEN_PAREN expressionList CLOSE_PAREN)?
    ;

allClause
    : ALL
    ;

optionalSortClause
    : sortClause
    |
    ;

sortClause
    : ORDER BY sortByList
    ;

sortByList
    : sortBy (COMMA sortBy)*
    ;

sortBy
    : expression1 (USING allOperatorQualifier | optionalAscOrDesc) optionalNullsOrder
    ;

selectLimit
    : limitClause offsetClause?
    | offsetClause limitClause?
    ;

optionalSelectLimit
    : selectLimit
    |
    ;

limitClause
    : LIMIT selectLimitValue (COMMA selectOffsetValue)?
    | FETCH firstOrNext ( selectFetchFirstValue rowOrRows (ONLY | WITH TIES) | rowOrRows (ONLY | WITH TIES))
    ;

offsetClause
    : OFFSET (selectOffsetValue | selectFetchFirstValue rowOrRows)
    ;

selectLimitValue
    : expression1
    | ALL
    ;

selectOffsetValue
    : expression1
    ;

selectFetchFirstValue
    : expression3
    | PLUS anyConst
    | MINUS anyConst
    ;

anyConst
    : iconst
    | fconst
    ;

rowOrRows
    : ROW
    | ROWS
    ;

firstOrNext
    : FIRST_P
    | NEXT
    ;

groupClause
    : GROUP_P BY groupByList
    |
    ;

groupByList
    : groupByItem (COMMA groupByItem)*
    ;

groupByItem
    : expression1
    | OPEN_PAREN CLOSE_PAREN
    | CUBE OPEN_PAREN expressionList CLOSE_PAREN
    | ROLLUP OPEN_PAREN expressionList CLOSE_PAREN
    | GROUPING SETS OPEN_PAREN groupByList CLOSE_PAREN
    ;

havingClause
    : HAVING expression1
    |
    ;

forLockingClause
    : forLockingItem+
    | FOR READ ONLY
    ;

forLockingItem
    : forLockingStrength lockedRelationsList optionalNowaitOrSkip
    ;

forLockingStrength
    : FOR ((NO KEY)? UPDATE | KEY? SHARE)
    ;

lockedRelationsList
    : OF qualifiedNameList
    |
    ;

valuesClause
    : VALUES OPEN_PAREN expressionList CLOSE_PAREN (COMMA OPEN_PAREN expressionList CLOSE_PAREN)*
    ;

fromClause
    : FROM fromList
    |
    ;

fromList
    : nonAnsiJoin
    | tableReference (COMMA tableReference)*
    ;

nonAnsiJoin
    : tableReference (COMMA tableReference)+
    ;

tableReference
    : (
        relationExpression optionalAliasClause tableSampleClause?
        | functionTable functionAliasClause
        | xmlTable optionalAliasClause
        | selectWithParenthesis optionalAliasClause
        | LATERAL_P ( xmlTable optionalAliasClause | functionTable functionAliasClause | selectWithParenthesis optionalAliasClause)
        | OPEN_PAREN tableReference ( CROSS JOIN tableReference | NATURAL joinType? JOIN tableReference | joinType? JOIN tableReference joinQualifier)? CLOSE_PAREN optionalAliasClause
    ) (CROSS JOIN tableReference | NATURAL joinType? JOIN tableReference | joinType? JOIN tableReference joinQualifier)*
    ;

aliasClause
    : AS? columnId (OPEN_PAREN nameList CLOSE_PAREN)?
    ;

optionalAliasClause
    : tableAliasClause
    |
    ;

tableAliasClause
    : AS? tableAlias (OPEN_PAREN nameList CLOSE_PAREN)?
    ;

functionAliasClause
    : aliasClause
    | (AS columnId? | columnId) OPEN_PAREN tableFunctionElementList CLOSE_PAREN
    |
    ;

joinType
    : (FULL | LEFT | RIGHT | INNER_P) OUTER_P?
    ;

joinQualifier
    : USING OPEN_PAREN nameList CLOSE_PAREN
    | ON expression1
    ;

viewName
    : qualifiedName
    ;

relationExpression
    : tableIdentifier STAR?
    | ONLY (tableIdentifier | OPEN_PAREN tableIdentifier CLOSE_PAREN)
    ;

relationExpressionList
    : relationExpression (COMMA relationExpression)*
    ;

relationExpressionOptionalAlias
    : relationExpression (AS? columnId)?
    ;

tableSampleClause
    : TABLESAMPLE functionName OPEN_PAREN expressionList CLOSE_PAREN REPEATABLE OPEN_PAREN expression1 CLOSE_PAREN
    ;

functionTable
    : functionExpressionWindowless optionalOrdinality
    | ROWS FROM OPEN_PAREN rowsFromItem (COMMA rowsFromItem)* CLOSE_PAREN optionalOrdinality
    ;

rowsFromItem
    : functionExpressionWindowless optionalColumnDefinitionList
    ;

optionalColumnDefinitionList
    : AS OPEN_PAREN tableFunctionElementList CLOSE_PAREN
    |
    ;

//TODO WITH_LA was used

optionalOrdinality
    : WITH ORDINALITY
    |
    ;

whereClause
    : WHERE expression1
    |
    ;

whereOrCurrentClause
    : WHERE (CURRENT_P OF cursorName | expression1)
    |
    ;

optionalTableFunctionElementList
    : tableFunctionElementList
    |
    ;

tableFunctionElementList
    : tableFunctionElement (COMMA tableFunctionElement)*
    ;

tableFunctionElement
    : columnId typeName optionalCollateClause
    ;

xmlTable
    : XMLTABLE OPEN_PAREN (expression3 xmlExistsArgument COLUMNS xmlTableColumnElement (COMMA xmlTableColumnElement)* | XMLNAMESPACES OPEN_PAREN xmlNamespaceList CLOSE_PAREN COMMA expression3 xmlExistsArgument COLUMNS xmlTableColumnElement (COMMA xmlTableColumnElement)*) CLOSE_PAREN
    ;

xmlTableColumnElement
    : columnId (typeName xmlTableColumnOptionList? | FOR ORDINALITY)
    ;

xmlTableColumnOptionList
    : xmlTableColumnOptionElement+
    ;

xmlTableColumnOptionElement
    : DEFAULT expression1
    | identifier expression1
    | NOT NULL_P
    | NULL_P
    ;

xmlNamespaceList
    : xmlNamespaceElement (COMMA xmlNamespaceElement)*
    ;

xmlNamespaceElement
    : expression2 AS columnLabel
    | DEFAULT expression2
    ;

typeName
    : SETOF? simpleTypeName ((OPEN_BRACKET iconst? CLOSE_BRACKET)* | ARRAY (OPEN_BRACKET iconst CLOSE_BRACKET)?)
    | qualifiedName PERCENT (ROWTYPE | TYPE_P)
    ;

simpleTypeName
    : genericType
    | numeric
    | bit
    | character
    | constDateTime
    | constInterval (optionalInterval | OPEN_PAREN iconst CLOSE_PAREN)
    ;

constTypeName
    : numeric
    | constBit
    | constCharacter
    | constDateTime
    ;

genericType
    : (builtinFunctionName | typeFunctionName | LEFT | RIGHT) attributes? optionalTypeModifiers
    ;

optionalTypeModifiers
    : OPEN_PAREN expressionList CLOSE_PAREN
    |
    ;

numeric
    : INT_P
    | INTEGER
    | SMALLINT
    | BIGINT
    | REAL
    | FLOAT_P optionalFloat
    | DOUBLE_P PRECISION
    | DECIMAL_P optionalTypeModifiers
    | DEC optionalTypeModifiers
    | NUMERIC optionalTypeModifiers
    | BOOLEAN_P
    ;

optionalFloat
    : OPEN_PAREN iconst CLOSE_PAREN
    |
    ;

//todo: merge alts

bit
    : bitWithLength
    | bitWithoutLength
    ;

constBit
    : bitWithLength
    | bitWithoutLength
    ;

bitWithLength
    : BIT optionalVarying OPEN_PAREN expressionList CLOSE_PAREN
    ;

bitWithoutLength
    : BIT optionalVarying
    ;

character
    : characterChar (OPEN_PAREN iconst CLOSE_PAREN)?
    ;

constCharacter
    : characterChar (OPEN_PAREN iconst CLOSE_PAREN)?
    ;

characterChar
    : (CHARACTER | CHAR_P | NCHAR) optionalVarying
    | VARCHAR
    | NATIONAL (CHARACTER | CHAR_P) optionalVarying
    ;

optionalVarying
    : VARYING
    |
    ;

constDateTime
    : (TIMESTAMP | TIME) (OPEN_PAREN iconst CLOSE_PAREN)? optionalTimezone
    ;

constInterval
    : INTERVAL
    ;

//TODO with_la was used

optionalTimezone
    : WITH TIME ZONE
    | WITHOUT TIME ZONE
    |
    ;

optionalInterval
    : YEAR_P
    | MONTH_P
    | DAY_P
    | HOUR_P
    | MINUTE_P
    | intervalSecond
    | YEAR_P TO MONTH_P
    | DAY_P TO (HOUR_P | MINUTE_P | intervalSecond)
    | HOUR_P TO (MINUTE_P | intervalSecond)
    | MINUTE_P TO intervalSecond
    |
    ;

intervalSecond
    : SECOND_P (OPEN_PAREN iconst CLOSE_PAREN)?
    ;

optionalEscape
    : ESCAPE expression1
    |
    ;

//precendence accroding to Table 4.2. Operator Precedence (highest to lowest)

//https://www.postgresql.org/docs/12/sql-syntax-lexical.html#SQL-PRECEDENCE

/*
original version of a_expr, for info
 a_expr: c_expr
        //::	left	PostgreSQL-style typecast
       | a_expr TYPECAST typename -- 1
       | a_expr COLLATE any_name -- 2
       | a_expr AT TIME ZONE a_expr-- 3
       //right	unary plus, unary minus
       | (PLUS| MINUS) a_expr -- 4
        //left	exponentiation
       | a_expr CARET a_expr -- 5
        //left	multiplication, division, modulo
       | a_expr (STAR | SLASH | PERCENT) a_expr -- 6
        //left	addition, subtraction
       | a_expr (PLUS | MINUS) a_expr -- 7
        //left	all other native and user-defined operators
       | a_expr qual_op a_expr -- 8
       | qual_op a_expr -- 9
        //range containment, set membership, string matching BETWEEN IN LIKE ILIKE SIMILAR
       | a_expr NOT? (LIKE|ILIKE|SIMILAR TO|(BETWEEN SYMMETRIC?)) a_expr opt_escape -- 10
        //< > = <= >= <>	 	comparison operators
       | a_expr (LT | GT | EQUAL | LESS_EQUALS | GREATER_EQUALS | NOT_EQUALS) a_expr -- 11
       //IS ISNULL NOTNULL	 	IS TRUE, IS FALSE, IS NULL, IS DISTINCT FROM, etc
       | a_expr IS NOT?
            (
                NULL_P
                |TRUE_P
                |FALSE_P
                |UNKNOWN
                |DISTINCT FROM a_expr
                |OF OPEN_PAREN type_list CLOSE_PAREN
                |DOCUMENT_P
                |unicode_normal_form? NORMALIZED
            ) -- 12
       | a_expr (ISNULL|NOTNULL) -- 13
       | row OVERLAPS row -- 14
       //NOT	right	logical negation
       | NOT a_expr -- 15
        //AND	left	logical conjunction
       | a_expr AND a_expr -- 16
        //OR	left	logical disjunction
       | a_expr OR a_expr -- 17
       | a_expr (LESS_LESS|GREATER_GREATER) a_expr -- 18
       | a_expr qual_op -- 19
       | a_expr NOT? IN_P in_expr -- 20
       | a_expr subquery_Op sub_type (select_with_parens|OPEN_PAREN a_expr CLOSE_PAREN) -- 21
       | UNIQUE select_with_parens -- 22
       | DEFAULT -- 23
;
*/

expression1
    : expression1Qualifier
    ;

/*23*/

/*moved to c_expr*/

/*22*/

/*moved to c_expr*/

/*19*/

expression1Qualifier
    : expression1LessLess operatorQualifier?
    ;

/*18*/

expression1LessLess
    : expression1Or ((LESS_LESS | GREATER_GREATER) expression1Or)*
    ;

/*17*/

expression1Or
    : expression1And (OR expression1And)*
    ;

/*16*/

expression1And
    : expression1Between (AND expression1Between)*
    ;

/*21*/

expression1Between
    : expression1In (NOT? BETWEEN SYMMETRIC? expression1In AND expression1In)?
    ;

/*20*/

expression1In
    : expression1UnaryNot (NOT? IN_P inExpression)?
    ;

/*15*/

expression1UnaryNot
    : NOT? expression1IsNull
    ;

/*14*/

/*moved to c_expr*/

/*13*/

expression1IsNull
    : expression1IsNot (ISNULL | NOTNULL)?
    ;

/*12*/

expression1IsNot
    : expression1Compare (IS NOT? ( NULL_P | TRUE_P | FALSE_P | UNKNOWN | DISTINCT FROM expression1 | OF OPEN_PAREN typeList CLOSE_PAREN | DOCUMENT_P | unicodeNormalForm? NORMALIZED))?
    ;

/*11*/

expression1Compare
    : expression1Like ((LT | GT | EQUAL | LESS_EQUALS | GREATER_EQUALS | NOT_EQUALS) expression1Like | subqueryOperator subType (selectWithParenthesis | OPEN_PAREN expression1 CLOSE_PAREN) /*21*/)?
    ;

/*10*/

expression1Like
    : expression1qualifierOperator (NOT? (LIKE | ILIKE | SIMILAR TO) expression1qualifierOperator optionalEscape)?
    ;

/* 8*/

expression1qualifierOperator
    : expression1UnaryQualifierOperator (operatorQualifier expression1UnaryQualifierOperator)*
    ;

/* 9*/

expression1UnaryQualifierOperator
    : operatorQualifier? expression1Add
    ;

/* 7*/

expression1Add
    : expressionMultiply ((MINUS | PLUS) expressionMultiply)*
    ;

/* 6*/

expressionMultiply
    : expression1Caret ((STAR | SLASH | PERCENT) expression1Caret)*
    ;

/* 5*/

expression1Caret
    : expression1UnarySign (CARET expression1)?
    ;

/* 4*/

expression1UnarySign
    : (MINUS | PLUS)? expression1AtTimeZone /* */
    ;

/* 3*/

expression1AtTimeZone
    : expression1Collate (AT TIME ZONE expression1)?
    ;

/* 2*/

expression1Collate
    : expression1Typecast (COLLATE anyName)?
    ;

/* 1*/

expression1Typecast
    : expression3 (TYPECAST typeName)*
    ;

expression2
    : expression3
    | expression2 TYPECAST typeName
    //right	unary plus, unary minus
    | (PLUS | MINUS) expression2
    //^	left	exponentiation
    | expression2 CARET expression2
    //* / %	left	multiplication, division, modulo
    | expression2 (STAR | SLASH | PERCENT) expression2
    //+ -	left	addition, subtraction
    | expression2 (PLUS | MINUS) expression2
    //(any other operator)	left	all other native and user-defined operators
    | expression2 operatorQualifier expression2
    //< > = <= >= <>	 	comparison operators
    | expression2 (LT | GT | EQUAL | LESS_EQUALS | GREATER_EQUALS | NOT_EQUALS) expression2
    | operatorQualifier expression2
    | expression2 operatorQualifier
    //S ISNULL NOTNULL	 	IS TRUE, IS FALSE, IS NULL, IS DISTINCT FROM, etc
    | expression2 IS NOT? (DISTINCT FROM expression2 | OF OPEN_PAREN typeList CLOSE_PAREN | DOCUMENT_P)
    ;

expression3
    : EXISTS selectWithParenthesis                                              # c_expr_exists
    | ARRAY (selectWithParenthesis | arrayExpression)                           # c_expr_expr
    | PARAM optionalIndirection                                                 # c_expr_expr
    | GROUPING OPEN_PAREN expressionList CLOSE_PAREN                            # c_expr_expr
    | /*22*/ UNIQUE selectWithParenthesis                                       # c_expr_expr
    | columnReference                                                           # c_expr_expr
    | aExpressionConst                                                          # c_expr_expr
    | plsqlVariableName                                                         # c_expr_expr
    | OPEN_PAREN a_expr_in_parens = expression1 CLOSE_PAREN optionalIndirection # c_expr_expr
    | caseExpression                                                            # c_expr_case
    | functionExpression                                                        # c_expr_expr
    | selectWithParenthesis indirection?                                        # c_expr_expr
    | explicitRow                                                               # c_expr_expr
    | implicitRow                                                               # c_expr_expr
    | row OVERLAPS row /* 14*/                                                  # c_expr_expr
    ;

plsqlVariableName
    : PLSQLVARIABLENAME
    ;

functionApplication
    : functionName OPEN_PAREN (functionArgumentList (COMMA VARIADIC functionArgumentExpression)? optionalSortClause | VARIADIC functionArgumentExpression optionalSortClause | (ALL | DISTINCT) functionArgumentList optionalSortClause | STAR |) CLOSE_PAREN
    ;

functionExpression
    : functionApplication withinGroupClause filterClause overClause
    | functionExpressionCommonSubexpr
    ;

functionExpressionWindowless
    : functionApplication
    | functionExpressionCommonSubexpr
    ;

functionExpressionCommonSubexpr
    : COLLATION FOR OPEN_PAREN expression1 CLOSE_PAREN
    | CURRENT_DATE
    | CURRENT_TIME (OPEN_PAREN iconst CLOSE_PAREN)?
    | CURRENT_TIMESTAMP (OPEN_PAREN iconst CLOSE_PAREN)?
    | LOCALTIME (OPEN_PAREN iconst CLOSE_PAREN)?
    | LOCALTIMESTAMP (OPEN_PAREN iconst CLOSE_PAREN)?
    | CURRENT_ROLE
    | CURRENT_USER
    | SESSION_USER
    | USER
    | CURRENT_CATALOG
    | CURRENT_SCHEMA
    | CAST OPEN_PAREN expression1 AS typeName CLOSE_PAREN
    | EXTRACT OPEN_PAREN extractList CLOSE_PAREN
    | NORMALIZE OPEN_PAREN expression1 (COMMA unicodeNormalForm)? CLOSE_PAREN
    | OVERLAY OPEN_PAREN overlayList CLOSE_PAREN
    | POSITION OPEN_PAREN positionList CLOSE_PAREN
    | SUBSTRING OPEN_PAREN substrList CLOSE_PAREN
    | TREAT OPEN_PAREN expression1 AS typeName CLOSE_PAREN
    | TRIM OPEN_PAREN (BOTH | LEADING | TRAILING)? trimList CLOSE_PAREN
    | NULLIF OPEN_PAREN expression1 COMMA expression1 CLOSE_PAREN
    | COALESCE OPEN_PAREN expressionList CLOSE_PAREN
    | GREATEST OPEN_PAREN expressionList CLOSE_PAREN
    | LEAST OPEN_PAREN expressionList CLOSE_PAREN
    | XMLCONCAT OPEN_PAREN expressionList CLOSE_PAREN
    | XMLELEMENT OPEN_PAREN NAME_P columnLabel (COMMA (xmlAttributes | expressionList))? CLOSE_PAREN
    | XMLEXISTS OPEN_PAREN expression3 xmlExistsArgument CLOSE_PAREN
    | XMLFOREST OPEN_PAREN xmlAttributeList CLOSE_PAREN
    | XMLPARSE OPEN_PAREN documentOrContent expression1 xmlWhitespaceOption CLOSE_PAREN
    | XMLPI OPEN_PAREN NAME_P columnLabel (COMMA expression1)? CLOSE_PAREN
    | XMLROOT OPEN_PAREN XML_P expression1 COMMA xmlRootVersion optionalXmlRootStandalone CLOSE_PAREN
    | XMLSERIALIZE OPEN_PAREN documentOrContent expression1 AS simpleTypeName CLOSE_PAREN
    ;

xmlRootVersion
    : VERSION_P expression1
    | VERSION_P NO VALUE_P
    ;

optionalXmlRootStandalone
    : COMMA STANDALONE_P YES_P
    | COMMA STANDALONE_P NO
    | COMMA STANDALONE_P NO VALUE_P
    |
    ;

xmlAttributes
    : XMLATTRIBUTES OPEN_PAREN xmlAttributeList CLOSE_PAREN
    ;

xmlAttributeList
    : xmlAttributeElement (COMMA xmlAttributeElement)*
    ;

xmlAttributeElement
    : expression1 (AS columnLabel)?
    ;

documentOrContent
    : DOCUMENT_P
    | CONTENT_P
    ;

xmlWhitespaceOption
    : PRESERVE WHITESPACE_P
    | STRIP_P WHITESPACE_P
    |
    ;

xmlExistsArgument
    : PASSING expression3
    | PASSING expression3 xmlPassingMech
    | PASSING xmlPassingMech expression3
    | PASSING xmlPassingMech expression3 xmlPassingMech
    ;

xmlPassingMech
    : BY (REF | VALUE_P)
    ;

withinGroupClause
    : WITHIN GROUP_P OPEN_PAREN sortClause CLOSE_PAREN
    |
    ;

filterClause
    : FILTER OPEN_PAREN WHERE expression1 CLOSE_PAREN
    |
    ;

windowClause
    : WINDOW windowDefinitionList
    |
    ;

windowDefinitionList
    : windowDefinition (COMMA windowDefinition)*
    ;

windowDefinition
    : columnId AS windowSpecification
    ;

overClause
    : OVER (windowSpecification | columnId)
    |
    ;

windowSpecification
    : OPEN_PAREN optionalExistingWindowName optionalPartitionClause optionalSortClause optionalFrameClause CLOSE_PAREN
    ;

optionalExistingWindowName
    : columnId
    |
    ;

optionalPartitionClause
    : PARTITION BY expressionList
    |
    ;

optionalFrameClause
    : RANGE frameExtent optionalWindowExclusionClause
    | ROWS frameExtent optionalWindowExclusionClause
    | GROUPS frameExtent optionalWindowExclusionClause
    |
    ;

frameExtent
    : frameBound
    | BETWEEN frameBound AND frameBound
    ;

frameBound
    : UNBOUNDED (PRECEDING | FOLLOWING)
    | CURRENT_P ROW
    | expression1 (PRECEDING | FOLLOWING)
    ;

optionalWindowExclusionClause
    : EXCLUDE (CURRENT_P ROW | GROUP_P | TIES | NO OTHERS)
    |
    ;

row
    : ROW OPEN_PAREN expressionList? CLOSE_PAREN
    | OPEN_PAREN expressionList COMMA expression1 CLOSE_PAREN
    ;

explicitRow
    : ROW OPEN_PAREN expressionList? CLOSE_PAREN
    ;

/*
TODO:
for some reason v1
implicit_row: OPEN_PAREN expr_list COMMA a_expr CLOSE_PAREN;
works better than v2
implicit_row: OPEN_PAREN expr_list  CLOSE_PAREN;
while looks like they are almost the same, except v2 requieres at least 2 items in list
while v1 allows single item in list
*/

implicitRow
    : OPEN_PAREN expressionList COMMA expression1 CLOSE_PAREN
    ;

subType
    : ANY
    | SOME
    | ALL
    ;

allOperator
    : Operator
    | mathOperator
    ;

mathOperator
    : PLUS
    | MINUS
    | STAR
    | SLASH
    | PERCENT
    | CARET
    | LT
    | GT
    | EQUAL
    | LESS_EQUALS
    | GREATER_EQUALS
    | NOT_EQUALS
    ;

operatorQualifier
    : Operator
    | OPERATOR OPEN_PAREN anyOperator CLOSE_PAREN
    ;

allOperatorQualifier
    : allOperator
    | OPERATOR OPEN_PAREN anyOperator CLOSE_PAREN
    ;

subqueryOperator
    : allOperator
    | OPERATOR OPEN_PAREN anyOperator CLOSE_PAREN
    | LIKE
    | NOT LIKE
    | ILIKE
    | NOT ILIKE
    ;

expressionList
    : expression1 (COMMA expression1)*
    ;

functionArgumentList
    : functionArgumentExpression (COMMA functionArgumentExpression)*
    ;

functionArgumentExpression
    : expression1
    | parameterName (COLON_EQUALS | EQUALS_GREATER) expression1
    ;

typeList
    : typeName (COMMA typeName)*
    ;

arrayExpression
    : OPEN_BRACKET (expressionList | arrayExpressionList)? CLOSE_BRACKET
    ;

arrayExpressionList
    : arrayExpression (COMMA arrayExpression)*
    ;

extractList
    : extractArgument FROM expression1
    |
    ;

extractArgument
    : identifier
    | YEAR_P
    | MONTH_P
    | DAY_P
    | HOUR_P
    | MINUTE_P
    | SECOND_P
    | sconst
    ;

unicodeNormalForm
    : NFC
    | NFD
    | NFKC
    | NFKD
    ;

overlayList
    : expression1 PLACING expression1 FROM expression1 (FOR expression1)?
    ;

positionList
    : expression2 IN_P expression2
    |
    ;

substrList
    : expression1 FROM expression1 FOR expression1
    | expression1 FOR expression1 FROM expression1
    | expression1 FROM expression1
    | expression1 FOR expression1
    | expression1 SIMILAR expression1 ESCAPE expression1
    | expressionList
    ;

trimList
    : expression1 FROM expressionList
    | FROM expressionList
    | expressionList
    ;

inExpression
    : selectWithParenthesis                 # in_expr_select
    | OPEN_PAREN expressionList CLOSE_PAREN # in_expr_list
    ;

caseExpression
    : CASE caseArg whenClauseList caseDefault END_P
    ;

whenClauseList
    : whenClause+
    ;

whenClause
    : WHEN expression1 THEN expression1
    ;

caseDefault
    : ELSE expression1
    |
    ;

caseArg
    : expression1
    |
    ;

columnReference
    : columnId indirection?
    ;

indirectionElement
    : DOT (attributeName | STAR)
    | OPEN_BRACKET (expression1 | expression1? COLON expression1?) CLOSE_BRACKET
    ;

indirection
    : indirectionElement+
    ;

optionalIndirection
    : indirectionElement*
    ;

optionalTargetList
    : targetList
    |
    ;

targetList
    : targetElement (COMMA targetElement)*
    ;

targetElement
    : STAR                                        # target_star
    | expression1 (AS columnLabel | identifier |) # target_label
    ;

qualifiedNameList
    : qualifiedName (COMMA qualifiedName)*
    ;

databaseName
    : name
    ;

databaseNameList
    : databaseName (COMMA databaseName)*
    ;

schemaName
    : name
    ;

schemaNameList
    : schemaName (COMMA schemaName)*
    ;

indexName
    : qualifiedName
    ;

indexNameList
    : indexName (COMMA indexName)*
    ;

triggerName
    : name
    ;

constraintName
    : name
    ;

tableName
    : name
    ;

tableIdentifier
    : databaseName DOT schemaName DOT tableName
    | schemaName DOT tableName
    | tableName
    ;

tableIdentifierList
    : tableIdentifier (COMMA tableIdentifier)*
    ;

sequenceName
    : qualifiedName
    ;

sequenceNameList
    : sequenceName (COMMA sequenceName)*
    ;

qualifiedName
    : columnId indirection?
    ;

nameList
    : name (COMMA name)*
    ;

name
    : columnId
    ;

attributeName
    : columnLabel
    ;

fileName
    : sconst
    ;

functionName
    : builtinFunctionName
    | typeFunctionName
    | columnId indirection
    | LEFT
    | RIGHT
    ;

aExpressionConst
    : iconst
    | fconst
    | sconst
    | bconst
    | xconst
    | functionName (sconst | OPEN_PAREN functionArgumentList optionalSortClause CLOSE_PAREN sconst)
    | constTypeName sconst
    | constInterval (sconst optionalInterval | OPEN_PAREN iconst CLOSE_PAREN sconst)
    | TRUE_P
    | FALSE_P
    | NULL_P
    ;

xconst
    : HexadecimalStringConstant
    ;

bconst
    : BinaryStringConstant
    ;

fconst
    : Numeric
    ;

iconst
    : Integral
    ;

sconst
    : anySconst optionalUescape
    ;

anySconst
    : StringConstant
    | UnicodeEscapeStringConstant
    | BeginDollarStringConstant DollarText* EndDollarStringConstant
    | EscapeStringConstant
    ;

optionalUescape
    : UESCAPE anySconst
    |
    ;

signedIconst
    : iconst
    | PLUS iconst
    | MINUS iconst
    ;

roleName
    : nonReservedWord
    | CURRENT_USER
    | SESSION_USER
    ;

roleNameList
    : roleName (COMMA roleName)*
    ;

columnId
    : identifier
    | unreservedKeyword
    | columnNameKeyword
    | plsqlUnreservedKeyword
    | LEFT
    | RIGHT
    ;

tableAlias
    : identifier
    | unreservedKeyword
    | columnNameKeyword
    | plsqlUnreservedKeyword
    ;

typeFunctionName
    : identifier
    | unreservedKeyword
    | plsqlUnreservedKeyword
    | typeFunctionNameKeyword
    ;

nonReservedWord
    : identifier
    | unreservedKeyword
    | columnNameKeyword
    | typeFunctionNameKeyword
    ;

columnLabel
    : identifier
    | plsqlUnreservedKeyword
    | unreservedKeyword
    | columnNameKeyword
    | typeFunctionNameKeyword
    | reservedKeyword
    ;

identifier
    : Identifier optionalUescape
    | QuotedIdentifier
    | UnicodeQuotedIdentifier
    | plsqlVariableName
    | plsqlIdentifier
    | plsqlUnreservedKeyword
    ;

plsqlIdentifier
    : PLSQLIDENTIFIER
    ;

unreservedKeyword
    : ABORT_P
    | ABSOLUTE_P
    | ACCESS
    | ACTION
    | ADD_P
    | ADMIN
    | AFTER
    | AGGREGATE
    | ALSO
    | ALTER
    | ALWAYS
    | ASSERTION
    | ASSIGNMENT
    | AT
    | ATTACH
    | ATTRIBUTE
    | BACKWARD
    | BEFORE
    | BEGIN_P
    | BY
    | CACHE
    | CALL
    | CALLED
    | CASCADE
    | CASCADED
    | CATALOG
    | CHAIN
    | CHARACTERISTICS
    | CHECKPOINT
    | CLASS
    | CLOSE
    | CLUSTER
    | COLUMNS
    | COMMENT
    | COMMENTS
    | COMMIT
    | COMMITTED
    | CONFIGURATION
    | CONFLICT
    | CONNECTION
    | CONSTRAINTS
    | CONTENT_P
    | CONTINUE_P
    | CONVERSION_P
    | COPY
    | COST
    | CSV
    | CUBE
    | CURRENT_P
    | CURSOR
    | CYCLE
    | DATA_P
    | DATABASE
    | DAY_P
    | DEALLOCATE
    | DECLARE
    | DEFAULTS
    | DEFERRED
    | DEFINER
    | DELETE_P
    | DELIMITER
    | DELIMITERS
    | DEPENDS
    | DETACH
    | DICTIONARY
    | DISABLE_P
    | DISCARD
    | DOCUMENT_P
    | DOMAIN_P
    | DOUBLE_P
    | DROP
    | EACH
    | ENABLE_P
    | ENCODING
    | ENCRYPTED
    | ENUM_P
    | ESCAPE
    | EVENT
    | EXCLUDE
    | EXCLUDING
    | EXCLUSIVE
    | EXECUTE
    | EXPLAIN
    | EXPRESSION
    | EXTENSION
    | EXTERNAL
    | FAMILY
    | FILTER
    | FIRST_P
    | FOLLOWING
    | FORCE
    | FORWARD
    | FUNCTION
    | FUNCTIONS
    | GENERATED
    | GLOBAL
    | GRANTED
    | GROUPS
    | HANDLER
    | HEADER_P
    | HOLD
    | HOUR_P
    | IDENTITY_P
    | IF_P
    | IMMEDIATE
    | IMMUTABLE
    | IMPLICIT_P
    | IMPORT_P
    | INCLUDE
    | INCLUDING
    | INCREMENT
    | INDEX
    | INDEXES
    | INHERIT
    | INHERITS
    | INLINE_P
    | INPUT_P
    | INSENSITIVE
    | INSERT
    | INSTEAD
    | INVOKER
    | ISOLATION
    | KEY
    | LABEL
    | LANGUAGE
    | LARGE_P
    | LAST_P
    | LEAKPROOF
    | LEVEL
    | LISTEN
    | LOAD
    | LOCAL
    | LOCATION
    | LOCK_P
    | LOCKED
    | LOGGED
    | MAPPING
    | MATCH
    | MATERIALIZED
    | MAXVALUE
    | METHOD
    | MINUTE_P
    | MINVALUE
    | MODE
    | MONTH_P
    | MOVE
    | NAME_P
    | NAMES
    | NEW
    | NEXT
    | NFC
    | NFD
    | NFKC
    | NFKD
    | NO
    | NORMALIZED
    | NOTHING
    | NOTIFY
    | NOWAIT
    | NULLS_P
    | OBJECT_P
    | OF
    | OFF
    | OIDS
    | OLD
    | OPERATOR
    | OPTION
    | OPTIONS
    | ORDINALITY
    | OTHERS
    | OVER
    | OVERRIDING
    | OWNED
    | OWNER
    | PARALLEL
    | PARSER
    | PARTIAL
    | PARTITION
    | PASSING
    | PASSWORD
    | PLANS
    | POLICY
    | PRECEDING
    | PREPARE
    | PREPARED
    | PRESERVE
    | PRIOR
    | PRIVILEGES
    | PROCEDURAL
    | PROCEDURE
    | PROCEDURES
    | PROGRAM
    | PUBLICATION
    | QUOTE
    | RANGE
    | READ
    | REASSIGN
    | RECHECK
    | RECURSIVE
    | REF
    | REFERENCING
    | REFRESH
    | REINDEX
    | RELATIVE_P
    | RELEASE
    | RENAME
    | REPEATABLE
    | REPLICA
    | RESET
    | RESTART
    | RESTRICT
    | RETURNS
    | REVOKE
    | ROLE
    | ROLLBACK
    | ROLLUP
    | ROUTINE
    | ROUTINES
    | ROWS
    | RULE
    | SAVEPOINT
    | SCHEMA
    | SCHEMAS
    | SCROLL
    | SEARCH
    | SECOND_P
    | SECURITY
    | SEQUENCE
    | SEQUENCES
    | SERIALIZABLE
    | SERVER
    | SESSION
    | SET
    | SETS
    | SHARE
    | SHOW
    | SIMPLE
    | SKIP_P
    | SNAPSHOT
    | SQL_P
    | STABLE
    | STANDALONE_P
    | START
    | STATEMENT
    | STATISTICS
    | STDIN
    | STDOUT
    | STORAGE
    | STORED
    | STRICT_P
    | STRIP_P
    | SUBSCRIPTION
    | SUPPORT
    | SYSID
    | SYSTEM_P
    | TABLES
    | TABLESPACE
    | TEMP
    | TEMPLATE
    | TEMPORARY
    | TEXT_P
    | TIES
    | TRANSACTION
    | TRANSFORM
    | TRIGGER
    | TRUNCATE
    | TRUSTED
    | TYPE_P
    | TYPES_P
    | UESCAPE
    | UNBOUNDED
    | UNCOMMITTED
    | UNENCRYPTED
    | UNKNOWN
    | UNLISTEN
    | UNLOGGED
    | UNTIL
    | UPDATE
    | VACUUM
    | VALID
    | VALIDATE
    | VALIDATOR
    | VALUE_P
    | VARYING
    | VERSION_P
    | VIEW
    | VIEWS
    | VOLATILE
    | WHITESPACE_P
    | WITHIN
    | WITHOUT
    | WORK
    | WRAPPER
    | WRITE
    | XML_P
    | YEAR_P
    | YES_P
    | ZONE
    ;

columnNameKeyword
    : BETWEEN
    | BIGINT
    | bit
    | BOOLEAN_P
    | CHAR_P
    | character
    | COALESCE
    | DEC
    | DECIMAL_P
    | EXISTS
    | EXTRACT
    | FLOAT_P
    | GREATEST
    | GROUPING
    | INOUT
    | INT_P
    | INTEGER
    | INTERVAL
    | LEAST
    | NATIONAL
    | NCHAR
    | NONE
    | NORMALIZE
    | NULLIF
    | numeric
    | OUT_P
    | OVERLAY
    | POSITION
    | PRECISION
    | REAL
    | ROW
    | SETOF
    | SMALLINT
    | SUBSTRING
    | TIME
    | TIMESTAMP
    | TREAT
    | TRIM
    | VALUES
    | VARCHAR
    | XMLATTRIBUTES
    | XMLCONCAT
    | XMLELEMENT
    | XMLEXISTS
    | XMLFOREST
    | XMLNAMESPACES
    | XMLPARSE
    | XMLPI
    | XMLROOT
    | XMLSERIALIZE
    | XMLTABLE
    | builtinFunctionName
    ;

typeFunctionNameKeyword
    : AUTHORIZATION
    | BINARY
    | COLLATION
    | CONCURRENTLY
    | CROSS
    | CURRENT_SCHEMA
    | FREEZE
    | FULL
    | ILIKE
    | INNER_P
    | IS
    | ISNULL
    | JOIN
    | LIKE
    | NATURAL
    | NOTNULL
    | OUTER_P
    | OVERLAPS
    | SIMILAR
    | TABLESAMPLE
    | VERBOSE
    ;

reservedKeyword
    : ALL
    | ANALYSE
    | ANALYZE
    | AND
    | ANY
    | ARRAY
    | AS
    | ASC
    | ASYMMETRIC
    | BOTH
    | CASE
    | CAST
    | CHECK
    | COLLATE
    | COLUMN
    | CONSTRAINT
    | CREATE
    | CURRENT_CATALOG
    | CURRENT_DATE
    | CURRENT_ROLE
    | CURRENT_TIME
    | CURRENT_TIMESTAMP
    | CURRENT_USER
    //                 | DEFAULT
    | DEFERRABLE
    | DESC
    | DISTINCT
    | DO
    | ELSE
    | END_P
    | EXCEPT
    | FALSE_P
    | FETCH
    | FOR
    | FOREIGN
    | FROM
    | GRANT
    | GROUP_P
    | HAVING
    | IN_P
    | INITIALLY
    | INTERSECT
    /*
from pl_gram.y, line ~2982
	 * Fortunately, INTO is a fully reserved word in the main grammar, so
	 * at least we need not worry about it appearing as an identifier.
*/

    //                 | INTO
    | LATERAL_P
    | LEADING
    | LIMIT
    | LOCALTIME
    | LOCALTIMESTAMP
    | NOT
    | NULL_P
    | OFFSET
    | ON
    | ONLY
    | OR
    | ORDER
    | PLACING
    | PRIMARY
    | REFERENCES
    | RETURNING
    | SELECT
    | SESSION_USER
    | SOME
    | SYMMETRIC
    | TABLE
    | THEN
    | TO
    | TRAILING
    | TRUE_P
    | UNION
    | UNIQUE
    | USER
    | USING
    | VARIADIC
    | WHEN
    | WHERE
    | WINDOW
    | WITH
    ;

builtinFunctionName
    : XMLCOMMENT
    | XML_IS_WELL_FORMED
    | XML_IS_WELL_FORMED_DOCUMENT
    | XML_IS_WELL_FORMED_CONTENT
    | XMLAGG
    | XPATH
    | XPATH_EXISTS
    | ABS
    | CBRT
    | CEIL
    | CEILING
    | DEGREES
    | DIV
    | EXP
    | FACTORIAL
    | FLOOR
    | GCD
    | LCM
    | LN
    | LOG
    | LOG10
    | MIN_SCALE
    | MOD
    | PI
    | POWER
    | RADIANS
    | ROUND
    | SCALE
    | SIGN
    | SQRT
    | TRIM_SCALE
    | TRUNC
    | WIDTH_BUCKET
    | RANDOM
    | SETSEED
    | ACOS
    | ACOSD
    | ACOSH
    | ASIN
    | ASIND
    | ASINH
    | ATAN
    | ATAND
    | ATANH
    | ATAN2
    | ATAN2D
    | COS
    | COSD
    | COSH
    | COT
    | COTD
    | SIN
    | SIND
    | SINH
    | TAN
    | TAND
    | TANH
    | BIT_LENGTH
    | CHAR_LENGTH
    | CHARACTER_LENGTH
    | LOWER
    | OCTET_LENGTH
    | OCTET_LENGTH
    | UPPER
    | ASCII
    | BTRIM
    | CHR
    | CONCAT
    | CONCAT_WS
    | FORMAT
    | INITCAP
    | LENGTH
    | LPAD
    | LTRIM
    | MD5
    | PARSE_IDENT
    | PG_CLIENT_ENCODING
    | QUOTE_IDENT
    | QUOTE_LITERAL
    | QUOTE_NULLABLE
    | REGEXP_COUNT
    | REGEXP_INSTR
    | REGEXP_LIKE
    | REGEXP_MATCH
    | REGEXP_MATCHES
    | REGEXP_REPLACE
    | REGEXP_SPLIT_TO_ARRAY
    | REGEXP_SPLIT_TO_TABLE
    | REGEXP_SUBSTR
    | REPEAT
    | REPLACE
    | REVERSE
    | RPAD
    | RTRIM
    | SPLIT_PART
    | STARTS_WITH
    | STRING_TO_ARRAY
    | STRING_TO_TABLE
    | STRPOS
    | SUBSTR
    | TO_ASCII
    | TO_HEX
    | TRANSLATE
    | UNISTR
    | AGE
    | DATE_BIN
    | DATE_PART
    | DATE_TRUNC
    | ISFINITE
    | JUSTIFY_DAYS
    | JUSTIFY_HOURS
    | JUSTIFY_INTERVAL
    | MAKE_DATE
    | MAKE_INTERVAL
    | MAKE_TIME
    | MAKE_TIMESTAMP
    | MAKE_TIMESTAMPTZ
    | CLOCK_TIMESTAMP
    | NOW
    | STATEMENT_TIMESTAMP
    | TIMEOFDAY
    | TRANSACTION_TIMESTAMP
    | TO_TIMESTAMP
    | JUSTIFY_INTERVAL
    | JUSTIFY_INTERVAL
    | TO_CHAR
    | TO_DATE
    | TO_NUMBER
    ;

/************************************************************************************************************************************************************/
/*PL/SQL GRAMMAR */

/*PLSQL grammar */

/************************************************************************************************************************************************************/
plsqlFunction
    : computeOptions plsqlBlock optionalSemi
    ;

computeOptions
    : computeOption*
    ;

computeOption
    : sharp OPTION DUMP
    | sharp PRINT_STRICT_PARAMS optionValue
    | sharp VARIABLE_CONFLICT ERROR
    | sharp VARIABLE_CONFLICT USE_VARIABLE
    | sharp VARIABLE_CONFLICT USE_COLUMN
    ;

sharp
    : Operator
    ;

optionValue
    : sconst
    | reservedKeyword
    | plsqlUnreservedKeyword
    | unreservedKeyword
    ;

optionalSemi
    :
    | SEMI
    ;

// exception_sect means opt_exception_sect in original grammar, don't be confused!

plsqlBlock
    : declareSection BEGIN_P procedureSection exceptionSection END_P optionalLabel
    ;

declareSection
    : optionalBlockLabel (declareStart declareStatements?)?
    ;

declareStart
    : DECLARE
    ;

declareStatements
    : declareStatement+
    ;

labelDeclaration
    : LESS_LESS anyIdentifier GREATER_GREATER
    ;

declareStatement
    : declareStatement2
    | DECLARE
    | labelDeclaration
    ;

declareStatement2
    : declareVarname (ALIAS FOR declareAliasItem | declareConst declareDatatype declareCollate declareNotNull declareDefaultValue | optionalScrollable CURSOR declareCursorArgs declareIsOrFor declareCursorQuery) SEMI
    ;

optionalScrollable
    :
    | NO SCROLL
    | SCROLL
    ;

declareCursorQuery
    : selectStatement
    ;

declareCursorArgs
    :
    | OPEN_PAREN declareCursorArglist CLOSE_PAREN
    ;

declareCursorArglist
    : declareCursorArg (COMMA declareCursorArg)*
    ;

declareCursorArg
    : declareVarname declareDatatype
    ;

declareIsOrFor
    : IS
    | FOR
    ;

declareAliasItem
    : PARAM
    | columnId
    ;

declareVarname
    : anyIdentifier
    ;

declareConst
    :
    | CONSTANT
    ;

declareDatatype
    : typeName
    ; //TODO: $$ = read_datatype(yychar);

declareCollate
    :
    | COLLATE anyName
    ;

declareNotNull
    :
    | NOT NULL_P
    ;

declareDefaultValue
    :
    | declareDefaultKey sqlExpression
    ;

declareDefaultKey
    : assignOperator
    | DEFAULT
    ;

assignOperator
    : EQUAL
    | COLON_EQUALS
    ;

procedureSection
    : proceduralStatement*
    ;

proceduralStatement
    : plsqlBlock SEMI
    | statementReturn
    | statementRaise
    | statementAssign
    | statementIf
    | statementCase
    | statementLoop
    | statementWhile
    | statementFor
    | statementForeachA
    | statementExit
    | statementAssert
    | statementExecSql
    | statementDynExecute
    | statementPerform
    | statementCall
    | statementGetDiagram
    | statementOpen
    | statementFetch
    | statementMove
    | statementClose
    | statementNull
    | statementCommit
    | statementRollback
    | statementSet
    ;

statementPerform
    : PERFORM expressionUntilSemi SEMI
    ;

statementCall
    : CALL anyIdentifier OPEN_PAREN optionalExpressionList CLOSE_PAREN SEMI
    | DO anyIdentifier OPEN_PAREN optionalExpressionList CLOSE_PAREN SEMI
    ;

optionalExpressionList
    :
    | expressionList
    ;

statementAssign
    : assignVariable assignOperator sqlExpression SEMI
    ;

statementGetDiagram
    : GET optionalGetDiagramArea DIAGNOSTICS getDiagramList SEMI
    ;

optionalGetDiagramArea
    :
    | CURRENT_P
    | STACKED
    ;

getDiagramList
    : getDiagramListItem (COMMA getDiagramListItem)*
    ;

getDiagramListItem
    : getDiagramTarget assignOperator getDiagramItem
    ;

getDiagramItem
    : columnId
    ;

getDiagramTarget
    : assignVariable
    ;

assignVariable
    : (anyName | PARAM) (OPEN_BRACKET expressionUntilRightbracket CLOSE_BRACKET)*
    ;

statementIf
    : IF_P expressionUntilThen THEN procedureSection statementElsifs statementElse END_P IF_P SEMI
    ;

statementElsifs
    : (ELSIF expression1 THEN procedureSection)*
    ;

statementElse
    :
    | ELSE procedureSection
    ;

statementCase
    : CASE optionalExpressionUntilWhen caseWhenList optionalCaseElse END_P CASE SEMI
    ;

optionalExpressionUntilWhen
    :
    | sqlExpression
    ;

caseWhenList
    : caseWhen+
    ;

caseWhen
    : WHEN expressionList THEN procedureSection
    ;

optionalCaseElse
    :
    | ELSE procedureSection
    ;

statementLoop
    : optionalLoopLabel loopBody
    ;

statementWhile
    : optionalLoopLabel WHILE expressionUntilLoop loopBody
    ;

statementFor
    : optionalLoopLabel FOR forControl loopBody
    ;

//TODO: rewrite using read_sql_expression logic?

forControl
    : forVariable IN_P (cursorName optionalCursorParameters | selectStatement | explainStatement | EXECUTE expression1 optionalForUsingExpression | optionalReverse expression1 DOT_DOT expression1 optionalByExpression)
    ;

optionalForUsingExpression
    :
    | USING expressionList
    ;

optionalCursorParameters
    :
    | OPEN_PAREN expression1 (COMMA expression1)* CLOSE_PAREN
    ;

optionalReverse
    :
    | REVERSE
    ;

optionalByExpression
    :
    | BY expression1
    ;

forVariable
    : anyNameList
    ;

statementForeachA
    : optionalLoopLabel FOREACH forVariable foreachSlice IN_P ARRAY expression1 loopBody
    ;

foreachSlice
    :
    | SLICE iconst
    ;

statementExit
    : exitType optionalLabel optionalExitCondition SEMI
    ;

exitType
    : EXIT
    | CONTINUE_P
    ;

//todo implement RETURN statement according to initial grammar line 1754

statementReturn
    : RETURN (NEXT sqlExpression | QUERY (EXECUTE expression1 optionalForUsingExpression | selectStatement) | optionalReturnResult) SEMI
    ;

optionalReturnResult
    :
    | sqlExpression
    ;

//https://www.postgresql.org/docs/current/plpgsql-errors-and-messages.html

//RAISE [ level ] 'format' [, expression [, ... ]] [ USING option = expression [, ... ] ];

//RAISE [ level ] condition_name [ USING option = expression [, ... ] ];

//RAISE [ level ] SQLSTATE 'sqlstate' [ USING option = expression [, ... ] ];

//RAISE [ level ] USING option = expression [, ... ];

//RAISE ;

statementRaise
    : RAISE optionalStatementRaiseLevel sconst optionalRaiseList optionalRaiseUsing SEMI
    | RAISE optionalStatementRaiseLevel identifier optionalRaiseUsing SEMI
    | RAISE optionalStatementRaiseLevel SQLSTATE sconst optionalRaiseUsing SEMI
    | RAISE optionalStatementRaiseLevel optionalRaiseUsing SEMI
    | RAISE
    ;

optionalStatementRaiseLevel
    :
    |
    | DEBUG
    | LOG
    | INFO
    | NOTICE
    | WARNING
    | EXCEPTION
    ;

optionalRaiseList
    :
    | (COMMA expression1)+
    ;

optionalRaiseUsing
    :
    | USING optionalRaiseUsingElement (COMMA optionalRaiseUsingElement)*
    ;

optionalRaiseUsingElement
    : identifier EQUAL expression1
    ;

//todo imnplement

statementAssert
    : ASSERT sqlExpression optionalStatementAssertMessage SEMI
    ;

optionalStatementAssertMessage
    :
    | COMMA sqlExpression
    ;

loopBody
    : LOOP procedureSection END_P LOOP optionalLabel SEMI
    ;

//TODO: looks like all other statements like INSERT/SELECT/UPDATE/DELETE are handled here;

//pls take a look at original grammar

statementExecSql
    : makeExecuteSqlStatement SEMI
    /*K_IMPORT
            | K_INSERT
            | t_word
            | t_cword
*/
    ;

//https://www.postgresql.org/docs/current/plpgsql-statements.html#PLPGSQL-STATEMENTS-SQL-NORESULT

//EXECUTE command-string [ INTO [STRICT] target ] [ USING expression [, ... ] ];

statementDynExecute
    : EXECUTE expression1 (
/*this is silly, but i have to time to find nice way to code */ optionalExecuteInto optionalExecuteUsing | optionalExecuteUsing optionalExecuteInto |) SEMI
    ;

optionalExecuteUsing
    :
    | USING optionalExecuteUsingList
    ;

optionalExecuteUsingList
    : expression1 (COMMA expression1)*
    ;

optionalExecuteInto
    :
    | INTO STRICT_P? intoTarget
    ;

//https://www.postgresql.org/docs/current/plpgsql-cursors.html#PLPGSQL-CURSOR-OPENING

//OPEN unbound_cursorvar [ [ NO ] SCROLL ] FOR query;

//OPEN unbound_cursorvar [ [ NO ] SCROLL ] FOR EXECUTE query_string

//                                     [ USING expression [, ... ] ];

//OPEN bound_cursorvar [ ( [ argument_name := ] argument_value [, ...] ) ];

statementOpen
    : OPEN (cursorVariable NO? SCROLL FOR (selectStatement | EXECUTE sqlExpression USING expressionList) | columnId (OPEN_PAREN optionalOpenBoundListItem (COMMA optionalOpenBoundListItem)* CLOSE_PAREN)?) SEMI
    ;

optionalOpenBoundListItem
    : columnId COLON_EQUALS expression1
    | expression1
    ;

//https://www.postgresql.org/docs/current/plpgsql-cursors.html#PLPGSQL-CURSOR-OPENING

//FETCH [ direction { FROM | IN } ] cursor INTO target;

statementFetch
    : FETCH direction = optionalFetchDirection optionalCursorFrom cursorVariable INTO intoTarget SEMI
    ;

intoTarget
    : expressionList
    ;

optionalCursorFrom
    :
    | FROM
    | IN_P
    ;

optionalFetchDirection
    :
    |
    | NEXT
    | PRIOR
    | FIRST_P
    | LAST_P
    | ABSOLUTE_P expression1
    | RELATIVE_P expression1
    | expression1
    | ALL
    | (FORWARD | BACKWARD) (expression1 | ALL)?
    ;

//https://www.postgresql.org/docs/current/plpgsql-cursors.html#PLPGSQL-CURSOR-OPENING

//MOVE [ direction { FROM | IN } ] cursor;

statementMove
    : MOVE optionalFetchDirection cursorVariable SEMI
    ;

statementClose
    : CLOSE cursorVariable SEMI
    ;

statementNull
    : NULL_P SEMI
    ;

statementCommit
    : COMMIT plsqlOptionalTransactionChain SEMI
    ;

statementRollback
    : ROLLBACK plsqlOptionalTransactionChain SEMI
    ;

plsqlOptionalTransactionChain
    : AND NO? CHAIN
    |
    ;

statementSet
    : SET anyName TO DEFAULT SEMI
    | RESET (anyName | ALL) SEMI
    ;

cursorVariable
    : columnId
    | PARAM
    ;

exceptionSection
    :
    | EXCEPTION procedureExceptions
    ;

procedureExceptions
    : procedureException+
    ;

procedureException
    : WHEN procedureConditions THEN procedureSection
    ;

procedureConditions
    : procedureCondition (OR procedureCondition)*
    ;

procedureCondition
    : anyIdentifier
    | SQLSTATE sconst
    ;

//expr_until_semi:

//;

//expr_until_rightbracket:

//;

//expr_until_loop:

//;

optionalBlockLabel
    :
    | labelDeclaration
    ;

optionalLoopLabel
    :
    | labelDeclaration
    ;

optionalLabel
    :
    | anyIdentifier
    ;

optionalExitCondition
    : WHEN expressionUntilSemi
    |
    ;

anyIdentifier
    : columnId
    | plsqlUnreservedKeyword
    ;

plsqlUnreservedKeyword
    : ABSOLUTE_P
    | ALIAS
    | AND
    | ARRAY
    | ASSERT
    | BACKWARD
    | CALL
    | CHAIN
    | CLOSE
    | COLLATE
    | COLUMN
    //| COLUMN_NAME
    | COMMIT
    | CONSTANT
    | CONSTRAINT
    //| CONSTRAINT_NAME
    | CONTINUE_P
    | CURRENT_P
    | CURSOR
    //| DATATYPE
    | DEBUG
    | DEFAULT
    //| DETAIL
    | DIAGNOSTICS
    | DO
    | DUMP
    | ELSIF
    //| ERRCODE
    | ERROR
    | EXCEPTION
    | EXIT
    | FETCH
    | FIRST_P
    | FORWARD
    | GET
    //| HINT

    //| IMPORT
    | INFO
    | INSERT
    | IS
    | LAST_P
    //| MESSAGE

    //| MESSAGE_TEXT
    | MOVE
    | NEXT
    | NO
    | NOTICE
    | OPEN
    | OPTION
    | PERFORM
    //| PG_CONTEXT

    //| PG_DATATYPE_NAME

    //| PG_EXCEPTION_CONTEXT

    //| PG_EXCEPTION_DETAIL

    //| PG_EXCEPTION_HINT
    | PRINT_STRICT_PARAMS
    | PRIOR
    | QUERY
    | RAISE
    | RELATIVE_P
    | RESET
    | RETURN
    //| RETURNED_SQLSTATE
    | ROLLBACK
    //| ROW_COUNT
    | ROWTYPE
    | SCHEMA
    //| SCHEMA_NAME
    | SCROLL
    | SET
    | SLICE
    | SQLSTATE
    | STACKED
    | TABLE
    //| TABLE_NAME
    | TYPE_P
    | USE_COLUMN
    | USE_VARIABLE
    | VARIABLE_CONFLICT
    | WARNING
    | OUTER_P
    ;

sqlExpression
    : optionalTargetList intoClause? fromClause whereClause groupClause havingClause windowClause
    ;

expressionUntilThen
    : sqlExpression
    ;

expressionUntilSemi
    : sqlExpression
    ;

expressionUntilRightbracket
    : expression1
    ;

expressionUntilLoop
    : expression1
    ;

makeExecuteSqlStatement
    : statement optionalReturningClauseInto
    ;

optionalReturningClauseInto
    : INTO STRICT_P? intoTarget
    |
    ;

roleOrAliases
    : ROLE
    | USER
    | GROUP_P
    ;