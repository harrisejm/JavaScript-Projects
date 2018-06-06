
//

var test = [1, 2, 3, 4, 5];
var index = [];
var num = 2;

for (var i = 0; i < test.length; i++) {
  for (var a = 0; a < test.length; a++) {
    if (test[i] + test[a] === num && i !== a && test[i] ) {
      dict[test[i]] = test[a];
      index.push(" " + test[i] + "+" + test[a]);
   }
  }
}
index.length = index.length/2;
for (var c = 0; c < test.length; c++) {
  if (test[c] + test[c] === num) {
    index.push(" " + test[c] + "+" + test[c]);
  }
}

for (var b = 0; b < test.length; b++) {
  if (test[b] === num) {
    index.push(" " + test[b]);
  }
}
document.getElementById("test").innerHTML = index;

// Object prototype
var arrr = [1, 3, 6, 12, 5, 102];
var arr2 = ["hi", "hello", "what"];
var string = "hello world hello world hi hello";


Object.defineProperty(String.prototype, "open", {get: function() {

var testDic = { };
var arr = [];
var a = this.split(" ");

for (var i = 0; i < a.length; i++) {
  if (testDic[a[i]] === undefined) {
     testDic[a[i]] = 1;
     arr.push(a[i]);
  } else {
     testDic[a[i]] += 1;
  }
}

var index = [];
for (var i = 0; i < arr.length; i++) {
  index.push(" " + arr[i] + " - " + testDic[arr[i]]);
}

return index;
}});

document.getElementById("test").innerHTML = string.open;



var sentance = prompt("Enter Test here");

var upperC = sentance.toUpperCase();
var sentanceL = /[a-z\s]/gi;
var why = upperC.match(sentanceL); //.join("").split(" ");
var test = why.join("").split(" ");

var testDic = {};
var arr = [];


for (var i = 0; i < test.length; i++) {
  if (testDic[test[i]] === undefined) {
    testDic[test[i]] = 1;
    arr.push(test[i]);
  } else {
    testDic[test[i]] += 1;
  }
}

var index = [];
for (var a = 0; a < arr.length; a++) {
  index.push(" " + arr[a] + "-" + testDic[arr[a]] + " ");
}

document.getElementById("test").innerHTML = index;




var fiftyCent = 50;
var quarter = 25;
var dime = 10;
var nickel = 5;
var penny = 1;
var arr = [ ];
function price(amount) {

var coins = [50, 25, 10, 5, 1];
var names = ["Fifty Cent Piece", "Quarter", "Dime", "Nickel", "Penny"];
for (var i = 0; i < coins.length; i++) {
  if (amount === coins[i]) {
    arr.push("1" + " - " + names[i]);
    return;
  }

}

finalAmount = amount
if (amount / fiftyCent > 1) {
  var f = Math.floor(amount / fiftyCent);
  arr.push(f + " - Fifty Cent");
  finalAmount = amount - (f * 50);
}
if (finalAmount / quarter >= 1) {
  var q = Math.floor(finalAmount / quarter);
  arr.push(" " + q + " - Quarter");
  finalAmount = finalAmount - (q * 25);
}
if (finalAmount / dime >= 1) {
  var d = Math.floor(finalAmount / dime);
  arr.push(" " + d + " - Dime");
  finalAmount = finalAmount - (d * 10);
}
if (finalAmount / nickel >= 1) {
  var n = Math.floor(finalAmount / nickel);
  arr.push(" " + n + " - Nickel");
  finalAmount = finalAmount - (n * 5);
}
if (finalAmount !== 0) {
  var p = Math.floor(finalAmount / penny);
  arr.push(" " + p + " - penny");
}


}
price(21);
document.getElementById("test").innerHTML = arr;



function getDate() {

var weekOfA = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
var monthA = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
var today = new Date();
var day = today.getDate();
var weekOf = today.getDay();
var month = today.getMonth();
var year = today.getFullYear();
var hello;
var mon;
for (var i = 0; i < weekOfA.length; i++) {
  for (var a = 0; a < monthA.length; a++){
    hello = weekOfA[weekOf-1];
    mon = monthA[month-1];
  }
}

var time = hello + " " + mon + " " + day + " " + year;

document.getElementById("test").innerHTML = hello + " " + mon + " " + day + " " + year;

}
getDate();

