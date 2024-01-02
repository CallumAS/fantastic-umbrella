//Welcome to Section 7
//The Classic FizzBuzz!

function fizzBuzz(n) {
    for (let i = 1; i <= n; i++) {
        //i kind of spammed the ternary operator
        //its not that complicated its like an if statement
        //it works like condition ? result_if_condition_is_made : result_if_condition_is_not_made
        const result =
            i % 3 === 0 && i % 5 === 0
                ? "fizzbuzz"
                : i % 3 === 0
                    ? "fizz"
                    : i % 5 === 0
                        ? "buzz"
                        : i;

        console.log(result);
    }
}