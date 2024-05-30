import * as c3 from 'antlr4-c3';
import {type TokenStream} from 'antlr4ng';
import {YQLParser} from './generated/YQLParser';
import {type TokenDictionary, getPreviousToken} from '../../shared/tables';
import {EntitySuggestion, InternalSuggestions} from './types';
import {YQLEntity} from '../../autocomplete-types';

export const tokenDictionary: TokenDictionary = {
    SPACE: YQLParser.WS,
    FROM: YQLParser.FROM,
    OPENING_BRACKET: YQLParser.LPAREN,
    CLOSING_BRACKET: YQLParser.RPAREN,
    ALTER: YQLParser.ALTER,
    INSERT: YQLParser.INSERT,
    UPDATE: YQLParser.UPDATE,
    JOIN: YQLParser.JOIN,
    SEMICOLON: YQLParser.SEMICOLON,
    SELECT: YQLParser.SELECT,
};

type OneRuleInList = (rules: number | number[]) => boolean;
type AllRulesInList = (rules: number[]) => boolean;

function checktRuleInListGetter(ruleList: c3.RuleList): {
    oneRuleInList: OneRuleInList;
    allRulesInList: AllRulesInList;
} {
    const ruleMap = new Map(ruleList.map((rule) => [rule, true]));
    return {
        oneRuleInList: (rules: number | number[]): boolean => {
            const normalizedRules = Array.isArray(rules) ? rules : [rules];
            return normalizedRules.some((rule) => ruleMap.has(rule));
        },
        allRulesInList: (rules: number[]): boolean => !rules.some((rule) => !ruleMap.has(rule)),
    };
}

interface GetParticularSuggestionProps {
    oneRuleInList: OneRuleInList;
    allRulesInList: AllRulesInList;
    cursorTokenIndex: number;
    tokenStream: TokenStream;
}

function getWindowFunctionsSuggestions({
    oneRuleInList,
    allRulesInList,
}: GetParticularSuggestionProps): boolean | undefined {
    if (!allRulesInList([YQLParser.RULE_select_stmt, YQLParser.RULE_id_expr])) {
        return;
    }
    const noWindowFunction = oneRuleInList([
        YQLParser.RULE_window_specification_details,
        YQLParser.RULE_group_by_clause,
        YQLParser.RULE_table_ref,
        YQLParser.RULE_where_expr,
    ]);
    if (!noWindowFunction) {
        return true;
    }
    return;
}

function getObjectSuggestions({oneRuleInList}: GetParticularSuggestionProps): boolean | undefined {
    return (
        oneRuleInList([YQLParser.RULE_alter_object_stmt, YQLParser.RULE_drop_object_stmt]) &&
        oneRuleInList(YQLParser.RULE_id_or_at)
    );
}

function getTablestoreSuggestions({
    oneRuleInList,
    tokenStream,
    cursorTokenIndex,
}: GetParticularSuggestionProps): boolean | undefined {
    if (!oneRuleInList(YQLParser.RULE_id_or_at)) {
        return;
    }

    const tableStoreInDropTable =
        oneRuleInList(YQLParser.RULE_drop_table_stmt) &&
        Boolean(
            getPreviousToken(tokenStream, tokenDictionary, cursorTokenIndex, YQLParser.TABLESTORE),
        );

    return oneRuleInList(YQLParser.RULE_alter_table_store_stmt) || tableStoreInDropTable;
}

function getTableSuggestions({
    oneRuleInList,
    allRulesInList,
    tokenStream,
    cursorTokenIndex,
}: GetParticularSuggestionProps): boolean | undefined {
    if (!oneRuleInList([YQLParser.RULE_id_or_at, YQLParser.RULE_id_table_or_type])) {
        return;
    }
    const isTargetForReplication =
        oneRuleInList(YQLParser.RULE_replication_target) &&
        !oneRuleInList(YQLParser.RULE_replication_name);

    const isExistingTableInSimpleTableRef =
        allRulesInList([YQLParser.RULE_simple_table_ref]) &&
        !getPreviousToken(tokenStream, tokenDictionary, cursorTokenIndex, YQLParser.CREATE) &&
        !getPreviousToken(tokenStream, tokenDictionary, cursorTokenIndex, YQLParser.EXTERNAL);

    return (
        oneRuleInList([YQLParser.RULE_table_ref, YQLParser.RULE_table_inherits]) ||
        isExistingTableInSimpleTableRef ||
        isTargetForReplication
    );
}

