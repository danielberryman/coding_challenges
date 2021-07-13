const app = require('./strsToLens');

test('strToLens fn should convert an array of strs to an arr of the lengths of the strs', () => {
    // ARRANGE
    let arrOfStrs = ["Hello", "World", "!"]
    let correctAnswer = [5,5,1]

    // ACT
    let result = app.strsToLens(arrOfStrs);

    // ASSERT
    expect(result).toEqual(correctAnswer);
});