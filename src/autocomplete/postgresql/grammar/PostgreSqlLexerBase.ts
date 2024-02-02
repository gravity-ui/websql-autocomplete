import {Lexer} from 'antlr4ng';

const letterRegex = /^\p{L}+$/u;
const integralType = 658;
const lessLessType = 18;
const greaterGreaterType = 19;

abstract class PostgreSqlLexerBase extends Lexer {
    protected tags: string[] = [];

    pushTag(): void {
        this.tags.push(this.text);
    }

    isTag(): boolean {
        return this.text === this.tags[0];
    }

    popTag(): void {
        this.tags.shift();
    }

    checkLA(c: number): boolean {
        return this.inputStream.LA(1) !== c;
    }

    charIsLetter(): boolean {
        // TODO
        // @ts-ignore
        return letterRegex.test(this.inputStream.LA(-1));
    }

    HandleNumericFail(): void {
        this.inputStream.seek(this.inputStream.index - 2);
        this.type = integralType;
    }

    HandleLessLessGreaterGreater(): void {
        if (this.text == '<<') {
            this.type = lessLessType;
        } else if (this.text == '>>') {
            this.type = greaterGreaterType;
        }
    }

    UnterminatedBlockCommentDebugAssert(): void {
        // VOID
    }

    CheckIfUtf32Letter(): boolean {
        let codePoint = this.inputStream.LA(-2) << (8 + this.inputStream.LA(-1));
        let c: number[];
        if (codePoint < 0x10000) {
            c = [codePoint];
        } else {
            codePoint -= 0x10000;
            c = [codePoint / 0x400 + 0xd800, (codePoint % 0x400) + 0xdc00];
        }
        return letterRegex.test(`${c[0]}`);
    }
}

export default PostgreSqlLexerBase;
