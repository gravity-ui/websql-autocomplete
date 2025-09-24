import {
    AggregateMethodContext,
    ArrayContext,
    BooleanContext,
    BuildInfoMethodContext,
    CollectionBulkWriteMethodContext,
    CollectionCountDocumentsMethodContext,
    CollectionCreateIndexMethodContext,
    CollectionCreateIndexesMethodContext,
    CollectionDeleteManyMethodContext,
    CollectionDeleteOneMethodContext,
    CollectionDistinctMethodContext,
    CollectionDropIndexMethodContext,
    CollectionDropIndexesMethodContext,
    CollectionDropMethodContext,
    CollectionEstimatedDocumentCountMethodContext,
    CollectionFindMethodContext,
    CollectionFindMethodModifierContext,
    CollectionFindOneAndDeleteMethodContext,
    CollectionFindOneAndReplaceMethodContext,
    CollectionFindOneAndUpdateMethodContext,
    CollectionFindOneMethodContext,
    CollectionIndexExistsMethodContext,
    CollectionIndexInformationMethodContext,
    CollectionIndexesMethodContext,
    CollectionInsertManyMethodContext,
    CollectionInsertOneMethodContext,
    CollectionIsCappedMethodContext,
    CollectionListIndexesMethodContext,
    CollectionOperationContext,
    CollectionRenameMethodContext,
    CollectionReplaceOneMethodContext,
    CollectionUpdateManyMethodContext,
    CollectionUpdateOneMethodContext,
    DatabaseAdminMethodContext,
    DatabaseCollectionMethodContext,
    DatabaseCommandMethodContext,
    DatabaseCreateCollectionMethodContext,
    DatabaseCreateIndexMethodContext,
    DatabaseDropCollectionMethodContext,
    DatabaseDropDatabaseMethodContext,
    DatabaseIndexInformationMethodContext,
    DatabaseListCollectionsMethodContext,
    DatabaseOperationContext,
    DatabaseProfilingLevelMethodContext,
    DatabaseRemoveUserMethodContext,
    DatabaseRenameCollectionMethodContext,
    DatabaseRunCursorCommandMethodContext,
    DatabaseSetProfilingLevelMethodContext,
    DatabaseStatsMethodContext,
    FilterModifierContext,
    HintModifierContext,
    LimitModifierContext,
    ListDatabasesMethodContext,
    MaxModifierContext,
    MinModifierContext,
    MongoParser,
    NullContext,
    NumberContext,
    ObjectContext,
    PingMethodContext,
    ReplSetGetStatusMethodContext,
    ReturnKeyModifierContext,
    ServerInfoMethodContext,
    ServerStatusMethodContext,
    ShowRecordIdModifierContext,
    SkipModifierContext,
    SortModifierContext,
    StringContext,
    ValidateCollectionMethodContext,
} from './generated/MongoParser';
import {MongoParserVisitor} from './generated/MongoParserVisitor';
import {ParserSyntaxError, SqlErrorListener, createParser} from '../../shared';
import {MongoLexer} from './generated/MongoLexer';
import {getParseTree} from './mongo-autocomplete';
import {ParseTree} from 'antlr4ng';

export type FindModifier =
    | {
          method:
              | 'skip'
              | 'filter'
              | 'min'
              | 'max'
              | 'returnKey'
              | 'showRecordId'
              | 'limit'
              | 'hint';
          parameters: unknown;
      }
    | {method: 'sort'; parameters?: unknown; options?: unknown};

export interface ExplainParameters {
    parameters?: unknown;
}

interface CollectionCommandBase {
    type: 'collection';
}

interface DatabaseCommandBase {
    type: 'database';
}

export interface CollectionFindCommand extends CollectionCommandBase {
    method: 'find';
    collectionName: string;
    parameters?: unknown;
    options?: unknown;
    explain?: ExplainParameters;
    modifiers: FindModifier[];
}

export interface CollectionFindOneCommand extends CollectionCommandBase {
    method: 'findOne';
    collectionName: string;
    parameters?: unknown;
    options?: unknown;
}

export interface CollectionFindOneAndDeleteCommand extends CollectionCommandBase {
    method: 'findOneAndDelete';
    collectionName: string;
    parameters: unknown;
    options?: unknown;
}

export interface CollectionFindOneAndReplaceCommand extends CollectionCommandBase {
    method: 'findOneAndReplace';
    collectionName: string;
    parameters: unknown;
    replacement: unknown;
    options?: unknown;
}

export interface CollectionFindOneAndUpdateCommand extends CollectionCommandBase {
    method: 'findOneAndUpdate';
    collectionName: string;
    parameters: unknown;
    newValues: unknown;
    options?: unknown;
}

export interface CollectionInsertOneCommand extends CollectionCommandBase {
    method: 'insertOne';
    collectionName: string;
    document: unknown;
    options?: unknown;
}

export interface CollectionInsertManyCommand extends CollectionCommandBase {
    method: 'insertMany';
    collectionName: string;
    documents: unknown;
    options?: unknown;
}

export interface CollectionBulkWriteCommand extends CollectionCommandBase {
    method: 'bulkWrite';
    collectionName: string;
    operations: unknown;
    options?: unknown;
}

export interface CollectionUpdateOneCommand extends CollectionCommandBase {
    method: 'updateOne';
    collectionName: string;
    filter: unknown;
    updateParameters: unknown;
    options?: unknown;
}

