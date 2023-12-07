// Licensed to Cloudera, Inc. under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  Cloudera, Inc. licenses this file
// to you under the Apache License, Version 2.0 (the
// 'License'); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an 'AS IS' BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

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

import {beforeAll, expect, test} from '@jest/globals';

import {IdentifierLocation, parseGenericSqlWithoutCursor} from '../../../../index';
import {genericAutocompleteParser} from '../../genericAutocompleteParser';

beforeAll(() => {
    genericAutocompleteParser.yy.parseError = function (msg: string): void {
        throw Error(msg);
    };
});

test('should report locations for "select cos(1) as foo from customers order by foo;"', () => {
    const parseResult = parseGenericSqlWithoutCursor(
        'select cos(1) as foo from customers order by foo; ',
    );

    const locations: IdentifierLocation[] = [
        {
            location: {
                first_column: 1,
                first_line: 1,
                last_column: 49,
                last_line: 1,
            },
            type: 'statement',
        },
        {
            identifier: 'SELECT',
            location: {
                first_column: 1,
                first_line: 1,
                last_column: 7,
                last_line: 1,
            },
            type: 'statementType',
        },
        {
            location: {
                first_column: 8,
                first_line: 1,
                last_column: 21,
                last_line: 1,
            },
            missing: false,
            type: 'selectList',
        },
        {
            function: 'cos',
            location: {
                first_column: 8,
                first_line: 1,
                last_column: 10,
                last_line: 1,
            },
            type: 'function',
        },
        {
            argumentPosition: 0,
            expression: {
                text: '1',
                types: ['NUMBER'],
            },
            function: 'cos',
            identifierChain: [
                {
                    name: 'cos',
                },
            ],
            location: {
                first_column: 12,
                first_line: 1,
                last_column: 13,
                last_line: 1,
            },
            type: 'functionArgument',
        },
        {
            alias: 'foo',
            location: {
                first_column: 18,
                first_line: 1,
                last_column: 21,
                last_line: 1,
            },
            parentLocation: {
                first_column: 8,
                first_line: 1,
                last_column: 14,
                last_line: 1,
            },
            source: 'column',
            type: 'alias',
        },
        {
            identifierChain: [
                {
                    name: 'customers',
                },
            ],
            location: {
                first_column: 27,
                first_line: 1,
                last_column: 36,
                last_line: 1,
            },
            type: 'table',
        },
        {
            location: {
                first_column: 36,
                first_line: 1,
                last_column: 36,
                last_line: 1,
            },
            missing: true,
            type: 'whereClause',
        },
        {
            alias: 'foo',
            location: {
                first_column: 46,
                first_line: 1,
                last_column: 49,
                last_line: 1,
            },
            parentLocation: {
                first_column: 8,
                first_line: 1,
                last_column: 14,
                last_line: 1,
            },
            source: 'column',
            type: 'alias',
        },
        {
            location: {
                first_column: 49,
                first_line: 1,
                last_column: 49,
                last_line: 1,
            },
            missing: true,
            type: 'limitClause',
        },
    ];
    expect(parseResult.locations).toEqual(locations);
});

test('should report locations for "WITH boo AS (SELECT * FROM tbl) SELECT * FROM boo; |"', () => {
    const parseResult = parseGenericSqlWithoutCursor(
        'WITH boo AS (SELECT * FROM tbl) SELECT * FROM boo; ',
    );

    const locations: IdentifierLocation[] = [
        {
            location: {
                first_column: 1,
                first_line: 1,
                last_column: 50,
                last_line: 1,
            },
            type: 'statement',
        },
        {
            identifier: 'WITH',
            location: {
                first_column: 1,
                first_line: 1,
                last_column: 5,
                last_line: 1,
            },
            type: 'statementType',
        },
        {
            alias: 'boo',
            location: {
                first_column: 6,
                first_line: 1,
                last_column: 9,
                last_line: 1,
            },
            source: 'cte',
            type: 'alias',
        },
        {
            identifier: 'SELECT',
            location: {
                first_column: 14,
                first_line: 1,
                last_column: 20,
                last_line: 1,
            },
            type: 'statementType',
        },
        {
            location: {
                first_column: 21,
                first_line: 1,
                last_column: 22,
                last_line: 1,
            },
            missing: false,
            subquery: true,
            type: 'selectList',
        },
        {
            location: {
                first_column: 21,
                first_line: 1,
                last_column: 22,
                last_line: 1,
            },
            tables: [
                {
                    identifierChain: [
                        {
                            name: 'tbl',
                        },
                    ],
                },
            ],
            type: 'asterisk',
        },
        {
            identifierChain: [
                {
                    name: 'tbl',
                },
            ],
            location: {
                first_column: 28,
                first_line: 1,
                last_column: 31,
                last_line: 1,
            },
            type: 'table',
        },
        {
            location: {
                first_column: 31,
                first_line: 1,
                last_column: 31,
                last_line: 1,
            },
            missing: true,
            subquery: true,
            type: 'whereClause',
        },
        {
            location: {
                first_column: 31,
                first_line: 1,
                last_column: 31,
                last_line: 1,
            },
            missing: true,
            subquery: true,
            type: 'limitClause',
        },
        {
            identifier: 'SELECT',
            location: {
                first_column: 33,
                first_line: 1,
                last_column: 39,
                last_line: 1,
            },
            type: 'statementType',
        },
        {
            location: {
                first_column: 40,
                first_line: 1,
                last_column: 41,
                last_line: 1,
            },
            missing: false,
            type: 'selectList',
        },
        {
            location: {
                first_column: 40,
                first_line: 1,
                last_column: 41,
                last_line: 1,
            },
            tables: [
                {
                    identifierChain: [
                        {
                            name: 'boo',
                        },
                    ],
                },
            ],
            type: 'asterisk',
        },
        {
            alias: 'boo',
            location: {
                first_column: 47,
                first_line: 1,
                last_column: 50,
                last_line: 1,
            },
            target: 'cte',
            type: 'alias',
        },
        {
            location: {
                first_column: 50,
                first_line: 1,
                last_column: 50,
                last_line: 1,
            },
            missing: true,
            type: 'whereClause',
        },
        {
            location: {
                first_column: 50,
                first_line: 1,
                last_column: 50,
                last_line: 1,
            },
            missing: true,
            type: 'limitClause',
        },
    ];
    expect(parseResult.locations).toEqual(locations);
});

test('should report locations for "SELECT * FROM testTable1 JOIN db1.table2; |"', () => {
    const parseResult = parseGenericSqlWithoutCursor('SELECT * FROM testTable1 JOIN db1.table2; ');

    const locations: IdentifierLocation[] = [
        {
            location: {
                first_column: 1,
                first_line: 1,
                last_column: 41,
                last_line: 1,
            },
            type: 'statement',
        },
        {
            identifier: 'SELECT',
            location: {
                first_column: 1,
                first_line: 1,
                last_column: 7,
                last_line: 1,
            },
            type: 'statementType',
        },
        {
            location: {
                first_column: 8,
                first_line: 1,
                last_column: 9,
                last_line: 1,
            },
            missing: false,
            type: 'selectList',
        },
        {
            location: {
                first_column: 8,
                first_line: 1,
                last_column: 9,
                last_line: 1,
            },
            tables: [
                {
                    identifierChain: [
                        {
                            name: 'testTable1',
                        },
                    ],
                },
                {
                    identifierChain: [
                        {
                            name: 'db1',
                        },
                        {
                            name: 'table2',
                        },
                    ],
                },
            ],
            type: 'asterisk',
        },
        {
            identifierChain: [
                {
                    name: 'testTable1',
                },
            ],
            location: {
                first_column: 15,
                first_line: 1,
                last_column: 25,
                last_line: 1,
            },
            type: 'table',
        },
        {
            identifierChain: [
                {
                    name: 'db1',
                },
            ],
            location: {
                first_column: 31,
                first_line: 1,
                last_column: 34,
                last_line: 1,
            },
            type: 'database',
        },
        {
            identifierChain: [
                {
                    name: 'db1',
                },
                {
                    name: 'table2',
                },
            ],
            location: {
                first_column: 35,
                first_line: 1,
                last_column: 41,
                last_line: 1,
            },
            type: 'table',
        },
        {
            location: {
                first_column: 41,
                first_line: 1,
                last_column: 41,
                last_line: 1,
            },
            missing: true,
            type: 'whereClause',
        },
        {
            location: {
                first_column: 41,
                first_line: 1,
                last_column: 41,
                last_line: 1,
            },
            missing: true,
            type: 'limitClause',
        },
    ];
    expect(parseResult.locations).toEqual(locations);
});

