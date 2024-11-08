// $antlr-format columnLimit 500, minEmptyLines 1, maxEmptyLinesToKeep 1, useTab false, reflowComments false, breakBeforeBraces false
// $antlr-format keepEmptyLinesAtTheStartOfBlocks false, allowShortRulesOnASingleLine false, alignSemicolons hanging, alignColons hanging
// $antlr-format alignTrailingComments true

parser grammar ClickHouseParser;

options {
    tokenVocab = ClickHouseLexer;
}

// Top-level statements

root
    : statements? EOF
    ;

statements
    : statement SEMICOLON?
    | statement SEMICOLON statements
    ;

statement
    : notInsertStatement (INTO OUTFILE STRING_LITERAL)? (FORMAT identifierOrNull)? (SEMICOLON)?
    | insertStatement
    | grantStatement
    | revokeStatement
    ;

notInsertStatement
    : alterStatement  // DDL
    | attachStatement // DDL
    | checkStatement
    | createStatement // DDL
    | describeStatement
    | deleteStatement // DDL
    | dropStatement   // DDL
    | existsStatement
    | explainStatement
    | killStatement     // DDL
    | optimizeStatement // DDL
    | renameStatement   // DDL
    | selectUnionStatement
    | setStatement
    | showStatement
    | systemStatement
    | truncateStatement // DDL
    | useStatement
    | watchStatement
    | commonTableExpressionStatement? selectStatement
    ;

commonTableExpressionStatement
    : WITH namedQuery (COMMA namedQuery)*
    ;

namedQuery
    : name = identifier (columnAliases)? AS LPAREN notInsertStatement RPAREN
    ;

columnAliases
    : LPAREN identifierList RPAREN
    ;

// ALTER statement

alterStatement
    : alterTableStatement
    | alterUserStatement
    | alterQuotaStatement
    | alterRowPolicyStatement
    | alterRoleStatement
    | alterNamedCollectionStatement
    | alterSettingsProfileStatement
    ;

alterSettingsProfileStatement
    : ALTER SETTINGS PROFILE (IF EXISTS)? identifier (renameClause | COMMA identifierList)? clusterClause? extendedSettingsWithInheritClause? (TO subjectExpressionList)?
    ;

alterNamedCollectionStatement
    : ALTER NAMED COLLECTION (IF EXISTS)? identifier clusterClause? ((SET namedCollectionExpressionList) | (DELETE identifierList))?
    ;

alterRoleStatement
    : ALTER ROLE (IF EXISTS)? identifier (renameClause | COMMA identifierList)? clusterClause? extendedSettingsWithProfileClause?
    ;

alterPolicyExpression
    : identifier clusterClause? ON tableIdentifier renameClause?
    ;

alterRowPolicyStatement
    : ALTER ROW? POLICY (IF EXISTS)? alterPolicyExpression (COMMA alterPolicyExpression)* (FOR SELECT)? usingClause? asPermissiveOrRestrictive? (TO subjectExpressionList)?
    ;

alterQuotaStatement
    : ALTER QUOTA (IF EXISTS)? identifier clusterClause? renameClause? quotaKeyClause? quotaForList? (TO subjectExpressionList)?
    ;

alterUserStatement
    : ALTER USER (IF EXISTS)? identifier (renameClause | COMMA identifierList)? clusterClause? userIdentificationClause? ((ADD | DROP)? hostClause)? validUntilClause? defaultRoleClause? granteesClause? extendedSettingsWithProfileClause?
    ;

renameClause
    : RENAME TO identifier
    ;

alterTableStatement
    : ALTER TABLE tableIdentifier clusterClause? alterTableClause (COMMA alterTableClause)* settingsClause?
    ;

alterTableClause
    : alterTableAddClause
    | alterTableClearClause
    | COMMENT COLUMN (IF EXISTS)? columnIdentifier STRING_LITERAL
    | DETACH partitionOrPartClause
    | alterTableDropClause
    | FREEZE partitionClause? (WITH NAME STRING_LITERAL)?
    | UNFREEZE partitionClause? WITH NAME STRING_LITERAL
    | alterTableMaterializeClause
    | alterTableModifyClause
    | MOVE partitionClause ( TO DISK STRING_LITERAL | TO VOLUME STRING_LITERAL | TO TABLE tableIdentifier)
    | REMOVE TTL
    | RENAME COLUMN (IF EXISTS)? columnIdentifier TO columnIdentifier
    | REPLACE partitionClause FROM tableIdentifier
    | UPDATE assignmentExpressionList whereClause
    | RESET SETTING identifierList
    | FORGET PARTITION partitionExpression
    | (DROP | CLEAR | MATERIALIZE) STATISTICS (IF EXISTS)? columnExpressionList
    | FETCH partitionOrPartClause FROM STRING_LITERAL
    | alterTableUpdateClause
    | alterTableDeleteClause
    ;

alterTableDeleteClause
    : DELETE WHERE columnExpression
    | DELETE (IN partitionClause)? WHERE filterByNumberExpression
    ;

alterTableMaterializeClause
    : MATERIALIZE INDEX (IF EXISTS)? columnIdentifier (IN partitionClause)?
    | MATERIALIZE PROJECTION (IF EXISTS)? columnIdentifier (IN partitionClause)?
    ;

alterTableDropClause
    : DROP COLUMN (IF EXISTS)? columnIdentifier
    | DROP INDEX (IF EXISTS)? columnIdentifier
    | DROP PROJECTION (IF EXISTS)? columnIdentifier
    | DROP partitionOrPartClause
    | DROP DETACHED (PARTITION | PART) (STRING_LITERAL | ALL)
    ;

alterTableClearClause
    : CLEAR COLUMN (IF EXISTS)? columnIdentifier (IN partitionClause)?
    | CLEAR INDEX (IF EXISTS)? columnIdentifier (IN partitionClause)?
    | CLEAR PROJECTION (IF EXISTS)? columnIdentifier (IN partitionClause)?
    ;

alterTableAddClause
    : ADD COLUMN (IF NOT EXISTS)? tableColumnDefinition (AFTER columnIdentifier)?
    | ADD INDEX (IF NOT EXISTS)? tableIndexDefinition (AFTER columnIdentifier)?
    | ADD PROJECTION (IF NOT EXISTS)? tableProjectionDefinition (AFTER columnIdentifier)?
    | ATTACH partitionClause (FROM tableIdentifier)?
    | ADD STATISTICS (IF NOT EXISTS)? columnExpressionList TYPE identifierList
    ;

alterTableModifyClause
    : MODIFY COLUMN (IF EXISTS)? columnIdentifier codecExpression
    | MODIFY COLUMN (IF EXISTS)? columnIdentifier COMMENT STRING_LITERAL
    | MODIFY COLUMN (IF EXISTS)? columnIdentifier REMOVE tableColumnPropertyType
    | MODIFY COLUMN (IF EXISTS)? tableColumnDefinition
    | MODIFY STATISTICS columnExpressionList TYPE identifierList
    | MODIFY SETTING settingExpressionList
    | MODIFY ORDER BY columnExpression
    | MODIFY ttlClause
    ;

alterTableUpdateClause
    : UPDATE columnEqualExpression (COMMA columnEqualExpression)* (IN partitionClause)? WHERE filterByNumberExpression
    ;

filterByNumberExpression
    : identifierEqualNumber (COMMA identifierEqualNumber)
    ;

identifierEqualNumber
    : identifier EQ_SINGLE numberLiteral
    ;

columnEqualExpression
    : columnExpression EQ_SINGLE expression
    ;

