import {ColumnSuggestion, KeywordSuggestion, parseGenericSql} from '../../../../index';
import {describe, expect, it} from '@jest/globals';

// TODO: reuse it in more places
const SUGGEST_TABLES_VALUE = {};

describe('delete statement', () => {
    it("should not report errors on short delete statement", () => {
        expect(parseGenericSql('DELETE FROM test_table; ', '').errors)
            .toEqual(undefined);
    })
    it('should not report errors on full delete statement', () => {
        expect(parseGenericSql('DELETE FROM test_table WHERE column != 1; ', '').errors)
            .toEqual(undefined);
    })
    it('should suggest DELETE', () => {
        const keyword: KeywordSuggestion = { value: 'DELETE', weight: -1 };
        expect(parseGenericSql('', '').suggestKeywords)
            .toContainEqual(keyword);
    })
    it('should suggest FROM', () => {
        const keyword: KeywordSuggestion = { value: 'FROM', weight: -1 };
        expect(parseGenericSql('DELETE ', '').suggestKeywords)
            .toContainEqual(keyword);
    })
    it('should suggest tables', () => {
        expect(parseGenericSql('DELETE FROM ', '').suggestTables)
            .toEqual(SUGGEST_TABLES_VALUE);
    })
    it('should suggest WHERE', () => {
        const keyword: KeywordSuggestion = { value: 'WHERE', weight: -1 };
        expect(parseGenericSql('DELETE FROM test_table ', '').suggestKeywords)
            .toContainEqual(keyword);
    })
    it('should suggest WHERE columns', () => {
        const columnsSuggestion: ColumnSuggestion = {
            tables: [
                {
                    identifierChain: [
                        {
                            name: 'test_table'
                        }
                    ]
                }
            ]
        };
        expect(parseGenericSql('DELETE FROM test_table WHERE ', '').suggestColumns)
            .toEqual(columnsSuggestion);
    })
    it('should suggest WHERE columns when some column conditions already exist', () => {
        const columnsSuggestion: ColumnSuggestion = {
            tables: [
                {
                    identifierChain: [
                        {
                            name: 'test_table'
                        }
                    ]
                }
            ]
        };
        expect(parseGenericSql('DELETE FROM test_table WHERE test_column = 1 AND ', '').suggestColumns)
            .toEqual(columnsSuggestion);
    })
})
