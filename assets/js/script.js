// Assignment code here
/*

  ***check back and attempt if time:
    *if possible to randomly generate base16 numbers freeing up program memory and better reusability
        -would also better justify randomNumber being a function
    *button to click that will copy to clipboard
  
*/

function generatePassword() {
  let charArray = [];
  let userPassword = "";

  // possible password criteria 
  let lowerCaseCharArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  let upperCaseCharArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  let numberArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  let specialCharArr = ["!", "#", "$", "%", "&", "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_"]; 

  // Prompts user for their desired password length
  let passLenghtInput = prompt("What length password would you like? (8-128 characters long)");
  passLenghtInput = parseInt(passLenghtInput);
  // validates if user selected a number within 8 and 128 inclusive
  if(passLenghtInput >= 8 && passLenghtInput <= 128) {
    passwordLength = passLenghtInput;
  } else {
    alert("this is not a proper input. Try again.");
    throw new Error('This is not a proper input. Try again.');
  }
  
  // code block to prompt user for password criteria. if true concat array to empty charArray
  if(confirm("Would you like lowcase letters in your password?")) { charArray = charArray.concat(lowerCaseCharArr); }
  if(confirm("Would you like upper case letters in your password?")) { charArray = charArray.concat(upperCaseCharArr); }
  if(confirm("Would you like numbers in your password?")) { charArray = charArray.concat(numberArr); }
  if(confirm("would you like special characters in your password? ")) { charArray = charArray.concat(specialCharArr); }

  // error case for if no criteria is selected DO NOT DELETE
  if(charArray.length < 1) { 
    alert("You need to select what characters you want. Try again.");
    throw new Error('You need to select what characters you want. Try again.');
  }

  // constructing the password by randomly selecting from the charArray
  for(let index = 0; index < passwordLength; index++) {
    userPassword += charArray[randomNumber(charArray.length - 1)];
  }
  
  return userPassword;
}

// random number function 0 - max number for redability
function randomNumber(max) {
  return Math.floor(Math.random() * max);
}

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
