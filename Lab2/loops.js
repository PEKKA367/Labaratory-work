// Creating a function that generates an array of numbers from start to end (inclusive)
function range (start, end) {
    // Creating an empty array to hold the numbers
    const array = [];
    // Using a for loop to iterate from start to end
    for (let i = start; i <= end; i++) {
        // Pushing each number into the array from start to end (left to right)
        array.push(i);
    }
    return array;
}

// Printing the result of the range function to the console
console.log(range(15, 30));