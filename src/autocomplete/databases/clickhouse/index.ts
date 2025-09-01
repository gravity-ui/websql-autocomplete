import {
    CursorPosition,
    EngineSuggestion,
    SqlAutocompleteResult,
    TableOrViewSuggestion,
} from '../../shared/autocomplete-types';
import {clickHouseAutocompleteData} from './clickhouse-autocomplete';
import {parseQuery, parseQueryWithoutCursor} from '../../shared/autocomplete';
import {separateQueryAndCursor} from '../../shared/parse-query-with-cursor';
import {
    ExtractStatementPositionsResult,
    extractStatementPositionsFromQuery,
} from '../../shared/extract-statement-positions-from-query';
import {ClickHouseStatementsVisitor} from './clickhouse-extract-statements';
import {TableIdentifierContext} from './generated/ClickHouseParser';
import {extractRuleContextsFromQuery} from '../../shared/extract-rule-contexts-from-query';

export interface ClickHouseAutocompleteResult extends SqlAutocompleteResult {
    suggestViewsOrTables?: TableOrViewSuggestion;
    suggestEngines?: EngineSuggestion;
}

export type ExtractClickHouseTablesFromQueryResult = {
    databaseName?: string;
    tableName: string;
}[];

export function parseClickHouseQueryWithoutCursor(
    query: string,
): Pick<ClickHouseAutocompleteResult, 'errors'> {
    return parseQueryWithoutCursor(
        clickHouseAutocompleteData.Lexer,
        clickHouseAutocompleteData.Parser,
        clickHouseAutocompleteData.tokenDictionary.SPACE,
        clickHouseAutocompleteData.getParseTree,
        query,
    );
}

export function parseClickHouseQuery(
    query: string,
    cursor: CursorPosition,
): ClickHouseAutocompleteResult {
    return parseQuery(
        clickHouseAutocompleteData.Lexer,
        clickHouseAutocompleteData.Parser,
        clickHouseAutocompleteData.tokenDictionary.SPACE,
        clickHouseAutocompleteData.ignoredTokens,
        clickHouseAutocompleteData.rulesToVisit,
        clickHouseAutocompleteData.getParseTree,
        clickHouseAutocompleteData.enrichAutocompleteResult,
        query,
        cursor,
    );
}

export function parseClickHouseQueryWithCursor(
    queryWithCursor: string,
): ClickHouseAutocompleteResult {
    return parseClickHouseQuery(...separateQueryAndCursor(queryWithCursor));
}

export function extractClickHouseStatementPositionsFromQuery(
    query: string,
): ExtractStatementPositionsResult {
    return extractStatementPositionsFromQuery(
        query,
        clickHouseAutocompleteData.Lexer,
        clickHouseAutocompleteData.Parser,
        clickHouseAutocompleteData.tokenDictionary.SPACE,
        [clickHouseAutocompleteData.tokenDictionary.SPACE],
        clickHouseAutocompleteData.tokenDictionary.SEMICOLON,
        new ClickHouseStatementsVisitor(),
        clickHouseAutocompleteData.getParseTree,
    );
}

export function extractClickHouseTablesFromQuery(
    query: string,
): ExtractClickHouseTablesFromQueryResult {
    const ruleContexts = extractRuleContextsFromQuery(
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
