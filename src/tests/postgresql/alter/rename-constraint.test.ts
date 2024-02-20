import {KeywordSuggestion, parsePostgreSqlQueryWithoutCursor} from '../../..';
import {parsePostgreSqlQueryWithCursor} from '../../lib';

test('should suggest view name after RENAME CONSTRAINT', () => {
    const parseResult = parsePostgreSqlQueryWithCursor(
        'ALTER TABLE test_table RENAME CONSTRAINT |',
    );

    const keywordSuggestion: KeywordSuggestion[] = [{value: 'TO'}];
    expect(parseResult.suggestKeywords).toEqual(keywordSuggestion);

    expect(parseResult.suggestConstraints).toEqual(true);
});

test('should not report errors', () => {
    const parseResult = parsePostgreSqlQueryWithoutCursor(
        'ALTER TABLE test_table RENAME CONSTRAINT test_constraint TO test_constraint_2;',
    );
    expect(parseResult.errors).toHaveLength(0);
});
