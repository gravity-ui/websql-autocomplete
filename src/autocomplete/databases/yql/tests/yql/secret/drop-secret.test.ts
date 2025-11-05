import {parseYqlQueryWithCursor} from '../../../index';

test('should suggest keywords after DROP', () => {
    const autocompleteResult = parseYqlQueryWithCursor('DROP |');

    expect(autocompleteResult.suggestKeywords).toContainEqual({value: 'SECRET'});
});

test('should suggest object after DROP SECRET', () => {
    const autocompleteResult = parseYqlQueryWithCursor('DROP SECRET my_secret|');

    // SECRET не имеет специального entity suggestion, проверяем что нет ошибок
    expect(autocompleteResult.errors).toHaveLength(0);
});
