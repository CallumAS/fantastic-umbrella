//Welcome to Section 11
//Printing Steps

//I remember doing this in college with a if statements same with the pyramid
function steps(n) {
    for (let row = 0; row < n; row++) {
        let stair = '';

        for (let col = 0; col < n; col++) {
            stair += col <= row ? '#' : ' ';
        }

        console.log(stair);
    }
}