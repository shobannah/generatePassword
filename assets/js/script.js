document.querySelector("#generate").addEventListener("click", writePassword);

//Arrays
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var special = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];

// Variable Declaration
var confirmLowercase;
var confirmUppercase;
var confirmNumber;
var confirmSpecial;
var length = "";

//Password Length
function generatePassword() {
  var length = (prompt("How many characters would you like your password to be?"))


  while (length <= 7 || length >= 128) {
      alert("Password must be between 8 - 128 charachters.")
      var length = (prompt("How many characters would you like your password to be?"))
      }
    //Password characters    
    var confirmLowercase = confirm("Include lowercase letters?");
    var confirmUppercase = confirm("Include uppercase letters?");
    var confirmNumber = confirm("Include numbers?");
    var confirmSpecial = confirm("Include special characters?");

      while(confirmLowercase === false && confirmLowercase === false && confirmNumber === false && confirmSpecial === false) {
        alert("You must choose at least 1 charachter.")
        var confirmLowercase = confirm("Include lowercase letters?");
        var confirmUppercase = confirm("Include uppercase letters?");
        var confirmNumber = confirm("Include number?");
        var confirmSpecial = confirm("Include special characters?");
    }

      var characters = []
    
    if (confirmLowercase) {
      characters = characters.concat(lowercase)
    }

    if (confirmUppercase) {
      characters = characters.concat(uppercase)
    }

    if (confirmNumber) {
      characters = characters.concat(number)
    }
  
    if (confirmSpecial) {
      characters = characters.concat(special)
    }

    
      console.log(characters)
     //Loop 
      var randomPassword = ""
      
      for (var i = 0; i < length; i++) {
        randomPassword = randomPassword + characters[Math.floor(Math.random() * characters.length)];
        console.log(randomPassword)
      }
      return randomPassword;

}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


