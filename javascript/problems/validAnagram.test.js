const app = require('./validAnagram');

test('after something should do this or that', () => {
    // ARRANGE
    let str1 = 'taco';
    let str2 = 'coat';

    // ACT
    let result = app.validAnagram(str1,str2);

    // ASSERT
    expect(result).toEqual(true);
});