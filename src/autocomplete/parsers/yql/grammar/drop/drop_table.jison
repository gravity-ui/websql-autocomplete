// Copyright 2023 YANDEX LLC
//
// Licensed under the Apache License, Version 2.0 (the "License")
// You may not use this file except in compliance with the License.
// You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software distributed under
// the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
// either express or implied. See the License for the specific language governing permissions
// and limitations under the License.

Table
 : 'TABLE'
 | 'EXTERNAL' 'TABLE'
 | 'TABLESTORE'
 ;

DataDefinition
 : DropTableStatement
 ;

DataDefinition_EDIT
 : DropTableStatement_EDIT
 ;

DropTableStatement
 : 'DROP' Table OptionalIfExists SchemaQualifiedTableIdentifier
   {
     parser.addTablePrimary($4);
   }
 ;

DropTableStatement_EDIT
 : 'DROP' Table OptionalIfExists_EDIT
 | 'DROP' Table OptionalIfExists 'CURSOR'
   {
     if (!$3) {
       parser.suggestKeywords(['IF EXISTS']);
     }
     parser.suggestTables({ onlyTables: true });
     parser.suggestDatabases();
   }
 | 'DROP' Table OptionalIfExists SchemaQualifiedTableIdentifier_EDIT
   {
     if (parser.yy.result.suggestTables) {
       parser.yy.result.suggestTables.onlyTables = true;
     }
   }
 | 'DROP' Table OptionalIfExists_EDIT SchemaQualifiedTableIdentifier
 | 'DROP' Table OptionalIfExists SchemaQualifiedTableIdentifier 'CURSOR'
   {
     parser.addTablePrimary($4);
   }
 ;

