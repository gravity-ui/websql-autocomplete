import {parseYqlQueryWithCursor} from '../../../index';
import {KeywordSuggestion} from '../../../../../shared/autocomplete-types';
import {YQLColumnsSuggestion} from '../../../types';

test('should suggest table name for column between statements', () => {
    const autocompleteResult = parseYqlQueryWithCursor(
        'ALTER TABLE before_table DROP COLUMN id; SELECT | FROM test_table ; ALTER TABLE after_table DROP COLUMN id;',
    );
    const columnSuggestions: YQLColumnsSuggestion = {tables: [{name: 'test_table'}], all: true};

    expect(autocompleteResult.suggestColumns).toEqual(columnSuggestions);
});

test('should suggest table name in nested statements', () => {
    const autocompleteResult = parseYqlQueryWithCursor(
        'ALTER TABLE before_table DROP COLUMN id; SELECT * FROM (SELECT | FROM bar) ; ALTER TABLE after_table DROP COLUMN id;',
    );
    const columnSuggestions: YQLColumnsSuggestion = {tables: [{name: 'bar'}], all: true};

    expect(autocompleteResult.suggestColumns).toEqual(columnSuggestions);
});
test('should suggest table name in nested statements', () => {
    const autocompleteResult = parseYqlQueryWithCursor(
        'ALTER TABLE before_table DROP COLUMN |; SELECT * FROM (SELECT foo FROM bar) ; ALTER TABLE after_table DROP COLUMN id;',
    );
    const columnSuggestions: YQLColumnsSuggestion = {tables: [{name: 'before_table'}]};

    expect(autocompleteResult.suggestColumns).toEqual(columnSuggestions);
});

test('should suggest columns from subquery', () => {
    const autocompleteResult = parseYqlQueryWithCursor(
        'SELECT | FROM (SELECT foo, bar as baz FROM bar);',
    );
    const columnSuggestions: YQLColumnsSuggestion = {
        tables: [{name: '', columns: ['foo', 'baz']}],
        all: true,
    };
    expect(autocompleteResult.suggestColumns).toEqual(columnSuggestions);
});

test('cannot suggest if subquery with asterisk', () => {
    const autocompleteResult = parseYqlQueryWithCursor('SELECT | FROM (SELECT * FROM bar);');
    const columnSuggestions: YQLColumnsSuggestion = {
        all: true,
        tables: [{columns: undefined, name: ''}],
    };
    expect(autocompleteResult.suggestColumns).toEqual(columnSuggestions);
});

test('should suggest columns from first subquery', () => {
    const autocompleteResult = parseYqlQueryWithCursor(
        'SELECT | FROM (SELECT id FROM (SELECT foo FROM bar b join baz c on b.id = c.id));',
    );
    const columnSuggestions: YQLColumnsSuggestion = {
        tables: [{name: '', columns: ['id']}],
        all: true,
    };
    expect(autocompleteResult.suggestColumns).toEqual(columnSuggestions);
});

test('should suggest columns from first subquery', () => {
    const autocompleteResult = parseYqlQueryWithCursor(
        'SELECT * FROM (SELECT | FROM (SELECT foo FROM bar b join baz c on b.id = c.id));',
    );
    const columnSuggestions: YQLColumnsSuggestion = {
        tables: [{name: '', columns: ['foo']}],
        all: true,
    };
    expect(autocompleteResult.suggestColumns).toEqual(columnSuggestions);
});

test('should suggest columns from subquery with multi spaces before', () => {
    const autocompleteResult = parseYqlQueryWithCursor(
        '$a = select foo from bar; select   | FROM $a ',
    );
    const columnSuggestions: YQLColumnsSuggestion = {
        tables: [{name: '$a'}],
        all: true,
    };
    expect(autocompleteResult.suggestColumns).toEqual(columnSuggestions);
});

test('should suggest columns from subquery with multi spaces before if curson is on EOF', () => {
    const autocompleteResult = parseYqlQueryWithCursor(
        '$a = select foo from bar; FROM $a select   | ',
    );
    const columnSuggestions: YQLColumnsSuggestion = {
        tables: [{name: '$a'}],
        all: true,
    };
    expect(autocompleteResult.suggestColumns).toEqual(columnSuggestions);
});

test('should suggest properly at variable definition', () => {
    const autocompleteResult = parseYqlQueryWithCursor(
        '$x = SELECT |',
    );

    const keywordsSuggestion: KeywordSuggestion[] = [
        {value: 'ALL'},
        {value: 'DISTINCT'},
        {value: '*'},
        {value: 'NULL'},
        {value: 'FALSE'},
        {value: 'TRUE'},
        {value: 'EMPTY_ACTION'},
        {value: 'CAST'},
        {value: 'EXISTS'},
        {value: 'CASE'},
        {value: 'VARIANT'},
        {value: 'ENUM'},
        {value: 'CALLABLE'},
        {value: 'BITCAST'},
        {value: 'JSON_VALUE'},
        {value: 'JSON_EXISTS'},
        {value: 'JSON_QUERY'},
        {value: 'NOT'},
        {value: 'OPTIONAL'},
        {value: 'TUPLE'},
        {value: 'STRUCT'},
        {value: 'LIST'},
        {value: 'FLOW'},
        {value: 'DICT'},
        {value: 'SET'},
        {value: 'RESOURCE'},
        {value: 'TAGGED'},
    ];
    expect(autocompleteResult.suggestKeywords).toEqual(keywordsSuggestion);
    expect(autocompleteResult.suggestFunctions).toBeTruthy();
    expect(autocompleteResult.suggestUdfs).toBeTruthy();
    expect(autocompleteResult.suggestSimpleTypes).toBeTruthy();
});
