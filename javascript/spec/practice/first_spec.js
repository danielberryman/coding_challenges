let obj = {
    fn: (value) => {
        return value + 1;
    }
}

describe("A suite", function() {
    it("contains a spec", function() {
        expect(true).toBe(true);
    })
})

// Spies
describe("A spy", function() {
    let foo, bar = null;

    beforeEach(function() {
        foo = {
            setBar: function(value) {
                obj.fn(value);
            }
        }
        spyOn(foo, 'setBar').and.callThrough();
        spyOn(obj, 'fn');
        foo.setBar(123);
    });
    
    it("tracks that the spy was called", function() {
        expect(obj.fn);
    });
})