import {parseMySqlQueryWithCursor} from '../../shared/lib';
import {KeywordSuggestion} from '../../../types';

test('should suggest keywords after GRANT', () => {
    const parseResult = parseMySqlQueryWithCursor('GRANT |');

    const keywords: KeywordSuggestion[] = [
        {value: 'PROXY'},
        {value: 'CURRENT_USER'},
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
    expect(parseResult.suggestKeywords).toEqual(keywords);
});

test('should suggest keywords after SELECT', () => {
    const parseResult = parseMySqlQueryWithCursor('GRANT SELECT |');

    const keywords: KeywordSuggestion[] = [{value: 'INTO'}, {value: 'ON'}];
    expect(parseResult.suggestKeywords).toEqual(keywords);
});

test('should suggest keywords after SELECT', () => {
    const parseResult = parseMySqlQueryWithCursor('GRANT SELECT ON |');

    const keywords: KeywordSuggestion[] = [
        {value: '*'},
        {value: 'PROCEDURE'},
        {value: 'TABLE'},
        {value: 'FUNCTION'},
    ];
    expect(parseResult.suggestKeywords).toEqual(keywords);
});

test('should suggest keywords after SELECT', () => {
    const parseResult = parseMySqlQueryWithCursor('GRANT SELECT ON * |');

    const keywords: KeywordSuggestion[] = [{value: 'TO'}];
    expect(parseResult.suggestKeywords).toEqual(keywords);
});

test('should suggest keywords after SELECT', () => {
    const parseResult = parseMySqlQueryWithCursor('GRANT SELECT ON * TO |');

    const keywords: KeywordSuggestion[] = [{value: 'CURRENT_USER'}];
    expect(parseResult.suggestKeywords).toEqual(keywords);
});

test('should suggest keywords after SELECT', () => {
    const parseResult = parseMySqlQueryWithCursor('GRANT SELECT ON * TO test_user |');

    const keywords: KeywordSuggestion[] = [
        {value: 'IDENTIFIED'},
        {value: 'AS'},
        {value: 'WITH'},
        {value: 'REQUIRE'},
    ];
    expect(parseResult.suggestKeywords).toEqual(keywords);
});
