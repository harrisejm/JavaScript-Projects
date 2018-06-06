
// TEST LINE    document.getElementById("run").innerHTML = calc;

var calc = [];   // to be calculated
var outPut = [];  // to be outputted to sceen

var one = function() {
  calc.push(1);
  outPut.push(1);
  document.getElementById("test").innerHTML = outPut.join("");
  document.getElementById("full").innerHTML = calc; //TEST LINE
}

var two = function() {
  calc.push(2);
  outPut.push(2);
  document.getElementById("test").innerHTML = outPut.join("");
  document.getElementById("full").innerHTML = calc; //TEST LINE
}

var three = function() {
  calc.push(3);
  outPut.push(3);
  document.getElementById("test").innerHTML = outPut.join("");
  document.getElementById("full").innerHTML = calc;  //TEST LINE
}

var four = function() {
  calc.push(4);
  outPut.push(4);
  document.getElementById("test").innerHTML = outPut.join("");
  document.getElementById("full").innerHTML = calc; //TEST LINE
}

var five = function() {
  calc.push(5);
  outPut.push(5);
  document.getElementById("test").innerHTML = outPut.join("");
  document.getElementById("full").innerHTML = calc;   //TEST LINE
}

var six = function() {
  calc.push(6);
  outPut.push(6);
  document.getElementById("test").innerHTML = outPut.join("");
  document.getElementById("full").innerHTML = calc;   //TEST LINE
}

var seven = function() {
  calc.push(7);
  outPut.push(7);
  document.getElementById("test").innerHTML = outPut.join("");
  document.getElementById("full").innerHTML = calc;   //TEST LINE
}

var eight = function() {
  calc.push(8);
  outPut.push(8);
  document.getElementById("test").innerHTML = outPut.join("");
  document.getElementById("full").innerHTML = calc;   //TEST LINE
}

var nine = function() {
  calc.push(9);
  outPut.push(9);
  document.getElementById("test").innerHTML = outPut.join("");
  document.getElementById("full").innerHTML = calc;   //TEST LINE
}

var zero = function() {
  calc.push(0);
  outPut.push(0);
  document.getElementById("test").innerHTML = outPut.join("");
  document.getElementById("full").innerHTML = calc;   //TEST LINE
}

var decimal = function() {
  var joinedIndex = calc.join(" ");
  var joinedIndexOut = outPut.join(" ");
    if (joinedIndex.indexOf(".") === -1) {  // allows ony one decimal to be entered
      calc.push(".");
      outPut.push(".");
      document.getElementById("test").innerHTML = outPut.join("");
      document.getElementById("full").innerHTML = calc;  //TEST LINE

    } else if (joinedIndexOut.indexOf(".") === -1 && calc.indexOf(" ") !== -1) { // test if number has decimal/ 2nd number entered
      calc.push(".");
      outPut.push(".");
      document.getElementById("test").innerHTML = outPut.join("");
      document.getElementById("full").innerHTML = calc;   //TEST LINE
    }
}

var numberForRecall = [];    //save number
var memorySave = function() {
  if (numberForRecall.length > 0) {
    numberForRecall.length = 0;
  }
    numberForRecall.push(outPut.join(""));
    document.getElementById("memory").innerHTML = "SAVED";
  }
  var memoryRecall = function() {
    if (outPut.length > 0) {         //if there r numbers in sceen. remove and replace
      outPut.length = 0;
  }
  if (numberForRecall.length > 0 && calc.indexOf(" ") === -1) {  // first digit entered will be replaced
    calc = numberForRecall.join(" ").split("");
    outPut = numberForRecall.join(" ").split("");
    document.getElementById("test").innerHTML = outPut.join("");
  } else if (numberForRecall.length > 0 && calc.indexOf(" ") !== -1 && outPut.join("") !== numberForRecall.join("")) {  // pushes to the end  if operator was selected
    calc.splice(calc.lastIndexOf(" ")+1, calc.length, numberForRecall);
    outPut.push(numberForRecall.join("").split(" "));
    document.getElementById("test").innerHTML = outPut.join("");
  }

  document.getElementById("full").innerHTML = calc;   //TEST LINE
}

var memoryClear = function() {
  numberForRecall.length = 0;
//  document.getElementById("test").innerHTML = "";
  document.getElementById("memory").innerHTML = "MS"
  document.getElementById("test").innerHTML = outPut.join("");
}

var neg = function() {
  if (calc.indexOf("-") === -1 && calc.indexOf(" ") === -1) {    //toggle between pos/neg
    calc.unshift("-");
    outPut.unshift("-");
    document.getElementById("test").innerHTML = calc.join("");

  } else if (calc.indexOf(" ") !== -1 && outPut[0] !== "-") {
    calc.splice(calc.lastIndexOf(" ")+1, 0, "-");      //add "-" one index after the 2nd " "
    outPut.unshift("-");
    document.getElementById("test").innerHTML = outPut.join("");

  } else if (calc[0] === "-" && calc.indexOf(" ") === -1)  {  // removes "-" at [0]
    calc.shift();
    outPut.shift();
    document.getElementById("test").innerHTML = calc.join("");

  } else if (calc.indexOf("-") !== -1 && calc.indexOf(" ") !== -1) {
    calc.splice(calc.lastIndexOf(" ")+1, 1);    // removes "-" after 2nd " "
    outPut.shift();
    document.getElementById("test").innerHTML = outPut.join("");
  }
    document.getElementById("full").innerHTML = calc;   //TEST LINE
  }

