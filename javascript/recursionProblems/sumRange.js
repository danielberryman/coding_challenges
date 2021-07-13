// Write a function called sumRange. 
// It will take a number and return the sum of all numbers from 1 up to the number passed in.
// Sample: sumRange(3) returns 6, since 1 + 2 + 3 = 6.

function sumRange(int) {
    if (int <= 1) {
        return int;
    }
    return int + sumRange(int-1);
}

module.exports = {
    sumRange
};
