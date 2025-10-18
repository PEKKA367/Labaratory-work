// Create a function named random that accepts two arguments: minimum and maximum.
function random (minimum, maximum) {

    // Creating variables to hold the min and max values
    let min, max;

    // If we don't have a maximum, set min to 0 and max to minimum
    // Else set min to minimum and max to maximum
    if (maximum === undefined) {
        min = 0;
        max = minimum;
    } else {
        min = minimum;
        max = maximum;
    }
    
    // Return a random integer between min and max (inclusive)
    // Math.random() generates a float between 0 (inclusive) and 1 (exclusive)
    // (max - min + 1) gives us the range from minimum to maximum inclusive
    // In Math.random() * (max - min + 1), we have a float between 0 and (max - min + 1)
    // For example, if min = 10 and max = 20, then (max - min + 1) will be less than or equal to 11
    // Math.floor() will round down to the nearest integer
    // + min means that we will have a number between min and max inclusive
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Creating a test case to verify the function works as expected
const test = random(10, 20);
console.log(test);