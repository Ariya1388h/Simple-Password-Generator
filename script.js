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

document.addEventListener("DOMContentLoaded", function() {
  // Create a new GSAP timeline with default settings
  let tl = gsap.timeline({defaults: {duration: 1, ease: "power3.out", autoAlpha: 0}});

  // Animate the "GENERATE PASSWORD" button
  tl.from("#generatebtn", { y: 50 })

    // Animate the "Click The Button" text
    .from("#passtxt", { y: 20 }, "-=0.5")  // Overlap this animation by 0.5 seconds

    // Animate the "COPY" button
    .from("#copybtn", { y: 20 }, "-=0.4")  // Slight overlap with previous animation

    // Animate the "SAVE" button
    .from("#savebtn", { y: 20 }, "-=0.4")  // Slight overlap with previous animation

    // Animate the filters form
    .from("#myForm", { y: 20 }, "+=0.2")  // Slight delay after previous animation

    // Animate the password length input
    .from(".num-input", { x: -20 }, "-=0.8")  // Overlap more to make the animations faster

    // Animate each filter checkbox label
    .from(".filter-input label", { x: -20, stagger: 0.2 }, "-=0.6");  // Slight overlap for staggered effect

  // Function to animate text change
  function animatePasswordText(newText) {
    gsap.to("#passtxt", {
      duration: 0.5,
      autoAlpha: 0,
      onComplete: function() {
        document.getElementById("passtxt").textContent = newText;
        gsap.to("#passtxt", { duration: 0.5, autoAlpha: 1 });
      }
    });
  }

  // Example usage of animatePasswordText function
  function generatePassword() {
    const newPassword = "GeneratedPassword123!";  // Example generated password
    animatePasswordText(newPassword);  // Animate the text change
  }

  // Attach generatePassword to button for demo (you can replace this with your existing function)
  document.getElementById("generatebtn").onclick = generatePassword;
});





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
