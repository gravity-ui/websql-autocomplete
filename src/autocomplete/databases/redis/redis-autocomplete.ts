import {ParseTree, TokenStream} from 'antlr4ng';
import * as c3 from 'antlr4-c3';

import {RedisLexer} from './generated/RedisLexer.js';
import {RedisParser} from './generated/RedisParser.js';
import {
    AutocompleteResultBase,
    CursorPosition,
    ProcessVisitedRulesResult,
} from '../../shared/autocomplete-types.js';
import {RedisAutocompleteResult} from './index.js';
import {isStartingToWriteRule} from '../../shared/cursor.js';
import {shouldSuggestTemplates} from '../../shared/query.js';

const tokenDictionary = {
    SPACE: RedisLexer.SPACE,
};

// These are keywords that we do not want to show in autocomplete
const ignoredTokens = new Set([
    RedisParser.EOF,
    RedisParser.NEWLINE,
    RedisParser.SINGLE_QUOTE,
    RedisParser.DOUBLE_QUOTE,
    RedisParser.DECIMAL_LITERAL,
    RedisParser.IDENTIFIER,
    RedisParser.POSITIVE_DECIMAL_LITERAL,
]);

const rulesToVisit = new Set([RedisParser.RULE_stringKeyName]);

function processVisitedRules(
    rules: c3.CandidatesCollection['rules'],
    cursorTokenIndex: number,
): ProcessVisitedRulesResult<RedisAutocompleteResult> {
    let suggestStrings = false;

    for (const [ruleId, rule] of rules) {
        if (!isStartingToWriteRule(cursorTokenIndex, rule)) {
            continue;
        }

        switch (ruleId) {
            case RedisParser.RULE_stringKeyName: {
                suggestStrings = true;
                break;
            }
        }
    }

    return {
        suggestStrings,
    };
}

function getParseTree(parser: RedisParser): ParseTree {
    return parser.root();
}

function enrichAutocompleteResult(
    baseResult: AutocompleteResultBase,
    rules: c3.CandidatesCollection['rules'],
    _tokenStream: TokenStream,
    cursorTokenIndex: number,
    cursor: CursorPosition,
    query: string,
): RedisAutocompleteResult {
    const {suggestStrings} = processVisitedRules(rules, cursorTokenIndex);
    const suggestTemplates = shouldSuggestTemplates(query, cursor);
    const result: RedisAutocompleteResult = {
        ...baseResult,
        suggestStrings,
        suggestTemplates,
    };

    return result;
}

export const redisAutocompleteData = {
    Lexer: RedisLexer,
    Parser: RedisParser,
    tokenDictionary,
    ignoredTokens,
    rulesToVisit,
    getParseTree,
    enrichAutocompleteResult,
};
