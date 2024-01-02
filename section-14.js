//Welcome to Section 14
//Enter the Matrix Spiral

//this was hard to get my head around i did not like this task
//just a crazy jump in difficulty in my opinion

function matrix(n) {
    const matrix = Array.from({ length: n }, () => Array(n).fill(undefined));
    let num = 1;
    let top = 0, bottom = n - 1, left = 0, right = n - 1;

    while (top <= bottom && left <= right) {
        for (let i = left; i <= right; i++) matrix[top][i] = num++;
        top++;

        for (let i = top; i <= bottom; i++) matrix[i][right] = num++;
        right--;

        for (let i = right; i >= left; i--) matrix[bottom][i] = num++;
        bottom--;

        for (let i = bottom; i >= top; i--) matrix[i][left] = num++;
        left++;
    }

    return matrix;
}
