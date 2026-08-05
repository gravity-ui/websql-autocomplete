import {Token, extractTokensFromQuery} from '../../shared/extract-tokens-from-query.js';
import {TrinoLexer} from './generated/TrinoLexer.js';

export function extractTrinoDoubleCurlyPlaceholdersFromQuery(query: string): Token[] {
    return extractTokensFromQuery(query, TrinoLexer, TrinoLexer.DOUBLE_CURLY_PLACEHOLDER_);
}
