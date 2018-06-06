var capitalize = function() {
  var x = document.getElementById("myText").value;
  document.getElementById("originalText").innerHTML = x;
  document.getElementById("newText").innerHTML = x.toUpperCase();
}

var lowCase = function() {
  var x = document.getElementById("myText").value;
  document.getElementById("originalText").innerHTML = x;
  document.getElementById("newText").innerHTML = x.toLowerCase();
}
//reverse letters in each word. Words stay in same position
var reverseLetters = function() {
  var x = document.getElementById("myText").value;
  var newText = x.split(" ");
  var newArray = [];
  for (var i = 0; i<newText.length; i++) {
  newArray.push(newText[i].split("").reverse().join(""));
}
  document.getElementById("originalText").innerHTML = x;
  document.getElementById("newText").innerHTML = newArray.join(" ");
}
//reverse all words, letter do not re
var reverseSentance = function() {
  var x = document.getElementById("myText").value;
  var messageIndex = x.split(" "); //converts string to array
  var reverseWords = messageIndex.reverse(); //reverses array
  var newList = reverseWords.join(" "); //converts array back to string
  document.getElementById("originalText").innerHTML = x;
  document.getElementById("newText").innerHTML = newList;
}
//reverses the first and last letter of each word. The position doesn't change
var reverseFirstLast = function() {
  var x = document.getElementById("myText").value;
  var remove = /\W/g;
  var nonWord = x.match(remove);
  var index = [];
  if (nonWord) {
    for (var i = 0; i < x.length; i++) {              //gets the position of each nonLetter
      for (var v = 0; v < nonWord.length; v++) {
        if (x[i] === nonWord[v]) {
         index.push(i);
        }
      }
    }
    var newRev = x.replace(remove, " ");               //replaces nonLetters with " ".
    var removePunc = newRev.split(" ");
    var newArray = [];
    for (var c = 0; c < removePunc.length; c++) {     //changes first and last
      newArray.push(removePunc[c].substr(-1, 1) + removePunc[c].slice(1, - 1) + removePunc[c].substr(0, 1).substring(0, removePunc[c].length - 1));
    }
    var finalIndex = [];                               //removes dups from index[];
    for (var b = 0; b < index.length; b++) {
      if (index[b] !== index[b+1]) {
        finalIndex.push(index[b]);
      }
    }
    var newNewArray = newArray.join(" ").split("");       //pushes nonWords back into original position
    for (var a = 0; a < finalIndex.length; a++) {
      newNewArray.splice(finalIndex[a], 1, nonWord[a]);
    }
    document.getElementById("originalText").innerHTML = x;
    document.getElementById("newText").innerHTML = newNewArray.join("");
  } else {
  var oneWord = x.split(" ");
  var oneWordArray = [];
  for (var w = 0; w < oneWord.length; w++) {     //changes first and last
    oneWordArray.push(oneWord[w].substr(-1, 1) + oneWord[w].slice(1, - 1) + oneWord[w].substr(0, 1).substring(0, oneWord[w].length - 1));
  }
  document.getElementById("originalText").innerHTML = x;
  document.getElementById("newText").innerHTML = oneWordArray.join("");
  }
}
//counts letters. Does not count numbers(digits) or any other char
var countLetters = function() {
  var x = document.getElementById("myText").value;
  var sentanceL = /[a-z]/gi;
  var sentanceLength = x.match(sentanceL);
  var oneSentance = sentanceLength.join("");
  var length = sentanceLength.length;
  document.getElementById("originalText").innerHTML = x;
  document.getElementById("newText").innerHTML = "Letter Count = " + length;
}
//counts words
var countWords = function() {
  var x = document.getElementById("myText").value;
  var text = /[a-z]\S*/gi;
  var newText = x.match(text);
  var newSentance = newText.length;
  document.getElementById("originalText").innerHTML = x;
  document.getElementById("newText").innerHTML = "Word Count = " + newSentance;
}
//reverse everythinh - letters and words
var reverseComplete = function() {
  var x = document.getElementById("myText").value;
  var newRev = x.split("").reverse().join("");
  document.getElementById("originalText").innerHTML = x;
  document.getElementById("newText").innerHTML = newRev;
}
//counts the number of occurrences of each letter

/*
var testDic = { };
var arr = [];
var string = "Hello world hello you hello";
var lowerCase = string.toLowerCase();
var test = lowerCase.split(" ");

for (var i = 0; i < test.length; i++) {
  var words = test[i];
  if (testDic[test[i]] === undefined) {
     testDic[test[i]] = 1;
     arr.push(test[i]);
  } else {
     testDic[words] = testDic[words] + 1;
  }
}

var index = [];
for (var i = 0; i < arr.length; i++) {
  index.push(" " + arr[i] + " - " + testDic[arr[i]]);
}

document.getElementById("test").innerHTML = index;
*/






