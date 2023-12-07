TableName
 : LocalOrSchemaQualifiedName
   {
     parser.addTablePrimary($1);
   }
 ;

TableName_EDIT
 : LocalOrSchemaQualifiedName_EDIT
 ;
