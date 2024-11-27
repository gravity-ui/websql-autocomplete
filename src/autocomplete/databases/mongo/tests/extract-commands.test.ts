import {extractCommandsFromMongoQuery} from '..';

test('should extract collection methods properly', () => {
    const result = extractCommandsFromMongoQuery(`
        db.test_collection1.find({
            test_field1: 'test_value1',
            test_object1: {
                test_subfield1: 1,
            }
        }).skip(1).offset(2).skip(3).offset(4);

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
                {method: 'skip', parameters: '1'},
                {method: 'offset', parameters: '2'},
                {method: 'skip', parameters: '3'},
                {method: 'offset', parameters: '4'},
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