assignmentExpressionList
    : assignmentExpression (COMMA assignmentExpression)*
    ;

assignmentExpression
    : columnIdentifier EQ_SINGLE columnExpression
    ;

tableColumnPropertyType
    : ALIAS
    | CODEC
    | COMMENT
    | DEFAULT
    | MATERIALIZED
    | TTL
    ;

partitionExpression
    : functionExpression
    | literal
    | ID STRING_LITERAL
    | ALL
    ;

partitionClause
    : PARTITION partitionExpression
    ;

partitionOrPartClause
    : partitionClause
    | PART partitionExpression
    ;

// ATTACH statement
attachStatement
    : ATTACH DICTIONARY tableIdentifier clusterClause? # AttachDictionaryStatement
    ;

// CHECK statement

checkStatement
    : CHECK TABLE tableIdentifier partitionClause?
    ;

// DELETE statement

deleteStatement
    : DELETE FROM tableIdentifier clusterClause? whereClause?
    ;

// CREATE statement

createTableStatement
    : (ATTACH | CREATE (OR REPLACE)? | REPLACE) TEMPORARY? TABLE (IF NOT EXISTS)? tableIdentifier uuidClause? clusterClause? tableSchemaClause? engineClause? subqueryClause?
    ;

createDatabaseStatement
    : (ATTACH | CREATE) DATABASE (IF NOT EXISTS)? identifier clusterClause? engineExpression? (COMMENT STRING_LITERAL)?
    ;

createDictionaryStatement
    : (ATTACH | CREATE (OR REPLACE)? | REPLACE) DICTIONARY (IF NOT EXISTS)? tableIdentifier uuidClause? clusterClause? dictionarySchemaClause dictionaryEngineClause
    ;

createLiveViewStatement
    : (ATTACH | CREATE) LIVE VIEW (IF NOT EXISTS)? tableIdentifier uuidClause? clusterClause? (WITH TIMEOUT DECIMAL_LITERAL?)? destinationClause? tableSchemaClause? subqueryClause
    ;

createMaterializedViewStatement
    : (ATTACH | CREATE) MATERIALIZED VIEW (IF NOT EXISTS)? tableIdentifier uuidClause? clusterClause? tableSchemaClause? (destinationClause | engineClause POPULATE?) subqueryClause
    ;

createViewStatement
    : (ATTACH | CREATE) (OR REPLACE)? VIEW (IF NOT EXISTS)? tableIdentifier uuidClause? clusterClause? tableSchemaClause? subqueryClause
    ;

stringIdentificationType
    : PLAINTEXT_PASSWORD
    | SHA256_PASSWORD
    | SHA256_HASH
    | DOUBLE_SHA1_PASSWORD
    | DOUBLE_SHA1_HASH
    | BCRYPT_PASSWORD
    | BCRYPT_HASH
    ;

keyTypeClause
    : KEY STRING_LITERAL TYPE STRING_LITERAL
    ;

otherIdentificationType
    : NO_PASSWORD
    | LDAP SERVER STRING_LITERAL
    | KERBEROS (REALM STRING_LITERAL)
    | SSL_CERTIFICATE (SAN | CN) STRING_LITERAL
    | SSH_KEY BY keyTypeClause (COMMA keyTypeClause)*
    | HTTP SERVER STRING_LITERAL (SCHEME STRING_LITERAL)?
    ;

userIdentificationClause
    : NOT IDENTIFIED
    | IDENTIFIED (WITH stringIdentificationType)? BY STRING_LITERAL
    | IDENTIFIED WITH otherIdentificationType
    ;

validUntilClause
    : VALID UNTIL STRING_LITERAL
    ;

grantsProvider
    : userIdentifier
    | roleIdentifier
    | ANY
    | NONE
    ;

granteesClause
    : GRANTEES grantsProvider (COMMA grantsProvider)* (EXCEPT userOrRoleExpressionList)?
    ;

hostType
    : LOCAL
    | ANY
    | NONE
    | (NAME | REGEXP | IP | LIKE) STRING_LITERAL
    ;

hostClause
    : HOST hostType (COMMA hostType)*
    ;

extendedSettingExpression
    : identifier EQ_SINGLE literal (MIN EQ_SINGLE? literal)? (MAX EQ_SINGLE? literal)? (CONST | READONLY | WRITABLE | CHANGEABLE_IN_READONLY)?
    ;

extendedSettingExpressionWithProfileClause
    : extendedSettingExpression
    | PROFILE STRING_LITERAL
    ;

extendedSettingsWithProfileClause
    : SETTINGS extendedSettingExpressionWithProfileClause (COMMA extendedSettingExpressionWithProfileClause)*
    ;

inClause
    : IN (identifier | STRING_LITERAL)
    ;

defaultRoleClause
    : DEFAULT ROLE roleExpressionList
    ;

createUserStatement
    : CREATE USER replaceOrIfNotExistsClause? identifierList clusterClause? userIdentificationClause? hostClause? validUntilClause? inClause? defaultRoleClause? (DEFAULT DATABASE (databaseIdentifier | NONE))? granteesClause? extendedSettingsWithProfileClause?
    ;

replaceOrIfNotExistsClause
    : OR REPLACE
    | IF NOT EXISTS
    ;

tableIdentifierOrAnyTable
    : tableIdentifier
    | identifier DOT ASTERISK
    ;

createPolicyExpression
    : identifier clusterClause? ON tableIdentifierOrAnyTable
    ;

identifierOrLiteralOrFunction
    : identifier
    | literal
    | functionExpression
    ;

functionExpression
    : identifier LPAREN ((literal | identifier) (COMMA literal | identifier)* | functionExpression)? RPAREN
    ;

conditionExpression
    : identifierOrLiteralOrFunction
    | identifierOrLiteralOrFunction (EQ_SINGLE | NOT_EQ | GT | LT | EQ_DOUBLE | GE | LE) identifierOrLiteralOrFunction
    ;

conditionClause
    : conditionExpression (AND conditionExpression)*
    ;

subjectOrAllOrExcept
    : userOrRoleIdentifier
    | ALL
    | ALL EXCEPT userOrRoleExpressionList
    ;

subjectExpression
    : userOrRoleIdentifier
    | ALL
    | ALL EXCEPT userOrRoleExpressionList
    ;

asPermissiveOrRestrictive
    : AS (PERMISSIVE | RESTRICTIVE)
    ;

usingClause
    : USING (conditionClause | NONE)
    ;

createRowPolicyStatement
    : CREATE ROW? POLICY replaceOrIfNotExistsClause? createPolicyExpression (COMMA createPolicyExpression)* inClause? (FOR SELECT)? usingClause? asPermissiveOrRestrictive? (TO subjectExpressionList)?
    ;

quotaKeyType
    : USER_NAME
    | IP_ADDRESS
    | CLIENT_KEY (COMMA (USER_NAME | IP_ADDRESS))?
    | CLIENT_KEY_OR_USER_NAME
    | CLIENT_KEY_OR_IP_ADDRESS
    ;

quotaKeyClause
    : (KEYED | KEY) BY quotaKeyType
    | NOT KEYED
    ;

quotaRestrictionType
    : QUERIES
    | QUERY_SELECTS
    | QUERY_INSERTS
    | ERRORS
    | RESULT_ROWS
    | RESULT_BYTES
    | READ_ROWS
    | READ_BYTES
    | EXECUTION_TIME
    | FAILED_SEQUENTIAL_AUTHENTICATIONS
    ;

