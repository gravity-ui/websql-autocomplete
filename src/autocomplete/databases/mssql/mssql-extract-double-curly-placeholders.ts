import {Token, extractTokensFromQuery} from '../../shared/extract-tokens-from-query.js';
import {TSqlLexer} from './generated/TSqlLexer.js';

export function extractMsSqlDoubleCurlyPlaceholdersFromQuery(query: string): Token[] {
    return extractTokensFromQuery(query, TSqlLexer, TSqlLexer.DOUBLE_CURLY_PLACEHOLDER, {
        doubleCurlyPlaceholders: true,
    });
}
