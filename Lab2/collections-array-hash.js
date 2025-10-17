// Creating an array of objects to represent a phone book
const phoneBook = [
    { name: "Alice", phone: "+380445554433" },
    { name: "Bob", phone: "+380667778899" },
    { name: "Charlie", phone: "+380449998877" },
]

// Function to find a phone number by name
function findPhoneByName(name) {
    // Cycle through the phoneBook array to find the matching name
    for (let i = 0; i < phoneBook.length; i++) {
        // Check if the current object's name matches the input name
        if (phoneBook[i].name === name) {
            return phoneBook[i].phone; // Return the corresponding phone number
        }
    }
    return null; // Return null if the name is not found
}

// Printing results for testing
console.log(findPhoneByName("Bob")); // Output: +380667778899
console.log(findPhoneByName("Eve")); // Output: null





// Creating a hash (object) to represent a phone book
const phoneBookHash = {
    "Alice": "+380445554433",
    "Bob": "+380667778899",
    "Charlie": "+380449998877",
}

// Function to find a phone number by name using the hash
function findPhoneByNameHash(name) {
    const phoneNumber = phoneBookHash[name];
    if (phoneNumber) {
        return phoneNumber; // Return the phone number if found
    }
    return null; // Return null if the name is not found
}

console.log(findPhoneByNameHash("Bob")); // Output: +380667778899
console.log(findPhoneByNameHash("Steve")); // Output: null