// Write a function called contains that searches for a value in a nested object. It returns true if the object contains that value.

function contains(obj, value) {
    let result = false;
    for (let p of Object.keys(obj)) {
        // console.log('Current property: ' + obj[p]);
        // console.log('Key is object? ' + (Object.getPrototypeOf(obj[p]) == Object.prototype));
        if (Object.getPrototypeOf(obj[p]) == Object.prototype) {
            // console.log('Current Obj: ' + p);
            result = contains(obj[p], value);
        }
        if (result == false && obj[p] == value) {
            // console.log('p == value: ' + p == value);
            result = true;
            break;
        }
    }
    return result;
}

module.exports = { contains }