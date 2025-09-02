import {
    NewTableIdentifierContext,
    SchemaIdentifierContext,
    TableIdentifierContext,
} from './generated/TrinoParser';
import {extractRuleContextFromQuery} from '../../shared/extract-rule-contexts-from-query';
import {trinoAutocompleteData} from './trino-autocomplete';

export type ExtractTrinoTablesFromQueryResult = {
    catalogName?: string;
    schemaName?: string;
    tableName: string;
}[];

export function extractTrinoTablesFromQuery(query: string): ExtractTrinoTablesFromQueryResult {
    const ruleContexts = extractRuleContextFromQuery(
        query,
        trinoAutocompleteData.Lexer,
        trinoAutocompleteData.Parser,
        trinoAutocompleteData.getParseTree,
        [TableIdentifierContext, NewTableIdentifierContext],
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
    return ruleContexts.reduce<ExtractTrinoTablesFromQueryResult>((acc, ruleContext) => {
        let schemaIdentifierContext: SchemaIdentifierContext | null;
        if (ruleContext instanceof TableIdentifierContext) {
            schemaIdentifierContext = ruleContext.schemaIdentifier();
        } else {
            schemaIdentifierContext = ruleContext.newSchemaIdentifier()?.schemaIdentifier() ?? null;
        }

        let catalogName = schemaIdentifierContext?.catalogIdentifier().getText();
        if (catalogName) {
            catalogName = getNormalizedName(catalogName);
        }
        let schemaName = schemaIdentifierContext?.schemaName().getText();
        if (schemaName) {
            schemaName = getNormalizedName(schemaName);
        }

        const tableName = getNormalizedName(ruleContext.tableName().getText());
        const tableKey = `${catalogName ?? ''}|${schemaName ?? ''}|${tableName}`;
        if (!uniqueTableKeys.has(tableKey)) {
            acc.push({
                catalogName,
                schemaName,
                tableName,
            });
            uniqueTableKeys.add(tableKey);
        }

        return acc;
    }, []);
}
