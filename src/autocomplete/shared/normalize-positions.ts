export interface Position {
    startIndex: number;
    endIndex: number;
}

// This function is needed to handle emojis in text, which in JS have length of 2, but ANTLR sees as 1
export function normalizePositions<P extends Position>(query: string, positions: P[]): P[] {
    // When converting string to array every emoji is treated as a single element, even though its length is 2
    const characters = Array.from(query);
    const logicalToActualPositionMap = new Map<number, number>();
    let currentActualPosition = 0;

    for (let logicalPosition = 0; logicalPosition < characters.length; logicalPosition++) {
        logicalToActualPositionMap.set(logicalPosition, currentActualPosition);

        const character = characters[logicalPosition];
        if (character === undefined) {
            throw new Error(`Character at position ${logicalPosition} not found`);
        }

        // If this character is an emoji then actual position will be increased by 2
        currentActualPosition += character.length;
    }

    // Handle endIndex that points to the very end of the string (after last character)
    logicalToActualPositionMap.set(characters.length, currentActualPosition);

    return positions.map((position) => {
        const normalizedStartIndex = logicalToActualPositionMap.get(position.startIndex);
        const normalizedEndIndex = logicalToActualPositionMap.get(position.endIndex);

        if (normalizedStartIndex === undefined || normalizedEndIndex === undefined) {
            throw new Error(
                `Actual start: ${position.startIndex} or end: ${position.endIndex} index not found`,
            );
        }

        return {
            ...position,
            startIndex: normalizedStartIndex,
            endIndex: normalizedEndIndex,
        };
    });
}