export interface CollectionUpdateManyCommand extends CollectionCommandBase {
    method: 'updateMany';
    collectionName: string;
    filter: unknown;
    updateParameters: unknown;
    options?: unknown;
}

export interface CollectionReplaceOneCommand extends CollectionCommandBase {
    method: 'replaceOne';
    collectionName: string;
    filter: unknown;
    replacement: unknown;
    options?: unknown;
}

export interface CollectionDeleteOneCommand extends CollectionCommandBase {
    method: 'deleteOne';
    collectionName: string;
    filter?: unknown;
    options?: unknown;
}

export interface CollectionDeleteManyCommand extends CollectionCommandBase {
    method: 'deleteMany';
    collectionName: string;
    filter?: unknown;
    options?: unknown;
}

export interface CollectionRenameCommand extends CollectionCommandBase {
    method: 'rename';
    collectionName: string;
    newName: unknown;
    options?: unknown;
}

export interface CollectionDropCommand extends CollectionCommandBase {
    method: 'drop';
    collectionName: string;
    options?: unknown;
}

export interface CollectionIsCappedCommand extends CollectionCommandBase {
    method: 'isCapped';
    collectionName: string;
    options?: unknown;
}

export interface CollectionCreateIndexCommand extends CollectionCommandBase {
    method: 'createIndex';
    collectionName: string;
    indexSpec: unknown;
    options?: unknown;
}

export interface CollectionCreateIndexesCommand extends CollectionCommandBase {
    method: 'createIndexes';
    collectionName: string;
    indexSpecs: unknown;
    options?: unknown;
}

export interface CollectionDropIndexCommand extends CollectionCommandBase {
    method: 'dropIndex';
    collectionName: string;
    index: unknown;
    options?: unknown;
}

export interface CollectionDropIndexesCommand extends CollectionCommandBase {
    method: 'dropIndexes';
    collectionName: string;
    options?: unknown;
}

export interface CollectionListIndexesCommand extends CollectionCommandBase {
    method: 'listIndexes';
    collectionName: string;
    options?: unknown;
}

export interface CollectionIndexesCommand extends CollectionCommandBase {
    method: 'indexes';
    collectionName: string;
    options?: unknown;
}

export interface CollectionIndexExistsCommand extends CollectionCommandBase {
    method: 'indexExists';
    collectionName: string;
    indexes: unknown;
    options?: unknown;
}

export interface CollectionIndexInformationCommand extends CollectionCommandBase {
    method: 'indexInformation';
    collectionName: string;
    options?: unknown;
}

export interface CollectionEstimatedDocumentCountCommand extends CollectionCommandBase {
    method: 'estimatedDocumentCount';
    collectionName: string;
    options?: unknown;
}

export interface CollectionCountDocumentsCommand extends CollectionCommandBase {
    method: 'countDocuments';
    collectionName: string;
    filter?: unknown;
    options?: unknown;
}

export interface CollectionDistinctCommand extends CollectionCommandBase {
    method: 'distinct';
    collectionName: string;
    key: unknown;
    filter?: unknown;
    options?: unknown;
}

export interface CollectionAggregateCommand extends CollectionCommandBase {
    method: 'aggregate';
    collectionName: string;
    pipeline?: unknown;
    options?: unknown;
    explain?: ExplainParameters;
}

export interface DatabaseCreateCollectionCommand extends DatabaseCommandBase {
    method: 'createCollection';
    collectionName: unknown;
    options?: unknown;
}

export interface DatabaseCommandCommand extends DatabaseCommandBase {
    method: 'command';
    document: unknown;
    options?: unknown;
}

export interface DatabaseAggregateCommand
    extends DatabaseCommandBase,
        Omit<CollectionAggregateCommand, 'collectionName' | 'type'> {}

export interface DatabaseListCollectionsCommand extends DatabaseCommandBase {
    method: 'listCollections';
    filter?: unknown;
    options?: unknown;
}

export interface DatabaseRenameCollectionCommand extends DatabaseCommandBase {
    method: 'renameCollection';
    currentName: unknown;
    newName: unknown;
    options?: unknown;
}

export interface DatabaseDropCollectionCommand extends DatabaseCommandBase {
    method: 'dropCollection';
    collectionName: unknown;
    options?: unknown;
}

export interface DatabaseDropDatabaseCommand extends DatabaseCommandBase {
    method: 'dropDatabase';
    options?: unknown;
}

export interface DatabaseCreateIndexCommand extends DatabaseCommandBase {
    method: 'createIndex';
    collectionName: unknown;
    indexSpec: unknown;
    options?: unknown;
}

export interface DatabaseRemoveUserCommand extends DatabaseCommandBase {
    method: 'removeUser';
    username: unknown;
    options?: unknown;
}

export interface DatabaseIndexInformationCommand extends DatabaseCommandBase {
    method: 'indexInformation';
    collectionName: unknown;
    options?: unknown;
}

export interface DatabaseRunCursorCommandCommand extends DatabaseCommandBase {
    method: 'runCursorCommand';
    document: unknown;
    options?: unknown;
}

export interface DatabaseStatsCommand extends DatabaseCommandBase {
    method: 'stats';
    options?: unknown;
}

export interface DatabaseProfilingLevelCommand extends DatabaseCommandBase {
    method: 'profilingLevel';
    options?: unknown;
}

export interface DatabaseSetProfilingLevelCommand extends DatabaseCommandBase {
    method: 'setProfilingLevel';
    level: unknown;
    options?: unknown;
}

