import {parsePostgreSqlQueryWithCursor} from '../../../lib';
import {KeywordSuggestion, parsePostgreSqlQueryWithoutCursor} from '../../../../index';

test('should suggest view name after DROP CONSTRAINT', () => {
    const autocompleteResult = parsePostgreSqlQueryWithCursor(
        'ALTER TABLE test_table DROP CONSTRAINT |',
    );

    expect(autocompleteResult.suggestConstraints).toEqual(true);

    const keywordSuggestion: KeywordSuggestion[] = [
        {value: 'IF'},
        {value: 'CASCADE'},
        {value: 'RESTRICT'},
    ];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordSuggestion);
});

test('should not report an error of a full statement', () => {
    const autocompleteResult = parsePostgreSqlQueryWithoutCursor(
        'ALTER TABLE test_table DROP CONSTRAINT test_constraint;',
    );
    expect(autocompleteResult.errors).toHaveLength(0);
});
