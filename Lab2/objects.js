// Our test function
function fn () {
    // Creating a constant object
    const constObject = { name: 'ConstantName' };
    // Creating a let object
    let letObject = { name: 'LetName' };
    // Modifying properties of both objects
    constObject.name = 'NewConstantName'; // This is allowed, modifying property of const object
    letObject.name = 'NewLetName'; // This is allowed, modifying property of let object
    // Printing the names to verify changes
    console.log(constObject.name);
    console.log(letObject.name);
    // Attempting to reassign the const object
    constObject = { name: 'AnotherName' }; // This will throw an error
    // Printing the name of constObject after reassignment attempt (to see if it changed)
    // It won`t work due to the error above
    console.log(constObject.name);

}

// Calling the test function
fn();