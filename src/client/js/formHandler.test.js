const { handleSubmit } = require('../js/formHandler');

describe('test if the valid string was entered in the text field', () => {

    test('name', () => {
    let formText = "Stronger men";
        // string
        expect(handleSubmit (typeof formText)).toBe('string');
      });
    
});
