import {extractRuleContextFromQuery} from '../../shared/extract-rule-contexts-from-query';
import {TableIdentifierContext} from './generated/MySqlParser';
import {mySqlAutocompleteData} from './mysql-autocomplete';

export type ExtractMySqlTablesFromQueryResult = {
    databaseName?: string;
    tableName: string;
}[];

export function extractMySqlTablesFromQuery(query: string): ExtractMySqlTablesFromQueryResult {
    const ruleContexts = extractRuleContextFromQuery(
        query,
        mySqlAutocompleteData.Lexer,
        mySqlAutocompleteData.Parser,
        mySqlAutocompleteData.getParseTree,
        [TableIdentifierContext],
    );

    const getNormalizedName = (name: string): string => {
        if (
            (name.startsWith('`') && name.endsWith('`')) ||
            (name.startsWith('"') && name.endsWith('"')) ||
            (name.startsWith("'") && name.endsWith("'"))
        ) {
            return name.slice(1, name.length - 1);
        }

        return name;
    };

    const uniqueTableKeys = new Set();
    return ruleContexts.reduce<ExtractMySqlTablesFromQueryResult>((acc, ruleContext) => {
        let databaseName = ruleContext.databaseName()?.getText();
        if (databaseName) {
            databaseName = getNormalizedName(databaseName);
        }

        const rawTableName =
            ruleContext.tableName()?.getText() ||
            // This rule uses a token with a leading dot, which serves as a separator.
            // We need to remove this dot.
            ruleContext.tableNameWithDotPrefix()?.getText().slice(1);

        if (!rawTableName) {
            return acc;
        }

        const tableName = getNormalizedName(rawTableName);
        const tableKey = `${databaseName ?? ''}|${tableName}`;
        if (!uniqueTableKeys.has(tableKey)) {
            acc.push({
                databaseName,
                tableName,
            });
            uniqueTableKeys.add(tableKey);
        }

        return acc;
    }, []);
}
