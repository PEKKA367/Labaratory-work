// Creating a function that generates a random key of specified length from given characters
function generateKey(length, characters) {

    let word = '';
    // Getting the length of the characters string
    const charactersLength = characters.length;
    
    // Creating a cycle to genereate random letters and form a word
    for (let i = 0; i < length; i++) {

        // Generating a random index from characters string
        const randomIndex = Math.floor(Math.random() * charactersLength);
        
        // Creating our random letter from characters by index
        const randomLetter = characters[randomIndex];

        // Adding random letter to the word
        word += randomLetter;
    }

    return word;

        
}

// Printing the result of the generateKey function to the console
const example = generateKey(10, 'reallylargeword');
console.log(example);