test('should report locations for "SELECT a.col FROM db.tbl a; |"', () => {
    const parseResult = parseGenericSqlWithoutCursor('SELECT a.col FROM db.tbl a; ');

    const locations: IdentifierLocation[] = [
        {
            location: {
                first_column: 1,
                first_line: 1,
                last_column: 27,
                last_line: 1,
            },
            type: 'statement',
        },
        {
            identifier: 'SELECT',
            location: {
                first_column: 1,
                first_line: 1,
                last_column: 7,
                last_line: 1,
            },
            type: 'statementType',
        },
        {
            location: {
                first_column: 8,
                first_line: 1,
                last_column: 13,
                last_line: 1,
            },
            missing: false,
            type: 'selectList',
        },
        {
            identifierChain: [
                {
                    name: 'db',
                },
                {
                    name: 'tbl',
                },
            ],
            location: {
                first_column: 8,
                first_line: 1,
                last_column: 9,
                last_line: 1,
            },
            type: 'table',
        },
        {
            identifierChain: [
                {
                    name: 'col',
                },
            ],
            location: {
                first_column: 10,
                first_line: 1,
                last_column: 13,
                last_line: 1,
            },
            qualified: true,
            tables: [
                {
                    alias: 'a',
                    identifierChain: [
                        {
                            name: 'db',
                        },
                        {
                            name: 'tbl',
                        },
                    ],
                },
            ],
            type: 'column',
        },
        {
            identifierChain: [
                {
                    name: 'db',
                },
            ],
            location: {
                first_column: 19,
                first_line: 1,
                last_column: 21,
                last_line: 1,
            },
            type: 'database',
        },
        {
            identifierChain: [
                {
                    name: 'db',
                },
                {
                    name: 'tbl',
                },
            ],
            location: {
                first_column: 22,
                first_line: 1,
                last_column: 25,
                last_line: 1,
            },
            type: 'table',
        },
        {
            alias: 'a',
            identifierChain: [
                {
                    name: 'db',
                },
                {
                    name: 'tbl',
                },
            ],
            location: {
                first_column: 26,
                first_line: 1,
                last_column: 27,
                last_line: 1,
            },
            source: 'table',
            type: 'alias',
        },
        {
            location: {
                first_column: 27,
                first_line: 1,
                last_column: 27,
                last_line: 1,
            },
            missing: true,
            type: 'whereClause',
        },
        {
            location: {
                first_column: 27,
                first_line: 1,
                last_column: 27,
                last_line: 1,
            },
            missing: true,
            type: 'limitClause',
        },
    ];
    expect(parseResult.locations).toEqual(locations);
});

test('should report locations for "SELECT tbl.col FROM db.tbl a; |"', () => {
    const parseResult = parseGenericSqlWithoutCursor('SELECT tbl.col FROM db.tbl a; ');

    const locations: IdentifierLocation[] = [
        {
            location: {
                first_column: 1,
                first_line: 1,
                last_column: 29,
                last_line: 1,
            },
            type: 'statement',
        },
        {
            identifier: 'SELECT',
            location: {
                first_column: 1,
                first_line: 1,
                last_column: 7,
                last_line: 1,
            },
            type: 'statementType',
        },
        {
            location: {
                first_column: 8,
                first_line: 1,
                last_column: 15,
                last_line: 1,
            },
            missing: false,
            type: 'selectList',
        },
        {
            identifierChain: [
                {
                    name: 'tbl',
                },
            ],
            location: {
                first_column: 8,
                first_line: 1,
                last_column: 11,
                last_line: 1,
            },
            qualified: false,
            tables: [
                {
                    alias: 'a',
                    identifierChain: [
                        {
                            name: 'db',
                        },
                        {
                            name: 'tbl',
                        },
                    ],
                },
            ],
            type: 'column',
        },
        {
            identifierChain: [
                {
                    name: 'tbl',
                },
                {
                    name: 'col',
                },
            ],
            location: {
                first_column: 12,
                first_line: 1,
                last_column: 15,
                last_line: 1,
            },
            qualified: true,
            tables: [
                {
                    alias: 'a',
                    identifierChain: [
                        {
                            name: 'db',
                        },
                        {
                            name: 'tbl',
                        },
                    ],
                },
            ],
            type: 'complex',
        },
        {
            identifierChain: [
                {
                    name: 'db',
                },
            ],
            location: {
                first_column: 21,
                first_line: 1,
                last_column: 23,
                last_line: 1,
            },
            type: 'database',
        },
        {
            identifierChain: [
                {
                    name: 'db',
                },
                {
                    name: 'tbl',
                },
            ],
            location: {
                first_column: 24,
                first_line: 1,
                last_column: 27,
                last_line: 1,
            },
            type: 'table',
        },
        {
            alias: 'a',
            identifierChain: [
                {
                    name: 'db',
                },
                {
                    name: 'tbl',
                },
            ],
            location: {
                first_column: 28,
                first_line: 1,
                last_column: 29,
                last_line: 1,
            },
            source: 'table',
            type: 'alias',
        },
        {
            location: {
                first_column: 29,
                first_line: 1,
                last_column: 29,
                last_line: 1,
            },
            missing: true,
            type: 'whereClause',
        },
        {
            location: {
                first_column: 29,
                first_line: 1,
                last_column: 29,
                last_line: 1,
            },
            missing: true,
            type: 'limitClause',
        },
    ];
    expect(parseResult.locations).toEqual(locations);
});

test('should report locations for "select x from x;"', () => {
    const parseResult = parseGenericSqlWithoutCursor('select x from x;');

    const locations: IdentifierLocation[] = [
        {
            location: {
                first_column: 1,
                first_line: 1,
                last_column: 16,
                last_line: 1,
            },
            type: 'statement',
        },
        {
            identifier: 'SELECT',
            location: {
                first_column: 1,
                first_line: 1,
                last_column: 7,
                last_line: 1,
            },
            type: 'statementType',
        },
        {
            location: {
                first_column: 8,
                first_line: 1,
                last_column: 9,
                last_line: 1,
            },
            missing: false,
            type: 'selectList',
        },
        {
            identifierChain: [
                {
                    name: 'x',
                },
            ],
            location: {
                first_column: 8,
                first_line: 1,
                last_column: 9,
                last_line: 1,
            },
            qualified: false,
            tables: [
                {
                    identifierChain: [
                        {
                            name: 'x',
                        },
                    ],
                },
            ],
            type: 'column',
        },
        {
            identifierChain: [
                {
                    name: 'x',
                },
            ],
            location: {
                first_column: 15,
                first_line: 1,
                last_column: 16,
                last_line: 1,
            },
            type: 'table',
        },
        {
            location: {
                first_column: 16,
                first_line: 1,
                last_column: 16,
                last_line: 1,
            },
            missing: true,
            type: 'whereClause',
        },
        {
            location: {
                first_column: 16,
                first_line: 1,
                last_column: 16,
                last_line: 1,
            },
            missing: true,
            type: 'limitClause',
        },
    ];
    expect(parseResult.locations).toEqual(locations);
});

