// Write a function that sums squares of numbers in list that may contain more lists

function sumSquares(arr) {
    if(arr.length === 0) return 0;

    let total = 0;
    let element = arr.shift();
    if (element instanceof Array) {
        total += sumSquares(element);
    } else if (typeof element == 'number') {
        total += (element ** 2);
    }
    return total + sumSquares(arr);
}

module.exports = { sumSquares }