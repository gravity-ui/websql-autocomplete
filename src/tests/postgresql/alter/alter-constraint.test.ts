import {parsePostgreSqlQueryWithCursor} from '../../lib';
import {KeywordSuggestion, parsePostgreSqlQueryWithoutCursor} from '../../../index';

test('should suggest view name after ALTER CONSTRAINT', () => {
    const parseResult = parsePostgreSqlQueryWithCursor('ALTER TABLE test_table ALTER CONSTRAINT |');

    expect(parseResult.suggestConstraints).toEqual(true);

    const keywordSuggestion: KeywordSuggestion[] = [
        {value: 'OPTIONS'},
        {value: 'SET'},
        {value: 'TYPE'},
        {value: 'DROP'},
        {value: 'RESTART'},
        {value: 'ADD'},
        {value: 'RESET'},
    ];
    expect(parseResult.suggestKeywords).toEqual(keywordSuggestion);
});

test('should not report an error of a full statement', () => {
    const parseResult = parsePostgreSqlQueryWithoutCursor(
        'ALTER TABLE test_table ALTER CONSTRAINT test_constraint NOT VALID;',
    );
    expect(parseResult.errors).toHaveLength(0);
});