test('should report locations for "select x from x;select y from y;"', () => {
    const parseResult = parseGenericSqlWithoutCursor('select x from x;select y from y;');

    const locations: IdentifierLocation[] = [
        {
            location: {
                first_column: 1,
                first_line: 1,
                last_column: 16,
                last_line: 1,
            },
            type: 'statement',
        },
        {
            identifier: 'SELECT',
            location: {
                first_column: 1,
                first_line: 1,
                last_column: 7,
                last_line: 1,
            },
            type: 'statementType',
        },
        {
            location: {
                first_column: 8,
                first_line: 1,
                last_column: 9,
                last_line: 1,
            },
            missing: false,
            type: 'selectList',
        },
        {
            identifierChain: [
                {
                    name: 'x',
                },
            ],
            location: {
                first_column: 8,
                first_line: 1,
                last_column: 9,
                last_line: 1,
            },
            qualified: false,
            tables: [
                {
                    identifierChain: [
                        {
                            name: 'x',
                        },
                    ],
                },
            ],
            type: 'column',
        },
        {
            identifierChain: [
                {
                    name: 'x',
                },
            ],
            location: {
                first_column: 15,
                first_line: 1,
                last_column: 16,
                last_line: 1,
            },
            type: 'table',
        },
        {
            location: {
                first_column: 16,
                first_line: 1,
                last_column: 16,
                last_line: 1,
            },
            missing: true,
            type: 'whereClause',
        },
        {
            location: {
                first_column: 16,
                first_line: 1,
                last_column: 16,
                last_line: 1,
            },
            missing: true,
            type: 'limitClause',
        },
        {
            location: {
                first_column: 17,
                first_line: 1,
                last_column: 32,
                last_line: 1,
            },
            type: 'statement',
        },
        {
            identifier: 'SELECT',
            location: {
                first_column: 17,
                first_line: 1,
                last_column: 23,
                last_line: 1,
            },
            type: 'statementType',
        },
        {
            location: {
                first_column: 24,
                first_line: 1,
                last_column: 25,
                last_line: 1,
            },
            missing: false,
            type: 'selectList',
        },
        {
            identifierChain: [
                {
                    name: 'y',
                },
            ],
            location: {
                first_column: 24,
                first_line: 1,
                last_column: 25,
                last_line: 1,
            },
            qualified: false,
            tables: [
                {
                    identifierChain: [
                        {
                            name: 'y',
                        },
                    ],
                },
            ],
            type: 'column',
        },
        {
            identifierChain: [
                {
                    name: 'y',
                },
            ],
            location: {
                first_column: 31,
                first_line: 1,
                last_column: 32,
                last_line: 1,
            },
            type: 'table',
        },
        {
            location: {
                first_column: 32,
                first_line: 1,
                last_column: 32,
                last_line: 1,
            },
            missing: true,
            type: 'whereClause',
        },
        {
            location: {
                first_column: 32,
                first_line: 1,
                last_column: 32,
                last_line: 1,
            },
            missing: true,
            type: 'limitClause',
        },
    ];
    expect(parseResult.locations).toEqual(locations);
});

test('should report locations for "-- comment\nselect x from x;\n\n\nselect y from y;"', () => {
    const parseResult = parseGenericSqlWithoutCursor(
        '-- comment\nselect x from x;\n\n\nselect y from y;',
    );

    const locations: IdentifierLocation[] = [
        {
            location: {
                first_column: 1,
                first_line: 1,
                last_column: 16,
                last_line: 2,
            },
            type: 'statement',
        },
        {
            identifier: 'SELECT',
            location: {
                first_column: 1,
                first_line: 2,
                last_column: 7,
                last_line: 2,
            },
            type: 'statementType',
        },
        {
            location: {
                first_column: 8,
                first_line: 2,
                last_column: 9,
                last_line: 2,
            },
            missing: false,
            type: 'selectList',
        },
        {
            identifierChain: [
                {
                    name: 'x',
                },
            ],
            location: {
                first_column: 8,
                first_line: 2,
                last_column: 9,
                last_line: 2,
            },
            qualified: false,
            tables: [
                {
                    identifierChain: [
                        {
                            name: 'x',
                        },
                    ],
                },
            ],
            type: 'column',
        },
        {
            identifierChain: [
                {
                    name: 'x',
                },
            ],
            location: {
                first_column: 15,
                first_line: 2,
                last_column: 16,
                last_line: 2,
            },
            type: 'table',
        },
        {
            location: {
                first_column: 16,
                first_line: 2,
                last_column: 16,
                last_line: 2,
            },
            missing: true,
            type: 'whereClause',
        },
        {
            location: {
                first_column: 16,
                first_line: 2,
                last_column: 16,
                last_line: 2,
            },
            missing: true,
            type: 'limitClause',
        },
        {
            location: {
                first_column: 17,
                first_line: 2,
                last_column: 16,
                last_line: 5,
            },
            type: 'statement',
        },
        {
            identifier: 'SELECT',
            location: {
                first_column: 1,
                first_line: 5,
                last_column: 7,
                last_line: 5,
            },
            type: 'statementType',
        },
        {
            location: {
                first_column: 8,
                first_line: 5,
                last_column: 9,
                last_line: 5,
            },
            missing: false,
            type: 'selectList',
        },
        {
            identifierChain: [
                {
                    name: 'y',
                },
            ],
            location: {
                first_column: 8,
                first_line: 5,
                last_column: 9,
                last_line: 5,
            },
            qualified: false,
            tables: [
                {
                    identifierChain: [
                        {
                            name: 'y',
                        },
                    ],
                },
            ],
            type: 'column',
        },
        {
            identifierChain: [
                {
                    name: 'y',
                },
            ],
            location: {
                first_column: 15,
                first_line: 5,
                last_column: 16,
                last_line: 5,
            },
            type: 'table',
        },
        {
            location: {
                first_column: 16,
                first_line: 5,
                last_column: 16,
                last_line: 5,
            },
            missing: true,
            type: 'whereClause',
        },
        {
            location: {
                first_column: 16,
                first_line: 5,
                last_column: 16,
                last_line: 5,
            },
            missing: true,
            type: 'limitClause',
        },
    ];
    expect(parseResult.locations).toEqual(locations);
});

