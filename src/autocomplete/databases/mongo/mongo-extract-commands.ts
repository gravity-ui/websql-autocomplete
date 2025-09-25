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
    DateFunctionContext,
    FilterModifierContext,
    HintModifierContext,
    IsoDateFunctionContext,
    LimitModifierContext,
    ListDatabasesMethodContext,
    MaxKeyFunctionContext,
    MaxModifierContext,
    MinKeyFunctionContext,
    MinModifierContext,
    MongoParser,
    NullContext,
    NumberContext,
    NumberDecimalFunctionContext,
    NumberIntFunctionContext,
    NumberLongFunctionContext,
    ObjectContext,
    ObjectIdFunctionContext,
    PingMethodContext,
    ReplSetGetStatusMethodContext,
    ReturnKeyModifierContext,
    ServerInfoMethodContext,
    ServerStatusMethodContext,
    ShowRecordIdModifierContext,
    SkipModifierContext,
    SortModifierContext,
    StringContext,
    UuidFunctionContext,
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

export type MongoFunctionParsers = Partial<{
    ObjectId: (id: unknown) => unknown;
    Date: (date?: unknown) => unknown;
    ISODate: (date?: unknown) => unknown;
    UUID: (uuid?: unknown) => unknown;
    MinKey: () => unknown;
    MaxKey: () => unknown;
    NumberDecimal: (number: unknown) => unknown;
    NumberInt: (number: unknown) => unknown;
    NumberLong: (number: unknown, radix?: unknown) => unknown;
}>;

