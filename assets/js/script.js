// Assignment Code
var generateBtn = document.querySelector("#generate");

var numbers = "0123456789";
var lowerCase ="abcdefghijklmnopqrtsuvwxyz"
var upperCase = lowerCase.toUpperCase()
var special = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~"

var pool = ""
let password =""
let length = 0

function generateLength(){

  length = parseInt(prompt("How long is your password?"))
  
  if(length < 8 || length >128) {
    alert("Please input a number between 8 and 128.")
    generateLength()
  }else{

    generatePassword()
  }
  return password

}

function generatePassword(){

var answerNumbers =confirm("do you want to have numbers?")
if (answerNumbers) {pool += numbers; console.log(pool)}
console.log(pool)
var answerLowercase = confirm("do you want to have lowerCase?")
if (answerLowercase) {pool += lowerCase};
console.log(pool)
var answerUppercase = confirm("do you want to have upperCase?")
if (answerUppercase) {pool += upperCase};
console.log(pool)
var answerSpecial = confirm("do you want to have special characters?")
if (answerSpecial) {pool += special};
console.log(pool)

for (var i =0; i<length; i++){
password += pool[Math.floor(Math.random()*pool.length)]
}


return password

}
// Write password to the #password input
function writePassword() {
  password = generateLength();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

