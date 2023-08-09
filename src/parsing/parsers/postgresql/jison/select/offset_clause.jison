OptionalOffsetClause
 :
 | OffsetClause
 ;

OffsetClause
 : 'OFFSET' ValueExpression
 ;

OffsetClause_EDIT
 : 'OFFSET' 'CURSOR'
   {
     parser.suggestFunctions({ types: ['BIGINT'] });
   }
 ;
