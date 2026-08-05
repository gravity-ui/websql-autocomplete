import {Token as Antlr4Token, Lexer as LexerType} from 'antlr4ng';

import {LexerConstructor} from './autocomplete-types.js';
import {normalizePositions} from './normalize-positions.js';
import {createLexer} from './query.js';

export interface Token {
    text: string;
    startIndex: number;
    endIndex: number;
}

export function extractTokensFromQuery<L extends LexerType>(
    query: string,
    Lexer: LexerConstructor<L>,
    tokenType: number,
): Token[] {
    const lexer = createLexer(Lexer, query, {doubleCurlyPlaceholdersEnabled: true});
    lexer.removeErrorListeners();

    const tokens: Token[] = [];

    for (let token = lexer.nextToken(); token.type !== Antlr4Token.EOF; token = lexer.nextToken()) {
        if (token.type !== tokenType) {
            continue;
        }

        const text = token.text ?? '';

        tokens.push({
            text,
            startIndex: token.start,
            endIndex: token.stop + 1,
        });
    }

    return normalizePositions(query, tokens);
}
