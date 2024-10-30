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
    : LPAREN identifier (COMMA identifier)* RPAREN
    ;

// ALTER statement

alterStatement
    : ALTER TABLE tableIdentifier clusterClause? alterTableClause (COMMA alterTableClause)* # AlterTableStatement
    ;

alterTableClause
    : ADD COLUMN (IF NOT EXISTS)? tableColumnDefinition (AFTER columnIdentifier)?                          # AlterTableClauseAddColumn
    | ADD INDEX (IF NOT EXISTS)? tableIndexDefinition ( AFTER columnIdentifier)?                           # AlterTableClauseAddIndex
    | ADD PROJECTION (IF NOT EXISTS)? tableProjectionDefinition ( AFTER columnIdentifier)?                 # AlterTableClauseAddProjection
    | ATTACH partitionClause (FROM tableIdentifier)?                                                       # AlterTableClauseAttach
    | CLEAR COLUMN (IF EXISTS)? columnIdentifier ( IN partitionClause)?                                    # AlterTableClauseClearColumn
    | CLEAR INDEX (IF EXISTS)? columnIdentifier ( IN partitionClause)?                                     # AlterTableClauseClearIndex
    | CLEAR PROJECTION (IF EXISTS)? columnIdentifier ( IN partitionClause)?                                # AlterTableClauseClearProjection
    | COMMENT COLUMN (IF EXISTS)? columnIdentifier STRING_LITERAL                                          # AlterTableClauseComment
    | DELETE WHERE columnExpression                                                                        # AlterTableClauseDelete
    | DETACH partitionClause                                                                               # AlterTableClauseDetach
    | DROP COLUMN (IF EXISTS)? columnIdentifier                                                            # AlterTableClauseDropColumn
    | DROP INDEX (IF EXISTS)? columnIdentifier                                                             # AlterTableClauseDropIndex
    | DROP PROJECTION (IF EXISTS)? columnIdentifier                                                        # AlterTableClauseDropProjection
    | DROP partitionClause                                                                                 # AlterTableClauseDropPartition
    | FREEZE partitionClause?                                                                              # AlterTableClauseFreezePartition
    | MATERIALIZE INDEX (IF EXISTS)? columnIdentifier ( IN partitionClause)?                               # AlterTableClauseMaterializeIndex
    | MATERIALIZE PROJECTION (IF EXISTS)? columnIdentifier ( IN partitionClause)?                          # AlterTableClauseMaterializeProjection
    | MODIFY COLUMN (IF EXISTS)? columnIdentifier codecExpression                                          # AlterTableClauseModifyCodec
    | MODIFY COLUMN (IF EXISTS)? columnIdentifier COMMENT STRING_LITERAL                                   # AlterTableClauseModifyComment
    | MODIFY COLUMN (IF EXISTS)? columnIdentifier REMOVE tableColumnPropertyType                           # AlterTableClauseModifyRemove
    | MODIFY COLUMN (IF EXISTS)? tableColumnDefinition                                                     # AlterTableClauseModify
    | MODIFY ORDER BY columnExpression                                                                     # AlterTableClauseModifyOrderBy
    | MODIFY ttlClause                                                                                     # AlterTableClauseModifyTTL
    | MOVE partitionClause ( TO DISK STRING_LITERAL | TO VOLUME STRING_LITERAL | TO TABLE tableIdentifier) # AlterTableClauseMovePartition
    | REMOVE TTL                                                                                           # AlterTableClauseRemoveTTL
    | RENAME COLUMN (IF EXISTS)? columnIdentifier TO columnIdentifier                                      # AlterTableClauseRename
    | REPLACE partitionClause FROM tableIdentifier                                                         # AlterTableClauseReplace
    | UPDATE assignmentExpressionList whereClause                                                          # AlterTableClauseUpdate
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

partitionClause
    : PARTITION columnExpression // actually we expect here any form of tuple of literals
    | PARTITION ID STRING_LITERAL
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

createUserSettingExpression
    : identifier EQ_SINGLE literal (MIN EQ_SINGLE? literal)? (MAX EQ_SINGLE? literal)? (READONLY | WRITABLE)?
    | PROFILE STRING_LITERAL
    ;

createUserSettingsClause
    : SETTINGS createUserSettingExpression (COMMA createUserSettingExpression)*
    ;

createUserStatement
    : CREATE USER ((OR REPLACE) | (IF NOT EXISTS))? identifier (COMMA identifier)* clusterClause? userIdentificationClause hostClause? validUntilClause? (IN STRING_LITERAL)? (DEFAULT ROLE roleExpressionList)? (DEFAULT DATABASE (databaseIdentifier | NONE))? granteesClause? createUserSettingsClause?
    ;

