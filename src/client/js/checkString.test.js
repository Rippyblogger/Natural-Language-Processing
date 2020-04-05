const { checkString } = require('../js/checkString');

test('check that the string is Valid', () => {
    expect(checkString('formText')).toBe('string');;
});