test('should report locations for "select x from x, y;"', () => {
    const parseResult = parseGenericSqlWithoutCursor('select x from x, y;');

    const locations: IdentifierLocation[] = [
        {
            location: {
                first_column: 1,
                first_line: 1,
                last_column: 19,
                last_line: 1,
            },
            type: 'statement',
        },
        {
            identifier: 'SELECT',
            location: {
                first_column: 1,
                first_line: 1,
                last_column: 7,
                last_line: 1,
            },
            type: 'statementType',
        },
        {
            location: {
                first_column: 8,
                first_line: 1,
                last_column: 9,
                last_line: 1,
            },
            missing: false,
            type: 'selectList',
        },
        {
            identifierChain: [
                {
                    name: 'x',
                },
            ],
            location: {
                first_column: 8,
                first_line: 1,
                last_column: 9,
                last_line: 1,
            },
            qualified: false,
            tables: [
                {
                    identifierChain: [
                        {
                            name: 'x',
                        },
                    ],
                },
                {
                    identifierChain: [
                        {
                            name: 'y',
                        },
                    ],
                },
            ],
            type: 'column',
        },
        {
            identifierChain: [
                {
                    name: 'x',
                },
            ],
            location: {
                first_column: 15,
                first_line: 1,
                last_column: 16,
                last_line: 1,
            },
            type: 'table',
        },
        {
            identifierChain: [
                {
                    name: 'y',
                },
            ],
            location: {
                first_column: 18,
                first_line: 1,
                last_column: 19,
                last_line: 1,
            },
            type: 'table',
        },
        {
            location: {
                first_column: 19,
                first_line: 1,
                last_column: 19,
                last_line: 1,
            },
            missing: true,
            type: 'whereClause',
        },
        {
            location: {
                first_column: 19,
                first_line: 1,
                last_column: 19,
                last_line: 1,
            },
            missing: true,
            type: 'limitClause',
        },
    ];
    expect(parseResult.locations).toEqual(locations);
});

test('should report locations for "SELECT t3.id, id FROM testTable1, db.testTable2, testTable3 t3;|"', () => {
    const parseResult = parseGenericSqlWithoutCursor(
        'SELECT t3.id, id FROM testTable1, db.testTable2, testTable3 t3;',
    );

    const locations: IdentifierLocation[] = [
        {
            location: {
                first_column: 1,
                first_line: 1,
                last_column: 63,
                last_line: 1,
            },
            type: 'statement',
        },
        {
            identifier: 'SELECT',
            location: {
                first_column: 1,
                first_line: 1,
                last_column: 7,
                last_line: 1,
            },
            type: 'statementType',
        },
        {
            location: {
                first_column: 8,
                first_line: 1,
                last_column: 17,
                last_line: 1,
            },
            missing: false,
            type: 'selectList',
        },
        {
            identifierChain: [
                {
                    name: 'testTable3',
                },
            ],
            location: {
                first_column: 8,
                first_line: 1,
                last_column: 10,
                last_line: 1,
            },
            type: 'table',
        },
        {
            identifierChain: [
                {
                    name: 'id',
                },
            ],
            location: {
                first_column: 11,
                first_line: 1,
                last_column: 13,
                last_line: 1,
            },
            qualified: true,
            tables: [
                {
                    alias: 't3',
                    identifierChain: [
                        {
                            name: 'testTable3',
                        },
                    ],
                },
            ],
            type: 'column',
        },
        {
            identifierChain: [
                {
                    name: 'id',
                },
            ],
            location: {
                first_column: 15,
                first_line: 1,
                last_column: 17,
                last_line: 1,
            },
            qualified: false,
            tables: [
                {
                    identifierChain: [
                        {
                            name: 'testTable1',
                        },
                    ],
                },
                {
                    identifierChain: [
                        {
                            name: 'db',
                        },
                        {
                            name: 'testTable2',
                        },
                    ],
                },
                {
                    alias: 't3',
                    identifierChain: [
                        {
                            name: 'testTable3',
                        },
                    ],
                },
            ],
            type: 'column',
        },
        {
            identifierChain: [
                {
                    name: 'testTable1',
                },
            ],
            location: {
                first_column: 23,
                first_line: 1,
                last_column: 33,
                last_line: 1,
            },
            type: 'table',
        },
        {
            identifierChain: [
                {
                    name: 'db',
                },
            ],
            location: {
                first_column: 35,
                first_line: 1,
                last_column: 37,
                last_line: 1,
            },
            type: 'database',
        },
        {
            identifierChain: [
                {
                    name: 'db',
                },
                {
                    name: 'testTable2',
                },
            ],
            location: {
                first_column: 38,
                first_line: 1,
                last_column: 48,
                last_line: 1,
            },
            type: 'table',
        },
        {
            identifierChain: [
                {
                    name: 'testTable3',
                },
            ],
            location: {
                first_column: 50,
                first_line: 1,
                last_column: 60,
                last_line: 1,
            },
            type: 'table',
        },
        {
            alias: 't3',
            identifierChain: [
                {
                    name: 'testTable3',
                },
            ],
            location: {
                first_column: 61,
                first_line: 1,
                last_column: 63,
                last_line: 1,
            },
            source: 'table',
            type: 'alias',
        },
        {
            location: {
                first_column: 63,
                first_line: 1,
                last_column: 63,
                last_line: 1,
            },
            missing: true,
            type: 'whereClause',
        },
        {
            location: {
                first_column: 63,
                first_line: 1,
                last_column: 63,
                last_line: 1,
            },
            missing: true,
            type: 'limitClause',
        },
    ];
    expect(parseResult.locations).toEqual(locations);
});

test('should report locations for "SELECT * FROM foo WHERE bar IN (1+1, 2+2);|"', () => {
    const parseResult = parseGenericSqlWithoutCursor('SELECT * FROM foo WHERE bar IN (1+1, 2+2);');

    const locations: IdentifierLocation[] = [
        {
            location: {
                first_column: 1,
                first_line: 1,
                last_column: 42,
                last_line: 1,
            },
            type: 'statement',
        },
        {
            identifier: 'SELECT',
            location: {
                first_column: 1,
                first_line: 1,
                last_column: 7,
                last_line: 1,
            },
            type: 'statementType',
        },
        {
            location: {
                first_column: 8,
                first_line: 1,
                last_column: 9,
                last_line: 1,
            },
            missing: false,
            type: 'selectList',
        },
        {
            location: {
                first_column: 8,
                first_line: 1,
                last_column: 9,
                last_line: 1,
            },
            tables: [
                {
                    identifierChain: [
                        {
                            name: 'foo',
                        },
                    ],
                },
            ],
            type: 'asterisk',
        },
        {
            identifierChain: [
                {
                    name: 'foo',
                },
            ],
            location: {
                first_column: 15,
                first_line: 1,
                last_column: 18,
                last_line: 1,
            },
            type: 'table',
        },
        {
            location: {
                first_column: 19,
                first_line: 1,
                last_column: 42,
                last_line: 1,
            },
            missing: false,
            type: 'whereClause',
        },
        {
            identifierChain: [
                {
                    name: 'bar',
                },
            ],
            location: {
                first_column: 25,
                first_line: 1,
                last_column: 28,
                last_line: 1,
            },
            qualified: false,
            tables: [
                {
                    identifierChain: [
                        {
                            name: 'foo',
                        },
                    ],
                },
            ],
            type: 'column',
        },
        {
            location: {
                first_column: 42,
                first_line: 1,
                last_column: 42,
                last_line: 1,
            },
            missing: true,
            type: 'limitClause',
        },
    ];
    expect(parseResult.locations).toEqual(locations);
});

