//Welcome to Section 9
//Anagrams
//I did not like this one i wanted to smoother solution

function getChars(str) {
    const result = {};
    for (const char of str) {
        if (result[char] === undefined) {
            result[char] = 1;
        } else {
            result[char] += 1;
        }
    }
    return result;
}

function anagrams(stringA, stringB) {
    let aCount = getChars(stringA);
    let bCount = getChars(stringB);
    let aChars = Object.keys(aCount);
    let valid = true;
    for (var i = aChars.length - 1; i >= 0; i--) {
        if (aCount[aChars[i]] !== bCount[aChars[i]]) {
            valid = false;
            break;
        }
    }
    return valid;
}
