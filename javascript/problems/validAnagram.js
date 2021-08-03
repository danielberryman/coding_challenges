// given 2 strings check if the second string is an anagram of the first
function validAnagram(str1, str2) {
    if (str1.length != str2.length) { return false }
    let tracker = {};
    for (let c of str1) {
        tracker.hasOwnProperty(c) ? tracker[c] += 1 : tracker[c] = 1;
    }
    for (let c of str2) {
        if (tracker.hasOwnProperty(c)) {
            tracker[c] -= 1;
        } else {
            return false;
        }
    }
    return Object.values(tracker).every(k => k == 0);
}

module.exports = { validAnagram }