stringOrNumberLiteral
    : STRING_LITERAL
    | numberLiteral
    ;

quotaRestrictionExpression
    : MAX quotaRestrictionType EQ_SINGLE stringOrNumberLiteral
    ;

quotaRestrictionClause
    : quotaRestrictionExpression (COMMA quotaRestrictionExpression)*
    | NO LIMITS
    | TRACKING ONLY
    ;

quotaForClause
    : FOR RANDOMIZED? intervalOperand quotaRestrictionClause
    ;

intervalOperand
    : INTERVAL numberLiteral interval
    ;

quotaForList
    : quotaForClause (COMMA? quotaForClause)*
    ;

createQuotaStatement
    : CREATE QUOTA replaceOrIfNotExistsClause? identifierList clusterClause? inClause? quotaKeyClause? quotaForList? (TO subjectExpressionList)?
    ;

identifierList
    : identifier (COMMA identifier)*
    ;

createRoleStatement
    : CREATE ROLE replaceOrIfNotExistsClause? identifierList clusterClause? inClause? extendedSettingsWithProfileClause?
    ;

extendedSettingExpressionWithProfileOrInheritClause
    : extendedSettingExpressionWithProfileClause
    | INHERIT STRING_LITERAL
    ;

extendedSettingsWithInheritClause
    : SETTINGS extendedSettingExpressionWithProfileOrInheritClause (COMMA extendedSettingExpressionWithProfileOrInheritClause)*
    ;

createSettingsProfileStatement
    : CREATE SETTINGS PROFILE replaceOrIfNotExistsClause? identifierList clusterClause? inClause? extendedSettingsWithInheritClause? (TO subjectExpressionList)?
    ;

namedCollectionExpression
    : identifier EQ_SINGLE stringOrNumberLiteral (NOT? OVERRIDABLE)?
    ;

namedCollectionExpressionList
    : namedCollectionExpression (COMMA namedCollectionExpression)*
    ;

createNamedCollectionStatement
    : CREATE NAMED COLLECTION (IF NOT EXISTS)? identifier clusterClause? AS namedCollectionExpressionList
    ;

expressionOperand
    : functionExpression
    | identifier
    | literal
    | intervalOperand
    ;

expression
    : expressionOperand ((ASTERISK | PLUS | DASH | CONCAT | PERCENT) expressionOperand)*
    ;

createFunctionStatement
    : CREATE FUNCTION (IF NOT EXISTS)? identifier clusterClause? AS (LPAREN identifierList? RPAREN | identifier) ARROW_SYMBOL expression
    ;

orderType
    : DESC
    | DESCENDING
    | ASC
    | ASCENDING
    ;

createIndexStatement
    : CREATE INDEX (IF NOT EXISTS)? identifier ON tableIdentifier LPAREN identifier orderType? (COMMA identifier orderType?)* RPAREN (TYPE identifier)? (GRANULARITY numberLiteral)?
    ;

createStatement
    : createDatabaseStatement
    | createDictionaryStatement
    | createLiveViewStatement
    | createMaterializedViewStatement
    | createTableStatement
    | createViewStatement
    | createUserStatement
    | createRowPolicyStatement
    | createQuotaStatement
    | createRoleStatement
    | createSettingsProfileStatement
    | createNamedCollectionStatement
    | createFunctionStatement
    | createIndexStatement
    ;

dictionarySchemaClause
    : LPAREN dictionaryAttributeDefinition (COMMA dictionaryAttributeDefinition)* RPAREN
    ;

dictionaryAttributeDefinition
    locals[Set<string> attrs = new Set()]
    : identifier columnTypeExpression ({!$attrs.has("default")}? DEFAULT literal {$attrs.add("default");} | {!$attrs.has("expression")}? EXPRESSION columnExpression {$attrs.add("expression");} | {!$attrs.has("hierarchical")}? HIERARCHICAL {$attrs.add("hierarchical");} | {!$attrs.has("injective")}? INJECTIVE {$attrs.add("injective");} | {!$attrs.has("is_object_id")}? IS_OBJECT_ID {$attrs.add("is_object_id");})*
    ;

dictionaryEngineClause
    locals[Set<string> clauses = new Set()]
    : dictionaryPrimaryKeyClause? ({!$clauses.has("source")}? sourceClause {$clauses.add("source");} | {!$clauses.has("lifetime")}? lifetimeClause {$clauses.add("lifetime");} | {!$clauses.has("layout")}? layoutClause {$clauses.add("layout");} | {!$clauses.has("range")}? rangeClause {$clauses.add("range");} | {!$clauses.has("settings")}? dictionarySettingsClause {$clauses.add("settings");})*
    ;

dictionaryPrimaryKeyClause
    : PRIMARY KEY columnExpressionList
    ;

dictionaryArgumentExpression
    : identifier (identifier (LPAREN RPAREN)? | literal)
    ;

sourceClause
    : SOURCE LPAREN identifier LPAREN dictionaryArgumentExpression* RPAREN RPAREN
    ;

lifetimeClause
    : LIFETIME LPAREN (DECIMAL_LITERAL | MIN DECIMAL_LITERAL MAX DECIMAL_LITERAL | MAX DECIMAL_LITERAL MIN DECIMAL_LITERAL) RPAREN
    ;

layoutClause
    : LAYOUT LPAREN identifier LPAREN dictionaryArgumentExpression* RPAREN RPAREN
    ;

rangeClause
    : RANGE LPAREN (MIN identifier MAX identifier | MAX identifier MIN identifier) RPAREN
    ;

dictionarySettingsClause
    : SETTINGS LPAREN settingExpressionList RPAREN
    ;

clusterClause
    : ON CLUSTER (identifier | STRING_LITERAL)
    ;

uuidClause
    : UUID STRING_LITERAL
    ;

destinationClause
    : TO tableIdentifier
    ;

subqueryClause
    : AS selectUnionStatement
    ;

tableSchemaClause
    : LPAREN tableElementExpression (COMMA tableElementExpression)* RPAREN # SchemaDescriptionClause
    | AS tableIdentifier                                                   # SchemaAsTableClause
    | AS tableFunctionExpression                                           # SchemaAsFunctionClause
    ;

engineClause
    locals[Set<string> clauses = new Set()]
    : engineExpression (
        {!$clauses.has("orderByClause")}? orderByClause {$clauses.add("orderByClause");}
        | {!$clauses.has("partitionByClause")}? partitionByClause {$clauses.add("partitionByClause");
			}
        | {!$clauses.has("primaryKeyClause")}? primaryKeyClause {$clauses.add("primaryKeyClause");
			}
        | {!$clauses.has("sampleByClause")}? sampleByClause {$clauses.add("sampleByClause");}
        | {!$clauses.has("ttlClause")}? ttlClause {$clauses.add("ttlClause");}
        | {!$clauses.has("settingsClause")}? settingsClause {$clauses.add("settingsClause");}
    )*
    ;

partitionByClause
    : PARTITION BY columnExpression
    ;

primaryKeyClause
    : PRIMARY KEY columnExpression
    ;

sampleByClause
    : SAMPLE BY columnExpression
    ;

ttlClause
    : TTL ttlExpression (COMMA ttlExpression)*
    ;

engineExpression
    : ENGINE EQ_SINGLE? identifierOrNull (LPAREN columnExpressionList? RPAREN)?
    ;

tableElementExpression
    : tableColumnDefinition                        # TableElementExpressionColumn
    | CONSTRAINT identifier CHECK columnExpression # TableElementExpressionConstraint
    | INDEX tableIndexDefinition                   # TableElementExpressionIndex
    | PROJECTION tableProjectionDefinition         # TableElementExpressionProjection
    ;

