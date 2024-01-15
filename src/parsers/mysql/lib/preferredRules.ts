import {MySqlParser} from '../generated/MySqlParser.js';

export const preferredRules = new Set([
    MySqlParser.RULE_tableName,
    MySqlParser.RULE_alterTable,
    MySqlParser.RULE_dropTable,
    MySqlParser.RULE_alterView,
    MySqlParser.RULE_dropView,
    MySqlParser.RULE_aggregateWindowedFunction,
    MySqlParser.RULE_scalarFunctionName,
]);
