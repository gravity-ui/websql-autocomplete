import type {Lexer as LexerType, ParserRuleContext, Parser as ParserType} from 'antlr4ng';

import {GetParseTree, LexerConstructor, ParserConstructor} from './autocomplete-types';
import {createParser} from './query';

export function extractRuleContextFromQuery<
    L extends LexerType,
    P extends ParserType,
    R extends new (parent: ParserRuleContext | null, invokingState: number) => ParserRuleContext,
>(
    query: string,
    Lexer: LexerConstructor<L>,
    Parser: ParserConstructor<P>,
    getParseTree: GetParseTree<P>,
    ruleContextTypes: R[],
): InstanceType<R>[] {
    const parser = createParser(Lexer, Parser, query);

    const result: InstanceType<R>[] = [];
    parser.addParseListener({
        exitEveryRule(ruleContext) {
            if (
                ruleContextTypes.some((ruleContextType) => ruleContext instanceof ruleContextType)
            ) {
                // Unfortunately, TypeScript cannot correctly handle type casting in condition above
                result.push(ruleContext as unknown as InstanceType<R>);
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
