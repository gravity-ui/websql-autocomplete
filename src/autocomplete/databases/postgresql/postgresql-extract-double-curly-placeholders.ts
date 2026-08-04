import {
    DoubleCurlyPlaceholder,
    extractDoubleCurlyPlaceholdersFromQuery,
} from '../../shared/extract-double-curly-placeholders-from-query.js';
import {PostgreSqlLexer} from './generated/PostgreSqlLexer.js';

export function extractPostgreSqlDoubleCurlyPlaceholdersFromQuery(
    query: string,
): DoubleCurlyPlaceholder[] {
    return extractDoubleCurlyPlaceholdersFromQuery(
        query,
        PostgreSqlLexer,
        PostgreSqlLexer.DOUBLE_CURLY_PLACEHOLDER,
    );
}
