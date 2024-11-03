// Character sets
const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
const numberChars = "0123456789";
const symbolChars = "!@#$%^&*()_+[]{}|;:',.<>?/";

// Generate a random character from a given string
function getRandomCharacter(characters) {
    return characters[Math.floor(Math.random() * characters.length)];
}

// Generate password function
function generatePassword() {
    // Get user input for password length
    const passwordLength = parseInt(document.getElementById('numberInput').value);

    // Determine which character sets to use based on checkboxes
    const useUppercase = document.getElementById('uppercase').checked;
    const useLowercase = document.getElementById('lowercase').checked;
    const useNumbers = document.getElementById('numbers').checked;
    const useSymbols = document.getElementById('symbols').checked;

    // Build a list of all characters to be used for generating the password
    let allCharacters = '';
    if (useUppercase) allCharacters += uppercaseChars;
    if (useLowercase) allCharacters += lowercaseChars;
    if (useNumbers) allCharacters += numberChars;
    if (useSymbols) allCharacters += symbolChars;

    // Check if no character set is selected
    if (allCharacters === '') {
        alert("Please select at least one character type for the password.");
        return;
    }

    // Initialize an empty password
    let password = '';

    // Generate password of desired length using the selected characters
    for (let i = 0; i < passwordLength; i++) {
        password += getRandomCharacter(allCharacters);
    }

    // Display the generated password
    document.getElementById('passtxt').textContent = password;
}

// Function to copy password to clipboard
function copyPassword() {
    const passwordText = document.getElementById('passtxt').textContent;
    if (passwordText === "Click The Button") {
        alert("Please generate a password first!");
        return;
    }
    navigator.clipboard.writeText(passwordText).then(() => {
        alert('Password copied to clipboard!');
    }, () => {
        alert('Failed to copy password.');
    });
}

// Function to save password (could be enhanced based on application needs)
function savePassword() {
    const passwordText = document.getElementById('passtxt').textContent;
    if (passwordText === "Click The Button") {
        alert("Please generate a password first!");
        return;
    }
    alert(`Saving password: ${passwordText}`);
    // Implement actual save logic if needed
}






// let passtxt = document.getElementById("passtxt");

// function rpg() {
//     let pass = "";
//     const alphabet = 'abcdefghijklmnopqrstuvwxyz!@#$%&ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';

//     while (pass.length < 10) {
//         pass += alphabet[Math.floor(Math.random() * 68)];
//     }

//     return pass;
// }

// function gp() {
//     let gp = rpg();
//     passtxt.textContent = gp;
// }

// function copyPassword() {
//     const passText = document.getElementById("passtxt").textContent;

//     if (passText) {
//         const tempInput = document.createElement("input");
//         tempInput.value = passText;

//         document.body.appendChild(tempInput);
//         tempInput.select();
//         document.execCommand("copy");
//         document.body.removeChild(tempInput);

//         alert("Password copied to clipboard!");
//     }
// }
