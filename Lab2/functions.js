// Create a function that takes two numbers and returns their average
function average (number1, number2) {
    return (number1 + number2) / 2;
}

// Create a function that returns the square of a number
function square (number) {
    return number * number;
}

// Create a function that returns the cube of a number
function cube (number) {
    return number * number * number;
}

// Creating a function that takes two numbers (start and end) and returns an array.
function calculate (start, end) {
    // Creating an empty array to hold the results
    const results = [];
    // Using a for loop to iterate from start to end
    for (let i = start; i <= end; i++) {
        // Calculating the average of the square and cube of the current number
        const sum = average(square(i), cube(i));
        // Pushing the result into the results array from start to end (left to right)
        results.push(sum);
    }
    // Returning the results array
    return results;
}

// Printing the result of the calculate function to the console
console.log(calculate(0, 9));