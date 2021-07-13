// Write a function called productOfArray which takes in an array of numbers and returns the product of them all

function productOfArray(arr) {
    let copy = arr.slice();
    if (copy.length == 1) { return copy[0] }
    copy.length -= 1;
    return arr[arr.length-1] * productOfArray(copy);
}

module.exports = { productOfArray }