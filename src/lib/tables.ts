import {TokenStream} from 'antlr4ng';

export interface TableQueryPosition {
    start: number;
    end: number;
    type: 'from' | 'alter' | 'insert' | 'update';
}

export interface TokenDictionary {
    FROM: number;
    OPENING_BRACKET: number;
    CLOSING_BRACKET: number;
    ALTER: number;
    INSERT: number;
    UPDATE: number;
}

function getClosingBracketIndex(
    tokenStream: TokenStream,
    tokenIndex: number,
    dictionary: TokenDictionary,
): number | undefined {
    let currentIndex = tokenIndex;

    while (currentIndex < tokenStream.size) {
        const token = tokenStream.get(currentIndex);

        if (token.type === dictionary.CLOSING_BRACKET) {
            return token.start;
        }

        if (token.type === dictionary.OPENING_BRACKET) {
            return undefined;
        }

        currentIndex++;
    }

    return tokenStream.get(tokenStream.size - 1).start;
}

export function getTableQueryPosition(
    tokenStream: TokenStream,
    tokenIndex: number,
    dictionary: TokenDictionary,
): TableQueryPosition | undefined {
    const end = tokenStream.get(tokenStream.size - 1).start;
    let currentIndex = tokenIndex;
    let isAscending = false;

    // Go backward at first
    while (currentIndex >= 0 && currentIndex < tokenStream.size) {
        const token = tokenStream.get(currentIndex);

        // Doesn't work for now because suggestColumns is false for this case
        // In parser this is not fullColumnName but is uid
        if (token.type === dictionary.ALTER) {
            return {
                start: token.start,
                end,
                type: 'alter',
            };
        }

        // Doesn't work for now because we quit on opening bracket
        if (token.type === dictionary.INSERT) {
            return {
                start: token.start,
                end,
                type: 'insert',
            };
        }

        if (token.type === dictionary.UPDATE) {
            return {
                start: token.start,
                end,
                type: 'update',
            };
        }

        // We don't want to check nested statement
        if (
            token.type === dictionary.OPENING_BRACKET ||
            token.type === dictionary.CLOSING_BRACKET
        ) {
            if (isAscending) {
                break;
            } else {
                currentIndex = tokenIndex;
                isAscending = true;
            }
        }

        if (token.type === dictionary.FROM) {
            const closingBracketIndex = getClosingBracketIndex(tokenStream, tokenIndex, dictionary);

            if (!closingBracketIndex) {
                break;
            }

            return {
                start: token.start,
                end: closingBracketIndex,
                type: 'from',
            };
        }

        if (isAscending) {
            currentIndex++;
        } else {
            currentIndex--;
        }

        // Go forward if nothing is found
        if (currentIndex === -1) {
            currentIndex = tokenIndex;
            isAscending = true;
        }
    }

    return undefined;
}
