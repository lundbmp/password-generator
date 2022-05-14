// Assignment code here
/*
generatePassword() will be a function with a return type of string.
  will contain forloop, index will be the length of the desired password
  randomNumber(x,y) will return a number to be added to a string containing unicode prefix
    string will be converted from unicode to the desired character and appended to a string
    string will be returned

need a randomNumber function with min and max perameters.
*/


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
