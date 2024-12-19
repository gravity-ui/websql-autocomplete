import {CursorPosition, SqlAutocompleteResult} from '../../shared/autocomplete-types';
import {parseQuery, parseQueryWithoutCursor} from '../../shared/autocomplete';
import {separateQueryAndCursor} from '../../shared/parse-query-with-cursor';
import {mongoAutocompleteData} from './mongo-autocomplete';
import {MongoParser} from './generated/MongoParser';
import {
    ExtractStatementPositionsResult,
    extractStatementPositionsFromQuery,
} from '../../shared/extract-statement-positions-from-query';

export {
    extractMongoCommandsFromQuery,
    ParsingError as CommandsParsingError,
    UnexpectedError as UnexpectedCommandsParsingError,
    FindModifier,
    Command,
    FindCommand,
    FindOneCommand,
    FindOneAndDeleteCommand,
    FindOneAndReplaceCommand,
    FindOneAndUpdateCommand,
    InsertOneCommand,
    InsertManyCommand,
    ExtractMongoCommandsFromQueryResult,
    BulkWriteCommand,
    UpdateOneCommand,
    UpdateManyCommand,
    ReplaceOneCommand,
    DeleteOneCommand,
    DeleteManyCommand,
    RenameCommand,
    DropCommand,
    IsCappedCommand,
    CreateIndexCommand,
    CreateIndexesCommand,
    DropIndexCommand,
    DropIndexesCommand,
    ListIndexesCommand,
    IndexesCommand,
    IndexExistsCommand,
    IndexInformationCommand,
    EstimatedDocumentCountCommand,
    CountDocumentsCommand,
} from './mongo-extract-commands';

export interface MongoAutocompleteResult extends SqlAutocompleteResult {
    suggestCollections?: boolean;
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

export function parseMongoQueryWithCursor(queryWithCursor: string): MongoAutocompleteResult {
    return parseMongoQuery(...separateQueryAndCursor(queryWithCursor));
}

export function extractMongoStatementPositionsFromQuery(
    query: string,
): ExtractStatementPositionsResult {
    return extractStatementPositionsFromQuery(
        query,
        mongoAutocompleteData.Lexer,
        mongoAutocompleteData.Parser,
        mongoAutocompleteData.tokenDictionary.SPACE,
        [mongoAutocompleteData.tokenDictionary.SPACE],
        mongoAutocompleteData.tokenDictionary.SEMICOLON,
        MongoParser.RULE_command,
        mongoAutocompleteData.getParseTree,
    );
}
