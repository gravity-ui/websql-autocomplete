import {parsePostgreSqlQueryWithCursor} from '../../lib';
import {KeywordSuggestion} from '../../../types';
import {parsePostgreSqlQueryWithoutCursor} from '../../../index';

test('should suggest properly after ENABLE TRIGGER', () => {
    const parseResult = parsePostgreSqlQueryWithCursor('ALTER TABLE test_table ENABLE TRIGGER |');

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'ALL'}, {value: 'USER'}];
    expect(parseResult.suggestKeywords).toEqual(keywordsSuggestion);

    expect(parseResult.suggestTriggers).toEqual(true);
});

test('should not report errors on full statement', () => {
    const parseResult = parsePostgreSqlQueryWithoutCursor(
        'ALTER TABLE test_table ENABLE TRIGGER test_trigger;',
    );
    expect(parseResult.errors).toHaveLength(0);
});
