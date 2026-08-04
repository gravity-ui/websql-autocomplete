import {
    DoubleCurlyPlaceholder,
    extractDoubleCurlyPlaceholdersFromQuery,
} from '../../shared/extract-double-curly-placeholders-from-query.js';
import {TrinoLexer} from './generated/TrinoLexer.js';

export function extractTrinoDoubleCurlyPlaceholdersFromQuery(
    query: string,
): DoubleCurlyPlaceholder[] {
    return extractDoubleCurlyPlaceholdersFromQuery(
        query,
        TrinoLexer,
        TrinoLexer.DOUBLE_CURLY_PLACEHOLDER_,
    );
}
