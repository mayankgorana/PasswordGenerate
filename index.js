
let passwordBox = document.getElementById("password");

let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerCase = "abcdefghijklmnopqrstuvwxyz";
let number = "0123456789";
let specialCharacter = "!@#$%^&*()-_+={}[]|\\?/";
let allChar = upperCase + lowerCase + number;

function generatePassword() {

    let passwordLength = parseInt(prompt("How much length you want for your password"));
    let specialCount = parseInt(prompt("How many special characters you want"));

    if (specialCount > passwordLength) {
        alert("Special character count cannot exceed the password length.");
        return;
    }

    if (isNaN(passwordLength) || isNaN(specialCount) || passwordLength <= 0 || specialCount < 0) {
        alert("Please enter valid values for password length and special character count.");
        return;
    }

    let password = "";

    for (let i = 0; i < specialCount; i++) {
        password += specialCharacter[Math.floor(Math.random() * specialCharacter.length)];
    }

    while (password.length < passwordLength) {
        password += allChar[Math.floor(Math.random() * allChar.length)];
    }
    password = shufflePassword(password);
    passwordBox.value = password;
}

function shufflePassword(password) {
    let passwordArray = password.split('');
    for (let i = passwordArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [passwordArray[i], passwordArray[j]] = [passwordArray[j], passwordArray[i]];
    }
    return passwordArray.join('');
}


