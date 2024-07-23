import {LexerConstructor, ParserSyntaxError} from './autocomplete-types';
import {Lexer as LexerType} from 'antlr4ng';
import {createLexer} from './query';
import {SqlErrorListener} from './sql-error-listener';
import {tokenDictionary} from '../databases/yql/helpers';

export type Token = {
    ruleName: string;
    startIndex: number;
};

export type TokenizeResult = {
    tokens: Token[];
    errors: ParserSyntaxError[];
};

const EOF = -1;

export function tokenize<L extends LexerType>(
    Lexer: LexerConstructor<L>,
    symbolicNames: (string | null)[],
    query: string,
): TokenizeResult {
    const lexer = createLexer(Lexer, query);
    const errorListener = new SqlErrorListener(tokenDictionary.SPACE);

    lexer.removeErrorListeners();
    lexer.addErrorListener(errorListener);

    const tokens: Token[] = [];

    let done = false;
    do {
        const token = lexer.nextToken();
        if (token === null || token.type === EOF) {
            done = true;
        } else {
            const tokenName = symbolicNames[token.type];
            if (tokenName) {
                tokens.push({
                    ruleName: tokenName,
                    startIndex: token.column,
                });
            }
        }
    } while (!done);

    return {
        tokens,
        errors: errorListener.errors,
    };
}
