const { handleSubmit } = require('../js/formHandler');

describe('test if the handleSubmit exists', () => {

    test('Return true', () => {

        expect(handleSubmit).toBeDefined();
    });
    
});