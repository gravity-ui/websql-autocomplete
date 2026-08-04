import {
    DoubleCurlyPlaceholder,
    extractDoubleCurlyPlaceholdersFromQuery,
} from '../../shared/extract-double-curly-placeholders-from-query.js';
import {MySqlLexer} from './generated/MySqlLexer.js';

export function extractMySqlDoubleCurlyPlaceholdersFromQuery(
    query: string,
): DoubleCurlyPlaceholder[] {
    return extractDoubleCurlyPlaceholdersFromQuery(
        query,
        MySqlLexer,
        MySqlLexer.DOUBLE_CURLY_PLACEHOLDER,
    );
}
