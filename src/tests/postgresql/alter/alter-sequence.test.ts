import {parsePostgreSqlQueryWithCursor} from '../../lib';
import {KeywordSuggestion} from '../../../types';
import {parsePostgreSqlQueryWithoutCursor} from '../../../index';

test('should suggest properly after ALTER SEQUENCE', () => {
    const parseResult = parsePostgreSqlQueryWithCursor('ALTER SEQUENCE |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'IF'}];
    expect(parseResult.suggestKeywords).toEqual(keywordsSuggestion);

    expect(parseResult.suggestSequences).toEqual(true);
});

test('should not report errors on full statement', () => {
    const parseResult = parsePostgreSqlQueryWithoutCursor(
        'ALTER SEQUENCE test_sequence INCREMENT 2;',
    );
    expect(parseResult.errors).toHaveLength(0);
});