test('should report locations for "SELECT * FROM foo WHERE bar IN (id+1-1, id+1-2);|"', () => {
    const parseResult = parseGenericSqlWithoutCursor(
        'SELECT * FROM foo WHERE bar IN (id+1-1, id+1-2);',
    );

    const locations: IdentifierLocation[] = [
        {
            location: {
                first_column: 1,
                first_line: 1,
                last_column: 48,
                last_line: 1,
            },
            type: 'statement',
        },
        {
            identifier: 'SELECT',
            location: {
                first_column: 1,
                first_line: 1,
                last_column: 7,
                last_line: 1,
            },
            type: 'statementType',
        },
        {
            location: {
                first_column: 8,
                first_line: 1,
                last_column: 9,
                last_line: 1,
            },
            missing: false,
            type: 'selectList',
        },
        {
            location: {
                first_column: 8,
                first_line: 1,
                last_column: 9,
                last_line: 1,
            },
            tables: [
                {
                    identifierChain: [
                        {
                            name: 'foo',
                        },
                    ],
                },
            ],
            type: 'asterisk',
        },
        {
            identifierChain: [
                {
                    name: 'foo',
                },
            ],
            location: {
                first_column: 15,
                first_line: 1,
                last_column: 18,
                last_line: 1,
            },
            type: 'table',
        },
        {
            location: {
                first_column: 19,
                first_line: 1,
                last_column: 48,
                last_line: 1,
            },
            missing: false,
            type: 'whereClause',
        },
        {
            identifierChain: [
                {
                    name: 'bar',
                },
            ],
            location: {
                first_column: 25,
                first_line: 1,
                last_column: 28,
                last_line: 1,
            },
            qualified: false,
            tables: [
                {
                    identifierChain: [
                        {
                            name: 'foo',
                        },
                    ],
                },
            ],
            type: 'column',
        },
        {
            identifierChain: [
                {
                    name: 'id',
                },
            ],
            location: {
                first_column: 33,
                first_line: 1,
                last_column: 35,
                last_line: 1,
            },
            qualified: false,
            tables: [
                {
                    identifierChain: [
                        {
                            name: 'foo',
                        },
                    ],
                },
            ],
            type: 'column',
        },
        {
            identifierChain: [
                {
                    name: 'id',
                },
            ],
            location: {
                first_column: 41,
                first_line: 1,
                last_column: 43,
                last_line: 1,
            },
            qualified: false,
            tables: [
                {
                    identifierChain: [
                        {
                            name: 'foo',
                        },
                    ],
                },
            ],
            type: 'column',
        },
        {
            location: {
                first_column: 48,
                first_line: 1,
                last_column: 48,
                last_line: 1,
            },
            missing: true,
            type: 'limitClause',
        },
    ];
    expect(parseResult.locations).toEqual(locations);
});

test(
    'should report locations for "SELECT s07.description, s07.salary, s08.salary,\\r\\n' +
        '  s08.salary - s07.salary\\r\\n' +
        'FROM\\r\\n' +
        '  sample_07 s07 JOIN sample_08 s08\\r\\n' +
        'ON ( s07.code = s08.code)\\r\\n' +
        'WHERE\\r\\n' +
        '  s07.salary < s08.salary\\r\\n' +
        'ORDER BY s08.salary-s07.salary DESC\\r\\n' +
        'LIMIT 1000;|"',
    () => {
        const parseResult = parseGenericSqlWithoutCursor(
            'SELECT s07.description, s07.salary, s08.salary,\r\n' +
                '  s08.salary - s07.salary\r\n' +
                'FROM\r\n' +
                '  sample_07 s07 JOIN sample_08 s08\r\n' +
                'ON ( s07.code = s08.code)\r\n' +
                'WHERE\r\n' +
                '  s07.salary < s08.salary\r\n' +
                'ORDER BY s08.salary-s07.salary DESC\r\n' +
                'LIMIT 1000;',
        );

        const locations: IdentifierLocation[] = [
            {
                location: {
                    first_column: 1,
                    first_line: 1,
                    last_column: 11,
                    last_line: 9,
                },
                type: 'statement',
            },
            {
                identifier: 'SELECT',
                location: {
                    first_column: 1,
                    first_line: 1,
                    last_column: 7,
                    last_line: 1,
                },
                type: 'statementType',
            },
            {
                location: {
                    first_column: 8,
                    first_line: 1,
                    last_column: 26,
                    last_line: 2,
                },
                missing: false,
                type: 'selectList',
            },
            {
                identifierChain: [
                    {
                        name: 'sample_07',
                    },
                ],
                location: {
                    first_column: 8,
                    first_line: 1,
                    last_column: 11,
                    last_line: 1,
                },
                type: 'table',
            },
            {
                identifierChain: [
                    {
                        name: 'description',
                    },
                ],
                location: {
                    first_column: 12,
                    first_line: 1,
                    last_column: 23,
                    last_line: 1,
                },
                qualified: true,
                tables: [
                    {
                        alias: 's07',
                        identifierChain: [
                            {
                                name: 'sample_07',
                            },
                        ],
                    },
                ],
                type: 'column',
            },
            {
                identifierChain: [
                    {
                        name: 'sample_07',
                    },
                ],
                location: {
                    first_column: 25,
                    first_line: 1,
                    last_column: 28,
                    last_line: 1,
                },
                type: 'table',
            },
            {
                identifierChain: [
                    {
                        name: 'salary',
                    },
                ],
                location: {
                    first_column: 29,
                    first_line: 1,
                    last_column: 35,
                    last_line: 1,
                },
                qualified: true,
                tables: [
                    {
                        alias: 's07',
                        identifierChain: [
                            {
                                name: 'sample_07',
                            },
                        ],
                    },
                ],
                type: 'column',
            },
            {
                identifierChain: [
                    {
                        name: 'sample_08',
                    },
                ],
                location: {
                    first_column: 37,
                    first_line: 1,
                    last_column: 40,
                    last_line: 1,
                },
                type: 'table',
            },
            {
                identifierChain: [
                    {
                        name: 'salary',
                    },
                ],
                location: {
                    first_column: 41,
                    first_line: 1,
                    last_column: 47,
                    last_line: 1,
                },
                qualified: true,
                tables: [
                    {
                        alias: 's08',
                        identifierChain: [
                            {
                                name: 'sample_08',
                            },
                        ],
                    },
                ],
                type: 'column',
            },
            {
                identifierChain: [
                    {
                        name: 'sample_08',
                    },
                ],
                location: {
                    first_column: 3,
                    first_line: 2,
                    last_column: 6,
                    last_line: 2,
                },
                type: 'table',
            },
            {
                identifierChain: [
                    {
                        name: 'salary',
                    },
                ],
                location: {
                    first_column: 7,
                    first_line: 2,
                    last_column: 13,
                    last_line: 2,
                },
                qualified: true,
                tables: [
                    {
                        alias: 's08',
                        identifierChain: [
                            {
                                name: 'sample_08',
                            },
                        ],
                    },
                ],
                type: 'column',
            },
            {
                identifierChain: [
                    {
                        name: 'sample_07',
                    },
                ],
                location: {
                    first_column: 16,
                    first_line: 2,
                    last_column: 19,
                    last_line: 2,
                },
                type: 'table',
            },
            {
                identifierChain: [
                    {
                        name: 'salary',
                    },
                ],
                location: {
                    first_column: 20,
                    first_line: 2,
                    last_column: 26,
                    last_line: 2,
                },
                qualified: true,
                tables: [
                    {
                        alias: 's07',
                        identifierChain: [
                            {
                                name: 'sample_07',
                            },
                        ],
                    },
                ],
                type: 'column',
            },
            {
                identifierChain: [
                    {
                        name: 'sample_07',
                    },
                ],
                location: {
                    first_column: 3,
                    first_line: 4,
                    last_column: 12,
                    last_line: 4,
                },
                type: 'table',
            },
            {
                alias: 's07',
                identifierChain: [
                    {
                        name: 'sample_07',
                    },
                ],
                location: {
                    first_column: 13,
                    first_line: 4,
                    last_column: 16,
                    last_line: 4,
                },
                source: 'table',
                type: 'alias',
            },
            {
                identifierChain: [
                    {
                        name: 'sample_08',
                    },
                ],
                location: {
                    first_column: 22,
                    first_line: 4,
                    last_column: 31,
                    last_line: 4,
                },
                type: 'table',
            },
            {
                alias: 's08',
                identifierChain: [
                    {
                        name: 'sample_08',
                    },
                ],
                location: {
                    first_column: 32,
                    first_line: 4,
                    last_column: 35,
                    last_line: 4,
                },
                source: 'table',
                type: 'alias',
            },
            {
                identifierChain: [
                    {
                        name: 'sample_07',
                    },
                ],
                location: {
                    first_column: 6,
                    first_line: 5,
                    last_column: 9,
                    last_line: 5,
                },
                type: 'table',
            },
            {
                identifierChain: [
                    {
                        name: 'code',
                    },
                ],
                location: {
                    first_column: 10,
                    first_line: 5,
                    last_column: 14,
                    last_line: 5,
                },
                qualified: true,
                tables: [
                    {
                        alias: 's07',
                        identifierChain: [
                            {
                                name: 'sample_07',
                            },
                        ],
                    },
                ],
                type: 'column',
            },
            {
                identifierChain: [
                    {
                        name: 'sample_08',
                    },
                ],
                location: {
                    first_column: 17,
                    first_line: 5,
                    last_column: 20,
                    last_line: 5,
                },
                type: 'table',
            },
            {
                identifierChain: [
                    {
                        name: 'code',
                    },
                ],
                location: {
                    first_column: 21,
                    first_line: 5,
                    last_column: 25,
                    last_line: 5,
                },
                qualified: true,
                tables: [
                    {
                        alias: 's08',
                        identifierChain: [
                            {
                                name: 'sample_08',
                            },
                        ],
                    },
                ],
                type: 'column',
            },
            {
                location: {
                    first_column: 1,
                    first_line: 6,
                    last_column: 26,
                    last_line: 7,
                },
                missing: false,
                type: 'whereClause',
            },
            {
                identifierChain: [
                    {
                        name: 'sample_07',
                    },
                ],
                location: {
                    first_column: 3,
                    first_line: 7,
                    last_column: 6,
                    last_line: 7,
                },
                type: 'table',
            },
            {
                identifierChain: [
                    {
                        name: 'salary',
                    },
                ],
                location: {
                    first_column: 7,
                    first_line: 7,
                    last_column: 13,
                    last_line: 7,
                },
                qualified: true,
                tables: [
                    {
                        alias: 's07',
                        identifierChain: [
                            {
                                name: 'sample_07',
                            },
                        ],
                    },
                ],
                type: 'column',
            },
            {
                identifierChain: [
                    {
                        name: 'sample_08',
                    },
                ],
                location: {
                    first_column: 16,
                    first_line: 7,
                    last_column: 19,
                    last_line: 7,
                },
                type: 'table',
            },
            {
                identifierChain: [
                    {
                        name: 'salary',
                    },
                ],
                location: {
                    first_column: 20,
                    first_line: 7,
                    last_column: 26,
                    last_line: 7,
                },
                qualified: true,
                tables: [
                    {
                        alias: 's08',
                        identifierChain: [
                            {
                                name: 'sample_08',
                            },
                        ],
                    },
                ],
                type: 'column',
            },
            {
                identifierChain: [
                    {
                        name: 'sample_08',
                    },
                ],
                location: {
                    first_column: 10,
                    first_line: 8,
                    last_column: 13,
                    last_line: 8,
                },
                type: 'table',
            },
            {
                identifierChain: [
                    {
                        name: 'salary',
                    },
                ],
                location: {
                    first_column: 14,
                    first_line: 8,
                    last_column: 20,
                    last_line: 8,
                },
                qualified: true,
                tables: [
                    {
                        alias: 's08',
                        identifierChain: [
                            {
                                name: 'sample_08',
                            },
                        ],
                    },
                ],
                type: 'column',
            },
            {
                identifierChain: [
                    {
                        name: 'sample_07',
                    },
                ],
                location: {
                    first_column: 21,
                    first_line: 8,
                    last_column: 24,
                    last_line: 8,
                },
                type: 'table',
            },
            {
                identifierChain: [
                    {
                        name: 'salary',
                    },
                ],
                location: {
                    first_column: 25,
                    first_line: 8,
                    last_column: 31,
                    last_line: 8,
                },
                qualified: true,
                tables: [
                    {
                        alias: 's07',
                        identifierChain: [
                            {
                                name: 'sample_07',
                            },
                        ],
                    },
                ],
                type: 'column',
            },
            {
                location: {
                    first_column: 1,
                    first_line: 9,
                    last_column: 11,
                    last_line: 9,
                },
                missing: false,
                type: 'limitClause',
            },
        ];
        expect(parseResult.locations).toEqual(locations);
    },
);

