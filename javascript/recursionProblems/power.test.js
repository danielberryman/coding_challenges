const app = require('./power');

test('will return result of int to the power passed in', () => {
    for (let i = 0; i < 25; i++) {
        // ARRANGE
        let num = Math.floor(Math.random() * 100);
        let power = Math.floor(Math.random() * 6);
        let calcResult = num ** power;

        // ACT
        let result = app.power(num, power);

        // ASSERT
        expect(result).toEqual(num ** power);
        // console.log(`power fn result is: ${result} | Calculated result is: ${calcResult}`);
    }
});