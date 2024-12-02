import {extractMongoCommandsFromQuery} from '..';

test('should extract find commands properly', () => {
    const result = extractMongoCommandsFromQuery(`
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

        db.test_collection2.find({
            test_field: 'test_value',
            test_object: {
                test_subfield: 23,
            }
        })
            .explain();
        
        db.test_collection4.find({}).explain({});
        
        db.test_collection5.find().explain('test_string');
        
        db.test_collection6.find().explain(true);
        
        db.test_collection7.find().explain({
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
    `);

    expect(result).toEqual({
        commands: [
            {
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
                method: 'find',
                modifiers: [],
                collectionName: 'test_collection2',
                parameters: {test_field: 'test_value', test_object: {test_subfield: 23}},
                explain: {},
            },
            {
                method: 'find',
                modifiers: [],
                collectionName: 'test_collection4',
                parameters: {},
                explain: {
                    parameters: {},
                },
            },
            {
                method: 'find',
                modifiers: [],
                collectionName: 'test_collection5',
                explain: {
                    parameters: 'test_string',
                },
            },
            {
                method: 'find',
                modifiers: [],
                collectionName: 'test_collection6',
                explain: {
                    parameters: true,
                },
            },
            {
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
                method: 'find',
                modifiers: [],
                collectionName: 'test_collection8',
                parameters: {test_find_field: 'test_find_value'},
                options: {test_find_option_field: 'test_find_option_value'},
            },
        ],
    });
});

test('should extract insertOne commands properly', () => {
    const result = extractMongoCommandsFromQuery(`
        db.test_collection1.insertOne({
            test_field: 'test_value',
            test_object: {
                test_subfield: 23,
            }
        });

        db.test_collection2.insertOne(
            {
                test_field: 'test_value'
            },
            {
                test_option: 'test_option_value'
            }
        );
    `);

    expect(result).toEqual({
        commands: [
            {
                method: 'insertOne',
                collectionName: 'test_collection1',
                document: {test_field: 'test_value', test_object: {test_subfield: 23}},
            },
            {
                method: 'insertOne',
                collectionName: 'test_collection2',
                document: {test_field: 'test_value'},
                options: {test_option: 'test_option_value'},
            },
        ],
    });
});

test('should throw error on invalid syntax', () => {
    const result = extractMongoCommandsFromQuery('db_ERROR.test_collection1.find({})');

    expect(result).toEqual({
        parseSyntaxErrors: [
            {
                endColumn: 8,
                endLine: 1,
                message: "mismatched input 'db_ERROR' expecting {<EOF>, 'db'}",
                startColumn: 0,
                startLine: 1,
            },
        ],
    });
});