test('should handle "select bl from blablabla join (select * from blablabla) s1;', () => {
    const parseResult = parseGenericSqlWithoutCursor(
        'select bl from blablabla join (select * from blablabla) s1;',
    );

    const locations: IdentifierLocation[] = [
        {
            location: {
                first_column: 1,
                first_line: 1,
                last_column: 59,
                last_line: 1,
            },
            type: 'statement',
        },
        {
            identifier: 'SELECT',
            location: {
                first_column: 1,
                first_line: 1,
                last_column: 7,
                last_line: 1,
            },
            type: 'statementType',
        },
        {
            location: {
                first_column: 8,
                first_line: 1,
                last_column: 10,
                last_line: 1,
            },
            missing: false,
            type: 'selectList',
        },
        {
            identifierChain: [
                {
                    name: 'bl',
                },
            ],
            location: {
                first_column: 8,
                first_line: 1,
                last_column: 10,
                last_line: 1,
            },
            qualified: false,
            tables: [
                {
                    identifierChain: [
                        {
                            name: 'blablabla',
                        },
                    ],
                },
                {
                    subQuery: 's1',
                },
            ],
            type: 'column',
        },
        {
            identifierChain: [
                {
                    name: 'blablabla',
                },
            ],
            location: {
                first_column: 16,
                first_line: 1,
                last_column: 25,
                last_line: 1,
            },
            type: 'table',
        },
        {
            identifier: 'SELECT',
            location: {
                first_column: 32,
                first_line: 1,
                last_column: 38,
                last_line: 1,
            },
            type: 'statementType',
        },
        {
            location: {
                first_column: 39,
                first_line: 1,
                last_column: 40,
                last_line: 1,
            },
            missing: false,
            subquery: true,
            type: 'selectList',
        },
        {
            location: {
                first_column: 39,
                first_line: 1,
                last_column: 40,
                last_line: 1,
            },
            tables: [
                {
                    identifierChain: [
                        {
                            name: 'blablabla',
                        },
                    ],
                },
            ],
            type: 'asterisk',
        },
        {
            identifierChain: [
                {
                    name: 'blablabla',
                },
            ],
            location: {
                first_column: 46,
                first_line: 1,
                last_column: 55,
                last_line: 1,
            },
            type: 'table',
        },
        {
            location: {
                first_column: 55,
                first_line: 1,
                last_column: 55,
                last_line: 1,
            },
            missing: true,
            subquery: true,
            type: 'whereClause',
        },
        {
            location: {
                first_column: 55,
                first_line: 1,
                last_column: 55,
                last_line: 1,
            },
            missing: true,
            subquery: true,
            type: 'limitClause',
        },
        {
            alias: 's1',
            location: {
                first_column: 57,
                first_line: 1,
                last_column: 59,
                last_line: 1,
            },
            source: 'subquery',
            type: 'alias',
        },
        {
            location: {
                first_column: 59,
                first_line: 1,
                last_column: 59,
                last_line: 1,
            },
            missing: true,
            type: 'whereClause',
        },
        {
            location: {
                first_column: 59,
                first_line: 1,
                last_column: 59,
                last_line: 1,
            },
            missing: true,
            type: 'limitClause',
        },
    ];
    expect(parseResult.locations).toEqual(locations);
});