//delete key
var string = "";
var student = {
name : "David Rayy",
sclass : "VI",
rollno : 12
};
var index = "";
document.getElementById("test").innerHTML = "BEFORE" + "</br>";
for (var i in student) {
document.getElementById("test").innerHTML += i + " : " + student[i] + ", " + "</br>";
}
delete student.rollno;
document.getElementById("test").innerHTML += "</br>" + "AFTER" + "</br>";
for (var i in student) {
document.getElementById("test").innerHTML += i + " : " + student[i] + ", " + "</br>";
}

//list all info
var library = [
   {
       author: 'Bill Gates',
       title: 'The Road Ahead',
       readingStatus: true
   },
   {
       author: 'Steve Jobs',
       title: 'Walter Isaacson',
       readingStatus: true
   },
   {
       author: 'Suzanne Collins',
       title:  'Mockingjay: The Final Book of The Hunger Games',
       readingStatus: false
   }];

 var string = "";
 for (var i = 0; i < library.length; i++) {
   for (var a in library[i]) {
     string += a + " : " + library[i][a] + "</br>";
   }
     string += "</br>";
 }
document.getElementById("test").innerHTML = string;

//area of cylinder
function Area(radius, height) {
  this.radius = radius;
  this.height = height;
  this.name = "Eddie";
  this.calcArea = function() {
    return Math.PI * (this.radius * this.radius) * this.height;
  };
}
var test = new Area(5, 5);

document.getElementById("test").innerHTML += "The area of a cylinder with a radius of " + test.radius + " and a height of " + test.height + " is equal to " + test.calcArea().toFixed(4) + "</br>";

//starts with "JAVA"
var y = prompt("Enter sentance here");
var x = y.toLowerCase();

var text = /[a-z]\S*/gi;
var newText = x.match(text);
var win = "\"" + y  + "\"" + "</br>" + "</br>";
for (var i = 0; i < newText.length; i++) {
  test = newText[i].split("");
  if (test.slice(0, 4).join("") === "java") {
    win += newText[i] + "  - true: starts with java" + "</br>";
  } else {
    win += newText[i] + " - false: doesn't start with java" + "</br>";
  }
 }



// if a number is between 40 - 60 or 70 - 90
var num1 = "fgfg";  //prompt("Enter First Number");
var num2 =  34;  // prompt("Enter Second Number");
var output = "";

var arr = [num1, num2];
for (var i = 0; i < arr.length; i++) {
 if (isNaN(parseInt(arr[i])) === false) {

   if ((arr[i] >= 40 && arr[i] <=60) || (arr[i] >= 70 && arr[i] <= 90)) {
     output += arr[i] + " True" + "</br>";
   } else {
     output += arr[i] + " False" + "</br>";
   }

} else {
  output += arr[i] + " False, not a number" + "</br>";
}

}

document.getElementById("test").innerHTML = output;


//Sort

var arr = [10,89,23,203,74,54,123];
//var arr = [10,23,74,54,89,123,203];
//var arr = [10,23,54,89,123,74,203];
//var arr = [10,23,54,89,74,123,203];
//var arr = [10,23,54,74,123,89,203];
//var arr1 = arr;
var test = false;
var testArr = [];
do {
for (var i = 0; i < arr.length; i++) {
  if (arr[i] > arr[i+1]) {
    arr.push(arr.splice(i, 1));
    test = true;
  }
  }
} while (arr[i] > arr[i+1] );


var testArr = [1,2,3,4,5,6];``
//var testArr = [10,89,23,203,74,54,123];
var string = "";

var hello = function() {
if (testArr[i] < testArr[i+1] && testArr[i+1] === undefined) {
  return "hello";
}

for (var i = 0; i < testArr.length; i++) {
  if (testArr[i] < testArr[i+1] && testArr[i+1] !== undefined) {
    string += "In order" + " : " + testArr[i] + " - " + testArr[i+1] + "</br> ";
} else if (testArr[i+1] === undefined) {
    string += "In Order THERE is nother beyond" + " : " + test[i];
} else {
    string += "NOT in order" + " : " + testArr[i] + " - " + testArr[i+1] + "</br>";
}
}
}
hello();
document.getElementById("test").innerHTML = string;
