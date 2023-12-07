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



Role
 : 'USER'
 | 'GROUP'
 ;

RolesList
 : RegularIdentifier
 | RolesList ',' RegularIdentifier
 ;

RolesList_EDIT
 : RolesList ',' AnyCursor
 | RolesList ',' AnyCursor ',' RolesList
 ;

DataDefinition
 : DropRoleStatement
 ;

DataDefinition_EDIT
 : DropRoleStatement_EDIT
 ;

DropRoleStatement
 : 'DROP' Role 'IF' 'EXISTS' RolesList
 | 'DROP' Role RolesList
 ;

DropRoleStatement_EDIT
 : 'DROP' Role OptionalIfExists_EDIT
 | 'DROP' Role OptionalIfExists 'CURSOR'
   {
     if (!$3) {
       parser.suggestKeywords(['IF EXISTS']);
     }
   }
// This solves error `Conflict in grammar: multiple actions possible` when try to pass `OptionalIfExists RolesList_EDIT`
 | 'DROP' Role 'IF' 'EXISTS' RolesList_EDIT
 | 'DROP' Role RolesList_EDIT
 | 'DROP' Role OptionalIfExists_EDIT RolesList
 ;