test(
    'should report locations for "SELECT CASE cos(boo.a) > baa.boo \\n' +
        '\\tWHEN baa.b THEN true \\n' +
        '\\tWHEN boo.c THEN false \\n' +
        '\\tWHEN baa.blue THEN boo.d \\n' +
        '\\tELSE baa.e END \\n' +
        '\\t FROM db1.foo boo, bar baa WHERE baa.bla IN (SELECT ble FROM bla);|"',
    () => {
        const parseResult = parseGenericSqlWithoutCursor(
            'SELECT CASE cos(boo.a) > baa.boo \n\tWHEN baa.b THEN true \n\tWHEN boo.c THEN false \n\tWHEN baa.blue THEN boo.d \n\tELSE baa.e END \n\t FROM db1.foo boo, bar baa WHERE baa.bla IN (SELECT ble FROM bla);',
        );

        const locations: IdentifierLocation[] = [
            {
                location: {
                    first_column: 1,
                    first_line: 1,
                    last_column: 67,
                    last_line: 6,
                },
                type: 'statement',
            },
            {
                identifier: 'SELECT',
                location: {
                    first_column: 1,
                    first_line: 1,
                    last_column: 7,
                    last_line: 1,
                },
                type: 'statementType',
            },
            {
                location: {
                    first_column: 8,
                    first_line: 1,
                    last_column: 16,
                    last_line: 5,
                },
                missing: false,
                type: 'selectList',
            },
            {
                function: 'cos',
                location: {
                    first_column: 13,
                    first_line: 1,
                    last_column: 15,
                    last_line: 1,
                },
                type: 'function',
            },
            {
                argumentPosition: 0,
                expression: {
                    columnReference: [
                        {
                            name: 'boo',
                        },
                        {
                            name: 'a',
                        },
                    ],
                    types: ['COLREF'],
                },
                function: 'cos',
                identifierChain: [
                    {
                        name: 'cos',
                    },
                ],
                location: {
                    first_column: 17,
                    first_line: 1,
                    last_column: 22,
                    last_line: 1,
                },
                type: 'functionArgument',
            },
            {
                identifierChain: [
                    {
                        name: 'db1',
                    },
                    {
                        name: 'foo',
                    },
                ],
                location: {
                    first_column: 17,
                    first_line: 1,
                    last_column: 20,
                    last_line: 1,
                },
                type: 'table',
            },
            {
                identifierChain: [
                    {
                        name: 'a',
                    },
                ],
                location: {
                    first_column: 21,
                    first_line: 1,
                    last_column: 22,
                    last_line: 1,
                },
                qualified: true,
                tables: [
                    {
                        alias: 'boo',
                        identifierChain: [
                            {
                                name: 'db1',
                            },
                            {
                                name: 'foo',
                            },
                        ],
                    },
                ],
                type: 'column',
            },
            {
                identifierChain: [
                    {
                        name: 'bar',
                    },
                ],
                location: {
                    first_column: 26,
                    first_line: 1,
                    last_column: 29,
                    last_line: 1,
                },
                type: 'table',
            },
            {
                identifierChain: [
                    {
                        name: 'boo',
                    },
                ],
                location: {
                    first_column: 30,
                    first_line: 1,
                    last_column: 33,
                    last_line: 1,
                },
                qualified: true,
                tables: [
                    {
                        alias: 'baa',
                        identifierChain: [
                            {
                                name: 'bar',
                            },
                        ],
                    },
                ],
                type: 'column',
            },
            {
                identifierChain: [
                    {
                        name: 'bar',
                    },
                ],
                location: {
                    first_column: 7,
                    first_line: 2,
                    last_column: 10,
                    last_line: 2,
                },
                type: 'table',
            },
            {
                identifierChain: [
                    {
                        name: 'b',
                    },
                ],
                location: {
                    first_column: 11,
                    first_line: 2,
                    last_column: 12,
                    last_line: 2,
                },
                qualified: true,
                tables: [
                    {
                        alias: 'baa',
                        identifierChain: [
                            {
                                name: 'bar',
                            },
                        ],
                    },
                ],
                type: 'column',
            },
            {
                identifierChain: [
                    {
                        name: 'db1',
                    },
                    {
                        name: 'foo',
                    },
                ],
                location: {
                    first_column: 7,
                    first_line: 3,
                    last_column: 10,
                    last_line: 3,
                },
                type: 'table',
            },
            {
                identifierChain: [
                    {
                        name: 'c',
                    },
                ],
                location: {
                    first_column: 11,
                    first_line: 3,
                    last_column: 12,
                    last_line: 3,
                },
                qualified: true,
                tables: [
                    {
                        alias: 'boo',
                        identifierChain: [
                            {
                                name: 'db1',
                            },
                            {
                                name: 'foo',
                            },
                        ],
                    },
                ],
                type: 'column',
            },
            {
                identifierChain: [
                    {
                        name: 'bar',
                    },
                ],
                location: {
                    first_column: 7,
                    first_line: 4,
                    last_column: 10,
                    last_line: 4,
                },
                type: 'table',
            },
            {
                identifierChain: [
                    {
                        name: 'blue',
                    },
                ],
                location: {
                    first_column: 11,
                    first_line: 4,
                    last_column: 15,
                    last_line: 4,
                },
                qualified: true,
                tables: [
                    {
                        alias: 'baa',
                        identifierChain: [
                            {
                                name: 'bar',
                            },
                        ],
                    },
                ],
                type: 'column',
            },
            {
                identifierChain: [
                    {
                        name: 'db1',
                    },
                    {
                        name: 'foo',
                    },
                ],
                location: {
                    first_column: 21,
                    first_line: 4,
                    last_column: 24,
                    last_line: 4,
                },
                type: 'table',
            },
            {
                identifierChain: [
                    {
                        name: 'd',
                    },
                ],
                location: {
                    first_column: 25,
                    first_line: 4,
                    last_column: 26,
                    last_line: 4,
                },
                qualified: true,
                tables: [
                    {
                        alias: 'boo',
                        identifierChain: [
                            {
                                name: 'db1',
                            },
                            {
                                name: 'foo',
                            },
                        ],
                    },
                ],
                type: 'column',
            },
            {
                identifierChain: [
                    {
                        name: 'bar',
                    },
                ],
                location: {
                    first_column: 7,
                    first_line: 5,
                    last_column: 10,
                    last_line: 5,
                },
                type: 'table',
            },
            {
                identifierChain: [
                    {
                        name: 'e',
                    },
                ],
                location: {
                    first_column: 11,
                    first_line: 5,
                    last_column: 12,
                    last_line: 5,
                },
                qualified: true,
                tables: [
                    {
                        alias: 'baa',
                        identifierChain: [
                            {
                                name: 'bar',
                            },
                        ],
                    },
                ],
                type: 'column',
            },
            {
                identifierChain: [
                    {
                        name: 'db1',
                    },
                ],
                location: {
                    first_column: 8,
                    first_line: 6,
                    last_column: 11,
                    last_line: 6,
                },
                type: 'database',
            },
            {
                identifierChain: [
                    {
                        name: 'db1',
                    },
                    {
                        name: 'foo',
                    },
                ],
                location: {
                    first_column: 12,
                    first_line: 6,
                    last_column: 15,
                    last_line: 6,
                },
                type: 'table',
            },
            {
                alias: 'boo',
                identifierChain: [
                    {
                        name: 'db1',
                    },
                    {
                        name: 'foo',
                    },
                ],
                location: {
                    first_column: 16,
                    first_line: 6,
                    last_column: 19,
                    last_line: 6,
                },
                source: 'table',
                type: 'alias',
            },
            {
                identifierChain: [
                    {
                        name: 'bar',
                    },
                ],
                location: {
                    first_column: 21,
                    first_line: 6,
                    last_column: 24,
                    last_line: 6,
                },
                type: 'table',
            },
            {
                alias: 'baa',
                identifierChain: [
                    {
                        name: 'bar',
                    },
                ],
                location: {
                    first_column: 25,
                    first_line: 6,
                    last_column: 28,
                    last_line: 6,
                },
                source: 'table',
                type: 'alias',
            },
            {
                location: {
                    first_column: 29,
                    first_line: 6,
                    last_column: 67,
                    last_line: 6,
                },
                missing: false,
                type: 'whereClause',
            },
            {
                identifierChain: [
                    {
                        name: 'bar',
                    },
                ],
                location: {
                    first_column: 35,
                    first_line: 6,
                    last_column: 38,
                    last_line: 6,
                },
                type: 'table',
            },
            {
                identifierChain: [
                    {
                        name: 'bla',
                    },
                ],
                location: {
                    first_column: 39,
                    first_line: 6,
                    last_column: 42,
                    last_line: 6,
                },
                qualified: true,
                tables: [
                    {
                        alias: 'baa',
                        identifierChain: [
                            {
                                name: 'bar',
                            },
                        ],
                    },
                ],
                type: 'column',
            },
            {
                identifier: 'SELECT',
                location: {
                    first_column: 47,
                    first_line: 6,
                    last_column: 53,
                    last_line: 6,
                },
                type: 'statementType',
            },
            {
                location: {
                    first_column: 54,
                    first_line: 6,
                    last_column: 57,
                    last_line: 6,
                },
                missing: false,
                subquery: true,
                type: 'selectList',
            },
            {
                identifierChain: [
                    {
                        name: 'ble',
                    },
                ],
                location: {
                    first_column: 54,
                    first_line: 6,
                    last_column: 57,
                    last_line: 6,
                },
                qualified: false,
                tables: [
                    {
                        identifierChain: [
                            {
                                name: 'bla',
                            },
                        ],
                    },
                ],
                type: 'column',
            },
            {
                identifierChain: [
                    {
                        name: 'bla',
                    },
                ],
                location: {
                    first_column: 63,
                    first_line: 6,
                    last_column: 66,
                    last_line: 6,
                },
                type: 'table',
            },
            {
                location: {
                    first_column: 66,
                    first_line: 6,
                    last_column: 66,
                    last_line: 6,
                },
                missing: true,
                subquery: true,
                type: 'whereClause',
            },
            {
                location: {
                    first_column: 66,
                    first_line: 6,
                    last_column: 66,
                    last_line: 6,
                },
                missing: true,
                subquery: true,
                type: 'limitClause',
            },
            {
                location: {
                    first_column: 67,
                    first_line: 6,
                    last_column: 67,
                    last_line: 6,
                },
                missing: true,
                type: 'limitClause',
            },
        ];
        expect(parseResult.locations).toEqual(locations);
    },
);

