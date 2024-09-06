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
    | listCommand
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

listCommand
    : lmoveCommand
    | blmoveCommand
    | lmpopCommand
    | blmpopCommand
    | lpopCommand
    | blpopCommand
    | rpopCommand
    | brpopCommand
    | rpopLpushCommand
    | brpopLpushCommand
    | lindexCommand
    | linsertCommand
    | llenCommand
    | lposCommand
    | lpushCommand
    | lpushxCommand
    | rpushCommand
    | rpushxCommand
    | lrangeCommand
    | lremCommand
    | lsetCommand
    | ltrimCommand
    ;

lmoveCommand
    : LMOVE listKeyName listKeyName leftOrRightClause leftOrRightClause
    ;

leftOrRightClause
    : LEFT
    | RIGHT
    ;

blmoveCommand
    : BLMOVE listKeyName listKeyName leftOrRightClause leftOrRightClause POSITIVE_DECIMAL_LITERAL
    ;

lmpopCommand
    : LMPOP POSITIVE_DECIMAL_LITERAL listKeyName+ leftOrRightClause countClause?
    ;

blmpopCommand
    : BLMPOP POSITIVE_DECIMAL_LITERAL POSITIVE_DECIMAL_LITERAL listKeyName+ leftOrRightClause countClause?
    ;

lpopCommand
    : LPOP listKeyName POSITIVE_DECIMAL_LITERAL?
    ;

blpopCommand
    : BLPOP listKeyName+ POSITIVE_DECIMAL_LITERAL
    ;

rpopCommand
    : RPOP listKeyName POSITIVE_DECIMAL_LITERAL?
    ;

brpopCommand
    : BRPOP listKeyName+ POSITIVE_DECIMAL_LITERAL
    ;

rpopLpushCommand
    : RPOPLPUSH listKeyName listKeyName
    ;

brpopLpushCommand
    : BRPOPLPUSH listKeyName listKeyName POSITIVE_DECIMAL_LITERAL
    ;

lindexCommand
    : LINDEX listKeyName decimal
    ;

linsertCommand
    : LINSERT listKeyName beforeOrAfterClause identifier identifier
    ;

beforeOrAfterClause
    : BEFORE
    | AFTER
    ;

llenCommand
    : LLEN listKeyName
    ;

lposCommand
    : LPOS listKeyName identifier rankClause? countClause? maxLenClause?
    ;

rankClause
    : RANK decimal
    ;

maxLenClause
    : MAXLEN POSITIVE_DECIMAL_LITERAL
    ;

lpushCommand
    : LPUSH listKeyName identifier+
    ;

lpushxCommand
    : LPUSHX listKeyName identifier+
    ;

rpushCommand
    : RPUSH listKeyName identifier+
    ;

rpushxCommand
    : RPUSHX listKeyName identifier+
    ;

lrangeCommand
    : LRANGE listKeyName decimal decimal
    ;

lremCommand
    : LREM listKeyName decimal identifier
    ;

lsetCommand
    : LSET listKeyName decimal identifier
    ;

ltrimCommand
    : LTRIM listKeyName decimal decimal
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

listKeyName
    : identifier
    ;

keyName
    : identifier
    ;

keyPattern
    : identifier # notProperPattern
    ;