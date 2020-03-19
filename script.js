// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // GIVEN I need a new, secure password
  // WHEN I click the button to generate a password
  // THEN I am presented with a series of prompts for password criteria

  // Array of password criteria -- each type is its own array
  var passwordCriteria = [
    ["a", "b", "c" , "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
    ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", "{", "}", "[", "]", "|", ":", ";", "<", ">", ",", ".", "?", "/"],
  ]
  
  // WHEN prompted for password criteria
  // THEN I select which criteria to include in the password

  // User's selected criteria
  var userCriteria = [];

  // WHEN prompted for the length of the password
  // THEN I choose a length of at least 8 characters and no more than 128 characters
  var minLength = prompt("How SHORT do you want your password to be? (Please enter a numerical value)");
  minLength = parseInt(minLength);

  var maxLength = prompt("How LONG do you want your password to be? (Please enter a numerical value higher than your previous input)");
  maxLength = parseInt(maxLength);


  // Choose length using user's input for minLength and maxLength
  var passwordLength = Math.floor(Math.random() * (maxLength - minLength) + minLength);

  // WHEN prompted for character types to include in the password
  // THEN I choose lowercase, uppercase, numeric, and/or special characters
  var charTypes = ["lowercase", "uppercase", "numeric", "special characters"];

  // WHEN I answer each prompt
  // THEN my input should be validated and at least one character type should be selected

  // Store boolean values for each charType item -- for example ==> [true, false, true, true]
  var charTypesConfirms = [];

  // Prompts for each charType
  for (var i = 0; i < charTypes.length; i++) {
    var charTypesConfirm = confirm("Do you want to include " + charTypes[i] + " in the password?");
    charTypesConfirms.push(charTypesConfirm);
  }
  
  // Push true charTypes into userCriteria
  for (var i = 0; i < charTypesConfirms.length; i++) {
    if (charTypesConfirms[i]) {
      userCriteria.push(passwordCriteria[i])
    }
  }
  
  // WHEN all prompts are answered
  // THEN a password is generated that matches the selected criteria

  // Create array of randomly chosen chars from user's criteria
  var userPassword = [];
  
  for (var i = 0; i < passwordLength; i++) {
    
    // Go through userCriteria and randomly choose characters
    var arrayTypeRandomNum = Math.floor(Math.random() * userCriteria.length);
    
    var charTypeRandomNum = Math.floor(Math.random() * userCriteria[arrayTypeRandomNum].length);

    var char = userCriteria[arrayTypeRandomNum][charTypeRandomNum];

    userPassword.push(char);
  }

  // Turn userPassword array to a string
  userPassword = userPassword.join("");

  // Return userPassword
  return userPassword;

  // WHEN the password is generated
  // THEN the password is either displayed in an alert or written to the page
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
