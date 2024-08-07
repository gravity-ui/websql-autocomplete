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
    : setCommand
    | getCommand
    | incrementCommand
    | decrementCommand
    ;

setCommand
    : SET keyName identifier (NX | XX)? GET? expirationClause?
    ;

expirationClause
    : EX DECIMAL_LITERAL
    | PX DECIMAL_LITERAL
    | EXAT DECIMAL_LITERAL
    | PXAT DECIMAL_LITERAL
    | KEEPTTL
    ;

getCommand
    : GET keyName
    ;

incrementCommand
    : INCR keyName
    ;

decrementCommand
    : DECR keyName
    ;

identifier
    : IDENTIFIER
    | DECIMAL_LITERAL
    ;

keyName
    : identifier
    ;