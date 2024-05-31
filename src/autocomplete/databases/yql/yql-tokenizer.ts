import {CharStream, type Token} from 'antlr4ng';
import {YQLLexer} from './generated/YQLLexer';
import {YQLParser} from './generated/YQLParser';

export function tokenizeYQL(line: string): (Token & {tokenTypeName: string})[] {
    const tokens = [];
    const inputStream = CharStream.fromString(line);
    const lexer = new YQLLexer(inputStream);

    let done = false;
    do {
        const token = lexer.nextToken();

        if (token === null || token.type === YQLParser.EOF) {
            done = true;
        } else {
            const tokenTypeName = YQLLexer.symbolicNames[token.type] as string;
            tokens.push({...token, tokenTypeName});
        }
    } while (!done);

    return tokens;
}
