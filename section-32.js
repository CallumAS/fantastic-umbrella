//Welcome to Section 32
//Sort By Selection

function selectionSort(arr) {
    const length = arr.length;

    for (let i = 0; i < length - 1; i++) {
        let minIndex = i;

        for (let j = i + 1; j < length; j++) {
            // Find the index of the minimum element
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        const temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }

    return arr;
}
