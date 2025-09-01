import {TableIdentifierContext} from './generated/PostgreSqlParser';
import {extractRuleContextFromQuery} from '../../shared/extract-rule-contexts-from-query';
import {postgreSqlAutocompleteData} from './postgresql-autocomplete';

export type ExtractPostgreSqlTablesFromQueryResult = {
    databaseName?: string;
    schemaName?: string;
    tableName: string;
}[];

export function extractPostgreSqlTableNamesFromQuery(
    query: string,
): ExtractPostgreSqlTablesFromQueryResult {
    const ruleContexts = extractRuleContextFromQuery(
        query,
        postgreSqlAutocompleteData.Lexer,
        postgreSqlAutocompleteData.Parser,
        postgreSqlAutocompleteData.getParseTree,
        [TableIdentifierContext],
    );

    const getNormalizedName = (name: string): string => {
        if (name.startsWith('"') && name.endsWith('"')) {
            return name.slice(1, name.length - 1);
        }

        return name;
    };

    return ruleContexts.reduce<ExtractPostgreSqlTablesFromQueryResult>((acc, ruleContext) => {
        let schemaName = ruleContext.schemaName()?.getText();
        let databaseName = ruleContext.databaseName()?.getText();
        if (schemaName) {
            schemaName = getNormalizedName(schemaName);
        }
        if (databaseName) {
            databaseName = getNormalizedName(databaseName);
        }

        const tableName = getNormalizedName(ruleContext.tableName().getText());
        const isUnique = acc.every(
            (previousTable) =>
                previousTable.schemaName !== schemaName ||
                previousTable.databaseName !== databaseName ||
                previousTable.tableName !== tableName,
        );
        if (isUnique) {
            acc.push({
                databaseName,
                schemaName,
                tableName,
            });
        }

        return acc;
    }, []);
}
