const app = require('./searchJsObj');

// ARRANGE
let obj = {
    data: {
        info: {
            stuff: {
                thing: {
                    moreStuff: {
                        magicNumber: 44,
                        something: 'foo2'
                    }
                }
            }
        }
    }
}

test('search for property in nested object that exists', () => {
    // ACT
    let result = app.contains(obj, 44);

    // ASSERT
    expect(result).toEqual(true);
});

test('search for property in nested object that does NOT exist', () => {
    // ACT
    let result = app.contains(obj, 45);

    // ASSERT
    expect(result).toEqual(false);
});