interface ArgumentContext {
    object?: () => ObjectContext | null;
    array?: () => ArrayContext | null;
    string?: () => StringContext | null;
    number?: () => NumberContext | null;
    null?: () => NullContext | null;
    boolean?: () => BooleanContext | null;
    objectIdFunction?: () => ObjectIdFunctionContext | null;
    dateFunction?: () => DateFunctionContext | null;
    isoDateFunction?: () => IsoDateFunctionContext | null;
    uuidFunction?: () => UuidFunctionContext | null;
    minKeyFunction?: () => MinKeyFunctionContext | null;
    maxKeyFunction?: () => MaxKeyFunctionContext | null;
    numberIntFunction?: () => NumberIntFunctionContext | null;
    numberDecimalFunction?: () => NumberDecimalFunctionContext | null;
    numberLongFunction?: () => NumberLongFunctionContext | null;
}

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
    parseArgumentContext: typeof parseArgumentContext;

    constructor(currentParseArgumentContext: typeof parseArgumentContext) {
        super();

        this.parseArgumentContext = currentParseArgumentContext;
    }

    visitCollectionOperation = (context: CollectionOperationContext): void => {
        const collectionName = context.collectionName().getText();
        const methodContext = context.collectionMethod().getChild(0);

        const result = this.parseCollectionMethod(collectionName, methodContext);
        if (result.command) {
            this.commands.push(result.command);
        } else {
            this.errors.push(result.error);
        }
    };
    visitDatabaseOperation = (context: DatabaseOperationContext): void => {
        const methodContext = context.databaseMethod().getChild(0);
        const result = this.parseDatabaseMethod(methodContext);
        if (result.command) {
            this.commands.push(result.command);
        } else {
            this.errors.push(result.error);
        }
    };

    parseDatabaseMethod(
        methodContext: ParseTree | null,
    ): CommandParsingResult | CommandParsingError {
        try {
            if (methodContext instanceof DatabaseCollectionMethodContext) {
                const collectionName = parseQuotedCollectionName(
                    methodContext.quotedCollectionName().getText(),
                );
                const result = this.parseCollectionMethod(
                    collectionName,
                    methodContext.collectionMethod().getChild(0),
                );
                return result;
            }

            if (methodContext instanceof DatabaseCreateCollectionMethodContext) {
                const collectionName = this.parseArgumentContext(
                    methodContext.databaseCreateCollectionArgument1(),
                );
                const options = this.parseArgumentContext(
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
                    ...this.parseDatabaseCommandMethodContext(methodContext),
                });
            }

            if (methodContext instanceof AggregateMethodContext) {
                return makeCommandResult({
                    type: 'database',
                    method: 'aggregate',
                    ...this.parseAggregateMethodContext(methodContext),
                });
            }

            if (methodContext instanceof DatabaseListCollectionsMethodContext) {
                const filter = this.parseArgumentContext(
                    methodContext.databaseListCollectionsArgument1(),
                );
                const options = this.parseArgumentContext(
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
                const currentName = parseQuotedCollectionName(
                    methodContext
                        .databaseRenameCollectionArgument1()
                        .quotedCollectionName()
                        .getText(),
                );
                const newName = this.parseArgumentContext(
                    methodContext.databaseRenameCollectionArgument2(),
                );
                const options = this.parseArgumentContext(
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
                const collectionName = parseQuotedCollectionName(
                    methodContext
                        .databaseDropCollectionArgument1()
                        .quotedCollectionName()
                        .getText(),
                );
                const options = this.parseArgumentContext(
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
                const options = this.parseArgumentContext(
                    methodContext.databaseDropDatabaseArgument(),
                );

                return makeCommandResult({
                    type: 'database',
                    method: 'dropDatabase',
                    options,
                });
            }

            if (methodContext instanceof DatabaseCreateIndexMethodContext) {
                const collectionName = this.parseArgumentContext(
                    methodContext.databaseCreateIndexArgument1(),
                );
                const indexSpec = this.parseArgumentContext(
                    methodContext.databaseCreateIndexArgument2(),
                );
                const options = this.parseArgumentContext(
                    methodContext.databaseCreateIndexArgument3(),
                );

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
                    ...this.parseDatabaseRemoveUserMethodContext(methodContext),
                });
            }

            if (methodContext instanceof DatabaseIndexInformationMethodContext) {
                const collectionName = parseQuotedCollectionName(
                    methodContext
                        .databaseIndexInformationArgument1()
                        .quotedCollectionName()
                        .getText(),
                );
                const options = this.parseArgumentContext(
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
                const document = this.parseArgumentContext(
                    methodContext.databaseRunCursorCommandArgument1(),
                );
                const options = this.parseArgumentContext(
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
                const options = this.parseArgumentContext(methodContext.databaseStatsArgument());

                return makeCommandResult({
                    type: 'database',
                    method: 'stats',
                    options,
                });
            }

            if (methodContext instanceof DatabaseProfilingLevelMethodContext) {
                const options = this.parseArgumentContext(
                    methodContext.databaseProfilingLevelArgument(),
                );

                return makeCommandResult({
                    type: 'database',
                    method: 'profilingLevel',
                    options,
                });
            }

            if (methodContext instanceof DatabaseSetProfilingLevelMethodContext) {
                const level = this.parseArgumentContext(
                    methodContext.databaseSetProfilingLevelArgument1(),
                );
                const options = this.parseArgumentContext(
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
                return this.parseDatabaseAdminMethodContext(methodContext);
            }
        } catch (error) {
            return parseExtractionError(error);
        }

        return makeMethodNotImplementedError(methodContext?.getText());
    }
    parseDatabaseCommandMethodContext(
        context: DatabaseCommandMethodContext,
    ): Pick<DatabaseCommandCommand, 'document' | 'options'> {
        const document = this.parseArgumentContext(context.databaseCommandArgument1());
        const options = this.parseArgumentContext(context.databaseCommandArgument2());

        return {
            document,
            options,
        };
    }
    parseDatabaseRemoveUserMethodContext(
        context: DatabaseRemoveUserMethodContext,
    ): Pick<DatabaseRemoveUserCommand, 'username' | 'options'> {
        const username = this.parseArgumentContext(
            context.databaseRemoveUserArgument1().quotedUsername(),
        );
        const options = this.parseArgumentContext(context.databaseRemoveUserArgument2());

        return {
            username,
            options,
        };
    }
    parseDatabaseAdminMethodContext(
        context: DatabaseAdminMethodContext,
    ): CommandParsingResult | CommandParsingError {
        const childContext = context.adminMethod().getChild(0);

        try {
            if (childContext instanceof BuildInfoMethodContext) {
                const options = this.parseArgumentContext(childContext.buildInfoArgument());

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
                const options = this.parseArgumentContext(childContext.serverInfoArgument());

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
                const options = this.parseArgumentContext(childContext.serverStatusArgument());

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
                const options = this.parseArgumentContext(childContext.pingArgument());

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
                const options = this.parseArgumentContext(childContext.listDatabasesArgument());

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
                const options = this.parseArgumentContext(childContext.replSetGetStatusArgument());

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
                const collectionName = this.parseArgumentContext(
                    childContext.validateCollectionArgument1(),
                );
                const options = this.parseArgumentContext(
                    childContext.validateCollectionArgument2(),
                );

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
                        ...this.parseDatabaseCommandMethodContext(childContext),
                    },
                });
            }
            if (childContext instanceof DatabaseRemoveUserMethodContext) {
                return makeCommandResult({
                    type: 'database',
                    method: 'admin',
                    childMethod: {
                        method: 'removeUser',
                        ...this.parseDatabaseRemoveUserMethodContext(childContext),
                    },
                });
            }
        } catch (error) {
            return parseExtractionError(error);
        }

        return makeMethodNotImplementedError(childContext?.getText());
    }
    parseCollectionMethod(
        collectionName: string,
        methodContext: ParseTree | null,
    ): CommandParsingResult | CommandParsingError {
        try {
            if (methodContext instanceof CollectionFindMethodContext) {
                const command = this.parseFindMethodContext(methodContext);

                return makeCommandResult({
                    ...command,
                    collectionName,
                    type: 'collection',
                    method: 'find',
                });
            }

            if (methodContext instanceof CollectionFindOneMethodContext) {
                const parameters = this.parseArgumentContext(
                    methodContext.collectionFindOneArgument1(),
                );
                const options = this.parseArgumentContext(
                    methodContext.collectionFindOneArgument2(),
                );

                return makeCommandResult({
                    collectionName,
                    type: 'collection',
                    method: 'findOne',
                    parameters,
                    options,
                });
            }

            if (methodContext instanceof CollectionFindOneAndDeleteMethodContext) {
                const parameters = this.parseArgumentContext(
                    methodContext.collectionFindOneAndDeleteArgument1(),
                );
                const options = this.parseArgumentContext(
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
                const parameters = this.parseArgumentContext(
                    methodContext.collectionFindOneAndReplaceArgument1(),
                );
                const replacement = this.parseArgumentContext(
                    methodContext.collectionFindOneAndReplaceArgument2(),
                );
                const options = this.parseArgumentContext(
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
                const parameters = this.parseArgumentContext(
                    methodContext.collectionFindOneAndUpdateArgument1(),
                );
                const newValues = this.parseArgumentContext(
                    methodContext.collectionFindOneAndUpdateArgument2(),
                );
                const options = this.parseArgumentContext(
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
                const document = this.parseArgumentContext(
                    methodContext.collectionInsertOneArgument1().documentToInsert(),
                );
                const options = this.parseArgumentContext(
                    methodContext.collectionInsertOneArgument2(),
                );

                return makeCommandResult({
                    collectionName,
                    type: 'collection',
                    method: 'insertOne',
                    document,
                    options,
                });
            }

            if (methodContext instanceof CollectionInsertManyMethodContext) {
                const documents = this.parseArgumentContext(
                    methodContext.collectionInsertManyArgument1().documentToInsert(),
                );
                const options = this.parseArgumentContext(
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
                const operations = this.parseArgumentContext(
                    methodContext.collectionBulkWriteArgument1(),
                );
                const options = this.parseArgumentContext(
                    methodContext.collectionBulkWriteArgument2(),
                );

                return makeCommandResult({
                    collectionName,
                    type: 'collection',
                    method: 'bulkWrite',
                    operations,
                    options,
                });
            }

            if (methodContext instanceof CollectionUpdateOneMethodContext) {
                const filter = this.parseArgumentContext(
                    methodContext.collectionUpdateOneArgument1(),
                );
                const updateParameters = this.parseArgumentContext(
                    methodContext.collectionUpdateOneArgument2(),
                );
                const options = this.parseArgumentContext(
                    methodContext.collectionUpdateOneArgument3(),
                );

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
                const filter = this.parseArgumentContext(
                    methodContext.collectionUpdateManyArgument1(),
                );
                const updateParameters = this.parseArgumentContext(
                    methodContext.collectionUpdateManyArgument2(),
                );
                const options = this.parseArgumentContext(
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
                const filter = this.parseArgumentContext(
                    methodContext.collectionReplaceOneArgument1(),
                );
                const replacement = this.parseArgumentContext(
                    methodContext.collectionReplaceOneArgument2().documentToInsert(),
                );
                const options = this.parseArgumentContext(
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
                const filter = this.parseArgumentContext(
                    methodContext.collectionDeleteOneArgument1(),
                );
                const options = this.parseArgumentContext(
                    methodContext.collectionDeleteOneArgument2(),
                );

                return makeCommandResult({
                    collectionName,
                    type: 'collection',
                    method: 'deleteOne',
                    filter,
                    options,
                });
            }

            if (methodContext instanceof CollectionDeleteManyMethodContext) {
                const filter = this.parseArgumentContext(
                    methodContext.collectionDeleteManyArgument1(),
                );
                const options = this.parseArgumentContext(
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
                const newName = this.parseArgumentContext(
                    methodContext.collectionRenameArgument1(),
                );
                const options = this.parseArgumentContext(
                    methodContext.collectionRenameArgument2(),
                );

                return makeCommandResult({
                    collectionName,
                    type: 'collection',
                    method: 'rename',
                    newName,
                    options,
                });
            }

            if (methodContext instanceof CollectionDropMethodContext) {
                const options = this.parseArgumentContext(methodContext.collectionDropArgument());

                return makeCommandResult({
                    collectionName,
                    type: 'collection',
                    method: 'drop',
                    options,
                });
            }

            if (methodContext instanceof CollectionIsCappedMethodContext) {
                const options = this.parseArgumentContext(
                    methodContext.collectionIsCappedArgument(),
                );

                return makeCommandResult({
                    collectionName,
                    type: 'collection',
                    method: 'isCapped',
                    options,
                });
            }

            if (methodContext instanceof CollectionCreateIndexMethodContext) {
                const indexSpec = this.parseArgumentContext(
                    methodContext.collectionCreateIndexArgument1(),
                );
                const options = this.parseArgumentContext(
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
                const indexSpecs = this.parseArgumentContext(
                    methodContext.collectionCreateIndexesArgument1(),
                );
                const options = this.parseArgumentContext(
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
                const index = this.parseArgumentContext(
                    methodContext.collectionDropIndexArgument1(),
                );
                const options = this.parseArgumentContext(
                    methodContext.collectionDropIndexArgument2(),
                );

                return makeCommandResult({
                    collectionName,
                    type: 'collection',
                    method: 'dropIndex',
                    index,
                    options,
                });
            }

            if (methodContext instanceof CollectionDropIndexesMethodContext) {
                const options = this.parseArgumentContext(
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
                const options = this.parseArgumentContext(
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
                const options = this.parseArgumentContext(
                    methodContext.collectionIndexesArgument(),
                );

                return makeCommandResult({
                    collectionName,
                    type: 'collection',
                    method: 'indexes',
                    options,
                });
            }

            if (methodContext instanceof CollectionIndexExistsMethodContext) {
                const indexNameContexts = methodContext
                    .collectionIndexExistsArgument1()
                    .indexName();
                const indexes = this.parseArgumentContext(
                    indexNameContexts.length <= 1 ? indexNameContexts[0] : indexNameContexts,
                );
                const options = this.parseArgumentContext(
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
                const options = this.parseArgumentContext(
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
                const options = this.parseArgumentContext(
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
                const filter = this.parseArgumentContext(
                    methodContext.collectionCountDocumentsArgument1(),
                );
                const options = this.parseArgumentContext(
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
                const key = this.parseArgumentContext(methodContext.collectionDistinctArgument1());
                const filter = this.parseArgumentContext(
                    methodContext.collectionDistinctArgument2(),
                );
                const options = this.parseArgumentContext(
                    methodContext.collectionDistinctArgument3(),
                );

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
                    ...this.parseAggregateMethodContext(methodContext),
                });
            }
        } catch (error) {
            return parseExtractionError(error);
        }

        return makeMethodNotImplementedError(methodContext?.getText());
    }
    parseAggregateMethodContext(
        context: AggregateMethodContext,
    ): Pick<CollectionAggregateCommand, 'pipeline' | 'options' | 'explain'> {
        const pipeline = this.parseArgumentContext(context.aggregateArgument1());
        const options = this.parseArgumentContext(context.aggregateArgument2());

        const explainMethodContext = context.explainMethod();

        let explain: CollectionAggregateCommand['explain'] | undefined;
        if (explainMethodContext) {
            const explainParameters = this.parseArgumentContext(
                explainMethodContext.explainMethodArgument(),
            );
            explain = explainParameters ? {parameters: explainParameters} : {};
        }

        return {pipeline, options, explain};
    }
    parseFindMethodContext(
        context: CollectionFindMethodContext,
    ): Pick<CollectionFindCommand, 'parameters' | 'modifiers' | 'explain' | 'options'> {
        const findParameters = this.parseArgumentContext(context.collectionFindMethodArgument1());
        const findOptions = this.parseArgumentContext(context.collectionFindMethodArgument2());

        const modifierContexts = context.collectionFindMethodModifier();
        const modifiers: FindModifier[] = modifierContexts.map((modifierContext) =>
            this.parseFindMethodModifierContext(modifierContext),
        );

        const explainMethodContext = context.explainMethod();

        let explain: CollectionFindCommand['explain'] | undefined;
        if (explainMethodContext) {
            const explainParameters = this.parseArgumentContext(
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
    parseFindMethodModifierContext(context: CollectionFindMethodModifierContext): FindModifier {
        const childContext = context.getChild(1);

        if (childContext instanceof SkipModifierContext) {
            return {
                method: 'skip',
                parameters: this.parseArgumentContext(childContext.skipModifierArgument()),
            };
        }
        if (childContext instanceof LimitModifierContext) {
            return {
                method: 'limit',
                parameters: this.parseArgumentContext(childContext.limitModifierArgument()),
            };
        }
        if (childContext instanceof FilterModifierContext) {
            return {
                method: 'filter',
                parameters: this.parseArgumentContext(childContext.filterModifierArgument()),
            };
        }
        if (childContext instanceof MinModifierContext) {
            return {
                method: 'min',
                parameters: this.parseArgumentContext(childContext.minModifierArgument()),
            };
        }
        if (childContext instanceof MaxModifierContext) {
            return {
                method: 'max',
                parameters: this.parseArgumentContext(childContext.maxModifierArgument()),
            };
        }
        if (childContext instanceof ReturnKeyModifierContext) {
            return {
                method: 'returnKey',
                parameters: this.parseArgumentContext(childContext.returnKeyModifierArgument()),
            };
        }
        if (childContext instanceof ShowRecordIdModifierContext) {
            return {
                method: 'showRecordId',
                parameters: this.parseArgumentContext(childContext.showRecordIdModifierArgument()),
            };
        }
        if (childContext instanceof SortModifierContext) {
            return {
                method: 'sort',
                parameters: this.parseArgumentContext(childContext.sortModifierArgument1().value()),
                options: this.parseArgumentContext(childContext.sortModifierArgument2()),
            };
        }
        if (childContext instanceof HintModifierContext) {
            return {
                method: 'hint',
                parameters: this.parseArgumentContext(childContext.hintModifierArgument()),
            };
        }

        throw newParsingError('Modifier is not implemented: ' + childContext?.getText());
    }
}

function parseQuotedCollectionName(quotedCollectionName: string): string {
    return quotedCollectionName.substring(1, quotedCollectionName.length - 1);
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

export function extractMongoCommandsFromQuery(
    query: string,
    functionParsers?: MongoFunctionParsers,
): ExtractMongoCommandsFromQueryResult {
    const parser = createParser(MongoLexer, MongoParser, query);

    const syntaxErrorListener = new SqlErrorListener(MongoParser.WS);
    parser.addErrorListener(syntaxErrorListener);

    const visitor = new CommandsVisitor(createArgumentContextParser(functionParsers));
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

function createArgumentContextParser(
    functionParsers?: MongoFunctionParsers,
): typeof parseArgumentContext {
    return (value?: ArgumentContext | ArgumentContext[] | null) =>
        parseArgumentContext(value, functionParsers);
}

function parseArgumentContext(
    value?: ArgumentContext | ArgumentContext[] | null,
    functionParsers?: MongoFunctionParsers,
): unknown {
    if (!value) {
        return;
    }

    if (Array.isArray(value)) {
        return value.map((valueContext) => parseArgumentContext(valueContext, functionParsers));
    }

    const objectContext = value.object?.();
    if (objectContext) {
        const object: Record<string, unknown> = {};
        objectContext.pair().forEach((pairContext) => {
            let key = pairContext.key().getText();
            if (pairContext.key().string()) {
                // If we in the string rule, then key is quoted
                key = key.slice(1, key.length - 1);
            }

            object[key] = parseArgumentContext(pairContext.value(), functionParsers);
        });
        return object;
    }

    const arrayContext = value.array?.();
    if (arrayContext) {
        return arrayContext
            .value()
            .map((valueContext) => parseArgumentContext(valueContext, functionParsers));
    }

    const numberContext = value.number?.();
    if (numberContext) {
        return Number(numberContext.getText());
    }

    const booleanContext = value.boolean?.();
    if (booleanContext) {
        const booleanText = booleanContext.getText();
        if (booleanText === 'true') {
            return true;
        } else if (booleanText === 'false') {
            return false;
        }
        throw new Error(`unexpected boolean value: ${booleanContext.getText()}`);
    }

    const nullContext = value.null?.();
    if (nullContext) {
        return null;
    }

    const stringContext = value.string?.();
    if (stringContext) {
        const rawString = stringContext.getText();
        return rawString.slice(1, rawString.length - 1);
    }

    const objectIdFunctionContext = value.objectIdFunction?.();
    if (objectIdFunctionContext) {
        const objectIdParser = functionParsers?.ObjectId;
        if (!objectIdParser) {
            throw new Error('ObjectId parser is not provided to function parsers');
        }

        return objectIdParser(
            parseArgumentContext(
                objectIdFunctionContext.objectIdFunctionArgument(),
                functionParsers,
            ),
        );
    }

    const dateFunctionContext = value.dateFunction?.();
    if (dateFunctionContext) {
        const dateParser = functionParsers?.Date;
        if (!dateParser) {
            throw new Error('Date parser is not provided to function parsers');
        }

        return dateParser(
            parseArgumentContext(dateFunctionContext.dateFunctionArgument(), functionParsers),
        );
    }

    const isoDateFunctionContext = value.isoDateFunction?.();
    if (isoDateFunctionContext) {
        const isoDateParser = functionParsers?.ISODate;
        if (!isoDateParser) {
            throw new Error('ISODate parser is not provided to function parsers');
        }

        return isoDateParser(
            parseArgumentContext(isoDateFunctionContext.isoDateFunctionArgument(), functionParsers),
        );
    }

    const uuidFunctionContext = value.uuidFunction?.();
    if (uuidFunctionContext) {
        const uuidParser = functionParsers?.UUID;
        if (!uuidParser) {
            throw new Error('UUID parser is not provided to function parsers');
        }

        return uuidParser(
            parseArgumentContext(uuidFunctionContext.uuidFunctionArgument(), functionParsers),
        );
    }

    const minKeyFunctionContext = value.minKeyFunction?.();
    if (minKeyFunctionContext) {
        const minKeyParser = functionParsers?.MinKey;
        if (!minKeyParser) {
            throw new Error('MinKey parser is not provided to function parsers');
        }

        return minKeyParser();
    }

    const maxKeyFunctionContext = value.maxKeyFunction?.();
    if (maxKeyFunctionContext) {
        const maxKeyParser = functionParsers?.MaxKey;
        if (!maxKeyParser) {
            throw new Error('MaxKey parser is not provided to function parsers');
        }

        return maxKeyParser();
    }

    const numberIntFunctionContext = value.numberIntFunction?.();
    if (numberIntFunctionContext) {
        const numberIntParser = functionParsers?.NumberInt;
        if (!numberIntParser) {
            throw new Error('NumberInt parser is not provided to function parsers');
        }

        return numberIntParser(
            parseArgumentContext(
                numberIntFunctionContext.numberIntFunctionArgument(),
                functionParsers,
            ),
        );
    }

    const numberLongFunctionContext = value.numberLongFunction?.();
    if (numberLongFunctionContext) {
        const numberLongParser = functionParsers?.NumberLong;
        if (!numberLongParser) {
            throw new Error('NumberLong parser is not provided to function parsers');
        }

        return numberLongParser(
            parseArgumentContext(
                numberLongFunctionContext.numberLongFunctionArgument1(),
                functionParsers,
            ),
            parseArgumentContext(
                numberLongFunctionContext.numberLongFunctionArgument2(),
                functionParsers,
            ),
        );
    }

    const numberDecimalFunctionContext = value.numberDecimalFunction?.();
    if (numberDecimalFunctionContext) {
        const numberDecimalParser = functionParsers?.NumberDecimal;
        if (!numberDecimalParser) {
            throw new Error('NumberDecimal parser is not provided to function parsers');
        }

        return numberDecimalParser(
            parseArgumentContext(
                numberDecimalFunctionContext.numberDecimalFunctionArgument(),
                functionParsers,
            ),
        );
    }

    throw new Error(`unknown value constructor: ${value.constructor.name}`);
}
