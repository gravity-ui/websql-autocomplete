import {ParseTree, TokenStream} from 'antlr4ng';
import * as c3 from 'antlr4-c3';

import {
    AutocompleteData,
    AutocompleteResultBase,
    CursorPosition,
    ProcessVisitedRulesResult,
} from '../../shared/autocomplete-types.js';
import {TableQueryPosition, TokenDictionary} from '../../shared/index.js';
import {MongoAutocompleteResult} from './index.js';
import {MongoParser} from './generated/MongoParser.js';
import {MongoLexer} from './generated/MongoLexer.js';

const tokenDictionary: Pick<TokenDictionary, 'SPACE'> = {
    SPACE: MongoParser.WS,
};

// These are keywords that we do not want to show in autocomplete
function getIgnoredTokens(): number[] {
    // TODO: MONGO implement
    return [];
}

const ignoredTokens = new Set(getIgnoredTokens());

const rulesToVisit = new Set([]);

function processVisitedRules(
    _rules: c3.CandidatesCollection['rules'],
    _cursorTokenIndex: number,
    _tokenStream: TokenStream,
): ProcessVisitedRulesResult<MongoAutocompleteResult> {
    // TODO: MONGO implement
    return {};
}

function getParseTree(
    parser: MongoParser,
    // TODO: MONGO fix
    _type?: TableQueryPosition['type'] | 'select',
): ParseTree {
    return parser.root();
}

function enrichAutocompleteResult(
    baseResult: AutocompleteResultBase,
    rules: c3.CandidatesCollection['rules'],
    tokenStream: TokenStream,
    cursorTokenIndex: number,
    _cursor: CursorPosition,
    _query: string,
): MongoAutocompleteResult {
    // TODO: MONGO implement
    const suggestionsFromRules = processVisitedRules(rules, cursorTokenIndex, tokenStream);
    return {
        ...baseResult,
        ...suggestionsFromRules,
    };
}

export const mongoAutocompleteData: AutocompleteData<
    MongoAutocompleteResult,
    MongoLexer,
    MongoParser
> = {
    Lexer: MongoLexer,
    Parser: MongoParser,
    // TODO: MONGO fix
    // @ts-ignore
    tokenDictionary,
    ignoredTokens,
    rulesToVisit,
    getParseTree,
    enrichAutocompleteResult,
};
