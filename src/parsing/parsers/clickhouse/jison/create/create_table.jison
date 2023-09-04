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

DataDefinition
 : TableDefinition
 ;

DataDefinition_EDIT
 : TableDefinition_EDIT
 ;

TableDefinition
 : 'CREATE' 'TABLE' OptionalIfNotExists TableDefinitionRightPart
 ;

TableDefinition_EDIT
 : 'CREATE' 'TABLE' OptionalIfNotExists TableDefinitionRightPart_EDIT
 | 'CREATE' 'TABLE' OptionalIfNotExists 'CURSOR'
   {
     if (!$3) {
       parser.suggestKeywords(['IF NOT EXISTS']);
     }
   }
 | 'CREATE' 'TABLE' OptionalIfNotExists_EDIT
 ;

TableDefinitionRightPart
 : TableIdentifierAndOptionalColumnSpecification OptionalPartitionedBy EngineTypeSet OptionalAsSelectStatement
 ;

TableDefinitionRightPart_EDIT
 : TableIdentifierAndOptionalColumnSpecification_EDIT OptionalPartitionedBy OptionalEngineTypeSet OptionalAsSelectStatement
 | TableIdentifierAndOptionalColumnSpecification PartitionedBy_EDIT OptionalEngineTypeSet OptionalAsSelectStatement
 | TableIdentifierAndOptionalColumnSpecification OptionalPartitionedBy EngineTypeSet_EDIT OptionalAsSelectStatement_EDIT
 | TableIdentifierAndOptionalColumnSpecification OptionalPartitionedBy OptionalEngineTypeSet 'CURSOR'
   {
     var keywords = [];
     if (!$1 && !$2) {
       keywords.push({ value: 'LIKE', weight: 1 });
     } else {
       if (!$2) {
         keywords.push({ value: 'PARTITION BY', weight: 12 });
       }
       if (!$3) {
         keywords.push({ value: 'ENGINE', weight: 13 });
       }
       keywords.push({ value: 'AS', weight: 1 });
     }

     if (keywords.length > 0) {
       parser.suggestKeywords(keywords);
     }
   }
 ;

TableIdentifierAndOptionalColumnSpecification
 : SchemaQualifiedIdentifier OptionalColumnSpecificationsOrLike
   {
     parser.addNewTableLocation(@1, $1, $2);
     $$ = $2;
   }
 ;

TableIdentifierAndOptionalColumnSpecification_EDIT
 : SchemaQualifiedIdentifier OptionalColumnSpecificationsOrLike_EDIT
 | SchemaQualifiedIdentifier_EDIT OptionalColumnSpecificationsOrLike
 ;

OptionalColumnSpecificationsOrLike
 :
 | ParenthesizedColumnSpecificationList
 | 'LIKE' SchemaQualifiedTableIdentifier    -> []
 ;

OptionalColumnSpecificationsOrLike_EDIT
 : ParenthesizedColumnSpecificationList_EDIT
 | 'LIKE' 'CURSOR'
   {
     parser.suggestTables();
     parser.suggestDatabases({ appendDot: true });
   }
 | 'LIKE' SchemaQualifiedTableIdentifier_EDIT
 ;

ParenthesizedColumnSpecificationList
 : '(' ColumnSpecificationList ')'                              -> $2
 ;

ParenthesizedColumnSpecificationList_EDIT
 : '(' ColumnSpecificationList_EDIT RightParenthesisOrError
 ;

ColumnSpecificationList
 : ColumnSpecification                              -> [$1]
 | ColumnSpecificationList ',' ColumnSpecification  -> $1.concat($3)
 ;

ColumnSpecificationList_EDIT
 : ColumnSpecification_EDIT
 | ColumnSpecification_EDIT ',' ColumnSpecificationList
 | ColumnSpecificationList ',' ColumnSpecification_EDIT
 | ColumnSpecificationList ',' ColumnSpecification_EDIT ',' ColumnSpecificationList
 | ColumnSpecification 'CURSOR'
   {
     parser.checkForKeywords($1);
   }
 | ColumnSpecification 'CURSOR' ',' ColumnSpecificationList
   {
     parser.checkForKeywords($1);
   }
 | ColumnSpecificationList ',' ColumnSpecification 'CURSOR'
   {
     parser.checkForKeywords($3);
   }
 | ColumnSpecificationList ',' ColumnSpecification 'CURSOR' ',' ColumnSpecificationList
   {
     parser.checkForKeywords($3);
   }
 ;

