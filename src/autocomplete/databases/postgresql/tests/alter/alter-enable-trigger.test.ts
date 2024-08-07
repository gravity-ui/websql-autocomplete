import {parsePostgreSqlQueryWithCursor, parsePostgreSqlQueryWithoutCursor} from '../../index';
import {KeywordSuggestion} from '../../../../shared/autocomplete-types';

test('should suggest properly after ENABLE TRIGGER', () => {
    const autocompleteResult = parsePostgreSqlQueryWithCursor(
        'ALTER TABLE test_table ENABLE TRIGGER |',
    );

    const keywordsSuggestion: KeywordSuggestion[] = [{value: 'ALL'}, {value: 'USER'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);

    expect(autocompleteResult.suggestTriggers).toEqual(true);
});

test('should not report errors on full statement', () => {
    const autocompleteResult = parsePostgreSqlQueryWithoutCursor(
        'ALTER TABLE test_table ENABLE TRIGGER test_trigger;',
    );
    expect(autocompleteResult.errors).toHaveLength(0);
});
