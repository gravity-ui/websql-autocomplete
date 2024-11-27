import {CursorPosition, SqlAutocompleteResult} from '../../shared/autocomplete-types';
import {parseQuery, parseQueryWithoutCursor} from '../../shared/autocomplete';
import {separateQueryAndCursor} from '../../shared/parse-query-with-cursor';
import {
    ExtractStatementPositionsResult,
    extractStatementPositionsFromQuery,
} from '../../shared/extract-statement-positions-from-query';
import {mongoAutocompleteData} from './mongo-autocomplete';
import {
    CollectionOperationContext,
    FindMethodContext,
    InsertOneMethodContext,
    MongoParser,
} from './generated/MongoParser';
import {createParser} from '../../shared';
import {MongoLexer} from './generated/MongoLexer';
import {MongoParserVisitor} from './generated/MongoParserVisitor';

export interface MongoAutocompleteResult extends SqlAutocompleteResult {}

type FindModifier = {
    method: 'skip' | 'offset';
    parameters: unknown;
};

type Command =
    | {
          method: 'find';
          collectionName: string;
          parameters: unknown;
          modifiers: FindModifier[];
      }
    | {
          method: 'insertOne';
          collectionName: string;
          parameters: unknown;
      };

type OnParseCommand = (command: Command) => void;

class CustomVisitor extends MongoParserVisitor<unknown> {
    onParseCommand: OnParseCommand;

    constructor(onParseCommand: OnParseCommand) {
        super();
        this.onParseCommand = onParseCommand;
    }

    visitCollectionOperation = (context: CollectionOperationContext): void => {
        const collectionName = context.collectionName().getText();
        const methodContext = context.collectionMethod().getChild(0);

        if (methodContext instanceof FindMethodContext) {
            // TODO: MONGO parse params with JSON5
            const parameters = methodContext.findParam().getText();
            const modifiers: FindModifier[] = methodContext
                .findModifier()
                .map((findModifierContext) => ({
                    // TODO: MONGO fix assertion
                    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                    method: findModifierContext.getChild(1)!.getText() as FindModifier['method'],
                    parameters: findModifierContext.number().getText(),
                }));

            this.onParseCommand({collectionName, method: 'find', parameters, modifiers});
            return;
        }

        if (methodContext instanceof InsertOneMethodContext) {
            // TODO: MONGO parse params with JSON5
            const parameters = methodContext.insertOneParam().getText();

            this.onParseCommand({collectionName, method: 'insertOne', parameters});
            return;
        }

        throw new Error('Unhandled method context: ' + methodContext?.getText());
    };
}

export function extractCommandsFromMongoQuery(query: string): Command[] {
    const parser = createParser(MongoLexer, MongoParser, query);

    const parseResults: Command[] = [];
    const onParseStatement: OnParseCommand = (parseResult) => {
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
