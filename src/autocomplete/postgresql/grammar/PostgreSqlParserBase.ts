import {CharStreams, CommonTokenStream, Parser} from 'antlr4ng';

import {
    CreateFunctionOptionListContext,
    PostgreSqlParser,
    SconstContext,
} from '../generated/PostgreSqlParser.js';
import {PostgreSqlLexer} from '../generated/PostgreSqlLexer.js';

abstract class PostgreSqlParserBase extends Parser {
    ParseRoutineBody(localContext: CreateFunctionOptionListContext): void {
        let lang = null;
        for (const coi of localContext.createFunctionOptionItem()) {
            if (coi.LANGUAGE() !== null) {
                if (coi.nonReservedWordOrSconst() !== null)
                    if (coi.nonReservedWordOrSconst()?.nonReservedWord() !== null)
                        if (coi.nonReservedWordOrSconst()?.nonReservedWord()?.identifier() !== null)
                            if (
                                coi
                                    .nonReservedWordOrSconst()
                                    ?.nonReservedWord()
                                    ?.identifier()
                                    ?.Identifier() !== null
                            ) {
                                lang = coi
                                    .nonReservedWordOrSconst()
                                    ?.nonReservedWord()
                                    ?.identifier()
                                    ?.Identifier()
                                    ?.getText();
                                break;
                            }
            }
        }
        if (null === lang) return;
        let functionAs = null;
        for (const a of localContext.createFunctionOptionItem()) {
            if (a.functionAs() !== null) {
                functionAs = a;
                break;
            }
        }
        if (functionAs !== null) {
            // @ts-ignore
            const txt = this.GetRoutineBodyString(functionAs.functionAs()?.sconst(0));
            const ph = this.getPostgreSQLParser(txt);
            switch (lang) {
                case 'plpgsql':
                    // @ts-ignore
                    functionAs.functionAs().Definition = ph.plsqlroot();
                    break;
                case 'sql':
                    // @ts-ignore
                    functionAs.functionAs().Definition = ph.root();
                    break;
            }
        }
    }

    private unquote(s: string): string {
        const slength = s.length;
        let r = '';
        let i = 0;
        while (i < slength) {
            const c = s.charAt(i);
            r += c;
            if (c === "'" && i < slength - 1 && s.charAt(i + 1) === "'") i++;
            i++;
        }
        return r;
    }

    private GetRoutineBodyString(rule: SconstContext): string {
        const anysconst = rule.anySconst();
        const StringConstant = anysconst.StringConstant();
        if (null !== StringConstant) return this.unquote(this.TrimQuotes(StringConstant.getText()));
        const UnicodeEscapeStringConstant = anysconst.UnicodeEscapeStringConstant();
        if (null !== UnicodeEscapeStringConstant)
            return this.TrimQuotes(UnicodeEscapeStringConstant.getText());
        const EscapeStringConstant = anysconst.EscapeStringConstant();
        if (null !== EscapeStringConstant) return this.TrimQuotes(EscapeStringConstant.getText());
        let result = '';
        const dollartext = anysconst.DollarText();
        for (const s of dollartext) {
            result += s.getText();
        }
        return result;
    }

    private getPostgreSQLParser(script: string): PostgreSqlParser {
        const charStream = CharStreams.fromString(script);
        const lexer = new PostgreSqlLexer(charStream);
        const tokens = new CommonTokenStream(lexer);
        const parser = new PostgreSqlParser(tokens);

        return parser;
    }

    private TrimQuotes(s: string): string {
        return s === null || s.length === 0 ? s : s.substring(1, s.length - 1);
    }
}

export default PostgreSqlParserBase;