export interface DatabaseAdminCommand extends DatabaseCommandBase {
    method: 'admin';
    childMethod: ChildAdminMethod;
}

export type ChildAdminMethod =
    | CommonAdminMethod
    | ValidateCollectionMethod
    | RemoveUserMethod
    | CommandMethod;

export interface CommonAdminMethod {
    method:
        | 'buildInfo'
        | 'serverStatus'
        | 'serverInfo'
        | 'ping'
        | 'listDatabases'
        | 'replSetGetStatus';
    options?: unknown;
}

export interface ValidateCollectionMethod {
    method: 'validateCollection';
    collectionName: unknown;
    options?: unknown;
}

export interface RemoveUserMethod {
    method: 'removeUser';
    username: unknown;
    options?: unknown;
}

export interface CommandMethod {
    method: 'command';
    document: unknown;
    options?: unknown;
}

export type DatabaseCommand =
    | DatabaseCreateCollectionCommand
    | DatabaseCommandCommand
    | DatabaseAggregateCommand
    | DatabaseListCollectionsCommand
    | DatabaseRenameCollectionCommand
    | DatabaseDropCollectionCommand
    | DatabaseDropDatabaseCommand
    | DatabaseCreateIndexCommand
    | DatabaseRemoveUserCommand
    | DatabaseIndexInformationCommand
    | DatabaseRunCursorCommandCommand
    | DatabaseStatsCommand
    | DatabaseProfilingLevelCommand
    | DatabaseSetProfilingLevelCommand
    | DatabaseAdminCommand;

export type CollectionCommand =
    | CollectionFindCommand
    | CollectionFindOneCommand
    | CollectionFindOneAndDeleteCommand
    | CollectionFindOneAndReplaceCommand
    | CollectionFindOneAndUpdateCommand
    | CollectionInsertOneCommand
    | CollectionInsertManyCommand
    | CollectionBulkWriteCommand
    | CollectionUpdateOneCommand
    | CollectionUpdateManyCommand
    | CollectionReplaceOneCommand
    | CollectionDeleteOneCommand
    | CollectionDeleteManyCommand
    | CollectionRenameCommand
    | CollectionDropCommand
    | CollectionIsCappedCommand
    | CollectionCreateIndexCommand
    | CollectionCreateIndexesCommand
    | CollectionDropIndexCommand
    | CollectionDropIndexesCommand
    | CollectionListIndexesCommand
    | CollectionIndexesCommand
    | CollectionIndexExistsCommand
    | CollectionIndexInformationCommand
    | CollectionEstimatedDocumentCountCommand
    | CollectionCountDocumentsCommand
    | CollectionDistinctCommand
    | CollectionAggregateCommand;

export type Command = CollectionCommand | DatabaseCommand;

export interface ParsingError {
    type: 'parsingError';
    message: string;
}

export interface UnexpectedError {
    type: 'unexpectedError';
    message: unknown;
}

type ExtractionError = ParsingError | UnexpectedError;

interface CommandParsingResult {
    command: Command;
    error?: undefined;
}

interface CommandParsingError {
    command?: undefined;
    error: ExtractionError;
}

export type ExtractMongoCommandsFromQueryResult =
    | {commands: Command[]; parseSyntaxErrors?: undefined; parseCommandErrors?: undefined}
    | {parseSyntaxErrors: ParserSyntaxError[]; parseCommandErrors?: undefined; commands?: undefined}
    | {
          parseCommandErrors: ExtractionError[];
          parseSyntaxErrors?: undefined;
          commands?: undefined;
      };

function newParsingError(message: string): ParsingError {
    return {
        type: 'parsingError',
        message,
    };
}

function newUnexpectedError(message: unknown): UnexpectedError {
    return {
        type: 'unexpectedError',
        message,
    };
}

class CommandsVisitor extends MongoParserVisitor<unknown> {
    commands: Command[] = [];
    errors: ExtractionError[] = [];

    visitCollectionOperation = (context: CollectionOperationContext): void => {
        const collectionName = context.collectionName().getText();
        const methodContext = context.collectionMethod().getChild(0);

        const result = parseCollectionMethod(collectionName, methodContext);
        if (result.command) {
            this.commands.push(result.command);
        } else {
            this.errors.push(result.error);
        }
    };
    visitDatabaseOperation = (context: DatabaseOperationContext): void => {
        const methodContext = context.databaseMethod().getChild(0);
        const result = parseDatabaseMethod(methodContext);
        if (result.command) {
            this.commands.push(result.command);
        } else {
            this.errors.push(result.error);
        }
    };
}

