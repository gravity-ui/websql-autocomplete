import {parseMySqlQueryWithCursor} from '../../lib';
import {parseMySqlQueryWithoutCursor} from '../../../index';

test('should suggest table name after DROP CONSTRAINT', () => {
    const parseResult = parseMySqlQueryWithCursor('ALTER TABLE test_table DROP CONSTRAINT |');

    expect(parseResult.suggestKeywords).toEqual([]);
    expect(parseResult.suggestConstraints).toEqual(true);
});

test('should not report errors on a full statement', () => {
    const parseResult = parseMySqlQueryWithoutCursor(
        'ALTER TABLE test_table DROP CONSTRAINT test_constraint;',
    );
    expect(parseResult.errors).toHaveLength(0);
});