tableColumnDefinition
    : columnIdentifier columnTypeExpression tableColumnPropertyExpression? (COMMENT STRING_LITERAL)? codecExpression? (TTL columnExpression)?
    | columnIdentifier columnTypeExpression? tableColumnPropertyExpression ( COMMENT STRING_LITERAL)? codecExpression? (TTL columnExpression)?
    ;

tableColumnPropertyExpression
    : (DEFAULT | MATERIALIZED | ALIAS) columnExpression
    ;

tableIndexDefinition
    : columnIdentifier columnExpression TYPE columnTypeExpression GRANULARITY DECIMAL_LITERAL
    ;

tableProjectionDefinition
    : columnIdentifier projectionSelectStatement
    ;

codecExpression
    : CODEC LPAREN codecArgExpression (COMMA codecArgExpression)* RPAREN
    ;

codecArgExpression
    : identifier (LPAREN columnExpressionList? RPAREN)?
    ;

ttlExpression
    : columnExpression (DELETE | TO DISK STRING_LITERAL | TO VOLUME STRING_LITERAL)?
    ;

// DESCRIBE statement

describeStatement
    : (DESCRIBE | DESC) TABLE? tableExpression
    ;

// DROP statement

dropStatement
    : (DETACH | DROP) DATABASE (IF EXISTS)? databaseIdentifier clusterClause?                                         # DropDatabaseStatement
    | (DETACH | DROP) (DICTIONARY | TEMPORARY? TABLE | VIEW) ( IF EXISTS)? tableIdentifier clusterClause? (NO DELAY)? # DropTableStatement
    ;

// EXISTS statement

existsStatement
    : EXISTS DATABASE databaseIdentifier                             # ExistsDatabaseStatement
    | EXISTS (DICTIONARY | TEMPORARY? TABLE | VIEW)? tableIdentifier # ExistsTableStatement
    ;

// EXPLAIN statement

explainStatement
    : EXPLAIN notInsertStatement            # ExplainDefaultStatement
    | EXPLAIN AST notInsertStatement        # ExplainASTStatement
    | EXPLAIN SYNTAX notInsertStatement     # ExplainSyntaxStatement
    | EXPLAIN PIPELINE notInsertStatement   # ExplainPipelineStatement
    | EXPLAIN PLAN notInsertStatement       # ExplainPlanStatement
    | EXPLAIN QUERY TREE notInsertStatement # ExplainQueryTreeStatement
    | EXPLAIN ESTIMATE notInsertStatement   # ExplainEstimateStatement
    ;

// REVOKE statement

revokeStatement
    : REVOKE clusterClause? (GRANT OPTION FOR)? privilegeList ON accessSubjectIdentifier FROM subjectExpressionList
    | REVOKE clusterClause? (ADMIN OPTION FOR)? roleExpressionList FROM subjectExpressionList
    ;

subjectExpressionList
    : subjectExpression (COMMA subjectExpression)*
    ;

userExpressionList
    : userIdentifier (COMMA userIdentifier)*
    ;

roleExpressionList
    : roleIdentifier (COMMA roleIdentifier)*
    ;

// GRANT statement

grantStatement
    : GRANT clusterClause? (privilegeList ON accessSubjectIdentifier) (COMMA privilegeList ON accessSubjectIdentifier)* TO userOrRoleExpressionList withGrantOrReplaceOption
    | GRANT clusterClause? roleExpressionList TO userOrRoleExpressionList (WITH ADMIN OPTION)? withReplaceOption?
    | GRANT CURRENT GRANTS ((LPAREN privilegeList ON accessSubjectIdentifier RPAREN) | ON accessSubjectIdentifier) TO userOrRoleExpressionList withGrantOrReplaceOption
    ;

withGrantOrReplaceOption
    : (WITH GRANT OPTION)? withReplaceOption?
    ;

withReplaceOption
    : WITH REPLACE OPTION
    ;

accessSubjectIdentifier
    : (databaseIdentifier | tableIdentifier | ((ASTERISK | identifier) DOT)? (ASTERISK | identifier))
    ;

privilegeList
    : privilege (COMMA privilege)*
    ;

roleIdentifier
    : identifier
    ;

userIdentifier
    : CURRENT_USER
    | identifier
    ;

userOrRoleExpressionList
    : userOrRoleIdentifier (COMMA userOrRoleIdentifier)*
    ;

userOrRoleIdentifier
    : userIdentifier
    | roleIdentifier
    ;

selectPrivilege
    : SELECT columnsClause?
    ;

insertPrivilege
    : INSERT columnsClause?
    ;

createPrivilege
    : CREATE (DATABASE | TABLE | VIEW | DICTIONARY | FUNCTION)?
    | CREATE (ARBITRARY TEMPORARY | TEMPORARY)? TABLE
    ;

dropPrivilege
    : DROP (DATABASE | TABLE | VIEW | DICTIONARY)?
    ;

showPrivilege
    : SHOW (DATABASES | TABLES | COLUMNS | DICTIONARIES)?
    ;

introspectionPrivilege
    : INTROSPECTION FUNCTIONS?
    | ADDRESSTOLINE
    | ADDRESSTOLINEWITHINLINES
    | ADDRESSTOSYMBOL
    | DEMANGLE
    ;

sourcePrivilege
    : SOURCES
    | AZURE
    | FILE
    | HDFS
    | HIVE
    | JDBC
    | MONGO
    | MYSQL
    | ODBC
    | POSTGRES
    | REDIS
    | REMOTE
    | S3
    | SQLITE
    | URL
    ;

dictPrivilege
    : DICTGET
    | DICTHAS
    | DICTGETHIERARCHY
    | DICTISIN
    ;

alterPrivilege
    : ALTER (DELETE | UPDATE)? columnsClause?
    | (DELETE | UPDATE) columnsClause?
    | ALTER TABLE
    | ALTER (ADD | DROP | MODIFY | COMMENT | CLEAR | RENAME)? COLUMN columnsClause?
    | (ADD | DROP | MODIFY | COMMENT | CLEAR | RENAME) COLUMN columnsClause?
    | ALTER (ADD | DROP | MATERIALIZE | CLEAR)? INDEX
    | (ADD | DROP | MATERIALIZE | CLEAR)? INDEX
    | ALTER MODIFY? (ORDER | SAMPLE) BY
    | MODIFY (ORDER | SAMPLE) BY
    | ALTER? (ADD | DROP)? CONSTRAINT
    | ALTER (MODIFY | MATERIALIZE)? TTL
    | (MODIFY | MATERIALIZE) TTL
    | ALTER SETTINGS
    | (ALTER | ALTER MODIFY | MODIFY) SETTING
    | ALTER? (MOVE | FETCH) (PARTITION | PART)
    | ALTER? FREEZE PARTITION
    | ALTER VIEW REFRESH?
    | ALTER LIVE VIEW REFRESH
    | REFRESH VIEW
    | ALTER (VIEW | TABLE) MODIFY (QUERY | SQL SECURITY)
    ;

