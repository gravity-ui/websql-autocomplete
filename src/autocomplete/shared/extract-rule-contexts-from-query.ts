import type {Lexer as LexerType, ParserRuleContext, Parser as ParserType} from 'antlr4ng';

import {
    GetParseTree,
    LexerConstructor,
    LexerOptions,
    ParserConstructor,
} from './autocomplete-types.js';
import {createParser} from './query.js';

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
    lexerOptions?: LexerOptions,
): InstanceType<R>[] {
    const parser = createParser(Lexer, Parser, query, lexerOptions);

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
