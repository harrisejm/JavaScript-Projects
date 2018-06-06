var number1 = parseInt(prompt("enter number"));
var number2 = parseInt(prompt("enter number"));

var add = function(number1, number2) {
  return number1 + number2;
}

var sub = function(number1, number2) {
   return number1 - number2;
}

var divide = function(number1, number2) {
   return number1 / number2;
}

alert(number1 + " / " + number2 + " = " + divide(number1, number2));
