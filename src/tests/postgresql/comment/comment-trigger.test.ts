import {parsePostgreSqlQueryWithCursor} from '../../lib';
import {KeywordSuggestion} from '../../../types';
import {parsePostgreSqlQueryWithoutCursor} from '../../../index';

test('should suggest properly after COMMENT ON TRIGGER', () => {
    const parseResult = parsePostgreSqlQueryWithCursor('COMMENT ON TRIGGER |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'IF'}];
    expect(parseResult.suggestKeywords).toEqual(keywordsSuggestion);

    expect(parseResult.suggestTriggers).toEqual(true);
});

test('should not report errors on full statement', () => {
    const parseResult = parsePostgreSqlQueryWithoutCursor(
        "COMMENT ON TRIGGER test_trigger ON test_table IS 'test_comment';",
    );
    expect(parseResult.errors).toHaveLength(0);
});
