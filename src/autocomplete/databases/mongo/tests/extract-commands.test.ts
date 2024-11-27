import {extractCommandsFromMongoQuery} from '..';

test('something', () => {
    const result = extractCommandsFromMongoQuery(`
        db.test_collection1.find({
            test_field1: 'test_value1',
            test_object2: {
                test_subfield1: 1,
            }
        }).skip(1).offset(2).skip(3).offset(4);

        db.test_collection2.find({
            test_field2: 'test_value2',
            test_object2: {
                test_subfield2: 23,
            }
        });
    `);

    expect(result).toEqual([
        {
            method: 'find',
            modifiers: [
                {method: 'skip', params: '1'},
                {method: 'offset', params: '2'},
                {method: 'skip', params: '3'},
                {method: 'offset', params: '4'},
            ],
            name: 'test_collection1',
            params: "{test_field1:'test_value1',test_object2:{test_subfield1:1,}}",
        },
        {
            method: 'find',
            modifiers: [],
            name: 'test_collection2',
            params: "{test_field2:'test_value2',test_object2:{test_subfield2:23,}}",
        },
    ]);
});