accessManagementPrivilege
    : ACCESS MANAGEMENT
    | (CREATE | ALTER | DROP) USER
    | (CREATE | ALTER | DROP) ROLE
    | ROLE ADMIN
    | (CREATE | ALTER | DROP) ROW? POLICY
    | (CREATE | ALTER | DROP) QUOTA
    | (CREATE | ALTER | DROP) SETTINGS? PROFILE
    | SHOW ACCESS
    | SHOW_USERS
    | SHOW CREATE USER
    | SHOW_ROLES
    | SHOW CREATE ROLE
    | SHOW_ROW_POLICIES
    | SHOW POLICIES
    | SHOW CREATE ROW? POLICY
    | SHOW_QUOTAS
    | SHOW CREATE QUOTA
    | SHOW_SETTINGS_PROFILES
    | SHOW PROFILES
    | SHOW CREATE SETTINGS? PROFILE
    | (ALLOW | CREATE)? SQL SECURITY NONE
    | SECURITY NONE
    ;

systemPrivilege
    : SYSTEM (SHUTDOWN | KILL)?
    | SHUTDOWN
    | SYSTEM? DROP CACHE
    | SYSTEM DROP (DNS | MARK | UNCOMPRESSED) CACHE?
    | DROP (DNS | MARK | UNCOMPRESSED) CACHE
    | DROP (DNS | MARKS | UNCOMPRESSED)
    | SYSTEM RELOAD (CONFIG | DICTIONARY | EMBEDDED? DICTIONARIES)?
    | RELOAD (CONFIG | DICTIONARY | EMBEDDED? DICTIONARIES)
    | SYSTEM (STOP | START)? TTL? MERGES
    | (STOP | START) TTL? MERGES
    | SYSTEM (STOP | START)? (FETCHES | MOVES | SENDS)
    | (STOP | START) (FETCHES | MOVES | SENDS)
    | SYSTEM (STOP | START)? (DISTRIBUTED | REPLICATED) SENDS
    | (STOP | START) (DISTRIBUTED | REPLICATED) SENDS
    | SYSTEM (STOP | START)? REPLICATION QUEUES
    | (STOP | START) REPLICATION QUEUES
    | SYSTEM? (SYNC | RESTART) REPLICA
    | SYSTEM FLUSH (DISTRIBUTED | LOGS)?
    | FLUSH (DISTRIBUTED | LOGS)
    ;

namedCollectionAdminPrivilege
    : NAMED COLLECTION (ADMIN | CONTROL | USAGE)?
    | (CREATE | DROP | ALTER)? NAMED COLLECTION
    | SHOW NAMED COLLECTIONS SECRETS?
    | USE NAMED COLLECTION
    ;

privilege
    : selectPrivilege
    | insertPrivilege
    | createPrivilege
    | dropPrivilege
    | TRUNCATE
    | KILL QUERY
    | OPTIMIZE
    | showPrivilege
    | introspectionPrivilege
    | sourcePrivilege
    | dictPrivilege
    | alterPrivilege
    | ALL
    | NONE
    | OPTIMIZE
    | DISPLAYSECRETSINSHOWANDSELECT
    | accessManagementPrivilege
    | systemPrivilege
    | namedCollectionAdminPrivilege
    | TABLE ENGINE
    | ADMIN OPTION
    | USAGE
    ;

// INSERT statement

insertStatement
    : INSERT INTO TABLE? (tableIdentifier | FUNCTION tableFunctionExpression) columnsOrExceptClause? settingsClause? dataClause
    ;

columnsOrExceptClause
    : columnsClause
    | LPAREN ASTERISK (EXCEPT columnsClause)? RPAREN
    ;

columnsClause
    : LPAREN columnIdentifier (COMMA columnIdentifier)* RPAREN
    ;

insertFormatTypeExceptValues
    : TABSEPARATED
    | TABSEPARATEDRAW
    | TABSEPARATEDWITHNAMES
    | TABSEPARATEDWITHNAMESANDTYPES
    | TABSEPARATEDRAWWITHNAMES
    | TABSEPARATEDRAWWITHNAMESANDTYPES
    | TEMPLATE
    | TEMPLATEIGNORESPACES
    | CSV
    | CSVWITHNAMES
    | CSVWITHNAMESANDTYPES
    | CUSTOMSEPARATED
    | CUSTOMSEPARATEDWITHNAMES
    | CUSTOMSEPARATEDWITHNAMESANDTYPES
    | JSON
    | JSONASSTRING
    | JSONASOBJECT
    | JSONSTRINGS
    | JSONCOLUMNS
    | JSONCOLUMNSWITHMETADATA
    | JSONCOMPACT
    | JSONCOMPACTCOLUMNS
    | JSONEACHROW
    | JSONSTRINGSEACHROW
    | JSONCOMPACTEACHROW
    | JSONCOMPACTEACHROWWITHNAMES
    | JSONCOMPACTEACHROWWITHNAMESANDTYPES
    | JSONCOMPACTSTRINGSEACHROW
    | JSONCOMPACTSTRINGSEACHROWWITHNAMES
    | JSONCOMPACTSTRINGSEACHROWWITHNAMESANDTYPES
    | JSONOBJECTEACHROW
    | BSONEACHROW
    | TSKV
    | PROTOBUF
    | PROTOBUFSINGLE
    | PROTOBUFLIST
    | AVRO
    | AVROCONFLUENT
    | PARQUET
    | PARQUETMETADATA
    | ARROW
    | ARROWSTREAM
    | ORC
    | ONE
    | NPY
    | ROWBINARY
    | ROWBINARYWITHNAMES
    | ROWBINARYWITHNAMESANDTYPES
    | ROWBINARYWITHDEFAULTS
    | NATIVE
    | CAPNPROTO
    | LINEASSTRING
    | REGEXP
    | RAWBLOB
    | MSGPACK
    | MYSQLDUMP
    | DWARF
    | FORM
    ;

dataClause
    : FORMAT insertFormatTypeExceptValues any
    | FORMAT? valuesStatement
    | selectUnionStatement SEMICOLON? EOF
    ;

any
    : .*?
    ;

literalList
    : literal (COMMA literal)*
    ;

valueIdentifier
    : literal
    | LPAREN numberLiteral COMMA numberLiteral RPAREN
    | functionExpression
    ;

valueOrArrayIdentifier
    : valueIdentifier
    | arrayIdentifier
    ;

arrayIdentifier
    : LBRACKET (valueOrArrayIdentifier (COMMA valueOrArrayIdentifier)*)? RBRACKET
    ;

valuesClause
    : LPAREN (valueOrArrayIdentifier (COMMA valueOrArrayIdentifier)*) RPAREN
    ;

valuesStatement
    : VALUES valuesClause (COMMA? valuesClause)*
    ;

// KILL statement

killStatement
    : KILL MUTATION clusterClause? whereClause (SYNC | ASYNC | TEST)? # KillMutationStatement
    ;

// OPTIMIZE statement

optimizeStatement
    : OPTIMIZE TABLE tableIdentifier clusterClause? partitionClause? FINAL? DEDUPLICATE?
    ;

// RENAME statement

renameStatement
    : RENAME TABLE tableIdentifier TO tableIdentifier (COMMA tableIdentifier TO tableIdentifier)* clusterClause?
    ;

// PROJECTION SELECT statement

projectionSelectStatement
    : LPAREN withClause? SELECT columnExpressionList groupByClause? projectionOrderByClause? RPAREN
    ;

// SELECT statement

selectUnionStatement
    : selectStatementWithParentheses (UNION ALL selectStatementWithParentheses)*
    ;

selectStatementWithParentheses
    : selectStatement
    | LPAREN selectUnionStatement RPAREN
    ;