function getUserSuggestions({
    oneRuleInList,
    tokenStream,
    cursorTokenIndex,
}: GetParticularSuggestionProps): boolean | undefined {
    if (!oneRuleInList(YQLParser.RULE_role_name)) {
        return;
    }

    const hasPreviousTokenUSER = Boolean(
        getPreviousToken(tokenStream, tokenDictionary, cursorTokenIndex, YQLParser.USER),
    );

    const hasPreviousTokenRENAME = Boolean(
        getPreviousToken(tokenStream, tokenDictionary, cursorTokenIndex, YQLParser.RENAME),
    );

    const userInRevokePermissions = oneRuleInList(YQLParser.RULE_revoke_permissions_stmt);

    const userInAlterGroup =
        oneRuleInList(YQLParser.RULE_alter_group_stmt) &&
        !hasPreviousTokenRENAME &&
        hasPreviousTokenUSER;

    const userInCreateGroup =
        oneRuleInList(YQLParser.RULE_create_group_stmt) && hasPreviousTokenUSER;

    const userInAlterUser =
        oneRuleInList(YQLParser.RULE_alter_user_stmt) && !hasPreviousTokenRENAME;

    const userInDropRole = oneRuleInList(YQLParser.RULE_drop_role_stmt) && hasPreviousTokenUSER;

    return (
        userInDropRole ||
        userInAlterUser ||
        userInCreateGroup ||
        userInAlterGroup ||
        userInRevokePermissions
    );
}

function getGroupSuggestions({
    oneRuleInList,
    tokenStream,
    cursorTokenIndex,
}: GetParticularSuggestionProps): boolean | undefined {
    if (!oneRuleInList(YQLParser.RULE_role_name)) {
        return;
    }

    const hasPreviousTokenGROUP = Boolean(
        getPreviousToken(tokenStream, tokenDictionary, cursorTokenIndex, YQLParser.GROUP),
    );
    const hasPreviousTokenUSER = Boolean(
        getPreviousToken(tokenStream, tokenDictionary, cursorTokenIndex, YQLParser.USER),
    );

    const hasPreviousTokenRENAME = Boolean(
        getPreviousToken(tokenStream, tokenDictionary, cursorTokenIndex, YQLParser.RENAME),
    );

    const groupInDropRole = oneRuleInList(YQLParser.RULE_drop_role_stmt) && hasPreviousTokenGROUP;

    const groupInAlterGroup =
        oneRuleInList(YQLParser.RULE_alter_group_stmt) &&
        !hasPreviousTokenRENAME &&
        !hasPreviousTokenUSER;

    return (
        oneRuleInList(YQLParser.RULE_revoke_permissions_stmt) ||
        groupInAlterGroup ||
        groupInDropRole
    );
}

function getTopicSuggestions({oneRuleInList}: GetParticularSuggestionProps): boolean | undefined {
    if (!oneRuleInList([YQLParser.RULE_an_id, YQLParser.RULE_topic_ref])) {
        return;
    }

    return oneRuleInList([YQLParser.RULE_drop_topic_stmt, YQLParser.RULE_alter_topic_stmt]);
}

function getViewSuggestions({oneRuleInList}: GetParticularSuggestionProps): boolean | undefined {
    if (!oneRuleInList(YQLParser.RULE_id_or_at)) {
        return;
    }
    return oneRuleInList(YQLParser.RULE_drop_view_stmt);
}

function getReplicationSuggestions({
    oneRuleInList,
}: GetParticularSuggestionProps): boolean | undefined {
    if (!oneRuleInList(YQLParser.RULE_id_or_at)) {
        return;
    }

    return oneRuleInList([
        YQLParser.RULE_alter_replication_stmt,
        YQLParser.RULE_drop_replication_stmt,
    ]);
}

