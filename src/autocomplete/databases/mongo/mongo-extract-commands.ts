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
    modifiers: FindModifier[];
}

type Command =
    | FindCommand
    | {
          method: 'insertOne';
          collectionName: string;
          parameters: unknown;
      };

type OnParseCommand = (command: Command) => void;
type OnParseError = (error: unknown) => void;

class CommandsVisitor extends MongoParserVisitor<unknown> {
    onParseCommand: OnParseCommand;
    onParseError: OnParseError;

    constructor(onParseCommand: OnParseCommand, onParseError: OnParseError) {
        super();
        this.onParseCommand = onParseCommand;
        this.onParseError = onParseError;
    }

    visitCollectionOperation = (context: CollectionOperationContext): void => {
        const collectionName = context.collectionName().getText();
        const methodContext = context.collectionMethod().getChild(0);

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
            const parameters = formatJson5(methodContext.insertOneParam().getText());

            this.onParseCommand({collectionName, method: 'insertOne', parameters});
            return;
        }

        // TODO: MONGO handle errors
        throw new Error('Unhandled method context: ' + methodContext?.getText());
    };
}

function parseFindMethodContext(
    context: FindMethodContext,
): Pick<FindCommand, 'parameters' | 'modifiers'> {
    const parameters = formatJson5(context.findMethodArgument().getText());

    const modifierContexts = context.findMethodModifier();
    const modifiers: FindModifier[] = modifierContexts.map(parseFindMethodModifierContext);

    return {
        parameters,
        modifiers,
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
            throw new Error('Unhandled modifier context' + childContext?.getText());
    }
}

function formatJson5(string: string | undefined): undefined | unknown {
    return string ? json5.parse(string) : undefined;
}

export function extractMongoCommandsFromQuery(
    query: string,
): {commands: Command[]} | {errors: ParserSyntaxError[]} {
    const parser = createParser(MongoLexer, MongoParser, query);

    const commands: Command[] = [];
    const onParseCommand: OnParseCommand = (command) => {
        commands.push(command);
    };

    const onParseError: OnParseError = (error) => {
        // TODO: MONGO implement
        console.log(error);
    };

    const errorListener = new SqlErrorListener(MongoParser.WS);
    parser.addErrorListener(errorListener);

    const visitor = new CommandsVisitor(onParseCommand, onParseError);
    getParseTree(parser).accept(visitor);

    if (errorListener.errors.length) {
        return {
            errors: errorListener.errors,
        };
    }

    return {commands};
}
