import json5 from 'json5';
import {
    AddQueryModifierModifierContext,
    CollectionOperationContext,
    CountModifierContext,
    FilterModifierContext,
    FindMethodContext,
    FindMethodModifierContext,
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
import {createParser} from '../../shared';
import {MongoLexer} from './generated/MongoLexer';

export enum FindModifierMethod {
    Skip = 'skip',
    Count = 'count',
    Filter = 'filter',
    Min = 'min',
    Max = 'max',
    ReturnKey = 'returnKey',
    ShowRecordId = 'showRecordId',
    AddQueryModifier = 'addQueryModifier',
    Sort = 'sort',
    Limit = 'limit',
}

type FindModifier =
    | {
          method: Exclude<
              FindModifierMethod,
              FindModifierMethod.Sort | FindModifierMethod.AddQueryModifier
          >;
          parameters: unknown;
      }
    | {method: FindModifierMethod.Sort; parameters?: unknown; options?: unknown}
    | {method: FindModifierMethod.AddQueryModifier; name: unknown; value: unknown};

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

class CustomVisitor extends MongoParserVisitor<unknown> {
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
    const parameters = formatJson5(context.parameters().getText());

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
                method: FindModifierMethod.Skip,
                parameters: childContext.number().getText(),
            };
        case childContext instanceof LimitModifierContext:
            return {
                method: FindModifierMethod.Limit,
                parameters: childContext.number().getText(),
            };
        case childContext instanceof CountModifierContext:
            // TODO: MONGO doublecheck
            return {
                method: FindModifierMethod.Count,
                parameters: formatJson5(childContext.parameters().getText()),
            };
        case childContext instanceof FilterModifierContext:
            // TODO: MONGO doublecheck
            return {
                method: FindModifierMethod.Filter,
                parameters: formatJson5(childContext.parameters().getText()),
            };
        case childContext instanceof MinModifierContext:
            // TODO: MONGO doublecheck
            return {
                method: FindModifierMethod.Min,
                parameters: formatJson5(childContext.parameters().getText()),
            };
        case childContext instanceof MaxModifierContext:
            // TODO: MONGO doublecheck
            return {
                method: FindModifierMethod.Max,
                parameters: formatJson5(childContext.parameters().getText()),
            };
        case childContext instanceof AddQueryModifierModifierContext:
            // TODO: MONGO doublecheck
            return {
                method: FindModifierMethod.AddQueryModifier,
                name: formatJson5(
                    // eslint-disable-next-line new-cap
                    childContext.STRING().getText(),
                ),
                value: formatJson5(childContext.parameters().getText()),
            };
        case childContext instanceof ReturnKeyModifierContext:
            // TODO: MONGO doublecheck
            return {
                method: FindModifierMethod.ReturnKey,
                parameters: formatJson5(childContext.boolean().getText()),
            };
        case childContext instanceof ShowRecordIdModifierContext:
            // TODO: MONGO doublecheck
            return {
                method: FindModifierMethod.ShowRecordId,
                parameters: formatJson5(childContext.boolean().getText()),
            };
        case childContext instanceof SortModifierContext:
            // TODO: MONGO doublecheck
            return {
                method: FindModifierMethod.Sort,
                parameters: formatJson5(childContext.parameters().getText()),
                options: formatJson5(childContext.option()?.getText()),
            };
        default:
            throw new Error('Unhandled modifier context' + childContext?.getText());
    }
}

function formatJson5(string: string | undefined): undefined | unknown {
    return string ? json5.parse(string) : undefined;
}

export function extractMongoCommandsFromQuery(query: string): Command[] {
    const parser = createParser(MongoLexer, MongoParser, query);

    const commands: Command[] = [];
    const onParseCommand: OnParseCommand = (command) => {
        commands.push(command);
    };

    const onParseError: OnParseError = (error) => {
        // TODO: implement
        console.log(error);
    };

    const visitor = new CustomVisitor(onParseCommand, onParseError);
    parser.root().accept(visitor);

    return commands;
}
