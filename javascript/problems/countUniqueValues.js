// takes a sorted array and counts the unique values

function countUniqueValues(arr) {
    // inputs: an array of values (could be anything)
    // edge cases: empty array return 0
    // return? count in number form
    // break it down:
    // iterate through
    // track current unique value
    // track the current evaluated value
    // if it's they're the same continue
    // if they're not the same set that value equal to itself
    let lastUniqueIndex = 0;
    let count = 1;
    for (let i = 1; i < arr.length; i++) {
        if (arr[lastUniqueIndex] !== arr[i]) {
            lastUniqueIndex = i;
            count++;
        }
    }
    return count;
}

module.exports = { countUniqueValues }