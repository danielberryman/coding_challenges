const app = require('./sumRange');

test('will return the sum of the range of numbers up to the number passed', () => {
    for (let i = 0; i < 25; i++) {
        // ARRANGE
        // Get a random number
        let randNum = Math.floor(Math.random() * 100);
        // Calculate the range
        let calcResult = 0;
        for (let i = randNum; i > 0; i--) {
            calcResult += i;
        }

        // ACT
        let result = app.sumRange(randNum);

        // ASSERT
        expect(result).toEqual(calcResult);
        // console.log(`SumRange fn result is: ${result} | Calculated result is: ${calcResult}`);
    }
});