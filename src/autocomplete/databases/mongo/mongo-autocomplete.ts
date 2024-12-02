import {ParseTree, TokenStream} from 'antlr4ng';
import * as c3 from 'antlr4-c3';

import {
    AutocompleteResultBase,
    ProcessVisitedRulesResult,
} from '../../shared/autocomplete-types.js';
import {MongoAutocompleteResult} from './index.js';
import {MongoParser} from './generated/MongoParser.js';
import {MongoLexer} from './generated/MongoLexer.js';
import {isStartingToWriteRule} from '../../shared/cursor.js';

const tokenDictionary = {
    SPACE: MongoParser.WS,
    SEMICOLON: MongoParser.SEMICOLON,
};

// These are keywords that we do not want to show in autocomplete
function getIgnoredTokens(): number[] {
    const tokens = [];

    const firstOperatorIndex = MongoParser.LBRACKET;
    const lastOperatorIndex = MongoParser.WS;
    for (let i = firstOperatorIndex; i <= lastOperatorIndex; i++) {
        tokens.push(i);
    }

    tokens.push(MongoParser.EOF);

    return tokens;
}

const ignoredTokens = new Set(getIgnoredTokens());

const rulesToVisit = new Set([MongoParser.RULE_collectionName]);

function processVisitedRules(
    rules: c3.CandidatesCollection['rules'],
    cursorTokenIndex: number,
): ProcessVisitedRulesResult<MongoAutocompleteResult> {
    let suggestCollections;

    for (const [ruleId, rule] of rules) {
        if (!isStartingToWriteRule(cursorTokenIndex, rule)) {
            continue;
        }

        switch (ruleId) {
            case MongoParser.RULE_collectionName: {
                suggestCollections = true;
                break;
            }
        }
    }

    return {suggestCollections};
}

export function getParseTree(parser: MongoParser): ParseTree {
    return parser.root();
}

function enrichAutocompleteResult(
    baseResult: AutocompleteResultBase,
    rules: c3.CandidatesCollection['rules'],
    _tokenStream: TokenStream,
    cursorTokenIndex: number,
): MongoAutocompleteResult {
    const suggestionsFromRules = processVisitedRules(rules, cursorTokenIndex);
    return {
        ...baseResult,
        ...suggestionsFromRules,
    };
}

export const mongoAutocompleteData = {
    Lexer: MongoLexer,
    Parser: MongoParser,
    tokenDictionary,
    ignoredTokens,
    rulesToVisit,
    getParseTree,
    enrichAutocompleteResult,
};
