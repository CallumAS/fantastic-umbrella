//Welcome to Section 16
//Runtime Complexity in Practice - Fibonacci

function fib(n) {
    //the initial two
    const results = [0, 1];

    for (let i = 2; i <= n; i++) { //start loop two a head
        const next = results[i - 1] + results[i - 2]; //calculate
        results.push(next);
    }

    return results[n];
}
