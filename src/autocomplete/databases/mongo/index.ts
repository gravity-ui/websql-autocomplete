import {CursorPosition, SqlAutocompleteResult} from '../../shared/autocomplete-types';
import {parseQuery, parseQueryWithoutCursor} from '../../shared/autocomplete';
import {separateQueryAndCursor} from '../../shared/parse-query-with-cursor';
import {
    ExtractStatementPositionsResult,
    extractStatementPositionsFromQuery,
} from '../../shared/extract-statement-positions-from-query';
import {mongoAutocompleteData} from './mongo-autocomplete';
import {CollectionOperationContext, MongoParser} from './generated/MongoParser';
import {createParser} from '../../shared';
import {MongoLexer} from './generated/MongoLexer';
import {MongoParserVisitor} from './generated/MongoParserVisitor';
import {z} from 'zod';

export interface MongoAutocompleteResult extends SqlAutocompleteResult {}

type ParseResult = unknown;
type OnParseStatementCallback = (parseResult: ParseResult) => void;

enum CollectionMethod {
    Find = 'find',
}

class CustomVisitor extends MongoParserVisitor<unknown> {
    onParseStatement: OnParseStatementCallback;

    constructor(onParseStatement: OnParseStatementCallback) {
        super();
        this.onParseStatement = onParseStatement;
    }

    visitCollectionOperation = (context: CollectionOperationContext): void => {
        const name = context.collectionName().getText();
        const rawMethod = context.collectionMethod().getChild(0)?.getText();
        const method = z.nativeEnum(CollectionMethod).parse(rawMethod);

        switch (method) {
            case CollectionMethod.Find: {
                // TODO: MONGO parse params with JSON5
                const params = context.collectionMethod().findParam().getText();
                const modifiers = context
                    .collectionMethod()
                    .findModifier()
                    .map((findModifierContext) => ({
                        method: findModifierContext.getChild(1)?.getText(),
                        params: findModifierContext.number().getText(),
                    }));

                this.onParseStatement({name, method, params, modifiers});
            }
        }
    };
}

export function extractCommandsFromMongoQuery(query: string): ParseResult[] {
    const parser = createParser(MongoLexer, MongoParser, query);

    const parseResults: ParseResult[] = [];
    const onParseStatement: OnParseStatementCallback = (parseResult) => {
        parseResults.push(parseResult);
    };

    const visitor = new CustomVisitor(onParseStatement);
    parser.root().accept(visitor);

    return parseResults;
}

export function parseMongoQueryWithoutCursor(
    query: string,
): Pick<MongoAutocompleteResult, 'errors'> {
    return parseQueryWithoutCursor(
        mongoAutocompleteData.Lexer,
        mongoAutocompleteData.Parser,
        MongoParser.DOT,
        mongoAutocompleteData.getParseTree,
        query,
    );
}

export function parseMongoQuery(query: string, cursor: CursorPosition): MongoAutocompleteResult {
    return parseQuery(
        mongoAutocompleteData.Lexer,
        mongoAutocompleteData.Parser,
        mongoAutocompleteData.tokenDictionary.SPACE,
        mongoAutocompleteData.ignoredTokens,
        mongoAutocompleteData.rulesToVisit,
        mongoAutocompleteData.getParseTree,
        mongoAutocompleteData.enrichAutocompleteResult,
        query,
        cursor,
    );
}

export function parseTrinoQueryWithCursor(queryWithCursor: string): MongoAutocompleteResult {
    return parseMongoQuery(...separateQueryAndCursor(queryWithCursor));
}

export function extractTrinoStatementPositionsFromQuery(
    query: string,
): ExtractStatementPositionsResult {
    return extractStatementPositionsFromQuery(
        query,
        mongoAutocompleteData.Lexer,
        mongoAutocompleteData.Parser,
        mongoAutocompleteData.tokenDictionary.SPACE,
        [mongoAutocompleteData.tokenDictionary.SPACE],
        mongoAutocompleteData.tokenDictionary.SEMICOLON,
        MongoParser.RULE_statement,
        mongoAutocompleteData.getParseTree,
    );
}
