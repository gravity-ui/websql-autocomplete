import {expect, test} from '@jest/globals';

import {IdentifierLocation, KeywordSuggestion, parseYql} from '../../../../index';

test('should not report errors on full statement and fill locations', () => {
    const parseResult = parseYql('DROP USER test_user', '');

    expect(parseResult.errors).toBeUndefined();

    const locations: IdentifierLocation[] = [
        {
            location: {
                first_column: 1,
                first_line: 1,
                last_column: 19,
                last_line: 1,
            },
            type: 'statement',
        },
        {
            identifier: 'DROP ROLE',
            location: {
                first_column: 1,
                first_line: 1,
                last_column: 5,
                last_line: 1,
            },
            type: 'statementType',
        },
    ];
    expect(parseResult.locations).toEqual(locations);
});

test('should suggest IF EXISTS for USER', () => {
    const parseResult = parseYql('DROP USER ', '');

    expect(parseResult.errors).toBeUndefined();

    const suggestions: KeywordSuggestion[] = [{value: 'IF EXISTS', weight: -1}];
    expect(parseResult.suggestKeywords).toEqual(suggestions);
});

test('should not report errors on full statement', () => {
    const parseResult = parseYql('DROP GROUP test1, test2, test3;', '');

    expect(parseResult.errors).toBeUndefined();
});
