import {CharStreams, CommonTokenStream, Parser, ParserRuleContext} from 'antlr4ng';

import {
    Createfunc_opt_listContext,
    PostgreSqlParser,
    SconstContext,
} from '../generated/PostgreSqlParser.js';
import {PostgreSqlLexer} from '../generated/PostgreSqlLexer.js';

abstract class PostgreSqlParserBase extends Parser {
    GetParsedSqlTree(script: string): ParserRuleContext {
        const ph = this.getPostgreSQLParser(script);
        const result = ph.root();
        return result;
    }

    ParseRoutineBody(_localctx: Createfunc_opt_listContext): void {
        let lang = null;
        for (const coi of _localctx.createfunc_opt_item()) {
            if (coi.LANGUAGE() !== null) {
                if (coi.nonreservedword_or_sconst() !== null)
                    if (coi.nonreservedword_or_sconst()?.nonreservedword() !== null)
                        if (
                            coi.nonreservedword_or_sconst()?.nonreservedword()?.identifier() !==
                            null
                        )
                            if (
                                coi
                                    .nonreservedword_or_sconst()
                                    ?.nonreservedword()
                                    ?.identifier()
                                    ?.Identifier() !== null
                            ) {
                                lang = coi
                                    .nonreservedword_or_sconst()
                                    ?.nonreservedword()
                                    ?.identifier()
                                    ?.Identifier()
                                    ?.getText();
                                break;
                            }
            }
        }
        if (null === lang) return;
        let func_as = null;
        for (const a of _localctx.createfunc_opt_item()) {
            if (a.func_as() !== null) {
                func_as = a;
                break;
            }
        }
        if (func_as !== null) {
            // @ts-ignore
            const txt = this.GetRoutineBodyString(func_as.func_as()?.sconst(0));
            const ph = this.getPostgreSQLParser(txt);
            switch (lang) {
                case 'plpgsql':
                    // @ts-ignore
                    func_as.func_as().Definition = ph.plsqlroot();
                    break;
                case 'sql':
                    // @ts-ignore
                    func_as.func_as().Definition = ph.root();
                    break;
            }
        }
    }

    unquote(s: string): string {
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

    GetRoutineBodyString(rule: SconstContext): string {
        const anysconst = rule.anysconst();
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

    getPostgreSQLParser(script: string): PostgreSqlParser {
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
