import {Token, extractTokensFromQuery} from '../../shared/extract-tokens-from-query.js';
import {PostgreSqlLexer} from './generated/PostgreSqlLexer.js';

export function extractPostgreSqlDoubleCurlyPlaceholdersFromQuery(query: string): Token[] {
    return extractTokensFromQuery(query, PostgreSqlLexer, PostgreSqlLexer.DOUBLE_CURLY_PLACEHOLDER);
}