selectStatement
    : withClause? SELECT DISTINCT? topClause? columnExpressionList fromClause? arrayJoinClause? windowClause? prewhereClause? whereClause? groupByClause? (WITH (CUBE | ROLLUP))? (WITH TOTALS)? havingClause? orderByClause? limitByClause? limitClause? settingsClause?
    ;

withClause
    : WITH columnExpressionList
    ;

topClause
    : TOP DECIMAL_LITERAL (WITH TIES)?
    ;

fromClause
    : FROM joinExpression
    ;

arrayJoinClause
    : (LEFT | INNER)? ARRAY JOIN columnExpressionList
    ;

windowClause
    : WINDOW identifier AS LPAREN windowExpression RPAREN
    ;

prewhereClause
    : PREWHERE columnExpression
    ;

whereClause
    : WHERE columnExpression
    ;

groupByClause
    : GROUP BY ((CUBE | ROLLUP) LPAREN columnExpressionList RPAREN | columnExpressionList)
    ;

havingClause
    : HAVING columnExpression
    ;

orderByClause
    : ORDER BY orderExpressionList
    ;

projectionOrderByClause
    : ORDER BY columnExpressionList
    ;

limitByClause
    : LIMIT limitExpression BY columnExpressionList
    ;

limitClause
    : LIMIT limitExpression (WITH TIES)?
    ;

settingsClause
    : SETTINGS settingExpressionList
    ;

joinExpression
    : joinExpression (GLOBAL | LOCAL)? joinOperator? JOIN joinExpression joinConstraintClause # JoinExpressionOp
    | joinExpression joinOperatorCross joinExpression                                         # JoinExpressionCrossOp
    | tableExpression FINAL? sampleClause?                                                    # JoinExpressionTable
    | LPAREN joinExpression RPAREN                                                            # JoinExpressionParens
    ;

joinOperator
    : ((ALL | ANY | ASOF)? INNER | INNER (ALL | ANY | ASOF)? | (ALL | ANY | ASOF))                                         # JoinOpInner
    | ( (SEMI | ALL | ANTI | ANY | ASOF)? (LEFT | RIGHT) OUTER? | (LEFT | RIGHT) OUTER? (SEMI | ALL | ANTI | ANY | ASOF)?) # JoinOpLeftRight
    | ((ALL | ANY)? FULL OUTER? | FULL OUTER? (ALL | ANY)?)                                                                # JoinOpFull
    ;

joinOperatorCross
    : (GLOBAL | LOCAL)? CROSS JOIN
    | COMMA
    ;

joinConstraintClause
    : ON columnExpressionList
    | USING LPAREN columnExpressionList RPAREN
    | USING columnExpressionList
    ;

sampleClause
    : SAMPLE ratioExpression (OFFSET ratioExpression)?
    ;

limitExpression
    : columnExpression ((COMMA | OFFSET) columnExpression)?
    ;

orderExpressionList
    : orderExpression (COMMA orderExpression)*
    ;

orderExpression
    : columnExpression (ASCENDING | ASC | DESCENDING | DESC)? (NULLS (FIRST | LAST))? (COLLATE STRING_LITERAL)?
    ;

ratioExpression
    : numberLiteral (SLASH numberLiteral)?
    ;

settingExpressionList
    : settingExpression (COMMA settingExpression)*
    ;

settingExpression
    : identifier EQ_SINGLE literal
    ;

windowExpression
    : windowPartitionByClause? windowOrderByClause? windowFrameClause?
    ;

windowPartitionByClause
    : PARTITION BY columnExpressionList
    ;

windowOrderByClause
    : ORDER BY orderExpressionList
    ;

windowFrameClause
    : (ROWS | RANGE) windowFrameExtend
    ;

windowFrameExtend
    : windowFrameBound                              # frameStart
    | BETWEEN windowFrameBound AND windowFrameBound # frameBetween
    ;

windowFrameBound
    : (CURRENT ROW | UNBOUNDED PRECEDING | UNBOUNDED FOLLOWING | numberLiteral PRECEDING | numberLiteral FOLLOWING)
    ;

//rangeClause: RANGE LPAREN (MIN identifier MAX identifier | MAX identifier MIN identifier) RPAREN;

// SET statement

setStatement
    : SET settingExpressionList
    ;

// SHOW statements

showStatement
    : SHOW CREATE DATABASE databaseIdentifier                                                                     # showCreateDatabaseStatement
    | SHOW CREATE DICTIONARY tableIdentifier                                                                      # showCreateDictionaryStatement
    | SHOW CREATE TEMPORARY? TABLE? tableIdentifier                                                               # showCreateTableStatement
    | SHOW DATABASES                                                                                              # showDatabasesStatement
    | SHOW DICTIONARIES (FROM databaseIdentifier)?                                                                # showDictionariesStatement
    | SHOW TEMPORARY? TABLES ((FROM | IN) databaseIdentifier)? ( LIKE STRING_LITERAL | whereClause)? limitClause? # showTablesStatement
    ;

// SYSTEM statements

systemStatement
    : SYSTEM FLUSH DISTRIBUTED tableIdentifier
    | SYSTEM FLUSH LOGS
    | SYSTEM RELOAD DICTIONARIES
    | SYSTEM RELOAD DICTIONARY tableIdentifier
    | SYSTEM (START | STOP) ( DISTRIBUTED SENDS | FETCHES | TTL? MERGES) tableIdentifier
    | SYSTEM (START | STOP) REPLICATED SENDS
    | SYSTEM SYNC REPLICA tableIdentifier
    ;

// TRUNCATE statements

truncateStatement
    : TRUNCATE TEMPORARY? TABLE? (IF EXISTS)? tableIdentifier clusterClause?
    ;

// USE statement

useStatement
    : USE databaseIdentifier
    ;

// WATCH statement

watchStatement
    : WATCH tableIdentifier EVENTS? (LIMIT DECIMAL_LITERAL)?
    ;

// Columns

columnTypeExpression
    : identifier                                                                                        # ColumnTypeExpressionSimple // UInt64
    | identifier LPAREN identifier columnTypeExpression (COMMA identifier columnTypeExpression)* RPAREN # ColumnTypeExpressionNested // Nested
    | identifier LPAREN enumValue (COMMA enumValue)* RPAREN                                             # ColumnTypeExpressionEnum   // Enum
    | identifier LPAREN columnTypeExpression (COMMA columnTypeExpression)* RPAREN                       # ColumnTypeExpressionComplex
    // Array, Tuple
    | identifier LPAREN columnExpressionList? RPAREN # ColumnTypeExpressionParam
    ; // FixedString(N)

columnExpressionList
    : columnsExpression (COMMA columnsExpression)*
    ;

columnsExpression
    : (tableIdentifier DOT)? ASTERISK    # ColumnsExpressionAsterisk
    | LPAREN selectUnionStatement RPAREN # ColumnsExpressionSubquery
    // NOTE: asterisk and subquery goes before |columnExpression| so that we can mark them as multi-column expressions.
    | columnExpression # ColumnsExpressionColumn
    ;

