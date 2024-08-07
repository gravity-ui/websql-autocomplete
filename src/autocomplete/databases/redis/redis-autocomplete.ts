import {ParseTree} from 'antlr4ng';

import {RedisLexer} from './generated/RedisLexer.js';
import {RedisParser} from './generated/RedisParser.js';

const tokenDictionary = {
    SPACE: RedisLexer.SPACE,
};

// These are keywords that we do not want to show in autocomplete
const ignoredTokens = new Set([]);

const rulesToVisit = new Set([RedisParser.RULE_keyName]);

function getParseTree(parser: RedisParser): ParseTree {
    return parser.root();
}

export const redisAutocompleteData = {
    Lexer: RedisLexer,
    Parser: RedisParser,
    tokenDictionary,
    ignoredTokens,
    rulesToVisit,
    getParseTree,
};
