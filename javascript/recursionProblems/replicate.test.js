const app = require('./replicate');

test('will return an array of a number replicated x number of times', () => {
    // ACT
    let result = app.replicate(-2,69);

    // ASSERT
    // expect(result).toEqual([3,3,3]);
    // expect(result).toEqual([5,5,5]);
    // expect(result).toEqual([69]);
    expect(result).toEqual([]);
});