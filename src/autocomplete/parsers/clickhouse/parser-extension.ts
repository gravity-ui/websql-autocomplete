// Please note that the code below is the modified code distributed on the terms, mentioned below.
// The copyright for the changes belongs to YANDEX LLC.
//
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

import {KeywordSuggestion, ParserContext} from '../../lib/autocomplete-parse-result';
import {initSharedAutocomplete} from '../../lib/parsing';

export const extendParser = function (parser: ParserContext): void {
    initSharedAutocomplete(parser);

    // It's the legacy way of doing it, it's okay.
    // eslint-disable-next-line
    parser.getTypeKeywords = function (): KeywordSuggestion[] {
        return [
            'IPv6',
            'IPv4',
            'LowCardinality',
            'Decimal',
            'String',
            'Decimal64',
            'Decimal32',
            'Decimal128',
            'Float64',
            'Float32',
            'Int64',
            'SimpleAggregateFunction',
            'Array',
            'Nothing',
            'UInt16',
            'Enum16',
            'UInt32',
            'Date',
            'Int8',
            'Int32',
            'Enum8',
            'UInt64',
            'IntervalSecond',
            'Int16',
            'FixedString',
            'Nullable',
            'AggregateFunction',
            'DateTime',
            'Enum',
            'Tuple',
            'IntervalMonth',
            'Nested',
            'IntervalMinute',
            'IntervalHour',
            'IntervalWeek',
            'IntervalDay',
            'UInt8',
            'IntervalQuarter',
            'UUID',
            'IntervalYear',
            'LONGBLOB',
            'MEDIUMBLOB',
            'TINYBLOB',
            'BIGINT',
            'SMALLINT',
            'TIMESTAMP',
            'INTEGER',
            'INT',
            'DOUBLE',
            'MEDIUMTEXT',
            'TINYINT',
            'DEC',
            'BINARY',
            'FLOAT',
            'CHAR',
            'VARCHAR',
            'TEXT',
            'TINYTEXT',
            'LONGTEXT',
            'BLOB',
            'Point',
            'Ring',
            'Polygon',
            'MultiPolygon',
        ];
    };

    // It's the legacy way of doing it, it's okay.
    // eslint-disable-next-line
    parser.suggestEngines = function (): void {
        const engines = ['Null', 'Set', 'Log', 'Memory', 'TinyLog', 'StripeLog'];

        const functionalEngines = [
            'MergeTree()',
            'Merge()',
            'ReplacingMergeTree()',
            'CollapsingMergeTree()',
            'AggregatingMergeTree()',
            'Buffer()',
            'Dictionary()',
            'Distributed()',
            'File()',
            'GraphiteMergeTree()',
            'Join()',
            'Kafka()',
            'MySQL()',
            'URL()',
            'ReplicatedAggregatingMergeTree()',
            'ReplicatedCollapsingMergeTree()',
            'ReplicatedGraphiteMergeTree()',
            'ReplicatedMergeTree()',
            'ReplicatedReplacingMergeTree()',
            'ReplicatedSummingMergeTree()',
            'ReplicatedVersionedCollapsingMergeTree()',
            'SummingMergeTree()',
            'VersionedCollapsingMergeTree()',
            'PostgreSQL()',
        ];

        // It's the legacy way of doing it, it's okay.
        // eslint-disable-next-line
        parser.yy.result.suggestEngines = {
            engines,
            functionalEngines,
        };
    };
};