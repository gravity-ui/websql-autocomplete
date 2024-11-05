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
    RedisParser.DECIMAL_SCORE_LITERAL,
]);

const rulesToVisit = new Set([
    RedisParser.RULE_keyName,
    RedisParser.RULE_databaseName,
    RedisParser.RULE_stringKeyName,
    RedisParser.RULE_listKeyName,
    RedisParser.RULE_setKeyName,
    RedisParser.RULE_sortedSetKeyName,
    RedisParser.RULE_hashKeyName,
]);

function processVisitedRules(
    rules: c3.CandidatesCollection['rules'],
    cursorTokenIndex: number,
): ProcessVisitedRulesResult<RedisAutocompleteResult> {
    let suggestDatabases = false;
    let suggestKeys = false;
    let suggestStrings = false;
    let suggestLists = false;
    let suggestSets = false;
    let suggestSortedSets = false;
    let suggestHashes = false;

    for (const [ruleId, rule] of rules) {
        if (!isStartingToWriteRule(cursorTokenIndex, rule)) {
            continue;
        }

        switch (ruleId) {
            case RedisParser.RULE_databaseName: {
                suggestDatabases = true;
                break;
            }
            case RedisParser.RULE_keyName: {
                suggestKeys = true;
                break;
            }
            case RedisParser.RULE_stringKeyName: {
                suggestStrings = true;
                break;
            }
            case RedisParser.RULE_listKeyName: {
                suggestLists = true;
                break;
            }
            case RedisParser.RULE_setKeyName: {
                suggestSets = true;
                break;
            }
            case RedisParser.RULE_sortedSetKeyName: {
                suggestSortedSets = true;
                break;
            }
            case RedisParser.RULE_hashKeyName: {
                suggestHashes = true;
                break;
            }
        }
    }

    return {
        suggestDatabases,
        suggestKeys,
        suggestStrings,
        suggestLists,
        suggestSets,
        suggestSortedSets,
        suggestHashes,
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
    const {
        suggestDatabases,
        suggestKeys,
        suggestStrings,
        suggestLists,
        suggestSets,
        suggestSortedSets,
        suggestHashes,
    } = processVisitedRules(rules, cursorTokenIndex);
    const suggestTemplates = shouldSuggestTemplates(query, cursor);
    const result: RedisAutocompleteResult = {
        ...baseResult,
        suggestDatabases,
        suggestKeys,
        suggestStrings,
        suggestLists,
        suggestSets,
        suggestSortedSets,
        suggestHashes,
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
