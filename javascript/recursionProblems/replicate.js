// The function should return an array containing repetitions of the number argument. 
// For instance, replicate(3, 5) should return [5,5,5]. If the times argument is negative, return an empty array.

function replicate(numOfRepeats, value) {
    if (numOfRepeats <= 0) return [];
    if (numOfRepeats == 1) return Array.of(value);
    return [value].concat(replicate(numOfRepeats-1, value));
}

module.exports = { replicate }
