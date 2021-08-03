const app = require('./selectionSort');

test('after something should do this or that', () => {
    // ARRANGE
    let arr = [7,3,5,2,2,3,4,1];
    let answer = [1,2,2,3,3,4,5,7];

    // ACT
    let result = app.selectionSort(arr);

    // ASSERT
    expect(result).toEqual(answer)
});