// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {

  // Array of password criteria -- each type is its own array
  var passwordCriteria = [
    ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
    ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", "{", "}", "[", "]", "|", ":", ";", "<", ">", ",", ".", "?", "/"],
  ]

  // User's selected criteria
  var userCriteria = [];

  // Prompt user for a minimum value for password length
  var minLength = prompt("What's the minimum value for the password?", "Please enter a number.");
  minLength = parseInt(minLength);

  // Only continue when above value is a number greater than 0
  if (minLength > 0) {

    // Prompt user for a maximum value for password length
    var maxLength = prompt("What's the maximum value for the password?", "Please enter a number greater than your previous input.");
    maxLength = parseInt(maxLength);

    // Only continue if the above value is a number greater than the minimum
    if (maxLength > minLength) {
      
      // Randomly choose a value between min and max for password length
      var passwordLength = Math.floor(Math.random() * (maxLength - minLength) + minLength);

      // Create array of character types
      var charTypes = ["lowercase", "uppercase", "numeric", "special characters"];

      // Store boolean values for each charType item based on user's input -- for example ==> [true, false, true, true]
      var charTypesConfirms = [];

      // Prompts for each charType
      for (var i = 0; i < charTypes.length; i++) {
        var charTypesConfirm = confirm("Do you want to include " + charTypes[i] + " in the password?");
        charTypesConfirms.push(charTypesConfirm);
      }

      // Push 'true' charTypes from passwordCriteria into userCriteria array
      for (var i = 0; i < charTypesConfirms.length; i++) {
        if (charTypesConfirms[i]) {
          userCriteria.push(passwordCriteria[i])
        }
      }

      // Create array of randomly chosen chars from user's criteria
      var userPassword = [];

      // Loop through userCriteria array for characters to use for user password
      for (var i = 0; i < passwordLength; i++) {

        // Go through userCriteria and choose a number between 0 and length of the array
        var arrayTypeRandomNum = Math.floor(Math.random() * userCriteria.length);

        // Use above's number to choose another number between 0 and length of the array's array
        var charTypeRandomNum = Math.floor(Math.random() * userCriteria[arrayTypeRandomNum].length);

        // Use above's number to choose a character
        var char = userCriteria[arrayTypeRandomNum][charTypeRandomNum];

        // Push character into userPassword array and start the loop again until passwordLength is reached
        userPassword.push(char);
      }

      // Turn userPassword array to a string
      userPassword = userPassword.join("");

      // Return userPassword
      return userPassword;

    } else if (maxLength == minLength || maxLength < minLength) {
      alert("Please choose a number greater than the minimum.");
      return "Try again!";
    } else {
      alert("Please choose a number.");
      return "Try again!";
    }

  } else if (minLength < 1) {
    alert("Please choose a number greater than 0.");
    return "Try again!";
  } else {
    alert("Please choose a number.");
    return "Try again!";
  }

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
