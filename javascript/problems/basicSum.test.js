const app = require('./basicSum');

test('basicSum fn should add nums in arr together and return correct answer', () => {
    // ARRANGE
    let numsArr = [1,2,3,4,5];
    let correctAnswer = 15;

    // ACT
    let result = app.basicSum(numsArr);

    // ASSERT
    expect(result).toEqual(correctAnswer);
});

test('basicSum fn should add nums in arr together and return incorrect answer', () => {
    // ARRANGE
    let numsArr = [1,2,3,4];
    let answer = 15;

    // ACT
    let result = app.basicSum(numsArr);

    // ASSERT
    expect(result).not.toEqual(answer);
});