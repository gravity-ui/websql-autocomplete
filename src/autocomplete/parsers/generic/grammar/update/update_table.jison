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
 : UpdateStatement
 ;

DataManipulation_EDIT
 : UpdateStatement_EDIT
 ;

UpdateStatement
 : 'UPDATE' TableName 'SET' SetClauseListOrError OptionalFromJoinedTable OptionalWhereClause
 ;

UpdateStatement_EDIT
 : 'UPDATE' TableName_EDIT 'SET' SetClauseListOrError OptionalFromJoinedTable OptionalWhereClause
 | 'UPDATE' TableName 'SET' SetClauseList_EDIT OptionalFromJoinedTable OptionalWhereClause
 | 'UPDATE' TableName 'SET' SetClauseListOrError FromJoinedTable_EDIT OptionalWhereClause
 | 'UPDATE' TableName 'SET' SetClauseListOrError OptionalFromJoinedTable WhereClause_EDIT
 | 'UPDATE' TableName 'SET' SetClauseListOrError OptionalFromJoinedTable OptionalWhereClause 'CURSOR'
   {
     parser.suggestKeywords([ 'WHERE' ]);
   }
 | 'UPDATE' TableName 'CURSOR'
   {
     parser.suggestKeywords([ 'SET' ]);
   }
 | 'UPDATE' TableName_EDIT
 | 'UPDATE' TableName
 | 'UPDATE' 'CURSOR'
   {
     parser.suggestTables();
     parser.suggestDatabases({ appendDot: true });
   }
 | 'UPDATE' 'CURSOR' 'SET' SetClauseListOrError OptionalFromJoinedTable OptionalWhereClause
   {
     parser.suggestTables();
     parser.suggestDatabases({ appendDot: true });
   }
 ;

SetClauseListOrError
 : SetClause
 | SetClauseListOrError ',' SetClause
 | error
 ;

SetClauseList_EDIT
 : SetClause_EDIT
 | SetClauseListOrError ',' SetClause_EDIT
 | SetClause_EDIT ',' SetClauseListOrError
 | SetClauseListOrError ',' SetClause_EDIT ',' SetClauseListOrError
 ;

SetClause
 : SetTarget '=' UpdateSource
 ;

SetClause_EDIT
 : SetTarget '=' UpdateSource_EDIT
 | SetTarget 'CURSOR'
   {
     parser.suggestKeywords([ '=' ]);
   }
 | 'CURSOR'
   {
     parser.suggestColumns();
   }
 ;

SetTarget
 : ColumnReference
 ;

UpdateSource
 : ValueExpression
 ;

UpdateSource_EDIT
 : ValueExpression_EDIT
 ;

OptionalFromJoinedTable
 :
 | 'FROM' TableReference  -> $2
 ;

FromJoinedTable_EDIT
 : 'FROM' 'CURSOR'
   {
     parser.suggestTables();
     parser.suggestDatabases({ appendDot: true });
   }
 | 'FROM' TableReference_EDIT
 ;
