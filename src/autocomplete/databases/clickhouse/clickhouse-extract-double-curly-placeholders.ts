import {Token, extractTokensFromQuery} from '../../shared/extract-tokens-from-query.js';
import {ClickHouseLexer} from './generated/ClickHouseLexer.js';

export function extractClickHouseDoubleCurlyPlaceholdersFromQuery(query: string): Token[] {
    return extractTokensFromQuery(
        query,
        ClickHouseLexer,
        ClickHouseLexer.DOUBLE_CURLY_PLACEHOLDER,
        {
            doubleCurlyPlaceholdersEnabled: true,
        },
    );
}
