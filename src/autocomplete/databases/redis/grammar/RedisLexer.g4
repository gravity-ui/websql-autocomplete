// $antlr-format alignTrailingComments true, columnLimit 500, maxEmptyLinesToKeep 1, reflowComments false, useTab false
// $antlr-format allowShortRulesOnASingleLine true, allowShortBlocksOnASingleLine true, minEmptyLines 0, alignSemicolons ownLine
// $antlr-format alignColons trailing, singleLineOverrulesHangingColon true, alignLexerCommands true, alignLabels true, alignTrailers true

lexer grammar RedisLexer;

options {
    caseInsensitive = true;
}

// Spaces

SPACE   : [ \t]+              -> channel (HIDDEN);
NEWLINE : ('\r' '\n'? | '\n') -> channel (HIDDEN);

// Keywords

SET     : 'SET';
GET     : 'GET';
INCR    : 'INCR';
DECR    : 'DECR';
NX      : 'NX';
XX      : 'XX';
EX      : 'EX';
PX      : 'PX';
EXAT    : 'EXAT';
PXAT    : 'PXAT';
KEEPTTL : 'KEEPTTL';

// Constructors symbols

SINGLE_QUOTE : '\'';
DOUBLE_QUOTE : '"';

// Literal Primitives

fragment DECIMAL_DIGIT: [0-9];

DECIMAL_LITERAL: DECIMAL_DIGIT+;

// Identifiers
// Should be at the very bottom, for it is the most general token

fragment DOUBLE_QUOTE_STRING : '"' ( '\\' . | ~('"' | '\\' | '\n' | '\r'))* '"';
fragment SINGLE_QUOTE_STRING : '\'' ('\\' . | ~('\'' | '\\' | '\n' | '\r'))* '\'';
fragment BASE_IDENTIFIER     : ~(' ' | '\t' | '\'' | '"' | '\n' | '\r')+;

IDENTIFIER: BASE_IDENTIFIER | DOUBLE_QUOTE_STRING | SINGLE_QUOTE_STRING;