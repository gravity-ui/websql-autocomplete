import {
    CursorPosition,
    SqlAutocompleteResult,
    TableOrViewSuggestion,
} from '../../shared/autocomplete-types';
import {trinoAutocompleteData} from './trino-autocomplete';
import {parseQuery, parseQueryWithoutCursor} from '../../shared/autocomplete';
import {separateQueryAndCursor} from '../../shared/parse-query-with-cursor';
import {
    ExtractStatementPositionsResult,
    extractStatementPositionsFromQuery,
} from '../../shared/extract-statement-positions-from-query';
import {TrinoStatementsVisitor} from './trino-extract-statements';
import {
    NewTableIdentifierContext,
    SchemaIdentifierContext,
    TableIdentifierContext,
} from './generated/TrinoParser';
import {extractRuleContextsFromQuery} from '../../shared/extract-rule-contexts-from-query';

export interface TrinoAutocompleteResult extends SqlAutocompleteResult {
    suggestViewsOrTables?: TableOrViewSuggestion;
    suggestSchemas?: true;
    suggestCatalogs?: true;

    // TODO-TRINO: enrich autocomplete
    suggestAggregateFunctions?: undefined;
    suggestFunctions?: undefined;
    suggestDatabases?: undefined;
}

export type ExtractTrinoTablesFromQueryResult = {
    catalogName?: string;
    schemaName?: string;
    tableName: string;
}[];

export function parseTrinoQueryWithoutCursor(
    query: string,
): Pick<TrinoAutocompleteResult, 'errors'> {
    return parseQueryWithoutCursor(
        trinoAutocompleteData.Lexer,
        trinoAutocompleteData.Parser,
        trinoAutocompleteData.tokenDictionary.SPACE,
        trinoAutocompleteData.getParseTree,
        query,
    );
}

export function parseTrinoQuery(query: string, cursor: CursorPosition): TrinoAutocompleteResult {
    return parseQuery(
        trinoAutocompleteData.Lexer,
        trinoAutocompleteData.Parser,
        trinoAutocompleteData.tokenDictionary.SPACE,
        trinoAutocompleteData.ignoredTokens,
        trinoAutocompleteData.rulesToVisit,
        trinoAutocompleteData.getParseTree,
        trinoAutocompleteData.enrichAutocompleteResult,
        query,
        cursor,
    );
}

export function parseTrinoQueryWithCursor(queryWithCursor: string): TrinoAutocompleteResult {
    return parseTrinoQuery(...separateQueryAndCursor(queryWithCursor));
}

export function extractTrinoStatementPositionsFromQuery(
    query: string,
): ExtractStatementPositionsResult {
    return extractStatementPositionsFromQuery(
        query,
        trinoAutocompleteData.Lexer,
        trinoAutocompleteData.Parser,
        trinoAutocompleteData.tokenDictionary.SPACE,
        [trinoAutocompleteData.tokenDictionary.SPACE],
        trinoAutocompleteData.tokenDictionary.SEMICOLON,
        new TrinoStatementsVisitor(),
        trinoAutocompleteData.getParseTree,
    );
}

export function extractTrinoTablesFromQuery(query: string): ExtractTrinoTablesFromQueryResult {
    const ruleContexts = extractRuleContextsFromQuery(
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

        const isUnique = acc.every(
            (previousTable) =>
                previousTable.catalogName !== catalogName ||
                previousTable.schemaName !== schemaName ||
                previousTable.tableName !== tableName,
        );
        if (isUnique) {
            acc.push({
                catalogName,
                schemaName,
                tableName,
            });
        }

        return acc;
    }, []);
}
