const app = require('./sumSquares');

test('', () => {
    // ARRANGE
    // let arr = [1,2,3];
    // let arr = [[1,2],3];
    // let arr = [[[[[[[[[1]]]]]]]]];
    let arr = [10,[[10],10],[10]];

    // ACT
    let result = app.sumSquares(arr);

    // ASSERT
    expect(result).toEqual(400);

});