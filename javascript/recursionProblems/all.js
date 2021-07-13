// Write a function called all which accepts an array and a callback
// and returns true if every value in the array returns true when passed as parameter to the callback function

function all(arr, cb) {
    let copy = arr.slice();
    if (arr.length == 0) return true;
    if (!cb(copy[copy.length - 1])) return false;
    copy.length -= 1;
    return all(copy, cb);
}

module.exports = { all }

// Naive solution
// for (let a of arr) {
//     if (!cb(a)) {
//         return false;
//     }
// }
// return true;
