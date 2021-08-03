function same(nums, squares) {
    let tracker = {};
    for (let n of nums) {
        let s = n**2;
        if (n in tracker) {
            tracker[s] += 1;
        } else {
            tracker[s] = 1;
        }
    }
    for (let s of squares) {
        if (s in tracker) {
            tracker[s] -= 1;
        }
    }
    // let values = Object.values(tracker);
    // if (values.indexOf(1) == -1) {
    //     return true;
    // }
    // return false;
    return Object.keys(tracker).every(function(key){ return tracker[key] != 1 })
}

module.exports = { same }