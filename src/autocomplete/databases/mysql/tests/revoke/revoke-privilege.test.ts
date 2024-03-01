import {parseMySqlQueryWithCursor} from '../../../../shared/parse-query-with-cursor';
import {KeywordSuggestion} from '../../../../autocomplete-types';
import {parseMySqlQueryWithoutCursor} from '../../../../autocomplete';

test('should suggest keywords after REVOKE', () => {
    const autocompleteResult = parseMySqlQueryWithCursor('REVOKE |');

    const keywords: KeywordSuggestion[] = [
        {value: 'PROXY'},
        {value: 'ALL'},
        {value: 'ALTER'},
        {value: 'CREATE'},
        {value: 'DELETE'},
        {value: 'DROP'},
        {value: 'EVENT'},
        {value: 'EXECUTE'},
        {value: 'FILE'},
        {value: 'GRANT'},
        {value: 'INDEX'},
        {value: 'INSERT'},
        {value: 'LOCK'},
        {value: 'PROCESS'},
        {value: 'REFERENCES'},
        {value: 'RELOAD'},
        {value: 'REPLICATION'},
        {value: 'SELECT'},
        {value: 'SHOW'},
        {value: 'SHUTDOWN'},
        {value: 'SUPER'},
        {value: 'TRIGGER'},
        {value: 'UPDATE'},
        {value: 'USAGE'},
        {value: 'APPLICATION_PASSWORD_ADMIN'},
        {value: 'AUDIT_ABORT_EXEMPT'},
        {value: 'AUDIT_ADMIN'},
        {value: 'AUTHENTICATION_POLICY_ADMIN'},
        {value: 'BACKUP_ADMIN'},
        {value: 'BINLOG_ADMIN'},
        {value: 'BINLOG_ENCRYPTION_ADMIN'},
        {value: 'CLONE_ADMIN'},
        {value: 'CONNECTION_ADMIN'},
        {value: 'ENCRYPTION_KEY_ADMIN'},
        {value: 'FIREWALL_ADMIN'},
        {value: 'FIREWALL_EXEMPT'},
        {value: 'FIREWALL_USER'},
        {value: 'FLUSH_OPTIMIZER_COSTS'},
        {value: 'FLUSH_STATUS'},
        {value: 'FLUSH_TABLES'},
        {value: 'FLUSH_USER_RESOURCES'},
        {value: 'GROUP_REPLICATION_ADMIN'},
        {value: 'INNODB_REDO_LOG_ARCHIVE'},
        {value: 'INNODB_REDO_LOG_ENABLE'},
        {value: 'NDB_STORED_USER'},
        {value: 'PASSWORDLESS_USER_ADMIN'},
        {value: 'PERSIST_RO_VARIABLES_ADMIN'},
        {value: 'REPLICATION_APPLIER'},
        {value: 'REPLICATION_SLAVE_ADMIN'},
        {value: 'RESOURCE_GROUP_ADMIN'},
        {value: 'RESOURCE_GROUP_USER'},
        {value: 'ROLE_ADMIN'},
        {value: 'SERVICE_CONNECTION_ADMIN'},
        {value: 'SESSION_VARIABLES_ADMIN'},
        {value: 'SET_USER_ID'},
        {value: 'SKIP_QUERY_REWRITE'},
        {value: 'SHOW_ROUTINE'},
        {value: 'SYSTEM_VARIABLES_ADMIN'},
        {value: 'TABLE_ENCRYPTION_ADMIN'},
        {value: 'VERSION_TOKEN_ADMIN'},
        {value: 'XA_RECOVER_ADMIN'},
        {value: 'LOAD'},
        {value: 'INVOKE'},
    ];
    expect(autocompleteResult.suggestKeywords).toEqual(keywords);
});

test('should suggest keywords after SELECT', () => {
    const autocompleteResult = parseMySqlQueryWithCursor('REVOKE SELECT |');

    const keywords: KeywordSuggestion[] = [{value: 'INTO'}, {value: 'ON'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywords);
});

test('should suggest keywords after SELECT ON', () => {
    const autocompleteResult = parseMySqlQueryWithCursor('REVOKE SELECT ON |');

    const keywords: KeywordSuggestion[] = [
        {value: '*'},
        {value: 'PROCEDURE'},
        {value: 'TABLE'},
        {value: 'FUNCTION'},
    ];
    expect(autocompleteResult.suggestKeywords).toEqual(keywords);
});

test('should suggest keywords after REVOKE SELECT ON *', () => {
    const autocompleteResult = parseMySqlQueryWithCursor('REVOKE SELECT ON * |');

    const keywords: KeywordSuggestion[] = [{value: 'FROM'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywords);
});

test('should suggest keywords after REVOKE SELECT ON * FROM', () => {
    const autocompleteResult = parseMySqlQueryWithCursor('REVOKE SELECT ON * FROM |');

    const keywords: KeywordSuggestion[] = [{value: 'CURRENT_USER'}];
    expect(autocompleteResult.suggestKeywords).toEqual(keywords);

    expect(autocompleteResult.suggestRoles).toEqual(true);
});

test('should suggest keywords after REVOKE SELECT ON * FROM test_user', () => {
    const autocompleteResult = parseMySqlQueryWithCursor('REVOKE SELECT ON * FROM test_user |');

    const keywords: KeywordSuggestion[] = [];
    expect(autocompleteResult.suggestKeywords).toEqual(keywords);
});

test('should not report errors on a full statement', () => {
    const autocompleteResult = parseMySqlQueryWithoutCursor(
        'REVOKE SELECT ON * FROM test_user, test_role;',
    );
    expect(autocompleteResult.errors).toHaveLength(0);
});
