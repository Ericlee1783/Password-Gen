// Assignment Code
var LowerCaseLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

var UpperCaseLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

var numbers = [0,1,2,3,4,5,6,7,8,9];

var specialChar = ['!', '@' ,'#' ,'$' ,'%' ,'^' ,'&' ,'*' ,'(' ,')' ,'_' ,'+' ,'[' ,']' ,'{' ,'}' ,'|' ,';', ',' ,':' ,'.' ,'<' ,'>' ,'?' ,'"'];

var allChoices = LowerCaseLetters.concat(UpperCaseLetters, numbers, specialChar);
console.log(allChoices);

var result = "";

var getPasswordOptions = function() {
  var user = window.prompt("How long would you like your password to be?")

    var index = Math.floor(Math.random() * allChoices.length);
    var password = allChoices[index];
}
getPasswordOptions()

// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }
// writePassword()

// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword)