const app = require('./greeter');

test('greeter fn something should take a basic param and a nested param and return correct console log statement', () => {
    // ARRANGE
    let param1 = "Hello";
    let param2 = "Daniel";
    let answer = "Hello, Daniel!"

    // ACT
    let result = app.greeter(param1)(param2);

    // ASSERT
    expect(result).toEqual(answer);
});