function parseDatabaseMethod(
    methodContext: ParseTree | null,
): CommandParsingResult | CommandParsingError {
    try {
        if (methodContext instanceof DatabaseCollectionMethodContext) {
            const collectionName = parseQuotedCollectionName(
                methodContext.quotedCollectionName().getText(),
            );
            const result = parseCollectionMethod(
                collectionName,
                methodContext.collectionMethod().getChild(0),
            );
            return result;
        }

        if (methodContext instanceof DatabaseCreateCollectionMethodContext) {
            const collectionName = parseValueContextIfExists(
                methodContext.databaseCreateCollectionArgument1(),
            );
            const options = parseValueContextIfExists(
                methodContext.databaseCreateCollectionArgument2(),
            );

            return makeCommandResult({
                type: 'database',
                method: 'createCollection',
                collectionName,
                options,
            });
        }

        if (methodContext instanceof DatabaseCommandMethodContext) {
            return makeCommandResult({
                type: 'database',
                method: 'command',
                ...parseDatabaseCommandMethodContext(methodContext),
            });
        }

        if (methodContext instanceof AggregateMethodContext) {
            return makeCommandResult({
                type: 'database',
                method: 'aggregate',
                ...parseAggregateMethodContext(methodContext),
            });
        }

        if (methodContext instanceof DatabaseListCollectionsMethodContext) {
            const filter = parseValueContextIfExists(
                methodContext.databaseListCollectionsArgument1(),
            );
            const options = parseValueContextIfExists(
                methodContext.databaseListCollectionsArgument2(),
            );

            return makeCommandResult({
                type: 'database',
                method: 'listCollections',
                filter,
                options,
            });
        }

        if (methodContext instanceof DatabaseRenameCollectionMethodContext) {
            const currentName = parseValueContextIfExists(
                methodContext.databaseRenameCollectionArgument1().quotedCollectionName(),
            );
            const newName = parseValueContextIfExists(
                methodContext.databaseRenameCollectionArgument2(),
            );
            const options = parseValueContextIfExists(
                methodContext.databaseRenameCollectionArgument3(),
            );

            return makeCommandResult({
                type: 'database',
                method: 'renameCollection',
                currentName,
                newName,
                options,
            });
        }

        if (methodContext instanceof DatabaseDropCollectionMethodContext) {
            const collectionName = parseValueContextIfExists(
                methodContext.databaseDropCollectionArgument1().quotedCollectionName(),
            );
            const options = parseValueContextIfExists(
                methodContext.databaseDropCollectionArgument2(),
            );

            return makeCommandResult({
                type: 'database',
                method: 'dropCollection',
                collectionName,
                options,
            });
        }

        if (methodContext instanceof DatabaseDropDatabaseMethodContext) {
            const options = parseValueContextIfExists(methodContext.databaseDropDatabaseArgument());

            return makeCommandResult({
                type: 'database',
                method: 'dropDatabase',
                options,
            });
        }

        if (methodContext instanceof DatabaseCreateIndexMethodContext) {
            const collectionName = parseValueContextIfExists(
                methodContext.databaseCreateIndexArgument1(),
            );
            const indexSpec = parseValueContextIfExists(
                methodContext.databaseCreateIndexArgument2(),
            );
            const options = parseValueContextIfExists(methodContext.databaseCreateIndexArgument3());

            return makeCommandResult({
                type: 'database',
                method: 'createIndex',
                collectionName,
                indexSpec,
                options,
            });
        }

        if (methodContext instanceof DatabaseRemoveUserMethodContext) {
            return makeCommandResult({
                type: 'database',
                method: 'removeUser',
                ...parseDatabaseRemoveUserMethodContext(methodContext),
            });
        }

        if (methodContext instanceof DatabaseIndexInformationMethodContext) {
            const collectionName = parseValueContextIfExists(
                methodContext.databaseIndexInformationArgument1().quotedCollectionName(),
            );
            const options = parseValueContextIfExists(
                methodContext.databaseIndexInformationArgument2(),
            );

            return makeCommandResult({
                type: 'database',
                method: 'indexInformation',
                collectionName,
                options,
            });
        }

        if (methodContext instanceof DatabaseRunCursorCommandMethodContext) {
            const document = parseValueContextIfExists(
                methodContext.databaseRunCursorCommandArgument1(),
            );
            const options = parseValueContextIfExists(
                methodContext.databaseRunCursorCommandArgument2(),
            );

            return makeCommandResult({
                type: 'database',
                method: 'runCursorCommand',
                document,
                options,
            });
        }

        if (methodContext instanceof DatabaseStatsMethodContext) {
            const options = parseValueContextIfExists(methodContext.databaseStatsArgument());

            return makeCommandResult({
                type: 'database',
                method: 'stats',
                options,
            });
        }

        if (methodContext instanceof DatabaseProfilingLevelMethodContext) {
            const options = parseValueContextIfExists(
                methodContext.databaseProfilingLevelArgument(),
            );

            return makeCommandResult({
                type: 'database',
                method: 'profilingLevel',
                options,
            });
        }

        if (methodContext instanceof DatabaseSetProfilingLevelMethodContext) {
            const level = parseValueContextIfExists(
                methodContext.databaseSetProfilingLevelArgument1(),
            );
            const options = parseValueContextIfExists(
                methodContext.databaseSetProfilingLevelArgument2(),
            );

            return makeCommandResult({
                type: 'database',
                method: 'setProfilingLevel',
                level,
                options,
            });
        }

        if (methodContext instanceof DatabaseAdminMethodContext) {
            return parseDatabaseAdminMethodContext(methodContext);
        }
    } catch (error) {
        return parseExtractionError(error);
    }

    return makeMethodNotImplementedError(methodContext?.getText());
}

function parseDatabaseCommandMethodContext(
    context: DatabaseCommandMethodContext,
): Pick<DatabaseCommandCommand, 'document' | 'options'> {
    const document = parseValueContextIfExists(context.databaseCommandArgument1());
    const options = parseValueContextIfExists(context.databaseCommandArgument2());

    return {
        document,
        options,
    };
}

function parseDatabaseRemoveUserMethodContext(
    context: DatabaseRemoveUserMethodContext,
): Pick<DatabaseRemoveUserCommand, 'username' | 'options'> {
    const username = parseValueContextIfExists(
        context.databaseRemoveUserArgument1().quotedUsername(),
    );
    const options = parseValueContextIfExists(context.databaseRemoveUserArgument2());

    return {
        username,
        options,
    };
}

