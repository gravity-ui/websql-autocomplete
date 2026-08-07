import {Token as Antlr4Token, Lexer as LexerType} from 'antlr4ng';

import {LexerConstructor, ParseOptions} from './autocomplete-types.js';
import {Position, normalizePositions} from './normalize-positions.js';
import {createLexer} from './query.js';

export interface Token extends Position {
    text: string;
}

export function extractTokensFromQuery<L extends LexerType>(
    query: string,
    Lexer: LexerConstructor<L>,
    tokenType: number,
    parseOptions?: ParseOptions,
): Token[] {
    const lexer = createLexer(Lexer, query, parseOptions);
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
