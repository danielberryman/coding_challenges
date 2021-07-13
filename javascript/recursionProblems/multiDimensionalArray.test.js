const app = require('./multiDimensionalArray');

test('check in nested arrays for all integers', () => {
    // ARRANGE
    let array = [[[5], 3], 0, 2, ['foo'], [], [4, [5, 6]]];
    // let array = [[1,2],3,4,5];
    
    // ACT
    let result = app.multiDimensionalArray(array);

    // ASSERT
    expect(result).toEqual(7);
});