function parseDatabaseAdminMethodContext(
    context: DatabaseAdminMethodContext,
): CommandParsingResult | CommandParsingError {
    const childContext = context.adminMethod().getChild(0);

    try {
        if (childContext instanceof BuildInfoMethodContext) {
            const options = parseValueContextIfExists(childContext.buildInfoArgument());

            return makeCommandResult({
                type: 'database',
                method: 'admin',
                childMethod: {
                    method: 'buildInfo',
                    options,
                },
            });
        }
        if (childContext instanceof ServerInfoMethodContext) {
            const options = parseValueContextIfExists(childContext.serverInfoArgument());

            return makeCommandResult({
                type: 'database',
                method: 'admin',
                childMethod: {
                    method: 'serverInfo',
                    options,
                },
            });
        }
        if (childContext instanceof ServerStatusMethodContext) {
            const options = parseValueContextIfExists(childContext.serverStatusArgument());

            return makeCommandResult({
                type: 'database',
                method: 'admin',
                childMethod: {
                    method: 'serverStatus',
                    options,
                },
            });
        }
        if (childContext instanceof PingMethodContext) {
            const options = parseValueContextIfExists(childContext.pingArgument());

            return makeCommandResult({
                type: 'database',
                method: 'admin',
                childMethod: {
                    method: 'ping',
                    options,
                },
            });
        }
        if (childContext instanceof ListDatabasesMethodContext) {
            const options = parseValueContextIfExists(childContext.listDatabasesArgument());

            return makeCommandResult({
                type: 'database',
                method: 'admin',
                childMethod: {
                    method: 'listDatabases',
                    options,
                },
            });
        }
        if (childContext instanceof ReplSetGetStatusMethodContext) {
            const options = parseValueContextIfExists(childContext.replSetGetStatusArgument());

            return makeCommandResult({
                type: 'database',
                method: 'admin',
                childMethod: {
                    method: 'replSetGetStatus',
                    options,
                },
            });
        }
        if (childContext instanceof ValidateCollectionMethodContext) {
            const collectionName = parseValueContextIfExists(
                childContext.validateCollectionArgument1(),
            );
            const options = parseValueContextIfExists(childContext.validateCollectionArgument2());

            return makeCommandResult({
                type: 'database',
                method: 'admin',
                childMethod: {
                    method: 'validateCollection',
                    collectionName,
                    options,
                },
            });
        }
        if (childContext instanceof DatabaseCommandMethodContext) {
            return makeCommandResult({
                type: 'database',
                method: 'admin',
                childMethod: {
                    method: 'command',
                    ...parseDatabaseCommandMethodContext(childContext),
                },
            });
        }
        if (childContext instanceof DatabaseRemoveUserMethodContext) {
            return makeCommandResult({
                type: 'database',
                method: 'admin',
                childMethod: {
                    method: 'removeUser',
                    ...parseDatabaseRemoveUserMethodContext(childContext),
                },
            });
        }
    } catch (error) {
        return parseExtractionError(error);
    }

    return makeMethodNotImplementedError(childContext?.getText());
}

function parseQuotedCollectionName(quotedCollectionName: string): string {
    return quotedCollectionName.substring(1, quotedCollectionName.length - 1);
}

