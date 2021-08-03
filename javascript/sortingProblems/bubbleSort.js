function bubbleSort(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        let noSwaps = true;
        for (let j = 0; j < i; j++) {
            console.log("i: " + arr[i] + " | j: " + arr[j]);
            if (arr[i] < arr[j]) {
                [arr[j],arr[i]] = [arr[i],arr[j]];
                noSwaps = false;
            }
        }
        if (noSwaps) break;
    }
    return arr;
}

module.exports = { bubbleSort }