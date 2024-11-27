import {extractMongoCommandsFromQuery} from '..';

test('should extract collection commands properly', () => {
    const result = extractMongoCommandsFromQuery(`
        db.test_collection1.find({
            test_field1: 'test_value1',
            test_object1: {
                test_subfield1: 1,
            }
        })
            .skip(1)
            .limit(2)
            .skip(3)
            .limit(4)
            .filter({test_filter_field: 'test_filter_value'})
            .min({test_min_field: 'test_min_value'})
            .max({test_max_field: 'test_max_value'})
            .hint('test_index_name')
            .hint({
                test_index_name: 1
            })
            .returnKey(true)
            .showRecordId(true)
            .returnKey(false)
            .showRecordId(false)
            .sort('test_field', 'desc');

        db.test_collection2.find({
            test_field2: 'test_value2',
            test_object2: {
                test_subfield2: 23,
            }
        });

        db.test_collection3.insertOne({
            test_field3: 'test_value3',
            test_object3: {
                test_subfield3: 23,
            }
        });
    `);

    expect(result).toEqual([
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
            parameters: {test_field1: 'test_value1', test_object1: {test_subfield1: 1}},
        },
        {
            method: 'find',
            modifiers: [],
            collectionName: 'test_collection2',
            parameters: {test_field2: 'test_value2', test_object2: {test_subfield2: 23}},
        },
        {
            method: 'insertOne',
            collectionName: 'test_collection3',
            parameters: {test_field3: 'test_value3', test_object3: {test_subfield3: 23}},
        },
    ]);
});
