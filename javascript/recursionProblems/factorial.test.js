const app = require('./factorial');

test('will calculate the factorial of the 10 to be 3628800', () => {
    // ARRANGE, ACT
    let result = app.factorial(10);

    // ASSERT
    expect(result).toEqual(3628800);
});

test('will calculate the factorial of the 3 to be 6', () => {
    // ARRANGE, ACT
    let result = app.factorial(3);

    // ASSERT
    expect(result).toEqual(6);
});

test('will calculate the factorial of the 10 to be 3628800', () => {
    // ARRANGE, ACT
    let result = app.factorial(7);

    // ASSERT
    expect(result).toEqual(5040);
});