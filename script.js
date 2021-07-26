// Write a function that takes two numbers, say x and y, as arguments
// Check if x is divisible by y
// If yes, return x
// If not, return the next higher natural number that is divisible by y

function myFunction(x, y) {
    if (x % y === 0) {
        return x
    }
    let i = x
    do {i++} while((i % y === 0) === false)
    return i
}

console.log(myFunction(10, 2))

// ---------------------------------------------------------

