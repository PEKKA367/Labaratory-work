// Create a variables using let and const
// I use let for name because the name might change in the future, for example, if I want to add my last name
// I use const for BIRTH_YEAR because it should remain constant
let name = "Illya";
const BIRTH_YEAR = 2007;

// Creating a function that use variable name and show a greeting message in the console
function greeting() {
    console.log("Hello, " + name + "!");
}

// Call the greeting function
greeting();