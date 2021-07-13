const app = require('./all');

test('return true when all values in an array return true when passed to cb fn', () => {
    // ARRANGE
    let arr = [1,2,3,4,5];
    let cb = function(num) {
        return num < 7;
    };

    // ACT
    let result = app.all(arr, cb);

    // ASSERT
    expect(result).toEqual(true);
});

test('return false when some or no values in an array return true when passed to cb fn', () => {
    // ARRANGE
    let arr = [1,2,3,4,5];
    let cb = function(num) {
        return num < 3;
    };

    // ACT
    let result = app.all(arr, cb);

    // ASSERT
    expect(result).toEqual(false);
});