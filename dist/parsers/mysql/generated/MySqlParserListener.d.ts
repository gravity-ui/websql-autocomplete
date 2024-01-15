import { ErrorNode, ParseTreeListener, ParserRuleContext, TerminalNode } from "antlr4ng";
import { RootContext } from "./MySqlParser.js";
import { SqlStatementsContext } from "./MySqlParser.js";
import { SqlStatementContext } from "./MySqlParser.js";
import { EmptyStatement_Context } from "./MySqlParser.js";
import { DdlStatementContext } from "./MySqlParser.js";
import { DmlStatementContext } from "./MySqlParser.js";
import { TransactionStatementContext } from "./MySqlParser.js";
import { ReplicationStatementContext } from "./MySqlParser.js";
import { PreparedStatementContext } from "./MySqlParser.js";
import { CompoundStatementContext } from "./MySqlParser.js";
import { AdministrationStatementContext } from "./MySqlParser.js";
import { UtilityStatementContext } from "./MySqlParser.js";
import { CreateDatabaseContext } from "./MySqlParser.js";
import { CreateEventContext } from "./MySqlParser.js";
import { CreateIndexContext } from "./MySqlParser.js";
import { CreateLogfileGroupContext } from "./MySqlParser.js";
import { CreateProcedureContext } from "./MySqlParser.js";
import { CreateFunctionContext } from "./MySqlParser.js";
import { CreateRoleContext } from "./MySqlParser.js";
import { CreateServerContext } from "./MySqlParser.js";
import { CopyCreateTableContext } from "./MySqlParser.js";
import { QueryCreateTableContext } from "./MySqlParser.js";
import { ColumnCreateTableContext } from "./MySqlParser.js";
import { CreateTablespaceInnodbContext } from "./MySqlParser.js";
import { CreateTablespaceNdbContext } from "./MySqlParser.js";
import { CreateTriggerContext } from "./MySqlParser.js";
import { WithClauseContext } from "./MySqlParser.js";
import { CommonTableExpressionsContext } from "./MySqlParser.js";
import { CteNameContext } from "./MySqlParser.js";
import { CteColumnNameContext } from "./MySqlParser.js";
import { CreateViewContext } from "./MySqlParser.js";
import { CreateDatabaseOptionContext } from "./MySqlParser.js";
import { CharSetContext } from "./MySqlParser.js";
import { CurrentUserExpressionContext } from "./MySqlParser.js";
import { OwnerStatementContext } from "./MySqlParser.js";
import { PreciseScheduleContext } from "./MySqlParser.js";
import { IntervalScheduleContext } from "./MySqlParser.js";
import { TimestampValueContext } from "./MySqlParser.js";
import { IntervalExprContext } from "./MySqlParser.js";
import { IntervalTypeContext } from "./MySqlParser.js";
import { EnableTypeContext } from "./MySqlParser.js";
import { IndexTypeContext } from "./MySqlParser.js";
import { IndexOptionContext } from "./MySqlParser.js";
import { ProcedureParameterContext } from "./MySqlParser.js";
import { FunctionParameterContext } from "./MySqlParser.js";
import { RoutineCommentContext } from "./MySqlParser.js";
import { RoutineLanguageContext } from "./MySqlParser.js";
import { RoutineBehaviorContext } from "./MySqlParser.js";
import { RoutineDataContext } from "./MySqlParser.js";
import { RoutineSecurityContext } from "./MySqlParser.js";
import { ServerOptionContext } from "./MySqlParser.js";
import { CreateDefinitionsContext } from "./MySqlParser.js";
import { ColumnDeclarationContext } from "./MySqlParser.js";
import { ConstraintDeclarationContext } from "./MySqlParser.js";
import { IndexDeclarationContext } from "./MySqlParser.js";
import { ColumnDefinitionContext } from "./MySqlParser.js";
import { NullColumnConstraintContext } from "./MySqlParser.js";
import { DefaultColumnConstraintContext } from "./MySqlParser.js";
import { VisibilityColumnConstraintContext } from "./MySqlParser.js";
import { InvisibilityColumnConstraintContext } from "./MySqlParser.js";
import { AutoIncrementColumnConstraintContext } from "./MySqlParser.js";
import { PrimaryKeyColumnConstraintContext } from "./MySqlParser.js";
import { UniqueKeyColumnConstraintContext } from "./MySqlParser.js";
import { CommentColumnConstraintContext } from "./MySqlParser.js";
import { FormatColumnConstraintContext } from "./MySqlParser.js";
import { StorageColumnConstraintContext } from "./MySqlParser.js";
import { ReferenceColumnConstraintContext } from "./MySqlParser.js";
import { CollateColumnConstraintContext } from "./MySqlParser.js";
import { GeneratedColumnConstraintContext } from "./MySqlParser.js";
import { SerialDefaultColumnConstraintContext } from "./MySqlParser.js";
import { CheckColumnConstraintContext } from "./MySqlParser.js";
import { PrimaryKeyTableConstraintContext } from "./MySqlParser.js";
import { UniqueKeyTableConstraintContext } from "./MySqlParser.js";
import { ForeignKeyTableConstraintContext } from "./MySqlParser.js";
import { CheckTableConstraintContext } from "./MySqlParser.js";
import { ReferenceDefinitionContext } from "./MySqlParser.js";
import { ReferenceActionContext } from "./MySqlParser.js";
import { ReferenceControlTypeContext } from "./MySqlParser.js";
import { SimpleIndexDeclarationContext } from "./MySqlParser.js";
import { SpecialIndexDeclarationContext } from "./MySqlParser.js";
import { TableOptionEngineContext } from "./MySqlParser.js";
import { TableOptionEngineAttributeContext } from "./MySqlParser.js";
import { TableOptionAutoextendSizeContext } from "./MySqlParser.js";
import { TableOptionAutoIncrementContext } from "./MySqlParser.js";
import { TableOptionAverageContext } from "./MySqlParser.js";
import { TableOptionCharsetContext } from "./MySqlParser.js";
import { TableOptionChecksumContext } from "./MySqlParser.js";
import { TableOptionCollateContext } from "./MySqlParser.js";
import { TableOptionCommentContext } from "./MySqlParser.js";
import { TableOptionCompressionContext } from "./MySqlParser.js";
import { TableOptionConnectionContext } from "./MySqlParser.js";
import { TableOptionDataDirectoryContext } from "./MySqlParser.js";
import { TableOptionDelayContext } from "./MySqlParser.js";
import { TableOptionEncryptionContext } from "./MySqlParser.js";
import { TableOptionPageCompressedContext } from "./MySqlParser.js";
import { TableOptionPageCompressionLevelContext } from "./MySqlParser.js";
import { TableOptionEncryptionKeyIdContext } from "./MySqlParser.js";
import { TableOptionIndexDirectoryContext } from "./MySqlParser.js";
import { TableOptionInsertMethodContext } from "./MySqlParser.js";
import { TableOptionKeyBlockSizeContext } from "./MySqlParser.js";
import { TableOptionMaxRowsContext } from "./MySqlParser.js";
import { TableOptionMinRowsContext } from "./MySqlParser.js";
import { TableOptionPackKeysContext } from "./MySqlParser.js";
import { TableOptionPasswordContext } from "./MySqlParser.js";
import { TableOptionRowFormatContext } from "./MySqlParser.js";
import { TableOptionStartTransactionContext } from "./MySqlParser.js";
import { TableOptionSecondaryEngineAttributeContext } from "./MySqlParser.js";
import { TableOptionRecalculationContext } from "./MySqlParser.js";
import { TableOptionPersistentContext } from "./MySqlParser.js";
import { TableOptionSamplePageContext } from "./MySqlParser.js";
import { TableOptionTablespaceContext } from "./MySqlParser.js";
import { TableOptionTableTypeContext } from "./MySqlParser.js";
import { TableOptionTransactionalContext } from "./MySqlParser.js";
import { TableOptionUnionContext } from "./MySqlParser.js";
import { TableTypeContext } from "./MySqlParser.js";
import { TablespaceStorageContext } from "./MySqlParser.js";
import { PartitionDefinitionsContext } from "./MySqlParser.js";
import { PartitionFunctionHashContext } from "./MySqlParser.js";
import { PartitionFunctionKeyContext } from "./MySqlParser.js";
import { PartitionFunctionRangeContext } from "./MySqlParser.js";
import { PartitionFunctionListContext } from "./MySqlParser.js";
import { SubPartitionFunctionHashContext } from "./MySqlParser.js";
import { SubPartitionFunctionKeyContext } from "./MySqlParser.js";
import { PartitionComparisonContext } from "./MySqlParser.js";
import { PartitionListAtomContext } from "./MySqlParser.js";
import { PartitionListVectorContext } from "./MySqlParser.js";
import { PartitionSimpleContext } from "./MySqlParser.js";
import { PartitionDefinerAtomContext } from "./MySqlParser.js";
import { PartitionDefinerVectorContext } from "./MySqlParser.js";
import { SubpartitionDefinitionContext } from "./MySqlParser.js";
import { PartitionOptionEngineContext } from "./MySqlParser.js";
import { PartitionOptionCommentContext } from "./MySqlParser.js";
import { PartitionOptionDataDirectoryContext } from "./MySqlParser.js";
import { PartitionOptionIndexDirectoryContext } from "./MySqlParser.js";
import { PartitionOptionMaxRowsContext } from "./MySqlParser.js";
import { PartitionOptionMinRowsContext } from "./MySqlParser.js";
import { PartitionOptionTablespaceContext } from "./MySqlParser.js";
import { PartitionOptionNodeGroupContext } from "./MySqlParser.js";
import { AlterSimpleDatabaseContext } from "./MySqlParser.js";
import { AlterUpgradeNameContext } from "./MySqlParser.js";
import { AlterEventContext } from "./MySqlParser.js";
import { AlterFunctionContext } from "./MySqlParser.js";
import { AlterInstanceContext } from "./MySqlParser.js";
import { AlterLogfileGroupContext } from "./MySqlParser.js";
import { AlterProcedureContext } from "./MySqlParser.js";
import { AlterServerContext } from "./MySqlParser.js";
import { AlterTableContext } from "./MySqlParser.js";
import { AlterTablespaceContext } from "./MySqlParser.js";
import { AlterViewContext } from "./MySqlParser.js";
import { AlterByTableOptionContext } from "./MySqlParser.js";
import { AlterByAddColumnContext } from "./MySqlParser.js";
import { AlterByAddColumnsContext } from "./MySqlParser.js";
import { AlterByAddIndexContext } from "./MySqlParser.js";
import { AlterByAddPrimaryKeyContext } from "./MySqlParser.js";
import { AlterByAddUniqueKeyContext } from "./MySqlParser.js";
import { AlterByAddSpecialIndexContext } from "./MySqlParser.js";
import { AlterByAddForeignKeyContext } from "./MySqlParser.js";
import { AlterByAddCheckTableConstraintContext } from "./MySqlParser.js";
import { AlterByAlterCheckTableConstraintContext } from "./MySqlParser.js";
import { AlterBySetAlgorithmContext } from "./MySqlParser.js";
import { AlterByChangeDefaultContext } from "./MySqlParser.js";
import { AlterByChangeColumnContext } from "./MySqlParser.js";
import { AlterByRenameColumnContext } from "./MySqlParser.js";
import { AlterByLockContext } from "./MySqlParser.js";
import { AlterByModifyColumnContext } from "./MySqlParser.js";
import { AlterByDropColumnContext } from "./MySqlParser.js";
import { AlterByDropConstraintCheckContext } from "./MySqlParser.js";
import { AlterByDropPrimaryKeyContext } from "./MySqlParser.js";
import { AlterByDropIndexContext } from "./MySqlParser.js";
import { AlterByRenameIndexContext } from "./MySqlParser.js";
import { AlterByAlterColumnDefaultContext } from "./MySqlParser.js";
import { AlterByAlterIndexVisibilityContext } from "./MySqlParser.js";
import { AlterByDropForeignKeyContext } from "./MySqlParser.js";
import { AlterByDisableKeysContext } from "./MySqlParser.js";
import { AlterByEnableKeysContext } from "./MySqlParser.js";
import { AlterByRenameContext } from "./MySqlParser.js";
import { AlterByOrderContext } from "./MySqlParser.js";
import { AlterByConvertCharsetContext } from "./MySqlParser.js";
import { AlterByDefaultCharsetContext } from "./MySqlParser.js";
import { AlterByDiscardTablespaceContext } from "./MySqlParser.js";
import { AlterByImportTablespaceContext } from "./MySqlParser.js";
import { AlterByForceContext } from "./MySqlParser.js";
import { AlterByValidateContext } from "./MySqlParser.js";
import { AlterByAddDefinitionsContext } from "./MySqlParser.js";
import { AlterPartitionContext } from "./MySqlParser.js";
import { AlterByAddPartitionContext } from "./MySqlParser.js";
import { AlterByDropPartitionContext } from "./MySqlParser.js";
import { AlterByDiscardPartitionContext } from "./MySqlParser.js";
import { AlterByImportPartitionContext } from "./MySqlParser.js";
import { AlterByTruncatePartitionContext } from "./MySqlParser.js";
import { AlterByCoalescePartitionContext } from "./MySqlParser.js";
import { AlterByReorganizePartitionContext } from "./MySqlParser.js";
import { AlterByExchangePartitionContext } from "./MySqlParser.js";
import { AlterByAnalyzePartitionContext } from "./MySqlParser.js";
import { AlterByCheckPartitionContext } from "./MySqlParser.js";
import { AlterByOptimizePartitionContext } from "./MySqlParser.js";
import { AlterByRebuildPartitionContext } from "./MySqlParser.js";
import { AlterByRepairPartitionContext } from "./MySqlParser.js";
import { AlterByRemovePartitioningContext } from "./MySqlParser.js";
import { AlterByUpgradePartitioningContext } from "./MySqlParser.js";
import { DropDatabaseContext } from "./MySqlParser.js";
import { DropEventContext } from "./MySqlParser.js";
import { DropIndexContext } from "./MySqlParser.js";
import { DropLogfileGroupContext } from "./MySqlParser.js";
import { DropProcedureContext } from "./MySqlParser.js";
import { DropFunctionContext } from "./MySqlParser.js";
import { DropServerContext } from "./MySqlParser.js";
import { DropTableContext } from "./MySqlParser.js";
import { DropTablespaceContext } from "./MySqlParser.js";
import { DropTriggerContext } from "./MySqlParser.js";
import { DropViewContext } from "./MySqlParser.js";
import { DropRoleContext } from "./MySqlParser.js";
import { SetRoleContext } from "./MySqlParser.js";
import { RenameTableContext } from "./MySqlParser.js";
import { RenameTableClauseContext } from "./MySqlParser.js";
import { TruncateTableContext } from "./MySqlParser.js";
import { CallStatementContext } from "./MySqlParser.js";
import { DeleteStatementContext } from "./MySqlParser.js";
import { DoStatementContext } from "./MySqlParser.js";
import { HandlerStatementContext } from "./MySqlParser.js";
import { InsertStatementContext } from "./MySqlParser.js";
import { LoadDataStatementContext } from "./MySqlParser.js";
import { LoadXmlStatementContext } from "./MySqlParser.js";
import { ReplaceStatementContext } from "./MySqlParser.js";
import { SimpleSelectContext } from "./MySqlParser.js";
import { ParenthesisSelectContext } from "./MySqlParser.js";
import { UnionSelectContext } from "./MySqlParser.js";
import { UnionParenthesisSelectContext } from "./MySqlParser.js";
import { WithLateralStatementContext } from "./MySqlParser.js";
import { UpdateStatementContext } from "./MySqlParser.js";
import { ValuesStatementContext } from "./MySqlParser.js";
import { InsertStatementValueContext } from "./MySqlParser.js";
import { UpdatedElementContext } from "./MySqlParser.js";
import { AssignmentFieldContext } from "./MySqlParser.js";
import { LockClauseContext } from "./MySqlParser.js";
import { SingleDeleteStatementContext } from "./MySqlParser.js";
import { MultipleDeleteStatementContext } from "./MySqlParser.js";
import { HandlerOpenStatementContext } from "./MySqlParser.js";
import { HandlerReadIndexStatementContext } from "./MySqlParser.js";
import { HandlerReadStatementContext } from "./MySqlParser.js";
import { HandlerCloseStatementContext } from "./MySqlParser.js";
import { SingleUpdateStatementContext } from "./MySqlParser.js";
import { MultipleUpdateStatementContext } from "./MySqlParser.js";
import { OrderByClauseContext } from "./MySqlParser.js";
import { OrderByExpressionContext } from "./MySqlParser.js";
import { TableSourcesContext } from "./MySqlParser.js";
import { TableSourceBaseContext } from "./MySqlParser.js";
import { TableSourceNestedContext } from "./MySqlParser.js";
import { TableJsonContext } from "./MySqlParser.js";
import { AtomTableItemContext } from "./MySqlParser.js";
import { SubqueryTableItemContext } from "./MySqlParser.js";
import { TableSourcesItemContext } from "./MySqlParser.js";
import { IndexHintContext } from "./MySqlParser.js";
import { IndexHintTypeContext } from "./MySqlParser.js";
import { InnerJoinContext } from "./MySqlParser.js";
import { StraightJoinContext } from "./MySqlParser.js";
import { OuterJoinContext } from "./MySqlParser.js";
import { NaturalJoinContext } from "./MySqlParser.js";
import { JoinSpecContext } from "./MySqlParser.js";
import { QueryExpressionContext } from "./MySqlParser.js";
import { QueryExpressionNointoContext } from "./MySqlParser.js";
import { QuerySpecificationContext } from "./MySqlParser.js";
import { QuerySpecificationNointoContext } from "./MySqlParser.js";
import { UnionParenthesisContext } from "./MySqlParser.js";
import { UnionStatementContext } from "./MySqlParser.js";
import { LateralStatementContext } from "./MySqlParser.js";
import { JsonTableContext } from "./MySqlParser.js";
import { JsonColumnListContext } from "./MySqlParser.js";
import { JsonColumnContext } from "./MySqlParser.js";
import { JsonOnEmptyContext } from "./MySqlParser.js";
import { JsonOnErrorContext } from "./MySqlParser.js";
import { SelectSpecContext } from "./MySqlParser.js";
import { SelectElementsContext } from "./MySqlParser.js";
import { SelectStarElementContext } from "./MySqlParser.js";
import { SelectColumnElementContext } from "./MySqlParser.js";
import { SelectFunctionElementContext } from "./MySqlParser.js";
import { SelectExpressionElementContext } from "./MySqlParser.js";
import { SelectIntoVariablesContext } from "./MySqlParser.js";
import { SelectIntoDumpFileContext } from "./MySqlParser.js";
import { SelectIntoTextFileContext } from "./MySqlParser.js";
import { SelectFieldsIntoContext } from "./MySqlParser.js";
import { SelectLinesIntoContext } from "./MySqlParser.js";
import { FromClauseContext } from "./MySqlParser.js";
import { GroupByClauseContext } from "./MySqlParser.js";
import { HavingClauseContext } from "./MySqlParser.js";
import { WindowClauseContext } from "./MySqlParser.js";
import { GroupByItemContext } from "./MySqlParser.js";
import { LimitClauseContext } from "./MySqlParser.js";
import { LimitClauseAtomContext } from "./MySqlParser.js";
import { StartTransactionContext } from "./MySqlParser.js";
import { BeginWorkContext } from "./MySqlParser.js";
import { CommitWorkContext } from "./MySqlParser.js";
import { RollbackWorkContext } from "./MySqlParser.js";
import { SavepointStatementContext } from "./MySqlParser.js";
import { RollbackStatementContext } from "./MySqlParser.js";
import { ReleaseStatementContext } from "./MySqlParser.js";
import { LockTablesContext } from "./MySqlParser.js";
import { UnlockTablesContext } from "./MySqlParser.js";
import { SetAutocommitStatementContext } from "./MySqlParser.js";
import { SetTransactionStatementContext } from "./MySqlParser.js";
import { TransactionModeContext } from "./MySqlParser.js";
import { LockTableElementContext } from "./MySqlParser.js";
import { LockActionContext } from "./MySqlParser.js";
import { TransactionOptionContext } from "./MySqlParser.js";
import { TransactionLevelContext } from "./MySqlParser.js";
import { ChangeMasterContext } from "./MySqlParser.js";
import { ChangeReplicationFilterContext } from "./MySqlParser.js";
import { PurgeBinaryLogsContext } from "./MySqlParser.js";
import { ResetMasterContext } from "./MySqlParser.js";
import { ResetSlaveContext } from "./MySqlParser.js";
import { StartSlaveContext } from "./MySqlParser.js";
import { StopSlaveContext } from "./MySqlParser.js";
import { StartGroupReplicationContext } from "./MySqlParser.js";
import { StopGroupReplicationContext } from "./MySqlParser.js";
import { MasterStringOptionContext } from "./MySqlParser.js";
import { MasterDecimalOptionContext } from "./MySqlParser.js";
import { MasterBoolOptionContext } from "./MySqlParser.js";
import { MasterRealOptionContext } from "./MySqlParser.js";
import { MasterUidListOptionContext } from "./MySqlParser.js";
import { StringMasterOptionContext } from "./MySqlParser.js";
import { DecimalMasterOptionContext } from "./MySqlParser.js";
import { BoolMasterOptionContext } from "./MySqlParser.js";
import { ChannelOptionContext } from "./MySqlParser.js";
import { DoDbReplicationContext } from "./MySqlParser.js";
import { IgnoreDbReplicationContext } from "./MySqlParser.js";
import { DoTableReplicationContext } from "./MySqlParser.js";
import { IgnoreTableReplicationContext } from "./MySqlParser.js";
import { WildDoTableReplicationContext } from "./MySqlParser.js";
import { WildIgnoreTableReplicationContext } from "./MySqlParser.js";
import { RewriteDbReplicationContext } from "./MySqlParser.js";
import { TablePairContext } from "./MySqlParser.js";
import { ThreadTypeContext } from "./MySqlParser.js";
import { GtidsUntilOptionContext } from "./MySqlParser.js";
import { MasterLogUntilOptionContext } from "./MySqlParser.js";
import { RelayLogUntilOptionContext } from "./MySqlParser.js";
import { SqlGapsUntilOptionContext } from "./MySqlParser.js";
import { UserConnectionOptionContext } from "./MySqlParser.js";
import { PasswordConnectionOptionContext } from "./MySqlParser.js";
import { DefaultAuthConnectionOptionContext } from "./MySqlParser.js";
import { PluginDirConnectionOptionContext } from "./MySqlParser.js";
import { GtuidSetContext } from "./MySqlParser.js";
import { XaStartTransactionContext } from "./MySqlParser.js";
import { XaEndTransactionContext } from "./MySqlParser.js";
import { XaPrepareStatementContext } from "./MySqlParser.js";
import { XaCommitWorkContext } from "./MySqlParser.js";
import { XaRollbackWorkContext } from "./MySqlParser.js";
import { XaRecoverWorkContext } from "./MySqlParser.js";
import { PrepareStatementContext } from "./MySqlParser.js";
import { ExecuteStatementContext } from "./MySqlParser.js";
import { DeallocatePrepareContext } from "./MySqlParser.js";
import { RoutineBodyContext } from "./MySqlParser.js";
import { BlockStatementContext } from "./MySqlParser.js";
import { CaseStatementContext } from "./MySqlParser.js";
import { IfStatementContext } from "./MySqlParser.js";
import { IterateStatementContext } from "./MySqlParser.js";
import { LeaveStatementContext } from "./MySqlParser.js";
import { LoopStatementContext } from "./MySqlParser.js";
import { RepeatStatementContext } from "./MySqlParser.js";
import { ReturnStatementContext } from "./MySqlParser.js";
import { WhileStatementContext } from "./MySqlParser.js";
import { CloseCursorContext } from "./MySqlParser.js";
import { FetchCursorContext } from "./MySqlParser.js";
import { OpenCursorContext } from "./MySqlParser.js";
import { DeclareVariableContext } from "./MySqlParser.js";
import { DeclareConditionContext } from "./MySqlParser.js";
import { DeclareCursorContext } from "./MySqlParser.js";
import { DeclareHandlerContext } from "./MySqlParser.js";
import { HandlerConditionCodeContext } from "./MySqlParser.js";
import { HandlerConditionStateContext } from "./MySqlParser.js";
import { HandlerConditionNameContext } from "./MySqlParser.js";
import { HandlerConditionWarningContext } from "./MySqlParser.js";
import { HandlerConditionNotfoundContext } from "./MySqlParser.js";
import { HandlerConditionExceptionContext } from "./MySqlParser.js";
import { ProcedureSqlStatementContext } from "./MySqlParser.js";
import { CaseAlternativeContext } from "./MySqlParser.js";
import { ElifAlternativeContext } from "./MySqlParser.js";
import { AlterUserMysqlV56Context } from "./MySqlParser.js";
import { AlterUserMysqlV80Context } from "./MySqlParser.js";
import { CreateUserMysqlV56Context } from "./MySqlParser.js";
import { CreateUserMysqlV80Context } from "./MySqlParser.js";
import { DropUserContext } from "./MySqlParser.js";
import { GrantStatementContext } from "./MySqlParser.js";
import { RoleOptionContext } from "./MySqlParser.js";
import { GrantProxyContext } from "./MySqlParser.js";
import { RenameUserContext } from "./MySqlParser.js";
import { DetailRevokeContext } from "./MySqlParser.js";
import { ShortRevokeContext } from "./MySqlParser.js";
import { RoleRevokeContext } from "./MySqlParser.js";
import { RevokeProxyContext } from "./MySqlParser.js";
import { SetPasswordStatementContext } from "./MySqlParser.js";
import { UserSpecificationContext } from "./MySqlParser.js";
import { HashAuthOptionContext } from "./MySqlParser.js";
import { RandomAuthOptionContext } from "./MySqlParser.js";
import { StringAuthOptionContext } from "./MySqlParser.js";
import { ModuleAuthOptionContext } from "./MySqlParser.js";
import { SimpleAuthOptionContext } from "./MySqlParser.js";
import { AuthOptionClauseContext } from "./MySqlParser.js";
import { ModuleContext } from "./MySqlParser.js";
import { PasswordModuleOptionContext } from "./MySqlParser.js";
import { TlsOptionContext } from "./MySqlParser.js";
import { UserResourceOptionContext } from "./MySqlParser.js";
import { UserPasswordOptionContext } from "./MySqlParser.js";
import { UserLockOptionContext } from "./MySqlParser.js";
import { PrivelegeClauseContext } from "./MySqlParser.js";
import { PrivilegeContext } from "./MySqlParser.js";
import { CurrentSchemaPriviLevelContext } from "./MySqlParser.js";
import { GlobalPrivLevelContext } from "./MySqlParser.js";
import { DefiniteSchemaPrivLevelContext } from "./MySqlParser.js";
import { DefiniteFullTablePrivLevelContext } from "./MySqlParser.js";
import { DefiniteFullTablePrivLevel2Context } from "./MySqlParser.js";
import { DefiniteTablePrivLevelContext } from "./MySqlParser.js";
import { RenameUserClauseContext } from "./MySqlParser.js";
import { AnalyzeTableContext } from "./MySqlParser.js";
import { CheckTableContext } from "./MySqlParser.js";
import { ChecksumTableContext } from "./MySqlParser.js";
import { OptimizeTableContext } from "./MySqlParser.js";
import { RepairTableContext } from "./MySqlParser.js";
import { CheckTableOptionContext } from "./MySqlParser.js";
import { CreateUdfunctionContext } from "./MySqlParser.js";
import { InstallPluginContext } from "./MySqlParser.js";
import { UninstallPluginContext } from "./MySqlParser.js";
import { SetVariableContext } from "./MySqlParser.js";
import { SetCharsetContext } from "./MySqlParser.js";
import { SetNamesContext } from "./MySqlParser.js";
import { SetPasswordContext } from "./MySqlParser.js";
import { SetTransactionContext } from "./MySqlParser.js";
import { SetAutocommitContext } from "./MySqlParser.js";
import { SetNewValueInsideTriggerContext } from "./MySqlParser.js";
import { ShowMasterLogsContext } from "./MySqlParser.js";
import { ShowLogEventsContext } from "./MySqlParser.js";
import { ShowObjectFilterContext } from "./MySqlParser.js";
import { ShowColumnsContext } from "./MySqlParser.js";
import { ShowCreateDbContext } from "./MySqlParser.js";
import { ShowCreateFullIdObjectContext } from "./MySqlParser.js";
import { ShowCreateUserContext } from "./MySqlParser.js";
import { ShowEngineContext } from "./MySqlParser.js";
import { ShowGlobalInfoContext } from "./MySqlParser.js";
import { ShowErrorsContext } from "./MySqlParser.js";
import { ShowCountErrorsContext } from "./MySqlParser.js";
import { ShowSchemaFilterContext } from "./MySqlParser.js";
import { ShowRoutineContext } from "./MySqlParser.js";
import { ShowGrantsContext } from "./MySqlParser.js";
import { ShowIndexesContext } from "./MySqlParser.js";
import { ShowOpenTablesContext } from "./MySqlParser.js";
import { ShowProfileContext } from "./MySqlParser.js";
import { ShowSlaveStatusContext } from "./MySqlParser.js";
import { VariableClauseContext } from "./MySqlParser.js";
import { ShowCommonEntityContext } from "./MySqlParser.js";
import { ShowFilterContext } from "./MySqlParser.js";
import { ShowGlobalInfoClauseContext } from "./MySqlParser.js";
import { ShowSchemaEntityContext } from "./MySqlParser.js";
import { ShowProfileTypeContext } from "./MySqlParser.js";
import { BinlogStatementContext } from "./MySqlParser.js";
import { CacheIndexStatementContext } from "./MySqlParser.js";
import { FlushStatementContext } from "./MySqlParser.js";
import { KillStatementContext } from "./MySqlParser.js";
import { LoadIndexIntoCacheContext } from "./MySqlParser.js";
import { ResetStatementContext } from "./MySqlParser.js";
import { ShutdownStatementContext } from "./MySqlParser.js";
import { TableIndexesContext } from "./MySqlParser.js";
import { SimpleFlushOptionContext } from "./MySqlParser.js";
import { ChannelFlushOptionContext } from "./MySqlParser.js";
import { TableFlushOptionContext } from "./MySqlParser.js";
import { FlushTableOptionContext } from "./MySqlParser.js";
import { LoadedTableIndexesContext } from "./MySqlParser.js";
import { SimpleDescribeStatementContext } from "./MySqlParser.js";
import { FullDescribeStatementContext } from "./MySqlParser.js";
import { HelpStatementContext } from "./MySqlParser.js";
import { UseStatementContext } from "./MySqlParser.js";
import { SignalStatementContext } from "./MySqlParser.js";
import { ResignalStatementContext } from "./MySqlParser.js";
import { SignalConditionInformationContext } from "./MySqlParser.js";
import { WithStatementContext } from "./MySqlParser.js";
import { TableStatementContext } from "./MySqlParser.js";
import { DiagnosticsStatementContext } from "./MySqlParser.js";
import { DiagnosticsConditionInformationNameContext } from "./MySqlParser.js";
import { DescribeStatementsContext } from "./MySqlParser.js";
import { DescribeConnectionContext } from "./MySqlParser.js";
import { FullIdContext } from "./MySqlParser.js";
import { TableNameContext } from "./MySqlParser.js";
import { RoleNameContext } from "./MySqlParser.js";
import { FullColumnNameContext } from "./MySqlParser.js";
import { IndexColumnNameContext } from "./MySqlParser.js";
import { SimpleUserNameContext } from "./MySqlParser.js";
import { HostNameContext } from "./MySqlParser.js";
import { UserNameContext } from "./MySqlParser.js";
import { MysqlVariableContext } from "./MySqlParser.js";
import { CharsetNameContext } from "./MySqlParser.js";
import { CollationNameContext } from "./MySqlParser.js";
import { EngineNameContext } from "./MySqlParser.js";
import { EngineNameBaseContext } from "./MySqlParser.js";
import { UuidSetContext } from "./MySqlParser.js";
import { XidContext } from "./MySqlParser.js";
import { XuidStringIdContext } from "./MySqlParser.js";
import { AuthPluginContext } from "./MySqlParser.js";
import { UidContext } from "./MySqlParser.js";
import { SimpleIdContext } from "./MySqlParser.js";
import { DottedIdContext } from "./MySqlParser.js";
import { DecimalLiteralContext } from "./MySqlParser.js";
import { FileSizeLiteralContext } from "./MySqlParser.js";
import { StringLiteralContext } from "./MySqlParser.js";
import { BooleanLiteralContext } from "./MySqlParser.js";
import { HexadecimalLiteralContext } from "./MySqlParser.js";
import { NullNotnullContext } from "./MySqlParser.js";
import { ConstantContext } from "./MySqlParser.js";
import { StringDataTypeContext } from "./MySqlParser.js";
import { NationalVaryingStringDataTypeContext } from "./MySqlParser.js";
import { NationalStringDataTypeContext } from "./MySqlParser.js";
import { DimensionDataTypeContext } from "./MySqlParser.js";
import { SimpleDataTypeContext } from "./MySqlParser.js";
import { CollectionDataTypeContext } from "./MySqlParser.js";
import { SpatialDataTypeContext } from "./MySqlParser.js";
import { LongVarcharDataTypeContext } from "./MySqlParser.js";
import { LongVarbinaryDataTypeContext } from "./MySqlParser.js";
import { CollectionOptionsContext } from "./MySqlParser.js";
import { ConvertedDataTypeContext } from "./MySqlParser.js";
import { LengthOneDimensionContext } from "./MySqlParser.js";
import { LengthTwoDimensionContext } from "./MySqlParser.js";
import { LengthTwoOptionalDimensionContext } from "./MySqlParser.js";
import { UidListContext } from "./MySqlParser.js";
import { FullColumnNameListContext } from "./MySqlParser.js";
import { TablesContext } from "./MySqlParser.js";
import { IndexColumnNamesContext } from "./MySqlParser.js";
import { ExpressionsContext } from "./MySqlParser.js";
import { ExpressionsWithDefaultsContext } from "./MySqlParser.js";
import { ConstantsContext } from "./MySqlParser.js";
import { SimpleStringsContext } from "./MySqlParser.js";
import { UserVariablesContext } from "./MySqlParser.js";
import { DefaultValueContext } from "./MySqlParser.js";
import { CurrentTimestampContext } from "./MySqlParser.js";
import { ExpressionOrDefaultContext } from "./MySqlParser.js";
import { IfExistsContext } from "./MySqlParser.js";
import { IfNotExistsContext } from "./MySqlParser.js";
import { OrReplaceContext } from "./MySqlParser.js";
import { WaitNowaitClauseContext } from "./MySqlParser.js";
import { SpecificFunctionCallContext } from "./MySqlParser.js";
import { AggregateFunctionCallContext } from "./MySqlParser.js";
import { NonAggregateFunctionCallContext } from "./MySqlParser.js";
import { ScalarFunctionCallContext } from "./MySqlParser.js";
import { UdfFunctionCallContext } from "./MySqlParser.js";
import { PasswordFunctionCallContext } from "./MySqlParser.js";
import { SimpleFunctionCallContext } from "./MySqlParser.js";
import { CurrentUserContext } from "./MySqlParser.js";
import { DataTypeFunctionCallContext } from "./MySqlParser.js";
import { ValuesFunctionCallContext } from "./MySqlParser.js";
import { CaseExpressionFunctionCallContext } from "./MySqlParser.js";
import { CaseFunctionCallContext } from "./MySqlParser.js";
import { CharFunctionCallContext } from "./MySqlParser.js";
import { PositionFunctionCallContext } from "./MySqlParser.js";
import { SubstrFunctionCallContext } from "./MySqlParser.js";
import { TrimFunctionCallContext } from "./MySqlParser.js";
import { WeightFunctionCallContext } from "./MySqlParser.js";
import { ExtractFunctionCallContext } from "./MySqlParser.js";
import { GetFormatFunctionCallContext } from "./MySqlParser.js";
import { JsonValueFunctionCallContext } from "./MySqlParser.js";
import { CaseFuncAlternativeContext } from "./MySqlParser.js";
import { LevelWeightListContext } from "./MySqlParser.js";
import { LevelWeightRangeContext } from "./MySqlParser.js";
import { LevelInWeightListElementContext } from "./MySqlParser.js";
import { AggregateWindowedFunctionContext } from "./MySqlParser.js";
import { NonAggregateWindowedFunctionContext } from "./MySqlParser.js";
import { OverClauseContext } from "./MySqlParser.js";
import { WindowSpecContext } from "./MySqlParser.js";
import { WindowNameContext } from "./MySqlParser.js";
import { FrameClauseContext } from "./MySqlParser.js";
import { FrameUnitsContext } from "./MySqlParser.js";
import { FrameExtentContext } from "./MySqlParser.js";
import { FrameBetweenContext } from "./MySqlParser.js";
import { FrameRangeContext } from "./MySqlParser.js";
import { PartitionClauseContext } from "./MySqlParser.js";
import { ScalarFunctionNameContext } from "./MySqlParser.js";
import { PasswordFunctionClauseContext } from "./MySqlParser.js";
import { FunctionArgsContext } from "./MySqlParser.js";
import { FunctionArgContext } from "./MySqlParser.js";
import { IsExpressionContext } from "./MySqlParser.js";
import { NotExpressionContext } from "./MySqlParser.js";
import { LogicalExpressionContext } from "./MySqlParser.js";
import { PredicateExpressionContext } from "./MySqlParser.js";
import { SoundsLikePredicateContext } from "./MySqlParser.js";
import { ExpressionAtomPredicateContext } from "./MySqlParser.js";
import { SubqueryComparisonPredicateContext } from "./MySqlParser.js";
import { JsonMemberOfPredicateContext } from "./MySqlParser.js";
import { BinaryComparisonPredicateContext } from "./MySqlParser.js";
import { InPredicateContext } from "./MySqlParser.js";
import { BetweenPredicateContext } from "./MySqlParser.js";
import { IsNullPredicateContext } from "./MySqlParser.js";
import { LikePredicateContext } from "./MySqlParser.js";
import { RegexpPredicateContext } from "./MySqlParser.js";
import { UnaryExpressionAtomContext } from "./MySqlParser.js";
import { CollateExpressionAtomContext } from "./MySqlParser.js";
import { VariableAssignExpressionAtomContext } from "./MySqlParser.js";
import { MysqlVariableExpressionAtomContext } from "./MySqlParser.js";
import { NestedExpressionAtomContext } from "./MySqlParser.js";
import { NestedRowExpressionAtomContext } from "./MySqlParser.js";
import { MathExpressionAtomContext } from "./MySqlParser.js";
import { ExistsExpressionAtomContext } from "./MySqlParser.js";
import { IntervalExpressionAtomContext } from "./MySqlParser.js";
import { JsonExpressionAtomContext } from "./MySqlParser.js";
import { SubqueryExpressionAtomContext } from "./MySqlParser.js";
import { ConstantExpressionAtomContext } from "./MySqlParser.js";
import { FunctionCallExpressionAtomContext } from "./MySqlParser.js";
import { BinaryExpressionAtomContext } from "./MySqlParser.js";
import { FullColumnNameExpressionAtomContext } from "./MySqlParser.js";
import { BitExpressionAtomContext } from "./MySqlParser.js";
import { UnaryOperatorContext } from "./MySqlParser.js";
import { ComparisonOperatorContext } from "./MySqlParser.js";
import { LogicalOperatorContext } from "./MySqlParser.js";
import { BitOperatorContext } from "./MySqlParser.js";
import { MultOperatorContext } from "./MySqlParser.js";
import { AddOperatorContext } from "./MySqlParser.js";
import { JsonOperatorContext } from "./MySqlParser.js";
import { CharsetNameBaseContext } from "./MySqlParser.js";
import { TransactionLevelBaseContext } from "./MySqlParser.js";
import { PrivilegesBaseContext } from "./MySqlParser.js";
import { IntervalTypeBaseContext } from "./MySqlParser.js";
import { DataTypeBaseContext } from "./MySqlParser.js";
import { KeywordsCanBeIdContext } from "./MySqlParser.js";
import { FunctionNameBaseContext } from "./MySqlParser.js";
/**
 * This interface defines a complete listener for a parse tree produced by
 * `MySqlParser`.
 */
