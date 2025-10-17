// Function declaration that increments a property 'n' of an object by 1
function inc(num) {
    num.n = num.n + 1;
    return num;
}

// Declaration of an object with property 'n'
const number = { n: 1 };

// Call the function to increment the 'n' property of the object
inc(number);

// Display details of all properties of the transferred object
console.dir(number);