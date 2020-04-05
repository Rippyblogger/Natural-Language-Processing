const mockAPI = require('../../server/mockAPI');

describe("Mock API",()=>{

    test('results', () => {
    let mockAPI= {
        polarity: 'neutral',
        subjectivity: 'objective',
        text: 'mov',
        polarity_confidence: 0.407149076461792,
        subjectivity_confidence: 0.7670384232486057
    };

    expect(typeof mockAPI.polarity).toBe('string');
    expect(typeof mockAPI.subjectivity).toBe('string');
    expect(typeof mockAPI.text).toBe('string');
    expect(typeof mockAPI.polarity_confidence).toBe('number');
    expect(typeof mockAPI.subjectivity_confidence).toBe('number');
});

});