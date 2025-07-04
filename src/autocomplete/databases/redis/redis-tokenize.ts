import {redisAutocompleteData} from './redis-autocomplete.js';
import {tokenize} from '../../shared/tokenize.js';
import {StatementPosition} from '../../shared/autocomplete-types.js';

export type RedisCommands = string[][];

export function extractRedisCommandsFromQuery(query: string): {
    commands: RedisCommands;
    statementPositions: StatementPosition[];
} {
    const {tokens} = tokenize(
        redisAutocompleteData.Lexer,
        redisAutocompleteData.Lexer.symbolicNames,
        redisAutocompleteData.tokenDictionary.SPACE,
        query,
    );

    const statementPositions: StatementPosition[] = [];
    const commands: RedisCommands = [];
    let currentCommand: string[] = [];
    let statementStartIndex = 0;

    for (const token of tokens) {
        if (token.type === redisAutocompleteData.Lexer.SPACE) {
            continue;
        }

        if (token.type === redisAutocompleteData.Lexer.NEWLINE) {
            if (currentCommand.length) {
                commands.push(currentCommand);
                statementPositions.push({
                    startIndex: statementStartIndex,
                    endIndex: token.startIndex,
                });
                currentCommand = [];
                statementStartIndex = -1;
            }
            continue;
        }

        if (token.text) {
            currentCommand.push(token.text);
        }

        if (statementStartIndex === -1) {
            statementStartIndex = token.startIndex;
        }
    }

    if (currentCommand.length) {
        commands.push(currentCommand);
        statementPositions.push({
            startIndex: statementStartIndex,
            endIndex: query.trim().length,
        });
    }

    return {commands, statementPositions};
}
