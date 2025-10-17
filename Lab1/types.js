// Creating an array with different types of values
// null is considered an object in JavaScript
const array = [3, true, undefined, 'something', false, 42, null];

// Creating an object to hold the counts of each type
const typeCounts = {number: 0, boolean: 0, undefined: 0, string: 0, object: 0};

// Iterate over each value in the array
for (const value of array) {
    // Determine the type of the current value
    const currentType = typeof value;
    // Here we have [] because the name of the property is stored in the variable or it`s result of an expression
    // We increment the count of the current type
    typeCounts[currentType]++;
}

// Display the counts of each type in the console
console.dir(typeCounts);