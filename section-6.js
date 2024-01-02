//Welcome to Section 6
//MaxChars

function maxChar(str) {
    const result = {};
    for (const char of str) {
        if (result[char] === undefined) {
            result[char] = 1;
        } else {
            result[char] += 1;
        }
    }
    //explanation
    //get keys > find one > compare all items as a & b where biggest continues > result char that appears the most
    return Object.keys(result).reduce((a, b) => result[a] > result[b] ? a : b, '');
}
