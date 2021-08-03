const app = require('./bubbleSort');

test('after bubble sort should sort numbers from least to greatest', () => {
    // ARRANGE
    // let arr = [7,6,5,4,3,2,1];
    // let arr = [1,6,3,4,2,5,7];
    let arr = [37,45,29,8];
    let answer = [8,29,37,45];

    // ACT
    let result = app.bubbleSort(arr);

    // ASSERT
    expect(result).toEqual(answer)
});