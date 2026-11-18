import {extractRuleContextFromQuery} from '../../shared/extract-rule-contexts-from-query.js';
import {Full_table_nameContext, TSqlParser, Table_nameContext} from './generated/TSqlParser.js';
import {msSqlAutocompleteData} from './mssql-autocomplete.js';

export type ExtractMsSqlTablesFromQueryResult = {
    databaseName?: string;
    schemaName?: string;
    tableName: string;
}[];

export function extractMsSqlTablesFromQuery(query: string): ExtractMsSqlTablesFromQueryResult {
    const ruleContexts = extractRuleContextFromQuery(
        query,
        msSqlAutocompleteData.Lexer,
        msSqlAutocompleteData.Parser,
        msSqlAutocompleteData.getParseTree,
        [Full_table_nameContext, Table_nameContext],
    );

    const getNormalizedName = (name: string | undefined): string | undefined => {
        if (
            name &&
            ((name.startsWith('[') && name.endsWith(']')) ||
                (name.startsWith('"') && name.endsWith('"')))
        ) {
            return name.slice(1, name.length - 1);
        }

        return name;
    };

    const uniqueTableKeys = new Set();
    return ruleContexts.reduce<ExtractMsSqlTablesFromQueryResult>((acc, ruleContext) => {
        // Table name in full_column_name is a column qualifier, it's often an alias
        if (ruleContext.parent?.ruleIndex === TSqlParser.RULE_full_column_name) {
            return acc;
        }

        const tableName = getNormalizedName(ruleContext._table?.getText());
        if (!tableName) {
            return acc;
        }

        const databaseName = getNormalizedName(ruleContext._database?.getText());
        const schemaName = getNormalizedName(ruleContext._schema?.getText());
        const tableKey = `${databaseName ?? ''}|${schemaName ?? ''}|${tableName}`;
        if (!uniqueTableKeys.has(tableKey)) {
            acc.push({
                databaseName,
                schemaName,
                tableName,
            });
            uniqueTableKeys.add(tableKey);
        }

        return acc;
    }, []);
}
