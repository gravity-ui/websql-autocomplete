import {
    DoubleCurlyPlaceholder,
    extractDoubleCurlyPlaceholdersFromQuery,
} from '../../shared/extract-double-curly-placeholders-from-query.js';
import {ClickHouseLexer} from './generated/ClickHouseLexer.js';

export function extractClickHouseDoubleCurlyPlaceholdersFromQuery(
    query: string,
): DoubleCurlyPlaceholder[] {
    return extractDoubleCurlyPlaceholdersFromQuery(
        query,
        ClickHouseLexer,
        ClickHouseLexer.DOUBLE_CURLY_PLACEHOLDER,
    );
}