var letterOccurrences = function() {
  var x  = document.getElementById("myText").value;
  var text = x.toUpperCase();
  var sentanceL = /[a-z]/gi;
  var newX = text.match(sentanceL).join("").split(" ").join("").split("");
  var index = [];  // index position, multiple entries when there are multiple
  for (var i = 0; i < text.length; i++) {
    for (var v = 0; v < newX.length; v++) {
      if (text[i] === newX[v]) {
       index.push(i);
      }
    }
  }
  var newIndex = [];  // finds letters that repeat
  for (var y = 0; y < index.length; y++) {
     if (index[y] === index[y+1] || index[y] === index[y-1]) {
       newIndex.push(index[y]);
    }
  }
  var oneIndex = [];
  var finalIndex = []; //index position of reoccuring letters
    for (var b = 0; b < newIndex.length; b++) {
      if (newIndex[b] !== newIndex[b+1]) {
      finalIndex.push(newIndex[b]);
      oneIndex.push(text[newIndex[b]]);
     }
   }
  oneIndex.sort(); // all repeated letters in order
  var multiLetter = []; //letters that appear more that once (single words)
  var whatUp = [0]; //added 0 so index counts from 0 to index[0]
    for (var t = 0; t < oneIndex.length; t++) {
     if (oneIndex[t] !== oneIndex[t+1]) {
      whatUp.push(t+1);
      multiLetter.push(oneIndex[t]);
       }
    }
  var hello = oneIndex.join("");
  var letterAppearance = [];
  for (var w = 0; w < whatUp.length; w++) {
    letterAppearance.push(hello.substring(whatUp[w], whatUp[w+1]).length);
  }
  letterAppearance.pop(); // remove 0 we added earlier

  var test = newX.sort();
  var singleLetter = [];
  for (var c = 0; c < test.length; c++) {
    if (test[c] !== test[c+1] && test[c] !== test[c-1]) {
      singleLetter.push(" " + "\"" + test[c] + " - 1" + "\"");
    }
  }
  var finalMulti = [];
    for (var r = 0; r < multiLetter.length; r++) {
      finalMulti.push(" " + "\"" + multiLetter[r] + " - " + letterAppearance[r] + "\"");
    }
  var finalfinal = finalMulti.concat(singleLetter);

  document.getElementById("originalText").innerHTML = x;
  document.getElementById("newText").innerHTML = finalfinal;
}
// counts the number of occurrences of each word
var wordOccurrences = function() {
  var x = document.getElementById("myText").value;
  var text = x.toUpperCase();
  var sentanceL = /[a-z\s]/gi;
  var why = text.match(sentanceL); //.join("").split(" ");
  var newXword = why.join("").split(" ");
  var index = [];  // index position of all words, multiple entries when there are multiple times
  for (var i = 0; i < newXword.length; i++) {
    for (var v = 0; v < newXword.length; v++) {
    if (newXword[i] === newXword[v]) {
       index.push(i);
     }
    }
  }
  var newIndex = [];  // words that repeat more than once
  for (var y = 0; y < index.length; y++) {
    if (index[y] === index[y+1] || index[y] === index[y-1]) {
       newIndex.push(index[y]);
     }
  }
  var oneIndex = []; //words
  var finalIndex = []; //index position of reoccuring letters
    for (var b = 0; b < newIndex.length; b++) {
      if (newIndex[b] !== newIndex[b+1]) {
      finalIndex.push(newIndex[b]);
      oneIndex.push(newXword[newIndex[b]]);
    }
  }
  var sortOneIndex = oneIndex.sort().join(" ").trim().split(" "); // all repeated letters in order
  var multiLetter = [];
  var whatUp = [0]; //added 0 so index counts from 0 to index[0]
    for (var t = 0; t < sortOneIndex .length; t++) {
      if (sortOneIndex[t] !== sortOneIndex [t+1] && sortOneIndex[t] !== "") {
      whatUp.push(t+1);
      multiLetter.push(sortOneIndex[t]);
    }
  }
  var hello = sortOneIndex.join("");
  var letterAppearance = [];
  for (var w = 0; w < whatUp.length-1; w++) { //or add -1
    letterAppearance.push(hello.substring(whatUp[w], whatUp[w+1]).length);
  }
 //letterAppearance.pop(); // remove: use -1 on the loop length
  var test = newXword.sort();
  var singleLetter = []; // lists letters that occur once
  for (var c = 0; c < test.length; c++) {
    if (test[c] !== test[c+1] && test[c] !== test[c-1] && test[c] !== "") {
      singleLetter.push(" " + "\"" + test[c] + " - 1" + "\"");
    }
  }
  var finalMulti = []; //lists letters that occur more than once
    for (var r = 0; r < multiLetter.length; r++) {
      if (letterAppearance[r] !== 0 && multiLetter[r] !== "") {
      finalMulti.push(" " + "\"" + multiLetter[r] + " - " + letterAppearance[r] + "\"");
    }
  }
  var finalfinal = finalMulti.concat(singleLetter);
  document.getElementById("originalText").innerHTML = x;
  document.getElementById("newText").innerHTML = finalfinal;
}
