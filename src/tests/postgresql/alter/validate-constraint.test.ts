import {parsePostgreSqlQueryWithCursor} from '../../lib';
import {parsePostgreSqlQueryWithoutCursor} from '../../../index';

test('should suggest view name after VALIDATE CONSTRAINT', () => {
    const parseResult = parsePostgreSqlQueryWithCursor(
        'ALTER TABLE test_table VALIDATE CONSTRAINT |',
    );

    expect(parseResult.suggestConstraints).toEqual(true);
    expect(parseResult.suggestKeywords).toEqual([]);
});

test('should not report an error of a full statement', () => {
    const parseResult = parsePostgreSqlQueryWithoutCursor(
        'ALTER TABLE test_table VALIDATE CONSTRAINT test_constraint;',
    );
    expect(parseResult.errors).toHaveLength(0);
});
