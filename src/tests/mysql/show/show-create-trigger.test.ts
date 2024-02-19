import {parseMySqlQueryWithCursor} from '../../lib';
import {KeywordSuggestion} from '../../../types';
import {parseMySqlQueryWithoutCursor} from '../../../index';

test('should suggest triggers after SHOW CREATE TRIGGER', () => {
    const parseResult = parseMySqlQueryWithCursor('SHOW CREATE TRIGGER |');

    const keywordsSuggestion: KeywordSuggestion[] = [];
    expect(parseResult.suggestKeywords).toEqual(keywordsSuggestion);

    expect(parseResult.suggestTriggers).toEqual(true);
});

test('should nor report errors on full statement', () => {
    const parseResult = parseMySqlQueryWithoutCursor('SHOW CREATE TRIGGER test_trigger;');
    expect(parseResult.errors).toHaveLength(0);
});
