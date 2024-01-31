FILE_PREFIX=src/parsers/mysql/generated

LEXER_FILE=$FILE_PREFIX/MySqlLexer.ts
PARSER_FILE=$FILE_PREFIX/MySqlParser.ts
PARSER_VISITOR_FILE=$FILE_PREFIX/MySqlParserVisitor.ts

TS_IGNORE_TEXT="// We don't really want to check types in generated code\n// @ts-nocheck\n\n"

declare -a FILES_TO_PATCH=(
  $LEXER_FILE
  $PARSER_FILE
  $PARSER_VISITOR_FILE
)

for FILE in "${FILES_TO_PATCH[@]}"
do
   echo -e "$TS_IGNORE_TEXT$(cat $FILE)" > $FILE
done

echo 'successfully patched generated mysql files'