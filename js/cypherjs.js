var message = prompt("Enter Text below. All messages will be encrypted");

var firstLetter = message.substr(0, 1).toUpperCase();
var lastLetter = message.substr(-1, 1).toUpperCase();
var newString = message.slice(1, - 1);

var cypherText = function(message) {
  alert(firstLetter + lastLetter);
}

var CypherTextSwitch = function(message) {
  alert(lastLetter + firstLetter);
}

var combo = function(message) {
  alert(lastLetter + newString + firstLetter);
}
//combo(message);

//for the backwardText function
var sentanceL = /[a-z]/gi;
var sentanceLength = message.match(sentanceL);
var oneSentance = sentanceLength.join("");
var length = sentanceLength.length;
var half = Math.floor(length / 2);
var newIndex = oneSentance.charAt(half);

var backwardText = function(message) {
  alert(newIndex + message + lastLetter + firstLetter);
}

var reverseSentance = function(message) {
  //reverse every word in the sentance
  var messageIndex = message.split(" "); //converts string to array
  var reverseWords = messageIndex.reverse(); //reverses array
  var newList = reverseWords.join(" "); //converts array back to string
  alert(newList);
}

var testFunction = function() {
  var newText = message.split(" ");
  var newArray = [];
  for (var i = 0; i<newText.length; i++) {
  newArray.push(newText[i].split("").reverse().join(""));
}
alert(newArray.join(" "));
}

//Counts the number of letters
var countLetters = function() {
  alert("There are " + length + " letters");
}

var countWords = function() {
   alert("There are " + newText.length + words);
}
