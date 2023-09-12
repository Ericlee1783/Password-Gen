// Assignment Code
var LowerCaseLetters = [
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
  "z",
];

var UpperCaseLetters = [
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
  "Z",
];

var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

var specialChar = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "+",
  "[",
  "]",
  "{",
  "}",
  "|",
  ";",
  ",",
  ":",
  ".",
  "<",
  ">",
  "?",
  '"',
];

var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // create an empty array
  var choices = [];

  // ask the user the amount of characters for the password min 8 character max 128 characters
  var user = prompt("How long would you like your password to be?");

  // check if the value is not less than 8 characters or not more than 128 characters
  if (user < 8 || user > 128) {
    alert("Please enter more than 8 characters");
    return;
  }

  // ask the user if they want uppercase, lowercase, special characters, or numbers
  var upCase = confirm("Would you like capital letters?");
  var loCase = confirm("Would you like lower letters?");
  var spChar = confirm("Would you like special characters?");
  var num = confirm("Would you like numbers?");

  // check if at least one character type has been selected
  if (!upCase && !loCase && !spChar && !num) {
    alert("Please at least choose one option");
    return;
  }

  // concat the arrays together if the user selected yes
  if (upCase) {
    choices = choices.concat(UpperCaseLetters);
  }

  if (loCase) {
    choices = choices.concat(LowerCaseLetters);
  }

  if (spChar) {
    choices = choices.concat(specialChar);
  }

  if (num) {
    choices = choices.concat(numbers);
  }

  // now we randomly pick a index out of the choices array. based on the length of the password chosen by tge user
var password = []
  for (var i = 0; i < user; i++ ){
    // create a random function that will return one character from the choice array
    var random = choices[Math.floor(Math.random() * choices.length)] 
    // pushing random characters into password array
    password.push(random)
  }
    // returning characters into a string without commas
  return password.join("")
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
