//Welcome to Section 8
//Array Chunking

function chunk(array, size) {
    let results = [];
    let temp = [];
    for (var i = 0; i < array.length; i++) {
        temp.push(array[i])
        if (temp.length == size) {
            results.push(temp)
            temp = [];
        }
    }
    if (temp.length > 0)
        results.push(temp);
    return results
}