import {
    ConstraintSuggestion,
    CursorPosition,
    SqlAutocompleteResult,
    TableOrViewSuggestion,
} from '../../shared/autocomplete-types';
import {mySqlAutocompleteData} from './mysql-autocomplete';
import {parseQuery, parseQueryWithoutCursor} from '../../shared/autocomplete';
import {separateQueryAndCursor} from '../../shared/parse-query-with-cursor';
import {
    ExtractStatementPositionsResult,
    extractStatementPositionsFromQuery,
} from '../../shared/extract-statement-positions-from-query';
import {MySqlStatementsVisitor} from './mysql-extract-statements';
import {extractRuleContextsFromQuery} from '../../shared/extract-rule-contexts-from-query';
import {TableIdentifierContext} from './generated/MySqlParser';

export interface MySqlAutocompleteResult extends SqlAutocompleteResult {
    suggestViewsOrTables?: TableOrViewSuggestion;
    suggestIndexes?: boolean;
    suggestTriggers?: boolean;
    suggestConstraints?: ConstraintSuggestion;
    suggestRoles?: boolean;
    suggestUsers?: boolean;
}

export type ExtractMySqlTablesFromQueryResult = {
    databaseName?: string;
    tableName: string;
}[];

export function parseMySqlQueryWithoutCursor(
    query: string,
): Pick<MySqlAutocompleteResult, 'errors'> {
    return parseQueryWithoutCursor(
        mySqlAutocompleteData.Lexer,
        mySqlAutocompleteData.Parser,
        mySqlAutocompleteData.tokenDictionary.SPACE,
        mySqlAutocompleteData.getParseTree,
        query,
    );
}

export function parseMySqlQuery(query: string, cursor: CursorPosition): MySqlAutocompleteResult {
    return parseQuery(
        mySqlAutocompleteData.Lexer,
        mySqlAutocompleteData.Parser,
        mySqlAutocompleteData.tokenDictionary.SPACE,
        mySqlAutocompleteData.ignoredTokens,
        mySqlAutocompleteData.rulesToVisit,
        mySqlAutocompleteData.getParseTree,
        mySqlAutocompleteData.enrichAutocompleteResult,
        query,
        cursor,
    );
}

export function parseMySqlQueryWithCursor(queryWithCursor: string): MySqlAutocompleteResult {
    return parseMySqlQuery(...separateQueryAndCursor(queryWithCursor));
}

export function extractMySqlStatementPositionsFromQuery(
    query: string,
): ExtractStatementPositionsResult {
    return extractStatementPositionsFromQuery(
        query,
        mySqlAutocompleteData.Lexer,
        mySqlAutocompleteData.Parser,
        mySqlAutocompleteData.tokenDictionary.SPACE,
        [mySqlAutocompleteData.tokenDictionary.SPACE],
        mySqlAutocompleteData.tokenDictionary.SEMICOLON,
        new MySqlStatementsVisitor(),
        mySqlAutocompleteData.getParseTree,
    );
}

export function extractMySqlTablesFromQuery(query: string): ExtractMySqlTablesFromQueryResult {
    const ruleContexts = extractRuleContextsFromQuery(
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

    return ruleContexts.reduce<ExtractMySqlTablesFromQueryResult>((acc, ruleContext) => {
        let databaseName = ruleContext.databaseName()?.getText();
        if (databaseName) {
            databaseName = getNormalizedName(databaseName);
        }

        const rawTableName =
            ruleContext.tableName()?.getText() ||
            ruleContext.tableNameWithDotPrefix()?.getText().slice(1);

        if (!rawTableName) {
            return acc;
        }

        const tableName = getNormalizedName(rawTableName);
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
