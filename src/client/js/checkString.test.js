const { checkString } = require('../js/checkString');

test('check that the string is Valid', () => {
    expect(checkString('input')).toBeTruthy();
});


