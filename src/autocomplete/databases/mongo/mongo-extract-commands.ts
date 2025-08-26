import json5 from 'json5';
import {
    AggregateMethodContext,
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
    PingMethodContext,
    ReplSetGetStatusMethodContext,
    ReturnKeyModifierContext,
    ServerInfoMethodContext,
    ServerStatusMethodContext,
    ShowRecordIdModifierContext,
    SkipModifierContext,
    SortModifierContext,
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
            const collectionName = formatJson5(
                methodContext.databaseCreateCollectionArgument1().getText(),
            );
            const options = formatJson5(
                methodContext.databaseCreateCollectionArgument2()?.getText(),
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
            const filter = formatJson5(methodContext.databaseListCollectionsArgument1()?.getText());
            const options = formatJson5(
                methodContext.databaseListCollectionsArgument2()?.getText(),
            );

            return makeCommandResult({
                type: 'database',
                method: 'listCollections',
                filter,
                options,
            });
        }

        if (methodContext instanceof DatabaseRenameCollectionMethodContext) {
            const currentName = formatJson5(
                methodContext.databaseRenameCollectionArgument1().getText(),
            );
            const newName = formatJson5(
                methodContext.databaseRenameCollectionArgument2().getText(),
            );
            const options = formatJson5(
                methodContext.databaseRenameCollectionArgument3()?.getText(),
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
            const collectionName = formatJson5(
                methodContext.databaseDropCollectionArgument1().getText(),
            );
            const options = formatJson5(methodContext.databaseDropCollectionArgument2()?.getText());

            return makeCommandResult({
                type: 'database',
                method: 'dropCollection',
                collectionName,
                options,
            });
        }

        if (methodContext instanceof DatabaseDropDatabaseMethodContext) {
            const options = formatJson5(methodContext.databaseDropDatabaseArgument()?.getText());

            return makeCommandResult({
                type: 'database',
                method: 'dropDatabase',
                options,
            });
        }

        if (methodContext instanceof DatabaseCreateIndexMethodContext) {
            const collectionName = formatJson5(
                methodContext.databaseCreateIndexArgument1().getText(),
            );
            const indexSpec = formatJson5(methodContext.databaseCreateIndexArgument2().getText());
            const options = formatJson5(methodContext.databaseCreateIndexArgument3()?.getText());

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
            const collectionName = formatJson5(
                methodContext.databaseIndexInformationArgument1().getText(),
            );
            const options = formatJson5(
                methodContext.databaseIndexInformationArgument2()?.getText(),
            );

            return makeCommandResult({
                type: 'database',
                method: 'indexInformation',
                collectionName,
                options,
            });
        }

        if (methodContext instanceof DatabaseRunCursorCommandMethodContext) {
            const document = formatJson5(
                methodContext.databaseRunCursorCommandArgument1().getText(),
            );
            const options = formatJson5(
                methodContext.databaseRunCursorCommandArgument2()?.getText(),
            );

            return makeCommandResult({
                type: 'database',
                method: 'runCursorCommand',
                document,
                options,
            });
        }

        if (methodContext instanceof DatabaseStatsMethodContext) {
            const options = formatJson5(methodContext.databaseStatsArgument()?.getText());

            return makeCommandResult({
                type: 'database',
                method: 'stats',
                options,
            });
        }

        if (methodContext instanceof DatabaseProfilingLevelMethodContext) {
            const options = formatJson5(methodContext.databaseProfilingLevelArgument()?.getText());

            return makeCommandResult({
                type: 'database',
                method: 'profilingLevel',
                options,
            });
        }

        if (methodContext instanceof DatabaseSetProfilingLevelMethodContext) {
            const level = formatJson5(methodContext.databaseSetProfilingLevelArgument1().getText());
            const options = formatJson5(
                methodContext.databaseSetProfilingLevelArgument2()?.getText(),
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
    const document = formatJson5(context.databaseCommandArgument1().getText());
    const options = formatJson5(context.databaseCommandArgument2()?.getText());

    return {
        document,
        options,
    };
}

function parseDatabaseRemoveUserMethodContext(
    context: DatabaseRemoveUserMethodContext,
): Pick<DatabaseRemoveUserCommand, 'username' | 'options'> {
    const username = formatJson5(context.databaseRemoveUserArgument1().getText());
    const options = formatJson5(context.databaseRemoveUserArgument2()?.getText());

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
            const options = formatJson5(childContext.buildInfoArgument()?.getText());

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
            const options = formatJson5(childContext.serverInfoArgument()?.getText());

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
            const options = formatJson5(childContext.serverStatusArgument()?.getText());

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
            const options = formatJson5(childContext.pingArgument()?.getText());

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
            const options = formatJson5(childContext.listDatabasesArgument()?.getText());

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
            const options = formatJson5(childContext.replSetGetStatusArgument()?.getText());

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
            const collectionName = formatJson5(
                childContext.validateCollectionArgument1().getText(),
            );
            const options = formatJson5(childContext.validateCollectionArgument2()?.getText());

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

export function parseQuotedCollectionName(quotedCollectionName: string): string {
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
            const parameters = formatJson5(methodContext.collectionFindOneArgument1()?.getText());
            const options = formatJson5(methodContext.collectionFindOneArgument2()?.getText());

            return makeCommandResult({
                collectionName,
                type: 'collection',
                method: 'findOne',
                parameters,
                options,
            });
        }

        if (methodContext instanceof CollectionFindOneAndDeleteMethodContext) {
            const parameters = formatJson5(
                methodContext.collectionFindOneAndDeleteArgument1().getText(),
            );
            const options = formatJson5(
                methodContext.collectionFindOneAndDeleteArgument2()?.getText(),
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
            const parameters = formatJson5(
                methodContext.collectionFindOneAndReplaceArgument1().getText(),
            );
            const replacement = formatJson5(
                methodContext.collectionFindOneAndReplaceArgument2().getText(),
            );
            const options = formatJson5(
                methodContext.collectionFindOneAndReplaceArgument3()?.getText(),
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
            const parameters = formatJson5(
                methodContext.collectionFindOneAndUpdateArgument1().getText(),
            );
            const newValues = formatJson5(
                methodContext.collectionFindOneAndUpdateArgument2().getText(),
            );
            const options = formatJson5(
                methodContext.collectionFindOneAndUpdateArgument3()?.getText(),
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
            const document = formatJson5(methodContext.collectionInsertOneArgument1().getText());
            const options = formatJson5(methodContext.collectionInsertOneArgument2()?.getText());

            return makeCommandResult({
                collectionName,
                type: 'collection',
                method: 'insertOne',
                document,
                options,
            });
        }

        if (methodContext instanceof CollectionInsertManyMethodContext) {
            const documents = formatJson5(methodContext.collectionInsertManyArgument1().getText());
            const options = formatJson5(methodContext.collectionInsertManyArgument2()?.getText());

            return makeCommandResult({
                collectionName,
                type: 'collection',
                method: 'insertMany',
                documents,
                options,
            });
        }

        if (methodContext instanceof CollectionBulkWriteMethodContext) {
            const operations = formatJson5(methodContext.collectionBulkWriteArgument1().getText());
            const options = formatJson5(methodContext.collectionBulkWriteArgument2()?.getText());

            return makeCommandResult({
                collectionName,
                type: 'collection',
                method: 'bulkWrite',
                operations,
                options,
            });
        }

        if (methodContext instanceof CollectionUpdateOneMethodContext) {
            const filter = formatJson5(methodContext.collectionUpdateOneArgument1().getText());
            const updateParameters = formatJson5(
                methodContext.collectionUpdateOneArgument2()?.getText(),
            );
            const options = formatJson5(methodContext.collectionUpdateOneArgument3()?.getText());

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
            const filter = formatJson5(methodContext.collectionUpdateManyArgument1().getText());
            const updateParameters = formatJson5(
                methodContext.collectionUpdateManyArgument2()?.getText(),
            );
            const options = formatJson5(methodContext.collectionUpdateManyArgument3()?.getText());

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
            const filter = formatJson5(methodContext.collectionReplaceOneArgument1().getText());
            const replacement = formatJson5(
                methodContext.collectionReplaceOneArgument2()?.getText(),
            );
            const options = formatJson5(methodContext.collectionReplaceOneArgument3()?.getText());

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
            const filter = formatJson5(methodContext.collectionDeleteOneArgument1()?.getText());
            const options = formatJson5(methodContext.collectionDeleteOneArgument2()?.getText());

            return makeCommandResult({
                collectionName,
                type: 'collection',
                method: 'deleteOne',
                filter,
                options,
            });
        }

        if (methodContext instanceof CollectionDeleteManyMethodContext) {
            const filter = formatJson5(methodContext.collectionDeleteManyArgument1()?.getText());
            const options = formatJson5(methodContext.collectionDeleteManyArgument2()?.getText());

            return makeCommandResult({
                collectionName,
                type: 'collection',
                method: 'deleteMany',
                filter,
                options,
            });
        }

        if (methodContext instanceof CollectionRenameMethodContext) {
            const newName = formatJson5(methodContext.collectionRenameArgument1()?.getText());
            const options = formatJson5(methodContext.collectionRenameArgument2()?.getText());

            return makeCommandResult({
                collectionName,
                type: 'collection',
                method: 'rename',
                newName,
                options,
            });
        }

        if (methodContext instanceof CollectionDropMethodContext) {
            const options = formatJson5(methodContext.collectionDropArgument()?.getText());

            return makeCommandResult({
                collectionName,
                type: 'collection',
                method: 'drop',
                options,
            });
        }

        if (methodContext instanceof CollectionIsCappedMethodContext) {
            const options = formatJson5(methodContext.collectionIsCappedArgument()?.getText());

            return makeCommandResult({
                collectionName,
                type: 'collection',
                method: 'isCapped',
                options,
            });
        }

        if (methodContext instanceof CollectionCreateIndexMethodContext) {
            const indexSpec = formatJson5(methodContext.collectionCreateIndexArgument1().getText());
            const options = formatJson5(methodContext.collectionCreateIndexArgument2()?.getText());

            return makeCommandResult({
                collectionName,
                type: 'collection',
                method: 'createIndex',
                indexSpec,
                options,
            });
        }

        if (methodContext instanceof CollectionCreateIndexesMethodContext) {
            const indexSpecs = formatJson5(
                methodContext.collectionCreateIndexesArgument1().getText(),
            );
            const options = formatJson5(
                methodContext.collectionCreateIndexesArgument2()?.getText(),
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
            const index = formatJson5(methodContext.collectionDropIndexArgument1().getText());
            const options = formatJson5(methodContext.collectionDropIndexArgument2()?.getText());

            return makeCommandResult({
                collectionName,
                type: 'collection',
                method: 'dropIndex',
                index,
                options,
            });
        }

        if (methodContext instanceof CollectionDropIndexesMethodContext) {
            const options = formatJson5(methodContext.collectionDropIndexesArgument()?.getText());

            return makeCommandResult({
                collectionName,
                type: 'collection',
                method: 'dropIndexes',
                options,
            });
        }

        if (methodContext instanceof CollectionListIndexesMethodContext) {
            const options = formatJson5(methodContext.collectionListIndexesArgument()?.getText());

            return makeCommandResult({
                collectionName,
                type: 'collection',
                method: 'listIndexes',
                options,
            });
        }

        if (methodContext instanceof CollectionIndexesMethodContext) {
            const options = formatJson5(methodContext.collectionIndexesArgument()?.getText());

            return makeCommandResult({
                collectionName,
                type: 'collection',
                method: 'indexes',
                options,
            });
        }

        if (methodContext instanceof CollectionIndexExistsMethodContext) {
            const indexes = formatJson5(methodContext.collectionIndexExistsArgument1().getText());
            const options = formatJson5(methodContext.collectionIndexExistsArgument2()?.getText());

            return makeCommandResult({
                collectionName,
                type: 'collection',
                method: 'indexExists',
                indexes,
                options,
            });
        }

        if (methodContext instanceof CollectionIndexInformationMethodContext) {
            const options = formatJson5(
                methodContext.collectionIndexInformationArgument()?.getText(),
            );

            return makeCommandResult({
                collectionName,
                type: 'collection',
                method: 'indexInformation',
                options,
            });
        }

        if (methodContext instanceof CollectionEstimatedDocumentCountMethodContext) {
            const options = formatJson5(
                methodContext.collectionEstimatedDocumentCountArgument()?.getText(),
            );

            return makeCommandResult({
                collectionName,
                type: 'collection',
                method: 'estimatedDocumentCount',
                options,
            });
        }

        if (methodContext instanceof CollectionCountDocumentsMethodContext) {
            const filter = formatJson5(
                methodContext.collectionCountDocumentsArgument1()?.getText(),
            );
            const options = formatJson5(
                methodContext.collectionCountDocumentsArgument2()?.getText(),
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
            const key = formatJson5(methodContext.collectionDistinctArgument1().getText());
            const filter = formatJson5(methodContext.collectionDistinctArgument2()?.getText());
            const options = formatJson5(methodContext.collectionDistinctArgument3()?.getText());

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
    const pipeline = formatJson5(context.aggregateArgument1()?.getText());
    const options = formatJson5(context.aggregateArgument2()?.getText());

    const explainMethodContext = context.explainMethod();

    let explain: CollectionAggregateCommand['explain'] | undefined;
    if (explainMethodContext) {
        const explainParameters = formatJson5(
            explainMethodContext.explainMethodArgument()?.getText(),
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
    const findParameters = formatJson5(context.collectionFindMethodArgument1()?.getText());
    const findOptions = formatJson5(context.collectionFindMethodArgument2()?.getText());

    const modifierContexts = context.collectionFindMethodModifier();
    const modifiers: FindModifier[] = modifierContexts.map(parseFindMethodModifierContext);

    const explainMethodContext = context.explainMethod();

    let explain: CollectionFindCommand['explain'] | undefined;
    if (explainMethodContext) {
        const explainParameters = formatJson5(
            explainMethodContext.explainMethodArgument()?.getText(),
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
            parameters: formatJson5(childContext.skipModifierArgument().getText()),
        };
    }
    if (childContext instanceof LimitModifierContext) {
        return {
            method: 'limit',
            parameters: formatJson5(childContext.limitModifierArgument().getText()),
        };
    }
    if (childContext instanceof FilterModifierContext) {
        return {
            method: 'filter',
            parameters: formatJson5(childContext.filterModifierArgument().getText()),
        };
    }
    if (childContext instanceof MinModifierContext) {
        return {
            method: 'min',
            parameters: formatJson5(childContext.minModifierArgument().getText()),
        };
    }
    if (childContext instanceof MaxModifierContext) {
        return {
            method: 'max',
            parameters: formatJson5(childContext.maxModifierArgument().getText()),
        };
    }
    if (childContext instanceof ReturnKeyModifierContext) {
        return {
            method: 'returnKey',
            parameters: formatJson5(childContext.returnKeyModifierArgument().getText()),
        };
    }
    if (childContext instanceof ShowRecordIdModifierContext) {
        return {
            method: 'showRecordId',
            parameters: formatJson5(childContext.showRecordIdModifierArgument().getText()),
        };
    }
    if (childContext instanceof SortModifierContext) {
        return {
            method: 'sort',
            parameters: formatJson5(childContext.sortModifierArgument1().getText()),
            options: formatJson5(childContext.sortModifierArgument2()?.getText()),
        };
    }
    if (childContext instanceof HintModifierContext) {
        return {
            method: 'hint',
            parameters: formatJson5(childContext.hintModifierArgument().getText()),
        };
    }

    throw newParsingError('Modifier is not implemented: ' + childContext?.getText());
}

function formatJson5(string?: string): unknown | undefined {
    return string ? json5.parse<unknown>(string) : undefined;
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
