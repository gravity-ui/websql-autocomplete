TargetTable
 : TableName
 ;

TableName
 : LocalOrSchemaQualifiedName
   {
     parser.addTablePrimary($1);
   }
 ;

TargetTable_EDIT
 : TableName_EDIT
 ;

TableName_EDIT
 : LocalOrSchemaQualifiedName_EDIT
 ;
