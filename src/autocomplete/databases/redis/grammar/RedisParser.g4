// $antlr-format columnLimit 500, minEmptyLines 1, maxEmptyLinesToKeep 1, useTab false, reflowComments false, breakBeforeBraces false
// $antlr-format keepEmptyLinesAtTheStartOfBlocks false, allowShortRulesOnASingleLine false, alignSemicolons hanging, alignColons hanging
// $antlr-format alignTrailingComments true

parser grammar RedisParser;

options {
    tokenVocab = RedisLexer;
}

root
    : commands? EOF
    ;

// We can omit newline only if it's the last statement
commands
    : command NEWLINE*
    | command NEWLINE+ commands
    ;

command
    : commonCommand
    | stringCommand
    ;

commonCommand
    : copyCommand
    | deleteCommand
    | unlinkCommand
    | dumpCommand
    | existsCommand
    | expireCommand
    | expireAtCommand
    | expireTimeCommand
    | pExpireCommand
    | pExpireAtCommand
    | pExpireTimeCommand
    | keysCommand
    | moveCommand
    | objectCommand
    | persistCommand
    | ttlCommand
    | pTtlCommand
    | randomKeyCommand
    | renameCommand
    | renameNxCommand
    | scanCommand
    | touchCommand
    | typeCommand
    | waitCommand
    ;

stringCommand
    : setCommand
    | getCommand
    | incrementCommand
    | incrementByCommand
    | decrementCommand
    | decrementByCommand
    | appendCommand
    | getDeleteCommand
    | getExCommand
    | getRangeCommand
    | getSetCommand
    | mGetCommand
    | mSetCommand
    | mSetNxCommand
    | pSetExCommand
    | setExCommand
    | setNxCommand
    | setRangeCommand
    | stringLengthCommand
    | substringCommand
    ;

copyCommand
    : COPY keyName identifier dbClause? REPLACE?
    ;

dbClause
    : DB databaseName
    ;

databaseName
    : POSITIVE_DECIMAL_LITERAL
    ;

deleteCommand
    : DEL keyName+
    ;

unlinkCommand
    : UNLINK keyName+
    ;

dumpCommand
    : DUMP keyName
    ;

existsCommand
    : EXISTS keyName+
    ;

expireCommand
    : EXPIRE keyName decimal expireOptions?
    ;

expireAtCommand
    : EXPIREAT keyName decimal expireOptions?
    ;

pExpireCommand
    : PEXPIRE keyName decimal expireOptions?
    ;

pExpireAtCommand
    : PEXPIREAT keyName decimal expireOptions?
    ;

expireOptions
    : NX
    | XX
    | GT
    | LT
    ;

expireTimeCommand
    : EXPIRETIME keyName
    ;

pExpireTimeCommand
    : PEXPIRETIME keyName
    ;

keysCommand
    : KEYS keyPattern
    ;

moveCommand
    : MOVE keyName databaseName
    ;

objectCommand
    : OBJECT objectOptions keyName
    ;

objectOptions
    : ENCODING
    | FREQ
    | IDLETIME
    | REFCOUNT
    ;

persistCommand
    : PERSIST keyName
    ;

ttlCommand
    : TTL keyName
    ;

pTtlCommand
    : PTTL keyName
    ;

randomKeyCommand
    : RANDOMKEY
    ;

renameCommand
    : RENAME keyName identifier
    ;

renameNxCommand
    : RENAMENX keyName identifier
    ;

scanCommand
    : SCAN decimal matchClause? countClause? typeClause?
    ;

matchClause
    : MATCH keyPattern
    ;

countClause
    : COUNT POSITIVE_DECIMAL_LITERAL
    ;

typeClause
    : TYPE identifier
    ;

touchCommand
    : TOUCH keyName+
    ;

typeCommand
    : TYPE keyName
    ;

waitCommand
    : WAIT POSITIVE_DECIMAL_LITERAL POSITIVE_DECIMAL_LITERAL
    ;

setCommand
    : SET stringKeyName identifier keyExistenceClause? GET? (expirationClause | KEEPTTL)?
    ;

keyExistenceClause
    : NX
    | XX
    ;

expirationClause
    : EX POSITIVE_DECIMAL_LITERAL
    | PX POSITIVE_DECIMAL_LITERAL
    | EXAT POSITIVE_DECIMAL_LITERAL
    | PXAT POSITIVE_DECIMAL_LITERAL
    ;

getCommand
    : GET stringKeyName
    ;

incrementCommand
    : INCR stringKeyName
    ;

incrementByCommand
    : INCRBY stringKeyName decimal
    ;

decrementCommand
    : DECR stringKeyName
    ;

decrementByCommand
    : DECRBY stringKeyName decimal
    ;

appendCommand
    : APPEND stringKeyName identifier
    ;

getDeleteCommand
    : GETDEL stringKeyName
    ;

getExCommand
    : GETEX stringKeyName (expirationClause | PERSIST)?
    ;

getRangeCommand
    : GETRANGE stringKeyName decimal decimal
    ;

getSetCommand
    : GETSET stringKeyName identifier
    ;

mGetCommand
    : MGET stringKeyName+
    ;

mSetCommand
    : MSET (stringKeyName identifier)+
    ;

mSetNxCommand
    : MSETNX (stringKeyName identifier)+
    ;

pSetExCommand
    : PSETEX stringKeyName POSITIVE_DECIMAL_LITERAL identifier
    ;

setExCommand
    : SETEX stringKeyName POSITIVE_DECIMAL_LITERAL identifier
    ;

setNxCommand
    : SETNX stringKeyName identifier
    ;

setRangeCommand
    : SETRANGE stringKeyName POSITIVE_DECIMAL_LITERAL identifier
    ;

stringLengthCommand
    : STRLEN stringKeyName
    ;

substringCommand
    : SUBSTR stringKeyName decimal decimal
    ;

decimal
    : POSITIVE_DECIMAL_LITERAL
    | DECIMAL_LITERAL
    ;

identifier
    : IDENTIFIER
    | DECIMAL_LITERAL
    | POSITIVE_DECIMAL_LITERAL
    ;

stringKeyName
    : identifier
    ;

keyName
    : identifier
    ;

keyPattern
    : identifier # notProperPattern
    ;