test('should report locations for "SELECT tta.* FROM testTableA tta, testTableB; |"', () => {
    const parseResult = parseGenericSqlWithoutCursor(
        'SELECT tta.* FROM testTableA tta, testTableB; ',
    );

    const locations: IdentifierLocation[] = [
        {
            location: {
                first_column: 1,
                first_line: 1,
                last_column: 45,
                last_line: 1,
            },
            type: 'statement',
        },
        {
            identifier: 'SELECT',
            location: {
                first_column: 1,
                first_line: 1,
                last_column: 7,
                last_line: 1,
            },
            type: 'statementType',
        },
        {
            location: {
                first_column: 8,
                first_line: 1,
                last_column: 13,
                last_line: 1,
            },
            missing: false,
            type: 'selectList',
        },
        {
            identifierChain: [
                {
                    name: 'testTableA',
                },
            ],
            location: {
                first_column: 8,
                first_line: 1,
                last_column: 11,
                last_line: 1,
            },
            type: 'table',
        },
        {
            location: {
                first_column: 12,
                first_line: 1,
                last_column: 13,
                last_line: 1,
            },
            tables: [
                {
                    alias: 'tta',
                    identifierChain: [
                        {
                            name: 'testTableA',
                        },
                    ],
                },
            ],
            type: 'asterisk',
        },
        {
            identifierChain: [
                {
                    name: 'testTableA',
                },
            ],
            location: {
                first_column: 19,
                first_line: 1,
                last_column: 29,
                last_line: 1,
            },
            type: 'table',
        },
        {
            alias: 'tta',
            identifierChain: [
                {
                    name: 'testTableA',
                },
            ],
            location: {
                first_column: 30,
                first_line: 1,
                last_column: 33,
                last_line: 1,
            },
            source: 'table',
            type: 'alias',
        },
        {
            identifierChain: [
                {
                    name: 'testTableB',
                },
            ],
            location: {
                first_column: 35,
                first_line: 1,
                last_column: 45,
                last_line: 1,
            },
            type: 'table',
        },
        {
            location: {
                first_column: 45,
                first_line: 1,
                last_column: 45,
                last_line: 1,
            },
            missing: true,
            type: 'whereClause',
        },
        {
            location: {
                first_column: 45,
                first_line: 1,
                last_column: 45,
                last_line: 1,
            },
            missing: true,
            type: 'limitClause',
        },
    ];
    expect(parseResult.locations).toEqual(locations);
});

test('should report locations for "SELECT COUNT(*) FROM testTable; |"', () => {
    const parseResult = parseGenericSqlWithoutCursor('SELECT COUNT(*) FROM testTable;');

    const locations: IdentifierLocation[] = [
        {
            location: {
                first_column: 1,
                first_line: 1,
                last_column: 31,
                last_line: 1,
            },
            type: 'statement',
        },
        {
            identifier: 'SELECT',
            location: {
                first_column: 1,
                first_line: 1,
                last_column: 7,
                last_line: 1,
            },
            type: 'statementType',
        },
        {
            location: {
                first_column: 8,
                first_line: 1,
                last_column: 16,
                last_line: 1,
            },
            missing: false,
            type: 'selectList',
        },
        {
            function: 'count',
            location: {
                first_column: 8,
                first_line: 1,
                last_column: 12,
                last_line: 1,
            },
            type: 'function',
        },
        {
            argumentPosition: 0,
            expression: {
                text: '*',
            },
            function: 'count',
            identifierChain: [
                {
                    name: 'count',
                },
            ],
            location: {
                first_column: 14,
                first_line: 1,
                last_column: 15,
                last_line: 1,
            },
            type: 'functionArgument',
        },
        {
            identifierChain: [
                {
                    name: 'testTable',
                },
            ],
            location: {
                first_column: 22,
                first_line: 1,
                last_column: 31,
                last_line: 1,
            },
            type: 'table',
        },
        {
            location: {
                first_column: 31,
                first_line: 1,
                last_column: 31,
                last_line: 1,
            },
            missing: true,
            type: 'whereClause',
        },
        {
            location: {
                first_column: 31,
                first_line: 1,
                last_column: 31,
                last_line: 1,
            },
            missing: true,
            type: 'limitClause',
        },
    ];
    expect(parseResult.locations).toEqual(locations);
});
