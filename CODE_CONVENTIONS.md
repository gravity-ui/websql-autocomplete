# Code conventions

A set of rules all contributors should follow.
You can always link those rules in your PR without hesitation if you see that they are not followed.

## Testing

- Tests should be put in `src/tests/{dialect}` folders
- All tests with cursor (expect when testing with newlines) should be written using `parse{dialect}QueryWithCursor` functions. This will help us avoid passing cursor position to functions and make tests more readable
- Each test should only test a granular added piece of logic, and shouldn't test functionality of other's.
- Don't use `foo` or `bar` custom names, always use `test_{object}`, e.g. `SELECT * FROM test_table`, not `SELECT * FROM hehe_haha`. If you need multiple names, use `_{number}` suffix, e.g. `SELECT test_field, test_field_2 FROM test_table;`
- Write all the static tokens in UPPER_CASE, and all the custom variables in lower_case, e.g. `SELECT test_field`
