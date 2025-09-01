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

    return ruleContexts.reduce<ExtractClickHouseTablesFromQueryResult>((acc, ruleContext) => {
        let databaseName = ruleContext.databaseIdentifier()?.getText();
        if (databaseName) {
            databaseName = getNormalizedName(databaseName);
        }

        const tableName = getNormalizedName(ruleContext.tableName().getText());
        const isUnique = acc.every(
            (previousTable) =>
                previousTable.databaseName !== databaseName ||
                previousTable.tableName !== tableName,
        );
        if (isUnique) {
            acc.push({
                databaseName,
                tableName,
            });
        }

        return acc;
    }, []);
}