function getExternalTableSuggestions({
    oneRuleInList,
    tokenStream,
    cursorTokenIndex,
}: GetParticularSuggestionProps): boolean | undefined {
    if (!oneRuleInList(YQLParser.RULE_id_or_at)) {
        return;
    }
    const hasPreviousTokenEXTERNAL = Boolean(
        getPreviousToken(tokenStream, tokenDictionary, cursorTokenIndex, YQLParser.EXTERNAL),
    );
    return oneRuleInList(YQLParser.RULE_drop_table_stmt) && hasPreviousTokenEXTERNAL;
}

function getExternalDatasourceSuggestions({
    oneRuleInList,
}: GetParticularSuggestionProps): boolean | undefined {
    if (!oneRuleInList(YQLParser.RULE_id_or_at)) {
        return;
    }
    return oneRuleInList([
        YQLParser.RULE_drop_external_data_source_stmt,
        YQLParser.RULE_alter_external_data_source_stmt,
    ]);
}

function getTableIndexesSuggestions({
    oneRuleInList,
}: GetParticularSuggestionProps): boolean | undefined {
    if (!oneRuleInList(YQLParser.RULE_an_id)) {
        return;
    }

    return oneRuleInList([
        YQLParser.RULE_alter_table_drop_index,
        YQLParser.RULE_alter_table_rename_index_to,
    ]);
}

function getColumnsSuggestions({
    oneRuleInList,
    tokenStream,
    cursorTokenIndex,
}: GetParticularSuggestionProps): boolean | undefined {
    if (
        !oneRuleInList([YQLParser.RULE_an_id, YQLParser.RULE_id_expr]) ||
        oneRuleInList([
            YQLParser.RULE_table_ref,
            YQLParser.RULE_values_stmt,
            YQLParser.RULE_alter_table_add_column,
            YQLParser.RULE_lambda_stmt,
        ])
    ) {
        return;
    }

    const existingColumnInSelect =
        oneRuleInList(YQLParser.RULE_select_kind) &&
        !getPreviousToken(tokenStream, tokenDictionary, cursorTokenIndex, YQLParser.LIMIT);

    const existingColumnInAlterTableAlterColumn =
        oneRuleInList(YQLParser.RULE_alter_table_alter_column) &&
        !getPreviousToken(tokenStream, tokenDictionary, cursorTokenIndex, YQLParser.FAMILY);

    return (
        oneRuleInList([
            YQLParser.RULE_pure_column_list,
            YQLParser.RULE_pure_column_or_named,
            YQLParser.RULE_column_name,
            YQLParser.RULE_without_column_name,
            YQLParser.RULE_alter_table_drop_column,
            YQLParser.RULE_delete_stmt,
        ]) ||
        existingColumnInAlterTableAlterColumn ||
        existingColumnInSelect
    );
}

function getSimpleTypesSuggestions({
    oneRuleInList,
}: GetParticularSuggestionProps): boolean | undefined {
    return oneRuleInList(YQLParser.RULE_type_name_simple);
}

function getPragmasSuggestions({
    allRulesInList,
}: GetParticularSuggestionProps): boolean | undefined {
    return allRulesInList([YQLParser.RULE_an_id, YQLParser.RULE_pragma_stmt]);
}

function getUdfsSuggestions({oneRuleInList}: GetParticularSuggestionProps): boolean | undefined {
    if (
        !oneRuleInList([YQLParser.RULE_atom_expr, YQLParser.RULE_in_atom_expr]) ||
        oneRuleInList(YQLParser.RULE_table_ref)
    ) {
        return;
    }
    return oneRuleInList(YQLParser.RULE_select_stmt);
}

function getTableFunctionsSuggestions({
    allRulesInList,
}: GetParticularSuggestionProps): boolean | undefined {
    return allRulesInList([YQLParser.RULE_id_expr, YQLParser.RULE_table_ref]);
}

function getFunctionsSuggestions({
    oneRuleInList,
}: GetParticularSuggestionProps): boolean | undefined {
    if (!oneRuleInList(YQLParser.RULE_id_expr) || oneRuleInList(YQLParser.RULE_table_ref)) {
        return;
    }
    return oneRuleInList(YQLParser.RULE_select_stmt);
}