columnExpression
    : CASE columnExpression? (WHEN columnExpression THEN columnExpression)+ (ELSE columnExpression)? END # ColumnExpressionCase
    | CAST LPAREN columnExpression AS columnTypeExpression RPAREN                                        # ColumnExpressionCast
    | DATE STRING_LITERAL                                                                                # ColumnExpressionDate
    | EXTRACT LPAREN interval FROM columnExpression RPAREN                                               # ColumnExpressionExtract
    | INTERVAL columnExpression interval                                                                 # ColumnExpressionInterval
    | SUBSTRING LPAREN columnExpression FROM columnExpression ( FOR columnExpression)? RPAREN            # ColumnExpressionSubstring
    | TIMESTAMP STRING_LITERAL                                                                           # ColumnExpressionTimestamp
    | TRIM LPAREN (BOTH | LEADING | TRAILING) STRING_LITERAL FROM columnExpression RPAREN                # ColumnExpressionTrim
    | identifier (LPAREN columnExpressionList? RPAREN) OVER LPAREN windowExpression RPAREN               # ColumnExpressionWinFunction
    | identifier (LPAREN columnExpressionList? RPAREN) OVER identifier                                   # ColumnExpressionWinFunctionTarget
    | identifier (LPAREN columnExpressionList? RPAREN)? LPAREN DISTINCT? columnArgumentList? RPAREN      # ColumnExpressionFunction
    | literal                                                                                            # ColumnExpressionLiteral

    // FIXME(ilezhankin): this part looks very ugly, maybe there is another way to express it
    | columnExpression LBRACKET columnExpression RBRACKET # ColumnExpressionArrayAccess
    | columnExpression DOT DECIMAL_LITERAL                # ColumnExpressionTupleAccess
    | DASH columnExpression                               # ColumnExpressionNegate
    | columnExpression (
        ASTERISK  // multiply
        | SLASH   // divide
        | PERCENT // modulo
    ) columnExpression # ColumnExpressionPrecedence1
    | columnExpression (
        PLUS     // plus
        | DASH   // minus
        | CONCAT // concat
    ) columnExpression # ColumnExpressionPrecedence2
    | columnExpression (
        EQ_DOUBLE             // equals
        | EQ_SINGLE           // equals
        | NOT_EQ              // notEquals
        | LE                  // lessOrEquals
        | GE                  // greaterOrEquals
        | LT                  // less
        | GT                  // greater
        | GLOBAL? NOT? IN     // in, notIn, globalIn, globalNotIn
        | NOT? (LIKE | ILIKE) // like, notLike, ilike, notILike
    ) columnExpression                      # ColumnExpressionPrecedence3
    | columnExpression IS NOT? NULL_SQL     # ColumnExpressionIsNull
    | NOT columnExpression                  # ColumnExpressionNot
    | columnExpression AND columnExpression # ColumnExpressionAnd
    | columnExpression OR columnExpression  # ColumnExpressionOr
    // TODO(ilezhankin): `BETWEEN a AND b AND c` is parsed in a wrong way: `BETWEEN (a AND b) AND c`
    | columnExpression NOT? BETWEEN columnExpression AND columnExpression                   # ColumnExpressionBetween
    | <assoc = right> columnExpression QUESTIONMARK columnExpression COLON columnExpression # ColumnExpressionTernaryOp
    | columnExpression (alias | AS identifier)                                              # ColumnExpressionAlias
    | (tableIdentifier DOT)? ASTERISK                                                       # ColumnExpressionAsterisk // single-column only
    | LPAREN selectUnionStatement RPAREN                                                    # ColumnExpressionSubquery // single-column only
    | LPAREN columnExpression RPAREN                                                        # ColumnExpressionParens   // single-column only
    | LPAREN columnExpressionList RPAREN                                                    # ColumnExpressionTuple
    | LBRACKET columnExpressionList? RBRACKET                                               # ColumnExpressionArray
    | columnIdentifier                                                                      # ColumnExpressionIdentifier
    ;

columnArgumentList
    : columnArgumentExpression (COMMA columnArgumentExpression)*
    ;

columnArgumentExpression
    : columnLambdaExpression
    | columnExpression
    ;

columnLambdaExpression
    : (LPAREN identifierList RPAREN | identifierList) ARROW_SYMBOL columnExpression
    ;

columnIdentifier
    : (tableIdentifier DOT)? identifier (DOT identifier)?
    ;

// Tables

tableExpression
    : tableIdentifier                         # TableExpressionIdentifier
    | tableFunctionExpression                 # TableExpressionFunction
    | LPAREN selectUnionStatement RPAREN      # TableExpressionSubquery
    | tableExpression (alias | AS identifier) # TableExpressionAlias
    ;

tableFunctionExpression
    : identifier LPAREN tableArgList? RPAREN
    ;

tableIdentifier
    : (databaseIdentifier DOT)? identifier
    ;

tableArgList
    : tableArgExpression (COMMA tableArgExpression)*
    ;

tableArgExpression
    : columnIdentifier
    | tableFunctionExpression
    | literal
    ;

// Databases

databaseIdentifier
    : identifier
    ;

// Basics

floatingLiteral
    : FLOATING_LITERAL
    | DOT (DECIMAL_LITERAL | OCTAL_LITERAL)
    | DECIMAL_LITERAL DOT (DECIMAL_LITERAL | OCTAL_LITERAL)?
    ;

// can't move this to the lexer or it will break nested tuple access: t.1.2
numberLiteral
    : (PLUS | DASH)? (floatingLiteral | OCTAL_LITERAL | DECIMAL_LITERAL | HEXADECIMAL_LITERAL | INF | NAN_SQL)
    ;

literal
    : numberLiteral
    | STRING_LITERAL
    | NULL_SQL
    ;

interval
    : SECOND
    | MINUTE
    | HOUR
    | DAY
    | WEEK
    | MONTH
    | QUARTER
    | YEAR
    ;

