import {parseMySqlQueryWithCursor} from '../../lib';
import {KeywordSuggestion} from '../../../types';
import {parseMySqlQueryWithoutCursor} from '../../../index';

test('should suggest table name after DROP TRIGGER', () => {
    const parseResult = parseMySqlQueryWithCursor('DROP TRIGGER |');

    const keywordSuggestion: KeywordSuggestion[] = [{value: 'IF'}];
    expect(parseResult.suggestKeywords).toEqual(keywordSuggestion);

    expect(parseResult.suggestTriggers).toEqual(true);
});

test('should nor report errors on full statement', () => {
    const parseResult = parseMySqlQueryWithoutCursor('DROP TRIGGER test_trigger;');
    expect(parseResult.errors).toHaveLength(0);
});
