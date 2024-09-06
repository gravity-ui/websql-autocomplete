// $antlr-format alignTrailingComments true, columnLimit 500, maxEmptyLinesToKeep 1, reflowComments false, useTab false
// $antlr-format allowShortRulesOnASingleLine true, allowShortBlocksOnASingleLine true, minEmptyLines 0, alignSemicolons ownLine
// $antlr-format alignColons trailing, singleLineOverrulesHangingColon true, alignLexerCommands true, alignLabels true, alignTrailers true

lexer grammar RedisLexer;

options {
    caseInsensitive = true;
}

// Spaces

SPACE   : [ \t]+ -> channel (HIDDEN);
NEWLINE : ('\r' '\n'? | '\n');

// Common keywords

COPY        : 'COPY';
DB          : 'DB';
REPLACE     : 'REPLACE';
DEL         : 'DEL';
UNLINK      : 'UNLINK';
DUMP        : 'DUMP';
EXISTS      : 'EXISTS';
EXPIRE      : 'EXPIRE';
GT          : 'GT';
LT          : 'LT';
NX          : 'NX';
XX          : 'XX';
EXPIREAT    : 'EXPIREAT';
EXPIRETIME  : 'EXPIRETIME';
PEXPIRE     : 'PEXPIRE';
PEXPIREAT   : 'PEXPIREAT';
PEXPIRETIME : 'PEXPIRETIME';
KEYS        : 'KEYS';
MOVE        : 'MOVE';
OBJECT      : 'OBJECT';
ENCODING    : 'ENCODING';
FREQ        : 'FREQ';
IDLETIME    : 'IDLETIME';
REFCOUNT    : 'REFCOUNT';
PERSIST     : 'PERSIST';
TTL         : 'TTL';
PTTL        : 'PTTL';
RANDOMKEY   : 'RANDOMKEY';
RENAME      : 'RENAME';
RENAMENX    : 'RENAMENX';
SCAN        : 'SCAN';
MATCH       : 'MATCH';
COUNT       : 'COUNT';
TYPE        : 'TYPE';
TOUCH       : 'TOUCH';
WAIT        : 'WAIT';
LEFT        : 'LEFT';
RIGHT       : 'RIGHT';
BEFORE      : 'BEFORE';
AFTER       : 'AFTER';
RANK        : 'RANK';
MAXLEN      : 'MAXLEN';

// String keywords

SET      : 'SET';
GET      : 'GET';
INCR     : 'INCR';
INCRBY   : 'INCRBY';
DECR     : 'DECR';
DECRBY   : 'DECRBY';
EX       : 'EX';
PX       : 'PX';
EXAT     : 'EXAT';
PXAT     : 'PXAT';
KEEPTTL  : 'KEEPTTL';
APPEND   : 'APPEND';
GETDEL   : 'GETDEL';
GETEX    : 'GETEX';
GETRANGE : 'GETRANGE';
GETSET   : 'GETSET';
MGET     : 'MGET';
MSET     : 'MSET';
MSETNX   : 'MSETNX';
PSETEX   : 'PSETEX';
SETEX    : 'SETEX';
SETNX    : 'SETNX';
SETRANGE : 'SETRANGE';
STRLEN   : 'STRLEN';
SUBSTR   : 'SUBSTR';

// List keywords

LMOVE      : 'LMOVE';
BLMOVE     : 'BLMOVE';
LMPOP      : 'LMPOP';
BLMPOP     : 'BLMPOP';
LPOP       : 'LPOP';
BLPOP      : 'BLPOP';
RPOP       : 'RPOP';
BRPOP      : 'BRPOP';
RPOPLPUSH  : 'RPOPLPUSH';
BRPOPLPUSH : 'BRPOPLPUSH';
LINDEX     : 'LINDEX';
LINSERT    : 'LINSERT';
LLEN       : 'LLEN';
LPOS       : 'LPOS';
LPUSH      : 'LPUSH';
LPUSHX     : 'LPUSHX';
RPUSH      : 'RPUSH';
RPUSHX     : 'RPUSHX';
LRANGE     : 'LRANGE';
LREM       : 'LREM';
LSET       : 'LSET';
LTRIM      : 'LTRIM';

// Constructors symbols

SINGLE_QUOTE : '\'';
DOUBLE_QUOTE : '"';

// Literal Primitives

fragment DECIMAL_DIGIT: [0-9];

POSITIVE_DECIMAL_LITERAL : DECIMAL_DIGIT+;
DECIMAL_LITERAL          : [-]? POSITIVE_DECIMAL_LITERAL;

// Identifiers
// Should be at the very bottom, for it is the most general token

fragment DOUBLE_QUOTE_STRING : '"' ( '\\' . | ~('"' | '\\' | '\n' | '\r'))* '"';
fragment SINGLE_QUOTE_STRING : '\'' ('\\' . | ~('\'' | '\\' | '\n' | '\r'))* '\'';
fragment BASE_IDENTIFIER     : ~(' ' | '\t' | '\'' | '"' | '\n' | '\r')+;

IDENTIFIER: BASE_IDENTIFIER | DOUBLE_QUOTE_STRING | SINGLE_QUOTE_STRING;