function parseCollectionMethod(
    collectionName: string,
    methodContext: ParseTree | null,
): CommandParsingResult | CommandParsingError {
    try {
        if (methodContext instanceof CollectionFindMethodContext) {
            const command = parseFindMethodContext(methodContext);

            return makeCommandResult({
                ...command,
                collectionName,
                type: 'collection',
                method: 'find',
            });
        }

        if (methodContext instanceof CollectionFindOneMethodContext) {
            const parameters = parseValueContextIfExists(
                methodContext.collectionFindOneArgument1(),
            );
            const options = parseValueContextIfExists(methodContext.collectionFindOneArgument2());

            return makeCommandResult({
                collectionName,
                type: 'collection',
                method: 'findOne',
                parameters,
                options,
            });
        }

        if (methodContext instanceof CollectionFindOneAndDeleteMethodContext) {
            const parameters = parseValueContextIfExists(
                methodContext.collectionFindOneAndDeleteArgument1(),
            );
            const options = parseValueContextIfExists(
                methodContext.collectionFindOneAndDeleteArgument2(),
            );

            return makeCommandResult({
                collectionName,
                type: 'collection',
                method: 'findOneAndDelete',
                parameters,
                options,
            });
        }

        if (methodContext instanceof CollectionFindOneAndReplaceMethodContext) {
            const parameters = parseValueContextIfExists(
                methodContext.collectionFindOneAndReplaceArgument1(),
            );
            const replacement = parseValueContextIfExists(
                methodContext.collectionFindOneAndReplaceArgument2(),
            );
            const options = parseValueContextIfExists(
                methodContext.collectionFindOneAndReplaceArgument3(),
            );

            return makeCommandResult({
                collectionName,
                type: 'collection',
                method: 'findOneAndReplace',
                parameters,
                replacement,
                options,
            });
        }

        if (methodContext instanceof CollectionFindOneAndUpdateMethodContext) {
            const parameters = parseValueContextIfExists(
                methodContext.collectionFindOneAndUpdateArgument1(),
            );
            const newValues = parseValueContextIfExists(
                methodContext.collectionFindOneAndUpdateArgument2(),
            );
            const options = parseValueContextIfExists(
                methodContext.collectionFindOneAndUpdateArgument3(),
            );

            return makeCommandResult({
                collectionName,
                type: 'collection',
                method: 'findOneAndUpdate',
                parameters,
                newValues,
                options,
            });
        }

        if (methodContext instanceof CollectionInsertOneMethodContext) {
            const document = parseValueContextIfExists(
                methodContext.collectionInsertOneArgument1().documentToInsert(),
            );
            const options = parseValueContextIfExists(methodContext.collectionInsertOneArgument2());

            return makeCommandResult({
                collectionName,
                type: 'collection',
                method: 'insertOne',
                document,
                options,
            });
        }

        if (methodContext instanceof CollectionInsertManyMethodContext) {
            const documents = parseValueContexts(
                methodContext.collectionInsertManyArgument1().documentToInsert(),
            );
            const options = parseValueContextIfExists(
                methodContext.collectionInsertManyArgument2(),
            );

            return makeCommandResult({
                collectionName,
                type: 'collection',
                method: 'insertMany',
                documents,
                options,
            });
        }

        if (methodContext instanceof CollectionBulkWriteMethodContext) {
            const operations = parseValueContextIfExists(
                methodContext.collectionBulkWriteArgument1(),
            );
            const options = parseValueContextIfExists(methodContext.collectionBulkWriteArgument2());

            return makeCommandResult({
                collectionName,
                type: 'collection',
                method: 'bulkWrite',
                operations,
                options,
            });
        }

        if (methodContext instanceof CollectionUpdateOneMethodContext) {
            const filter = parseValueContextIfExists(methodContext.collectionUpdateOneArgument1());
            const updateParameters = parseValueContextIfExists(
                methodContext.collectionUpdateOneArgument2(),
            );
            const options = parseValueContextIfExists(methodContext.collectionUpdateOneArgument3());

            return makeCommandResult({
                collectionName,
                type: 'collection',
                method: 'updateOne',
                filter,
                updateParameters,
                options,
            });
        }

        if (methodContext instanceof CollectionUpdateManyMethodContext) {
            const filter = parseValueContextIfExists(methodContext.collectionUpdateManyArgument1());
            const updateParameters = parseValueContextIfExists(
                methodContext.collectionUpdateManyArgument2(),
            );
            const options = parseValueContextIfExists(
                methodContext.collectionUpdateManyArgument3(),
            );

            return makeCommandResult({
                collectionName,
                type: 'collection',
                method: 'updateMany',
                filter,
                updateParameters,
                options,
            });
        }

        if (methodContext instanceof CollectionReplaceOneMethodContext) {
            const filter = parseValueContextIfExists(methodContext.collectionReplaceOneArgument1());
            const replacement = parseValueContextIfExists(
                methodContext.collectionReplaceOneArgument2().documentToInsert(),
            );
            const options = parseValueContextIfExists(
                methodContext.collectionReplaceOneArgument3(),
            );

            return makeCommandResult({
                collectionName,
                type: 'collection',
                method: 'replaceOne',
                filter,
                replacement,
                options,
            });
        }

        if (methodContext instanceof CollectionDeleteOneMethodContext) {
            const filter = parseValueContextIfExists(methodContext.collectionDeleteOneArgument1());
            const options = parseValueContextIfExists(methodContext.collectionDeleteOneArgument2());

            return makeCommandResult({
                collectionName,
                type: 'collection',
                method: 'deleteOne',
                filter,
                options,
            });
        }

        if (methodContext instanceof CollectionDeleteManyMethodContext) {
            const filter = parseValueContextIfExists(methodContext.collectionDeleteManyArgument1());
            const options = parseValueContextIfExists(
                methodContext.collectionDeleteManyArgument2(),
            );

            return makeCommandResult({
                collectionName,
                type: 'collection',
                method: 'deleteMany',
                filter,
                options,
            });
        }

        if (methodContext instanceof CollectionRenameMethodContext) {
            const newName = parseValueContextIfExists(methodContext.collectionRenameArgument1());
            const options = parseValueContextIfExists(methodContext.collectionRenameArgument2());

            return makeCommandResult({
                collectionName,
                type: 'collection',
                method: 'rename',
                newName,
                options,
            });
        }

        if (methodContext instanceof CollectionDropMethodContext) {
            const options = parseValueContextIfExists(methodContext.collectionDropArgument());

            return makeCommandResult({
                collectionName,
                type: 'collection',
                method: 'drop',
                options,
            });
        }

        if (methodContext instanceof CollectionIsCappedMethodContext) {
            const options = parseValueContextIfExists(methodContext.collectionIsCappedArgument());

            return makeCommandResult({
                collectionName,
                type: 'collection',
                method: 'isCapped',
                options,
            });
        }

        if (methodContext instanceof CollectionCreateIndexMethodContext) {
            const indexSpec = parseValueContextIfExists(
                methodContext.collectionCreateIndexArgument1(),
            );
            const options = parseValueContextIfExists(
                methodContext.collectionCreateIndexArgument2(),
            );

            return makeCommandResult({
                collectionName,
                type: 'collection',
                method: 'createIndex',
                indexSpec,
                options,
            });
        }

        if (methodContext instanceof CollectionCreateIndexesMethodContext) {
            const indexSpecs = parseValueContextIfExists(
                methodContext.collectionCreateIndexesArgument1(),
            );
            const options = parseValueContextIfExists(
                methodContext.collectionCreateIndexesArgument2(),
            );

            return makeCommandResult({
                collectionName,
                type: 'collection',
                method: 'createIndexes',
                indexSpecs,
                options,
            });
        }

        if (methodContext instanceof CollectionDropIndexMethodContext) {
            const index = parseValueContextIfExists(methodContext.collectionDropIndexArgument1());
            const options = parseValueContextIfExists(methodContext.collectionDropIndexArgument2());

            return makeCommandResult({
                collectionName,
                type: 'collection',
                method: 'dropIndex',
                index,
                options,
            });
        }

        if (methodContext instanceof CollectionDropIndexesMethodContext) {
            const options = parseValueContextIfExists(
                methodContext.collectionDropIndexesArgument(),
            );

            return makeCommandResult({
                collectionName,
                type: 'collection',
                method: 'dropIndexes',
                options,
            });
        }

        if (methodContext instanceof CollectionListIndexesMethodContext) {
            const options = parseValueContextIfExists(
                methodContext.collectionListIndexesArgument(),
            );

            return makeCommandResult({
                collectionName,
                type: 'collection',
                method: 'listIndexes',
                options,
            });
        }

        if (methodContext instanceof CollectionIndexesMethodContext) {
            const options = parseValueContextIfExists(methodContext.collectionIndexesArgument());

            return makeCommandResult({
                collectionName,
                type: 'collection',
                method: 'indexes',
                options,
            });
        }

        if (methodContext instanceof CollectionIndexExistsMethodContext) {
            const indexNameContexts = methodContext.collectionIndexExistsArgument1().indexName();
            const indexes =
                indexNameContexts.length <= 1
                    ? parseValueContextIfExists(indexNameContexts[0])
                    : parseValueContexts(indexNameContexts);
            const options = parseValueContextIfExists(
                methodContext.collectionIndexExistsArgument2(),
            );

            return makeCommandResult({
                collectionName,
                type: 'collection',
                method: 'indexExists',
                indexes,
                options,
            });
        }

        if (methodContext instanceof CollectionIndexInformationMethodContext) {
            const options = parseValueContextIfExists(
                methodContext.collectionIndexInformationArgument(),
            );

            return makeCommandResult({
                collectionName,
                type: 'collection',
                method: 'indexInformation',
                options,
            });
        }

        if (methodContext instanceof CollectionEstimatedDocumentCountMethodContext) {
            const options = parseValueContextIfExists(
                methodContext.collectionEstimatedDocumentCountArgument(),
            );

            return makeCommandResult({
                collectionName,
                type: 'collection',
                method: 'estimatedDocumentCount',
                options,
            });
        }

        if (methodContext instanceof CollectionCountDocumentsMethodContext) {
            const filter = parseValueContextIfExists(
                methodContext.collectionCountDocumentsArgument1(),
            );
            const options = parseValueContextIfExists(
                methodContext.collectionCountDocumentsArgument2(),
            );

            return makeCommandResult({
                collectionName,
                type: 'collection',
                method: 'countDocuments',
                filter,
                options,
            });
        }

        if (methodContext instanceof CollectionDistinctMethodContext) {
            const key = parseValueContextIfExists(methodContext.collectionDistinctArgument1());
            const filter = parseValueContextIfExists(methodContext.collectionDistinctArgument2());
            const options = parseValueContextIfExists(methodContext.collectionDistinctArgument3());

            return makeCommandResult({
                collectionName,
                type: 'collection',
                method: 'distinct',
                key,
                filter,
                options,
            });
        }

        if (methodContext instanceof AggregateMethodContext) {
            return makeCommandResult({
                collectionName,
                type: 'collection',
                method: 'aggregate',
                ...parseAggregateMethodContext(methodContext),
            });
        }
    } catch (error) {
        return parseExtractionError(error);
    }

    return makeMethodNotImplementedError(methodContext?.getText());
}

