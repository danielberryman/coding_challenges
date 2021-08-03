function bubbleSort(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        for (let j = 0; j < i; j++) {
            console.log("i: " + i + " | j: " + j);
            if (arr[i] < arr[j]) {
                [arr[j],arr[i]] = [arr[i],arr[j]];
            }
        }
    }
    return arr;
}

module.exports = { bubbleSort }