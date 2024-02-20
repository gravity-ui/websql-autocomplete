import {parseMySqlQueryWithCursor} from '../../lib';
import {KeywordSuggestion} from '../../../types';
import {parseMySqlQueryWithoutCursor} from '../../../index';

test('should suggest table name after ALTER CONSTRAINT', () => {
    const parseResult = parseMySqlQueryWithCursor('ALTER TABLE test_table ALTER CONSTRAINT |');

    const keywordSuggestion: KeywordSuggestion[] = [{value: 'CHECK'}];
    expect(parseResult.suggestKeywords).toEqual(keywordSuggestion);

    expect(parseResult.suggestConstraints).toEqual(true);
});

test('should not report errors on a full statement', () => {
    const parseResult = parseMySqlQueryWithoutCursor(
        'ALTER TABLE test_table ALTER CONSTRAINT test_constraint CHECK (test_column > 1);',
    );
    expect(parseResult.errors).toHaveLength(0);
});
