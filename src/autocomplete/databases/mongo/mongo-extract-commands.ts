import json5 from 'json5';
import {
    AggregateMethodContext,
    BulkWriteMethodContext,
    CollectionOperationContext,
    CountDocumentsMethodContext,
    CreateIndexMethodContext,
    CreateIndexesMethodContext,
    DatabaseCollectionMethodContext,
    DatabaseOperationContext,
    DeleteManyMethodContext,
    DeleteOneMethodContext,
    DistinctMethodContext,
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
    ListIndexesMethodContext,
    MaxModifierContext,
    MinModifierContext,
    MongoParser,
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

export interface FindCommand {
    method: 'find';
    collectionName: string;
    parameters?: unknown;
    options?: unknown;
    explain?: ExplainParameters;
    modifiers: FindModifier[];
}

export interface FindOneCommand {
    method: 'findOne';
    collectionName: string;
    parameters?: unknown;
    options?: unknown;
}

export interface FindOneAndDeleteCommand {
    method: 'findOneAndDelete';
    collectionName: string;
    parameters: unknown;
    options?: unknown;
}

export interface FindOneAndReplaceCommand {
    method: 'findOneAndReplace';
    collectionName: string;
    parameters: unknown;
    replacement: unknown;
    options?: unknown;
}

export interface FindOneAndUpdateCommand {
    method: 'findOneAndUpdate';
    collectionName: string;
    parameters: unknown;
    newValues: unknown;
    options?: unknown;
}

export interface InsertOneCommand {
    method: 'insertOne';
    collectionName: string;
    document: unknown;
    options: unknown;
}

export interface InsertManyCommand {
    method: 'insertMany';
    collectionName: string;
    documents: unknown;
    options: unknown;
}

export interface BulkWriteCommand {
    method: 'bulkWrite';
    collectionName: string;
    operations: unknown;
    options?: unknown;
}

export interface UpdateOneCommand {
    method: 'updateOne';
    collectionName: string;
    filter: unknown;
    updateParameters: unknown;
    options?: unknown;
}

export interface UpdateManyCommand {
    method: 'updateMany';
    collectionName: string;
    filter: unknown;
    updateParameters: unknown;
    options?: unknown;
}

export interface ReplaceOneCommand {
    method: 'replaceOne';
    collectionName: string;
    filter: unknown;
    replacement: unknown;
    options?: unknown;
}

export interface DeleteOneCommand {
    method: 'deleteOne';
    collectionName: string;
    filter?: unknown;
    options?: unknown;
}

export interface DeleteManyCommand {
    method: 'deleteMany';
    collectionName: string;
    filter?: unknown;
    options?: unknown;
}

export interface RenameCommand {
    method: 'rename';
    collectionName: string;
    newName: unknown;
    options?: unknown;
}

export interface DropCommand {
    method: 'drop';
    collectionName: string;
    options?: unknown;
}

export interface IsCappedCommand {
    method: 'isCapped';
    collectionName: string;
    options?: unknown;
}

export interface CreateIndexCommand {
    method: 'createIndex';
    collectionName: string;
    indexSpec: unknown;
    options?: unknown;
}

export interface CreateIndexesCommand {
    method: 'createIndexes';
    collectionName: string;
    indexSpecs: unknown;
    options?: unknown;
}

export interface DropIndexCommand {
    method: 'dropIndex';
    collectionName: string;
    index: unknown;
    options?: unknown;
}

export interface DropIndexesCommand {
    method: 'dropIndexes';
    collectionName: string;
    options?: unknown;
}

export interface ListIndexesCommand {
    method: 'listIndexes';
    collectionName: string;
    options?: unknown;
}

export interface IndexesCommand {
    method: 'indexes';
    collectionName: string;
    options?: unknown;
}

export interface IndexExistsCommand {
    method: 'indexExists';
    collectionName: string;
    indexes: unknown;
    options?: unknown;
}

export interface IndexInformationCommand {
    method: 'indexInformation';
    collectionName: string;
    options?: unknown;
}

export interface EstimatedDocumentCountCommand {
    method: 'estimatedDocumentCount';
    collectionName: string;
    options?: unknown;
}

export interface CountDocumentsCommand {
    method: 'countDocuments';
    collectionName: string;
    filter?: unknown;
    options?: unknown;
}

export interface DistinctCommand {
    method: 'distinct';
    collectionName: string;
    key: unknown;
    filter?: unknown;
    options?: unknown;
}

export interface AggregateCommand {
    method: 'aggregate';
    collectionName: string;
    pipeline?: unknown;
    options?: unknown;
    explain?: ExplainParameters;
}

export type Command =
    | FindCommand
    | FindOneCommand
    | FindOneAndDeleteCommand
    | FindOneAndReplaceCommand
    | FindOneAndUpdateCommand
    | InsertOneCommand
    | InsertManyCommand
    | BulkWriteCommand
    | UpdateOneCommand
    | UpdateManyCommand
    | ReplaceOneCommand
    | DeleteOneCommand
    | DeleteManyCommand
    | RenameCommand
    | DropCommand
    | IsCappedCommand
    | CreateIndexCommand
    | CreateIndexesCommand
    | DropIndexCommand
    | DropIndexesCommand
    | ListIndexesCommand
    | IndexesCommand
    | IndexExistsCommand
    | IndexInformationCommand
    | EstimatedDocumentCountCommand
    | CountDocumentsCommand
    | DistinctCommand
    | AggregateCommand;

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
    | {commands: Command[]; parseSyntaxErrors?: undefined; parseCommandsError?: undefined}
    | {parseSyntaxErrors: ParserSyntaxError[]; parseCommandsError?: undefined; commands?: undefined}
    | {
          parseCommandsError: ExtractionError;
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
    error?: ExtractionError;

    visitCollectionOperation = (context: CollectionOperationContext): void => {
        if (this.error) {
            return;
        }

        const collectionName = context.collectionName().getText();
        const methodContext = context.collectionMethod().getChild(0);

        const result = parseCollectionMethod(collectionName, methodContext);
        if (result.command) {
            this.commands.push(result.command);
        } else {
            this.error = result.error;
        }
    };
    visitDatabaseOperation = (context: DatabaseOperationContext): void => {
        if (this.error) {
            return;
        }

        const methodContext = context.databaseMethod().getChild(0);

        if (methodContext instanceof DatabaseCollectionMethodContext) {
            const collectionName = parseQuotedCollectionName(
                methodContext.quotedCollectionName().getText(),
            );
            const result = parseCollectionMethod(
                collectionName,
                methodContext.collectionMethod().getChild(0),
            );
            if (result.command) {
                this.commands.push(result.command);
            } else {
                this.error = result.error;
            }
            return;
        }
    };
}

function parseQuotedCollectionName(quotedCollectionName: string): string {
    return quotedCollectionName.substring(1, quotedCollectionName.length - 1);
}

function parseCollectionMethod(
    collectionName: string,
    methodContext: ParseTree | null,
): CommandParsingResult | CommandParsingError {
    const makeCommandResult = (command: Command): CommandParsingResult => ({command});
    const makeErrorResult = (error: ExtractionError): CommandParsingError => ({
        error,
    });

    try {
        if (methodContext instanceof FindMethodContext) {
            const command = parseFindMethodContext(methodContext);

            return makeCommandResult({
                ...command,
                collectionName,
                method: 'find',
            });
        }

        if (methodContext instanceof FindOneMethodContext) {
            const parameters = formatJson5(methodContext.findOneArgument1()?.getText());
            const options = formatJson5(methodContext.findOneArgument2()?.getText());

            return makeCommandResult({
                collectionName,
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
                method: 'findOneAndUpdate',
                parameters,
                newValues,
                options,
            });
        }

        if (methodContext instanceof InsertOneMethodContext) {
            const document = formatJson5(methodContext.insertOneArgument1().getText());
            const options = formatJson5(methodContext.insertOneArgument2()?.getText());

            return makeCommandResult({collectionName, method: 'insertOne', document, options});
        }

        if (methodContext instanceof InsertManyMethodContext) {
            const documents = formatJson5(methodContext.insertManyArgument1().getText());
            const options = formatJson5(methodContext.insertManyArgument2()?.getText());

            return makeCommandResult({collectionName, method: 'insertMany', documents, options});
        }

        if (methodContext instanceof BulkWriteMethodContext) {
            const operations = formatJson5(methodContext.bulkWriteArgument1().getText());
            const options = formatJson5(methodContext.bulkWriteArgument2()?.getText());

            return makeCommandResult({
                collectionName,
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
                method: 'rename',
                newName,
                options,
            });
        }

        if (methodContext instanceof DropMethodContext) {
            const options = formatJson5(methodContext.dropArgument()?.getText());

            return makeCommandResult({
                collectionName,
                method: 'drop',
                options,
            });
        }

        if (methodContext instanceof IsCappedMethodContext) {
            const options = formatJson5(methodContext.isCappedArgument()?.getText());

            return makeCommandResult({
                collectionName,
                method: 'isCapped',
                options,
            });
        }

        if (methodContext instanceof CreateIndexMethodContext) {
            const indexSpec = formatJson5(methodContext.createIndexArgument1().getText());
            const options = formatJson5(methodContext.createIndexArgument2()?.getText());

            return makeCommandResult({
                collectionName,
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
                method: 'dropIndex',
                index,
                options,
            });
        }

        if (methodContext instanceof DropIndexesMethodContext) {
            const options = formatJson5(methodContext.dropIndexesArgument()?.getText());

            return makeCommandResult({
                collectionName,
                method: 'dropIndexes',
                options,
            });
        }

        if (methodContext instanceof ListIndexesMethodContext) {
            const options = formatJson5(methodContext.listIndexesArgument()?.getText());

            return makeCommandResult({
                collectionName,
                method: 'listIndexes',
                options,
            });
        }

        if (methodContext instanceof IndexesMethodContext) {
            const options = formatJson5(methodContext.indexesArgument()?.getText());

            return makeCommandResult({
                collectionName,
                method: 'indexes',
                options,
            });
        }

        if (methodContext instanceof IndexExistsMethodContext) {
            const indexes = formatJson5(methodContext.indexExistsArgument1().getText());
            const options = formatJson5(methodContext.indexExistsArgument2()?.getText());

            return makeCommandResult({
                collectionName,
                method: 'indexExists',
                indexes,
                options,
            });
        }

        if (methodContext instanceof IndexInformationMethodContext) {
            const options = formatJson5(methodContext.indexInformationArgument()?.getText());

            return makeCommandResult({
                collectionName,
                method: 'indexInformation',
                options,
            });
        }

        if (methodContext instanceof EstimatedDocumentCountMethodContext) {
            const options = formatJson5(methodContext.estimatedDocumentCountArgument()?.getText());

            return makeCommandResult({
                collectionName,
                method: 'estimatedDocumentCount',
                options,
            });
        }

        if (methodContext instanceof CountDocumentsMethodContext) {
            const filter = formatJson5(methodContext.countDocumentsArgument1()?.getText());
            const options = formatJson5(methodContext.countDocumentsArgument2()?.getText());

            return makeCommandResult({
                collectionName,
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
                method: 'distinct',
                key,
                filter,
                options,
            });
        }

        if (methodContext instanceof AggregateMethodContext) {
            const pipeline = formatJson5(methodContext.aggregateArgument1()?.getText());
            const options = formatJson5(methodContext.aggregateArgument2()?.getText());

            const explainMethodContext = methodContext.explainMethod();

            let explain: AggregateCommand['explain'] | undefined;
            if (explainMethodContext) {
                const explainParameters = formatJson5(
                    explainMethodContext.explainMethodArgument()?.getText(),
                );
                explain = explainParameters ? {parameters: explainParameters} : {};
            }

            return makeCommandResult({
                collectionName,
                method: 'aggregate',
                pipeline,
                options,
                explain,
            });
        }
    } catch (error) {
        if (isParsingError(error)) {
            const {message} = error;
            return makeErrorResult(newParsingError(message));
        }

        return makeErrorResult(newUnexpectedError(error));
    }

    return makeErrorResult(
        newParsingError('Method is not implemented: ' + methodContext?.getText()),
    );
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
): Pick<FindCommand, 'parameters' | 'modifiers' | 'explain' | 'options'> {
    const findParameters = formatJson5(context.findMethodArgument1()?.getText());
    const findOptions = formatJson5(context.findMethodArgument2()?.getText());

    const modifierContexts = context.findMethodModifier();
    const modifiers: FindModifier[] = modifierContexts.map(parseFindMethodModifierContext);

    const explainMethodContext = context.explainMethod();

    let explain: FindCommand['explain'] | undefined;
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

    if (visitor.error) {
        return {
            parseCommandsError: visitor.error,
        };
    }

    return {commands: visitor.commands};
}
