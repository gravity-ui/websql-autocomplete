import {ParseTree, TokenStream} from 'antlr4ng';
import * as c3 from 'antlr4-c3';

import {
    AutocompleteData,
    AutocompleteResultBase,
    CursorPosition,
    ProcessVisitedRulesResult,
    TableOrViewSuggestion,
} from '../../shared/autocomplete-types.js';
import {TrinoLexer} from './generated/TrinoLexer.js';
import {TrinoParser} from './generated/TrinoParser.js';
import {
    TableQueryPosition,
    TokenDictionary,
    isStartingToWriteRule,
    shouldSuggestTemplates,
} from '../../shared';
import {TrinoAutocompleteResult} from './index.js';

const tokenDictionary: TokenDictionary = {
    SPACE: TrinoParser.WS_,
    FROM: TrinoParser.FROM_,
    OPENING_BRACKET: TrinoParser.LPAREN_,
    CLOSING_BRACKET: TrinoParser.RPAREN_,
    ALTER: TrinoParser.ALTER_,
    INSERT: TrinoParser.INSERT_,
    UPDATE: TrinoParser.UPDATE_,
    JOIN: TrinoParser.JOIN_,
    SEMICOLON: TrinoParser.SEMICOLON_,
    SELECT: TrinoParser.SELECT_,
};

// These are keywords that we do not want to show in autocomplete
function getIgnoredTokens(): number[] {
    const tokens = [];

    const firstOperatorIndex = TrinoParser.EQ_;
    const lastOperatorIndex = TrinoParser.UNRECOGNIZED_;
    for (let i = firstOperatorIndex; i <= lastOperatorIndex; i++) {
        // We actually want Star to appear in autocomplete
        if (i !== TrinoParser.ASTERISK_) {
            tokens.push(i);
        }
    }

    tokens.push(TrinoParser.EOF);

    return tokens;
}

const ignoredTokens = new Set(getIgnoredTokens());

const rulesToVisit = new Set([
    TrinoParser.RULE_catalogIdentifier,
    TrinoParser.RULE_schemaIdentifier,
    TrinoParser.RULE_tableIdentifier,
    TrinoParser.RULE_viewIdentifier,

    // We don't need to go inside of those rules, we already know that this is a identifier
    TrinoParser.RULE_identifier,
]);

function processVisitedRules(
    rules: c3.CandidatesCollection['rules'],
    cursorTokenIndex: number,
    _tokenStream: TokenStream,
): ProcessVisitedRulesResult<TrinoAutocompleteResult> {
    let suggestCatalogs: TrinoAutocompleteResult['suggestCatalogs'];
    let suggestSchemas: TrinoAutocompleteResult['suggestSchemas'];
    let suggestViewsOrTables: TrinoAutocompleteResult['suggestViewsOrTables'];

    for (const [ruleId, rule] of rules) {
        if (!isStartingToWriteRule(cursorTokenIndex, rule)) {
            continue;
        }

        switch (ruleId) {
            case TrinoParser.RULE_catalogIdentifier: {
                suggestCatalogs = true;
                break;
            }
            case TrinoParser.RULE_schemaIdentifier: {
                suggestSchemas = true;
                break;
            }
            // TODO-TRINO: separate tables and views
            case TrinoParser.RULE_viewIdentifier:
            case TrinoParser.RULE_tableIdentifier: {
                suggestViewsOrTables = TableOrViewSuggestion.ALL;
                break;
            }
        }
    }

    return {
        suggestCatalogs,
        suggestSchemas,
        suggestViewsOrTables,
    };
}

function getParseTree(
    parser: TrinoParser,
    _type?: TableQueryPosition['type'] | 'select',
): ParseTree {
    return parser.parse();
}

function enrichAutocompleteResult(
    baseResult: AutocompleteResultBase,
    rules: c3.CandidatesCollection['rules'],
    tokenStream: TokenStream,
    cursorTokenIndex: number,
    cursor: CursorPosition,
    query: string,
): TrinoAutocompleteResult {
    const suggestionsFromRules = processVisitedRules(rules, cursorTokenIndex, tokenStream);
    const suggestTemplates = shouldSuggestTemplates(query, cursor);
    return {
        ...baseResult,
        ...suggestionsFromRules,
        suggestDatabases: undefined,
        suggestTemplates,
    };
}

export const trinoAutocompleteData: AutocompleteData<
    TrinoAutocompleteResult,
    TrinoLexer,
    TrinoParser
> = {
    Lexer: TrinoLexer,
    Parser: TrinoParser,
    tokenDictionary,
    ignoredTokens,
    rulesToVisit,
    getParseTree,
    enrichAutocompleteResult,
};
