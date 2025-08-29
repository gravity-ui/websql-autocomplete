import type {Lexer as LexerType, ParserRuleContext, Parser as ParserType} from 'antlr4ng';

import {GetParseTree, LexerConstructor, ParserConstructor} from './autocomplete-types';
import {createParser} from './query';

export function extractRuleContextsFromQuery<L extends LexerType, P extends ParserType>(
    query: string,
    Lexer: LexerConstructor<L>,
    Parser: ParserConstructor<P>,
    getParseTree: GetParseTree<P>,
    ruleContextTypes: (new (
        parent: ParserRuleContext | null,
        invokingState: number,
    ) => ParserRuleContext)[],
): ParserRuleContext[] {
    const parser = createParser(Lexer, Parser, query);

    const result: ParserRuleContext[] = [];
    parser.addParseListener({
        exitEveryRule(ruleContext) {
            if (
                ruleContextTypes.some((ruleContextType) => ruleContext instanceof ruleContextType)
            ) {
                result.push(ruleContext);
            }
        },
        // ParseListener requires functions to be declared
        enterEveryRule() {},
        visitErrorNode() {},
        visitTerminal() {},
    });

    getParseTree(parser);
    return result;
}
