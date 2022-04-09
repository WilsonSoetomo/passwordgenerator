// Assignment Code
var generateBtn = document.querySelector("#generate");
//Values of Arrays
const lettersLower = [
"a", 
"b", 
"c", 
"d", 
"e", 
"f", 
"g", 
"h", 
"i", 
"j", 
"k", 
"l", 
"m", 
"n", 
"o", 
"p", 
"q", 
"r", 
"s", 
"t", 
"u", 
"v", 
"w", 
"x", 
"y", 
"z"
]

const lettersUpper = [
  "A", 
  "B", 
  "C", 
  "D", 
  "E", 
  "F", 
  "G", 
  "H", 
  "I", 
  "J", 
  "K", 
  "L", 
  "M", 
  "N", 
  "O", 
  "P", 
  "Q", 
  "R", 
  "S", 
  "T", 
  "U", 
  "V", 
  "W", 
  "X", 
  "Y", 
  "Z"
]

const numbers= [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9"
  ]

const lettersSpecial = [
  "+", 
  "-", 
  "&", 
  "|", 
  "!", 
  "(", 
  ")", 
  "{", 
  "}", 
  "[", 
  "]", 
  "^", 
  "~", 
  "*", 
  "?", 
  ":"
]

function writePassword (){
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  if(password === undefined){
    return
  }
  passwordText.value = password
}
// passValues.lettersLower[1]
function selections(){
  // We want to prompt users to select the characters that will be used in the final password
  // then we will return an object  with all of the  users selections
  let character = parseInt(prompt("How many characters would you like the password? only between 8 - 128"))
  if(Number.isNaN(character)){
    alert("please insert a number! ex. 13")
    return
  }if(character < 8){
    alert("please input a number larger than 7! ex. 8")
    return
  }if(character > 128){
    alert("please input a number smaller than 129! ex. 128")
    return
  }

  let lettersLower = window.confirm("Would you like to use lowercase alphabets?")

  let lettersUpper = window.confirm("Would you like to use Uppercase alphabets?")

  let numbers = window.confirm("would you like to use numbers?")

  let lettersSpecial = window.confirm("would you like to use special characters? ex. ?!@")

  if(!lettersLower && !lettersUpper && !numbers && !lettersSpecial){
    alert("please select at least 1 requirement to make a password!")
  }
  let optionObj = {
    length : character,
    lowerCases : lettersLower,
    upperCases : lettersUpper,
    specialCharacters : lettersSpecial,
    numberz : numbers
  }
  return optionObj
}

// Write password to the #password input
function generatePassword() {
  var options = selections()
  if (options === undefined){
    return
  }
  let {
    length, lowerCases, upperCases, specialCharacters, numberz
  } = options

  let possibleChar = [];

  let generatedPass = [];

  if (lowerCases){
    possibleChar = possibleChar.concat(lettersLower);
  }
  if(upperCases){
    possibleChar = possibleChar.concat(lettersUpper);
  }
  if(specialCharacters){
    possibleChar = possibleChar.concat(lettersSpecial);
  }
  if(numberz){
    possibleChar = possibleChar.concat(numbers);
  }
  for(i = 0; i < length; i++){
    var passRandom = Math.floor(Math.random() * possibleChar.length)
    generatedPass += possibleChar [passRandom]
  }
return generatedPass
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
