import {parsePostgreSqlQueryWithCursor} from '../../lib';
import {parsePostgreSqlQueryWithoutCursor} from '../../../index';

test('should suggest properly after COMMENT ON CONSTRAINT', () => {
    const parseResult = parsePostgreSqlQueryWithCursor('COMMENT ON CONSTRAINT |');

    expect(parseResult.suggestKeywords).toEqual([]);
    expect(parseResult.suggestConstraints).toEqual(true);
});

test('should not report errors on full statement', () => {
    const parseResult = parsePostgreSqlQueryWithoutCursor(
        "COMMENT ON CONSTRAINT test_constraint ON test_table IS 'test_comment';",
    );
    expect(parseResult.errors).toHaveLength(0);
});
