import {extractRuleContextFromQuery} from '../../shared/extract-rule-contexts-from-query';
import {clickHouseAutocompleteData} from './clickhouse-autocomplete';
import {TableIdentifierContext} from './generated/ClickHouseParser';

export type ExtractClickHouseTablesFromQueryResult = {
    databaseName?: string;
    tableName: string;
}[];

export function extractClickHouseTablesFromQuery(
    query: string,
): ExtractClickHouseTablesFromQueryResult {
    const ruleContexts = extractRuleContextFromQuery(
        query,
        clickHouseAutocompleteData.Lexer,
        clickHouseAutocompleteData.Parser,
        clickHouseAutocompleteData.getParseTree,
        [TableIdentifierContext],
    );

    const getNormalizedName = (name: string): string => {
        if (
            (name.startsWith('`') && name.endsWith('`')) ||
            (name.startsWith('"') && name.endsWith('"'))
        ) {
            return name.slice(1, name.length - 1);
        }

        return name;
    };

    const uniqueTableKeys = new Set();
    return ruleContexts.reduce<ExtractClickHouseTablesFromQueryResult>((acc, ruleContext) => {
        let databaseName = ruleContext.databaseIdentifier()?.getText();
        if (databaseName) {
            databaseName = getNormalizedName(databaseName);
        }

        const tableName = getNormalizedName(ruleContext.tableName().getText());
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