var plus = function() {
  if (calc.length > 0 && calc.indexOf(" ") === -1 || calc[calc.length-1] === " ") {  // adds "+"
    calc.push(" ", "+", " ");    //add spaces so it splits
    outPut.length = 0;
  } else if (calc.length > 0 && calc.indexOf(" ") !== -1 && calc[calc.length-1] !== " ") { //allows u to chain ex: 1+2+3-7*10-2....
    equals();    // if you enter 2nd operation to chain. this will compute the firt two numbers and allow you to compute 3rd number ect..
    calc.push(" ", "+", " ");
    document.getElementById("test").innerHTML = outPut.join("");
    outPut.length = 0;
}
  document.getElementById("full").innerHTML = calc; //TEST LINE
  }

var minus = function() {
  if (calc.length > 0 && calc.indexOf(" ") === -1 || calc[calc.length-1] === " ") {
    calc.push(" ", "-", " ");
    outPut.length = 0;
  } else if (calc.length > 0 && calc.indexOf(" ") !== -1 && calc[calc.length-1] !== " ") {
    equals();
    calc.push(" ", "-", " ");
    document.getElementById("test").innerHTML = outPut.join("");
    outPut.length = 0;
  }
  document.getElementById("full").innerHTML = calc;   //TEST LINE
  }

var multiply = function() {
  if (calc.length > 0 && calc.indexOf(" ") === -1 || calc[calc.length-1] === " ") {
    calc.push(" ", "X", " ");
    outPut.length = 0;
  } else if (calc.length > 0 && calc.indexOf(" ") !== -1 && calc[calc.length-1] !== " ") {
    equals();
    calc.push(" ", "X", " ");
    document.getElementById("test").innerHTML = outPut.join("");
    outPut.length = 0;
  }
  document.getElementById("full").innerHTML = calc;   //TEST LINE
  }

var divide = function() {
  if (calc.length > 0 && calc.indexOf(" ") === -1 || calc[calc.length-1] === " ") {
    calc.push(" ", "/", " ");
    outPut.length = 0;
  } else if (calc.length > 0 && calc.indexOf(" ") !== -1 && calc[calc.length-1] !== " ") {
    equals();
    calc.push(" ", "/", " ");
    document.getElementById("test").innerHTML = outPut.join("");
    outPut.length = 0;
  }
  document.getElementById("full").innerHTML = calc;   //TEST LINE
  }

var equals = function() {
  var stringCalc = calc.join("").trim().split(" ");    /// if buttons are pushed multiple times.
  var singleMath = stringCalc.slice(-2,-1).join("");
  finalCal = [];

 if (singleMath === "+") {   /// if button is pushed more than once. will also compute the orig num w/itself
      var finalOutput = parseFloat(stringCalc[0]) + parseFloat(stringCalc[stringCalc.length-1]);
      finalCal.push(finalOutput);

  } else if (stringCalc[stringCalc.length-1] === "+") {    // if button is pushed once
      var finalOutput = parseFloat(stringCalc[0]) + parseFloat(stringCalc[0]);
      finalCal.push(finalOutput);

  } else if (singleMath === "-") {
      var finalOutput = parseFloat(stringCalc[0]) - parseFloat(stringCalc[stringCalc.length-1]);
      finalCal.push(finalOutput);

  } else if (stringCalc[stringCalc.length-1] === "-") {
      var finalOutput = parseFloat(stringCalc[0]) - parseFloat(stringCalc[0]);
      finalCal.push(finalOutput);

  } else if (singleMath === "X") {
      var finalOutput = parseFloat(stringCalc[0]) * parseFloat(stringCalc[stringCalc.length-1]);
      finalCal.push(finalOutput);

  } else if (stringCalc[stringCalc.length-1] === "X") {
      var finalOutput = parseFloat(stringCalc[0]) * parseFloat(stringCalc[0]);
      finalCal.push(finalOutput);

  } else if (singleMath === "/") {
      var finalOutput = parseFloat(stringCalc[0]) / parseFloat(stringCalc[stringCalc.length-1]);
      finalCal.push(finalOutput);

  } else if (stringCalc[stringCalc.length-1] === "/") {
       var finalOutput = parseFloat(stringCalc[0]) / parseFloat(stringCalc[0]);
       finalCal.push(finalOutput);
  }

  if (finalCal[0] >= 0) {
    calc = [finalCal];   // so you can do additional computation with output value
    outPut = [finalCal];
    document.getElementById("test").innerHTML = outPut.join("");
  } else if (finalCal[0] < 0) {
    calc = ["-", Math.abs(finalCal)];   // if neg    -1  will beome  "-", 1
    outPut = ["-", Math.abs(finalCal)];
    document.getElementById("test").innerHTML = outPut.join("");
  }
  document.getElementById("full").innerHTML = calc;   //TEST LINE
}

var clearX = function() {
  if (calc.length > 0) {
  calc.length = 0;
  outPut.length = 0;
  document.getElementById("test").innerHTML = "";
  }
}

//PRIME NUMBERS


var primeNumberGen = function() {
var endRange = document.getElementById("endRange").value;
var startRange = document.getElementById("startRange").value;
var indexPrime = [];
var check = [];
for (var i = 0; i <= endRange; i++) {
  for (var a = 0; a <= endRange; a++) {
    if (i%a === 0 && i >= startRange) {
      indexPrime.push(i);
    }
  }
}

for (var b = 0; b < indexPrime.length; b++) {
  if (indexPrime[b] === indexPrime[b+1] && indexPrime[b+1] !== indexPrime[b+2] && indexPrime[b] !== indexPrime[b-1]) {
   check.push(indexPrime[b]);
  }
  if (indexPrime[b] !== indexPrime[b+1] && indexPrime[b] !== indexPrime[b-1]) {
  check.push(indexPrime[b]);
  }
}
document.getElementById("primeNumber").innerHTML = check.join(" ");
}