function parseAggregateMethodContext(
    context: AggregateMethodContext,
): Pick<CollectionAggregateCommand, 'pipeline' | 'options' | 'explain'> {
    const pipeline = parseValueContextIfExists(context.aggregateArgument1());
    const options = parseValueContextIfExists(context.aggregateArgument2());

    const explainMethodContext = context.explainMethod();

    let explain: CollectionAggregateCommand['explain'] | undefined;
    if (explainMethodContext) {
        const explainParameters = parseValueContextIfExists(
            explainMethodContext.explainMethodArgument(),
        );
        explain = explainParameters ? {parameters: explainParameters} : {};
    }

    return {pipeline, options, explain};
}

function parseExtractionError(error: unknown): CommandParsingError {
    if (isParsingError(error)) {
        const {message} = error;
        return makeErrorResult(newParsingError(message));
    }

    return makeErrorResult(newUnexpectedError(error));
}

function makeMethodNotImplementedError(methodText?: string): CommandParsingError {
    return makeErrorResult(newParsingError('Method is not implemented: ' + methodText));
}

function makeCommandResult(command: Command): CommandParsingResult {
    return {command};
}

function makeErrorResult(error: ExtractionError): CommandParsingError {
    return {
        error,
    };
}

function isParsingError(error: unknown): error is ParsingError {
    return Boolean(
        error &&
            typeof error === 'object' &&
            'type' in error &&
            error.type === 'parsingError' &&
            'message' in error &&
            typeof error.type === 'string' &&
            typeof error.message === 'string',
    );
}

