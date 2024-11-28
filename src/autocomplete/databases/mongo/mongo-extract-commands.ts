import json5 from 'json5';
import {
    CollectionOperationContext,
    FilterModifierContext,
    FindMethodContext,
    FindMethodModifierContext,
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

type Command =
    | FindCommand
    | {
          method: 'insertOne';
          collectionName: string;
          document: unknown;
          options: unknown;
      };

type OnParseCommand = (command: Command) => void;
type OnParseCommandError = (error: ExpectedError | UnexpectedError) => void;

export interface ExpectedError {
    type: 'expected';
    message: string;
}

export interface UnexpectedError {
    type: 'unexpected';
    message: unknown;
}

type ExtractMongoCommandsFromQueryResult =
    | {commands: Command[]}
    | {parseSyntaxErrors: ParserSyntaxError[]}
    | {parseCommandsError: ExpectedError | UnexpectedError};

function newExpectedError(message: string): ExpectedError {
    return {
        type: 'expected',
        message,
    };
}

function newUnexpectedError(message: unknown): UnexpectedError {
    return {
        type: 'unexpected',
        message,
    };
}

class CommandsVisitor extends MongoParserVisitor<unknown> {
    onParseCommand: OnParseCommand;
    onParseCommandError: OnParseCommandError;

    constructor(onParseCommand: OnParseCommand, onParseCommandError: OnParseCommandError) {
        super();
        this.onParseCommand = onParseCommand;
        this.onParseCommandError = onParseCommandError;
    }

    visitCollectionOperation = (context: CollectionOperationContext): void => {
        const collectionName = context.collectionName().getText();
        const methodContext = context.collectionMethod().getChild(0);

        try {
            if (methodContext instanceof FindMethodContext) {
                const command = parseFindMethodContext(methodContext);

                this.onParseCommand({
                    ...command,
                    collectionName,
                    method: 'find',
                });
                return;
            }

            if (methodContext instanceof InsertOneMethodContext) {
                const document = formatJson5(methodContext.insertOneArgument1().getText());
                const options = formatJson5(methodContext.insertOneArgument2()?.getText());

                this.onParseCommand({collectionName, method: 'insertOne', document, options});
                return;
            }
        } catch (error) {
            if (
                error &&
                typeof error === 'object' &&
                'type' in error &&
                error.type === 'expected' &&
                'message' in error &&
                typeof error.type === 'string' &&
                typeof error.message === 'string'
            ) {
                const {message} = error;
                this.onParseCommandError(newExpectedError(message));
                return;
            }

            this.onParseCommandError(newUnexpectedError(error));
            return;
        }

        this.onParseCommandError(
            newExpectedError('Method is not implemented: ' + methodContext?.getText()),
        );
    };
}

function parseFindMethodContext(
    context: FindMethodContext,
): Pick<FindCommand, 'parameters' | 'modifiers' | 'explain' | 'options'> {
    const findParameters = formatJson5(context.findMethodArgument1()?.getText());
    const findOptions = formatJson5(context.findMethodArgument2()?.getText());

    const modifierContexts = context.findMethodModifier();
    const modifiers: FindModifier[] = modifierContexts.map(parseFindMethodModifierContext);

    const explainMethodContext = context.explainMethod();

    let explain: undefined | FindCommand['explain'];
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

    // This workaround allow to use instaceof in switch cases
    switch (true) {
        case childContext instanceof SkipModifierContext:
            return {
                method: 'skip',
                parameters: formatJson5(childContext.skipModifierArgument().getText()),
            };
        case childContext instanceof LimitModifierContext:
            return {
                method: 'limit',
                parameters: formatJson5(childContext.limitModifierArgument().getText()),
            };
        case childContext instanceof FilterModifierContext:
            return {
                method: 'filter',
                parameters: formatJson5(childContext.filterModifierArgument().getText()),
            };
        case childContext instanceof MinModifierContext:
            return {
                method: 'min',
                parameters: formatJson5(childContext.minModifierArgument().getText()),
            };
        case childContext instanceof MaxModifierContext:
            return {
                method: 'max',
                parameters: formatJson5(childContext.maxModifierArgument().getText()),
            };
        case childContext instanceof ReturnKeyModifierContext:
            return {
                method: 'returnKey',
                parameters: formatJson5(childContext.returnKeyModifierArgument().getText()),
            };
        case childContext instanceof ShowRecordIdModifierContext:
            return {
                method: 'showRecordId',
                parameters: formatJson5(childContext.showRecordIdModifierArgument().getText()),
            };
        case childContext instanceof SortModifierContext:
            return {
                method: 'sort',
                parameters: formatJson5(childContext.sortModifierArgument1().getText()),
                options: formatJson5(childContext.sortModifierArgument2()?.getText()),
            };
        case childContext instanceof HintModifierContext:
            return {
                method: 'hint',
                parameters: formatJson5(childContext.hintModifierArgument().getText()),
            };
        default:
            throw newExpectedError('Modifier is not implemented: ' + childContext?.getText());
    }
}

function formatJson5(string: string | undefined): undefined | unknown {
    return string ? json5.parse<unknown>(string) : undefined;
}

export function extractMongoCommandsFromQuery(query: string): ExtractMongoCommandsFromQueryResult {
    const parser = createParser(MongoLexer, MongoParser, query);

    const commands: Command[] = [];
    const onParseCommand: OnParseCommand = (command) => {
        commands.push(command);
    };

    let parseCommandsError: ExpectedError | UnexpectedError | undefined;
    const onParseCommandsError: OnParseCommandError = (error) => {
        parseCommandsError = error;
    };

    const syntaxErrorListener = new SqlErrorListener(MongoParser.WS);
    parser.addErrorListener(syntaxErrorListener);

    const visitor = new CommandsVisitor(onParseCommand, onParseCommandsError);
    getParseTree(parser).accept(visitor);

    if (syntaxErrorListener.errors.length) {
        return {
            parseSyntaxErrors: syntaxErrorListener.errors,
        };
    }

    if (parseCommandsError) {
        return {
            parseCommandsError,
        };
    }

    return {commands};
}
