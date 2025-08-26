import type {Lexer as LexerType, Parser as ParserType} from 'antlr4ng';

import {GetParseTree, LexerConstructor, ParserConstructor} from './autocomplete-types';
import {createParser} from './query';

interface ExtractRulesByIndexesFromQueryResult {
    text: string;
    ruleIndex: number;
}

export function extractRulesByIndexesFromQuery<L extends LexerType, P extends ParserType>(
    query: string,
    Lexer: LexerConstructor<L>,
    Parser: ParserConstructor<P>,
    getParseTree: GetParseTree<P>,
    ruleIndexes: number[],
): ExtractRulesByIndexesFromQueryResult[] {
    const parser = createParser(Lexer, Parser, query);

    const result: ExtractRulesByIndexesFromQueryResult[] = [];
    parser.addParseListener({
        exitEveryRule(ruleContext) {
            if (ruleIndexes.includes(ruleContext.ruleIndex)) {
                result.push({
                    text: ruleContext.getText(),
                    ruleIndex: ruleContext.ruleIndex,
                });
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
