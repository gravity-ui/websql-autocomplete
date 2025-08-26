import type {Lexer as LexerType, Parser as ParserType} from 'antlr4ng';

import {GetParseTree, LexerConstructor, ParserConstructor} from './autocomplete-types';
import {createParser} from './query';

export function extractUniqueRuleTextByIndexesFromQuery<L extends LexerType, P extends ParserType>(
    query: string,
    Lexer: LexerConstructor<L>,
    Parser: ParserConstructor<P>,
    getParseTree: GetParseTree<P>,
    ruleIndexes: number[],
): string[] {
    const parser = createParser(Lexer, Parser, query);

    const result: string[] = [];
    parser.addParseListener({
        exitEveryRule(ruleContext) {
            const ruleText = ruleContext.getText();
            if (ruleIndexes.includes(ruleContext.ruleIndex) && !result.includes(ruleText)) {
                result.push(ruleText);
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
