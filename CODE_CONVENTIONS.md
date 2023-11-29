# Code conventions

A set of rules all contributors should follow.
You can always link those rules in your PR without hesitation if you see that they are not followed.

## Testing

- Each test should only test a granular added piece of logic, and shouldn't test functionality of other's. E.g. if you are using OptionalIfNotExists, you shouldn't test if you get suggestions when writing '', 'IF ', 'IF NOT', just test if `IF NOT EXISTS` is suggesting, and it's enough.
- Each test file should contain
  - A test that on full statement for errors
  - A test that checks locations (can be merged with the one above)
- Don't use `foo` or `bar` custom names, always use `test_{object}`, e.g. `SELECT * FROM test_table`, not `SELECT * FROM hehe_haha`. If you need multiple names, use `_{number}` suffix, e.g. `SELECT test_field, test_field_2 FROM test_table;`
- Write all the static tokens in UPPER_CASE, and all the custom variables in lower_case, e.g. `SELECT test_field`
- Always test your statements on errors, and if there's an unexpected error, just add `TODO: fix unhandled error` error
