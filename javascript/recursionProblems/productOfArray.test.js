const app = require('./productOfArray');

test('the function will return the product of all nums in the array', () => {
    // ARRANGE
    let arr = [1,2,3,4,5];

    // ACT
    let result = app.productOfArray(arr);

    // ASSERT
    expect(result).toEqual(1*2*3*4*5);
});