function parseFindMethodContext(
    context: CollectionFindMethodContext,
): Pick<CollectionFindCommand, 'parameters' | 'modifiers' | 'explain' | 'options'> {
    const findParameters = parseValueContextIfExists(context.collectionFindMethodArgument1());
    const findOptions = parseValueContextIfExists(context.collectionFindMethodArgument2());

    const modifierContexts = context.collectionFindMethodModifier();
    const modifiers: FindModifier[] = modifierContexts.map(parseFindMethodModifierContext);

    const explainMethodContext = context.explainMethod();

    let explain: CollectionFindCommand['explain'] | undefined;
    if (explainMethodContext) {
        const explainParameters = parseValueContextIfExists(
            explainMethodContext.explainMethodArgument(),
        );
        explain = explainParameters ? {parameters: explainParameters} : {};
    }

    return {
        parameters: findParameters,
        options: findOptions,
        modifiers,
        explain,
    };
}

function parseFindMethodModifierContext(
    context: CollectionFindMethodModifierContext,
): FindModifier {
    const childContext = context.getChild(1);

    if (childContext instanceof SkipModifierContext) {
        return {
            method: 'skip',
            parameters: parseValueContextIfExists(childContext.skipModifierArgument()),
        };
    }
    if (childContext instanceof LimitModifierContext) {
        return {
            method: 'limit',
            parameters: parseValueContextIfExists(childContext.limitModifierArgument()),
        };
    }
    if (childContext instanceof FilterModifierContext) {
        return {
            method: 'filter',
            parameters: parseValueContextIfExists(childContext.filterModifierArgument()),
        };
    }
    if (childContext instanceof MinModifierContext) {
        return {
            method: 'min',
            parameters: parseValueContextIfExists(childContext.minModifierArgument()),
        };
    }
    if (childContext instanceof MaxModifierContext) {
        return {
            method: 'max',
            parameters: parseValueContextIfExists(childContext.maxModifierArgument()),
        };
    }
    if (childContext instanceof ReturnKeyModifierContext) {
        return {
            method: 'returnKey',
            parameters: parseValueContextIfExists(childContext.returnKeyModifierArgument()),
        };
    }
    if (childContext instanceof ShowRecordIdModifierContext) {
        return {
            method: 'showRecordId',
            parameters: parseValueContextIfExists(childContext.showRecordIdModifierArgument()),
        };
    }
    if (childContext instanceof SortModifierContext) {
        return {
            method: 'sort',
            parameters: parseValueContextIfExists(childContext.sortModifierArgument1().value()),
            options: parseValueContextIfExists(childContext.sortModifierArgument2()),
        };
    }
    if (childContext instanceof HintModifierContext) {
        return {
            method: 'hint',
            parameters: parseValueContextIfExists(childContext.hintModifierArgument()),
        };
    }

    throw newParsingError('Modifier is not implemented: ' + childContext?.getText());
}

export function extractMongoCommandsFromQuery(query: string): ExtractMongoCommandsFromQueryResult {
    const parser = createParser(MongoLexer, MongoParser, query);

    const syntaxErrorListener = new SqlErrorListener(MongoParser.WS);
    parser.addErrorListener(syntaxErrorListener);

    const visitor = new CommandsVisitor();
    const parseTree = getParseTree(parser);
    visitor.visit(parseTree);

    if (syntaxErrorListener.errors.length) {
        return {
            parseSyntaxErrors: syntaxErrorListener.errors,
        };
    }

    if (visitor.errors.length) {
        return {
            parseCommandErrors: visitor.errors,
        };
    }

    return {commands: visitor.commands};
}

type AnyValueContext = {
    object?: () => ObjectContext | null;
    array?: () => ArrayContext | null;
    string?: () => StringContext | null;
    number?: () => NumberContext | null;
    null?: () => NullContext | null;
    boolean?: () => BooleanContext | null;
};

type Value = object | string | number | boolean | null | Value[];

function parseValueContextIfExists(value?: AnyValueContext | null): Value | undefined {
    if (!value) {
        return;
    }

    return parseValueContext(value);
}

function parseValueContexts(contexts: AnyValueContext[]): Value[] {
    return contexts.map(parseValueContext);
}

function parseValueContext(value: AnyValueContext): Value {
    const objectContext = value.object?.();
    const arrayContext = value.array?.();
    const stringContext = value.string?.();
    const numberContext = value.number?.();
    const nullContext = value.null?.();
    const booleanContext = value.boolean?.();

    if (objectContext) {
        const object: Record<string, unknown> = {};
        objectContext.pair().forEach((pairContext) => {
            let key = pairContext.key().getText();
            if (pairContext.key().string()) {
                // If we in the string rule, then key is quoted
                key = key.slice(1, key.length - 1);
            }

            object[key] = parseValueContext(pairContext.value());
        });
        return object;
    } else if (arrayContext) {
        return arrayContext.value().map((valueContext) => parseValueContext(valueContext));
    } else if (numberContext) {
        return Number(numberContext.getText());
    } else if (booleanContext) {
        const booleanText = booleanContext.getText();
        if (booleanText === 'true') {
            return true;
        } else if (booleanText === 'false') {
            return false;
        }
        throw new Error(`unexpected boolean value: ${booleanContext.getText()}`);
    } else if (nullContext) {
        return null;
    } else if (stringContext) {
        const rawString = stringContext.getText();
        return rawString.slice(1, rawString.length - 1);
    }

    throw new Error(`unknown value constructor: ${value.constructor.name}`);
}
