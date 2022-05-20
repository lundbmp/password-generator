// Assignment code here
/*
generatePassword() will be a function with a return type of string.
  will contain forloop, index will be the length of the desired password
  randomNumber(x,y) will return a number to be added to a string containing unicode prefix
    string will be converted from unicode to the desired character and appended to a string
    string will be returned

  when generatePassword() is called, we need to pompt user with input

need a randomNumber function with min and max perameters.
*/

function generatePassword() {
  let charArray = [];
  let userPassword = "";

  let lowerCaseCharArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  let upperCaseCharArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  let numberArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  let specialCharArr = ["!", "#", "$", "%", "&", "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_"]; 

  let userInputs = {
    promptInputCharLength : function() {
      let charLenghtInput = prompt("What length password would you like? (8-128 characters long)");
      charLenghtInput = parseInt(charLenghtInput);

      if(charLenghtInput >= 8 && charLenghtInput <= 128) {
        userInputs.characterLength = charLenghtInput;
      } else {
        alert("this is not a proper input. Try again.");
        throw new Error('This is not a proper input. Try again.');
      }

      userInputs.lowerCase = confirm("Would you like lowcase letters in your password?");
      userInputs.upperCase = confirm("Would you like upper case letters in your password?");
      userInputs.numbers = confirm("Would you like numbers in your password?");
      userInputs.specialCharacters = confirm("would you like special characters in your password? ");
    }
  }
  userInputs.promptInputCharLength();
  
  if(userInputs.lowerCase) { charArray = charArray.concat(lowerCaseCharArr); }
  if(userInputs.upperCase) { charArray = charArray.concat(upperCaseCharArr); }
  if(userInputs.numbers) { charArray = charArray.concat(numberArr); }
  if(userInputs.specialCharacters) { charArray = charArray.concat(specialCharArr); }

  // error case do not delete
  if(charArray.length < 1) { 
    alert("You need to select what characters you want. Try again.");
    throw new Error('You need to select what characters you want. Try again.');
  }

  for(let index = 0; index < userInputs.characterLength; index++) {
    userPassword += charArray[randomNumber(0, charArray.length - 1)];
  }
  
  return userPassword;
}

function randomNumber(min, max) {
  return Math.floor(Math.random() * max) + min;
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
