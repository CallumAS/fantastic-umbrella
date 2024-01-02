//Welcome to Section 12
//Two Sided Steps - Pyramids


function pyramid(n) {
    //Calculate the mid point
    const mp = Math.floor((2 * n - 1) / 2);

    for (let row = 0; row < n; row++) {
        let level = '';

        for (let col = 0; col < 2 * n - 1; col++) {
            if (mp - row <= col && mp + row >= col) {
                level += '#';
            } else {
                level += ' ';
            }
        }

        console.log(level);
    }
}