createStatement
    : createDatabaseStatement
    | createDictionaryStatement
    | createLiveViewStatement
    | createMaterializedViewStatement
    | createTableStatement
    | createViewStatement
    | createUserStatement
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
    : REVOKE clusterClause? (GRANT OPTION FOR)? privilegeList ON accessSubjectIdentifier FROM (userExpressionList | ALL | ALL EXCEPT userExpressionList)
    | REVOKE clusterClause? (ADMIN OPTION FOR)? roleExpressionList FROM (userOrRoleExpressionList | ALL | ALL EXCEPT userOrRoleExpressionList)
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

insertFormatType
    : FORMAT_TAB_SEPARATED
    | FORMAT_TAB_SEPARATED_RAW
    | FORMAT_TAB_SEPARATED_WITH_NAMES
    | FORMAT_TAB_SEPARATED_WITH_NAMES_AND_TYPES
    | FORMAT_TAB_SEPARATED_RAW_WITH_NAMES
    | FORMAT_TAB_SEPARATED_RAW_WITH_NAMES_AND_TYPES
    | FORMAT_TEMPLATE
    | FORMAT_TEMPLATE_IGNORE_SPACES
    | FORMAT_CSV
    | FORMAT_CSV_WITH_NAMES
    | FORMAT_CSV_WITH_NAMES_AND_TYPES
    | FORMAT_CUSTOM_SEPARATED
    | FORMAT_CUSTOM_SEPARATED_WITH_NAMES
    | FORMAT_CUSTOM_SEPARATED_WITH_NAMES_AND_TYPES
    | FORMAT_VALUES
    | FORMAT_JSON
    | FORMAT_JSON_AS_STRING
    | FORMAT_JSON_AS_OBJECT
    | FORMAT_JSON_STRINGS
    | FORMAT_JSON_COLUMNS
    | FORMAT_JSON_COLUMNS_WITH_METADATA
    | FORMAT_JSON_COMPACT
    | FORMAT_JSON_COMPACT_COLUMNS
    | FORMAT_JSON_EACH_ROW
    | FORMAT_JSON_STRINGS_EACH_ROW
    | FORMAT_JSON_COMPACT_EACH_ROW
    | FORMAT_JSON_COMPACT_EACH_ROW_WITH_NAMES
    | FORMAT_JSON_COMPACT_EACH_ROW_WITH_NAMES_AND_TYPES
    | FORMAT_JSON_COMPACT_STRINGS_EACH_ROW
    | FORMAT_JSON_COMPACT_STRINGS_EACH_ROW_WITH_NAMES
    | FORMAT_JSON_COMPACT_STRINGS_EACH_ROW_WITH_NAMES_AND_TYPES
    | FORMAT_JSON_OBJECT_EACH_ROW
    | FORMAT_BSON_EACH_ROW
    | FORMAT_TSKV
    | FORMAT_PROTOBUF
    | FORMAT_PROTOBUF_SINGLE
    | FORMAT_PROTOBUF_LIST
    | FORMAT_AVRO
    | FORMAT_AVRO_CONFLUENT
    | FORMAT_PARQUET
    | FORMAT_PARQUET_METADATA
    | FORMAT_ARROW
    | FORMAT_ARROW_STREAM
    | FORMAT_ORC
    | FORMAT_ONE
    | FORMAT_NPY
    | FORMAT_ROW_BINARY
    | FORMAT_ROW_BINARY_WITH_NAMES
    | FORMAT_ROW_BINARY_WITH_NAMES_AND_TYPES
    | FORMAT_ROW_BINARY_WITH_DEFAULTS
    | FORMAT_NATIVE
    | FORMAT_CAPN_PROTO
    | FORMAT_LINE_AS_STRING
    | FORMAT_REGEXP
    | FORMAT_RAW_BLOB
    | FORMAT_MSG_PACK
    | FORMAT_MYSQL_DUMP
    | FORMAT_DWARF
    | FORMAT_FORM
    ;

dataClause
    : FORMAT insertFormatType identifier+ # DataClauseFormat
    | FORMAT? valuesStatement             # DataClauseValues
    | selectUnionStatement SEMICOLON? EOF # DataClauseSelect
    ;

literalList
    : literal (COMMA literal)*
    ;

valueIdentifier
    : literal
    | LPAREN numberLiteral COMMA numberLiteral RPAREN
    | identifier LPAREN (literalList)? RPAREN
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
    : columnExpression (ASCENDING | DESCENDING | DESC)? (NULLS (FIRST | LAST))? (COLLATE STRING_LITERAL)?
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
    : (LPAREN identifier (COMMA identifier)* RPAREN | identifier (COMMA identifier)*) ARROW columnExpression
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