function getAggregateFunctionsSuggestions({
    oneRuleInList,
    allRulesInList,
}: GetParticularSuggestionProps): boolean | undefined {
    if (!allRulesInList([YQLParser.RULE_select_stmt, YQLParser.RULE_id_expr])) {
        return;
    }
    const noAggregateFunction = oneRuleInList([
        YQLParser.RULE_group_by_clause,
        YQLParser.RULE_table_ref,
        YQLParser.RULE_where_expr,
    ]);
    if (!noAggregateFunction) {
        return true;
    }
    return;
}

function getTableHintsSuggestions({
    allRulesInList,
}: GetParticularSuggestionProps): boolean | undefined {
    return allRulesInList([YQLParser.RULE_an_id_hint, YQLParser.RULE_table_hint]);
}

const ruleNames = YQLParser.ruleNames;

export function getParticularStatement(ruleList: c3.RuleList): string | undefined {
    const coreStatementIndex = ruleList.findIndex(
        (el) => el === YQLParser.RULE_sql_stmt_core || el === YQLParser.RULE_sql_stmt_core_yq,
    );
    if (coreStatementIndex === -1) {
        return undefined;
    }
    const particularStatementIndex = coreStatementIndex + 1;
    const particularStatement = ruleList[particularStatementIndex];
    if (!particularStatement) {
        return undefined;
    }
    return ruleNames[particularStatement];
}

export const EntitySuggestionToYqlEntity: Record<EntitySuggestion, YQLEntity> = {
    suggestObject: 'object',
    suggestTableStore: 'tableStore',
    suggestTable: 'table',
    suggestExternalTable: 'externalTable',
    suggestExternalDatasource: 'externalDataSource',
    suggestTopic: 'topic',
    suggestView: 'view',
    suggestReplication: 'replication',
    suggestGroup: 'group',
    suggestUser: 'user',
};

export function getGranularSuggestions(
    ruleList: c3.RuleList,
    cursorTokenIndex: number,
    tokenStream: TokenStream,
): InternalSuggestions {
    const getters = checktRuleInListGetter(ruleList);
    const props = {...getters, cursorTokenIndex, tokenStream};

    const suggestWindowFunctions = getWindowFunctionsSuggestions(props);
    const suggestObject = getObjectSuggestions(props);
    const suggestTableStore = getTablestoreSuggestions(props);
    const suggestTable = getTableSuggestions(props);
    const suggestUser = getUserSuggestions(props);
    const suggestGroup = getGroupSuggestions(props);
    const suggestTopic = getTopicSuggestions(props);
    const suggestView = getViewSuggestions(props);
    const suggestReplication = getReplicationSuggestions(props);
    const suggestExternalTable = getExternalTableSuggestions(props);
    const suggestExternalDatasource = getExternalDatasourceSuggestions(props);
    const shouldSuggestTableIndexes = getTableIndexesSuggestions(props);
    const shouldSuggestColumns = getColumnsSuggestions(props);
    const suggestSimpleTypes = getSimpleTypesSuggestions(props);
    const suggestPragmas = getPragmasSuggestions(props);
    const suggestUdfs = getUdfsSuggestions(props);
    const suggestTableFunctions = getTableFunctionsSuggestions(props);
    const suggestFunctions = getFunctionsSuggestions(props);
    const suggestAggregateFunctions = getAggregateFunctionsSuggestions(props);
    const shouldSuggestTableHints = getTableHintsSuggestions(props);

    return {
        suggestWindowFunctions,
        shouldSuggestTableIndexes,
        shouldSuggestColumns,
        shouldSuggestColumnAliases: shouldSuggestColumns,
        suggestSimpleTypes,
        suggestPragmas,
        suggestUdfs,
        suggestTableFunctions,
        suggestFunctions,
        suggestAggregateFunctions,
        suggestTableHints: shouldSuggestTableHints ? getParticularStatement(ruleList) : undefined,
        suggestObject,
        suggestTableStore,
        suggestTable,
        suggestUser,
        suggestGroup,
        suggestTopic,
        suggestView,
        suggestReplication,
        suggestExternalTable,
        suggestExternalDatasource,
    };
}
