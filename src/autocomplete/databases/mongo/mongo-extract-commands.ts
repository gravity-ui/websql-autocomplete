import json5 from 'json5';
import {
    CollectionOperationContext,
    FilterModifierContext,
    FindMethodContext,
    FindMethodModifierContext,
    FindOneAndDeleteMethodContext,
    FindOneAndReplaceMethodContext,
    FindOneMethodContext,
    HintModifierContext,
    InsertOneMethodContext,
    LimitModifierContext,
    MaxModifierContext,
    MinModifierContext,
    MongoParser,
    ReturnKeyModifierContext,
    ShowRecordIdModifierContext,
    SkipModifierContext,
    SortModifierContext,
} from './generated/MongoParser';
import {MongoParserVisitor} from './generated/MongoParserVisitor';
import {ParserSyntaxError, SqlErrorListener, createParser} from '../../shared';
import {MongoLexer} from './generated/MongoLexer';
import {getParseTree} from './mongo-autocomplete';

type FindModifier =
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

interface FindCommand {
    method: 'find';
    collectionName: string;
    parameters?: unknown;
    options?: unknown;
    explain?: {
        parameters?: unknown;
    };
    modifiers: FindModifier[];
}

interface FindOneCommand {
    method: 'findOne';
    collectionName: string;
    parameters?: unknown;
    options?: unknown;
}

interface FindOneAndDeleteCommand {
    method: 'findOneAndDelete';
    collectionName: string;
    parameters: unknown;
    options?: unknown;
}

interface FindOneAndReplaceCommand {
    method: 'findOneAndReplace';
    collectionName: string;
    parameters: unknown;
    replacement: unknown;
    options?: unknown;
}

interface InsertOneCommand {
    method: 'insertOne';
    collectionName: string;
    document: unknown;
    options: unknown;
}

type Command =
    | FindCommand
    | FindOneCommand
    | FindOneAndDeleteCommand
    | FindOneAndReplaceCommand
    | InsertOneCommand;

export interface ParsingError {
    type: 'parsingError';
    message: string;
}

export interface UnexpectedError {
    type: 'unexpectedError';
    message: unknown;
}

type ExtractMongoCommandsFromQueryResult =
    | {commands: Command[]}
    | {parseSyntaxErrors: ParserSyntaxError[]}
    | {parseCommandsError: ParsingError | UnexpectedError};

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
    error?: ParsingError | UnexpectedError;

    visitCollectionOperation = (context: CollectionOperationContext): void => {
        const collectionName = context.collectionName().getText();
        const methodContext = context.collectionMethod().getChild(0);

        try {
            if (methodContext instanceof FindMethodContext) {
                const command = parseFindMethodContext(methodContext);

                this.commands.push({
                    ...command,
                    collectionName,
                    method: 'find',
                });
                return;
            }

            if (methodContext instanceof FindOneMethodContext) {
                const parameters = formatJson5(methodContext.findOneArgument1()?.getText());
                const options = formatJson5(methodContext.findOneArgument2()?.getText());

                this.commands.push({
                    collectionName,
                    method: 'findOne',
                    parameters,
                    options,
                });
                return;
            }

            if (methodContext instanceof FindOneAndDeleteMethodContext) {
                const parameters = formatJson5(methodContext.findOneAndDeleteArgument1().getText());
                const options = formatJson5(methodContext.findOneAndDeleteArgument2()?.getText());

                this.commands.push({
                    collectionName,
                    method: 'findOneAndDelete',
                    parameters,
                    options,
                });
                return;
            }

            if (methodContext instanceof FindOneAndReplaceMethodContext) {
                const parameters = formatJson5(
                    methodContext.findOneAndReplaceArgument1().getText(),
                );
                const replacement = formatJson5(
                    methodContext.findOneAndReplaceArgument2().getText(),
                );
                const options = formatJson5(methodContext.findOneAndReplaceArgument3()?.getText());

                this.commands.push({
                    collectionName,
                    method: 'findOneAndReplace',
                    parameters,
                    replacement,
                    options,
                });
                return;
            }

            if (methodContext instanceof InsertOneMethodContext) {
                const document = formatJson5(methodContext.insertOneArgument1().getText());
                const options = formatJson5(methodContext.insertOneArgument2()?.getText());

                this.commands.push({collectionName, method: 'insertOne', document, options});
                return;
            }
        } catch (error) {
            if (isParsingError(error)) {
                const {message} = error;
                this.error = newParsingError(message);
                return;
            }

            this.error = newUnexpectedError(error);
            return;
        }

        this.error = newParsingError('Method is not implemented: ' + methodContext?.getText());
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
