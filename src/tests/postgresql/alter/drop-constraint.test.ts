import {parsePostgreSqlQueryWithCursor} from '../../lib';
import {KeywordSuggestion, parsePostgreSqlQueryWithoutCursor} from '../../../index';

test('should suggest view name after DROP CONSTRAINT', () => {
    const parseResult = parsePostgreSqlQueryWithCursor('ALTER TABLE test_table DROP CONSTRAINT |');

    expect(parseResult.suggestConstraints).toEqual(true);

    const keywordSuggestion: KeywordSuggestion[] = [
        {value: 'IF'},
        {value: 'CASCADE'},
        {value: 'RESTRICT'},
    ];
    expect(parseResult.suggestKeywords).toEqual(keywordSuggestion);
});

test('should not report an error of a full statement', () => {
    const parseResult = parsePostgreSqlQueryWithoutCursor(
        'ALTER TABLE test_table DROP CONSTRAINT test_constraint;',
    );
    expect(parseResult.errors).toHaveLength(0);
});
