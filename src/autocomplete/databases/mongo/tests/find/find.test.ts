/* eslint-disable new-cap */
import {
    Command,
    extractMongoCommandsFromQuery,
    parseMongoQueryWithCursor,
    parseMongoQueryWithoutCursor,
} from '../..';

test('should not report errors on find statement', () => {
    const autocompleteResult = parseMongoQueryWithoutCursor(`
        db.test_collection.find({test_field: 'test_value'});

        db.collection('test_collection').find({test_field: 'test_value'});
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on extended find statement', () => {
    const autocompleteResult = parseMongoQueryWithoutCursor(`
        db.test_collection.find({test_field: 'test_value'}, {test_option: 'test_value'});

        db.collection('test_collection').find({test_field: 'test_value'}, {test_option: 'test_value'});
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should not report errors on extended find statement with modifiers', () => {
    const autocompleteResult = parseMongoQueryWithoutCursor(`
        db.test_collection.find({test_field: 'test_value'}, {test_option: 'test_value'})
            .skip(1)
            .limit(1)
            .filter({test_field: 'test_value'})
            .min({test_field: 'test_value'})
            .max({test_field: 'test_value'})
            .hint('test_index')
            .returnKey(true)
            .showRecordId(true)
            .sort('test_field', 'DESC');

        db.collection('test_collection').find({test_field: 'test_value'}, {test_option: 'test_value'})
            .skip(1)
            .limit(1)
            .filter({test_field: 'test_value'})
            .min({test_field: 'test_value'})
            .max({test_field: 'test_value'})
            .hint('test_index')
            .returnKey(true)
            .showRecordId(true)
            .sort('test_field', 'DESC');
    `);

    expect(autocompleteResult.errors).toHaveLength(0);
});

test('should suggest functions', () => {
    const autocompleteResult = parseMongoQueryWithCursor('db.test_collection.find({test_key: |})');

    expect(autocompleteResult.suggestKeywords).toEqual([
        {value: 'ObjectId'},
        {value: 'Date'},
        {value: 'UUID'},
        {value: 'MinKey'},
        {value: 'MaxKey'},
        {value: 'NumberInt'},
        {value: 'NumberDecimal'},
        {value: 'NumberLong'},
    ]);
});

test('should suggest properly find modifiers', () => {
    const autocompleteResult = parseMongoQueryWithCursor('db.test_collection.find().|');

    expect(autocompleteResult.suggestKeywords).toEqual([
        {value: 'explain'},
        {value: 'sort'},
        {value: 'showRecordId'},
        {value: 'returnKey'},
        {value: 'hint'},
        {value: 'max'},
        {value: 'min'},
        {value: 'filter'},
        {value: 'limit'},
        {value: 'skip'},
    ]);
});

test('should suggest properly find modifiers with collection method', () => {
    const autocompleteResult = parseMongoQueryWithCursor(
        "db.collection('test_collection').find().|",
    );

    expect(autocompleteResult.suggestKeywords).toEqual([
        {value: 'explain'},
        {value: 'sort'},
        {value: 'showRecordId'},
        {value: 'returnKey'},
        {value: 'hint'},
        {value: 'max'},
        {value: 'min'},
        {value: 'filter'},
        {value: 'limit'},
        {value: 'skip'},
    ]);
});

test('should extract find commands properly', () => {
    const result = extractMongoCommandsFromQuery(`
        db.test_collection.find({test_field: 'test_value'});
        db.collection('test_collection').find({test_field: 'test_value'});

        db.test_collection.find({test_field: 'test_value'}, {test_option: 'test_value'});

        db.collection('test_collection').find({test_field: 'test_value'}, {test_option: 'test_value'});

        db.test_collection1.find({
            test_field: 'test_value',
            test_object: {test_subfield: 1}
        })
            .skip(1)
            .limit(2)
            .skip(3)
            .limit(4)
            .filter({test_filter_field: 'test_filter_value'})
            .min({test_min_field: 'test_min_value'})
            .max({test_max_field: 'test_max_value'})
            .hint('test_index_name')
            .hint({test_index_name: 1})
            .returnKey(true)
            .showRecordId(true)
            .returnKey(false)
            .showRecordId(false)
            .sort('test_field', 'desc');
        db.collection('test_collection1').find({
            test_field: 'test_value',
            test_object: {test_subfield: 1}
        })
            .skip(1)
            .limit(2)
            .skip(3)
            .limit(4)
            .filter({test_filter_field: 'test_filter_value'})
            .min({test_min_field: 'test_min_value'})
            .max({test_max_field: 'test_max_value'})
            .hint('test_index_name')
            .hint({test_index_name: 1})
            .returnKey(true)
            .showRecordId(true)
            .returnKey(false)
            .showRecordId(false)
            .sort('test_field', 'desc');

        db.test_collection2.find({
            test_field: 'test_value',
            test_object: {
                test_subfield: 23,
            }
        })
            .explain();
        db.collection('test_collection2').find({
            test_field: 'test_value',
            test_object: {
                test_subfield: 23,
            }
        })
            .explain();
        
        db.test_collection4.find({}).explain({});
        db.collection('test_collection4').find({}).explain({});
        
        db.test_collection5.find().explain('test_string');
        db.collection('test_collection5').find().explain('test_string');
        
        db.test_collection6.find().explain(true);
        db.collection('test_collection6').find().explain(true);
        
        db.test_collection7.find().explain({
            test_explain_field: 1
        });
        db.collection('test_collection7').find().explain({
            test_explain_field: 1
        });

        db.test_collection8.find(
            {
                test_find_field: 'test_find_value'
            },
            {
                test_find_option_field: 'test_find_option_value'
            }
        );
        db.collection('test_collection8').find(
            {
                test_find_field: 'test_find_value'
            },
            {
                test_find_option_field: 'test_find_option_value'
            }
        );
    `);

    const commands: Command[] = [
        {
            type: 'collection',
            method: 'find',
            modifiers: [],
            collectionName: 'test_collection',
            parameters: {test_field: 'test_value'},
        },
        {
            type: 'collection',
            method: 'find',
            modifiers: [],
            collectionName: 'test_collection',
            parameters: {test_field: 'test_value'},
        },
        {
            type: 'collection',
            method: 'find',
            modifiers: [],
            collectionName: 'test_collection',
            parameters: {test_field: 'test_value'},
            options: {test_option: 'test_value'},
        },
        {
            type: 'collection',
            method: 'find',
            modifiers: [],
            collectionName: 'test_collection',
            parameters: {test_field: 'test_value'},
            options: {test_option: 'test_value'},
        },
        {
            type: 'collection',
            method: 'find',
            modifiers: [
                {method: 'skip', parameters: 1},
                {method: 'limit', parameters: 2},
                {method: 'skip', parameters: 3},
                {method: 'limit', parameters: 4},
                {method: 'filter', parameters: {test_filter_field: 'test_filter_value'}},
                {method: 'min', parameters: {test_min_field: 'test_min_value'}},
                {method: 'max', parameters: {test_max_field: 'test_max_value'}},
                {method: 'hint', parameters: 'test_index_name'},
                {method: 'hint', parameters: {test_index_name: 1}},
                {method: 'returnKey', parameters: true},
                {method: 'showRecordId', parameters: true},
                {method: 'returnKey', parameters: false},
                {method: 'showRecordId', parameters: false},
                {method: 'sort', options: 'desc', parameters: 'test_field'},
            ],
            collectionName: 'test_collection1',
            parameters: {test_field: 'test_value', test_object: {test_subfield: 1}},
        },
        {
            type: 'collection',
            method: 'find',
            modifiers: [
                {method: 'skip', parameters: 1},
                {method: 'limit', parameters: 2},
                {method: 'skip', parameters: 3},
                {method: 'limit', parameters: 4},
                {method: 'filter', parameters: {test_filter_field: 'test_filter_value'}},
                {method: 'min', parameters: {test_min_field: 'test_min_value'}},
                {method: 'max', parameters: {test_max_field: 'test_max_value'}},
                {method: 'hint', parameters: 'test_index_name'},
                {method: 'hint', parameters: {test_index_name: 1}},
                {method: 'returnKey', parameters: true},
                {method: 'showRecordId', parameters: true},
                {method: 'returnKey', parameters: false},
                {method: 'showRecordId', parameters: false},
                {method: 'sort', options: 'desc', parameters: 'test_field'},
            ],
            collectionName: 'test_collection1',
            parameters: {test_field: 'test_value', test_object: {test_subfield: 1}},
        },
        {
            type: 'collection',
            method: 'find',
            modifiers: [],
            collectionName: 'test_collection2',
            parameters: {test_field: 'test_value', test_object: {test_subfield: 23}},
            explain: {},
        },
        {
            type: 'collection',
            method: 'find',
            modifiers: [],
            collectionName: 'test_collection2',
            parameters: {test_field: 'test_value', test_object: {test_subfield: 23}},
            explain: {},
        },
        {
            type: 'collection',
            method: 'find',
            modifiers: [],
            collectionName: 'test_collection4',
            parameters: {},
            explain: {
                parameters: {},
            },
        },
        {
            type: 'collection',
            method: 'find',
            modifiers: [],
            collectionName: 'test_collection4',
            parameters: {},
            explain: {
                parameters: {},
            },
        },
        {
            type: 'collection',
            method: 'find',
            modifiers: [],
            collectionName: 'test_collection5',
            explain: {
                parameters: 'test_string',
            },
        },
        {
            type: 'collection',
            method: 'find',
            modifiers: [],
            collectionName: 'test_collection5',
            explain: {
                parameters: 'test_string',
            },
        },
        {
            type: 'collection',
            method: 'find',
            modifiers: [],
            collectionName: 'test_collection6',
            explain: {
                parameters: true,
            },
        },
        {
            type: 'collection',
            method: 'find',
            modifiers: [],
            collectionName: 'test_collection6',
            explain: {
                parameters: true,
            },
        },
        {
            type: 'collection',
            method: 'find',
            modifiers: [],
            collectionName: 'test_collection7',
            explain: {
                parameters: {
                    test_explain_field: 1,
                },
            },
        },
        {
            type: 'collection',
            method: 'find',
            modifiers: [],
            collectionName: 'test_collection7',
            explain: {
                parameters: {
                    test_explain_field: 1,
                },
            },
        },
        {
            type: 'collection',
            method: 'find',
            modifiers: [],
            collectionName: 'test_collection8',
            parameters: {test_find_field: 'test_find_value'},
            options: {test_find_option_field: 'test_find_option_value'},
        },
        {
            type: 'collection',
            method: 'find',
            modifiers: [],
            collectionName: 'test_collection8',
            parameters: {test_find_field: 'test_find_value'},
            options: {test_find_option_field: 'test_find_option_value'},
        },
    ];

    expect(result).toEqual({commands});
});

test('should extract find commands with functions properly', () => {
    const functionParsers = {
        ObjectId: (...args: unknown[]): unknown => `$ObjectId ${args.join('/')}`,
        Date: (...args: unknown[]): unknown => `$Date ${args.join('/')}`,
        UUID: (...args: unknown[]): unknown => `$UUID ${args.join('/')}`,
        MinKey: (...args: unknown[]): unknown => `$MinKey ${args.join('/')}`,
        MaxKey: (...args: unknown[]): unknown => `$MaxKey ${args.join('/')}`,
        NumberDecimal: (...args: unknown[]): unknown => `$NumberDecimal ${args.join('/')}`,
        NumberInt: (...args: unknown[]): unknown => `$NumberInt ${args.join('/')}`,
        NumberLong: (...args: unknown[]): unknown => `$NumberLong ${args.join('/')}`,
    };

    const result = extractMongoCommandsFromQuery(
        `
        db.test_collection.find({
            one: 1,
            two: 2,
            three: 'three',
            four: ['five', 6, 7, {eight: 8, nine: 9, ten: 10}, 'eleven', 12],
            thirteen: 13,
            fourteen: 'fourteen',
            true: true,
            false: false,
            null: null,
            "quoted": 18,
            Infinity: 19,
            NaN: 20,
            function1: ObjectId('test_id'),
            function2: Date('2022-12-13'),
            function3: UUID('string'),
            function4: MinKey(),
            function5: MaxKey(),
            function6: NumberDecimal('20.12002123'),
            function7: NumberInt(123123),
            function8: NumberLong('123123123123123123123123123123123124', 10),
            "'double_quoted'": 18,
        });
        db.test_collection2.find({
            functions: [
                ObjectId('test_id'),
                Date('2022-12-13'),
                UUID('string'),
                MinKey(),
                MaxKey(),
                NumberDecimal('20.12002123'),
                NumberInt(123123),
                NumberLong('123123123123123123123123123123123124', 10),
                [
                    ObjectId('test_id'),
                    Date('2022-12-13'),
                    UUID('string'),
                    MinKey(),
                    MaxKey(),
                    NumberDecimal('20.12002123'),
                    NumberInt(123123),
                    NumberLong('123123123123123123123123123123123124', 10),
                ]
            ]
        });
    `,
        functionParsers,
    );

    const commands: Command[] = [
        {
            type: 'collection',
            method: 'find',
            modifiers: [],
            collectionName: 'test_collection',
            parameters: {
                one: 1,
                two: 2,
                three: 'three',
                four: ['five', 6, 7, {eight: 8, nine: 9, ten: 10}, 'eleven', 12],
                thirteen: 13,
                fourteen: 'fourteen',
                true: true,
                false: false,
                null: null,
                quoted: 18,
                Infinity: 19,
                NaN: 20,
                function1: functionParsers.ObjectId('test_id'),
                function2: functionParsers.Date('2022-12-13'),
                function3: functionParsers.UUID('string'),
                function4: functionParsers.MinKey(),
                function5: functionParsers.MaxKey(),
                function6: functionParsers.NumberDecimal('20.12002123'),
                function7: functionParsers.NumberInt(123123),
                function8: functionParsers.NumberLong('123123123123123123123123123123123124', 10),
                "'double_quoted'": 18,
            },
        },
        {
            type: 'collection',
            method: 'find',
            modifiers: [],
            collectionName: 'test_collection2',
            parameters: {
                functions: [
                    functionParsers.ObjectId('test_id'),
                    functionParsers.Date('2022-12-13'),
                    functionParsers.UUID('string'),
                    functionParsers.MinKey(),
                    functionParsers.MaxKey(),
                    functionParsers.NumberDecimal('20.12002123'),
                    functionParsers.NumberInt(123123),
                    functionParsers.NumberLong('123123123123123123123123123123123124', 10),
                    [
                        functionParsers.ObjectId('test_id'),
                        functionParsers.Date('2022-12-13'),
                        functionParsers.UUID('string'),
                        functionParsers.MinKey(),
                        functionParsers.MaxKey(),
                        functionParsers.NumberDecimal('20.12002123'),
                        functionParsers.NumberInt(123123),
                        functionParsers.NumberLong('123123123123123123123123123123123124', 10),
                    ],
                ],
            },
        },
    ];

    expect(result).toEqual({commands});
});