ColumnSpecification
 : ColumnIdentifier ColumnDataType OptionalColumnOptions
   {
     $$ = $1;
     $$.type = $2;
     var keywords = [];
     if (!$3['comment']) {
       keywords.push('COMMENT');
     }
     if (keywords.length > 0) {
       $$.suggestKeywords = keywords;
     }
   }
 ;

ColumnSpecification_EDIT
 : ColumnIdentifier 'CURSOR' OptionalColumnOptions
   {
     parser.suggestKeywords(parser.getColumnDataTypeKeywords());
   }
 | ColumnIdentifier ColumnDataType_EDIT OptionalColumnOptions
 | ColumnIdentifier ColumnDataType ColumnOptions_EDIT
 ;

OptionalColumnOptions
 :                      -> {}
 | ColumnOptions
 ;

ColumnOptions
 : ColumnOption
   {
     $$ = {};
     $$[$1] = true;
   }
 | ColumnOptions ColumnOption
   {
     $1[$2] = true;
   }
 ;

ColumnOptions_EDIT
 : ColumnOption_EDIT
 | ColumnOption_EDIT ColumnOptions
 | ColumnOptions ColumnOption_EDIT
 | ColumnOptions ColumnOption_EDIT ColumnOptions
 ;

ColumnOption
 : 'NOT' 'NULL'                                              -> 'null'
 | 'NULL'                                                    -> 'null'
 | Comment                                                   -> 'comment'
 ;

ColumnOption_EDIT
 : 'NOT' 'CURSOR'
   {
     parser.suggestKeywords(['NULL']);
   }
 ;

ColumnDataType
 : PrimitiveType
 | ArrayType
 | LowCardinalityType
 | EnumType
 | 'Nullable' '(' PrimitiveType ')'
 | 'FixedString' OptionalTypeLength
 | 'AGGREGATE_FUNCTION' '(' 'REGULAR_IDENTIFIER' ',' PrimitiveTypeList ')'
 | 'SIMPLE_AGGREGATE_FUNCTION' '(' 'REGULAR_IDENTIFIER' ',' PrimitiveType ')'
 | DateTimeType
 | TupleType
 | 'Nested' ParenthesizedColumnSpecificationList
 | TimestampType
 | BinaryType
 ;

BinaryType
 : 'BINARY' '(' 'UNSIGNED_INTEGER' ')'
 | 'BINARY' '(' 'NULL' ')'
 ;

TimestampType
 : 'TIMESTAMP' '(' QuotedValue ')'
 | 'TIMESTAMP' '(' 'NULL' ')'
 ;

ColumnDataType_EDIT
 : 'Nested' ParenthesizedColumnSpecificationList_EDIT
 ;

TupleType
 : 'Tuple' '(' 'REGULAR_IDENTIFIER' PrimitiveType ',' 'REGULAR_IDENTIFIER' PrimitiveType ')'
 ;

DateTimeType
 : 'DateTime' '(' QuotedValue ')'
 ;

PrimitiveTypeList
 : PrimitiveType
 | PrimitiveTypeList ',' PrimitiveType
 ;

EnumType
 : 'Enum16' '(' EnumSet ')'
 | 'Enum8' '(' EnumSet ')'
 | 'Enum' '(' EnumSet ')'
 ;

EnumSet
 : EnumItem
 | EnumSet ',' EnumItem
 ;

EnumItem
 : QuotedValue
 | QuotedValue '=' 'UNSIGNED_INTEGER'
 | QuotedValue '=' '-' 'UNSIGNED_INTEGER'
 ;

LowCardinalityType
 : 'LowCardinality' '(' PrimitiveType ')'
 ;

ArrayType
 : 'Array' '(' ArrayType ')'
 | 'Array' '(' PrimitiveType ')'
 ;

StructDefinitionList
 : StructDefinition
 | StructDefinitionList ',' StructDefinition
 ;