keyword
    : // except NULL_SQL, INF, NAN_SQL
    AFTER
    | ALIAS
    | ALL
    | ALTER
    | AND
    | ANTI
    | ANY
    | ARRAY
    | AS
    | ASCENDING
    | ASC
    | ASOF
    | AST
    | ASYNC
    | ATTACH
    | BETWEEN
    | BOTH
    | BY
    | CASE
    | CAST
    | CHECK
    | CLEAR
    | CLUSTER
    | CODEC
    | COLLATE
    | COLUMN
    | COMMENT
    | CONSTRAINT
    | CREATE
    | CROSS
    | CUBE
    | CURRENT
    | DATABASE
    | DATABASES
    | DATE
    | DEDUPLICATE
    | DEFAULT
    | DELAY
    | DELETE
    | DESCRIBE
    | DESC
    | DESCENDING
    | DETACH
    | DICTIONARIES
    | DICTIONARY
    | DISK
    | DISTINCT
    | DISTRIBUTED
    | DROP
    | ELSE
    | END
    | ENGINE
    | EVENTS
    | EXISTS
    | EXPLAIN
    | EXPRESSION
    | EXTRACT
    | FETCHES
    | FINAL
    | FIRST
    | FLUSH
    | FOR
    | FOLLOWING
    | FOR
    | FORMAT
    | FREEZE
    | FROM
    | FULL
    | FUNCTION
    | GLOBAL
    | GRANULARITY
    | GROUP
    | HAVING
    | HIERARCHICAL
    | ID
    | IF
    | ILIKE
    | IN
    | INDEX
    | INJECTIVE
    | INNER
    | INSERT
    | INTERVAL
    | INTO
    | IS
    | IS_OBJECT_ID
    | JOIN
    | JSON_FALSE
    | JSON_TRUE
    | KEY
    | KILL
    | LAST
    | LAYOUT
    | LEADING
    | LEFT
    | LIFETIME
    | LIKE
    | LIMIT
    | LIVE
    | LOCAL
    | LOGS
    | MATERIALIZE
    | MATERIALIZED
    | MAX
    | MERGES
    | MIN
    | MODIFY
    | MOVE
    | MUTATION
    | NO
    | NOT
    | NULLS
    | OFFSET
    | ON
    | OPTIMIZE
    | OR
    | ORDER
    | OUTER
    | OUTFILE
    | OVER
    | PARTITION
    | POPULATE
    | PRECEDING
    | PREWHERE
    | PRIMARY
    | RANGE
    | RELOAD
    | REMOVE
    | RENAME
    | REPLACE
    | REPLICA
    | REPLICATED
    | RIGHT
    | ROLLUP
    | ROW
    | ROWS
    | SAMPLE
    | SELECT
    | SEMI
    | SENDS
    | SET
    | SETTINGS
    | SHOW
    | SOURCE
    | START
    | STOP
    | SUBSTRING
    | SYNC
    | SYNTAX
    | SYSTEM
    | TABLE
    | TABLES
    | TEMPORARY
    | TEST
    | THEN
    | TIES
    | TIMEOUT
    | TIMESTAMP
    | TOTALS
    | TRAILING
    | TRIM
    | TRUNCATE
    | TO
    | TOP
    | TTL
    | TYPE
    | UNBOUNDED
    | UNION
    | UPDATE
    | USE
    | USING
    | UUID
    | VALUES
    | VIEW
    | VOLUME
    | WATCH
    | WHEN
    | WHERE
    | WINDOW
    | WITH
    | GRANT
    | USER
    | FETCH
    | REFRESH
    | POLICY
    | QUOTA
    | ROLE
    | PROFILE
    | ARBITRARY
    | COLUMNS
    | CURRENT_USER
    | ACCESS
    | SHOW_USERS
    | SHOW_ROLES
    | SHOW_ROW_POLICIES
    | SHOW_QUOTAS
    | SHOW_SETTINGS_PROFILES
    | SHUTDOWN
    | CACHE
    | DNS
    | MARK
    | PART
    | UNCOMPRESSED
    | CONFIG
    | EMBEDDED
    | FUNCTIONS
    | MOVES
    | REPLICATION
    | QUEUES
    | RESTART
    | DICTGET
    | DICTGETHIERARCHY
    | DICTHAS
    | DICTISIN
    | MANAGEMENT
    | ADMIN
    | INTROSPECTION
    | ADDRESSTOLINE
    | ADDRESSTOSYMBOL
    | DEMANGLE
    | SOURCES
    | FILE
    | URL
    | REMOTE
    | MYSQL
    | ODBC
    | JDBC
    | HDFS
    | S3
    | SETTING
    | OPTION
    | NONE
    | ADD
    | ADDRESSTOLINEWITHINLINES
    | AFTER
    | ALLOW
    | AZURE
    | COLLECTION
    | COLLECTIONS
    | CONTROL
    | DAY
    | DISPLAYSECRETSINSHOWANDSELECT
    | ESTIMATE
    | HIVE
    | HOUR
    | INF
    | MARKS
    | MINUTE
    | MONGO
    | MONTH
    | NAMED
    | PIPELINE
    | PLAN
    | POLICIES
    | POSTGRES
    | PROFILES
    | PROJECTION
    | QUARTER
    | QUERY
    | REDIS
    | SECOND
    | SECRETS
    | SECURITY
    | SQL
    | SQLITE
    | TREE
    | USAGE
    | WEEK
    | YEAR
    | GRANTS
    | EXCEPT
    | REVOKE
    | IDENTIFIED
    | PLAINTEXT_PASSWORD
    | SHA256_PASSWORD
    | SHA256_HASH
    | DOUBLE_SHA1_PASSWORD
    | DOUBLE_SHA1_HASH
    | NO_PASSWORD
    | LDAP
    | SERVER
    | KERBEROS
    | REALM
    | SSL_CERTIFICATE
    | SAN
    | CN
    | SSH_KEY
    | HTTP
    | SCHEME
    | BCRYPT_PASSWORD
    | BCRYPT_HASH
    | VALID
    | UNTIL
    | GRANTEES
    | NAME
    | REGEXP
    | IP
    | HOST
    | READONLY
    | WRITABLE
    | PERMISSIVE
    | RESTRICTIVE
    | TABSEPARATED
    | TABSEPARATEDRAW
    | TABSEPARATEDWITHNAMES
    | TABSEPARATEDWITHNAMESANDTYPES
    | TABSEPARATEDRAWWITHNAMES
    | TABSEPARATEDRAWWITHNAMESANDTYPES
    | TEMPLATE
    | TEMPLATEIGNORESPACES
    | CSV
    | CSVWITHNAMES
    | CSVWITHNAMESANDTYPES
    | CUSTOMSEPARATED
    | CUSTOMSEPARATEDWITHNAMES
    | CUSTOMSEPARATEDWITHNAMESANDTYPES
    | JSON
    | JSONASSTRING
    | JSONASOBJECT
    | JSONSTRINGS
    | JSONCOLUMNS
    | JSONCOLUMNSWITHMETADATA
    | JSONCOMPACT
    | JSONCOMPACTCOLUMNS
    | JSONEACHROW
    | JSONSTRINGSEACHROW
    | JSONCOMPACTEACHROW
    | JSONCOMPACTEACHROWWITHNAMES
    | JSONCOMPACTEACHROWWITHNAMESANDTYPES
    | JSONCOMPACTSTRINGSEACHROW
    | JSONCOMPACTSTRINGSEACHROWWITHNAMES
    | JSONCOMPACTSTRINGSEACHROWWITHNAMESANDTYPES
    | JSONOBJECTEACHROW
    | BSONEACHROW
    | TSKV
    | PROTOBUF
    | PROTOBUFSINGLE
    | PROTOBUFLIST
    | AVRO
    | AVROCONFLUENT
    | PARQUET
    | PARQUETMETADATA
    | ARROW
    | ARROWSTREAM
    | ORC
    | ONE
    | NPY
    | ROWBINARY
    | ROWBINARYWITHNAMES
    | ROWBINARYWITHNAMESANDTYPES
    | ROWBINARYWITHDEFAULTS
    | NATIVE
    | CAPNPROTO
    | LINEASSTRING
    | RAWBLOB
    | MSGPACK
    | MYSQLDUMP
    | DWARF
    | FORM
    | KEYED
    | RANDOMIZED
    | USER_NAME
    | IP_ADDRESS
    | FORWARDED_IP_ADDRESS
    | CLIENT_KEY
    | CLIENT_KEY_OR_USER_NAME
    | CLIENT_KEY_OR_IP_ADDRESS
    | QUERIES
    | QUERY_SELECTS
    | QUERY_INSERTS
    | ERRORS
    | RESULT_ROWS
    | RESULT_BYTES
    | READ_ROWS
    | READ_BYTES
    | EXECUTION_TIME
    | FAILED_SEQUENTIAL_AUTHENTICATIONS
    | LIMITS
    | TRACKING
    | ONLY
    | CONST
    | CHANGEABLE_IN_READONLY
    | OVERRIDABLE
    | INHERIT
    | RESET
    | DETACHED
    | FORGET
    | STATISTICS
    | UNFREEZE
    ;

keywordForAlias
    : DATE
    | FIRST
    | ID
    | KEY
    ;

alias
    : IDENTIFIER
    | keywordForAlias
    ;

// |interval| can't be an alias, otherwise 'INTERVAL 1 SOMETHING' becomes ambiguous.
identifier
    : IDENTIFIER
    | interval
    | keyword
    ;

identifierOrNull
    : identifier
    | NULL_SQL
    ; // NULL_SQL can be only 'Null' here.

enumValue
    : STRING_LITERAL EQ_SINGLE numberLiteral
    ;