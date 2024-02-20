import {parsePostgreSqlQueryWithCursor} from '../../lib';
import {KeywordSuggestion} from '../../../types';
import {parsePostgreSqlQueryWithoutCursor} from '../../../index';

test('should suggest properly after DROP SEQUENCE', () => {
    const parseResult = parsePostgreSqlQueryWithCursor('DROP SEQUENCE |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'IF'}];
    expect(parseResult.suggestKeywords).toEqual(keywordsSuggestion);

    expect(parseResult.suggestSequences).toEqual(true);
});

test('should not report errors on full statement', () => {
    const parseResult = parsePostgreSqlQueryWithoutCursor('DROP SEQUENCE test_sequence;');
    expect(parseResult.errors).toHaveLength(0);
});