StructDefinitionList_EDIT
 : StructDefinition_EDIT
 | StructDefinition_EDIT Commas
 | StructDefinition_EDIT Commas StructDefinitionList
 | StructDefinitionList ',' StructDefinition_EDIT
 | StructDefinitionList ',' StructDefinition_EDIT Commas StructDefinitionList
 ;

StructDefinition
 : RegularOrBacktickedIdentifier ':' ColumnDataType OptionalComment
 ;

StructDefinition_EDIT
 : Commas RegularOrBacktickedIdentifier ':' ColumnDataType 'CURSOR'
   {
     parser.suggestKeywords(['COMMENT']);
   }
 | Commas RegularOrBacktickedIdentifier ':' AnyCursor
   {
     parser.suggestKeywords(parser.getColumnDataTypeKeywords());
   }
 | Commas RegularOrBacktickedIdentifier ':' ColumnDataType_EDIT
 | RegularOrBacktickedIdentifier ':' ColumnDataType 'CURSOR'
   {
     parser.suggestKeywords(['COMMENT']);
   }
 | RegularOrBacktickedIdentifier ':' AnyCursor
   {
     parser.suggestKeywords(parser.getColumnDataTypeKeywords());
   }
 | RegularOrBacktickedIdentifier ':' ColumnDataType_EDIT
 ;

ColumnDataTypeList
 : ColumnDataType
 | ColumnDataTypeList ',' ColumnDataType
 ;

ColumnDataTypeList_EDIT
 : ColumnDataTypeListInner_EDIT
 | ColumnDataTypeListInner_EDIT Commas
 | ColumnDataTypeList ',' ColumnDataTypeListInner_EDIT
 | ColumnDataTypeListInner_EDIT Commas ColumnDataTypeList
 | ColumnDataTypeList ',' ColumnDataTypeListInner_EDIT Commas ColumnDataTypeList
 ;

ColumnDataTypeListInner_EDIT
 : Commas AnyCursor
   {
     parser.suggestKeywords(parser.getColumnDataTypeKeywords());
   }
 | Commas ColumnDataType_EDIT
 | AnyCursor
   {
     parser.suggestKeywords(parser.getColumnDataTypeKeywords());
   }
 | ColumnDataType_EDIT
 ;

GreaterThanOrError
 : '>'
 | error
 ;

OptionalPartitionedBy
 :
 | PartitionedBy
 ;

PartitionedBy
 : 'PARTITION' 'BY' RangeClause
 ;

PartitionedBy_EDIT
 : 'PARTITION' 'CURSOR'
   {
     parser.suggestKeywords(['BY']);
   }
 | 'PARTITION' 'BY' 'CURSOR'
   {
     parser.suggestKeywords(['RANGE']);
   }
 | 'PARTITION' 'BY' RangeClause_EDIT
 ;

RangeClause
 : 'RANGE' ParenthesizedColumnList ParenthesizedPartitionValuesList
 ;

RangeClause_EDIT
 : 'RANGE' 'CURSOR'
 | 'RANGE' ParenthesizedColumnList_EDIT
 | 'RANGE' ParenthesizedColumnList 'CURSOR'
 | 'RANGE' ParenthesizedColumnList ParenthesizedPartitionValuesList_EDIT
 | 'RANGE' ParenthesizedColumnList_EDIT ParenthesizedPartitionValuesList
 ;

ParenthesizedPartitionValuesList
 : '(' PartitionValueList ')'
 ;

ParenthesizedPartitionValuesList_EDIT
 : '(' 'CURSOR' RightParenthesisOrError
   {
     parser.suggestKeywords(['PARTITION']);
   }
 |'(' PartitionValueList_EDIT RightParenthesisOrError
 ;

PartitionValueList
 : PartitionValue
 | PartitionValueList ',' PartitionValue
 ;

PartitionValueList_EDIT
 : PartitionValue_EDIT
 | PartitionValueList ',' 'CURSOR'
   {
     parser.suggestKeywords(['PARTITION']);
   }
 | PartitionValueList ',' 'CURSOR' ',' PartitionValueList
   {
     parser.suggestKeywords(['PARTITION']);
   }
 | PartitionValueList ',' PartitionValue_EDIT
 | PartitionValueList ',' PartitionValue_EDIT ',' PartitionValueList
 ;

