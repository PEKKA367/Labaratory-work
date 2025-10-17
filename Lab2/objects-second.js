// Create a function that returns an object representing a user with name and city properties.
function createUser(name, city) {
    // Creating the user object
    const user = {
        name: name,
        city: city,
    };
    // Returning the user object
    return user;
}

// Creating a user object for Markus Aurelius
const markusUser = createUser('Markus Aurelius', 'Roma');
// Printing the markusUser object to the console
console.log(markusUser);