// Licensed to Cloudera, Inc. under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  Cloudera, Inc. licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

DataManipulation
 : InsertStatement
 ;

InsertStatement
 : InsertValuesStatement
 ;

DataManipulation_EDIT
 : InsertValuesStatement_EDIT
 ;

InsertValuesStatement
 : 'INSERT' 'INTO' OptionalTable SchemaQualifiedTableIdentifier OptionalParenthesizedColumnList 'VALUES' InsertValuesList
   {
     $4.owner = 'insert';
     parser.addTablePrimary($4);
   }
 ;

InsertValuesStatement_EDIT
 : 'INSERT' 'CURSOR'
   {
     parser.suggestKeywords(['INTO']);
   }
 | 'INSERT' 'INTO' OptionalTable 'CURSOR' OptionalParenthesizedColumnListOrError
   {
     if (!$3) {
       parser.suggestKeywords(['TABLE']);
     }
     parser.suggestTables();
     parser.suggestDatabases({ appendDot: true });
   }
 | 'INSERT' 'INTO' OptionalTable SchemaQualifiedTableIdentifier_EDIT OptionalParenthesizedColumnListOrError
 | 'INSERT' 'INTO' OptionalTable SchemaQualifiedTableIdentifier OptionalParenthesizedColumnListOrError 'CURSOR'
   {
     $4.owner = 'insert';
     parser.addTablePrimary($4);
     parser.suggestKeywords(['VALUES']);
   }
 | 'INSERT' 'INTO' OptionalTable SchemaQualifiedTableIdentifier_EDIT OptionalParenthesizedColumnListOrError 'VALUES' InsertValuesListOrError
 | 'INSERT' 'INTO' OptionalTable SchemaQualifiedTableIdentifier OptionalParenthesizedColumnList_EDIT 'VALUES' InsertValuesListOrError
   {
     parser.addTablePrimary($4);
     parser.suggestColumns();
   }
 | 'INSERT' 'INTO' OptionalTable SchemaQualifiedTableIdentifier OptionalParenthesizedColumnList_EDIT
   {
     parser.addTablePrimary($4);
     parser.suggestColumns();
   }
 | 'INSERT' 'INTO' OptionalTable 'CURSOR' OptionalParenthesizedColumnListOrError 'VALUES' InsertValuesListOrError
   {
     if (!$3) {
       parser.suggestKeywords(['TABLE']);
     }
     parser.suggestTables();
     parser.suggestDatabases({ appendDot: true });
   }
 ;

OptionalParenthesizedColumnListOrError
 : OptionalParenthesizedColumnList
 | '(' error ')'
 ;

InsertValuesListOrError
 : InsertValuesList
 | '(' error ')'
 | error
 ;

InsertValuesList
 : ParenthesizedRowValuesList
 | InsertValuesList ',' ParenthesizedRowValuesList
 ;

ParenthesizedRowValuesList
 : '(' InValueList ')'
 ;

OptionalTable
 :
 | 'TABLE'
 ;