export declare class MySqlParserListener implements ParseTreeListener {
    /**
     * Enter a parse tree produced by `MySqlParser.root`.
     * @param ctx the parse tree
     */
    enterRoot?: (ctx: RootContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.root`.
     * @param ctx the parse tree
     */
    exitRoot?: (ctx: RootContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.sqlStatements`.
     * @param ctx the parse tree
     */
    enterSqlStatements?: (ctx: SqlStatementsContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.sqlStatements`.
     * @param ctx the parse tree
     */
    exitSqlStatements?: (ctx: SqlStatementsContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.sqlStatement`.
     * @param ctx the parse tree
     */
    enterSqlStatement?: (ctx: SqlStatementContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.sqlStatement`.
     * @param ctx the parse tree
     */
    exitSqlStatement?: (ctx: SqlStatementContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.emptyStatement_`.
     * @param ctx the parse tree
     */
    enterEmptyStatement_?: (ctx: EmptyStatement_Context) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.emptyStatement_`.
     * @param ctx the parse tree
     */
    exitEmptyStatement_?: (ctx: EmptyStatement_Context) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.ddlStatement`.
     * @param ctx the parse tree
     */
    enterDdlStatement?: (ctx: DdlStatementContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.ddlStatement`.
     * @param ctx the parse tree
     */
    exitDdlStatement?: (ctx: DdlStatementContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.dmlStatement`.
     * @param ctx the parse tree
     */
    enterDmlStatement?: (ctx: DmlStatementContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.dmlStatement`.
     * @param ctx the parse tree
     */
    exitDmlStatement?: (ctx: DmlStatementContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.transactionStatement`.
     * @param ctx the parse tree
     */
    enterTransactionStatement?: (ctx: TransactionStatementContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.transactionStatement`.
     * @param ctx the parse tree
     */
    exitTransactionStatement?: (ctx: TransactionStatementContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.replicationStatement`.
     * @param ctx the parse tree
     */
    enterReplicationStatement?: (ctx: ReplicationStatementContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.replicationStatement`.
     * @param ctx the parse tree
     */
    exitReplicationStatement?: (ctx: ReplicationStatementContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.preparedStatement`.
     * @param ctx the parse tree
     */
    enterPreparedStatement?: (ctx: PreparedStatementContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.preparedStatement`.
     * @param ctx the parse tree
     */
    exitPreparedStatement?: (ctx: PreparedStatementContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.compoundStatement`.
     * @param ctx the parse tree
     */
    enterCompoundStatement?: (ctx: CompoundStatementContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.compoundStatement`.
     * @param ctx the parse tree
     */
    exitCompoundStatement?: (ctx: CompoundStatementContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.administrationStatement`.
     * @param ctx the parse tree
     */
    enterAdministrationStatement?: (ctx: AdministrationStatementContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.administrationStatement`.
     * @param ctx the parse tree
     */
    exitAdministrationStatement?: (ctx: AdministrationStatementContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.utilityStatement`.
     * @param ctx the parse tree
     */
    enterUtilityStatement?: (ctx: UtilityStatementContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.utilityStatement`.
     * @param ctx the parse tree
     */
    exitUtilityStatement?: (ctx: UtilityStatementContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.createDatabase`.
     * @param ctx the parse tree
     */
    enterCreateDatabase?: (ctx: CreateDatabaseContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.createDatabase`.
     * @param ctx the parse tree
     */
    exitCreateDatabase?: (ctx: CreateDatabaseContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.createEvent`.
     * @param ctx the parse tree
     */
    enterCreateEvent?: (ctx: CreateEventContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.createEvent`.
     * @param ctx the parse tree
     */
    exitCreateEvent?: (ctx: CreateEventContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.createIndex`.
     * @param ctx the parse tree
     */
    enterCreateIndex?: (ctx: CreateIndexContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.createIndex`.
     * @param ctx the parse tree
     */
    exitCreateIndex?: (ctx: CreateIndexContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.createLogfileGroup`.
     * @param ctx the parse tree
     */
    enterCreateLogfileGroup?: (ctx: CreateLogfileGroupContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.createLogfileGroup`.
     * @param ctx the parse tree
     */
    exitCreateLogfileGroup?: (ctx: CreateLogfileGroupContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.createProcedure`.
     * @param ctx the parse tree
     */
    enterCreateProcedure?: (ctx: CreateProcedureContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.createProcedure`.
     * @param ctx the parse tree
     */
    exitCreateProcedure?: (ctx: CreateProcedureContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.createFunction`.
     * @param ctx the parse tree
     */
    enterCreateFunction?: (ctx: CreateFunctionContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.createFunction`.
     * @param ctx the parse tree
     */
    exitCreateFunction?: (ctx: CreateFunctionContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.createRole`.
     * @param ctx the parse tree
     */
    enterCreateRole?: (ctx: CreateRoleContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.createRole`.
     * @param ctx the parse tree
     */
    exitCreateRole?: (ctx: CreateRoleContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.createServer`.
     * @param ctx the parse tree
     */
    enterCreateServer?: (ctx: CreateServerContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.createServer`.
     * @param ctx the parse tree
     */
    exitCreateServer?: (ctx: CreateServerContext) => void;
    /**
     * Enter a parse tree produced by the `copyCreateTable`
     * labeled alternative in `MySqlParser.createTable`.
     * @param ctx the parse tree
     */
    enterCopyCreateTable?: (ctx: CopyCreateTableContext) => void;
    /**
     * Exit a parse tree produced by the `copyCreateTable`
     * labeled alternative in `MySqlParser.createTable`.
     * @param ctx the parse tree
     */
    exitCopyCreateTable?: (ctx: CopyCreateTableContext) => void;
    /**
     * Enter a parse tree produced by the `queryCreateTable`
     * labeled alternative in `MySqlParser.createTable`.
     * @param ctx the parse tree
     */
    enterQueryCreateTable?: (ctx: QueryCreateTableContext) => void;
    /**
     * Exit a parse tree produced by the `queryCreateTable`
     * labeled alternative in `MySqlParser.createTable`.
     * @param ctx the parse tree
     */
    exitQueryCreateTable?: (ctx: QueryCreateTableContext) => void;
    /**
     * Enter a parse tree produced by the `columnCreateTable`
     * labeled alternative in `MySqlParser.createTable`.
     * @param ctx the parse tree
     */
    enterColumnCreateTable?: (ctx: ColumnCreateTableContext) => void;
    /**
     * Exit a parse tree produced by the `columnCreateTable`
     * labeled alternative in `MySqlParser.createTable`.
     * @param ctx the parse tree
     */
    exitColumnCreateTable?: (ctx: ColumnCreateTableContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.createTablespaceInnodb`.
     * @param ctx the parse tree
     */
    enterCreateTablespaceInnodb?: (ctx: CreateTablespaceInnodbContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.createTablespaceInnodb`.
     * @param ctx the parse tree
     */
    exitCreateTablespaceInnodb?: (ctx: CreateTablespaceInnodbContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.createTablespaceNdb`.
     * @param ctx the parse tree
     */
    enterCreateTablespaceNdb?: (ctx: CreateTablespaceNdbContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.createTablespaceNdb`.
     * @param ctx the parse tree
     */
    exitCreateTablespaceNdb?: (ctx: CreateTablespaceNdbContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.createTrigger`.
     * @param ctx the parse tree
     */
    enterCreateTrigger?: (ctx: CreateTriggerContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.createTrigger`.
     * @param ctx the parse tree
     */
    exitCreateTrigger?: (ctx: CreateTriggerContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.withClause`.
     * @param ctx the parse tree
     */
    enterWithClause?: (ctx: WithClauseContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.withClause`.
     * @param ctx the parse tree
     */
    exitWithClause?: (ctx: WithClauseContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.commonTableExpressions`.
     * @param ctx the parse tree
     */
    enterCommonTableExpressions?: (ctx: CommonTableExpressionsContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.commonTableExpressions`.
     * @param ctx the parse tree
     */
    exitCommonTableExpressions?: (ctx: CommonTableExpressionsContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.cteName`.
     * @param ctx the parse tree
     */
    enterCteName?: (ctx: CteNameContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.cteName`.
     * @param ctx the parse tree
     */
    exitCteName?: (ctx: CteNameContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.cteColumnName`.
     * @param ctx the parse tree
     */
    enterCteColumnName?: (ctx: CteColumnNameContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.cteColumnName`.
     * @param ctx the parse tree
     */
    exitCteColumnName?: (ctx: CteColumnNameContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.createView`.
     * @param ctx the parse tree
     */
    enterCreateView?: (ctx: CreateViewContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.createView`.
     * @param ctx the parse tree
     */
    exitCreateView?: (ctx: CreateViewContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.createDatabaseOption`.
     * @param ctx the parse tree
     */
    enterCreateDatabaseOption?: (ctx: CreateDatabaseOptionContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.createDatabaseOption`.
     * @param ctx the parse tree
     */
    exitCreateDatabaseOption?: (ctx: CreateDatabaseOptionContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.charSet`.
     * @param ctx the parse tree
     */
    enterCharSet?: (ctx: CharSetContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.charSet`.
     * @param ctx the parse tree
     */
    exitCharSet?: (ctx: CharSetContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.currentUserExpression`.
     * @param ctx the parse tree
     */
    enterCurrentUserExpression?: (ctx: CurrentUserExpressionContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.currentUserExpression`.
     * @param ctx the parse tree
     */
    exitCurrentUserExpression?: (ctx: CurrentUserExpressionContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.ownerStatement`.
     * @param ctx the parse tree
     */
    enterOwnerStatement?: (ctx: OwnerStatementContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.ownerStatement`.
     * @param ctx the parse tree
     */
    exitOwnerStatement?: (ctx: OwnerStatementContext) => void;
    /**
     * Enter a parse tree produced by the `preciseSchedule`
     * labeled alternative in `MySqlParser.scheduleExpression`.
     * @param ctx the parse tree
     */
    enterPreciseSchedule?: (ctx: PreciseScheduleContext) => void;
    /**
     * Exit a parse tree produced by the `preciseSchedule`
     * labeled alternative in `MySqlParser.scheduleExpression`.
     * @param ctx the parse tree
     */
    exitPreciseSchedule?: (ctx: PreciseScheduleContext) => void;
    /**
     * Enter a parse tree produced by the `intervalSchedule`
     * labeled alternative in `MySqlParser.scheduleExpression`.
     * @param ctx the parse tree
     */
    enterIntervalSchedule?: (ctx: IntervalScheduleContext) => void;
    /**
     * Exit a parse tree produced by the `intervalSchedule`
     * labeled alternative in `MySqlParser.scheduleExpression`.
     * @param ctx the parse tree
     */
    exitIntervalSchedule?: (ctx: IntervalScheduleContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.timestampValue`.
     * @param ctx the parse tree
     */
    enterTimestampValue?: (ctx: TimestampValueContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.timestampValue`.
     * @param ctx the parse tree
     */
    exitTimestampValue?: (ctx: TimestampValueContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.intervalExpr`.
     * @param ctx the parse tree
     */
    enterIntervalExpr?: (ctx: IntervalExprContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.intervalExpr`.
     * @param ctx the parse tree
     */
    exitIntervalExpr?: (ctx: IntervalExprContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.intervalType`.
     * @param ctx the parse tree
     */
    enterIntervalType?: (ctx: IntervalTypeContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.intervalType`.
     * @param ctx the parse tree
     */
    exitIntervalType?: (ctx: IntervalTypeContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.enableType`.
     * @param ctx the parse tree
     */
    enterEnableType?: (ctx: EnableTypeContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.enableType`.
     * @param ctx the parse tree
     */
    exitEnableType?: (ctx: EnableTypeContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.indexType`.
     * @param ctx the parse tree
     */
    enterIndexType?: (ctx: IndexTypeContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.indexType`.
     * @param ctx the parse tree
     */
    exitIndexType?: (ctx: IndexTypeContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.indexOption`.
     * @param ctx the parse tree
     */
    enterIndexOption?: (ctx: IndexOptionContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.indexOption`.
     * @param ctx the parse tree
     */
    exitIndexOption?: (ctx: IndexOptionContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.procedureParameter`.
     * @param ctx the parse tree
     */
    enterProcedureParameter?: (ctx: ProcedureParameterContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.procedureParameter`.
     * @param ctx the parse tree
     */
    exitProcedureParameter?: (ctx: ProcedureParameterContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.functionParameter`.
     * @param ctx the parse tree
     */
    enterFunctionParameter?: (ctx: FunctionParameterContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.functionParameter`.
     * @param ctx the parse tree
     */
    exitFunctionParameter?: (ctx: FunctionParameterContext) => void;
    /**
     * Enter a parse tree produced by the `routineComment`
     * labeled alternative in `MySqlParser.routineOption`.
     * @param ctx the parse tree
     */
    enterRoutineComment?: (ctx: RoutineCommentContext) => void;
    /**
     * Exit a parse tree produced by the `routineComment`
     * labeled alternative in `MySqlParser.routineOption`.
     * @param ctx the parse tree
     */
    exitRoutineComment?: (ctx: RoutineCommentContext) => void;
    /**
     * Enter a parse tree produced by the `routineLanguage`
     * labeled alternative in `MySqlParser.routineOption`.
     * @param ctx the parse tree
     */
    enterRoutineLanguage?: (ctx: RoutineLanguageContext) => void;
    /**
     * Exit a parse tree produced by the `routineLanguage`
     * labeled alternative in `MySqlParser.routineOption`.
     * @param ctx the parse tree
     */
    exitRoutineLanguage?: (ctx: RoutineLanguageContext) => void;
    /**
     * Enter a parse tree produced by the `routineBehavior`
     * labeled alternative in `MySqlParser.routineOption`.
     * @param ctx the parse tree
     */
    enterRoutineBehavior?: (ctx: RoutineBehaviorContext) => void;
    /**
     * Exit a parse tree produced by the `routineBehavior`
     * labeled alternative in `MySqlParser.routineOption`.
     * @param ctx the parse tree
     */
    exitRoutineBehavior?: (ctx: RoutineBehaviorContext) => void;
    /**
     * Enter a parse tree produced by the `routineData`
     * labeled alternative in `MySqlParser.routineOption`.
     * @param ctx the parse tree
     */
    enterRoutineData?: (ctx: RoutineDataContext) => void;
    /**
     * Exit a parse tree produced by the `routineData`
     * labeled alternative in `MySqlParser.routineOption`.
     * @param ctx the parse tree
     */
    exitRoutineData?: (ctx: RoutineDataContext) => void;
    /**
     * Enter a parse tree produced by the `routineSecurity`
     * labeled alternative in `MySqlParser.routineOption`.
     * @param ctx the parse tree
     */
    enterRoutineSecurity?: (ctx: RoutineSecurityContext) => void;
    /**
     * Exit a parse tree produced by the `routineSecurity`
     * labeled alternative in `MySqlParser.routineOption`.
     * @param ctx the parse tree
     */
    exitRoutineSecurity?: (ctx: RoutineSecurityContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.serverOption`.
     * @param ctx the parse tree
     */
    enterServerOption?: (ctx: ServerOptionContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.serverOption`.
     * @param ctx the parse tree
     */
    exitServerOption?: (ctx: ServerOptionContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.createDefinitions`.
     * @param ctx the parse tree
     */
    enterCreateDefinitions?: (ctx: CreateDefinitionsContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.createDefinitions`.
     * @param ctx the parse tree
     */
    exitCreateDefinitions?: (ctx: CreateDefinitionsContext) => void;
    /**
     * Enter a parse tree produced by the `columnDeclaration`
     * labeled alternative in `MySqlParser.createDefinition`.
     * @param ctx the parse tree
     */
    enterColumnDeclaration?: (ctx: ColumnDeclarationContext) => void;
    /**
     * Exit a parse tree produced by the `columnDeclaration`
     * labeled alternative in `MySqlParser.createDefinition`.
     * @param ctx the parse tree
     */
    exitColumnDeclaration?: (ctx: ColumnDeclarationContext) => void;
    /**
     * Enter a parse tree produced by the `constraintDeclaration`
     * labeled alternative in `MySqlParser.createDefinition`.
     * @param ctx the parse tree
     */
    enterConstraintDeclaration?: (ctx: ConstraintDeclarationContext) => void;
    /**
     * Exit a parse tree produced by the `constraintDeclaration`
     * labeled alternative in `MySqlParser.createDefinition`.
     * @param ctx the parse tree
     */
    exitConstraintDeclaration?: (ctx: ConstraintDeclarationContext) => void;
    /**
     * Enter a parse tree produced by the `indexDeclaration`
     * labeled alternative in `MySqlParser.createDefinition`.
     * @param ctx the parse tree
     */
    enterIndexDeclaration?: (ctx: IndexDeclarationContext) => void;
    /**
     * Exit a parse tree produced by the `indexDeclaration`
     * labeled alternative in `MySqlParser.createDefinition`.
     * @param ctx the parse tree
     */
    exitIndexDeclaration?: (ctx: IndexDeclarationContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.columnDefinition`.
     * @param ctx the parse tree
     */
    enterColumnDefinition?: (ctx: ColumnDefinitionContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.columnDefinition`.
     * @param ctx the parse tree
     */
    exitColumnDefinition?: (ctx: ColumnDefinitionContext) => void;
    /**
     * Enter a parse tree produced by the `nullColumnConstraint`
     * labeled alternative in `MySqlParser.columnConstraint`.
     * @param ctx the parse tree
     */
    enterNullColumnConstraint?: (ctx: NullColumnConstraintContext) => void;
    /**
     * Exit a parse tree produced by the `nullColumnConstraint`
     * labeled alternative in `MySqlParser.columnConstraint`.
     * @param ctx the parse tree
     */
    exitNullColumnConstraint?: (ctx: NullColumnConstraintContext) => void;
    /**
     * Enter a parse tree produced by the `defaultColumnConstraint`
     * labeled alternative in `MySqlParser.columnConstraint`.
     * @param ctx the parse tree
     */
    enterDefaultColumnConstraint?: (ctx: DefaultColumnConstraintContext) => void;
    /**
     * Exit a parse tree produced by the `defaultColumnConstraint`
     * labeled alternative in `MySqlParser.columnConstraint`.
     * @param ctx the parse tree
     */
    exitDefaultColumnConstraint?: (ctx: DefaultColumnConstraintContext) => void;
    /**
     * Enter a parse tree produced by the `visibilityColumnConstraint`
     * labeled alternative in `MySqlParser.columnConstraint`.
     * @param ctx the parse tree
     */
    enterVisibilityColumnConstraint?: (ctx: VisibilityColumnConstraintContext) => void;
    /**
     * Exit a parse tree produced by the `visibilityColumnConstraint`
     * labeled alternative in `MySqlParser.columnConstraint`.
     * @param ctx the parse tree
     */
    exitVisibilityColumnConstraint?: (ctx: VisibilityColumnConstraintContext) => void;
    /**
     * Enter a parse tree produced by the `invisibilityColumnConstraint`
     * labeled alternative in `MySqlParser.columnConstraint`.
     * @param ctx the parse tree
     */
    enterInvisibilityColumnConstraint?: (ctx: InvisibilityColumnConstraintContext) => void;
    /**
     * Exit a parse tree produced by the `invisibilityColumnConstraint`
     * labeled alternative in `MySqlParser.columnConstraint`.
     * @param ctx the parse tree
     */
    exitInvisibilityColumnConstraint?: (ctx: InvisibilityColumnConstraintContext) => void;
    /**
     * Enter a parse tree produced by the `autoIncrementColumnConstraint`
     * labeled alternative in `MySqlParser.columnConstraint`.
     * @param ctx the parse tree
     */
    enterAutoIncrementColumnConstraint?: (ctx: AutoIncrementColumnConstraintContext) => void;
    /**
     * Exit a parse tree produced by the `autoIncrementColumnConstraint`
     * labeled alternative in `MySqlParser.columnConstraint`.
     * @param ctx the parse tree
     */
    exitAutoIncrementColumnConstraint?: (ctx: AutoIncrementColumnConstraintContext) => void;
    /**
     * Enter a parse tree produced by the `primaryKeyColumnConstraint`
     * labeled alternative in `MySqlParser.columnConstraint`.
     * @param ctx the parse tree
     */
    enterPrimaryKeyColumnConstraint?: (ctx: PrimaryKeyColumnConstraintContext) => void;
    /**
     * Exit a parse tree produced by the `primaryKeyColumnConstraint`
     * labeled alternative in `MySqlParser.columnConstraint`.
     * @param ctx the parse tree
     */
    exitPrimaryKeyColumnConstraint?: (ctx: PrimaryKeyColumnConstraintContext) => void;
    /**
     * Enter a parse tree produced by the `uniqueKeyColumnConstraint`
     * labeled alternative in `MySqlParser.columnConstraint`.
     * @param ctx the parse tree
     */
    enterUniqueKeyColumnConstraint?: (ctx: UniqueKeyColumnConstraintContext) => void;
    /**
     * Exit a parse tree produced by the `uniqueKeyColumnConstraint`
     * labeled alternative in `MySqlParser.columnConstraint`.
     * @param ctx the parse tree
     */
    exitUniqueKeyColumnConstraint?: (ctx: UniqueKeyColumnConstraintContext) => void;
    /**
     * Enter a parse tree produced by the `commentColumnConstraint`
     * labeled alternative in `MySqlParser.columnConstraint`.
     * @param ctx the parse tree
     */
    enterCommentColumnConstraint?: (ctx: CommentColumnConstraintContext) => void;
    /**
     * Exit a parse tree produced by the `commentColumnConstraint`
     * labeled alternative in `MySqlParser.columnConstraint`.
     * @param ctx the parse tree
     */
    exitCommentColumnConstraint?: (ctx: CommentColumnConstraintContext) => void;
    /**
     * Enter a parse tree produced by the `formatColumnConstraint`
     * labeled alternative in `MySqlParser.columnConstraint`.
     * @param ctx the parse tree
     */
    enterFormatColumnConstraint?: (ctx: FormatColumnConstraintContext) => void;
    /**
     * Exit a parse tree produced by the `formatColumnConstraint`
     * labeled alternative in `MySqlParser.columnConstraint`.
     * @param ctx the parse tree
     */
    exitFormatColumnConstraint?: (ctx: FormatColumnConstraintContext) => void;
    /**
     * Enter a parse tree produced by the `storageColumnConstraint`
     * labeled alternative in `MySqlParser.columnConstraint`.
     * @param ctx the parse tree
     */
    enterStorageColumnConstraint?: (ctx: StorageColumnConstraintContext) => void;
    /**
     * Exit a parse tree produced by the `storageColumnConstraint`
     * labeled alternative in `MySqlParser.columnConstraint`.
     * @param ctx the parse tree
     */
    exitStorageColumnConstraint?: (ctx: StorageColumnConstraintContext) => void;
    /**
     * Enter a parse tree produced by the `referenceColumnConstraint`
     * labeled alternative in `MySqlParser.columnConstraint`.
     * @param ctx the parse tree
     */
    enterReferenceColumnConstraint?: (ctx: ReferenceColumnConstraintContext) => void;
    /**
     * Exit a parse tree produced by the `referenceColumnConstraint`
     * labeled alternative in `MySqlParser.columnConstraint`.
     * @param ctx the parse tree
     */
    exitReferenceColumnConstraint?: (ctx: ReferenceColumnConstraintContext) => void;
    /**
     * Enter a parse tree produced by the `collateColumnConstraint`
     * labeled alternative in `MySqlParser.columnConstraint`.
     * @param ctx the parse tree
     */
    enterCollateColumnConstraint?: (ctx: CollateColumnConstraintContext) => void;
    /**
     * Exit a parse tree produced by the `collateColumnConstraint`
     * labeled alternative in `MySqlParser.columnConstraint`.
     * @param ctx the parse tree
     */
    exitCollateColumnConstraint?: (ctx: CollateColumnConstraintContext) => void;
    /**
     * Enter a parse tree produced by the `generatedColumnConstraint`
     * labeled alternative in `MySqlParser.columnConstraint`.
     * @param ctx the parse tree
     */
    enterGeneratedColumnConstraint?: (ctx: GeneratedColumnConstraintContext) => void;
    /**
     * Exit a parse tree produced by the `generatedColumnConstraint`
     * labeled alternative in `MySqlParser.columnConstraint`.
     * @param ctx the parse tree
     */
    exitGeneratedColumnConstraint?: (ctx: GeneratedColumnConstraintContext) => void;
    /**
     * Enter a parse tree produced by the `serialDefaultColumnConstraint`
     * labeled alternative in `MySqlParser.columnConstraint`.
     * @param ctx the parse tree
     */
    enterSerialDefaultColumnConstraint?: (ctx: SerialDefaultColumnConstraintContext) => void;
    /**
     * Exit a parse tree produced by the `serialDefaultColumnConstraint`
     * labeled alternative in `MySqlParser.columnConstraint`.
     * @param ctx the parse tree
     */
    exitSerialDefaultColumnConstraint?: (ctx: SerialDefaultColumnConstraintContext) => void;
    /**
     * Enter a parse tree produced by the `checkColumnConstraint`
     * labeled alternative in `MySqlParser.columnConstraint`.
     * @param ctx the parse tree
     */
    enterCheckColumnConstraint?: (ctx: CheckColumnConstraintContext) => void;
    /**
     * Exit a parse tree produced by the `checkColumnConstraint`
     * labeled alternative in `MySqlParser.columnConstraint`.
     * @param ctx the parse tree
     */
    exitCheckColumnConstraint?: (ctx: CheckColumnConstraintContext) => void;
    /**
     * Enter a parse tree produced by the `primaryKeyTableConstraint`
     * labeled alternative in `MySqlParser.tableConstraint`.
     * @param ctx the parse tree
     */
    enterPrimaryKeyTableConstraint?: (ctx: PrimaryKeyTableConstraintContext) => void;
    /**
     * Exit a parse tree produced by the `primaryKeyTableConstraint`
     * labeled alternative in `MySqlParser.tableConstraint`.
     * @param ctx the parse tree
     */
    exitPrimaryKeyTableConstraint?: (ctx: PrimaryKeyTableConstraintContext) => void;
    /**
     * Enter a parse tree produced by the `uniqueKeyTableConstraint`
     * labeled alternative in `MySqlParser.tableConstraint`.
     * @param ctx the parse tree
     */
    enterUniqueKeyTableConstraint?: (ctx: UniqueKeyTableConstraintContext) => void;
    /**
     * Exit a parse tree produced by the `uniqueKeyTableConstraint`
     * labeled alternative in `MySqlParser.tableConstraint`.
     * @param ctx the parse tree
     */
    exitUniqueKeyTableConstraint?: (ctx: UniqueKeyTableConstraintContext) => void;
    /**
     * Enter a parse tree produced by the `foreignKeyTableConstraint`
     * labeled alternative in `MySqlParser.tableConstraint`.
     * @param ctx the parse tree
     */
    enterForeignKeyTableConstraint?: (ctx: ForeignKeyTableConstraintContext) => void;
    /**
     * Exit a parse tree produced by the `foreignKeyTableConstraint`
     * labeled alternative in `MySqlParser.tableConstraint`.
     * @param ctx the parse tree
     */
    exitForeignKeyTableConstraint?: (ctx: ForeignKeyTableConstraintContext) => void;
    /**
     * Enter a parse tree produced by the `checkTableConstraint`
     * labeled alternative in `MySqlParser.tableConstraint`.
     * @param ctx the parse tree
     */
    enterCheckTableConstraint?: (ctx: CheckTableConstraintContext) => void;
    /**
     * Exit a parse tree produced by the `checkTableConstraint`
     * labeled alternative in `MySqlParser.tableConstraint`.
     * @param ctx the parse tree
     */
    exitCheckTableConstraint?: (ctx: CheckTableConstraintContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.referenceDefinition`.
     * @param ctx the parse tree
     */
    enterReferenceDefinition?: (ctx: ReferenceDefinitionContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.referenceDefinition`.
     * @param ctx the parse tree
     */
    exitReferenceDefinition?: (ctx: ReferenceDefinitionContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.referenceAction`.
     * @param ctx the parse tree
     */
    enterReferenceAction?: (ctx: ReferenceActionContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.referenceAction`.
     * @param ctx the parse tree
     */
    exitReferenceAction?: (ctx: ReferenceActionContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.referenceControlType`.
     * @param ctx the parse tree
     */
    enterReferenceControlType?: (ctx: ReferenceControlTypeContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.referenceControlType`.
     * @param ctx the parse tree
     */
    exitReferenceControlType?: (ctx: ReferenceControlTypeContext) => void;
    /**
     * Enter a parse tree produced by the `simpleIndexDeclaration`
     * labeled alternative in `MySqlParser.indexColumnDefinition`.
     * @param ctx the parse tree
     */
    enterSimpleIndexDeclaration?: (ctx: SimpleIndexDeclarationContext) => void;
    /**
     * Exit a parse tree produced by the `simpleIndexDeclaration`
     * labeled alternative in `MySqlParser.indexColumnDefinition`.
     * @param ctx the parse tree
     */
    exitSimpleIndexDeclaration?: (ctx: SimpleIndexDeclarationContext) => void;
    /**
     * Enter a parse tree produced by the `specialIndexDeclaration`
     * labeled alternative in `MySqlParser.indexColumnDefinition`.
     * @param ctx the parse tree
     */
    enterSpecialIndexDeclaration?: (ctx: SpecialIndexDeclarationContext) => void;
    /**
     * Exit a parse tree produced by the `specialIndexDeclaration`
     * labeled alternative in `MySqlParser.indexColumnDefinition`.
     * @param ctx the parse tree
     */
    exitSpecialIndexDeclaration?: (ctx: SpecialIndexDeclarationContext) => void;
    /**
     * Enter a parse tree produced by the `tableOptionEngine`
     * labeled alternative in `MySqlParser.tableOption`.
     * @param ctx the parse tree
     */
    enterTableOptionEngine?: (ctx: TableOptionEngineContext) => void;
    /**
     * Exit a parse tree produced by the `tableOptionEngine`
     * labeled alternative in `MySqlParser.tableOption`.
     * @param ctx the parse tree
     */
    exitTableOptionEngine?: (ctx: TableOptionEngineContext) => void;
    /**
     * Enter a parse tree produced by the `tableOptionEngineAttribute`
     * labeled alternative in `MySqlParser.tableOption`.
     * @param ctx the parse tree
     */
    enterTableOptionEngineAttribute?: (ctx: TableOptionEngineAttributeContext) => void;
    /**
     * Exit a parse tree produced by the `tableOptionEngineAttribute`
     * labeled alternative in `MySqlParser.tableOption`.
     * @param ctx the parse tree
     */
    exitTableOptionEngineAttribute?: (ctx: TableOptionEngineAttributeContext) => void;
    /**
     * Enter a parse tree produced by the `tableOptionAutoextendSize`
     * labeled alternative in `MySqlParser.tableOption`.
     * @param ctx the parse tree
     */
    enterTableOptionAutoextendSize?: (ctx: TableOptionAutoextendSizeContext) => void;
    /**
     * Exit a parse tree produced by the `tableOptionAutoextendSize`
     * labeled alternative in `MySqlParser.tableOption`.
     * @param ctx the parse tree
     */
    exitTableOptionAutoextendSize?: (ctx: TableOptionAutoextendSizeContext) => void;
    /**
     * Enter a parse tree produced by the `tableOptionAutoIncrement`
     * labeled alternative in `MySqlParser.tableOption`.
     * @param ctx the parse tree
     */
    enterTableOptionAutoIncrement?: (ctx: TableOptionAutoIncrementContext) => void;
    /**
     * Exit a parse tree produced by the `tableOptionAutoIncrement`
     * labeled alternative in `MySqlParser.tableOption`.
     * @param ctx the parse tree
     */
    exitTableOptionAutoIncrement?: (ctx: TableOptionAutoIncrementContext) => void;
    /**
     * Enter a parse tree produced by the `tableOptionAverage`
     * labeled alternative in `MySqlParser.tableOption`.
     * @param ctx the parse tree
     */
    enterTableOptionAverage?: (ctx: TableOptionAverageContext) => void;
    /**
     * Exit a parse tree produced by the `tableOptionAverage`
     * labeled alternative in `MySqlParser.tableOption`.
     * @param ctx the parse tree
     */
    exitTableOptionAverage?: (ctx: TableOptionAverageContext) => void;
    /**
     * Enter a parse tree produced by the `tableOptionCharset`
     * labeled alternative in `MySqlParser.tableOption`.
     * @param ctx the parse tree
     */
    enterTableOptionCharset?: (ctx: TableOptionCharsetContext) => void;
    /**
     * Exit a parse tree produced by the `tableOptionCharset`
     * labeled alternative in `MySqlParser.tableOption`.
     * @param ctx the parse tree
     */
    exitTableOptionCharset?: (ctx: TableOptionCharsetContext) => void;
    /**
     * Enter a parse tree produced by the `tableOptionChecksum`
     * labeled alternative in `MySqlParser.tableOption`.
     * @param ctx the parse tree
     */
    enterTableOptionChecksum?: (ctx: TableOptionChecksumContext) => void;
    /**
     * Exit a parse tree produced by the `tableOptionChecksum`
     * labeled alternative in `MySqlParser.tableOption`.
     * @param ctx the parse tree
     */
    exitTableOptionChecksum?: (ctx: TableOptionChecksumContext) => void;
    /**
     * Enter a parse tree produced by the `tableOptionCollate`
     * labeled alternative in `MySqlParser.tableOption`.
     * @param ctx the parse tree
     */
    enterTableOptionCollate?: (ctx: TableOptionCollateContext) => void;
    /**
     * Exit a parse tree produced by the `tableOptionCollate`
     * labeled alternative in `MySqlParser.tableOption`.
     * @param ctx the parse tree
     */
    exitTableOptionCollate?: (ctx: TableOptionCollateContext) => void;
    /**
     * Enter a parse tree produced by the `tableOptionComment`
     * labeled alternative in `MySqlParser.tableOption`.
     * @param ctx the parse tree
     */
    enterTableOptionComment?: (ctx: TableOptionCommentContext) => void;
    /**
     * Exit a parse tree produced by the `tableOptionComment`
     * labeled alternative in `MySqlParser.tableOption`.
     * @param ctx the parse tree
     */
    exitTableOptionComment?: (ctx: TableOptionCommentContext) => void;
    /**
     * Enter a parse tree produced by the `tableOptionCompression`
     * labeled alternative in `MySqlParser.tableOption`.
     * @param ctx the parse tree
     */
    enterTableOptionCompression?: (ctx: TableOptionCompressionContext) => void;
    /**
     * Exit a parse tree produced by the `tableOptionCompression`
     * labeled alternative in `MySqlParser.tableOption`.
     * @param ctx the parse tree
     */
    exitTableOptionCompression?: (ctx: TableOptionCompressionContext) => void;
    /**
     * Enter a parse tree produced by the `tableOptionConnection`
     * labeled alternative in `MySqlParser.tableOption`.
     * @param ctx the parse tree
     */
    enterTableOptionConnection?: (ctx: TableOptionConnectionContext) => void;
    /**
     * Exit a parse tree produced by the `tableOptionConnection`
     * labeled alternative in `MySqlParser.tableOption`.
     * @param ctx the parse tree
     */
    exitTableOptionConnection?: (ctx: TableOptionConnectionContext) => void;
    /**
     * Enter a parse tree produced by the `tableOptionDataDirectory`
     * labeled alternative in `MySqlParser.tableOption`.
     * @param ctx the parse tree
     */
    enterTableOptionDataDirectory?: (ctx: TableOptionDataDirectoryContext) => void;
    /**
     * Exit a parse tree produced by the `tableOptionDataDirectory`
     * labeled alternative in `MySqlParser.tableOption`.
     * @param ctx the parse tree
     */
    exitTableOptionDataDirectory?: (ctx: TableOptionDataDirectoryContext) => void;
    /**
     * Enter a parse tree produced by the `tableOptionDelay`
     * labeled alternative in `MySqlParser.tableOption`.
     * @param ctx the parse tree
     */
    enterTableOptionDelay?: (ctx: TableOptionDelayContext) => void;
    /**
     * Exit a parse tree produced by the `tableOptionDelay`
     * labeled alternative in `MySqlParser.tableOption`.
     * @param ctx the parse tree
     */
    exitTableOptionDelay?: (ctx: TableOptionDelayContext) => void;
    /**
     * Enter a parse tree produced by the `tableOptionEncryption`
     * labeled alternative in `MySqlParser.tableOption`.
     * @param ctx the parse tree
     */
    enterTableOptionEncryption?: (ctx: TableOptionEncryptionContext) => void;
    /**
     * Exit a parse tree produced by the `tableOptionEncryption`
     * labeled alternative in `MySqlParser.tableOption`.
     * @param ctx the parse tree
     */
    exitTableOptionEncryption?: (ctx: TableOptionEncryptionContext) => void;
    /**
     * Enter a parse tree produced by the `tableOptionPageCompressed`
     * labeled alternative in `MySqlParser.tableOption`.
     * @param ctx the parse tree
     */
    enterTableOptionPageCompressed?: (ctx: TableOptionPageCompressedContext) => void;
    /**
     * Exit a parse tree produced by the `tableOptionPageCompressed`
     * labeled alternative in `MySqlParser.tableOption`.
     * @param ctx the parse tree
     */
    exitTableOptionPageCompressed?: (ctx: TableOptionPageCompressedContext) => void;
    /**
     * Enter a parse tree produced by the `tableOptionPageCompressionLevel`
     * labeled alternative in `MySqlParser.tableOption`.
     * @param ctx the parse tree
     */
    enterTableOptionPageCompressionLevel?: (ctx: TableOptionPageCompressionLevelContext) => void;
    /**
     * Exit a parse tree produced by the `tableOptionPageCompressionLevel`
     * labeled alternative in `MySqlParser.tableOption`.
     * @param ctx the parse tree
     */
    exitTableOptionPageCompressionLevel?: (ctx: TableOptionPageCompressionLevelContext) => void;
    /**
     * Enter a parse tree produced by the `tableOptionEncryptionKeyId`
     * labeled alternative in `MySqlParser.tableOption`.
     * @param ctx the parse tree
     */
    enterTableOptionEncryptionKeyId?: (ctx: TableOptionEncryptionKeyIdContext) => void;
    /**
     * Exit a parse tree produced by the `tableOptionEncryptionKeyId`
     * labeled alternative in `MySqlParser.tableOption`.
     * @param ctx the parse tree
     */
    exitTableOptionEncryptionKeyId?: (ctx: TableOptionEncryptionKeyIdContext) => void;
    /**
     * Enter a parse tree produced by the `tableOptionIndexDirectory`
     * labeled alternative in `MySqlParser.tableOption`.
     * @param ctx the parse tree
     */
    enterTableOptionIndexDirectory?: (ctx: TableOptionIndexDirectoryContext) => void;
    /**
     * Exit a parse tree produced by the `tableOptionIndexDirectory`
     * labeled alternative in `MySqlParser.tableOption`.
     * @param ctx the parse tree
     */
    exitTableOptionIndexDirectory?: (ctx: TableOptionIndexDirectoryContext) => void;
    /**
     * Enter a parse tree produced by the `tableOptionInsertMethod`
     * labeled alternative in `MySqlParser.tableOption`.
     * @param ctx the parse tree
     */
    enterTableOptionInsertMethod?: (ctx: TableOptionInsertMethodContext) => void;
    /**
     * Exit a parse tree produced by the `tableOptionInsertMethod`
     * labeled alternative in `MySqlParser.tableOption`.
     * @param ctx the parse tree
     */
    exitTableOptionInsertMethod?: (ctx: TableOptionInsertMethodContext) => void;
    /**
     * Enter a parse tree produced by the `tableOptionKeyBlockSize`
     * labeled alternative in `MySqlParser.tableOption`.
     * @param ctx the parse tree
     */
    enterTableOptionKeyBlockSize?: (ctx: TableOptionKeyBlockSizeContext) => void;
    /**
     * Exit a parse tree produced by the `tableOptionKeyBlockSize`
     * labeled alternative in `MySqlParser.tableOption`.
     * @param ctx the parse tree
     */
    exitTableOptionKeyBlockSize?: (ctx: TableOptionKeyBlockSizeContext) => void;
    /**
     * Enter a parse tree produced by the `tableOptionMaxRows`
     * labeled alternative in `MySqlParser.tableOption`.
     * @param ctx the parse tree
     */
    enterTableOptionMaxRows?: (ctx: TableOptionMaxRowsContext) => void;
    /**
     * Exit a parse tree produced by the `tableOptionMaxRows`
     * labeled alternative in `MySqlParser.tableOption`.
     * @param ctx the parse tree
     */
    exitTableOptionMaxRows?: (ctx: TableOptionMaxRowsContext) => void;
    /**
     * Enter a parse tree produced by the `tableOptionMinRows`
     * labeled alternative in `MySqlParser.tableOption`.
     * @param ctx the parse tree
     */
    enterTableOptionMinRows?: (ctx: TableOptionMinRowsContext) => void;
    /**
     * Exit a parse tree produced by the `tableOptionMinRows`
     * labeled alternative in `MySqlParser.tableOption`.
     * @param ctx the parse tree
     */
    exitTableOptionMinRows?: (ctx: TableOptionMinRowsContext) => void;
    /**
     * Enter a parse tree produced by the `tableOptionPackKeys`
     * labeled alternative in `MySqlParser.tableOption`.
     * @param ctx the parse tree
     */
    enterTableOptionPackKeys?: (ctx: TableOptionPackKeysContext) => void;
    /**
     * Exit a parse tree produced by the `tableOptionPackKeys`
     * labeled alternative in `MySqlParser.tableOption`.
     * @param ctx the parse tree
     */
    exitTableOptionPackKeys?: (ctx: TableOptionPackKeysContext) => void;
    /**
     * Enter a parse tree produced by the `tableOptionPassword`
     * labeled alternative in `MySqlParser.tableOption`.
     * @param ctx the parse tree
     */
    enterTableOptionPassword?: (ctx: TableOptionPasswordContext) => void;
    /**
     * Exit a parse tree produced by the `tableOptionPassword`
     * labeled alternative in `MySqlParser.tableOption`.
     * @param ctx the parse tree
     */
    exitTableOptionPassword?: (ctx: TableOptionPasswordContext) => void;
    /**
     * Enter a parse tree produced by the `tableOptionRowFormat`
     * labeled alternative in `MySqlParser.tableOption`.
     * @param ctx the parse tree
     */
    enterTableOptionRowFormat?: (ctx: TableOptionRowFormatContext) => void;
    /**
     * Exit a parse tree produced by the `tableOptionRowFormat`
     * labeled alternative in `MySqlParser.tableOption`.
     * @param ctx the parse tree
     */
    exitTableOptionRowFormat?: (ctx: TableOptionRowFormatContext) => void;
    /**
     * Enter a parse tree produced by the `tableOptionStartTransaction`
     * labeled alternative in `MySqlParser.tableOption`.
     * @param ctx the parse tree
     */
    enterTableOptionStartTransaction?: (ctx: TableOptionStartTransactionContext) => void;
    /**
     * Exit a parse tree produced by the `tableOptionStartTransaction`
     * labeled alternative in `MySqlParser.tableOption`.
     * @param ctx the parse tree
     */
    exitTableOptionStartTransaction?: (ctx: TableOptionStartTransactionContext) => void;
    /**
     * Enter a parse tree produced by the `tableOptionSecondaryEngineAttribute`
     * labeled alternative in `MySqlParser.tableOption`.
     * @param ctx the parse tree
     */
    enterTableOptionSecondaryEngineAttribute?: (ctx: TableOptionSecondaryEngineAttributeContext) => void;
    /**
     * Exit a parse tree produced by the `tableOptionSecondaryEngineAttribute`
     * labeled alternative in `MySqlParser.tableOption`.
     * @param ctx the parse tree
     */
    exitTableOptionSecondaryEngineAttribute?: (ctx: TableOptionSecondaryEngineAttributeContext) => void;
    /**
     * Enter a parse tree produced by the `tableOptionRecalculation`
     * labeled alternative in `MySqlParser.tableOption`.
     * @param ctx the parse tree
     */
    enterTableOptionRecalculation?: (ctx: TableOptionRecalculationContext) => void;
    /**
     * Exit a parse tree produced by the `tableOptionRecalculation`
     * labeled alternative in `MySqlParser.tableOption`.
     * @param ctx the parse tree
     */
    exitTableOptionRecalculation?: (ctx: TableOptionRecalculationContext) => void;
    /**
     * Enter a parse tree produced by the `tableOptionPersistent`
     * labeled alternative in `MySqlParser.tableOption`.
     * @param ctx the parse tree
     */
    enterTableOptionPersistent?: (ctx: TableOptionPersistentContext) => void;
    /**
     * Exit a parse tree produced by the `tableOptionPersistent`
     * labeled alternative in `MySqlParser.tableOption`.
     * @param ctx the parse tree
     */
    exitTableOptionPersistent?: (ctx: TableOptionPersistentContext) => void;
    /**
     * Enter a parse tree produced by the `tableOptionSamplePage`
     * labeled alternative in `MySqlParser.tableOption`.
     * @param ctx the parse tree
     */
    enterTableOptionSamplePage?: (ctx: TableOptionSamplePageContext) => void;
    /**
     * Exit a parse tree produced by the `tableOptionSamplePage`
     * labeled alternative in `MySqlParser.tableOption`.
     * @param ctx the parse tree
     */
    exitTableOptionSamplePage?: (ctx: TableOptionSamplePageContext) => void;
    /**
     * Enter a parse tree produced by the `tableOptionTablespace`
     * labeled alternative in `MySqlParser.tableOption`.
     * @param ctx the parse tree
     */
    enterTableOptionTablespace?: (ctx: TableOptionTablespaceContext) => void;
    /**
     * Exit a parse tree produced by the `tableOptionTablespace`
     * labeled alternative in `MySqlParser.tableOption`.
     * @param ctx the parse tree
     */
    exitTableOptionTablespace?: (ctx: TableOptionTablespaceContext) => void;
    /**
     * Enter a parse tree produced by the `tableOptionTableType`
     * labeled alternative in `MySqlParser.tableOption`.
     * @param ctx the parse tree
     */
    enterTableOptionTableType?: (ctx: TableOptionTableTypeContext) => void;
    /**
     * Exit a parse tree produced by the `tableOptionTableType`
     * labeled alternative in `MySqlParser.tableOption`.
     * @param ctx the parse tree
     */
    exitTableOptionTableType?: (ctx: TableOptionTableTypeContext) => void;
    /**
     * Enter a parse tree produced by the `tableOptionTransactional`
     * labeled alternative in `MySqlParser.tableOption`.
     * @param ctx the parse tree
     */
    enterTableOptionTransactional?: (ctx: TableOptionTransactionalContext) => void;
    /**
     * Exit a parse tree produced by the `tableOptionTransactional`
     * labeled alternative in `MySqlParser.tableOption`.
     * @param ctx the parse tree
     */
    exitTableOptionTransactional?: (ctx: TableOptionTransactionalContext) => void;
    /**
     * Enter a parse tree produced by the `tableOptionUnion`
     * labeled alternative in `MySqlParser.tableOption`.
     * @param ctx the parse tree
     */
    enterTableOptionUnion?: (ctx: TableOptionUnionContext) => void;
    /**
     * Exit a parse tree produced by the `tableOptionUnion`
     * labeled alternative in `MySqlParser.tableOption`.
     * @param ctx the parse tree
     */
    exitTableOptionUnion?: (ctx: TableOptionUnionContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.tableType`.
     * @param ctx the parse tree
     */
    enterTableType?: (ctx: TableTypeContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.tableType`.
     * @param ctx the parse tree
     */
    exitTableType?: (ctx: TableTypeContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.tablespaceStorage`.
     * @param ctx the parse tree
     */
    enterTablespaceStorage?: (ctx: TablespaceStorageContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.tablespaceStorage`.
     * @param ctx the parse tree
     */
    exitTablespaceStorage?: (ctx: TablespaceStorageContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.partitionDefinitions`.
     * @param ctx the parse tree
     */
    enterPartitionDefinitions?: (ctx: PartitionDefinitionsContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.partitionDefinitions`.
     * @param ctx the parse tree
     */
    exitPartitionDefinitions?: (ctx: PartitionDefinitionsContext) => void;
    /**
     * Enter a parse tree produced by the `partitionFunctionHash`
     * labeled alternative in `MySqlParser.partitionFunctionDefinition`.
     * @param ctx the parse tree
     */
    enterPartitionFunctionHash?: (ctx: PartitionFunctionHashContext) => void;
    /**
     * Exit a parse tree produced by the `partitionFunctionHash`
     * labeled alternative in `MySqlParser.partitionFunctionDefinition`.
     * @param ctx the parse tree
     */
    exitPartitionFunctionHash?: (ctx: PartitionFunctionHashContext) => void;
    /**
     * Enter a parse tree produced by the `partitionFunctionKey`
     * labeled alternative in `MySqlParser.partitionFunctionDefinition`.
     * @param ctx the parse tree
     */
    enterPartitionFunctionKey?: (ctx: PartitionFunctionKeyContext) => void;
    /**
     * Exit a parse tree produced by the `partitionFunctionKey`
     * labeled alternative in `MySqlParser.partitionFunctionDefinition`.
     * @param ctx the parse tree
     */
    exitPartitionFunctionKey?: (ctx: PartitionFunctionKeyContext) => void;
    /**
     * Enter a parse tree produced by the `partitionFunctionRange`
     * labeled alternative in `MySqlParser.partitionFunctionDefinition`.
     * @param ctx the parse tree
     */
    enterPartitionFunctionRange?: (ctx: PartitionFunctionRangeContext) => void;
    /**
     * Exit a parse tree produced by the `partitionFunctionRange`
     * labeled alternative in `MySqlParser.partitionFunctionDefinition`.
     * @param ctx the parse tree
     */
    exitPartitionFunctionRange?: (ctx: PartitionFunctionRangeContext) => void;
    /**
     * Enter a parse tree produced by the `partitionFunctionList`
     * labeled alternative in `MySqlParser.partitionFunctionDefinition`.
     * @param ctx the parse tree
     */
    enterPartitionFunctionList?: (ctx: PartitionFunctionListContext) => void;
    /**
     * Exit a parse tree produced by the `partitionFunctionList`
     * labeled alternative in `MySqlParser.partitionFunctionDefinition`.
     * @param ctx the parse tree
     */
    exitPartitionFunctionList?: (ctx: PartitionFunctionListContext) => void;
    /**
     * Enter a parse tree produced by the `subPartitionFunctionHash`
     * labeled alternative in `MySqlParser.subpartitionFunctionDefinition`.
     * @param ctx the parse tree
     */
    enterSubPartitionFunctionHash?: (ctx: SubPartitionFunctionHashContext) => void;
    /**
     * Exit a parse tree produced by the `subPartitionFunctionHash`
     * labeled alternative in `MySqlParser.subpartitionFunctionDefinition`.
     * @param ctx the parse tree
     */
    exitSubPartitionFunctionHash?: (ctx: SubPartitionFunctionHashContext) => void;
    /**
     * Enter a parse tree produced by the `subPartitionFunctionKey`
     * labeled alternative in `MySqlParser.subpartitionFunctionDefinition`.
     * @param ctx the parse tree
     */
    enterSubPartitionFunctionKey?: (ctx: SubPartitionFunctionKeyContext) => void;
    /**
     * Exit a parse tree produced by the `subPartitionFunctionKey`
     * labeled alternative in `MySqlParser.subpartitionFunctionDefinition`.
     * @param ctx the parse tree
     */
    exitSubPartitionFunctionKey?: (ctx: SubPartitionFunctionKeyContext) => void;
    /**
     * Enter a parse tree produced by the `partitionComparison`
     * labeled alternative in `MySqlParser.partitionDefinition`.
     * @param ctx the parse tree
     */
    enterPartitionComparison?: (ctx: PartitionComparisonContext) => void;
    /**
     * Exit a parse tree produced by the `partitionComparison`
     * labeled alternative in `MySqlParser.partitionDefinition`.
     * @param ctx the parse tree
     */
    exitPartitionComparison?: (ctx: PartitionComparisonContext) => void;
    /**
     * Enter a parse tree produced by the `partitionListAtom`
     * labeled alternative in `MySqlParser.partitionDefinition`.
     * @param ctx the parse tree
     */
    enterPartitionListAtom?: (ctx: PartitionListAtomContext) => void;
    /**
     * Exit a parse tree produced by the `partitionListAtom`
     * labeled alternative in `MySqlParser.partitionDefinition`.
     * @param ctx the parse tree
     */
    exitPartitionListAtom?: (ctx: PartitionListAtomContext) => void;
    /**
     * Enter a parse tree produced by the `partitionListVector`
     * labeled alternative in `MySqlParser.partitionDefinition`.
     * @param ctx the parse tree
     */
    enterPartitionListVector?: (ctx: PartitionListVectorContext) => void;
    /**
     * Exit a parse tree produced by the `partitionListVector`
     * labeled alternative in `MySqlParser.partitionDefinition`.
     * @param ctx the parse tree
     */
    exitPartitionListVector?: (ctx: PartitionListVectorContext) => void;
    /**
     * Enter a parse tree produced by the `partitionSimple`
     * labeled alternative in `MySqlParser.partitionDefinition`.
     * @param ctx the parse tree
     */
    enterPartitionSimple?: (ctx: PartitionSimpleContext) => void;
    /**
     * Exit a parse tree produced by the `partitionSimple`
     * labeled alternative in `MySqlParser.partitionDefinition`.
     * @param ctx the parse tree
     */
    exitPartitionSimple?: (ctx: PartitionSimpleContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.partitionDefinerAtom`.
     * @param ctx the parse tree
     */
    enterPartitionDefinerAtom?: (ctx: PartitionDefinerAtomContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.partitionDefinerAtom`.
     * @param ctx the parse tree
     */
    exitPartitionDefinerAtom?: (ctx: PartitionDefinerAtomContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.partitionDefinerVector`.
     * @param ctx the parse tree
     */
    enterPartitionDefinerVector?: (ctx: PartitionDefinerVectorContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.partitionDefinerVector`.
     * @param ctx the parse tree
     */
    exitPartitionDefinerVector?: (ctx: PartitionDefinerVectorContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.subpartitionDefinition`.
     * @param ctx the parse tree
     */
    enterSubpartitionDefinition?: (ctx: SubpartitionDefinitionContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.subpartitionDefinition`.
     * @param ctx the parse tree
     */
    exitSubpartitionDefinition?: (ctx: SubpartitionDefinitionContext) => void;
    /**
     * Enter a parse tree produced by the `partitionOptionEngine`
     * labeled alternative in `MySqlParser.partitionOption`.
     * @param ctx the parse tree
     */
    enterPartitionOptionEngine?: (ctx: PartitionOptionEngineContext) => void;
    /**
     * Exit a parse tree produced by the `partitionOptionEngine`
     * labeled alternative in `MySqlParser.partitionOption`.
     * @param ctx the parse tree
     */
    exitPartitionOptionEngine?: (ctx: PartitionOptionEngineContext) => void;
    /**
     * Enter a parse tree produced by the `partitionOptionComment`
     * labeled alternative in `MySqlParser.partitionOption`.
     * @param ctx the parse tree
     */
    enterPartitionOptionComment?: (ctx: PartitionOptionCommentContext) => void;
    /**
     * Exit a parse tree produced by the `partitionOptionComment`
     * labeled alternative in `MySqlParser.partitionOption`.
     * @param ctx the parse tree
     */
    exitPartitionOptionComment?: (ctx: PartitionOptionCommentContext) => void;
    /**
     * Enter a parse tree produced by the `partitionOptionDataDirectory`
     * labeled alternative in `MySqlParser.partitionOption`.
     * @param ctx the parse tree
     */
    enterPartitionOptionDataDirectory?: (ctx: PartitionOptionDataDirectoryContext) => void;
    /**
     * Exit a parse tree produced by the `partitionOptionDataDirectory`
     * labeled alternative in `MySqlParser.partitionOption`.
     * @param ctx the parse tree
     */
    exitPartitionOptionDataDirectory?: (ctx: PartitionOptionDataDirectoryContext) => void;
    /**
     * Enter a parse tree produced by the `partitionOptionIndexDirectory`
     * labeled alternative in `MySqlParser.partitionOption`.
     * @param ctx the parse tree
     */
    enterPartitionOptionIndexDirectory?: (ctx: PartitionOptionIndexDirectoryContext) => void;
    /**
     * Exit a parse tree produced by the `partitionOptionIndexDirectory`
     * labeled alternative in `MySqlParser.partitionOption`.
     * @param ctx the parse tree
     */
    exitPartitionOptionIndexDirectory?: (ctx: PartitionOptionIndexDirectoryContext) => void;
    /**
     * Enter a parse tree produced by the `partitionOptionMaxRows`
     * labeled alternative in `MySqlParser.partitionOption`.
     * @param ctx the parse tree
     */
    enterPartitionOptionMaxRows?: (ctx: PartitionOptionMaxRowsContext) => void;
    /**
     * Exit a parse tree produced by the `partitionOptionMaxRows`
     * labeled alternative in `MySqlParser.partitionOption`.
     * @param ctx the parse tree
     */
    exitPartitionOptionMaxRows?: (ctx: PartitionOptionMaxRowsContext) => void;
    /**
     * Enter a parse tree produced by the `partitionOptionMinRows`
     * labeled alternative in `MySqlParser.partitionOption`.
     * @param ctx the parse tree
     */
    enterPartitionOptionMinRows?: (ctx: PartitionOptionMinRowsContext) => void;
    /**
     * Exit a parse tree produced by the `partitionOptionMinRows`
     * labeled alternative in `MySqlParser.partitionOption`.
     * @param ctx the parse tree
     */
    exitPartitionOptionMinRows?: (ctx: PartitionOptionMinRowsContext) => void;
    /**
     * Enter a parse tree produced by the `partitionOptionTablespace`
     * labeled alternative in `MySqlParser.partitionOption`.
     * @param ctx the parse tree
     */
    enterPartitionOptionTablespace?: (ctx: PartitionOptionTablespaceContext) => void;
    /**
     * Exit a parse tree produced by the `partitionOptionTablespace`
     * labeled alternative in `MySqlParser.partitionOption`.
     * @param ctx the parse tree
     */
    exitPartitionOptionTablespace?: (ctx: PartitionOptionTablespaceContext) => void;
    /**
     * Enter a parse tree produced by the `partitionOptionNodeGroup`
     * labeled alternative in `MySqlParser.partitionOption`.
     * @param ctx the parse tree
     */
    enterPartitionOptionNodeGroup?: (ctx: PartitionOptionNodeGroupContext) => void;
    /**
     * Exit a parse tree produced by the `partitionOptionNodeGroup`
     * labeled alternative in `MySqlParser.partitionOption`.
     * @param ctx the parse tree
     */
    exitPartitionOptionNodeGroup?: (ctx: PartitionOptionNodeGroupContext) => void;
    /**
     * Enter a parse tree produced by the `alterSimpleDatabase`
     * labeled alternative in `MySqlParser.alterDatabase`.
     * @param ctx the parse tree
     */
    enterAlterSimpleDatabase?: (ctx: AlterSimpleDatabaseContext) => void;
    /**
     * Exit a parse tree produced by the `alterSimpleDatabase`
     * labeled alternative in `MySqlParser.alterDatabase`.
     * @param ctx the parse tree
     */
    exitAlterSimpleDatabase?: (ctx: AlterSimpleDatabaseContext) => void;
    /**
     * Enter a parse tree produced by the `alterUpgradeName`
     * labeled alternative in `MySqlParser.alterDatabase`.
     * @param ctx the parse tree
     */
    enterAlterUpgradeName?: (ctx: AlterUpgradeNameContext) => void;
    /**
     * Exit a parse tree produced by the `alterUpgradeName`
     * labeled alternative in `MySqlParser.alterDatabase`.
     * @param ctx the parse tree
     */
    exitAlterUpgradeName?: (ctx: AlterUpgradeNameContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.alterEvent`.
     * @param ctx the parse tree
     */
    enterAlterEvent?: (ctx: AlterEventContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.alterEvent`.
     * @param ctx the parse tree
     */
    exitAlterEvent?: (ctx: AlterEventContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.alterFunction`.
     * @param ctx the parse tree
     */
    enterAlterFunction?: (ctx: AlterFunctionContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.alterFunction`.
     * @param ctx the parse tree
     */
    exitAlterFunction?: (ctx: AlterFunctionContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.alterInstance`.
     * @param ctx the parse tree
     */
    enterAlterInstance?: (ctx: AlterInstanceContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.alterInstance`.
     * @param ctx the parse tree
     */
    exitAlterInstance?: (ctx: AlterInstanceContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.alterLogfileGroup`.
     * @param ctx the parse tree
     */
    enterAlterLogfileGroup?: (ctx: AlterLogfileGroupContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.alterLogfileGroup`.
     * @param ctx the parse tree
     */
    exitAlterLogfileGroup?: (ctx: AlterLogfileGroupContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.alterProcedure`.
     * @param ctx the parse tree
     */
    enterAlterProcedure?: (ctx: AlterProcedureContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.alterProcedure`.
     * @param ctx the parse tree
     */
    exitAlterProcedure?: (ctx: AlterProcedureContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.alterServer`.
     * @param ctx the parse tree
     */
    enterAlterServer?: (ctx: AlterServerContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.alterServer`.
     * @param ctx the parse tree
     */
    exitAlterServer?: (ctx: AlterServerContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.alterTable`.
     * @param ctx the parse tree
     */
    enterAlterTable?: (ctx: AlterTableContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.alterTable`.
     * @param ctx the parse tree
     */
    exitAlterTable?: (ctx: AlterTableContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.alterTablespace`.
     * @param ctx the parse tree
     */
    enterAlterTablespace?: (ctx: AlterTablespaceContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.alterTablespace`.
     * @param ctx the parse tree
     */
    exitAlterTablespace?: (ctx: AlterTablespaceContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.alterView`.
     * @param ctx the parse tree
     */
    enterAlterView?: (ctx: AlterViewContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.alterView`.
     * @param ctx the parse tree
     */
    exitAlterView?: (ctx: AlterViewContext) => void;
    /**
     * Enter a parse tree produced by the `alterByTableOption`
     * labeled alternative in `MySqlParser.alterSpecification`.
     * @param ctx the parse tree
     */
    enterAlterByTableOption?: (ctx: AlterByTableOptionContext) => void;
    /**
     * Exit a parse tree produced by the `alterByTableOption`
     * labeled alternative in `MySqlParser.alterSpecification`.
     * @param ctx the parse tree
     */
    exitAlterByTableOption?: (ctx: AlterByTableOptionContext) => void;
    /**
     * Enter a parse tree produced by the `alterByAddColumn`
     * labeled alternative in `MySqlParser.alterSpecification`.
     * @param ctx the parse tree
     */
    enterAlterByAddColumn?: (ctx: AlterByAddColumnContext) => void;
    /**
     * Exit a parse tree produced by the `alterByAddColumn`
     * labeled alternative in `MySqlParser.alterSpecification`.
     * @param ctx the parse tree
     */
    exitAlterByAddColumn?: (ctx: AlterByAddColumnContext) => void;
    /**
     * Enter a parse tree produced by the `alterByAddColumns`
     * labeled alternative in `MySqlParser.alterSpecification`.
     * @param ctx the parse tree
     */
    enterAlterByAddColumns?: (ctx: AlterByAddColumnsContext) => void;
    /**
     * Exit a parse tree produced by the `alterByAddColumns`
     * labeled alternative in `MySqlParser.alterSpecification`.
     * @param ctx the parse tree
     */
    exitAlterByAddColumns?: (ctx: AlterByAddColumnsContext) => void;
    /**
     * Enter a parse tree produced by the `alterByAddIndex`
     * labeled alternative in `MySqlParser.alterSpecification`.
     * @param ctx the parse tree
     */
    enterAlterByAddIndex?: (ctx: AlterByAddIndexContext) => void;
    /**
     * Exit a parse tree produced by the `alterByAddIndex`
     * labeled alternative in `MySqlParser.alterSpecification`.
     * @param ctx the parse tree
     */
    exitAlterByAddIndex?: (ctx: AlterByAddIndexContext) => void;
    /**
     * Enter a parse tree produced by the `alterByAddPrimaryKey`
     * labeled alternative in `MySqlParser.alterSpecification`.
     * @param ctx the parse tree
     */
    enterAlterByAddPrimaryKey?: (ctx: AlterByAddPrimaryKeyContext) => void;
    /**
     * Exit a parse tree produced by the `alterByAddPrimaryKey`
     * labeled alternative in `MySqlParser.alterSpecification`.
     * @param ctx the parse tree
     */
    exitAlterByAddPrimaryKey?: (ctx: AlterByAddPrimaryKeyContext) => void;
    /**
     * Enter a parse tree produced by the `alterByAddUniqueKey`
     * labeled alternative in `MySqlParser.alterSpecification`.
     * @param ctx the parse tree
     */
    enterAlterByAddUniqueKey?: (ctx: AlterByAddUniqueKeyContext) => void;
    /**
     * Exit a parse tree produced by the `alterByAddUniqueKey`
     * labeled alternative in `MySqlParser.alterSpecification`.
     * @param ctx the parse tree
     */
    exitAlterByAddUniqueKey?: (ctx: AlterByAddUniqueKeyContext) => void;
    /**
     * Enter a parse tree produced by the `alterByAddSpecialIndex`
     * labeled alternative in `MySqlParser.alterSpecification`.
     * @param ctx the parse tree
     */
    enterAlterByAddSpecialIndex?: (ctx: AlterByAddSpecialIndexContext) => void;
    /**
     * Exit a parse tree produced by the `alterByAddSpecialIndex`
     * labeled alternative in `MySqlParser.alterSpecification`.
     * @param ctx the parse tree
     */
    exitAlterByAddSpecialIndex?: (ctx: AlterByAddSpecialIndexContext) => void;
    /**
     * Enter a parse tree produced by the `alterByAddForeignKey`
     * labeled alternative in `MySqlParser.alterSpecification`.
     * @param ctx the parse tree
     */
    enterAlterByAddForeignKey?: (ctx: AlterByAddForeignKeyContext) => void;
    /**
     * Exit a parse tree produced by the `alterByAddForeignKey`
     * labeled alternative in `MySqlParser.alterSpecification`.
     * @param ctx the parse tree
     */
    exitAlterByAddForeignKey?: (ctx: AlterByAddForeignKeyContext) => void;
    /**
     * Enter a parse tree produced by the `alterByAddCheckTableConstraint`
     * labeled alternative in `MySqlParser.alterSpecification`.
     * @param ctx the parse tree
     */
    enterAlterByAddCheckTableConstraint?: (ctx: AlterByAddCheckTableConstraintContext) => void;
    /**
     * Exit a parse tree produced by the `alterByAddCheckTableConstraint`
     * labeled alternative in `MySqlParser.alterSpecification`.
     * @param ctx the parse tree
     */
    exitAlterByAddCheckTableConstraint?: (ctx: AlterByAddCheckTableConstraintContext) => void;
    /**
     * Enter a parse tree produced by the `alterByAlterCheckTableConstraint`
     * labeled alternative in `MySqlParser.alterSpecification`.
     * @param ctx the parse tree
     */
    enterAlterByAlterCheckTableConstraint?: (ctx: AlterByAlterCheckTableConstraintContext) => void;
    /**
     * Exit a parse tree produced by the `alterByAlterCheckTableConstraint`
     * labeled alternative in `MySqlParser.alterSpecification`.
     * @param ctx the parse tree
     */
    exitAlterByAlterCheckTableConstraint?: (ctx: AlterByAlterCheckTableConstraintContext) => void;
    /**
     * Enter a parse tree produced by the `alterBySetAlgorithm`
     * labeled alternative in `MySqlParser.alterSpecification`.
     * @param ctx the parse tree
     */
    enterAlterBySetAlgorithm?: (ctx: AlterBySetAlgorithmContext) => void;
    /**
     * Exit a parse tree produced by the `alterBySetAlgorithm`
     * labeled alternative in `MySqlParser.alterSpecification`.
     * @param ctx the parse tree
     */
    exitAlterBySetAlgorithm?: (ctx: AlterBySetAlgorithmContext) => void;
    /**
     * Enter a parse tree produced by the `alterByChangeDefault`
     * labeled alternative in `MySqlParser.alterSpecification`.
     * @param ctx the parse tree
     */
    enterAlterByChangeDefault?: (ctx: AlterByChangeDefaultContext) => void;
    /**
     * Exit a parse tree produced by the `alterByChangeDefault`
     * labeled alternative in `MySqlParser.alterSpecification`.
     * @param ctx the parse tree
     */
    exitAlterByChangeDefault?: (ctx: AlterByChangeDefaultContext) => void;
    /**
     * Enter a parse tree produced by the `alterByChangeColumn`
     * labeled alternative in `MySqlParser.alterSpecification`.
     * @param ctx the parse tree
     */
    enterAlterByChangeColumn?: (ctx: AlterByChangeColumnContext) => void;
    /**
     * Exit a parse tree produced by the `alterByChangeColumn`
     * labeled alternative in `MySqlParser.alterSpecification`.
     * @param ctx the parse tree
     */
    exitAlterByChangeColumn?: (ctx: AlterByChangeColumnContext) => void;
    /**
     * Enter a parse tree produced by the `alterByRenameColumn`
     * labeled alternative in `MySqlParser.alterSpecification`.
     * @param ctx the parse tree
     */
    enterAlterByRenameColumn?: (ctx: AlterByRenameColumnContext) => void;
    /**
     * Exit a parse tree produced by the `alterByRenameColumn`
     * labeled alternative in `MySqlParser.alterSpecification`.
     * @param ctx the parse tree
     */
    exitAlterByRenameColumn?: (ctx: AlterByRenameColumnContext) => void;
    /**
     * Enter a parse tree produced by the `alterByLock`
     * labeled alternative in `MySqlParser.alterSpecification`.
     * @param ctx the parse tree
     */
    enterAlterByLock?: (ctx: AlterByLockContext) => void;
    /**
     * Exit a parse tree produced by the `alterByLock`
     * labeled alternative in `MySqlParser.alterSpecification`.
     * @param ctx the parse tree
     */
    exitAlterByLock?: (ctx: AlterByLockContext) => void;
    /**
     * Enter a parse tree produced by the `alterByModifyColumn`
     * labeled alternative in `MySqlParser.alterSpecification`.
     * @param ctx the parse tree
     */
    enterAlterByModifyColumn?: (ctx: AlterByModifyColumnContext) => void;
    /**
     * Exit a parse tree produced by the `alterByModifyColumn`
     * labeled alternative in `MySqlParser.alterSpecification`.
     * @param ctx the parse tree
     */
    exitAlterByModifyColumn?: (ctx: AlterByModifyColumnContext) => void;
    /**
     * Enter a parse tree produced by the `alterByDropColumn`
     * labeled alternative in `MySqlParser.alterSpecification`.
     * @param ctx the parse tree
     */
    enterAlterByDropColumn?: (ctx: AlterByDropColumnContext) => void;
    /**
     * Exit a parse tree produced by the `alterByDropColumn`
     * labeled alternative in `MySqlParser.alterSpecification`.
     * @param ctx the parse tree
     */
    exitAlterByDropColumn?: (ctx: AlterByDropColumnContext) => void;
    /**
     * Enter a parse tree produced by the `alterByDropConstraintCheck`
     * labeled alternative in `MySqlParser.alterSpecification`.
     * @param ctx the parse tree
     */
    enterAlterByDropConstraintCheck?: (ctx: AlterByDropConstraintCheckContext) => void;
    /**
     * Exit a parse tree produced by the `alterByDropConstraintCheck`
     * labeled alternative in `MySqlParser.alterSpecification`.
     * @param ctx the parse tree
     */
    exitAlterByDropConstraintCheck?: (ctx: AlterByDropConstraintCheckContext) => void;
    /**
     * Enter a parse tree produced by the `alterByDropPrimaryKey`
     * labeled alternative in `MySqlParser.alterSpecification`.
     * @param ctx the parse tree
     */
    enterAlterByDropPrimaryKey?: (ctx: AlterByDropPrimaryKeyContext) => void;
    /**
     * Exit a parse tree produced by the `alterByDropPrimaryKey`
     * labeled alternative in `MySqlParser.alterSpecification`.
     * @param ctx the parse tree
     */
    exitAlterByDropPrimaryKey?: (ctx: AlterByDropPrimaryKeyContext) => void;
    /**
     * Enter a parse tree produced by the `alterByDropIndex`
     * labeled alternative in `MySqlParser.alterSpecification`.
     * @param ctx the parse tree
     */
    enterAlterByDropIndex?: (ctx: AlterByDropIndexContext) => void;
    /**
     * Exit a parse tree produced by the `alterByDropIndex`
     * labeled alternative in `MySqlParser.alterSpecification`.
     * @param ctx the parse tree
     */
    exitAlterByDropIndex?: (ctx: AlterByDropIndexContext) => void;
    /**
     * Enter a parse tree produced by the `alterByRenameIndex`
     * labeled alternative in `MySqlParser.alterSpecification`.
     * @param ctx the parse tree
     */
    enterAlterByRenameIndex?: (ctx: AlterByRenameIndexContext) => void;
    /**
     * Exit a parse tree produced by the `alterByRenameIndex`
     * labeled alternative in `MySqlParser.alterSpecification`.
     * @param ctx the parse tree
     */
    exitAlterByRenameIndex?: (ctx: AlterByRenameIndexContext) => void;
    /**
     * Enter a parse tree produced by the `alterByAlterColumnDefault`
     * labeled alternative in `MySqlParser.alterSpecification`.
     * @param ctx the parse tree
     */
    enterAlterByAlterColumnDefault?: (ctx: AlterByAlterColumnDefaultContext) => void;
    /**
     * Exit a parse tree produced by the `alterByAlterColumnDefault`
     * labeled alternative in `MySqlParser.alterSpecification`.
     * @param ctx the parse tree
     */
    exitAlterByAlterColumnDefault?: (ctx: AlterByAlterColumnDefaultContext) => void;
    /**
     * Enter a parse tree produced by the `alterByAlterIndexVisibility`
     * labeled alternative in `MySqlParser.alterSpecification`.
     * @param ctx the parse tree
     */
    enterAlterByAlterIndexVisibility?: (ctx: AlterByAlterIndexVisibilityContext) => void;
    /**
     * Exit a parse tree produced by the `alterByAlterIndexVisibility`
     * labeled alternative in `MySqlParser.alterSpecification`.
     * @param ctx the parse tree
     */
    exitAlterByAlterIndexVisibility?: (ctx: AlterByAlterIndexVisibilityContext) => void;
    /**
     * Enter a parse tree produced by the `alterByDropForeignKey`
     * labeled alternative in `MySqlParser.alterSpecification`.
     * @param ctx the parse tree
     */
    enterAlterByDropForeignKey?: (ctx: AlterByDropForeignKeyContext) => void;
    /**
     * Exit a parse tree produced by the `alterByDropForeignKey`
     * labeled alternative in `MySqlParser.alterSpecification`.
     * @param ctx the parse tree
     */
    exitAlterByDropForeignKey?: (ctx: AlterByDropForeignKeyContext) => void;
    /**
     * Enter a parse tree produced by the `alterByDisableKeys`
     * labeled alternative in `MySqlParser.alterSpecification`.
     * @param ctx the parse tree
     */
    enterAlterByDisableKeys?: (ctx: AlterByDisableKeysContext) => void;
    /**
     * Exit a parse tree produced by the `alterByDisableKeys`
     * labeled alternative in `MySqlParser.alterSpecification`.
     * @param ctx the parse tree
     */
    exitAlterByDisableKeys?: (ctx: AlterByDisableKeysContext) => void;
    /**
     * Enter a parse tree produced by the `alterByEnableKeys`
     * labeled alternative in `MySqlParser.alterSpecification`.
     * @param ctx the parse tree
     */
    enterAlterByEnableKeys?: (ctx: AlterByEnableKeysContext) => void;
    /**
     * Exit a parse tree produced by the `alterByEnableKeys`
     * labeled alternative in `MySqlParser.alterSpecification`.
     * @param ctx the parse tree
     */
    exitAlterByEnableKeys?: (ctx: AlterByEnableKeysContext) => void;
    /**
     * Enter a parse tree produced by the `alterByRename`
     * labeled alternative in `MySqlParser.alterSpecification`.
     * @param ctx the parse tree
     */
    enterAlterByRename?: (ctx: AlterByRenameContext) => void;
    /**
     * Exit a parse tree produced by the `alterByRename`
     * labeled alternative in `MySqlParser.alterSpecification`.
     * @param ctx the parse tree
     */
    exitAlterByRename?: (ctx: AlterByRenameContext) => void;
    /**
     * Enter a parse tree produced by the `alterByOrder`
     * labeled alternative in `MySqlParser.alterSpecification`.
     * @param ctx the parse tree
     */
    enterAlterByOrder?: (ctx: AlterByOrderContext) => void;
    /**
     * Exit a parse tree produced by the `alterByOrder`
     * labeled alternative in `MySqlParser.alterSpecification`.
     * @param ctx the parse tree
     */
    exitAlterByOrder?: (ctx: AlterByOrderContext) => void;
    /**
     * Enter a parse tree produced by the `alterByConvertCharset`
     * labeled alternative in `MySqlParser.alterSpecification`.
     * @param ctx the parse tree
     */
    enterAlterByConvertCharset?: (ctx: AlterByConvertCharsetContext) => void;
    /**
     * Exit a parse tree produced by the `alterByConvertCharset`
     * labeled alternative in `MySqlParser.alterSpecification`.
     * @param ctx the parse tree
     */
    exitAlterByConvertCharset?: (ctx: AlterByConvertCharsetContext) => void;
    /**
     * Enter a parse tree produced by the `alterByDefaultCharset`
     * labeled alternative in `MySqlParser.alterSpecification`.
     * @param ctx the parse tree
     */
    enterAlterByDefaultCharset?: (ctx: AlterByDefaultCharsetContext) => void;
    /**
     * Exit a parse tree produced by the `alterByDefaultCharset`
     * labeled alternative in `MySqlParser.alterSpecification`.
     * @param ctx the parse tree
     */
    exitAlterByDefaultCharset?: (ctx: AlterByDefaultCharsetContext) => void;
    /**
     * Enter a parse tree produced by the `alterByDiscardTablespace`
     * labeled alternative in `MySqlParser.alterSpecification`.
     * @param ctx the parse tree
     */
    enterAlterByDiscardTablespace?: (ctx: AlterByDiscardTablespaceContext) => void;
    /**
     * Exit a parse tree produced by the `alterByDiscardTablespace`
     * labeled alternative in `MySqlParser.alterSpecification`.
     * @param ctx the parse tree
     */
    exitAlterByDiscardTablespace?: (ctx: AlterByDiscardTablespaceContext) => void;
    /**
     * Enter a parse tree produced by the `alterByImportTablespace`
     * labeled alternative in `MySqlParser.alterSpecification`.
     * @param ctx the parse tree
     */
    enterAlterByImportTablespace?: (ctx: AlterByImportTablespaceContext) => void;
    /**
     * Exit a parse tree produced by the `alterByImportTablespace`
     * labeled alternative in `MySqlParser.alterSpecification`.
     * @param ctx the parse tree
     */
    exitAlterByImportTablespace?: (ctx: AlterByImportTablespaceContext) => void;
    /**
     * Enter a parse tree produced by the `alterByForce`
     * labeled alternative in `MySqlParser.alterSpecification`.
     * @param ctx the parse tree
     */
    enterAlterByForce?: (ctx: AlterByForceContext) => void;
    /**
     * Exit a parse tree produced by the `alterByForce`
     * labeled alternative in `MySqlParser.alterSpecification`.
     * @param ctx the parse tree
     */
    exitAlterByForce?: (ctx: AlterByForceContext) => void;
    /**
     * Enter a parse tree produced by the `alterByValidate`
     * labeled alternative in `MySqlParser.alterSpecification`.
     * @param ctx the parse tree
     */
    enterAlterByValidate?: (ctx: AlterByValidateContext) => void;
    /**
     * Exit a parse tree produced by the `alterByValidate`
     * labeled alternative in `MySqlParser.alterSpecification`.
     * @param ctx the parse tree
     */
    exitAlterByValidate?: (ctx: AlterByValidateContext) => void;
    /**
     * Enter a parse tree produced by the `alterByAddDefinitions`
     * labeled alternative in `MySqlParser.alterSpecification`.
     * @param ctx the parse tree
     */
    enterAlterByAddDefinitions?: (ctx: AlterByAddDefinitionsContext) => void;
    /**
     * Exit a parse tree produced by the `alterByAddDefinitions`
     * labeled alternative in `MySqlParser.alterSpecification`.
     * @param ctx the parse tree
     */
    exitAlterByAddDefinitions?: (ctx: AlterByAddDefinitionsContext) => void;
    /**
     * Enter a parse tree produced by the `alterPartition`
     * labeled alternative in `MySqlParser.alterSpecification`.
     * @param ctx the parse tree
     */
    enterAlterPartition?: (ctx: AlterPartitionContext) => void;
    /**
     * Exit a parse tree produced by the `alterPartition`
     * labeled alternative in `MySqlParser.alterSpecification`.
     * @param ctx the parse tree
     */
    exitAlterPartition?: (ctx: AlterPartitionContext) => void;
    /**
     * Enter a parse tree produced by the `alterByAddPartition`
     * labeled alternative in `MySqlParser.alterPartitionSpecification`.
     * @param ctx the parse tree
     */
    enterAlterByAddPartition?: (ctx: AlterByAddPartitionContext) => void;
    /**
     * Exit a parse tree produced by the `alterByAddPartition`
     * labeled alternative in `MySqlParser.alterPartitionSpecification`.
     * @param ctx the parse tree
     */
    exitAlterByAddPartition?: (ctx: AlterByAddPartitionContext) => void;
    /**
     * Enter a parse tree produced by the `alterByDropPartition`
     * labeled alternative in `MySqlParser.alterPartitionSpecification`.
     * @param ctx the parse tree
     */
    enterAlterByDropPartition?: (ctx: AlterByDropPartitionContext) => void;
    /**
     * Exit a parse tree produced by the `alterByDropPartition`
     * labeled alternative in `MySqlParser.alterPartitionSpecification`.
     * @param ctx the parse tree
     */
    exitAlterByDropPartition?: (ctx: AlterByDropPartitionContext) => void;
    /**
     * Enter a parse tree produced by the `alterByDiscardPartition`
     * labeled alternative in `MySqlParser.alterPartitionSpecification`.
     * @param ctx the parse tree
     */
    enterAlterByDiscardPartition?: (ctx: AlterByDiscardPartitionContext) => void;
    /**
     * Exit a parse tree produced by the `alterByDiscardPartition`
     * labeled alternative in `MySqlParser.alterPartitionSpecification`.
     * @param ctx the parse tree
     */
    exitAlterByDiscardPartition?: (ctx: AlterByDiscardPartitionContext) => void;
    /**
     * Enter a parse tree produced by the `alterByImportPartition`
     * labeled alternative in `MySqlParser.alterPartitionSpecification`.
     * @param ctx the parse tree
     */
    enterAlterByImportPartition?: (ctx: AlterByImportPartitionContext) => void;
    /**
     * Exit a parse tree produced by the `alterByImportPartition`
     * labeled alternative in `MySqlParser.alterPartitionSpecification`.
     * @param ctx the parse tree
     */
    exitAlterByImportPartition?: (ctx: AlterByImportPartitionContext) => void;
    /**
     * Enter a parse tree produced by the `alterByTruncatePartition`
     * labeled alternative in `MySqlParser.alterPartitionSpecification`.
     * @param ctx the parse tree
     */
    enterAlterByTruncatePartition?: (ctx: AlterByTruncatePartitionContext) => void;
    /**
     * Exit a parse tree produced by the `alterByTruncatePartition`
     * labeled alternative in `MySqlParser.alterPartitionSpecification`.
     * @param ctx the parse tree
     */
    exitAlterByTruncatePartition?: (ctx: AlterByTruncatePartitionContext) => void;
    /**
     * Enter a parse tree produced by the `alterByCoalescePartition`
     * labeled alternative in `MySqlParser.alterPartitionSpecification`.
     * @param ctx the parse tree
     */
    enterAlterByCoalescePartition?: (ctx: AlterByCoalescePartitionContext) => void;
    /**
     * Exit a parse tree produced by the `alterByCoalescePartition`
     * labeled alternative in `MySqlParser.alterPartitionSpecification`.
     * @param ctx the parse tree
     */
    exitAlterByCoalescePartition?: (ctx: AlterByCoalescePartitionContext) => void;
    /**
     * Enter a parse tree produced by the `alterByReorganizePartition`
     * labeled alternative in `MySqlParser.alterPartitionSpecification`.
     * @param ctx the parse tree
     */
    enterAlterByReorganizePartition?: (ctx: AlterByReorganizePartitionContext) => void;
    /**
     * Exit a parse tree produced by the `alterByReorganizePartition`
     * labeled alternative in `MySqlParser.alterPartitionSpecification`.
     * @param ctx the parse tree
     */
    exitAlterByReorganizePartition?: (ctx: AlterByReorganizePartitionContext) => void;
    /**
     * Enter a parse tree produced by the `alterByExchangePartition`
     * labeled alternative in `MySqlParser.alterPartitionSpecification`.
     * @param ctx the parse tree
     */
    enterAlterByExchangePartition?: (ctx: AlterByExchangePartitionContext) => void;
    /**
     * Exit a parse tree produced by the `alterByExchangePartition`
     * labeled alternative in `MySqlParser.alterPartitionSpecification`.
     * @param ctx the parse tree
     */
    exitAlterByExchangePartition?: (ctx: AlterByExchangePartitionContext) => void;
    /**
     * Enter a parse tree produced by the `alterByAnalyzePartition`
     * labeled alternative in `MySqlParser.alterPartitionSpecification`.
     * @param ctx the parse tree
     */
    enterAlterByAnalyzePartition?: (ctx: AlterByAnalyzePartitionContext) => void;
    /**
     * Exit a parse tree produced by the `alterByAnalyzePartition`
     * labeled alternative in `MySqlParser.alterPartitionSpecification`.
     * @param ctx the parse tree
     */
    exitAlterByAnalyzePartition?: (ctx: AlterByAnalyzePartitionContext) => void;
    /**
     * Enter a parse tree produced by the `alterByCheckPartition`
     * labeled alternative in `MySqlParser.alterPartitionSpecification`.
     * @param ctx the parse tree
     */
    enterAlterByCheckPartition?: (ctx: AlterByCheckPartitionContext) => void;
    /**
     * Exit a parse tree produced by the `alterByCheckPartition`
     * labeled alternative in `MySqlParser.alterPartitionSpecification`.
     * @param ctx the parse tree
     */
    exitAlterByCheckPartition?: (ctx: AlterByCheckPartitionContext) => void;
    /**
     * Enter a parse tree produced by the `alterByOptimizePartition`
     * labeled alternative in `MySqlParser.alterPartitionSpecification`.
     * @param ctx the parse tree
     */
    enterAlterByOptimizePartition?: (ctx: AlterByOptimizePartitionContext) => void;
    /**
     * Exit a parse tree produced by the `alterByOptimizePartition`
     * labeled alternative in `MySqlParser.alterPartitionSpecification`.
     * @param ctx the parse tree
     */
    exitAlterByOptimizePartition?: (ctx: AlterByOptimizePartitionContext) => void;
    /**
     * Enter a parse tree produced by the `alterByRebuildPartition`
     * labeled alternative in `MySqlParser.alterPartitionSpecification`.
     * @param ctx the parse tree
     */
    enterAlterByRebuildPartition?: (ctx: AlterByRebuildPartitionContext) => void;
    /**
     * Exit a parse tree produced by the `alterByRebuildPartition`
     * labeled alternative in `MySqlParser.alterPartitionSpecification`.
     * @param ctx the parse tree
     */
    exitAlterByRebuildPartition?: (ctx: AlterByRebuildPartitionContext) => void;
    /**
     * Enter a parse tree produced by the `alterByRepairPartition`
     * labeled alternative in `MySqlParser.alterPartitionSpecification`.
     * @param ctx the parse tree
     */
    enterAlterByRepairPartition?: (ctx: AlterByRepairPartitionContext) => void;
    /**
     * Exit a parse tree produced by the `alterByRepairPartition`
     * labeled alternative in `MySqlParser.alterPartitionSpecification`.
     * @param ctx the parse tree
     */
    exitAlterByRepairPartition?: (ctx: AlterByRepairPartitionContext) => void;
    /**
     * Enter a parse tree produced by the `alterByRemovePartitioning`
     * labeled alternative in `MySqlParser.alterPartitionSpecification`.
     * @param ctx the parse tree
     */
    enterAlterByRemovePartitioning?: (ctx: AlterByRemovePartitioningContext) => void;
    /**
     * Exit a parse tree produced by the `alterByRemovePartitioning`
     * labeled alternative in `MySqlParser.alterPartitionSpecification`.
     * @param ctx the parse tree
     */
    exitAlterByRemovePartitioning?: (ctx: AlterByRemovePartitioningContext) => void;
    /**
     * Enter a parse tree produced by the `alterByUpgradePartitioning`
     * labeled alternative in `MySqlParser.alterPartitionSpecification`.
     * @param ctx the parse tree
     */
    enterAlterByUpgradePartitioning?: (ctx: AlterByUpgradePartitioningContext) => void;
    /**
     * Exit a parse tree produced by the `alterByUpgradePartitioning`
     * labeled alternative in `MySqlParser.alterPartitionSpecification`.
     * @param ctx the parse tree
     */
    exitAlterByUpgradePartitioning?: (ctx: AlterByUpgradePartitioningContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.dropDatabase`.
     * @param ctx the parse tree
     */
    enterDropDatabase?: (ctx: DropDatabaseContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.dropDatabase`.
     * @param ctx the parse tree
     */
    exitDropDatabase?: (ctx: DropDatabaseContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.dropEvent`.
     * @param ctx the parse tree
     */
    enterDropEvent?: (ctx: DropEventContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.dropEvent`.
     * @param ctx the parse tree
     */
    exitDropEvent?: (ctx: DropEventContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.dropIndex`.
     * @param ctx the parse tree
     */
    enterDropIndex?: (ctx: DropIndexContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.dropIndex`.
     * @param ctx the parse tree
     */
    exitDropIndex?: (ctx: DropIndexContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.dropLogfileGroup`.
     * @param ctx the parse tree
     */
    enterDropLogfileGroup?: (ctx: DropLogfileGroupContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.dropLogfileGroup`.
     * @param ctx the parse tree
     */
    exitDropLogfileGroup?: (ctx: DropLogfileGroupContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.dropProcedure`.
     * @param ctx the parse tree
     */
    enterDropProcedure?: (ctx: DropProcedureContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.dropProcedure`.
     * @param ctx the parse tree
     */
    exitDropProcedure?: (ctx: DropProcedureContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.dropFunction`.
     * @param ctx the parse tree
     */
    enterDropFunction?: (ctx: DropFunctionContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.dropFunction`.
     * @param ctx the parse tree
     */
    exitDropFunction?: (ctx: DropFunctionContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.dropServer`.
     * @param ctx the parse tree
     */
    enterDropServer?: (ctx: DropServerContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.dropServer`.
     * @param ctx the parse tree
     */
    exitDropServer?: (ctx: DropServerContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.dropTable`.
     * @param ctx the parse tree
     */
    enterDropTable?: (ctx: DropTableContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.dropTable`.
     * @param ctx the parse tree
     */
    exitDropTable?: (ctx: DropTableContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.dropTablespace`.
     * @param ctx the parse tree
     */
    enterDropTablespace?: (ctx: DropTablespaceContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.dropTablespace`.
     * @param ctx the parse tree
     */
    exitDropTablespace?: (ctx: DropTablespaceContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.dropTrigger`.
     * @param ctx the parse tree
     */
    enterDropTrigger?: (ctx: DropTriggerContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.dropTrigger`.
     * @param ctx the parse tree
     */
    exitDropTrigger?: (ctx: DropTriggerContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.dropView`.
     * @param ctx the parse tree
     */
    enterDropView?: (ctx: DropViewContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.dropView`.
     * @param ctx the parse tree
     */
    exitDropView?: (ctx: DropViewContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.dropRole`.
     * @param ctx the parse tree
     */
    enterDropRole?: (ctx: DropRoleContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.dropRole`.
     * @param ctx the parse tree
     */
    exitDropRole?: (ctx: DropRoleContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.setRole`.
     * @param ctx the parse tree
     */
    enterSetRole?: (ctx: SetRoleContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.setRole`.
     * @param ctx the parse tree
     */
    exitSetRole?: (ctx: SetRoleContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.renameTable`.
     * @param ctx the parse tree
     */
    enterRenameTable?: (ctx: RenameTableContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.renameTable`.
     * @param ctx the parse tree
     */
    exitRenameTable?: (ctx: RenameTableContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.renameTableClause`.
     * @param ctx the parse tree
     */
    enterRenameTableClause?: (ctx: RenameTableClauseContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.renameTableClause`.
     * @param ctx the parse tree
     */
    exitRenameTableClause?: (ctx: RenameTableClauseContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.truncateTable`.
     * @param ctx the parse tree
     */
    enterTruncateTable?: (ctx: TruncateTableContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.truncateTable`.
     * @param ctx the parse tree
     */
    exitTruncateTable?: (ctx: TruncateTableContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.callStatement`.
     * @param ctx the parse tree
     */
    enterCallStatement?: (ctx: CallStatementContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.callStatement`.
     * @param ctx the parse tree
     */
    exitCallStatement?: (ctx: CallStatementContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.deleteStatement`.
     * @param ctx the parse tree
     */
    enterDeleteStatement?: (ctx: DeleteStatementContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.deleteStatement`.
     * @param ctx the parse tree
     */
    exitDeleteStatement?: (ctx: DeleteStatementContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.doStatement`.
     * @param ctx the parse tree
     */
    enterDoStatement?: (ctx: DoStatementContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.doStatement`.
     * @param ctx the parse tree
     */
    exitDoStatement?: (ctx: DoStatementContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.handlerStatement`.
     * @param ctx the parse tree
     */
    enterHandlerStatement?: (ctx: HandlerStatementContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.handlerStatement`.
     * @param ctx the parse tree
     */
    exitHandlerStatement?: (ctx: HandlerStatementContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.insertStatement`.
     * @param ctx the parse tree
     */
    enterInsertStatement?: (ctx: InsertStatementContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.insertStatement`.
     * @param ctx the parse tree
     */
    exitInsertStatement?: (ctx: InsertStatementContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.loadDataStatement`.
     * @param ctx the parse tree
     */
    enterLoadDataStatement?: (ctx: LoadDataStatementContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.loadDataStatement`.
     * @param ctx the parse tree
     */
    exitLoadDataStatement?: (ctx: LoadDataStatementContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.loadXmlStatement`.
     * @param ctx the parse tree
     */
    enterLoadXmlStatement?: (ctx: LoadXmlStatementContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.loadXmlStatement`.
     * @param ctx the parse tree
     */
    exitLoadXmlStatement?: (ctx: LoadXmlStatementContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.replaceStatement`.
     * @param ctx the parse tree
     */
    enterReplaceStatement?: (ctx: ReplaceStatementContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.replaceStatement`.
     * @param ctx the parse tree
     */
    exitReplaceStatement?: (ctx: ReplaceStatementContext) => void;
    /**
     * Enter a parse tree produced by the `simpleSelect`
     * labeled alternative in `MySqlParser.selectStatement`.
     * @param ctx the parse tree
     */
    enterSimpleSelect?: (ctx: SimpleSelectContext) => void;
    /**
     * Exit a parse tree produced by the `simpleSelect`
     * labeled alternative in `MySqlParser.selectStatement`.
     * @param ctx the parse tree
     */
    exitSimpleSelect?: (ctx: SimpleSelectContext) => void;
    /**
     * Enter a parse tree produced by the `parenthesisSelect`
     * labeled alternative in `MySqlParser.selectStatement`.
     * @param ctx the parse tree
     */
    enterParenthesisSelect?: (ctx: ParenthesisSelectContext) => void;
    /**
     * Exit a parse tree produced by the `parenthesisSelect`
     * labeled alternative in `MySqlParser.selectStatement`.
     * @param ctx the parse tree
     */
    exitParenthesisSelect?: (ctx: ParenthesisSelectContext) => void;
    /**
     * Enter a parse tree produced by the `unionSelect`
     * labeled alternative in `MySqlParser.selectStatement`.
     * @param ctx the parse tree
     */
    enterUnionSelect?: (ctx: UnionSelectContext) => void;
    /**
     * Exit a parse tree produced by the `unionSelect`
     * labeled alternative in `MySqlParser.selectStatement`.
     * @param ctx the parse tree
     */
    exitUnionSelect?: (ctx: UnionSelectContext) => void;
    /**
     * Enter a parse tree produced by the `unionParenthesisSelect`
     * labeled alternative in `MySqlParser.selectStatement`.
     * @param ctx the parse tree
     */
    enterUnionParenthesisSelect?: (ctx: UnionParenthesisSelectContext) => void;
    /**
     * Exit a parse tree produced by the `unionParenthesisSelect`
     * labeled alternative in `MySqlParser.selectStatement`.
     * @param ctx the parse tree
     */
    exitUnionParenthesisSelect?: (ctx: UnionParenthesisSelectContext) => void;
    /**
     * Enter a parse tree produced by the `withLateralStatement`
     * labeled alternative in `MySqlParser.selectStatement`.
     * @param ctx the parse tree
     */
    enterWithLateralStatement?: (ctx: WithLateralStatementContext) => void;
    /**
     * Exit a parse tree produced by the `withLateralStatement`
     * labeled alternative in `MySqlParser.selectStatement`.
     * @param ctx the parse tree
     */
    exitWithLateralStatement?: (ctx: WithLateralStatementContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.updateStatement`.
     * @param ctx the parse tree
     */
    enterUpdateStatement?: (ctx: UpdateStatementContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.updateStatement`.
     * @param ctx the parse tree
     */
    exitUpdateStatement?: (ctx: UpdateStatementContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.valuesStatement`.
     * @param ctx the parse tree
     */
    enterValuesStatement?: (ctx: ValuesStatementContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.valuesStatement`.
     * @param ctx the parse tree
     */
    exitValuesStatement?: (ctx: ValuesStatementContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.insertStatementValue`.
     * @param ctx the parse tree
     */
    enterInsertStatementValue?: (ctx: InsertStatementValueContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.insertStatementValue`.
     * @param ctx the parse tree
     */
    exitInsertStatementValue?: (ctx: InsertStatementValueContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.updatedElement`.
     * @param ctx the parse tree
     */
    enterUpdatedElement?: (ctx: UpdatedElementContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.updatedElement`.
     * @param ctx the parse tree
     */
    exitUpdatedElement?: (ctx: UpdatedElementContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.assignmentField`.
     * @param ctx the parse tree
     */
    enterAssignmentField?: (ctx: AssignmentFieldContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.assignmentField`.
     * @param ctx the parse tree
     */
    exitAssignmentField?: (ctx: AssignmentFieldContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.lockClause`.
     * @param ctx the parse tree
     */
    enterLockClause?: (ctx: LockClauseContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.lockClause`.
     * @param ctx the parse tree
     */
    exitLockClause?: (ctx: LockClauseContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.singleDeleteStatement`.
     * @param ctx the parse tree
     */
    enterSingleDeleteStatement?: (ctx: SingleDeleteStatementContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.singleDeleteStatement`.
     * @param ctx the parse tree
     */
    exitSingleDeleteStatement?: (ctx: SingleDeleteStatementContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.multipleDeleteStatement`.
     * @param ctx the parse tree
     */
    enterMultipleDeleteStatement?: (ctx: MultipleDeleteStatementContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.multipleDeleteStatement`.
     * @param ctx the parse tree
     */
    exitMultipleDeleteStatement?: (ctx: MultipleDeleteStatementContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.handlerOpenStatement`.
     * @param ctx the parse tree
     */
    enterHandlerOpenStatement?: (ctx: HandlerOpenStatementContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.handlerOpenStatement`.
     * @param ctx the parse tree
     */
    exitHandlerOpenStatement?: (ctx: HandlerOpenStatementContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.handlerReadIndexStatement`.
     * @param ctx the parse tree
     */
    enterHandlerReadIndexStatement?: (ctx: HandlerReadIndexStatementContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.handlerReadIndexStatement`.
     * @param ctx the parse tree
     */
    exitHandlerReadIndexStatement?: (ctx: HandlerReadIndexStatementContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.handlerReadStatement`.
     * @param ctx the parse tree
     */
    enterHandlerReadStatement?: (ctx: HandlerReadStatementContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.handlerReadStatement`.
     * @param ctx the parse tree
     */
    exitHandlerReadStatement?: (ctx: HandlerReadStatementContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.handlerCloseStatement`.
     * @param ctx the parse tree
     */
    enterHandlerCloseStatement?: (ctx: HandlerCloseStatementContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.handlerCloseStatement`.
     * @param ctx the parse tree
     */
    exitHandlerCloseStatement?: (ctx: HandlerCloseStatementContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.singleUpdateStatement`.
     * @param ctx the parse tree
     */
    enterSingleUpdateStatement?: (ctx: SingleUpdateStatementContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.singleUpdateStatement`.
     * @param ctx the parse tree
     */
    exitSingleUpdateStatement?: (ctx: SingleUpdateStatementContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.multipleUpdateStatement`.
     * @param ctx the parse tree
     */
    enterMultipleUpdateStatement?: (ctx: MultipleUpdateStatementContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.multipleUpdateStatement`.
     * @param ctx the parse tree
     */
    exitMultipleUpdateStatement?: (ctx: MultipleUpdateStatementContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.orderByClause`.
     * @param ctx the parse tree
     */
    enterOrderByClause?: (ctx: OrderByClauseContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.orderByClause`.
     * @param ctx the parse tree
     */
    exitOrderByClause?: (ctx: OrderByClauseContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.orderByExpression`.
     * @param ctx the parse tree
     */
    enterOrderByExpression?: (ctx: OrderByExpressionContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.orderByExpression`.
     * @param ctx the parse tree
     */
    exitOrderByExpression?: (ctx: OrderByExpressionContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.tableSources`.
     * @param ctx the parse tree
     */
    enterTableSources?: (ctx: TableSourcesContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.tableSources`.
     * @param ctx the parse tree
     */
    exitTableSources?: (ctx: TableSourcesContext) => void;
    /**
     * Enter a parse tree produced by the `tableSourceBase`
     * labeled alternative in `MySqlParser.tableSource`.
     * @param ctx the parse tree
     */
    enterTableSourceBase?: (ctx: TableSourceBaseContext) => void;
    /**
     * Exit a parse tree produced by the `tableSourceBase`
     * labeled alternative in `MySqlParser.tableSource`.
     * @param ctx the parse tree
     */
    exitTableSourceBase?: (ctx: TableSourceBaseContext) => void;
    /**
     * Enter a parse tree produced by the `tableSourceNested`
     * labeled alternative in `MySqlParser.tableSource`.
     * @param ctx the parse tree
     */
    enterTableSourceNested?: (ctx: TableSourceNestedContext) => void;
    /**
     * Exit a parse tree produced by the `tableSourceNested`
     * labeled alternative in `MySqlParser.tableSource`.
     * @param ctx the parse tree
     */
    exitTableSourceNested?: (ctx: TableSourceNestedContext) => void;
    /**
     * Enter a parse tree produced by the `tableJson`
     * labeled alternative in `MySqlParser.tableSource`.
     * @param ctx the parse tree
     */
    enterTableJson?: (ctx: TableJsonContext) => void;
    /**
     * Exit a parse tree produced by the `tableJson`
     * labeled alternative in `MySqlParser.tableSource`.
     * @param ctx the parse tree
     */
    exitTableJson?: (ctx: TableJsonContext) => void;
    /**
     * Enter a parse tree produced by the `atomTableItem`
     * labeled alternative in `MySqlParser.tableSourceItem`.
     * @param ctx the parse tree
     */
    enterAtomTableItem?: (ctx: AtomTableItemContext) => void;
    /**
     * Exit a parse tree produced by the `atomTableItem`
     * labeled alternative in `MySqlParser.tableSourceItem`.
     * @param ctx the parse tree
     */
    exitAtomTableItem?: (ctx: AtomTableItemContext) => void;
    /**
     * Enter a parse tree produced by the `subqueryTableItem`
     * labeled alternative in `MySqlParser.tableSourceItem`.
     * @param ctx the parse tree
     */
    enterSubqueryTableItem?: (ctx: SubqueryTableItemContext) => void;
    /**
     * Exit a parse tree produced by the `subqueryTableItem`
     * labeled alternative in `MySqlParser.tableSourceItem`.
     * @param ctx the parse tree
     */
    exitSubqueryTableItem?: (ctx: SubqueryTableItemContext) => void;
    /**
     * Enter a parse tree produced by the `tableSourcesItem`
     * labeled alternative in `MySqlParser.tableSourceItem`.
     * @param ctx the parse tree
     */
    enterTableSourcesItem?: (ctx: TableSourcesItemContext) => void;
    /**
     * Exit a parse tree produced by the `tableSourcesItem`
     * labeled alternative in `MySqlParser.tableSourceItem`.
     * @param ctx the parse tree
     */
    exitTableSourcesItem?: (ctx: TableSourcesItemContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.indexHint`.
     * @param ctx the parse tree
     */
    enterIndexHint?: (ctx: IndexHintContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.indexHint`.
     * @param ctx the parse tree
     */
    exitIndexHint?: (ctx: IndexHintContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.indexHintType`.
     * @param ctx the parse tree
     */
    enterIndexHintType?: (ctx: IndexHintTypeContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.indexHintType`.
     * @param ctx the parse tree
     */
    exitIndexHintType?: (ctx: IndexHintTypeContext) => void;
    /**
     * Enter a parse tree produced by the `innerJoin`
     * labeled alternative in `MySqlParser.joinPart`.
     * @param ctx the parse tree
     */
    enterInnerJoin?: (ctx: InnerJoinContext) => void;
    /**
     * Exit a parse tree produced by the `innerJoin`
     * labeled alternative in `MySqlParser.joinPart`.
     * @param ctx the parse tree
     */
    exitInnerJoin?: (ctx: InnerJoinContext) => void;
    /**
     * Enter a parse tree produced by the `straightJoin`
     * labeled alternative in `MySqlParser.joinPart`.
     * @param ctx the parse tree
     */
    enterStraightJoin?: (ctx: StraightJoinContext) => void;
    /**
     * Exit a parse tree produced by the `straightJoin`
     * labeled alternative in `MySqlParser.joinPart`.
     * @param ctx the parse tree
     */
    exitStraightJoin?: (ctx: StraightJoinContext) => void;
    /**
     * Enter a parse tree produced by the `outerJoin`
     * labeled alternative in `MySqlParser.joinPart`.
     * @param ctx the parse tree
     */
    enterOuterJoin?: (ctx: OuterJoinContext) => void;
    /**
     * Exit a parse tree produced by the `outerJoin`
     * labeled alternative in `MySqlParser.joinPart`.
     * @param ctx the parse tree
     */
    exitOuterJoin?: (ctx: OuterJoinContext) => void;
    /**
     * Enter a parse tree produced by the `naturalJoin`
     * labeled alternative in `MySqlParser.joinPart`.
     * @param ctx the parse tree
     */
    enterNaturalJoin?: (ctx: NaturalJoinContext) => void;
    /**
     * Exit a parse tree produced by the `naturalJoin`
     * labeled alternative in `MySqlParser.joinPart`.
     * @param ctx the parse tree
     */
    exitNaturalJoin?: (ctx: NaturalJoinContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.joinSpec`.
     * @param ctx the parse tree
     */
    enterJoinSpec?: (ctx: JoinSpecContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.joinSpec`.
     * @param ctx the parse tree
     */
    exitJoinSpec?: (ctx: JoinSpecContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.queryExpression`.
     * @param ctx the parse tree
     */
    enterQueryExpression?: (ctx: QueryExpressionContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.queryExpression`.
     * @param ctx the parse tree
     */
    exitQueryExpression?: (ctx: QueryExpressionContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.queryExpressionNointo`.
     * @param ctx the parse tree
     */
    enterQueryExpressionNointo?: (ctx: QueryExpressionNointoContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.queryExpressionNointo`.
     * @param ctx the parse tree
     */
    exitQueryExpressionNointo?: (ctx: QueryExpressionNointoContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.querySpecification`.
     * @param ctx the parse tree
     */
    enterQuerySpecification?: (ctx: QuerySpecificationContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.querySpecification`.
     * @param ctx the parse tree
     */
    exitQuerySpecification?: (ctx: QuerySpecificationContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.querySpecificationNointo`.
     * @param ctx the parse tree
     */
    enterQuerySpecificationNointo?: (ctx: QuerySpecificationNointoContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.querySpecificationNointo`.
     * @param ctx the parse tree
     */
    exitQuerySpecificationNointo?: (ctx: QuerySpecificationNointoContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.unionParenthesis`.
     * @param ctx the parse tree
     */
    enterUnionParenthesis?: (ctx: UnionParenthesisContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.unionParenthesis`.
     * @param ctx the parse tree
     */
    exitUnionParenthesis?: (ctx: UnionParenthesisContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.unionStatement`.
     * @param ctx the parse tree
     */
    enterUnionStatement?: (ctx: UnionStatementContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.unionStatement`.
     * @param ctx the parse tree
     */
    exitUnionStatement?: (ctx: UnionStatementContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.lateralStatement`.
     * @param ctx the parse tree
     */
    enterLateralStatement?: (ctx: LateralStatementContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.lateralStatement`.
     * @param ctx the parse tree
     */
    exitLateralStatement?: (ctx: LateralStatementContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.jsonTable`.
     * @param ctx the parse tree
     */
    enterJsonTable?: (ctx: JsonTableContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.jsonTable`.
     * @param ctx the parse tree
     */
    exitJsonTable?: (ctx: JsonTableContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.jsonColumnList`.
     * @param ctx the parse tree
     */
    enterJsonColumnList?: (ctx: JsonColumnListContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.jsonColumnList`.
     * @param ctx the parse tree
     */
    exitJsonColumnList?: (ctx: JsonColumnListContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.jsonColumn`.
     * @param ctx the parse tree
     */
    enterJsonColumn?: (ctx: JsonColumnContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.jsonColumn`.
     * @param ctx the parse tree
     */
    exitJsonColumn?: (ctx: JsonColumnContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.jsonOnEmpty`.
     * @param ctx the parse tree
     */
    enterJsonOnEmpty?: (ctx: JsonOnEmptyContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.jsonOnEmpty`.
     * @param ctx the parse tree
     */
    exitJsonOnEmpty?: (ctx: JsonOnEmptyContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.jsonOnError`.
     * @param ctx the parse tree
     */
    enterJsonOnError?: (ctx: JsonOnErrorContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.jsonOnError`.
     * @param ctx the parse tree
     */
    exitJsonOnError?: (ctx: JsonOnErrorContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.selectSpec`.
     * @param ctx the parse tree
     */
    enterSelectSpec?: (ctx: SelectSpecContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.selectSpec`.
     * @param ctx the parse tree
     */
    exitSelectSpec?: (ctx: SelectSpecContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.selectElements`.
     * @param ctx the parse tree
     */
    enterSelectElements?: (ctx: SelectElementsContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.selectElements`.
     * @param ctx the parse tree
     */
    exitSelectElements?: (ctx: SelectElementsContext) => void;
    /**
     * Enter a parse tree produced by the `selectStarElement`
     * labeled alternative in `MySqlParser.selectElement`.
     * @param ctx the parse tree
     */
    enterSelectStarElement?: (ctx: SelectStarElementContext) => void;
    /**
     * Exit a parse tree produced by the `selectStarElement`
     * labeled alternative in `MySqlParser.selectElement`.
     * @param ctx the parse tree
     */
    exitSelectStarElement?: (ctx: SelectStarElementContext) => void;
    /**
     * Enter a parse tree produced by the `selectColumnElement`
     * labeled alternative in `MySqlParser.selectElement`.
     * @param ctx the parse tree
     */
    enterSelectColumnElement?: (ctx: SelectColumnElementContext) => void;
    /**
     * Exit a parse tree produced by the `selectColumnElement`
     * labeled alternative in `MySqlParser.selectElement`.
     * @param ctx the parse tree
     */
    exitSelectColumnElement?: (ctx: SelectColumnElementContext) => void;
    /**
     * Enter a parse tree produced by the `selectFunctionElement`
     * labeled alternative in `MySqlParser.selectElement`.
     * @param ctx the parse tree
     */
    enterSelectFunctionElement?: (ctx: SelectFunctionElementContext) => void;
    /**
     * Exit a parse tree produced by the `selectFunctionElement`
     * labeled alternative in `MySqlParser.selectElement`.
     * @param ctx the parse tree
     */
    exitSelectFunctionElement?: (ctx: SelectFunctionElementContext) => void;
    /**
     * Enter a parse tree produced by the `selectExpressionElement`
     * labeled alternative in `MySqlParser.selectElement`.
     * @param ctx the parse tree
     */
    enterSelectExpressionElement?: (ctx: SelectExpressionElementContext) => void;
    /**
     * Exit a parse tree produced by the `selectExpressionElement`
     * labeled alternative in `MySqlParser.selectElement`.
     * @param ctx the parse tree
     */
    exitSelectExpressionElement?: (ctx: SelectExpressionElementContext) => void;
    /**
     * Enter a parse tree produced by the `selectIntoVariables`
     * labeled alternative in `MySqlParser.selectIntoExpression`.
     * @param ctx the parse tree
     */
    enterSelectIntoVariables?: (ctx: SelectIntoVariablesContext) => void;
    /**
     * Exit a parse tree produced by the `selectIntoVariables`
     * labeled alternative in `MySqlParser.selectIntoExpression`.
     * @param ctx the parse tree
     */
    exitSelectIntoVariables?: (ctx: SelectIntoVariablesContext) => void;
    /**
     * Enter a parse tree produced by the `selectIntoDumpFile`
     * labeled alternative in `MySqlParser.selectIntoExpression`.
     * @param ctx the parse tree
     */
    enterSelectIntoDumpFile?: (ctx: SelectIntoDumpFileContext) => void;
    /**
     * Exit a parse tree produced by the `selectIntoDumpFile`
     * labeled alternative in `MySqlParser.selectIntoExpression`.
     * @param ctx the parse tree
     */
    exitSelectIntoDumpFile?: (ctx: SelectIntoDumpFileContext) => void;
    /**
     * Enter a parse tree produced by the `selectIntoTextFile`
     * labeled alternative in `MySqlParser.selectIntoExpression`.
     * @param ctx the parse tree
     */
    enterSelectIntoTextFile?: (ctx: SelectIntoTextFileContext) => void;
    /**
     * Exit a parse tree produced by the `selectIntoTextFile`
     * labeled alternative in `MySqlParser.selectIntoExpression`.
     * @param ctx the parse tree
     */
    exitSelectIntoTextFile?: (ctx: SelectIntoTextFileContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.selectFieldsInto`.
     * @param ctx the parse tree
     */
    enterSelectFieldsInto?: (ctx: SelectFieldsIntoContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.selectFieldsInto`.
     * @param ctx the parse tree
     */
    exitSelectFieldsInto?: (ctx: SelectFieldsIntoContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.selectLinesInto`.
     * @param ctx the parse tree
     */
    enterSelectLinesInto?: (ctx: SelectLinesIntoContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.selectLinesInto`.
     * @param ctx the parse tree
     */
    exitSelectLinesInto?: (ctx: SelectLinesIntoContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.fromClause`.
     * @param ctx the parse tree
     */
    enterFromClause?: (ctx: FromClauseContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.fromClause`.
     * @param ctx the parse tree
     */
    exitFromClause?: (ctx: FromClauseContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.groupByClause`.
     * @param ctx the parse tree
     */
    enterGroupByClause?: (ctx: GroupByClauseContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.groupByClause`.
     * @param ctx the parse tree
     */
    exitGroupByClause?: (ctx: GroupByClauseContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.havingClause`.
     * @param ctx the parse tree
     */
    enterHavingClause?: (ctx: HavingClauseContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.havingClause`.
     * @param ctx the parse tree
     */
    exitHavingClause?: (ctx: HavingClauseContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.windowClause`.
     * @param ctx the parse tree
     */
    enterWindowClause?: (ctx: WindowClauseContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.windowClause`.
     * @param ctx the parse tree
     */
    exitWindowClause?: (ctx: WindowClauseContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.groupByItem`.
     * @param ctx the parse tree
     */
    enterGroupByItem?: (ctx: GroupByItemContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.groupByItem`.
     * @param ctx the parse tree
     */
    exitGroupByItem?: (ctx: GroupByItemContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.limitClause`.
     * @param ctx the parse tree
     */
    enterLimitClause?: (ctx: LimitClauseContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.limitClause`.
     * @param ctx the parse tree
     */
    exitLimitClause?: (ctx: LimitClauseContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.limitClauseAtom`.
     * @param ctx the parse tree
     */
    enterLimitClauseAtom?: (ctx: LimitClauseAtomContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.limitClauseAtom`.
     * @param ctx the parse tree
     */
    exitLimitClauseAtom?: (ctx: LimitClauseAtomContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.startTransaction`.
     * @param ctx the parse tree
     */
    enterStartTransaction?: (ctx: StartTransactionContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.startTransaction`.
     * @param ctx the parse tree
     */
    exitStartTransaction?: (ctx: StartTransactionContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.beginWork`.
     * @param ctx the parse tree
     */
    enterBeginWork?: (ctx: BeginWorkContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.beginWork`.
     * @param ctx the parse tree
     */
    exitBeginWork?: (ctx: BeginWorkContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.commitWork`.
     * @param ctx the parse tree
     */
    enterCommitWork?: (ctx: CommitWorkContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.commitWork`.
     * @param ctx the parse tree
     */
    exitCommitWork?: (ctx: CommitWorkContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.rollbackWork`.
     * @param ctx the parse tree
     */
    enterRollbackWork?: (ctx: RollbackWorkContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.rollbackWork`.
     * @param ctx the parse tree
     */
    exitRollbackWork?: (ctx: RollbackWorkContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.savepointStatement`.
     * @param ctx the parse tree
     */
    enterSavepointStatement?: (ctx: SavepointStatementContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.savepointStatement`.
     * @param ctx the parse tree
     */
    exitSavepointStatement?: (ctx: SavepointStatementContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.rollbackStatement`.
     * @param ctx the parse tree
     */
    enterRollbackStatement?: (ctx: RollbackStatementContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.rollbackStatement`.
     * @param ctx the parse tree
     */
    exitRollbackStatement?: (ctx: RollbackStatementContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.releaseStatement`.
     * @param ctx the parse tree
     */
    enterReleaseStatement?: (ctx: ReleaseStatementContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.releaseStatement`.
     * @param ctx the parse tree
     */
    exitReleaseStatement?: (ctx: ReleaseStatementContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.lockTables`.
     * @param ctx the parse tree
     */
    enterLockTables?: (ctx: LockTablesContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.lockTables`.
     * @param ctx the parse tree
     */
    exitLockTables?: (ctx: LockTablesContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.unlockTables`.
     * @param ctx the parse tree
     */
    enterUnlockTables?: (ctx: UnlockTablesContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.unlockTables`.
     * @param ctx the parse tree
     */
    exitUnlockTables?: (ctx: UnlockTablesContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.setAutocommitStatement`.
     * @param ctx the parse tree
     */
    enterSetAutocommitStatement?: (ctx: SetAutocommitStatementContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.setAutocommitStatement`.
     * @param ctx the parse tree
     */
    exitSetAutocommitStatement?: (ctx: SetAutocommitStatementContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.setTransactionStatement`.
     * @param ctx the parse tree
     */
    enterSetTransactionStatement?: (ctx: SetTransactionStatementContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.setTransactionStatement`.
     * @param ctx the parse tree
     */
    exitSetTransactionStatement?: (ctx: SetTransactionStatementContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.transactionMode`.
     * @param ctx the parse tree
     */
    enterTransactionMode?: (ctx: TransactionModeContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.transactionMode`.
     * @param ctx the parse tree
     */
    exitTransactionMode?: (ctx: TransactionModeContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.lockTableElement`.
     * @param ctx the parse tree
     */
    enterLockTableElement?: (ctx: LockTableElementContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.lockTableElement`.
     * @param ctx the parse tree
     */
    exitLockTableElement?: (ctx: LockTableElementContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.lockAction`.
     * @param ctx the parse tree
     */
    enterLockAction?: (ctx: LockActionContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.lockAction`.
     * @param ctx the parse tree
     */
    exitLockAction?: (ctx: LockActionContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.transactionOption`.
     * @param ctx the parse tree
     */
    enterTransactionOption?: (ctx: TransactionOptionContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.transactionOption`.
     * @param ctx the parse tree
     */
    exitTransactionOption?: (ctx: TransactionOptionContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.transactionLevel`.
     * @param ctx the parse tree
     */
    enterTransactionLevel?: (ctx: TransactionLevelContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.transactionLevel`.
     * @param ctx the parse tree
     */
    exitTransactionLevel?: (ctx: TransactionLevelContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.changeMaster`.
     * @param ctx the parse tree
     */
    enterChangeMaster?: (ctx: ChangeMasterContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.changeMaster`.
     * @param ctx the parse tree
     */
    exitChangeMaster?: (ctx: ChangeMasterContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.changeReplicationFilter`.
     * @param ctx the parse tree
     */
    enterChangeReplicationFilter?: (ctx: ChangeReplicationFilterContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.changeReplicationFilter`.
     * @param ctx the parse tree
     */
    exitChangeReplicationFilter?: (ctx: ChangeReplicationFilterContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.purgeBinaryLogs`.
     * @param ctx the parse tree
     */
    enterPurgeBinaryLogs?: (ctx: PurgeBinaryLogsContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.purgeBinaryLogs`.
     * @param ctx the parse tree
     */
    exitPurgeBinaryLogs?: (ctx: PurgeBinaryLogsContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.resetMaster`.
     * @param ctx the parse tree
     */
    enterResetMaster?: (ctx: ResetMasterContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.resetMaster`.
     * @param ctx the parse tree
     */
    exitResetMaster?: (ctx: ResetMasterContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.resetSlave`.
     * @param ctx the parse tree
     */
    enterResetSlave?: (ctx: ResetSlaveContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.resetSlave`.
     * @param ctx the parse tree
     */
    exitResetSlave?: (ctx: ResetSlaveContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.startSlave`.
     * @param ctx the parse tree
     */
    enterStartSlave?: (ctx: StartSlaveContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.startSlave`.
     * @param ctx the parse tree
     */
    exitStartSlave?: (ctx: StartSlaveContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.stopSlave`.
     * @param ctx the parse tree
     */
    enterStopSlave?: (ctx: StopSlaveContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.stopSlave`.
     * @param ctx the parse tree
     */
    exitStopSlave?: (ctx: StopSlaveContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.startGroupReplication`.
     * @param ctx the parse tree
     */
    enterStartGroupReplication?: (ctx: StartGroupReplicationContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.startGroupReplication`.
     * @param ctx the parse tree
     */
    exitStartGroupReplication?: (ctx: StartGroupReplicationContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.stopGroupReplication`.
     * @param ctx the parse tree
     */
    enterStopGroupReplication?: (ctx: StopGroupReplicationContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.stopGroupReplication`.
     * @param ctx the parse tree
     */
    exitStopGroupReplication?: (ctx: StopGroupReplicationContext) => void;
    /**
     * Enter a parse tree produced by the `masterStringOption`
     * labeled alternative in `MySqlParser.masterOption`.
     * @param ctx the parse tree
     */
    enterMasterStringOption?: (ctx: MasterStringOptionContext) => void;
    /**
     * Exit a parse tree produced by the `masterStringOption`
     * labeled alternative in `MySqlParser.masterOption`.
     * @param ctx the parse tree
     */
    exitMasterStringOption?: (ctx: MasterStringOptionContext) => void;
    /**
     * Enter a parse tree produced by the `masterDecimalOption`
     * labeled alternative in `MySqlParser.masterOption`.
     * @param ctx the parse tree
     */
    enterMasterDecimalOption?: (ctx: MasterDecimalOptionContext) => void;
    /**
     * Exit a parse tree produced by the `masterDecimalOption`
     * labeled alternative in `MySqlParser.masterOption`.
     * @param ctx the parse tree
     */
    exitMasterDecimalOption?: (ctx: MasterDecimalOptionContext) => void;
    /**
     * Enter a parse tree produced by the `masterBoolOption`
     * labeled alternative in `MySqlParser.masterOption`.
     * @param ctx the parse tree
     */
    enterMasterBoolOption?: (ctx: MasterBoolOptionContext) => void;
    /**
     * Exit a parse tree produced by the `masterBoolOption`
     * labeled alternative in `MySqlParser.masterOption`.
     * @param ctx the parse tree
     */
    exitMasterBoolOption?: (ctx: MasterBoolOptionContext) => void;
    /**
     * Enter a parse tree produced by the `masterRealOption`
     * labeled alternative in `MySqlParser.masterOption`.
     * @param ctx the parse tree
     */
    enterMasterRealOption?: (ctx: MasterRealOptionContext) => void;
    /**
     * Exit a parse tree produced by the `masterRealOption`
     * labeled alternative in `MySqlParser.masterOption`.
     * @param ctx the parse tree
     */
    exitMasterRealOption?: (ctx: MasterRealOptionContext) => void;
    /**
     * Enter a parse tree produced by the `masterUidListOption`
     * labeled alternative in `MySqlParser.masterOption`.
     * @param ctx the parse tree
     */
    enterMasterUidListOption?: (ctx: MasterUidListOptionContext) => void;
    /**
     * Exit a parse tree produced by the `masterUidListOption`
     * labeled alternative in `MySqlParser.masterOption`.
     * @param ctx the parse tree
     */
    exitMasterUidListOption?: (ctx: MasterUidListOptionContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.stringMasterOption`.
     * @param ctx the parse tree
     */
    enterStringMasterOption?: (ctx: StringMasterOptionContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.stringMasterOption`.
     * @param ctx the parse tree
     */
    exitStringMasterOption?: (ctx: StringMasterOptionContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.decimalMasterOption`.
     * @param ctx the parse tree
     */
    enterDecimalMasterOption?: (ctx: DecimalMasterOptionContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.decimalMasterOption`.
     * @param ctx the parse tree
     */
    exitDecimalMasterOption?: (ctx: DecimalMasterOptionContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.boolMasterOption`.
     * @param ctx the parse tree
     */
    enterBoolMasterOption?: (ctx: BoolMasterOptionContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.boolMasterOption`.
     * @param ctx the parse tree
     */
    exitBoolMasterOption?: (ctx: BoolMasterOptionContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.channelOption`.
     * @param ctx the parse tree
     */
    enterChannelOption?: (ctx: ChannelOptionContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.channelOption`.
     * @param ctx the parse tree
     */
    exitChannelOption?: (ctx: ChannelOptionContext) => void;
    /**
     * Enter a parse tree produced by the `doDbReplication`
     * labeled alternative in `MySqlParser.replicationFilter`.
     * @param ctx the parse tree
     */
    enterDoDbReplication?: (ctx: DoDbReplicationContext) => void;
    /**
     * Exit a parse tree produced by the `doDbReplication`
     * labeled alternative in `MySqlParser.replicationFilter`.
     * @param ctx the parse tree
     */
    exitDoDbReplication?: (ctx: DoDbReplicationContext) => void;
    /**
     * Enter a parse tree produced by the `ignoreDbReplication`
     * labeled alternative in `MySqlParser.replicationFilter`.
     * @param ctx the parse tree
     */
    enterIgnoreDbReplication?: (ctx: IgnoreDbReplicationContext) => void;
    /**
     * Exit a parse tree produced by the `ignoreDbReplication`
     * labeled alternative in `MySqlParser.replicationFilter`.
     * @param ctx the parse tree
     */
    exitIgnoreDbReplication?: (ctx: IgnoreDbReplicationContext) => void;
    /**
     * Enter a parse tree produced by the `doTableReplication`
     * labeled alternative in `MySqlParser.replicationFilter`.
     * @param ctx the parse tree
     */
    enterDoTableReplication?: (ctx: DoTableReplicationContext) => void;
    /**
     * Exit a parse tree produced by the `doTableReplication`
     * labeled alternative in `MySqlParser.replicationFilter`.
     * @param ctx the parse tree
     */
    exitDoTableReplication?: (ctx: DoTableReplicationContext) => void;
    /**
     * Enter a parse tree produced by the `ignoreTableReplication`
     * labeled alternative in `MySqlParser.replicationFilter`.
     * @param ctx the parse tree
     */
    enterIgnoreTableReplication?: (ctx: IgnoreTableReplicationContext) => void;
    /**
     * Exit a parse tree produced by the `ignoreTableReplication`
     * labeled alternative in `MySqlParser.replicationFilter`.
     * @param ctx the parse tree
     */
    exitIgnoreTableReplication?: (ctx: IgnoreTableReplicationContext) => void;
    /**
     * Enter a parse tree produced by the `wildDoTableReplication`
     * labeled alternative in `MySqlParser.replicationFilter`.
     * @param ctx the parse tree
     */
    enterWildDoTableReplication?: (ctx: WildDoTableReplicationContext) => void;
    /**
     * Exit a parse tree produced by the `wildDoTableReplication`
     * labeled alternative in `MySqlParser.replicationFilter`.
     * @param ctx the parse tree
     */
    exitWildDoTableReplication?: (ctx: WildDoTableReplicationContext) => void;
    /**
     * Enter a parse tree produced by the `wildIgnoreTableReplication`
     * labeled alternative in `MySqlParser.replicationFilter`.
     * @param ctx the parse tree
     */
    enterWildIgnoreTableReplication?: (ctx: WildIgnoreTableReplicationContext) => void;
    /**
     * Exit a parse tree produced by the `wildIgnoreTableReplication`
     * labeled alternative in `MySqlParser.replicationFilter`.
     * @param ctx the parse tree
     */
    exitWildIgnoreTableReplication?: (ctx: WildIgnoreTableReplicationContext) => void;
    /**
     * Enter a parse tree produced by the `rewriteDbReplication`
     * labeled alternative in `MySqlParser.replicationFilter`.
     * @param ctx the parse tree
     */
    enterRewriteDbReplication?: (ctx: RewriteDbReplicationContext) => void;
    /**
     * Exit a parse tree produced by the `rewriteDbReplication`
     * labeled alternative in `MySqlParser.replicationFilter`.
     * @param ctx the parse tree
     */
    exitRewriteDbReplication?: (ctx: RewriteDbReplicationContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.tablePair`.
     * @param ctx the parse tree
     */
    enterTablePair?: (ctx: TablePairContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.tablePair`.
     * @param ctx the parse tree
     */
    exitTablePair?: (ctx: TablePairContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.threadType`.
     * @param ctx the parse tree
     */
    enterThreadType?: (ctx: ThreadTypeContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.threadType`.
     * @param ctx the parse tree
     */
    exitThreadType?: (ctx: ThreadTypeContext) => void;
    /**
     * Enter a parse tree produced by the `gtidsUntilOption`
     * labeled alternative in `MySqlParser.untilOption`.
     * @param ctx the parse tree
     */
    enterGtidsUntilOption?: (ctx: GtidsUntilOptionContext) => void;
    /**
     * Exit a parse tree produced by the `gtidsUntilOption`
     * labeled alternative in `MySqlParser.untilOption`.
     * @param ctx the parse tree
     */
    exitGtidsUntilOption?: (ctx: GtidsUntilOptionContext) => void;
    /**
     * Enter a parse tree produced by the `masterLogUntilOption`
     * labeled alternative in `MySqlParser.untilOption`.
     * @param ctx the parse tree
     */
    enterMasterLogUntilOption?: (ctx: MasterLogUntilOptionContext) => void;
    /**
     * Exit a parse tree produced by the `masterLogUntilOption`
     * labeled alternative in `MySqlParser.untilOption`.
     * @param ctx the parse tree
     */
    exitMasterLogUntilOption?: (ctx: MasterLogUntilOptionContext) => void;
    /**
     * Enter a parse tree produced by the `relayLogUntilOption`
     * labeled alternative in `MySqlParser.untilOption`.
     * @param ctx the parse tree
     */
    enterRelayLogUntilOption?: (ctx: RelayLogUntilOptionContext) => void;
    /**
     * Exit a parse tree produced by the `relayLogUntilOption`
     * labeled alternative in `MySqlParser.untilOption`.
     * @param ctx the parse tree
     */
    exitRelayLogUntilOption?: (ctx: RelayLogUntilOptionContext) => void;
    /**
     * Enter a parse tree produced by the `sqlGapsUntilOption`
     * labeled alternative in `MySqlParser.untilOption`.
     * @param ctx the parse tree
     */
    enterSqlGapsUntilOption?: (ctx: SqlGapsUntilOptionContext) => void;
    /**
     * Exit a parse tree produced by the `sqlGapsUntilOption`
     * labeled alternative in `MySqlParser.untilOption`.
     * @param ctx the parse tree
     */
    exitSqlGapsUntilOption?: (ctx: SqlGapsUntilOptionContext) => void;
    /**
     * Enter a parse tree produced by the `userConnectionOption`
     * labeled alternative in `MySqlParser.connectionOption`.
     * @param ctx the parse tree
     */
    enterUserConnectionOption?: (ctx: UserConnectionOptionContext) => void;
    /**
     * Exit a parse tree produced by the `userConnectionOption`
     * labeled alternative in `MySqlParser.connectionOption`.
     * @param ctx the parse tree
     */
    exitUserConnectionOption?: (ctx: UserConnectionOptionContext) => void;
    /**
     * Enter a parse tree produced by the `passwordConnectionOption`
     * labeled alternative in `MySqlParser.connectionOption`.
     * @param ctx the parse tree
     */
    enterPasswordConnectionOption?: (ctx: PasswordConnectionOptionContext) => void;
    /**
     * Exit a parse tree produced by the `passwordConnectionOption`
     * labeled alternative in `MySqlParser.connectionOption`.
     * @param ctx the parse tree
     */
    exitPasswordConnectionOption?: (ctx: PasswordConnectionOptionContext) => void;
    /**
     * Enter a parse tree produced by the `defaultAuthConnectionOption`
     * labeled alternative in `MySqlParser.connectionOption`.
     * @param ctx the parse tree
     */
    enterDefaultAuthConnectionOption?: (ctx: DefaultAuthConnectionOptionContext) => void;
    /**
     * Exit a parse tree produced by the `defaultAuthConnectionOption`
     * labeled alternative in `MySqlParser.connectionOption`.
     * @param ctx the parse tree
     */
    exitDefaultAuthConnectionOption?: (ctx: DefaultAuthConnectionOptionContext) => void;
    /**
     * Enter a parse tree produced by the `pluginDirConnectionOption`
     * labeled alternative in `MySqlParser.connectionOption`.
     * @param ctx the parse tree
     */
    enterPluginDirConnectionOption?: (ctx: PluginDirConnectionOptionContext) => void;
    /**
     * Exit a parse tree produced by the `pluginDirConnectionOption`
     * labeled alternative in `MySqlParser.connectionOption`.
     * @param ctx the parse tree
     */
    exitPluginDirConnectionOption?: (ctx: PluginDirConnectionOptionContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.gtuidSet`.
     * @param ctx the parse tree
     */
    enterGtuidSet?: (ctx: GtuidSetContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.gtuidSet`.
     * @param ctx the parse tree
     */
    exitGtuidSet?: (ctx: GtuidSetContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.xaStartTransaction`.
     * @param ctx the parse tree
     */
    enterXaStartTransaction?: (ctx: XaStartTransactionContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.xaStartTransaction`.
     * @param ctx the parse tree
     */
    exitXaStartTransaction?: (ctx: XaStartTransactionContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.xaEndTransaction`.
     * @param ctx the parse tree
     */
    enterXaEndTransaction?: (ctx: XaEndTransactionContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.xaEndTransaction`.
     * @param ctx the parse tree
     */
    exitXaEndTransaction?: (ctx: XaEndTransactionContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.xaPrepareStatement`.
     * @param ctx the parse tree
     */
    enterXaPrepareStatement?: (ctx: XaPrepareStatementContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.xaPrepareStatement`.
     * @param ctx the parse tree
     */
    exitXaPrepareStatement?: (ctx: XaPrepareStatementContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.xaCommitWork`.
     * @param ctx the parse tree
     */
    enterXaCommitWork?: (ctx: XaCommitWorkContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.xaCommitWork`.
     * @param ctx the parse tree
     */
    exitXaCommitWork?: (ctx: XaCommitWorkContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.xaRollbackWork`.
     * @param ctx the parse tree
     */
    enterXaRollbackWork?: (ctx: XaRollbackWorkContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.xaRollbackWork`.
     * @param ctx the parse tree
     */
    exitXaRollbackWork?: (ctx: XaRollbackWorkContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.xaRecoverWork`.
     * @param ctx the parse tree
     */
    enterXaRecoverWork?: (ctx: XaRecoverWorkContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.xaRecoverWork`.
     * @param ctx the parse tree
     */
    exitXaRecoverWork?: (ctx: XaRecoverWorkContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.prepareStatement`.
     * @param ctx the parse tree
     */
    enterPrepareStatement?: (ctx: PrepareStatementContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.prepareStatement`.
     * @param ctx the parse tree
     */
    exitPrepareStatement?: (ctx: PrepareStatementContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.executeStatement`.
     * @param ctx the parse tree
     */
    enterExecuteStatement?: (ctx: ExecuteStatementContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.executeStatement`.
     * @param ctx the parse tree
     */
    exitExecuteStatement?: (ctx: ExecuteStatementContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.deallocatePrepare`.
     * @param ctx the parse tree
     */
    enterDeallocatePrepare?: (ctx: DeallocatePrepareContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.deallocatePrepare`.
     * @param ctx the parse tree
     */
    exitDeallocatePrepare?: (ctx: DeallocatePrepareContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.routineBody`.
     * @param ctx the parse tree
     */
    enterRoutineBody?: (ctx: RoutineBodyContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.routineBody`.
     * @param ctx the parse tree
     */
    exitRoutineBody?: (ctx: RoutineBodyContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.blockStatement`.
     * @param ctx the parse tree
     */
    enterBlockStatement?: (ctx: BlockStatementContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.blockStatement`.
     * @param ctx the parse tree
     */
    exitBlockStatement?: (ctx: BlockStatementContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.caseStatement`.
     * @param ctx the parse tree
     */
    enterCaseStatement?: (ctx: CaseStatementContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.caseStatement`.
     * @param ctx the parse tree
     */
    exitCaseStatement?: (ctx: CaseStatementContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.ifStatement`.
     * @param ctx the parse tree
     */
    enterIfStatement?: (ctx: IfStatementContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.ifStatement`.
     * @param ctx the parse tree
     */
    exitIfStatement?: (ctx: IfStatementContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.iterateStatement`.
     * @param ctx the parse tree
     */
    enterIterateStatement?: (ctx: IterateStatementContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.iterateStatement`.
     * @param ctx the parse tree
     */
    exitIterateStatement?: (ctx: IterateStatementContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.leaveStatement`.
     * @param ctx the parse tree
     */
    enterLeaveStatement?: (ctx: LeaveStatementContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.leaveStatement`.
     * @param ctx the parse tree
     */
    exitLeaveStatement?: (ctx: LeaveStatementContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.loopStatement`.
     * @param ctx the parse tree
     */
    enterLoopStatement?: (ctx: LoopStatementContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.loopStatement`.
     * @param ctx the parse tree
     */
    exitLoopStatement?: (ctx: LoopStatementContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.repeatStatement`.
     * @param ctx the parse tree
     */
    enterRepeatStatement?: (ctx: RepeatStatementContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.repeatStatement`.
     * @param ctx the parse tree
     */
    exitRepeatStatement?: (ctx: RepeatStatementContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.returnStatement`.
     * @param ctx the parse tree
     */
    enterReturnStatement?: (ctx: ReturnStatementContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.returnStatement`.
     * @param ctx the parse tree
     */
    exitReturnStatement?: (ctx: ReturnStatementContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.whileStatement`.
     * @param ctx the parse tree
     */
    enterWhileStatement?: (ctx: WhileStatementContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.whileStatement`.
     * @param ctx the parse tree
     */
    exitWhileStatement?: (ctx: WhileStatementContext) => void;
    /**
     * Enter a parse tree produced by the `CloseCursor`
     * labeled alternative in `MySqlParser.cursorStatement`.
     * @param ctx the parse tree
     */
    enterCloseCursor?: (ctx: CloseCursorContext) => void;
    /**
     * Exit a parse tree produced by the `CloseCursor`
     * labeled alternative in `MySqlParser.cursorStatement`.
     * @param ctx the parse tree
     */
    exitCloseCursor?: (ctx: CloseCursorContext) => void;
    /**
     * Enter a parse tree produced by the `FetchCursor`
     * labeled alternative in `MySqlParser.cursorStatement`.
     * @param ctx the parse tree
     */
    enterFetchCursor?: (ctx: FetchCursorContext) => void;
    /**
     * Exit a parse tree produced by the `FetchCursor`
     * labeled alternative in `MySqlParser.cursorStatement`.
     * @param ctx the parse tree
     */
    exitFetchCursor?: (ctx: FetchCursorContext) => void;
    /**
     * Enter a parse tree produced by the `OpenCursor`
     * labeled alternative in `MySqlParser.cursorStatement`.
     * @param ctx the parse tree
     */
    enterOpenCursor?: (ctx: OpenCursorContext) => void;
    /**
     * Exit a parse tree produced by the `OpenCursor`
     * labeled alternative in `MySqlParser.cursorStatement`.
     * @param ctx the parse tree
     */
    exitOpenCursor?: (ctx: OpenCursorContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.declareVariable`.
     * @param ctx the parse tree
     */
    enterDeclareVariable?: (ctx: DeclareVariableContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.declareVariable`.
     * @param ctx the parse tree
     */
    exitDeclareVariable?: (ctx: DeclareVariableContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.declareCondition`.
     * @param ctx the parse tree
     */
    enterDeclareCondition?: (ctx: DeclareConditionContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.declareCondition`.
     * @param ctx the parse tree
     */
    exitDeclareCondition?: (ctx: DeclareConditionContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.declareCursor`.
     * @param ctx the parse tree
     */
    enterDeclareCursor?: (ctx: DeclareCursorContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.declareCursor`.
     * @param ctx the parse tree
     */
    exitDeclareCursor?: (ctx: DeclareCursorContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.declareHandler`.
     * @param ctx the parse tree
     */
    enterDeclareHandler?: (ctx: DeclareHandlerContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.declareHandler`.
     * @param ctx the parse tree
     */
    exitDeclareHandler?: (ctx: DeclareHandlerContext) => void;
    /**
     * Enter a parse tree produced by the `handlerConditionCode`
     * labeled alternative in `MySqlParser.handlerConditionValue`.
     * @param ctx the parse tree
     */
    enterHandlerConditionCode?: (ctx: HandlerConditionCodeContext) => void;
    /**
     * Exit a parse tree produced by the `handlerConditionCode`
     * labeled alternative in `MySqlParser.handlerConditionValue`.
     * @param ctx the parse tree
     */
    exitHandlerConditionCode?: (ctx: HandlerConditionCodeContext) => void;
    /**
     * Enter a parse tree produced by the `handlerConditionState`
     * labeled alternative in `MySqlParser.handlerConditionValue`.
     * @param ctx the parse tree
     */
    enterHandlerConditionState?: (ctx: HandlerConditionStateContext) => void;
    /**
     * Exit a parse tree produced by the `handlerConditionState`
     * labeled alternative in `MySqlParser.handlerConditionValue`.
     * @param ctx the parse tree
     */
    exitHandlerConditionState?: (ctx: HandlerConditionStateContext) => void;
    /**
     * Enter a parse tree produced by the `handlerConditionName`
     * labeled alternative in `MySqlParser.handlerConditionValue`.
     * @param ctx the parse tree
     */
    enterHandlerConditionName?: (ctx: HandlerConditionNameContext) => void;
    /**
     * Exit a parse tree produced by the `handlerConditionName`
     * labeled alternative in `MySqlParser.handlerConditionValue`.
     * @param ctx the parse tree
     */
    exitHandlerConditionName?: (ctx: HandlerConditionNameContext) => void;
    /**
     * Enter a parse tree produced by the `handlerConditionWarning`
     * labeled alternative in `MySqlParser.handlerConditionValue`.
     * @param ctx the parse tree
     */
    enterHandlerConditionWarning?: (ctx: HandlerConditionWarningContext) => void;
    /**
     * Exit a parse tree produced by the `handlerConditionWarning`
     * labeled alternative in `MySqlParser.handlerConditionValue`.
     * @param ctx the parse tree
     */
    exitHandlerConditionWarning?: (ctx: HandlerConditionWarningContext) => void;
    /**
     * Enter a parse tree produced by the `handlerConditionNotfound`
     * labeled alternative in `MySqlParser.handlerConditionValue`.
     * @param ctx the parse tree
     */
    enterHandlerConditionNotfound?: (ctx: HandlerConditionNotfoundContext) => void;
    /**
     * Exit a parse tree produced by the `handlerConditionNotfound`
     * labeled alternative in `MySqlParser.handlerConditionValue`.
     * @param ctx the parse tree
     */
    exitHandlerConditionNotfound?: (ctx: HandlerConditionNotfoundContext) => void;
    /**
     * Enter a parse tree produced by the `handlerConditionException`
     * labeled alternative in `MySqlParser.handlerConditionValue`.
     * @param ctx the parse tree
     */
    enterHandlerConditionException?: (ctx: HandlerConditionExceptionContext) => void;
    /**
     * Exit a parse tree produced by the `handlerConditionException`
     * labeled alternative in `MySqlParser.handlerConditionValue`.
     * @param ctx the parse tree
     */
    exitHandlerConditionException?: (ctx: HandlerConditionExceptionContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.procedureSqlStatement`.
     * @param ctx the parse tree
     */
    enterProcedureSqlStatement?: (ctx: ProcedureSqlStatementContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.procedureSqlStatement`.
     * @param ctx the parse tree
     */
    exitProcedureSqlStatement?: (ctx: ProcedureSqlStatementContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.caseAlternative`.
     * @param ctx the parse tree
     */
    enterCaseAlternative?: (ctx: CaseAlternativeContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.caseAlternative`.
     * @param ctx the parse tree
     */
    exitCaseAlternative?: (ctx: CaseAlternativeContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.elifAlternative`.
     * @param ctx the parse tree
     */
    enterElifAlternative?: (ctx: ElifAlternativeContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.elifAlternative`.
     * @param ctx the parse tree
     */
    exitElifAlternative?: (ctx: ElifAlternativeContext) => void;
    /**
     * Enter a parse tree produced by the `alterUserMysqlV56`
     * labeled alternative in `MySqlParser.alterUser`.
     * @param ctx the parse tree
     */
    enterAlterUserMysqlV56?: (ctx: AlterUserMysqlV56Context) => void;
    /**
     * Exit a parse tree produced by the `alterUserMysqlV56`
     * labeled alternative in `MySqlParser.alterUser`.
     * @param ctx the parse tree
     */
    exitAlterUserMysqlV56?: (ctx: AlterUserMysqlV56Context) => void;
    /**
     * Enter a parse tree produced by the `alterUserMysqlV80`
     * labeled alternative in `MySqlParser.alterUser`.
     * @param ctx the parse tree
     */
    enterAlterUserMysqlV80?: (ctx: AlterUserMysqlV80Context) => void;
    /**
     * Exit a parse tree produced by the `alterUserMysqlV80`
     * labeled alternative in `MySqlParser.alterUser`.
     * @param ctx the parse tree
     */
    exitAlterUserMysqlV80?: (ctx: AlterUserMysqlV80Context) => void;
    /**
     * Enter a parse tree produced by the `createUserMysqlV56`
     * labeled alternative in `MySqlParser.createUser`.
     * @param ctx the parse tree
     */
    enterCreateUserMysqlV56?: (ctx: CreateUserMysqlV56Context) => void;
    /**
     * Exit a parse tree produced by the `createUserMysqlV56`
     * labeled alternative in `MySqlParser.createUser`.
     * @param ctx the parse tree
     */
    exitCreateUserMysqlV56?: (ctx: CreateUserMysqlV56Context) => void;
    /**
     * Enter a parse tree produced by the `createUserMysqlV80`
     * labeled alternative in `MySqlParser.createUser`.
     * @param ctx the parse tree
     */
    enterCreateUserMysqlV80?: (ctx: CreateUserMysqlV80Context) => void;
    /**
     * Exit a parse tree produced by the `createUserMysqlV80`
     * labeled alternative in `MySqlParser.createUser`.
     * @param ctx the parse tree
     */
    exitCreateUserMysqlV80?: (ctx: CreateUserMysqlV80Context) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.dropUser`.
     * @param ctx the parse tree
     */
    enterDropUser?: (ctx: DropUserContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.dropUser`.
     * @param ctx the parse tree
     */
    exitDropUser?: (ctx: DropUserContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.grantStatement`.
     * @param ctx the parse tree
     */
    enterGrantStatement?: (ctx: GrantStatementContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.grantStatement`.
     * @param ctx the parse tree
     */
    exitGrantStatement?: (ctx: GrantStatementContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.roleOption`.
     * @param ctx the parse tree
     */
    enterRoleOption?: (ctx: RoleOptionContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.roleOption`.
     * @param ctx the parse tree
     */
    exitRoleOption?: (ctx: RoleOptionContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.grantProxy`.
     * @param ctx the parse tree
     */
    enterGrantProxy?: (ctx: GrantProxyContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.grantProxy`.
     * @param ctx the parse tree
     */
    exitGrantProxy?: (ctx: GrantProxyContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.renameUser`.
     * @param ctx the parse tree
     */
    enterRenameUser?: (ctx: RenameUserContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.renameUser`.
     * @param ctx the parse tree
     */
    exitRenameUser?: (ctx: RenameUserContext) => void;
    /**
     * Enter a parse tree produced by the `detailRevoke`
     * labeled alternative in `MySqlParser.revokeStatement`.
     * @param ctx the parse tree
     */
    enterDetailRevoke?: (ctx: DetailRevokeContext) => void;
    /**
     * Exit a parse tree produced by the `detailRevoke`
     * labeled alternative in `MySqlParser.revokeStatement`.
     * @param ctx the parse tree
     */
    exitDetailRevoke?: (ctx: DetailRevokeContext) => void;
    /**
     * Enter a parse tree produced by the `shortRevoke`
     * labeled alternative in `MySqlParser.revokeStatement`.
     * @param ctx the parse tree
     */
    enterShortRevoke?: (ctx: ShortRevokeContext) => void;
    /**
     * Exit a parse tree produced by the `shortRevoke`
     * labeled alternative in `MySqlParser.revokeStatement`.
     * @param ctx the parse tree
     */
    exitShortRevoke?: (ctx: ShortRevokeContext) => void;
    /**
     * Enter a parse tree produced by the `roleRevoke`
     * labeled alternative in `MySqlParser.revokeStatement`.
     * @param ctx the parse tree
     */
    enterRoleRevoke?: (ctx: RoleRevokeContext) => void;
    /**
     * Exit a parse tree produced by the `roleRevoke`
     * labeled alternative in `MySqlParser.revokeStatement`.
     * @param ctx the parse tree
     */
    exitRoleRevoke?: (ctx: RoleRevokeContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.revokeProxy`.
     * @param ctx the parse tree
     */
    enterRevokeProxy?: (ctx: RevokeProxyContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.revokeProxy`.
     * @param ctx the parse tree
     */
    exitRevokeProxy?: (ctx: RevokeProxyContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.setPasswordStatement`.
     * @param ctx the parse tree
     */
    enterSetPasswordStatement?: (ctx: SetPasswordStatementContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.setPasswordStatement`.
     * @param ctx the parse tree
     */
    exitSetPasswordStatement?: (ctx: SetPasswordStatementContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.userSpecification`.
     * @param ctx the parse tree
     */
    enterUserSpecification?: (ctx: UserSpecificationContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.userSpecification`.
     * @param ctx the parse tree
     */
    exitUserSpecification?: (ctx: UserSpecificationContext) => void;
    /**
     * Enter a parse tree produced by the `hashAuthOption`
     * labeled alternative in `MySqlParser.userAuthOption`.
     * @param ctx the parse tree
     */
    enterHashAuthOption?: (ctx: HashAuthOptionContext) => void;
    /**
     * Exit a parse tree produced by the `hashAuthOption`
     * labeled alternative in `MySqlParser.userAuthOption`.
     * @param ctx the parse tree
     */
    exitHashAuthOption?: (ctx: HashAuthOptionContext) => void;
    /**
     * Enter a parse tree produced by the `randomAuthOption`
     * labeled alternative in `MySqlParser.userAuthOption`.
     * @param ctx the parse tree
     */
    enterRandomAuthOption?: (ctx: RandomAuthOptionContext) => void;
    /**
     * Exit a parse tree produced by the `randomAuthOption`
     * labeled alternative in `MySqlParser.userAuthOption`.
     * @param ctx the parse tree
     */
    exitRandomAuthOption?: (ctx: RandomAuthOptionContext) => void;
    /**
     * Enter a parse tree produced by the `stringAuthOption`
     * labeled alternative in `MySqlParser.userAuthOption`.
     * @param ctx the parse tree
     */
    enterStringAuthOption?: (ctx: StringAuthOptionContext) => void;
    /**
     * Exit a parse tree produced by the `stringAuthOption`
     * labeled alternative in `MySqlParser.userAuthOption`.
     * @param ctx the parse tree
     */
    exitStringAuthOption?: (ctx: StringAuthOptionContext) => void;
    /**
     * Enter a parse tree produced by the `moduleAuthOption`
     * labeled alternative in `MySqlParser.userAuthOption`.
     * @param ctx the parse tree
     */
    enterModuleAuthOption?: (ctx: ModuleAuthOptionContext) => void;
    /**
     * Exit a parse tree produced by the `moduleAuthOption`
     * labeled alternative in `MySqlParser.userAuthOption`.
     * @param ctx the parse tree
     */
    exitModuleAuthOption?: (ctx: ModuleAuthOptionContext) => void;
    /**
     * Enter a parse tree produced by the `simpleAuthOption`
     * labeled alternative in `MySqlParser.userAuthOption`.
     * @param ctx the parse tree
     */
    enterSimpleAuthOption?: (ctx: SimpleAuthOptionContext) => void;
    /**
     * Exit a parse tree produced by the `simpleAuthOption`
     * labeled alternative in `MySqlParser.userAuthOption`.
     * @param ctx the parse tree
     */
    exitSimpleAuthOption?: (ctx: SimpleAuthOptionContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.authOptionClause`.
     * @param ctx the parse tree
     */
    enterAuthOptionClause?: (ctx: AuthOptionClauseContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.authOptionClause`.
     * @param ctx the parse tree
     */
    exitAuthOptionClause?: (ctx: AuthOptionClauseContext) => void;
    /**
     * Enter a parse tree produced by the `module`
     * labeled alternative in `MySqlParser.authenticationRule`.
     * @param ctx the parse tree
     */
    enterModule?: (ctx: ModuleContext) => void;
    /**
     * Exit a parse tree produced by the `module`
     * labeled alternative in `MySqlParser.authenticationRule`.
     * @param ctx the parse tree
     */
    exitModule?: (ctx: ModuleContext) => void;
    /**
     * Enter a parse tree produced by the `passwordModuleOption`
     * labeled alternative in `MySqlParser.authenticationRule`.
     * @param ctx the parse tree
     */
    enterPasswordModuleOption?: (ctx: PasswordModuleOptionContext) => void;
    /**
     * Exit a parse tree produced by the `passwordModuleOption`
     * labeled alternative in `MySqlParser.authenticationRule`.
     * @param ctx the parse tree
     */
    exitPasswordModuleOption?: (ctx: PasswordModuleOptionContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.tlsOption`.
     * @param ctx the parse tree
     */
    enterTlsOption?: (ctx: TlsOptionContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.tlsOption`.
     * @param ctx the parse tree
     */
    exitTlsOption?: (ctx: TlsOptionContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.userResourceOption`.
     * @param ctx the parse tree
     */
    enterUserResourceOption?: (ctx: UserResourceOptionContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.userResourceOption`.
     * @param ctx the parse tree
     */
    exitUserResourceOption?: (ctx: UserResourceOptionContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.userPasswordOption`.
     * @param ctx the parse tree
     */
    enterUserPasswordOption?: (ctx: UserPasswordOptionContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.userPasswordOption`.
     * @param ctx the parse tree
     */
    exitUserPasswordOption?: (ctx: UserPasswordOptionContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.userLockOption`.
     * @param ctx the parse tree
     */
    enterUserLockOption?: (ctx: UserLockOptionContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.userLockOption`.
     * @param ctx the parse tree
     */
    exitUserLockOption?: (ctx: UserLockOptionContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.privelegeClause`.
     * @param ctx the parse tree
     */
    enterPrivelegeClause?: (ctx: PrivelegeClauseContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.privelegeClause`.
     * @param ctx the parse tree
     */
    exitPrivelegeClause?: (ctx: PrivelegeClauseContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.privilege`.
     * @param ctx the parse tree
     */
    enterPrivilege?: (ctx: PrivilegeContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.privilege`.
     * @param ctx the parse tree
     */
    exitPrivilege?: (ctx: PrivilegeContext) => void;
    /**
     * Enter a parse tree produced by the `currentSchemaPriviLevel`
     * labeled alternative in `MySqlParser.privilegeLevel`.
     * @param ctx the parse tree
     */
    enterCurrentSchemaPriviLevel?: (ctx: CurrentSchemaPriviLevelContext) => void;
    /**
     * Exit a parse tree produced by the `currentSchemaPriviLevel`
     * labeled alternative in `MySqlParser.privilegeLevel`.
     * @param ctx the parse tree
     */
    exitCurrentSchemaPriviLevel?: (ctx: CurrentSchemaPriviLevelContext) => void;
    /**
     * Enter a parse tree produced by the `globalPrivLevel`
     * labeled alternative in `MySqlParser.privilegeLevel`.
     * @param ctx the parse tree
     */
    enterGlobalPrivLevel?: (ctx: GlobalPrivLevelContext) => void;
    /**
     * Exit a parse tree produced by the `globalPrivLevel`
     * labeled alternative in `MySqlParser.privilegeLevel`.
     * @param ctx the parse tree
     */
    exitGlobalPrivLevel?: (ctx: GlobalPrivLevelContext) => void;
    /**
     * Enter a parse tree produced by the `definiteSchemaPrivLevel`
     * labeled alternative in `MySqlParser.privilegeLevel`.
     * @param ctx the parse tree
     */
    enterDefiniteSchemaPrivLevel?: (ctx: DefiniteSchemaPrivLevelContext) => void;
    /**
     * Exit a parse tree produced by the `definiteSchemaPrivLevel`
     * labeled alternative in `MySqlParser.privilegeLevel`.
     * @param ctx the parse tree
     */
    exitDefiniteSchemaPrivLevel?: (ctx: DefiniteSchemaPrivLevelContext) => void;
    /**
     * Enter a parse tree produced by the `definiteFullTablePrivLevel`
     * labeled alternative in `MySqlParser.privilegeLevel`.
     * @param ctx the parse tree
     */
    enterDefiniteFullTablePrivLevel?: (ctx: DefiniteFullTablePrivLevelContext) => void;
    /**
     * Exit a parse tree produced by the `definiteFullTablePrivLevel`
     * labeled alternative in `MySqlParser.privilegeLevel`.
     * @param ctx the parse tree
     */
    exitDefiniteFullTablePrivLevel?: (ctx: DefiniteFullTablePrivLevelContext) => void;
    /**
     * Enter a parse tree produced by the `definiteFullTablePrivLevel2`
     * labeled alternative in `MySqlParser.privilegeLevel`.
     * @param ctx the parse tree
     */
    enterDefiniteFullTablePrivLevel2?: (ctx: DefiniteFullTablePrivLevel2Context) => void;
    /**
     * Exit a parse tree produced by the `definiteFullTablePrivLevel2`
     * labeled alternative in `MySqlParser.privilegeLevel`.
     * @param ctx the parse tree
     */
    exitDefiniteFullTablePrivLevel2?: (ctx: DefiniteFullTablePrivLevel2Context) => void;
    /**
     * Enter a parse tree produced by the `definiteTablePrivLevel`
     * labeled alternative in `MySqlParser.privilegeLevel`.
     * @param ctx the parse tree
     */
    enterDefiniteTablePrivLevel?: (ctx: DefiniteTablePrivLevelContext) => void;
    /**
     * Exit a parse tree produced by the `definiteTablePrivLevel`
     * labeled alternative in `MySqlParser.privilegeLevel`.
     * @param ctx the parse tree
     */
    exitDefiniteTablePrivLevel?: (ctx: DefiniteTablePrivLevelContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.renameUserClause`.
     * @param ctx the parse tree
     */
    enterRenameUserClause?: (ctx: RenameUserClauseContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.renameUserClause`.
     * @param ctx the parse tree
     */
    exitRenameUserClause?: (ctx: RenameUserClauseContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.analyzeTable`.
     * @param ctx the parse tree
     */
    enterAnalyzeTable?: (ctx: AnalyzeTableContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.analyzeTable`.
     * @param ctx the parse tree
     */
    exitAnalyzeTable?: (ctx: AnalyzeTableContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.checkTable`.
     * @param ctx the parse tree
     */
    enterCheckTable?: (ctx: CheckTableContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.checkTable`.
     * @param ctx the parse tree
     */
    exitCheckTable?: (ctx: CheckTableContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.checksumTable`.
     * @param ctx the parse tree
     */
    enterChecksumTable?: (ctx: ChecksumTableContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.checksumTable`.
     * @param ctx the parse tree
     */
    exitChecksumTable?: (ctx: ChecksumTableContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.optimizeTable`.
     * @param ctx the parse tree
     */
    enterOptimizeTable?: (ctx: OptimizeTableContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.optimizeTable`.
     * @param ctx the parse tree
     */
    exitOptimizeTable?: (ctx: OptimizeTableContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.repairTable`.
     * @param ctx the parse tree
     */
    enterRepairTable?: (ctx: RepairTableContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.repairTable`.
     * @param ctx the parse tree
     */
    exitRepairTable?: (ctx: RepairTableContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.checkTableOption`.
     * @param ctx the parse tree
     */
    enterCheckTableOption?: (ctx: CheckTableOptionContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.checkTableOption`.
     * @param ctx the parse tree
     */
    exitCheckTableOption?: (ctx: CheckTableOptionContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.createUdfunction`.
     * @param ctx the parse tree
     */
    enterCreateUdfunction?: (ctx: CreateUdfunctionContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.createUdfunction`.
     * @param ctx the parse tree
     */
    exitCreateUdfunction?: (ctx: CreateUdfunctionContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.installPlugin`.
     * @param ctx the parse tree
     */
    enterInstallPlugin?: (ctx: InstallPluginContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.installPlugin`.
     * @param ctx the parse tree
     */
    exitInstallPlugin?: (ctx: InstallPluginContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.uninstallPlugin`.
     * @param ctx the parse tree
     */
    enterUninstallPlugin?: (ctx: UninstallPluginContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.uninstallPlugin`.
     * @param ctx the parse tree
     */
    exitUninstallPlugin?: (ctx: UninstallPluginContext) => void;
    /**
     * Enter a parse tree produced by the `setVariable`
     * labeled alternative in `MySqlParser.setStatement`.
     * @param ctx the parse tree
     */
    enterSetVariable?: (ctx: SetVariableContext) => void;
    /**
     * Exit a parse tree produced by the `setVariable`
     * labeled alternative in `MySqlParser.setStatement`.
     * @param ctx the parse tree
     */
    exitSetVariable?: (ctx: SetVariableContext) => void;
    /**
     * Enter a parse tree produced by the `setCharset`
     * labeled alternative in `MySqlParser.setStatement`.
     * @param ctx the parse tree
     */
    enterSetCharset?: (ctx: SetCharsetContext) => void;
    /**
     * Exit a parse tree produced by the `setCharset`
     * labeled alternative in `MySqlParser.setStatement`.
     * @param ctx the parse tree
     */
    exitSetCharset?: (ctx: SetCharsetContext) => void;
    /**
     * Enter a parse tree produced by the `setNames`
     * labeled alternative in `MySqlParser.setStatement`.
     * @param ctx the parse tree
     */
    enterSetNames?: (ctx: SetNamesContext) => void;
    /**
     * Exit a parse tree produced by the `setNames`
     * labeled alternative in `MySqlParser.setStatement`.
     * @param ctx the parse tree
     */
    exitSetNames?: (ctx: SetNamesContext) => void;
    /**
     * Enter a parse tree produced by the `setPassword`
     * labeled alternative in `MySqlParser.setStatement`.
     * @param ctx the parse tree
     */
    enterSetPassword?: (ctx: SetPasswordContext) => void;
    /**
     * Exit a parse tree produced by the `setPassword`
     * labeled alternative in `MySqlParser.setStatement`.
     * @param ctx the parse tree
     */
    exitSetPassword?: (ctx: SetPasswordContext) => void;
    /**
     * Enter a parse tree produced by the `setTransaction`
     * labeled alternative in `MySqlParser.setStatement`.
     * @param ctx the parse tree
     */
    enterSetTransaction?: (ctx: SetTransactionContext) => void;
    /**
     * Exit a parse tree produced by the `setTransaction`
     * labeled alternative in `MySqlParser.setStatement`.
     * @param ctx the parse tree
     */
    exitSetTransaction?: (ctx: SetTransactionContext) => void;
    /**
     * Enter a parse tree produced by the `setAutocommit`
     * labeled alternative in `MySqlParser.setStatement`.
     * @param ctx the parse tree
     */
    enterSetAutocommit?: (ctx: SetAutocommitContext) => void;
    /**
     * Exit a parse tree produced by the `setAutocommit`
     * labeled alternative in `MySqlParser.setStatement`.
     * @param ctx the parse tree
     */
    exitSetAutocommit?: (ctx: SetAutocommitContext) => void;
    /**
     * Enter a parse tree produced by the `setNewValueInsideTrigger`
     * labeled alternative in `MySqlParser.setStatement`.
     * @param ctx the parse tree
     */
    enterSetNewValueInsideTrigger?: (ctx: SetNewValueInsideTriggerContext) => void;
    /**
     * Exit a parse tree produced by the `setNewValueInsideTrigger`
     * labeled alternative in `MySqlParser.setStatement`.
     * @param ctx the parse tree
     */
    exitSetNewValueInsideTrigger?: (ctx: SetNewValueInsideTriggerContext) => void;
    /**
     * Enter a parse tree produced by the `showMasterLogs`
     * labeled alternative in `MySqlParser.showStatement`.
     * @param ctx the parse tree
     */
    enterShowMasterLogs?: (ctx: ShowMasterLogsContext) => void;
    /**
     * Exit a parse tree produced by the `showMasterLogs`
     * labeled alternative in `MySqlParser.showStatement`.
     * @param ctx the parse tree
     */
    exitShowMasterLogs?: (ctx: ShowMasterLogsContext) => void;
    /**
     * Enter a parse tree produced by the `showLogEvents`
     * labeled alternative in `MySqlParser.showStatement`.
     * @param ctx the parse tree
     */
    enterShowLogEvents?: (ctx: ShowLogEventsContext) => void;
    /**
     * Exit a parse tree produced by the `showLogEvents`
     * labeled alternative in `MySqlParser.showStatement`.
     * @param ctx the parse tree
     */
    exitShowLogEvents?: (ctx: ShowLogEventsContext) => void;
    /**
     * Enter a parse tree produced by the `showObjectFilter`
     * labeled alternative in `MySqlParser.showStatement`.
     * @param ctx the parse tree
     */
    enterShowObjectFilter?: (ctx: ShowObjectFilterContext) => void;
    /**
     * Exit a parse tree produced by the `showObjectFilter`
     * labeled alternative in `MySqlParser.showStatement`.
     * @param ctx the parse tree
     */
    exitShowObjectFilter?: (ctx: ShowObjectFilterContext) => void;
    /**
     * Enter a parse tree produced by the `showColumns`
     * labeled alternative in `MySqlParser.showStatement`.
     * @param ctx the parse tree
     */
    enterShowColumns?: (ctx: ShowColumnsContext) => void;
    /**
     * Exit a parse tree produced by the `showColumns`
     * labeled alternative in `MySqlParser.showStatement`.
     * @param ctx the parse tree
     */
    exitShowColumns?: (ctx: ShowColumnsContext) => void;
    /**
     * Enter a parse tree produced by the `showCreateDb`
     * labeled alternative in `MySqlParser.showStatement`.
     * @param ctx the parse tree
     */
    enterShowCreateDb?: (ctx: ShowCreateDbContext) => void;
    /**
     * Exit a parse tree produced by the `showCreateDb`
     * labeled alternative in `MySqlParser.showStatement`.
     * @param ctx the parse tree
     */
    exitShowCreateDb?: (ctx: ShowCreateDbContext) => void;
    /**
     * Enter a parse tree produced by the `showCreateFullIdObject`
     * labeled alternative in `MySqlParser.showStatement`.
     * @param ctx the parse tree
     */
    enterShowCreateFullIdObject?: (ctx: ShowCreateFullIdObjectContext) => void;
    /**
     * Exit a parse tree produced by the `showCreateFullIdObject`
     * labeled alternative in `MySqlParser.showStatement`.
     * @param ctx the parse tree
     */
    exitShowCreateFullIdObject?: (ctx: ShowCreateFullIdObjectContext) => void;
    /**
     * Enter a parse tree produced by the `showCreateUser`
     * labeled alternative in `MySqlParser.showStatement`.
     * @param ctx the parse tree
     */
    enterShowCreateUser?: (ctx: ShowCreateUserContext) => void;
    /**
     * Exit a parse tree produced by the `showCreateUser`
     * labeled alternative in `MySqlParser.showStatement`.
     * @param ctx the parse tree
     */
    exitShowCreateUser?: (ctx: ShowCreateUserContext) => void;
    /**
     * Enter a parse tree produced by the `showEngine`
     * labeled alternative in `MySqlParser.showStatement`.
     * @param ctx the parse tree
     */
    enterShowEngine?: (ctx: ShowEngineContext) => void;
    /**
     * Exit a parse tree produced by the `showEngine`
     * labeled alternative in `MySqlParser.showStatement`.
     * @param ctx the parse tree
     */
    exitShowEngine?: (ctx: ShowEngineContext) => void;
    /**
     * Enter a parse tree produced by the `showGlobalInfo`
     * labeled alternative in `MySqlParser.showStatement`.
     * @param ctx the parse tree
     */
    enterShowGlobalInfo?: (ctx: ShowGlobalInfoContext) => void;
    /**
     * Exit a parse tree produced by the `showGlobalInfo`
     * labeled alternative in `MySqlParser.showStatement`.
     * @param ctx the parse tree
     */
    exitShowGlobalInfo?: (ctx: ShowGlobalInfoContext) => void;
    /**
     * Enter a parse tree produced by the `showErrors`
     * labeled alternative in `MySqlParser.showStatement`.
     * @param ctx the parse tree
     */
    enterShowErrors?: (ctx: ShowErrorsContext) => void;
    /**
     * Exit a parse tree produced by the `showErrors`
     * labeled alternative in `MySqlParser.showStatement`.
     * @param ctx the parse tree
     */
    exitShowErrors?: (ctx: ShowErrorsContext) => void;
    /**
     * Enter a parse tree produced by the `showCountErrors`
     * labeled alternative in `MySqlParser.showStatement`.
     * @param ctx the parse tree
     */
    enterShowCountErrors?: (ctx: ShowCountErrorsContext) => void;
    /**
     * Exit a parse tree produced by the `showCountErrors`
     * labeled alternative in `MySqlParser.showStatement`.
     * @param ctx the parse tree
     */
    exitShowCountErrors?: (ctx: ShowCountErrorsContext) => void;
    /**
     * Enter a parse tree produced by the `showSchemaFilter`
     * labeled alternative in `MySqlParser.showStatement`.
     * @param ctx the parse tree
     */
    enterShowSchemaFilter?: (ctx: ShowSchemaFilterContext) => void;
    /**
     * Exit a parse tree produced by the `showSchemaFilter`
     * labeled alternative in `MySqlParser.showStatement`.
     * @param ctx the parse tree
     */
    exitShowSchemaFilter?: (ctx: ShowSchemaFilterContext) => void;
    /**
     * Enter a parse tree produced by the `showRoutine`
     * labeled alternative in `MySqlParser.showStatement`.
     * @param ctx the parse tree
     */
    enterShowRoutine?: (ctx: ShowRoutineContext) => void;
    /**
     * Exit a parse tree produced by the `showRoutine`
     * labeled alternative in `MySqlParser.showStatement`.
     * @param ctx the parse tree
     */
    exitShowRoutine?: (ctx: ShowRoutineContext) => void;
    /**
     * Enter a parse tree produced by the `showGrants`
     * labeled alternative in `MySqlParser.showStatement`.
     * @param ctx the parse tree
     */
    enterShowGrants?: (ctx: ShowGrantsContext) => void;
    /**
     * Exit a parse tree produced by the `showGrants`
     * labeled alternative in `MySqlParser.showStatement`.
     * @param ctx the parse tree
     */
    exitShowGrants?: (ctx: ShowGrantsContext) => void;
    /**
     * Enter a parse tree produced by the `showIndexes`
     * labeled alternative in `MySqlParser.showStatement`.
     * @param ctx the parse tree
     */
    enterShowIndexes?: (ctx: ShowIndexesContext) => void;
    /**
     * Exit a parse tree produced by the `showIndexes`
     * labeled alternative in `MySqlParser.showStatement`.
     * @param ctx the parse tree
     */
    exitShowIndexes?: (ctx: ShowIndexesContext) => void;
    /**
     * Enter a parse tree produced by the `showOpenTables`
     * labeled alternative in `MySqlParser.showStatement`.
     * @param ctx the parse tree
     */
    enterShowOpenTables?: (ctx: ShowOpenTablesContext) => void;
    /**
     * Exit a parse tree produced by the `showOpenTables`
     * labeled alternative in `MySqlParser.showStatement`.
     * @param ctx the parse tree
     */
    exitShowOpenTables?: (ctx: ShowOpenTablesContext) => void;
    /**
     * Enter a parse tree produced by the `showProfile`
     * labeled alternative in `MySqlParser.showStatement`.
     * @param ctx the parse tree
     */
    enterShowProfile?: (ctx: ShowProfileContext) => void;
    /**
     * Exit a parse tree produced by the `showProfile`
     * labeled alternative in `MySqlParser.showStatement`.
     * @param ctx the parse tree
     */
    exitShowProfile?: (ctx: ShowProfileContext) => void;
    /**
     * Enter a parse tree produced by the `showSlaveStatus`
     * labeled alternative in `MySqlParser.showStatement`.
     * @param ctx the parse tree
     */
    enterShowSlaveStatus?: (ctx: ShowSlaveStatusContext) => void;
    /**
     * Exit a parse tree produced by the `showSlaveStatus`
     * labeled alternative in `MySqlParser.showStatement`.
     * @param ctx the parse tree
     */
    exitShowSlaveStatus?: (ctx: ShowSlaveStatusContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.variableClause`.
     * @param ctx the parse tree
     */
    enterVariableClause?: (ctx: VariableClauseContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.variableClause`.
     * @param ctx the parse tree
     */
    exitVariableClause?: (ctx: VariableClauseContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.showCommonEntity`.
     * @param ctx the parse tree
     */
    enterShowCommonEntity?: (ctx: ShowCommonEntityContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.showCommonEntity`.
     * @param ctx the parse tree
     */
    exitShowCommonEntity?: (ctx: ShowCommonEntityContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.showFilter`.
     * @param ctx the parse tree
     */
    enterShowFilter?: (ctx: ShowFilterContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.showFilter`.
     * @param ctx the parse tree
     */
    exitShowFilter?: (ctx: ShowFilterContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.showGlobalInfoClause`.
     * @param ctx the parse tree
     */
    enterShowGlobalInfoClause?: (ctx: ShowGlobalInfoClauseContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.showGlobalInfoClause`.
     * @param ctx the parse tree
     */
    exitShowGlobalInfoClause?: (ctx: ShowGlobalInfoClauseContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.showSchemaEntity`.
     * @param ctx the parse tree
     */
    enterShowSchemaEntity?: (ctx: ShowSchemaEntityContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.showSchemaEntity`.
     * @param ctx the parse tree
     */
    exitShowSchemaEntity?: (ctx: ShowSchemaEntityContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.showProfileType`.
     * @param ctx the parse tree
     */
    enterShowProfileType?: (ctx: ShowProfileTypeContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.showProfileType`.
     * @param ctx the parse tree
     */
    exitShowProfileType?: (ctx: ShowProfileTypeContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.binlogStatement`.
     * @param ctx the parse tree
     */
    enterBinlogStatement?: (ctx: BinlogStatementContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.binlogStatement`.
     * @param ctx the parse tree
     */
    exitBinlogStatement?: (ctx: BinlogStatementContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.cacheIndexStatement`.
     * @param ctx the parse tree
     */
    enterCacheIndexStatement?: (ctx: CacheIndexStatementContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.cacheIndexStatement`.
     * @param ctx the parse tree
     */
    exitCacheIndexStatement?: (ctx: CacheIndexStatementContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.flushStatement`.
     * @param ctx the parse tree
     */
    enterFlushStatement?: (ctx: FlushStatementContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.flushStatement`.
     * @param ctx the parse tree
     */
    exitFlushStatement?: (ctx: FlushStatementContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.killStatement`.
     * @param ctx the parse tree
     */
    enterKillStatement?: (ctx: KillStatementContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.killStatement`.
     * @param ctx the parse tree
     */
    exitKillStatement?: (ctx: KillStatementContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.loadIndexIntoCache`.
     * @param ctx the parse tree
     */
    enterLoadIndexIntoCache?: (ctx: LoadIndexIntoCacheContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.loadIndexIntoCache`.
     * @param ctx the parse tree
     */
    exitLoadIndexIntoCache?: (ctx: LoadIndexIntoCacheContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.resetStatement`.
     * @param ctx the parse tree
     */
    enterResetStatement?: (ctx: ResetStatementContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.resetStatement`.
     * @param ctx the parse tree
     */
    exitResetStatement?: (ctx: ResetStatementContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.shutdownStatement`.
     * @param ctx the parse tree
     */
    enterShutdownStatement?: (ctx: ShutdownStatementContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.shutdownStatement`.
     * @param ctx the parse tree
     */
    exitShutdownStatement?: (ctx: ShutdownStatementContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.tableIndexes`.
     * @param ctx the parse tree
     */
    enterTableIndexes?: (ctx: TableIndexesContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.tableIndexes`.
     * @param ctx the parse tree
     */
    exitTableIndexes?: (ctx: TableIndexesContext) => void;
    /**
     * Enter a parse tree produced by the `simpleFlushOption`
     * labeled alternative in `MySqlParser.flushOption`.
     * @param ctx the parse tree
     */
    enterSimpleFlushOption?: (ctx: SimpleFlushOptionContext) => void;
    /**
     * Exit a parse tree produced by the `simpleFlushOption`
     * labeled alternative in `MySqlParser.flushOption`.
     * @param ctx the parse tree
     */
    exitSimpleFlushOption?: (ctx: SimpleFlushOptionContext) => void;
    /**
     * Enter a parse tree produced by the `channelFlushOption`
     * labeled alternative in `MySqlParser.flushOption`.
     * @param ctx the parse tree
     */
    enterChannelFlushOption?: (ctx: ChannelFlushOptionContext) => void;
    /**
     * Exit a parse tree produced by the `channelFlushOption`
     * labeled alternative in `MySqlParser.flushOption`.
     * @param ctx the parse tree
     */
    exitChannelFlushOption?: (ctx: ChannelFlushOptionContext) => void;
    /**
     * Enter a parse tree produced by the `tableFlushOption`
     * labeled alternative in `MySqlParser.flushOption`.
     * @param ctx the parse tree
     */
    enterTableFlushOption?: (ctx: TableFlushOptionContext) => void;
    /**
     * Exit a parse tree produced by the `tableFlushOption`
     * labeled alternative in `MySqlParser.flushOption`.
     * @param ctx the parse tree
     */
    exitTableFlushOption?: (ctx: TableFlushOptionContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.flushTableOption`.
     * @param ctx the parse tree
     */
    enterFlushTableOption?: (ctx: FlushTableOptionContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.flushTableOption`.
     * @param ctx the parse tree
     */
    exitFlushTableOption?: (ctx: FlushTableOptionContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.loadedTableIndexes`.
     * @param ctx the parse tree
     */
    enterLoadedTableIndexes?: (ctx: LoadedTableIndexesContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.loadedTableIndexes`.
     * @param ctx the parse tree
     */
    exitLoadedTableIndexes?: (ctx: LoadedTableIndexesContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.simpleDescribeStatement`.
     * @param ctx the parse tree
     */
    enterSimpleDescribeStatement?: (ctx: SimpleDescribeStatementContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.simpleDescribeStatement`.
     * @param ctx the parse tree
     */
    exitSimpleDescribeStatement?: (ctx: SimpleDescribeStatementContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.fullDescribeStatement`.
     * @param ctx the parse tree
     */
    enterFullDescribeStatement?: (ctx: FullDescribeStatementContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.fullDescribeStatement`.
     * @param ctx the parse tree
     */
    exitFullDescribeStatement?: (ctx: FullDescribeStatementContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.helpStatement`.
     * @param ctx the parse tree
     */
    enterHelpStatement?: (ctx: HelpStatementContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.helpStatement`.
     * @param ctx the parse tree
     */
    exitHelpStatement?: (ctx: HelpStatementContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.useStatement`.
     * @param ctx the parse tree
     */
    enterUseStatement?: (ctx: UseStatementContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.useStatement`.
     * @param ctx the parse tree
     */
    exitUseStatement?: (ctx: UseStatementContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.signalStatement`.
     * @param ctx the parse tree
     */
    enterSignalStatement?: (ctx: SignalStatementContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.signalStatement`.
     * @param ctx the parse tree
     */
    exitSignalStatement?: (ctx: SignalStatementContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.resignalStatement`.
     * @param ctx the parse tree
     */
    enterResignalStatement?: (ctx: ResignalStatementContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.resignalStatement`.
     * @param ctx the parse tree
     */
    exitResignalStatement?: (ctx: ResignalStatementContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.signalConditionInformation`.
     * @param ctx the parse tree
     */
    enterSignalConditionInformation?: (ctx: SignalConditionInformationContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.signalConditionInformation`.
     * @param ctx the parse tree
     */
    exitSignalConditionInformation?: (ctx: SignalConditionInformationContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.withStatement`.
     * @param ctx the parse tree
     */
    enterWithStatement?: (ctx: WithStatementContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.withStatement`.
     * @param ctx the parse tree
     */
    exitWithStatement?: (ctx: WithStatementContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.tableStatement`.
     * @param ctx the parse tree
     */
    enterTableStatement?: (ctx: TableStatementContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.tableStatement`.
     * @param ctx the parse tree
     */
    exitTableStatement?: (ctx: TableStatementContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.diagnosticsStatement`.
     * @param ctx the parse tree
     */
    enterDiagnosticsStatement?: (ctx: DiagnosticsStatementContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.diagnosticsStatement`.
     * @param ctx the parse tree
     */
    exitDiagnosticsStatement?: (ctx: DiagnosticsStatementContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.diagnosticsConditionInformationName`.
     * @param ctx the parse tree
     */
    enterDiagnosticsConditionInformationName?: (ctx: DiagnosticsConditionInformationNameContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.diagnosticsConditionInformationName`.
     * @param ctx the parse tree
     */
    exitDiagnosticsConditionInformationName?: (ctx: DiagnosticsConditionInformationNameContext) => void;
    /**
     * Enter a parse tree produced by the `describeStatements`
     * labeled alternative in `MySqlParser.describeObjectClause`.
     * @param ctx the parse tree
     */
    enterDescribeStatements?: (ctx: DescribeStatementsContext) => void;
    /**
     * Exit a parse tree produced by the `describeStatements`
     * labeled alternative in `MySqlParser.describeObjectClause`.
     * @param ctx the parse tree
     */
    exitDescribeStatements?: (ctx: DescribeStatementsContext) => void;
    /**
     * Enter a parse tree produced by the `describeConnection`
     * labeled alternative in `MySqlParser.describeObjectClause`.
     * @param ctx the parse tree
     */
    enterDescribeConnection?: (ctx: DescribeConnectionContext) => void;
    /**
     * Exit a parse tree produced by the `describeConnection`
     * labeled alternative in `MySqlParser.describeObjectClause`.
     * @param ctx the parse tree
     */
    exitDescribeConnection?: (ctx: DescribeConnectionContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.fullId`.
     * @param ctx the parse tree
     */
    enterFullId?: (ctx: FullIdContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.fullId`.
     * @param ctx the parse tree
     */
    exitFullId?: (ctx: FullIdContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.tableName`.
     * @param ctx the parse tree
     */
    enterTableName?: (ctx: TableNameContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.tableName`.
     * @param ctx the parse tree
     */
    exitTableName?: (ctx: TableNameContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.roleName`.
     * @param ctx the parse tree
     */
    enterRoleName?: (ctx: RoleNameContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.roleName`.
     * @param ctx the parse tree
     */
    exitRoleName?: (ctx: RoleNameContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.fullColumnName`.
     * @param ctx the parse tree
     */
    enterFullColumnName?: (ctx: FullColumnNameContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.fullColumnName`.
     * @param ctx the parse tree
     */
    exitFullColumnName?: (ctx: FullColumnNameContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.indexColumnName`.
     * @param ctx the parse tree
     */
    enterIndexColumnName?: (ctx: IndexColumnNameContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.indexColumnName`.
     * @param ctx the parse tree
     */
    exitIndexColumnName?: (ctx: IndexColumnNameContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.simpleUserName`.
     * @param ctx the parse tree
     */
    enterSimpleUserName?: (ctx: SimpleUserNameContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.simpleUserName`.
     * @param ctx the parse tree
     */
    exitSimpleUserName?: (ctx: SimpleUserNameContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.hostName`.
     * @param ctx the parse tree
     */
    enterHostName?: (ctx: HostNameContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.hostName`.
     * @param ctx the parse tree
     */
    exitHostName?: (ctx: HostNameContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.userName`.
     * @param ctx the parse tree
     */
    enterUserName?: (ctx: UserNameContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.userName`.
     * @param ctx the parse tree
     */
    exitUserName?: (ctx: UserNameContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.mysqlVariable`.
     * @param ctx the parse tree
     */
    enterMysqlVariable?: (ctx: MysqlVariableContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.mysqlVariable`.
     * @param ctx the parse tree
     */
    exitMysqlVariable?: (ctx: MysqlVariableContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.charsetName`.
     * @param ctx the parse tree
     */
    enterCharsetName?: (ctx: CharsetNameContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.charsetName`.
     * @param ctx the parse tree
     */
    exitCharsetName?: (ctx: CharsetNameContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.collationName`.
     * @param ctx the parse tree
     */
    enterCollationName?: (ctx: CollationNameContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.collationName`.
     * @param ctx the parse tree
     */
    exitCollationName?: (ctx: CollationNameContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.engineName`.
     * @param ctx the parse tree
     */
    enterEngineName?: (ctx: EngineNameContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.engineName`.
     * @param ctx the parse tree
     */
    exitEngineName?: (ctx: EngineNameContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.engineNameBase`.
     * @param ctx the parse tree
     */
    enterEngineNameBase?: (ctx: EngineNameBaseContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.engineNameBase`.
     * @param ctx the parse tree
     */
    exitEngineNameBase?: (ctx: EngineNameBaseContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.uuidSet`.
     * @param ctx the parse tree
     */
    enterUuidSet?: (ctx: UuidSetContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.uuidSet`.
     * @param ctx the parse tree
     */
    exitUuidSet?: (ctx: UuidSetContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.xid`.
     * @param ctx the parse tree
     */
    enterXid?: (ctx: XidContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.xid`.
     * @param ctx the parse tree
     */
    exitXid?: (ctx: XidContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.xuidStringId`.
     * @param ctx the parse tree
     */
    enterXuidStringId?: (ctx: XuidStringIdContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.xuidStringId`.
     * @param ctx the parse tree
     */
    exitXuidStringId?: (ctx: XuidStringIdContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.authPlugin`.
     * @param ctx the parse tree
     */
    enterAuthPlugin?: (ctx: AuthPluginContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.authPlugin`.
     * @param ctx the parse tree
     */
    exitAuthPlugin?: (ctx: AuthPluginContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.uid`.
     * @param ctx the parse tree
     */
    enterUid?: (ctx: UidContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.uid`.
     * @param ctx the parse tree
     */
    exitUid?: (ctx: UidContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.simpleId`.
     * @param ctx the parse tree
     */
    enterSimpleId?: (ctx: SimpleIdContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.simpleId`.
     * @param ctx the parse tree
     */
    exitSimpleId?: (ctx: SimpleIdContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.dottedId`.
     * @param ctx the parse tree
     */
    enterDottedId?: (ctx: DottedIdContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.dottedId`.
     * @param ctx the parse tree
     */
    exitDottedId?: (ctx: DottedIdContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.decimalLiteral`.
     * @param ctx the parse tree
     */
    enterDecimalLiteral?: (ctx: DecimalLiteralContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.decimalLiteral`.
     * @param ctx the parse tree
     */
    exitDecimalLiteral?: (ctx: DecimalLiteralContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.fileSizeLiteral`.
     * @param ctx the parse tree
     */
    enterFileSizeLiteral?: (ctx: FileSizeLiteralContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.fileSizeLiteral`.
     * @param ctx the parse tree
     */
    exitFileSizeLiteral?: (ctx: FileSizeLiteralContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.stringLiteral`.
     * @param ctx the parse tree
     */
    enterStringLiteral?: (ctx: StringLiteralContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.stringLiteral`.
     * @param ctx the parse tree
     */
    exitStringLiteral?: (ctx: StringLiteralContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.booleanLiteral`.
     * @param ctx the parse tree
     */
    enterBooleanLiteral?: (ctx: BooleanLiteralContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.booleanLiteral`.
     * @param ctx the parse tree
     */
    exitBooleanLiteral?: (ctx: BooleanLiteralContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.hexadecimalLiteral`.
     * @param ctx the parse tree
     */
    enterHexadecimalLiteral?: (ctx: HexadecimalLiteralContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.hexadecimalLiteral`.
     * @param ctx the parse tree
     */
    exitHexadecimalLiteral?: (ctx: HexadecimalLiteralContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.nullNotnull`.
     * @param ctx the parse tree
     */
    enterNullNotnull?: (ctx: NullNotnullContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.nullNotnull`.
     * @param ctx the parse tree
     */
    exitNullNotnull?: (ctx: NullNotnullContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.constant`.
     * @param ctx the parse tree
     */
    enterConstant?: (ctx: ConstantContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.constant`.
     * @param ctx the parse tree
     */
    exitConstant?: (ctx: ConstantContext) => void;
    /**
     * Enter a parse tree produced by the `stringDataType`
     * labeled alternative in `MySqlParser.dataType`.
     * @param ctx the parse tree
     */
    enterStringDataType?: (ctx: StringDataTypeContext) => void;
    /**
     * Exit a parse tree produced by the `stringDataType`
     * labeled alternative in `MySqlParser.dataType`.
     * @param ctx the parse tree
     */
    exitStringDataType?: (ctx: StringDataTypeContext) => void;
    /**
     * Enter a parse tree produced by the `nationalVaryingStringDataType`
     * labeled alternative in `MySqlParser.dataType`.
     * @param ctx the parse tree
     */
    enterNationalVaryingStringDataType?: (ctx: NationalVaryingStringDataTypeContext) => void;
    /**
     * Exit a parse tree produced by the `nationalVaryingStringDataType`
     * labeled alternative in `MySqlParser.dataType`.
     * @param ctx the parse tree
     */
    exitNationalVaryingStringDataType?: (ctx: NationalVaryingStringDataTypeContext) => void;
    /**
     * Enter a parse tree produced by the `nationalStringDataType`
     * labeled alternative in `MySqlParser.dataType`.
     * @param ctx the parse tree
     */
    enterNationalStringDataType?: (ctx: NationalStringDataTypeContext) => void;
    /**
     * Exit a parse tree produced by the `nationalStringDataType`
     * labeled alternative in `MySqlParser.dataType`.
     * @param ctx the parse tree
     */
    exitNationalStringDataType?: (ctx: NationalStringDataTypeContext) => void;
    /**
     * Enter a parse tree produced by the `dimensionDataType`
     * labeled alternative in `MySqlParser.dataType`.
     * @param ctx the parse tree
     */
    enterDimensionDataType?: (ctx: DimensionDataTypeContext) => void;
    /**
     * Exit a parse tree produced by the `dimensionDataType`
     * labeled alternative in `MySqlParser.dataType`.
     * @param ctx the parse tree
     */
    exitDimensionDataType?: (ctx: DimensionDataTypeContext) => void;
    /**
     * Enter a parse tree produced by the `simpleDataType`
     * labeled alternative in `MySqlParser.dataType`.
     * @param ctx the parse tree
     */
    enterSimpleDataType?: (ctx: SimpleDataTypeContext) => void;
    /**
     * Exit a parse tree produced by the `simpleDataType`
     * labeled alternative in `MySqlParser.dataType`.
     * @param ctx the parse tree
     */
    exitSimpleDataType?: (ctx: SimpleDataTypeContext) => void;
    /**
     * Enter a parse tree produced by the `collectionDataType`
     * labeled alternative in `MySqlParser.dataType`.
     * @param ctx the parse tree
     */
    enterCollectionDataType?: (ctx: CollectionDataTypeContext) => void;
    /**
     * Exit a parse tree produced by the `collectionDataType`
     * labeled alternative in `MySqlParser.dataType`.
     * @param ctx the parse tree
     */
    exitCollectionDataType?: (ctx: CollectionDataTypeContext) => void;
    /**
     * Enter a parse tree produced by the `spatialDataType`
     * labeled alternative in `MySqlParser.dataType`.
     * @param ctx the parse tree
     */
    enterSpatialDataType?: (ctx: SpatialDataTypeContext) => void;
    /**
     * Exit a parse tree produced by the `spatialDataType`
     * labeled alternative in `MySqlParser.dataType`.
     * @param ctx the parse tree
     */
    exitSpatialDataType?: (ctx: SpatialDataTypeContext) => void;
    /**
     * Enter a parse tree produced by the `longVarcharDataType`
     * labeled alternative in `MySqlParser.dataType`.
     * @param ctx the parse tree
     */
    enterLongVarcharDataType?: (ctx: LongVarcharDataTypeContext) => void;
    /**
     * Exit a parse tree produced by the `longVarcharDataType`
     * labeled alternative in `MySqlParser.dataType`.
     * @param ctx the parse tree
     */
    exitLongVarcharDataType?: (ctx: LongVarcharDataTypeContext) => void;
    /**
     * Enter a parse tree produced by the `longVarbinaryDataType`
     * labeled alternative in `MySqlParser.dataType`.
     * @param ctx the parse tree
     */
    enterLongVarbinaryDataType?: (ctx: LongVarbinaryDataTypeContext) => void;
    /**
     * Exit a parse tree produced by the `longVarbinaryDataType`
     * labeled alternative in `MySqlParser.dataType`.
     * @param ctx the parse tree
     */
    exitLongVarbinaryDataType?: (ctx: LongVarbinaryDataTypeContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.collectionOptions`.
     * @param ctx the parse tree
     */
    enterCollectionOptions?: (ctx: CollectionOptionsContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.collectionOptions`.
     * @param ctx the parse tree
     */
    exitCollectionOptions?: (ctx: CollectionOptionsContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.convertedDataType`.
     * @param ctx the parse tree
     */
    enterConvertedDataType?: (ctx: ConvertedDataTypeContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.convertedDataType`.
     * @param ctx the parse tree
     */
    exitConvertedDataType?: (ctx: ConvertedDataTypeContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.lengthOneDimension`.
     * @param ctx the parse tree
     */
    enterLengthOneDimension?: (ctx: LengthOneDimensionContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.lengthOneDimension`.
     * @param ctx the parse tree
     */
    exitLengthOneDimension?: (ctx: LengthOneDimensionContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.lengthTwoDimension`.
     * @param ctx the parse tree
     */
    enterLengthTwoDimension?: (ctx: LengthTwoDimensionContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.lengthTwoDimension`.
     * @param ctx the parse tree
     */
    exitLengthTwoDimension?: (ctx: LengthTwoDimensionContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.lengthTwoOptionalDimension`.
     * @param ctx the parse tree
     */
    enterLengthTwoOptionalDimension?: (ctx: LengthTwoOptionalDimensionContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.lengthTwoOptionalDimension`.
     * @param ctx the parse tree
     */
    exitLengthTwoOptionalDimension?: (ctx: LengthTwoOptionalDimensionContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.uidList`.
     * @param ctx the parse tree
     */
    enterUidList?: (ctx: UidListContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.uidList`.
     * @param ctx the parse tree
     */
    exitUidList?: (ctx: UidListContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.fullColumnNameList`.
     * @param ctx the parse tree
     */
    enterFullColumnNameList?: (ctx: FullColumnNameListContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.fullColumnNameList`.
     * @param ctx the parse tree
     */
    exitFullColumnNameList?: (ctx: FullColumnNameListContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.tables`.
     * @param ctx the parse tree
     */
    enterTables?: (ctx: TablesContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.tables`.
     * @param ctx the parse tree
     */
    exitTables?: (ctx: TablesContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.indexColumnNames`.
     * @param ctx the parse tree
     */
    enterIndexColumnNames?: (ctx: IndexColumnNamesContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.indexColumnNames`.
     * @param ctx the parse tree
     */
    exitIndexColumnNames?: (ctx: IndexColumnNamesContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.expressions`.
     * @param ctx the parse tree
     */
    enterExpressions?: (ctx: ExpressionsContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.expressions`.
     * @param ctx the parse tree
     */
    exitExpressions?: (ctx: ExpressionsContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.expressionsWithDefaults`.
     * @param ctx the parse tree
     */
    enterExpressionsWithDefaults?: (ctx: ExpressionsWithDefaultsContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.expressionsWithDefaults`.
     * @param ctx the parse tree
     */
    exitExpressionsWithDefaults?: (ctx: ExpressionsWithDefaultsContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.constants`.
     * @param ctx the parse tree
     */
    enterConstants?: (ctx: ConstantsContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.constants`.
     * @param ctx the parse tree
     */
    exitConstants?: (ctx: ConstantsContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.simpleStrings`.
     * @param ctx the parse tree
     */
    enterSimpleStrings?: (ctx: SimpleStringsContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.simpleStrings`.
     * @param ctx the parse tree
     */
    exitSimpleStrings?: (ctx: SimpleStringsContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.userVariables`.
     * @param ctx the parse tree
     */
    enterUserVariables?: (ctx: UserVariablesContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.userVariables`.
     * @param ctx the parse tree
     */
    exitUserVariables?: (ctx: UserVariablesContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.defaultValue`.
     * @param ctx the parse tree
     */
    enterDefaultValue?: (ctx: DefaultValueContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.defaultValue`.
     * @param ctx the parse tree
     */
    exitDefaultValue?: (ctx: DefaultValueContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.currentTimestamp`.
     * @param ctx the parse tree
     */
    enterCurrentTimestamp?: (ctx: CurrentTimestampContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.currentTimestamp`.
     * @param ctx the parse tree
     */
    exitCurrentTimestamp?: (ctx: CurrentTimestampContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.expressionOrDefault`.
     * @param ctx the parse tree
     */
    enterExpressionOrDefault?: (ctx: ExpressionOrDefaultContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.expressionOrDefault`.
     * @param ctx the parse tree
     */
    exitExpressionOrDefault?: (ctx: ExpressionOrDefaultContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.ifExists`.
     * @param ctx the parse tree
     */
    enterIfExists?: (ctx: IfExistsContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.ifExists`.
     * @param ctx the parse tree
     */
    exitIfExists?: (ctx: IfExistsContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.ifNotExists`.
     * @param ctx the parse tree
     */
    enterIfNotExists?: (ctx: IfNotExistsContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.ifNotExists`.
     * @param ctx the parse tree
     */
    exitIfNotExists?: (ctx: IfNotExistsContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.orReplace`.
     * @param ctx the parse tree
     */
    enterOrReplace?: (ctx: OrReplaceContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.orReplace`.
     * @param ctx the parse tree
     */
    exitOrReplace?: (ctx: OrReplaceContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.waitNowaitClause`.
     * @param ctx the parse tree
     */
    enterWaitNowaitClause?: (ctx: WaitNowaitClauseContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.waitNowaitClause`.
     * @param ctx the parse tree
     */
    exitWaitNowaitClause?: (ctx: WaitNowaitClauseContext) => void;
    /**
     * Enter a parse tree produced by the `specificFunctionCall`
     * labeled alternative in `MySqlParser.functionCall`.
     * @param ctx the parse tree
     */
    enterSpecificFunctionCall?: (ctx: SpecificFunctionCallContext) => void;
    /**
     * Exit a parse tree produced by the `specificFunctionCall`
     * labeled alternative in `MySqlParser.functionCall`.
     * @param ctx the parse tree
     */
    exitSpecificFunctionCall?: (ctx: SpecificFunctionCallContext) => void;
    /**
     * Enter a parse tree produced by the `aggregateFunctionCall`
     * labeled alternative in `MySqlParser.functionCall`.
     * @param ctx the parse tree
     */
    enterAggregateFunctionCall?: (ctx: AggregateFunctionCallContext) => void;
    /**
     * Exit a parse tree produced by the `aggregateFunctionCall`
     * labeled alternative in `MySqlParser.functionCall`.
     * @param ctx the parse tree
     */
    exitAggregateFunctionCall?: (ctx: AggregateFunctionCallContext) => void;
    /**
     * Enter a parse tree produced by the `nonAggregateFunctionCall`
     * labeled alternative in `MySqlParser.functionCall`.
     * @param ctx the parse tree
     */
    enterNonAggregateFunctionCall?: (ctx: NonAggregateFunctionCallContext) => void;
    /**
     * Exit a parse tree produced by the `nonAggregateFunctionCall`
     * labeled alternative in `MySqlParser.functionCall`.
     * @param ctx the parse tree
     */
    exitNonAggregateFunctionCall?: (ctx: NonAggregateFunctionCallContext) => void;
    /**
     * Enter a parse tree produced by the `scalarFunctionCall`
     * labeled alternative in `MySqlParser.functionCall`.
     * @param ctx the parse tree
     */
    enterScalarFunctionCall?: (ctx: ScalarFunctionCallContext) => void;
    /**
     * Exit a parse tree produced by the `scalarFunctionCall`
     * labeled alternative in `MySqlParser.functionCall`.
     * @param ctx the parse tree
     */
    exitScalarFunctionCall?: (ctx: ScalarFunctionCallContext) => void;
    /**
     * Enter a parse tree produced by the `udfFunctionCall`
     * labeled alternative in `MySqlParser.functionCall`.
     * @param ctx the parse tree
     */
    enterUdfFunctionCall?: (ctx: UdfFunctionCallContext) => void;
    /**
     * Exit a parse tree produced by the `udfFunctionCall`
     * labeled alternative in `MySqlParser.functionCall`.
     * @param ctx the parse tree
     */
    exitUdfFunctionCall?: (ctx: UdfFunctionCallContext) => void;
    /**
     * Enter a parse tree produced by the `passwordFunctionCall`
     * labeled alternative in `MySqlParser.functionCall`.
     * @param ctx the parse tree
     */
    enterPasswordFunctionCall?: (ctx: PasswordFunctionCallContext) => void;
    /**
     * Exit a parse tree produced by the `passwordFunctionCall`
     * labeled alternative in `MySqlParser.functionCall`.
     * @param ctx the parse tree
     */
    exitPasswordFunctionCall?: (ctx: PasswordFunctionCallContext) => void;
    /**
     * Enter a parse tree produced by the `simpleFunctionCall`
     * labeled alternative in `MySqlParser.specificFunction`.
     * @param ctx the parse tree
     */
    enterSimpleFunctionCall?: (ctx: SimpleFunctionCallContext) => void;
    /**
     * Exit a parse tree produced by the `simpleFunctionCall`
     * labeled alternative in `MySqlParser.specificFunction`.
     * @param ctx the parse tree
     */
    exitSimpleFunctionCall?: (ctx: SimpleFunctionCallContext) => void;
    /**
     * Enter a parse tree produced by the `currentUser`
     * labeled alternative in `MySqlParser.specificFunction`.
     * @param ctx the parse tree
     */
    enterCurrentUser?: (ctx: CurrentUserContext) => void;
    /**
     * Exit a parse tree produced by the `currentUser`
     * labeled alternative in `MySqlParser.specificFunction`.
     * @param ctx the parse tree
     */
    exitCurrentUser?: (ctx: CurrentUserContext) => void;
    /**
     * Enter a parse tree produced by the `dataTypeFunctionCall`
     * labeled alternative in `MySqlParser.specificFunction`.
     * @param ctx the parse tree
     */
    enterDataTypeFunctionCall?: (ctx: DataTypeFunctionCallContext) => void;
    /**
     * Exit a parse tree produced by the `dataTypeFunctionCall`
     * labeled alternative in `MySqlParser.specificFunction`.
     * @param ctx the parse tree
     */
    exitDataTypeFunctionCall?: (ctx: DataTypeFunctionCallContext) => void;
    /**
     * Enter a parse tree produced by the `valuesFunctionCall`
     * labeled alternative in `MySqlParser.specificFunction`.
     * @param ctx the parse tree
     */
    enterValuesFunctionCall?: (ctx: ValuesFunctionCallContext) => void;
    /**
     * Exit a parse tree produced by the `valuesFunctionCall`
     * labeled alternative in `MySqlParser.specificFunction`.
     * @param ctx the parse tree
     */
    exitValuesFunctionCall?: (ctx: ValuesFunctionCallContext) => void;
    /**
     * Enter a parse tree produced by the `caseExpressionFunctionCall`
     * labeled alternative in `MySqlParser.specificFunction`.
     * @param ctx the parse tree
     */
    enterCaseExpressionFunctionCall?: (ctx: CaseExpressionFunctionCallContext) => void;
    /**
     * Exit a parse tree produced by the `caseExpressionFunctionCall`
     * labeled alternative in `MySqlParser.specificFunction`.
     * @param ctx the parse tree
     */
    exitCaseExpressionFunctionCall?: (ctx: CaseExpressionFunctionCallContext) => void;
    /**
     * Enter a parse tree produced by the `caseFunctionCall`
     * labeled alternative in `MySqlParser.specificFunction`.
     * @param ctx the parse tree
     */
    enterCaseFunctionCall?: (ctx: CaseFunctionCallContext) => void;
    /**
     * Exit a parse tree produced by the `caseFunctionCall`
     * labeled alternative in `MySqlParser.specificFunction`.
     * @param ctx the parse tree
     */
    exitCaseFunctionCall?: (ctx: CaseFunctionCallContext) => void;
    /**
     * Enter a parse tree produced by the `charFunctionCall`
     * labeled alternative in `MySqlParser.specificFunction`.
     * @param ctx the parse tree
     */
    enterCharFunctionCall?: (ctx: CharFunctionCallContext) => void;
    /**
     * Exit a parse tree produced by the `charFunctionCall`
     * labeled alternative in `MySqlParser.specificFunction`.
     * @param ctx the parse tree
     */
    exitCharFunctionCall?: (ctx: CharFunctionCallContext) => void;
    /**
     * Enter a parse tree produced by the `positionFunctionCall`
     * labeled alternative in `MySqlParser.specificFunction`.
     * @param ctx the parse tree
     */
    enterPositionFunctionCall?: (ctx: PositionFunctionCallContext) => void;
    /**
     * Exit a parse tree produced by the `positionFunctionCall`
     * labeled alternative in `MySqlParser.specificFunction`.
     * @param ctx the parse tree
     */
    exitPositionFunctionCall?: (ctx: PositionFunctionCallContext) => void;
    /**
     * Enter a parse tree produced by the `substrFunctionCall`
     * labeled alternative in `MySqlParser.specificFunction`.
     * @param ctx the parse tree
     */
    enterSubstrFunctionCall?: (ctx: SubstrFunctionCallContext) => void;
    /**
     * Exit a parse tree produced by the `substrFunctionCall`
     * labeled alternative in `MySqlParser.specificFunction`.
     * @param ctx the parse tree
     */
    exitSubstrFunctionCall?: (ctx: SubstrFunctionCallContext) => void;
    /**
     * Enter a parse tree produced by the `trimFunctionCall`
     * labeled alternative in `MySqlParser.specificFunction`.
     * @param ctx the parse tree
     */
    enterTrimFunctionCall?: (ctx: TrimFunctionCallContext) => void;
    /**
     * Exit a parse tree produced by the `trimFunctionCall`
     * labeled alternative in `MySqlParser.specificFunction`.
     * @param ctx the parse tree
     */
    exitTrimFunctionCall?: (ctx: TrimFunctionCallContext) => void;
    /**
     * Enter a parse tree produced by the `weightFunctionCall`
     * labeled alternative in `MySqlParser.specificFunction`.
     * @param ctx the parse tree
     */
    enterWeightFunctionCall?: (ctx: WeightFunctionCallContext) => void;
    /**
     * Exit a parse tree produced by the `weightFunctionCall`
     * labeled alternative in `MySqlParser.specificFunction`.
     * @param ctx the parse tree
     */
    exitWeightFunctionCall?: (ctx: WeightFunctionCallContext) => void;
    /**
     * Enter a parse tree produced by the `extractFunctionCall`
     * labeled alternative in `MySqlParser.specificFunction`.
     * @param ctx the parse tree
     */
    enterExtractFunctionCall?: (ctx: ExtractFunctionCallContext) => void;
    /**
     * Exit a parse tree produced by the `extractFunctionCall`
     * labeled alternative in `MySqlParser.specificFunction`.
     * @param ctx the parse tree
     */
    exitExtractFunctionCall?: (ctx: ExtractFunctionCallContext) => void;
    /**
     * Enter a parse tree produced by the `getFormatFunctionCall`
     * labeled alternative in `MySqlParser.specificFunction`.
     * @param ctx the parse tree
     */
    enterGetFormatFunctionCall?: (ctx: GetFormatFunctionCallContext) => void;
    /**
     * Exit a parse tree produced by the `getFormatFunctionCall`
     * labeled alternative in `MySqlParser.specificFunction`.
     * @param ctx the parse tree
     */
    exitGetFormatFunctionCall?: (ctx: GetFormatFunctionCallContext) => void;
    /**
     * Enter a parse tree produced by the `jsonValueFunctionCall`
     * labeled alternative in `MySqlParser.specificFunction`.
     * @param ctx the parse tree
     */
    enterJsonValueFunctionCall?: (ctx: JsonValueFunctionCallContext) => void;
    /**
     * Exit a parse tree produced by the `jsonValueFunctionCall`
     * labeled alternative in `MySqlParser.specificFunction`.
     * @param ctx the parse tree
     */
    exitJsonValueFunctionCall?: (ctx: JsonValueFunctionCallContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.caseFuncAlternative`.
     * @param ctx the parse tree
     */
    enterCaseFuncAlternative?: (ctx: CaseFuncAlternativeContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.caseFuncAlternative`.
     * @param ctx the parse tree
     */
    exitCaseFuncAlternative?: (ctx: CaseFuncAlternativeContext) => void;
    /**
     * Enter a parse tree produced by the `levelWeightList`
     * labeled alternative in `MySqlParser.levelsInWeightString`.
     * @param ctx the parse tree
     */
    enterLevelWeightList?: (ctx: LevelWeightListContext) => void;
    /**
     * Exit a parse tree produced by the `levelWeightList`
     * labeled alternative in `MySqlParser.levelsInWeightString`.
     * @param ctx the parse tree
     */
    exitLevelWeightList?: (ctx: LevelWeightListContext) => void;
    /**
     * Enter a parse tree produced by the `levelWeightRange`
     * labeled alternative in `MySqlParser.levelsInWeightString`.
     * @param ctx the parse tree
     */
    enterLevelWeightRange?: (ctx: LevelWeightRangeContext) => void;
    /**
     * Exit a parse tree produced by the `levelWeightRange`
     * labeled alternative in `MySqlParser.levelsInWeightString`.
     * @param ctx the parse tree
     */
    exitLevelWeightRange?: (ctx: LevelWeightRangeContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.levelInWeightListElement`.
     * @param ctx the parse tree
     */
    enterLevelInWeightListElement?: (ctx: LevelInWeightListElementContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.levelInWeightListElement`.
     * @param ctx the parse tree
     */
    exitLevelInWeightListElement?: (ctx: LevelInWeightListElementContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.aggregateWindowedFunction`.
     * @param ctx the parse tree
     */
    enterAggregateWindowedFunction?: (ctx: AggregateWindowedFunctionContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.aggregateWindowedFunction`.
     * @param ctx the parse tree
     */
    exitAggregateWindowedFunction?: (ctx: AggregateWindowedFunctionContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.nonAggregateWindowedFunction`.
     * @param ctx the parse tree
     */
    enterNonAggregateWindowedFunction?: (ctx: NonAggregateWindowedFunctionContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.nonAggregateWindowedFunction`.
     * @param ctx the parse tree
     */
    exitNonAggregateWindowedFunction?: (ctx: NonAggregateWindowedFunctionContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.overClause`.
     * @param ctx the parse tree
     */
    enterOverClause?: (ctx: OverClauseContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.overClause`.
     * @param ctx the parse tree
     */
    exitOverClause?: (ctx: OverClauseContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.windowSpec`.
     * @param ctx the parse tree
     */
    enterWindowSpec?: (ctx: WindowSpecContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.windowSpec`.
     * @param ctx the parse tree
     */
    exitWindowSpec?: (ctx: WindowSpecContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.windowName`.
     * @param ctx the parse tree
     */
    enterWindowName?: (ctx: WindowNameContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.windowName`.
     * @param ctx the parse tree
     */
    exitWindowName?: (ctx: WindowNameContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.frameClause`.
     * @param ctx the parse tree
     */
    enterFrameClause?: (ctx: FrameClauseContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.frameClause`.
     * @param ctx the parse tree
     */
    exitFrameClause?: (ctx: FrameClauseContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.frameUnits`.
     * @param ctx the parse tree
     */
    enterFrameUnits?: (ctx: FrameUnitsContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.frameUnits`.
     * @param ctx the parse tree
     */
    exitFrameUnits?: (ctx: FrameUnitsContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.frameExtent`.
     * @param ctx the parse tree
     */
    enterFrameExtent?: (ctx: FrameExtentContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.frameExtent`.
     * @param ctx the parse tree
     */
    exitFrameExtent?: (ctx: FrameExtentContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.frameBetween`.
     * @param ctx the parse tree
     */
    enterFrameBetween?: (ctx: FrameBetweenContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.frameBetween`.
     * @param ctx the parse tree
     */
    exitFrameBetween?: (ctx: FrameBetweenContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.frameRange`.
     * @param ctx the parse tree
     */
    enterFrameRange?: (ctx: FrameRangeContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.frameRange`.
     * @param ctx the parse tree
     */
    exitFrameRange?: (ctx: FrameRangeContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.partitionClause`.
     * @param ctx the parse tree
     */
    enterPartitionClause?: (ctx: PartitionClauseContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.partitionClause`.
     * @param ctx the parse tree
     */
    exitPartitionClause?: (ctx: PartitionClauseContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.scalarFunctionName`.
     * @param ctx the parse tree
     */
    enterScalarFunctionName?: (ctx: ScalarFunctionNameContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.scalarFunctionName`.
     * @param ctx the parse tree
     */
    exitScalarFunctionName?: (ctx: ScalarFunctionNameContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.passwordFunctionClause`.
     * @param ctx the parse tree
     */
    enterPasswordFunctionClause?: (ctx: PasswordFunctionClauseContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.passwordFunctionClause`.
     * @param ctx the parse tree
     */
    exitPasswordFunctionClause?: (ctx: PasswordFunctionClauseContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.functionArgs`.
     * @param ctx the parse tree
     */
    enterFunctionArgs?: (ctx: FunctionArgsContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.functionArgs`.
     * @param ctx the parse tree
     */
    exitFunctionArgs?: (ctx: FunctionArgsContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.functionArg`.
     * @param ctx the parse tree
     */
    enterFunctionArg?: (ctx: FunctionArgContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.functionArg`.
     * @param ctx the parse tree
     */
    exitFunctionArg?: (ctx: FunctionArgContext) => void;
    /**
     * Enter a parse tree produced by the `isExpression`
     * labeled alternative in `MySqlParser.expression`.
     * @param ctx the parse tree
     */
    enterIsExpression?: (ctx: IsExpressionContext) => void;
    /**
     * Exit a parse tree produced by the `isExpression`
     * labeled alternative in `MySqlParser.expression`.
     * @param ctx the parse tree
     */
    exitIsExpression?: (ctx: IsExpressionContext) => void;
    /**
     * Enter a parse tree produced by the `notExpression`
     * labeled alternative in `MySqlParser.expression`.
     * @param ctx the parse tree
     */
    enterNotExpression?: (ctx: NotExpressionContext) => void;
    /**
     * Exit a parse tree produced by the `notExpression`
     * labeled alternative in `MySqlParser.expression`.
     * @param ctx the parse tree
     */
    exitNotExpression?: (ctx: NotExpressionContext) => void;
    /**
     * Enter a parse tree produced by the `logicalExpression`
     * labeled alternative in `MySqlParser.expression`.
     * @param ctx the parse tree
     */
    enterLogicalExpression?: (ctx: LogicalExpressionContext) => void;
    /**
     * Exit a parse tree produced by the `logicalExpression`
     * labeled alternative in `MySqlParser.expression`.
     * @param ctx the parse tree
     */
    exitLogicalExpression?: (ctx: LogicalExpressionContext) => void;
    /**
     * Enter a parse tree produced by the `predicateExpression`
     * labeled alternative in `MySqlParser.expression`.
     * @param ctx the parse tree
     */
    enterPredicateExpression?: (ctx: PredicateExpressionContext) => void;
    /**
     * Exit a parse tree produced by the `predicateExpression`
     * labeled alternative in `MySqlParser.expression`.
     * @param ctx the parse tree
     */
    exitPredicateExpression?: (ctx: PredicateExpressionContext) => void;
    /**
     * Enter a parse tree produced by the `soundsLikePredicate`
     * labeled alternative in `MySqlParser.predicate`.
     * @param ctx the parse tree
     */
    enterSoundsLikePredicate?: (ctx: SoundsLikePredicateContext) => void;
    /**
     * Exit a parse tree produced by the `soundsLikePredicate`
     * labeled alternative in `MySqlParser.predicate`.
     * @param ctx the parse tree
     */
    exitSoundsLikePredicate?: (ctx: SoundsLikePredicateContext) => void;
    /**
     * Enter a parse tree produced by the `expressionAtomPredicate`
     * labeled alternative in `MySqlParser.predicate`.
     * @param ctx the parse tree
     */
    enterExpressionAtomPredicate?: (ctx: ExpressionAtomPredicateContext) => void;
    /**
     * Exit a parse tree produced by the `expressionAtomPredicate`
     * labeled alternative in `MySqlParser.predicate`.
     * @param ctx the parse tree
     */
    exitExpressionAtomPredicate?: (ctx: ExpressionAtomPredicateContext) => void;
    /**
     * Enter a parse tree produced by the `subqueryComparisonPredicate`
     * labeled alternative in `MySqlParser.predicate`.
     * @param ctx the parse tree
     */
    enterSubqueryComparisonPredicate?: (ctx: SubqueryComparisonPredicateContext) => void;
    /**
     * Exit a parse tree produced by the `subqueryComparisonPredicate`
     * labeled alternative in `MySqlParser.predicate`.
     * @param ctx the parse tree
     */
    exitSubqueryComparisonPredicate?: (ctx: SubqueryComparisonPredicateContext) => void;
    /**
     * Enter a parse tree produced by the `jsonMemberOfPredicate`
     * labeled alternative in `MySqlParser.predicate`.
     * @param ctx the parse tree
     */
    enterJsonMemberOfPredicate?: (ctx: JsonMemberOfPredicateContext) => void;
    /**
     * Exit a parse tree produced by the `jsonMemberOfPredicate`
     * labeled alternative in `MySqlParser.predicate`.
     * @param ctx the parse tree
     */
    exitJsonMemberOfPredicate?: (ctx: JsonMemberOfPredicateContext) => void;
    /**
     * Enter a parse tree produced by the `binaryComparisonPredicate`
     * labeled alternative in `MySqlParser.predicate`.
     * @param ctx the parse tree
     */
    enterBinaryComparisonPredicate?: (ctx: BinaryComparisonPredicateContext) => void;
    /**
     * Exit a parse tree produced by the `binaryComparisonPredicate`
     * labeled alternative in `MySqlParser.predicate`.
     * @param ctx the parse tree
     */
    exitBinaryComparisonPredicate?: (ctx: BinaryComparisonPredicateContext) => void;
    /**
     * Enter a parse tree produced by the `inPredicate`
     * labeled alternative in `MySqlParser.predicate`.
     * @param ctx the parse tree
     */
    enterInPredicate?: (ctx: InPredicateContext) => void;
    /**
     * Exit a parse tree produced by the `inPredicate`
     * labeled alternative in `MySqlParser.predicate`.
     * @param ctx the parse tree
     */
    exitInPredicate?: (ctx: InPredicateContext) => void;
    /**
     * Enter a parse tree produced by the `betweenPredicate`
     * labeled alternative in `MySqlParser.predicate`.
     * @param ctx the parse tree
     */
    enterBetweenPredicate?: (ctx: BetweenPredicateContext) => void;
    /**
     * Exit a parse tree produced by the `betweenPredicate`
     * labeled alternative in `MySqlParser.predicate`.
     * @param ctx the parse tree
     */
    exitBetweenPredicate?: (ctx: BetweenPredicateContext) => void;
    /**
     * Enter a parse tree produced by the `isNullPredicate`
     * labeled alternative in `MySqlParser.predicate`.
     * @param ctx the parse tree
     */
    enterIsNullPredicate?: (ctx: IsNullPredicateContext) => void;
    /**
     * Exit a parse tree produced by the `isNullPredicate`
     * labeled alternative in `MySqlParser.predicate`.
     * @param ctx the parse tree
     */
    exitIsNullPredicate?: (ctx: IsNullPredicateContext) => void;
    /**
     * Enter a parse tree produced by the `likePredicate`
     * labeled alternative in `MySqlParser.predicate`.
     * @param ctx the parse tree
     */
    enterLikePredicate?: (ctx: LikePredicateContext) => void;
    /**
     * Exit a parse tree produced by the `likePredicate`
     * labeled alternative in `MySqlParser.predicate`.
     * @param ctx the parse tree
     */
    exitLikePredicate?: (ctx: LikePredicateContext) => void;
    /**
     * Enter a parse tree produced by the `regexpPredicate`
     * labeled alternative in `MySqlParser.predicate`.
     * @param ctx the parse tree
     */
    enterRegexpPredicate?: (ctx: RegexpPredicateContext) => void;
    /**
     * Exit a parse tree produced by the `regexpPredicate`
     * labeled alternative in `MySqlParser.predicate`.
     * @param ctx the parse tree
     */
    exitRegexpPredicate?: (ctx: RegexpPredicateContext) => void;
    /**
     * Enter a parse tree produced by the `unaryExpressionAtom`
     * labeled alternative in `MySqlParser.expressionAtom`.
     * @param ctx the parse tree
     */
    enterUnaryExpressionAtom?: (ctx: UnaryExpressionAtomContext) => void;
    /**
     * Exit a parse tree produced by the `unaryExpressionAtom`
     * labeled alternative in `MySqlParser.expressionAtom`.
     * @param ctx the parse tree
     */
    exitUnaryExpressionAtom?: (ctx: UnaryExpressionAtomContext) => void;
    /**
     * Enter a parse tree produced by the `collateExpressionAtom`
     * labeled alternative in `MySqlParser.expressionAtom`.
     * @param ctx the parse tree
     */
    enterCollateExpressionAtom?: (ctx: CollateExpressionAtomContext) => void;
    /**
     * Exit a parse tree produced by the `collateExpressionAtom`
     * labeled alternative in `MySqlParser.expressionAtom`.
     * @param ctx the parse tree
     */
    exitCollateExpressionAtom?: (ctx: CollateExpressionAtomContext) => void;
    /**
     * Enter a parse tree produced by the `variableAssignExpressionAtom`
     * labeled alternative in `MySqlParser.expressionAtom`.
     * @param ctx the parse tree
     */
    enterVariableAssignExpressionAtom?: (ctx: VariableAssignExpressionAtomContext) => void;
    /**
     * Exit a parse tree produced by the `variableAssignExpressionAtom`
     * labeled alternative in `MySqlParser.expressionAtom`.
     * @param ctx the parse tree
     */
    exitVariableAssignExpressionAtom?: (ctx: VariableAssignExpressionAtomContext) => void;
    /**
     * Enter a parse tree produced by the `mysqlVariableExpressionAtom`
     * labeled alternative in `MySqlParser.expressionAtom`.
     * @param ctx the parse tree
     */
    enterMysqlVariableExpressionAtom?: (ctx: MysqlVariableExpressionAtomContext) => void;
    /**
     * Exit a parse tree produced by the `mysqlVariableExpressionAtom`
     * labeled alternative in `MySqlParser.expressionAtom`.
     * @param ctx the parse tree
     */
    exitMysqlVariableExpressionAtom?: (ctx: MysqlVariableExpressionAtomContext) => void;
    /**
     * Enter a parse tree produced by the `nestedExpressionAtom`
     * labeled alternative in `MySqlParser.expressionAtom`.
     * @param ctx the parse tree
     */
    enterNestedExpressionAtom?: (ctx: NestedExpressionAtomContext) => void;
    /**
     * Exit a parse tree produced by the `nestedExpressionAtom`
     * labeled alternative in `MySqlParser.expressionAtom`.
     * @param ctx the parse tree
     */
    exitNestedExpressionAtom?: (ctx: NestedExpressionAtomContext) => void;
    /**
     * Enter a parse tree produced by the `nestedRowExpressionAtom`
     * labeled alternative in `MySqlParser.expressionAtom`.
     * @param ctx the parse tree
     */
    enterNestedRowExpressionAtom?: (ctx: NestedRowExpressionAtomContext) => void;
    /**
     * Exit a parse tree produced by the `nestedRowExpressionAtom`
     * labeled alternative in `MySqlParser.expressionAtom`.
     * @param ctx the parse tree
     */
    exitNestedRowExpressionAtom?: (ctx: NestedRowExpressionAtomContext) => void;
    /**
     * Enter a parse tree produced by the `mathExpressionAtom`
     * labeled alternative in `MySqlParser.expressionAtom`.
     * @param ctx the parse tree
     */
    enterMathExpressionAtom?: (ctx: MathExpressionAtomContext) => void;
    /**
     * Exit a parse tree produced by the `mathExpressionAtom`
     * labeled alternative in `MySqlParser.expressionAtom`.
     * @param ctx the parse tree
     */
    exitMathExpressionAtom?: (ctx: MathExpressionAtomContext) => void;
    /**
     * Enter a parse tree produced by the `existsExpressionAtom`
     * labeled alternative in `MySqlParser.expressionAtom`.
     * @param ctx the parse tree
     */
    enterExistsExpressionAtom?: (ctx: ExistsExpressionAtomContext) => void;
    /**
     * Exit a parse tree produced by the `existsExpressionAtom`
     * labeled alternative in `MySqlParser.expressionAtom`.
     * @param ctx the parse tree
     */
    exitExistsExpressionAtom?: (ctx: ExistsExpressionAtomContext) => void;
    /**
     * Enter a parse tree produced by the `intervalExpressionAtom`
     * labeled alternative in `MySqlParser.expressionAtom`.
     * @param ctx the parse tree
     */
    enterIntervalExpressionAtom?: (ctx: IntervalExpressionAtomContext) => void;
    /**
     * Exit a parse tree produced by the `intervalExpressionAtom`
     * labeled alternative in `MySqlParser.expressionAtom`.
     * @param ctx the parse tree
     */
    exitIntervalExpressionAtom?: (ctx: IntervalExpressionAtomContext) => void;
    /**
     * Enter a parse tree produced by the `jsonExpressionAtom`
     * labeled alternative in `MySqlParser.expressionAtom`.
     * @param ctx the parse tree
     */
    enterJsonExpressionAtom?: (ctx: JsonExpressionAtomContext) => void;
    /**
     * Exit a parse tree produced by the `jsonExpressionAtom`
     * labeled alternative in `MySqlParser.expressionAtom`.
     * @param ctx the parse tree
     */
    exitJsonExpressionAtom?: (ctx: JsonExpressionAtomContext) => void;
    /**
     * Enter a parse tree produced by the `subqueryExpressionAtom`
     * labeled alternative in `MySqlParser.expressionAtom`.
     * @param ctx the parse tree
     */
    enterSubqueryExpressionAtom?: (ctx: SubqueryExpressionAtomContext) => void;
    /**
     * Exit a parse tree produced by the `subqueryExpressionAtom`
     * labeled alternative in `MySqlParser.expressionAtom`.
     * @param ctx the parse tree
     */
    exitSubqueryExpressionAtom?: (ctx: SubqueryExpressionAtomContext) => void;
    /**
     * Enter a parse tree produced by the `constantExpressionAtom`
     * labeled alternative in `MySqlParser.expressionAtom`.
     * @param ctx the parse tree
     */
    enterConstantExpressionAtom?: (ctx: ConstantExpressionAtomContext) => void;
    /**
     * Exit a parse tree produced by the `constantExpressionAtom`
     * labeled alternative in `MySqlParser.expressionAtom`.
     * @param ctx the parse tree
     */
    exitConstantExpressionAtom?: (ctx: ConstantExpressionAtomContext) => void;
    /**
     * Enter a parse tree produced by the `functionCallExpressionAtom`
     * labeled alternative in `MySqlParser.expressionAtom`.
     * @param ctx the parse tree
     */
    enterFunctionCallExpressionAtom?: (ctx: FunctionCallExpressionAtomContext) => void;
    /**
     * Exit a parse tree produced by the `functionCallExpressionAtom`
     * labeled alternative in `MySqlParser.expressionAtom`.
     * @param ctx the parse tree
     */
    exitFunctionCallExpressionAtom?: (ctx: FunctionCallExpressionAtomContext) => void;
    /**
     * Enter a parse tree produced by the `binaryExpressionAtom`
     * labeled alternative in `MySqlParser.expressionAtom`.
     * @param ctx the parse tree
     */
    enterBinaryExpressionAtom?: (ctx: BinaryExpressionAtomContext) => void;
    /**
     * Exit a parse tree produced by the `binaryExpressionAtom`
     * labeled alternative in `MySqlParser.expressionAtom`.
     * @param ctx the parse tree
     */
    exitBinaryExpressionAtom?: (ctx: BinaryExpressionAtomContext) => void;
    /**
     * Enter a parse tree produced by the `fullColumnNameExpressionAtom`
     * labeled alternative in `MySqlParser.expressionAtom`.
     * @param ctx the parse tree
     */
    enterFullColumnNameExpressionAtom?: (ctx: FullColumnNameExpressionAtomContext) => void;
    /**
     * Exit a parse tree produced by the `fullColumnNameExpressionAtom`
     * labeled alternative in `MySqlParser.expressionAtom`.
     * @param ctx the parse tree
     */
    exitFullColumnNameExpressionAtom?: (ctx: FullColumnNameExpressionAtomContext) => void;
    /**
     * Enter a parse tree produced by the `bitExpressionAtom`
     * labeled alternative in `MySqlParser.expressionAtom`.
     * @param ctx the parse tree
     */
    enterBitExpressionAtom?: (ctx: BitExpressionAtomContext) => void;
    /**
     * Exit a parse tree produced by the `bitExpressionAtom`
     * labeled alternative in `MySqlParser.expressionAtom`.
     * @param ctx the parse tree
     */
    exitBitExpressionAtom?: (ctx: BitExpressionAtomContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.unaryOperator`.
     * @param ctx the parse tree
     */
    enterUnaryOperator?: (ctx: UnaryOperatorContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.unaryOperator`.
     * @param ctx the parse tree
     */
    exitUnaryOperator?: (ctx: UnaryOperatorContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.comparisonOperator`.
     * @param ctx the parse tree
     */
    enterComparisonOperator?: (ctx: ComparisonOperatorContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.comparisonOperator`.
     * @param ctx the parse tree
     */
    exitComparisonOperator?: (ctx: ComparisonOperatorContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.logicalOperator`.
     * @param ctx the parse tree
     */
    enterLogicalOperator?: (ctx: LogicalOperatorContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.logicalOperator`.
     * @param ctx the parse tree
     */
    exitLogicalOperator?: (ctx: LogicalOperatorContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.bitOperator`.
     * @param ctx the parse tree
     */
    enterBitOperator?: (ctx: BitOperatorContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.bitOperator`.
     * @param ctx the parse tree
     */
    exitBitOperator?: (ctx: BitOperatorContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.multOperator`.
     * @param ctx the parse tree
     */
    enterMultOperator?: (ctx: MultOperatorContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.multOperator`.
     * @param ctx the parse tree
     */
    exitMultOperator?: (ctx: MultOperatorContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.addOperator`.
     * @param ctx the parse tree
     */
    enterAddOperator?: (ctx: AddOperatorContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.addOperator`.
     * @param ctx the parse tree
     */
    exitAddOperator?: (ctx: AddOperatorContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.jsonOperator`.
     * @param ctx the parse tree
     */
    enterJsonOperator?: (ctx: JsonOperatorContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.jsonOperator`.
     * @param ctx the parse tree
     */
    exitJsonOperator?: (ctx: JsonOperatorContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.charsetNameBase`.
     * @param ctx the parse tree
     */
    enterCharsetNameBase?: (ctx: CharsetNameBaseContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.charsetNameBase`.
     * @param ctx the parse tree
     */
    exitCharsetNameBase?: (ctx: CharsetNameBaseContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.transactionLevelBase`.
     * @param ctx the parse tree
     */
    enterTransactionLevelBase?: (ctx: TransactionLevelBaseContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.transactionLevelBase`.
     * @param ctx the parse tree
     */
    exitTransactionLevelBase?: (ctx: TransactionLevelBaseContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.privilegesBase`.
     * @param ctx the parse tree
     */
    enterPrivilegesBase?: (ctx: PrivilegesBaseContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.privilegesBase`.
     * @param ctx the parse tree
     */
    exitPrivilegesBase?: (ctx: PrivilegesBaseContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.intervalTypeBase`.
     * @param ctx the parse tree
     */
    enterIntervalTypeBase?: (ctx: IntervalTypeBaseContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.intervalTypeBase`.
     * @param ctx the parse tree
     */
    exitIntervalTypeBase?: (ctx: IntervalTypeBaseContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.dataTypeBase`.
     * @param ctx the parse tree
     */
    enterDataTypeBase?: (ctx: DataTypeBaseContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.dataTypeBase`.
     * @param ctx the parse tree
     */
    exitDataTypeBase?: (ctx: DataTypeBaseContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.keywordsCanBeId`.
     * @param ctx the parse tree
     */
    enterKeywordsCanBeId?: (ctx: KeywordsCanBeIdContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.keywordsCanBeId`.
     * @param ctx the parse tree
     */
    exitKeywordsCanBeId?: (ctx: KeywordsCanBeIdContext) => void;
    /**
     * Enter a parse tree produced by `MySqlParser.functionNameBase`.
     * @param ctx the parse tree
     */
    enterFunctionNameBase?: (ctx: FunctionNameBaseContext) => void;
    /**
     * Exit a parse tree produced by `MySqlParser.functionNameBase`.
     * @param ctx the parse tree
     */
    exitFunctionNameBase?: (ctx: FunctionNameBaseContext) => void;
    visitTerminal(node: TerminalNode): void;
    visitErrorNode(node: ErrorNode): void;
    enterEveryRule(node: ParserRuleContext): void;
    exitEveryRule(node: ParserRuleContext): void;
}
