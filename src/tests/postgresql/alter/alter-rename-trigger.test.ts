import {parsePostgreSqlQueryWithCursor} from '../../lib';
import {KeywordSuggestion} from '../../../types';
import {parsePostgreSqlQueryWithoutCursor} from '../../../index';

test('should suggest properly after ALTER TRIGGER', () => {
    const parseResult = parsePostgreSqlQueryWithCursor('ALTER TRIGGER |');

    const keywordsSuggestion: KeywordSuggestion[] = [];
    expect(parseResult.suggestKeywords).toEqual(keywordsSuggestion);

    expect(parseResult.suggestTriggers).toEqual(true);
});

test('should not report errors on full statement', () => {
    const parseResult = parsePostgreSqlQueryWithoutCursor(
        'ALTER TRIGGER test_trigger ON test_table RENAME TO test_trigger_2;',
    );
    expect(parseResult.errors).toHaveLength(0);
});
