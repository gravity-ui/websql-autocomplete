import {Token, extractTokensFromQuery} from '../../shared/extract-tokens-from-query.js';
import {MySqlLexer} from './generated/MySqlLexer.js';

export function extractMySqlDoubleCurlyPlaceholdersFromQuery(query: string): Token[] {
    return extractTokensFromQuery(query, MySqlLexer, MySqlLexer.DOUBLE_CURLY_PLACEHOLDER);
}
