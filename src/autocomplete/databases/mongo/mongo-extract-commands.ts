import json5 from 'json5';
import {
    AggregateMethodContext,
    BulkWriteMethodContext,
    CollectionOperationContext,
    CommandMethodContext,
    CountDocumentsMethodContext,
    CreateCollectionMethodContext,
    CreateIndexMethodContext,
    CreateIndexesMethodContext,
    DatabaseCollectionMethodContext,
    DatabaseCreateIndexMethodContext,
    DatabaseOperationContext,
    DeleteManyMethodContext,
    DeleteOneMethodContext,
    DistinctMethodContext,
    DropCollectionMethodContext,
    DropDatabaseMethodContext,
    DropIndexMethodContext,
    DropIndexesMethodContext,
    DropMethodContext,
    EstimatedDocumentCountMethodContext,
    FilterModifierContext,
    FindMethodContext,
    FindMethodModifierContext,
    FindOneAndDeleteMethodContext,
    FindOneAndReplaceMethodContext,
    FindOneAndUpdateMethodContext,
    FindOneMethodContext,
    HintModifierContext,
    IndexExistsMethodContext,
    IndexInformationMethodContext,
    IndexesMethodContext,
    InsertManyMethodContext,
    InsertOneMethodContext,
    IsCappedMethodContext,
    LimitModifierContext,
    ListCollectionsMethodContext,
    ListIndexesMethodContext,
    MaxModifierContext,
    MinModifierContext,
    MongoParser,
    RenameCollectionMethodContext,
    RenameMethodContext,
    ReplaceOneMethodContext,
    ReturnKeyModifierContext,
    ShowRecordIdModifierContext,
    SkipModifierContext,
    SortModifierContext,
    UpdateManyMethodContext,
    UpdateOneMethodContext,
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

interface ExplainParameters {
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

type DatabaseCommand =
    | DatabaseCreateCollectionCommand
    | DatabaseCommandCommand
    | DatabaseAggregateCommand
    | DatabaseListCollectionsCommand
    | DatabaseRenameCollectionCommand
    | DatabaseDropCollectionCommand
    | DatabaseDropDatabaseCommand
    | DatabaseCreateIndexCommand;

type CollectionCommand =
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

        if (methodContext instanceof CreateCollectionMethodContext) {
            const collectionName = formatJson5(methodContext.createCollectionArgument1().getText());
            const options = formatJson5(methodContext.createCollectionArgument2()?.getText());

            return makeCommandResult({
                type: 'database',
                method: 'createCollection',
                collectionName,
                options,
            });
        }

        if (methodContext instanceof CommandMethodContext) {
            const document = formatJson5(methodContext.commandArgument1().getText());
            const options = formatJson5(methodContext.commandArgument2()?.getText());

            return makeCommandResult({
                type: 'database',
                method: 'command',
                document,
                options,
            });
        }

        if (methodContext instanceof AggregateMethodContext) {
            return makeCommandResult({
                type: 'database',
                method: 'aggregate',
                ...parseAggregateMethodContext(methodContext),
            });
        }

        if (methodContext instanceof ListCollectionsMethodContext) {
            const filter = formatJson5(methodContext.listCollectionsArgument1()?.getText());
            const options = formatJson5(methodContext.listCollectionsArgument2()?.getText());

            return makeCommandResult({
                type: 'database',
                method: 'listCollections',
                filter,
                options,
            });
        }

        if (methodContext instanceof RenameCollectionMethodContext) {
            const currentName = formatJson5(methodContext.renameCollectionArgument1().getText());
            const newName = formatJson5(methodContext.renameCollectionArgument2().getText());
            const options = formatJson5(methodContext.renameCollectionArgument3()?.getText());

            return makeCommandResult({
                type: 'database',
                method: 'renameCollection',
                currentName,
                newName,
                options,
            });
        }

        if (methodContext instanceof DropCollectionMethodContext) {
            const collectionName = formatJson5(methodContext.dropCollectionArgument1().getText());
            const options = formatJson5(methodContext.dropCollectionArgument2()?.getText());

            return makeCommandResult({
                type: 'database',
                method: 'dropCollection',
                collectionName,
                options,
            });
        }

        if (methodContext instanceof DropDatabaseMethodContext) {
            const options = formatJson5(methodContext.dropDatabaseArgument()?.getText());

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
    } catch (error) {
        return parseExtractionError(error);
    }

    return makeMethodNotImplementedError(methodContext?.getText());
}

function parseQuotedCollectionName(quotedCollectionName: string): string {
    return quotedCollectionName.substring(1, quotedCollectionName.length - 1);
}

function parseCollectionMethod(
    collectionName: string,
    methodContext: ParseTree | null,
): CommandParsingResult | CommandParsingError {
    try {
        if (methodContext instanceof FindMethodContext) {
            const command = parseFindMethodContext(methodContext);

            return makeCommandResult({
                ...command,
                collectionName,
                type: 'collection',
                method: 'find',
            });
        }

        if (methodContext instanceof FindOneMethodContext) {
            const parameters = formatJson5(methodContext.findOneArgument1()?.getText());
            const options = formatJson5(methodContext.findOneArgument2()?.getText());

            return makeCommandResult({
                collectionName,
                type: 'collection',
                method: 'findOne',
                parameters,
                options,
            });
        }

        if (methodContext instanceof FindOneAndDeleteMethodContext) {
            const parameters = formatJson5(methodContext.findOneAndDeleteArgument1().getText());
            const options = formatJson5(methodContext.findOneAndDeleteArgument2()?.getText());

            return makeCommandResult({
                collectionName,
                type: 'collection',
                method: 'findOneAndDelete',
                parameters,
                options,
            });
        }

        if (methodContext instanceof FindOneAndReplaceMethodContext) {
            const parameters = formatJson5(methodContext.findOneAndReplaceArgument1().getText());
            const replacement = formatJson5(methodContext.findOneAndReplaceArgument2().getText());
            const options = formatJson5(methodContext.findOneAndReplaceArgument3()?.getText());

            return makeCommandResult({
                collectionName,
                type: 'collection',
                method: 'findOneAndReplace',
                parameters,
                replacement,
                options,
            });
        }

        if (methodContext instanceof FindOneAndUpdateMethodContext) {
            const parameters = formatJson5(methodContext.findOneAndUpdateArgument1().getText());
            const newValues = formatJson5(methodContext.findOneAndUpdateArgument2().getText());
            const options = formatJson5(methodContext.findOneAndUpdateArgument3()?.getText());

            return makeCommandResult({
                collectionName,
                type: 'collection',
                method: 'findOneAndUpdate',
                parameters,
                newValues,
                options,
            });
        }

        if (methodContext instanceof InsertOneMethodContext) {
            const document = formatJson5(methodContext.insertOneArgument1().getText());
            const options = formatJson5(methodContext.insertOneArgument2()?.getText());

            return makeCommandResult({
                collectionName,
                type: 'collection',
                method: 'insertOne',
                document,
                options,
            });
        }

        if (methodContext instanceof InsertManyMethodContext) {
            const documents = formatJson5(methodContext.insertManyArgument1().getText());
            const options = formatJson5(methodContext.insertManyArgument2()?.getText());

            return makeCommandResult({
                collectionName,
                type: 'collection',
                method: 'insertMany',
                documents,
                options,
            });
        }

        if (methodContext instanceof BulkWriteMethodContext) {
            const operations = formatJson5(methodContext.bulkWriteArgument1().getText());
            const options = formatJson5(methodContext.bulkWriteArgument2()?.getText());

            return makeCommandResult({
                collectionName,
                type: 'collection',
                method: 'bulkWrite',
                operations,
                options,
            });
        }

        if (methodContext instanceof UpdateOneMethodContext) {
            const filter = formatJson5(methodContext.updateOneArgument1().getText());
            const updateParameters = formatJson5(methodContext.updateOneArgument2()?.getText());
            const options = formatJson5(methodContext.updateOneArgument3()?.getText());

            return makeCommandResult({
                collectionName,
                type: 'collection',
                method: 'updateOne',
                filter,
                updateParameters,
                options,
            });
        }

        if (methodContext instanceof UpdateManyMethodContext) {
            const filter = formatJson5(methodContext.updateManyArgument1().getText());
            const updateParameters = formatJson5(methodContext.updateManyArgument2()?.getText());
            const options = formatJson5(methodContext.updateManyArgument3()?.getText());

            return makeCommandResult({
                collectionName,
                type: 'collection',
                method: 'updateMany',
                filter,
                updateParameters,
                options,
            });
        }

        if (methodContext instanceof ReplaceOneMethodContext) {
            const filter = formatJson5(methodContext.replaceOneArgument1().getText());
            const replacement = formatJson5(methodContext.replaceOneArgument2()?.getText());
            const options = formatJson5(methodContext.replaceOneArgument3()?.getText());

            return makeCommandResult({
                collectionName,
                type: 'collection',
                method: 'replaceOne',
                filter,
                replacement,
                options,
            });
        }

        if (methodContext instanceof DeleteOneMethodContext) {
            const filter = formatJson5(methodContext.deleteOneArgument1()?.getText());
            const options = formatJson5(methodContext.deleteOneArgument2()?.getText());

            return makeCommandResult({
                collectionName,
                type: 'collection',
                method: 'deleteOne',
                filter,
                options,
            });
        }

        if (methodContext instanceof DeleteManyMethodContext) {
            const filter = formatJson5(methodContext.deleteManyArgument1()?.getText());
            const options = formatJson5(methodContext.deleteManyArgument2()?.getText());

            return makeCommandResult({
                collectionName,
                type: 'collection',
                method: 'deleteMany',
                filter,
                options,
            });
        }

        if (methodContext instanceof RenameMethodContext) {
            const newName = formatJson5(methodContext.renameArgument1()?.getText());
            const options = formatJson5(methodContext.renameArgument2()?.getText());

            return makeCommandResult({
                collectionName,
                type: 'collection',
                method: 'rename',
                newName,
                options,
            });
        }

        if (methodContext instanceof DropMethodContext) {
            const options = formatJson5(methodContext.dropArgument()?.getText());

            return makeCommandResult({
                collectionName,
                type: 'collection',
                method: 'drop',
                options,
            });
        }

        if (methodContext instanceof IsCappedMethodContext) {
            const options = formatJson5(methodContext.isCappedArgument()?.getText());

            return makeCommandResult({
                collectionName,
                type: 'collection',
                method: 'isCapped',
                options,
            });
        }

        if (methodContext instanceof CreateIndexMethodContext) {
            const indexSpec = formatJson5(methodContext.createIndexArgument1().getText());
            const options = formatJson5(methodContext.createIndexArgument2()?.getText());

            return makeCommandResult({
                collectionName,
                type: 'collection',
                method: 'createIndex',
                indexSpec,
                options,
            });
        }

        if (methodContext instanceof CreateIndexesMethodContext) {
            const indexSpecs = formatJson5(methodContext.createIndexesArgument1().getText());
            const options = formatJson5(methodContext.createIndexesArgument2()?.getText());

            return makeCommandResult({
                collectionName,
                type: 'collection',
                method: 'createIndexes',
                indexSpecs,
                options,
            });
        }

        if (methodContext instanceof DropIndexMethodContext) {
            const index = formatJson5(methodContext.dropIndexArgument1().getText());
            const options = formatJson5(methodContext.dropIndexArgument2()?.getText());

            return makeCommandResult({
                collectionName,
                type: 'collection',
                method: 'dropIndex',
                index,
                options,
            });
        }

        if (methodContext instanceof DropIndexesMethodContext) {
            const options = formatJson5(methodContext.dropIndexesArgument()?.getText());

            return makeCommandResult({
                collectionName,
                type: 'collection',
                method: 'dropIndexes',
                options,
            });
        }

        if (methodContext instanceof ListIndexesMethodContext) {
            const options = formatJson5(methodContext.listIndexesArgument()?.getText());

            return makeCommandResult({
                collectionName,
                type: 'collection',
                method: 'listIndexes',
                options,
            });
        }

        if (methodContext instanceof IndexesMethodContext) {
            const options = formatJson5(methodContext.indexesArgument()?.getText());

            return makeCommandResult({
                collectionName,
                type: 'collection',
                method: 'indexes',
                options,
            });
        }

        if (methodContext instanceof IndexExistsMethodContext) {
            const indexes = formatJson5(methodContext.indexExistsArgument1().getText());
            const options = formatJson5(methodContext.indexExistsArgument2()?.getText());

            return makeCommandResult({
                collectionName,
                type: 'collection',
                method: 'indexExists',
                indexes,
                options,
            });
        }

        if (methodContext instanceof IndexInformationMethodContext) {
            const options = formatJson5(methodContext.indexInformationArgument()?.getText());

            return makeCommandResult({
                collectionName,
                type: 'collection',
                method: 'indexInformation',
                options,
            });
        }

        if (methodContext instanceof EstimatedDocumentCountMethodContext) {
            const options = formatJson5(methodContext.estimatedDocumentCountArgument()?.getText());

            return makeCommandResult({
                collectionName,
                type: 'collection',
                method: 'estimatedDocumentCount',
                options,
            });
        }

        if (methodContext instanceof CountDocumentsMethodContext) {
            const filter = formatJson5(methodContext.countDocumentsArgument1()?.getText());
            const options = formatJson5(methodContext.countDocumentsArgument2()?.getText());

            return makeCommandResult({
                collectionName,
                type: 'collection',
                method: 'countDocuments',
                filter,
                options,
            });
        }

        if (methodContext instanceof DistinctMethodContext) {
            const key = formatJson5(methodContext.distinctArgument1().getText());
            const filter = formatJson5(methodContext.distinctArgument2()?.getText());
            const options = formatJson5(methodContext.distinctArgument3()?.getText());

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
    context: FindMethodContext,
): Pick<CollectionFindCommand, 'parameters' | 'modifiers' | 'explain' | 'options'> {
    const findParameters = formatJson5(context.findMethodArgument1()?.getText());
    const findOptions = formatJson5(context.findMethodArgument2()?.getText());

    const modifierContexts = context.findMethodModifier();
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

function parseFindMethodModifierContext(context: FindMethodModifierContext): FindModifier {
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
