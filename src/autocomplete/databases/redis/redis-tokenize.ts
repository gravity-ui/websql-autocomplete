import {redisAutocompleteData} from './redis-autocomplete.js';
import {tokenize} from '../../shared/tokenize.js';

export type RedisCommands = string[][];

export function extractRedisCommandsFromQuery(query: string): RedisCommands {
    const {tokens} = tokenize(
        redisAutocompleteData.Lexer,
        redisAutocompleteData.Lexer.symbolicNames,
        redisAutocompleteData.tokenDictionary.SPACE,
        query,
    );

    const commands: RedisCommands = [];
    let currentCommand: string[] = [];

    for (const token of tokens) {
        if (token.type === redisAutocompleteData.Lexer.SPACE) {
            continue;
        }

        if (token.type === redisAutocompleteData.Lexer.NEWLINE) {
            if (currentCommand.length) {
                commands.push(currentCommand);
                currentCommand = [];
            }
            continue;
        }

        if (token.text) {
            currentCommand.push(token.text);
        }
    }

    if (currentCommand.length) {
        commands.push(currentCommand);
    }

    return commands;
}