PartitionValue
 : 'PARTITION' ValueExpression LessThanOrEqualTo 'VALUES' LessThanOrEqualTo ValueExpression
 | 'PARTITION' 'VALUES' LessThanOrEqualTo ValueExpression
 | 'PARTITION' ValueExpression LessThanOrEqualTo 'VALUES'
 ;

PartitionValue_EDIT
 : 'PARTITION' 'CURSOR'
   {
     parser.suggestKeywords(['VALUE', 'VALUES']);
   }
 | 'PARTITION' ValueExpression_EDIT
   {
     if ($2.endsWithLessThanOrEqual) {
      parser.suggestKeywords(['VALUES']);
     }
   }
 | 'PARTITION' ValueExpression 'CURSOR'
   {
     parser.suggestKeywords(['<', '<=']);
   }
 | 'PARTITION' ValueExpression LessThanOrEqualTo 'CURSOR'
   {
     parser.suggestKeywords(['VALUES']);
   }
 | 'PARTITION' ValueExpression_EDIT LessThanOrEqualTo 'VALUES'
 | 'PARTITION' ValueExpression LessThanOrEqualTo 'VALUES' 'CURSOR'
   {
     parser.suggestKeywords(['<', '<=']);
   }
 | 'PARTITION' ValueExpression LessThanOrEqualTo 'VALUES' LessThanOrEqualTo 'CURSOR'
   {
     parser.suggestFunctions();
   }
 | 'PARTITION' ValueExpression LessThanOrEqualTo 'VALUES' LessThanOrEqualTo ValueExpression_EDIT
 | 'PARTITION' 'VALUES' 'CURSOR'
   {
     parser.suggestKeywords(['<', '<=']);
   }
 | 'PARTITION' 'VALUES' LessThanOrEqualTo 'CURSOR'
   {
     parser.suggestFunctions();
   }
 | 'PARTITION' 'VALUES' LessThanOrEqualTo ValueExpression_EDIT
 ;

LessThanOrEqualTo
 : '<'
 | 'COMPARISON_OPERATOR' // This is fine for autocompletion
 ;

OptionalAsSelectStatement
 :
 | 'AS' CommitLocations QuerySpecification
 ;

OptionalAsSelectStatement_EDIT
 : 'AS' CommitLocations 'CURSOR'
   {
     parser.suggestKeywords(['SELECT']);
   }
 | 'AS' CommitLocations QuerySpecification_EDIT
 ;

CommitLocations
 : /* empty */
   {
     parser.commitLocations();
   }
 ;

OptionalEngineTypeSet
 :
 | EngineTypeSet
 ;

EngineTypeSet
 : 'ENGINE' '=' EngineType
 | 'ENGINE' '=' EngineTypeFunctional ArbitraryFunctionRightPart
 ;

EngineTypeSet_EDIT
 : 'ENGINE' 'CURSOR'
 {
   parser.suggestKeywords(['=']);
 }
 | 'ENGINE' '=' 'CURSOR'
 {
   parser.suggestEngines();
 }
 | 'ENGINE' '=' EngineTypeFunctional ArbitraryFunctionRightPart_EDIT
 ;

EngineType
 : 'Null'
 | 'Set'
 | 'Log'
 | 'Memory'
 | 'TinyLog'
 | 'StripeLog'
 ;

EngineTypeFunctional
 : 'MergeTree'
 | 'Merge'
 | 'ReplacingMergeTree'
 | 'CollapsingMergeTree'
 | 'AggregatingMergeTree'
 | 'Buffer'
 | 'Dictionary'
 | 'Distributed'
 | 'File'
 | 'GraphiteMergeTree'
 | 'Join'
 | 'Kafka'
 | 'MySQL'
 | 'URL'
 | 'ReplicatedAggregatingMergeTree'
 | 'ReplicatedCollapsingMergeTree'
 | 'ReplicatedGraphiteMergeTree'
 | 'ReplicatedMergeTree'
 | 'ReplicatedReplacingMergeTree'
 | 'ReplicatedSummingMergeTree'
 | 'ReplicatedVersionedCollapsingMergeTree'
 | 'SummingMergeTree'
 | 'VersionedCollapsingMergeTree'
 | 'PostgreSQL'
 ;
