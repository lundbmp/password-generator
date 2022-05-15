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
  console.log(userInputs.characterLength);
  console.log(userInputs.lowerCase);
  console.log(userInputs.upperCase);
  console.log(userInputs.numbers);
  console.log(userInputs.specialCharacters);
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
