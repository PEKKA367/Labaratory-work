// Creating an array with different types of values
// null is considered an object in JavaScript
const array = [3, true, undefined, 'something', false, 42, null];

// Creating an object to hold the counts of each type
const typeCounts = {};

// Iterate over each value in the array
for (const value of array) {
    // Determine the type of the current value
    const currentType = typeof value;

    // Creating the property if it does not exist and starting the count at 1
    if (!(currentType in typeCounts)) {
        typeCounts[currentType] = 1;
    } else {
        // Else we increment the count of the current type
        // Here we have [] because the name of the property is stored in the variable or it`s result of an expression
        typeCounts[currentType]++;
    }
}

// Display the counts of each type in the console
console.dir(typeCounts);