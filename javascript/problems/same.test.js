const app = require('./same');

test('same fn should return true if first array values have corresponding squared values with same frequency in second arr', () => {
    // ARRANGE
    let arr1 = [1,2,3,4,2,1]
    let arr2 = [1,4,9,16,4,1]

    // ACT
    let result = app.same(arr1,arr2);

    // ASSERT
    expect(result).toEqual(true);
});