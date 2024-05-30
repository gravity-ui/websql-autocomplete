When new grammar is arrived, it is a must to do next steps before generating parsers:

1. Add to the end of file next statements:

```antlr
sql_query_yq
    : sql_stmt_list_yq
    | (PRAGMA ANSI DIGITS ansi_sql_stmt_list)
    ;

sql_stmt_list_yq
    : SEMICOLON* sql_stmt_yq (SEMICOLON+ sql_stmt_yq)* SEMICOLON* EOF
    ;

sql_stmt_yq
    : (EXPLAIN (QUERY PLAN)?)? sql_stmt_core_yq
    ;

sql_stmt_core_yq
    : pragma_stmt
    | select_stmt
    | named_nodes_stmt
    | use_stmt
    | into_table_stmt_yq
    | declare_stmt
    | import_stmt
    | export_stmt
    | do_stmt
    | define_action_or_subquery_stmt
    | if_stmt
    | for_stmt
    | values_stmt
    ;

replication_name
    : AS object_ref
    ;

where_expr
    : WHERE expr
    ;

from_stmt
    : FROM join_source
    ;

alter_table_for_autocomplete
    : alter_table_stmt
    | alter_table_store_stmt
    ;

```

2. set `where_expr` where it is suitable
3. set `replication_name` where it is suitable
4. change statement

from

```antlr
COMMENT
    : (MULTILINE_COMMENT | LINE_COMMENT) -> channel(HIDDEN)
    ;
```

to

```antlr
COMMENT
    : (MULTILINE_COMMENT | LINE_COMMENT) -> skip
    ;
```
