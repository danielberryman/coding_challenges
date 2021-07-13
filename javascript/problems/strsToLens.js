// Write code to convert an array of strings to an array of the lengths of those strings.

function strsToLens(arrOfStrs) {
    return arrOfStrs.map(str => str.length);
}

module.exports = { strsToLens }