import {Lexer as LexerType, Token} from 'antlr4ng';

import {LexerConstructor} from './autocomplete-types.js';
import {normalizePositions} from './normalize-positions.js';
import {createLexer} from './query.js';

export interface DoubleCurlyPlaceholder {
    text: string;
    startIndex: number;
    endIndex: number;
}

export function extractDoubleCurlyPlaceholdersFromQuery<L extends LexerType>(
    query: string,
    Lexer: LexerConstructor<L>,
    doubleCurlyPlaceholderToken: number,
): DoubleCurlyPlaceholder[] {
    const lexer = createLexer(Lexer, query, {doubleCurlyPlaceholdersEnabled: true});
    lexer.removeErrorListeners();

    const placeholders: DoubleCurlyPlaceholder[] = [];

    for (let token = lexer.nextToken(); token.type !== Token.EOF; token = lexer.nextToken()) {
        if (token.type !== doubleCurlyPlaceholderToken) {
            continue;
        }

        const text = token.text ?? '';

        placeholders.push({
            text,
            startIndex: token.start,
            endIndex: token.stop + 1,
        });
    }

    return normalizePositions(query, placeholders);
}
