// Assignment Code
var generateBtn = document.querySelector("#generate");

// A function to get the password
    function getPassword() {
    
// Password variables for allowable passwords characters
    var uppercaseABC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    var lowercaseABC = "abcdefghijklmnopqrstuvwxyz"
    var numeric = "0123456789"
    var symbols = "!@#$%^&*()-=+<>?/|':[]{}"
    var multiSelect = "";
    var randomKey = "";

//Initial prompt to allow end-user to select a password length between 8 to 128 characters long.
    var keyLength = prompt(
        "Your password must be between 8 to 128 characters long, enter your desired number."
    );
    
// Return to window if the selected number is out of range for password criteria
    if (keyLength < 8 || keyLength > 128 || isNaN(keyLength)) {
        alert("Your password does not meet the critia. Password must be between 8 and 128 characters in length. Enter another number.");        
        return;

// Variable Prompts. Once the end user successfully enters a valid numberor value, this prompt will notify them that their password will contain the following characters when the random key is finally generated
    } else {
    var upperAlpha = confirm("Your password will contain a variety of capital letters, click OK to continue");
    var lowerAlpha = confirm("Your password will contain a variety of lowercase letters, click OK to continue");
    var numericOptions = confirm("Your password will contain numbers, click OK to continue");
    var specialSymbols = confirm("Your password will contain a variety of Special Characters, click OK to continue");
    }

    if (upperAlpha) {multiSelect += uppercaseABC;}
    if (lowerAlpha) {multiSelect += lowercaseABC;}
    if (numericOptions) {multiSelect += numeric;}
    if (specialSymbols) {multiSelect += symbols;}

// For loop to repeat if criteria is not met and will end once password is generated. 
    for (i = 0; i < keyLength; i++) {

// Final random password has generated
        randomKey += multiSelect[Math.floor(Math.random() * multiSelect.length)]
    }
    return(randomKey);
}

// Write password to the #password input. The text box area where the newly generated password will appear.
    var passwordText = document.querySelector("#password");
    function writePassword(randomKey) {
    if (password.length === 0) {
        return;
    }
    passwordText.value = randomKey;
}

// Add event listener to generate button. This is a Call To Action (CTA button)
    generateBtn.addEventListener("click", function () { writePassword(getPassword()) });
