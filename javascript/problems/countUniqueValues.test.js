const app = require('./countUniqueValues');

test('takes a sorted array and counts the unique values', () => {
    // ARRANGE
    let arr = [1,2,3,3,5]
    let answer = 4;

    // ACT
    let result = app.countUniqueValues(arr);

    // ASSERT
    expect(result).toEqual(answer);
});