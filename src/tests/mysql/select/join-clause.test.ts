import {KeywordSuggestion} from '../../..';
import {parseMySqlQueryWithCursor} from '../../shared/lib';

// TODO This test doesn't work for now, because of keywordsCanBeId containing FULL
// However MySQL doesn't have FULL joins
test.skip('should not suggest FULL', () => {
    const parseResults = parseMySqlQueryWithCursor('SELECT * FROM test_table |');
    const fullKeyword: KeywordSuggestion = {value: 'FULL'};

    expect(parseResults.suggestKeywords).not.toContainEqual(fullKeyword);
});
