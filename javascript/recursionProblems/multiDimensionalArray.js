// Given a multi-dimensional integer array, 
// return the total number of integers stored inside this array

function multiDimensionalArray(array) {
    let total = 0;
    for (let element of array) {
        if (element instanceof Array) {
            total += multiDimensionalArray(element);
        } 
        if (Number.isInteger(element)) {
            total++;
        }
    }
    return total;
}

module.exports = { multiDimensionalArray }
